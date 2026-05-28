/**
 * Core matching engine.
 *
 * Four-tier pipeline:
 *   1. Dictionary lookup    — O(1) Map.get, highest accuracy
 *   2. Pattern matching     — rule-based prefix/suffix/substring rules
 *   3. ML model             — trained character-level MLP (falls back to n-gram)
 *   4. External API         — Genderize.io / NamSor (optional, async, opt-in)
 *
 * The synchronous API (match / matchBatch / analyzeFullName / suggest) uses only
 * Tiers 1–3 and is fully backward-compatible.
 *
 * The async API (matchAsync / matchBatchAsync / analyzeFullNameAsync) adds Tier 4
 * after you call configureTier4(options) once at startup.
 */

'use strict';

const { normalize, tokenize }   = require('./core/normalizer');
const { MASTER, AMBIGUOUS }     = require('./data/index');
const { matchPattern }          = require('./core/pattern-matcher');
const { inferFromNgrams }       = require('./core/ngram');
const { predictML }             = require('./core/ml-model');
const { Trie }                  = require('./core/trie');

// ── Build Trie from master dictionary at startup ─────────────────────────

const TRIE = new Trie();
for (const [name, entry] of MASTER) {
  TRIE.insert(name, entry);
}

// ── Tier 4 singleton (set via configureTier4) ────────────────────────────

/** @type {import('./core/external-api').ExternalApiClient|null} */
let _tier4Client = null;

// ── Internal helpers ─────────────────────────────────────────────────────

/**
 * Look up a single normalized name through all three tiers.
 *
 * @param {string} norm  — normalized name (lowercase, no diacritics)
 * @returns {import('./index').MatchResult}
 */
function _lookup(norm) {
  // ── Tier 1: Dictionary ──────────────────────────────────────────────
  const dictEntry = MASTER.get(norm);
  if (dictEntry) {
    const alternatives = AMBIGUOUS[norm] || [];
    return {
      normalized:   norm,
      gender:       dictEntry.gender,
      ethnicity:    dictEntry.ethnicity,
      confidence:   dictEntry.confidence,
      method:       'dictionary',
      alternatives: alternatives.map((a) => ({
        ethnicity:  a.e,
        gender:     a.g,
        confidence: a.c,
      })),
    };
  }

  // ── Tier 2: Pattern rules ────────────────────────────────────────────
  const patternResult = matchPattern(norm);
  if (patternResult) {
    return {
      normalized:   norm,
      gender:       patternResult.gender,
      ethnicity:    patternResult.ethnicity,
      confidence:   patternResult.confidence,
      method:       'pattern',
      alternatives: [],
    };
  }

  // ── Tier 3a: Trained ML model ────────────────────────────────────────
  const mlResult = predictML(norm);
  if (mlResult) {
    return {
      normalized:   norm,
      gender:       mlResult.gender,
      ethnicity:    mlResult.ethnicity,
      confidence:   mlResult.confidence,
      method:       'ml',
      alternatives: [],
    };
  }

  // ── Tier 3b: N-gram fallback (used when ml-weights.json is absent) ───
  const ngramResult = inferFromNgrams(norm);
  if (ngramResult) {
    return {
      normalized:   norm,
      gender:       ngramResult.gender,
      ethnicity:    ngramResult.ethnicity,
      confidence:   ngramResult.confidence,
      method:       'ngram',
      alternatives: [],
    };
  }

  // ── Unknown ──────────────────────────────────────────────────────────
  return {
    normalized:   norm,
    gender:       null,
    ethnicity:    null,
    confidence:   0,
    method:       'unknown',
    alternatives: [],
  };
}

// ── Public API ───────────────────────────────────────────────────────────

/**
 * Match a single name (first, last, or middle).
 *
 * @param {string} name   — raw name string (any case, diacritics OK)
 * @returns {import('./index').MatchResult}
 */
function match(name) {
  if (typeof name !== 'string' || !name.trim()) {
    return {
      name:         name || '',
      normalized:   '',
      gender:       null,
      ethnicity:    null,
      confidence:   0,
      method:       'unknown',
      alternatives: [],
    };
  }

  // Multi-word input (e.g. 'Elizabeth John') — delegate to analyzeFullName
  // so each token is looked up independently instead of being concatenated.
  if (/\s/.test(name.trim())) {
    const fa       = analyzeFullName(name);
    const dominant = fa.components.reduce(
      (best, c) => (!best || c.confidence > best.confidence ? c : best), null
    );
    return {
      name,
      normalized:   fa.components.map((c) => c.normalized).join(' '),
      gender:       fa.overallGender,
      ethnicity:    fa.overallEthnicity,
      confidence:   fa.confidence,
      method:       dominant ? dominant.method : 'unknown',
      alternatives: [],
    };
  }

  const norm   = normalize(name);
  const result = _lookup(norm);
  return { name, ...result };
}

/**
 * Match multiple names in one call.
 *
 * @param {string[]} names
 * @returns {import('./index').MatchResult[]}
 */
function matchBatch(names) {
  if (!Array.isArray(names)) throw new TypeError('matchBatch expects an array of strings');
  return names.map(match);
}

/**
 * Analyze a full name string (e.g. "Oluwasegun Adeyemi Chukwuemeka") — synchronous.
 * Each space/hyphen-separated token is matched independently;
 * the overall result aggregates across all tokens.
 *
 * @param {string} fullName
 * @returns {import('./index').FullNameAnalysis}
 */
function analyzeFullName(fullName) {
  if (typeof fullName !== 'string' || !fullName.trim()) {
    return {
      fullName:         fullName || '',
      components:       [],
      overallEthnicity: null,
      overallGender:    null,
      confidence:       0,
    };
  }

  const tokens     = tokenize(fullName);
  const components = tokens.map((tok) => {
    const result = _lookup(tok);
    return { name: tok, ...result };
  });

  return _aggregate(fullName, components);
}

// ── Tier 4 configuration ────────────────────────────────────────────────────

/**
 * Configure the optional Tier 4 external API fallback.
 * Call this once at startup before using any *Async functions.
 * Pass `null` (or call with no argument) to disable Tier 4.
 *
 * @param {import('./index').Tier4Config|null} [options]
 *
 * @example
 * // Genderize.io only (free, no key needed):
 * configureTier4({ providers: ['genderize'] });
 *
 * // NamSor only (requires API key):
 * configureTier4({ providers: ['namsor'], namsor: { apiKey: process.env.NAMSOR_KEY } });
 *
 * // Both — try genderize first, fall back to NamSor:
 * configureTier4({
 *   providers: ['genderize', 'namsor'],
 *   namsor: { apiKey: process.env.NAMSOR_KEY },
 *   cache: true,
 *   cacheFile: './.cache/tier4.json',
 *   triggerBelowConfidence: 0.40,
 * });
 *
 * // Disable:
 * configureTier4(null);
 */
function configureTier4(options) {
  if (options == null) {
    _tier4Client = null;
    return;
  }
  const { ExternalApiClient } = require('./core/external-api');
  _tier4Client = new ExternalApiClient(options);
}

// ── Merge helper ────────────────────────────────────────────────────────────

/**
 * Merge a Tier 4 API result into a local-tier result.
 *
 * Rules:
 *   • gender     → use API value when non-null (main Tier 4 signal)
 *   • ethnicity  → keep local value when available; fall back to API value
 *   • confidence → use API confidence
 *   • method     → 'api:genderize' | 'api:namsor'
 *
 * @param {Object} localResult
 * @param {import('./core/external-api').Tier4ApiResult} apiResult
 * @returns {Object}
 */
function _mergeTier4(localResult, apiResult) {
  return {
    ...localResult,
    gender:     apiResult.gender !== null ? apiResult.gender : localResult.gender,
    ethnicity:  localResult.ethnicity || apiResult.ethnicity,
    confidence: apiResult.confidence,
    method:     `api:${apiResult.provider}`,
  };
}

// ── Public async API (Tiers 1–4) ────────────────────────────────────────────

/**
 * Match a single name — asynchronous version that adds Tier 4 external API lookup.
 * Falls back to the synchronous result if Tier 4 is not configured or fails.
 *
 * @param {string} name
 * @returns {Promise<import('./index').MatchResult>}
 *
 * @example
 * configureTier4({ providers: ['genderize'] });
 * const result = await matchAsync('Xylvia');
 * // → { gender: 'F', confidence: 0.87, method: 'api:genderize', ... }
 */
async function matchAsync(name) {
  const syncResult = match(name);

  if (!_tier4Client || !_tier4Client.shouldTrigger(syncResult)) {
    return syncResult;
  }

  const norm = syncResult.normalized;
  if (!norm) return syncResult;

  const apiResult = await _tier4Client.query(norm);
  if (!apiResult) return syncResult;

  return { name, ..._mergeTier4(syncResult, apiResult) };
}

/**
 * Match multiple names — asynchronous version with Tier 4.
 * Only names whose local result triggers Tier 4 will make an API call.
 * Queries run sequentially to respect provider rate limits.
 *
 * @param {string[]} names
 * @returns {Promise<import('./index').MatchResult[]>}
 *
 * @example
 * const results = await matchBatchAsync(['Oluwasegun', 'Xylvia', 'Nbeke']);
 */
async function matchBatchAsync(names) {
  if (!Array.isArray(names)) throw new TypeError('matchBatchAsync expects an array of strings');

  // Sync pass (Tiers 1–3)
  const syncResults = names.map(match);

  if (!_tier4Client) return syncResults;

  // Identify which indices need Tier 4
  const tier4Indices = syncResults
    .map((r, i) => (_tier4Client.shouldTrigger(r) ? i : -1))
    .filter((i) => i !== -1);

  if (tier4Indices.length === 0) return syncResults;

  // Apply Tier 4 sequentially (avoids bursting free-tier rate limit)
  const results = [...syncResults];
  for (const i of tier4Indices) {
    const norm = results[i].normalized;
    if (!norm) continue;
    const apiResult = await _tier4Client.query(norm);
    if (apiResult) {
      results[i] = { name: names[i], ..._mergeTier4(results[i], apiResult) };
    }
  }

  return results;
}

/**
 * Analyze a full name — asynchronous version with Tier 4 applied per-token.
 *
 * @param {string} fullName
 * @returns {Promise<import('./index').FullNameAnalysis>}
 *
 * @example
 * const fa = await analyzeFullNameAsync('Alhaji Musa Xylpha Garba');
 * // → { overallEthnicity: 'Hausa', overallGender: 'M', confidence: ..., components: [...] }
 */
async function analyzeFullNameAsync(fullName) {
  if (typeof fullName !== 'string' || !fullName.trim()) {
    return {
      fullName:         fullName || '',
      components:       [],
      overallEthnicity: null,
      overallGender:    null,
      confidence:       0,
    };
  }

  const tokens = tokenize(fullName);

  // Sync pass (Tiers 1–3)
  let components = tokens.map((tok) => ({ name: tok, ..._lookup(tok) }));

  // Tier 4 pass (sequential)
  if (_tier4Client) {
    for (let i = 0; i < components.length; i++) {
      const comp = components[i];
      if (!_tier4Client.shouldTrigger(comp)) continue;
      const apiResult = await _tier4Client.query(comp.normalized);
      if (apiResult) {
        components[i] = { name: comp.name, ..._mergeTier4(comp, apiResult) };
      }
    }
  }

  return _aggregate(fullName, components);
}

// ── Shared aggregation logic ────────────────────────────────────────────────

/**
 * Aggregate an array of per-token MatchResults into a FullNameAnalysis.
 * Shared by both the sync and async analyzeFullName* paths.
 *
 * @param {string}   fullName
 * @param {Object[]} components
 * @returns {import('./index').FullNameAnalysis}
 */
function _aggregate(fullName, components) {
  // Weighted vote: each component contributes (confidence × weight)
  // Dictionary = 1.0, pattern = 0.8, ml = 0.7, ngram = 0.5, api = 0.7, unknown = 0
  const METHOD_WEIGHT = { dictionary: 1.0, pattern: 0.8, ml: 0.7, ngram: 0.5, unknown: 0 };

  function getWeight(method) {
    if (METHOD_WEIGHT[method] !== undefined) return METHOD_WEIGHT[method];
    if (typeof method === 'string' && method.startsWith('api:')) return 0.7;
    return 0;
  }

  // ── Aggregate ethnicity ──────────────────────────────────────────────
  const ethnicVotes = new Map(); // ethnicity → accumulated weight
  for (const comp of components) {
    if (!comp.ethnicity) continue;
    const w = getWeight(comp.method) * comp.confidence;
    ethnicVotes.set(comp.ethnicity, (ethnicVotes.get(comp.ethnicity) || 0) + w);
  }

  let overallEthnicity = null;
  let topWeight        = 0;
  for (const [eth, w] of ethnicVotes) {
    if (w > topWeight) {
      topWeight        = w;
      overallEthnicity = eth;
    }
  }

  // ── Aggregate gender ─────────────────────────────────────────────────
  const genderVotes = { M: 0, F: 0, U: 0 };
  for (const comp of components) {
    if (!comp.gender) continue;
    const w = getWeight(comp.method) * comp.confidence;
    genderVotes[comp.gender] = (genderVotes[comp.gender] || 0) + w;
  }

  let overallGender   = null;
  const maxGender     = Math.max(genderVotes.M, genderVotes.F, genderVotes.U);
  if (maxGender > 0) {
    // When tied, first token (given name) is the tiebreaker
    const topGenders    = ['M', 'F', 'U'].filter((g) => genderVotes[g] === maxGender);
    if (topGenders.length === 1) {
      overallGender = topGenders[0];
    } else {
      const firstDecider = components.find((c) => topGenders.includes(c.gender));
      overallGender = firstDecider ? firstDecider.gender : topGenders[0];
    }
  }

  // ── Overall confidence ───────────────────────────────────────────────
  const validComps = components.filter((c) => c.confidence > 0);
  const avgConf    = validComps.length
    ? validComps.reduce((s, c) => s + c.confidence, 0) / validComps.length
    : 0;

  return {
    fullName,
    components,
    overallEthnicity,
    overallGender,
    confidence: Math.round(avgConf * 1000) / 1000,
  };
}

/**
 * Return the top-N closest dictionary entries by edit distance (Levenshtein).
 * Useful for "did you mean?" suggestions.
 *
 * @param {string} name
 * @param {number} [topN=5]
 * @returns {Array<{ name: string, distance: number, entry: object }>}
 */
function suggest(name, topN = 5) {
  const norm = normalize(name);
  if (!norm) return [];

  // Candidates = all dict entries within length ±3 of the query
  const minLen = Math.max(1, norm.length - 3);
  const maxLen = norm.length + 3;

  const candidates = [];
  for (const [dictName, entry] of MASTER) {
    if (dictName.length < minLen || dictName.length > maxLen) continue;
    candidates.push({ name: dictName, entry });
  }

  // Compute Levenshtein distance
  function lev(a, b) {
    const dp = Array.from({ length: a.length + 1 }, (_, i) =>
      Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
    );
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        dp[i][j] = a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
    return dp[a.length][b.length];
  }

  return candidates
    .map(({ name: n, entry }) => ({ name: n, distance: lev(norm, n), entry }))
    .sort((a, b) => {
      if (a.distance !== b.distance) return a.distance - b.distance;
      // Tiebreak: prefer higher confidence (longer/more specific names first)
      return b.entry.confidence - a.entry.confidence;
    })
    .slice(0, topN);
}

module.exports = {
  // Sync (Tiers 1–3)
  match,
  matchBatch,
  analyzeFullName,
  suggest,
  // Async (Tiers 1–4)
  matchAsync,
  matchBatchAsync,
  analyzeFullNameAsync,
  // Tier 4 setup
  configureTier4,
};

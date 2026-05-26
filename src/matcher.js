/**
 * Core matching engine.
 *
 * Three-tier pipeline:
 *   1. Dictionary lookup    — O(1) Map.get, highest accuracy
 *   2. Pattern matching     — rule-based prefix/suffix/substring rules
 *   3. N-gram inference     — character-level similarity, lowest confidence
 *
 * Each tier returns a { ethnicity, gender, confidence } triple.
 * The result is enriched with metadata and returned to the caller.
 */

'use strict';

const { normalize, tokenize }   = require('./core/normalizer');
const { MASTER, AMBIGUOUS }     = require('./data/index');
const { matchPattern }          = require('./core/pattern-matcher');
const { inferFromNgrams }       = require('./core/ngram');
const { Trie }                  = require('./core/trie');

// ── Build Trie from master dictionary at startup ─────────────────────────

const TRIE = new Trie();
for (const [name, entry] of MASTER) {
  TRIE.insert(name, entry);
}

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

  // ── Tier 3: N-gram inference ─────────────────────────────────────────
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
 * Analyze a full name string (e.g. "Oluwasegun Adeyemi Chukwuemeka").
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

  // ── Aggregate ethnicity across components ────────────────────────────
  // Weighted vote: each component contributes (confidence × weight)
  // Dictionary results carry full weight; pattern = 0.8; ngram = 0.5
  const METHOD_WEIGHT = { dictionary: 1.0, pattern: 0.8, ngram: 0.5, unknown: 0 };
  const ethnicVotes   = new Map(); // ethnicity → accumulated weight

  for (const comp of components) {
    if (!comp.ethnicity) continue;
    const w = METHOD_WEIGHT[comp.method] * comp.confidence;
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

  // ── Aggregate gender across components ───────────────────────────────
  const genderVotes = { M: 0, F: 0, U: 0 };
  for (const comp of components) {
    if (!comp.gender) continue;
    const w = METHOD_WEIGHT[comp.method] * comp.confidence;
    genderVotes[comp.gender] = (genderVotes[comp.gender] || 0) + w;
  }
  let overallGender = null;
  const maxGender = Math.max(genderVotes.M, genderVotes.F, genderVotes.U);
  if (maxGender > 0) {
    if (genderVotes.M === maxGender) overallGender = 'M';
    else if (genderVotes.F === maxGender) overallGender = 'F';
    else overallGender = 'U';
  }

  // ── Overall confidence ───────────────────────────────────────────────
  const validComps = components.filter((c) => c.confidence > 0);
  const avgConf = validComps.length
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

module.exports = { match, matchBatch, analyzeFullName, suggest };

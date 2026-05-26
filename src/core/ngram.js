/**
 * Character N-gram analyzer — Tier 3 fallback.
 *
 * Builds frequency profiles of bigrams + trigrams from each ethnic
 * dictionary at startup, then uses cosine similarity to guess the
 * ethnicity of completely unknown names.
 *
 * This is the slowest tier but handles invented names, rare names,
 * or transcription variants not in the dictionary or pattern rules.
 */

'use strict';

const { MASTER } = require('../data/index');

// ── N-gram helpers ─────────────────────────────────────────────────────────

/**
 * Extract bigrams and trigrams from a word.
 * @param {string} word — normalized
 * @returns {string[]}
 */
function getNgrams(word) {
  const grams = [];
  // Pad word with boundary markers
  const padded = `^${word}$`;
  for (let n = 2; n <= 3; n++) {
    for (let i = 0; i <= padded.length - n; i++) {
      grams.push(padded.slice(i, i + n));
    }
  }
  return grams;
}

/**
 * Build a frequency vector from a list of n-grams.
 * @param {string[]} grams
 * @returns {Map<string, number>}
 */
function buildVector(grams) {
  const vec = new Map();
  for (const g of grams) {
    vec.set(g, (vec.get(g) || 0) + 1);
  }
  return vec;
}

/**
 * Cosine similarity between two frequency Maps.
 * @param {Map<string, number>} a
 * @param {Map<string, number>} b
 * @returns {number} — 0.0 to 1.0
 */
function cosineSimilarity(a, b) {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (const [key, val] of a) {
    normA += val * val;
    if (b.has(key)) dot += val * b.get(key);
  }
  for (const [, val] of b) {
    normB += val * val;
  }

  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

// ── Build ethnic n-gram profiles at module load time ──────────────────────

/** @type {Map<string, Map<string, number>>} ethnicity → n-gram frequency vector */
const PROFILES = new Map();

/** @type {Map<string, {M: number, F: number, U: number}>} ethnicity → gender counts */
const GENDER_DIST = new Map();

function _buildProfiles() {
  const gramCollections = new Map();  // ethnicity → string[]
  const genderCollections = new Map(); // ethnicity → {M,F,U}

  for (const [name, entry] of MASTER) {
    const eth = entry.ethnicity;
    if (!gramCollections.has(eth)) {
      gramCollections.set(eth, []);
      genderCollections.set(eth, { M: 0, F: 0, U: 0 });
    }
    gramCollections.get(eth).push(...getNgrams(name));
    const gd = genderCollections.get(eth);
    gd[entry.gender] = (gd[entry.gender] || 0) + 1;
  }

  for (const [eth, grams] of gramCollections) {
    PROFILES.set(eth, buildVector(grams));
  }
  for (const [eth, dist] of genderCollections) {
    GENDER_DIST.set(eth, dist);
  }
}

_buildProfiles();

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Infer ethnicity and gender from character n-grams.
 *
 * @param {string} name  — normalized
 * @returns {{ ethnicity: string, gender: string, confidence: number } | null}
 */
function inferFromNgrams(name) {
  if (!name || name.length < 3) return null;

  const queryVec = buildVector(getNgrams(name));
  let bestEthnicity = null;
  let bestScore = 0;

  for (const [eth, profile] of PROFILES) {
    const score = cosineSimilarity(queryVec, profile);
    if (score > bestScore) {
      bestScore = score;
      bestEthnicity = eth;
    }
  }

  if (!bestEthnicity || bestScore < 0.10) return null;

  // Infer gender from majority in that ethnicity
  const dist = GENDER_DIST.get(bestEthnicity) || { M: 0, F: 0, U: 0 };
  const total = dist.M + dist.F + dist.U;
  let gender = 'U';
  if (total > 0) {
    if (dist.M >= dist.F && dist.M >= dist.U) gender = 'M';
    else if (dist.F >= dist.M && dist.F >= dist.U) gender = 'F';
  }

  // Cap n-gram confidence — this is always a weaker signal
  const confidence = Math.min(bestScore * 0.65, 0.55);

  return { ethnicity: bestEthnicity, gender, confidence };
}

module.exports = { inferFromNgrams, getNgrams };

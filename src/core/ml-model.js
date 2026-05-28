/**
 * Tier 3 — Trained MLP inference engine (v2)
 *
 * Loads pre-trained weights from ml-weights.json and runs a forward pass
 * to predict ethnicity + gender for any normalized name.
 *
 * Pure JavaScript — no TensorFlow.js, Brain.js, or any runtime dependency.
 * Retrain at any time with: npm run train
 *
 * Feature vector (7 groups, ~357 dims):
 *   [0..199]   Character n-grams  (bigrams + trigrams, L2 normalised)
 *   [200..225] Char frequency     (letter freq per char, normalised)
 *   [226..251] First-char one-hot (which letter starts the name)
 *   [252..277] Last-char one-hot  (which letter ends the name)
 *   [278..317] Prefix pairs       (first-2-char vocab, binary)
 *   [318..357] Suffix pairs       (last-2-char vocab, binary)
 *   [358..372] Phonetic flags     (gb/kw/gw/nw/ch/sh/ts clusters, length, vowel ratio…)
 *
 * Confidence ceiling: 0.72 (above n-gram ≤ 0.55, below pattern ≥ 0.60)
 */

'use strict';

// ── Singleton model ────────────────────────────────────────────────────────────
let _m = null;

function _load() {
  if (_m !== null) return _m;
  try {
    const raw = require('./ml-weights.json');
    _m = {
      ...raw,
      vocabMap  : new Map(Object.entries(raw.vocab).map(([k, v])       => [k, +v])),
      prefixMap : new Map(Object.entries(raw.prefixVocab).map(([k, v]) => [k, +v])),
      suffixMap : new Map(Object.entries(raw.suffixVocab).map(([k, v]) => [k, +v])),
      // Pre-convert weight arrays to typed Float64 for fast arithmetic
      W1: new Float64Array(raw.W1), b1: new Float64Array(raw.b1),
      W2: new Float64Array(raw.W2), b2: new Float64Array(raw.b2),
      We: new Float64Array(raw.We), be: new Float64Array(raw.be),
      Wg: new Float64Array(raw.Wg), bg: new Float64Array(raw.bg),
    };
  } catch (_) {
    _m = false; // weights file absent — caller falls back to n-gram
  }
  return _m;
}

// ── Feature extraction (must exactly match scripts/train-model.js) ─────────────
const VOWELS = new Set('aeiou');

function _ngrams(name) {
  const s = `^${name}$`;
  const out = [];
  for (let i = 0; i < s.length - 1; i++) out.push(s.slice(i, i + 2));
  for (let i = 0; i < s.length - 2; i++) out.push(s.slice(i, i + 3));
  return out;
}

function _extractFeatures(name, m) {
  const { meta, vocabMap, prefixMap, suffixMap } = m;
  const { ngramSize, prefixSize, suffixSize, structSize, totalFeatures } = meta;

  const len = name.length || 1;
  const out = new Float64Array(totalFeatures);
  let offset = 0;

  // Group 1 — character n-grams
  for (const g of _ngrams(name)) {
    const i = vocabMap.get(g);
    if (i !== undefined) out[offset + i]++;
  }
  let norm = 0;
  for (let i = 0; i < ngramSize; i++) norm += out[offset + i] ** 2;
  norm = Math.sqrt(norm) || 1;
  for (let i = 0; i < ngramSize; i++) out[offset + i] /= norm;
  offset += ngramSize;

  // Group 2 — character unigram frequency
  for (const c of name) {
    const ci = c.charCodeAt(0) - 97;
    if (ci >= 0 && ci < 26) out[offset + ci] += 1 / len;
  }
  offset += 26;

  // Group 3 — first-char one-hot
  {
    const ci = name[0].charCodeAt(0) - 97;
    if (ci >= 0 && ci < 26) out[offset + ci] = 1;
  }
  offset += 26;

  // Group 4 — last-char one-hot
  {
    const ci = name[len - 1].charCodeAt(0) - 97;
    if (ci >= 0 && ci < 26) out[offset + ci] = 1;
  }
  offset += 26;

  // Group 5 — prefix pair
  if (len >= 2) {
    const pi = prefixMap.get(name.slice(0, 2));
    if (pi !== undefined) out[offset + pi] = 1;
  }
  offset += prefixSize;

  // Group 6 — suffix pair
  if (len >= 2) {
    const si = suffixMap.get(name.slice(-2));
    if (si !== undefined) out[offset + si] = 1;
  }
  offset += suffixSize;

  // Group 7 — structural / phonetic flags
  const vowelCount = [...name].filter(c => VOWELS.has(c)).length;
  out[offset +  0] = Math.min(len / 20, 1);
  out[offset +  1] = vowelCount / len;
  out[offset +  2] = VOWELS.has(name[0])       ? 1 : 0;
  out[offset +  3] = VOWELS.has(name[len - 1]) ? 1 : 0;
  out[offset +  4] = name.includes('gb')        ? 1 : 0;
  out[offset +  5] = name.includes('kw')        ? 1 : 0;
  out[offset +  6] = name.includes('gw')        ? 1 : 0;
  out[offset +  7] = name.includes('nw')        ? 1 : 0;
  out[offset +  8] = name.includes('ch')        ? 1 : 0;
  out[offset +  9] = name.includes('sh')        ? 1 : 0;
  out[offset + 10] = name.includes('ts')        ? 1 : 0;
  out[offset + 11] = /(.)\1/.test(name)         ? 1 : 0;
  out[offset + 12] = /[aeiou]{2}/.test(name)    ? 1 : 0;
  out[offset + 13] = name.includes('uw') || name.includes('ow') ? 1 : 0;
  out[offset + 14] = len > 9                    ? 1 : 0;

  return out;
}

// ── Math helpers ───────────────────────────────────────────────────────────────
function _mv(W, x, rows, cols) {
  const out = new Float64Array(rows);
  for (let r = 0; r < rows; r++) {
    let s = 0;
    const base = r * cols;
    for (let c = 0; c < cols; c++) s += W[base + c] * x[c];
    out[r] = s;
  }
  return out;
}

function _add(a, b) {
  const o = new Float64Array(a.length);
  for (let i = 0; i < a.length; i++) o[i] = a[i] + b[i];
  return o;
}

function _relu(x) {
  const o = new Float64Array(x.length);
  for (let i = 0; i < x.length; i++) o[i] = x[i] > 0 ? x[i] : 0;
  return o;
}

function _softmax(x) {
  let mx = -Infinity;
  for (const v of x) if (v > mx) mx = v;
  const o = new Float64Array(x.length);
  let s = 0;
  for (let i = 0; i < x.length; i++) { o[i] = Math.exp(x[i] - mx); s += o[i]; }
  for (let i = 0; i < x.length; i++) o[i] /= s;
  return o;
}

// ── Public API ─────────────────────────────────────────────────────────────────

/**
 * Maximum confidence the ML model will ever return.
 * Sits above the n-gram ceiling (0.55) but below most pattern rules (0.60–0.98)
 * and well below dictionary results (0.75–1.00).
 */
const ML_CONF_CAP = 0.72;
const ML_CONF_MIN = 0.10;

/**
 * Predict ethnicity and gender from a normalized name.
 *
 * @param {string} norm  — lowercase, no diacritics
 * @returns {{ gender: string, ethnicity: string, confidence: number } | null}
 */
function predictML(norm) {
  if (!norm || norm.length < 2) return null;

  const m = _load();
  if (!m) return null; // weights file absent

  const { meta, ethnicities, genders, W1, b1, W2, b2, We, be, Wg, bg } = m;
  const { hidden1, hidden2, nEth, nGen, totalFeatures } = meta;

  const x  = _extractFeatures(norm, m);
  const h1 = _relu(_add(_mv(W1, x,  hidden1, totalFeatures), b1));
  const h2 = _relu(_add(_mv(W2, h1, hidden2, hidden1),       b2));
  const pE = _softmax(_add(_mv(We, h2, nEth, hidden2),       be));
  const pG = _softmax(_add(_mv(Wg, h2, nGen, hidden2),       bg));

  let maxE = 0, bestE = 0;
  for (let i = 0; i < nEth; i++) if (pE[i] > maxE) { maxE = pE[i]; bestE = i; }

  let maxG = 0, bestG = 0;
  for (let i = 0; i < nGen; i++) if (pG[i] > maxG) { maxG = pG[i]; bestG = i; }

  // Confidence: harmonic mean of both head probs, capped
  const conf = Math.min(
    (2 * maxE * maxG) / (maxE + maxG + 1e-12),
    ML_CONF_CAP
  );
  if (conf < ML_CONF_MIN) return null;

  return {
    ethnicity:  ethnicities[bestE],
    gender:     genders[bestG],
    confidence: Math.round(conf * 1000) / 1000,
  };
}

module.exports = { predictML };

/**
 * scripts/train-model.js
 *
 * Trains a character-level MLP on the Nigerian names dictionary and writes
 * the learned weights to src/core/ml-weights.json.
 *
 * Pure JavaScript — no TensorFlow.js, Brain.js, or any other dependency.
 * Run: node scripts/train-model.js     (or: npm run train)
 *
 * ── Feature vector (7 groups, ~357 dims) ──────────────────────────────────
 *
 *  Group 1 · Character n-grams     [200]  bigrams + trigrams, L2-normalised
 *  Group 2 · Char-frequency        [26]   letter freq per char, normalised
 *  Group 3 · First-char one-hot    [26]   which letter starts the name
 *  Group 4 · Last-char one-hot     [26]   which letter ends the name
 *  Group 5 · Prefix pairs          [40]   first-2-char vocab, binary
 *  Group 6 · Suffix pairs          [40]   last-2-char vocab, binary
 *  Group 7 · Phonetic flags        [15]
 *              length/20, vowel-ratio, starts-vowel, ends-vowel,
 *              has-gb (Yoruba), has-kw (Igbo), has-gw, has-nw (Igbo),
 *              has-ch, has-sh (Hausa), has-ts (Hausa/Kanuri),
 *              doubled-letter, adjacent-vowels, uw/ow-pattern, len>9
 *
 * ── Network architecture ──────────────────────────────────────────────────
 *
 *   Input(~357) → Dense(64,ReLU) → Dense(32,ReLU) → [Eth-head | Gen-head]
 *
 * ── Training ──────────────────────────────────────────────────────────────
 *
 *   Loss      : weighted cross-entropy  (60% ethnicity + 40% gender)
 *   Optimizer : Adam  (lr=0.003, β1=0.9, β2=0.999)
 *   Reg       : L2 weight decay (λ=1e-4)
 *   Epochs    : 400, batch size 32
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const { MASTER } = require('../src/data/index');

// ── Hyperparameters ────────────────────────────────────────────────────────────
const NGRAM_SIZE  = 200;
const PREFIX_SIZE = 40;
const SUFFIX_SIZE = 40;
const STRUCT_SIZE = 15;
const HIDDEN1     = 64;
const HIDDEN2     = 32;
const EPOCHS      = 400;
const BATCH_SIZE  = 32;
const LR          = 0.003;
const L2_REG      = 1e-4;
const ETH_WEIGHT  = 0.60;
const GEN_WEIGHT  = 0.40;
const MIN_SUPPORT = 5;

const TOTAL_FEATURES = NGRAM_SIZE + 26 + 26 + 26 + PREFIX_SIZE + SUFFIX_SIZE + STRUCT_SIZE;

// ── Ethnicity classes ──────────────────────────────────────────────────────────
function buildEthClasses() {
  const counts = new Map();
  for (const [, e] of MASTER) {
    const eth = e.ethnicity || 'Other';
    counts.set(eth, (counts.get(eth) || 0) + 1);
  }
  return [...counts.entries()]
    .filter(([, c]) => c >= MIN_SUPPORT)
    .sort((a, b) => b[1] - a[1])
    .map(([e]) => e);
}

const ETHNICITIES = buildEthClasses();
const GENDERS     = ['M', 'F', 'U'];
const nEth        = ETHNICITIES.length;
const nGen        = GENDERS.length;

function normaliseEth(eth) {
  return ETHNICITIES.includes(eth) ? eth : 'Other';
}

// ── Vocabulary builders ────────────────────────────────────────────────────────
const VOWELS = new Set('aeiou');

function ngramsOf(name) {
  const s = `^${name}$`;
  const out = [];
  for (let i = 0; i < s.length - 1; i++) out.push(s.slice(i, i + 2));
  for (let i = 0; i < s.length - 2; i++) out.push(s.slice(i, i + 3));
  return out;
}

function buildVocab(names, getTokens, maxSize) {
  const counts = new Map();
  for (const n of names) {
    for (const tok of getTokens(n)) counts.set(tok, (counts.get(tok) || 0) + 1);
  }
  return new Map(
    [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, maxSize)
      .map(([tok], i) => [tok, i])
  );
}

const allNames  = [...MASTER.keys()];
const vocab     = buildVocab(allNames, ngramsOf,               NGRAM_SIZE);
const prefixVoc = buildVocab(allNames, n => [n.slice(0, 2)],   PREFIX_SIZE);
const suffixVoc = buildVocab(allNames, n => [n.slice(-2)],     SUFFIX_SIZE);

// ── Feature extraction ─────────────────────────────────────────────────────────
function extractFeatures(name) {
  const len = name.length || 1;
  const out = new Float64Array(TOTAL_FEATURES);
  let offset = 0;

  // Group 1 — character n-grams
  for (const g of ngramsOf(name)) {
    const i = vocab.get(g);
    if (i !== undefined) out[offset + i]++;
  }
  let norm = 0;
  for (let i = 0; i < NGRAM_SIZE; i++) norm += out[offset + i] ** 2;
  norm = Math.sqrt(norm) || 1;
  for (let i = 0; i < NGRAM_SIZE; i++) out[offset + i] /= norm;
  offset += NGRAM_SIZE;

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
    const pi = prefixVoc.get(name.slice(0, 2));
    if (pi !== undefined) out[offset + pi] = 1;
  }
  offset += PREFIX_SIZE;

  // Group 6 — suffix pair
  if (len >= 2) {
    const si = suffixVoc.get(name.slice(-2));
    if (si !== undefined) out[offset + si] = 1;
  }
  offset += SUFFIX_SIZE;

  // Group 7 — structural / phonetic flags
  const vowelCount = [...name].filter(c => VOWELS.has(c)).length;
  out[offset +  0] = Math.min(len / 20, 1);
  out[offset +  1] = vowelCount / len;
  out[offset +  2] = VOWELS.has(name[0])        ? 1 : 0;
  out[offset +  3] = VOWELS.has(name[len - 1])  ? 1 : 0;
  out[offset +  4] = name.includes('gb')         ? 1 : 0; // Yoruba
  out[offset +  5] = name.includes('kw')         ? 1 : 0; // Igbo
  out[offset +  6] = name.includes('gw')         ? 1 : 0; // Igbo/Urhobo
  out[offset +  7] = name.includes('nw')         ? 1 : 0; // Igbo
  out[offset +  8] = name.includes('ch')         ? 1 : 0; // Igbo/Christian
  out[offset +  9] = name.includes('sh')         ? 1 : 0; // Hausa
  out[offset + 10] = name.includes('ts')         ? 1 : 0; // Hausa/Kanuri
  out[offset + 11] = /(.)\1/.test(name)          ? 1 : 0; // doubled letter
  out[offset + 12] = /[aeiou]{2}/.test(name)     ? 1 : 0; // adjacent vowels
  out[offset + 13] = name.includes('uw') || name.includes('ow') ? 1 : 0; // Yoruba
  out[offset + 14] = len > 9                     ? 1 : 0; // compound name

  return out;
}

// ── Build dataset ──────────────────────────────────────────────────────────────
const dataset = [];
for (const [name, entry] of MASTER) {
  const ethIdx = ETHNICITIES.indexOf(normaliseEth(entry.ethnicity));
  const genIdx = GENDERS.indexOf(entry.gender);
  if (ethIdx === -1 || genIdx === -1) continue;
  dataset.push({ x: extractFeatures(name), ethIdx, genIdx });
}

console.log('─────────────────────────────────────────────────────────────');
console.log('  Nigerian Names MLP — v2 Trainer');
console.log('─────────────────────────────────────────────────────────────');
console.log(`  Samples      : ${dataset.length}`);
console.log(`  Features     : ${TOTAL_FEATURES}  (ngrams:${NGRAM_SIZE} + charfreq:26 + first:26 + last:26 + prefix:${PREFIX_SIZE} + suffix:${SUFFIX_SIZE} + phonetic:${STRUCT_SIZE})`);
console.log(`  Ethnicities  : ${nEth}  →  ${ETHNICITIES.join(', ')}`);
console.log(`  Architecture : ${TOTAL_FEATURES} → ${HIDDEN1} → ${HIDDEN2} → [${nEth} | ${nGen}]`);
console.log('─────────────────────────────────────────────────────────────\n');

// ── Math helpers ───────────────────────────────────────────────────────────────
const FEAT = TOTAL_FEATURES;
const zeros = (n) => new Float64Array(n);

function xavier(inDim, outDim) {
  const std = Math.sqrt(2 / inDim);
  const arr = new Float64Array(inDim * outDim);
  for (let i = 0; i < arr.length; i++) {
    const u = Math.max(1e-12, Math.random());
    const v = Math.random();
    arr[i] = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * std;
  }
  return arr;
}

function matvec(W, x, rows, cols) {
  const out = new Float64Array(rows);
  for (let r = 0; r < rows; r++) {
    let s = 0;
    const base = r * cols;
    for (let c = 0; c < cols; c++) s += W[base + c] * x[c];
    out[r] = s;
  }
  return out;
}

function addv(a, b) {
  const out = new Float64Array(a.length);
  for (let i = 0; i < a.length; i++) out[i] = a[i] + b[i];
  return out;
}

function relu(x) {
  const o = new Float64Array(x.length);
  for (let i = 0; i < x.length; i++) o[i] = x[i] > 0 ? x[i] : 0;
  return o;
}

function softmax(x) {
  let mx = -Infinity;
  for (const v of x) if (v > mx) mx = v;
  const o = new Float64Array(x.length);
  let s = 0;
  for (let i = 0; i < x.length; i++) { o[i] = Math.exp(x[i] - mx); s += o[i]; }
  for (let i = 0; i < x.length; i++) o[i] /= s;
  return o;
}

// ── Parameters ─────────────────────────────────────────────────────────────────
const P = {
  W1: xavier(FEAT,   HIDDEN1), b1: zeros(HIDDEN1),
  W2: xavier(HIDDEN1, HIDDEN2), b2: zeros(HIDDEN2),
  We: xavier(HIDDEN2, nEth),   be: zeros(nEth),
  Wg: xavier(HIDDEN2, nGen),   bg: zeros(nGen),
};

const Mm = {}, Vv = {};
for (const k of Object.keys(P)) { Mm[k] = new Float64Array(P[k].length); Vv[k] = new Float64Array(P[k].length); }
let t = 0;

// ── Forward pass ───────────────────────────────────────────────────────────────
function fwd(x) {
  const z1 = addv(matvec(P.W1, x,  HIDDEN1, FEAT),    P.b1);
  const h1 = relu(z1);
  const z2 = addv(matvec(P.W2, h1, HIDDEN2, HIDDEN1), P.b2);
  const h2 = relu(z2);
  return {
    z1, h1, z2, h2,
    pE: softmax(addv(matvec(P.We, h2, nEth, HIDDEN2), P.be)),
    pG: softmax(addv(matvec(P.Wg, h2, nGen, HIDDEN2), P.bg)),
  };
}

// ── Backward pass ──────────────────────────────────────────────────────────────
function bwd(x, fw, ei, gi) {
  const { z1, h1, z2, h2, pE, pG } = fw;

  const dE = new Float64Array(pE); dE[ei] -= 1;
  const dG = new Float64Array(pG); dG[gi] -= 1;
  for (let i = 0; i < dE.length; i++) dE[i] *= ETH_WEIGHT;
  for (let i = 0; i < dG.length; i++) dG[i] *= GEN_WEIGHT;

  const gWe = new Float64Array(HIDDEN2 * nEth);
  for (let r = 0; r < nEth; r++) for (let c = 0; c < HIDDEN2; c++) gWe[r*HIDDEN2+c] = dE[r]*h2[c];
  const gbe = new Float64Array(dE);

  const gWg = new Float64Array(HIDDEN2 * nGen);
  for (let r = 0; r < nGen; r++) for (let c = 0; c < HIDDEN2; c++) gWg[r*HIDDEN2+c] = dG[r]*h2[c];
  const gbg = new Float64Array(dG);

  const dh2 = new Float64Array(HIDDEN2);
  for (let c = 0; c < HIDDEN2; c++) {
    for (let r = 0; r < nEth; r++) dh2[c] += P.We[r*HIDDEN2+c] * dE[r];
    for (let r = 0; r < nGen; r++) dh2[c] += P.Wg[r*HIDDEN2+c] * dG[r];
  }

  const dz2 = new Float64Array(HIDDEN2);
  for (let i = 0; i < HIDDEN2; i++) dz2[i] = z2[i] > 0 ? dh2[i] : 0;

  const gW2 = new Float64Array(HIDDEN1 * HIDDEN2);
  for (let r = 0; r < HIDDEN2; r++) for (let c = 0; c < HIDDEN1; c++) gW2[r*HIDDEN1+c] = dz2[r]*h1[c];
  const gb2 = new Float64Array(dz2);

  const dh1 = new Float64Array(HIDDEN1);
  for (let c = 0; c < HIDDEN1; c++) for (let r = 0; r < HIDDEN2; r++) dh1[c] += P.W2[r*HIDDEN1+c]*dz2[r];

  const dz1 = new Float64Array(HIDDEN1);
  for (let i = 0; i < HIDDEN1; i++) dz1[i] = z1[i] > 0 ? dh1[i] : 0;

  const gW1 = new Float64Array(FEAT * HIDDEN1);
  for (let r = 0; r < HIDDEN1; r++) for (let c = 0; c < FEAT; c++) gW1[r*FEAT+c] = dz1[r]*x[c];
  const gb1 = new Float64Array(dz1);

  return { gW1, gb1, gW2, gb2, gWe, gbe, gWg, gbg };
}

// ── Adam update ────────────────────────────────────────────────────────────────
const B1 = 0.9, B2 = 0.999, EPS = 1e-8;
const KEYS = ['W1','b1','W2','b2','We','be','Wg','bg'];

function adamStep(grads) {
  t++;
  const bc1 = 1 - B1 ** t;
  const bc2 = 1 - B2 ** t;
  for (const k of KEYS) {
    const g = grads[`g${k}`], p = P[k], m = Mm[k], v = Vv[k];
    for (let i = 0; i < p.length; i++) {
      const gi = g[i] + L2_REG * p[i];
      m[i] = B1 * m[i] + (1 - B1) * gi;
      v[i] = B2 * v[i] + (1 - B2) * gi * gi;
      p[i] -= LR * (m[i] / bc1) / (Math.sqrt(v[i] / bc2) + EPS);
    }
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function zeroAccum() {
  return {
    gW1: new Float64Array(FEAT*HIDDEN1),    gb1: new Float64Array(HIDDEN1),
    gW2: new Float64Array(HIDDEN1*HIDDEN2), gb2: new Float64Array(HIDDEN2),
    gWe: new Float64Array(HIDDEN2*nEth),    gbe: new Float64Array(nEth),
    gWg: new Float64Array(HIDDEN2*nGen),    gbg: new Float64Array(nGen),
  };
}

const ACCKEYS = KEYS.map(k => `g${k}`);

function accuracy() {
  let cE = 0, cG = 0;
  for (const { x, ethIdx, genIdx } of dataset) {
    const { pE, pG } = fwd(x);
    let mE = 0, bE = 0; for (let i = 0; i < nEth; i++) if (pE[i] > mE) { mE = pE[i]; bE = i; }
    let mG = 0, bG = 0; for (let i = 0; i < nGen; i++) if (pG[i] > mG) { mG = pG[i]; bG = i; }
    if (bE === ethIdx) cE++;
    if (bG === genIdx) cG++;
  }
  return [cE / dataset.length, cG / dataset.length];
}

// ── Training loop ──────────────────────────────────────────────────────────────
for (let ep = 1; ep <= EPOCHS; ep++) {
  shuffle(dataset);
  let loss = 0;

  for (let b = 0; b < dataset.length; b += BATCH_SIZE) {
    const batch = dataset.slice(b, b + BATCH_SIZE);
    const acc   = zeroAccum();
    const sz    = batch.length;

    for (const { x, ethIdx: ei, genIdx: gi } of batch) {
      const fw = fwd(x);
      loss += ETH_WEIGHT * (-Math.log(Math.max(fw.pE[ei], 1e-15)))
            + GEN_WEIGHT * (-Math.log(Math.max(fw.pG[gi], 1e-15)));
      const g = bwd(x, fw, ei, gi);
      for (const k of ACCKEYS) {
        for (let i = 0; i < acc[k].length; i++) acc[k][i] += g[k][i] / sz;
      }
    }
    adamStep(acc);
  }

  if (ep === 1 || ep % 50 === 0) {
    const [eA, gA] = accuracy();
    console.log(
      `  Epoch ${String(ep).padStart(3)} / ${EPOCHS}` +
      `   loss=${(loss / dataset.length).toFixed(4)}` +
      `   eth_acc=${(eA * 100).toFixed(1)}%` +
      `   gen_acc=${(gA * 100).toFixed(1)}%`
    );
  }
}

// ── Save weights ───────────────────────────────────────────────────────────────
const [eA, gA] = accuracy();

const r5 = (arr) => Array.from(arr).map(v => Math.round(v * 1e5) / 1e5);

const model = {
  meta: {
    trainedOn    : new Date().toISOString().slice(0, 10),
    version      : 2,
    samples      : dataset.length,
    totalFeatures: TOTAL_FEATURES,
    ngramSize    : NGRAM_SIZE,
    prefixSize   : PREFIX_SIZE,
    suffixSize   : SUFFIX_SIZE,
    structSize   : STRUCT_SIZE,
    hidden1      : HIDDEN1,
    hidden2      : HIDDEN2,
    nEth,
    nGen,
    trainAccEth  : +eA.toFixed(4),
    trainAccGen  : +gA.toFixed(4),
  },
  ethnicities : ETHNICITIES,
  genders     : GENDERS,
  vocab       : Object.fromEntries(vocab),
  prefixVocab : Object.fromEntries(prefixVoc),
  suffixVocab : Object.fromEntries(suffixVoc),
  W1: r5(P.W1), b1: r5(P.b1),
  W2: r5(P.W2), b2: r5(P.b2),
  We: r5(P.We), be: r5(P.be),
  Wg: r5(P.Wg), bg: r5(P.bg),
};

const outPath = path.join(__dirname, '../src/core/ml-weights.json');
fs.writeFileSync(outPath, JSON.stringify(model));

const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
console.log('\n─────────────────────────────────────────────────────────────');
console.log('  Final training accuracy');
console.log(`    Ethnicity : ${(eA * 100).toFixed(1)}%`);
console.log(`    Gender    : ${(gA * 100).toFixed(1)}%`);
console.log(`  Weights saved → ${outPath}  (${kb} KB)`);
console.log('─────────────────────────────────────────────────────────────\n');

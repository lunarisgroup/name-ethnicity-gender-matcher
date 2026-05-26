/**
 * Performance benchmark.
 * Run: node test/benchmark.js
 */

'use strict';

const { match, matchBatch, analyzeFullName } = require('../src/index');

const NAMES = [
  'Oluwasegun', 'Chioma', 'Abubakar', 'Bassey', 'Tonye',
  'Adeyemi', 'Chukwuemeka', 'Ibrahim', 'Inyang', 'Rukevwe',
  'Mwuese', 'Shettima', 'Oluwatobiloba', 'Ikechukwu', 'Hauwa',
  'Kehinde', 'Adekunle', 'Ngozi', 'Garba', 'Ekanem',
  // Pattern-matched (not in dictionary)
  'Oluwakayode', 'Chibuogwu', 'Terungwa', 'Oghenekpevi', 'Akintomide',
];

const ITERATIONS = 10_000;

// ── Single match benchmark ────────────────────────────────────────────────
console.log('\n── Single match ────────────────────────────────────');
const t1 = Date.now();
for (let i = 0; i < ITERATIONS; i++) {
  const name = NAMES[i % NAMES.length];
  match(name);
}
const t1ms = Date.now() - t1;
console.log(`${ITERATIONS.toLocaleString()} single matches: ${t1ms}ms`);
console.log(`Per match: ${(t1ms / ITERATIONS * 1000).toFixed(2)} µs`);

// ── Batch match benchmark ─────────────────────────────────────────────────
console.log('\n── Batch match ─────────────────────────────────────');
const BATCH = Array.from({ length: 100 }, (_, i) => NAMES[i % NAMES.length]);
const BATCH_ITERS = 1_000;
const t2 = Date.now();
for (let i = 0; i < BATCH_ITERS; i++) {
  matchBatch(BATCH);
}
const t2ms = Date.now() - t2;
console.log(`${BATCH_ITERS.toLocaleString()} × ${BATCH.length}-name batches: ${t2ms}ms`);
console.log(`Per name: ${(t2ms / (BATCH_ITERS * BATCH.length) * 1000).toFixed(2)} µs`);

// ── Full name analysis benchmark ──────────────────────────────────────────
console.log('\n── Full name analysis ──────────────────────────────');
const FULL_NAMES = [
  'Oluwasegun Adeyemi Babatunde',
  'Chukwuemeka Okafor Obiora',
  'Alhaji Musa Usman Garba',
  'Bassey Inyang Edet',
];
const t3 = Date.now();
for (let i = 0; i < ITERATIONS; i++) {
  analyzeFullName(FULL_NAMES[i % FULL_NAMES.length]);
}
const t3ms = Date.now() - t3;
console.log(`${ITERATIONS.toLocaleString()} full-name analyses: ${t3ms}ms`);
console.log(`Per analysis: ${(t3ms / ITERATIONS * 1000).toFixed(2)} µs`);

// ── Dictionary size ───────────────────────────────────────────────────────
const { dictionary } = require('../src/index');
console.log(`\n── Dictionary ──────────────────────────────────────`);
console.log(`Total entries: ${dictionary.size.toLocaleString()}`);
const ethnicities = new Map();
for (const [, v] of dictionary) {
  ethnicities.set(v.ethnicity, (ethnicities.get(v.ethnicity) || 0) + 1);
}
for (const [eth, count] of [...ethnicities].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${eth.padEnd(16)} ${count} names`);
}

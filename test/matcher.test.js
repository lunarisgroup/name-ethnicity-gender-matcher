/**
 * Test suite for nigerian-names-predictor
 * Pure Node.js — no external test runner needed.
 * Run with:  node test/matcher.test.js
 */

'use strict';

const { match, matchBatch, analyzeFullName, suggest } = require('../src/index');

// ── Minimal assertion helpers ─────────────────────────────────────────────

let passed = 0;
let failed = 0;

function assert(cond, label) {
  if (cond) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.error(`  ✗ ${label}`);
    failed++;
  }
}

function assertEquals(a, b, label) {
  assert(a === b, `${label} (got: ${JSON.stringify(a)}, want: ${JSON.stringify(b)})`);
}

function assertGte(a, b, label) {
  assert(a >= b, `${label} (got: ${a} ≥ ${b})`);
}

function section(name) {
  console.log(`\n${'─'.repeat(60)}`);
  console.log(`  ${name}`);
  console.log('─'.repeat(60));
}

// ══════════════════════════════════════════════════════════════
//  1. Dictionary lookups — Tier 1
// ══════════════════════════════════════════════════════════════
section('1 · Dictionary Lookups');

// Yoruba
let r = match('Oluwasegun');
assertEquals(r.ethnicity,  'Yoruba',     'Oluwasegun → Yoruba');
assertEquals(r.gender,     'M',          'Oluwasegun → Male');
assertEquals(r.method,     'dictionary', 'Oluwasegun → dictionary method');
assertGte(r.confidence,     0.9,         'Oluwasegun → confidence ≥ 0.9');

r = match('Chioma');
assertEquals(r.ethnicity, 'Igbo', 'Chioma → Igbo');
assertEquals(r.gender,    'F',    'Chioma → Female');

r = match('Abubakar');
assertEquals(r.ethnicity, 'Hausa', 'Abubakar → Hausa');
assertEquals(r.gender,    'M',     'Abubakar → Male');

r = match('Bassey');
assertEquals(r.ethnicity, 'Efik', 'Bassey → Efik');

r = match('Tonye');
assertEquals(r.ethnicity, 'Ijaw', 'Tonye → Ijaw');

r = match('Osagie');
assertEquals(r.ethnicity, 'Edo', 'Osagie → Edo');

r = match('Rukevwe');
assertEquals(r.ethnicity, 'Urhobo', 'Rukevwe → Urhobo');

r = match('Mwuese');
assertEquals(r.ethnicity, 'Tiv', 'Mwuese → Tiv');

r = match('Shettima');
assertEquals(r.ethnicity, 'Kanuri', 'Shettima → Kanuri');

// Case insensitivity
r = match('BABATUNDE');
assertEquals(r.ethnicity, 'Yoruba', 'BABATUNDE (uppercase) → Yoruba');

r = match('chukwuemeka');
assertEquals(r.ethnicity, 'Igbo',  'chukwuemeka (lowercase) → Igbo');

// Unisex
r = match('taiwo');
assertEquals(r.gender,    'U',     'taiwo → Unisex');
assertEquals(r.ethnicity, 'Yoruba', 'taiwo → Yoruba');

// ══════════════════════════════════════════════════════════════
//  2. Pattern matching — Tier 2
// ══════════════════════════════════════════════════════════════
section('2 · Pattern Matching (names NOT in dictionary)');

// Yoruba patterns
r = match('Oluwakayode');  // not in dict but has "oluwa" prefix
assertEquals(r.ethnicity, 'Yoruba', 'Oluwakayode → Yoruba (oluwa prefix)');
assertGte(r.confidence, 0.85, 'Oluwakayode → confidence ≥ 0.85');
assertEquals(r.method, 'pattern', 'Oluwakayode → pattern method');

r = match('Akintomide');   // akin prefix
assertEquals(r.ethnicity, 'Yoruba', 'Akintomide → Yoruba (akin prefix)');

r = match('Gbengason');    // gbenga substring
assertEquals(r.ethnicity, 'Yoruba', 'Gbengason → Yoruba (gbenga substring)');

// Igbo patterns
r = match('Chibuogwu');    // chi prefix
assertEquals(r.ethnicity, 'Igbo', 'Chibuogwu → Igbo (chi prefix)');

r = match('Okechukwueze'); // chukwu substring
assertEquals(r.ethnicity, 'Igbo', 'Okechukwueze → Igbo (chukwu substring)');

r = match('Nnamdieze');    // nna prefix
assertEquals(r.ethnicity, 'Igbo', 'Nnamdieze → Igbo (nna prefix)');

// Urhobo pattern
r = match('Oghenekpevi');  // oghene prefix
assertEquals(r.ethnicity, 'Urhobo', 'Oghenekpevi → Urhobo (oghene prefix)');

// Tiv pattern
r = match('Terungwa');     // ter prefix
assertEquals(r.ethnicity, 'Tiv', 'Terungwa → Tiv (ter prefix)');

// ══════════════════════════════════════════════════════════════
//  3. Full name analysis
// ══════════════════════════════════════════════════════════════
section('3 · Full Name Analysis');

let fa = analyzeFullName('Oluwasegun Adeyemi');
assertEquals(fa.overallEthnicity, 'Yoruba', 'Oluwasegun Adeyemi → Yoruba');
assertEquals(fa.overallGender,    'M',      'Oluwasegun Adeyemi → Male');
assert(fa.components.length === 2,           'Oluwasegun Adeyemi → 2 components');

fa = analyzeFullName('Abubakar Musa Garba');
assertEquals(fa.overallEthnicity, 'Hausa', 'Abubakar Musa Garba → Hausa');
assertEquals(fa.overallGender,    'M',     'Abubakar Musa Garba → Male');

fa = analyzeFullName('Chidinma Okafor');
assertEquals(fa.overallEthnicity, 'Igbo', 'Chidinma Okafor → Igbo');
assertEquals(fa.overallGender,    'F',    'Chidinma Okafor → Female');

// Title stripping
fa = analyzeFullName('Alhaji Musa Usman');
assertEquals(fa.overallEthnicity, 'Hausa', 'Alhaji Musa Usman → Hausa (title stripped)');

// ══════════════════════════════════════════════════════════════
//  4. Batch processing
// ══════════════════════════════════════════════════════════════
section('4 · Batch Processing');

const batch = matchBatch(['Oluwasegun', 'Chioma', 'Abubakar', 'Bassey', 'Ibinabo']);
assert(batch.length === 5,                'batch returns 5 results');
assertEquals(batch[0].ethnicity, 'Yoruba', 'batch[0] → Yoruba');
assertEquals(batch[1].ethnicity, 'Igbo',   'batch[1] → Igbo');
assertEquals(batch[2].ethnicity, 'Hausa',  'batch[2] → Hausa');
assertEquals(batch[3].ethnicity, 'Efik',   'batch[3] → Efik');
assertEquals(batch[4].ethnicity, 'Ijaw',   'batch[4] → Ijaw');

// ══════════════════════════════════════════════════════════════
//  5. Suggest / fuzzy matching
// ══════════════════════════════════════════════════════════════
section('5 · Suggestions (fuzzy)');

const suggestions = suggest('Oluwasegn');  // missing final 'u'
assert(suggestions.length > 0, 'suggest returns results for near-miss');
// oluwasegun should appear in top 2 results (ties on edit-distance are broken by confidence)
const suggestNames = suggestions.slice(0, 2).map((s) => s.name);
assert(
  suggestNames.includes('oluwasegun'),
  `suggest top-2 contains 'oluwasegun' (got [${suggestNames.join(', ')}])`
);

// ══════════════════════════════════════════════════════════════
//  6. Edge cases
// ══════════════════════════════════════════════════════════════
section('6 · Edge Cases');

r = match('');
assertEquals(r.ethnicity, null, 'empty string → null ethnicity');

r = match('   ');
assertEquals(r.ethnicity, null, 'whitespace → null ethnicity');

r = match('John');
assertEquals(r.method, 'unknown', 'generic English name → unknown method');

r = match('Ọlụwasẹgun'); // Yoruba with dot-below letters
assertEquals(r.ethnicity, 'Yoruba', 'Ọlụwasẹgun (with diacritics) → Yoruba');

// ══════════════════════════════════════════════════════════════
//  Summary
// ══════════════════════════════════════════════════════════════
console.log(`\n${'═'.repeat(60)}`);
console.log(`  Results: ${passed} passed, ${failed} failed`);
console.log('═'.repeat(60));

if (failed > 0) process.exit(1);

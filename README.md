# name-ethnicity-gender-matcher

> Fast, accurate Nigerian name matcher — given any first, last, or middle name, returns the **gender**, **ethnicity**, and a **confidence score**. Works offline; an optional async Tier 4 API fallback catches anything that slips through.

---

## Highlights

| | |
|---|---|
| 📚 **868 curated names** | Yoruba, Igbo, Hausa, Efik, Ijaw, Edo, Urhobo, Tiv, Kanuri + 11 more groups |
| ⚡ **~2.6 µs per lookup** | Plain `Map` lookup — faster than a database round-trip |
| 🔗 **Zero dependencies** | Pure Node.js, no `npm install` overhead |
| 🧠 **4-tier fallback** | Dictionary → Pattern rules → N-gram → Genderize.io / NamSor |
| 🏷️ **TypeScript ready** | Ships with `index.d.ts` type declarations |
| ✅ **48 tests** | Run `npm test` to verify everything works |

---

## Installation

### Option A — Local (from folder)

```bash
npm install C:\Users\venso\Desktop\etj\predictor_lib
```

### Option B — From GitHub

```bash
# Always latest:
npm install github:lunarisgroup/name-ethnicity-gender-matcher

# Pinned to a stable release (recommended for production):
npm install github:lunarisgroup/name-ethnicity-gender-matcher#v1.0.0
```

---

## Quick start

```js
const { match, matchBatch, analyzeFullName, suggest } = require('name-ethnicity-gender-matcher');

// ── Single name ───────────────────────────────────────────────
match('Oluwasegun');
// {
//   name:         'Oluwasegun',
//   normalized:   'oluwasegun',
//   gender:       'M',
//   ethnicity:    'Yoruba',
//   confidence:   1,
//   method:       'dictionary',
//   alternatives: []
// }

match('Chioma');     // { gender: 'F', ethnicity: 'Igbo',  confidence: 1 }
match('Hauwa');      // { gender: 'F', ethnicity: 'Hausa', confidence: 1 }
match('Sebastine');  // { gender: 'M', ethnicity: 'Other', confidence: 0.9 }

// ── Multi-word input is handled correctly ─────────────────────
match('Elizabeth John');
// { gender: 'F', ethnicity: 'Other', confidence: 0.9, method: 'dictionary' }
// (each token is matched independently — no concatenation)

// ── Names not in dictionary — matched by pattern rules ────────
match('Oluwakayode'); // { gender: 'U', ethnicity: 'Yoruba', confidence: 0.96, method: 'pattern' }
match('Chibuogwu');   // { gender: 'M', ethnicity: 'Igbo',   confidence: 0.95, method: 'pattern' }

// ── Batch — match multiple names at once ──────────────────────
matchBatch(['Abubakar', 'Ngozi', 'Mwuese', 'Tonye', 'Shettima']);
// → Array of MatchResult objects, one per name

// ── Full name — first + middle + last ─────────────────────────
analyzeFullName('Alhaji Musa Usman Garba');
// {
//   overallEthnicity: 'Hausa',
//   overallGender:    'M',
//   confidence:       0.97,
//   components:       [ ...per-token results... ]
// }

analyzeFullName('Chidinma Adaeze Okafor');
// { overallEthnicity: 'Igbo', overallGender: 'F', confidence: 1 }

// Gender tie-break: when votes are equal, the first (given) name decides
analyzeFullName('Ruth John');
// { overallGender: 'F', ... }   ← Ruth is first

analyzeFullName('John Ruth');
// { overallGender: 'M', ... }   ← John is first

// ── Fuzzy suggest — "did you mean?" for typos ────────────────
suggest('Oluwasegn');
// [{ name: 'oluwasegun', distance: 1, entry: { gender: 'M', ethnicity: 'Yoruba' } }, ...]
```

---

## Tier 4 — Async API (Genderize.io / NamSor)

For names that are too rare or foreign for the local tiers to resolve, the library can fall back to an external API. **Opt-in only — the sync API is unchanged.**

```js
const { configureTier4, matchAsync, matchBatchAsync, analyzeFullNameAsync } =
  require('name-ethnicity-gender-matcher');

// ── Setup (call once at startup) ──────────────────────────────
configureTier4({ providers: ['genderize'] });   // free, no key needed
// configureTier4({ providers: ['namsor'], namsor: { apiKey: process.env.NAMSOR_KEY } });
// configureTier4(null);  // disable

// ── Single name (async) ───────────────────────────────────────
const result = await matchAsync('SomeRareName');
// If local tiers can't resolve it, Genderize.io is queried:
// { gender: 'F', confidence: 0.87, method: 'api:genderize', ... }

// Known names are NOT sent to the API (zero extra latency):
await matchAsync('Chioma');
// { gender: 'F', ethnicity: 'Igbo', confidence: 1, method: 'dictionary' }

// ── Batch (async) — only unknown names trigger API calls ──────
const results = await matchBatchAsync(['Oluwasegun', 'Xylpha', 'Nbeke']);
// Oluwasegun → dictionary  (no API call)
// Xylpha     → api:genderize
// Nbeke      → api:genderize

// ── Full name (async) ─────────────────────────────────────────
const fa = await analyzeFullNameAsync('Musa Xylpha Garba');
// Tier 4 applied per-token, only where needed
```

### `configureTier4` options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `providers` | `string \| string[]` | `'genderize'` | Provider order: `'genderize'`, `'namsor'`, or both |
| `genderize.countryId` | `string` | `'NG'` | ISO country code sent to Genderize.io |
| `genderize.timeout` | `number` | `5000` | Request timeout in ms |
| `namsor.apiKey` | `string` | — | **Required** when using NamSor |
| `namsor.timeout` | `number` | `5000` | Request timeout in ms |
| `cache` | `boolean` | `true` | Cache results in memory |
| `cacheFile` | `string` | — | Path to JSON file for persistent cache |
| `triggerOnUnknown` | `boolean` | `true` | Call API when local result is `method: 'unknown'` |
| `triggerBelowConfidence` | `number` | `0` | Also call API when confidence is below this threshold |

---

## Ethnic groups covered

| Ethnicity      | Names | Key identifiers |
|----------------|-------|-----------------|
| **Yoruba**     | 196   | `Oluwa-`, `Ade-`, `Akin-`, `Anu-`, `-tunde`, `-wale`, `-bayo`, `-seun` |
| **Igbo**       | 122   | `Chi-`, `Chukwu-`, `Ada-`, `Obi-`, `Nna-`, `Eze-`, `Ugo-` |
| **Other**      | 111   | Cross-ethnic Christian/Biblical names (Ruth, John, Grace, Sebastine…) |
| **Hausa**      | 104   | Arabic-origin Islamic names, `Dan-`, calendar names (Laraba, Talatu) |
| **Efik/Ibibio**| 59    | Bassey, Okon, Akpan, Inyang, Mfon, Uduak, Ekanem |
| **Edo (Bini)** | 54    | `Osa-`, `Omor-`, `Ehi-`, Itohan, Esosa, Etinosa |
| **Tiv**        | 51    | `Ter-`, `Aondo-`, Mwuese, Doosuur, Nguveren |
| **Ijaw**       | 46    | `Ebi-`, Tonye, Preye, Ibinabo, Warribibo |
| **Urhobo**     | 45    | `Oghene-`, Rukevwe, Okiemute, Ejiro |
| **Kanuri**     | 22    | Shettima, Zanna, Bulama, Grema, Modu |
| **Igala**      | 16    | Ameh, Ocholi, Onoja, Ogwuche |
| **Nupe/Berom/Idoma/Tarok/…** | 42 | Smaller groups from Kogi, Plateau, Benue, Rivers |

> **Total: 868 names** · 569 male · 262 female · 37 unisex

---

## API reference

### `match(name)` → `MatchResult`

Matches a single name token — or a full multi-word name. Accepts any casing, with or without diacritics. When the input contains spaces, each token is matched independently and the results are aggregated (same logic as `analyzeFullName`).

```ts
match(name: string): MatchResult
```

| Field          | Type                    | Description |
|----------------|-------------------------|-------------|
| `name`         | `string`                | Original input as provided |
| `normalized`   | `string`                | Lowercase, diacritics removed |
| `gender`       | `'M' \| 'F' \| 'U' \| null` | Male / Female / Unisex |
| `ethnicity`    | `string \| null`        | e.g. `'Yoruba'`, `'Igbo'`, `'Hausa'` |
| `confidence`   | `number`                | 0.0 – 1.0 (see table below) |
| `method`       | `string`                | How the result was found |
| `alternatives` | `Array`                 | Other possible ethnicities for ambiguous names |

**`method` values:**

| Method | Tier | Meaning |
|--------|------|---------|
| `'dictionary'`   | 1 | Exact match found in the curated name list |
| `'pattern'`      | 2 | Matched by a prefix/suffix/substring rule (e.g. `Oluwa-` → Yoruba) |
| `'ngram'`        | 3 | Inferred by character n-gram similarity |
| `'api:genderize'`| 4 | Gender returned by Genderize.io (async only) |
| `'api:namsor'`   | 4 | Gender returned by NamSor (async only) |
| `'unknown'`      | — | No match found in any tier |

**Confidence guide:**

| Range       | Meaning |
|-------------|---------|
| 0.90 – 1.00 | Dictionary match — very reliable |
| 0.80 – 0.96 | High-confidence pattern rule |
| 0.60 – 0.80 | Medium-confidence pattern rule |
| 0.50 – 0.88 | External API result |
| 0.10 – 0.55 | N-gram inference — use as a hint only |
| 0           | Unknown |

---

### `matchBatch(names)` → `MatchResult[]`

Matches an array of names in one call.

```js
matchBatch(['Adeyemi', 'Ngozi', 'Garba', 'Bassey']);
// → [MatchResult, MatchResult, MatchResult, MatchResult]
```

---

### `analyzeFullName(fullName)` → `FullNameAnalysis`

Splits a full name on spaces and hyphens, strips titles (`Alhaji`, `Dr`, `Chief`, `Pastor`, `Engr`, etc.), matches each token individually, then aggregates into one overall result using a **weighted vote**.

**Gender tie-break:** when two or more genders share the same weighted score, the leftmost (given) name wins — it is the strongest gender signal in a Nigerian full name.

```js
analyzeFullName('Dr Adebayo Chukwuemeka Okafor');
// {
//   fullName:         'Dr Adebayo Chukwuemeka Okafor',
//   overallEthnicity: 'Igbo',      ← Chukwuemeka + Okafor outweigh Adebayo
//   overallGender:    'M',
//   confidence:       0.983,
//   components: [
//     { name: 'adebayo',     ethnicity: 'Yoruba', gender: 'M', confidence: 1 },
//     { name: 'chukwuemeka', ethnicity: 'Igbo',   gender: 'M', confidence: 1 },
//     { name: 'okafor',      ethnicity: 'Igbo',   gender: 'M', confidence: 0.95 },
//   ]
// }
```

| Field              | Type                    | Description |
|--------------------|-------------------------|-------------|
| `fullName`         | `string`                | Original input |
| `components`       | `MatchResult[]`         | Per-token results |
| `overallEthnicity` | `string \| null`        | Winning ethnicity by weighted vote |
| `overallGender`    | `'M' \| 'F' \| 'U' \| null` | Winning gender by weighted vote; first token breaks ties |
| `confidence`       | `number`                | Average of component confidences |

---

### `suggest(name, topN?)` → `Array`

Returns the closest dictionary entries for a misspelled or variant name, ranked by edit distance. Ties broken by confidence.

```js
suggest('Chibike');
// [{ name: 'chibuike', distance: 1, entry: { gender: 'M', ethnicity: 'Igbo', confidence: 1 } }]

suggest('Adeyem', 3);
// top 3 closest matches to 'adeyem'
```

---

### `dictionary` → `Map<string, object>`

Direct read-only access to the full master name map. Useful for bulk lookups or building your own logic on top.

```js
const { dictionary } = require('name-ethnicity-gender-matcher');

console.log(dictionary.size);       // 868
dictionary.get('oluwasegun');       // { gender: 'M', ethnicity: 'Yoruba', confidence: 1 }
dictionary.has('chioma');           // true
dictionary.has('sebastine');        // true
dictionary.has('xylzzq');           // false
```

---

## How it works

Every name passes through four tiers, stopping as soon as a confident match is found:

```
Input: "Oluwakayode"
    │
    ▼  Normalizer
    │  • Strip diacritics  (ẹ→e, ọ→o, ṣ→s)
    │  • Lowercase
    │  • Remove non-alpha characters
    │  • Strip titles (Alhaji, Dr, Chief, Pastor …)
    │  • Split multi-word input into tokens
    │
    ▼  Tier 1 — Dictionary  [O(1) Map lookup]
    │  868 curated names with gender + ethnicity + confidence
    │  ✓ HIT  → return immediately, confidence 0.75–1.00
    │  ✗ MISS ↓
    │
    ▼  Tier 2 — Pattern Rules  [~120 rules]
    │  Prefix   : Oluwa-, Chi-, Akin-, Oghene-, Ter-, Aondo- …
    │  Suffix   : -tunde, -wale, -bayo, -seun, -kunle …
    │  Substring: chukwu, gbenga, gboyega …
    │  ✓ HIT  → return, confidence 0.60–0.98
    │  ✗ MISS ↓
    │
    ▼  Tier 3 — N-gram Inference
    │  Builds bigram + trigram frequency profiles per ethnicity
    │  from the dictionary, then uses cosine similarity to find
    │  the closest matching ethnic character pattern
    │  ✓ HIT  → return, confidence 0.10–0.55
    │  ✗ MISS ↓
    │
    ▼  Tier 4 — External API  [async, opt-in]
    │  Genderize.io (free) or NamSor (paid)
    │  Only triggered when local result is unknown or low-confidence
    │  In-memory + optional file cache avoids repeat API calls
    │  ✓ HIT  → return, confidence 0.50–0.88, method: 'api:genderize'
    │  ✗ MISS ↓
    │
    ▼  { method: 'unknown', confidence: 0 }
```

---

## Performance

Benchmarked on Node.js 18, Windows 11:

| Operation           | Speed      | Notes |
|---------------------|------------|-------|
| Single `match()`    | **~2.6 µs**| Faster than a function call in most web frameworks |
| Batch (per name)    | **~2.1 µs**| Array of names processed in one go |
| `analyzeFullName()` | **~49 µs** | Includes tokenising, per-token match, and aggregation |
| `matchAsync()`      | **~2.6 µs**| No extra latency if Tier 4 is not triggered |

No warm-up needed — the dictionary `Map` is built once at `require()` time and reused for every call.

---

## Integrating with other engines

```js
// adapters/nigerian-names.js
const { match, analyzeFullName } = require('name-ethnicity-gender-matcher');

/**
 * Classify a single proposed name.
 */
function classifyName(name) {
  const { gender, ethnicity, confidence, method } = match(name);
  return { gender, ethnicity, confidence, method };
}

/**
 * Classify a full name record (firstName + middleName + lastName).
 */
function classifyFullName(firstName = '', middleName = '', lastName = '') {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
  const { overallGender, overallEthnicity, confidence } = analyzeFullName(fullName);
  return { gender: overallGender, ethnicity: overallEthnicity, confidence };
}

module.exports = { classifyName, classifyFullName };
```

---

## Extending the dictionary

All names live in plain JavaScript files inside `src/data/`. Adding a new name is one line:

```js
// src/data/igbo.js
module.exports = {
  // ... existing entries ...
  somtochukwu: ['M', 1.00],  // praise God with me  ← new line
  uzoamaka:    ['F', 1.00],  // the road is beautiful
};
```

Cross-ethnic names (Christian/Biblical, day-of-birth, saint names) go in `src/data/other.js` with the extended format:

```js
// src/data/other.js
module.exports = {
  // ... existing entries ...
  sebastine: ['M', 0.90, 'Other'],  // Nigerian variant of Sebastian
};
```

**Format:** `name (lowercase): ['M'|'F'|'U', confidence]` or `['M'|'F'|'U', confidence, 'EthnicityHint']`

After adding names, run the tests to confirm nothing broke:

```bash
npm test
```

---

## Running tests & benchmarks

```bash
# Run the full test suite (48 assertions)
npm test

# Run the performance benchmark
npm run benchmark
```

---

## Roadmap

- [ ] Grow dictionary to 5,000+ names
- [x] Add Genderize.io / NamSor API as optional Tier 4 fallback ✅
- [ ] Lightweight TensorFlow.js / ONNX model trained on labeled Nigerian names dataset
- [ ] Browser-compatible ESM bundle (`index.mjs`)
- [x] TypeScript type declarations (`index.d.ts`) ✅

---

## License

MIT © 2025 Venson

This library is free to use, copy, modify, and distribute — including in commercial products — as long as the original copyright notice is retained. See [LICENSE](./LICENSE) for the full text.

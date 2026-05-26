# nigerian-names-predictor

**Fast, accurate Nigerian name matcher** — returns gender, ethnicity, and confidence for any Nigerian first / last / middle name.

- **723+ curated names** across 10+ ethnic groups
- **Three-tier pipeline**: dictionary → pattern rules → n-gram inference
- **< 4 µs** per single lookup (no network, no AI API required)
- **Zero dependencies** — pure Node.js
- Works as a drop-in NPM package (CommonJS)

---

## Ethnic groups covered

| Ethnicity     | Dictionary names | Key patterns |
|---------------|-----------------|--------------|
| Yoruba        | 185             | `Oluwa-`, `Ade-`, `Akin-`, `-tunde`, `-wale`, `-bayo` |
| Hausa/Fulani  | 104             | Arabic-origin Islamic names, `Dan-`, calendar names |
| Igbo          | 99              | `Chi-`, `Chukwu-`, `Obi-`, `Nna-`, `Eze-` |
| Efik/Ibibio   | 59              | Bassey, Okon, Akpan, Inyang, Mfon, Uduak |
| Edo (Bini)    | 54              | `Osa-`, `Omor-`, `-osa`, Itohan, Esosa |
| Tiv           | 51              | `Ter-`, `Aondo-`, Mwuese, Doosuur |
| Ijaw          | 46              | `Ebi-`, Tonye, Preye, Ibinabo, Warribibo |
| Urhobo        | 45              | `Oghene-`, Rukevwe, Okiemute |
| Kanuri        | 22              | Shettima, Zanna, Bulama, Grema |
| Igala + other | 37              | Ameh, Ocholi, Onoja, Davou, etc. |

---

## Installation

```bash
npm install nigerian-names-predictor
```

---

## Quick start

```js
const { match, matchBatch, analyzeFullName, suggest } = require('nigerian-names-predictor');

// ── Single name ───────────────────────────────────────────────
match('Oluwasegun');
// {
//   name:       'Oluwasegun',
//   normalized: 'oluwasegun',
//   gender:     'M',
//   ethnicity:  'Yoruba',
//   confidence: 1,
//   method:     'dictionary',
//   alternatives: []
// }

match('Chioma');
// { gender: 'F', ethnicity: 'Igbo', confidence: 1, ... }

match('Hauwa');
// { gender: 'F', ethnicity: 'Hausa', confidence: 1, ... }

// ── Batch ─────────────────────────────────────────────────────
matchBatch(['Abubakar', 'Bassey', 'Mwuese', 'Tonye']);
// Array of MatchResult objects

// ── Full name (first + middle + last) ─────────────────────────
analyzeFullName('Alhaji Musa Usman Garba');
// {
//   overallEthnicity: 'Hausa',
//   overallGender:    'M',
//   confidence:       0.97,
//   components:       [ ...per-token results... ]
// }

// ── Fuzzy / "did you mean?" ───────────────────────────────────
suggest('Oluwasegn');   // typo
// [{ name: 'oluwasegun', distance: 1, entry: { gender: 'M', ... } }, ...]
```

---

## API reference

### `match(name)` → `MatchResult`

Matches a single name token.

| Field          | Type              | Description |
|----------------|-------------------|-------------|
| `name`         | `string`          | Original input |
| `normalized`   | `string`          | Lowercase, no diacritics |
| `gender`       | `'M'│'F'│'U'│null`| Male / Female / Unisex |
| `ethnicity`    | `string │ null`   | Ethnic group name |
| `confidence`   | `number`          | 0.0 – 1.0 |
| `method`       | `string`          | `'dictionary'│'pattern'│'ngram'│'unknown'` |
| `alternatives` | `Array`           | Other possible ethnicities (for ambiguous names) |

**Confidence guide:**

| Confidence   | Meaning |
|-------------|---------|
| 0.90 – 1.00 | Exact dictionary match (very reliable) |
| 0.80 – 0.90 | High-confidence pattern rule (e.g. `Oluwa-` prefix) |
| 0.60 – 0.80 | Medium-confidence pattern rule |
| 0.30 – 0.60 | N-gram inference (weakest, treat as a hint) |
| 0           | Unknown — name not recognized |

---

### `matchBatch(names)` → `MatchResult[]`

Accepts an array of name strings. More ergonomic than calling `match()` in a loop.

```js
matchBatch(['Adeyemi', 'Ngozi', 'Ibrahim']);
```

---

### `analyzeFullName(fullName)` → `FullNameAnalysis`

Splits a full name string on spaces/hyphens, strips titles (`Alhaji`, `Dr`, `Chief`, etc.), matches each token, then aggregates the results via a weighted vote.

| Field              | Type              | Description |
|--------------------|-------------------|-------------|
| `fullName`         | `string`          | Original input |
| `components`       | `MatchResult[]`   | Per-token results |
| `overallEthnicity` | `string │ null`   | Aggregated ethnicity |
| `overallGender`    | `'M'│'F'│'U'│null`| Aggregated gender |
| `confidence`       | `number`          | Average component confidence |

---

### `suggest(name, topN?)` → `Array`

Returns the closest dictionary entries (by Levenshtein edit distance) for a possibly misspelled name. Useful for typo correction.

```js
suggest('Chibike', 5);
// [{ name: 'chibuike', distance: 1, entry: { gender: 'M', ethnicity: 'Igbo', ... } }]
```

---

### `dictionary` → `Map<string, object>`

Direct read-only access to the master name Map. Useful for bulk lookups without the full `MatchResult` wrapper.

```js
const { dictionary } = require('nigerian-names-predictor');
console.log(dictionary.size); // 723+
console.log(dictionary.get('oluwasegun')); // { gender: 'M', ethnicity: 'Yoruba', confidence: 1 }
```

---

## How it works

```
Input name
    │
    ▼
┌─────────────────────────────────────────────────────┐
│  Normalizer                                         │
│  • Strip diacritics (ẹ→e, ọ→o, ṣ→s)               │
│  • Lowercase                                        │
│  • Remove non-alpha chars                           │
│  • Strip titles (Alhaji, Dr, Chief, …)              │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│  Tier 1 — Dictionary  (O(1) Map lookup)             │
│  723+ curated names → { gender, ethnicity, conf }   │
│  Hits return confidence 0.75–1.00                   │
└──────────────────────┬──────────────────────────────┘
                       │ MISS
                       ▼
┌─────────────────────────────────────────────────────┐
│  Tier 2 — Pattern Rules  (~120 rules)               │
│  Prefix rules : Oluwa-, Chi-, Akin-, Oghene-, …     │
│  Suffix rules : -tunde, -wale, -bayo, -seun, …      │
│  Substring    : chukwu, gbenga, gboyega, …          │
│  Rules sorted: exact > substring > longer > shorter │
│  Hits return confidence 0.60–0.98                   │
└──────────────────────┬──────────────────────────────┘
                       │ MISS
                       ▼
┌─────────────────────────────────────────────────────┐
│  Tier 3 — N-gram Inference                          │
│  Bigram + trigram cosine similarity against         │
│  per-ethnicity profiles built from the dictionary   │
│  Hits return confidence 0.10–0.55                   │
└──────────────────────┬──────────────────────────────┘
                       │ MISS
                       ▼
                 method: 'unknown'
                 confidence: 0
```

---

## Integrating with Bloom / external engines

```js
// bloom-adapter.js
const { match, analyzeFullName } = require('nigerian-names-predictor');

/**
 * Called by Bloom when it needs to classify a proposed name.
 * @param {string} name
 * @returns {{ gender: string, ethnicity: string, confidence: number }}
 */
function classifyName(name) {
  const result = match(name);
  return {
    gender:     result.gender,
    ethnicity:  result.ethnicity,
    confidence: result.confidence,
    method:     result.method,
  };
}

/**
 * For a complete record with first + last name.
 */
function classifyFullName(firstName, lastName, middleName = '') {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
  return analyzeFullName(fullName);
}

module.exports = { classifyName, classifyFullName };
```

---

## Extending the dictionary

Add names to the appropriate file in `src/data/`:

```js
// src/data/yoruba.js
module.exports = {
  // existing entries...
  oluwadamilola: ['M', 1.00],   // new entry
  ayomikun:      ['M', 1.00],
};
```

Then re-run `node test/matcher.test.js` to verify nothing broke.

---

## Performance

Measured on Node.js 18 (Windows 11, mid-range laptop):

| Operation         | Speed     |
|-------------------|-----------|
| Single `match()`  | ~3.6 µs   |
| Batch per name    | ~1.7 µs   |
| `analyzeFullName` | ~51 µs    |

No warm-up needed — the dictionary is a plain `Map`, loaded once at `require()` time.

---

## Roadmap / Contributing

- [ ] Add more names (target: 5,000+)
- [ ] Add Genderize.io / NamSor API fallback for very rare names
- [ ] TensorFlow.js / ONNX lightweight model as Tier 4
- [ ] Browser ESM bundle (`index.mjs`)
- [ ] TypeScript type declarations (`index.d.ts`)

---

## License

MIT

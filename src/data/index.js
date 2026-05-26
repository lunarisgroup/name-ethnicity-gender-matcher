/**
 * Master name dictionary index.
 * Merges all ethnic dictionaries into a single O(1)-lookup Map.
 *
 * Master map entry: { gender, ethnicity, confidence }
 *   gender:     'M' | 'F' | 'U'
 *   ethnicity:  string (e.g. 'Yoruba', 'Igbo', ...)
 *   confidence: 0.0–1.0
 */

'use strict';

const SOURCES = [
  ['Yoruba',      require('./yoruba')],
  ['Igbo',        require('./igbo')],
  ['Hausa',       require('./hausa')],
  ['Efik',        require('./efik-ibibio')],
  ['Ijaw',        require('./ijaw')],
  ['Edo',         require('./edo')],
  ['Urhobo',      require('./urhobo')],
  ['Tiv',         require('./tiv')],
  ['Kanuri',      require('./kanuri')],
  ['Other',       require('./other')],
];

/**
 * Names that appear in multiple ethnic groups (ambiguous).
 * Listed with an array of [ { ethnicity, gender, confidence } ] — ordered
 * by frequency/probability.
 */
const AMBIGUOUS = {
  // Shared Muslim names (common across Hausa, Yoruba Muslim, Fulani)
  hassan:    [{ e: 'Hausa', g: 'M', c: 0.60 }, { e: 'Yoruba', g: 'M', c: 0.35 }],
  ibrahim:   [{ e: 'Hausa', g: 'M', c: 0.65 }, { e: 'Yoruba', g: 'M', c: 0.30 }],
  abdullahi: [{ e: 'Hausa', g: 'M', c: 0.80 }, { e: 'Fulani', g: 'M', c: 0.15 }],
  aisha:     [{ e: 'Hausa', g: 'F', c: 0.65 }, { e: 'Yoruba', g: 'F', c: 0.30 }],
  amina:     [{ e: 'Hausa', g: 'F', c: 0.65 }, { e: 'Yoruba', g: 'F', c: 0.30 }],
  fatima:    [{ e: 'Hausa', g: 'F', c: 0.65 }, { e: 'Yoruba', g: 'F', c: 0.30 }],
  maryam:    [{ e: 'Hausa', g: 'F', c: 0.65 }, { e: 'Yoruba', g: 'F', c: 0.30 }],
  zainab:    [{ e: 'Hausa', g: 'F', c: 0.65 }, { e: 'Yoruba', g: 'F', c: 0.30 }],
  khadija:   [{ e: 'Hausa', g: 'F', c: 0.65 }, { e: 'Yoruba', g: 'F', c: 0.30 }],
  sulaiman:  [{ e: 'Hausa', g: 'M', c: 0.70 }, { e: 'Yoruba', g: 'M', c: 0.25 }],
  yusuf:     [{ e: 'Hausa', g: 'M', c: 0.70 }, { e: 'Yoruba', g: 'M', c: 0.25 }],
  musa:      [{ e: 'Hausa', g: 'M', c: 0.75 }, { e: 'Yoruba', g: 'M', c: 0.20 }],
  usman:     [{ e: 'Hausa', g: 'M', c: 0.80 }, { e: 'Yoruba', g: 'M', c: 0.15 }],
  umar:      [{ e: 'Hausa', g: 'M', c: 0.75 }, { e: 'Yoruba', g: 'M', c: 0.20 }],
  ahmad:     [{ e: 'Hausa', g: 'M', c: 0.60 }, { e: 'Yoruba', g: 'M', c: 0.35 }],
  ahmed:     [{ e: 'Hausa', g: 'M', c: 0.60 }, { e: 'Yoruba', g: 'M', c: 0.35 }],
  // Shared Ijaw/Urhobo
  preye:     [{ e: 'Ijaw', g: 'U', c: 0.75 }, { e: 'Urhobo', g: 'U', c: 0.20 }],
  tari:      [{ e: 'Ijaw', g: 'U', c: 0.80 }, { e: 'Urhobo', g: 'U', c: 0.15 }],
  // Shared Tiv/Idoma
  oche:      [{ e: 'Tiv', g: 'M', c: 0.50 }, { e: 'Idoma', g: 'M', c: 0.45 }],
};

// ── Build the master dictionary ──────────────────────────────────────────

/** @type {Map<string, {gender: string, ethnicity: string, confidence: number}>} */
const MASTER = new Map();

for (const [ethnicity, names] of SOURCES) {
  for (const [rawName, entry] of Object.entries(names)) {
    const key = rawName.toLowerCase().trim();
    const gender = entry[0];
    const confidence = entry[1];
    // entry[2] is an optional ethnic_hint override (used in other.js)
    const finalEthnicity = entry[2] || ethnicity;

    // If a name already exists, keep the higher confidence entry
    if (MASTER.has(key)) {
      const existing = MASTER.get(key);
      if (confidence <= existing.confidence) continue;
    }

    MASTER.set(key, { gender, ethnicity: finalEthnicity, confidence });
  }
}

// Freeze the map contents to prevent accidental mutation
Object.freeze(AMBIGUOUS);

module.exports = { MASTER, AMBIGUOUS };

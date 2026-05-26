/**
 * Rule-based ethnic pattern matcher.
 *
 * Applies a hierarchy of prefix, suffix, and substring rules to infer
 * ethnicity and gender from names NOT found in the dictionary.
 *
 * Rules are ordered from most specific (highest confidence) to least.
 * The matcher returns the FIRST rule that matches.
 */

'use strict';

/**
 * @typedef  PatternRule
 * @property {string}   pattern    — the text to match (lowercase)
 * @property {string}   type       — 'prefix' | 'suffix' | 'substring' | 'exact'
 * @property {string}   ethnicity
 * @property {string}   gender     — 'M' | 'F' | 'U'
 * @property {number}   confidence — 0.0–1.0
 * @property {number}   [minLen]   — minimum name length for this rule to apply
 */

/** @type {PatternRule[]} */
const RULES = [
  // ══════════════════════════════════════════════════════════
  //  YORUBA — high-confidence prefix rules
  // ══════════════════════════════════════════════════════════

  // "Oluwa-" prefix is almost exclusively Yoruba
  { pattern: 'oluwa',   type: 'prefix',    ethnicity: 'Yoruba',  gender: 'U', confidence: 0.96, minLen: 7 },

  // "Adek-" more specific than just "Ade-"
  { pattern: 'adek',    type: 'prefix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.90 },
  { pattern: 'akin',    type: 'prefix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.90 },

  // "Ade-" names — broad but very Yoruba
  { pattern: 'ade',     type: 'prefix',    ethnicity: 'Yoruba',  gender: 'U', confidence: 0.80, minLen: 5 },

  { pattern: 'ayo',     type: 'prefix',    ethnicity: 'Yoruba',  gender: 'U', confidence: 0.85, minLen: 5 },
  { pattern: 'baba',    type: 'prefix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.80, minLen: 7 },
  { pattern: 'gbenga',  type: 'substring', ethnicity: 'Yoruba',  gender: 'M', confidence: 0.92 },
  { pattern: 'gboyega', type: 'substring', ethnicity: 'Yoruba',  gender: 'M', confidence: 0.95 },
  { pattern: 'gbemiga', type: 'substring', ethnicity: 'Yoruba',  gender: 'M', confidence: 0.95 },
  { pattern: 'ifeolu',  type: 'prefix',    ethnicity: 'Yoruba',  gender: 'F', confidence: 0.95 },
  { pattern: 'ife',     type: 'prefix',    ethnicity: 'Yoruba',  gender: 'U', confidence: 0.80, minLen: 6 },
  { pattern: 'ola',     type: 'prefix',    ethnicity: 'Yoruba',  gender: 'U', confidence: 0.75, minLen: 5 },
  { pattern: 'omol',    type: 'prefix',    ethnicity: 'Yoruba',  gender: 'F', confidence: 0.88 },
  { pattern: 'omow',    type: 'prefix',    ethnicity: 'Yoruba',  gender: 'F', confidence: 0.90 },
  { pattern: 'omo',     type: 'prefix',    ethnicity: 'Yoruba',  gender: 'F', confidence: 0.75, minLen: 5 },

  // Yoruba suffix rules
  { pattern: 'tunde',   type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.92 },
  { pattern: 'bayo',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.88 },
  { pattern: 'wale',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.85 },
  { pattern: 'seun',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.88 },
  { pattern: 'kunle',   type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.88 },
  { pattern: 'leke',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.85 },
  { pattern: 'lekan',   type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.88 },
  { pattern: 'yemi',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'U', confidence: 0.85 },
  { pattern: 'jide',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.85 },
  { pattern: 'tola',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'U', confidence: 0.80 },
  { pattern: 'tobi',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.80 },
  { pattern: 'dayo',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'U', confidence: 0.85 },
  { pattern: 'lade',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.80 },
  { pattern: 'mide',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'U', confidence: 0.82 },
  { pattern: 'dele',    type: 'suffix',    ethnicity: 'Yoruba',  gender: 'M', confidence: 0.80 },
  { pattern: 'ola',     type: 'suffix',    ethnicity: 'Yoruba',  gender: 'U', confidence: 0.75, minLen: 5 },

  // ══════════════════════════════════════════════════════════
  //  IGBO — high-confidence rules
  // ══════════════════════════════════════════════════════════

  { pattern: 'chukwu',  type: 'substring', ethnicity: 'Igbo',    gender: 'M', confidence: 0.99 },
  { pattern: 'chukw',   type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.98 },
  { pattern: 'chinwe',  type: 'prefix',    ethnicity: 'Igbo',    gender: 'F', confidence: 0.97 },
  { pattern: 'chiom',   type: 'prefix',    ethnicity: 'Igbo',    gender: 'F', confidence: 0.97 },
  { pattern: 'chiamak', type: 'prefix',    ethnicity: 'Igbo',    gender: 'F', confidence: 0.99 },
  { pattern: 'chidin',  type: 'prefix',    ethnicity: 'Igbo',    gender: 'F', confidence: 0.98 },
  { pattern: 'chib',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.95 },
  { pattern: 'chid',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.93 },
  { pattern: 'chie',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.93 },
  { pattern: 'chig',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.95 },
  { pattern: 'chij',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.95 },
  { pattern: 'chik',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.93 },
  { pattern: 'chim',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.93 },
  { pattern: 'chin',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.90, minLen: 6 },
  { pattern: 'chis',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'U', confidence: 0.90 },
  { pattern: 'chi',     type: 'prefix',    ethnicity: 'Igbo',    gender: 'U', confidence: 0.82, minLen: 5 },
  { pattern: 'obin',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.90 },
  { pattern: 'obi',     type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.78, minLen: 5 },
  { pattern: 'onyeka',  type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.97 },
  { pattern: 'onyem',   type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.95 },
  { pattern: 'nnam',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.95 },
  { pattern: 'nna',     type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.85, minLen: 5 },
  { pattern: 'nne',     type: 'prefix',    ethnicity: 'Igbo',    gender: 'F', confidence: 0.88, minLen: 4 },
  { pattern: 'uchenn',  type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.97 },
  { pattern: 'ugoch',   type: 'prefix',    ethnicity: 'Igbo',    gender: 'U', confidence: 0.96 },
  { pattern: 'ugon',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'F', confidence: 0.95 },
  { pattern: 'adaez',   type: 'prefix',    ethnicity: 'Igbo',    gender: 'F', confidence: 0.99 },
  { pattern: 'ada',     type: 'prefix',    ethnicity: 'Igbo',    gender: 'F', confidence: 0.78, minLen: 5 },
  { pattern: 'amaka',   type: 'exact',     ethnicity: 'Igbo',    gender: 'F', confidence: 0.97 },
  { pattern: 'kelechi', type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.97 },
  { pattern: 'okech',   type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.97 },
  { pattern: 'ikech',   type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.97 },
  { pattern: 'ifean',   type: 'prefix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.97 },
  { pattern: 'ifeo',    type: 'prefix',    ethnicity: 'Igbo',    gender: 'F', confidence: 0.93 },

  // Igbo suffix rules
  { pattern: 'chukwu',  type: 'suffix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.98 },
  { pattern: 'nna',     type: 'suffix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.85, minLen: 6 },
  { pattern: 'nne',     type: 'suffix',    ethnicity: 'Igbo',    gender: 'F', confidence: 0.85, minLen: 6 },
  { pattern: 'ndu',     type: 'suffix',    ethnicity: 'Igbo',    gender: 'M', confidence: 0.82, minLen: 6 },

  // ══════════════════════════════════════════════════════════
  //  HAUSA — distinctive patterns
  // ══════════════════════════════════════════════════════════

  { pattern: 'hauwa',   type: 'exact',     ethnicity: 'Hausa',   gender: 'F', confidence: 0.99 },
  { pattern: 'danladi', type: 'exact',     ethnicity: 'Hausa',   gender: 'M', confidence: 0.99 },
  { pattern: 'laraba',  type: 'exact',     ethnicity: 'Hausa',   gender: 'F', confidence: 0.99 },
  { pattern: 'talatu',  type: 'exact',     ethnicity: 'Hausa',   gender: 'F', confidence: 0.99 },
  { pattern: 'bilkisu', type: 'exact',     ethnicity: 'Hausa',   gender: 'F', confidence: 0.99 },
  { pattern: 'yakubu',  type: 'exact',     ethnicity: 'Hausa',   gender: 'M', confidence: 0.92 },
  { pattern: 'yahaya',  type: 'exact',     ethnicity: 'Hausa',   gender: 'M', confidence: 0.97 },
  { pattern: 'haruna',  type: 'exact',     ethnicity: 'Hausa',   gender: 'M', confidence: 0.97 },
  { pattern: 'muhammadu', type: 'prefix',  ethnicity: 'Hausa',   gender: 'M', confidence: 0.97 },
  { pattern: 'malam',   type: 'prefix',    ethnicity: 'Hausa',   gender: 'M', confidence: 0.85 },
  { pattern: 'alhaji',  type: 'prefix',    ethnicity: 'Hausa',   gender: 'M', confidence: 0.75 },
  { pattern: 'dan',     type: 'prefix',    ethnicity: 'Hausa',   gender: 'M', confidence: 0.75, minLen: 6 },

  // ══════════════════════════════════════════════════════════
  //  EFIK / IBIBIO — distinctive patterns
  // ══════════════════════════════════════════════════════════

  { pattern: 'bassey',  type: 'exact',     ethnicity: 'Efik',    gender: 'M', confidence: 0.97 },
  { pattern: 'okon',    type: 'exact',     ethnicity: 'Efik',    gender: 'M', confidence: 0.97 },
  { pattern: 'inyang',  type: 'exact',     ethnicity: 'Efik',    gender: 'M', confidence: 0.97 },
  { pattern: 'akpan',   type: 'exact',     ethnicity: 'Efik',    gender: 'M', confidence: 0.98 },
  { pattern: 'effiong', type: 'exact',     ethnicity: 'Efik',    gender: 'M', confidence: 0.98 },
  { pattern: 'mfon',    type: 'exact',     ethnicity: 'Efik',    gender: 'F', confidence: 0.99 },
  { pattern: 'ndifreke', type: 'exact',    ethnicity: 'Efik',    gender: 'F', confidence: 0.99 },
  { pattern: 'uduak',   type: 'exact',     ethnicity: 'Efik',    gender: 'F', confidence: 0.99 },
  { pattern: 'enobong', type: 'exact',     ethnicity: 'Efik',    gender: 'F', confidence: 0.99 },
  { pattern: 'ekanem',  type: 'prefix',    ethnicity: 'Efik',    gender: 'F', confidence: 0.97 },
  { pattern: 'eka',     type: 'prefix',    ethnicity: 'Efik',    gender: 'F', confidence: 0.80, minLen: 5 },
  { pattern: 'abasi',   type: 'prefix',    ethnicity: 'Efik',    gender: 'M', confidence: 0.90 },

  // ══════════════════════════════════════════════════════════
  //  IJAW — distinctive patterns
  // ══════════════════════════════════════════════════════════

  { pattern: 'tonye',   type: 'exact',     ethnicity: 'Ijaw',    gender: 'M', confidence: 0.92 },
  { pattern: 'preye',   type: 'exact',     ethnicity: 'Ijaw',    gender: 'U', confidence: 0.90 },
  { pattern: 'ibinabo', type: 'exact',     ethnicity: 'Ijaw',    gender: 'F', confidence: 0.98 },
  { pattern: 'doubra',  type: 'exact',     ethnicity: 'Ijaw',    gender: 'U', confidence: 0.90 },
  { pattern: 'warrib',  type: 'prefix',    ethnicity: 'Ijaw',    gender: 'M', confidence: 0.95 },
  { pattern: 'ebi',     type: 'prefix',    ethnicity: 'Ijaw',    gender: 'M', confidence: 0.78, minLen: 6 },
  { pattern: 'peremo',  type: 'exact',     ethnicity: 'Ijaw',    gender: 'M', confidence: 0.99 },
  { pattern: 'tamara',  type: 'prefix',    ethnicity: 'Ijaw',    gender: 'U', confidence: 0.85 },

  // ══════════════════════════════════════════════════════════
  //  EDO (BINI) — distinctive patterns
  // ══════════════════════════════════════════════════════════

  { pattern: 'osagie',  type: 'exact',     ethnicity: 'Edo',     gender: 'M', confidence: 0.97 },
  { pattern: 'osaro',   type: 'exact',     ethnicity: 'Edo',     gender: 'M', confidence: 0.95 },
  { pattern: 'osazemen', type: 'exact',    ethnicity: 'Edo',     gender: 'U', confidence: 0.99 },
  { pattern: 'esosa',   type: 'exact',     ethnicity: 'Edo',     gender: 'U', confidence: 0.95 },
  { pattern: 'etinosa', type: 'exact',     ethnicity: 'Edo',     gender: 'U', confidence: 0.97 },
  { pattern: 'omoruyi', type: 'exact',     ethnicity: 'Edo',     gender: 'M', confidence: 0.99 },
  { pattern: 'omor',    type: 'prefix',    ethnicity: 'Edo',     gender: 'M', confidence: 0.88, minLen: 7 },
  { pattern: 'itohan',  type: 'exact',     ethnicity: 'Edo',     gender: 'F', confidence: 0.99 },
  { pattern: 'osa',     type: 'prefix',    ethnicity: 'Edo',     gender: 'M', confidence: 0.78, minLen: 5 },
  { pattern: 'ehi',     type: 'prefix',    ethnicity: 'Edo',     gender: 'F', confidence: 0.82, minLen: 5 },

  // ══════════════════════════════════════════════════════════
  //  URHOBO — distinctive patterns
  // ══════════════════════════════════════════════════════════

  { pattern: 'oghene',  type: 'prefix',    ethnicity: 'Urhobo',  gender: 'U', confidence: 0.92 },
  { pattern: 'rukevwe', type: 'exact',     ethnicity: 'Urhobo',  gender: 'F', confidence: 0.99 },
  { pattern: 'okiemute', type: 'exact',    ethnicity: 'Urhobo',  gender: 'M', confidence: 0.99 },
  { pattern: 'ejiro',   type: 'exact',     ethnicity: 'Urhobo',  gender: 'M', confidence: 0.90 },

  // ══════════════════════════════════════════════════════════
  //  TIV — distinctive patterns
  // ══════════════════════════════════════════════════════════

  { pattern: 'ter',     type: 'prefix',    ethnicity: 'Tiv',     gender: 'U', confidence: 0.90, minLen: 6 },
  { pattern: 'aondo',   type: 'prefix',    ethnicity: 'Tiv',     gender: 'M', confidence: 0.96 },
  { pattern: 'mwuese',  type: 'exact',     ethnicity: 'Tiv',     gender: 'F', confidence: 0.99 },
  { pattern: 'doosuur', type: 'exact',     ethnicity: 'Tiv',     gender: 'M', confidence: 0.99 },
  { pattern: 'nguveren', type: 'exact',    ethnicity: 'Tiv',     gender: 'F', confidence: 0.99 },
  { pattern: 'sewuese', type: 'exact',     ethnicity: 'Tiv',     gender: 'F', confidence: 0.99 },

  // ══════════════════════════════════════════════════════════
  //  KANURI — distinctive patterns
  // ══════════════════════════════════════════════════════════

  { pattern: 'shettima', type: 'exact',    ethnicity: 'Kanuri',  gender: 'M', confidence: 0.99 },
  { pattern: 'zanna',    type: 'exact',    ethnicity: 'Kanuri',  gender: 'M', confidence: 0.97 },
  { pattern: 'bulama',   type: 'exact',    ethnicity: 'Kanuri',  gender: 'M', confidence: 0.97 },
  { pattern: 'grema',    type: 'exact',    ethnicity: 'Kanuri',  gender: 'M', confidence: 0.97 },
];

/**
 * Sort rules: exact > substring > longer patterns > shorter patterns.
 * This ensures that more-specific rules shadow broader ones.
 */
RULES.sort((a, b) => {
  const typeOrder = { exact: 0, substring: 1, prefix: 2, suffix: 3 };
  if (typeOrder[a.type] !== typeOrder[b.type]) return typeOrder[a.type] - typeOrder[b.type];
  return b.pattern.length - a.pattern.length;
});

/**
 * Apply pattern rules to a normalized name.
 *
 * @param {string} name  — normalized (lowercase, no diacritics)
 * @returns {{ ethnicity: string, gender: string, confidence: number } | null}
 */
function matchPattern(name) {
  if (!name || name.length < 3) return null;

  for (const rule of RULES) {
    if (rule.minLen && name.length < rule.minLen) continue;

    let matched = false;
    switch (rule.type) {
      case 'exact':
        matched = name === rule.pattern;
        break;
      case 'prefix':
        matched = name.startsWith(rule.pattern);
        break;
      case 'suffix':
        matched = name.endsWith(rule.pattern);
        break;
      case 'substring':
        matched = name.includes(rule.pattern);
        break;
    }

    if (matched) {
      return {
        ethnicity: rule.ethnicity,
        gender:    rule.gender,
        confidence: rule.confidence,
      };
    }
  }

  return null;
}

module.exports = { matchPattern, RULES };

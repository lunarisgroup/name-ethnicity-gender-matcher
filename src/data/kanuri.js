/**
 * Kanuri name dictionary
 * Format: name → [gender, confidence]
 *
 * Kanuri people: Borno State primarily, also Yobe, Niger (Republic).
 * Nigeria's sixth-largest group (~4%). Islam is very strong.
 * Historically the Kanem-Bornu Empire. Many names are Arabic-influenced
 * with Kanuri-specific forms.
 *
 * Also includes: Shuwa Arab, Babur/Bura names in Borno.
 */

'use strict';

module.exports = {
  // ── MALE ──────────────────────────────────────────────────────────────
  bukar:         ['M', 0.90],  // Kanuri/Hausa (Abu-Bakr derivative — Kanuri form)
  bulama:        ['M', 1.00],  // Kanuri (village head title)
  durkwa:        ['M', 1.00],
  gana:          ['M', 0.90],
  grema:         ['M', 1.00],  // Kanuri form of Ibrahim
  kaka:          ['M', 0.85],
  kime:          ['M', 1.00],
  kolo:          ['M', 1.00],
  kura:          ['M', 0.90],
  kusugu:        ['M', 1.00],
  mala:          ['M', 0.90],  // Kanuri (also means man/husband)
  modu:          ['M', 1.00],  // Kanuri form of Muhammad
  ngamdu:        ['M', 1.00],
  ngala:         ['M', 1.00],
  nganji:        ['M', 1.00],
  goni:          ['M', 0.90],  // Kanuri Islamic scholar title
  shettima:      ['M', 1.00],  // very distinctive Kanuri name/title
  waziri:        ['M', 1.00],  // title (minister/vizier) — Kanuri usage
  zanna:         ['M', 1.00],  // Kanuri Islamic scholar title (very specific)
  zara:          ['F', 0.85],  // Kanuri female name

  // ── FEMALE ────────────────────────────────────────────────────────────
  marguma:       ['F', 1.00],
  nenfa:         ['F', 1.00],
  yagana:        ['F', 0.90],  // unique (shared with Hausa)
};

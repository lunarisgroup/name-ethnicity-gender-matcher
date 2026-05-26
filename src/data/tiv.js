/**
 * Tiv name dictionary
 * Format: name → [gender, confidence]
 *
 * Tiv people: Benue State (primarily), also Nassarawa, Taraba, Plateau States.
 * Nigeria's fifth-largest ethnic group (~2.5%).
 * Names often begin with "Ter-" (meaning "father of" or honorific),
 * "Aondo-" (sky/God), or "Doom-" (lineage/clan suffix).
 */

'use strict';

module.exports = {
  // ── TER- prefix names (very distinctive Tiv) ──────────────────────────
  terkaa:        ['M', 1.00],  // father of light
  terfa:         ['M', 1.00],
  terhide:       ['M', 1.00],
  terhemen:      ['M', 1.00],
  terkimbi:      ['M', 1.00],
  terhile:       ['F', 1.00],
  tertsea:       ['F', 1.00],

  // ── AONDO- prefix (sky / God) ─────────────────────────────────────────
  aondover:      ['M', 1.00],  // God is great
  aondoakaa:     ['M', 1.00],  // God knows
  aondo:         ['M', 0.90],

  // ── MALE ──────────────────────────────────────────────────────────────
  chia:          ['M', 0.85],  // (Tiv — also general West African)
  denen:         ['M', 1.00],
  doosuur:       ['M', 1.00],
  ityav:         ['M', 1.00],
  jev:           ['M', 1.00],
  jimin:         ['M', 1.00],
  kater:         ['M', 1.00],
  mbawar:        ['M', 1.00],
  mkar:          ['M', 1.00],
  mnyim:         ['M', 1.00],
  oche:          ['M', 0.90],  // (Tiv / also Igala)
  ordue:         ['U', 0.90],
  orkar:         ['M', 1.00],
  seember:       ['M', 1.00],
  tsegba:        ['M', 1.00],
  tswam:         ['M', 1.00],
  ayua:          ['M', 1.00],
  baa:           ['M', 0.80],
  baatyough:     ['M', 1.00],
  gbaa:          ['M', 1.00],
  mbaape:        ['M', 1.00],
  mngu:          ['U', 0.85],
  ortserga:      ['M', 1.00],
  ortese:        ['M', 1.00],
  tsekende:      ['M', 1.00],
  ngohol:        ['M', 1.00],

  // ── FEMALE ────────────────────────────────────────────────────────────
  anen:          ['F', 1.00],
  dooshima:      ['F', 1.00],
  gbenda:        ['F', 1.00],
  ikaan:         ['F', 1.00],
  mwuese:        ['F', 1.00],  // very distinctive Tiv female name
  nguveren:      ['F', 1.00],
  nenzha:        ['F', 1.00],
  ngohile:       ['F', 1.00],
  nenbee:        ['F', 1.00],
  sewuese:       ['F', 1.00],
  shimawua:      ['F', 1.00],
  tsembe:        ['F', 1.00],
  tsolugh:       ['F', 1.00],
  wantu:         ['F', 1.00],
  yange:         ['F', 1.00],
};

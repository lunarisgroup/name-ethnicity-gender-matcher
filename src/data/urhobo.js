/**
 * Urhobo name dictionary
 * Format: name → [gender, confidence]
 *
 * Urhobo people: Delta State, Nigeria.
 * Also includes Isoko and Itsekiri sub-groups in Delta State.
 * Many names have the "Oghene-" (God) prefix — very distinctive.
 */

'use strict';

module.exports = {
  // ── OGHENE- (God) prefix — very distinctive ────────────────────────────
  oghenekaro:    ['M', 0.95],  // God is good (also used in Ijaw areas)
  oghenerukevwe: ['M', 1.00],  // God has protected me
  oghenerukewe:  ['F', 1.00],
  oghenekevwe:   ['M', 1.00],  // God gives life
  oghenero:      ['M', 1.00],  // God speaks
  ogheneyole:    ['M', 1.00],  // God is the owner
  oghenewoke:    ['M', 1.00],  // God is alive
  oghenemine:    ['F', 1.00],  // God knows me
  oghenechovwe:  ['F', 1.00],
  oghenenoghe:   ['F', 1.00],
  ogheneovo:     ['F', 1.00],

  // ── MALE ──────────────────────────────────────────────────────────────
  akpobome:      ['M', 1.00],
  akpofure:      ['M', 1.00],
  akpomi:        ['M', 1.00],
  daibo:         ['M', 1.00],
  ebi:           ['M', 0.85],  // (also Ijaw prefix)
  edeki:         ['M', 1.00],
  edema:         ['M', 1.00],
  edewor:        ['M', 1.00],
  ejovwoke:      ['M', 1.00],
  ejiro:         ['M', 0.90],  // (can also be female)
  emerhi:        ['M', 1.00],
  erhueh:        ['U', 0.90],
  erhuvwu:       ['M', 1.00],
  eruotor:       ['U', 0.90],
  esiri:         ['M', 1.00],
  evwodeni:      ['M', 1.00],
  eyanfeye:      ['M', 1.00],
  eyeomo:        ['M', 1.00],
  okiemute:      ['M', 1.00],  // God is in charge
  okpako:        ['M', 1.00],  // first son / firstborn
  orhiunu:       ['M', 1.00],
  oviri:         ['M', 1.00],
  ovoke:         ['U', 0.90],

  // ── FEMALE ────────────────────────────────────────────────────────────
  emefe:         ['F', 1.00],
  eruotor:       ['F', 0.90],
  ewomazino:     ['F', 1.00],
  eyeoma:        ['F', 1.00],
  rukevwe:       ['F', 1.00],  // very distinctive Urhobo female name
  ugboma:        ['F', 1.00],
  urhiefe:       ['F', 1.00],
  oghenebrorhie: ['F', 1.00],
  ohwovoriole:   ['F', 1.00],

  // ── ITSEKIRI (Delta State) ────────────────────────────────────────────
  oritsejafor:   ['M', 1.00],
  omatsone:      ['M', 1.00],
  omagbemi:      ['F', 1.00],
};

/**
 * Other Nigerian ethnic group name dictionary
 * Covers: Igala, Nupe, Gbagyi (Gwari), Idoma, Isoko, Ogoni, Ibibio sub-groups,
 *         Jukun, Mumuye, Angas, Birom, Berom, Tarok, etc.
 * Format: name → [gender, confidence, ethnicity_hint]
 * Extended format to allow sub-ethnicity tagging.
 */

'use strict';

// Note: This file uses extended format [gender, confidence, ethnic_hint]
// The data/index.js handles the ethnic_hint override.

module.exports = {
  // ── IGALA (Kogi State) ────────────────────────────────────────────────
  ameh:          ['M', 1.00, 'Igala'],
  atte:          ['M', 1.00, 'Igala'],
  ocholi:        ['M', 1.00, 'Igala'],  // Ocholi wa Ojeba
  ode:           ['M', 0.85, 'Igala'],
  odekina:       ['M', 1.00, 'Igala'],
  odele:         ['M', 1.00, 'Igala'],
  ogwuche:       ['M', 1.00, 'Igala'],
  ohere:         ['M', 1.00, 'Igala'],
  omale:         ['M', 1.00, 'Igala'],
  onu:           ['M', 0.85, 'Igala'],
  onuche:        ['M', 1.00, 'Igala'],
  onoja:         ['M', 1.00, 'Igala'],
  opaluwa:       ['M', 1.00, 'Igala'],
  ojih:          ['M', 1.00, 'Igala'],
  achimugu:      ['M', 1.00, 'Igala'],
  enejoh:        ['M', 1.00, 'Igala'],

  // ── NUPE (Niger State, Kwara State) ───────────────────────────────────
  bida:          ['M', 0.80, 'Nupe'],  // also place name
  doko:          ['M', 0.90, 'Nupe'],
  ega:           ['M', 0.90, 'Nupe'],
  kaba:          ['M', 0.90, 'Nupe'],
  lemu:          ['M', 1.00, 'Nupe'],
  tsado:         ['M', 1.00, 'Nupe'],
  zugunu:        ['M', 1.00, 'Nupe'],
  pateigi:       ['M', 1.00, 'Nupe'],
  ndayako:       ['M', 1.00, 'Nupe'],

  // ── GBAGYI / GWARI (FCT, Niger State) ────────────────────────────────
  dantawaye:     ['M', 0.90, 'Gbagyi'],
  maigoro:       ['M', 0.85, 'Gbagyi'],
  kuje:          ['M', 0.90, 'Gbagyi'],  // place/name

  // ── IDOMA (Benue State) ───────────────────────────────────────────────
  apeh:          ['M', 1.00, 'Idoma'],
  ogiri:         ['M', 1.00, 'Idoma'],
  oche:          ['M', 0.90, 'Idoma'],   // also Tiv
  okpetu:        ['M', 1.00, 'Idoma'],
  ojogbane:      ['M', 1.00, 'Idoma'],
  owoicho:       ['M', 1.00, 'Idoma'],
  amali:         ['M', 1.00, 'Idoma'],
  ochai:         ['M', 1.00, 'Idoma'],

  // ── OGONI (Rivers State) ──────────────────────────────────────────────
  saro:          ['M', 0.80, 'Ogoni'],
  nwiee:         ['F', 1.00, 'Ogoni'],
  barika:        ['M', 0.85, 'Ogoni'],
  ledum:         ['M', 1.00, 'Ogoni'],  // Ledum Mittee
  mitee:         ['M', 1.00, 'Ogoni'],

  // ── IBIBIO / ANNANG sub-groups ────────────────────────────────────────
  ndukaku:       ['M', 1.00, 'Ibibio'],
  ndarake:       ['M', 1.00, 'Ibibio'],
  umoette:       ['M', 1.00, 'Ibibio'],

  // ── JUKUN (Taraba, Benue) ─────────────────────────────────────────────
  danjuma:       ['M', 0.85, 'Jukun'],  // also Hausa/Fulani
  adi:           ['M', 0.80, 'Jukun'],
  ago:           ['M', 0.85, 'Jukun'],

  // ── BEROM / BIROM (Plateau State) ────────────────────────────────────
  davou:         ['M', 1.00, 'Berom'],
  dung:          ['M', 1.00, 'Berom'],
  gang:          ['M', 1.00, 'Berom'],
  gyang:         ['M', 1.00, 'Berom'],
  pam:           ['M', 0.90, 'Berom'],
  rwang:         ['M', 1.00, 'Berom'],
  zang:          ['M', 1.00, 'Berom'],
  bulus:         ['M', 1.00, 'Berom'],  // Paul in Berom
  yakubu:        ['M', 0.80, 'Berom'],  // shared with Hausa

  // ── TAROK (Plateau State) ─────────────────────────────────────────────
  dalyop:        ['M', 1.00, 'Tarok'],
  matyop:        ['M', 1.00, 'Tarok'],
  nyam:          ['M', 0.90, 'Tarok'],
  pwal:          ['M', 1.00, 'Tarok'],

  // ── MARGHI / KILBA (Adamawa, Borno) ──────────────────────────────────
  thlama:        ['M', 1.00, 'Marghi'],
  yaji:          ['M', 1.00, 'Marghi'],
};

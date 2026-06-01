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

  // ── CROSS-ETHNIC CHRISTIAN / BIBLICAL NAMES ───────────────────────────
  // Used by millions across Yoruba, Igbo, Efik, Ijaw and every other
  // Nigerian Christian community. Ethnicity tagged 'Other' (genuinely
  // cross-ethnic). Confidence 0.85–0.90 — gender is certain, ethnicity
  // is intentionally broad.

  // Biblical male names
  john:          ['M', 0.90, 'Other'],
  peter:         ['M', 0.90, 'Other'],
  samuel:        ['M', 0.90, 'Other'],
  david:         ['M', 0.90, 'Other'],
  moses:         ['M', 0.90, 'Other'],
  daniel:        ['M', 0.90, 'Other'],
  joseph:        ['M', 0.90, 'Other'],
  james:         ['M', 0.90, 'Other'],
  paul:          ['M', 0.90, 'Other'],
  philip:        ['M', 0.90, 'Other'],
  stephen:       ['M', 0.90, 'Other'],
  andrew:        ['M', 0.90, 'Other'],
  matthew:       ['M', 0.90, 'Other'],
  mark:          ['M', 0.90, 'Other'],
  luke:          ['M', 0.90, 'Other'],
  simon:         ['M', 0.90, 'Other'],
  thomas:        ['M', 0.90, 'Other'],
  joshua:        ['M', 0.90, 'Other'],
  isaac:         ['M', 0.90, 'Other'],
  jacob:         ['M', 0.90, 'Other'],
  solomon:       ['M', 0.90, 'Other'],
  elijah:        ['M', 0.90, 'Other'],
  ezekiel:       ['M', 0.90, 'Other'],
  nathaniel:     ['M', 0.90, 'Other'],
  jonathan:      ['M', 0.90, 'Other'],
  timothy:       ['M', 0.90, 'Other'],
  benjamin:      ['M', 0.90, 'Other'],
  gabriel:       ['M', 0.90, 'Other'],
  jesse:         ['M', 0.90, 'Other'],
  abraham:       ['M', 0.90, 'Other'],
  isaiah:        ['M', 0.90, 'Other'],

  // Biblical female names
  ruth:          ['F', 0.90, 'Other'],
  mary:          ['F', 0.90, 'Other'],
  esther:        ['F', 0.90, 'Other'],
  hannah:        ['F', 0.90, 'Other'],
  deborah:       ['F', 0.90, 'Other'],
  rachel:        ['F', 0.90, 'Other'],
  sarah:         ['F', 0.90, 'Other'],
  miriam:        ['F', 0.90, 'Other'],
  abigail:       ['F', 0.90, 'Other'],
  naomi:         ['F', 0.90, 'Other'],
  lydia:         ['F', 0.90, 'Other'],
  priscilla:     ['F', 0.90, 'Other'],
  susanna:       ['F', 0.90, 'Other'],
  judith:        ['F', 0.90, 'Other'],
  elizabeth:     ['F', 0.90, 'Other'],
  rebecca:       ['F', 0.90, 'Other'],
  leah:          ['F', 0.90, 'Other'],
  josephine:      ['F', 0.90, 'Other'],
  hannah:        ['F', 0.90, 'Other'],
  delilah:       ['F', 0.90, 'Other'],
  bethany:       ['F', 0.90, 'Other'],
  magdalene:     ['F', 0.90, 'Other'],
  salome:        ['F', 0.90, 'Other'],

  // Virtue / praise names (pan-Nigerian Christian)
  grace:         ['F', 0.90, 'Other'],
  faith:         ['F', 0.90, 'Other'],
  blessing:      ['F', 0.85, 'Other'],
  mercy:         ['F', 0.90, 'Other'],
  peace:         ['F', 0.90, 'Other'],
  joy:           ['F', 0.90, 'Other'],
  hope:          ['F', 0.90, 'Other'],
  love:          ['F', 0.85, 'Other'],
  patience:      ['F', 0.90, 'Other'],
  prudence:      ['F', 0.85, 'Other'],
  favour:        ['F', 0.85, 'Other'],
  precious:      ['F', 0.85, 'Other'],
  comfort:       ['F', 0.85, 'Other'],
  gift:          ['M', 0.75, 'Other'],
  victor:        ['M', 0.85, 'Other'],
  victory:       ['F', 0.80, 'Other'],
  praise:        ['M', 0.75, 'Other'],
  chosen:        ['M', 0.75, 'Other'],
  blessed:       ['M', 0.75, 'Other'],
  wisdom:        ['M', 0.80, 'Other'],

  // Day-of-birth names (pan-Nigerian)
  sunday:        ['M', 0.90, 'Other'],
  monday:        ['M', 0.90, 'Other'],
  tuesday:       ['M', 0.85, 'Other'],
  wednesday:     ['M', 0.85, 'Other'],
  thursday:      ['M', 0.85, 'Other'],
  friday:        ['M', 0.90, 'Other'],
  saturday:      ['M', 0.85, 'Other'],

  // God-compound names
  godwin:        ['M', 0.90, 'Other'],
  godswill:      ['M', 0.90, 'Other'],
  godspower:     ['M', 0.90, 'Other'],
  godsgift:      ['M', 0.88, 'Other'],
  thankgod:      ['M', 0.90, 'Other'],
  caleb:         ['M', 0.90, 'Other'],
  emmanuel:      ['M', 0.90, 'Other'],

  // Latin/Catholic saints — common across Delta, Rivers, Edo, Igbo, Efik
  sebastian:     ['M', 0.90, 'Other'],
  sebastine:     ['M', 0.90, 'Other'],  // Nigerian variant of Sebastian
  ambrose:       ['M', 0.90, 'Other'],
  augustine:     ['M', 0.90, 'Other'],
  austin:        ['M', 0.90, 'Other'],
  benedict:      ['M', 0.90, 'Other'],
  clement:       ['M', 0.90, 'Other'],
  cyprian:       ['M', 0.90, 'Other'],
  dominic:       ['M', 0.90, 'Other'],
  fabian:        ['M', 0.90, 'Other'],
  felix:         ['M', 0.90, 'Other'],
  francis:       ['M', 0.90, 'Other'],
  ignatius:      ['M', 0.90, 'Other'],
  innocent:      ['M', 0.88, 'Other'],
  lawrence:      ['M', 0.90, 'Other'],
  leonard:       ['M', 0.90, 'Other'],
  martin:        ['M', 0.90, 'Other'],
  michael:       ['M', 0.90, 'Other'],
  nicholas:      ['M', 0.90, 'Other'],
  patrick:       ['M', 0.90, 'Other'],
  raphael:       ['M', 0.90, 'Other'],
  rapheal:       ['M', 0.90, 'Other'],  // common Nigerian spelling
  vincent:       ['M', 0.90, 'Other'],
  victoria:      ['F', 0.85, 'Other'],
  celestine:     ['M', 0.90, 'Other'],
  celestina:     ['F', 0.90, 'Other'],
  augustina:     ['F', 0.90, 'Other'],
  benedetta:     ['F', 0.90, 'Other'],
  felicia:       ['F', 0.90, 'Other'],
  francisca:     ['F', 0.90, 'Other'],
  patricia:      ['F', 0.90, 'Other'],
  veronica:      ['F', 0.90, 'Other'],
  virginia:      ['F', 0.90, 'Other'],
  catherine:     ['F', 0.90, 'Other'],
  catherina:     ['F', 0.90, 'Other'],  // common Nigerian spelling
  cecilia:       ['F', 0.90, 'Other'],
  cecily:        ['F', 0.90, 'Other'],
  clara:         ['F', 0.90, 'Other'],

  //__________
  richard:       ['M', 0.90, 'Other'],
  charles:       ['M', 0.90, 'Other'],
  charlie:       ['M', 0.90, 'Other'],
  jimmy:         ['M', 0.90, 'Other'],
  jasmine:       ['F', 0.90, 'Other'],
  joyce:         ['F', 0.90, 'Other'],
  julia:         ['F', 0.90, 'Other'],
  christopher:   ['M', 0.90, 'Other'],
  christiana:    ['F', 0.90, 'Other'],
  christine:     ['F', 0.90, 'Other'],
  christy:       ['F', 0.90, 'Other'],
  edwards:       ['M', 0.90, 'Other'],
  edward:        ['M', 0.90, 'Other'],
  edwin:         ['M', 0.90, 'Other'],
};

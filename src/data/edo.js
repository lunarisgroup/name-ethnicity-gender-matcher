/**
 * Edo (Bini) name dictionary
 * Format: name → [gender, confidence]
 *
 * Edo people: Edo State (capital Benin City), historically the Benin Kingdom.
 * Also includes Esan, Owan, Etsako sub-groups.
 * Names often feature the Osa- (God) root and Omoh- (child of) patterns.
 */

'use strict';

module.exports = {
  // ── MALE ──────────────────────────────────────────────────────────────
  agbons:        ['M', 1.00],
  aimere:        ['M', 1.00],
  aimufua:       ['M', 1.00],
  aisosa:        ['U', 0.85],
  akhere:        ['U', 0.85],
  akhigbe:       ['M', 1.00],
  akhilomen:     ['M', 1.00],
  akhimien:      ['M', 1.00],
  amen:          ['M', 0.85],  // (also Hebrew/Christian, lower confidence)
  amenawon:      ['M', 1.00],
  ehigie:        ['M', 1.00],
  ehinome:       ['F', 1.00],
  ehiomoghan:    ['M', 1.00],
  ehiosun:       ['M', 1.00],
  ehizogie:      ['M', 1.00],
  enaboifo:      ['M', 1.00],
  enahoro:       ['M', 1.00],
  enakhe:        ['M', 1.00],
  enaohwo:       ['M', 1.00],
  erhunmwunsee:  ['M', 1.00],
  esosa:         ['U', 0.90],  // God saves (Osa = God in Edo)
  etinosa:       ['U', 0.90],  // God is great
  evbayiro:      ['M', 1.00],
  evbuomwan:     ['M', 1.00],
  evbu:          ['M', 0.90],
  igiebor:       ['M', 1.00],
  ikhana:        ['M', 1.00],
  iku:           ['M', 0.85],
  izekor:        ['M', 1.00],
  oghenerugba:   ['M', 1.00],
  ogbeide:       ['M', 1.00],
  osahon:        ['M', 1.00],
  osazemen:      ['U', 0.95],  // God's time / God decides
  osagie:        ['M', 1.00],  // God has won / God is honorable
  osaro:         ['M', 1.00],  // God is great
  osas:          ['M', 0.90],  // God (short form — very Edo-specific)
  osi:           ['M', 0.85],
  uyigue:        ['M', 1.00],
  omoruyi:       ['M', 1.00],  // child I am proud of
  omorodion:     ['M', 1.00],  // child of my father's house
  omoregie:      ['M', 1.00],  // child of a king
  omokaro:       ['M', 1.00],
  omonuwa:       ['M', 1.00],

  // ── FEMALE ────────────────────────────────────────────────────────────
  afure:         ['F', 1.00],
  efosa:         ['F', 1.00],  // God/wealth has multiplied
  ehi:           ['F', 0.85],  // (Edo spiritual concept of destiny)
  itohan:        ['F', 1.00],  // God is sufficient / I am satisfied with God
  omo:           ['F', 0.75],  // child (can be a name prefix too)
  omosigho:      ['F', 1.00],
  omosede:       ['F', 1.00],  // child is crowned
  ovbiagele:     ['F', 1.00],

  // ── ESAN SUB-GROUP ────────────────────────────────────────────────────
  imasuen:       ['M', 1.00],
  iyoha:         ['M', 1.00],
  ehikhamenor:   ['M', 1.00],
};

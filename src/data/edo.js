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

  // ── More Edo / Bini male names ────────────────────────────────────────
  adesuwa:       ['F', 1.00],  // the crown has pride (Edo female)
  aghahowa:      ['M', 1.00],  // Edo traditional
  agho:          ['M', 1.00],  // Edo traditional
  aghoore:       ['M', 1.00],  // Edo traditional
  airhiavbere:   ['M', 1.00],  // Edo traditional
  aimuamwosa:    ['M', 1.00],  // Edo: God is good
  aimwosa:       ['M', 1.00],  // Edo: God is good (variant)
  airen:         ['M', 1.00],  // Edo traditional
  airende:       ['M', 1.00],  // Edo traditional
  airenomon:     ['M', 1.00],  // Edo traditional
  akhigbemen:    ['M', 1.00],  // Edo traditional
  akhilomen:     ['M', 1.00],  // already present
  akhimien:      ['M', 1.00],  // already present
  akhirevbulu:   ['M', 1.00],  // Edo traditional
  akugbe:        ['M', 1.00],  // Edo traditional
  akure:         ['M', 0.85],  // Edo/city name
  amadin:        ['M', 1.00],  // Edo traditional
  amaize:        ['M', 1.00],  // Edo traditional
  amenaghawon:   ['M', 1.00],  // Edo traditional
  amenomen:      ['M', 1.00],  // Edo traditional
  amenzode:      ['M', 1.00],  // Edo traditional
  ameze:         ['M', 1.00],  // Edo traditional
  amihere:       ['M', 1.00],  // Edo traditional
  amioghena:     ['M', 1.00],  // Edo traditional
  amwosa:        ['M', 1.00],  // Edo traditional
  anioke:        ['M', 1.00],  // Edo traditional
  anobor:        ['M', 1.00],  // Edo traditional
  arodudu:       ['M', 1.00],  // Edo traditional
  asikhia:       ['M', 1.00],  // Edo traditional
  asobie:        ['M', 1.00],  // Edo traditional
  asowata:       ['M', 1.00],  // Edo traditional
  ayemere:       ['M', 1.00],  // Edo traditional
  ayevbuonwan:   ['M', 1.00],  // Edo traditional
  ayoola:        ['M', 0.80],  // used in Edo (shared with Yoruba)
  azika:         ['M', 1.00],  // Edo traditional
  aziken:        ['M', 1.00],  // Edo traditional
  azoda:         ['M', 1.00],  // Edo traditional
  egbuna:        ['M', 1.00],  // Edo traditional (also Igbo)
  eghaghe:       ['M', 1.00],  // Edo traditional
  egharevba:     ['M', 1.00],  // Edo traditional
  eghianruwa:    ['M', 1.00],  // Edo traditional
  ehiabor:       ['M', 1.00],  // Edo traditional
  ehigie:        ['M', 1.00],  // already present
  ehikhamenor:   ['M', 1.00],  // already present
  ehimen:        ['M', 1.00],  // Edo traditional
  ehiomoghan:    ['M', 1.00],  // already present
  ehisosa:       ['U', 0.90],  // God saves (variant of Esosa)
  ehiuwaen:      ['M', 1.00],  // Edo traditional
  enaboghare:    ['M', 1.00],  // Edo traditional
  enaboifo:      ['M', 1.00],  // already present
  enaholo:       ['M', 1.00],  // Edo traditional
  enahoro:       ['M', 1.00],  // already present
  enakhe:        ['M', 1.00],  // already present
  enaohwo:       ['M', 1.00],  // already present
  enobakhare:    ['M', 1.00],  // Edo traditional
  enobun:        ['M', 1.00],  // Edo traditional
  enorense:      ['M', 1.00],  // Edo traditional
  enoyoze:       ['M', 1.00],  // Edo traditional
  enoze:         ['M', 1.00],  // Edo traditional
  erhirhie:      ['M', 1.00],  // Edo traditional
  erhueh:        ['U', 0.90],  // Edo traditional
  esigie:        ['M', 1.00],  // Edo traditional (name of Oba of Benin)
  evbaghara:     ['M', 1.00],  // Edo traditional
  evbayiro:      ['M', 1.00],  // already present
  evbuobanosa:   ['M', 1.00],  // Edo: God has come
  evbuomwan:     ['M', 1.00],  // already present
  evbure:        ['M', 1.00],  // Edo traditional
  evburun:       ['M', 1.00],  // Edo traditional
  eweka:         ['M', 1.00],  // Edo traditional (name of Oba)
  ewomazino:     ['F', 1.00],  // Urhobo — skip (already in urhobo.js)
  igbafe:        ['M', 1.00],  // Edo traditional
  igbinedion:    ['M', 1.00],  // Edo traditional
  igbinosa:      ['M', 1.00],  // God saves (Edo)
  ighodalo:      ['M', 1.00],  // Edo traditional
  ighorhioja:    ['M', 1.00],  // Edo traditional
  igiekhume:     ['M', 1.00],  // Edo traditional
  ikede:         ['M', 1.00],  // Edo traditional
  ikhenoba:      ['M', 1.00],  // Edo traditional
  ikhuiwu:       ['M', 1.00],  // Edo traditional
  ikpomwosa:     ['M', 1.00],  // Edo: God's work
  ikponmwosa:    ['M', 1.00],  // Edo: God's work (variant)
  ikponwosa:     ['M', 1.00],  // Edo: God's work
  iteire:        ['M', 1.00],  // Edo traditional
  itua:          ['M', 1.00],  // Edo traditional
  iyore:         ['F', 1.00],  // Edo traditional female
  iyoyi:         ['M', 1.00],  // Edo traditional
  izevbekhai:    ['M', 1.00],  // Edo traditional
  izilein:       ['M', 1.00],  // Edo traditional
  nosa:          ['M', 0.90],  // short for Ehinosa / Osas
  nosakhare:     ['M', 1.00],  // Edo traditional
  nosaize:       ['M', 1.00],  // Edo traditional
  nosamuede:     ['M', 1.00],  // Edo traditional
  nosareme:      ['M', 1.00],  // Edo traditional
  nosawe:        ['M', 1.00],  // Edo traditional
  nosaze:        ['M', 1.00],  // Edo traditional
  obadiaru:      ['M', 1.00],  // Edo traditional
  obahiagbon:    ['M', 1.00],  // Edo traditional
  obakpolor:     ['M', 1.00],  // Edo traditional
  obas:          ['M', 0.85],  // Edo: God
  obaseki:       ['M', 1.00],  // Edo traditional (king who sees)
  obazee:        ['M', 1.00],  // Edo traditional
  obazenu:       ['M', 1.00],  // Edo traditional
  odaro:         ['M', 1.00],  // Edo traditional
  odibe:         ['M', 1.00],  // Edo traditional
  odion:         ['M', 1.00],  // Edo: first born
  odiwo:         ['M', 1.00],  // Edo traditional
  oduare:        ['M', 1.00],  // Edo: God exists
  ogbeifun:      ['M', 1.00],  // Edo traditional
  ogbeinomwoba:  ['M', 1.00],  // Edo traditional
  ogbemi:        ['M', 1.00],  // Edo traditional
  ogbewale:      ['M', 1.00],  // Edo traditional
  oghenebrume:   ['M', 1.00],  // Edo (God is good)
  oghenemine:    ['F', 1.00],  // Urhobo — skip
  oguike:        ['M', 1.00],  // Edo traditional
  ohimai:        ['M', 1.00],  // Edo traditional
  ohiwerei:      ['M', 1.00],  // Edo traditional
  oizerefo:      ['M', 1.00],  // Edo traditional
  okaka:         ['M', 1.00],  // Edo traditional
  okiebunu:      ['M', 1.00],  // Edo traditional
  okunola:       ['M', 0.85],  // used in Edo (Yoruba origin)
  okutu:         ['M', 1.00],  // Edo traditional
  olaye:         ['M', 0.85],  // Edo/Yoruba shared
  omobude:       ['M', 1.00],  // Edo traditional
  omobuwajo:     ['M', 1.00],  // Edo traditional
  omofoma:       ['M', 1.00],  // Edo traditional
  omokaro:       ['M', 1.00],  // already present
  omoragbon:     ['M', 1.00],  // Edo traditional
  omosogie:      ['M', 1.00],  // Edo traditional
  omoruyi:       ['M', 1.00],  // already present
  omosede:       ['F', 1.00],  // already present
  omonhenmhen:   ['M', 1.00],  // Edo traditional
  omonuwa:       ['M', 1.00],  // already present
  omorodion:     ['M', 1.00],  // already present
  omosigho:      ['F', 1.00],  // already present
  osabuohien:    ['M', 1.00],  // Edo traditional
  osadolor:      ['M', 1.00],  // Edo traditional
  osadumwense:   ['M', 1.00],  // Edo traditional
  osagie:        ['M', 1.00],  // already present
  osaghae:       ['M', 1.00],  // Edo traditional
  osagyere:      ['M', 1.00],  // Edo traditional
  osahon:        ['M', 1.00],  // already present
  osaigbovo:     ['M', 1.00],  // Edo: God made this clear
  osakpamwan:    ['M', 1.00],  // Edo traditional
  osamuede:      ['M', 1.00],  // Edo traditional
  osarobo:       ['M', 1.00],  // Edo traditional
  osaro:         ['M', 1.00],  // already present
  osarumwense:   ['M', 1.00],  // Edo traditional
  osas:          ['M', 0.90],  // already present
  osazemen:      ['U', 0.95],  // already present
  osifo:         ['M', 1.00],  // Edo traditional
  otaigbe:       ['M', 1.00],  // Edo traditional
  otaiko:        ['M', 1.00],  // Edo traditional
  otodafe:       ['M', 1.00],  // Edo traditional
  ovbiagele:     ['F', 1.00],  // already present
  ovbiye:        ['F', 1.00],  // Edo traditional female
  ovomofe:       ['M', 1.00],  // Edo traditional
  ovuakporie:    ['M', 1.00],  // Edo traditional
  ovuefeyen:     ['F', 1.00],  // Edo traditional female
  owoniyi:       ['M', 0.85],  // Edo/Yoruba shared
  uyigue:        ['M', 1.00],  // already present
  uwagboe:       ['M', 1.00],  // Edo traditional
  uwaila:        ['M', 1.00],  // Edo traditional
  uwakonye:      ['M', 1.00],  // Edo traditional
  uwasomba:      ['M', 1.00],  // Edo traditional
  uwhubetine:    ['M', 1.00],  // Edo traditional
  uyi:           ['M', 0.85],  // Edo: honor / prestige
  uyigue:        ['M', 1.00],  // already present
};

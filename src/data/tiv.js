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

  // ── More TER- prefix names ────────────────────────────────────────────
  terabishi:     ['M', 1.00],  // Tiv traditional
  tercii:        ['M', 1.00],  // Tiv traditional
  terfa:         ['M', 1.00],  // already present
  tergee:        ['M', 1.00],  // Tiv traditional
  terhav:        ['M', 1.00],  // Tiv traditional
  terhemba:      ['M', 1.00],  // Tiv traditional
  terhibi:       ['M', 1.00],  // Tiv traditional
  terkaa:        ['M', 1.00],  // already present
  terkegh:       ['M', 1.00],  // Tiv traditional
  terkimbi:      ['M', 1.00],  // already present
  terkyaa:       ['M', 1.00],  // Tiv traditional
  termun:        ['M', 1.00],  // Tiv traditional
  ternande:      ['M', 1.00],  // Tiv traditional
  terniwe:       ['M', 1.00],  // Tiv traditional
  ternongo:      ['M', 1.00],  // Tiv traditional
  ternum:        ['M', 1.00],  // Tiv traditional
  ternwa:        ['M', 1.00],  // Tiv traditional
  teroo:         ['M', 1.00],  // Tiv traditional
  tersar:        ['M', 1.00],  // Tiv traditional
  terse:         ['M', 1.00],  // Tiv traditional
  terseer:       ['M', 1.00],  // Tiv traditional
  tersuugh:      ['M', 1.00],  // Tiv traditional
  tertindi:      ['M', 1.00],  // Tiv traditional
  tertsegba:     ['M', 1.00],  // Tiv traditional
  tertsugh:      ['M', 1.00],  // Tiv traditional
  terumun:       ['M', 1.00],  // Tiv traditional
  terungwa:      ['M', 1.00],  // Tiv traditional (in pattern file)
  terwe:         ['M', 1.00],  // Tiv traditional
  terwase:       ['M', 1.00],  // Tiv: the father is beautiful
  terzungwe:     ['M', 1.00],  // Tiv traditional
  terdzungwe:    ['M', 1.00],  // Tiv traditional (variant)

  // ── More AONDO- prefix names (God) ────────────────────────────────────
  aondofa:       ['M', 1.00],  // God's given
  aondoakaa:     ['M', 1.00],  // already present
  aondohemba:    ['M', 1.00],  // God is great
  aondona:       ['M', 1.00],  // God is here
  aondoover:     ['M', 1.00],  // already present
  aondoter:      ['M', 1.00],  // God's father
  aondotse:      ['M', 1.00],  // God's child
  aondover:      ['M', 1.00],  // already present — skip
  aondo:         ['M', 0.90],  // already present
  aondwom:       ['M', 1.00],  // God has given
  aondzerbe:     ['M', 1.00],  // God is good
  aondze:        ['M', 1.00],  // God (variant)

  // ── More Tiv male names ───────────────────────────────────────────────
  aba:           ['M', 0.85],  // Tiv traditional
  abagu:         ['M', 1.00],  // Tiv traditional
  abande:        ['M', 1.00],  // Tiv traditional
  agbe:          ['M', 1.00],  // Tiv traditional
  agena:         ['M', 1.00],  // Tiv traditional
  agom:          ['M', 1.00],  // Tiv traditional
  agwa:          ['M', 1.00],  // Tiv traditional
  ahar:          ['M', 1.00],  // Tiv traditional
  ahile:         ['M', 1.00],  // Tiv traditional
  akawe:         ['M', 1.00],  // Tiv traditional
  akende:        ['M', 1.00],  // Tiv traditional
  akila:         ['M', 1.00],  // Tiv traditional
  akinde:        ['M', 1.00],  // Tiv traditional
  akuma:         ['M', 1.00],  // Tiv traditional
  aligba:        ['M', 1.00],  // Tiv traditional
  ambe:          ['M', 1.00],  // Tiv traditional
  anchur:        ['M', 1.00],  // Tiv traditional
  ande:          ['M', 1.00],  // Tiv traditional
  angbashim:     ['M', 1.00],  // Tiv traditional
  angen:         ['M', 1.00],  // Tiv traditional
  anongo:        ['M', 1.00],  // Tiv traditional
  ansar:         ['M', 1.00],  // Tiv traditional
  antoo:         ['M', 1.00],  // Tiv traditional
  anvur:         ['M', 1.00],  // Tiv traditional
  anyam:         ['M', 1.00],  // Tiv traditional
  anyor:         ['M', 1.00],  // Tiv traditional
  anyu:          ['M', 1.00],  // Tiv traditional
  asue:          ['M', 1.00],  // Tiv traditional
  atange:        ['M', 1.00],  // Tiv traditional
  atim:          ['M', 1.00],  // Tiv traditional (also Efik female)
  atoo:          ['M', 1.00],  // Tiv traditional
  atsem:         ['M', 1.00],  // Tiv traditional
  atseyough:     ['M', 1.00],  // Tiv traditional
  atsuwe:        ['M', 1.00],  // Tiv traditional
  ayua:          ['M', 1.00],  // already present
  baa:           ['M', 0.80],  // already present
  baatyough:     ['M', 1.00],  // already present
  bende:         ['M', 1.00],  // Tiv traditional
  benen:         ['M', 1.00],  // Tiv traditional
  biam:          ['M', 1.00],  // Tiv traditional
  butswat:       ['M', 1.00],  // Tiv traditional
  chia:          ['M', 0.85],  // already present
  chimwa:        ['M', 1.00],  // Tiv traditional
  chorun:        ['M', 1.00],  // Tiv traditional
  daapuu:        ['M', 1.00],  // Tiv traditional
  dadum:         ['M', 1.00],  // Tiv traditional
  damen:         ['M', 1.00],  // Tiv traditional
  dange:         ['M', 1.00],  // Tiv traditional
  denen:         ['M', 1.00],  // already present
  denwe:         ['M', 1.00],  // Tiv traditional
  dese:          ['M', 1.00],  // Tiv traditional
  doofan:        ['M', 1.00],  // Tiv traditional
  doom:          ['M', 1.00],  // Tiv: lineage/clan
  doombegh:      ['M', 1.00],  // Tiv traditional
  doorsue:       ['M', 1.00],  // Tiv traditional
  doosuur:       ['M', 1.00],  // already present
  dur:           ['M', 1.00],  // Tiv traditional
  dura:          ['M', 1.00],  // Tiv traditional
  dzer:          ['M', 1.00],  // Tiv traditional
  embe:          ['M', 1.00],  // Tiv traditional
  fanen:         ['M', 1.00],  // Tiv traditional
  fanen:         ['M', 1.00],  // Tiv traditional
  fange:         ['M', 1.00],  // Tiv traditional
  fanem:         ['M', 1.00],  // Tiv traditional
  fikwa:         ['M', 1.00],  // Tiv traditional
  gaga:          ['M', 0.85],  // Tiv traditional
  gavar:         ['M', 1.00],  // Tiv traditional
  gbaa:          ['M', 1.00],  // already present
  gban:          ['M', 1.00],  // Tiv traditional
  gbatyu:        ['M', 1.00],  // Tiv traditional
  gber:          ['M', 1.00],  // Tiv traditional
  gbom:          ['M', 1.00],  // Tiv traditional
  gbou:          ['M', 1.00],  // Tiv traditional
  gbua:          ['M', 1.00],  // Tiv traditional
  gbue:          ['M', 1.00],  // Tiv traditional
  gbwa:          ['M', 1.00],  // Tiv traditional
  gema:          ['M', 1.00],  // Tiv traditional
  genger:        ['M', 1.00],  // Tiv traditional
  iorkyaa:       ['M', 1.00],  // Tiv traditional
  iornem:        ['M', 1.00],  // Tiv traditional
  iorwer:        ['M', 1.00],  // Tiv traditional
  itor:          ['M', 1.00],  // Tiv traditional
  ityav:         ['M', 1.00],  // already present
  ityonyom:      ['M', 1.00],  // Tiv traditional
  iwar:          ['M', 1.00],  // Tiv traditional
  iwe:           ['M', 1.00],  // Tiv traditional
  jev:           ['M', 1.00],  // already present
  jimin:         ['M', 1.00],  // already present
  jirgi:         ['M', 1.00],  // Tiv traditional
  jua:           ['M', 0.85],  // Tiv traditional
  jude:          ['M', 0.85],  // Christian name common in Benue
  kato:          ['M', 1.00],  // Tiv traditional
  kater:         ['M', 1.00],  // already present
  kayu:          ['M', 1.00],  // Tiv traditional
  kbaa:          ['M', 1.00],  // Tiv traditional
  ker:           ['M', 0.85],  // Tiv traditional
  kerna:         ['M', 1.00],  // Tiv traditional
  kpabi:         ['M', 1.00],  // Tiv traditional
  kpam:          ['M', 1.00],  // Tiv traditional
  kparev:        ['M', 1.00],  // Tiv: clan name
  kpen:          ['M', 1.00],  // Tiv traditional
  kper:          ['M', 1.00],  // Tiv traditional
  kpoor:         ['M', 1.00],  // Tiv traditional
  kpos:          ['M', 1.00],  // Tiv traditional
  kpough:        ['M', 1.00],  // Tiv traditional
  kpuun:         ['M', 1.00],  // Tiv traditional
  kwagher:       ['M', 1.00],  // Tiv traditional
  kwande:        ['M', 1.00],  // Tiv traditional
  lam:           ['M', 0.85],  // Tiv traditional
  lee:           ['M', 0.85],  // Tiv traditional
  lev:           ['M', 1.00],  // Tiv traditional
  lua:           ['M', 1.00],  // Tiv traditional
  mbayagba:      ['M', 1.00],  // Tiv traditional
  mbaape:        ['M', 1.00],  // already present
  mbaior:        ['M', 1.00],  // Tiv traditional
  mbaper:        ['M', 1.00],  // Tiv traditional
  mbatyough:     ['M', 1.00],  // Tiv traditional
  mbawar:        ['M', 1.00],  // already present
  mbayange:      ['M', 1.00],  // Tiv traditional
  mkar:          ['M', 1.00],  // already present
  mngu:          ['U', 0.85],  // already present
  mnyim:         ['M', 1.00],  // already present
  mtyoor:        ['M', 1.00],  // Tiv traditional
  nanev:         ['M', 1.00],  // Tiv traditional
  nde:           ['M', 0.85],  // Tiv traditional
  ndever:        ['M', 1.00],  // Tiv traditional
  ngohol:        ['M', 1.00],  // already present
  ngumber:       ['M', 1.00],  // Tiv traditional
  nnande:        ['M', 1.00],  // Tiv traditional
  nom:           ['M', 0.85],  // Tiv traditional
  nomi:          ['M', 1.00],  // Tiv traditional
  nomwa:         ['M', 1.00],  // Tiv traditional
  nyangban:      ['M', 1.00],  // Tiv traditional
  nyom:          ['M', 1.00],  // Tiv traditional
  ode:           ['M', 0.85],  // Tiv (also other groups)
  ondo:          ['M', 0.85],  // Tiv traditional
  ongu:          ['M', 1.00],  // Tiv traditional
  ordue:         ['U', 0.90],  // already present
  orkar:         ['M', 1.00],  // already present
  ortse:         ['M', 1.00],  // Tiv traditional
  ortserga:      ['M', 1.00],  // already present
  ortese:        ['M', 1.00],  // already present
  ortyom:        ['M', 1.00],  // Tiv traditional
  orwer:         ['M', 1.00],  // Tiv traditional
  pande:         ['M', 1.00],  // Tiv traditional
  per:           ['M', 0.85],  // Tiv traditional
  piakaan:       ['M', 1.00],  // Tiv traditional
  pii:           ['M', 0.85],  // Tiv traditional
  sadik:         ['M', 0.85],  // Muslim Tiv name
  seember:       ['M', 1.00],  // already present
  sha:           ['M', 0.85],  // Tiv traditional
  sham:          ['M', 1.00],  // Tiv traditional
  shama:         ['M', 1.00],  // Tiv traditional
  shambe:        ['M', 1.00],  // Tiv traditional
  shar:          ['M', 1.00],  // Tiv traditional
  shenge:        ['M', 1.00],  // Tiv traditional
  shimgba:       ['M', 1.00],  // Tiv traditional
  sor:           ['M', 0.85],  // Tiv traditional
  suha:          ['M', 1.00],  // Tiv traditional
  sue:           ['M', 0.85],  // Tiv traditional
  sua:           ['M', 0.85],  // Tiv traditional
  suundu:        ['M', 1.00],  // Tiv traditional
  temen:         ['M', 1.00],  // Tiv traditional
  ton:           ['M', 0.85],  // Tiv traditional
  toroo:         ['M', 1.00],  // Tiv traditional
  tsegba:        ['M', 1.00],  // already present
  tsekende:      ['M', 1.00],  // already present
  tsembe:        ['F', 1.00],  // already present (female)
  tserger:       ['M', 1.00],  // Tiv traditional
  tsetar:        ['M', 1.00],  // Tiv traditional
  tsewua:        ['M', 1.00],  // Tiv traditional
  tson:          ['M', 1.00],  // Tiv traditional
  tsvav:         ['M', 1.00],  // Tiv traditional
  tswam:         ['M', 1.00],  // already present
  tundo:         ['M', 1.00],  // Tiv traditional
  tyav:          ['M', 1.00],  // Tiv traditional
  tyem:          ['M', 1.00],  // Tiv traditional
  tyena:         ['M', 1.00],  // Tiv traditional
  tyoakaa:       ['M', 1.00],  // Tiv traditional
  tyohol:        ['M', 1.00],  // Tiv traditional
  tyom:          ['M', 1.00],  // Tiv traditional
  tyongo:        ['M', 1.00],  // Tiv traditional
  tyoughase:     ['M', 1.00],  // Tiv traditional
  tyover:        ['M', 1.00],  // Tiv traditional
  ukan:          ['M', 1.00],  // Tiv traditional
  ukan:          ['M', 1.00],  // Tiv traditional
  usu:           ['M', 0.85],  // Tiv traditional
  utange:        ['M', 1.00],  // Tiv traditional
  uter:          ['M', 1.00],  // Tiv traditional
  uto:           ['M', 0.85],  // Tiv traditional
  utor:          ['M', 1.00],  // Tiv traditional
  uyam:          ['M', 1.00],  // Tiv traditional
  vange:         ['M', 1.00],  // Tiv traditional
  var:           ['M', 0.85],  // Tiv traditional
  ver:           ['M', 0.85],  // Tiv traditional
  yiwa:          ['M', 1.00],  // Tiv traditional

  // ── More Tiv female names ─────────────────────────────────────────────
  abenga:        ['F', 1.00],  // Tiv traditional female
  adzenge:       ['F', 1.00],  // Tiv traditional female
  agber:         ['F', 1.00],  // Tiv traditional female
  agbede:        ['F', 1.00],  // Tiv traditional female
  agne:          ['F', 1.00],  // Tiv traditional female
  agwaza:        ['F', 1.00],  // Tiv traditional female
  aibee:         ['F', 1.00],  // Tiv traditional female
  aiku:          ['F', 1.00],  // Tiv traditional female
  aken:          ['F', 1.00],  // Tiv traditional female
  akende:        ['F', 1.00],  // Tiv (can be female)
  akese:         ['F', 1.00],  // Tiv traditional female
  anen:          ['F', 1.00],  // already present
  angyu:         ['F', 1.00],  // Tiv traditional female
  anyam:         ['F', 0.85],  // Tiv can be female
  asaan:         ['F', 1.00],  // Tiv traditional female
  atseyough:     ['F', 0.85],  // Tiv traditional can be female
  awar:          ['F', 1.00],  // Tiv traditional female
  awua:          ['F', 1.00],  // Tiv traditional female
  ayember:       ['F', 1.00],  // Tiv traditional female
  ayongo:        ['F', 1.00],  // Tiv traditional female
  azaa:          ['F', 1.00],  // Tiv traditional female
  azenda:        ['F', 1.00],  // Tiv traditional female
  bitrus:        ['M', 0.85],  // Peter in Tiv
  damdam:        ['F', 1.00],  // Tiv traditional female
  dese:          ['F', 0.85],  // Tiv can be female
  dooshima:      ['F', 1.00],  // already present
  fanger:        ['F', 1.00],  // Tiv traditional female
  fanen:         ['F', 0.85],  // Tiv can be female
  gbenda:        ['F', 1.00],  // already present
  geer:          ['F', 1.00],  // Tiv traditional female
  genge:         ['F', 1.00],  // Tiv traditional female
  genger:        ['F', 0.85],  // Tiv can be female
  gyar:          ['F', 1.00],  // Tiv traditional female
  hyande:        ['F', 1.00],  // Tiv traditional female
  iaan:          ['F', 1.00],  // Tiv traditional female
  iember:        ['F', 1.00],  // Tiv traditional female
  ikaan:         ['F', 1.00],  // already present
  ikyar:         ['F', 1.00],  // Tiv traditional female
  ityem:         ['F', 1.00],  // Tiv traditional female
  jengwuin:      ['F', 1.00],  // Tiv traditional female
  jese:          ['F', 1.00],  // Tiv traditional female
  karibo:        ['F', 0.85],  // Tiv traditional female (also Ijaw)
  ker:           ['F', 0.85],  // Tiv can be female
  kpangen:       ['F', 1.00],  // Tiv traditional female
  kwagher:       ['F', 0.85],  // Tiv can be female
  mber:          ['F', 1.00],  // Tiv traditional female
  mbver:         ['F', 1.00],  // Tiv traditional female
  mwuese:        ['F', 1.00],  // already present
  nande:         ['F', 1.00],  // Tiv traditional female
  nanya:         ['F', 1.00],  // Tiv traditional female
  ngbazuu:       ['F', 1.00],  // Tiv traditional female
  ngbede:        ['F', 1.00],  // Tiv traditional female
  ngohol:        ['F', 0.85],  // Tiv can be female
  ngohile:       ['F', 1.00],  // already present
  nguveren:      ['F', 1.00],  // already present
  nenbee:        ['F', 1.00],  // already present
  nenzha:        ['F', 1.00],  // already present
  ngbakuhe:      ['F', 1.00],  // Tiv traditional female
  nom:           ['F', 0.85],  // Tiv can be female
  nzua:          ['F', 1.00],  // Tiv traditional female
  oryi:          ['F', 1.00],  // Tiv traditional female
  ordue:         ['F', 0.85],  // Tiv can be female
  seember:       ['F', 0.85],  // Tiv can be female
  sewuese:       ['F', 1.00],  // already present
  shimawua:      ['F', 1.00],  // already present
  suha:          ['F', 0.85],  // Tiv can be female
  terhile:       ['F', 1.00],  // already present
  tertsea:       ['F', 1.00],  // already present
  terwase:       ['F', 0.85],  // Tiv can be female (variant meaning)
  tiaseer:       ['F', 1.00],  // Tiv traditional female
  tigwer:        ['F', 1.00],  // Tiv traditional female
  tsolugh:       ['F', 1.00],  // already present
  tyanger:       ['F', 1.00],  // Tiv traditional female
  tyangu:        ['F', 1.00],  // Tiv traditional female
  tyoapuu:       ['F', 1.00],  // Tiv traditional female
  tyomba:        ['F', 1.00],  // Tiv traditional female
  tyuhe:         ['F', 1.00],  // Tiv traditional female
  ukan:          ['F', 0.85],  // Tiv can be female
  uran:          ['F', 1.00],  // Tiv traditional female
  utange:        ['F', 0.85],  // Tiv can be female
  wantu:         ['F', 1.00],  // already present
  wende:         ['F', 1.00],  // Tiv traditional female
  yange:         ['F', 1.00],  // already present
  yange:         ['F', 1.00],  // Tiv traditional female
  yembe:         ['F', 1.00],  // Tiv traditional female
  yima:          ['F', 1.00],  // Tiv traditional female
  yimber:        ['F', 1.00],  // Tiv traditional female
  yonbe:         ['F', 1.00],  // Tiv traditional female
  yongo:         ['F', 1.00],  // Tiv traditional female
  yua:           ['F', 1.00],  // Tiv traditional female
  yunge:         ['F', 1.00],  // Tiv traditional female
};

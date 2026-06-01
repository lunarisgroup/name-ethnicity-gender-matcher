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

  // ── More Kanuri male names ────────────────────────────────────────────
  abba:          ['M', 0.90],  // Kanuri: father / elder (used as name)
  abbagana:      ['M', 1.00],  // Kanuri: father of the land
  abdu:          ['M', 0.90],  // Kanuri form of Abdullahi
  abiso:         ['M', 1.00],  // Kanuri traditional
  adisu:         ['M', 1.00],  // Kanuri traditional
  alibe:         ['M', 1.00],  // Kanuri form of Ali
  aliyu:         ['M', 0.85],  // Kanuri/Hausa shared
  alkali:        ['M', 0.90],  // also Hausa — judge/qadi
  almajiris:     ['M', 0.85],  // Kanuri: student of Islamic school
  altine:        ['F', 1.00],  // Kanuri: born on Monday (Altine = Monday)
  arabe:         ['M', 1.00],  // Kanuri traditional
  askia:         ['M', 1.00],  // Kanuri: royal title used as name
  babagana:      ['M', 1.00],  // Kanuri: father of the land / people
  bagudu:        ['M', 1.00],  // Kanuri traditional
  baguwa:        ['F', 1.00],  // Kanuri traditional female
  bako:          ['M', 0.90],  // Kanuri: stranger / newcomer
  barno:         ['M', 1.00],  // Kanuri: from Borno
  bazza:         ['M', 1.00],  // Kanuri traditional
  bilama:        ['M', 1.00],  // Kanuri traditional
  biri:          ['M', 1.00],  // Kanuri traditional
  buba:          ['M', 0.90],  // Kanuri/Fulani form of Abu Bakr
  bulama:        ['M', 1.00],  // already present
  bumshe:        ['M', 1.00],  // Kanuri traditional
  bunga:         ['M', 1.00],  // Kanuri traditional
  buni:          ['M', 1.00],  // Kanuri traditional
  bura:          ['M', 0.90],  // Kanuri/Bura-Pabir
  burama:        ['M', 1.00],  // Kanuri form of Ibrahim
  burdugal:      ['M', 1.00],  // Kanuri traditional
  dala:          ['M', 1.00],  // Kanuri traditional
  dalatari:      ['M', 1.00],  // Kanuri traditional
  dambazau:      ['M', 1.00],  // Kanuri/Hausa traditional
  damori:        ['M', 1.00],  // Kanuri traditional
  damsami:       ['M', 1.00],  // Kanuri traditional
  danjari:       ['M', 1.00],  // Kanuri traditional
  dankashim:     ['M', 1.00],  // Kanuri traditional
  dasta:         ['M', 1.00],  // Kanuri traditional
  deyo:          ['M', 1.00],  // Kanuri traditional
  dikko:         ['M', 1.00],  // Kanuri traditional
  dille:         ['M', 1.00],  // Kanuri traditional
  dilo:          ['M', 1.00],  // Kanuri traditional
  doki:          ['M', 0.85],  // Kanuri: horse (used as name)
  dukku:         ['M', 1.00],  // Kanuri traditional
  durkwa:        ['M', 1.00],  // already present
  falmata:       ['F', 1.00],  // Kanuri: Fatimah form
  fana:          ['F', 1.00],  // Kanuri traditional female
  fanama:        ['F', 1.00],  // Kanuri traditional female
  fanami:        ['M', 1.00],  // Kanuri: my mother / from mother
  fatima:        ['F', 0.85],  // also Hausa
  funa:          ['F', 1.00],  // Kanuri traditional female
  gaba:          ['M', 0.90],  // Kanuri traditional
  gaidam:        ['M', 1.00],  // Kanuri: from Gaidam
  gaji:          ['M', 1.00],  // Kanuri traditional
  gambo:         ['M', 1.00],  // Kanuri traditional (also Hausa)
  gana:          ['M', 0.90],  // already present
  gangara:       ['M', 1.00],  // Kanuri traditional
  gaoni:         ['M', 1.00],  // Kanuri traditional
  garba:         ['M', 0.85],  // also Hausa
  gashau:        ['M', 1.00],  // Kanuri traditional
  gashua:        ['M', 1.00],  // Kanuri place-origin name
  geidam:        ['M', 1.00],  // Kanuri place-origin name
  gella:         ['M', 1.00],  // Kanuri traditional
  gomna:         ['M', 0.85],  // Kanuri: governor (as name)
  gondoli:       ['M', 1.00],  // Kanuri traditional
  gorga:         ['M', 1.00],  // Kanuri traditional
  gozai:         ['M', 1.00],  // Kanuri traditional
  grema:         ['M', 1.00],  // already present
  gudu:          ['M', 1.00],  // Kanuri traditional
  gugula:        ['M', 1.00],  // Kanuri traditional
  gulani:        ['M', 1.00],  // Kanuri traditional
  gumri:         ['M', 1.00],  // Kanuri traditional
  gunda:         ['M', 1.00],  // Kanuri traditional
  gwange:        ['M', 1.00],  // Kanuri traditional
  halilu:        ['M', 0.90],  // Kanuri form of Halil
  hambali:       ['M', 1.00],  // Kanuri: from Hanbali tradition
  hassan:        ['M', 0.80],  // shared
  imam:          ['M', 0.80],  // also Hausa
  isa:           ['M', 0.80],  // also Hausa
  jakari:        ['M', 1.00],  // Kanuri traditional
  jalo:          ['M', 1.00],  // Kanuri/Fulani traditional
  jama:          ['M', 0.85],  // community / people (used as name)
  jarma:         ['M', 0.90],  // Kanuri traditional
  jibe:          ['M', 1.00],  // Kanuri traditional
  jidda:         ['M', 1.00],  // Kanuri traditional
  jimeta:        ['M', 1.00],  // Kanuri traditional
  jinjir:        ['M', 1.00],  // Kanuri traditional
  jiwa:          ['M', 1.00],  // Kanuri traditional
  kachalla:      ['M', 1.00],  // Kanuri: title used as name
  kada:          ['M', 0.85],  // Kanuri traditional
  kafafa:        ['M', 1.00],  // Kanuri traditional
  kaka:          ['M', 0.85],  // already present
  kaku:          ['M', 1.00],  // Kanuri traditional
  kala:          ['M', 0.85],  // Kanuri traditional
  kalami:        ['M', 1.00],  // Kanuri traditional
  kalli:         ['M', 1.00],  // Kanuri traditional
  kaltuma:       ['F', 1.00],  // Kanuri female name
  kanem:         ['M', 1.00],  // Kanuri: from Kanem (historical)
  kano:          ['M', 0.85],  // place name used as name
  karimi:        ['M', 1.00],  // Kanuri: generous
  karimu:        ['M', 1.00],  // Kanuri form of Karim
  karshi:        ['M', 1.00],  // Kanuri traditional
  kaumi:         ['M', 1.00],  // Kanuri traditional
  kime:          ['M', 1.00],  // already present
  kolo:          ['M', 1.00],  // already present
  kombu:         ['M', 1.00],  // Kanuri traditional
  kongurno:      ['M', 1.00],  // Kanuri traditional
  kuka:          ['M', 0.85],  // Kanuri: baobab (used as name)
  kukah:         ['M', 1.00],  // Kanuri/Borno traditional
  kuni:          ['M', 1.00],  // Kanuri traditional
  kura:          ['M', 0.90],  // already present
  kusugu:        ['M', 1.00],  // already present
  kutama:        ['M', 1.00],  // Kanuri traditional
  ladin:         ['M', 1.00],  // Kanuri traditional
  lali:          ['F', 1.00],  // Kanuri traditional female
  lamu:          ['F', 1.00],  // Kanuri traditional female
  lawan:         ['M', 0.95],  // already present
  lawali:        ['M', 1.00],  // Kanuri: the first / leader
  libu:          ['M', 1.00],  // Kanuri traditional
  machujo:       ['M', 1.00],  // Kanuri traditional
  maina:         ['M', 0.90],  // Kanuri: title for nobles
  mainasara:     ['M', 1.00],  // Kanuri: the noble one
  mairo:         ['F', 1.00],  // Kanuri traditional female
  mala:          ['M', 0.90],  // already present
  malai:         ['M', 1.00],  // Kanuri traditional
  malami:        ['M', 0.90],  // Kanuri/Hausa: Islamic scholar
  mallam:        ['M', 0.80],  // also Hausa
  mallo:         ['M', 1.00],  // Kanuri traditional
  mamman:        ['M', 0.90],  // also Hausa
  margai:        ['M', 1.00],  // Kanuri traditional
  marwa:         ['M', 1.00],  // Kanuri: from Marwa
  masani:        ['F', 1.00],  // Kanuri traditional female
  mashina:       ['M', 1.00],  // Kanuri traditional
  maslaha:       ['F', 1.00],  // Kanuri: the good one (female)
  mayina:        ['F', 1.00],  // Kanuri traditional female
  mbaya:         ['M', 1.00],  // Kanuri traditional
  mboduma:       ['M', 1.00],  // Kanuri traditional
  midala:        ['M', 1.00],  // Kanuri traditional
  moda:          ['M', 1.00],  // Kanuri traditional
  modu:          ['M', 1.00],  // already present
  musa:          ['M', 0.85],  // also Hausa
  muta:          ['M', 1.00],  // Kanuri traditional
  mutalibe:      ['M', 1.00],  // Kanuri form of Mutalib
  naomi:         ['F', 0.80],  // Christian Kanuri female
  ndani:         ['F', 1.00],  // Kanuri traditional female
  ndera:         ['F', 1.00],  // Kanuri traditional female
  nderi:         ['F', 1.00],  // Kanuri traditional female
  ngada:         ['M', 1.00],  // Kanuri traditional
  ngamdu:        ['M', 1.00],  // already present
  ngala:         ['M', 1.00],  // already present
  nganji:        ['M', 1.00],  // already present
  nguza:         ['M', 1.00],  // Kanuri traditional
  njidda:        ['M', 1.00],  // Kanuri traditional
  njimia:        ['M', 1.00],  // Kanuri traditional
  noda:          ['M', 1.00],  // Kanuri traditional
  norbu:         ['M', 1.00],  // Kanuri traditional
  nungure:       ['M', 1.00],  // Kanuri traditional
  olo:           ['M', 0.85],  // Kanuri traditional
  olutunde:      ['M', 0.80],  // Yoruba used in Kanuri area
  pessu:         ['M', 1.00],  // Kanuri traditional
  rabo:          ['M', 1.00],  // Kanuri: fourth (child)
  rabiu:         ['M', 0.90],  // also Hausa
  runde:         ['M', 1.00],  // Kanuri traditional
  sabo:          ['M', 0.90],  // Kanuri: new / newcomer
  sali:          ['M', 0.90],  // Kanuri form of Salih
  salihu:        ['M', 0.90],  // Kanuri form of Salih
  samali:        ['M', 1.00],  // Kanuri traditional
  sandamu:       ['M', 1.00],  // Kanuri traditional
  sani:          ['M', 0.90],  // also Hausa
  sarki:         ['M', 0.85],  // also Hausa
  shaibu:        ['M', 1.00],  // Kanuri form of Shu'ayb
  shettima:      ['M', 1.00],  // already present
  sidi:          ['M', 0.85],  // also Arabic
  sile:          ['M', 1.00],  // Kanuri traditional
  talbe:         ['M', 1.00],  // Kanuri: student / disciple
  talde:         ['M', 1.00],  // Kanuri traditional
  tella:         ['M', 1.00],  // Kanuri traditional
  toma:          ['M', 1.00],  // Kanuri traditional
  tukur:         ['M', 0.90],  // Kanuri/Fulani shared
  umar:          ['M', 0.85],  // also Hausa
  waziri:        ['M', 1.00],  // already present
  yaku:          ['M', 1.00],  // Kanuri traditional
  yarma:         ['M', 1.00],  // Kanuri traditional
  yusuf:         ['M', 0.80],  // also Hausa
  zainab:        ['F', 0.80],  // also Hausa
  zanna:         ['M', 1.00],  // already present
  zarahimi:      ['M', 1.00],  // Kanuri traditional
  zarmai:        ['M', 1.00],  // Kanuri traditional
  zara:          ['F', 0.85],  // already present
  zulum:         ['M', 1.00],  // Kanuri traditional
};

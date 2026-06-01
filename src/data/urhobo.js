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

  // ── More OGHENE- prefix names ─────────────────────────────────────────
  oghenekevwe:   ['M', 1.00],  // already present
  oghenechovwe:  ['F', 1.00],  // already present
  oghenenoghe:   ['F', 1.00],  // already present
  ogheneovo:     ['F', 1.00],  // already present
  ogheneruona:   ['M', 1.00],  // God is great
  ogheneruona:   ['M', 1.00],  // God is great
  oghenekpefe:   ['M', 1.00],  // God has provided
  ogheneaga:     ['M', 1.00],  // God has done
  oghenearoro:   ['M', 1.00],  // God is faithful
  ogheneawhen:   ['M', 1.00],  // God has been
  oghenebrume:   ['M', 1.00],  // God is good
  oghenechere:   ['M', 1.00],  // God cares
  oghenedoro:    ['M', 1.00],  // God is good
  oghenedudu:    ['M', 1.00],  // God has done it
  oghenefejiro:  ['M', 1.00],  // God gives joy
  oghenefejiwe:  ['M', 1.00],  // God gives happiness
  oghenefokuemo: ['M', 1.00],  // God is perfect
  oghenefu:      ['M', 1.00],  // God provides
  oghenegare:    ['M', 1.00],  // God is the owner
  oghenegboya:   ['M', 1.00],  // God brings honor
  oghenekohwo:   ['M', 1.00],  // God creates
  oghenekombi:   ['M', 1.00],  // God fights
  oghenekpefa:   ['M', 1.00],  // God provides (variant)
  oghenekpevi:   ['M', 1.00],  // God provides (in pattern file)
  oghenekpiemi:  ['M', 1.00],  // God opens
  oghenekporho:  ['M', 1.00],  // God is peace
  ogheneleke:    ['M', 1.00],  // God conquers
  oghenemaro:    ['M', 1.00],  // God will not fail
  oghenemine:    ['F', 1.00],  // already present
  oghenemino:    ['F', 1.00],  // God knows
  ogheneobaro:   ['M', 1.00],  // God has arrived
  ogheneodaro:   ['M', 1.00],  // God is good
  ogheneofori:   ['M', 1.00],  // God speaks
  ogheneoma:     ['F', 1.00],  // God is good (female)
  oghenesivwe:   ['M', 1.00],  // God has done it
  oghenesoro:    ['M', 1.00],  // God is the answer
  oghenetese:    ['M', 1.00],  // God is sufficient
  oghenetobi:    ['M', 1.00],  // God is great
  oghenetolu:    ['M', 1.00],  // God gives
  oghenetomike:  ['M', 1.00],  // God transforms
  oghenetutu:    ['F', 1.00],  // God is gentle
  ogheneuke:     ['M', 1.00],  // God's strength
  oghenevaro:    ['M', 1.00],  // God will provide
  oghenevoke:    ['M', 1.00],  // God is awake
  oghenevu:      ['M', 1.00],  // God is alive
  oghenevwogho:  ['M', 1.00],  // God is master
  ogheneye:      ['M', 1.00],  // God owns / God's own

  // ── More Urhobo male names ────────────────────────────────────────────
  adaka:         ['M', 1.00],  // Urhobo traditional
  adede:         ['M', 1.00],  // Urhobo traditional
  adeja:         ['M', 1.00],  // Urhobo traditional
  adejor:        ['M', 1.00],  // Urhobo traditional
  adekele:       ['M', 1.00],  // Urhobo traditional
  adekunbi:      ['M', 1.00],  // Urhobo traditional
  adepoju:       ['M', 1.00],  // Urhobo traditional
  aderi:         ['M', 1.00],  // Urhobo traditional
  adesa:         ['M', 1.00],  // Urhobo traditional
  aghogho:       ['M', 1.00],  // Urhobo: peace
  aghoghovwe:    ['M', 1.00],  // Urhobo: there is peace
  ahworegba:     ['M', 1.00],  // Urhobo traditional
  ajueyitsi:     ['M', 1.00],  // Urhobo traditional
  akefe:         ['M', 1.00],  // Urhobo traditional
  akpome:        ['M', 1.00],  // Urhobo traditional
  akpomiemie:    ['M', 1.00],  // Urhobo traditional
  akpotu:        ['M', 1.00],  // Urhobo traditional
  akumagba:      ['M', 1.00],  // Urhobo traditional
  areghare:      ['M', 1.00],  // Urhobo traditional
  arigbe:        ['M', 1.00],  // Urhobo traditional
  arumevwo:      ['M', 1.00],  // Urhobo traditional
  asagba:        ['M', 1.00],  // Urhobo traditional
  atavwe:        ['M', 1.00],  // Urhobo traditional
  avwovwi:       ['M', 1.00],  // Urhobo traditional
  avwunudje:     ['M', 1.00],  // Urhobo traditional
  daibo:         ['M', 1.00],  // already present
  dafe:          ['M', 1.00],  // Urhobo traditional
  dare:          ['M', 1.00],  // Urhobo traditional (also Yoruba)
  daso:          ['M', 1.00],  // Urhobo traditional
  dedi:          ['M', 1.00],  // Urhobo traditional
  degbe:         ['M', 1.00],  // Urhobo traditional
  delta:         ['M', 0.80],  // Urhobo name (pride of place)
  dike:          ['M', 0.85],  // Urhobo/Igbo shared
  edafe:         ['M', 1.00],  // Urhobo traditional
  edafejiro:     ['M', 1.00],  // Urhobo traditional
  edafesoye:     ['M', 1.00],  // Urhobo traditional
  edagho:        ['M', 1.00],  // Urhobo traditional
  edajere:       ['M', 1.00],  // Urhobo traditional
  edaki:         ['M', 1.00],  // already present
  edema:         ['M', 1.00],  // already present
  edewo:         ['M', 1.00],  // Urhobo traditional
  edewor:        ['M', 1.00],  // already present
  ediri:         ['M', 1.00],  // Urhobo traditional
  edjedjere:     ['M', 1.00],  // Urhobo traditional
  edoghawele:    ['M', 1.00],  // Urhobo traditional
  ejegwu:        ['M', 1.00],  // Urhobo traditional
  ejior:         ['M', 1.00],  // Urhobo traditional
  ejiro:         ['M', 0.90],  // already present
  ejoke:         ['M', 1.00],  // Urhobo traditional
  ejovwoke:      ['M', 1.00],  // already present
  ejueyitsi:     ['M', 1.00],  // Urhobo traditional
  emerhi:        ['M', 1.00],  // already present
  emere:         ['M', 1.00],  // Urhobo traditional
  emerhirhie:    ['M', 1.00],  // Urhobo traditional
  emete:         ['M', 1.00],  // Urhobo traditional
  emewovwe:      ['M', 1.00],  // Urhobo traditional
  emewurhie:     ['M', 1.00],  // Urhobo traditional
  emoefe:        ['M', 1.00],  // Urhobo traditional
  enibere:       ['M', 1.00],  // Urhobo traditional
  enifome:       ['M', 1.00],  // Urhobo traditional
  enofe:         ['M', 1.00],  // Urhobo traditional
  enofuwei:      ['M', 1.00],  // Urhobo traditional
  enolaro:       ['M', 1.00],  // Urhobo traditional
  enoma:         ['M', 1.00],  // Urhobo traditional
  enote:         ['M', 1.00],  // Urhobo traditional
  enoware:       ['M', 1.00],  // Urhobo traditional
  erede:         ['M', 1.00],  // Urhobo traditional
  erhu:          ['M', 1.00],  // Urhobo traditional
  erhue:         ['M', 1.00],  // Urhobo traditional
  erhuvwu:       ['M', 1.00],  // already present
  esiri:         ['M', 1.00],  // already present
  esovwe:        ['M', 1.00],  // Urhobo traditional
  evbota:        ['M', 1.00],  // Urhobo traditional
  evwodeni:      ['M', 1.00],  // already present
  eyanfeye:      ['M', 1.00],  // already present
  eyeomo:        ['M', 1.00],  // already present
  fimawei:       ['M', 1.00],  // Urhobo traditional
  gbenoba:       ['M', 1.00],  // Urhobo traditional
  gbotifee:      ['M', 1.00],  // Urhobo traditional
  iboyi:         ['M', 1.00],  // Urhobo traditional
  idiake:        ['M', 1.00],  // Urhobo traditional
  igho:          ['M', 1.00],  // Urhobo: wealth / money
  ighofose:      ['M', 1.00],  // Urhobo traditional
  ighoye:        ['M', 1.00],  // Urhobo traditional
  imarhe:        ['M', 1.00],  // Urhobo traditional
  inyere:        ['M', 1.00],  // Urhobo traditional
  iruobe:        ['M', 1.00],  // Urhobo traditional
  itajore:       ['M', 1.00],  // Urhobo traditional
  ivwurie:       ['M', 1.00],  // Urhobo traditional
  jiri:          ['M', 0.90],  // Urhobo traditional
  kuvie:         ['M', 1.00],  // Urhobo traditional
  ofori:         ['M', 1.00],  // Urhobo traditional (also Ijaw)
  ogbuevwe:      ['M', 1.00],  // Urhobo traditional
  oghifo:        ['M', 1.00],  // Urhobo traditional
  oghoro:        ['M', 1.00],  // Urhobo traditional
  oghove:        ['M', 1.00],  // Urhobo traditional
  oghumi:        ['M', 1.00],  // Urhobo traditional
  okiemute:      ['M', 1.00],  // already present
  okiemwen:      ['M', 1.00],  // Urhobo variant
  okirika:       ['M', 1.00],  // Urhobo traditional
  okoro:         ['M', 1.00],  // Urhobo traditional (also Igbo)
  okpako:        ['M', 1.00],  // already present
  orhiunu:       ['M', 1.00],  // already present
  orode:         ['M', 1.00],  // Urhobo traditional
  orovie:        ['M', 1.00],  // Urhobo traditional
  otaruefe:      ['M', 1.00],  // Urhobo traditional
  otuko:         ['M', 1.00],  // Urhobo traditional
  ovberede:      ['M', 1.00],  // Urhobo traditional
  oviri:         ['M', 1.00],  // already present
  ovoke:         ['U', 0.90],  // already present
  ovuakporie:    ['M', 1.00],  // Urhobo traditional
  owhe:          ['M', 1.00],  // Urhobo traditional
  rhorhokpor:    ['M', 1.00],  // Urhobo traditional
  rowhorotu:     ['M', 1.00],  // Urhobo traditional
  rukewe:        ['M', 1.00],  // Urhobo: male form
  taju:          ['M', 0.90],  // Urhobo traditional
  tegbe:         ['M', 1.00],  // Urhobo traditional
  timibitei:     ['M', 1.00],  // Urhobo traditional
  udu:           ['M', 1.00],  // Urhobo traditional
  uduefa:        ['M', 1.00],  // Urhobo traditional
  ugaga:         ['M', 1.00],  // Urhobo traditional
  ugbor:         ['M', 1.00],  // Urhobo traditional
  ugede:         ['M', 1.00],  // Urhobo traditional
  ugheye:        ['M', 1.00],  // Urhobo traditional
  ughoueke:      ['M', 1.00],  // Urhobo traditional
  ughoye:        ['M', 1.00],  // Urhobo traditional
  ujevwe:        ['M', 1.00],  // Urhobo traditional
  ujoko:         ['M', 1.00],  // Urhobo traditional
  ukaro:         ['M', 1.00],  // Urhobo traditional
  uke:           ['M', 1.00],  // Urhobo traditional
  uko:           ['M', 0.90],  // Urhobo traditional
  ukoko:         ['M', 1.00],  // Urhobo traditional
  ukpaka:        ['M', 1.00],  // Urhobo traditional
  ukpevwe:       ['M', 1.00],  // Urhobo traditional
  ukwuoma:       ['M', 1.00],  // Urhobo traditional
  umudu:         ['M', 1.00],  // Urhobo traditional
  umukoro:       ['M', 1.00],  // Urhobo traditional
  unukoro:       ['M', 1.00],  // Urhobo traditional
  urhioke:       ['M', 1.00],  // Urhobo traditional
  urhiomi:       ['M', 1.00],  // Urhobo traditional
  uruemu:        ['M', 1.00],  // Urhobo traditional
  urhueme:       ['M', 1.00],  // Urhobo traditional
  uroko:         ['M', 1.00],  // Urhobo traditional
  vero:          ['F', 0.85],  // short for Veronica (used in Urhobo)
  voke:          ['M', 1.00],  // Urhobo traditional
  vukari:        ['M', 1.00],  // Urhobo traditional
  ware:          ['M', 0.90],  // Urhobo traditional

  // ── More Urhobo female names ──────────────────────────────────────────
  efemena:       ['F', 1.00],  // Urhobo: what God has done
  efetobore:     ['F', 1.00],  // Urhobo traditional female
  efe:           ['F', 0.85],  // Urhobo: wealth (also used as name)
  efemode:       ['F', 1.00],  // Urhobo traditional female
  efemwoya:      ['F', 1.00],  // Urhobo traditional female
  efetofure:     ['F', 1.00],  // Urhobo traditional female
  ejiro:         ['F', 0.85],  // Urhobo: can be female too
  emefe:         ['F', 1.00],  // already present
  eruotor:       ['F', 0.90],  // already present
  ewomazino:     ['F', 1.00],  // already present
  eyeoma:        ['F', 1.00],  // already present
  ochuko:        ['F', 1.00],  // Urhobo female name
  odafe:         ['F', 1.00],  // Urhobo: wealth (female name)
  ofure:         ['F', 1.00],  // Urhobo: goodness
  okiorie:       ['F', 1.00],  // Urhobo traditional female
  okpe:          ['F', 0.85],  // Urhobo/Delta traditional female
  onome:         ['F', 1.00],  // Urhobo: the good one
  onoreme:       ['F', 1.00],  // Urhobo traditional female
  oreofebi:      ['F', 1.00],  // Urhobo traditional female
  otivwe:        ['F', 1.00],  // Urhobo traditional female
  ovoke:         ['F', 0.85],  // Urhobo can be female
  preye:         ['F', 0.85],  // Ijaw/Urhobo can be female
  rukevwe:       ['F', 1.00],  // already present
  ugboma:        ['F', 1.00],  // already present
  ugomma:        ['F', 0.85],  // Urhobo female (also Igbo)
  urhiefe:       ['F', 1.00],  // already present
  urhiyi:        ['F', 1.00],  // Urhobo traditional female
  uvieghara:     ['F', 1.00],  // Urhobo traditional female
  oviosu:        ['F', 1.00],  // Urhobo traditional female
};

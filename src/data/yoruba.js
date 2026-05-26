/**
 * Yoruba name dictionary
 * Format: name (lowercase) → [gender, confidence]
 *   gender:     'M' = male | 'F' = female | 'U' = unisex
 *   confidence: 0.0 – 1.0  (how certain we are about ethnicity + gender)
 *
 * Yoruba are Nigeria's largest ethnic group (~21%), concentrated in SW Nigeria
 * (Lagos, Ogun, Oyo, Osun, Ekiti, Ondo, Kwara, Kogi).
 * Many names are full sentences meaning a philosophy or spiritual statement.
 */

'use strict';

module.exports = {
  // ── ADÉ- (crown) lineage ────────────────────────────────────────────────
  adebambo:      ['M', 1.00],  // crown was added to us
  adebayo:       ['M', 1.00],  // crown meets joy
  adebimpe:      ['F', 0.85],  // crown comforts me
  adedamola:     ['M', 1.00],  // crown blends with wealth
  adedayo:       ['M', 0.95],  // crown becomes joy
  adedeji:       ['M', 1.00],  // the crown is doubled
  adediran:      ['M', 1.00],  // the crown continues
  adedotun:      ['M', 1.00],  // the crown is again new
  adegoke:       ['M', 1.00],  // the crown has risen
  adegboyega:    ['M', 1.00],  // the crown exalts honor
  adejare:       ['M', 1.00],  // the crown takes possession
  adejoke:       ['F', 1.00],  // the crown is pampered with wealth
  adejumo:       ['M', 1.00],  // the crown is above authority
  adekemi:       ['F', 1.00],  // the crown is cared for
  adekola:       ['M', 0.90],  // the crown reaches wealth
  adekoya:       ['M', 1.00],  // the crown resists evil
  adekunle:      ['M', 1.00],  // the crown fills the house
  adeleke:       ['M', 1.00],  // the crown wins by battle
  adeleye:       ['M', 1.00],  // crown has honor
  adelodun:      ['M', 1.00],
  adelola:       ['U', 0.80],  // crown has wealth (also female)
  adeloye:       ['M', 1.00],
  adeniyi:       ['M', 1.00],  // the crown has dignity
  adeniran:      ['M', 1.00],
  adenuga:       ['M', 1.00],
  adenusi:       ['M', 1.00],
  adeoye:        ['M', 1.00],  // the crown has honor
  aderemi:       ['M', 1.00],  // the crown gives comfort
  aderinto:      ['M', 1.00],
  aderomu:       ['M', 1.00],
  adesegun:      ['M', 1.00],  // the crown wins
  adesanya:      ['M', 1.00],
  adeshina:      ['M', 1.00],  // the crown opens the way
  adesinmi:      ['M', 1.00],
  adesokan:      ['M', 1.00],
  adesuyi:       ['M', 1.00],
  adetola:       ['M', 0.90],  // the crown reaches wealth
  adetokunbo:    ['M', 1.00],  // the crown returns from overseas
  adetona:       ['M', 1.00],
  adetutu:       ['F', 1.00],  // the crown is gentle
  adewale:       ['M', 1.00],  // the crown comes home
  adewumi:       ['M', 1.00],  // the crown is desirable
  adeyemi:       ['M', 1.00],  // the crown befits me
  adeyinka:      ['M', 1.00],  // the crown surrounds me
  adunola:       ['F', 1.00],  // delight in wealth

  // ── AKIN- (bravery / valor) lineage ────────────────────────────────────
  akande:        ['M', 1.00],
  akinbami:      ['M', 1.00],  // bravery is coming
  akinbiyi:      ['M', 1.00],  // born to be brave
  akindele:      ['M', 1.00],  // bravery creates a home
  akinfesoye:    ['M', 1.00],  // bravery makes honor
  akinjide:      ['M', 1.00],  // bravery wakes up
  akinola:       ['M', 1.00],  // bravery has wealth
  akinpelu:      ['M', 1.00],  // bravery equals strength
  akinseye:      ['M', 1.00],  // valor reveals itself
  akinwale:      ['M', 1.00],  // valor comes home
  akinwande:     ['M', 1.00],  // valor comes back
  akinwunmi:     ['M', 1.00],  // valor is desirable

  // ── AYO- (joy) lineage ─────────────────────────────────────────────────
  ayo:           ['U', 0.80],  // joy
  ayobami:       ['M', 0.90],  // joy gives me love
  ayodeji:       ['M', 1.00],  // joy is doubled
  ayokunle:      ['M', 1.00],  // joy fills the house
  ayomide:       ['U', 0.85],  // my joy has returned
  ayoola:        ['M', 0.90],  // joy in wealth
  ayinde:        ['M', 1.00],  // praised one
  ayandele:      ['M', 1.00],  // drums create a home
  ayanleke:      ['M', 1.00],
  ajao:          ['U', 1.00],  //One who fights to stay; One who fights to stand tall, SURNAME

  // ── BABA- (father) ─────────────────────────────────────────────────────
  babajide:      ['M', 1.00],  // father wakes up / is alive
  babatope:      ['M', 1.00],  // father is worthy
  babatunde:     ['M', 1.00],  // father comes back (reincarnation)
  bamgboye:      ['M', 1.00],
  bankole:       ['M', 1.00],  // build the home
  banwo:         ['M', 1.00],

  // ── FEMALE NAMES ───────────────────────────────────────────────────────
  bimbo:         ['F', 0.95],  // raised with wealth
  bisi:          ['F', 0.95],  // born on a festive day
  bolanle:       ['F', 1.00],  // find wealth in the home
  bosede:        ['F', 1.00],  // born on Sunday
  abosede:       ['F', 1.00],  // born on Sunday (Abosede variant)
  abimbola:      ['F', 0.90],  // born into wealth
  abidun:        ['M', 0.80],
  abiodun:       ['M', 0.95],  // born at the festival
  abiola:        ['M', 0.85],  // born in wealth / honor

  // ── B ─────────────────────────────────────────────────────────────────
  biodun:        ['M', 0.90],  // born at festival
  bode:          ['M', 1.00],
  bolaji:        ['M', 0.90],  // find honor in wealth
  bodunde:       ['M', 1.00],

  // ── D ─────────────────────────────────────────────────────────────────
  daisi:         ['M', 1.00],
  dare:          ['M', 0.90],
  dayo:          ['U', 0.80],  // joy arrives
  dele:          ['M', 0.95],
  dipo:          ['M', 0.90],
  doyin:         ['F', 1.00],  // the wealthy one
  dupe:          ['F', 1.00],  // give thanks

  // ── F ─────────────────────────────────────────────────────────────────
  femi:          ['M', 0.95],  // love me
  folake:        ['F', 1.00],
  folasade:      ['F', 1.00],
  fowosere:      ['M', 1.00],
  funke:         ['F', 1.00],
  funmilayo:     ['F', 1.00],  // give me joy
  folaranmi:     ['F', 1.00],

  // ── G ─────────────────────────────────────────────────────────────────
  gbade:         ['M', 1.00],
  gbenga:        ['M', 1.00],  // bring honor home
  gbemiga:       ['M', 1.00],  // carry me to honor
  gbemisola:     ['F', 1.00],  // carry me to riches
  gboyega:       ['M', 1.00],  // raise honor

  // ── I ─────────────────────────────────────────────────────────────────
  ibidun:        ['F', 1.00],
  idowu:         ['U', 0.90],  // born after twins (3rd birth)
  ife:           ['U', 0.85],  // love
  ifeoluwa:      ['F', 1.00],  // love of God
  ifetayo:       ['F', 1.00],  // love gives joy
  iyabo:         ['F', 1.00],  // mother came back

  // ── J ─────────────────────────────────────────────────────────────────
  jide:          ['M', 1.00],  // hold / keep
  joke:          ['F', 1.00],  // pampered with wealth
  jumoke:        ['F', 1.00],  // everyone loves this child

  // ── K ─────────────────────────────────────────────────────────────────
  kayode:        ['M', 1.00],  // he brought joy
  kehinde:       ['U', 0.90],  // second born of twins
  kemi:          ['F', 0.95],  // to care for / pamper
  kolade:        ['M', 1.00],  // brings wealth
  kolawole:      ['M', 1.00],  // honor comes home
  kola:          ['M', 0.95],
  kunle:         ['M', 1.00],  // fill the house

  // ── L ─────────────────────────────────────────────────────────────────
  lanre:         ['M', 1.00],  // wealth has come
  leke:          ['M', 1.00],
  lekan:         ['M', 1.00],  // wealth increases
  lola:          ['F', 0.95],  // wealth of God

  // ── M ─────────────────────────────────────────────────────────────────
  morenikeji:    ['F', 1.00],
  moyosore:      ['U', 0.90],
  muyiwa:        ['M', 1.00],  // carry this home

  // ── N ─────────────────────────────────────────────────────────────────
  nike:          ['F', 0.95],
  niyi:          ['M', 1.00],  // dignity / honor

  // ── O ─────────────────────────────────────────────────────────────────
  oba:           ['M', 0.85],  // king
  odunayo:       ['U', 0.85],  // festival brings joy
  oladele:       ['M', 1.00],  // wealth creates a home
  olaitan:       ['M', 1.00],
  olamide:       ['M', 0.90],  // my wealth has arrived
  olawale:       ['M', 1.00],  // wealth comes home
  olayemi:       ['M', 0.90],  // wealth befits me
  olu:           ['M', 0.80],  // lord
  olubunmi:      ['F', 1.00],  // God's gift
  olugbenga:     ['M', 1.00],  // God brings honor
  olujimi:       ['M', 1.00],  // God gave me this
  olumide:       ['M', 1.00],  // God comes
  olumuyiwa:     ['M', 1.00],  // God carried this home
  olusegun:      ['M', 1.00],  // God's warrior
  oluwafemi:     ['M', 1.00],  // God loves me
  oluwakemi:     ['F', 1.00],  // God cares for me
  oluwaseun:     ['M', 0.90],  // God deserves praise
  oluwasegun:    ['M', 1.00],  // God wins
  oluwaseyi:     ['M', 1.00],  // God made this
  oluwatobiloba: ['F', 1.00],  // God is worthy of praise
  oluwatope:     ['M', 0.90],  // God is worthy
  oluwabunmi:    ['F', 1.00],  // God gives me this gift
  oluwafunmilayo: ['F', 1.00],
  oluwatobi:     ['U', 0.90],
  oluwatomi:     ['F', 0.90],
  omolade:       ['F', 1.00],  // daughter in wealth
  omolara:       ['F', 1.00],  // child of the family
  omotola:       ['F', 1.00],  // child is wealth
  omowunmi:      ['F', 1.00],  // child is my desire
  omowumi:       ['F', 1.00],
  opeyemi:       ['M', 0.90],  // I praise you
  ore:           ['F', 0.85],  // friend
  oreoluwa:      ['F', 1.00],  // God's gift / grace of God
  orisabunmi:    ['M', 1.00],

  // ── P ─────────────────────────────────────────────────────────────────
  pelumi:        ['U', 0.90],  // comfort me
  peju:          ['F', 1.00],  // pamper with wealth

  // ── R ─────────────────────────────────────────────────────────────────
  remi:          ['U', 0.85],  // console me
  ronke:         ['F', 1.00],  // wealthy one
  rotimi:        ['M', 1.00],  // remain with me

  // ── S ─────────────────────────────────────────────────────────────────
  seun:          ['M', 0.90],  // praise (God)
  shade:         ['F', 0.90],
  shola:         ['U', 0.85],  // wealth finds me
  sola:          ['U', 0.85],  // wealth is God
  solape:        ['F', 1.00],

  // ── T ─────────────────────────────────────────────────────────────────
  taiwo:         ['U', 0.90],  // first of twins (tastes the world)
  temi:          ['U', 0.85],  // mine
  titilayo:      ['F', 1.00],  // joy forever
  titi:          ['F', 0.90],
  tobi:          ['M', 0.90],  // the great one
  tokunbo:       ['U', 0.90],  // from overseas / returned from abroad
  toluwa:        ['U', 0.90],  // belongs to God
  toluwanimi:    ['F', 1.00],  // God owns me
  tope:          ['U', 0.85],  // God is great
  toyin:         ['F', 0.95],  // worth praise

  // ── W ─────────────────────────────────────────────────────────────────
  wale:          ['M', 0.95],  // comes home

  // ── Y ─────────────────────────────────────────────────────────────────
  yemi:          ['U', 0.85],
  yetunde:       ['F', 1.00],  // mother returns
};

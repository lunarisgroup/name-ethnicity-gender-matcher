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

  // ── Anu- (Mercy) lineage ────────────────────────────────────────────────
  anu:           ['F', 1.00],  // Mercy
  aanu:          ['F', 1.00],  // Mercy
  aanudara:      ['F', 1.00],  // Mercy is good
  aanuoluwa:     ['F', 1.00],  // God's mercy
  aanuoluwabomi: ['F', 1.00],  // I am covered/protected by God's mercy
  aanuoluwakiisi:['F', 1.00],  // God's mercy never fades
  aanuoluwakiitan:['F', 1.00], // God's mercy never ends
  aanuoluwapo:   ['F', 1.00],  // God's mercy is abundant 
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
  segun:         ['M', 1.00],  // victory
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

  // ── More ADE- (crown) compounds ───────────────────────────────────────
  adelaja:       ['M', 1.00],  // crown acquires more
  adenle:        ['M', 1.00],  // crown is wealthy
  adeniji:       ['M', 1.00],  // crown of dignity
  adepeju:       ['F', 1.00],  // crown comes with gifts
  adesoji:       ['M', 1.00],  // crown revives
  adesola:       ['U', 0.90],  // crown in wealth
  adesope:       ['M', 1.00],  // crown befits wealth
  adetayo:       ['M', 1.00],  // crown becomes joy
  adewola:       ['M', 1.00],  // crown comes home
  adewusi:       ['M', 1.00],  // crown wakes up
  adeyeye:       ['M', 1.00],  // crown is multiplied
  aderopo:       ['M', 1.00],  // crown keeps going
  aderounmu:     ['M', 1.00],  // crown does not fall
  adeniyan:      ['M', 1.00],  // crown belongs to people
  adeosun:       ['M', 1.00],  // crown has merit
  aderonke:      ['F', 1.00],  // crown is pampered
  adegbami:      ['M', 1.00],  // crown is well
  adegbenro:     ['M', 1.00],  // crown built on honor
  adegbola:      ['M', 1.00],  // crown builds on valor
  adejumobi:     ['M', 1.00],  // crown above authority
  adeoba:        ['M', 1.00],  // crown of kings
  adeogun:       ['M', 1.00],  // crown of the warrior
  adeolu:        ['M', 1.00],  // crown of wealth
  adenrele:      ['M', 1.00],  // crown travels
  aderibigbe:    ['M', 1.00],  // crown revered at home
  aderinola:     ['F', 1.00],  // crown moves into wealth
  adesanmi:      ['M', 1.00],  // crown comforts
  adesiyan:      ['M', 1.00],  // crown of the respected
  adesoye:       ['M', 1.00],  // crown elevates
  adesunbo:      ['U', 0.90],  // crown returns from overseas
  adetimirin:    ['M', 1.00],  // crown is patient
  adetireoluwa:  ['M', 1.00],  // God's crown is right
  adetoyese:     ['M', 1.00],  // crown creates joy
  adetunji:      ['M', 1.00],  // crown wakes again
  adetunwase:    ['M', 1.00],  // crown opened the way again
  adewara:       ['M', 1.00],  // crown is good
  adewolu:       ['M', 1.00],  // crown attracts wealth
  adeyiga:       ['M', 1.00],  // crown increases
  adeyino:       ['M', 1.00],  // crown is greater
  adebukola:     ['F', 1.00],  // crown adds to wealth
  adefolake:     ['F', 1.00],  // crown of Ifa
  adefulake:     ['F', 1.00],  // crown brings wealth
  adetutu:       ['F', 1.00],  // crown is gentle (variant)
  adeola:        ['U', 0.90],  // crown has wealth
  adebola:       ['U', 0.90],  // crown meets wealth
  adewunmi:      ['U', 0.85],  // crown is desirable
  adebisi:       ['U', 0.85],  // crown has multiplied
  adegbenle:     ['M', 1.00],  // crown builds the house of honor
  adegboye:      ['M', 1.00],  // crown raises honor
  adegunle:      ['M', 1.00],  // crown fills the compound
  adejimi:       ['M', 1.00],  // crown gave me this
  adelabu:       ['M', 1.00],  // crown meets with the prosperous
  adelabi:       ['M', 1.00],  // crown born into prosperity
  adelana:       ['M', 1.00],  // crown takes possession
  adelarin:      ['M', 1.00],  // crown returns
  adelehin:      ['M', 1.00],  // crown is behind me
  adelerin:      ['M', 1.00],  // crown laughs
  adelowotan:    ['M', 1.00],  // crown shows the way
  ademola:       ['M', 1.00],  // crown is mixed with wealth
  ademosu:       ['M', 1.00],  // crown gathers the strong ones
  adenowo:       ['M', 1.00],  // crown has returned
  adenrewa:      ['M', 1.00],  // crown is beautiful in prosperity
  adeoba:        ['M', 1.00],  // crown of the king
  adeoye:        ['M', 1.00],  // already present — variant adeoya
  aderanwo:      ['M', 1.00],  // crown is with the people
  aderopo:       ['M', 1.00],  // crown is moving
  aderoye:       ['M', 1.00],  // crown lifts
  adesegha:      ['M', 1.00],  // crown is victorious
  adesetan:      ['M', 1.00],  // crown is enough
  adesupo:       ['M', 1.00],  // crown is above challenges
  adetoun:       ['F', 1.00],  // the crown is new and young
  adetosin:      ['M', 1.00],  // the crown is worthy of service
  adewalure:     ['M', 1.00],  // crown comes back to prosperity
  adewemimo:     ['M', 1.00],  // crown is pure
  adewopo:       ['M', 1.00],  // crown arrives with riches

  // ── More AKIN- (bravery/valor) compounds ──────────────────────────────
  akingbade:     ['M', 1.00],  // valor creates prestige
  akinbi:        ['M', 1.00],  // born brave
  akinkugbe:     ['M', 1.00],  // valor is forceful
  akinlabi:      ['M', 1.00],  // born into bravery
  akinlolu:      ['M', 1.00],  // valor is plentiful
  akintola:      ['M', 1.00],  // bravery is enough
  akintayo:      ['M', 1.00],  // valor becomes joy
  akintobi:      ['M', 1.00],  // the brave one is great
  akinrinade:    ['M', 1.00],  // valor wears the crown
  akinmade:      ['M', 1.00],  // valor creates
  akintunde:     ['M', 1.00],  // valor returns
  akintade:      ['M', 1.00],  // valor reaches the crown
  akinrinmade:   ['M', 1.00],  // bravery is persistent
  akinyele:      ['M', 1.00],  // valor fills the house
  akinyemi:      ['M', 1.00],  // valor befits me
  akinbode:      ['M', 1.00],  // bravery announces itself
  akinbobola:    ['M', 1.00],  // bravery brings wealth home
  akinwemi:      ['M', 1.00],  // valor surrounds me
  akinfenwa:     ['M', 1.00],  // bravery is beautiful
  akinmoladun:   ['M', 1.00],  // bravery becomes sweet honor
  akinrinwa:     ['M', 1.00],  // bravery walks with us
  akinsan:       ['M', 1.00],  // bravery persists
  akinsola:      ['M', 1.00],  // bravery meets wealth
  akinsanya:     ['M', 1.00],  // valor does great things
  akintogun:     ['M', 1.00],  // valor joins the warrior
  akintoye:      ['M', 1.00],  // valor is honorable
  akinwole:      ['M', 1.00],  // valor enters the house
  akinwunmi:     ['M', 1.00],  // already present — skip double
  akinosun:      ['M', 1.00],  // valor has merit
  akinropo:      ['M', 1.00],  // bravery keeps moving
  akinselure:    ['M', 1.00],  // bravery is sweet in prosperity
  akinsowon:     ['M', 1.00],  // bravery lives with us
  akintan:       ['M', 1.00],  // valor is patient

  // ── More OLUWA- (God) compounds ───────────────────────────────────────
  oluwabusayo:       ['F', 1.00],  // God adds to joy
  oluwadamilola:     ['U', 0.90],  // God took care of me with wealth
  oluwadamilare:     ['U', 0.90],  // God is just to me
  oluwafikunayomi:   ['F', 1.00],  // God adds to my life
  oluwagbemiga:      ['M', 1.00],  // God lifts me to honor
  oluwakolade:       ['M', 1.00],  // God brings wealth
  oluwakoya:         ['M', 1.00],  // God protects against evil
  oluwakunle:        ['M', 1.00],  // God fills the house
  oluwamayowa:       ['F', 1.00],  // God brings joy
  oluwanisola:       ['F', 1.00],  // God is my wealth
  oluwarotimi:       ['M', 1.00],  // God remains with me
  oluwasanmi:        ['M', 1.00],  // God comforts me
  oluwasoye:         ['M', 1.00],  // God elevates
  oluwatosin:        ['U', 0.90],  // God is worthy of service
  oluwatunde:        ['M', 1.00],  // God comes back
  oluwatoye:         ['M', 1.00],  // God is honorable
  oluwatimilehin:    ['U', 0.90],  // God is with me
  oluwafunso:        ['M', 1.00],  // God gives favor
  oluwajoba:         ['M', 1.00],  // God becomes king
  oluwatofunmi:      ['F', 1.00],  // God gives me
  oluwadarasimi:     ['F', 1.00],  // God is good to me
  oluwaponmile:      ['M', 1.00],  // God carries me
  oluwatoyosi:       ['F', 1.00],  // God brings joy
  oluwafeyikemi:     ['F', 1.00],  // God cares for me
  oluwadunni:        ['F', 1.00],  // God is sweet
  oluwajuwon:        ['M', 1.00],  // God is exalted
  oluwakorede:       ['M', 1.00],  // God has done good
  oluwaleke:         ['M', 1.00],  // God wins
  oluwalemi:         ['U', 0.90],  // God is mine
  oluwamodupe:       ['F', 1.00],  // God deserves thanks
  oluwaremilekun:    ['F', 1.00],  // God wiped away my tears
  oluwasanya:        ['M', 1.00],  // God does great things
  oluwasemilore:     ['F', 1.00],  // God has been kind to me
  oluwasimi:         ['F', 1.00],  // God rests with me
  oluwatomisin:      ['F', 1.00],  // God fills me to the brim
  oluwatunmise:      ['U', 0.90],  // God has renewed me
  oluwafisayo:       ['F', 1.00],  // God brings joy with this
  oluwajomiloju:     ['F', 1.00],  // God wipes my face
  oluwaninuola:      ['F', 1.00],  // God is inside wealth
  oluwasolape:       ['F', 1.00],  // God brings wealth to me
  oluwateniola:      ['F', 1.00],  // God gives me wealth
  oluwatimilekan:    ['M', 1.00],  // God is always with me
  oluwatodimu:       ['M', 1.00],  // God gave it to me
  oluwatokeji:       ['F', 1.00],  // God has multiplied
  oluwatokirewa:     ['F', 1.00],  // God has done something beautiful
  oluwatola:         ['U', 0.90],  // God has reached wealth
  oluwatominsin:     ['F', 1.00],  // God has filled me to the brim
  oluwatooni:        ['F', 1.00],  // God has given
  oluwatopemi:       ['F', 1.00],  // God has praised me

  // ── More OLA- (wealth/honor) compounds ───────────────────────────────
  oladapo:       ['M', 1.00],  // wealth gathers together
  olajumoke:     ['F', 1.00],  // the wealthy one is pampered
  olajide:       ['M', 1.00],  // wealth wakes up
  olakunle:      ['M', 1.00],  // wealth fills the house
  olatunde:      ['M', 1.00],  // wealth returns
  olatunwase:    ['M', 1.00],  // wealth opened the way
  olatide:       ['M', 1.00],  // wealth reaches crown
  olayinka:      ['U', 0.90],  // wealth surrounds me
  olasubomi:     ['M', 1.00],  // wealth is beneficial
  olasunkanmi:   ['M', 1.00],  // wealth followed me
  olabisi:       ['F', 0.90],  // wealth has multiplied
  olabode:       ['M', 1.00],  // wealth announces itself
  olaboye:       ['M', 1.00],  // wealth lifts up
  olagoke:       ['M', 1.00],  // wealth has risen
  olakemi:       ['F', 1.00],  // wealth pampers me
  olanike:       ['F', 1.00],  // wealth surrounds the child
  olanrewaju:    ['M', 1.00],  // wealth goes ahead
  olaseni:       ['M', 1.00],  // wealth is worthy of the crown
  olasindara:    ['M', 1.00],  // wealth is good and proper
  olatinwo:      ['M', 1.00],  // wealth joins with honor
  olatomide:     ['M', 1.00],  // wealth has returned
  olawunmi:      ['F', 0.90],  // wealth is desirable
  olayiwola:     ['M', 1.00],  // wealth becomes honor
  olayode:       ['M', 1.00],  // wealth comes
  olayomi:       ['U', 0.85],  // wealth is mine
  olabamiji:     ['M', 1.00],  // wealth doubles for me
  olabambo:      ['M', 1.00],  // wealth added to us
  olabintan:     ['F', 1.00],  // wealth meets with patience
  olabisi:       ['F', 0.90],  // wealth has multiplied
  olabukunola:   ['F', 1.00],  // wealth adds blessing to wealth
  oladaisi:      ['M', 1.00],  // wealth of the glorious one
  oladejo:       ['M', 1.00],  // wealth wakes
  oladele:       ['M', 1.00],  // already present
  oladimeji:     ['M', 1.00],  // wealth merged with me
  oladoyin:      ['F', 1.00],  // wealth of the gifted one
  olafare:       ['M', 1.00],  // wealth is the walking one
  olafinhan:     ['M', 1.00],  // wealth bestows honor
  olagbaju:      ['M', 1.00],  // wealth is outstanding
  olajiire:      ['F', 1.00],  // wealth is agreeable
  olajinle:      ['M', 1.00],  // wealth goes deep
  olajire:       ['U', 0.85],  // wealth is acceptable
  olajugba:      ['M', 1.00],  // wealth is together with strength
  olakayode:     ['M', 1.00],  // wealth brings joy
  olakilani:     ['M', 1.00],  // wealth of the powerful one
  olakolade:     ['M', 1.00],  // wealth brings more wealth
  olalekan:      ['M', 1.00],  // wealth increases
  olamide:       ['M', 0.90],  // already present
  olanipekun:    ['M', 1.00],  // wealth is the capstone
  olanisebe:     ['M', 1.00],  // wealth grows in the house
  olanrewaju:    ['M', 1.00],  // wealth moves forward
  olaolu:        ['M', 0.90],  // the lord of wealth
  olaore:        ['F', 1.00],  // wealth is a gift
  olaosebikan:   ['M', 1.00],  // wealth opened the door
  olaosun:       ['M', 1.00],  // wealth has merit
  olapeju:       ['F', 1.00],  // wealth comes with gifts
  olapesin:      ['M', 1.00],  // wealth befits the royal
  olapo:         ['M', 1.00],  // wealth gathers
  olarinoye:     ['M', 1.00],  // wealth continues to honor
  olarinde:      ['M', 1.00],  // wealth enters the crown
  olarinmoye:    ['M', 1.00],  // wealth enters honor
  olarotimi:     ['M', 1.00],  // wealth remains with me
  olasanoye:     ['M', 1.00],  // wealth moves on to honor
  olasegun:      ['M', 1.00],  // wealth conquers
  olashola:      ['M', 1.00],  // wealth found me
  olasoji:       ['M', 1.00],  // wealth revives
  olatayo:       ['M', 1.00],  // wealth brings joy
  olatoye:       ['M', 1.00],  // wealth honors
  olatundun:     ['F', 1.00],  // wealth is sweet to return
  olatunmise:    ['U', 0.90],  // wealth has renewed me
  olawale:       ['M', 1.00],  // already present
  olawole:       ['M', 1.00],  // wealth enters the house
  olawuyi:       ['M', 1.00],  // wealth is enjoyable
  olayemi:       ['M', 0.90],  // already present

  // ── More OMO- (child) compounds ──────────────────────────────────────
  omolola:       ['F', 1.00],  // child of wealth
  omololu:       ['M', 0.90],  // child of the lord
  omoniyi:       ['M', 1.00],  // child of honor
  omotunde:      ['U', 0.90],  // child returns
  omotayo:       ['F', 1.00],  // child brings joy
  omotoyosi:     ['F', 1.00],  // child creates joy
  omobolanle:    ['F', 1.00],  // child finds wealth at home
  omobola:       ['F', 1.00],  // child of wealth
  omobosede:     ['F', 1.00],  // child was born on Sunday
  omorinke:      ['F', 1.00],  // the child is pampered
  omosede:       ['F', 1.00],  // child is crowned
  omoshalewa:    ['F', 1.00],  // the child is beautiful as money
  omoshola:      ['F', 1.00],  // the child has wealth
  omotoso:       ['M', 1.00],  // child is sufficient
  omofunke:      ['F', 1.00],  // the child is worth caring for
  omolabake:     ['F', 1.00],  // child is treated with wealth
  omolere:       ['F', 1.00],  // child is a gift
  omonikeji:     ['F', 1.00],  // the child is pampered
  omorotimi:     ['M', 1.00],  // child of the one who remains
  omosupe:       ['F', 1.00],  // child is greater than all
  omotolani:     ['F', 1.00],  // child has wealth
  omowunmi:      ['F', 1.00],  // already present

  // ── BOLA- / BOLU- compounds ───────────────────────────────────────────
  bolarinwa:     ['M', 1.00],  // wealth has come back to us
  bolawale:      ['M', 1.00],  // wealth comes home
  bolakale:      ['M', 1.00],  // wealth has matured
  bolakemi:      ['F', 1.00],  // wealth pampers me
  bolaremi:      ['F', 1.00],  // wealth comforts me
  bolasunbo:     ['U', 0.90],  // wealth returned from abroad
  bolatito:      ['F', 1.00],  // wealth is trustworthy
  boluwatife:    ['F', 1.00],  // God gave faith
  boluwajoko:    ['F', 1.00],  // God sits with me
  boluwarin:     ['F', 1.00],  // God gives wealth
  boluwatito:    ['F', 1.00],  // God is trustworthy
  boluwatobiloba: ['F', 1.00], // God is worthy of praise
  bolajoko:      ['M', 1.00],  // find honor in wealth, sit
  bolakoya:      ['M', 1.00],  // wealth wards off evil
  bolalemi:      ['F', 1.00],  // wealth is mine
  bolape:        ['F', 1.00],  // wealth is enough for me
  bolapeju:      ['F', 1.00],  // wealth comes with gifts

  // ── FUNMI- / FOLA- compounds ──────────────────────────────────────────
  funmilola:     ['F', 1.00],  // give me wealth
  funmilade:     ['F', 1.00],  // give me crown
  funmibi:       ['F', 1.00],  // give me fortune
  funmititi:     ['F', 1.00],  // give me joy forever
  funmitola:     ['F', 1.00],  // give me wealth
  funmilayomi:   ['F', 1.00],  // give me joy forever
  funmisetan:    ['F', 1.00],  // give me patience
  funmite:       ['F', 1.00],  // give me this
  funmitunde:    ['F', 1.00],  // give me the one who returns
  funmiwale:     ['F', 1.00],  // give me the one who comes home
  funmiyemi:     ['F', 1.00],  // give me one who befits me
  folashade:     ['F', 1.00],  // wealth has dignity
  foluso:        ['M', 1.00],  // wealth saves
  folarinwa:     ['M', 1.00],  // wealth comes back to us
  folarin:       ['M', 1.00],  // wealth returns
  folahanmi:     ['F', 1.00],  // wealth is good to me
  folawe:        ['F', 1.00],  // wealth expands
  folahan:       ['M', 1.00],  // wealth flourishes
  folaseun:      ['M', 1.00],  // wealth deserves thanks
  folakemi:      ['F', 1.00],  // wealth cares for me
  folasayo:      ['F', 1.00],  // wealth brings joy
  folorunsho:    ['M', 1.00],  // God fully supports
  folasanya:     ['M', 1.00],  // wealth does great things
  folami:        ['F', 1.00],  // wealth is mine
  foladayo:      ['F', 1.00],  // wealth brings joy
  folabomi:      ['F', 1.00],  // wealth gives me love
  folabunmi:     ['F', 1.00],  // wealth gives me a gift
  folajimi:      ['M', 1.00],  // wealth gave me this
  folajoke:      ['F', 1.00],  // wealth is pampered
  folakunle:     ['M', 1.00],  // wealth fills the house
  folaniyi:      ['M', 1.00],  // wealth has dignity
  folaranmi:     ['F', 1.00],  // already present
  folasade:      ['F', 1.00],  // already present
  folatunde:     ['M', 1.00],  // wealth returns
  folawale:      ['M', 1.00],  // wealth comes home
  folayemi:      ['U', 0.85],  // wealth befits me
  folayinka:     ['F', 1.00],  // wealth surrounds me

  // ── IFE- (love) compounds ────────────────────────────────────────────
  ifedayo:       ['F', 1.00],  // love brings joy
  ifedolapo:     ['F', 1.00],  // love gathers wealth
  ifedare:       ['U', 0.90],  // love is just
  ifeyemi:       ['U', 0.85],  // love befits me
  ifekoya:       ['M', 1.00],  // love protects against evil
  ifetunde:      ['F', 1.00],  // love returns
  ifedairo:      ['F', 1.00],  // love is beautiful
  ifelade:       ['F', 1.00],  // love has crown
  ifeniyi:       ['M', 1.00],  // love has honor
  ifelabi:       ['M', 1.00],  // love is born
  ifeyinka:      ['U', 0.85],  // love surrounds me
  ifesoji:       ['M', 1.00],  // love revives
  ifebunmi:      ['F', 1.00],  // love is a gift
  ifedayo:       ['F', 1.00],  // love brings joy
  ifeoluwakitan: ['F', 1.00],  // God's love never ends
  ifeoluwakiisi: ['F', 1.00],  // God's love never fades
  ifeoluwapo:    ['F', 1.00],  // God's love is abundant
  ifeoluwanimi:  ['F', 1.00],  // God's love is mine
  ifewunmi:      ['F', 1.00],  // love is desirable

  // ── GBEMI- compounds ─────────────────────────────────────────────────
  gbemileke:     ['M', 1.00],  // carry me to the winner
  gbemirotimi:   ['M', 1.00],  // carry me to the one who stays
  gbemilayo:     ['F', 1.00],  // carry me to joy
  gbemikunle:    ['M', 1.00],  // carry me and fill the house
  gbeminiyi:     ['M', 1.00],  // carry me to honor
  gbemisola:     ['F', 1.00],  // already present

  // ── Muslim Yoruba (Islamic) names ────────────────────────────────────
  kafayat:       ['F', 0.90],  // capable
  kabirat:       ['F', 0.90],  // great one (female)
  muinat:        ['F', 0.90],  // faithful
  silifat:       ['F', 0.90],  // goodness
  sofiat:        ['F', 0.90],  // pure
  raliat:        ['F', 0.90],  // pleased
  sariat:        ['F', 0.90],  // blessed
  modinat:       ['F', 0.90],  // civic
  fausat:        ['F', 0.90],  // eloquent
  faridah:       ['F', 0.85],  // unique
  aishat:        ['F', 0.90],  // Yoruba form of Aisha
  marufat:       ['F', 0.90],  // known / famous
  romoke:        ['F', 0.90],  // Yoruba form of Ruqayyah
  ramota:        ['F', 0.90],  // Yoruba form of Ramatullah
  sikiratu:      ['F', 0.90],  // Yoruba form of Sukayratu
  mutiat:        ['F', 0.90],  // obedient
  rukayat:       ['F', 0.90],  // Yoruba form of Ruqayyah
  asmau:         ['F', 0.90],  // Yoruba form of Asma
  nurat:         ['F', 0.90],  // light (female)
  taofilat:      ['F', 0.90],  // Yoruba form of Taufiqat
  wahidat:       ['F', 0.90],  // unique (female)
  zalikha:       ['F', 0.90],  // Yoruba form of Zulaikha
  aminat:        ['F', 0.90],  // Yoruba form of Aminah
  zeenat:        ['F', 0.85],  // beauty / ornament
  latifat:       ['F', 0.90],  // gentle
  latifahat:     ['F', 0.90],  // gentle one
  rasheedat:     ['F', 0.90],  // rightly guided (female)
  taofik:        ['M', 0.90],  // Yoruba form of Tawfiq
  tajudeen:      ['M', 0.90],  // crown of the faith
  surajudeen:    ['M', 0.90],  // lamp of the faith
  raheem:        ['M', 0.85],  // merciful
  hakeem:        ['M', 0.85],  // wise
  rasheed:       ['M', 0.85],  // rightly guided
  musbau:        ['M', 0.90],  // Yoruba form of Mus'ab
  mubarak:       ['M', 0.85],  // blessed
  mujidat:       ['F', 0.90],  // praiseworthy
  kamoru:        ['M', 0.90],  // Yoruba form of Qamar
  kamaldeen:     ['M', 0.90],  // perfection of the faith
  aminudeen:     ['M', 0.90],  // faithful to the faith
  saheed:        ['M', 0.85],  // martyr
  wahab:         ['M', 0.85],  // the giver
  sikiru:        ['M', 0.90],  // Yoruba form of Shukri
  wasiu:         ['M', 0.90],  // Yoruba form of Wasi
  raufu:         ['M', 0.90],  // Yoruba form of Ra'uf
  rafiu:         ['M', 0.90],  // Yoruba form of Rafi
  busari:        ['M', 0.90],  // Yoruba form of Bussari
  ganiyu:        ['M', 0.90],  // Yoruba form of Ghani
  kasali:        ['M', 0.90],  // Yoruba form of Ghazali
  mustapha:      ['M', 0.85],  // chosen / elected
  sulaimon:      ['M', 0.90],  // Yoruba form of Sulayman
  abdulazeez:    ['M', 0.85],  // servant of the Almighty
  abdulquadir:   ['M', 0.85],  // servant of the Capable
  balikis:       ['F', 0.90],  // Yoruba form of Bilqis (Queen of Sheba)
  morenike:      ['F', 1.00],  // already present
  salawu:        ['M', 0.90],  // Yoruba form of Salah
  sanusi:        ['M', 0.90],  // Yoruba form of Sanus

  // ── Standalone Yoruba names ───────────────────────────────────────────
  afolabi:       ['M', 1.00],  // born into wealth
  agbaje:        ['M', 1.00],  // no one surpasses God
  agboola:       ['M', 1.00],  // the year grows
  alade:         ['M', 1.00],  // the crowned one
  alabi:         ['M', 1.00],  // born into wealth
  alao:          ['M', 1.00],  // the precious / wealthy
  araoye:        ['M', 1.00],  // in the king's household
  aremu:         ['M', 1.00],  // crown prince
  arowolo:       ['M', 1.00],  // a child who comes with wealth
  atanda:        ['M', 1.00],  // the brave one joins
  atinuke:       ['F', 1.00],  // nurtured to be cherished
  awolola:       ['M', 1.00],  // the spirit brings wealth
  awosanya:      ['M', 1.00],  // the spirit does great things
  awoyemi:       ['M', 1.00],  // the spirit befits me
  babalola:      ['M', 1.00],  // father of wealth
  bamidele:      ['M', 1.00],  // follow me home
  bamisile:      ['M', 1.00],  // come with me to the house
  bamgbola:      ['M', 1.00],  // take me to wealth
  dada:          ['U', 0.85],  // born with dreadlocks
  durosimi:      ['M', 1.00],  // wait for me
  egbeyemi:      ['M', 1.00],  // age group befits me
  fadahunsi:     ['M', 1.00],  // let them enjoy the crown
  fagbemi:       ['M', 1.00],  // use us as proof
  fagbenro:      ['M', 1.00],  // use wisdom to build on honor
  fafunwa:       ['M', 1.00],  // bring the good news home
  falola:        ['M', 1.00],  // wealth is God
  famurewa:      ['M', 1.00],  // the spirit gathered wealth
  fayemi:        ['M', 1.00],  // the spirit befits me
  fayose:        ['M', 1.00],  // the spirit is sufficient
  ifalola:       ['F', 1.00],  // wisdom is wealth
  jaye:          ['M', 0.90],  // enjoy
  jolayemi:      ['M', 1.00],  // enjoy wealth that befits me
  jolade:        ['F', 1.00],  // enjoy wealth
  kawonise:      ['M', 1.00],  // let the knowledgeable judge
  ladele:        ['M', 1.00],  // wealth walks in
  ladipo:        ['M', 1.00],  // wealth comes up
  ladoja:        ['M', 1.00],  // wealth has arrived
  laide:         ['F', 0.90],  // short for Olaide
  lara:          ['F', 0.90],  // short for Omolara
  leye:          ['M', 1.00],  // intelligence
  makinwa:       ['M', 1.00],  // the wealthy one
  motunrayo:     ['F', 1.00],  // I found a new joy
  nihinlola:     ['F', 1.00],  // here is wealth
  ojora:         ['M', 1.00],  // traditional title name
  okoya:         ['M', 1.00],  // the owner stays
  olatunji:      ['M', 1.00],  // wealth wakes up again
  omotosho:      ['M', 1.00],  // the child is sufficient
  onayemi:       ['M', 1.00],  // what I sought befits me
  opaleye:       ['M', 1.00],  // eyes of a king
  orelope:       ['M', 1.00],  // the rich person is chosen
  oreniyi:       ['M', 1.00],  // honor has dignity
  oyedeji:       ['M', 1.00],  // the rank is doubled
  oyedele:       ['M', 1.00],  // the rank creates a home
  oyediran:      ['M', 1.00],  // the rank continues
  oyedokun:      ['M', 1.00],  // the rank rises
  oyekanmi:      ['M', 1.00],  // rank follows me
  oyewale:       ['M', 1.00],  // rank comes home
  oyewole:       ['M', 1.00],  // rank enters the house
  oyewumi:       ['F', 0.90],  // rank is desirable
  salami:        ['M', 0.90],  // the peaceful one
  sanwo:         ['M', 1.00],  // pay / generous
  tinubu:        ['M', 1.00],  // we are here
  tunde:         ['M', 0.95],  // father returns (standalone)
  wunmi:         ['F', 0.90],  // desirable one
  lawal:         ['M', 0.85],  // returns / comes back (Yoruba form)
  ojuade:        ['M', 1.00],  // face of the crown
  ojuola:        ['F', 1.00],  // face of wealth
  olufunmilayo:  ['F', 1.00],  // God gives me joy
  olufemi:       ['M', 1.00],  // God loves me (standalone)
  olumuyiwa:     ['M', 1.00],  // already present
  olutayo:       ['M', 1.00],  // God brings joy
  oluwole:       ['M', 1.00],  // God enters the house
  oluyemisi:     ['F', 1.00],  // God cares for me
  osunniyi:      ['M', 1.00],  // the god Osun has honor
  otigba:        ['M', 1.00],  // traditional name
  oyinkan:       ['F', 1.00],  // honey surrounds the child
  oyindamola:    ['F', 1.00],  // honey blends with wealth
  sade:          ['F', 0.90],  // short for Folashade
  simi:          ['F', 0.90],  // short for Oluwasimi
  sofola:        ['M', 1.00],  // the spirit befriends wealth
  sowole:        ['M', 1.00],  // follow into the house
  timilehin:     ['U', 0.85],  // God is with me (standalone)
  damilola:      ['U', 0.90],  // short for Oluwadamilola
  damilare:      ['U', 0.90],  // short for Oluwadamilare
  mayowa:        ['F', 0.90],  // short for Oluwamayowa
  nisola:        ['F', 0.90],  // short for Oluwanisola
  fisayo:        ['F', 0.90],  // short for Oluwafisayo
  bukola:        ['F', 0.90],  // add wealth to wealth
  ewatomi:       ['F', 1.00],  // beauty follows me
  foluke:        ['F', 1.00],  // wealth of God
  ibilola:       ['F', 1.00],  // wealth has grown
  ibironke:      ['F', 1.00],  // child of the crown is pampered
  ibiwumi:       ['F', 1.00],  // child is desirable
  ifeyinwa:      ['F', 1.00],  // love is supreme
  labisi:        ['F', 0.90],  // wealth has increased
  latifah:       ['F', 0.85],  // gentle (Yoruba Muslim female)
  modupe:        ['F', 1.00],  // I give thanks
  mojirayo:      ['F', 1.00],  // I found joy
  momola:        ['F', 1.00],  // mother's child
  monisola:      ['F', 1.00],  // my wealth has saved
  morolake:      ['F', 1.00],  // see and care for the child
  olukemi:       ['F', 1.00],  // God's child is cared for
  oreofeoluwa:   ['F', 1.00],  // God's grace is good
  asake:         ['F', 1.00],  // chosen to be pampered
  asaolu:        ['M', 1.00],  // Ifa's oracle saves
  atogbade:      ['M', 1.00],  // one who comes to meet the crown
  awodele:       ['M', 1.00],  // oracle creates a home
  aworinde:      ['M', 1.00],  // oracle enters the crown
  awosika:       ['M', 1.00],  // the oracle opens the way
  bamgboye:      ['M', 1.00],  // already present — skip
  daramola:      ['M', 1.00],  // calmness blends with wealth
  durojaiye:     ['M', 1.00],  // wait and enjoy life
  durosinmi:     ['M', 1.00],  // wait for rest
  ebunoluwa:     ['F', 1.00],  // God's gift
  ekundayo:      ['U', 0.85],  // tears become joy
  ekunola:       ['F', 1.00],  // tears become wealth
  eweniyi:       ['M', 1.00],  // we have dignity
  faderera:      ['M', 1.00],  // the oracle treats me well
  fadeyibi:      ['M', 1.00],  // the oracle brought this birth
  falabi:        ['M', 1.00],  // the oracle is born
  faleye:        ['M', 1.00],  // the oracle sees honor
  faluyi:        ['M', 1.00],  // the oracle is the truth
  famoroti:      ['M', 1.00],  // the oracle cares for the king
  faniran:       ['M', 1.00],  // the oracle continues
  fasakin:       ['M', 1.00],  // the oracle is strong
  fasanya:       ['M', 1.00],  // the oracle does great things
  fawehinmi:     ['M', 1.00],  // oracle adorns me
  fawohinmi:     ['M', 1.00],  // oracle adorns me (variant)
  gbadamosi:     ['M', 0.90],  // Yoruba Muslim compound
  gbadebo:       ['M', 1.00],  // hold on to the crown
  gbadewole:     ['M', 1.00],  // hold on to wealth that enters the house
  ibidapo:       ['F', 1.00],  // the birth gathers together
  ibidunni:      ['F', 1.00],  // birth is sweet
  idowu:         ['U', 0.90],  // already present
  ijasan:        ['M', 1.00],  // a person of honor
  irabinrin:     ['F', 1.00],  // the woman of iron
  iragbemi:      ['M', 1.00],  // iron carries me
  irawadola:     ['F', 1.00],  // the iron one walks to wealth
  ireoluwa:      ['F', 1.00],  // God's grace
  isola:         ['M', 0.85],  // worth / exalted
  jaiyeola:      ['M', 1.00],  // enjoy life and wealth
  jinadu:        ['M', 0.90],  // Yoruba Muslim male name
  jolaade:       ['F', 1.00],  // enjoy the crown
  kabisat:       ['F', 0.90],  // Yoruba Muslim female name
  kokumo:        ['M', 1.00],  // this one will not die again
  kolapo:        ['M', 1.00],  // wealth gathers together
  korede:        ['U', 0.90],  // bring this home
  koyejo:        ['M', 1.00],  // bring together with honor
  laniyan:       ['M', 1.00],  // wealth is with the people
  lapite:        ['M', 1.00],  // wealth reaches the crown
  lasisi:        ['M', 0.90],  // Yoruba form of Al-Sisi
  latunde:       ['M', 1.00],  // wealth returns
  laureola:      ['F', 1.00],  // wealth is God
  lawoyin:       ['M', 1.00],  // wealth comes with this one
  leshi:         ['F', 0.90],  // gentle
  liadi:         ['M', 0.90],  // Yoruba form of Liyadi
  lolade:        ['F', 1.00],  // wealth creates a home
  lolatunde:     ['F', 1.00],  // wealth returns
  lolawole:      ['M', 1.00],  // wealth enters the house
  lotunna:       ['M', 1.00],  // wealth returns to the father
  mojolaoluwa:   ['F', 1.00],  // I find my joy in God
  mojisola:      ['F', 1.00],  // I find wealth
  morakinyo:     ['M', 1.00],  // I am comforted by the warrior
  morolaye:      ['F', 1.00],  // see and care for honor
  mosopefoluwa:  ['F', 1.00],  // I am grateful to God
  motinola:      ['F', 1.00],  // I found wealth
  moyinoluwa:    ['F', 1.00],  // I praise God
  niniola:       ['F', 1.00],  // here is wealth
  obalende:      ['M', 1.00],  // the king comes
  obashola:      ['M', 1.00],  // the king found wealth
  obasohan:      ['M', 1.00],  // the king is great
  obatunde:      ['M', 1.00],  // the king returns
  obawoye:       ['M', 1.00],  // the king elevated honor
  odunmbaku:     ['M', 1.00],  // the year is sufficient
  odunsi:        ['M', 1.00],  // the year arrives
  oduntan:       ['M', 1.00],  // the year is patient
  ogunjimi:      ['M', 1.00],  // the god Ogun gave me this
  ogunkunle:     ['M', 1.00],  // Ogun fills the house
  ogunlana:      ['M', 1.00],  // Ogun takes possession
  ogunleye:      ['M', 1.00],  // Ogun has honor
  ogunmola:      ['M', 1.00],  // Ogun blends with wealth
  ogunranti:     ['M', 1.00],  // Ogun remembers
  ogunsanya:     ['M', 1.00],  // Ogun does great things
  ogunsola:      ['M', 1.00],  // Ogun is wealth
  ogunsiji:      ['M', 1.00],  // Ogun stands upright
  ogunyemi:      ['M', 1.00],  // Ogun befits me
  ojuolape:      ['F', 1.00],  // face of the one who brings gifts
  okunola:       ['M', 1.00],  // the one of Ile-Ife has wealth
  olabadan:      ['M', 1.00],  // wealth of Ibadan
  olabamiji:     ['M', 1.00],  // wealth doubles for me
  olabambo:      ['M', 1.00],  // wealth added to us
  olabintan:     ['F', 1.00],  // wealth meets with patience
  olufunke:      ['F', 1.00],  // God's wealth cared for
  olupemi:       ['F', 1.00],  // God cares for me (female)
  oluremi:       ['F', 1.00],  // God comforts me
  oluwabamidele: ['M', 1.00],  // God followed me home
  oluwabukunmi:  ['F', 1.00],  // God's blessing is mine
  oluwafisola:   ['F', 1.00],  // God brought wealth
  oluwajinmi:    ['M', 1.00],  // God gave me this
  oluwajomiloju: ['F', 1.00],  // God wipes my face
  oluwakeye:     ['M', 1.00],  // God created honor
  oluwalogbon:   ['M', 1.00],  // God is wisdom
  oluwaninuola:  ['F', 1.00],  // God is inside wealth
  oluwasolape:   ['F', 1.00],  // God brings wealth to me
  oluwatayo:     ['U', 0.90],  // God brings joy
  oluwateniola:  ['F', 1.00],  // God gives me wealth
  oluwatodimu:   ['M', 1.00],  // God gave it to me
  oluwatokeji:   ['F', 1.00],  // God has multiplied
  oluwatokirewa: ['F', 1.00],  // God has done something beautiful
  oluwatooni:    ['F', 1.00],  // God has given
  omokehinde:    ['F', 1.00],  // the child is the last born
  omonikeji:     ['F', 1.00],  // the child is pampered
  omolade:       ['F', 1.00],  // already present
  omosuyi:       ['M', 1.00],  // child is worthy of honor
  onabamiro:     ['M', 1.00],  // the Ona deity blesses
  onabolu:       ['M', 1.00],  // the oracle gathers wealth
  onafowokan:    ['M', 1.00],  // the hand of the oracle touches
  onaolapo:      ['M', 1.00],  // the oracle gathers together
  onasanya:      ['M', 1.00],  // the oracle does great things
  onasoko:       ['M', 1.00],  // the oracle is certain
  onifade:       ['M', 1.00],  // the owner of the oracle
  orijale:       ['M', 1.00],  // the family tradition creates wealth
  orimadegun:    ['M', 1.00],  // the family tradition shapes the warrior
  orimalade:     ['M', 1.00],  // the family tradition reaches the crown
  orisanwo:      ['M', 1.00],  // the orisa is repaid
  orisagunwa:    ['M', 1.00],  // the orisa beats the warrior
  orisawo:       ['M', 1.00],  // the orisa is great
  osipitan:      ['M', 1.00],  // Osun brought patience
  oyeniran:      ['M', 1.00],  // honor continues
  oyesola:       ['M', 1.00],  // honor is wealth
  oyetade:       ['M', 1.00],  // honor reaches the crown
  oyetayo:       ['M', 1.00],  // honor brings joy
  oyetola:       ['M', 1.00],  // honor has wealth
  oyetunde:      ['M', 1.00],  // honor returns
  rotimioluwa:   ['M', 1.00],  // God remains with me (full form)
  sanyaolu:      ['M', 1.00],  // the great one comes
  sanyaoluwa:    ['M', 1.00],  // God does great things
  seunfunmi:     ['U', 0.90],  // praise is given to me
  shonibare:     ['M', 1.00],  // I am with the brave one
  siyanbade:     ['M', 1.00],  // I wore the crown
  soladapo:      ['M', 1.00],  // wealth gathers together
  soladipo:      ['M', 1.00],  // wealth rises
  solanke:       ['M', 1.00],  // wealth with the crown
  solarin:       ['M', 1.00],  // wealth returns
  soremekun:     ['M', 1.00],  // I met the warrior
  sowunmi:       ['M', 1.00],  // we are with the desirable one
  taiye:         ['U', 0.90],  // variant of Taiwo
  temilade:      ['F', 1.00],  // mine has crown
  temilolu:      ['F', 1.00],  // mine is the lord
  teniola:       ['F', 1.00],  // God gives me wealth
  tenidara:      ['F', 1.00],  // God is good to me
  teniomo:       ['F', 1.00],  // God gives me a child
  titilope:      ['F', 1.00],  // joy forever is worthy of praise
  tofunmi:       ['F', 1.00],  // short for Oluwatofunmi
  tolani:        ['F', 0.90],  // short for Toluwanimi
  topeoluwa:     ['F', 1.00],  // God is the great one
  torisejo:      ['M', 1.00],  // I am in the hand of honor
  torisola:      ['U', 0.90],  // in honor is wealth
  toriola:       ['M', 1.00],  // in the hand of wealth
  tunbosun:      ['M', 1.00],  // return and add to us
  tunmininu:     ['M', 1.00],  // refresh what is inside
  wuraola:       ['F', 1.00],  // gold is wealth
  wuraolaoluwa:  ['F', 1.00],  // God's gold is wealth
  wuranile:      ['F', 1.00],  // gold is in the house
  yemisi:        ['F', 1.00],  // the one cared for
  yetunbi:       ['F', 1.00],  // mother was born again
  yewande:       ['F', 1.00],  // mother came back looking
  yinusa:        ['M', 0.90],  // Yoruba form of Yunus (Jonah)
  yomi:          ['U', 0.85],  // short for Oluwayomi
  yusuff:        ['M', 0.85],  // Yoruba form of Yusuf
  abioye:        ['M', 1.00],  // born into royalty
  abisola:       ['F', 0.90],  // born into wealth
  adunni:        ['F', 1.00],  // sweet person
  agiri:         ['M', 0.85],  // traditional name
  ajanaku:       ['M', 1.00],  // the great elephant
  ajanlekoko:    ['M', 1.00],  // the one who fights to stay
  ajoke:         ['F', 1.00],  // pampered by all
  ajulo:         ['M', 1.00],  // the deep one
  ajuwon:        ['M', 1.00],  // let them return
  akintunde:     ['M', 1.00],  // valor returns
  alabede:       ['M', 1.00],  // the wearer of the crown at dawn
  alakija:       ['M', 1.00],  // the owner of the fortress
  alakoso:       ['M', 1.00],  // the one who controls
  alamu:         ['M', 0.90],  // the one from Elam
  alaran:        ['M', 1.00],  // the one who dyes cloth
  alausa:        ['M', 0.85],  // the market trader
  aledeh:        ['M', 1.00],  // traditional Yoruba name
  aluko:         ['M', 1.00],  // traditional Yoruba name
  amoke:         ['F', 1.00],  // one who is pampered from afar
  amoran:        ['F', 0.85],  // one who knows (rare)
  apena:         ['M', 0.85],  // title: secretary of the Ogboni
  aperin:        ['M', 1.00],  // the one who strikes with force
  ariwaola:      ['M', 1.00],  // the drum of wealth
  aroge:         ['F', 0.85],  // traditional female name
  arotile:       ['F', 1.00],  // one who honors the crown
  asabi:         ['F', 1.00],  // born during a significant event
  aselebe:       ['M', 1.00],  // traditional name
  aseyori:       ['M', 1.00],  // one who achieves success
  asiwaju:       ['M', 0.85],  // the leader / one who walks ahead
  awojobi:       ['M', 1.00],  // the oracle enters the birth
  awolowo:       ['M', 1.00],  // the oracle has wealth
  awomolo:       ['M', 1.00],  // the oracle blends with wealth
  awoniyi:       ['M', 1.00],  // the oracle has dignity
  awopetu:       ['M', 1.00],  // the oracle is strong
  ayofe:         ['F', 1.00],  // joy is expansive
  ayofemi:       ['U', 0.85],  // joy loves me
  ayooluwa:      ['U', 0.90],  // God's joy
  ayosojimi:     ['M', 1.00],  // joy gathered for me
  babafemi:      ['M', 1.00],  // father loves me
  babalayo:      ['M', 1.00],  // father has joy
  babatayo:      ['M', 1.00],  // father brings joy
  babatola:      ['M', 1.00],  // father has wealth
  babawale:      ['M', 1.00],  // father comes home
  bayode:        ['M', 1.00],  // the honorable one brings joy
  bilikisu:      ['F', 0.90],  // Yoruba form of Bilqis
  bisola:        ['F', 0.90],  // born into wealth
  botunde:       ['M', 1.00],  // comes back with wealth
  busola:        ['F', 0.90],  // add wealth
  dairo:         ['M', 1.00],  // the beautiful one
  damilare:      ['U', 0.90],  // take care of me justly
  damola:        ['M', 1.00],  // short for Adedamola
  dayisi:        ['M', 1.00],  // variant of Daisi
  deola:         ['F', 0.90],  // short for Adeola
  dimejide:      ['M', 1.00],  // merged and woke up
  dinatu:        ['F', 0.90],  // traditional female name
  dolamu:        ['M', 1.00],  // grow in wealth
  dolapo:        ['F', 0.90],  // mix wealth together
  dunni:         ['F', 0.90],  // the sweet one
  edun:          ['M', 0.85],  // colobus monkey (totem name)
  efe:           ['F', 0.90],  // profit / wealth
  efeoluwa:      ['F', 1.00],  // God's profit
  egbaran:       ['M', 1.00],  // traditional name
  ejire:         ['U', 0.85],  // one of twins
  ekun:          ['M', 0.85],  // leopard (traditional)
  elemo:         ['M', 0.85],  // traditional Yoruba name
  etomi:         ['M', 1.00],  // look at me
  eweje:         ['M', 1.00],  // traditional name
  fabunmi:       ['F', 1.00],  // the oracle gave me a gift
  fagboyegun:    ['M', 1.00],  // use the oracle to be victorious
  faleti:        ['M', 1.00],  // the oracle was faithful
  famuyide:      ['M', 1.00],  // the oracle woke it up
  faniyi:        ['M', 1.00],  // the oracle has dignity
  fanola:        ['F', 1.00],  // the oracle has wealth
  faranola:      ['M', 1.00],  // the oracle walks toward wealth
  feyi:          ['U', 0.85],  // short for Oluwafeyikemi
  fibi:          ['F', 0.90],  // Yoruba form of Phoebe
  fidelis:       ['M', 0.85],  // faithful (used in Yoruba Catholicism)
  fijabi:        ['M', 1.00],  // I fought for this birth
  fikayo:        ['U', 0.85],  // short for Oluwafikunayomi
  filani:        ['M', 0.85],  // Fulani (used as name by Yoruba)
  fola:          ['U', 0.85],  // short for Folaranmi / Folahanmi
  fope:          ['F', 0.90],  // worthy of praise
  funsho:        ['M', 0.90],  // short for Oluwafunso
  gbaja:         ['M', 1.00],  // fame
  gbajumo:       ['M', 1.00],  // the famous one
  gbajumola:     ['M', 1.00],  // fame blends with wealth
  gbolahan:      ['M', 1.00],  // bring honor to the house
  gbolade:       ['M', 1.00],  // bring wealth to the home
  gboyede:       ['M', 1.00],  // raise wealth
};

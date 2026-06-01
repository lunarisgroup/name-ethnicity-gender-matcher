/**
 * Igbo name dictionary
 * Format: name → [gender, confidence]
 *
 * Igbo are Nigeria's third-largest group (~18%), concentrated in SE Nigeria
 * (Anambra, Imo, Enugu, Ebonyi, Abia, Delta, Rivers).
 *
 * Key Igbo name elements:
 *  Chi     = personal deity / God
 *  Chukwu  = the Supreme God (Almighty)
 *  Eze     = king
 *  Nna     = father
 *  Nne     = mother
 *  Obi     = heart
 *  Uche    = thought / wisdom
 */

'use strict';

module.exports = {
  // __ A___________________________________________________________________
  abuchi:        ['M', 1.00],  // Song of God
  achalugo:      ['F', 1.00],  // The home of an eagle. The home of honour/greatness.
  adindu:        ['M', 1.00],
  afamefuna:     ['M', 1.00],
  agha:          ['M', 1.00],  // War
  Agu:           ['M', 1.00],
  ahumma:        ['F', 1.00],
  ahunma:        ['F', 1.00],
  ahunna:        ['M', 1.00],
  akachukwu:     ['M', 1.00],
  akachi:        ['F', 1.00],
  
  // ── CHI- (personal deity / God) ────────────────────────────────────────
  chibuike:      ['M', 1.00],  // God is strength
  chibuzo:       ['M', 1.00],  // God leads the way
  chidi:         ['M', 1.00],  // God is there / God exists
  chidebe:       ['M', 1.00],  // God supports
  chidebere:     ['M', 1.00],  // God has mercy
  chidiebube:    ['M', 1.00],  // God is glorious
  chidike:       ['M', 1.00],  // God is strong
  chidozie:      ['M', 1.00],  // God arranges / fixes
  chiebuka:      ['M', 1.00],  // God is great
  chiemeka:      ['M', 1.00],  // God has done great things
  chigozie:      ['M', 0.90],  // God has blessed (also female)
  chijindu:      ['M', 1.00],  // God holds life
  chijioke:      ['M', 1.00],  // God gives talent
  chika:         ['U', 1.00],  // God is bigger
  chikaodili:    ['U', 0.85],  // God is the most beautiful

  chike:         ['M', 1.00],  // God's power
  chikodi:       ['M', 1.00],  // God has a plan
  chikwuemeka:   ['M', 1.00],  // God has done great things
  chikwuenyem:   ['M', 1.00],  // God gave me this
  chima:         ['M', 1.00],  // God knows
  chimdi:        ['M', 1.00],  // God is alive
  chimdike:      ['M', 1.00],  // God is alive and strong
  chimezie:      ['M', 1.00],  // God arranges
  chimeze:       ['M', 1.00],
  chinedu:       ['M', 1.00],  // God leads
  chinonso:      ['M', 1.00],  // God is near
  chinwe:        ['F', 1.00],  // God owns (also God's)
  chinweike:     ['M', 1.00],  // God owns power
  chisom:        ['U', 0.85],  // God follows me
  chidera:       ['M', 1.00],  // God writes / destiny
  chiamaka:      ['F', 1.00],  // God is beautiful
  chidinma:      ['F', 1.00],  // God is good
  chidindu:      ['F', 1.00],
  chinonye:      ['F', 1.00],  // God has someone
  chioma:        ['F', 1.00],  // good God
  chinyere:      ['F', 1.00],  // God gave
  chizara:       ['F', 1.00],  // God answered
  chizaram:      ['F', 1.00],  // God answered me
  chinaza:       ['F', 1.00],  // God answers
  chizoba:       ['F', 1.00],  // God protects

  // ── CHUKWU- (Supreme God) ──────────────────────────────────────────────
  chukwudi:      ['M', 1.00],  // God exists
  chukwuebuka:   ['M', 1.00],  // God is great
  chukwuemeka:   ['M', 1.00],  // God has done great things
  chukwueze:     ['M', 1.00],  // God is king
  chukwuka:      ['M', 1.00],  // God is greater
  chukwunonye:   ['M', 1.00],  // God is with someone

  // ── EZE- (king) ────────────────────────────────────────────────────────
  eze:           ['M', 0.90],  // king
  ezechi:        ['M', 1.00],  // the king is God
  ezechukwu:     ['M', 1.00],  // God is king

  // ── IKE- (power / strength) ────────────────────────────────────────────
  ikechukwu:     ['M', 1.00],  // God's power
  ikenna:        ['M', 1.00],  // father's power

  // ── IFE- (love / something good) ──────────────────────────────────────
  ifeanyichukwu: ['M', 1.00],  // nothing is impossible with God
  ifeoma:        ['F', 1.00],  // good thing
  ifunanya:      ['F', 1.00],  // love

  // ── OBI- (heart) ──────────────────────────────────────────────────────
  obinna:        ['M', 1.00],  // father's heart
  obi:           ['M', 0.85],  // heart
  obiechina:     ['M', 1.00],
  obiefune:      ['M', 1.00],
  obiajulu:      ['M', 1.00],  // heart is at rest
  obiora:        ['M', 1.00],  // the people's heart
  obiageli:      ['F', 1.00],  // one who has come to enjoy wealth

  // ── OKE- / OKU- ───────────────────────────────────────────────────────
  okechukwu:     ['M', 1.00],  // God's share / what God has given
  okwuchukwu:    ['M', 1.00],  // God's word

  // ── ONY- (who / whoever) ──────────────────────────────────────────────
  onyeka:        ['M', 1.00],  // who is greater
  onyekachi:     ['M', 1.00],  // who is greater than God
  onyekwere:     ['M', 1.00],
  onyemachi:     ['M', 1.00],  // who knows tomorrow
  onyedikachi:   ['F', 1.00],  // no one is greater than God

  // ── NNA- (father) / NNE- (mother) ────────────────────────────────────
  nnamdi:        ['M', 1.00],  // my father is alive
  nnaemeka:      ['M', 1.00],  // father did great things
  nnayelugo:     ['M', 1.00],
  nneka:         ['F', 1.00],  // mother is greatest
  nneoma:        ['F', 1.00],  // good mother
  nkiruka:       ['F', 1.00],  // the future is greater

  // ── NGO- ──────────────────────────────────────────────────────────────
  ngozi:         ['F', 1.00],  // blessing

  // ── ADA- (first daughter) ─────────────────────────────────────────────
  ada:           ['F', 0.85],  // first daughter
  adaeze:        ['F', 1.00],  // daughter of the king / princess
  adaku:         ['F', 1.00],  // The daughter of wealth
  adamma:        ['F', 1.00],  // The daughter of beauty.
  adaora:        ['F', 1.00],  // daughter of the people
  adanna:        ['F', 1.00],  // father's daughter
  adannaya:      ['F', 1.00],  // The first daughter of her father
  adaobi:        ['F', 1.00],  // 1. Daughter of a chief/king 2. Princess. 3. A daughter birthed in a kindred and named as a symbol of its unison.
  adaolisa:      ['F', 1.00],
  adaoma:        ['F', 1.00],
  adaugo:        ['F', 1.00],
  // ── EMEKA / EBUKA ─────────────────────────────────────────────────────
  emeka:         ['M', 1.00],  // short for Chukwuemeka
  ebuka:         ['M', 1.00],  // greatness (Igbo: "ibu ukwu")

  // ── UCH- (thought / wisdom) ───────────────────────────────────────────
  uche:          ['M', 0.90],  // thought / wisdom (also female)
  uchenna:       ['M', 1.00],  // God's thought
  ugochukwu:     ['M', 1.00],  // God's eagle
  ugonna:        ['M', 1.00],  // father's eagle
  ugochi:        ['F', 1.00],  // God's eagle (female form)
  ugonma:        ['F', 1.00],  // beautiful eagle
  uloma:         ['F', 1.00],  // beautiful home
  uloaku:        ['F', 1.00],  // home of wealth
  uzoamaka:      ['F', 1.00],
  uzoma:         ['M', 0.90],  // good road / way (also female)

  // ── MISC. IGBO ────────────────────────────────────────────────────────
  amaka:         ['F', 1.00],  // so beautiful
  ebele:         ['F', 1.00],  // kindness / compassion
  ezinne:        ['F', 1.00],  // good mother
  izunna:        ['M', 1.00],  // a father's voice
  kelechi:       ['M', 0.90],  // give thanks to God
  ogochukwu:     ['F', 1.00],  // God's honor / prestige
  oluchi:        ['F', 1.00],  // God's work
  osita:         ['M', 1.00],  // God has brought it
  ositadinma:    ['M', 1.00],  // it has turned out well
  ozioma:        ['F', 1.00],  // good news
  somtochukwu:   ['M', 1.00],  // praise God with me
  arizonachukwu: ['F', 1.00],  // don't forget God
  okoro:         ['M', 1.00],  // 
  tobe:          ['M', 1.00],  // short for Tobechukwu ("Praise God")
  tobechukwu:    ['M', 1.00],  // Praise God
  tobeonna:      ['M', 1.00],  // Praise God is good
  jidenna:       ['M', 1.00],  // father's son
  jideofor:      ['M', 1.00],  // father's son is the greatest
  jideobi:       ['M', 1.00],  // father's son is the heart

  // ── More CHI- (personal deity / God) ──────────────────────────────────
  chimamanda:    ['F', 1.00],  // my God is not mistaken
  chimela:       ['M', 1.00],  // God has done it
  chimeme:       ['M', 1.00],  // God does well
  chimemela:     ['M', 1.00],  // God has done something
  chimenye:      ['U', 0.90],  // God gives
  chimma:        ['F', 1.00],  // God is good
  chimuanya:     ['F', 1.00],  // God's love
  chinaedum:     ['M', 1.00],  // God leads me
  chinaecherem:  ['M', 1.00],  // God thinks for me
  chinaemerem:   ['M', 1.00],  // God does for me
  chinagorom:    ['M', 1.00],  // God sends me
  chinaka:       ['M', 1.00],  // God is greater
  chinelozi:     ['F', 1.00],  // God says
  chinenye:      ['F', 1.00],  // God gives
  chinenyenwa:   ['F', 1.00],  // God gives children
  chinweike:     ['M', 1.00],  // already present
  chinwuba:      ['M', 1.00],  // God increases
  chinyeaka:     ['F', 1.00],  // God gives the hand
  chinyelu:      ['F', 1.00],  // God has given
  chinyerem:     ['F', 1.00],  // God gave me
  chiuwa:        ['U', 0.90],  // God's world
  chisomaga:     ['F', 1.00],  // God follows me beautifully
  chikamnele:    ['M', 1.00],  // God is kind to me
  chikankechi:   ['M', 1.00],  // God rules over all
  chikonye:      ['M', 1.00],  // God is someone
  chiwetalu:     ['F', 1.00],  // God brought this
  chiwendu:      ['M', 1.00],  // God holds life (variant)

  // ── More CHUKWU- (Supreme God) ────────────────────────────────────────
  chukwubuikem:  ['M', 1.00],  // God is my strength
  chukwubunna:   ['M', 1.00],  // God is the father
  chukwudifu:    ['M', 1.00],  // God exists forever
  chukwudike:    ['M', 1.00],  // God is strong
  chukwudinma:   ['M', 1.00],  // God is good
  chukwuenemeka: ['M', 1.00],  // God has done even more
  chukwuezuoke:  ['M', 1.00],  // God has given all
  chukwukammea:  ['M', 1.00],  // God surpasses all things
  chukwunna:     ['M', 1.00],  // God is father
  chukwuoma:     ['M', 1.00],  // God is good (variant)
  chukwuokem:    ['M', 1.00],  // God has given my share
  chukwuorah:    ['M', 1.00],  // God's word
  chukwutamara:  ['M', 1.00],  // God knows
  chukwutem:     ['M', 1.00],  // God has given me
  chukwutemele:  ['M', 1.00],  // God has done for me
  chukwuzia:     ['M', 1.00],  // God answers
  chukwuzitere:  ['M', 1.00],  // God has sent
  chukwuzoreme:  ['M', 1.00],  // God acts for me
  chukwuozo:     ['M', 1.00],  // God says again
  chukwuomenihu: ['M', 1.00],  // God is ahead / God leads

  // ── More EZE- (king) ──────────────────────────────────────────────────
  ezeagwu:       ['M', 1.00],  // the brave king
  ezeanochie:    ['M', 1.00],  // the king represents the ancestors
  ezeanyi:       ['M', 1.00],  // king of friends / elephant king
  ezedike:       ['M', 1.00],  // the king is strong
  ezediokwu:     ['M', 1.00],  // the king tells the truth
  ezekwe:        ['M', 1.00],  // the king persists
  ezekwem:       ['M', 1.00],  // the king believes
  ezenna:        ['M', 1.00],  // king of the land
  ezeoke:        ['M', 1.00],  // the great king
  ezeora:        ['M', 1.00],  // king of the people
  ezeugochukwu:  ['M', 1.00],  // the king is God's eagle
  ezeugo:        ['M', 1.00],  // the eagle king
  ezeudo:        ['M', 1.00],  // king of peace
  ezenwachi:     ['M', 1.00],  // the king God opens
  ezenwaka:      ['M', 1.00],  // the king is greater

  // ── More OBI- (heart) ─────────────────────────────────────────────────
  obibuike:      ['M', 1.00],  // the heart is strength
  obibuzo:       ['M', 1.00],  // heart leads the way
  obiego:        ['M', 1.00],  // heart of the eagle
  obienu:        ['M', 1.00],  // heart of the sky
  obike:         ['M', 1.00],  // the heart is strong
  obinobi:       ['M', 1.00],  // heart to heart
  obioma:        ['U', 0.90],  // good heart
  obiozor:       ['M', 1.00],  // heart of the people
  obiuche:       ['M', 1.00],  // heart of wisdom
  obiukwu:       ['M', 1.00],  // great heart
  obichukwu:     ['M', 1.00],  // God's heart
  obidinma:      ['F', 1.00],  // the heart is good
  obieze:        ['M', 1.00],  // heart of the king

  // ── More NNA/NNE (father/mother) ──────────────────────────────────────
  nnachi:        ['M', 1.00],  // the father is there
  nnadili:       ['M', 1.00],  // the father is with me
  nnadozie:      ['M', 1.00],  // the father has arranged
  nnaka:         ['M', 1.00],  // the father is greater
  nnaoma:        ['M', 1.00],  // good father
  nnanatochukwu: ['M', 1.00],  // the father says praise God
  nnaziam:       ['M', 1.00],  // my father's name
  nnenna:        ['F', 1.00],  // grandmother (common name)
  nnennaya:      ['F', 1.00],  // my grandmother
  nneobi:        ['F', 1.00],  // the mother's heart
  nneamaka:      ['F', 1.00],  // the mother is beautiful
  nnechineke:    ['F', 1.00],  // the mother of the creator
  nnedimma:      ['F', 1.00],  // the mother is good
  nnekwere:      ['F', 1.00],  // the mother believes
  nnenna:        ['F', 1.00],  // grandmother

  // ── More IKE- (power/strength) ────────────────────────────────────────
  ikeagwu:       ['M', 1.00],  // strength is brave
  ikedinobi:     ['M', 1.00],  // strength is in the heart
  ikemba:        ['M', 1.00],  // strength of honor
  ikemefuna:     ['M', 1.00],  // my strength must not be lost
  ikeobi:        ['M', 1.00],  // strength of the heart
  ikeoma:        ['M', 1.00],  // good strength
  ikeora:        ['M', 1.00],  // strength of the people
  ikewachi:      ['M', 1.00],  // strength opens the way
  ikenna:        ['M', 1.00],  // already present
  ikem:          ['M', 0.90],  // my strength
  ikenna:        ['M', 1.00],  // father's power

  // ── More UGO- (eagle) ────────────────────────────────────────────────
  ugodike:       ['M', 1.00],  // the brave eagle
  ugoeze:        ['M', 1.00],  // eagle of the king
  ugonwanyi:     ['F', 1.00],  // eagle of women
  ugooma:        ['F', 1.00],  // beautiful eagle
  ugoukwu:       ['M', 1.00],  // great eagle
  ugoechi:       ['F', 1.00],  // God's eagle (variant)

  // ── UDO- (peace) ─────────────────────────────────────────────────────
  udochukwu:     ['M', 1.00],  // God's peace
  udoeze:        ['M', 1.00],  // the king's peace
  udoka:         ['M', 1.00],  // peace is greater
  udoma:         ['M', 0.90],  // good peace
  udobata:       ['M', 1.00],  // peace has come home
  udochi:        ['F', 1.00],  // God's peace (female)
  udochi:        ['F', 1.00],  // God's peace
  udonu:         ['M', 1.00],  // peace is there

  // ── AMARA- / AMARACHI (grace) ─────────────────────────────────────────
  amarachi:      ['F', 1.00],  // God's grace
  amara:         ['F', 0.90],  // grace
  amaechina:     ['F', 1.00],  // may the grace not be diminished
  amaefula:      ['M', 1.00],  // may my name not be lost
  amaraoluwa:    ['F', 1.00],  // God's grace (Yoruba crossover)
  amaranwachi:   ['F', 1.00],  // grace is always there
  amauche:       ['F', 1.00],  // grace of wisdom
  amauwa:        ['F', 1.00],  // grace of the world

  // ── NDIDI / NDU- (patience / life) ───────────────────────────────────
  ndidi:         ['F', 1.00],  // patience
  ndili:         ['F', 1.00],  // patience is with me
  ndubisi:       ['M', 1.00],  // life is the source
  ndubuchi:      ['M', 1.00],  // life is God's
  ndubueze:      ['M', 1.00],  // life is king
  ndubuisi:      ['M', 1.00],  // life is the head
  ndudinobi:     ['M', 1.00],  // life is in the heart
  ndujiaku:      ['M', 1.00],  // life gives wealth
  nduka:         ['M', 1.00],  // life is greater
  ndukaku:       ['M', 1.00],  // already in other.js — skip
  nduke:         ['M', 1.00],  // life is strength
  nduoma:        ['F', 1.00],  // good life
  nduzonaeze:    ['M', 1.00],  // life on the king's road

  // ── NKECHI / NKEMDI- names ────────────────────────────────────────────
  nkechi:        ['F', 1.00],  // God's own
  nkechinyere:   ['F', 1.00],  // God gave this
  nkeiruka:      ['F', 1.00],  // the future is greater
  nkemakolam:    ['M', 1.00],  // let me not lack my share
  nkemdirim:     ['M', 1.00],  // let me not lack at all
  nkemjika:      ['M', 1.00],  // let me hold on tightly
  nkemsinachi:   ['F', 1.00],  // let my portion always be there
  nkeobi:        ['F', 1.00],  // God's own heart
  nkoli:         ['F', 1.00],  // God's creation

  // ── NWACHI / NWA- (child of) ──────────────────────────────────────────
  nwachukwu:     ['M', 1.00],  // God's child
  nwadinobi:     ['M', 1.00],  // child is in the heart
  nwaeze:        ['M', 1.00],  // child of the king
  nwakaego:      ['F', 1.00],  // child is more than money
  nwamaka:       ['F', 1.00],  // the child is beautiful
  nwanna:        ['M', 0.85],  // sibling / brother
  nwannedinma:   ['F', 1.00],  // sibling is good
  nwanneka:      ['F', 1.00],  // sibling is great
  nwannemezie:   ['M', 1.00],  // sibling has arranged things
  nwaoma:        ['F', 1.00],  // good child
  nwaora:        ['M', 1.00],  // child of the people
  nweze:         ['M', 1.00],  // child of the king

  // ── OLISA- / OLUCHI- names ────────────────────────────────────────────
  olisaeke:      ['M', 1.00],  // God's creation
  olisaemeka:    ['M', 1.00],  // God has done great things
  olisadibe:     ['M', 1.00],  // God's home is established
  olisadieze:    ['M', 1.00],  // God is king
  olisaike:      ['M', 1.00],  // God is strength
  olisaka:       ['M', 1.00],  // God is greater
  olisanma:      ['F', 1.00],  // good God
  olisauchukwu:  ['M', 1.00],  // God alone
  oluchukwuoma:  ['F', 1.00],  // God's work is beautiful
  oluchukwu:     ['F', 1.00],  // already present

  // ── OMA- / ODIOMA- (good) names ───────────────────────────────────────
  omalicha:      ['F', 1.00],  // the beautiful one
  omenma:        ['M', 1.00],  // does good
  omenuko:       ['M', 1.00],  // does in the face of difficulty
  orabuchieze:   ['M', 1.00],  // peace comes from God the king
  orabuchi:      ['M', 1.00],  // peace from God
  odinaka:       ['M', 1.00],  // it is in God's hands
  odinani:       ['M', 1.00],  // it is in the tradition
  odimma:        ['F', 1.00],  // it is well
  odinma:        ['U', 0.85],  // it is good
  ogadimma:      ['U', 0.85],  // we shall be well
  osizimma:      ['F', 1.00],  // it is truly well

  // ── OGBONNA / OGBU- names ─────────────────────────────────────────────
  ogbonna:       ['M', 1.00],  // chest / the father's chest
  ogbonnia:      ['M', 1.00],  // father's chest (variant)
  ogbuechi:      ['M', 1.00],  // God kills (protective name)
  ogbukichukwu:  ['M', 1.00],  // nothing kills what God owns
  ogochukwu:     ['F', 1.00],  // already present
  ogoeze:        ['M', 1.00],  // eagle of the king
  ogomma:        ['F', 1.00],  // beautiful eagle
  ogonnaya:      ['M', 1.00],  // father's eagle

  // ── KENE- / KELECHI- (give thanks) ────────────────────────────────────
  kenechukwu:    ['M', 1.00],  // give thanks to God
  kenechi:       ['M', 1.00],  // give thanks to God (short form)
  kenenna:       ['M', 1.00],  // give thanks to the father
  keneoma:       ['F', 1.00],  // give thanks for good
  keolisa:       ['M', 1.00],  // give thanks to God
  kesaunduchukwu:['M', 1.00],  // give thanks for God's peace
  kamsi:         ['F', 1.00],  // let God do it
  kamsiyochukwu: ['F', 1.00],  // let God's will be done
  kanayo:        ['M', 1.00],  // let it come
  kanye:         ['M', 0.90],  // let it come for me
  kaosisochukwu: ['M', 1.00],  // let God's will be done

  // ── UZOMA / UZO- (road / way) ────────────────────────────────────────
  uzochukwu:     ['M', 1.00],  // God's way
  uzodike:       ['M', 1.00],  // the brave way
  uzoechi:       ['F', 1.00],  // God's road (female)
  uzoeze:        ['M', 1.00],  // the king's road
  uzomaka:       ['F', 1.00],  // beautiful road
  uzooma:        ['F', 1.00],  // good road

  // ── IFESINACHI / IHEOMA- names ────────────────────────────────────────
  ifesinachi:    ['F', 1.00],  // love always
  ifenna:        ['M', 1.00],  // father's love
  iheoma:        ['F', 1.00],  // good thing
  iheanyi:       ['M', 1.00],  // nothing is impossible
  ihechukwu:     ['M', 1.00],  // God's thing
  ihecherem:     ['M', 1.00],  // what I thought of

  // ── EBERE- (mercy / compassion) ──────────────────────────────────────
  ebere:         ['F', 0.90],  // compassion / mercy
  eberechukwu:   ['F', 1.00],  // God's mercy
  eberenma:      ['F', 1.00],  // the mercy is beautiful
  eberehiue:     ['F', 1.00],  // mercy never ends
  eberechi:      ['F', 1.00],  // God's compassion

  // ── ENYI- (friend / elephant) ────────────────────────────────────────
  enyi:          ['M', 0.85],  // friend / elephant
  enyinnaya:     ['M', 1.00],  // elephant of the father
  enyimba:       ['M', 1.00],  // the elephant is great
  enyjoku:       ['M', 1.00],  // the elephant yam harvest

  // ── KAMSI / SOPURU- praise names ─────────────────────────────────────
  sopuruchi:     ['M', 1.00],  // praise God
  sopurueze:     ['M', 1.00],  // praise the king (God)
  tobenna:       ['M', 1.00],  // praise the father
  tobechi:       ['M', 0.90],  // praise God (short form)
  otitochukwu:   ['M', 1.00],  // praise God
  otito:         ['M', 0.85],  // praise

  // ── UCHECHI / UCHE- (wisdom) ─────────────────────────────────────────
  uchechi:       ['M', 1.00],  // God's wisdom
  uchechukwu:    ['M', 1.00],  // God's thought (variant)
  uchemma:       ['M', 1.00],  // good wisdom
  ucheike:       ['M', 1.00],  // wisdom and strength
  uchendu:       ['M', 1.00],  // wisdom of life
  ucheze:        ['M', 1.00],  // wisdom of the king

  // ── Misc Igbo names ───────────────────────────────────────────────────
  adachukwu:     ['F', 1.00],  // daughter of God
  adachioma:     ['F', 1.00],  // God's good daughter
  adauche:       ['F', 1.00],  // daughter of wisdom
  akunna:        ['F', 1.00],  // father's wealth
  akunnaya:      ['F', 1.00],  // my father's wealth
  akuoma:        ['F', 1.00],  // good wealth
  akwaeke:       ['M', 1.00],  // born on Eke market day
  chi:           ['U', 0.80],  // personal deity (standalone)
  chibueze:      ['M', 1.00],  // God is king (variant of chukwueze)
  chibundo:      ['F', 1.00],  // God is my refuge
  chidera:       ['M', 1.00],  // already present
  chidindu:      ['F', 1.00],  // already present
  chibuzor:      ['M', 1.00],  // God is the way
  chigozie:      ['U', 0.90],  // already present
  chijindu:      ['M', 1.00],  // already present
  chinagorom:    ['M', 1.00],  // God sends me
  echefulam:     ['M', 1.00],  // do not forget me
  echezonachukwu:['M', 1.00],  // do not forget God
  ejima:         ['U', 0.85],  // twins (name for twin)
  emenike:       ['M', 1.00],  // the brave one has come
  ezinma:        ['F', 1.00],  // good king (female form)
  ezinne:        ['F', 1.00],  // already present
  ezinwa:        ['U', 0.90],  // good child
  ibejoku:       ['M', 1.00],  // born with the harvest
  ijele:         ['M', 0.85],  // the famous masquerade
  ijoma:         ['F', 1.00],  // beautiful masquerade
  ikanna:        ['M', 1.00],  // father's strength
  isiagu:        ['M', 1.00],  // head of the lion
  izunna:        ['M', 1.00],  // already present
  jachi:         ['M', 0.85],  // traditional Igbo name
  jidechukwu:    ['M', 1.00],  // hold on to God
  jidemma:       ['M', 1.00],  // hold on to the good
  jikem:         ['M', 1.00],  // hold on to my strength
  maazi:         ['M', 0.85],  // adult male / Mr.
  mmachi:        ['F', 1.00],  // beauty
  mmaduabuchi:   ['M', 1.00],  // people are God's creation
  mmaduabike:    ['M', 1.00],  // people are strength
  mmadueze:      ['M', 1.00],  // the king is a person
  mmesoma:       ['F', 1.00],  // do good
  njideka:       ['F', 1.00],  // hold it until God comes
  njoku:         ['M', 1.00],  // hold the harvest yam
  nkemakonam:    ['M', 1.00],  // let me not lack
  nnedinma:      ['F', 1.00],  // the mother is good
  nneoma:        ['F', 1.00],  // already present
  nnorom:        ['M', 1.00],  // with peace
  obianuju:      ['F', 1.00],  // one who comes in the midst of plenty
  okechukwu:     ['M', 1.00],  // already present
  okeke:         ['M', 0.85],  // born on Eke market day
  okewachi:      ['M', 1.00],  // born with God's opening
  okike:         ['M', 0.85],  // God's creation
  okwubuikem:    ['M', 1.00],  // the word is my strength
  okwudi:        ['M', 1.00],  // the word is there
  okwueze:       ['M', 1.00],  // the king's word
  okwugo:        ['M', 1.00],  // the eagle's word
  okwuike:       ['M', 1.00],  // the word of strength
  okwuma:        ['M', 1.00],  // the word is good
  okwunna:       ['M', 1.00],  // father's word
  okwuoma:       ['F', 1.00],  // good word
  oma:           ['F', 0.80],  // good (standalone)
  omalicha:      ['F', 1.00],  // the beautiful one
  onuora:        ['M', 1.00],  // mouth of the community
  onuoha:        ['M', 1.00],  // mouth of the community (variant)
  orabuchi:      ['M', 1.00],  // peace from God
  oraeze:        ['M', 1.00],  // the people's king
  orakwe:        ['M', 1.00],  // the people believe
  oranma:        ['F', 1.00],  // good peace
  orimachi:      ['F', 1.00],  // wait for God
  osondu:        ['M', 1.00],  // run for life
  osuji:         ['M', 1.00],  // the harvest yam
  ozichukwu:     ['M', 1.00],  // God's way / God's voice
  ozoemena:      ['M', 1.00],  // may it not happen again
  ozuruonye:     ['M', 1.00],  // sufficient for everyone
  uchechukwu:    ['M', 1.00],  // God's thought (variant)
  ugomma:        ['F', 1.00],  // already present
  ujunwa:        ['F', 1.00],  // beauty's child
  ukachi:        ['M', 1.00],  // God's own is greater
  ukamaka:       ['F', 1.00],  // God's share is beautiful
  ukaoma:        ['F', 1.00],  // good share
  ukenna:        ['M', 1.00],  // father's share
  ulochukwu:     ['M', 1.00],  // God's home
  ulonnaya:      ['F', 1.00],  // father's home
  ulonwa:        ['F', 1.00],  // child's home
  unoaku:        ['F', 1.00],  // home of wealth
  unonyele:      ['F', 1.00],  // at home is honor
};

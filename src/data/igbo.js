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
};

/**
 * Hausa & Fulani name dictionary
 * Format: name → [gender, confidence]
 *
 * Hausa-Fulani are Nigeria's largest ethnic group (~29%), concentrated in
 * Northern Nigeria (Kano, Kaduna, Sokoto, Katsina, Zamfara, Bauchi, Jigawa,
 * Kebbi, Niger, Adamawa, Gombe, Yobe, Borno).
 *
 * Most names are Arabic-origin due to Islam. Traditional Hausa names persist
 * as well. Fulani names share many Hausa names plus distinct pastoral names.
 */

'use strict';

module.exports = {
  // ── ARABIC-ORIGIN (Islamic) — MALE ─────────────────────────────────────
  abubakar:      ['M', 1.00],  // first Muslim Caliph (Abu Bakr)
  abdullahi:     ['M', 1.00],  // servant of God
  abdulrahman:   ['M', 1.00],  // servant of the Most Merciful
  abdulkadir:    ['M', 1.00],  // servant of the Capable
  abdulmalik:    ['M', 1.00],  // servant of the King
  abdulsalam:    ['M', 1.00],  // servant of Peace
  abdulaziz:     ['M', 0.90],  // servant of the Almighty (pan-Muslim)
  adamu:         ['M', 1.00],  // Adam
  ahmad:         ['M', 0.85],  // more praiseworthy (pan-Muslim)
  ahmed:         ['M', 0.85],  // variant of Ahmad
  aliyu:         ['M', 1.00],  // Ali (Hausa form)
  aminu:         ['M', 1.00],  // trustworthy / faithful
  auwalu:        ['M', 1.00],  // firstborn (Hausa specific)
  bashir:        ['M', 0.85],  // bearer of good tidings
  bello:         ['M', 1.00],  // beautiful / good (distinctive Hausa)
  dahiru:        ['M', 1.00],  // (Hausa specific — Zahir variant)
  danladi:       ['M', 1.00],  // born on Sunday in Hausa tradition
  dauda:         ['M', 1.00],  // David (Hausa form: Daud)
  faruk:         ['M', 0.85],  // one who distinguishes truth from falsehood
  garba:         ['M', 1.00],  // traditional Hausa name (also means "brave")
  habib:         ['M', 0.80],  // beloved (pan-Muslim, lower specificity)
  hamza:         ['M', 0.85],  // lion (Prophet's uncle)
  haruna:        ['M', 1.00],  // Aaron (Hausa form)
  hassan:        ['M', 0.70],  // good / handsome (shared Yoruba Muslim)
  hussaini:      ['M', 1.00],  // Hussein (Hausa form)
  ibrahim:       ['M', 0.85],  // Abraham (pan-Muslim)
  idris:         ['M', 0.80],  // Enoch / Idris (pan-Muslim)
  ismail:        ['M', 0.85],  // Ishmael (pan-Muslim)
  issa:          ['M', 0.80],  // Jesus in Islamic tradition
  jafaru:        ['M', 1.00],  // Jafar (Hausa form)
  jamilu:        ['M', 1.00],  // beautiful (Hausa-specific spelling)
  jibril:        ['M', 0.85],  // Gabriel (pan-Muslim)
  kabiru:        ['M', 1.00],  // great / elder
  lawal:         ['M', 1.00],  // Lawal (distinctive Hausa surname/firstname)
  lawan:         ['M', 0.95],  // (Hausa/Kanuri specific)
  magaji:        ['M', 1.00],  // heir / successor (Hausa title)
  muhammad:      ['M', 0.80],  // Prophet (pan-Muslim; common in many groups)
  muhammadu:     ['M', 1.00],  // Hausa form of Muhammad
  musa:          ['M', 0.85],  // Moses (pan-Muslim)
  nasiru:        ['M', 1.00],  // helper / victor
  nuhu:          ['M', 1.00],  // Noah (Hausa form)
  rabiu:         ['M', 1.00],  // born in Rabi'i month (Islamic calendar)
  sani:          ['M', 1.00],  // second / another (Hausa specific)
  samaila:       ['M', 1.00],  // Samuel (Hausa form)
  shehu:         ['M', 1.00],  // Sheikh (Islamic scholar — Hausa title)
  sule:          ['M', 1.00],  // Solomon (Hausa form)
  sulaiman:      ['M', 0.85],  // Solomon (pan-Muslim)
  tanko:         ['M', 1.00],  // traditional Hausa name
  tijjani:       ['M', 1.00],  // from the Tijaniyya Sufi order
  umar:          ['M', 0.85],  // Omar (pan-Muslim)
  usman:         ['M', 1.00],  // Othman (Hausa form — common in North)
  wada:          ['M', 1.00],  // traditional Hausa
  yahaya:        ['M', 1.00],  // Yahya / John (Hausa form)
  yakubu:        ['M', 1.00],  // Jacob (Hausa form)
  yusuf:         ['M', 0.85],  // Joseph (pan-Muslim)
  zakariyya:     ['M', 1.00],  // Zachariah

  // ── HAUSA-SPECIFIC / CALENDAR NAMES — MALE ────────────────────────────
  laraba:        ['F', 1.00],  // born on Wednesday (Hausa: Laraba = Wednesday)
  talatu:        ['F', 1.00],  // born on Tuesday (Hausa: Talata = Tuesday)
  asabar:        ['M', 1.00],  // born on Saturday (rare)
  danlami:       ['M', 1.00],  // (Hausa)
  danmusa:       ['M', 1.00],  // Musa's son (Hausa patronymic)
  maigari:       ['M', 1.00],  // (Hausa title meaning town head)
  maikudi:       ['M', 1.00],  // owner of money (Hausa)

  // ── ARABIC-ORIGIN (Islamic) — FEMALE ──────────────────────────────────
  aisha:         ['F', 0.85],  // living / prosperous (Prophet's wife)
  amina:         ['F', 0.85],  // trustworthy / faithful (also Yoruba Muslim)
  aminat:        ['F', 0.90],  // Hausa form of Amina
  asma:          ['F', 0.85],  // names / high above (pan-Muslim)
  asabe:         ['F', 1.00],  // traditional Hausa female name
  bilkisu:       ['F', 1.00],  // Queen of Sheba (Hausa specific)
  fanna:         ['F', 0.90],  // (Hausa / Kanuri)
  fatima:        ['F', 0.85],  // daughter of Prophet (pan-Muslim)
  fati:          ['F', 1.00],  // short for Fatima (very Hausa-specific)
  hafsat:        ['F', 1.00],  // wife of Prophet (Hausa form: Hafsa)
  halima:        ['F', 0.85],  // gentle / patient (Prophet's wet nurse)
  hauwa:         ['F', 1.00],  // Eve (VERY Hausa-specific spelling)
  hasiya:        ['F', 1.00],  // traditional Hausa
  hadiza:        ['F', 1.00],  // Khadijah (Hausa form — very specific)
  hindatu:       ['F', 1.00],  // (Hausa specific)
  husaina:       ['F', 1.00],  // feminine of Hussain (Hausa specific)
  khadija:       ['F', 0.85],  // first wife of Prophet (pan-Muslim)
  kulu:          ['F', 1.00],  // traditional Hausa
  maimuna:       ['F', 1.00],  // blessed (Hausa form)
  maryam:        ['F', 0.80],  // Mary (pan-Muslim)
  nana:          ['F', 0.75],  // grandmother / dear (pan-African)
  ramatu:        ['F', 1.00],  // Ramatu (Hausa specific)
  rakiya:        ['F', 1.00],  // Ruqayyah (Hausa form)
  rabi:          ['F', 1.00],  // spring (Hausa)
  rabia:         ['F', 0.90],  // spring / fourth
  safiya:        ['F', 0.85],  // pure / untroubled (pan-Muslim)
  umma:          ['F', 1.00],  // (Hausa specific; Umm = mother)
  yagana:        ['F', 1.00],  // unique (Hausa specific)
  yasmin:        ['F', 0.75],  // jasmine (pan-Muslim / pan-Arabic)
  zainab:        ['F', 0.85],  // daughter of Prophet (pan-Muslim)
  zarau:         ['F', 1.00],  // (Hausa specific)
  zuwaira:       ['F', 1.00],  // (Hausa specific — small flower)

  // ── FULANI-SPECIFIC NAMES ──────────────────────────────────────────────
  ardo:          ['M', 1.00],  // Fulani clan/lineage leader title
  atiku:         ['M', 1.00],  // Fulani name (also means "the brave one")
  buari:         ['M', 1.00],  // Fulani form of Abu-Bakr
  danjuma:       ['M', 1.00],  // Fulani / Hausa (born on Friday — Jumma)
  hamisu:        ['M', 1.00],  // Fulani form of Hamis (Thursday-born)
  modi:          ['M', 1.00],  // Fulani name
  shagari:       ['M', 1.00],  // Fulani (Shehu Shagari was a Fulani leader)
  tukur:         ['M', 1.00],  // Fulani name
  zuru:          ['M', 0.90],  // Fulani / place name

  // ── More Arabic-origin Islamic male names ─────────────────────────────
  abdulazeez:    ['M', 1.00],  // servant of the Almighty
  abdulbasit:    ['M', 1.00],  // servant of the Expander
  abdulfattah:   ['M', 1.00],  // servant of the Opener
  abdulghafar:   ['M', 1.00],  // servant of the Forgiver
  abdulhadi:     ['M', 1.00],  // servant of the Guide
  abdulhafiz:    ['M', 1.00],  // servant of the Preserver
  abdulhakim:    ['M', 1.00],  // servant of the Wise
  abdulhamid:    ['M', 1.00],  // servant of the Praiseworthy
  abduljalil:    ['M', 1.00],  // servant of the Majestic
  abdulkabir:    ['M', 1.00],  // servant of the Great
  abdulkareem:   ['M', 1.00],  // servant of the Generous
  abdullatif:    ['M', 1.00],  // servant of the Subtle
  abdulmajid:    ['M', 1.00],  // servant of the Glorious
  abdulmumini:   ['M', 1.00],  // servant of the Faithful
  abdulmumin:    ['M', 1.00],  // servant of the Faithful (variant)
  abdulqadir:    ['M', 1.00],  // servant of the Powerful
  abdurrahim:    ['M', 1.00],  // servant of the Most Merciful
  abdurrashid:   ['M', 1.00],  // servant of the Rightly Guided
  abdussalam:    ['M', 1.00],  // servant of Peace (variant)
  abulmutalib:   ['M', 1.00],  // Hausa form of Abu Talib
  adnan:         ['M', 0.85],  // name of Ishmael's descendant
  aiman:         ['M', 0.85],  // blessed / fortunate
  akilu:         ['M', 1.00],  // Hausa form of Aqil (intelligent)
  aliyu:         ['M', 1.00],  // already present
  alkali:        ['M', 1.00],  // judge / qadi (Hausa title)
  amadu:         ['M', 1.00],  // Hausa/Fulani form of Ahmad
  ameer:         ['M', 0.85],  // prince / commander
  amin:          ['M', 0.85],  // trustworthy (variant of Aminu)
  aruna:         ['M', 1.00],  // Hausa form of Arun
  auwal:         ['M', 1.00],  // variant of Auwalu (first)
  ayuba:         ['M', 1.00],  // Job (Hausa form of Ayyub)
  azare:         ['M', 1.00],  // Hausa traditional name
  balarabe:      ['M', 1.00],  // the Arab / son of an Arab
  bashiru:       ['M', 1.00],  // variant of Bashir
  bilal:         ['M', 0.85],  // the first muezzin of Islam
  buhari:        ['M', 1.00],  // from al-Bukhari (Hausa form)
  danasabe:      ['M', 1.00],  // son of Asabe
  danazumi:      ['M', 1.00],  // Hausa traditional name
  danhausa:      ['M', 1.00],  // son of Hausa
  daniya:        ['M', 1.00],  // Hausa traditional name
  dankabo:       ['M', 1.00],  // from Kabo
  dankadai:      ['M', 1.00],  // Hausa place-origin name
  dankama:       ['M', 1.00],  // Hausa traditional name
  danmadami:     ['M', 1.00],  // Hausa traditional name
  danrimi:       ['M', 1.00],  // Hausa name
  dansanda:      ['M', 1.00],  // Hausa name
  dawuda:        ['M', 1.00],  // Hausa form of Dawud (David)
  dogo:          ['M', 0.85],  // tall one (Hausa epithet used as name)
  fagaci:        ['M', 1.00],  // Hausa title used as name
  farouk:        ['M', 0.85],  // variant of Faruk
  fawaz:         ['M', 0.85],  // successful
  fikiru:        ['M', 1.00],  // think / wisdom (Hausa)
  galadima:      ['M', 1.00],  // Hausa title (crown prince)
  gali:          ['M', 0.90],  // Kanuri/Hausa name
  gambo:         ['M', 1.00],  // born after twins (Hausa)
  gubio:         ['M', 1.00],  // Hausa/Kanuri place-origin name
  guda:          ['M', 0.90],  // one (Hausa)
  hadiru:        ['M', 1.00],  // Hausa form of Qadir
  hamid:         ['M', 0.85],  // praised
  hamzah:        ['M', 0.85],  // variant of Hamza
  husaini:       ['M', 1.00],  // variant of Hussaini
  imam:          ['M', 0.80],  // religious leader (used as name)
  isa:           ['M', 0.85],  // variant of Issa
  ishaq:         ['M', 0.85],  // Isaac (pan-Muslim)
  isyaku:        ['M', 1.00],  // Hausa form of Ishaq
  jafar:         ['M', 0.85],  // variant of Jafaru
  jaji:          ['M', 1.00],  // Hausa traditional name
  jalilu:        ['M', 1.00],  // Hausa form of Jalil (majestic)
  jarma:         ['M', 1.00],  // Hausa traditional name
  kafinga:       ['M', 1.00],  // Hausa name
  kailani:       ['M', 1.00],  // from al-Kaylani (Sufi lineage)
  kaka:          ['M', 0.85],  // Hausa traditional
  karaye:        ['M', 1.00],  // Hausa place-origin name
  khalid:        ['M', 0.85],  // eternal / sword of God
  kiru:          ['M', 1.00],  // Hausa place-origin name
  kukah:         ['M', 1.00],  // Hausa/Kaduna name
  ladan:         ['M', 1.00],  // born during call to prayer
  lalu:          ['M', 1.00],  // Hausa traditional name
  lamido:        ['M', 1.00],  // Fulani/Hausa title (emir)
  liman:         ['M', 1.00],  // Hausa: the imam / religious leader
  lugman:        ['M', 0.85],  // Luqman (the wise one in Quran)
  mahe:          ['M', 1.00],  // Hausa traditional name
  mahmud:        ['M', 0.85],  // praised (variant of Muhammad)
  makama:        ['M', 1.00],  // Hausa title used as name
  malami:        ['M', 1.00],  // Hausa: Islamic scholar / teacher
  mallam:        ['M', 0.85],  // Hausa: teacher / learned man
  mamman:        ['M', 1.00],  // Hausa form of Muhammad
  mansur:        ['M', 0.85],  // victorious
  mante:         ['M', 1.00],  // Hausa traditional name
  maru:          ['M', 1.00],  // Hausa place-origin name
  maudi:         ['M', 1.00],  // Hausa form of Mawdudi
  miriam:        ['F', 0.85],  // variant of Maryam (pan-Muslim)
  misbahu:       ['M', 1.00],  // Hausa form of Misbah (lamp)
  mufutau:       ['M', 1.00],  // Hausa form of Muftat
  mukhtar:       ['M', 0.85],  // chosen / elected
  munawwar:      ['M', 0.90],  // enlightened
  murad:         ['M', 0.85],  // desired / wanted
  murtala:       ['M', 1.00],  // Hausa form of Murtada (the approved)
  mustapha:      ['M', 0.85],  // chosen / elected
  mutawalli:     ['M', 1.00],  // guardian / caretaker
  nafi:          ['M', 0.90],  // beneficial
  nafisat:       ['F', 1.00],  // precious gem (Hausa female form)
  najib:         ['M', 0.85],  // noble / eminent
  namadi:        ['M', 1.00],  // Hausa/Fulani form of Nnamdi
  nasiru:        ['M', 1.00],  // already present
  nura:          ['M', 0.90],  // light (Hausa male form)
  nuradeen:      ['M', 1.00],  // light of the faith
  nuruddeen:     ['M', 1.00],  // variant of Nuradeen
  rilwanu:       ['M', 1.00],  // Hausa form of Ridwan (contentment)
  saadu:         ['M', 1.00],  // Hausa form of Sa'd (happiness)
  saadu:         ['M', 1.00],  // happy / fortunate
  sadisu:        ['M', 1.00],  // sixth (Hausa)
  sagir:         ['M', 1.00],  // the young one
  samaila:       ['M', 1.00],  // already present
  sambo:         ['M', 1.00],  // Fulani/Hausa: second son
  sanda:         ['M', 1.00],  // Hausa traditional
  saniratu:      ['F', 1.00],  // Hausa form of Sanira
  sarki:         ['M', 0.90],  // chief / king (Hausa title used as name)
  saulawa:       ['M', 1.00],  // Hausa traditional
  shaibu:        ['M', 1.00],  // Hausa form of Shu'ayb (Jethro)
  shafiu:        ['M', 1.00],  // Hausa form of Shafi (intercessor)
  shuaibu:       ['M', 1.00],  // variant of Shaibu
  sidi:          ['M', 0.85],  // master / lord (Arabic origin)
  sirajo:        ['M', 1.00],  // Hausa form of Siraj (lamp)
  sule:          ['M', 1.00],  // already present
  tahir:         ['M', 0.85],  // pure / clean
  tahiru:        ['M', 1.00],  // Hausa form of Tahir
  tanimu:        ['M', 1.00],  // Hausa form of Tanim
  tijani:        ['M', 1.00],  // already present — skip
  tsafi:         ['M', 1.00],  // Hausa traditional name
  tukur:         ['M', 1.00],  // already present
  umar:          ['M', 0.85],  // already present
  usaini:        ['M', 1.00],  // Hausa form of Husayn
  usama:         ['M', 0.85],  // lion (Osama in Arabic)
  wakili:        ['M', 1.00],  // Hausa: deputy / agent (used as name)
  wali:          ['M', 0.85],  // guardian / holy man
  waziri:        ['M', 1.00],  // already in kanuri — but also Hausa
  yahya:         ['M', 0.85],  // John (Yahya in Arabic)
  yunusa:        ['M', 1.00],  // Hausa form of Yunus (Jonah)
  yusufari:      ['M', 1.00],  // Joseph and companion
  zaharaddeen:   ['M', 1.00],  // flower of the faith
  zaidu:         ['M', 1.00],  // Hausa form of Zayd (increase)
  zubair:        ['M', 0.85],  // sharp / strong
  zubairu:       ['M', 1.00],  // Hausa form of Zubayr
  zulkifli:      ['M', 0.85],  // Hausa form of Dhul-Kifl (Ezekiel)

  // ── More Hausa / Calendar female names ────────────────────────────────
  abalata:       ['F', 1.00],  // Hausa female name
  abinda:        ['F', 1.00],  // Hausa female name
  abyatou:       ['F', 1.00],  // Hausa/Fulani female name
  adama:         ['F', 1.00],  // Hausa female form of Adam
  adda:          ['F', 0.90],  // elder sister (Hausa)
  addatu:        ['F', 1.00],  // Hausa traditional female
  aisha:         ['F', 0.85],  // already present
  alawiyya:      ['F', 1.00],  // of the family of Ali
  alkairat:      ['F', 1.00],  // the good one
  assiatu:       ['F', 1.00],  // Hausa form of Asiya (Pharaoh's wife who believed)
  atarike:       ['F', 1.00],  // Hausa traditional female
  atikatu:       ['F', 1.00],  // Hausa female form of Atiq
  aysha:         ['F', 0.90],  // variant of Aisha
  aziza:         ['F', 0.85],  // dear / cherished
  babba:         ['F', 0.85],  // the big / the great one (Hausa)
  baffa:         ['F', 1.00],  // Hausa traditional female
  balaraba:      ['F', 1.00],  // born on Wednesday (Hausa: Laraba)
  baraka:        ['F', 0.85],  // blessing
  batulu:        ['F', 1.00],  // Hausa form of Batul (the pure virgin)
  bintu:         ['F', 0.90],  // daughter of (Hausa/Fulani prefix)
  bintou:        ['F', 0.90],  // variant of Bintu
  fadimatu:      ['F', 1.00],  // Hausa form of Fatimah
  fanna:         ['F', 0.90],  // already present
  farida:        ['F', 0.85],  // unique / precious
  fasihat:       ['F', 1.00],  // eloquent
  fatiha:        ['F', 0.90],  // the opener (first chapter of Quran)
  fauzat:        ['F', 1.00],  // Hausa form of Fauziyya
  fauziyya:      ['F', 1.00],  // successful / victorious
  fiddausi:      ['F', 1.00],  // paradise
  gambo:         ['F', 0.85],  // born after twins (can be female)
  ginuwa:        ['F', 1.00],  // Hausa traditional female
  gudun:         ['F', 1.00],  // Hausa traditional female
  hafizu:        ['F', 1.00],  // the preserver (female form)
  hafsatu:       ['F', 1.00],  // Hausa form of Hafsah
  hajara:        ['F', 1.00],  // Hausa form of Hajar (Hagar)
  hajiya:        ['F', 0.85],  // woman who has performed Hajj
  hakimatu:      ['F', 1.00],  // the wise woman
  haliru:        ['F', 1.00],  // Hausa female form of Halir
  hamidat:       ['F', 1.00],  // praiseworthy
  hanatu:        ['F', 1.00],  // Hausa form of Hana (bliss)
  hasanatu:      ['F', 1.00],  // Hausa form of Hasanat (good deeds)
  hauwa:         ['F', 1.00],  // already present
  hawa:          ['F', 0.90],  // variant of Hauwa (Eve)
  iman:          ['F', 0.85],  // faith
  isha:          ['F', 0.90],  // Hausa form of Isha
  jemilu:        ['F', 1.00],  // beautiful (Hausa female form)
  jimmai:        ['F', 1.00],  // Hausa traditional female
  jumai:         ['F', 1.00],  // born on Friday (Hausa: Juma'a)
  jummai:        ['F', 1.00],  // variant of Jumai
  kabiru:        ['F', 1.00],  // Hausa female form of Kabir
  kaka:          ['F', 0.80],  // grandmother (Hausa)
  kamila:        ['F', 0.85],  // perfect
  karo:          ['F', 1.00],  // Hausa traditional female
  khadijatu:     ['F', 1.00],  // Hausa form of Khadijah
  khairat:       ['F', 1.00],  // charitable deeds / good things
  ladi:          ['F', 1.00],  // born on Sunday (Hausa: Lahadi)
  laila:         ['F', 0.85],  // night / dark beauty
  lami:          ['F', 1.00],  // Hausa traditional female
  laru:          ['F', 1.00],  // Hausa traditional female
  laure:         ['F', 1.00],  // Hausa traditional female
  lawan:         ['M', 0.95],  // already present
  lubaba:        ['F', 1.00],  // core / essence
  ludia:         ['F', 0.90],  // Hausa Christian female
  lumatu:        ['F', 1.00],  // Hausa traditional female
  maka:          ['F', 1.00],  // Hausa traditional female
  makwance:      ['F', 1.00],  // Hausa traditional female
  malama:        ['F', 0.85],  // Hausa: female teacher
  mamuna:        ['F', 1.00],  // Hausa form of Maimuna
  mani:          ['F', 0.90],  // Hausa traditional female
  mariya:        ['F', 0.90],  // Hausa form of Mary
  maryama:       ['F', 1.00],  // Hausa form of Maryam (variant)
  marufa:        ['F', 1.00],  // well-known / famous
  mastura:       ['F', 1.00],  // modest / veiled
  matta:         ['F', 1.00],  // Hausa traditional
  mayamu:        ['F', 1.00],  // Hausa traditional female
  mimmuna:       ['F', 1.00],  // Hausa form of Maimuna
  minata:        ['F', 1.00],  // Hausa/Fulani form of Minah
  miriam:        ['F', 0.85],  // variant of Maryam
  muhibbat:      ['F', 1.00],  // beloved
  munirat:       ['F', 1.00],  // illuminating
  musa:          ['M', 0.85],  // already present
  mwangala:      ['F', 1.00],  // Hausa/Plateau female name
  nafisa:        ['F', 1.00],  // precious / pure
  nafisat:       ['F', 1.00],  // variant of Nafisa
  naja:          ['F', 0.85],  // saved / successful
  najmatu:       ['F', 1.00],  // star
  namdas:        ['M', 1.00],  // Hausa/Plateau male name
  nasira:        ['F', 1.00],  // helper / victorious
  nasirat:       ['F', 1.00],  // Hausa form of Nasira
  niimat:        ['F', 1.00],  // God's blessing
  nufasat:       ['F', 1.00],  // Hausa traditional female
  nuratu:        ['F', 1.00],  // light (female form)
  nuruddeen:     ['M', 1.00],  // light of the faith
  rabiyya:       ['F', 1.00],  // spring / fourth (variant)
  rabyat:        ['F', 1.00],  // Hausa form of Rabi'a
  rahama:        ['F', 1.00],  // mercy / compassion
  rahmatou:      ['F', 1.00],  // Hausa form of Rahmat (mercy)
  ramadanu:      ['M', 1.00],  // born during Ramadan (Hausa male)
  ramsatu:       ['F', 1.00],  // Hausa form of Ramsatu
  ramlatu:       ['F', 1.00],  // Hausa form of Ramlah
  ranatu:        ['F', 1.00],  // variant of Ramatu
  rashida:       ['F', 0.85],  // rightly guided (female)
  rauda:         ['F', 1.00],  // garden / paradise
  rawdatu:       ['F', 1.00],  // garden / meadow
  risikat:       ['F', 1.00],  // Hausa form of Rizqat (sustenance)
  rufai:         ['M', 1.00],  // from the Rifaiyya Sufi order
  rugayya:       ['F', 1.00],  // Hausa form of Ruqayyah
  ruqayyat:      ['F', 1.00],  // variant of Rugayya
  saadiya:       ['F', 1.00],  // happiness
  sadiya:        ['F', 1.00],  // Hausa form of Sadiyya
  safia:         ['F', 0.85],  // variant of Safiya
  sakina:        ['F', 1.00],  // tranquility / serenity
  salma:         ['F', 0.85],  // peaceful
  salwat:        ['F', 1.00],  // Hausa form of Salwa (solace)
  samaira:       ['F', 0.85],  // enchanting / entertaining
  sanata:        ['F', 1.00],  // Hausa traditional female
  sani:          ['M', 1.00],  // already present
  saudatu:       ['F', 1.00],  // Hausa form of Sawda (tall, dark)
  saudata:       ['F', 1.00],  // variant of Saudatu
  shamsuddeen:   ['M', 1.00],  // sun of the faith
  sharifa:       ['F', 0.85],  // noble / honorable (female)
  shukurah:      ['F', 1.00],  // thankful
  siaduhu:       ['M', 1.00],  // Hausa traditional male
  siddiku:       ['M', 1.00],  // the truthful one (Hausa form of Siddiq)
  sinat:         ['F', 1.00],  // Hausa traditional female
  sufiyanu:      ['M', 1.00],  // Hausa form of Sufyan
  sulaima:       ['F', 1.00],  // female form of Sulayman
  sulaimat:      ['F', 1.00],  // Hausa form of Sulaima
  sunusi:        ['M', 1.00],  // Hausa form of Sanus
  taatu:         ['F', 1.00],  // Hausa traditional female
  taawu:         ['M', 1.00],  // Hausa form of Taawun
  tahirat:       ['F', 1.00],  // pure / clean (female)
  tambu:         ['F', 1.00],  // Hausa traditional female
  tasiu:         ['M', 1.00],  // Hausa traditional male
  taslim:        ['F', 0.90],  // submission / peace
  taslimat:      ['F', 1.00],  // Hausa form of Taslim
  tukura:        ['F', 1.00],  // Fulani female name
  ubaida:        ['F', 1.00],  // the little servant
  ubaidatu:      ['F', 1.00],  // Hausa form of Ubaida
  umaru:         ['M', 1.00],  // Hausa form of Umar
  ummi:          ['F', 0.90],  // my mother (used as name)
  ummukaltum:    ['F', 1.00],  // mother of Kulthum (Prophet's daughter)
  ummusalmatu:   ['F', 1.00],  // Hausa form of Umm Salama
  uwais:         ['M', 0.85],  // Hausa form of Uwais al-Qarani
  uwaisu:        ['M', 1.00],  // Hausa form of Uwais
  wakilat:       ['F', 1.00],  // female guardian / caretaker
  waliyat:       ['F', 1.00],  // female guardian / holy woman
  yau:           ['M', 1.00],  // Hausa: the ninth child
  yagana:        ['F', 1.00],  // already present
  yaratu:        ['F', 1.00],  // Hausa traditional female
  yarita:        ['F', 1.00],  // Hausa traditional female
  yarizatu:      ['F', 1.00],  // Hausa traditional female
  yarma:         ['F', 1.00],  // daughter-in-law (Hausa)
  yawale:        ['F', 1.00],  // Hausa traditional female
  zahra:         ['F', 0.85],  // the shining one / flower
  zahrat:        ['F', 1.00],  // Hausa form of Zahra
  zaidu:         ['M', 1.00],  // Hausa form of Zayd
  zakariya:      ['M', 0.85],  // variant of Zakariyya
  zakiyya:       ['F', 1.00],  // pure / intelligent
  zara:          ['F', 0.85],  // already in kanuri
  zarah:         ['F', 0.85],  // variant of Zara
  zaria:         ['F', 0.90],  // from Zaria (Hausa city)
  zariya:        ['F', 0.90],  // Hausa form of Zariyya
  zaynab:        ['F', 0.85],  // variant of Zainab
  zubaidatu:     ['F', 1.00],  // Hausa form of Zubaida
  zuwaitu:       ['F', 1.00],  // variant of Zuwaira

  // ── More Fulani names ─────────────────────────────────────────────────
  adama:         ['M', 0.90],  // Fulani form of Adam
  alfa:          ['M', 1.00],  // Fulani: learned Islamic scholar
  alhassan:      ['M', 1.00],  // Fulani/Hausa form of Al-Hassan
  allahe:        ['M', 1.00],  // Fulani: belonging to God
  bah:           ['M', 0.85],  // Fulani clan/family name
  balde:         ['M', 1.00],  // Fulani family name
  baldeh:        ['M', 1.00],  // variant of Balde
  bello:         ['M', 1.00],  // already present
  bokar:         ['M', 1.00],  // Fulani form of Abu Bakr
  diallo:        ['M', 0.85],  // Fulani family name (also West African)
  dicko:         ['M', 1.00],  // Fulani family name
  domayos:       ['M', 1.00],  // Fulani traditional name
  garba:         ['M', 1.00],  // already present
  haggu:         ['M', 1.00],  // Fulani traditional name
  hamidou:       ['M', 1.00],  // Fulani form of Hamid
  idrissa:       ['M', 0.90],  // Fulani form of Idris
  jallo:         ['M', 1.00],  // Fulani family name / clan
  jibbo:         ['M', 1.00],  // Fulani form of Jibril
  kaka:          ['M', 0.85],  // Fulani traditional (also Kanuri)
  koroye:        ['M', 1.00],  // Fulani traditional
  lawal:         ['M', 0.90],  // Fulani/Hausa traditional
  maiduguri:     ['M', 0.85],  // from Maiduguri (place name used)
  mamadou:       ['M', 1.00],  // Fulani form of Muhammad
  mamar:         ['M', 1.00],  // Fulani form of Umar
  minkaila:      ['M', 1.00],  // Fulani traditional
  muhammadu:     ['M', 1.00],  // already present
  mustaphau:     ['M', 1.00],  // Fulani form of Mustapha
  oumar:         ['M', 1.00],  // Fulani form of Umar
  oumarou:       ['M', 1.00],  // Fulani form of Umar (variant)
  samburu:       ['M', 1.00],  // Fulani traditional
  saybu:         ['M', 1.00],  // Fulani form of Sha'ayb
  sori:          ['M', 1.00],  // Fulani traditional
  souley:        ['M', 1.00],  // Fulani form of Sulayman
  talba:         ['M', 1.00],  // Fulani form of Talha
  thierno:       ['M', 1.00],  // Fulani: the learned one
  wame:          ['M', 1.00],  // Fulani traditional
  yaya:          ['M', 0.90],  // Fulani/Hausa form of Yahya
};

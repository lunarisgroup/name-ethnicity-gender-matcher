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
};

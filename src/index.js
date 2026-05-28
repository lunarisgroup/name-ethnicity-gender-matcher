/**
 * nigerian-names-predictor
 *
 * Fast, accurate Nigerian name matcher.
 * Returns gender, ethnicity, and confidence for any Nigerian name.
 *
 * Synchronous API  (Tiers 1–3, zero latency):
 *   match · matchBatch · analyzeFullName · suggest · dictionary
 *
 * Asynchronous API (Tiers 1–4, optional external API fallback):
 *   matchAsync · matchBatchAsync · analyzeFullNameAsync
 *   (requires calling configureTier4() once at startup)
 *
 * @module nigerian-names-predictor
 */

'use strict';

const {
  match,
  matchBatch,
  analyzeFullName,
  suggest,
  matchAsync,
  matchBatchAsync,
  analyzeFullNameAsync,
  configureTier4,
} = require('./matcher');

const { MASTER } = require('./data/index');

/**
 * @typedef {Object} MatchResult
 * @property {string}               name         — original input
 * @property {string}               normalized   — lowercase, no diacritics
 * @property {'M'|'F'|'U'|null}     gender       — M=Male, F=Female, U=Unisex
 * @property {string|null}          ethnicity    — e.g. 'Yoruba', 'Igbo', 'Hausa'
 * @property {number}               confidence   — 0.0–1.0
 * @property {string}               method       — 'dictionary'|'pattern'|'ngram'|'api:genderize'|'api:namsor'|'unknown'
 * @property {Array}                alternatives — other possible ethnicities/genders
 */

/**
 * @typedef {Object} FullNameAnalysis
 * @property {string}            fullName
 * @property {MatchResult[]}     components       — per-token results
 * @property {string|null}       overallEthnicity — aggregated ethnicity
 * @property {'M'|'F'|'U'|null} overallGender
 * @property {number}            confidence
 */

/**
 * @typedef {Object} Tier4Config
 * @property {string|string[]}  [providers='genderize']  — 'genderize' | 'namsor' | both
 * @property {Object}           [genderize]
 * @property {string}           [genderize.countryId='NG']
 * @property {number}           [genderize.timeout=5000]
 * @property {Object}           [namsor]
 * @property {string}           namsor.apiKey             — required when using NamSor
 * @property {number}           [namsor.timeout=5000]
 * @property {boolean}          [cache=true]
 * @property {string}           [cacheFile]               — path for JSON cache persistence
 * @property {boolean}          [triggerOnUnknown=true]   — fire when method === 'unknown'
 * @property {number}           [triggerBelowConfidence=0]— fire when confidence < threshold
 */

module.exports = {
  /**
   * Match a single name token and return gender + ethnicity + confidence.
   *
   * @param {string} name  — first name, last name, or middle name
   * @returns {MatchResult}
   *
   * @example
   * const { match } = require('nigerian-names-predictor');
   * match('Oluwasegun');
   * // → { name: 'Oluwasegun', gender: 'M', ethnicity: 'Yoruba', confidence: 1, method: 'dictionary', ... }
   *
   * match('Chioma');
   * // → { gender: 'F', ethnicity: 'Igbo', confidence: 1, ... }
   */
  match,

  /**
   * Match multiple names at once (more efficient than calling match() in a loop
   * when you have the full array ready).
   *
   * @param {string[]} names
   * @returns {MatchResult[]}
   *
   * @example
   * matchBatch(['Abubakar', 'Chioma', 'Bassey']);
   */
  matchBatch,

  /**
   * Analyze a full name string (first + middle + last).
   * Each component is matched individually; results are aggregated.
   *
   * @param {string} fullName  — e.g. "Adebayo Chukwuemeka Okafor"
   * @returns {FullNameAnalysis}
   *
   * @example
   * analyzeFullName('Alhaji Musa Usman Garba');
   * // → { overallEthnicity: 'Hausa', overallGender: 'M', confidence: 0.97, ... }
   */
  analyzeFullName,

  /**
   * Return top-N closest dictionary entries for a possibly misspelled name.
   *
   * @param {string} name
   * @param {number} [topN=5]
   * @returns {Array<{ name: string, distance: number, entry: object }>}
   *
   * @example
   * suggest('Oluwasegn');
   * // → [{ name: 'oluwasegun', distance: 1, entry: { gender: 'M', ethnicity: 'Yoruba', ... } }]
   */
  suggest,

  /**
   * Direct access to the master name dictionary (read-only Map).
   * Key = normalized name; Value = { gender, ethnicity, confidence }.
   * Useful for bulk lookups without the full MatchResult overhead.
   *
   * @type {Map<string, {gender: string, ethnicity: string, confidence: number}>}
   */
  dictionary: MASTER,

  // ── Asynchronous API (Tiers 1–4) ───────────────────────────────────────

  /**
   * Configure the optional Tier 4 external API fallback.
   * Call once at startup. Pass null to disable.
   *
   * @param {Tier4Config|null} options
   *
   * @example
   * // Genderize.io (free, no key):
   * configureTier4({ providers: ['genderize'] });
   *
   * // NamSor (paid):
   * configureTier4({ providers: ['namsor'], namsor: { apiKey: process.env.NAMSOR_KEY } });
   *
   * // Both with persistent file cache:
   * configureTier4({
   *   providers: ['genderize', 'namsor'],
   *   namsor: { apiKey: process.env.NAMSOR_KEY },
   *   cacheFile: './.cache/tier4.json',
   *   triggerBelowConfidence: 0.40,
   * });
   */
  configureTier4,

  /**
   * Match a single name — async, adds Tier 4 external API when configured.
   * Falls back gracefully to synchronous result if Tier 4 is not configured or fails.
   *
   * @param {string} name
   * @returns {Promise<MatchResult>}
   *
   * @example
   * configureTier4({ providers: ['genderize'] });
   * const result = await matchAsync('Xylvia');
   * // → { gender: 'F', confidence: 0.87, method: 'api:genderize', ... }
   */
  matchAsync,

  /**
   * Match multiple names — async, adds Tier 4 for names that need it.
   * Tier 4 queries run sequentially to respect provider rate limits.
   *
   * @param {string[]} names
   * @returns {Promise<MatchResult[]>}
   *
   * @example
   * const results = await matchBatchAsync(['Oluwasegun', 'Xylpha', 'Nbeke']);
   */
  matchBatchAsync,

  /**
   * Analyze a full name — async, adds Tier 4 per-token.
   *
   * @param {string} fullName
   * @returns {Promise<FullNameAnalysis>}
   *
   * @example
   * const fa = await analyzeFullNameAsync('Musa Xylpha Garba');
   * // → { overallEthnicity: 'Hausa', overallGender: 'M', confidence: ..., components: [...] }
   */
  analyzeFullNameAsync,

  /** Library version */
  version: require('../package.json').version,
};

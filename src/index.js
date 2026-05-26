/**
 * nigerian-names-predictor
 *
 * Fast, accurate Nigerian name matcher.
 * Returns gender, ethnicity, and confidence for any Nigerian name.
 *
 * @module nigerian-names-predictor
 */

'use strict';

const { match, matchBatch, analyzeFullName, suggest } = require('./matcher');
const { MASTER }                                       = require('./data/index');

/**
 * @typedef {Object} MatchResult
 * @property {string}        name         — original input
 * @property {string}        normalized   — lowercase, no diacritics
 * @property {'M'|'F'|'U'|null} gender   — M=Male, F=Female, U=Unisex
 * @property {string|null}   ethnicity    — e.g. 'Yoruba', 'Igbo', 'Hausa'
 * @property {number}        confidence   — 0.0–1.0
 * @property {string}        method       — 'dictionary'|'pattern'|'ngram'|'unknown'
 * @property {Array}         alternatives — other possible ethnicities/genders
 */

/**
 * @typedef {Object} FullNameAnalysis
 * @property {string}        fullName
 * @property {MatchResult[]} components       — per-token results
 * @property {string|null}   overallEthnicity — aggregated ethnicity
 * @property {'M'|'F'|'U'|null} overallGender
 * @property {number}        confidence
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

  /** Library version */
  version: require('../package.json').version,
};

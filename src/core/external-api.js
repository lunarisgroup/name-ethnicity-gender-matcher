/**
 * Tier 4 — External API client
 *
 * Wraps Genderize.io and NamSor as optional async fallbacks for names
 * that local tiers 1–3 cannot resolve (method === 'unknown') or resolve
 * with low confidence.
 *
 * Design goals:
 *   • Zero extra npm dependencies (uses built-in `https` module)
 *   • Node ≥ 14 compatible
 *   • In-memory cache + optional JSON file persistence
 *   • Graceful degradation — any error returns null (never throws to caller)
 *   • Sequential batch queries to respect free-tier rate limits
 */

'use strict';

const https = require('https');
const fs    = require('fs');
const path  = require('path');

/** Maximum confidence we will ever report from an external API result */
const API_CONFIDENCE_CAP = 0.88;

/**
 * @typedef {Object} Tier4ApiResult
 * @property {'M'|'F'|null} gender
 * @property {string|null}  ethnicity   — always null from external APIs
 * @property {number}       confidence  — 0.0–0.88
 * @property {string}       provider    — 'genderize' | 'namsor'
 */

class ExternalApiClient {
  /**
   * @param {import('../index').Tier4Config} options
   */
  constructor(options = {}) {
    const providers = Array.isArray(options.providers)
      ? options.providers
      : [options.providers || 'genderize'];

    this.providers              = providers;
    this.genderizeOpts          = options.genderize || {};
    this.namsorOpts             = options.namsor    || {};
    this.triggerOnUnknown       = options.triggerOnUnknown !== false; // default true
    this.triggerBelowConfidence = options.triggerBelowConfidence || 0;
    this.useCache               = options.cache !== false;            // default true
    this.cacheFile              = options.cacheFile || null;

    /** @type {Map<string, Tier4ApiResult>} */
    this._cache = new Map();

    if (this.useCache && this.cacheFile) {
      this._loadCache();
    }
  }

  // ── Trigger logic ───────────────────────────────────────────────────────

  /**
   * Return true when a local-tier result should trigger a Tier 4 API call.
   *
   * @param {{ method: string, confidence: number }} result
   * @returns {boolean}
   */
  shouldTrigger(result) {
    if (this.triggerOnUnknown && result.method === 'unknown') return true;
    if (this.triggerBelowConfidence > 0 && result.confidence < this.triggerBelowConfidence) return true;
    return false;
  }

  // ── Main query ──────────────────────────────────────────────────────────

  /**
   * Query configured providers in declaration order; return the first
   * successful result.  Failures are swallowed so the caller always gets
   * null on error rather than an exception.
   *
   * @param {string} normalizedName — already lowercased, no diacritics
   * @returns {Promise<Tier4ApiResult|null>}
   */
  async query(normalizedName) {
    // Cache hit
    if (this.useCache && this._cache.has(normalizedName)) {
      return this._cache.get(normalizedName);
    }

    for (const provider of this.providers) {
      try {
        let result = null;
        if (provider === 'genderize') {
          result = await this._queryGenderize(normalizedName, this.genderizeOpts);
        } else if (provider === 'namsor') {
          result = await this._queryNamsor(normalizedName, this.namsorOpts);
        }
        if (result) {
          if (this.useCache) {
            this._cache.set(normalizedName, result);
            if (this.cacheFile) this._saveCache();
          }
          return result;
        }
      } catch (_) {
        // provider failed — try next one
      }
    }

    return null;
  }

  // ── Genderize.io ────────────────────────────────────────────────────────

  async _queryGenderize(name, opts = {}) {
    const countryId = opts.countryId || 'NG';
    const timeout   = opts.timeout   || 5000;
    const url       = `https://api.genderize.io/?name=${encodeURIComponent(name)}&country_id=${countryId}`;

    const body = await this._get(url, {}, timeout);
    const data = JSON.parse(body);

    if (!data.gender) return null;

    const gender     = data.gender === 'male' ? 'M' : data.gender === 'female' ? 'F' : null;
    const confidence = Math.min(data.probability || 0, API_CONFIDENCE_CAP);

    // Reject if uncertain or probability too low
    if (!gender || confidence < 0.50) return null;

    return { gender, ethnicity: null, confidence, provider: 'genderize' };
  }

  // ── NamSor ──────────────────────────────────────────────────────────────

  async _queryNamsor(name, opts = {}) {
    if (!opts.apiKey) throw new Error('NamSor requires options.namsor.apiKey');
    const timeout = opts.timeout || 5000;
    const url     = `https://v2.namsor.com/NamSorAPIv2/api2/json/gender/${encodeURIComponent(name)}`;

    const body = await this._get(url, { 'X-API-KEY': opts.apiKey }, timeout);
    const data = JSON.parse(body);

    const prob = data.probabilityCalibrated;
    if (prob == null) return null;

    // probabilityCalibrated: 0.0 = definitely female, 1.0 = definitely male
    const gender     = prob >= 0.55 ? 'M' : prob <= 0.45 ? 'F' : null;
    const confidence = Math.min(Math.abs(prob - 0.5) * 2, API_CONFIDENCE_CAP);

    if (!gender || confidence < 0.10) return null;

    return { gender, ethnicity: null, confidence, provider: 'namsor' };
  }

  // ── HTTP helper ─────────────────────────────────────────────────────────

  /**
   * Promisified HTTPS GET.  Rejects on non-200, network error, or timeout.
   *
   * @param {string}  url
   * @param {Object}  headers
   * @param {number}  timeout   milliseconds
   * @returns {Promise<string>} raw response body
   */
  _get(url, headers, timeout) {
    return new Promise((resolve, reject) => {
      const req = https.get(url, { headers }, (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        let body = '';
        res.on('data',  (chunk) => { body += chunk; });
        res.on('end',   () => resolve(body));
        res.on('error', reject);
      });
      req.on('error', reject);
      req.setTimeout(timeout, () => { req.destroy(new Error('Request timeout')); });
    });
  }

  // ── Cache persistence ───────────────────────────────────────────────────

  _loadCache() {
    try {
      const raw  = fs.readFileSync(this.cacheFile, 'utf8');
      const data = JSON.parse(raw);
      for (const [k, v] of Object.entries(data)) {
        this._cache.set(k, v);
      }
    } catch (_) {
      // file missing or malformed — start with empty cache
    }
  }

  _saveCache() {
    try {
      const dir = path.dirname(this.cacheFile);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const obj = Object.fromEntries(this._cache);
      fs.writeFileSync(this.cacheFile, JSON.stringify(obj, null, 2), 'utf8');
    } catch (_) {
      // ignore write errors (read-only fs, disk full, permissions…)
    }
  }
}

module.exports = { ExternalApiClient, API_CONFIDENCE_CAP };

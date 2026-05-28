/**
 * Type declarations for nigerian-names-predictor
 */

export type Gender = 'M' | 'F' | 'U';

export type MatchMethod =
  | 'dictionary'
  | 'pattern'
  | 'ngram'
  | 'api:genderize'
  | 'api:namsor'
  | 'unknown';

export type Ethnicity =
  | 'Yoruba'
  | 'Igbo'
  | 'Hausa'
  | 'Fulani'
  | 'Efik'
  | 'Ijaw'
  | 'Edo'
  | 'Urhobo'
  | 'Tiv'
  | 'Kanuri'
  | 'Igala'
  | 'Nupe'
  | 'Berom'
  | 'Idoma'
  | 'Ogoni'
  | 'Tarok'
  | 'Gbagyi'
  | 'Ibibio'
  | 'Jukun'
  | 'Marghi'
  | 'Other'
  | string; // allow future additions

export interface AlternativeMatch {
  ethnicity: Ethnicity;
  gender: Gender;
  confidence: number;
}

export interface MatchResult {
  /** Original input string */
  name: string;
  /** Lowercase, diacritics removed */
  normalized: string;
  /** M = Male, F = Female, U = Unisex, null = unknown */
  gender: Gender | null;
  /** Ethnic group, e.g. 'Yoruba', 'Igbo', 'Hausa' */
  ethnicity: Ethnicity | null;
  /** 0.0 – 1.0. Higher = more certain. */
  confidence: number;
  /** Which tier matched the name */
  method: MatchMethod;
  /** Other plausible matches (for ambiguous/shared names) */
  alternatives: AlternativeMatch[];
}

export interface FullNameAnalysis {
  /** Original full name input */
  fullName: string;
  /** Per-token results (one per name component) */
  components: MatchResult[];
  /** Aggregated ethnicity across all components */
  overallEthnicity: Ethnicity | null;
  /** Aggregated gender across all components */
  overallGender: Gender | null;
  /** Average confidence across matched components */
  confidence: number;
}

export interface SuggestResult {
  /** Normalized dictionary name */
  name: string;
  /** Edit distance from the query */
  distance: number;
  /** Dictionary entry for this name */
  entry: {
    gender: Gender;
    ethnicity: Ethnicity;
    confidence: number;
  };
}

// ── Tier 4 configuration ────────────────────────────────────────────────────

export interface GenderizeOptions {
  /** ISO 3166-1 alpha-2 country code (default: 'NG') */
  countryId?: string;
  /** Request timeout in ms (default: 5000) */
  timeout?: number;
}

export interface NamsorOptions {
  /** NamSor API key — required */
  apiKey: string;
  /** Request timeout in ms (default: 5000) */
  timeout?: number;
}

export interface Tier4Config {
  /** Which providers to use, in priority order (default: ['genderize']) */
  providers?: 'genderize' | 'namsor' | Array<'genderize' | 'namsor'>;
  /** Genderize.io specific options */
  genderize?: GenderizeOptions;
  /** NamSor specific options */
  namsor?: NamsorOptions;
  /** Enable in-memory (and optional file) cache (default: true) */
  cache?: boolean;
  /** Path to JSON file for persistent cache (optional) */
  cacheFile?: string;
  /** Fire Tier 4 when method === 'unknown' (default: true) */
  triggerOnUnknown?: boolean;
  /** Fire Tier 4 when confidence is below this threshold (default: 0 = disabled) */
  triggerBelowConfidence?: number;
}

// ── Synchronous API (Tiers 1–3) ─────────────────────────────────────────────

/**
 * Match a single name (first, last, or middle).
 *
 * @example
 * match('Oluwasegun')
 * // → { gender: 'M', ethnicity: 'Yoruba', confidence: 1, method: 'dictionary', ... }
 */
export function match(name: string): MatchResult;

/**
 * Match multiple names at once.
 *
 * @example
 * matchBatch(['Abubakar', 'Chioma', 'Bassey'])
 */
export function matchBatch(names: string[]): MatchResult[];

/**
 * Analyze a full name string (first + middle + last).
 * Strips titles (Alhaji, Dr, Chief…), matches each token,
 * then aggregates by weighted vote.
 *
 * @example
 * analyzeFullName('Alhaji Musa Usman Garba')
 * // → { overallEthnicity: 'Hausa', overallGender: 'M', confidence: 0.97, ... }
 */
export function analyzeFullName(fullName: string): FullNameAnalysis;

/**
 * Return the closest dictionary entries for a possibly misspelled name.
 *
 * @param name   The (possibly misspelled) input name
 * @param topN   How many suggestions to return (default: 5)
 *
 * @example
 * suggest('Chibike', 3)
 * // → [{ name: 'chibuike', distance: 1, entry: { gender: 'M', ... } }]
 */
export function suggest(name: string, topN?: number): SuggestResult[];

/**
 * Direct read-only access to the master dictionary Map.
 * Key = normalized name (lowercase). O(1) lookup.
 */
export const dictionary: ReadonlyMap<
  string,
  { gender: Gender; ethnicity: Ethnicity; confidence: number }
>;

/** Library version string */
export const version: string;

// ── Asynchronous API (Tiers 1–4) ────────────────────────────────────────────

/**
 * Configure the optional Tier 4 external API fallback.
 * Call once at startup before using any *Async functions.
 * Pass null to disable.
 *
 * @example
 * configureTier4({ providers: ['genderize'] });
 * configureTier4({ providers: ['namsor'], namsor: { apiKey: 'YOUR_KEY' } });
 * configureTier4(null); // disable
 */
export function configureTier4(options: Tier4Config | null): void;

/**
 * Match a single name — async, adds Tier 4 external API when configured.
 * Gracefully falls back to sync result if Tier 4 is not configured or errors.
 *
 * @example
 * configureTier4({ providers: ['genderize'] });
 * const result = await matchAsync('Xylvia');
 * // → { gender: 'F', confidence: 0.87, method: 'api:genderize', ... }
 */
export function matchAsync(name: string): Promise<MatchResult>;

/**
 * Match multiple names — async, adds Tier 4 only for names that need it.
 * Queries run sequentially to respect provider rate limits.
 *
 * @example
 * const results = await matchBatchAsync(['Oluwasegun', 'Xylvia', 'Nbeke']);
 */
export function matchBatchAsync(names: string[]): Promise<MatchResult[]>;

/**
 * Analyze a full name — async, Tier 4 applied per-token.
 *
 * @example
 * const fa = await analyzeFullNameAsync('Musa Xylpha Garba');
 * // → { overallEthnicity: 'Hausa', overallGender: 'M', ... }
 */
export function analyzeFullNameAsync(fullName: string): Promise<FullNameAnalysis>;

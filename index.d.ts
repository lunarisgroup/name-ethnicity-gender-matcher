/**
 * Type declarations for nigerian-names-predictor
 */

export type Gender = 'M' | 'F' | 'U';

export type MatchMethod = 'dictionary' | 'pattern' | 'ngram' | 'unknown';

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

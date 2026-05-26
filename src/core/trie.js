/**
 * Prefix Trie for fast prefix-based name lookups.
 * Used by the pattern matcher to find all names sharing a common prefix.
 *
 * Time complexity:
 *   insert : O(k)  where k = key length
 *   search : O(k)
 *   prefix : O(k + n)  where n = number of results
 */

'use strict';

class TrieNode {
  constructor() {
    /** @type {Object.<string, TrieNode>} */
    this.children = Object.create(null);
    /** @type {boolean} */
    this.isEnd = false;
    /** @type {{ gender: string, ethnicity: string, confidence: number } | null} */
    this.data = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.size = 0;
  }

  /**
   * Insert a name into the trie.
   * @param {string} word  — already normalized (lowercase, no diacritics)
   * @param {{ gender: string, ethnicity: string, confidence: number }} data
   */
  insert(word, data) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    if (!node.isEnd) this.size++;
    node.isEnd = true;
    node.data = data;
  }

  /**
   * Exact search.
   * @param {string} word
   * @returns {{ gender: string, ethnicity: string, confidence: number } | null}
   */
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node.isEnd ? node.data : null;
  }

  /**
   * Check if any key starts with the given prefix.
   * @param {string} prefix
   * @returns {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }

  /**
   * Collect all entries that share the given prefix.
   * @param {string} prefix
   * @param {number} [limit=10]
   * @returns {Array<{ word: string, data: object }>}
   */
  collectWithPrefix(prefix, limit = 10) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    const results = [];
    this._dfs(node, prefix, results, limit);
    return results;
  }

  /**
   * @private
   */
  _dfs(node, prefix, results, limit) {
    if (results.length >= limit) return;
    if (node.isEnd) {
      results.push({ word: prefix, data: node.data });
    }
    for (const [char, child] of Object.entries(node.children)) {
      if (results.length >= limit) break;
      this._dfs(child, prefix + char, results, limit);
    }
  }
}

module.exports = { Trie };

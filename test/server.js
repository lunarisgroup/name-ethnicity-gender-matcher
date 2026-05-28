'use strict';

/**
 * Tiny HTTP wrapper around the test suite.
 * Runs tests on every GET / request and returns results as HTML.
 * Keeps the process alive so preview_start can attach to it.
 *
 * Usage:  node test/server.js          (default port 3000)
 *         PORT=4000 node test/server.js
 */

const http = require('http');
const { execSync } = require('child_process');
const path = require('path');

const PORT = Number(process.env.PORT) || 3000;
const ROOT = path.join(__dirname, '..');

// ── ANSI → HTML ────────────────────────────────────────────────────────────────
function ansiToHtml(raw) {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/✓/g, '<span class="pass">✓</span>')
    .replace(/✗/g, '<span class="fail">✗</span>');
}

// ── Run tests ──────────────────────────────────────────────────────────────────
function runTests() {
  try {
    const stdout = execSync('node test/matcher.test.js', {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    return { output: stdout, ok: true };
  } catch (e) {
    return { output: (e.stdout || '') + (e.stderr || e.message || ''), ok: false };
  }
}

// ── HTML shell ─────────────────────────────────────────────────────────────────
function buildPage(output, ok) {
  const statusText  = ok ? 'All tests passed ✓' : 'Test failures detected ✗';
  const statusColor = ok ? '#4ec94e' : '#f47070';
  const html        = ansiToHtml(output);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Tests — name-ethnicity-gender-matcher</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body   { font-family: 'Segoe UI', system-ui, sans-serif;
             background: #1a1a2e; color: #e0e0e0; padding: 2rem; }
    header { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; }
    h1     { font-size: 1rem; font-weight: 600; color: #a9b7d0; }
    .badge { font-size: 0.9rem; font-weight: 700; color: ${statusColor};
             border: 1px solid ${statusColor}; border-radius: 4px;
             padding: 0.2rem 0.6rem; }
    .card  { background: #16213e; border: 1px solid #0f3460; border-radius: 8px;
             padding: 1.5rem; overflow-x: auto; }
    pre    { font-family: 'Cascadia Code', 'Fira Code', 'Consolas', monospace;
             font-size: 0.82rem; line-height: 1.7; white-space: pre-wrap; }
    .pass  { color: #4ec94e; }
    .fail  { color: #f47070; }
    footer { margin-top: 1.2rem; font-size: 0.8rem; color: #556; }
    a      { color: #5b9bd5; text-decoration: none; }
    a:hover{ text-decoration: underline; }
  </style>
</head>
<body>
  <header>
    <h1>name-ethnicity-gender-matcher &mdash; Test Suite</h1>
    <span class="badge">${statusText}</span>
  </header>
  <div class="card"><pre>${html}</pre></div>
  <footer><a href="/">&#8635; Refresh to re-run</a></footer>
</body>
</html>`;
}

// ── Server ─────────────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  if (req.method !== 'GET' || (req.url !== '/' && req.url !== '/favicon.ico')) {
    res.writeHead(404); res.end(); return;
  }
  if (req.url === '/favicon.ico') { res.writeHead(204); res.end(); return; }

  const { output, ok } = runTests();
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(buildPage(output, ok));
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Test server listening → http://localhost:${PORT}`);
});

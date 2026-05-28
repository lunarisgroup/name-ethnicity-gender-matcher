'use strict';

/**
 * HTTP wrapper around the benchmark suite.
 * Runs the benchmark on every GET / and returns results as HTML.
 * Keeps the process alive so preview_start can attach.
 *
 * Usage:  node test/benchmark-server.js     (default port 3001)
 *         PORT=4001 node test/benchmark-server.js
 */

const http  = require('http');
const path  = require('path');
const PORT  = Number(process.env.PORT) || 3001;
const ROOT  = path.join(__dirname, '..');

// ── Run the benchmark inline (no child process needed) ────────────────────────
function runBenchmark() {
  // Re-require index fresh each time so the server can be restarted w/o restart
  const idx = require('../src/index');
  const { match, matchBatch, analyzeFullName, dictionary } = idx;

  const NAMES = [
    'Oluwasegun','Chioma','Abubakar','Bassey','Tonye',
    'Adeyemi','Chukwuemeka','Ibrahim','Inyang','Rukevwe',
    'Mwuese','Shettima','Oluwatobiloba','Ikechukwu','Hauwa',
    'Kehinde','Adekunle','Ngozi','Garba','Ekanem',
    'Oluwakayode','Chibuogwu','Terungwa','Oghenekpevi','Akintomide',
  ];

  const ITERATIONS   = 10_000;
  const BATCH        = Array.from({ length: 100 }, (_, i) => NAMES[i % NAMES.length]);
  const BATCH_ITERS  = 1_000;
  const FULL_NAMES   = [
    'Oluwasegun Adeyemi Babatunde',
    'Chukwuemeka Okafor Obiora',
    'Alhaji Musa Usman Garba',
    'Bassey Inyang Edet',
  ];

  const rows = [];

  // Single match
  const t1 = Date.now();
  for (let i = 0; i < ITERATIONS; i++) match(NAMES[i % NAMES.length]);
  const t1ms = Date.now() - t1;
  rows.push({ label: 'Single match',
    detail: `${ITERATIONS.toLocaleString()} iterations`,
    total: `${t1ms} ms`,
    per: `${(t1ms / ITERATIONS * 1000).toFixed(2)} µs / call` });

  // Batch match
  const t2 = Date.now();
  for (let i = 0; i < BATCH_ITERS; i++) matchBatch(BATCH);
  const t2ms = Date.now() - t2;
  rows.push({ label: 'Batch match (100 names)',
    detail: `${BATCH_ITERS.toLocaleString()} batches`,
    total: `${t2ms} ms`,
    per: `${(t2ms / (BATCH_ITERS * BATCH.length) * 1000).toFixed(2)} µs / name` });

  // Full name analysis
  const t3 = Date.now();
  for (let i = 0; i < ITERATIONS; i++) analyzeFullName(FULL_NAMES[i % FULL_NAMES.length]);
  const t3ms = Date.now() - t3;
  rows.push({ label: 'Full-name analysis',
    detail: `${ITERATIONS.toLocaleString()} iterations`,
    total: `${t3ms} ms`,
    per: `${(t3ms / ITERATIONS * 1000).toFixed(2)} µs / call` });

  // Dictionary breakdown
  const ethnicities = new Map();
  for (const [, v] of dictionary) {
    ethnicities.set(v.ethnicity, (ethnicities.get(v.ethnicity) || 0) + 1);
  }
  const sorted = [...ethnicities].sort((a, b) => b[1] - a[1]);

  return { rows, dictSize: dictionary.size, sorted };
}

// ── Build HTML ─────────────────────────────────────────────────────────────────
function buildPage({ rows, dictSize, sorted }) {
  const perfRows = rows.map(r => `
    <tr>
      <td>${r.label}</td>
      <td class="dim">${r.detail}</td>
      <td class="num">${r.total}</td>
      <td class="num hi">${r.per}</td>
    </tr>`).join('');

  const ethRows = sorted.map(([eth, n]) => {
    const pct = (n / dictSize * 100).toFixed(1);
    return `
    <tr>
      <td>${eth}</td>
      <td class="num">${n}</td>
      <td class="bar-cell"><div class="bar" style="width:${pct}%"></div></td>
      <td class="num dim">${pct}%</td>
    </tr>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Benchmark — name-ethnicity-gender-matcher</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body  { font-family: 'Segoe UI', system-ui, sans-serif;
            background: #1a1a2e; color: #e0e0e0; padding: 2rem; }
    h1    { font-size: 1rem; font-weight: 600; color: #a9b7d0; margin-bottom: 1.5rem; }
    h2    { font-size: 0.85rem; font-weight: 600; color: #7a8fa6;
            text-transform: uppercase; letter-spacing: .06em; margin: 1.5rem 0 .6rem; }
    table { width: 100%; border-collapse: collapse; font-size: 0.83rem; }
    th    { text-align: left; color: #556; font-weight: 500;
            border-bottom: 1px solid #0f3460; padding: .4rem .6rem; }
    td    { padding: .45rem .6rem; border-bottom: 1px solid #1e2d4a; }
    .num  { text-align: right; font-variant-numeric: tabular-nums; }
    .dim  { color: #667; }
    .hi   { color: #5b9bd5; font-weight: 600; }
    .bar-cell { width: 160px; padding: .45rem .6rem; }
    .bar  { height: 10px; background: #0f3460; border-radius: 3px;
            border-right: 2px solid #5b9bd5; min-width: 2px; }
    footer{ margin-top: 1.2rem; font-size: 0.78rem; color: #445; }
    a     { color: #5b9bd5; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>name-ethnicity-gender-matcher — Benchmark</h1>

  <h2>Performance</h2>
  <table>
    <thead><tr><th>Scenario</th><th>Iterations</th><th>Total</th><th>Throughput</th></tr></thead>
    <tbody>${perfRows}</tbody>
  </table>

  <h2>Dictionary — ${dictSize.toLocaleString()} entries</h2>
  <table>
    <thead><tr><th>Ethnicity</th><th>Names</th><th></th><th>Share</th></tr></thead>
    <tbody>${ethRows}</tbody>
  </table>

  <footer><a href="/">&#8635; Refresh to re-run</a></footer>
</body>
</html>`;
}

// ── Server ─────────────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') { res.writeHead(204); res.end(); return; }
  if (req.method !== 'GET' || req.url !== '/') { res.writeHead(404); res.end(); return; }

  const data = runBenchmark();
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(buildPage(data));
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Benchmark server listening → http://localhost:${PORT}`);
});

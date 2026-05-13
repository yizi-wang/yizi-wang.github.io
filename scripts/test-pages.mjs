/**
 * Playwright page scanner — batched parallel mode.
 * Checks all HTML pages for structural issues.
 *
 * Usage:
 *   node scripts/test-pages.mjs
 *
 * Config:
 *   BATCH_SIZE — concurrent pages per batch (default 5)
 */

import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { readdirSync, statSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = join(fileURLToPath(import.meta.url), '../..');
const DIST_DIR = join(__dirname, 'dist');
const PORT = 4321;
const BASE = `http://localhost:${PORT}`;
const BATCH_SIZE = 5;

function getHtmlFiles(dir, prefix = '') {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...getHtmlFiles(full, join(prefix, entry)));
    } else if (entry.endsWith('.html')) {
      results.push(join(prefix, entry));
    }
  }
  return results;
}

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn('python', ['-m', 'http.server', String(PORT), '-d', 'dist'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      cwd: __dirname,
    });

    let ready = false;
    const check = () => {
      if (ready) return;
      const req = http.get(BASE, (res) => {
        if (res.statusCode === 200 || res.statusCode === 301) {
          ready = true;
          resolve(proc);
        }
      });
      req.on('error', () => {});
      req.end();
    };

    const interval = setInterval(check, 500);
    setTimeout(() => {
      clearInterval(interval);
      if (!ready) {
        proc.kill();
        reject(new Error('Server did not start within 15s'));
      }
    }, 15000);
  });
}

async function checkPage(browser, file) {
  const urlPath = '/' + file.replace(/\\/g, '/');
  const url = BASE + urlPath;
  const page = await browser.newPage();
  const errors = [];
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => {
    errors.push(err.message);
  });

  try {
    const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    // Extra time for KaTeX to render
    await page.waitForTimeout(2000);
    if (resp.status() !== 200 && resp.status() !== 301) {
      errors.push(`HTTP ${resp.status()}`);
    }

    const h2Count = await page.$$eval('h2', (els) => els.length);
    const detailsCount = await page.$$eval('details', (els) => els.length);

    const katexErrors = await page.$$eval('.katex-error', (els) => els.length);
    if (katexErrors > 0) errors.push(`${katexErrors} KaTeX render errors`);

    const realErrors = consoleErrors.filter(e =>
      !e.includes('favicon') && !e.includes('Network Error')
    );
    if (realErrors.length > 0) errors.push(`console: ${realErrors.slice(0, 3).join('; ')}`);

    let screenshot = null;
    if (errors.length > 0) {
      const ssDir = join(__dirname, 'test-screenshots');
      mkdirSync(ssDir, { recursive: true });
      const safeName = file.replace(/\\/g, '-').replace(/\//g, '-').replace('.html', '');
      screenshot = join(ssDir, safeName + '.png');
      await page.screenshot({ path: screenshot, fullPage: true });
    }

    return { url, ok: errors.length === 0, h2Count, detailsCount, errors, screenshot };
  } catch (e) {
    return { url, ok: false, errors: [e.message.slice(0, 200)] };
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('Starting local server...');
  const server = await startServer();
  console.log(`Server running at ${BASE}`);

  const files = getHtmlFiles(DIST_DIR);
  console.log(`Found ${files.length} HTML pages to check. Batch size: ${BATCH_SIZE}\n`);

  const browser = await chromium.launch({ headless: true });
  const allResults = [];
  const failures = [];
  let processed = 0;

  // Process in batches
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(
      batch.map(f => checkPage(browser, f))
    );

    for (const r of batchResults) {
      allResults.push(r);
      if (!r.ok) failures.push(r);
    }

    processed += batch.length;
    process.stdout.write(`\r${processed}/${files.length} pages checked`);
  }

  console.log(); // newline after progress

  await browser.close();
  server.kill();

  // Report
  const ok = allResults.filter((r) => r.ok).length;
  const fail = allResults.filter((r) => !r.ok).length;
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Results: ${ok} passed, ${fail} failed out of ${allResults.length}`);

  if (failures.length > 0) {
    console.log(`\nFailures:`);
    for (const f of failures.slice(0, 50)) {
      console.log(`  FAIL ${f.url}`);
      for (const e of f.errors) console.log(`    - ${e}`);
      if (f.screenshot) console.log(`    screenshot: ${f.screenshot}`);
    }
    if (failures.length > 50) console.log(`  ... and ${failures.length - 50} more`);
  }

  process.exit(failures.length > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

#!/usr/bin/env node
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const ROOT = process.cwd();
const DIST_DIR = path.join(ROOT, 'dist');
const STEP_DIST_DIR = path.join(DIST_DIR, 'step');
const SCREENSHOT_DIR = path.join(ROOT, 'test-screenshots', 'step-audit');
const VALID_SUMMARIES = new Set(['Hint', 'Model Solution', 'Examiner Notes']);

function htmlFiles(dir, prefix = '') {
  if (!existsSync(dir)) return [];
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const rel = path.join(prefix, entry);
    if (statSync(full).isDirectory()) {
      results.push(...htmlFiles(full, rel));
    } else if (entry.endsWith('.html')) {
      results.push(rel);
    }
  }
  return results;
}

function slugFromArg(arg) {
  if (!arg || arg === 'step') return 'step';
  const normalized = arg.replace(/\\/g, '/').replace(/\/$/, '');
  const base = normalized.split('/').pop().replace(/\.md$/, '').replace(/\.html$/, '');
  if (base === 'index') return 'index';
  return base;
}

function targetsFromArgs(args) {
  const wanted = args.length > 0 ? args.map(slugFromArg) : ['step'];
  const results = [];

  for (const target of wanted) {
    if (target === 'step') {
      results.push(...htmlFiles(STEP_DIST_DIR, 'step'));
    } else if (target === 'index') {
      results.push(path.join('step', 'index.html'));
    } else {
      results.push(path.join('step', target, 'index.html'));
    }
  }

  return [...new Set(results.map((file) => file.replace(/\\/g, '/')))];
}

function waitForServer(base) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const poll = () => {
      const req = http.get(base, (res) => {
        res.resume();
        if ([200, 301, 302, 404].includes(res.statusCode)) {
          resolve();
        } else if (Date.now() - start > 15000) {
          reject(new Error(`server responded with HTTP ${res.statusCode}`));
        } else {
          setTimeout(poll, 250);
        }
      });
      req.on('error', () => {
        if (Date.now() - start > 15000) reject(new Error('server did not start within 15s'));
        else setTimeout(poll, 250);
      });
      req.end();
    };
    poll();
  });
}

async function startServer() {
  for (let port = 4321; port <= 4335; port += 1) {
    const base = `http://127.0.0.1:${port}`;
    const proc = spawn('python', ['-m', 'http.server', String(port), '-d', 'dist'], {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    try {
      await waitForServer(base);
      return { proc, base };
    } catch {
      proc.kill();
    }
  }
  throw new Error('could not start local static server on ports 4321-4335');
}

async function auditPage(browser, base, file) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const url = `${base}/${file}`;
  const errors = [];
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));

  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1000);

    if (!response || ![200, 301, 302].includes(response.status())) {
      errors.push(`HTTP ${response?.status() ?? 'no response'}`);
    }

    await page.$$eval('details', (nodes) => {
      for (const node of nodes) node.open = true;
    });
    await page.waitForTimeout(500);

    const katexErrors = await page.locator('.katex-error').count();
    if (katexErrors > 0) errors.push(`${katexErrors} KaTeX render error(s)`);

    const realConsoleErrors = consoleErrors.filter((text) =>
      !text.includes('favicon') &&
      !text.includes('Failed to load resource') &&
      !text.includes('Network Error')
    );
    if (realConsoleErrors.length > 0) {
      errors.push(`console error(s): ${realConsoleErrors.slice(0, 3).join('; ')}`);
    }

    const isPaper = /\/step\/step[23]-\d{4}\/index\.html$/.test(file);
    if (isPaper) {
      const questionCount = await page.locator('h2').filter({ hasText: /^Question \d+$/ }).count();
      if (questionCount !== 8) errors.push(`expected 8 rendered questions, found ${questionCount}`);

      const summaries = await page.locator('summary').allTextContents();
      for (const summary of summaries.map((text) => text.trim())) {
        if (!VALID_SUMMARIES.has(summary)) errors.push(`non-standard details summary: ${summary}`);
      }

      const modelSolutionCount = summaries.filter((text) => text.trim() === 'Model Solution').length;
      if (modelSolutionCount !== 8) errors.push(`expected 8 rendered Model Solution blocks, found ${modelSolutionCount}`);
    }

    let screenshot = null;
    if (errors.length > 0) {
      mkdirSync(SCREENSHOT_DIR, { recursive: true });
      const safe = file.replace(/[\\/]/g, '-').replace(/\.html$/, '');
      screenshot = path.join(SCREENSHOT_DIR, `${safe}.png`);
      await page.screenshot({ path: screenshot, fullPage: true });
    }

    return { file, url, ok: errors.length === 0, errors, screenshot };
  } catch (error) {
    return { file, url, ok: false, errors: [error.message], screenshot: null };
  } finally {
    await page.close();
  }
}

async function main() {
  if (!existsSync(DIST_DIR)) {
    console.error('dist does not exist. Run `npm run build` before browser auditing.');
    process.exit(1);
  }

  const targets = targetsFromArgs(process.argv.slice(2));
  const missing = targets.filter((file) => !existsSync(path.join(DIST_DIR, file)));
  if (missing.length > 0) {
    for (const file of missing) console.error(`missing built page: dist/${file}`);
    process.exit(1);
  }

  const { proc, base } = await startServer();
  const browser = await chromium.launch({ headless: true });
  const results = [];

  try {
    for (const file of targets) {
      results.push(await auditPage(browser, base, file));
    }
  } finally {
    await browser.close();
    proc.kill();
  }

  const failures = results.filter((result) => !result.ok);
  for (const result of results) {
    const prefix = result.ok ? 'PASS' : 'FAIL';
    console.log(`${prefix} ${result.url}`);
    for (const error of result.errors) console.log(`  - ${error}`);
    if (result.screenshot) console.log(`  screenshot: ${result.screenshot}`);
  }

  console.log(`\nSTEP browser audit: ${results.length} page(s), ${failures.length} failure(s).`);
  process.exit(failures.length > 0 ? 1 : 0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

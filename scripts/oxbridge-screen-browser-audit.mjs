import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const evidence = process.env.SCREEN_AUDIT_DIR || '/tmp/oxbridge-screen-audit';
const readJson = async (name) => JSON.parse(await readFile(path.join(dist, 'oxbridge-screen/content', name)));
const feed = await readJson('approved.json');
const manifest = await readJson('posters.json');
const poster = manifest.posters[0];
const expiry = Date.parse(poster.expires_at);
const before = Date.parse('2026-10-29T04:00:00Z');
const newsCount = Math.ceil(feed.daily.items.length / 3);
const answerCount = feed.weekly.previous_answers.length;
const total = newsCount + 1 + answerCount + feed.weekly.challenges.length;
assert.equal(manifest.status, 'approved');
assert.equal(feed.display.slide_seconds, 18);
assert.equal(poster.slide_seconds, 36);
assert.equal(poster.expires_at, '2026-11-28T16:15:00+08:00');
const bytes = await readFile(path.join(dist, 'oxbridge-screen', poster.image));
const imageHash = createHash('sha256').update(bytes).digest('hex');
assert.equal(imageHash, 'ebe187360b8732e5095e3ff9f68de0b58f278592c45879e727955936ddb851a1');

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.jpg': 'image/jpeg' };
const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const file = path.resolve(dist, `.${decodeURIComponent(url.pathname)}`, url.pathname.endsWith('/') ? 'index.html' : '');
    if (!file.startsWith(`${dist}/`)) throw new Error('Outside dist');
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.end(await readFile(file));
  } catch {
    res.statusCode = 404;
    res.end();
  }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}/oxbridge-screen/`;
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
const jsErrors = [];
const active = (page) => page.locator('.slide').evaluateAll((slides) => slides.findIndex((slide) => slide.classList.contains('is-active')));
const checkOrder = async (page, hasPoster = true) => {
  assert.equal(await page.locator('.slide').count(), total - (hasPoster ? 0 : 1));
  assert.equal(await page.locator('.brief-board').count(), newsCount);
  assert.equal(await page.locator('.answer-slide').count(), answerCount);
  assert.equal(await page.locator('.interview-slide').count(), feed.weekly.challenges.length);
  assert.equal(await page.locator('.poster-slide').count(), hasPoster ? 1 : 0);
  if (hasPoster) {
    assert.equal(await page.locator('.slide').nth(newsCount).getAttribute('data-poster-id'), poster.id);
  }
  assert.equal(await page.locator('.slide').nth(newsCount + (hasPoster ? 1 : 0)).locator('.answer-slide').count(), 1);
};
const open = async ({ time = before, query = '', viewport = { width: 1080, height: 1920 }, timezoneId = 'Asia/Shanghai' } = {}) => {
  const context = await browser.newContext({ viewport, timezoneId, reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', (error) => jsErrors.push(error.message));
  await page.clock.install({ time: new Date(time) });
  await page.clock.pauseAt(new Date(time));
  await page.goto(`${base}${query}`);
  await page.locator('.slide.is-active').waitFor();
  return { context, page };
};

try {
  await mkdir(evidence, { recursive: true });
  {
    const { context, page } = await open();
    await checkOrder(page);
    assert.deepEqual(await page.locator('.slide').evaluateAll((slides) => slides.map((s) => s.style.getPropertyValue('--slide-duration'))), Array.from({ length: total }, (_, i) => i === newsCount ? '36s' : '18s'));
    for (let i = 0; i < total; i++) {
      assert.equal(await active(page), i);
      const seconds = i === newsCount ? 36 : 18;
      await page.clock.runFor(seconds * 1000 - 1);
      assert.equal(await active(page), i, `slide ${i} must last its full ${seconds}s`);
      await page.clock.runFor(1);
      assert.equal(await active(page), (i + 1) % total);
    }
    await context.close();
    console.log('PASS full cycle: news → poster (36s) → answers → questions → news; all other slides 18s');
  }
  {
    const { context, page } = await open({ query: `?slide=${newsCount}` });
    await page.keyboard.press('ArrowRight');
    assert.equal(await active(page), newsCount + 1);
    await page.clock.runFor(17999);
    assert.equal(await active(page), newsCount + 1);
    await page.clock.runFor(1);
    assert.equal(await active(page), newsCount + 2);
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowLeft');
    assert.equal(await active(page), newsCount);
    await page.clock.runFor(35999);
    assert.equal(await active(page), newsCount);
    await page.clock.runFor(1);
    assert.equal(await active(page), newsCount + 1);
    await context.close();
    console.log('PASS keyboard navigation resets the correct 18s/36s timer');
  }
  for (const viewport of [{ width: 1080, height: 1920 }, { width: 720, height: 1280 }, { width: 1920, height: 1080 }, { width: 360, height: 800 }]) {
    const { context, page } = await open({ query: `?autoplay=0&slide=${newsCount}`, viewport });
    await page.locator('.poster-image').evaluate((img) => img.decode());
    const layout = await page.locator('.poster-image').evaluate((img) => {
      const r = img.getBoundingClientRect();
      const canvas = document.querySelector('#screen').getBoundingClientRect();
      const scale = Math.min(r.width / img.naturalWidth, r.height / img.naturalHeight);
      return { natural: [img.naturalWidth, img.naturalHeight], fit: getComputedStyle(img).objectFit, image: { x: r.x + (r.width - img.naturalWidth * scale) / 2, y: r.y + (r.height - img.naturalHeight * scale) / 2, width: img.naturalWidth * scale, height: img.naturalHeight * scale }, canvas: { x: canvas.x, y: canvas.y, right: canvas.right, bottom: canvas.bottom }, overflow: document.documentElement.scrollWidth > innerWidth || document.documentElement.scrollHeight > innerHeight };
    });
    assert.deepEqual(layout.natural, [1024, 1536]);
    assert.equal(layout.fit, 'contain');
    assert.equal(layout.overflow, false);
    assert.ok(layout.image.x >= layout.canvas.x - 1 && layout.image.y >= layout.canvas.y - 1);
    assert.ok(layout.image.x + layout.image.width <= layout.canvas.right + 1 && layout.image.y + layout.image.height <= layout.canvas.bottom + 1);
    await page.screenshot({ path: path.join(evidence, `poster-${viewport.width}x${viewport.height}.png`) });
    await page.clock.runFor(36000);
    assert.equal(await active(page), newsCount, 'autoplay=0 remains paused');
    await context.close();
    console.log(`PASS original full-image layout ${viewport.width}×${viewport.height}: ${JSON.stringify(layout.image)}`);
  }
  for (const offset of [-1, 0, 1]) {
    const { context, page } = await open({ time: expiry + offset, query: `?autoplay=0&slide=${newsCount}`, timezoneId: 'America/Los_Angeles' });
    await checkOrder(page, offset < 0);
    if (offset < 0) {
      await page.clock.runFor(1);
      await checkOrder(page, false);
      assert.equal(await active(page), newsCount, 'expired poster advances to first answer');
    }
    await context.close();
  }
  console.log('PASS expiry −1ms / exact / +1ms, including an already-open paused screen and a different device timezone');
  {
    const { context, page } = await open({ time: expiry - 120000, query: `?slide=${newsCount}` });
    await page.route('**/content/**', (route) => route.abort('internetdisconnected'));
    await page.reload();
    await page.locator('.slide.is-active').waitFor();
    await checkOrder(page);
    await page.clock.runFor(120000);
    await checkOrder(page, false);
    await page.reload();
    await page.locator('.slide.is-active').waitFor();
    await checkOrder(page, false);
    await context.close();
    console.log('PASS cached feed and poster survive an offline reload and disappear at expiry without a successful refresh');
  }
  {
    const { context, page } = await open();
    const unchangedRefresh = page.waitForResponse((response) => response.url().includes('content/approved.json'));
    await page.clock.runFor(300000);
    await unchangedRefresh;
    await page.waitForFunction(() => Boolean(localStorage.getItem('oxbridge:last-approved')));
    await page.clock.runFor(6000);
    assert.equal(await active(page), 6, 'unchanged 5-minute refresh must not restart playback');
    const nextDaily = structuredClone(feed);
    nextDaily.content_date = '2026-10-30';
    nextDaily.daily.headline = 'MOCK DAILY REFRESH';
    await page.route('**/content/approved.json*', (route) => route.fulfill({ json: nextDaily }));
    const refreshed = page.waitForResponse((response) => response.url().includes('content/approved.json'));
    await page.clock.runFor(300000);
    await refreshed;
    await page.waitForFunction(() => document.querySelector('.headline')?.textContent === 'MOCK DAILY REFRESH');
    await checkOrder(page);
    assert.equal(await page.locator('.poster-slide').getAttribute('data-slide-seconds'), '36');
    await context.close();
    console.log('PASS 5-minute unchanged refresh keeps timing; replacing daily news/date retains the separate poster and fixed position');
  }
  assert.deepEqual(jsErrors, []);
  console.log(`PASS no uncaught browser errors; original JPEG SHA-256 ${imageHash}; evidence ${evidence}`);
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}

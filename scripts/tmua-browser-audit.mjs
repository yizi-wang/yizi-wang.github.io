#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { chromium } from 'playwright';

const root = process.cwd();
const args = parseArgs(process.argv.slice(2));
const base = (args.base || 'http://localhost:4321').replace(/\/$/, '');
const dataPath = path.join(root, 'public', 'practice', 'tmua', 'questions_data.js');

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--paper') out.paper = argv[++i];
    else if (argv[i] === '--id') out.id = argv[++i];
    else if (argv[i] === '--base') out.base = argv[++i];
    else if (argv[i] === '--limit') out.limit = Number(argv[++i]);
  }
  return out;
}

function loadQuestions() {
  const code = fs.readFileSync(dataPath, 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: dataPath });
  return sandbox.window.QUESTIONS;
}

function paperKey(q) {
  return `${q.year}-P${q.paper}`;
}

const questions = loadQuestions();
let selected = questions;
if (args.paper) selected = selected.filter((q) => paperKey(q).toLowerCase() === args.paper.toLowerCase());
if (args.id) selected = selected.filter((q) => q.id === args.id);
if (args.limit) selected = selected.slice(0, args.limit);

if (!selected.length) {
  console.error(`No TMUA questions matched ${args.paper || args.id || 'all questions'}`);
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const issues = [];
let currentQuestionId = 'browser';

page.on('console', (msg) => {
  if (['error', 'warning'].includes(msg.type())) {
    issues.push({ id: currentQuestionId, message: `console ${msg.type()}: ${msg.text()}` });
  }
});
page.on('pageerror', (error) => {
  issues.push({ id: currentQuestionId, message: `page error: ${error.message}` });
});

async function visibleText(selector) {
  const loc = page.locator(selector);
  if ((await loc.count()) === 0) return '';
  return (await loc.first().innerText()).trim();
}

async function auditQuestion(q) {
  currentQuestionId = q.id;
  const url = `${base}/practice/tmua/?id=${encodeURIComponent(q.id)}`;
  await page.goto(url, { waitUntil: 'networkidle' });

  const body = await page.locator('body').innerText();
  if (!body.includes(q.id) && !body.includes(`Q${q.num}`) && !body.includes(String(q.year))) {
    issues.push({ id: q.id, message: 'direct link did not visibly land on the target question context' });
  }

  const questionText = await visibleText('#questionText');
  if (!questionText) issues.push({ id: q.id, message: 'question text is not visible' });

  const optionCount = await page.locator('.option, .option-btn, [data-option]').count();
  if (optionCount < Object.keys(q.options || {}).length) {
    issues.push({ id: q.id, message: `rendered option count ${optionCount} is below data option count ${Object.keys(q.options || {}).length}` });
  }

  const katexCount = await page.locator('.katex').count();
  if ((q.question + JSON.stringify(q.options) + q.analysis).includes('$') && katexCount === 0) {
    issues.push({ id: q.id, message: 'question contains LaTeX delimiters but no KaTeX nodes rendered' });
  }

  const firstOption = page.locator('.option, .option-btn, [data-option]').first();
  if (await firstOption.count()) {
    await firstOption.click();
    const submit = page.locator('#submitBtn');
    if (await submit.count()) await submit.click();
  }

  const analysisButton = page.locator('#analysisBtn');
  if (await analysisButton.count()) await analysisButton.click();
  const analysisText = await visibleText('#analysisArea');
  if (!analysisText) issues.push({ id: q.id, message: 'analysis area did not reveal visible text' });

  const missingImages = await page.locator('img').evaluateAll((imgs) =>
    imgs.filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.getAttribute('src') || '')
  );
  for (const src of missingImages) issues.push({ id: q.id, message: `image failed to load: ${src}` });
}

for (const q of selected) {
  await auditQuestion(q);
}

const topics = [...new Set(selected.flatMap((q) => [q.topic, ...(q.related_topics || [])]))];
for (const topic of topics.slice(0, 5)) {
  await page.goto(`${base}/practice/tmua/?topic=${encodeURIComponent(topic)}`, { waitUntil: 'networkidle' });
  const body = await page.locator('body').innerText();
  if (!body.includes(topic)) issues.push({ id: `topic:${topic}`, message: 'topic deep link did not show the topic name' });
}

await browser.close();

for (const issue of issues) console.log(`[error] ${issue.id}: ${issue.message}`);
console.log(`TMUA browser audit: ${selected.length} questions checked, ${issues.length} issues`);
process.exit(issues.length ? 1 : 0);

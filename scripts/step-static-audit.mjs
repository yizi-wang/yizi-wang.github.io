#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const STEP_DIR = path.join(ROOT, 'src', 'content', 'docs', 'step');
const VALID_SUMMARIES = new Set(['Hint', 'Model Solution', 'Examiner Notes']);

function normalizeArg(arg) {
  if (!arg) return null;
  const direct = path.resolve(ROOT, arg);
  if (existsSync(direct)) return direct;

  const slug = arg.replace(/\\/g, '/').split('/').pop().replace(/\.md$/, '');
  const candidate = path.join(STEP_DIR, `${slug}.md`);
  return existsSync(candidate) ? candidate : direct;
}

function listTargets(args) {
  if (args.length > 0) return args.map(normalizeArg);

  return readdirSync(STEP_DIR)
    .filter((name) => /^step[23]-\d{4}\.md$/.test(name) || name === 'index.md')
    .sort((a, b) => {
      if (a === 'index.md') return -1;
      if (b === 'index.md') return 1;
      const ma = a.match(/^step([23])-(\d{4})\.md$/);
      const mb = b.match(/^step([23])-(\d{4})\.md$/);
      const paperDiff = Number(ma[1]) - Number(mb[1]);
      if (paperDiff !== 0) return paperDiff;
      return Number(mb[2]) - Number(ma[2]);
    })
    .map((name) => path.join(STEP_DIR, name));
}

function rel(file) {
  return path.relative(ROOT, file).replace(/\\/g, '/');
}

function lineForOffset(text, offset) {
  return text.slice(0, offset).split(/\r?\n/).length;
}

function addIssue(list, severity, file, message, offset = 0) {
  list.push({ severity, file: rel(file), line: lineForOffset(readFileSync(file, 'utf8'), offset), message });
}

function checkIndex(file, text) {
  const issues = [];
  const links = [...text.matchAll(/\[STEP ([23]) (\d{4})\]\(\.\/(step[23]-\d{4})\)/g)];
  const seen = new Set(links.map((m) => m[3]));

  for (const paper of [2, 3]) {
    for (let year = 1998; year <= 2024; year += 1) {
      const slug = `step${paper}-${year}`;
      if (!seen.has(slug)) {
        issues.push({ severity: 'error', file: rel(file), line: 1, message: `missing index link for ${slug}` });
      }
    }
  }

  for (const match of text.matchAll(/\]\(\.\/([^)]+)\)/g)) {
    const href = match[1];
    if (href !== href.toLowerCase()) {
      issues.push({ severity: 'error', file: rel(file), line: lineForOffset(text, match.index), message: `non-lowercase link target: ${href}` });
    }
  }

  return issues;
}

function extractQuestionSections(text) {
  const matches = [...text.matchAll(/^## Question (\d+)\s*$/gm)];
  return matches.map((match, index) => ({
    number: Number(match[1]),
    start: match.index,
    end: matches[index + 1]?.index ?? text.length,
    body: text.slice(match.index, matches[index + 1]?.index ?? text.length),
  }));
}

function checkDetails(file, section, issues) {
  const starts = [...section.body.matchAll(/<details\b[^>]*>/g)];
  const ends = [...section.body.matchAll(/<\/details>/g)];
  if (starts.length !== ends.length) {
    issues.push({
      severity: 'error',
      file: rel(file),
      line: lineForOffset(readFileSync(file, 'utf8'), section.start),
      message: `Question ${section.number}: details tag mismatch (${starts.length} opens, ${ends.length} closes)`,
    });
  }

  const summaries = [...section.body.matchAll(/<summary><strong>(.*?)<\/strong><\/summary>/g)];
  for (const summary of summaries) {
    if (!VALID_SUMMARIES.has(summary[1])) {
      issues.push({
        severity: 'error',
        file: rel(file),
        line: lineForOffset(readFileSync(file, 'utf8'), section.start + summary.index),
        message: `Question ${section.number}: non-standard details summary "${summary[1]}"`,
      });
    }
  }

  for (const empty of section.body.matchAll(/<details>\s*<summary><strong>(.*?)<\/strong><\/summary>\s*<\/details>/gs)) {
    issues.push({
      severity: 'error',
      file: rel(file),
      line: lineForOffset(readFileSync(file, 'utf8'), section.start + empty.index),
      message: `Question ${section.number}: empty ${empty[1]} details block`,
    });
  }

  const positions = Object.fromEntries([...VALID_SUMMARIES].map((label) => [label, section.body.indexOf(`<summary><strong>${label}</strong></summary>`)]));
  if (positions.Hint !== -1 && positions['Model Solution'] !== -1 && positions.Hint > positions['Model Solution']) {
    issues.push({ severity: 'error', file: rel(file), line: lineForOffset(readFileSync(file, 'utf8'), section.start), message: `Question ${section.number}: Hint appears after Model Solution` });
  }
  if (positions['Examiner Notes'] !== -1 && positions['Model Solution'] !== -1 && positions['Examiner Notes'] < positions['Model Solution']) {
    issues.push({ severity: 'error', file: rel(file), line: lineForOffset(readFileSync(file, 'utf8'), section.start), message: `Question ${section.number}: Examiner Notes appears before Model Solution` });
  }

  if (positions['Model Solution'] === -1) {
    issues.push({ severity: 'error', file: rel(file), line: lineForOffset(readFileSync(file, 'utf8'), section.start), message: `Question ${section.number}: missing required Model Solution` });
  }
}

function checkLatexHazards(file, text, issues) {
  const patterns = [
    { re: /\\tag\{/g, severity: 'warning', message: 'KaTeX tag numbering may render awkwardly in Starlight content' },
    { re: /\\begin\{(align|array)\*?\}/g, severity: 'warning', message: 'check multiline LaTeX visually in browser' },
    { re: /TODO|FIXME/g, severity: 'error', message: 'TODO/FIXME marker remains' },
  ];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern.re)) {
      issues.push({
        severity: pattern.severity,
        file: rel(file),
        line: lineForOffset(text, match.index),
        message: pattern.message,
      });
    }
  }

  for (const match of text.matchAll(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g)) {
    issues.push({
      severity: 'error',
      file: rel(file),
      line: lineForOffset(text, match.index),
      message: `unexpected control character U+${match[0].charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`,
    });
  }

  for (const match of text.matchAll(/^(?:[4-9]|[1-9]\d)$/gm)) {
    const before = text.slice(Math.max(0, match.index - 12), match.index);
    const after = text.slice(match.index + match[0].length, match.index + match[0].length + 12);
    if (before.includes('---') || after.includes('<details>')) {
      issues.push({
        severity: 'error',
        file: rel(file),
        line: lineForOffset(text, match.index),
        message: `standalone page-number artifact: ${match[0]}`,
      });
    }
  }
}

function checkPaper(file, text) {
  const issues = [];
  const sections = extractQuestionSections(text);

  if (sections.length !== 8) {
    issues.push({ severity: 'error', file: rel(file), line: 1, message: `expected 8 questions, found ${sections.length}` });
  }

  const nums = sections.map((s) => s.number);
  const expected = [1, 2, 3, 4, 5, 6, 7, 8];
  if (nums.length > 0 && nums.join(',') !== expected.slice(0, nums.length).join(',')) {
    issues.push({ severity: 'error', file: rel(file), line: 1, message: `questions are missing, duplicated, or out of order: ${nums.join(', ')}` });
  }

  for (const section of sections) {
    const problemIndex = section.body.indexOf('### Problem');
    if (problemIndex === -1) {
      issues.push({ severity: 'error', file: rel(file), line: lineForOffset(text, section.start), message: `Question ${section.number}: missing ### Problem heading` });
    }
    checkDetails(file, section, issues);

    for (const html of section.body.matchAll(/^<(?!\/?(details|summary|strong|br)\b)[^>]+>/gm)) {
      issues.push({
        severity: 'warning',
        file: rel(file),
        line: lineForOffset(text, section.start + html.index),
        message: `Question ${section.number}: inspect raw HTML tag ${html[0]}`,
      });
    }
  }

  checkLatexHazards(file, text, issues);
  return issues;
}

function checkFile(file) {
  if (!existsSync(file)) {
    return [{ severity: 'error', file: rel(file), line: 1, message: 'file does not exist' }];
  }

  const text = readFileSync(file, 'utf8');
  if (path.basename(file) === 'index.md') return checkIndex(file, text);
  return checkPaper(file, text);
}

const targets = listTargets(process.argv.slice(2));
const allIssues = targets.flatMap(checkFile);
const errors = allIssues.filter((issue) => issue.severity === 'error');
const warnings = allIssues.filter((issue) => issue.severity === 'warning');

for (const issue of allIssues) {
  console.log(`${issue.severity.toUpperCase()} ${issue.file}:${issue.line} ${issue.message}`);
}

console.log(`\nSTEP static audit: ${targets.length} file(s), ${errors.length} error(s), ${warnings.length} warning(s).`);
process.exit(errors.length > 0 ? 1 : 0);

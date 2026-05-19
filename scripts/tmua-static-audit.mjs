#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const dataPath = path.join(root, 'public', 'practice', 'tmua', 'questions_data.js');
const allowedTopics = new Set([
  'Algebra',
  'Functions',
  'Graphs',
  'Coordinate Geometry',
  'Sequences and Series',
  'Trigonometry',
  'Differentiation',
  'Integration',
  'Logic',
  'Counterexamples',
  'Proof',
  'Sets',
  'Probability',
  'Number Theory',
  'Combinatorics',
]);
const allowedModules = new Set([
  'a1_algebra_basics',
  'a2_equations_inequalities',
  'a3_exponents_logarithms',
  'b_mathematical_logic_basics',
  'c_sequences_series',
  'd_coordinate_geometry',
  'e_trigonometry',
  'f_differentiation',
  'g_integration',
  'h_logic_counterexamples',
  'i_functions_graphs',
  'j_sets_probability',
  'k_number_theory_combinatorics',
  'l_proof_methods',
  'm_comprehensive_training',
  'n_mock_exam_sprint',
]);

const args = parseArgs(process.argv.slice(2));
const issues = [];

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--paper') out.paper = argv[++i];
    else if (argv[i] === '--id') out.id = argv[++i];
  }
  return out;
}

function add(severity, id, message) {
  issues.push({ severity, id: id || 'global', message });
}

function loadQuestions() {
  if (!fs.existsSync(dataPath)) {
    add('error', 'global', `missing ${path.relative(root, dataPath)}`);
    return [];
  }
  const code = fs.readFileSync(dataPath, 'utf8');
  const sandbox = { window: {} };
  try {
    vm.runInNewContext(code, sandbox, { filename: dataPath });
  } catch (error) {
    add('error', 'global', `questions_data.js cannot be evaluated: ${error.message}`);
    return [];
  }
  if (!Array.isArray(sandbox.window.QUESTIONS)) {
    add('error', 'global', 'window.QUESTIONS is not an array');
    return [];
  }
  return sandbox.window.QUESTIONS;
}

function paperKey(q) {
  return `${q.year}-P${q.paper}`;
}

function expectedId(q) {
  return `${q.year}-P${q.paper}-Q${q.num}`;
}

function labelsFor(options) {
  return Object.keys(options || {}).sort();
}

function consecutiveLabels(labels) {
  if (!labels.length) return false;
  return labels.every((label, idx) => label === String.fromCharCode(65 + idx));
}

function containsLikelyDebris(text) {
  const patterns = [
    /\bPage\s+\d+\b/i,
    /\bTURN OVER\b/i,
    /\bBLANK PAGE\b/i,
    /\bEND OF QUESTION PAPER\b/i,
    /©\s*UCLES/i,
    /\b\d+\s+(\[[0-9]+\]|\(Total)/,
    /【正确答案】[A-H]\s+(and|or)\s+[A-Z][A-Za-z ]+$/m,
  ];
  return patterns.find((pattern) => pattern.test(text || ''));
}

function answerMarkers(text) {
  const markers = [];
  const re = /(?:【正确答案】|\*\*正确答案\*\*[:：]?)\s*([A-H])/g;
  let match;
  while ((match = re.exec(text || ''))) markers.push(match[1]);
  return markers;
}

function imageRefs(q) {
  if (!q.images) return [];
  const rawRefs = Array.isArray(q.images) ? q.images : [q.images];
  return rawRefs
    .map((ref) => {
      if (typeof ref === 'string') return ref;
      if (ref && typeof ref === 'object') {
        return [
          ref.src,
          ref.image,
          ref.question_image,
          ref.options_image,
          ref.path,
          ref.url,
        ].filter(Boolean);
      }
      return '';
    })
    .flat()
    .filter(Boolean);
}

function pngDimensions(imagePath) {
  try {
    const buffer = fs.readFileSync(imagePath);
    if (buffer.length < 24) return null;
    const signature = buffer.subarray(0, 8).toString('hex');
    if (signature !== '89504e470d0a1a0a') return null;
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  } catch {
    return null;
  }
}

function looksLikeFullPageImage(ref, imagePath) {
  if (/(^|[_\-\s])page\s*\d+/i.test(path.basename(ref))) return true;
  const dimensions = pngDimensions(imagePath);
  if (!dimensions) return false;
  const ratio = dimensions.height / Math.max(dimensions.width, 1);
  return dimensions.width >= 1000 && dimensions.height >= 1400 && ratio > 1.25;
}

function isLowerAsciiTag(value, separatorPattern) {
  return typeof value === 'string' && separatorPattern.test(value);
}

function auditQuestion(q) {
  const id = q?.id || expectedId(q || {});
  for (const field of ['id', 'year', 'paper', 'num', 'topic', 'difficulty', 'question', 'options', 'answer', 'analysis']) {
    if (q[field] === undefined || q[field] === null || q[field] === '') add('error', id, `missing required field: ${field}`);
  }

  if (q.id !== expectedId(q)) add('error', id, `id does not match year/paper/num: expected ${expectedId(q)}`);
  if (!allowedTopics.has(q.topic)) add('error', id, `unknown primary topic: ${q.topic}`);

  if (q.related_topics !== undefined) {
    if (!Array.isArray(q.related_topics)) add('error', id, 'related_topics must be an array');
    else {
      for (const topic of q.related_topics) {
        if (!allowedTopics.has(topic)) add('error', id, `unknown related topic: ${topic}`);
        if (topic === q.topic) add('warn', id, `related topic duplicates primary topic: ${topic}`);
      }
    }
  }

  if (q.modules !== undefined) {
    if (!Array.isArray(q.modules)) add('error', id, 'modules must be an array when present');
    else {
      for (const moduleId of q.modules) {
        if (!allowedModules.has(moduleId)) add('error', id, `unknown handout module: ${moduleId}`);
      }
    }
  }

  if (q.sections !== undefined) {
    if (!Array.isArray(q.sections)) add('error', id, 'sections must be an array when present');
    else {
      for (const section of q.sections) {
        if (!isLowerAsciiTag(section, /^[a-z][a-z0-9]*(?:[._][a-z0-9]+)*$/)) {
          add('warn', id, `section tag should use lower-case ASCII with dots/underscores: ${section}`);
        }
      }
    }
  }

  if (q.skills !== undefined) {
    if (!Array.isArray(q.skills)) add('error', id, 'skills must be an array when present');
    else {
      for (const skill of q.skills) {
        if (!isLowerAsciiTag(skill, /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/)) {
          add('warn', id, `skill tag should use lower-case kebab-case: ${skill}`);
        }
      }
    }
  }

  if (q.primary_section !== undefined) {
    if (typeof q.primary_section !== 'string') add('error', id, 'primary_section must be a string when present');
    if (Array.isArray(q.sections) && q.sections.length && !q.sections.includes(q.primary_section)) {
      add('warn', id, 'primary_section is not included in sections');
    }
  }

  if (q.topic === 'Algebra' && (
    !Array.isArray(q.modules) || q.modules.length === 0 ||
    !Array.isArray(q.sections) || q.sections.length === 0 ||
    !Array.isArray(q.skills) || q.skills.length === 0
  )) {
    add('warn', id, 'Algebra question should receive modules, sections, and skills during content audit');
  }

  const labels = labelsFor(q.options);
  if (!consecutiveLabels(labels)) add('error', id, `option labels are not consecutive from A: ${labels.join(', ')}`);
  if (!labels.includes(q.answer)) add('error', id, `answer ${q.answer} is not one of the option labels`);
  for (const label of labels) {
    if (!String(q.options[label] || '').trim()) add('error', id, `empty option ${label}`);
  }

  const combinedText = `${q.question || ''}\n${Object.values(q.options || {}).join('\n')}\n${q.analysis || ''}`;
  const debris = containsLikelyDebris(combinedText);
  if (debris) add('warn', id, `possible OCR/conversion debris matched ${debris}`);

  const markers = answerMarkers(q.analysis);
  if (!markers.length) add('warn', id, 'analysis has no Chinese correct-answer marker');
  if (markers.length && markers.at(-1) !== q.answer) {
    add('error', id, `analysis answer marker ${markers.at(-1)} does not match answer ${q.answer}`);
  }

  const refs = imageRefs(q);
  if (q.has_image && refs.length === 0) add('error', id, 'has_image is true but images is empty');
  for (const ref of refs) {
    const possiblePaths = [
      path.join(root, 'public', 'practice', 'tmua', ref),
      path.join(root, 'public', 'practice', 'tmua', 'images', ref),
    ];
    const existingPath = possiblePaths.find((imagePath) => fs.existsSync(imagePath));
    if (!existingPath) {
      add('error', id, `missing image reference: ${ref}`);
    } else if (looksLikeFullPageImage(ref, existingPath)) {
      add('error', id, `image reference looks like a full-page screenshot, not a question asset: ${ref}`);
    }
  }
}

const questions = loadQuestions();
let selected = questions;
if (args.paper) selected = selected.filter((q) => paperKey(q).toLowerCase() === args.paper.toLowerCase());
if (args.id) selected = selected.filter((q) => q.id === args.id);
if ((args.paper || args.id) && selected.length === 0) add('error', 'global', `no questions matched ${args.paper || args.id}`);

const seen = new Map();
for (const q of questions) {
  if (seen.has(q.id)) add('error', q.id, `duplicate id also seen at index ${seen.get(q.id)}`);
  seen.set(q.id, questions.indexOf(q));
}

for (const q of selected) auditQuestion(q);

const byPaper = new Map();
for (const q of questions) {
  const key = paperKey(q);
  byPaper.set(key, (byPaper.get(key) || 0) + 1);
}
for (const [key, count] of byPaper) {
  if (count !== 20) add('error', key, `expected 20 questions, found ${count}`);
}

for (const issue of issues) {
  console.log(`[${issue.severity}] ${issue.id}: ${issue.message}`);
}

const errors = issues.filter((issue) => issue.severity === 'error').length;
const warnings = issues.filter((issue) => issue.severity === 'warn').length;
console.log(`TMUA static audit: ${selected.length} selected, ${errors} errors, ${warnings} warnings`);
process.exit(errors ? 1 : 0);

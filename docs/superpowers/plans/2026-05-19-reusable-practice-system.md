# Reusable Practice System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Turn the current TMUA-only static practice app into a reusable practice platform that can later host TMUA, STEP, A-Level, and other maths question banks.

**Architecture:** Keep the current static `public/practice/tmua/` app working, but introduce a small platform layer for dataset configuration, question normalization, route parsing, tag indexes, and storage keys. UI features consume normalized question fields (`course`, `modules`, `sections`, `skills`, `topic`, `related_topics`) instead of hard-coded TMUA assumptions.

**Tech Stack:** Static HTML/CSS/JavaScript, existing KaTeX CDN rendering, localStorage, current Astro static build.

---

### Task 1: Platform Schema And Routing

**Files:**
- Create: `public/practice/tmua/js/practice-core.js`
- Modify: `public/practice/tmua/index.html`
- Modify: `public/practice/tmua/js/quiz.js`

- [x] **Step 1: Add reusable course config**

Create `practice-core.js` with `PRACTICE_COURSE_CONFIGS.tmua`, a `normalizeQuestion()` function, a `normalizeQuestionBank()` function, `parsePracticeRoute()`, and tag helpers.

- [x] **Step 2: Load platform layer before app code**

Add `<script src="js/practice-core.js"></script>` before `render.js` in `index.html`.

- [x] **Step 3: Use normalized questions and config in `TMUAQuiz`**

In `init()`, set `this.courseConfig = getPracticeConfig('tmua')`, normalize `window.QUESTIONS`, and update title/count/year rendering from config/indexes instead of hard-coded 2016-2022 values.

- [x] **Step 4: Preserve old URLs**

Keep `?id=2023-P2-Q3`, `?topic=Logic`, `?year=2023&paper=2` working. Add support for `?module=...`, `?section=...`, and `?skill=...`.

### Task 2: Tag Filters And Navigation

**Files:**
- Modify: `public/practice/tmua/index.html`
- Modify: `public/practice/tmua/js/filter.js`
- Modify: `public/practice/tmua/js/quiz.js`
- Modify: `public/practice/tmua/css/styles.css`

- [x] **Step 1: Add tag filter controls**

Add module/section/skill selects next to the existing topic select. Populate them from tag indexes.

- [x] **Step 2: Filter across primary and secondary tags**

Update filtering so `topic` matches `topic` and `related_topics`, while module/section/skill selects match their arrays.

- [x] **Step 3: Add question jump navigation**

Add a compact question jump select and current filtered count. It should update when filters change and jump without resetting answers.

- [x] **Step 4: Show metadata chips**

Display primary topic, related topics, modules, sections, skills, and difficulty as small chips on the question card.

### Task 3: Favorites, Wrong-Book, And Practice Sets

**Files:**
- Modify: `public/practice/tmua/js/progress.js`
- Modify: `public/practice/tmua/js/quiz.js`
- Modify: `public/practice/tmua/index.html`
- Modify: `public/practice/tmua/css/styles.css`

- [x] **Step 1: Extend localStorage progress**

Add `favorites`, `bookmarked`, and `sets`-friendly storage while preserving existing `completed/correct/wrong`.

- [x] **Step 2: Add favorite toggle**

Add a visible favorite button on each question. Favorites should persist and be filterable.

- [x] **Step 3: Improve wrong-book flows**

Keep current wrong redo, but add a filter mode for favorites and a way to restart the current filtered set.

### Task 4: Random Papers, Module/Skill Drills, Timed Mode, Export

**Files:**
- Modify: `public/practice/tmua/js/quiz.js`
- Modify: `public/practice/tmua/js/export.js`
- Modify: `public/practice/tmua/index.html`
- Modify: `public/practice/tmua/css/styles.css`

- [x] **Step 1: Random paper builder**

Add a panel to choose number of questions, source filter, and optional timer. Generate a fixed session order.

- [x] **Step 2: Module and skill drills**

Allow one-click drills from module/section/skill filters using the same session engine.

- [x] **Step 3: Timed practice**

Support a non-mock timer for generated practice sets, independent of 75-minute mock exams.

- [x] **Step 4: Worksheet export**

Export the current filtered/generated set as printable HTML or text containing question IDs, metadata, questions, options, and an answer key.

### Task 5: Verification

**Files:**
- Existing scripts only unless a bug needs a script fix.

- [x] **Step 1: Static audit**

Run `node scripts/tmua-static-audit.mjs`.

- [x] **Step 2: Build**

Run `Remove-Item -Recurse -Force .astro -ErrorAction SilentlyContinue; npx.cmd astro build`.

- [x] **Step 3: Browser audit**

Run `node scripts/tmua-browser-audit.mjs --paper 2023-P2 --base http://127.0.0.1:<port>` against built output.

- [x] **Step 4: Manual smoke checks**

Check direct question link, module URL filter, skill URL filter, favorite toggle, generated set, timed mode, and worksheet export.

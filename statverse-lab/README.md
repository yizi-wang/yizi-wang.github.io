# STATVERSE — Interactive Statistics Lab

A private development preview for16–18year-old Pearson Edexcel IAL S1/S2/S3 learners, with S3 as the priority. Original fictional card pool; no payments, student data, backend or account required for computation. This is checkpoint1, not a complete S1–S3 course or classroom approval.

Private playable preview: https://statverse-statistics-lab-20261025.qswsaxs.chatgpt.site (owner sign-in may be required). Native deployment succeeded16:07:01UTC; local browser QA is separate from deployment verification.

## Run

Node24 for tests/build; Python3 for static local serving. No app dependencies.

```bash
cd statverse-lab
npm test
npm run build
npm run dev
```

Open http://localhost:4173. Static deployable output:dist/. Source index.html also serves directly through HTTP. Root website remains untouched. Browser QA uses the preinstalled root Playwright package and system Chromium; from this directory run `node tests/browser.mjs` while local server runs.

## Implemented

- Fixed transparent five-outcome skewed population and three-outcome exact model.
- Iid replacement draws; seeded RNG; single/batch/pause/resume/reset/replay. Max5000 retained samples; each retains exact original card IDs.
- n and repetition R distinct. n/model/estimator changes clear old results. Replay and hide do not consume RNG.
- Mean, first-card, mean+2, unbiased S², divisor-n variance. Exact theoretical expectation, target bias and SE separately labelled from empirical simulation mean.
- Original sample ↔ one selectable statistic-dot; native number selector provides keyboard alternative. Responsive student/projection layouts, reduced motion, field guide.
- Weighted exact enumeration ≤20,000 ordered samples. Beyond cap explicitly disabled, never secretly simulated.
- Partial CLT lab: Normal overlay, fixed population, no n30 guarantee.
- Partial95% knownσ CI coverage lab: fixed truth/random intervals, nonnormal approximation prominently labelled.

## Architecture

`src/statistics.js`: pure model/probability functions, RNG, enumeration and mathematical helpers.
`src/app.js`: single experiment state, DOM/SVG rendering and controls; cancels pending animation tokens on reset/navigation.
`style.css`: scoped standalone design. `scripts/build.mjs`: deterministic static copy. No root Astro/router/style/deployment changes.

## Evidence and limits

See docs/RESOURCE-AUDIT.md, COVERAGE.md, DEVELOPMENT-LOG.md, REVIEW-LOOP.md and independent prospective requirements/acceptance plans. Desktop/phone/teacher screenshots and actual browser results live in evidence/.

Teacher mode currently widens layout and supports pause/truth hiding; full step reveal/focus control remains partial. CI confidence level fixed95%, knownσ only. CLT lacks standardized view/Normal population. Correlation/test/chi-square UI and broader F modules absent. No independent code approval or real student test claimed. Parent task owns independent review and further iterations across the full project window.

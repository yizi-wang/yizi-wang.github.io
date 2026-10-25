# STATVERSE — Interactive Statistics Lab

A private, static statistics laboratory for16–18year-old Pearson Edexcel IAL learners. S3 is the priority. All data are synthetic; card powers/probabilities are transparent. No purchases, student-data collection or backend.

Private preview: https://statverse-statistics-lab-20261025.qswsaxs.chatgpt.site . Owner login may be required. Independent review can use the isolated Git branch or authorized Library static snapshots without changing Site access.

## Run and validate

```bash
cd statverse-lab
npm test
npm run build
npm run dev
```

Open http://localhost:4173. Deploy `dist/` on a static host. No runtime app dependencies. Browser QA uses the preinstalled parent repository Playwright and system Chromium: with the local server running, execute `node tests/browser.mjs` and `node tests/browser-stage2.mjs`. The latter includes a real-DOM deterministic-frame regression of the5000-record limit, which takes about40–50seconds in this environment.

## Working features at checkpoint2

- Fixed weighted card population → whole original sample → one saved estimate point; point/number-selector recall. A brief compression animation links the group to its point, with the same persistent textual relationship under reduced motion.
- Five estimator rules, independent n/R, seed/reset, single draw and batch/pause/resume. Every append respects the5000-record cap, including a manual draw during a paused batch.
- Theoretical expectation, bias and SE are separate from finite simulation summaries. Exact weighted enumeration up to20,000 ordered samples has inspectable, paginated rows: original values, statistic, product probability and expectation contribution.
- Predictions attach to the selected rule and actual baseline SE; changing n/R produces evidence-based comparison feedback. Changing rule/model/lab clears incompatible predictions.
- Teacher stages reveal real population/sample/distribution workspaces; worked answers can be concealed without changing data. Teacher pause and native lab navigation remain available. Projection metrics/ticks are enlarged.
- CLT: raw means or standardized Z, same retained samples, Normal approximation labelled. The fixed Z window[-4,4] explicitly counts retained out-of-window samples. Standardization does not imply Normality.
- CI: knownσ90/95/99% intervals, fixed parameter/random endpoints, text+keyboard/touch interval inspection, same-sample confidence comparisons. Nonnormal coverage is an approximation. Constant-population fixtures give zero SE and point intervals; Z is unavailable at SE0.
- Correlation: synthetic presets, real dragging plus keyboard/numeric editing; Pearson r, Spearman average ranks including ties, regression of y on x, dashed extrapolation, outlier addition, monotone squaring, U-shaped dependence and undefined constant-variable coefficients. Seeded conditional-pairing Monte Carlo significance is labelled enrichment; supplied critical-table teaching remains incomplete.

## Architecture

`src/statistics.js`: pure validated model, RNG, estimators, exact enumeration, correlations/regression and numeric helpers. `src/app.js`: sampling/CLT/CI state and teacher controls. `src/correlation.js`: isolated correlation interaction state and rendering. `scripts/build.mjs`: static build. Original website routes/styles/homepage/electronic-screen and deployment configuration are untouched.

## Evidence, independent review and limits

Current developer checks:16 unit/oracle/domain tests;11 baseline browser flows;13 added browser regressions. Read the JSON/TXT outputs in `evidence/` for actual timestamps and statuses. Screenshots cover desktop,390px phone and1920×1080 Teacher views.

Independent review of commit65cf found navigation, CI access, estimator-prompt and cap defects. The original pedagogy report remains unchanged at `docs/reviews/ROUND1-INDEPENDENT-PEDAGOGY.md`, including its0/8 BLOCKED browser status. A different independent math reviewer reported203 configurations/120,130 ordered samples matching and11/12 Chromium flows; the failing5001-cap path is now developer-regressed at5000. Independent approval of checkpoint2 is pending. No real students participated; no weighted learning score or classroom-ready claim is made.

See `docs/REVIEW-LOOP.md`, `COVERAGE.md`, `NUMERIC-CONTRACT.md`, `CLASSROOM-GUIDE.md` and actual `DEVELOPMENT-LOG.md`. Core Normal-model/exact-vs-approximation conditions remain explicit. Full distribution fundamentals, unknownσ inference, one/two-mean test UI, critical-table significance and chi-square UI remain incomplete. Separate inference pure-function work is owned by a parent-coordinated isolated task; no inference.js file is created here. The two brief z helpers currently in statistics.js are API-only and can be replaced by that task's reviewed module.

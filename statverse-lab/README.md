# STATVERSE — Interactive Statistics Lab

A private static statistics laboratory for16–18year-old Pearson Edexcel IAL learners, with S3 as the priority. All observations and card characters are synthetic. Transparent weighted probabilities, no purchases, student records or backend.

Private preview: https://statverse-statistics-lab-20261025.qswsaxs.chatgpt.site . Owner login may be required. Reviewers can use the isolated Git branch or authorized Library snapshots without changing access.

## Run and validate

```bash
cd statverse-lab
npm test
npm run build
npm run dev
```

Open http://localhost:4173. The static build recursively includes every ES module in `src/`; deploy `dist/` on a static host. Runtime has no app dependencies. Browser QA uses the parent repository's installed Playwright and `/usr/bin/chromium`: `node tests/browser.mjs`, `node tests/browser-stage2.mjs`, and `STATVERSE_BASE_URL=http://127.0.0.1:4174 node tests/browser-stage3.mjs` against a separate built-output server. The cap5000 real-DOM test takes about40–70seconds depending on load.

## Working features at checkpoint3

- Fixed weighted population → whole original sample → one saved statistic. Default n3 and two concrete introductory predictions precede the n-versus-spread question. A persistent chain distinguishes fixed target, rule before sampling, observed estimate and R. Saved dots retrieve their exact source cards; reduced motion retains the relationship.
- Five estimator rules, independent n/R, reproducible seed/reset, single draw, batch/pause/resume, guarded5000 cap. n1 sample variance unavailable. Theoretical expectation/SE/bias differ from finite simulation summaries.
- Histogram bars encode relative frequency. Saved samples occupy a separate rug strip; dot height only separates cases and never encodes probability. Exact weighted enumeration up to20,000 ordered samples has paginated values, product probabilities and contributions.
- Teacher stages reveal actual workspaces; worked hiding covers feedback, live region and calculated geometry without changing observations/RNG. A separate fixed-truth control hides the parameter without changing it. Essential projection labels enlarged; actual1920×1080 stage screenshots exist. Physical classroom distance remains untested.
- CLT raw means or Z from the same samples; finite variance/IID conditions; Normal approximation bin probabilities distinguished from simulation. Fixed Z window[-4,4] explicitly reports retained out-of-window cases. Standardization does not make an arbitrary distribution Normal.
- CI knownσ90/95/99%, fixedμ/random endpoints, touch/keyboard/text interval inspection, same-data confidence comparisons. Non-Normal coverage approximate. Transfer tests fixed-interval interpretation and finite-coverage fluctuation. Zero-variance fixtures produce point intervals; Z unavailable.
- Correlation dragging, keyboard and lossless numeric editing; Pearson, Spearman average ranks/ties, response-on-x regression, outlier, monotone squaring, U-shaped dependence, undefined constants and explicit extrapolation. Official Pearson IAL critical-table route includes one-/two-tail mapping, directional decisions, inclusive four-decimal table comparison, unavailable/dashed entries and model conditions. Tied Spearman stays descriptive. Synthetic edited points are illustrative, not scientific random-sample evidence.
- Conditional pair permutations999, seeded `(b+1)/(B+1)`, Monte Carlo uncertainty and distinct independence null: enrichment, separate from table inference.
- One-/two-independent-mean z UI: Normal knownσ, knownσ CLT or explicitly confirmed large-sample estimated-s route. No universal n30 or t fallback. Inputs are SDs, engine receives variances. Null hypotheses, signed z, null distribution, critical tails, p-value, non-rejection and two-sided CI are linked. Synthetic repeated-reference summaries show varying decisions; estimated-SD repetition is explicitly a fixed-plug-in approximation.

## Architecture

`statistics.js`: validated seeded card model, estimators, exact sampling, correlations. `app.js`: A/CLT/CI state and navigation. `correlation.js` and `correlation-tables.js`: relationship lab and sourced table lookup. `inference.js`: parent-coordinated pure Normal/discrete/chi-square engine. `mean-lab.js`: separate summary inference state. `lab-ui.js` and `visibility.js`: shared rendering/visibility. Static build copies all modules. Original production routes, homepage, screen resources and deployment configuration are untouched.

## Evidence and limits

Checkpoint3 developer evidence:48 unit/oracle/domain test groups;11 baseline browser flows,13 previous regressions,14 new actual Chromium checks against built output. Results/timestamps and desktop/phone/Teacher PNGs are in `evidence/`. These are developer checks, not independent learning approval.

Independent reports are preserved in `docs/reviews/`. Phase2 actual independent Chromium reported7/8 simulated novice tasks basically passing and Teacher hiding failing; those failures drive this checkpoint. Another reviewer's original0/8 BLOCKED browser report stays unchanged. No real students participated, no measured novice30-second outcome or weighted learning score is claimed.

The pure inference engine's original M1–M3 failures were independently rechecked as fixed at7e45fa8. The high-count/extreme-alpha contingency P2 repair from8f088 is now integrated and developer-tested, with independent re-review pending. The adjacent-confidence1ulp P3 remains documented; this checkpoint has no chi-square UI. Do not call the engine full-domain approved.

D discrete-test UI, E chi-square UI, sampling-methods and full probability/distribution workbench remain absent. Some official correlation table rows/cells are intentionally unimplemented and identified as such. Card populations are discrete; no Normal source-population simulator yet. Repeated estimated-SD references do not simulate random SD estimation. See official coverage matrix, review loop, numeric contract, actual development log, and `docs/classroom-guide-aurora-v2.md` for the18-minute A lesson.

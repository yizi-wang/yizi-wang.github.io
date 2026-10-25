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

## Working features at checkpoint5

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

`statistics.js`: validated seeded card model, estimators, exact sampling, correlations. `app.js`: A/CLT/CI state and navigation. `correlation.js` and `correlation-tables.js`: relationship lab and sourced table lookup. `inference.js`: parent-coordinated pure Normal/discrete/chi-square engine. `mean-lab.js`: separate summary inference state. `discrete-lab.js` and `chi-square-lab.js`: isolated D/E state; `categorical-model.js`: original-data-preserving grouping and fixed-margin sampling. `sampling-design.js`: independently reviewed finite-frame/Normal algebra; `sampling-design-lab.js` and `normal-combination-lab.js`: separate F interfaces. `lab-ui.js` and `visibility.js`: shared rendering/visibility. Static build copies all modules. Original production routes, homepage, screen resources and deployment configuration are untouched.

## Evidence and limits

Checkpoint5 developer evidence:71 unit/oracle/domain test groups;11 baseline browser flows,13 previous regressions,24 D/E and21 F/P1 actual Chromium checks against built output. Results/timestamps and desktop/phone/Teacher PNGs are in `evidence/`. These are developer checks, not independent learning approval.

Independent reports are preserved in `docs/reviews/`. Phase2 actual independent Chromium reported7/8 simulated novice tasks basically passing and Teacher hiding failing; those failures drove checkpoint3. Phase3 actual built-output review closed S2-01–04. Phase4 independent browser review closed the subsequent mobile card clipping, paused Mean single-step and Teacher trace-target repairs; its new GOF preservation P1 and the separate mathematical calibration P1 drive checkpoint5. Another reviewer's original0/8 BLOCKED browser report stays unchanged. No real students participated, no measured novice30-second outcome or weighted learning score is claimed.

The pure inference engine's original M1–M3 failures were independently rechecked as fixed at7e45fa8. The high-count/extreme-alpha contingency P2 repair from8f088 is integrated and independently rechecked in17,795 API calls, including3498 exact-reference tables. This is finite mathematical evidence, not UI approval. The adjacent-confidence1ulp P3 remains documented; D/E interface review is separate. Do not call the engine full-domain approved.

D discrete-test and E partial chi-square UI now work as described below. The finite-population sampling-design and independent Normal-combination labs now work; the full probability/distribution workbench remains absent. Some official correlation table rows/cells are intentionally unimplemented and identified as such. Card populations are discrete; no Normal source-population simulator yet. Repeated estimated-SD references do not simulate random SD estimation. See official coverage matrix, review loop, numeric contract, actual development log, and `docs/classroom-guide-aurora-v3.md` for the18-minute A lesson.

## Checkpoint5 additions and boundaries

D: exact Binomial/Poisson null PMFs, pre-chosen tails/α, inclusive observed count and critical region, nominal versus actual rejection probability, distinct generating truth, seeded repetitions/single-step/pause, source binary trials and decision inspection. TypeI/II/power are enrichment; β wording checks the chosen alternative direction. Positive tail underflow is labelled, distinct from impossible degenerate observations. n≤200 andPoissonλ≤30 in this display; explicit overflow window. Capacity2000.

E: live original counts, margins, E/contributions/χ²/df; lowE suppressesp/decision. Explicit meaningful adjacent whole-row/column/category grouping preserves originals and aggregates O/E together. Uniform, specified probabilities and Binomial(3,p) GOF; optionalp fitting on the unpooled original four classes withq1 anddf check. Combining this raw-data fit with actual pooling is explicitly unsupported for standard χ² inference: descriptive counts/statistic remain, p/reject/reference df withheld. Invalid probabilities never normalized. Double-counts action illustrates significance versus magnitude. Conditional fixed-margin label shuffles are separately labelled Monte Carlo, with(b+1)/(R+1), resolution/error, N≤500, capacity2000. No exact multinomial GOF, general Normal/Poisson/continuous-uniform GOF UI or arbitrary table dimensions yet.

D/E have dedicated Teacher projection focus and actual1920×1080 result bounds/screenshots. Phone raw-card clipping, Mean paused-step controls and Teacher stage3 trace target were independently regressed successfully at dbe9351. New checkpoint5 F interfaces and the two GOF P1 repairs await independent review; previous S2-01–04 and VP tested routes were independently closed at7baa7fd. No real student observations, physical projector or screen-reader trial. F pure module658f005 is now integrated unchanged, with two separate interfaces described below.


## Finite-frame and Normal-combination labs

F finite sampling:12 invented distinct units, no replacement within a sample, restored before every new draw. SRS, proportional stratification, uniform-random-start systematic and one deterministic quota-convenience mechanism use the reviewed engine. Unit identities/values and sampled marks persist; recalled dots return their original units. Population weights remainNₕ/N after integer quota rounding; omitted strata yield no full-target estimate/SE. Periodic versus balanced ordering changes systematic variance here while retaining design-unbiasedness. Convenience ranking reversal gives errors−10/+10; constant targets give0, without a universal quota-bias claim or a probability SE. TheoreticalSE uses the complete known fictional finite population, with FPC algebra as optional supplementary support. Seeded probability repetitions capped1000; deterministic quota has no random batch/seed action. Census,constant and n1 cases handled. Teacher focus has actual desktop/phone screenshots; physical projection still untested.

Independent Normal tool: two distinct IDs, explicit Normality/independence, editable coefficients/means/variances/constant. Negative coefficients preserve nonnegative squared variance contributions; sign flip shows before/current curves on common axes. Repeated IDs blocked; same parameters with different IDs allowed under explicit independence. Zero total variance is a point mass, tiny positive variance stays Normal with numeric precision/resolution labels. This bounded two-variable interface does not handle covariance or non-Normal distribution inference.

Stage4 independent review found two P1s: GOF null change overwrote O, and raw-data fittedp followed by pooling used an invalid standard χ² calibration. Current developer regressions preserve O across same-context null changes and withhold unsupported fitted+pooled inference in both operation orders. New model examples require an explicit Load example counts action. These P1 repairs await independent recheck; earlier PASS arithmetic did not approve calibration. Full reports and corrections are preserved in docs/reviews and REVIEW-LOOP.md. No new feature breadth is planned after this checkpoint; prioritize independent review and delivery verification.

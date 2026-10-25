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

## Current working features

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

Current developer evidence:71 unit/oracle/domain test groups;11 baseline browser flows,13 previous regressions,24 D/E and21 F/P1 actual Chromium checks against built output. Results/timestamps and desktop/phone/Teacher PNGs are in `evidence/`. These are developer checks, not independent learning approval.

Independent reports are preserved in `docs/reviews/`. Phase2 actual independent Chromium reported7/8 simulated novice tasks basically passing and Teacher hiding failing; those failures drove checkpoint3. Phase3 actual built-output review closed S2-01–04. Phase4 independent browser review closed the subsequent mobile card clipping, paused Mean single-step and Teacher trace-target repairs; its new GOF preservation P1 and the separate mathematical calibration P1 drive checkpoint5. Another reviewer's original0/8 BLOCKED browser report stays unchanged. No real students participated, no measured novice30-second outcome or weighted learning score is claimed.

The pure inference engine's original M1–M3 failures were independently rechecked as fixed at7e45fa8. The high-count/extreme-alpha contingency P2 repair from8f088 is integrated and independently rechecked in17,795 API calls, including3498 exact-reference tables. This is finite mathematical evidence, not UI approval. The adjacent-confidence1ulp P3 remains documented; D/E interface review is separate. Do not call the engine full-domain approved.

D discrete-test and E partial chi-square UI now work as described below. The finite-population sampling-design and independent Normal-combination labs now work; the full probability/distribution workbench remains absent. Some official correlation table rows/cells are intentionally unimplemented and identified as such. Card populations are discrete; no Normal source-population simulator yet. Repeated estimated-SD references do not simulate random SD estimation. See official coverage matrix, review loop, numeric contract, actual development log, and `guide.html` and canonical `docs/CLASSROOM-GUIDE.md` for the18-minute A lesson.

## Checkpoint5 additions and boundaries

D: exact Binomial/Poisson null PMFs, pre-chosen tails/α, inclusive observed count and critical region, nominal versus actual rejection probability, distinct generating truth, seeded repetitions/single-step/pause, source binary trials and decision inspection. TypeI/II/power are enrichment; β wording checks the chosen alternative direction. Positive tail underflow is labelled, distinct from impossible degenerate observations. n≤200 andPoissonλ≤30 in this display; explicit overflow window. Capacity2000.

E: live original counts, margins, E/contributions/χ²/df; lowE suppressesp/decision. Explicit meaningful adjacent whole-row/column/category grouping preserves originals and aggregates O/E together. Uniform, specified probabilities and Binomial(3,p) GOF; optionalp fitting on the unpooled original four classes withq1 anddf check. Combining this raw-data fit with actual pooling is explicitly unsupported for standard χ² inference: descriptive counts/statistic remain, p/reject/reference df withheld. Invalid probabilities never normalized. Double-counts action illustrates significance versus magnitude. Conditional fixed-margin label shuffles are separately labelled Monte Carlo, with(b+1)/(R+1), resolution/error, N≤500, capacity2000. No exact multinomial GOF, general Normal/Poisson/continuous-uniform GOF UI or arbitrary table dimensions yet.

D/E have dedicated Teacher projection focus and actual1920×1080 result bounds/screenshots. Phone raw-card clipping, Mean paused-step controls and Teacher stage3 trace target were independently regressed successfully at dbe9351. Checkpoint5 F interfaces and both GOF P1 repairs passed independent mathematical/event and actual-browser review at94d0b8d; later presentation/PDF patches have their own regression and review status; previous S2-01–04 and VP tested routes were independently closed at7baa7fd. No real student observations, physical projector or screen-reader trial. F pure module658f005 is now integrated unchanged, with two separate interfaces described below.


## Finite-frame and Normal-combination labs

F finite sampling:12 invented distinct units, no replacement within a sample, restored before every new draw. SRS, proportional stratification, uniform-random-start systematic and one deterministic quota-convenience mechanism use the reviewed engine. Unit identities/values and sampled marks persist; recalled dots return their original units. Population weights remainNₕ/N after integer quota rounding; omitted strata yield no full-target estimate/SE. Periodic versus balanced ordering changes systematic variance here while retaining design-unbiasedness. Convenience ranking reversal gives errors−10/+10; constant targets give0, without a universal quota-bias claim or a probability SE. TheoreticalSE uses the complete known fictional finite population, with FPC algebra as optional supplementary support. Seeded probability repetitions capped1000; deterministic quota has no random batch/seed action. Census,constant and n1 cases handled. Teacher focus has actual desktop/phone screenshots; physical projection still untested.

Independent Normal tool: two distinct IDs, explicit Normality/independence, editable coefficients/means/variances/constant. Negative coefficients preserve nonnegative squared variance contributions; sign flip shows before/current curves on common axes. Repeated IDs blocked; same parameters with different IDs allowed under explicit independence. Zero total variance is a point mass, tiny positive variance stays Normal with numeric precision/resolution labels. This bounded two-variable interface does not handle covariance or non-Normal distribution inference.

Stage4 independent review found two P1s: GOF null change overwrote O, and raw-data fittedp followed by pooling used an invalid standard χ² calibration. Current developer regressions preserve O across same-context null changes and withhold unsupported fitted+pooled inference in both operation orders. Within the same semantic dataset, changing H₀ preserves observations; Load example counts explicitly replaces them with an example. Changing semantic context restores or initializes its separately stored dataset with a notice. These P1 repairs passed the independent94d0b8d mathematics/event-bridge recheck; actual-browser recheck also passed at94d0b8d; the new comparison-label repair awaits spot-check; earlier PASS arithmetic did not approve calibration. Full reports and corrections are preserved in docs/reviews and REVIEW-LOOP.md. No new feature breadth is planned after this checkpoint; prioritize independent review and delivery verification.

## Offline use and classroom handouts

Unzip a complete static delivery into one folder. Python3 is the only prerequisite for the optional local launcher:

```bash
python start.py
# On some systems: python3 start.py
# If4173 is already in use:
python start.py --port 4175
```

Open the printed `http://127.0.0.1:4173/` URL and keep the terminal open. Ctrl+C stops only that local server. It binds to loopback, not a public network interface. No package install, account, internet connection or backend is required to operate the labs. Alternatively, from the unzipped folder run `python -m http.server 4173 --bind 127.0.0.1`. Direct double-clicking `index.html` is not the supported launch path because browsers restrict local ES-module imports. An existing static host can serve `dist/` as-is.

`guide.html` is the printable18-minute teacher route plus six original transfer questions. Teacher notes start closed. **Print student questions** excludes teacher answers; **Print teacher script** explicitly includes them. Exported PDFs are also provided in the handoff. `scope.html` is the current official coverage/conditions page; `docs/CURRICULUM-STATUS.md` and its JSON are the current status map. Earlier checkpoint deltas are retained only in `docs/archive/COVERAGE-CHECKPOINT-HISTORY.md`, not as current approval.

Seeds reproduce a declared model and action stream, not every arbitrary ordering of controls. Card n/model/rule changes reset incompatible history. In the finite-frame lab each saved replication uses `base|method|r`; its12 units are restored between samples, with no duplicate ID within a sample. The quota example is deterministic and has no random seed/batch effect. Recall/hide/Teacher changes do not consume a new draw. Reset returns the declared reproducible start; changing the seed changes the pseudo-random stream while leaving model parameters fixed. Other modules disclose their own seed/reset semantics beside their controls.

All observations and identities are invented. No payment, paid draw, owned collection, student record, analytics, account or observation upload is implemented. Fonts use local system fallbacks, so runtime assets make no external requests; official source links open external Pearson pages only if selected. A private hosting platform may have its own access/login controls. A successful deployment is not a claim that the owner logged in and tested it or that a physical classroom was validated.

Developer browser checks require the repository's installed Playwright and Chromium; these are QA dependencies, not runtime dependencies. The standalone static/source bundle does not silently install them. `npm test` uses Node's built-in test runner; `npm run build` creates the deployable static folder.

## Global delivery verification

Checkpoint6 adds8 actual built-browser workflow groups and36 lab/viewport scans (320/390/1440/1920), keyboard skip/modal/current-lab checks, the actual seeded Teacher route including exact Page1/Page3, external-network-blocked operation, and student/teacher PDF answer isolation. All passed; this is not a WCAG certification or student study. Source/dist closure, original root289-page build and71 numerical groups pass. Exact local timings and review scopes remain in evidence/ and docs/reviews/.

To package a clean committed checkout, run `npm run build`, then `python scripts/package-delivery.py --label checkpoint6 --output ../statverse-delivery`. It creates exact-source+static, standalone static and clearly labelled developer-screenshot ZIPs with commit IDs and SHA256 manifests. The full source retains historical failure evidence; the featured screenshot set excludes those failure images. Independent screenshot archives are separately attributed by the coordinator.

Current presentation refinements leave the mathematics unchanged: fitted-and-pooled GOF keeps Withheld/Not calibrated in its first layer, with advanced calibration details in an optional disclosure; phone stratum/comparison row labels remain visible during horizontal scrolling, and the observed weighted calculation uses exact population-count fractions with rounded display means explicitly marked. The canonical lesson is guide.html / docs/CLASSROOM-GUIDE.md; older named guides are superseded historical records. Exported teacher/student PDFs include identity and page/total footers.

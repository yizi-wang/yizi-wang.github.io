# STATVERSE Phase 2 — independent visual and pedagogy review

Reviewed 2026-10-25 UTC. Target commit: `6797009a27c6bd5a66865d6ca47d89d51fabe3af`.

## Evidence and limits

This reviewer directly inspected six original Chromium PNGs materialized through the Library's official transfer workflow. Images: Desktop1440×900, Mobile CI390×844, Teacher1920×1080, Mobile navigation390×844, Teacher hidden answers, stale n=1 exact state. Local evidence in the reviewer's environment: `/workspace/scratch/2bb7ef4e55c7/statverse-pedagogy-images/`. Source report: Library `libfile_9106a74025bc8191aea1ac24d581b1cf` (`STATVERSE-PHASE2-INDEPENDENT-REVIEW-6797009.md`). Screenshot Library references supplied by coordinator are retained in that report/delivery context.

**Direct evidence:** rendered layouts, visible wording, charts and numerical labels in those images. **Secondary operational evidence:** the separate independent Chromium review's reported interactions and numerical tests. **Not performed by this reviewer:** a new live-browser session, real student research, projection-distance trial or screen-reader trial. Findings about likely novice confusion are explicitly simulated novice judgments, not observed student outcomes. No claim of a measured30-second learning outcome.

## Overall decision

The flagship now has genuine instructional substance: visible probability-weighted cards, a real observed sample, a distinct observed estimate, repeated-sample collection, and recoverable source samples. It is substantially more than a step-by-step animation. Original, restrained card visuals make the numerical objects memorable without pay-to-play distractions. Preserve this work; do not expand breadth at the expense of finishing the meaning of the chart and first-use sequence.

Conditional classroom readiness only: the four separately reported defects already assigned to development must be fixed and retested; the plotted-point vertical semantics below should be resolved before classroom use. The available evidence does **not** justify a numerical overall score or unconditional sign-off. The original weighted rubric remains appropriate, but untested dimensions must not earn invented points.

## New prioritized findings

### VP-01 · P1 · Point heights appear to have frequency meaning, but their semantics are unclear

**Evidence:** Teacher screenshot has R=1 and a single sample-mean point at approximately halfway up a chart labeled `RELATIVE FREQUENCY PER BIN`; y-axis labels run0%,38%,77%,115%. Desktop R=2 has two points at a lower height. The point's x value is meaningful, but the image provides no explanation of its vertical position. This observation alone does not establish a numerical implementation defect; it establishes an ambiguity requiring implementation confirmation.

**Educational risk:** the student reads one sample point's vertical position as its probability or thinks a mean of11.6 occurs with approximately50% frequency. That obscures the core distinction between an individual outcome and a sampling distribution. The first point is exactly where learners form their model of the display.

**Fix:** separate an individual-sample rug/stack strip from a frequency histogram. Use no probability axis for arbitrary point placement; label “one dot = one whole sample; horizontal position = its mean”. If the intended design is stacked relative frequencies, make heights and aggregation literally match the frequency scale and communicate overlap. Keep the selected point→original cards link. Consider y-axis maximum at100% when meaningful rather than115% visually implying a possible probability above1.

**Regression:** R=1,2, repeated identical means and R=200; explain each point's x/y meanings without referring to source code. Histogram bin counts sum to R and normalized heights match labels. Selecting a point must still recover its exact source sample.

**State:** proposed; no app changes or regression by this reviewer.

### VP-02 · P1 · First question is ahead of the first experience on mobile

**Evidence:** Mobile navigation image's first844px contains navigation, hero, `Draw a sample ↘`, a full prediction asking what increasing n does to spread of sample means, pool controls and five cards. The actual sample panel only starts at the lower edge. Before drawing, students are asked about a distribution of a statistic they have not yet encountered. A possible jump link is visible, but its behavior is not established by the screenshot.

**Risk:** a medium-attainment first-time learner guesses a remembered rule rather than discovering what n, a sample mean or repeated sampling mean. The visual entry does not itself establish the target30-second insight.

**Fix:** first challenge should be concrete: “If we draw three cards again, what stays fixed and what can change?” Show one primary Draw action, n=3, the three cards and their one computed mean together. After two draws and point tracing, unlock the current n-versus-spread question. On mobile collapse nonessential hero/settings; retain a compact population μ → current x̄ → R strip while scrolling. Do not hide probabilities permanently.

**Regression:** simulated first-use protocol: without instructions, identify the first action, draw once, point to the three raw values and their one mean, draw again and state one fixed and one changing object. Record timed completion only in a genuine future observed session, not from automated click speed.

**State:** proposed.

### VP-03 · P2 · The fixed parameter is visually subordinate to the observed estimate

**Evidence:** sample estimate is large and salient, whereas `μ = 5.3` is a small line at the lower-right of the population panel. Theoretical `E(T) = 5.3` appears in a different panel beside simulation mean and SE. Estimator selection/formula is separate from the main sample cards. A novice must infer that two5.3 labels denote related but different concepts.

**Fix:** show a small, persistent semantic chain: `Fixed population mean μ = 5.3` → `Rule before sampling: X̄ = mean of n draws` → `This sample's observed x̄ = 16.667`. After repeat, add `Each sample gives one point`. On reveal, show `E(X̄) = μ` and explain it averages over possible samples, not over the cards within the current sample. Use color consistently but not as the only distinction. Defer bias and SE until their actual question.

**Regression:** learners can answer “which one exists before the draw?”, “which changes next time?”, and “is16.667 an estimator or its observed estimate?” from the screen; hidden truth must not leak into the chain.

**State:** proposed.

### VP-04 · P2 · Teacher mode fits the viewport but does not yet prove classroom legibility

**Evidence:** Teacher stage4 screenshot uses a centered content width of about1344px in a1920px frame, leaving about288px on each side. Main panels fit vertically. Population probability labels, μ line, chart legend and formula remain substantially smaller than headings and values. Other teacher screenshot in the all-content state has the sample region beginning around y=810 and continuing offscreen.

**Fix:** a genuine stage-focused projection layout: reduce global nav and settings prominence, increase usable width, enlarge the fixed μ, rule, observed x̄ and one-point link together. Use a practical proposed target of roughly18–20px for essential teaching labels at this viewport; exact suitability must be tested at the actual classroom viewing distance. Show only the current question plus the mathematical objects needed to answer it. Preserve student mode's richer controls.

**Regression:**1920×1080 stage1–4 screenshots with no essential target relation clipped; teacher can reveal next stage without losing the current sample. A classroom projector/readability check remains outstanding even after browser success.

**State:** proposed.

### VP-05 · P2 · CI explanation includes a distracting bias result and a weak transfer task

**Evidence:** Mobile CI screenshot shows nominal99%, empirical48/50=96%, and an inspectable interval; these are useful. Below coverage explanation it shows `THEORETICAL BIAS 0 · E(X̄)−μ`. Transfer asks whether collecting1000 rather than200 samples changes theoretical SE. That reinforces n/R, but does not test the central CI misconception.

**Risk:** zero bias may be taken as a guarantee of correct interval coverage, especially for small-n nonnormal approximation. A learner can complete the module without demonstrating the fixed-parameter/random-interval interpretation.

**Fix:** remove/defer the bias card here; replace transfer with “For this already computed interval, does99% mean μ has99% probability of lying inside it? Explain.” Expected answer: in this frequentist setup μ is fixed; the method covers it in approximately99% of repeated samples under stated conditions, and this realised interval either covers or misses. Add a second choice: “Must exactly99 of100 intervals cover?” No. Keep explicit distinction between theoretical/nominal and finite Monte Carlo coverage. Preserve persistent mobile interval inspection.

**Regression:** nominal level changes update all copy (already assigned separately); zero-variance and nonnormal cases retain appropriate caveats; correct feedback does not equate empirical coverage with guaranteed frequency.

**State:** proposed.

### VP-06 · P3 · Small unresolved-looking symbols distract from controls

**Evidence:** several screenshot controls end with small box-like glyphs, e.g. `Why?`, source-point link, navigation and some teacher controls. This is visible, but whether these are missing-font glyphs or intentional symbols was not inspected.

**Fix:** use reliable inline SVG or text for action icons; meaningful accessible labels. Avoid icon-only pause/replay where the symbol is ambiguous.

**Regression:** same desktop/mobile screenshots in target fonts, keyboard focus and accessible name checks.

**State:** proposed.

## Do not duplicate ongoing fixes

The separate reviewer already reported, and the developer is repairing: teacher hide feedback/ARIA/regression leaks; n=2 variance exact outcomes retained after n=1 invalidity; displayed x rounding written back by a y-only correlation edit; CI body hardcoded95% after selecting99%. This report does not claim those fixed. Require the corresponding commit and explicit regression evidence before closing them.

## Simulated novice task register — actual evidence scope

|Task|Evidence-based judgment|Remaining gap|
|---|---|---|
|N1 Draw and explain what changed|Actual mobile screenshot suggests pre-experiment overload (VP-02); draw works according to independent browser report|No real novice timing or learning observation|
|N2 Trace one mean back to cards|Visible Find sample#1's point and Revisit sample; independent report supports persistent traceability|Point y semantics need clarification VP-01|
|N3 Estimator vs observed estimate|Observed estimate label and formula exist; semantic hierarchy can improve VP-03|No demonstrated learner distinction|
|N4 n vs R|Independent report: n clears cohort; R cap respected; prediction wording updates|Question should follow first sample, not precede it|
|N5 Hide truth / classroom question|Separate reviewer found actual leakage|Must retest fixed commit, including ARIA|
|N6 Exact enumeration|Report verifies25 weighted ordered cases at n=2, weighted expectation5.3|Known n=1 stale state requires fix; exact table should be progressive disclosure|
|N7 CLT|Independent report verifies standardization preserves samples and out-of-window counts|No directly inspected CLT screenshot in this packet; no visual sign-off|
|N8 CI interpretation|Actual mobile screenshot has persistent interval details and nominal/observed difference|Transfer and bias hierarchy VP-05; known copy fix|
|N9 Correlation and ranks|Independent report verifies dragging, touch, ties, permutations and numerical examples|No direct correlation screenshot inspected; no visual sign-off|
|N10 Contingency independence|No implemented UI evidence in packet|Not tested; do not count as delivered or reviewed|

## Scope and next closure

Prioritize VP-01 and VP-02 plus the already assigned correctness fixes before adding more modules. Current evidence supports an engaging flagship and useful linked CLT/CI/correlation work, not complete S3 coverage. For closure record: issue → commit/file change → before/after screenshot or numerical assertion → independent regression. A developer explanation alone is not closure. Revised18-minute lesson uses the real Aurora model and is saved as `classroom-guide-aurora-v2.md`; it supersedes the earlier hypothetical-pool skeleton.

## Local preservation note

Coordinator supplied this report as text. The original screenshot materialization happened in the independent review environment, not in this developer environment. Historical proposed states above remain unchanged; developer accept/defer decisions and regression belong in REVIEW-LOOP.md.

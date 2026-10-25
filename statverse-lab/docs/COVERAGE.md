# Implemented coverage — checkpoint 1

Authority: official Pearson IAL specification in CURRICULUM-MATH-REQUIREMENTS.md. No other exam board is used. Status is implementation status, not independent approval.

| Module | Official reference | Current status | Boundary |
|---|---|---|---|
|A: fixed population, iid sample, statistic, distribution|S2.3§4.1–4.2 p59|Implemented; developer unit/browser checks|Sampling frame/census not interactive|
|A: mean, first value, shifted mean, bias, SE|S3.3§3.1–3.2 p61|Implemented; numerical exact checks|First/shift rules teaching examples|
|A: variance n−1 versus n|S3 estimation, prerequisite moments|Implemented; n1 undefined|No claim sqrt(S²) unbiased|
|A: exact ordered sample enumeration|Teaching realization|Implemented, weighted; cap20,000|Extension as technique, core sampling concept|
|B: CLT|S3.3§3.5–3.6 p61|Partial: mean distribution+Normal overlay|No standardization control/Normal population yet|
|B: repeated CI coverage|S3.3§3.3 p61 interpretation|Partial:95% knownσ intervals, nonnormal approximation|No unknownσ/confidence slider yet|
|B/D: one/two-mean tests|S3.3§3.4,3.6–3.8 pp61–62|Absent|Next priority after flagship review|
|C: correlation/regression/significance|S1.3§4 p56;S3.3§5 p62|Absent UI; basic engine helpers only|Ties exploration must be labelled extension|
|D: binomial/Poisson tests|S2.3§4.3–4.6 p59|Absent|TypeI/II,pvalue,power enrichment requested|
|E: GOF/contingency|S3.3§4 p62|Absent UI; expected-count helper only|GOF models/pooling not implemented|
|F: sampling methods|S3.3§2 p61|Absent|Large sample does not remove bias|
|F: independent Normal combinations|S3.3§1 p61|Absent|Variances add under independence|
|F: PMF/CDF, distributions, PDF|S1.3§5–6 p56;S2.3§1–3 p58|Card PMF/moments only|Full distribution workbench absent|
|F: displays/skew/outliers|S1.3§2 p55|Partial empirical histogram-style dots|No unequal-bin histogram lesson|

Core inference plan: Normal z, known variance or explicit large-sample substitution; no t default. No blanket n≥30 guarantee. No claim of whole S1–S3 completion.

## Checkpoint2 delta

|Area|Updated implementation|Still incomplete / scope boundary|
|---|---|---|
|A S2 sampling/S3 estimation|Visible sample compression; reduced-motion equivalent; rule-bound predictions; exact ordered rows/weights/contributions; genuine teacher reveal/answers/pause|Independent learning/first30seconds validation pending|
|B S3 CLT|Raw or standardized mean distributions; same samples; theoretical Z mean0/SD1; fixed-window overflow counts|No Normal source-population switch; card populations remain discrete/nonnormal|
|B S3 CI|Knownσ90/95/99% levels, same-sample comparison; numeric/keyboard/touch interval details; fixedμ interpretation|Unknownσ large-sample option and mean-test UI absent; these nonnormal intervals approximate|
|C S1 regression/PMCC, S3 ranks|Interactive scatter, values/ranks, ties averages, response-on-x line, outlier, monotone transform, extrapolation, U-shape/undefined states|Supplied critical-table inference not implemented; numerical ties explicitly extension|
|C user-requested significance|Seeded999 conditional pair permutations with(b+1)/(B+1), MC error, stale-state invalidation|Enrichment; independence/exchangeability null distinct from generic zero correlation; no causal claim|
|D/E|No new UI in this checkpoint; separate parent-coordinated pure inference task|Do not claim tests/chi-square course coverage from the unused helper functions|

All statuses are developer implementation/testing status; independent classroom approval remains pending.

## Checkpoint3 delta — implementation, not independent approval

|Area/reference|Now working|Remaining boundary|
|---|---|---|
|A S2.3§4/S3.3§3.1–3.2|Default3-card discovery before distribution-spread question; linked fixed target/rule/estimate/R; literal frequency histogram plus separate traceable sample rug; invalid exact inspector cleared|No novice learning outcome or30-second timing measured|
|B S3.3§3.3|Confidence-specific copy, fixed-interval and finite-coverage transfer, bias card deferred|Card non-Normal intervals approximate; unknownσ repeated-coverage simulator absent|
|B/D S3.3§3.4,3.6–3.8|One/two independent mean z UI; known Normal σ exact, knownσ CLT and estimated-s large-sample routes gated by conditions|No paired/t method; no automatic adequacy threshold. Estimated-s repetition uses fixed plug-in Normal reference, not random s simulation|
|C S3.3§5|Official IAL Formula Book printedp27 tables; signed direction and total-alpha mapping; equality/table rounding; model confirmation; ties/constant/missing gates|Subset of cells transcribed; missing official versus unimplemented distinguished; no exact p inferred from table|
|D S2.3§4.3–4.6|Pure reviewed discrete engine integrated only; mean-reference repeated rejection interaction available as enrichment|Binomial/Poisson UI absent; engine functions alone do not establish classroom coverage|
|E S3.3§4|Pure engine integrated, original E5 defect fixed and independently rechecked|No UI/pooling yet; high-count extreme-alpha engine P2 pending external owner fix|
|Teacher/classroom|18-minute actual Aurora guide,18px chain labels, wide focused stages; hidden feedback/ARIA/geometry repaired and developer browser tested|Independent stage3 recheck and actual projection-distance/screen-reader tests pending|

All earlier checkpoint rows remain historical implementation snapshots. This delta supersedes their current-feature statements; none implies complete S1–S3 coverage.

18:07UTC follow-up: inference owner8f088 high-count residual repair is integrated and developer-regressed; independent re-review pending. Chi-square UI remains absent. P3 adjacent-confidence1ulp limitation remains documented.

## Checkpoint4 delta — actual D/E interfaces

|Official item|Implemented now|Honest remaining scope|
|---|---|---|
|S2.3§4.3–4.6 p59|Binomial/Poisson H₀/H₁, signed tails, exact null PMF, inclusive critical regions, nominal/actualα, observation and repeated fixed-rule decisions|No discrete Normal-approximation comparison UI; display n≤200,Poissonλ≤30|
|S3.3§4 p62 independence|Live2×2/2×3/3×3 original counts, margins,E/contributions/χ²/df; E<5 blocks asymptoticp/decision; meaningful whole row/column merges|Preset-sized tables; no arbitrary dimension editor; random-sampling assumptions still needed|
|S3.3§4 p62 fit|Four-category uniform/specified probabilities and Binomial(3,p); fittingp from same original counts subtractsq1 after pooling|Poisson,Normal,continuous-uniform GOF UI absent; no arbitrary fitted-q knob or exact multinomial test|
|Interpretive enrichment|TypeI/II/power with explicit truth/direction; fixed-margin conditional shuffles separate from asymptotic law; Monte Carlo(b+1)/(R+1)/resolution/SE|Not additional compulsory syllabus topics; finite PRNG simulation is not an exact enumerated null|
|Teacher/access|D/E focused model/result/repeat views, same maths/data, worked concealment, keyboard inputs and real desktop/phone PNGs|Physical projection/SR/real students absent; stage4 independent implementation review pending|
|F|Separate658f005 pure module independently reviewed; report saved|Not imported, no F UI delivered in this checkpoint|

Inference8f088 R1/M1–M3 sampled contracts independently passed; one-ulpCI and tinyTypeII complement limitations remain. The interface states tinyβ numerical precision and positivep underflow. Do not count unimplemented GOF families or F functions as full coverage.

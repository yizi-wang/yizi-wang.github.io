# Current official coverage — implemented, partial, enrichment and absent

Implementation baseline: `94d0b8ded2cefe1091f237543adde7c0330ce888 (independently reviewed mathematical implementation; checkpoint6 adds documentation/access refinements)`.

Complete means the bounded interaction below is implemented, not that an entire unit or all possible exercises are complete. Independent review status is separate.

Official source: Pearson Edexcel IAL specification Issue3 April2019. S1p55–56, S2p58–59, S3p61–62; one-based PDF page = printed page+6. S3 assumes S1/S2. No other examination system defines this map. CLT is S3.3§3.6; one/two-mean tests span§3.5–3.8; a combined CI/inference row may cite§3.4–3.8.

|Official reference|Topic|Status|Labs|Delivered|Limit|
|---|---|---|---|---|---|
|S1.3§1 ·p55|Modelling|Partial|All labs|Synthetic model assumptions, fixed parameters and experimental limits are explicit.|Selected contexts, not a general modelling course.|
|S1.3§2 ·p55|Data display, location, dispersion, skew and outliers|Partial|—|Sample values and an outlier example support other labs.|No dedicated histogram-with-unequal-width, boxplot, skewness or data-summary workbench.|
|S1.3§3 ·p55|Probability, conditioning, independence and sampling|Partial|01 /08|Transparent weighted draws and distinct replacement/nonreplacement designs.|General conditional probability and conditional-independence scenarios absent.|
|S1.3§4 ·p56|PMCC and least-squares regression|Partial|04|Drag/keyboard/numeric pairs; Pearson, fitted y-on-x, prediction, outlier, extrapolation and zero-correlation counterexample.|Bounded synthetic data, no real-data upload; descriptive inference conditions remain separate.|
|S1.3§5 ·p56|Discrete variables, PMF/CDF and moments|Partial|01 /06|Weighted finite moments and Binomial/Poisson PMFs are calculated.|No general PMF/CDF editor or complete discrete-uniform lesson.|
|S1.3§6 ·p56|Normal probabilities|Partial|05 /09|Normal density, signed tails, quantiles and stated Normal models.|No general arbitrary-event Normal calculator or source-population simulator.|
|S2.3§1 ·p58|Binomial/Poisson models and approximation|Partial|06 /07|Exact null laws and test tails; Binomial(3,p) GOF example.|Moments/approximation comparison and continuity correction UI absent.|
|S2.3§2 ·p58|Polynomial PDF/CDF, moments and quantiles|Not built|—|Not built.|No continuous PDF/CDF manipulation, area or quantile lesson.|
|S2.3§3 ·p58|Continuous uniform; Normal approximation and continuity correction|Not built|—|Not built.|No event-specific continuity-correction interaction.|
|S2.3§4.1 ·p59|Population, census, sample and frame|Partial|01 /08|Fixed card model and12 distinct finite-frame identities; census example at n12.|Bounded illustrative designs, not a complete survey-frame or advantages/disadvantages course.|
|S2.3§4.2 ·p59|Statistic and sampling distribution|Complete bounded interaction|01 /08|Fixed model→original sample→one statistic→repeated distribution, with original-case recall; census in finite-frame lab.|Two explicitly different sampling models. No full sampling-frame survey toolkit.|
|S2.3§4.3–4.6 ·p59|Hypotheses, critical regions, tails and discrete tests|Partial|06|Binomial and Poisson H0 laws, chosen H1/alpha, inclusive integer regions and observed decisions.|Bounded display n≤200, Poisson lambda≤30; tails can be evaluated outside the shown PMF window.|
|S3.3§1 ·p61|Independent Normal linear combinations|Complete bounded interaction|09|Distinct variable IDs, explicit model conditions, signed means, squared variance terms, sign-flip comparison and point mass.|Two variables; no covariance/related-variable model. Repeated IDs are rejected.|
|S3.3§2 ·p61|Random, stratified, systematic and quota sampling|Partial|08|Same12 identities under four explicit mechanisms; population weights, missing strata and ordering comparison.|Bounded finite frame; systematic n divides12. One deterministic convenience mechanism does not represent all quota implementations.|
|S3.3§3.1 ·p61|Estimator, bias and standard error|Complete bounded interaction|01|Rule versus realised estimate; mean/first/mean+2/variance rules; separate n/R, expectation/finite simulation, weighted exact cases.|Finite-variance IID with replacement in the card lab; n1 sample variance unavailable.|
|S3.3§3.2 ·p61|Distribution of the sample mean|Partial|01 /02 /05|Weighted discrete-source means, expectation/SE and analytic Normal mean references.|No original Normal source-population experiment; approximation conditions remain explicit.|
|S3.3§3.3–3.4 ·p61|Confidence intervals|Partial|03 /05|Known-sigma repeated intervals, confidence changes, fixed-parameter interpretation; mean UI also has stated large-sample estimated-s intervals.|Non-Normal small-n coverage approximate; estimated-s repeated reference fixes the plug-in s and does not resample its estimation.|
|S3.3§3.5–3.8 ·p61–62|Normal-mean tests|Complete bounded interaction|05|One-mean z, known variance, chosen tails and null-reference decision with stated conditions.|No small-sample Student t fallback. Synthetic summaries are an illustrative model.|
|S3.3§3.6,3.8 ·p61–62|CLT and large-sample inference|Partial|02 /05|Skewed finite-variance populations, raw/standardised mean views, independent n/R, SE and explicit approximation conditions.|No universal n30 guarantee; discrete source pools only. Unknown-sigma route requires explicit large-sample justification.|
|S3.3§3.7–3.8 ·p62|Two independent means|Complete bounded interaction|05|Difference of means, variance addition, known-sigma and stated large-sample estimated-s z routes.|Independent groups only; no paired design or Welch t interface.|
|S3.3§4 ·p62|Chi-square goodness of fit|Partial|07|Uniform/specified four-class probabilities and Binomial(3,p), original-data edits, E/contributions, meaningful pooling, fitted parameter accounting where supported.|Normal/Poisson/continuous-uniform GOF absent. Fitted Binomial inference uses only the original four unpooled classes. fit=true with any actual pooling is unsupported in either operation order: p/decision/referenceDF withheld, even if E≥5. df≤0 is rejected.|
|S3.3§4 ·p62|Chi-square independence|Complete bounded interaction|07|Editable preset-sized tables, margins/E/contributions/df, low-E gate and meaningful whole-row/column merges.|Requires sampling/model assumptions; asymptotic law is approximate. No arbitrary dimension editor or Yates correction.|
|S3.3§5 ·p62|Spearman and zero-correlation tests|Partial|04|Average ranks/ties; official-table method, tail mapping, signed direction,4dp boundary and conditions.|Verified subset of official rows/cells only. Ties descriptive; no ordinary no-ties table inference. Table threshold does not supply an exact observed p-value.|

## Explanatory enrichment / teaching support

- Repeated CI coverage (lab03): Fixed parameter, random intervals; finite observed coverage versus nominal. A teaching realization of CI interpretation.
- Exact ordered enumeration and sample provenance (lab01): Weighted possible samples and expectation contributions; teaching support, not an additional exam technique.
- TypeI/II, power, p-values and conditional randomization (lab04 /05 /06 /07): Explanatory enrichment requested by the user; not explicitly named specification clauses. Each method/null is separately labelled.
- Known finite-population designSE/FPC (lab08): Complete fictional frame permits exact design spread. This is not SE estimated from one sample and is supplementary support.
- Tied-rank numerical exploration (lab04): Average ranks are descriptive. Specification expects understanding ties but excludes numerical examination questions with ties.

## Validation is a separate axis

Checkpoint5 F mathematics and both GOF P1 event paths passed independent94d0b8d recheck; actual-browser approval remains pending. Earlier independent reports and developer checks remain separate in REVIEW-LOOP.md, not converted into real student outcomes. No real students, physical projection-distance or screen-reader speech trial. Retained numerical limits: adjacent confidence levels can change a CI critical value by1ulp nonmonotonically; tiny TypeII uses1−power with cancellation. Ordinary95% CI calculations are not claimed wrong.

Sources:
- https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf
- https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf (Issue2 Jan2021, correlation printedp27/PDF33)

## Historical checkpoints

Earlier checkpoint snapshots are retained in [the explicitly superseded archive](archive/COVERAGE-CHECKPOINT-HISTORY.md). In particular, raw four-class fittedp followed by pooling never had the claimed simple χ² reference; that historical method was invalid and is now explicitly withheld. This current first-page matrix replaces all historical Current status columns.

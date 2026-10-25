# Correlation critical-value-table contract

Independent research, 2026-10-25 17:24 UTC. No application implementation inspected or modified.

## Original public sources and evidence

1. [Pearson IAL Mathematical Formulae and Statistical Tables, Issue 2, January 2021](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf), printed p27 = PDF page33 (zero-based32). Official PDF downloaded; table text extracted AND rendered page visually checked. Local `official-formula-book.pdf`, `official-formula-book.txt`, `correlation-table-page27.png`.
2. [Pearson IAL specification, Issue3 April2019](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf), printed p62, S3.3 §5.1–5.2. Ties understanding expected, numerical ties questions excluded; use tables for both correlations.
3. [Pearson WST03 January2022 mark scheme, Q3](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Exam-materials/WST03_01_rms_20220303.pdf): n10 positive PMCC5% CV .5494; rs=.6363… two-tail5% CV .6485, do not reject; normal/bivariate-normal assumption accepted in Q3(c).
4. [Pearson January2022 examiner report, Q3(e)](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Exam-materials/wst03-01-pef-20220113.pdf) specifically discusses joint normality. Prefer precise bivariate-normal wording; separate marginal Normal distributions alone are not mathematically sufficient.

## Direct source facts (not guessed)

- Table tests population correlation zero, not arbitrary nonzero rho.
- Columns are ONE-TAILED probabilities. Their entries are minimum magnitudes that must be reached, so equality is included, not strict greater-than.
- Shared middle column is sample size n (number of pairs), despite unusual printed heading “Sample Level”. It is NOT n−2 degrees of freedom.
- Available n: every integer4–30, then40,50,60,70,80,90,100. Do not silently interpolate, round sample size, or substitute nearest row.
- PMCC one-tail columns: .10,.05,.025,.01,.005. Spearman: .05,.025,.01. Spearman n4 last two cells are dashes, NOT zero/one.

## Implementable table subset (visually verified four decimals)

PMCC column order `[.10,.05,.025,.01,.005]`:

```json
{"4":[0.8000,0.9000,0.9500,0.9800,0.9900],"5":[0.6870,0.8054,0.8783,0.9343,0.9587],"6":[0.6084,0.7293,0.8114,0.8822,0.9172],"8":[0.5067,0.6215,0.7067,0.7887,0.8343],"10":[0.4428,0.5494,0.6319,0.7155,0.7646],"12":[0.3981,0.4973,0.5760,0.6581,0.7079],"20":[0.2992,0.3783,0.4438,0.5155,0.5614],"30":[0.2407,0.3061,0.3610,0.4226,0.4629]}
```

Spearman column order `[.05,.025,.01]`:

```json
{"4":[1.0000,null,null],"5":[0.9000,1.0000,1.0000],"6":[0.8286,0.8857,0.9429],"8":[0.6429,0.7381,0.8333],"10":[0.5636,0.6485,0.7455],"12":[0.5035,0.5874,0.6783],"20":[0.3805,0.4466,0.5218],"30":[0.3063,0.3624,0.4251]}
```

Subset is intentionally not full table. Data lookup must know whether row not implemented vs absent in official table. Keep four decimals in displayed CV even when JSON strips zeros.

## Tail mapping and decision contract

Choose alternative before observing sample. H0:rho=0; H1:rho>0, rho<0, or rho≠0 (use rho_s for Spearman if desired, define it).

- Positive one-tail alpha: column alpha, compare signed r>=c.
- Negative one-tail alpha: column alpha, compare signed r<=−c.
- Two-tail total alpha: column alpha/2, compare |r|>=c.
- Never absolute-value a directional test without checking direction.
- PMCC two-tail5%→.025;1%→.005. Spearman two-tail5%→.025;2%→.01;10%→.05. Spearman two-tail1% has NO .005 column; report unavailable, not .01 column.
- Missing/dashed row-cell: disable official-table decision and explain. A separately labelled exact-permutation or continuous-theory extension is possible, never pass it off as a table entry.

### Precision boundary: must not create false non-rejection

The official printed table is rounded to4dp. This matters particularly for discrete Spearman values. For n6, x=1..6,y=[2,1,4,3,6,5], sum d²=6 and rs=29/35=.8285714286. The table CV=.8286. It IS in the positive5% rejection region; raw `rs>=.8286` incorrectly says no.

Recommended explicitly labelled **table-precision mode**: set signed score r, −r, or |r| by alternative; compare `Math.round(score*10000)>=Math.round(c*10000)`. Do not round to3dp. Show both unrounded statistic and 4dp comparison when near boundary. This is an engineering interpretation of finite table precision, not a claim of an infinitely precise threshold. For PMCC observations within .00005 of CV, label decision as table-precision boundary; optional independent continuous-theory result can explain small rounding differences. Do not claim exact p from table.

For small no-ties Spearman an even stronger approach is exact lattice/permutation boundary, independently verified, with official CV retained for presentation. Do not reconstruct arbitrary large-n thresholds from unattainable rounded decimals or claim all printed large-n values are exact permutation quantiles.

## Conditions and UI gating

- Coefficient calculation is descriptive and does not itself require Normality. PMCC table inference uses iid pairs from a bivariate Normal population. An invented/dragged scatterplot is illustrative, NOT evidence from a random population sample. Show this qualification adjacent to decision.
- Spearman ranks are appropriate for ordinal/monotone relationships; no bivariate Normal requirement. Classical no-ties rank null is based on random independent pairs with exchangeable relative order under independence. Distinguish this test calibration from the much broader statement that zero rank correlation guarantees independence (it does not).
- Ties: compute descriptive Spearman as Pearson correlation of average ranks. Do NOT apply no-tie shortcut directly. Do NOT certify ordinary no-ties table significance for tied data. Show “ties: official-table inference unavailable; coefficient remains descriptive”. Optional conditional permutation inference must be clearly separate.
- Constant x or y: coefficient undefined, no decision. Invalid/nonfinite data likewise. n<4 cannot use this table. Duplicate observations may create ties; detect exact stored values, not displayed rounding unless explicit measurement precision is modelled.
- Correlation significance does not mean causality, large effect, or an adequate linear model. Non-rejection is insufficient evidence, never proof of zero correlation.
- Table gives a threshold decision, not an exact p-value. Do not interpolate a p or label .05 as the observed p.

## Independent acceptance cases

1. PMCC n10,r=.60, positive5%: .5494 → reject; same r two-tail5%: .6319 → do not reject.
2. PMCC n10,r=−.70, positive5% → do not reject; negative5% → reject; two-tail5% → reject.
3. PMCC n10,r=.6319,two-tail5%: include equality in table mode; .6318 → do not reject.
4. Spearman n10,rs=.636363636… (sum d²60),two-tail5%: .6485 → do not reject. This agrees with original official Q3 example.
5. Spearman n4,x=[1,2,3,4],y=[1,2,3,4]: one-tail5% CV1 and equality → reject. Independent complete permutation upper-tail=1/24=.0416667. Two-tail5% cell is dash, no rejection possible at5%: minimum two-tail probability2/24=.0833333.
6. Spearman n5,x=[1,2,3,4,5],y=[2,1,3,4,5]: rs=.9,one-tail5% CV.9 → reject. Exact enumeration:5/120=1/24. Two-tail5% CV1 → do not reject.
7. Spearman n6,x=[1,2,3,4,5,6],y=[2,1,4,3,6,5]: rs29/35;one-tail5% CV.8286 → reject despite upward printed rounding. Exact complete permutation upper-tail21/720=7/240=.0291667. Two-tail5% CV.8857 → do not reject.
8. Spearman n6,y=[2,1,4,3,5,6]: rs31/35=.8857142857;two-tail5% CV.8857 → reject. Exact upper tail12/720=1/60;two tail1/30.
9. Spearman n10,two-tail1% → unavailable column; n31 any official table → unavailable row; no nearest-row fallback.
10. Ties x=[1,2,2,4],y=[4,1,1,3]: rs=−1/3 descriptive; table inference gated.
11. Constant x=[2,2,2,2], nonconstant y → undefined; no rejection badge.

Cases5–8 independently calculated in Python by enumerating all n! permutations and counting sum d² at most observed, including equality. These are not fetched/guessed p-values. Independent numerical oracle work, not implementation test evidence.

## Priority defects to prevent

P0: wrong tail column; testing abs(r) for positive alternative; table used despite ties/undefined coefficient; nonrandom manipulated points called scientific evidence.
P1: equality excluded; upward-rounded Spearman boundary incorrectly fails; dashed cell treated1; missing n rounded; invented p-value; PMCC bivariate assumption omitted or replaced with two marginal normalities.
P2: only threshold number with no n/alpha/tail/method/source context; claim causation or proof of H0; repeated post-hoc tail selection encouraged.

---
title: "S3 Chapter 7: International Exam Review"
---

## How to Use This Review Pack
This handout is a **high-yield revision guide** for S3 topics:
**Sampling** $\rightarrow$ **Combinations of RVs** $\rightarrow$ **Estimation & CI** $\rightarrow$ **CLT & Mean Tests** $\rightarrow$ **Correlation** $\rightarrow$ **$\chi^2$ Tests**.

:::note[Exam Strategy in One Minute]
1. **Identify the situation**: categorical vs numerical? one sample or two? independent?
2. **Write assumptions** (usually 1 line): random sample + independence + any model assumptions.
3. **Choose the method**: CI / test / correlation table / $\chi^2$ GOF / $\chi^2$ independence.
4. **Compute cleanly**: show key intermediate values (expected frequencies, $S_{xy}$, SE, df).
5. **Conclude in context**: "evidence at 5% level that ..." (not "$H_0$ is true").
:::

### Running Case: HelloTea
We will keep using **HelloTea** to connect ideas:

- **Population**: all students (e.g. 3000).
- **Sample**: e.g. $n=200$ students chosen by a sampling method.
- **Data types**: ratings (1--5), drink choice (tea/coffee/hot chocolate), screen-time, etc.

## Chapter 1 Review: Sampling Methods (Getting Good Data)

:::tip[Key Idea]
Bad sampling $\Rightarrow$ biased data $\Rightarrow$ even perfect calculations give wrong conclusions.
:::

### Core Definitions
**Definition: Population, Sample, Sampling Frame**

- **Population**: the full group of interest.
- **Sample**: the selected observations from the population.
- **Sampling frame**: the actual list you can sample from.

### Four Methods You Must Know

| **Method** | **Random?** | **How to do it** | **Main risk / limitation** |
|------------|-------------|-------------------|---------------------------|
| Simple Random (SRS) | Yes | choose $n$ IDs using RNG / random number table | can be time-consuming; may miss small subgroups by chance |
| Systematic | Partly | choose random start, then every $k$th | periodicity (hidden patterns in the list) |
| Stratified | Yes (within strata) | split into strata, SRS inside each | need strata info beforehand; more steps |
| Quota | No | set quotas, then convenience within each | selection bias; no valid sampling error / inference guarantee |

### Common Exam Pitfalls (From Examiner Reports)

- **Missing the numbering step**: Before using random numbers, you MUST explicitly state that you will "number/label the sampling frame (e.g., from 1 to $N$)."
- **Systematic sampling errors**: If the period is $k$, students often forget that you *cannot* select two adjacent items.
- **Vague language**: Stating a method is "more accurate" or "more representative" usually scores zero. Use precise terms like "reflects the population structure" (for stratified) or "gives every item an equal chance of selection" (for simple random).
- **Quota vs. Stratified**: Quota sampling suffers from *interviewer bias* (the person choosing who to survey), which means no valid sampling error can be calculated.

:::note[Exercise: Check Yourself — Sampling Choice]
HelloTea wants opinions from the whole school, but different year groups visit at different rates.

(a) Which sampling method would you recommend and why?
(b) Write one possible bias if the survey is done by "first 200 students who walk past the shop".
:::

## Chapter 2 Review: Combinations of Random Variables

### Core Rules for Expectation and Variance
:::note[Linear Combinations]
For any random variables $X$ and $Y$, and constants $a, b$:

- $E(aX \pm bY) = aE(X) \pm bE(Y)$ (Always works!)
- $\mathrm{Var}(aX \pm bY) = a^2\mathrm{Var}(X) + b^2\mathrm{Var}(Y)$ (**Only if $X$ and $Y$ are INDEPENDENT!**)
:::

### The Biggest Exam Trap: $3X$ vs $X_1+X_2+X_3$

| **Scenario** | **Notation** | **Variance** |
|--------------|-------------|-------------|
| "3 times the weight of *a randomly chosen* bag" | $3X$ | $\mathrm{Var}(3X) = 3^2 \mathrm{Var}(X) = \mathbf{9\mathrm{Var}(X)}$ |
| "The total weight of *3 randomly chosen* bags" | $X_1 + X_2 + X_3$ | $\mathrm{Var}(X_1+X_2+X_3) = \mathbf{3\mathrm{Var}(X)}$ |

### Common Exam Pitfalls (From Examiner Reports)

- **Subtracting variances**: Students frequently write $\mathrm{Var}(X-Y) = \mathrm{Var}(X) - \mathrm{Var}(Y)$. This is WRONG! Variances always **add** for independent variables: $\mathrm{Var}(X-Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)$.
- **Averaging variables**: To find the variance of the sample mean of 5 observations $A = \frac{X_1+...+X_5}{5}$, you must square the denominator: $\mathrm{Var}(A) = \frac{5\mathrm{Var}(X)}{25} = \frac{\mathrm{Var}(X)}{5}$. Many incorrectly divide by 5 instead of 25.
- **Difference without direction**: If the question asks for the probability of a "difference" in weight being greater than 5g, you must calculate $P(|X-Y| > 5) = P(X-Y > 5) + P(X-Y < -5)$ (two tails).
- **Standardisation sign errors**: When equating your standardisation $Z = \frac{x-\mu}{\sigma}$ to a critical value (e.g. 1.2816), make sure the *signs* match. If the probability area implies $x$ is below the mean, $Z$ must be negative!

:::note[Exercise: Check Yourself — Combinations]
Let $X$ and $Y$ be independent normal variables where $X \sim N(50, 4)$ and $Y \sim N(60, 5)$.

(a) Find the mean and variance of $W = 3X - Y$.
(b) Find the probability that the weight of 3 randomly chosen $X$'s exceeds 155.
:::

## Chapter 3 Review: Estimation, Bias, Standard Error, Confidence Interval

### The Three Layers: Parameter, Statistic, Value
:::note[Language That Scores Marks]

- **Parameter** (unknown): $\mu$, $\sigma^2$, $\rho$
- **Statistic / estimator** (random): $\bar{X}$, $S^2$, $r$
- **Observed value** (number): $\bar{x}=4.2$, $s^2=1.44$, $r=-0.41$
:::

### Bias
**Definition: Bias**
$$
\mathrm{Bias}(\hat{\theta}) = E[\hat{\theta}] - \theta.
$$

:::note[Two Must-Know Facts]

- $E[\bar{X}] = \mu$ (sample mean is unbiased).
- $S^2 = \dfrac{1}{n-1}\sum (X_i-\bar{X})^2$ is unbiased for $\sigma^2$.
:::

### Standard Error (SE)
**Definition: Standard Error**
$$
\mathrm{SE}(\hat{\theta}) = \sqrt{\mathrm{Var}(\hat{\theta})}.
$$

:::note[High-Yield SE Formulas]
$$
\begin{aligned}
\mathrm{SE}(\bar{X}) &= \frac{\sigma}{\sqrt{n}} \quad \text{(if $\sigma$ known)}\\
\mathrm{SE}(\bar{X}) &\approx \frac{S}{\sqrt{n}} \quad \text{(if $\sigma$ unknown, large $n$)}\\
\mathrm{SE}(\bar{X}-\bar{Y}) &\approx \sqrt{\frac{S_X^2}{n_X}+\frac{S_Y^2}{n_Y}} \quad \text{(independent samples, large)}.
\end{aligned}
$$
:::

### Confidence Intervals (CI)
**Definition: Generic Form**
$$
\text{Estimate} \pm (\text{critical value}) \times (\text{standard error}).
$$

:::note[Mean CI (large-sample / normal-based)]
$$
\mu \in \bar{x} \pm z^*\cdot \frac{S}{\sqrt{n}}.
$$
Common values: $z^*=1.645$ (90%), $1.96$ (95%), $2.576$ (99%).
:::

### Common Exam Pitfalls (From Examiner Reports)

- **Wrong interpretation**: "95% probability that $\mu$ is in this interval" (not correct phrasing). Instead say: "We are 95% confident that the true population mean lies within this interval."
- **Mixing SD and SE**: SD describes individual items; SE describes estimator variability. Don't forget to divide by $\sqrt{n}$ when calculating the standard error!
- **Hypotheses notation**: Always use population parameters (e.g. $\mu$) in hypotheses, never sample statistics ($\bar{x}$). Also, define your subscripts clearly (e.g. $\mu_A$ vs $\mu_B$).
- **CIs as a Binomial process**: If asked for the probability that $Y$ out of $n$ calculated confidence intervals contain $\mu$, you must use the Binomial distribution $Y \sim B(n, \text{confidence level})$.

:::note[Exercise: Mini Drill — Bias + SE]
Let $X_1,\ldots,X_n$ be i.i.d. with $E[X_i]=\mu$ and $\mathrm{Var}(X_i)=\sigma^2$.

(a) Consider $T=\dfrac{X_1+2X_3+X_5}{4}$. Find $E[T]$ and the bias of $T$ for $\mu$.
(b) Find $\mathrm{Var}(T)$ assuming independence.
:::

## Chapter 4 Review: CLT & Inference for Means

### What CLT Actually Says
**Theorem: Central Limit Theorem (usable form)**
If $X_1,\ldots,X_n$ are i.i.d. with mean $\mu$ and variance $\sigma^2<\infty$, then for large $n$,
$$
\bar{X} \approx N\!\left(\mu,\frac{\sigma^2}{n}\right).
$$

:::note[When You May Use CLT (exam wording)]

- random sample, independent observations
- identical distribution
- sample size "large enough" (typical rule of thumb: $n\ge 30$, but think about skewness)
:::

### One-Sample Mean Test (Large-Sample $z$-test idea)
To test $H_0:\mu=\mu_0$,
$$
Z=\frac{\bar{x}-\mu_0}{S/\sqrt{n}} \approx N(0,1)\ \text{under }H_0\quad(\text{large }n).
$$
Decision by critical value or $p$-value.

### Difference of Two Means (Independent Samples)
If two independent large samples:
$$
\bar{X}-\bar{Y} \approx N\!\left(\mu_X-\mu_Y,\ \frac{\sigma_X^2}{n_X}+\frac{\sigma_Y^2}{n_Y}\right).
$$
Use estimated SE with sample SDs.

### Common Exam Pitfalls (From Examiner Reports)

- **Explaining the CLT**: Many students lose marks by saying "the sample is normally distributed." You must say "the **sample mean** is approximately normally distributed."
- **Combining samples**: When asked to treat two samples as a single combined sample, do not calculate a weighted standard deviation. Find the new overall mean and calculate the standard error for the new total size $n_1+n_2$.
- **Using CLT with small $n$** when the population is clearly skewed/heavy-tailed.
- **Forgetting "independent samples"** for the two-sample formula.
- **Mixing up one-tailed vs two-tailed** critical regions.

:::note[Exercise: Check Yourself — Choosing Tail]
HelloTea claims the mean satisfaction is **at least** $4.0$.

(a) Write $H_0$ and $H_1$.
(b) Is the test one-tailed or two-tailed? Which direction?
:::

## Chapter 5 Review: Correlation & Rank Correlation

### PMCC (Pearson) Recap
Given paired data $(x_i,y_i)$ for $i=1,\ldots,n$,
$$
r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}},\quad
S_{xy}=\sum xy-\frac{(\sum x)(\sum y)}{n}.
$$

:::note[Interpretation]

- $r$ measures **linear** association only.
- Outliers can strongly affect $r$.
:::

### Testing for PMCC (Table Method)

- $H_0:\rho=0$
- Compare $|r|$ with the **critical value** for $(n,\alpha)$.

:::note[Key Assumption for PMCC Test]
Underlying **bivariate normal** model (often stated as "(x,y) are from a bivariate normal population").
:::

### Spearman's Rank Correlation
Use ranks when:

- relationship is monotonic but not linear, or data is ordinal, or outliers break Pearson.

If no ties, shortcut:
$$
r_s = 1-\frac{6\sum d^2}{n(n^2-1)}.
$$
Test $r_s$ using Spearman critical value tables.

### Common Exam Pitfalls (From Examiner Reports)

- **Tied Ranks**: If there are tied ranks, you MUST use the full PMCC formula on the ranks. The $1-\frac{6\sum d^2}{n(n^2-1)}$ shortcut is only valid when there are no ties!
- **Alphabetical coding**: When given letters (e.g., Grades A, B, C), students sometimes rank them alphabetically instead of by their actual value/order.
- **Hypotheses**: Always state hypotheses in terms of $\rho$ or $\rho_s$. Never use $r$ or state them just in words.
- **Contextual conclusion**: Simply stating "there is correlation" is insufficient. You must include the direction and context (e.g., "there is evidence of positive correlation between age and price").
- **Non-linear relationships**: If a PMCC test shows no significant correlation, but a Spearman's test shows significant correlation, it strongly suggests a *non-linear* relationship exists.

:::note[Exercise: Mini Drill — When Pearson Fails]
Give one realistic situation where Pearson $r$ could be misleading but Spearman $r_s$ is appropriate.
Explain your reason in one sentence.
:::

## Chapter 6 Review: $\chi^2$ Tests (Goodness of Fit & Independence)

### $\chi^2$ Statistic (same structure for both tests)
$$
\chi^2=\sum \frac{(O-E)^2}{E}.
$$

:::caution[Rule of 5 (very exam-important)]
All expected frequencies should be at least 5.
If not, **combine** categories (and adjust $k$ and degrees of freedom).
:::

### Goodness of Fit (GOF)

- **Use when**: one categorical variable, testing a specified distribution/model.
- **Hypotheses**: $H_0$: model fits; $H_1$: model does not fit.
- **df**: $df=k-1-m$ where $m=$ parameters estimated from data.

### Independence in a Contingency Table

- **Use when**: two categorical variables; test for association.
- **Expected**: $E_{ij}=\dfrac{(\text{row total})(\text{col total})}{\text{grand total}}$.
- **df**: $(r-1)(c-1)$.

### Conclusion Sentence Template
:::note[Template]
Since $\chi^2 = \underline{\hspace{2cm}}$ is (greater / less) than the critical value $\underline{\hspace{2cm}}$ at the \underline{\hspace{1.2cm}}% level,
we (reject / do not reject) $H_0$.
There is (sufficient / insufficient) evidence that \underline{\hspace{6cm}}.
:::

### Common Exam Pitfalls (From Examiner Reports)

- **Frequencies, not percentages**: A Chi-squared test MUST use raw frequencies (counts). If given percentages, convert them back to frequencies first.
- **Hypotheses for estimated parameters**: If you estimate a parameter (e.g. $\lambda=3.5$), do NOT include the 3.5 in your hypotheses. Write "$H_0$: A Poisson distribution is a suitable model" (not "Po(3.5)").
- **Degrees of Freedom ($m$)**: Students often forget to subtract $m$ (the number of estimated parameters) when calculating $df = k - 1 - m$ for Goodness of Fit tests.
- **Pooling correctly**: You pool cells to ensure **Expected** frequencies are $\ge 5$. Do not pool based solely on Observed frequencies!

## One-Page Formula Sheet (Students Should Memorise)

- **Expectation:** $E(aX \pm bY)=aE(X) \pm bE(Y)$
- **Variance (Indep):** $\mathrm{Var}(aX \pm bY)=a^2\mathrm{Var}(X) + b^2\mathrm{Var}(Y)$
- **Multiple items:** $\mathrm{Var}(X_1+..+X_n)=n\mathrm{Var}(X)$
- **Sample mean:** $\bar{X}=\dfrac{1}{n}\sum X_i$, $\mathrm{SE}(\bar{X})=\dfrac{\sigma}{\sqrt{n}}$
- **Sample variance:** $S^2=\dfrac{1}{n-1}\sum (X_i-\bar{X})^2$
- **CI for mean (large $n$):** $\bar{x}\pm z^*\dfrac{S}{\sqrt{n}}$
- **CLT:** $\bar{X}\approx N\!\left(\mu,\dfrac{\sigma^2}{n}\right)$
- **PMCC:** $r=\dfrac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$
- **Spearman (no ties):** $r_s=1-\dfrac{6\sum d^2}{n(n^2-1)}$
- **$\chi^2$:** $\chi^2=\sum\dfrac{(O-E)^2}{E}$
- **df GOF:** $k-1-m$, **df independence:** $(r-1)(c-1)$

## Mixed Practice (No Solutions Provided)

:::note[Exercise: Mixed 1 — Sampling + Bias]
A school surveys "the first 60 students leaving the library" about HelloTea.

(a) Name the sampling method used.
(b) Give two different sources of bias that might occur.
(c) Suggest one improvement using a probability sampling method.
:::

:::note[Exercise: Mixed 2 — Confidence Interval]
A random sample of $n=64$ students gives mean rating $\bar{x}=4.10$ and sample SD $s=0.80$.

(a) Find a 95% confidence interval for $\mu$.
(b) Explain (in words) what the interval means.
:::

:::note[Exercise: Mixed 3 — CLT Difference of Means]
Two independent large samples are taken:
$$
n_1=50,\ \bar{x}_1=4.20,\ s_1=0.90;\qquad
n_2=60,\ \bar{x}_2=4.05,\ s_2=0.85.
$$

(a) Find the estimated standard error of $\bar{x}_1-\bar{x}_2$.
(b) Test at the 5% level whether the population means differ.
:::

:::note[Exercise: Mixed 4 — Correlation Choice]
A teacher records (i) students' rank in class, and (ii) their weekly screen-time rank.

(a) Which correlation coefficient is more suitable, Pearson or Spearman? Explain.
(b) State hypotheses for a test of association and describe how the decision is made.
:::

:::note[Exercise: Mixed 5 — $\chi^2$ Independence]
In a survey, students choose one drink (Tea/Coffee/Hot Chocolate). The table shows counts by gender.

(a) State hypotheses for a $\chi^2$ test of independence.
(b) Write the formula for the expected frequency in a cell.
(c) State the degrees of freedom.
:::

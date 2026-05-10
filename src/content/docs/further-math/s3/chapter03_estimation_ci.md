---
title: "S3 Chapter 3: Estimation and Confidence Intervals"
---

## From Data to Decisions: Understanding What Sample Tells Us

In Chapter 1, we learned how to collect a representative sample from a population. We carefully selected 200 students from HelloTea's 3,000-student customer base using proper sampling methods. Now we face the next crucial question:

**What do we do with this data?**

After conducting our survey, we calculated the sample mean satisfaction score: $\bar{X} = 4.2$ (on a scale of 0 to 5). This is our best guess for the true mean satisfaction $\mu$ of all 3,000 students. But how reliable is this estimate?

:::note[The Central Challenge]
**Our observation:** Sample mean $\bar{X} = 4.2$ from 200 students

**Our question:** How close is this to the true mean $\mu$ of all 3,000 students?

**The fundamental problem:** We can never know $\mu$ exactly (unless we survey everyone), but we can quantify how reliable our estimate is.
:::

To answer these questions rigorously, we need a mathematical framework. This chapter develops the theory of **statistical estimation** and shows how to quantify uncertainty using **confidence intervals**.

:::tip[Chapter Learning Goals]
By the end of this chapter, you should be able to:

1. Distinguish between a parameter, an estimator, and an estimate in real data problems.
2. Judge estimator quality using bias and standard error.
3. Build and interpret confidence intervals for a population mean.
4. Explain the assumptions behind the formulas and when they may fail.
:::

:::tip[Chapter Roadmap]
How this chapter is organized:

1. **Section 1 (Estimators):** What we are trying to estimate and what counts as a good estimating rule.
2. **Section 2 (Bias):** Whether an estimator is systematically too high or too low.
3. **Section 3 (Standard Error):** How much estimates fluctuate from sample to sample.
4. **Section 4 (Confidence Intervals):** How to turn one estimate into a plausible range for the true value.
5. **Section 5 (Summary and Reflection):** What to remember and what assumptions to question.
:::

### Critical Assumptions

Before we proceed, we must be explicit about the assumptions underlying our methods.

:::note[Fundamental Assumptions]
**1. (Normality):** Each student's satisfaction score is drawn from a normal distribution:
$$X_i \sim N(\mu, \sigma^2) \text{ for } i = 1, 2, \ldots, 200$$

**2. (Independence):** Each student's rating is independent of all others.

**3. (Random Sampling):** Our sample was selected using proper random sampling methods (as learned in Chapter 1).

**Note:** These are *strong* assumptions. We'll revisit their realism at the end of this chapter.
:::

## 1. Estimators: The Starting Point

:::tip[Learning Objectives]
- Identify parameters and choose natural estimators in context.
- Distinguish estimator ($\hat{\theta}$) from observed estimate ($\hat{\theta}_{obs}$).
- Explain why an estimator must be evaluated mathematically, not just intuitively.
:::

### The Natural Question

We used the sample mean $\bar{X} = 4.2$ to estimate the population mean $\mu$. This seems natural - after all, the average of our sample should tell us something about the average of the population. But how do we know this is a *good* estimate?

:::note[The Fundamental Question]
Given that we observed $\bar{X} = 4.2$, how can we judge the quality of this estimate?

What does "good estimate" even mean mathematically?
:::

To answer this, we need to formalize what we mean by an "estimator."

:::note[Real-World Scenario Before Definition]
A food delivery platform wants to know the **average delivery time** across all orders this month. It only audits 500 orders.

- The unknown target is the true monthly average delivery time for all orders.
- A practical rule is to use the sample average from the 500 audited orders.
- The business decision (staffing and compensation policy) depends on whether this rule is trustworthy.

This is exactly the estimator idea: use a rule based on sample data to infer an unknown population quantity.
:::

**Definition: Estimator**

An **estimator** is a statistic (a function of sample data) used to estimate an unknown population parameter.

A **point estimator** produces a single numerical value as an estimate.

**Notation:** We typically use $\hat{\theta}$ to denote an estimator of the parameter $\theta$.

**Example: HelloTea Estimators**

In our satisfaction survey:
- **Population parameter:** $\mu$ = true mean satisfaction of all 3,000 students (unknown)
- **Estimator:** $\bar{X}$ = sample mean = $\frac{1}{n}\sum_{i=1}^{n} X_i$
- **Estimate:** $\bar{x} = 4.2$ (the specific value we observed)

Note: $\bar{X}$ is a random variable (an estimator), while $\bar{x} = 4.2$ is the specific number we calculated.

### How Do We Judge an Estimator?

Now that we have an estimator $\bar{X}$ for $\mu$, we face two critical questions:

:::note[Two Key Questions About Estimators]
**Question 1 (Systematic Error):** Is our estimator systematically wrong? Does it tend to overestimate or underestimate the true parameter?

$\Rightarrow$ This leads to the concept of **bias** (Section 2)

**Question 2 (Variability):** How much does our estimator vary from sample to sample? If we repeated the survey with a different random sample of 200 students, how different would $\bar{X}$ be?

$\Rightarrow$ This leads to the concept of **standard error** (Section 3)
:::

## 2. Bias: Are We Systematically Wrong?

:::tip[Learning Objectives]
- Compute and interpret bias as long-run systematic error.
- Prove whether an estimator is unbiased using expectation rules.
- Explain why the $n-1$ correction appears in sample variance.
:::

### Defining Bias

The first question is whether our estimator is systematically biased - does it tend to be too high or too low?

:::note[Real-World Scenario Before Bias]
A wearable device estimates daily calories burned. Suppose the algorithm is consistently lower than lab measurements by about 80 kcal, even across many users.

- Individual daily errors vary up and down.
- But the **average error** is negative over repeated users and repeated days.

This is a bias problem: the method is systematically off-center, not just noisy.
:::

**Definition: Bias**

The **bias** of an estimator $\hat{\theta}$ for a parameter $\theta$ is defined as:
$$\text{Bias}(\hat{\theta}) = E[\hat{\theta}] - \theta$$

An estimator is **unbiased** if $E[\hat{\theta}] = \theta$, i.e., if $\text{Bias}(\hat{\theta}) = 0$.

**Interpretation:** An unbiased estimator is "correct on average" - if we repeated the sampling process infinitely many times, the average of all our estimates would equal the true parameter.

### Is the Sample Mean Unbiased?

Let's check whether $\bar{X}$ is an unbiased estimator of $\mu$.

**Question:** Is $E[\bar{X}] = \mu$?

To answer this, we need to calculate $E[\bar{X}]$. The linearity rules were covered in the *Combinations of Random Variables* handout, so here we focus on how they are used in estimation.

Now we can check if $\bar{X}$ is unbiased:

**Example: Sample Mean is Unbiased**

**Calculate:**

$$
\begin{aligned}
E[\bar{X}] &= E\left[\frac{1}{200}\sum_{i=1}^{200} X_i\right] = \frac{1}{200} E\left[\sum_{i=1}^{200} X_i\right] = \frac{1}{200} \sum_{i=1}^{200} E[X_i] = \frac{1}{200} \sum_{i=1}^{200} \mu  = \mu
\end{aligned}
$$

**Conclusion:** $E[\bar{X}] = \mu$, so the sample mean is an **unbiased estimator** of the population mean!

**Interpretation:** On average (over many repeated samples), $\bar{X}$ equals the true mean $\mu$. Our specific observation $\bar{x} = 4.2$ might be above or below $\mu$, but the method is not systematically biased.

### Example: Sample Variance and the Discovery of Bias

Not all natural estimators are unbiased. Let's examine the sample variance.

**Example: The Biased Sample Variance**

Suppose we want to estimate the population variance $\sigma^2$. The natural estimator might seem to be:
$$\text{Natural estimator: } \frac{1}{n}\sum_{i=1}^{n}(X_i - \bar{X})^2$$

This is just the average squared deviation from the sample mean. Is it unbiased?

**Let's calculate** (for simplicity, we'll show the key idea):

It can be proven that (please refer to the challenge exercise for details):
$$E\left[\frac{1}{n}\sum_{i=1}^{n}(X_i - \bar{X})^2\right] = \frac{n-1}{n}\sigma^2$$

**Discovery:** This is NOT equal to $\sigma^2$! The bias is:
$$\text{Bias} = \frac{n-1}{n}\sigma^2 - \sigma^2 = -\frac{1}{n}\sigma^2 < 0$$

The natural estimator **systematically underestimates** the true variance.

**Why?**

When we use $\bar{X}$ (which is calculated from the same data), we're making the deviations artificially small. The sample mean $\bar{X}$ minimizes $\sum(X_i - \bar{X})^2$, so using it makes the variance appear smaller than it truly is.

### The Corrected Sample Variance

To fix this bias, we use the corrected formula:

**Definition: Unbiased Sample Variance**

The **sample variance** (unbiased estimator of $\sigma^2$) is:
$$S^2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar{X})^2$$

This correction factor $(n-1)$ is called the **degrees of freedom**.

**Verification:**
$$E[S^2] = E\left[\frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar{X})^2\right] = \frac{n}{n-1} \cdot \frac{n-1}{n}\sigma^2 = \sigma^2 \checkmark$$

**Example: HelloTea: Using the Correct Formula**

In our satisfaction survey with $n = 200$ students:
- If we calculated $\sum_{i=1}^{200}(X_i - 4.2)^2 = 288$
- **Wrong (biased):** Variance $\approx \frac{288}{200} = 1.44$
- **Correct (unbiased):** $S^2 = \frac{288}{199} \approx 1.447$

The difference is small here, but the principle matters: always use $n-1$ for sample variance!

:::note[Exercise 1: Understanding Bias in Estimation]
A quality control team tests battery life of mobile phones. For a random sample $X_1, X_2, \ldots, X_n$ from a population with mean $\mu$ and variance $\sigma^2$, the team considers two estimators for the population variance:

Estimator 1: $V_1 = \frac{1}{n}\sum_{i=1}^{n}(X_i - \bar{X})^2$

Estimator 2: $V_2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar{X})^2$

a. Show that $\bar{X} = \frac{1}{n}(X_1 + X_2 + \cdots + X_n)$ is an unbiased estimator of the population mean $\mu$.

b. Given that $V_2$ is an unbiased estimator of $\sigma^2$, find the bias of $V_1$ when used as an estimator of $\sigma^2$. Express your answer in terms of $n$ and $\sigma^2$.

c. Five batteries were taken at random and tested. The lifetimes, in hours, were as follows:
$$435 \quad 390 \quad 356 \quad 388 \quad 449$$
Calculate the unbiased estimate of $\mu$ and $\sigma^2$.

d. A researcher proposes an alternative estimator for the population mean $\mu$:
$$T = \frac{X_1 + 2X_3 + X_5}{4}$$

   i. Calculate $E[T]$ in terms of $\mu$. Is $T$ an unbiased estimator of $\mu$? Justify your answer.

   ii. Find the bias of $T$ as an estimator of $\mu$.

   iii. Explain why the standard estimator $\bar{X} = \frac{1}{n}(X_1 + X_2 + \cdots + X_n)$ is preferred over $T$.
:::

## 3. Standard Error: Measuring Precision

:::tip[Learning Objectives]
- Explain why unbiasedness alone is insufficient for good estimation.
- Derive $\text{SE}(\bar{X}) = \sigma/\sqrt{n}$ from variance rules.
- Use SE to compare precision across different sample sizes.
:::

### Beyond Bias: Understanding Variability

We've established that $\bar{X}$ is unbiased ($E[\bar{X}] = \mu$), which is good news! But being unbiased doesn't tell the whole story. Consider this thought experiment:

:::note[Thought Experiment]
Imagine we surveyed a *different* random sample of 200 students from HelloTea's customer base. Would we get exactly $\bar{X} = 4.2$ again?

**Almost certainly not!** We'd get a different value, maybe $\bar{X} = 4.15$ or $\bar{X} = 4.28$.

**The key question:** How much does $\bar{X}$ typically vary from sample to sample?
:::

This variability is captured by the **standard error**.

:::note[Real-World Scenario Before Standard Error]
A marketing team runs the same online ad campaign in many weeks. Each week they report the mean order value from a random sample of customers.

- The estimating method can be unbiased on average.
- Yet weekly sample means still move up and down due to random sampling.

Standard error quantifies this week-to-week fluctuation of the estimator.
:::

**Definition: Standard Error**

The **standard error** of an estimator $\hat{\theta}$ is the standard deviation of its sampling distribution:
$$\text{SE}(\hat{\theta}) = \sqrt{\text{Var}(\hat{\theta})}$$

**Interpretation:** A smaller standard error means a more precise (less variable) estimator.

For the sample mean under independent sampling:

$$
\text{Var}(\bar{X})=\frac{\sigma^2}{n}
\quad\Rightarrow\quad
\boxed{\text{SE}(\bar{X})=\frac{\sigma}{\sqrt{n}}}.
$$

:::caution[Prerequisite Reminder]
The variance-combination rules and independence checkpoint are developed in detail in the *Combinations of Random Variables* handout. In this chapter, we treat the above SE result as a working tool and focus on interpretation and confidence interval construction.
:::

### Understanding the Standard Error Formula

The formula $\text{SE}(\bar{X}) = \frac{\sigma}{\sqrt{n}}$ reveals important insights:

:::tip[Insights from the SE Formula]
**1. Effect of population variability ($\sigma$):**
- Larger $\sigma$ (more variable population) $\Rightarrow$ larger SE (less precise estimate)
- Smaller $\sigma$ (more homogeneous population) $\Rightarrow$ smaller SE (more precise estimate)

**2. Effect of sample size ($n$):**
- Larger $n$ (more data) $\Rightarrow$ smaller SE (more precise estimate)
- The improvement is proportional to $\sqrt{n}$, not $n$

**3. The $\sqrt{n}$ relationship:**
- To cut SE in half, you need 4 times as much data
- To cut SE to 1/10, you need 100 times as much data
- Diminishing returns: doubling sample size doesn't double precision
:::

### HelloTea Calculation

Let's apply this to our satisfaction survey:

**Example: HelloTea Standard Error**

**Scenario:** From historical data or a pilot study, suppose we know that satisfaction ratings have standard deviation $\sigma = 1.2$ points (on the 0-5 scale).

**Our sample:** $n = 200$ students, $\bar{X} = 4.2$

**Calculate SE:**
$$\text{SE}(\bar{X}) = \frac{\sigma}{\sqrt{n}} = \frac{1.2}{\sqrt{200}} = \frac{1.2}{14.142} \approx 0.0849$$

**Interpretation:** The sample mean $\bar{X}$ typically varies by about $\pm 0.085$ points from the true mean $\mu$.

If we repeated the survey many times with different random samples of 200 students, about 68% of the sample means would fall within $\mu \pm 0.085$.

### When Population Variance is Unknown

In practice, we usually don't know the population standard deviation $\sigma$. What do we do?

:::note[Estimated Standard Error]
When $\sigma$ is unknown (which is almost always the case), we estimate it using the sample standard deviation $S$:

$$\text{Estimated SE}(\bar{X}) = \frac{S}{\sqrt{n}}$$

where $S = \sqrt{S^2} = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar{X})^2}$

**HelloTea Example:** If our sample yields $S = 1.2$, then:
$$\text{Estimated SE}(\bar{X}) = \frac{1.2}{\sqrt{200}} \approx 0.085$$
:::

**Note:** For large samples ($n \geq 30$), the difference between using $\sigma$ and $S$ is negligible.

## 4. Confidence Intervals: Quantifying Uncertainty

:::tip[Learning Objectives]
- Connect sampling distributions to interval construction.
- Derive and apply the $100(1-\alpha)\%$ confidence interval for $\mu$.
- Interpret interval width using sample size, variability, and confidence level.
:::

### Beyond Point Estimates

So far, we've learned:
- $\bar{X} = 4.2$ is an unbiased estimate of $\mu$ (no systematic error)
- $\text{SE}(\bar{X}) \approx 0.085$ tells us the typical variability

But when we report to HelloTea's manager, saying "the mean satisfaction is 4.2 with SE of 0.085" isn't very intuitive. A better approach is to give a **range** of plausible values for $\mu$.

:::note[The Limitation of Point Estimates]
**Point estimate:** $\bar{X} = 4.2$ gives a single number, but...
- We know this is almost certainly not exactly equal to $\mu$
- It doesn't convey our uncertainty
- It's hard to use for decision-making

**Better approach:** Give a range like "$\mu$ is likely between 4.0 and 4.4"

This is what **confidence intervals** provide!
:::

:::note[Real-World Scenario Before Confidence Intervals]
A hospital reports average emergency waiting time from a sample of patient records.

- Reporting a single value (for example, 47 minutes) can be misleadingly precise.
- Operations managers need a plausible range to plan staffing safely.

A confidence interval gives a principled uncertainty band for the true average waiting time.
:::

### The Role of Sampling Distributions

To construct meaningful intervals, we need to understand the *distribution* of $\bar{X}$ - not just its mean and variance, but its entire probability distribution. This is where our normality assumption becomes crucial!

:::note[Why We Need the Sampling Distribution]
**Question:** How do we know how far $\bar{X}$ typically deviates from $\mu$?

**Answer:** We need to know the probability distribution of $\bar{X}$ itself!

This is called the **sampling distribution** of $\bar{X}$ - the distribution that describes how $\bar{X}$ varies across different possible samples.
:::

### The Distribution of the Sample Mean

For confidence intervals, we use the key result:

$$
\bar{X} \sim N\left(\mu, \frac{\sigma^2}{n}\right)
$$

under independent normal sampling.

:::caution[Link to the prerequisite handout]
Why linear combinations of normal variables are normal is covered in detail in the *Combinations of Random Variables* handout. Here, we focus on how this result is used to construct and interpret confidence intervals.
:::

### Constructing a Confidence Interval

Now we can build our confidence interval by standardizing $\bar{X}$:

**Example: Deriving the 95% Confidence Interval**

**Start with what we know:**
$$Z = \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \sim N(0,1)$$

**Use the 95% probability:**
$$P(-1.96 < Z < 1.96) = 0.95$$

**Substitute the formula for $Z$:**
$$P\left(-1.96 < \frac{\bar{X} - \mu}{\sigma/\sqrt{n}} < 1.96\right) = 0.95$$

**Multiply all parts by $\sigma/\sqrt{n}$:**
$$P\left(-1.96 \cdot \frac{\sigma}{\sqrt{n}} < \bar{X} - \mu < 1.96 \cdot \frac{\sigma}{\sqrt{n}}\right) = 0.95$$

**Rearrange to isolate $\mu$ in the middle:**
$$P\left(\bar{X} - 1.96 \cdot \frac{\sigma}{\sqrt{n}} < \mu < \bar{X} + 1.96 \cdot \frac{\sigma}{\sqrt{n}}\right) = 0.95$$

**This can be written compactly as:**
$$P\left(\bar{X} - 1.96 \cdot \text{SE}(\bar{X}) < \mu < \bar{X} + 1.96 \cdot \text{SE}(\bar{X})\right) = 0.95$$

Or more simply: $\mu \in \left[\bar{X} \pm 1.96 \cdot \text{SE}(\bar{X})\right]$ with probability 0.95

### The Confidence Interval Formula

**Definition: Confidence Interval for the Mean**

A **$100(1-\alpha)\%$ confidence interval** for the population mean $\mu$ is:

$$\boxed{\bar{X} \pm z^* \times \text{SE}(\bar{X}) = \bar{X} \pm z^* \times \frac{\sigma}{\sqrt{n}}}$$

where $z^*$ is chosen so that $P(-z^* < Z < z^*) = 1 - \alpha$ for $Z \sim N(0,1)$.

**Common confidence levels:**

| Confidence Level | $\alpha$ | $z^*$ value |
|:---:|:---:|:---:|
| 90% | 0.10 | 1.645 |
| 95% | 0.05 | 1.96 |
| 99% | 0.01 | 2.576 |

**When $\sigma$ is unknown:** Replace $\sigma$ with sample standard deviation $S$:
$$\bar{X} \pm z^* \times \frac{S}{\sqrt{n}}$$

### HelloTea: Computing the Confidence Interval

Let's put everything together for our satisfaction survey:

**Example: HelloTea 95% Confidence Interval**

**Given data:**
- Sample size: $n = 200$ students
- Sample mean: $\bar{X} = 4.2$ points
- Sample standard deviation: $S = 1.2$ points
- Confidence level: 95% (so $z^* = 1.96$)

**Step 1: Calculate the standard error**
$$\text{SE}(\bar{X}) = \frac{S}{\sqrt{n}} = \frac{1.2}{\sqrt{200}} = \frac{1.2}{14.142} = 0.0849 \approx 0.085$$

**Step 2: Calculate the margin of error**
$$\text{Margin of Error} = z^* \times \text{SE}(\bar{X}) = 1.96 \times 0.085 = 0.1666 \approx 0.167$$

**Step 3: Construct the interval**

$$
\begin{aligned}
\text{95\% CI} &= \bar{X} \pm \text{Margin of Error}\\
&= 4.2 \pm 0.167\\
&= [4.033, 4.367]
\end{aligned}
$$

**Report:** "We are 95% confident that the true mean satisfaction score for all 3,000 students lies between 4.03 and 4.37 points."

### Factors Affecting Confidence Interval Width

The width of a confidence interval tells us about the precision of our estimate. A narrower interval means we've pinned down $\mu$ more precisely.

:::tip[What Affects CI Width?]
The width of a confidence interval is $2 \times z^* \times \frac{\sigma}{\sqrt{n}}$

**Factor 1: Sample size ($n$)**
- Larger $n$ $\Rightarrow$ narrower CI (more precise)
- Width decreases as $1/\sqrt{n}$
- To halve the width, need 4 times the sample size

**Factor 2: Population variability ($\sigma$)**
- Larger $\sigma$ (more variable population) $\Rightarrow$ wider CI (less precise)
- Can't control this - it's a property of the population
- More homogeneous populations give more precise estimates

**Factor 3: Confidence level**
- Higher confidence level $\Rightarrow$ wider CI
- 90% CI: $z^* = 1.645$ (narrower); 95% CI: $z^* = 1.96$ (moderate); 99% CI: $z^* = 2.576$ (wider)
- Trade-off: more confidence requires a wider net
:::

**Example: HelloTea: Comparing Different Confidence Levels**

With $\bar{X} = 4.2$, $S = 1.2$, $n = 200$, so $\text{SE} = 0.085$:

| Confidence Level | Calculation | Interval |
|:---:|:---:|:---:|
| 90% | $4.2 \pm 1.645(0.085)$ | [4.06, 4.34] |
| 95% | $4.2 \pm 1.96(0.085)$ | [4.03, 4.37] |
| 99% | $4.2 \pm 2.576(0.085)$ | [3.98, 4.42] |

**Observation:** More confidence means casting a wider net. We're more confident the interval contains $\mu$, but the interval tells us less precisely where $\mu$ is.

## 5. Summary and Critical Reflection

:::tip[Learning Objectives]
- Consolidate the full estimation workflow from point estimate to interval estimate.
- Critically evaluate assumptions behind normal-based inference.
- Prepare for the Central Limit Theorem as a robustness tool.
:::

### What We've Learned

This chapter developed the mathematical framework for statistical estimation:

:::note[Key Concepts Summary]
1. **Estimators:** Statistics used to estimate unknown population parameters
   - Example: $\bar{X}$ estimates $\mu$

2. **Bias:** Measures systematic error
   - Formula: $\text{Bias}(\hat{\theta}) = E[\hat{\theta}] - \theta$
   - Unbiased: $E[\hat{\theta}] = \theta$
   - Result: $\bar{X}$ is unbiased for $\mu$

3. **Standard Error:** Measures precision/variability
   - Formula: $\text{SE}(\hat{\theta}) = \sqrt{\text{Var}(\hat{\theta})}$
   - For $\bar{X}$: $\text{SE}(\bar{X}) = \sigma/\sqrt{n}$
   - Smaller SE = more precise estimate

4. **Confidence Intervals:** Quantify uncertainty
   - Formula: $\bar{X} \pm z^* \times \text{SE}(\bar{X})$
   - Interpretation: Method captures $\mu$ with specified probability
   - Practical tool for reporting uncertainty
:::

### Summary of Key Formulas

| Concept | Formula | HelloTea Value |
|:---|:---:|:---:|
| Sample Mean | $\bar{X} = \frac{1}{n}\sum_{i=1}^{n}X_i$ | 4.2 |
| Expectation of $\bar{X}$ | $E[\bar{X}] = \mu$ | $\mu$ (unbiased) |
| Variance of $\bar{X}$ | $\text{Var}(\bar{X}) = \frac{\sigma^2}{n}$ | $\frac{1.44}{200}$ |
| Standard Error | $\text{SE}(\bar{X}) = \frac{\sigma}{\sqrt{n}}$ | 0.085 |
| 95% CI | $\bar{X} \pm 1.96 \times \text{SE}(\bar{X})$ | [4.03, 4.37] |
| Sample Variance | $S^2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar{X})^2$ | 1.44 |

### Critical Examination of Our Assumptions

Throughout this chapter, we relied on several key assumptions. Let's critically evaluate them:

:::caution[Assumption 1: Normality]
**We assumed:** $X_i \sim N(\mu, \sigma^2)$ - satisfaction scores are normally distributed

**Reality check:**
- Satisfaction ratings are **discrete** (1, 2, 3, 4, 5), not continuous
- Normal distribution is continuous, ranging from $-\infty$ to $+\infty$
- May have **ceiling effects** (many students give 5/5) or **floor effects**
- Distribution might be **skewed** (not symmetric)
- Rating behavior might not follow a bell curve at all
:::

:::caution[Assumption 2: Independence]
**We assumed:** Each student's rating is independent of others

**Reality check:**
- Students might influence each other ("My friend said it's great!")
- If we sampled students who visited together, ratings might be correlated
- Social media posts could create clustering of opinions

**The good news:** Random sampling helps ensure independence. If we truly randomly selected students from across the population, this assumption is reasonable.
:::

### The Big Question: What If Normality Fails?

:::note[A Fundamental Problem]
**We derived that:** If $X_i \sim N(\mu, \sigma^2)$, then $\bar{X} \sim N(\mu, \sigma^2/n)$

**This was crucial for:** Constructing confidence intervals using the standard normal distribution

**But if $X_i$ is NOT normal:** Does our entire methodology collapse?
:::

### Preview: The Central Limit Theorem to the Rescue

The answer to our concerns comes from one of the most powerful results in all of statistics:

:::tip[Preview: Central Limit Theorem]
**The Amazing Result:**

Even if the population is NOT normally distributed, the sample mean $\bar{X}$ becomes approximately normally distributed as the sample size $n$ gets large!

$$\text{For large } n: \quad \bar{X} \approx N\left(\mu, \frac{\sigma^2}{n}\right) \quad \text{regardless of the shape of the population distribution}$$

**Why it's remarkable:**
- Population could be skewed, discrete, bounded, bimodal - doesn't matter!
- The *average* tends toward normality through the magic of averaging
- This is why the normal distribution is so central to statistics
:::

:::note[Exercise 2: WST03/01/May16/7]

a. A random sample of 8 apples is taken from an orchard and the weight, in grams, of each apple is measured. The results are given below.
$$143 \quad 131 \quad 165 \quad 122 \quad 137 \quad 155 \quad 148 \quad 151$$
Calculate unbiased estimates for the mean and the variance of the weights of apples. (4)

b. A population has an unknown mean $\mu$ and an unknown variance $\sigma^2$. A random sample represented by $X_1, X_2, X_3, \ldots, X_8$ is taken from this population. Explain why $\sum_{i=1}^8 (X_i - \mu)^2$ is not a statistic. (1)

c. Given that $E(S^2) = \sigma^2$, where $S^2$ is an unbiased estimator of $\sigma^2$ and the statistic
$$Y = \frac{1}{8} \left( \sum_{i=1}^8 X_i^2 - 8\overline{X}^2 \right)$$
find $E(Y)$ in terms of $\sigma^2$. (2)

d. Hence find the bias, in terms of $\sigma^2$, when $Y$ is used as an estimator of $\sigma^2$. (2)
:::

:::note[Exercise 3: WST03/01/May17/6]

a. A company produces a certain type of mug. The masses of these mugs are normally distributed with mean $\mu$ and standard deviation 1.2 grams. A random sample of 5 mugs is taken and the mass, in grams, of each mug is measured. The results are given below.
$$229.1 \quad 229.6 \quad 230.9 \quad 231.2 \quad 231.7$$
Find a 95% confidence interval for $\mu$, giving your limits correct to 1 decimal place. (4)

b. Sonia plans to take 20 random samples, each of 5 mugs. A 95% confidence interval for $\mu$ is to be determined for each sample. Find the probability that more than 3 of these intervals will not contain $\mu$. (3)
:::

:::note[Exercise 4: 6691/01/June13/7]

a. Lambs are born in a shed on Mill Farm. The birth weights, $x$ kg, of a random sample of 8 newborn lambs are given below.
$$4.12 \quad 5.12 \quad 4.84 \quad 4.65 \quad 3.55 \quad 3.65 \quad 3.96 \quad 3.40$$
Calculate unbiased estimates of the mean and variance of the birth weight of lambs born on Mill Farm. (3)

b. A further random sample of 32 lambs is chosen and the unbiased estimates of the mean and variance of the birth weight of lambs from this sample are 4.55 and 0.25 respectively. Treating the combined sample of 40 lambs as a single sample, estimate the standard error of the mean. (7)

c. The owner of Mill Farm researches the breed of lamb and discovers that the population of birth weights is normally distributed with standard deviation 0.67 kg. Calculate a 95% confidence interval for the mean birth weight of this breed of lamb using your combined sample mean. (3)
:::

:::note[Exercise 5: 6691/01/May14/6]

a. A random sample $X_1, X_2, \ldots, X_n$ is taken from a population with mean $\mu$. Show that
$$\overline{X} = \frac{1}{n} (X_1 + X_2 + \ldots + X_n)$$
is an unbiased estimator of the population mean $\mu$. (1)

b. A company produces small jars of coffee. Five jars of coffee were taken at random and weighed. The weights, in grams, were as follows:
$$197 \quad 203 \quad 205 \quad 201 \quad 195$$
Calculate unbiased estimates of the population mean and variance of the weights of the jars produced by the company. (4)

c. It is known from previous results that the weights are normally distributed with standard deviation 4.8 g. The manager is going to take a second random sample. He wishes to ensure that there is at least a 95% probability that the estimate of the population mean is within 1.25 g of its true value. Find the minimum sample size required. (4)
:::

:::note[Exercise 6: 6691/01/May16/7]

a. A restaurant states that its hamburgers contain 20% fat. Paul claims that the mean fat content of their hamburgers is less than 20%. Paul takes a random sample of 50 hamburgers from the restaurant and finds that they contain a mean fat content of 19.5% with a standard deviation of 1.5%. You may assume that the fat content of hamburgers is normally distributed. Find the 90% confidence interval for the mean fat content of hamburgers from the restaurant. (4)

b. State, with a reason, what action Paul should recommend the restaurant takes over the stated fat content of their hamburgers. (2)

c. The restaurant changes the mean fat content of their hamburgers to $\mu\%$ and adjusts the standard deviation to 2%. Paul takes a sample of size $n$ from this new batch of hamburgers. He uses the sample mean $\overline{X}$ as an estimator of $\mu$. Find the minimum value of $n$ such that
$$P(|\overline{X} - \mu| < 0.5) \geq 0.9.$$ (4)
:::

:::note[Exercise 7: WST03/Jan2022/1]

a. The weights, $x$ kg, of each of 10 watermelons selected at random from Priya's shop were recorded. The results are summarised as follows:
$$\sum x = 114.2 \quad \sum x^2 = 1310.464$$
Calculate unbiased estimates of the mean and the variance of the weights of the watermelons in Priya's shop. (3)

b. Priya researches the weight of watermelons, for the variety she has in her shop, and discovers that the weights of these watermelons are normally distributed with a standard deviation of 0.8 kg. Calculate a 95% confidence interval for the mean weight of watermelons in Priya's shop. Give the limits of your confidence interval to 2 decimal places. (4)

c. Priya claims that the confidence interval in part (b) suggests that nearly all of the watermelons in her shop weigh more than 10.5 kg. Use your answer to part (b) to estimate the smallest proportion of watermelons in her shop that weigh less than 10.5 kg. (3)
:::

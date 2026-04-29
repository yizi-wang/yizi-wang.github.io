---
title: "S2 Chapter 7: Hypothesis Testing"
---

# From Suspicion to Scientific Proof: The Art of Statistical Decision-Making

Remember our mobile game investigation from the previous chapter? We observed 0 SSR cards in 200 draws when the company claimed a 1% drop rate. We calculated that this had a 13.5% probability of occurring by random chance. But how do we decide: is 13.5% "small enough" to conclude the company is lying?

:::tip[The Central Challenge]
How do we transform probability calculations into definitive decisions about population parameters?
:::
This chapter introduces **hypothesis testing** — the systematic framework that converts statistical evidence into rational, defensible conclusions about the real world.

## 1. The Architecture of Scientific Proof

### 1.1 Returning to Our Mobile Game Mystery

Let's formalize our investigation using the hypothesis testing framework:

**Example 1.1: The SSR Investigation — Formal Setup**

**The Situation:** You observed 0 SSR cards in 200 draws. The game company claims $p = 0.01$ (1% drop rate).

**Two Competing Claims:**
- **Company's Claim:** "The drop rate is exactly 1% as advertised"
- **Your Suspicion:** "The drop rate is actually lower than 1%"

**The Statistical Question:** Which claim does the evidence support?

**The Challenge:** We can't directly prove either claim true. Instead, we ask: "If the company's claim were true, how likely is our observed evidence?"

This leads us to the fundamental concepts of hypothesis testing.

### 1.2 The Two Hypotheses: Innocence Until Proven Guilty

**Definition 1.1: Null Hypothesis ($H_0$)**

The **null hypothesis** is a statement about a population parameter that represents the "status quo" or "no effect" position. It's the claim we assume to be true until proven otherwise.

**Definition 1.2: Alternative Hypothesis ($H_1$)**

The **alternative hypothesis** is a statement that contradicts the null hypothesis. It represents what we're trying to prove or the "research claim."

**Example 1.2: Hypotheses for the SSR Investigation**

**Null Hypothesis:** $H_0: p = 0.01$
("The game company is honest about the 1% drop rate")

**Alternative Hypothesis:** $H_1: p < 0.01$
("The actual drop rate is lower than claimed")

**The Logic:** We assume the company is innocent ($H_0$) unless we have strong enough evidence to conclude they're lying ($H_1$).

:::tip[The Burden of Proof Principle]
Just like in a courtroom, the burden of proof lies with the alternative hypothesis. We:

1. Start by assuming $H_0$ is true
2. Collect evidence (sample data)
3. Ask: "If $H_0$ were true, how unlikely is this evidence?"
4. If the evidence is sufficiently unlikely, we reject $H_0$ in favor of $H_1$
:::
### 1.3 The Three Types of Alternative Hypotheses

Alternative hypotheses come in three forms, each leading to different testing approaches:

**Example 1.3: Types of Alternative Hypotheses**

Suppose we're testing a claim about a population proportion $p$:

**1. Lower-Tail Test (One-Tailed):**
- $H_0: p = p_0$ vs. $H_1: p < p_0$

**2. Upper-Tail Test (One-Tailed):**
- $H_0: p = p_0$ vs. $H_1: p > p_0$

**3. Two-Tailed Test:**
- $H_0: p = p_0$ vs. $H_1: p \neq p_0$

**Example 1.4: In-Class Exercise — Identifying Hypotheses**

For each scenario, identify $H_0$ and $H_1$, and classify the test type:

**Scenario A:** A pharmaceutical company claims their new painkiller is effective for 85% of patients. You suspect it might be less effective.

$H_0$: \_\_\_ \quad $H_1$: \_\_\_ \quad Test type: \_\_\_

**Scenario B:** A manufacturer claims their batteries last exactly 100 hours on average. You want to test if this claim is accurate.

$H_0$: \_\_\_ \quad $H_1$: \_\_\_ \quad Test type: \_\_\_

**Scenario C:** A school principal believes a new program will improve test scores above the current 72% pass rate.

$H_0$: \_\_\_ \quad $H_1$: \_\_\_ \quad Test type: \_\_\_

## 2. The Machinery of Decision-Making

### 2.1 Test Statistics: Translating Data into Evidence

**Definition 2.1: Test Statistic**

A **test statistic** is the observed value from the sample that we use to assess whether the data aligns with the null hypothesis.

:::tip[Test Statistics for Common Distributions]
**For Binomial Distribution:** Test statistic = observed number of successes ($X$)

**For Poisson Distribution:** Test statistic = observed count of events ($X$)

The key insight: We don't just look at the test statistic value — we examine its **probability under $H_0$**.
:::
**Example 2.1: Test Statistic for SSR Investigation**

**Our Setup:**
- $H_0: p = 0.01$ (company's claim)
- $H_1: p < 0.01$ (our suspicion)
- Sample: $n = 200$ draws
- Test Statistic: $X = 0$ SSR cards observed

**Under $H_0$:** If the company is honest, then $X \sim \text{Poisson}(\lambda = 200 \times 0.01 = 2)$

**The Critical Question:** How likely is observing $X = 0$ or something even more extreme (supporting $H_1$)?

### 2.2 p-Values: Quantifying the Strength of Evidence

The p-value is the cornerstone concept in hypothesis testing.

**Definition 2.2: p-value**

The **p-value** is the probability of observing the test statistic value (or something more extreme in the direction of $H_1$) assuming that $H_0$ is true.

**Example 2.2: Calculating p-values for Different Test Types**

**Given:** Test statistic $X = x_{\text{observed}}$ and expected value under $H_0$ is $\mu_0$

**Lower-Tail Test ($H_1: \theta < \theta_0$):**
- Use when observed value is *below* expectation
- p-value = $P(X \leq x_{\text{observed}})$ under $H_0$

**Upper-Tail Test ($H_1: \theta > \theta_0$):**
- Use when observed value is *above* expectation
- p-value = $P(X \geq x_{\text{observed}})$ under $H_0$

**Two-Tailed Test ($H_1: \theta \neq \theta_0$):**
- Use when testing for any difference from expected
- If $x_{\text{observed}} < \mu_0$: p-value = $2 \times P(X \leq x_{\text{observed}})$
- If $x_{\text{observed}} > \mu_0$: p-value = $2 \times P(X \geq x_{\text{observed}})$

**Example 2.3: Why "More Extreme"? — The Logic Behind p-values**

**The Question Students Always Ask:** "Why don't we just calculate $P(X = x_{\text{observed}})$? Why include more extreme values?"

**The Key Insight:** We're asking "How surprised should we be by this evidence?"

**Scenario:** A coin manufacturer claims their coin is fair ($p = 0.5$). You flip it 10 times and observe 8 heads. Should you be suspicious?

**Setup:**
- $H_0: p = 0.5$ (coin is fair)
- $H_1: p > 0.5$ (coin is biased toward heads)
- Test statistic: $X = 8$ heads in 10 flips
- Under $H_0$: $X \sim \text{Binomial}(10, 0.5)$

**Method 1 — Wrong Approach (Only Exact Probability):**

$$P(X = 8) = \binom{10}{8} \times 0.5^{10} = 45 \times \frac{1}{1024} \approx 0.044$$

**Method 2 — Correct Approach (Include More Extreme):**

Since $X = 8 > 5$ (expected), we calculate:

$$\text{p-value} = P(X \geq 8) = P(X = 8) + P(X = 9) + P(X = 10)$$

$$= 0.044 + 0.010 + 0.001 = 0.055$$

**Why Method 2 Is Correct:**

**The Logic:** If the null hypothesis were true, any outcome "at least as extreme" as what we observed would be equally surprising evidence against $H_0$.

- If we observed 8 heads, we'd be suspicious
- If we observed 9 heads, we'd be *even more* suspicious
- If we observed 10 heads, we'd be *extremely* suspicious

Since we're asking "How likely is it to get evidence this strong or stronger against $H_0$?", we must include all these more extreme cases.

**Example 2.4: SSR Investigation — p-value Calculation**

**Our Test:** $H_0: p = 0.01$ vs. $H_1: p < 0.01$ (lower-tail test)

**Test Statistic:** $X = 0$ SSR cards in 200 draws

**Under $H_0$:** $X \sim \text{Poisson}(2)$

**p-value Calculation:**

Since we observed $X = 0$ and this supports $H_1: p < 0.01$, we calculate:

$$\text{p-value} = P(X \leq 0) = P(X = 0) = e^{-2} \cdot \frac{2^0}{0!} = e^{-2} \approx 0.135$$

**Interpretation:** There's a 13.5% chance of observing 0 or fewer SSR cards if the company is telling the truth.

### 2.3 Significance Levels: Drawing the Line

**Definition 2.3: Significance Level ($\alpha$)**

The **significance level** is the threshold probability below which we consider evidence "strong enough" to reject the null hypothesis. Common values are $\alpha = 0.05$, $0.01$, or $0.10$.

:::tip[Decision Rule]
**If p-value $\leq \alpha$:** Reject $H_0$ (evidence is "statistically significant")

**If p-value $> \alpha$:** Fail to reject $H_0$ (insufficient evidence against $H_0$)
:::
**Example 2.5: SSR Investigation — Final Decision**

**Our Results:**
- p-value = 0.135
- Let's use $\alpha = 0.05$ (5% significance level)

**Decision:** Since $0.135 > 0.05$, we **fail to reject** $H_0$.

**Conclusion:** At the 5% significance level, we don't have sufficient evidence to conclude that the game company is lying about their SSR drop rates.

**Business Interpretation:** The observed evidence (0 SSR cards) is not unusual enough to justify accusations of fraud against the company.

## 3. Advanced Applications: Multiple Scenarios

### 3.1 Upper-Tail Testing: When Things Are "Too Good"

**Example 3.1: The Suspicious Lucky Player**

**The Situation:** A player claims they got 8 SSR cards in 200 draws using the same game. Other players suspect they might be using cheats or exploits.

**Setup the Test:**
- $H_0: p = 0.01$ (player is not cheating)
- $H_1: p > 0.01$ (player has unfair advantage)
- Test statistic: $X = 8$ SSR cards
- Under $H_0$: $X \sim \text{Poisson}(2)$

**Calculate p-value:**

Since we observed $X = 8 > 2$ (expected), this is an upper-tail test:

$$\text{p-value} = P(X \geq 8) = 1 - P(X \leq 7)$$

Using Poisson tables or calculator:

$$P(X \leq 7) \approx 0.999$$

$$\text{p-value} = 1 - 0.999 = 0.001$$

**Decision:** At $\alpha = 0.05$, since $0.001 < 0.05$, we **reject** $H_0$.

**Conclusion:** We have strong evidence that this player has an unfair advantage.

### 3.2 Two-Tailed Testing: Testing for Any Difference

**Example 3.2: Quality Control in Manufacturing**

**The Situation:** A factory produces electronic components with a target defect rate of 2%. Quality control wants to test if today's production batch has a different defect rate than the target.

**Sample Data:** In a random sample of 300 components, 12 were defective.

**Setup the Test:**
- $H_0: p = 0.02$ (defect rate meets target)
- $H_1: p \neq 0.02$ (defect rate differs from target)
- Test statistic: $X = 12$ defective components
- Under $H_0$: $X \sim \text{Poisson}(\lambda = 300 \times 0.02 = 6)$

**Determine Direction:**

Expected value under $H_0$ is $\lambda = 6$

Observed value is $X = 12 > 6$, so we use upper tail

**Calculate p-value:**

For two-tailed test with $X = 12$:

$$\text{p-value} = 2 \times P(X \geq 12)$$

Using Poisson calculations:

$$P(X \geq 12) = 1 - P(X \leq 11) \approx 1 - 0.999 = 0.001$$

$$\text{p-value} = 2 \times 0.001 = 0.002$$

**Decision:** At $\alpha = 0.05$, since $0.002 < 0.05$, we **reject** $H_0$.

**Conclusion:** The defect rate today is significantly different from the 2% target. The factory should investigate potential quality issues.

**Example 3.3: In-Class Exercise — Binomial Hypothesis Testing**

A pharmaceutical company claims that their new drug is effective for 70% of patients. A clinical trial with 50 patients shows that 40 patients responded positively to the treatment.

**Your Task:** Test whether the drug's effectiveness differs from the claimed 70% using $\alpha = 0.10$.

**Step 1:** Set up the hypotheses

$H_0$: \_\_\_ \quad $H_1$: \_\_\_ \quad Test type: \_\_\_

**Step 2:** Identify the test statistic and its distribution under $H_0$

Test statistic: $X = $ \_\_\_

Under $H_0$: $X \sim$ \_\_\_

**Step 3:** Calculate the p-value

Expected value under $H_0$: $E(X) = $ \_\_\_

Since $X = 40$ \underline{\quad} $E(X)$, we use the \_\_\_ tail.

p-value = \_\_\_

**Step 4:** Make your decision and conclusion

## 4. The Critical Region Approach

An alternative to p-values is the critical region method, which pre-determines decision boundaries.

### 4.1 Critical Values and Critical Regions

**Definition 4.1: Critical Region**

The **critical region** is a set of test statistic values that would lead us to reject the null hypothesis. If the observed test statistic falls in this region, we reject $H_0$.

**Definition 4.2: Critical Value**

The **critical value** is the boundary point that separates the critical region from the acceptance region.

**Example 4.1: Critical Region for SSR Investigation**

**Test Setup:**
- $H_0: p = 0.01$ vs. $H_1: p < 0.01$ (lower-tail test)
- Under $H_0$: $X \sim \text{Poisson}(2)$
- Significance level: $\alpha = 0.05$

**Find Critical Region:**

We need to find the largest value $c$ such that $P(X \leq c) \leq 0.05$ under $H_0$.

Using Poisson probabilities:

$$P(X = 0) = 0.135 > 0.05$$

$$P(X \leq 0) = 0.135 > 0.05$$

Since even $P(X = 0) > 0.05$, there is no critical region at $\alpha = 0.05$.

**Interpretation:** We cannot reject $H_0$ at the 5% level for any possible observation. This shows that our sample size of 200 may be too small to detect the suspected difference at this significance level.

**Example 4.2: Two-Tailed Critical Region**

**Test Setup:**
- $H_0: \lambda = 10$ vs. $H_1: \lambda \neq 10$ (two-tailed test)
- Under $H_0$: $X \sim \text{Poisson}(10)$
- Significance level: $\alpha = 0.05$

**Find Critical Region:**

For a two-tailed test, we split $\alpha = 0.05$ into two tails of 0.025 each.

**Lower Critical Value:** Find $c_1$ such that $P(X \leq c_1) \leq 0.025$

**Upper Critical Value:** Find $c_2$ such that $P(X \geq c_2) \leq 0.025$

Using Poisson tables for $\lambda = 10$:
- $P(X \leq 4) = 0.029 \approx 0.025$, so $c_1 = 4$
- $P(X \geq 17) = 0.025$, so $c_2 = 17$

**Critical Region:** $\{0, 1, 2, 3, 4\} \cup \{17, 18, 19, \ldots\}$

**Decision Rule:** Reject $H_0$ if $X \leq 4$ or $X \geq 17$

## 5. Real-World Applications

### 5.1 Medical Testing

**Example 5.1: COVID-19 Rapid Test Validation**

A medical device company develops a rapid COVID-19 test. They claim it has a 95% sensitivity (correctly identifies positive cases).

**Study Design:** Test 200 confirmed COVID-positive patients with the rapid test. 185 test positive.

**Hypothesis Test:**
- $H_0: p = 0.95$ (company's claim is correct)
- $H_1: p < 0.95$ (test is less sensitive than claimed)
- Test statistic: $X = 185$ positive results
- Under $H_0$: $X \sim \text{Binomial}(200, 0.95) \approx \text{Poisson}(190)$

**Analysis:**

Expected under $H_0$: $200 \times 0.95 = 190$

Observed: $X = 185 < 190$, so lower-tail test

p-value $= P(X \leq 185) \approx 0.18$ (using normal approximation)

**Conclusion:** At $\alpha = 0.05$, we fail to reject $H_0$. The test's sensitivity appears consistent with the 95% claim.

### 5.2 Business Quality Control

**Example 5.2: E-commerce Return Rate Analysis**

An online retailer historically has a 5% return rate for electronics. After implementing new quality checks, they want to determine if the return rate has decreased.

**Data:** In the first month after implementation, 18 out of 500 electronics orders were returned.

**Setup:**
- $H_0: p = 0.05$ (no improvement)
- $H_1: p < 0.05$ (return rate decreased)
- Test statistic: $X = 18$ returns
- Under $H_0$: $X \sim \text{Poisson}(25)$

**Analysis:**

Expected: $500 \times 0.05 = 25$

Observed: $X = 18 < 25$

p-value $= P(X \leq 18) \approx 0.11$

**Business Decision:** At $\alpha = 0.05$, insufficient evidence that quality improvements reduced return rates. The retailer might consider:
- Collecting more data
- Investigating other factors
- Setting a higher significance level if false negatives are costly

**Example 5.3: In-Class Exercise — Medical Treatment Effectiveness**

The standard treatment for a particular disease has a 50% probability of success. A certain doctor has undertaken research in this area and has produced a new medicine which has been successful with 11 out of 20 patients. The doctor claims that the new medicine represents an improvement on the standard treatment.

Test, at the 5% significance level, the claim made by the doctor.

**Example 5.4: In-Class Exercise — Restaurant Meal Preferences**

Over a long period of time, it has been found that at Enrico's restaurant the ratio of non-vegetarian to vegetarian meals is 2 to 1. At Manuel's restaurant, in a random sample of 10 people ordering meals, only one ordered a vegetarian meal.

Using a 5% level of significance, test whether or not the proportion of people eating vegetarian meals at Manuel's restaurant is different to that at Enrico's restaurant.

## Chapter Summary: The Power of Statistical Proof

Hypothesis testing transforms uncertain observations into confident decisions by:

:::tip[The Hypothesis Testing Process]
**1. Formulate Hypotheses:** Set up $H_0$ (status quo) vs. $H_1$ (what you're trying to prove)

**2. Choose Significance Level:** Decide how much Type I error risk you're willing to accept

**3. Identify Test Statistic:** Determine the observed value that measures evidence against $H_0$

**4. Calculate p-value:** Find the probability of observing this evidence (or stronger) if $H_0$ were true

**5. Make Decision:** Compare p-value to $\alpha$ and draw conclusions

**6. Interpret in Context:** Translate statistical results into practical implications
:::
**Key Insights for Different Distributions:**
- **Binomial:** Use when counting successes in fixed trials
- **Poisson:** Use for rare events or large $n$, small $p$ scenarios
- **One-tail vs Two-tail:** Depends on whether you're testing for a specific direction or any difference

**The Revolution:** We've moved from subjective judgment ("that seems unusual") to objective assessment ("there's only a 1.3% chance this happened by coincidence"). This precision enables evidence-based decision making in science, business, and public policy.

## Homework Exercises

**Exercise 6684/01/June15/5**

Liftserall claims that the lift they maintain in a block of flats breaks down at random at a mean rate of 4 times per month. To test this, the number of times the lift breaks down in a month is recorded.

(a) Using a 5% level of significance, find the critical region for a two-tailed test of the null hypothesis that 'the mean rate at which the lift breaks down is 4 times per month'. The probability of rejection in each of the tails should be as close to 2.5% as possible. (3)

Over a randomly selected 1 month period the lift broke down 3 times.

(b) Test, at the 5% level of significance, whether Liftserall's claim is correct. State your hypotheses clearly. (2)

(c) State the actual significance level of this test. (1)

**Exercise WST02/01/June15/2**

A company produces chocolate chip biscuits. The number of chocolate chips per biscuit has a Poisson distribution with mean 8.

(a) Find the probability that one of these biscuits, selected at random, does not contain 8 chocolate chips. (2)

A small packet contains 4 of these biscuits, selected at random.

(b) Find the probability that each biscuit in the packet contains at least 8 chocolate chips. (3)

A large packet contains 9 of these biscuits, selected at random.

(c) Use a suitable approximation to find the probability that there are more than 75 chocolate chips in the packet. (5)

A shop sells packets of biscuits, randomly, at a rate of 1.5 packets per hour. Following an advertising campaign, 11 packets are sold in 4 hours.

(d) Test, at the 5% level of significance, whether or not there is evidence that the rate of sales of packets of biscuits has increased. State your hypotheses clearly. (5)

**Exercise WST02/01/June15/6**

Past information at a computer shop shows that 40% of customers buy insurance when they purchase a product. In a random sample of 30 customers, $X$ buy insurance.

(a) Write down a suitable model for the distribution of $X$. (1)

(b) State an assumption that has been made for the model in part (a) to be suitable. (1)

The probability that fewer than $r$ customers buy insurance is less than 0.05.

(c) Find the largest possible value of $r$. (2)

A second random sample, of 100 customers, is taken.

The probability that at least $t$ of these customers buy insurance is 0.938, correct to 3 decimal places.

(d) Using a suitable approximation, find the value of $t$. (6)

The shop now offers an extended warranty on all products. Following this, a random sample of 25 customers is taken and 6 of them buy insurance.

(e) Test, at the 10% level of significance, whether or not there is evidence that the proportion of customers who buy insurance has decreased. State your hypotheses clearly. (5)

**Exercise WST02/01/June15/4**

A single observation $x$ is to be taken from a Poisson distribution with parameter $\lambda$.

This observation is to be used to test, at a 5% level of significance,

$$H_0: \lambda = k \quad \text{vs} \quad H_1: \lambda \neq k$$

where $k$ is a positive integer.

Given that the critical region for this test is $(X = 0) \cup (X > 9)$:

(a) Find the value of $k$, justifying your answer. (3)

(b) Find the actual significance level of this test. (2)

**Exercise WST02/01/Jan16/5**

The number of eruptions of a volcano in a 10 year period is modelled by a Poisson distribution with mean 1.

(a) Find the probability that this volcano erupts at least once in each of 2 randomly selected 10 year periods. (2)

(b) Find the probability that this volcano does not erupt in a randomly selected 20 year period. (2)

The probability that this volcano erupts exactly 4 times in a randomly selected $w$ year period is 0.0443 to 3 significant figures.

(c) Use the tables to find the value of $w$. (3)

A scientist claims that the mean number of eruptions of this volcano in a 10 year period is more than 1.

She selects a 100 year period at random in order to test her claim.

(d) State the null hypothesis for this test. (1)

(e) Determine the critical region for the test at the 5% level of significance. (2)

**Exercise WST02/01/June16/3**

A single observation $x$ is to be taken from $X \sim \text{B}(12, p)$.

This observation is used to test $H_0: p = 0.45$ against $H_1: p > 0.45$.

(a) Using a 5% level of significance, find the critical region for this test. (2)

(b) State the actual significance level of this test. (1)

The value of the observation is found to be 9.

(c) State the conclusion that can be made based on this observation. (1)

(d) State whether or not this conclusion would change if the same test was carried out at the
(i) 10% level of significance, (2)
(ii) 1% level of significance.

---
title: "S3 Chapter 4: Central Limit Theorem and Comparing Means"
---

## Introduction: Bridging Past and Future

### Where We Came From (Chapter 3 & S2)
In Chapter 3, we learned how to evaluate estimators (Bias, Efficiency) and construct Confidence Intervals. However, nearly all our calculations relied on a crucial assumption:
**"Assume the population is Normally Distributed."**
But real data is often skewed, discrete, or just weird. What do we do then?

:::note[Callback to Last Semester (S2)]
You have actually already seen the solution! Recall the normal approximations from S2:
- **Binomial $\to$ Normal:** If $X \sim B(n, p)$ and $n$ is large, $X \approx N(np, npq)$.
- **Poisson $\to$ Normal:** If $X \sim Po(\lambda)$ and $\lambda$ is large, $X \approx N(\lambda, \lambda)$.

These weren't just random lucky coincidences. They were specific instances of a much more powerful universal law: the **Central Limit Theorem (CLT)**.
:::

### Where We Are Going (Chapter 4)
In this chapter, we generalize those S2 approximations to **any** distribution.
- **Goal 1:** Use CLT to perform inference on a single sample mean from *any* distribution.
- **Goal 2:** Use CLT to compare two sample means from *different* distributions.

## 1. Computer Simulation and the Shape of Sample Means

## 2. The Central Limit Theorem (CLT)

### Informal Statement

:::tip[Central Limit Theorem (informal)]
If we take a large random sample of size $n$ from *any* population with mean $\mu$ and variance $\sigma^2$,
then the sample mean $\bar{X}$ is approximately normally distributed with

$$
\bar{X} \approx N\!\left(\mu, \frac{\sigma^2}{n}\right),
$$

no matter what the original population looks like (as long as it has finite variance).
:::

### Formal Version

**Theorem: Central Limit Theorem**

Let $X_1, X_2, \ldots, X_n$ be independent and identically distributed random variables with

$$
E[X_i] = \mu, \qquad \mathrm{Var}(X_i) = \sigma^2 < \infty.
$$

Then as $n \to \infty$,

$$
Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \;\Longrightarrow\; N(0, 1),
$$

that is, the distribution of $Z$ tends to the standard normal distribution.

For large $n$ this gives the useful approximation

$$
\bar{X} \approx N\!\left(\mu, \frac{\sigma^2}{n}\right).
$$

### Conditions and Caveats

:::caution[When Can We Use CLT?]
- **Independence:** $X_1, X_2, \ldots, X_n$ should be independent.
- **Identical distribution:** all $X_i$ come from the same population.
- **Finite variance:** $\sigma^2$ should be finite (no extremely heavy tails).
- **Sample size large:** rules of thumb: $n \ge 30$ is often enough; more may be needed if the population is very skewed.
:::

**Example: Discrete General Distribution**

Consider a highly volatile asset. Its annual return $R$ follows a discrete distribution:
- **Loss (-10%):** Probability $0.2$
- **Break-even (0%):** Probability $0.5$
- **Gain (+20%):** Probability $0.3$

This distribution is discrete and not symmetric.

**Task:** Suppose you hold a portfolio of $n=50$ such independent assets. What is the probability that your **average return** is greater than 5%?

**Step 1: Calculate Population Parameters ($\mu, \sigma^2$)**

First, we analyze the single asset $R$.

$$
E[R] = (-10 \times 0.2) + (0 \times 0.5) + (20 \times 0.3) = -2 + 0 + 6 = 4\%
$$

$$
E[R^2] = ((-10)^2 \times 0.2) + (0^2 \times 0.5) + (20^2 \times 0.3) = (100 \times 0.2) + 0 + (400 \times 0.3) = 20 + 120 = 140
$$

$$
\text{Var}(R) = E[R^2] - (E[R])^2 = 140 - 4^2 = 124
$$

So, the population has $\mu = 4$ and $\sigma^2 = 124$.

**Step 2: Apply CLT to the Sample Mean $\bar{R}$**

Since $n=50$ is large, the average return $\bar{R}$ follows:

$$
\bar{R} \sim N\left(\mu, \frac{\sigma^2}{n}\right) = N\left(4, \frac{124}{50}\right) = N(4, 2.48)
$$

Standard Deviation of $\bar{R} = \sqrt{2.48} \approx 1.575$.

**Step 3: Calculate Probability**

We want $P(\bar{R} > 5)$. Standardize:

$$
Z = \frac{5 - 4}{1.575} = \frac{1}{1.575} \approx 0.635
$$

Using standard normal tables:

$$
P(Z > 0.635) = 1 - P(Z < 0.635) \approx 1 - 0.737 = 0.263
$$

**Conclusion:** Even though individual assets have a discrete, "jumpy" distribution, the portfolio average behaves normally. There is a ~26.3% chance the portfolio beats 5%.

## 3. Using CLT for One-Sample Inference

### Sampling Distribution of the Mean (Non-Normal Population)

Under the CLT, when $n$ is large,

$$
\bar{X} \approx N\!\left(\mu, \frac{\sigma^2}{n}\right).
$$

If $\sigma$ is unknown we estimate it with the sample standard deviation $S$ and approximate

$$
\bar{X} \approx N\!\left(\mu, \frac{S^2}{n}\right).
$$

**Definition: Estimated Standard Error of the Mean**

For a large sample of size $n$, the **estimated standard error** of the sample mean is

$$
\mathrm{SE}(\bar{X}) = \frac{S}{\sqrt{n}},
$$

where $S$ is the sample standard deviation.

### Large-Sample Confidence Interval for a Mean

Using the CLT, for large $n$ we have approximately

$$
Z = \frac{\bar{X} - \mu}{S/\sqrt{n}} \approx N(0, 1).
$$

Therefore a $100(1-\alpha)\%$ confidence interval for $\mu$ is

$$
\bar{X} \pm z^* \cdot \frac{S}{\sqrt{n}},
$$

where $z^*$ satisfies $P(-z^* < Z < z^*) = 1 - \alpha$ for $Z \sim N(0,1)$.

| Confidence level | $\alpha$ | $z^*$ |
|:---:|:---:|:---:|
| 90% | 0.10 | 1.645 |
| 95% | 0.05 | 1.96 |
| 99% | 0.01 | 2.576 |

### Large-Sample $z$-Test for a Mean

To test

$$
H_0: \mu = \mu_0 \quad\text{against}\quad H_1: \mu \ne \mu_0,
$$

with a large sample and unknown $\sigma$, we use the test statistic

$$
Z = \frac{\bar{X} - \mu_0}{S/\sqrt{n}} \approx N(0, 1) \quad\text{under } H_0.
$$

We reject $H_0$ if $|Z|$ is too large (outside the critical region determined by the chosen significance level).

## 4. CLT for Differences of Means

### Independent Samples and Difference of Means

Suppose we have two populations:
- Population A with mean $\mu_A$ and variance $\sigma_A^2$
- Population B with mean $\mu_B$ and variance $\sigma_B^2$

We take independent random samples:

$$
X_1, \ldots, X_{n_A} \quad\text{from population A}, \qquad
Y_1, \ldots, Y_{n_B} \quad\text{from population B},
$$

and form the sample means $\bar{X}$ and $\bar{Y}$.

If both sample sizes are large, CLT gives

$$
\bar{X} \approx N\!\left(\mu_A, \frac{\sigma_A^2}{n_A}\right),
\qquad
\bar{Y} \approx N\!\left(\mu_B, \frac{\sigma_B^2}{n_B}\right),
$$

and, because the samples are independent,

$$
\bar{X} - \bar{Y} \approx N\!\left(\mu_A - \mu_B,
       \frac{\sigma_A^2}{n_A} + \frac{\sigma_B^2}{n_B}\right).
$$

### Standard Error of a Difference

When the population variances are unknown we estimate them by the sample variances $S_A^2$ and $S_B^2$ and use the estimated standard error

$$
\mathrm{SE}(\bar{X} - \bar{Y}) =
\sqrt{\frac{S_A^2}{n_A} + \frac{S_B^2}{n_B}}.
$$

### Confidence Interval for a Difference of Means

A large-sample $100(1-\alpha)\%$ confidence interval for $\mu_A - \mu_B$ is

$$
(\bar{X} - \bar{Y}) \pm z^* \cdot \mathrm{SE}(\bar{X} - \bar{Y}).
$$

### Hypothesis Test for a Difference of Means

To test

$$
H_0: \mu_A - \mu_B = \Delta_0
$$

against one- or two-sided alternatives, we use

$$
Z = \frac{(\bar{X} - \bar{Y}) - \Delta_0}{\mathrm{SE}(\bar{X} - \bar{Y})}
\approx N(0,1) \quad\text{under } H_0
$$

for large samples.

:::caution[Assumptions for Two-Sample CLT Methods]
- The two samples are independent of each other.
- Within each sample, observations are independent and identically distributed.
- Sample sizes $n_A$ and $n_B$ are both large enough for CLT to apply.
:::

**Example: Skewed vs Uniform Distributions**

An engineer compares an old server (A) with a new server (B).
- **Server A (Old):** Latency is **Skewed**. Most requests are fast, but some hang.
$$\mu_A = 205 \text{ ms}, \quad \sigma_A = 50 \text{ ms}$$
- **Server B (New):** Latency is **Uniformly Distributed** between 150ms and 210ms.
$$X_B \sim U[150, 210]$$

We collect $n_A = 100$ requests from A and $n_B = 100$ from B.

**Question:** What is the probability that the sample mean of A is at least 20ms slower (higher) than B? i.e., $P(\bar{X}_A - \bar{X}_B > 20)$.

**Step 1: Determine Parameters for B**

For Uniform $[a, b]$:

$$
\mu_B = \frac{a+b}{2} = \frac{150+210}{2} = 180 \text{ ms}
$$

$$
\sigma_B^2 = \frac{(b-a)^2}{12} = \frac{(60)^2}{12} = \frac{3600}{12} = 300
$$

**Step 2: Distribution of the Difference**

Mean Difference: $\mu_{diff} = \mu_A - \mu_B = 205 - 180 = 25 \text{ ms}$.

Variance of Difference:

$$
\text{Var}(\bar{X}_A - \bar{X}_B) = \frac{\sigma_A^2}{n_A} + \frac{\sigma_B^2}{n_B} = \frac{50^2}{100} + \frac{300}{100} = \frac{2500}{100} + 3 = 25 + 3 = 28
$$

Standard Error = $\sqrt{28} \approx 5.29$ ms.

**Step 3: Calculate Probability**

We want $P(D > 20)$ where $D \sim N(25, 28)$.

$$
Z = \frac{20 - 25}{5.29} = \frac{-5}{5.29} \approx -0.945
$$

$$
P(Z > -0.945) = P(Z < 0.945) \approx 0.8277
$$

**Insight:** Despite A being skewed and B being uniform, we can easily calculate probabilities about their difference using the Normal distribution!

## Homework Exercises

### Part A: CLT and Single-Sample Mean

:::note[Exercise 1: 6691/01/June11/1]
Explain what you understand by the Central Limit Theorem. (3)

A six-sided die is changed so that there are three faces marked 1, two faces marked 3 and one face marked 6.
The die is rolled 40 times and the mean of the 40 scores is recorded.

a. Find an approximate distribution for the mean of the scores. (3)

b. Use your approximation to estimate the probability that the mean is greater than 3. (4)
:::

:::note[Exercise 2: 6691/01R/June13/6]
The continuous random variable $X$ is uniformly distributed over the interval
$$[a - 1, a + 5],$$
where $a$ is a constant.

Fifty observations of $X$ are taken, giving a sample mean of $17.2$.

a. Use the Central Limit Theorem to find an approximate distribution for $\bar{X}$. (3)

b. Hence find a 95% confidence interval for $a$. (4)
:::

### Part B: One-Sample Tests Using CLT

:::note[Exercise 3: 6691/01/May14/7]
A machine fills packets with $X$ grams of powder where $X$ is normally distributed with mean $\mu$.
Each packet is supposed to contain 1 kg of powder.

To comply with regulations, the weight of powder in a randomly selected packet should be such that
$$P(X < \mu - 30) = 0.0005.$$

a. Show that this requires the standard deviation to be $9.117$ g, correct to 3 decimal places. (3)

A random sample of 10 packets is selected from the machine.
The weight, in grams, of powder in each packet is as follows:
$$999.8,\; 991.6,\; 1000.3,\; 1006.1,\; 1008.2,\; 997.0,\; 993.2,\; 1000.0,\; 997.1,\; 1002.1.$$

b. Assuming that the standard deviation of the population is $9.117$ g, test, at the 1% significance level, whether or not the machine is delivering packets with mean weight of less than 1 kg. State your hypotheses clearly. (7)
:::

:::note[Exercise 4: WST03/01/May16/8]
A six-sided die is labelled with the numbers 1, 2, 3, 4, 5 and 6.

A group of 50 students want to test whether or not the die is fair for the number six.
The 50 students each roll the die 30 times and record the number of sixes they each obtain.

Let $\bar{X}$ denote the mean number of sixes obtained by the 50 students.
We wish to test
$$H_0 : p = \frac{1}{6} \quad\text{against}\quad H_1 : p \ne \frac{1}{6},$$
where $p$ is the probability of rolling a 6.

a. Use the Central Limit Theorem to find an approximate distribution for $\bar{X}$, if $H_0$ is true. (3)

b. Hence find, in terms of $\bar{X}$, the critical region for this test. Use a 5% level of significance. (4)
:::

### Part C: Difference of Two Means

:::note[Exercise 5: 6691/01/June13/6]
Fruit-n-Veg4U Market Gardens grow tomatoes.
They want to improve their yield of tomatoes by at least 1 kg per plant by buying a new variety.

The variance of the yield of the old variety of plant is $0.5~\text{kg}^2$ and the variance of the yield for the new variety is $0.75~\text{kg}^2$.
A random sample of 60 plants of the old variety has a mean yield of $5.5$ kg.
A random sample of 70 plants of the new variety has a mean yield of $7$ kg.

a. Stating your hypotheses clearly, test, at the 5% level of significance, whether or not there is evidence that the mean yield of the new variety is more than 1 kg greater than the mean yield of the old variety. (9)

b. Explain the relevance of the Central Limit Theorem to the test in part (a). (2)
:::

:::note[Exercise 6: WST03/01/May14/3]
A grocer believes that the average weight of a grapefruit from farm A is greater than the average weight of a grapefruit from farm B.

The weights, in grams, of 80 grapefruit selected at random from farm A have a mean value of 532 g and a standard deviation $s_A$ of 35 g.
A random sample of 100 grapefruit from farm B has a mean weight of 520 g and a standard deviation $s_B$ of 28 g.

Stating your hypotheses clearly and using a 1% level of significance, test whether or not the grocer's belief is supported by the data. (7)
:::

:::note[Exercise 7: 6691/01R/June13/7]
A farmer monitored the amount of lead in soil in a field next to a factory.
He took 100 samples of soil, randomly selected from different parts of the field,
and found the mean weight of lead to be 67 mg/kg with standard deviation 25 mg/kg.

After the factory closed, the farmer took 150 samples of soil,
randomly selected from different parts of the field,
and found the mean weight of lead to be 60 mg/kg with standard deviation 10 mg/kg.

a. Test, at the 5% level of significance, whether or not the mean weight of lead in the soil decreased after the factory closed. State your hypotheses clearly. (7)

b. Explain the significance of the Central Limit Theorem to the test in part (a). (1)

c. State an assumption you have made to carry out this test. (1)
:::

:::note[Exercise 8: 6691/01R/May14/5]
A student believes that there is a difference in the mean lengths of English and French films.
He goes to the university video library and randomly selects a sample of 120 English films and a sample of 70 French films.
He notes the length, $x$ minutes, of each of the films in his samples.
His data are summarised in the table below.

|  | $\sum x$ | $\sum x^2$ | $s^2$ | $n$ |
|:---|:---:|:---:|:---:|:---:|
| English films | 10650 | 956909 | 98.5 | 120 |
| French films | 6510 | 615849 | 151 | 70 |

a. Verify that the unbiased estimate of the variance, $s^2$, of the lengths of English films is $98.5~\text{minutes}^2$. (2)

b. Stating your hypotheses clearly, test, at the 1% level of significance, whether or not the mean lengths of English and French films are different. (7)

c. Explain the significance of the Central Limit Theorem to the test in part (b). (1)

d. The university video library contained 724 English films and 473 French films. Explain how the student could have taken a stratified sample of 190 of these films. (3)
:::

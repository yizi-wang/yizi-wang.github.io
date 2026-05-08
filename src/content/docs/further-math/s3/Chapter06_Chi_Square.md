---
title: "S3 Chapter 6: Goodness of Fit and Contingency Tables"
---

## Introduction: The Challenge of Randomness

### The "Honest Dice" Project

Imagine you are a board game enthusiast. You come across a Kickstarter project called "The Honest Dice." The founders claim that through precision engineering and special materials, they have created the fairest dice in history. They assert that the probability of rolling any face is strictly $1/6$, unlike standard mass-produced dice which inevitably have manufacturing imperfections.

**But here is the problem:**

- Every physical object has imperfections.
- In a game session, these tiny biases can accumulate over hundreds of rolls.
- How can you scientifically verify if this "Honest Dice" is actually fairer than a cheap plastic one?
- More importantly, how can the founders provide convincing statistical evidence to potential backers?

### Beyond Board Games: Digital Randomness

This problem isn't just about dice. In the digital world, verifying randomness is even more critical:

- **Online Gambling:** How do regulators verify that a digital slot machine is fair?
- **Lucky Draws:** How do we know a promotional lottery isn't rigged?
- **Cryptography:** Security relies on random number generators. If a pattern exists, hackers might exploit it.

This chapter introduces the **Chi-Square ($\chi^2$) Tests**, a powerful statistical framework to answer these questions by comparing *what we see* (data) with *what we expect* (theory).

## Goodness of Fit Test: Is the Die Fair?

### The Core Idea

**The Fundamental Question:** How large is the discrepancy between our observed data and the theoretical prediction? Is this discrepancy just due to random chance, or does it indicate a systematic bias?

**The Logic:** If the dice is truly fair, the observed frequency of each face should be "close enough" to the expected frequency. If the difference is "too large," we suspect the dice is not fair.

### Theory and Methodology

#### Setting the Hypotheses

We start by defining the null hypothesis ($H_0$), which represents the status quo or the theoretical distribution we are testing against.

- $H_0$: The data follows the specified distribution (e.g., The die is fair).
- $H_1$: The data does not follow the specified distribution.

**Note:** We never "prove" $H_0$ is true. We only check if there is strong evidence to reject it.

#### Calculating Expected Frequencies

If $H_0$ is true, what should we see? We calculate the **Expected Frequency** ($E_i$) for each category $i$.

$$E_i = n \times p_i$$

where:

- $n$ is the total sample size (total number of trials).
- $p_i$ is the theoretical probability of category $i$ under $H_0$.

#### The Chi-Square Statistic

We need a single number to summarize the total discrepancy between Observed ($O_i$) and Expected ($E_i$) values. We use the Chi-Square statistic:

$$\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$$

#### Degrees of Freedom

The shape of the Chi-Square distribution depends on the **degrees of freedom** ($df$).

$$\boxed{df = k - 1 - m}$$

where:

- $k$ = Number of categories (bins).
- $1$ = Constraint due to fixed sample size (knowing $k-1$ frequencies determines the last one).
- $m$ = Number of population parameters estimated from the sample data to calculate expected frequencies.

:::caution[Critical Assumption]
**The Rule of 5:** The Chi-Square approximation is only valid if the sample size is large enough. Specifically, **every expected frequency $E_i$ must be at least 5**.

- If $E_i < 5$, you must combine (pool) adjacent categories until the condition is met.
- This reduces the number of categories $k$, which in turn reduces $df$.
:::

:::tip[Exam Tip: Estimated vs. Given Parameters]
A common pitfall is incorrectly determining $m$ (the number of estimated parameters). The key is to read the question carefully to see if the parameters are **given** or if you need to **calculate them yourself from the data**.

- **Given:** "Test whether a $B(10, 0.4)$ distribution is a suitable model..." $\Rightarrow$ $p$ is given, so $m = 0$.
- **Estimated:** "Test whether a binomial distribution is a suitable model..." $\Rightarrow$ You must estimate $p$ from the data, so $m = 1$.

This directly affects your degrees of freedom ($df$) and how you state your null hypothesis ($H_0$)!
:::

### Example 1: The Uniform Distribution (The Honest Dice)

Let's test the "Honest Dice." We roll it 600 times.

**Observed Data:**

| Face | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Observed ($O_i$) | 98 | 102 | 95 | 105 | 96 | 104 |

**Task:**
Test, at the 5% level of significance, whether or not a uniform distribution is a suitable model for these data. State your hypotheses and show your working clearly.

### Example 2: The Binomial Distribution

A basketball player shoots 3 free throws per game. We record his successful shots ($X$) over 100 games. We want to test if $X \sim B(3, p)$.

**Observed Data:**

| $X$ (successes) | 0 | 1 | 2 | 3 | Total |
|-----------------|---|---|---|---|-------|
| Observed Freq ($O_i$) | 45 | 40 | 13 | 2 | 100 |

**Task:**

(a) Show that the estimated probability of a successful shot is $0.24$.
(b) Test, at the 5% level of significance, whether or not a binomial distribution is a suitable model for these data. State your hypotheses and show your working clearly.

### Example 3: The Normal Distribution

Testing if continuous data follows a Normal distribution is slightly more complex because:

- The Normal distribution is **continuous**, but the chi-square test requires **discrete categories**.
- We typically don't know the true $\mu$ and $\sigma$, so we must estimate them from the data.

**The Solution: Binning**

We divide the continuous range into intervals (bins) and count how many observations fall into each bin. This converts continuous data into a frequency table.

#### Detailed Example: Testing Normality of Exam Scores

A teacher suspects that exam scores follow a Normal distribution. She collects 100 scores and groups them into bins:

| Score Range | $<50$ | $50$--$60$ | $60$--$70$ | $70$--$80$ | $\ge 80$ |
|-------------|-------|-----------|-----------|-----------|----------|
| Observed ($O_i$) | 8 | 22 | 35 | 25 | 10 |

From the raw data (before binning), she calculates:

- Sample mean: $\bar{x} = 64.5$
- Sample standard deviation: $s = 12.0$

**Task:**

(a) Assuming the scores follow a $N(64.5, 12^2)$ distribution, show that the expected frequency for the "$50$--$60$" bin is approximately $24.01$.
(b) Given the expected frequencies for the five bins are roughly $E = \{11.35, 24.01, 32.30, 22.48, 9.83\}$, test, at the 5% level of significance, whether or not a normal distribution is a suitable model for these data. State your hypotheses and show your working clearly.

:::note[Exercise: Testing Normality — Reaction Times]
A psychologist measures reaction times (in milliseconds) of 80 subjects. She groups the data:

| Time (ms) | $<200$ | $200$--$250$ | $250$--$300$ | $300$--$350$ | $350$--$400$ | $\ge 400$ |
|-----------|--------|-------------|-------------|-------------|-------------|-----------|
| Observed | 5 | 12 | 28 | 20 | 10 | 5 |

From the raw data: $\bar{x} = 295$ ms, $s = 55$ ms.

(a) State the null and alternative hypotheses.
(b) Calculate the expected frequency for each bin under $H_0$. (Hint: Standardize each boundary.)
(c) Check whether all expected frequencies satisfy the Rule of 5. If not, which categories should be combined?
(d) Calculate the $\chi^2$ statistic.
(e) Determine the degrees of freedom. Explain your reasoning.
(f) At the 5% significance level, what is your conclusion?
:::

## Contingency Tables: Testing for Independence

### Introduction: The Mysterious Case of the Titanic

On April 15, 1912, the RMS Titanic sank after hitting an iceberg. Of the 2,224 passengers and crew, more than 1,500 died. In the aftermath, a troubling question arose:

**Was survival related to passenger class?**

The "Women and children first" protocol was supposed to apply equally, but rumors suggested that first-class passengers had better access to lifeboats. How can we *statistically* test whether survival was independent of social class, or whether there was a significant association?

| | **Survived** | **Died** | **Total** |
|------|-------------|----------|-----------|
| **1st Class** | 203 | 122 | 325 |
| **2nd Class** | 118 | 167 | 285 |
| **3rd Class** | 178 | 528 | 706 |
| **Total** | 499 | 817 | 1316 |

At first glance, the survival rate for 1st class ($203/325 = 62\%$) seems much higher than for 3rd class ($178/706 = 25\%$). But could this difference be due to random chance? This is exactly the question that a **Chi-Square Test for Independence** can answer.

### Are Two Variables Related?
Often we want to know if two categorical variables are related.

- Is gender related to voting preference?
- Is a new drug treatment related to recovery rate?
- Was survival on the Titanic related to passenger class?

### Theory: Defining Independence
Two events $A$ and $B$ are **independent** if knowing $A$ occurred gives no information about $B$. Mathematically:
$$P(A \cap B) = P(A) \times P(B)$$

### The Test Procedure

**Hypotheses:**

- $H_0$: The two variables are **independent** (no association).
- $H_1$: The two variables are **not independent** (there is an association).

**Expected Frequencies:**
If $H_0$ is true, the probability of falling into cell $(i, j)$ depends only on the row and column totals.
$$E_{ij} = \frac{\text{Row Total}_i \times \text{Column Total}_j}{\text{Grand Total}}$$

**Degrees of Freedom:**
For a table with $r$ rows and $c$ columns:
$$\boxed{df = (r-1)(c-1)}$$

### Example: Coffee Preference vs. Time of Day

A cafe wants to know if drink preference depends on the time of day. They survey 200 customers.

| | **Morning** | **Afternoon** | **Evening** | **Total** |
|------|------------|--------------|-------------|-----------|
| **Latte** | 70 | 25 | 5 | 100 |
| **Espresso** | 50 | 47 | 3 | 100 |
| **Total** | 120 | 72 | 8 | 200 |

**Task:**

1. State the hypotheses $H_0$ and $H_1$.
2. Calculate the Expected Frequencies table. **Check the Rule of 5!** If necessary, pool columns to ensure all expected frequencies are $\ge 5$.
3. Calculate the $\chi^2$ statistic.
4. Determine the degrees of freedom (based on the *new* table) and find the critical value at $\alpha = 0.05$.
5. Conclude whether coffee preference is independent of the time of day.

:::note[Exercise: WST03/01/May14/5]
A random sample of 200 people were asked which hot drink they preferred from tea, coffee and hot chocolate. The results are given below.

<table>
<thead>
<tr><th></th><th></th><th colspan="3">Type of drink preferred</th><th></th></tr>
<tr><th></th><th></th><th>Tea</th><th>Coffee</th><th>Hot Chocolate</th><th>Total</th></tr>
</thead>
<tbody>
<tr><td rowspan="2"><strong>Gender</strong></td><td>Males</td><td>57</td><td>26</td><td>11</td><td>94</td></tr>
<tr><td>Females</td><td>42</td><td>47</td><td>17</td><td>106</td></tr>
<tr><td></td><td><strong>Total</strong></td><td>99</td><td>73</td><td>28</td><td>200</td></tr>
</tbody>
</table>

(a) Test, at the 5% significance level, whether or not there is an association between type of drink preferred and gender. State your hypotheses and show your working clearly. You should state your expected frequencies to 2 decimal places.
(b) State what difference using a 0.5% significance level would make to your conclusion. Give a reason for your answer.
:::

## Challenge: Why Does the Chi-Square Statistic Follow a Chi-Square Distribution?

This section guides you through understanding *why* our test statistic $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$ follows a Chi-Square distribution. This is a challenging but rewarding exploration!

### What is the Chi-Square Distribution?

**Definition: Chi-Square Distribution**
If $Z_1, Z_2, \ldots, Z_k$ are **independent** standard normal random variables ($Z_i \sim N(0,1)$), then the sum of their squares:
$$Q = Z_1^2 + Z_2^2 + \cdots + Z_k^2$$
follows a **Chi-Square distribution with $k$ degrees of freedom**, written $Q \sim \chi^2_k$.

**Key Insight:** The Chi-Square distribution is fundamentally about *sums of squared standard normal variables*.

### Connecting to Our Statistic

Our goal is to show that $\chi^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i}$ approximately follows $\chi^2_{k-1}$ when $H_0$ is true.

:::note[Guided Derivation: Chi-Square Statistic]
Work through the following steps to understand why our statistic has a Chi-Square distribution.

**Setup:** We roll a die $n$ times. Let $O_i$ be the observed count for face $i$, and $E_i = n \cdot p_i$ be the expected count under $H_0$.

**Part A: The Distribution of $O_i$**

(i) Each roll is an independent trial. What distribution does $O_i$ follow? (Hint: It's counting successes in $n$ trials with probability $p_i$.)
(ii) What are $E[O_i]$ and $\text{Var}(O_i)$ in terms of $n$ and $p_i$?
(iii) For large $n$, by the Central Limit Theorem, $O_i$ is approximately Normal. Write down the approximate distribution of $O_i$.

**Part B: Standardizing the Residuals**

(i) Define the "residual" $R_i = O_i - E_i$. What is $E[R_i]$?
(ii) What is $\text{Var}(R_i)$? (Hint: $E_i = np_i$ is a constant.)
(iii) To standardize $R_i$, we divide by its standard deviation. Show that:
$$Z_i = \frac{O_i - E_i}{\sqrt{E_i(1-p_i)}} \approx N(0, 1)$$
for large $n$.

**Part C: The Constraint and the Loss of One Degree of Freedom**

Define the standardized residual:
$$Z_i = \frac{O_i - E_i}{\sqrt{E_i}} \approx N(0, 1)$$

But there's a problem: the $Z_i$ are **not independent**! They satisfy a constraint.

(i) Show that $\sum_{i=1}^{k} (O_i - E_i) = 0$. (Hint: What is $\sum O_i$ and $\sum E_i$?)
(ii) Divide both sides by appropriate terms to show:
$$\sum_{i=1}^{k} \sqrt{p_i} \cdot Z_i = 0$$
where we use $E_i = np_i$. This is a **linear constraint** on the $Z_i$ values!
(iii) This constraint means that knowing any $k-1$ of the $Z_i$ values determines the last one. Therefore, we really only have $k-1$ "free" variables.

**Part D: Decomposition into Independent Components (Advanced)**

Here we show *explicitly* how the statistic decomposes into $k-1$ independent squared standard normals.

**Key Idea:** We can transform the $k$ dependent variables $Z_1, \ldots, Z_k$ into $k-1$ independent variables $W_1, \ldots, W_{k-1}$ using an orthogonal transformation.

**Simple Case: $k=2$ (Two Categories)**

Consider a coin flip experiment: $O_1$ = heads, $O_2$ = tails, with $O_1 + O_2 = n$.

(i) Write down $Z_1 = \frac{O_1 - np_1}{\sqrt{np_1}}$ and $Z_2 = \frac{O_2 - np_2}{\sqrt{np_2}}$.
(ii) Show that $Z_2 = -\frac{\sqrt{p_1}}{\sqrt{p_2}} Z_1$ using the constraint $O_1 + O_2 = n$.

(Hint: $O_2 = n - O_1$, so $O_2 - np_2 = -(O_1 - np_1)$.)

(iii) Calculate $\chi^2 = Z_1^2 + Z_2^2$ in terms of $Z_1$ only:
$$\chi^2 = Z_1^2 + \frac{p_1}{p_2}Z_1^2 = Z_1^2\left(1 + \frac{p_1}{p_2}\right) = Z_1^2 \cdot \frac{p_1 + p_2}{p_2} = \frac{Z_1^2}{p_2}$$

But wait! We need to verify this equals a $\chi^2_1$ distribution. Define:
$$W = \frac{O_1 - np_1}{\sqrt{np_1 p_2}}$$
Show that $W \sim N(0,1)$ approximately, and that $\chi^2 = W^2 \sim \chi^2_1$.

**General Case: $k$ Categories**

For $k$ categories, we can construct $k-1$ independent standard normal variables $W_1, \ldots, W_{k-1}$ such that:
$$\chi^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i} = W_1^2 + W_2^2 + \cdots + W_{k-1}^2 \sim \chi^2_{k-1}$$

The construction uses **Helmert's transformation** or similar orthogonal decomposition. While the details are beyond our scope, the key insight is:

:::note[The Geometric Interpretation]

- The $k$ standardized residuals $Z_1, \ldots, Z_k$ live in $k$-dimensional space.
- The constraint $\sum \sqrt{p_i} Z_i = 0$ forces them onto a $(k-1)$-dimensional hyperplane.
- On this hyperplane, we can find $k-1$ orthogonal directions.
- The sum of squares $\sum Z_i^2$ equals the sum of squares of the $k-1$ independent projections.
- Hence: $\chi^2 \sim \chi^2_{k-1}$.
:::

**Part E: Why Estimating Parameters Costs More Degrees of Freedom**

(i) When we estimate $m$ parameters from the data, we impose $m$ additional constraints (the estimated parameters must "fit" the data in some optimal way).
(ii) Each constraint removes one degree of freedom from the $(k-1)$-dimensional space.
(iii) Final result: $df = k - 1 - m$.
(iv) **Example:** For testing normality with 5 bins:

- $k = 5$ categories
- $m = 2$ (estimate $\mu$ and $\sigma$)
- $df = 5 - 1 - 2 = 2$

Explain in your own words why estimating $\mu$ from $\bar{x}$ and $\sigma$ from $s$ each "uses up" one degree of freedom.
:::

:::note[Summary: The Big Picture]
1. Each $\frac{O_i - E_i}{\sqrt{E_i}}$ is approximately $N(0,1)$ for large $n$.
2. Squaring gives $\frac{(O_i - E_i)^2}{E_i} \approx \chi^2_1$.
3. Summing over $k$ categories would give $\chi^2_k$, **but**...
4. The constraint $\sum O_i = n$ introduces a dependency, reducing $df$ by 1.
5. Estimating $m$ parameters further reduces $df$ by $m$.
6. Final result: $\chi^2 \sim \chi^2_{k-1-m}$ under $H_0$.

This is why we can use Chi-Square tables to find critical values!
:::

## Homework Exercises

:::note[Exercise: WST03/01/May14/6]
Eight tasks were given to each of 125 randomly selected job applicants. The number of tasks failed by each applicant is recorded. The results are as follows.

| Number of tasks failed by an applicant | 0 | 1 | 2 | 3 | 4 | 5 | 6 or more |
|----------------------------------------|---|---|---|---|---|---|-----------|
| Frequency | 2 | 21 | 45 | 42 | 12 | 3 | 0 |

(a) Show that the probability of a randomly selected task from this sample being failed is $0.3$.

An employer believes that a binomial distribution might provide a good model for the number of tasks, out of 8, that an applicant fails. He uses a binomial distribution, with the estimated probability $0.3$ of a task being failed. The calculated expected frequencies are as follows.

| Number of tasks failed by an applicant | 0 | 1 | 2 | 3 | 4 | 5 | 6 or more |
|----------------------------------------|---|---|---|---|---|---|-----------|
| Expected frequency | 7.21 | 24.71 | 37.06 | $r$ | 17.02 | 5.83 | $s$ |

(b) Find the value of $r$ and the value of $s$ giving your answers to 2 decimal places.
(c) Test, at the 5% level of significance, whether or not a binomial distribution is a suitable model for these data. State your hypotheses and show your working clearly.
(d) The employer believes that all applicants have the same probability of failing each task. Use your result from part (c) to comment on this belief.
:::

:::note[Exercise: 6691/01/May14/3]
A number of males and females were asked to rate their happiness under the headings "not happy", "fairly happy" and "very happy". The results are shown in the table below.

<table>
<thead>
<tr><th></th><th></th><th colspan="3">Happiness</th><th></th></tr>
<tr><th></th><th></th><th>Not happy</th><th>Fairly happy</th><th>Very happy</th><th>Total</th></tr>
</thead>
<tbody>
<tr><td rowspan="2"><strong>Gender</strong></td><td>Female</td><td>9</td><td>43</td><td>34</td><td>86</td></tr>
<tr><td>Male</td><td>13</td><td>25</td><td>16</td><td>54</td></tr>
<tr><td></td><td><strong>Total</strong></td><td>22</td><td>68</td><td>50</td><td>140</td></tr>
</tbody>
</table>

Stating your hypotheses, test at the 5% level of significance, whether or not there is evidence of an association between happiness and gender. Show your working clearly.
:::

## Appendix: Solutions to Hands-on Examples

### Solution to Example 1: The Honest Dice

**1. Hypotheses**

- $H_0$: A uniform distribution is a suitable model for these data ($P(1)=P(2)=\dots=P(6)=1/6$).
- $H_1$: A uniform distribution is not a suitable model for these data.

**2. Expected Frequencies**
Total $n = 600$. Under $H_0$, $E_i = 600 \times \frac{1}{6} = 100$ for all faces.

**3. Calculate $\chi^2$**

$$
\begin{aligned}
\chi^2 &= \frac{(98-100)^2}{100} + \frac{(102-100)^2}{100} + \frac{(95-100)^2}{100} + \frac{(105-100)^2}{100} + \frac{(96-100)^2}{100} + \frac{(104-100)^2}{100} \\
&= 0.04 + 0.04 + 0.25 + 0.25 + 0.16 + 0.16 = \mathbf{0.90}
\end{aligned}
$$

**4. Degrees of Freedom and Critical Value**
$k = 6$, $m = 0$ (probabilities are given by the definition of a fair die). $df = 6 - 1 - 0 = 5$.
Critical value ($\alpha=0.05, df=5$) is **11.070**.

**5. Conclusion**
$0.90 < 11.070$. Fail to reject $H_0$. There is insufficient evidence to suggest the die is unfair; a uniform distribution is a suitable model.

### Solution to Example 2: The Binomial Distribution

**1. Hypotheses**

- $H_0$: A binomial distribution is a suitable model for these data.
- $H_1$: A binomial distribution is not a suitable model for these data.

**2. Estimate $p$**
Total shots = 300. Total successes = $0(45)+1(40)+2(13)+3(2) = 72$. $\hat{p} = 72/300 = 0.24$.

**3. Expected Frequencies (Before Pooling)**
Using $B(3, 0.24)$:

| $X$ | 0 | 1 | 2 | 3 |
|-----|---|---|---|---|
| $E_i$ | 43.90 | 41.59 | 13.13 | **1.38** |

**4. Rule of 5 & Pooling**
$E_3 < 5$, so we MUST pool $X=2$ and $X=3$.

| $X$ (New Categories) | 0 | 1 | $\ge 2$ |
|----------------------|---|---|---------|
| $O_i$ | 45 | 40 | 15 |
| $E_i$ | 43.90 | 41.59 | 14.51 |

**5. Calculate $\chi^2$**
$$\chi^2 = \frac{(45-43.9)^2}{43.9} + \frac{(40-41.59)^2}{41.59} + \frac{(15-14.51)^2}{14.51} \approx 0.028 + 0.061 + 0.017 = \mathbf{0.106}$$

**6. Degrees of Freedom**
$k = 3$ (after pooling!), $m = 1$ (estimated $p$). $df = 3 - 1 - 1 = \mathbf{1}$.

**7. Conclusion**
Critical value ($\alpha=0.05, df=1$) is 3.841. $0.106 < 3.841$. Fail to reject $H_0$. A binomial distribution is a suitable model.

### Solution to Example 3: The Normal Distribution

**1. Hypotheses**

- $H_0$: A normal distribution is a suitable model for these data.
- $H_1$: A normal distribution is not a suitable model for these data.

**2. Probability for bin 50-60**
$P(50 \le X < 60) = P\left(\frac{50-64.5}{12} \le Z < \frac{60-64.5}{12}\right) = P(-1.208 \le Z < -0.375) = 0.2401$

**3. Expected Frequency**
$E_2 = 100 \times 0.2401 = 24.01$

**4. Calculate $\chi^2$**

$$
\begin{aligned}
\chi^2 &= \frac{(8-11.35)^2}{11.35} + \frac{(22-24.01)^2}{24.01} + \frac{(35-32.30)^2}{32.30} + \frac{(25-22.48)^2}{22.48} + \frac{(10-9.83)^2}{9.83} \\
&= 0.989 + 0.168 + 0.226 + 0.282 + 0.003 = \mathbf{1.668}
\end{aligned}
$$

**5. Degrees of Freedom**
$k = 5$ bins. $m = 2$ (estimated $\mu$ and $\sigma$). $df = 5 - 1 - 2 = \mathbf{2}$. Critical value ($\alpha=0.05$) is 5.991.

**6. Conclusion**
$1.668 < 5.991$. Fail to reject $H_0$. A normal distribution is a suitable model.

### Solution to Contingency Table

**1. Hypotheses**
$H_0$: Coffee preference is independent of time of day. $H_1$: They are not independent.

**2. Expected Frequencies (Before Pooling)**
$E_{ij} = \frac{\text{Row Total} \times \text{Col Total}}{\text{Grand Total}}$

| (Expected) | Morning | Afternoon | Evening |
|------------|---------|-----------|---------|
| Latte | 60 | 36 | **4** |
| Espresso | 60 | 36 | **4** |

**3. Rule of 5 & Pooling**
Since $E_{\text{Latte, Evening}} < 5$ and $E_{\text{Espresso, Evening}} < 5$, we must pool the "Afternoon" and "Evening" columns.

| (Observed) | Morning | Afternoon/Evening |
|------------|---------|-------------------|
| Latte | 70 | 30 |
| Espresso | 50 | 50 |

| (Expected) | Morning | Afternoon/Evening |
|------------|---------|-------------------|
| Latte | 60 | 40 |
| Espresso | 60 | 40 |

**4. Calculate $\chi^2$**

$$
\begin{aligned}
\chi^2 &= \frac{(70-60)^2}{60} + \frac{(30-40)^2}{40} + \frac{(50-60)^2}{60} + \frac{(50-40)^2}{40} \\
&= \frac{100}{60} + \frac{100}{40} + \frac{100}{60} + \frac{100}{40} \\
&= 1.667 + 2.5 + 1.667 + 2.5 = \mathbf{8.334}
\end{aligned}
$$

**5. Degrees of Freedom**
$df = (r-1)(c-1) = (2-1)(2-1) = 1$ (using the pooled table!). Critical value ($\alpha=0.05, df=1$) is **3.841**.

**6. Conclusion**
$8.334 > 3.841$. Reject $H_0$. There is significant evidence of an association between coffee preference and time of day.

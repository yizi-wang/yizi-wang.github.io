---
title: "S2 Chapter 3: Approximations and the Central Limit Theorem"
---

# S2 Statistics: Chapter 3 — Approximations and the Central Limit Theorem

## Preface: The Quest for Computational Simplicity

Welcome, mathematical problem-solvers! Today we embark on a fascinating journey that bridges the gap between mathematical precision and practical computation. We'll discover how some of history's greatest mathematicians overcame seemingly insurmountable computational challenges through the elegant art of **approximation**.

Our story begins in an era before computers, when calculating even simple probabilities could take hours or days of tedious arithmetic. The question that drove mathematical innovation was simple yet profound: *How can we make the impossible, possible?*

## 1. The Computational Crisis: When Precision Becomes Impractical

### Setting the Stage: The 19th Century Dilemma

Imagine you're a 19th-century insurance actuary, tasked with calculating risk probabilities to set fair premiums. You need to compute probabilities from distributions like $B(1000, 0.01)$ or $\text{Po}(25)$.

:::caution[The Computational Challenge]
**Binomial Nightmare:** To find $P(X = 50)$ where $X \sim B(1000, 0.01)$:

$$
P(X = 50) = \binom{1000}{50} \times (0.01)^{50} \times (0.99)^{950}
$$

This requires:
- Computing $\binom{1000}{50} = \frac{1000!}{50! \times 950!}$ — a 158-digit number!
- Calculating $(0.01)^{50} = 10^{-100}$ — unimaginably small
- Computing $(0.99)^{950}$ — another complex calculation

**Poisson Challenge:** To find $P(X \leq 30)$ where $X \sim \text{Po}(25)$:

$$
P(X \leq 30) = \sum_{k=0}^{30} \frac{e^{-25} \times 25^k}{k!}
$$

This requires computing 31 terms, each involving factorials and powers of 25!
:::

:::tip[The Great Insight]
**Why calculate exactly when you can approximate accurately?**

Instead of wrestling with complex discrete distributions, mathematicians found that simple, continuous distributions could provide remarkably accurate approximations under the right conditions.
:::
## 2. Poisson Approximation: The Lightweight Solution

### Recalling the Theoretical Foundation

From our study of the Poisson distribution, we know that:

**Theorem (Poisson Limit of Binomial):** As $n \to \infty$ and $p \to 0$ while maintaining $np = \lambda$ (constant), we have:

$$
B(n,p) \to \text{Po}(\lambda)
$$

### Practical Application Guidelines

:::note[When to Use Poisson Approximation]
Use $X \sim \text{Po}(np)$ to approximate $X \sim B(n,p)$ when:
- $n$ is large
- $p$ is small
- $np$ is moderate (typically $np \leq 10$)

**Computational Advantage:** Reduces calculation from two parameters $(n,p)$ to one parameter $\lambda = np$, with readily available Poisson tables.
:::
**Example 1 (Quality Control Application):**

A factory produces 1000 components per day with a defect rate of 0.005. What's the probability of exactly 5 defective components?

**Exact Calculation:** $P(X = 5)$ where $X \sim B(1000, 0.005)$

$$
P(X = 5) = \binom{1000}{5} \times (0.005)^5 \times (0.995)^{995}
$$

This is computationally intensive!

**Poisson Approximation:** Since $n = 1000$ is large, $p = 0.005$ is small, and $np = 5 \leq 10$, we can use:

$$
X \sim \text{Po}(5) \text{ approximately}
$$

$$
P(X = 5) = \frac{e^{-5} \times 5^5}{5!} = \frac{e^{-5} \times 3125}{120} \approx 0.1755
$$

Much simpler to calculate!

**Example 2 (Exercise):**

In a certain region, $95\%$ of the population has lactose intolerance. A medical study randomly selects $80$ individuals from this population. Let $X$ represent the number of individuals WITHOUT lactose intolerance.

1. Write down an expression for the exact value of $P(X \leq 2)$
2. Explain why the Poisson approximation is suitable for this problem.
3. Using a Poisson approximation, estimate $P(X \leq 2)$

**Solution:**

## 3. Normal Approximation: Breaking the Distribution Barriers

### The Discovery of Universal Convergence

:::tip[Historical Breakthrough]
**Abraham de Moivre (1733)** and **Pierre-Simon Laplace (1812)** made a stunning observation:

When $n$ becomes large, the histogram of a binomial distribution $B(n,p)$ begins to look remarkably like a bell-shaped curve — the normal distribution!
:::
### Normal Approximation to Binomial Distribution

**Theorem (De Moivre-Laplace Theorem):** If $X \sim B(n,p)$ where $n$ is large and $p$ is not too close to 0 or 1, then:

$$
X \stackrel{\text{approx}}{\sim} N(\mu, \sigma^2)
$$

where $\mu = np$ and $\sigma^2 = np(1-p)$.

**Rule of Thumb:** Use when $np > 5$ and $n(1-p) > 5$.

### Visual Demonstration: Normal Approximation Quality

**Binomial Distribution B(50, 0.3) with Normal Overlay**

*Imagine a bar chart of B(50, 0.3) with a red normal curve N(15, 10.5) overlaid — the match is remarkably close.*

Mean = 15, Variance = 10.5

### Normal Approximation to Poisson Distribution

Just as the binomial distribution approaches normality, so does the Poisson distribution for large parameters.

**Theorem (Normal Approximation to Poisson):** If $X \sim \text{Po}(\lambda)$ where $\lambda$ is large (typically $\lambda > 10$), then:

$$
X \stackrel{\text{approx}}{\sim} N(\lambda, \lambda)
$$

Note the beautiful property: for Poisson distributions, the mean equals the variance!

**Poisson Distribution Po(12) with Normal Overlay**

*Imagine a bar chart of Po(12) with a red normal curve N(12, 12) overlaid — again, a very close fit.*

Mean = Variance = 12

## 4. Continuity Correction: The Bridge Between Discrete and Continuous

### The Fundamental Challenge

When we approximate a discrete distribution with a continuous one, we face a conceptual problem:

:::caution[The Discrete-Continuous Paradox]
**Discrete:** $P(X = 5)$ has a definite value

**Continuous:** $P(Y = 5) = 0$ for any continuous random variable $Y$

**Solution:** We must think of the discrete value 5 as representing the interval $[4.5, 5.5)$ in the continuous approximation.
:::
### Continuity Correction Rules

**Theorem (Continuity Correction):** When approximating a discrete distribution with a continuous distribution, use these transformations:

| Discrete | Continuous Approximation |
|----------|--------------------------|
| $P(X = a)$ | $P(a - 0.5 < Y < a + 0.5)$ |
| $P(X \leq a)$ | $P(Y < a + 0.5)$ |
| $P(X < a)$ | $P(Y < a - 0.5)$ |
| $P(X \geq a)$ | $P(Y > a - 0.5)$ |
| $P(X > a)$ | $P(Y > a + 0.5)$ |

**Example 3 (Continuity Correction in Practice):**

A binomial random variable $X \sim B(100, 0.3)$ is approximated by $Y \sim N(30, 21)$. Find $P(X = 25)$.

**Without Continuity Correction:** $P(Y = 25) = 0$ (meaningless!)

**With Continuity Correction:**

$$
P(X = 25) \approx P(24.5 < Y < 25.5)
$$

This gives a meaningful approximation that accounts for the discrete nature of the original distribution.

## 5. Guided Practice

**Example 4:**

For each scenario, determine the most appropriate approximation method:

1. $X \sim B(50, 0.02)$, find $P(X = 2)$
2. $X \sim B(200, 0.4)$, find $P(180 \leq X \leq 190)$
3. $X \sim \text{Po}(15)$, find $P(X > 20)$

**Solution:**

**Example 5:**

A confectionery company produces chocolate bars, and during a special promotion, they place a golden ticket in $20\%$ of the bars. A convenience store receives a shipment of $60$ chocolate bars.

1. 1. Write down a suitable distribution to model the number of bars containing golden tickets.
   2. State one assumption required for this model to be valid.
2. Find the probability that exactly $15$ bars contain golden tickets.
3. Using a normal approximation with continuity correction, estimate the probability that fewer than $10$ bars contain golden tickets.
4. The store manager wants to be $90\%$ confident that at least $8$ customers will find golden tickets. Is this shipment size sufficient? Show your working.

**Solution:**

## Homework Exercises

**Exercise 1 (WST02/01/Jan15/7):**

A multiple choice examination paper has $n$ questions where $n > 30$.

Each question has $5$ answers of which only $1$ is correct. A pass on the paper is obtained by answering $30$ or more questions correctly.

The probability of obtaining a pass by randomly guessing the answer to each question should not exceed $0.0228$.

Use a normal approximation to work out the greatest number of questions that could be used.

---

**Exercise 2 (WST02/01/Jan16/3):**

Left-handed people make up $10\%$ of a population. A random sample of $60$ people is taken from this population. The discrete random variable $Y$ represents the number of left-handed people in the sample.

1. 1. Write down an expression for the exact value of $P(Y \leq 1)$
   2. Evaluate your expression, giving your answer to 3 significant figures.
2. Using a Poisson approximation, estimate $P(Y \leq 1)$
3. Using a normal approximation, estimate $P(Y \leq 1)$
4. Give a reason why the Poisson approximation is a more suitable estimate of $P(Y \leq 1)$

---

**Exercise 3 (WST02/01/Jan17/3):**

1. State the condition under which the normal distribution may be used as an approximation to the Poisson distribution.

The number of reported first aid incidents per week at an airport terminal has a Poisson distribution with mean 3.5.

2. Find the modal number of reported first aid incidents in a randomly selected week. Justify your answer.

The random variable $X$ represents the number of reported first aid incidents at this airport terminal in the next 2 weeks.

3. Find $P(X > 5)$
4. Given that there were exactly 6 reported first aid incidents in a 2 week period, find the probability that exactly 4 were reported in the first week.
5. Using a suitable approximation, find the probability that in the next 40 weeks there will be at least 120 reported first aid incidents.

---

**Exercise 4 (WST02/01/June17/2):**

Crispy-crisps produces packets of crisps. During a promotion, a prize is placed in $25\%$ of the packets. No more than $1$ prize is placed in any packet. A box contains $6$ packets of crisps.

1. 1. Write down a suitable distribution to model the number of prizes found in a box.
   2. Write down one assumption required for the model.
2. Find the probability that in $2$ randomly selected boxes, only $1$ box contains exactly $1$ prize.
3. Find the probability that a randomly selected box contains at least $2$ prizes.

Neha buys $80$ boxes of crisps.

4. Using a normal approximation, find the probability that no more than $30$ of the boxes contain at least $2$ prizes.

## 6. The Central Limit Theorem: The Ultimate Foundation

### The Grand Unifying Theory

All our approximation methods point to a deeper truth — one of the most important theorems in all of mathematics:

**Theorem (Central Limit Theorem):** Let $X_1, X_2, \ldots, X_n$ be independent and identically distributed random variables with finite mean $\mu$ and variance $\sigma^2$.

As $n \to \infty$, the sum $S_n = X_1 + X_2 + \cdots + X_n$ approaches a normal distribution:

$$
S_n \stackrel{\text{approx}}{\sim} N(n\mu, n\sigma^2)
$$

Equivalently, the standardized sum:

$$
Z_n = \frac{S_n - n\mu}{\sigma\sqrt{n}} \stackrel{\text{approx}}{\sim} N(0,1)
$$

:::tip[Why is CLT so important?]
The Central Limit Theorem explains why the normal distribution appears everywhere in nature and statistics — it's the natural destination when we add many independent random effects together.

**Key Insight:** No matter what the original distribution looks like, sums of many independent copies always converge to the same bell-shaped curve!
:::
### Discovering CLT Through Dice: A Visual Journey

Let's see the magic of CLT in action using the simple example of rolling dice.

**Example 6 (Rolling Dice and Finding Normality):**

Consider rolling a fair six-sided die. The outcome $X$ has:
- Uniform distribution: $P(X = k) = \frac{1}{6}$ for $k = 1, 2, 3, 4, 5, 6$
- Mean: $E(X) = 3.5$, Variance: $\text{Var}(X) = \frac{35}{12} \approx 2.92$

**Exercise: Calculate the Distribution for n = 2**

Now let's roll two independent dice and find the sum $S_2 = X_1 + X_2$:

1. Complete the table below to find all possible outcomes and their sums:

| $X_1 \backslash X_2$ | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |

2. Count the frequency of each sum and complete the probability distribution:

| Sum $S_2$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Frequency | | | | | | | | | | | |
| $P(S_2 = k)$ | | | | | | | | | | | |

3. Calculate $E(S_2)$ and $\text{Var}(S_2)$ using the properties of sums:

$E(S_2) = E(X_1) + E(X_2) =$ \_\_\_\_\_\_

$\text{Var}(S_2) = \text{Var}(X_1) + \text{Var}(X_2) =$ \_\_\_\_\_\_

**Key Observation:** Even with just two dice, we can see the distribution shifting from uniform (flat) to triangular (peaked). This is the beginning of the journey toward the normal distribution!

**The Visual Journey of CLT:**

*Imagine three histograms side by side:*
- *n = 1: Perfectly uniform — flat and rectangular, Mean = 3.5*
- *n = 2: Triangular shape — the peak emerges, Mean = 7.0*
- *n large: Beautiful bell curve — exactly the normal distribution, Mean = 3.5n*

:::tip[The Amazing Pattern]
- **n = 1:** Perfectly uniform distribution — flat and rectangular
- **n = 2:** Triangular shape appears — the peak emerges
- **n large:** Beautiful bell curve — exactly normal distribution!

**The Universal Truth:** This same pattern occurs no matter what the original distribution is — uniform, exponential, discrete, continuous, or any other shape. The sum always becomes normal!
:::
### Connecting CLT to Our Earlier Work

Now we can understand why our approximation methods work so well:

**Example 7 (Why Binomial Becomes Normal):**

Recall that if $X \sim \text{Binomial}(n,p)$, then $X$ can be written as:

$$
X = Y_1 + Y_2 + \cdots + Y_n
$$

where each $Y_i \sim \text{Bernoulli}(p)$ is independent.

By CLT, as $n$ gets large:

$$
X = \sum_{i=1}^{n} Y_i \stackrel{\text{approx}}{\sim} N(n \cdot p, n \cdot p(1-p))
$$

This is exactly the De Moivre-Laplace theorem we used earlier!

**Example 8 (Why Poisson Becomes Normal):**

Similarly, if $X \sim \text{Poisson}(\lambda)$, we can express $X$ as the sum of many small independent Poisson variables.

For large $\lambda$, we can write $X$ as the sum of $n$ independent $\text{Poisson}(\lambda/n)$ variables. By CLT:

$$
X \stackrel{\text{approx}}{\sim} N(\lambda, \lambda)
$$

This explains our normal approximation to Poisson distribution!

### The Power of CLT: Real-World Applications

:::note[Where CLT Appears in Nature]
The Central Limit Theorem explains why normal distributions are everywhere:

- **Human Heights:** Sum of many genetic and environmental factors
- **Measurement Errors:** Sum of many small random errors
- **Stock Market Returns:** Sum of many market influences
- **Test Scores:** Sum of preparation, ability, luck, and many other factors
- **Manufacturing Quality:** Sum of many production variations

**The Universal Pattern:** Whenever a quantity results from the addition of many independent factors, it tends to follow a normal distribution!
:::
**Example 9 (CLT in Action: Quality Control):**

A factory produces items where the final weight is affected by:
- Raw material variations
- Machine calibration drift
- Temperature fluctuations
- Operator differences
- Measurement errors
- … and many other small factors

Even if each individual factor has a completely different distribution, the **total effect** (sum of all factors) will be approximately normal by CLT.

This is why quality control charts always assume normal distributions!

### Looking Forward: The Mathematical Foundation

:::note[A Glimpse into Advanced Mathematics]
The Central Limit Theorem is one of the most profound results in mathematics, but its complete proof requires advanced tools we haven't developed yet:

- **Moment Generating Functions** — to analyze the behavior of sums
- **Convergence in Distribution** — to make the limiting process rigorous
- **Taylor Series and Limits** — to handle the asymptotic behavior

**Coming in S3:** In your further studies, you'll encounter the mathematical machinery needed to prove CLT rigorously. For now, we focus on understanding *why* it works and *how* to apply it.
:::
**The Mathematical Beauty:** The Central Limit Theorem reveals a fundamental harmony in randomness — no matter how chaotic individual components might be, their collective behavior gravitates toward the same universal pattern: the normal distribution serves as nature's "attractor" for randomness.

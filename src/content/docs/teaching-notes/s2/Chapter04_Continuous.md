---
title: "S2 Chapter 4: Continuous Random Variables"
---

## Two Different Kinds of Randomness

Imagine you're working at a customer service call center. Throughout our previous chapters, we've mastered the art of describing "counts" - binomial distributions and Poisson distributions tell us **how many times events occur**. But now, we want to ask a fundamentally different question: **How long do we need to wait until the first event occurs?**

:::note[Contrasting Two Types of Problems]
**Discrete Problems (Already Solved):**
- "How many customer calls do we receive in one day?" → Answer: An integer (0, 1, 2, 3, ...), described by **Poisson distribution**
- "How many defective products in a batch of 100?" → Answer: An integer (0 to 100), described by **binomial distribution**

**Continuous Problems (New Challenge):**
- "Starting from this moment, how long must we wait until the next customer call?" → Answer: A positive real number (like 5.2 minutes)
- "What is the exact weight of a randomly selected product?" → Answer: A real number with potentially infinite precision
:::
## The Language of Continuous Random Variables

### Probability Density Function (PDF) - Continuous "Probability Mass"

The fundamental challenge with continuous random variables is that there are infinitely many possible values, so the probability of any exact value is zero. Instead, we think about probability **density**.

#### Visualizing the Transition: From Discrete to Continuous

Let's understand this concept by observing what happens as we increase the number of possible values:

**Discrete: Few Values** — High probabilities (each bar is tall)

**Discrete: More Values** — Lower probabilities (bars shrink as more values share the total)

**Continuous: Infinite Values** — Area under the curve equals probability

$$P(a < X < b) = \text{Area under } f(x) \text{ between } a \text{ and } b$$

:::tip[Key Insight: The Evolution from Mass to Density]
**Observe the pattern:**
- **Few discrete values:** Each individual probability is substantial (like 0.3, 0.2, 0.15...)
- **Many discrete values:** Each individual probability becomes smaller (like 0.05, 0.03, 0.02...)
- **Infinite continuous values:** Each individual probability becomes zero, but the **density** $f(x)$ tells us how "concentrated" the probability is near each point

**The fundamental shift:** We move from asking "What's $P(X = 5)$?" to asking "What's $P(4.9 < X < 5.1)$?"
:::
This visualization shows us why we need a new mathematical framework for continuous random variables. The "height" of the curve at any point represents the probability density, and the area under the curve between two points gives us the actual probability.

**Definition (Probability Density Function):**

For a continuous random variable $X$, we describe its probability distribution using a function $f(x)$ called the probability density function (PDF). It satisfies:

1. $f(x) \geq 0$ for all $x$ (probability density is non-negative)
2. $P(a < X < b) = \int_a^b f(x) \, dx$ (probability is the area under the curve)
3. $\int_{-\infty}^{\infty} f(x) \, dx = 1$ (total area represents total probability = 1)

:::tip[Key Understanding: Density vs Probability]
**Crucial Point:** $f(x)$ is *not* a probability - it's a probability *density*.

- A large value of $f(x)$ means $X$ is likely to take values near $x$
- For any specific point $a$: $P(X = a) = 0$
- This aligns with geometric intuition - the probability of hitting an exact point on a line is zero
:::
**Example:**

Consider a random variable $X$ with probability density function:

$$f(x) = \begin{cases}
\frac{2x}{9} & \text{if } 0 \leq x \leq 3 \\
0 & \text{otherwise}
\end{cases}$$

---

**Part (a): Verify this is a valid PDF**

We need to check two fundamental conditions:

*Condition (i):* $f(x) \geq 0$ for all $x$
- For $0 \leq x \leq 3$: $f(x) = \frac{2x}{9} \geq 0$ since $x \geq 0$ ✓
- For $x < 0$ or $x > 3$: $f(x) = 0 \geq 0$ ✓

*Condition (ii):* $\int_{-\infty}^{\infty} f(x) \, dx = 1$

$$\int_{-\infty}^{\infty} f(x) \, dx = \int_0^3 \frac{2x}{9} \, dx = \frac{2}{9} \cdot \frac{x^2}{2}\Big|_0^3 = \frac{1}{9} \cdot 9 = 1$$

**Part (b): Find $P(1 < X < 2)$**

$$P(1 < X < 2) = \int_1^2 \frac{2x}{9} \, dx = \frac{2}{9} \cdot \frac{x^2}{2}\Big|_1^2 = \frac{1}{9}(4-1) = \boxed{\frac{1}{3}}$$

---

### Cumulative Distribution Function (CDF) - Accumulation from Beginning to Now

**Definition (Cumulative Distribution Function):**

The cumulative distribution function is defined as:

$$F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t) \, dt$$

This represents the probability that the random variable takes a value less than or equal to $x$.

:::tip[Key Properties of CDF]
For any continuous random variable with CDF $F(x)$:

**1. Non-decreasing:** If $x_1 < x_2$, then $F(x_1) \leq F(x_2)$
- *Intuition:* As we move right on the number line, we can only accumulate more probability, never lose it

**2. Continuous:** For a piecewisely defined CDF, the values are consistent at the points where the pieces meet.

**3. Range:** $0 \leq F(x) \leq 1$ for all $x$
- *Interpretation:* CDF represents cumulative probability, which must be between 0 and 1

**4. Probability calculation:** $P(a < X < b) = P(a \leq X \leq b) = P(a < X \leq b) = F(b) - F(a)$
:::
**Theorem (Fundamental Relationship between PDF and CDF):**

For continuous random variables:

$$f(x) = \frac{d}{dx} F(x)$$

This means:
- The CDF is the integral of the PDF
- The PDF is the derivative of the CDF

This is the Fundamental Theorem of Calculus perfectly embodied in probability theory!

**Example (From CDF to PDF):**

A continuous random variable $X$ has cumulative distribution function:

$$F(x) = \begin{cases}
0 & x < 0 \\
\frac{x^3}{8} & 0 \leq x \leq 2 \\
1 & x > 2
\end{cases}$$

---

**Part (a): Find the PDF $f(x)$**

Using the fundamental relationship $f(x) = \frac{d}{dx} F(x)$, we differentiate each piece:

- For $x < 0$: $f(x) = \frac{d}{dx}(0) = 0$
- For $0 \leq x \leq 2$: $f(x) = \frac{d}{dx}\left(\frac{x^3}{8}\right) = \frac{3x^2}{8}$
- For $x > 2$: $f(x) = \frac{d}{dx}(1) = 0$

Therefore:

$$\boxed{f(x) = \begin{cases} \frac{3x^2}{8} & 0 \leq x \leq 2 \\ 0 & \text{otherwise} \end{cases}}$$

**Part (b): Verify this is a valid PDF**

Check that $\int_{-\infty}^{\infty} f(x) \, dx = 1$:

$$\int_{-\infty}^{\infty} f(x) \, dx = \int_0^2 \frac{3x^2}{8} \, dx = \frac{3}{8} \cdot \frac{x^3}{3}\Big|_0^2 = \frac{1}{8} \cdot 8 = 1$$

**Part (c): Find $P(0.5 < X < 1.5)$**

Using the CDF method: $P(0.5 < X < 1.5) = F(1.5) - F(0.5)$

$$
\begin{aligned}
P(0.5 < X < 1.5) &= F(1.5) - F(0.5) \\
&= \frac{(1.5)^3}{8} - \frac{(0.5)^3}{8} \\
&= \frac{3.375 - 0.125}{8} \\
&= \frac{3.25}{8} = \boxed{0.40625}
\end{aligned}
$$

---

**Example (In-Class Exercise):**

A continuous random variable $Y$ has the following cumulative distribution function:

$$F(y) = \begin{cases}
0 & y < 1 \\
a(y-1)^2 & 1 \leq y \leq 3 \\
1 & y > 3
\end{cases}$$

where $a$ is a positive constant.

1. Find the value of $a$
2. Determine the probability density function $f(y)$
3. Calculate $P(Y > 2)$ using both the CDF and PDF methods

**Your solutions:**

### Numerical Characteristics - Mean, Variance, and Transformations

#### From Discrete Sums to Continuous Integrals: The Natural Evolution

In our study of discrete random variables, we learned to calculate expected values using weighted sums:

$$E(X) = \sum_{i} x_i \cdot P(X = x_i)$$

But what happens when we transition to continuous variables where $P(X = x_i) = 0$ for any specific value? The answer lies in a beautiful mathematical evolution: **sums become integrals**.

:::tip[The Intuitive Bridge: From Sum to Integral]
**Discrete Case:** $E(X) = \sum_i x_i \cdot P(X = x_i)$
- Each value $x_i$ is weighted by its probability $P(X = x_i)$
- We sum over all possible discrete values

**Continuous Case:** $E(X) = \int_{-\infty}^{\infty} x \cdot f(x) \, dx$
- Each value $x$ is weighted by its probability density $f(x)$
- We integrate over all possible continuous values
- The integral represents the "limit of increasingly fine sums"

**Physical Interpretation:** Think of $f(x)$ as the "mass density" along a rod. The expected value is the center of mass - the balance point where the rod would perfectly balance on a fulcrum.
:::
**Definition (Expected Value and Variance for Continuous Random Variables):**

For a continuous random variable $X$ with PDF $f(x)$:

**Expected Value (Mean):**

$$E(X) = \int_{-\infty}^{\infty} x \cdot f(x) \, dx$$

This represents the "center of gravity" or average value of the distribution.

**Variance:**

$$\text{Var}(X) = E[(X-\mu)^2] = \int_{-\infty}^{\infty} (x-\mu)^2 f(x) \, dx = E(X^2) - [E(X)]^2$$

This measures the "spread" or dispersion around the mean.

**Expected Value of a Function:**

$$E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) \, dx$$

This powerful formula allows us to find the expected value of any transformation of $X$.

**Theorem (Linear Transformations):**

For a continuous random variable $X$ and constants $a$, $b$:

- $E(aX + b) = aE(X) + b$
- $\text{Var}(aX + b) = a^2 \text{Var}(X)$

**Example (Beta-type Distribution):**

Consider the continuous random variable $X$ with PDF:

$$f(x) = \begin{cases}
6x(1-x) & 0 \leq x \leq 1 \\
0 & \text{otherwise}
\end{cases}$$

---

**Complete Solution:**

**Part (a): Verify this is a valid PDF**

Check that $\int_{-\infty}^{\infty} f(x) \, dx = 1$:

$$
\begin{aligned}
\int_0^1 6x(1-x) \, dx &= 6\int_0^1 (x - x^2) \, dx \\
&= 6\left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 \\
&= 6\left(\frac{1}{2} - \frac{1}{3}\right) = 6 \cdot \frac{1}{6} = 1
\end{aligned}
$$

**Part (b): Calculate $E(X)$**

$$E(X) = \int_0^1 x \cdot 6x(1-x) \, dx = 6\int_0^1 (x^2 - x^3) \, dx$$

$$= 6\left[\frac{x^3}{3} - \frac{x^4}{4}\right]_0^1 = 6\left(\frac{1}{3} - \frac{1}{4}\right) = \boxed{\frac{1}{2}}$$

**Part (c): Calculate $\text{Var}(X)$**

*Step 1: Find $E(X^2)$*

$$E(X^2) = \int_0^1 x^2 \cdot 6x(1-x) \, dx = 6\int_0^1 (x^3 - x^4) \, dx$$

$$= 6\left[\frac{x^4}{4} - \frac{x^5}{5}\right]_0^1 = 6\left(\frac{1}{4} - \frac{1}{5}\right) = \frac{3}{10}$$

*Step 2: Apply variance formula*

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = \frac{3}{10} - \left(\frac{1}{2}\right)^2 = \frac{3}{10} - \frac{1}{4} = \boxed{\frac{1}{20}}$$

---

### Percentiles and Mode - Distributional Landmarks

#### Percentiles: Dividing Probability Mass

**Definition (Percentiles and Quantiles):**

The $p$-th percentile (or quantile) of a continuous distribution is the value $q_p$ such that:

$$P(X \leq q_p) = F(q_p) = \frac{p}{100}$$

**Interpretation:** $p\%$ of the probability mass lies to the left of $q_p$, and $(100-p)\%$ lies to the right.

**Special cases:**
- **Median** ($q_{50}$): The "middle" value where $F(q_{50}) = 0.5$
- **First Quartile** ($q_{25}$): 25% of values are below this point
- **Third Quartile** ($q_{75}$): 75% of values are below this point

#### Mode: The Peak of Probability Density

**Definition (Mode):**

The mode of a continuous distribution is the value of $x$ that maximizes the PDF $f(x)$. It can be found by solving:

$$\frac{d}{dx} f(x) = 0 \text{ and } \frac{d^2}{dx^2} f(x) < 0$$

The mode represents the most "dense" point of the distribution - where the probability is most concentrated.

### Assessing Distribution Shape: Understanding Skewness

#### Visual Methods for Detecting Skewness

**Example (Visual Skewness Detection Practice):**

Look at these three distributions. Roughly denote the mode, median, and mean, and identify their skewness:

:::tip[The Mean-Median-Mode Relationship]
This is the most practical method for determining skewness:

| Distribution Type | Relationship | Interpretation |
|---|---|---|
| Symmetric | Mean $=$ Median $=$ Mode | No skewness |
| Right-skewed | Mean $>$ Median $>$ Mode | Positive skew |
| Left-skewed | Mean $<$ Median $<$ Mode | Negative skew |

**Why this works:** The mean is "pulled" toward the tail because it's sensitive to extreme values, while the median and mode are more resistant to outliers.
:::
**Distribution A:** Right-skewed (long right tail)

**Distribution B:** Symmetric (bell-shaped)

**Distribution C:** Left-skewed (long left tail)

**Example (In-Class Exercise):**

A continuous random variable $Z$ has probability density function:

$$f(z) = \begin{cases}
ce^{-2z} & z \geq 0 \\
0 & z < 0
\end{cases}$$

where $c$ is a positive constant.

1. Find the value of $c$
2. Calculate $E(Z)$ and $\text{Var}(Z)$
3. Find $P(Z > E(Z))$ and comment on this result
4. Find $E(3Z + 2)$ and $\text{Var}(3Z + 2)$ using transformation properties
5. Calculate $P(Z > 1 | Z > 0.5)$ and interpret this result
6. Calculate the median and interquartile range of $Z$
7. Sketch $f(z)$, demonstrate its mode, median, and mean of this distribution on the graph, discuss the skewness of this distribution

**Your solutions:**

## Homework Exercises

:::note[Jan15/2]
A continuous random variable $X$ has cumulative distribution function

$$F(x) = \begin{cases}
0 & x < 1 \\
\frac{1}{5}(x-1) & 1 \leq x \leq 6 \\
1 & x > 6
\end{cases}$$

1. Find P($X > 4$)
2. Write down the value of P($X \neq 4$)
3. Find the probability density function of $X$, specifying it for all values of $x$
4. Write down the value of E($X$)
5. Find Var($X$)
6. Hence or otherwise find E($3X^2 + 1$)
:::

:::note[Jan15/5]
The random variable $X$ has probability density function $f(x)$ given by

$$f(x) = \begin{cases}
k(x^2 + a) & -1 < x \leq 2 \\
3k & 2 < x \leq 3 \\
0 & \text{otherwise}
\end{cases}$$

where $k$ and $a$ are constants.

Given that E($X$) = $\frac{17}{12}$

1. Find the value of $k$ and the value of $a$
2. Write down the mode of $X$
:::

:::note[June14/2]
A random variable $X$ has cumulative distribution function F($x$) given by

$$F(x) = \begin{cases}
0 & x < 0 \\
\frac{x^2}{20}(9-2x) & 0 \leq x \leq 2 \\
1 & x > 2
\end{cases}$$

1. Verify that the median of $X$ lies between 1.23 and 1.24
2. Specify fully the probability density function $f(x)$
3. Find the mode of $X$
4. Describe the skewness of this distribution. Justify your answer.
:::
## (Optional) From Poisson to Exponential Distribution

:::tip[Background Review and Setup]
**Recall the Three Conditions of a Poisson Process:**
1. Events occur **independently**
2. Events occur **singly** (no simultaneous events)
3. Events occur at a **constant average rate** $\lambda$

**Review: Poisson Distribution PMF**

When these conditions are met, the number of events $X$ occurring in a fixed time interval follows a Poisson distribution:

$$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!} \quad \text{for } k = 0, 1, 2, 3, \ldots$$

where:
- $\lambda$ is the average number of events per time interval
- $k$ is the actual number of events observed
:::
**Key Insight:** We know how to count events, but what about waiting times between events?

**Scenario:** Suppose a process (like calls to a customer service center) is a Poisson process with rate $\lambda$.

**Define:** Let $T$ be the random variable representing the **waiting time until the first event occurs**.

**Challenge Mission: Find the probability distribution of random variable $T$**

#### Derivation Objectives

1. Find the cumulative distribution function $F_T(t) = P(T \leq t)$
2. Find the probability density function $f_T(t)$ by differentiating $F_T(t)$
3. Calculate the expected value of $T$

---

**Step 1: Finding the Cumulative Distribution Function**

**Setup:** Let $N(t)$ be the number of events that occur in the time interval $[0, t]$.

We know: $N(t) \sim \text{Po}(\lambda t)$

**Key Question:** What does $F_T(t) = P(T \leq t)$ represent?

**Answer:** "The probability that the first event occurs within time $t$"

**Strategic Insight:** Use the complement approach!

"First event occurs within time $t$" $\Leftrightarrow$ "At least one event occurs within time $t$"

Therefore: $P(T \leq t) = 1 - P(\text{no events occur within time } t) = 1 - P(N(t) = 0)$

**Your Turn:** Calculate $P(N(t) = 0)$ using the Poisson PMF and find $F_T(t)$.

For $t \geq 0$,

$$F_T(t) = P(T \leq t) = 1 - P(N(t) = 0) = \_\_\_$$

**Step 2: Finding the Probability Density Function**

**Recall:** For continuous random variables, $f_T(t) = \frac{d}{dt} F_T(t)$

**Your Turn:** Differentiate the CDF you found in Step 1 to find the PDF.

$$f_T(t) = \frac{d}{dt} F_T(t) = \_\_\_ \quad \text{for } t \geq 0$$

**Step 3: Computing the Expected Value**

**Your Turn:** Using the PDF you found in Step 2, calculate $E(T)$.

$$E(T) = \int_0^{\infty} t \cdot f_T(t) \, dt = \_\_\_$$

**Hint:** Use integration by parts.

---

:::tip[The Exponential Distribution]
We have successfully derived that in a Poisson process, the waiting time $T$ follows an **Exponential Distribution** with parameter $\lambda$, denoted $T \sim \text{Exp}(\lambda)$.

**Key Properties:**
- PDF: $f(t) = \lambda e^{-\lambda t}$ for $t \geq 0$
- CDF: $F(t) = 1 - e^{-\lambda t}$ for $t \geq 0$
- Mean: $E(T) = \frac{1}{\lambda}$

**Interpretation:** If events occur at rate $\lambda$ per unit time, the average waiting time until the first event is $\frac{1}{\lambda}$ time units.
:::

:::note[Applications of Exponential Distribution]
1. If customers arrive at a bank at a rate of 3 per hour, what's the probability that the next customer arrives within 15 minutes?
2. If the average lifetime of a light bulb is 1000 hours, what's the probability it lasts more than 1200 hours? (Assume exponential distribution)

**Your solutions:**
:::

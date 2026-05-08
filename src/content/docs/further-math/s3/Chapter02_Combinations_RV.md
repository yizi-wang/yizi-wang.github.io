---
title: "S3 Chapter 2: Combinations of Random Variables"
---

:::tip[Core Motivation]
In real decisions, we almost never use one raw measurement alone. We use totals, differences, weighted averages, and combined scores:
- total weight of multiple products in quality control,
- difference between morning and evening blood pressure,
- average test score from several sections,
- total delivery time for multi-stage logistics.

All these require **combinations of random variables**. If students mix up expectation rules, variance rules, or independence conditions, all later inference becomes fragile.
:::

:::tip[Learning Goals]
By the end of this handout, students should be able to:
1. Use normal notation and interpret parameters in context.
2. Find distributions of sums and linear combinations of independent normal variables.
3. Explain why $E(X+Y)=E(X)+E(Y)$ always holds.
4. Distinguish clearly between $\text{Var}(X+Y)$ and $\text{Var}(X)+\text{Var}(Y)$.
5. Check independence **before** simplifying variance calculations.
6. Solve exam-style questions involving $aX+bY$, $\bar{X}$, and totals.
:::

:::tip[Roadmap]
How to use this handout:
1. Section 1: Normal distribution basics and intuition.
2. Section 2: Expectation and linear combinations.
3. Section 3: Variance and the independence checkpoint.
4. Section 4: Combination of normal distributions.
5. Section 5: Class practice in past-paper style.
6. Section 6: Three transferred exercises from the last homework set.
:::

## Definitions and Theorems

**Definition: Normal Distribution**
A random variable $X$ is normally distributed with mean $\mu$ and variance $\sigma^2$, written
$$X \sim N(\mu,\sigma^2).$$
- $\mu$: center/location (expected value),
- $\sigma$: spread/typical deviation,
- $\sigma^2$: variance.

**Theorem: Linearity of Expectation**
For any random variables $X_1,\ldots,X_n$ and constants $a_1,\ldots,a_n,b$,
$$E\!\left(\sum_{i=1}^{n} a_iX_i + b\right)=\sum_{i=1}^{n}a_iE(X_i)+b.$$
**No independence assumption is needed.**

**Theorem: Variance Rules Under Independence**
If $X$ and $Y$ are independent, then
$$\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y).$$
For independent $X_1,\ldots,X_n$,
$$\text{Var}\!\left(\sum_{i=1}^{n}a_iX_i\right)=\sum_{i=1}^{n}a_i^2\text{Var}(X_i).$$

**Theorem: Linear Combination of Independent Normals**
If $X_1,\ldots,X_n$ are independent and
$$X_i\sim N(\mu_i,\sigma_i^2),$$
then for constants $a_1,\ldots,a_n$,
$$L=\sum_{i=1}^{n}a_iX_i$$
is normally distributed with
$$E(L)=\sum_{i=1}^{n}a_i\mu_i,\quad \text{Var}(L)=\sum_{i=1}^{n}a_i^2\sigma_i^2.$$

## Normal Distribution: The Model and Intuition

### Learning Objectives
- Read and interpret $X \sim N(\mu,\sigma^2)$.
- Connect mean and variance to realistic contexts.
- Standardize to the $Z$-distribution for probability calculation.

### Definition and Notation

:::tip[Real-World Motivation]
Many quantities are affected by many small additive factors:
- product weight = machine setting + material fluctuation + moisture + measurement noise;
- commute time = base travel time + traffic light delays + boarding delay + random crowd effects;
- blood pressure reading = physiological level + temporary stress + instrument noise.

When many small effects add up, a bell-shape is often a useful approximation.
:::

### Standardization and Probability

If $X \sim N(\mu,\sigma^2)$, define
$$Z=\frac{X-\mu}{\sigma}\sim N(0,1).$$

Then
$$P(X\le x)=P\!\left(Z\le \frac{x-\mu}{\sigma}\right).$$

## Worked Examples

**Example: Battery Weight**

Suppose battery weight $W \sim N(75,\,3^2)$ grams.
$$P(W>80) = P\!\left(Z>\frac{80-75}{3}\right) = P(Z>1.667).$$
So the problem is converted to standard normal table use.

:::tip[Key Distinction]
$$E(X+Y)=E(X)+E(Y) \quad \text{always true}$$

$$\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y) \quad \text{not always true}$$

This is one of the most important contrasts in the chapter.
:::

**Example: Hedging Trade: Meituan and Alibaba Expected Return**

Let
- $M$: one-day return (%) of Meituan stock
- $A$: one-day return (%) of Alibaba stock

A trader builds a hedge portfolio:
$$P=M-0.7A$$
(long Meituan, short $0.7$ units of Alibaba).

Suppose
$$E(M)=0.40,\quad E(A)=0.25.$$
Then
$$E(P)=E(M)-0.7E(A)=0.40-0.7(0.25)=0.225.$$
So the expected one-day return of the hedged portfolio is $0.225\%$.

**Example: Hedged Portfolio Variance: Independence Given**

Continue with
$$P=M-0.7A,$$
and assume
$$\text{Var}(M)=2.25,\quad \text{Var}(A)=1.44.$$
If the question states that $M$ and $A$ are independent, then
$$\text{Var}(P)=\text{Var}(M)+(-0.7)^2\text{Var}(A)=2.25+0.49(1.44)=2.9556.$$
Therefore
$$\text{SD}(P)=\sqrt{2.9556}\approx 1.72.$$
**Key point:** coefficients must be squared in variance calculations.

:::tip[Exam-Grade Checklist Before Any Variance Sum]
1. Write the random variable expression clearly.
2. Ask: are these terms independent?
3. If independence is given, apply sum-of-variances and square each coefficient.
:::

**Example: Hedged Portfolio Variance: Independence Not Given**

If the question only gives
$$\text{Var}(M)=2.25,\quad \text{Var}(A)=1.44,$$
but does not state whether Meituan and Alibaba returns are independent, then for
$$P=M-0.7A$$
you **cannot** directly write
$$\text{Var}(P)=2.25+0.49(1.44).$$

If the returns are negatively correlated, then the variance of $P$ becomes lower which reduces the risk of the hedge portfolio.

**Example: Difference of Blood Pressure Readings**

Morning and evening blood pressures:
$$M\sim N(120,25),\quad E\sim N(115,36),$$
with independence. Define $D=M-E$.

Then
$$E(D)=120-115=5,\quad \text{Var}(D)=25+36=61.$$
So
$$D\sim N(5,61).$$

**Example: Weighted Combination**

Suppose $X\sim N(60,4)$, $Y\sim N(45,9)$, independent.
Let
$$T=2X-3Y.$$
Then
$$E(T)=2(60)-3(45)=-15,$$
$$\text{Var}(T)=2^2(4)+(-3)^2(9)=16+81=97.$$
Hence
$$T\sim N(-15,97).$$

### Sample Mean as a Combination

If $X_1,\ldots,X_n$ are independent $N(\mu,\sigma^2)$, then
$$\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$$
is also normal, and
$$\bar{X}\sim N\!\left(\mu,\frac{\sigma^2}{n}\right).$$

This single result powers much of later confidence interval work.

## Exercises

:::note[Exercise: Class Practice]
Random variables $X_1,\ldots,X_{40}$ are independent with $X_i\sim N(120,25)$. Let $\bar{X}$ be the sample mean.

(a) Find the distribution of $\bar{X}$.

(b) Find $P(\bar{X}>122)$.

(c) Explain in one or two sentences why $\bar{X}$ is much less variable than a single $X_i$.
:::

## Past Paper Questions

:::note[Exercise: WST03/01/June20/7]
(a) A company makes cricket balls and tennis balls. The weights of cricket balls, $C$ grams, follow a normal distribution
$$C \sim N(160, 1.25^2)$$
Three cricket balls are selected at random. Find the probability that their total weight is more than 475.8 grams. (4)

(b) The weights of tennis balls, $T$ grams, follow a normal distribution
$$T \sim N(60, 2^2)$$
Five tennis balls and two cricket balls are selected at random. Find the probability that the total weight of the five tennis balls and the two cricket balls is more than 625 grams. (4)

(c) A random sample of $n$ tennis balls $T_1, T_2, T_3, \ldots, T_n$ is taken. The random variable
$$Y = (n - 1)T_1 - \sum_{i=2}^n T_i$$
Given that
$$\text{P}(Y > 40) = 0.0838$$
correct to 4 decimal places, find $n$. (8)
:::

:::note[Exercise: 6691/01/May19/7]
(a) Two independent random samples $X_1, X_2, X_3, X_4$ and $Y_1, Y_2, Y_3, Y_4$ are each taken from a normal population with mean $\mu$ and variance $\sigma^2$. Find the distribution of the random variable $M = 4X_1 - 3X_2 - \overline{Y}$. (4)

(b) Hence show that $P(4X_1 < 3X_2 + \overline{Y} + \sigma) = 0.579$ to 3 significant figures. (3)

(c) A random sample $W_1, W_2, W_3, W_4$ is also taken from a normal population with mean $\mu$ and variance $\sigma^2$. Find the distribution of the random variable $T = 4W_1 - 3W_2 - \overline{W}$. (5)
:::

:::note[Exercise: WST03/01/Jan21/6]
(a) A potter makes decorative tiles in two colours, red and yellow. The length, $R$ cm, of the red tiles has a normal distribution with mean 15 cm and standard deviation 1.5 cm. The length, $Y$ cm, of the yellow tiles has the normal distribution $N(12, 0.8^2)$. The random variables $R$ and $Y$ are independent. A red tile and a yellow tile are chosen at random. Find the probability that the yellow tile is longer than the red tile. (4)

(b) Taruni buys 3 red tiles and 1 yellow tile. Find the probability that the total length of the 3 red tiles is less than 4 times the length of the yellow tile. (7)

(c) Stefan defines the random variable $X = aR + bY$, where $a$ and $b$ are constants. He wants to use values of $a$ and $b$ such that $X$ has a mean of 780 and minimum variance. Find the value of $a$ and the value of $b$ that Stefan should use. (7)
:::

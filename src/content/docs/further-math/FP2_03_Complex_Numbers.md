---
title: "FP2 Chapter 3: Complex Numbers and de Moivre's Theorem"
---

# FP2 Lecture Notes: Complex Numbers and de Moivre's Theorem

## Review: Fundamentals of Complex Numbers

:::note[Quick Review Exercise]
For each complex number $z$ below:
- Find its modulus $|z|$
- Find its argument $\arg(z)$ (principal value)
- Find its complex conjugate $\overline{z}$
- Plot it on an Argand diagram

a) $z_1 = 3 + 4i$

b) $z_2 = -2 - 2i$

c) $z_3 = -3$
:::

## Module 1: Exponential Form and Euler's Formula

### The Geometric Interpretation

:::note[Key Concept: Complex Numbers and Rotation]
**Think of Complex Numbers as Arrows**

Each complex number is like an arrow from the origin. The length of the arrow is the modulus $|z|$, and the angle from the positive x-axis is the argument $\arg(z)$.

**When multiplying two complex numbers:**

- The arrows' lengths multiply: $|z_1z_2| = |z_1||z_2|$
- The angles add: $\arg(z_1z_2) = \arg(z_1) + \arg(z_2)$

**Limitations of the Traditional $a+bi$ Form**

When multiplying, we cannot directly see the geometric interpretation. For example, the product of $z_1 = a + bi$ and $z_2 = c + di$ can result in a complex outcome, making it difficult to grasp its geometric meaning. Using polar form (magnitude and angle) can more clearly demonstrate how multiplication corresponds to geometric rotation and scaling.

**Euler's Formula: A Bridge Between Forms**

$$
e^{i\theta} = \cos \theta + i\sin \theta
$$

This means any complex number can be written as:

$$
z = re^{i\theta} \text{ where } r = |z| \text{ and } \theta = \arg(z)
$$

**Simple Rules to Remember:**
- Multiplying by $e^{i\theta}$ rotates by angle $\theta$
- Multiplying by a positive real number $r$ stretches by factor $r$
- Multiplying by $re^{i\theta}$ does both at once
:::

### Example 1: Converting Between Forms

Express the following in exponential form $re^{i\theta}$:

1. $1 + i$
2. $-2i$
3. $-1 - \sqrt{3}i$

### Example 2: Powers and Exponential Form

Show that $z^n + \frac{1}{z^n} = 2\cos n \theta$ where $n$ is a positive integer and $z = e^{i\theta}$.

### Example 3: Solving Complex Equations

Solve the equation $z^5 - 32i = 0$, giving each answer in the form $re^{i\theta}$ where $0 < \theta < 2\pi$.

:::note[Key Points]
1. The exponential form $re^{i\theta}$ combines scaling ($r$) and rotation ($\theta$) in one elegant expression
2. When working with powers, the exponential form is often more convenient than Cartesian form
3. For an nth root:
   - If $z = re^{i\theta}$, then $z^{1/n} = r^{1/n}e^{i(\theta + 2\pi k)/n}$
   - There are always $n$ distinct nth roots
   - These roots form a regular n-gon in the complex plane
:::

## Module 2: De Moivre's Theorem

:::note[Historical Context]
De Moivre's Theorem was discovered by Abraham de Moivre (1667–1754) in 1722, before Euler's formula was established. While today we often prove it using Euler's formula, de Moivre originally proved it using mathematical induction. This historical fact reminds us that there are often multiple valid approaches to mathematical proofs.

The theorem was first published in its complete form in 1730, and it became a crucial tool in complex analysis and trigonometry. Interestingly, de Moivre discovered this theorem while studying patterns in powers of complex numbers, showing how mathematical discoveries often arise from observing patterns.
:::

### Theorem: De Moivre's Theorem

For any real number $\theta$ and any integer $n$:

$$
(\cos \theta + i\sin \theta)^n = \cos(n\theta) + i\sin(n\theta)
$$

**Proof Using Euler's Formula:**

1. By Euler's formula, $\cos \theta + i\sin \theta = e^{i\theta}$
2. Therefore, $(\cos \theta + i\sin \theta)^n = (e^{i\theta})^n = e^{in\theta}$
3. Again by Euler's formula, $e^{in\theta} = \cos(n\theta) + i\sin(n\theta)$

**Proof by Mathematical Induction:**

Let $P(n)$ be the statement: $(\cos \theta + i\sin \theta)^n = \cos(n\theta) + i\sin(n\theta)$.

1. **Base case:** When $n=1$, the statement is trivially true.
2. **Inductive step:** Assume $P(k)$ is true for some positive integer $k$. Then:

$$
\begin{aligned}
(\cos \theta + i\sin \theta)^{k+1} &= (\cos \theta + i\sin \theta)^k(\cos \theta + i\sin \theta) \\
&= [\cos(k\theta) + i\sin(k\theta)][\cos \theta + i\sin \theta] \\
&= [\cos(k\theta)\cos \theta - \sin(k\theta)\sin \theta] \\
&\quad + i[\sin(k\theta)\cos \theta + \cos(k\theta)\sin \theta] \\
&= \cos((k+1)\theta) + i\sin((k+1)\theta)
\end{aligned}
$$

3. Therefore, by mathematical induction, $P(n)$ is true for all positive integers $n$.

### Example 4: Application to Trigonometric Identities

Show that $\cos 5x \equiv \cos x(16\sin^4 x - 12\sin^2 x + 1)$.

### Example 5: Application to Complex Equations

By the previous example, solve the equation

$$
\cos 5\theta = \sin 2\theta \sin \theta - \cos \theta
$$

for $0 < \theta < \dfrac{\pi}{2}$.

## Module 3: Exam-Style Questions and Applications

:::note[Common Question Types]
**Type 1: Finding nth Roots**

Given $z^n = a + bi$, find all values of $z$.

Key steps:
1. Convert $a + bi$ to $re^{i\theta}$ form
2. Use $z = r^{1/n}e^{i(\theta + 2\pi k)/n}$, $k = 0,1,\ldots,n-1$
3. Express answers in required form (either $re^{i\theta}$ or $a + bi$)

**Type 2: Multiple Angle Formulas**

Prove identities like $\cos n\theta = f(\cos \theta)$ or $\sin n\theta = f(\sin \theta)$.

Key steps:
1. Apply de Moivre's theorem to get $(\cos \theta + i \sin \theta)^n = \cos(n\theta) + i \sin(n\theta)$
2. Expand using binomial theorem
3. Equate real and imaginary parts

**Type 3: Powers of Trigonometric Functions**

Express $\cos^n \theta$ or $\sin^n \theta$ in terms of multiple angles.

Key steps:
1. Use $z = e^{i\theta}$ and $\frac{1}{z} = e^{-i\theta}$
2. Express $\cos \theta = \frac{z + \frac{1}{z}}{2}$ and $\sin \theta = \frac{z - \frac{1}{z}}{2i}$
3. Expand and collect terms with same powers
4. Convert back to trigonometric form

**Application 1: Integration Using De Moivre**

For integrals involving powers of sine and cosine:
1. Convert to multiple angle form using de Moivre
2. Integration becomes straightforward

**Application 2: Solving Equations**

For equations involving trigonometric functions:
1. Use de Moivre to convert to simpler form
2. Often leads to polynomial in $\sin \theta$ or $\cos \theta$
3. Solve resulting equation
4. Check solutions in given range

For polynomial equations:
1. Sometimes can be solved by substituting $x = \tan \theta$
2. Use multiple angle formulas from de Moivre
3. Convert back to original variable
:::

### Example 6: Products and Powers

**Part 1:** Show that

$$
\left(z + \frac{1}{z}\right)^3 \left(z - \frac{1}{z}\right)^3 = z^6 - \frac{1}{z^6} - k\left(z^2 - \frac{1}{z^2}\right)
$$

for some constant $k$.

**Part 2:** Given that $z = \cos \theta + i\sin \theta$, show that:

(i) $z^n + \dfrac{1}{z^n} = 2\cos n\theta$

(ii) $z^n - \dfrac{1}{z^n} = 2i\sin n\theta$

**Part 3:** Hence show that:

$$
\cos^3 \theta \sin^3 \theta = \frac{1}{32}(3\sin 2\theta - \sin 6\theta)
$$

**Part 4:** Find the exact value of

$$
\int_0^{\frac{\pi}{8}} \cos^3 \theta \sin^3 \theta \, d\theta
$$

### Example 7: Solving Equations

Use de Moivre's theorem to show that

$$
\tan 4\theta = \frac{4\tan \theta - 4\tan^3 \theta}{1 - 6\tan^2 \theta + \tan^4 \theta}
$$

**Application:** Use this to solve the equation $x^4 + 2x^3 - 6x^2 - 2x + 1 = 0$.

## Homework Problems

### Exercise 1: Complex Powers

Let $z = -8 + (8\sqrt{3})i$.

(a) Find the modulus of $z$ and the argument of $z$.

(b) Using de Moivre's theorem, find $z^3$.

(c) Find the values of $w$ such that $w^4 = z$, giving your answers in the form $a + ib$, where $a, b \in \mathbb{R}$.

:::tip[Hints]
- For part (a), remember $|z| = \sqrt{a^2 + b^2}$ and $\arg(z) = \arctan(\frac{b}{a})$ with appropriate adjustments for quadrant
- For part (b), first express $z$ in the form $re^{i\theta}$
- For part (c), use the fact that if $w^4 = re^{i\theta}$, then $w = r^{\frac{1}{4}}e^{i(\theta + 2\pi k)/4}$ where $k = 0,1,2,3$
:::

### Exercise 2: Multiple Angle Formulas

(a) Use de Moivre's theorem to show that

$$
\sin 5\theta = 16\sin^5 \theta - 20\sin^3 \theta + 5\sin \theta
$$

(b) Hence, given also that $\sin 3\theta = 3\sin \theta - 4\sin^3 \theta$, find all the solutions of

$$
\sin 5\theta = 5\sin 3\theta
$$

in the interval $0 \leq \theta < 2\pi$. Give your answers to 3 decimal places.

:::tip[Hints]
- For part (a), start with $(e^{i\theta})^5$ and use the imaginary part
- For part (b):
  - Substitute the given formula for $\sin 3\theta$
  - Collect terms to form a polynomial in $\sin \theta$
  - Consider when $\sin \theta = 0$
  - For other solutions, solve the resulting polynomial equation
:::

### Challenge Problem: Proving Euler's Formula

**Proving Euler's Formula Using Differential Equations**

Let's prove that $e^{ix} = \cos x + i\sin x$ using differential equations.

**Prerequisites:**

- Complex-valued functions can be differentiated using the same rules as real functions
- If $f(x) = u(x) + iv(x)$ where $u$ and $v$ are real functions, then:

$$
f'(x) = u'(x) + iv'(x)
$$

- The derivative of a constant function is zero, and if $f'(x) = 0$ for all $x$ and $f$ is continuous, then $f$ is constant

**Problem:** Follow these steps to prove Euler's formula:

1. Let $f(x) = e^{ix}$ and $g(x) = \cos x + i\sin x$. Show that:

$$
\begin{aligned}
f'(x) &= ie^{ix} \\
g'(x) &= -\sin x + i\cos x = i(\cos x + i\sin x) = ig(x)
\end{aligned}
$$

2. Show that both $f$ and $g$ satisfy the differential equation $y' = iy$.
3. Show that $f(0) = g(0) = 1$.
4. Let $h(x) = f(x) - g(x)$. Show that $h'(x) = ih(x)$ and $h(0) = 0$.
5. Consider $k(x) = h(x)e^{-ix}$. Show that $k'(x) = 0$.
6. Using the fact that a continuous function with zero derivative must be constant, and that $k(0) = 0$, conclude that $k(x) = 0$ for all $x$.
7. Therefore, conclude that $h(x) = 0$ for all $x$, meaning $f(x) = g(x)$ for all $x$.

:::tip[Key Insights]
- This proof uses the uniqueness theorem for first-order linear differential equations
- The function $k(x)$ is cleverly constructed to have zero derivative
- The initial condition $f(0) = g(0) = 1$ is crucial for the proof
:::

---
title: "FP2 Chapter 7: Maclaurin and Taylor Series"
---

## FP2 Lecture Notes: Maclaurin and Taylor Series

## Introduction

Taylor series and Maclaurin series provide powerful methods for approximating functions using polynomials. These approximations are fundamental in calculus, engineering, and physics, allowing us to represent complex functions in terms of simpler polynomial expressions.

:::note[Motivating Problem: Computing Complex Functions]
How can we compute values of functions like $e^x$, $\sin x$, or $\ln(1+x)$ without a calculator? How might we approximate these functions using simpler expressions like polynomials?

Taylor series provide a way to represent complicated functions as infinite sums of power terms. This approach not only helps us compute function values but also gives us insights into function behavior near specific points. The Maclaurin series is a special case of the Taylor series centered at $x = 0$.

For instance, we can represent $e^x$ as $1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \ldots$, a pattern that would have been difficult to discover without the systematic approach of Taylor series.
:::

## Module 1: Historical Background

:::note[Historical Context and Significance]
The development of Taylor series and Maclaurin series represents one of the most significant advancements in mathematical analysis.

**Brook Taylor** (1685–1731) was an English mathematician who first introduced what we now call Taylor series in his work *Methodus Incrementorum Directa et Inversa* (1715). Taylor's method provided a way to express functions as infinite power series, but his presentation lacked the rigor we associate with modern mathematics.

**Colin Maclaurin** (1698–1746), a Scottish mathematician, popularized the special case of Taylor series centered at $x = 0$ in his *Treatise of Fluxions* (1742). Although Maclaurin did not discover this special case, his thorough treatment of these series led to them being named after him.

These innovations built upon earlier work by mathematicians like James Gregory and Isaac Newton, who had developed similar ideas but had not formalized them into the general methods we use today.
:::

:::note[Modern Applications: NASA and Beyond]
Taylor series are not merely mathematical curiosities — they are essential tools in modern technology and science:

**Satellite Orbit Calculations**: NASA and other space agencies use Taylor series expansions to calculate and predict satellite orbits with high precision. The gravitational equations governing orbital mechanics are often too complex to solve exactly, but Taylor approximations provide accurate and computationally efficient solutions.

**Computer Calculations**: When your calculator or computer evaluates functions like $\sin x$, $\cos x$, or $e^x$, it often uses truncated Taylor series rather than computing these transcendental functions directly.
:::

## Module 2: Higher-Order Derivatives

### Notation and Calculation of Higher Derivatives

**Notation:**
- $f'(x)$ or $f^{(1)}(x)$: First derivative
- $f''(x)$ or $f^{(2)}(x)$: Second derivative
- $f'''(x)$ or $f^{(3)}(x)$: Third derivative
- $f^{(n)}(x)$: $n$-th derivative (Leibniz notation: $\frac{d^n f}{dx^n}$)

**Examples of Higher Derivative Calculations:**

For $f(x) = e^x$:

$$
\begin{aligned}
f'(x) &= e^x \\
f''(x) &= e^x \\
f'''(x) &= e^x
\end{aligned}
$$

All derivatives of $e^x$ are equal to $e^x$ itself!

For $f(x) = \sin x$:

$$
\begin{aligned}
f'(x) &= \cos x \\
f''(x) &= -\sin x \\
f'''(x) &= -\cos x \\
f^{(4)}(x) &= \sin x
\end{aligned}
$$

The derivatives of $\sin x$ follow a cycle of four functions.

For $f(x) = x^n$ (where $n$ is a positive integer):

$$
\begin{aligned}
f'(x) &= nx^{n-1} \\
f''(x) &= n(n-1)x^{n-2} \\
f'''(x) &= n(n-1)(n-2)x^{n-3}
\end{aligned}
$$

The pattern continues until we reach the $n$-th derivative, which equals $n!$ (constant), and all higher derivatives are zero.

## Module 3: Maclaurin Series Formula

### Derivation of the Maclaurin Series

Let's begin by considering a polynomial $P(x)$ that approximates a function $f(x)$ near $x = 0$:

$$
P(x) = a_0 + a_1x + a_2x^2 + a_3x^3 + \cdots + a_nx^n
$$

If we want this polynomial to match $f(x)$ and its derivatives at $x = 0$, we need:

$$
\begin{aligned}
P(0) &= f(0) &\Rightarrow \quad a_0 &= f(0) \\
P'(0) &= f'(0) &\Rightarrow \quad a_1 &= f'(0) \\
P''(0) &= f''(0) &\Rightarrow \quad 2!\,a_2 &= f''(0) &\Rightarrow \quad a_2 &= \frac{f''(0)}{2!} \\
P'''(0) &= f'''(0) &\Rightarrow \quad 3!\,a_3 &= f'''(0) &\Rightarrow \quad a_3 &= \frac{f'''(0)}{3!}
\end{aligned}
$$

Continuing this pattern, we find that $a_n = \frac{f^{(n)}(0)}{n!}$.

Substituting these values into our polynomial:

$$
P(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots + \frac{f^{(n)}(0)}{n!}x^n
$$

This is the **Maclaurin polynomial** of degree $n$. As $n$ approaches infinity, we get the **Maclaurin series**:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \cdots
$$

:::note[Practice Exercise: Exponential Function]
**Problem:** Given that $y = e^{2x}\cos(x)$:

(a) Find the first four derivatives of $y$ with respect to $x$.

(b) Determine the Maclaurin series expansion of $e^{2x}\cos(x)$ up to and including the term in $x^4$.
:::

### Visualizing Maclaurin Approximations

Understanding Maclaurin series becomes much clearer when we visualize how the polynomial approximations converge to the original function.

For example, consider the function $f(x) = e^x$ and its Maclaurin polynomials:

$$
\begin{aligned}
P_0(x) &= 1 \\
P_1(x) &= 1 + x \\
P_2(x) &= 1 + x + \frac{x^2}{2}
\end{aligned}
$$

![Maclaurin approximation of e^x](/images/tikz/fp2-maclaurin-approximation.svg)

**Observations:**
- Each polynomial $P_n(x)$ matches the function $f(x)$ and its first $n$ derivatives at $x = 0$
- As $n$ increases, the approximation becomes more accurate over a wider range of $x$ values
- Near $x = 0$, even lower-degree approximations are quite accurate
- As we move further from $x = 0$, we need higher-degree terms for good approximation

Similar visual patterns emerge for other common functions like $\sin x$, $\cos x$, and $\ln(1+x)$, though each has its own convergence characteristics.

:::note[Practice Exercise: Maclaurin Series Formula]
**Problem:** Given that $y = \ln(5 + 3x)$:

(a) Determine, in simplest form, $\displaystyle \frac{d^3y}{dx^3}$.

(b) Hence, find the Maclaurin series expansion of $\ln(5 + 3x)$, in ascending powers of $x$ up to and including the term in $x^3$, giving each coefficient in simplest form.
:::

## Module 4: Common Maclaurin Series Examples

### Maclaurin Series for Important Functions

Here are the Maclaurin series expansions for some fundamental functions:

**Exponential function:**

$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$

**Sine function:**

$$
\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}
$$

**Cosine function:**

$$
\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}
$$

**Natural logarithm:**

$$
\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}x^n}{n}
$$

**Binomial expansion:**

$$
(1+x)^k = 1 + kx + \frac{k(k-1)}{2!}x^2 + \frac{k(k-1)(k-2)}{3!}x^3 + \cdots
$$

### Example: Computing $e$ Using the Maclaurin Series

We can calculate the value of $e$ by using the Maclaurin series for $e^x$ and setting $x = 1$:

$$
e = e^1 = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + \cdots
$$

Let's compute increasingly accurate approximations:

$$
\begin{aligned}
1 &= 1.0000 \\
1 + 1 &= 2.0000 \\
1 + 1 + \frac{1}{2} &= 2.5000 \\
1 + 1 + \frac{1}{2} + \frac{1}{6} &= 2.6667 \\
1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} &= 2.7083 \\
1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \frac{1}{120} &= 2.7167
\end{aligned}
$$

The actual value of $e$ to 5 decimal places is 2.71828. Even with just a few terms, we get a reasonably accurate approximation.

### Example: Computing $\sin(0.1)$ Using the Maclaurin Series

We can calculate $\sin(0.1)$ using the Maclaurin series:

$$
\sin(0.1) = 0.1 - \frac{(0.1)^3}{3!} + \frac{(0.1)^5}{5!} - \frac{(0.1)^7}{7!} + \cdots
$$

Computing:

$$
\begin{aligned}
0.1 &= 0.1000000 \\
0.1 - \frac{(0.1)^3}{6} &= 0.1 - 0.0001667 = 0.0998333 \\
0.0998333 + \frac{(0.1)^5}{120} &= 0.0998333 + 0.0000000833 = 0.0998334
\end{aligned}
$$

The actual value of $\sin(0.1)$ to 7 decimal places is 0.0998334. Our approximation is extremely accurate with just three terms, demonstrating how quickly the Maclaurin series can converge for small values of $x$.

:::note[Practice Exercise: Working with Known Series]
**Problem:** Given the Maclaurin series for $\ln(5+3x)$ computed previously, determine the Maclaurin series expansion of $\ln(5 - 3x)$ in ascending powers of $x$ up to and including the term in $x^3$, giving each coefficient in simplest form. Hence determine the first 2 non-zero terms of the Maclaurin series expansion of $\ln\left(\frac{5 + 3x}{5 - 3x}\right)$ in ascending powers of $x$.
:::

## Module 5: The Taylor Series — Generalising Maclaurin Series

### Definition

The **Taylor series** of a function $f(x)$ that is infinitely differentiable at $x = a$ is given by:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n
$$

provided that this infinite series converges to $f(x)$ for values of $x$ in some neighbourhood of $a$.

### Relationship Between Taylor and Maclaurin Series

The Maclaurin series is simply a special case of the Taylor series where the expansion is centred at $a = 0$.

**When to use Taylor vs. Maclaurin:**
- Use a Maclaurin series when you're interested in the behaviour of the function near $x = 0$
- Use a Taylor series expanded at $x = a$ when you're interested in the behaviour near $x = a$
- A Taylor series often converges more rapidly for values close to its centre point $a$

**Example:** If we want to approximate $\ln(x)$ near $x = 2$, a Taylor series centred at $a = 2$ will provide better results than a Maclaurin series centred at $a = 0$.

:::note[Practice Exercise: Taylor Series for Composite Functions]
**Problem:** Consider the function $f(x) = \sin(x^2)$.

(a) Find the Taylor series expansion of $\sin(x^2)$ about $x = 0$ up to and including the term in $x^6$.

(b) Find the Taylor series expansion of $\sin(x^2)$ about $x = \pi/2$ up to the third-degree term.
:::

## Module 6: Solving Differential Equations with Series Methods

### Example: Solving $y'' + 2y' = xy$ with Initial Conditions

Let's solve the differential equation $y'' + 2y' = xy$ with initial conditions $y(1) = 1$ and $y'(1) = 2$.

Since our initial conditions are given at $x = 1$, we use a Taylor series centred at $x = 1$:

$$
y(x) = \sum_{n=0}^{\infty} \frac{y^{(n)}(1)}{n!} (x-1)^n
$$

**Step 1:** Initial conditions give us:

$$
\begin{aligned}
y(1) &= y^{(0)}(1) = 1 \\
y'(1) &= y^{(1)}(1) = 2
\end{aligned}
$$

**Step 2:** By the original equation $y'' + 2y' = xy$ when $x = 1$:

$$
y''(1) + 2y'(1) = 1 \cdot y(1)
$$

Hence $y''(1) = 1 \cdot y(1) - 2 \cdot y'(1) = 1 \cdot 1 - 2 \cdot 2 = -3$.

**Step 3:** Differentiating the original equation, we get:

$$
y''' + 2y'' = y + xy'
$$

Hence $y'''(1) = y(1) + 1 \cdot y'(1) - 2 \cdot y''(1) = 1 + 1 \cdot 2 - 2 \cdot (-3) = 9$.

**Step 4:** Our series solution up to the third order is:

$$
y(x) = 1 + 2(x-1) - \frac{3}{2}(x-1)^2 + \frac{9}{6}(x-1)^3 = 1 + 2(x-1) - \frac{3}{2}(x-1)^2 + \frac{3}{2}(x-1)^3
$$

:::note[Practice Exercise: Differential Equations]
For the differential equation $y' = x + y$ with $y(0) = 1$, find the Maclaurin series expansion for $y$ up to $x^3$.
:::

## Exercises

:::note[Exercise 1]
Consider $y = \sec^2 x$.

(a) Show that $\displaystyle \frac{d^2y}{dx^2} = 6\sec^4 x - 4\sec^2 x$.

(b) Find a Taylor series expansion of $\sec^2 x$ in ascending powers of $\displaystyle \left(x - \frac{\pi}{4}\right)$, up to and including the term in $\displaystyle \left(x - \frac{\pi}{4}\right)^3$.
:::

:::note[Exercise 2]
The displacement $x$ metres of a particle at time $t$ seconds is given by the differential equation

$$
\frac{d^2x}{dt^2} + x + \cos x = 0
$$

When $t = 0$, $x = 0$ and $\frac{dx}{dt} = \frac{1}{2}$.

Find a Taylor series solution for $x$ in ascending powers of $t$, up to and including the term in $t^3$.
:::

:::note[Exercise 3]
Consider the differential equation:

$$
\frac{d^2y}{dx^2} = e^y\left(2y\frac{dy}{dx} + y^2 + 1\right)
$$

(a) Show that

$$
\frac{d^3y}{dx^3} = e^y\left[2y\frac{d^2y}{dx^2} + 2\left(\frac{dy}{dx}\right)^2 + ky\frac{dy}{dx} + y^2 + 1\right]
$$

where $k$ is a constant to be found.

(b) Given that, at $x = 0$, $y = 1$ and $\frac{dy}{dx} = 2$, find a series solution for $y$ in ascending powers of $x$, up to and including the term in $x^3$.
:::

:::note[Exercise 4]
Consider the differential equation:

$$
x\frac{dy}{dx} = 3x + y^2
$$

(a) Show that

$$
x\frac{d^2y}{dx^2} + (1-2y)\frac{dy}{dx} = 3
$$

(b) Given that $y = 1$ at $x = 1$, find a series solution for $y$ in ascending powers of $(x-1)$, up to and including the term in $(x-1)^3$.
:::

---
title: "FP3 Chapter 4: Integration"
---

# FP3 Lecture Notes: Integration

## Prior Knowledge Check

Before we begin, let's review some key concepts from our previous study of differentiation:

:::tip[Exercise: Chain Rule and Composite Functions]
Find $\frac{dy}{dx}$ for:

1. $y = \sin(\operatorname{arcosh} x)$
2. $y = \arctan(e^x)$
3. $y = \ln(\sqrt{1-x^2})$
:::

:::note[Reference: Integration and Differentiation Formulas]

**Trigonometric Functions**

| $f(x)$ | $\int f(x)\,dx$ | $f'(x)$ |
|---|---|---|
| $\tan x$ | $\ln\|\sec x\|$ | $\sec^2 x$ |
| $\cot x$ | $\ln\|\sin x\|$ | $-\operatorname{cosec}^2 x$ |
| $\sec x$ | | $\sec x\tan x$ |
| $\operatorname{cosec} x$ | | $-\operatorname{cosec} x\cot x$ |
| $\arcsin x$ | | $\frac{1}{\sqrt{1-x^2}}$ |
| $\arccos x$ | | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | | $\frac{1}{1+x^2}$ |

**Hyperbolic Functions**

| $f(x)$ | $\int f(x)\,dx$ | $f'(x)$ |
|---|---|---|
| $\tanh x$ | $\ln\cosh x$ | $\operatorname{sech}^2 x$ |
| $\coth x$ | $\ln\|\sinh x\|$ | $-\operatorname{csch}^2 x$ |
| $\operatorname{sech} x$ | | $-\operatorname{sech} x\tanh x$ |
| $\operatorname{csch} x$ | | $-\operatorname{csch} x\coth x$ |
| $\operatorname{arsinh} x$ | | $\frac{1}{\sqrt{x^2+1}}$ |
| $\operatorname{arcosh} x$ | | $\frac{1}{\sqrt{x^2-1}}$ |
| $\operatorname{artanh} x$ | | $\frac{1}{1-x^2}$ |

**Standard Integral Forms**

| Form | Integral | Condition |
|---|---|---|
| $\frac{1}{\sqrt{a^2-x^2}}$ | $\arcsin(\frac{x}{a})$ | $\|x\| < a$ |
| $\frac{1}{a^2+x^2}$ | $\frac{1}{a}\arctan(\frac{x}{a})$ | |
| $\frac{1}{\sqrt{x^2-a^2}}$ | $\operatorname{arcosh}(\frac{x}{a})$ | $\|x\| > a$ |
| $\frac{1}{\sqrt{x^2+a^2}}$ | $\operatorname{arsinh}(\frac{x}{a})$ | |
| $\frac{1}{a^2-x^2}$ | $\frac{1}{a}\operatorname{artanh}(\frac{x}{a})$ | $\|x\| < a$ |
| $\frac{1}{x^2-a^2}$ | $\frac{1}{2a}\ln\|\frac{x-a}{x+a}\|$ | $\|x\| > a$ |

**Key Points:**

- Pay attention to domain restrictions
- Note the similarity between trigonometric and hyperbolic forms
- Remember that some forms require completing the square first
- Watch for opportunities to use substitution
:::

## 1. Review of Integration

### 1.1 Integration as Accumulation

:::note[Definition: The Definite Integral]
For a continuous function $f$ on $[a, b]$, the definite integral $\int_a^b f(x)\,dx$ represents the net accumulation of the quantity $f$ over the interval $[a, b]$. Geometrically, it represents the signed area between the curve $y = f(x)$ and the $x$-axis.
:::

:::caution[Common Misconception]
Many students view integration merely as "anti-differentiation" or "finding a function whose derivative is $f(x)$". While this is related to integration through the Fundamental Theorem of Calculus, it misses the deeper meaning of integration as a process of accumulation or summation.

Consider the velocity $v(t)$ of a particle. The displacement over time $[a, b]$ is:

$$\int_a^b v(t)\,dt$$

This represents the accumulation of instantaneous velocities, not just "undoing" differentiation.
:::

:::note[Theorem: Fundamental Theorem of Calculus]
Let $f$ be continuous on $[a, b]$. Then:

1. If we define $F(x) = \int_a^x f(t)\,dt$, then $F'(x) = f(x)$
2. If $G$ is any antiderivative of $f$ (i.e. $G' = f$), then:

   $$\int_a^b f(x)\,dx = G(b) - G(a)$$
:::

### 1.2 The Substitution Rule: A Consequence of the Chain Rule

:::note[Theorem: Substitution Rule]
If $u = g(x)$ is differentiable and $f$ is continuous, then:

$$\int f(g(x))g'(x)\,dx = \int f(u)\,du$$
:::

:::note[Proof]
Let $F$ be an antiderivative of $f$. Then:

- $\frac{d}{dx}[F(g(x))] = F'(g(x))g'(x) = f(g(x))g'(x)$ by the chain rule
- Therefore $F(g(x))$ is an antiderivative of $f(g(x))g'(x)$
- Similarly, $F(u)$ is an antiderivative of $f(u)$
- The substitution $u = g(x)$ transforms one into the other
:::

:::note[Example]
Find $\int \cos(2x)\,dx$ using substitution.
:::

### 1.3 Integration by Parts: Product Rule in Reverse

:::note[Theorem: Integration by Parts]
For differentiable functions $u$ and $v$:

$$\int u\,dv = uv - \int v\,du$$
:::

:::note[Proof]
From the product rule:

$$\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$$

Integrating both sides:

$$uv = \int u\frac{dv}{dx}\,dx + \int v\frac{du}{dx}\,dx$$

Rearranging and using differential notation:

$$\int u\,dv = uv - \int v\,du$$
:::

:::note[Example]

**(a)** Differentiate $x \operatorname{arcosh} 5x$ with respect to $x$.

**(b)** Hence, or otherwise, show that

$$\int_{\frac{1}{4}}^{\frac{3}{5}} \operatorname{arcosh} 5x \, dx = \frac{3}{20} - \frac{2\sqrt{2}}{5} + \ln(p + q\sqrt{2})^k - \frac{1}{4}\ln r$$

where $p$, $q$, $k$ and $r$ are rational numbers to be determined.
:::

## 2. Integration of Rational Functions

### 2.1 Completing the Square

:::note[Example]
Given that $4x^2 + 4x + 17 \equiv (2x + p)^2 + q$ where $p$ and $q$ are integers:

**(a)** Determine the value of $p$ and the value of $q$.

**(b)** Hence use algebraic integration to show that

$$\int \frac{8x + 5}{\sqrt{4x^2 + 4x + 17}}\, dx = 2\sqrt{4x^2 + 4x + 17} + \frac{1}{2}\ln(2x + 1 + \sqrt{4x^2 + 4x + 17})$$
:::

### 2.2 Partial Fractions Decomposition

:::note[Theorem: Partial Fractions]
Any proper rational function $\frac{sx+r}{x^2+px+q}$ can be decomposed into:

1. Linear factors: $\frac{A}{x-a}$
2. Repeated linear factors: $\frac{A}{(x-a)^n}$
3. Irreducible quadratic factors: $\frac{Ax+B}{x^2+px+q}$
:::

:::note[Example]
Find $\int \frac{2x+3}{x^2+4x+3}\, dx$
:::

## 3. Advanced Substitution Techniques

### 3.1 Trigonometric Substitution

:::note[Key Insight: Trigonometric Substitution]
When integrating expressions involving square roots of quadratic expressions, the form of the expression suggests which trigonometric substitution to use:

- For $\sqrt{a^2 - x^2}$: Use $x = a\sin\theta$ or $x = a\cos\theta$
- For $\sqrt{x^2 + a^2}$: Use $x = a\tan\theta$
- For $\sqrt{x^2 - a^2}$: Use $x = a\sec\theta$
:::

:::note[Example: Basic Trigonometric Substitution]
Find $\int \frac{dx}{\sqrt{1-x^2}}$.
:::

### 3.2 Hyperbolic Substitution

:::note[Key Insight: Hyperbolic Substitution]
Hyperbolic substitutions are particularly useful when dealing with:

- For $\sqrt{x^2 - a^2}$: Use $x = a\cosh\theta$ (when $|x| > a$)
- For $\sqrt{x^2 + a^2}$: Use $x = a\sinh\theta$
- For $\sqrt{a^2 - x^2}$: Use $x = a\tanh\theta$ (when $|x| < a$)

These substitutions mirror trigonometric substitutions but are often more suitable for certain types of expressions.
:::

:::note[Example: Q04 WFM03/01, Jan 2021]
Using the substitution $x = 4\cosh\theta$ show that

$$\int \frac{1}{(x^2 - 16)^{3/2}}\, dx = \frac{ax}{\sqrt{x^2 - 16}} + c, \qquad |x| > 4$$

**Hint:** $\frac{d}{dx}(\coth x) = -\operatorname{csch}^2 x$
:::

### 3.3 Algebraic Substitution and Parameterization

:::note[Example: Q08 WFM03/01, Oct 2021]
Given that $y = \arccos(2\sqrt{x})$:

**(a)** Determine $\frac{dy}{dx}$.

**(b)** Show that

$$\int y \, dx = x \arccos(2\sqrt{x}) + \int \frac{\sqrt{x}}{\sqrt{1-4x}} \, dx$$

**(c)** Use the substitution $\sqrt{x} = \frac{1}{2}\cos\theta$ to show that

$$\int_0^{\frac{1}{8}} \frac{\sqrt{x}}{\sqrt{1-4x}}\, dx = \frac{1}{4} \int_a^b \cos^2\theta\, d\theta$$

where $a$ and $b$ are limits to be determined.

**(d)** Hence, determine the exact value of

$$\int_0^{\frac{1}{8}} \arccos(2\sqrt{x})\, dx$$
:::

## 4. Advanced Integration by Parts

### 4.1 Integration of Inverse Functions

:::note[Example: Integration of $\arccos x$]
Find $\int \arccos x\,dx$.

**Hint:** Let $u = \arccos x$ and $v = x$ and apply integration by parts.
:::

:::note[Example: Integration of $\operatorname{arcosh} x$]
Find $\int \operatorname{arcosh} x\,dx$ for $x > 1$.

**Note:** Compare this with the $\arccos$ integral — observe the similarity in form but difference in signs.
:::

:::note[Strategy for $e^x\sin^n x$ type integrals]
When integrating products of exponential and trigonometric functions:

1. Choose either the exponential or trigonometric part as $u$
2. The choice affects the complexity of subsequent steps
3. Look for patterns that might lead to recursive formulas
:::

:::note[Example: $\int e^x\sin^2 x\,dx$]

1. Let $u = \sin^2 x$ and $dv = e^x\,dx$

2. Then $du = 2\sin x\cos x\,dx$ and $v = e^x$

3. Using integration by parts:

   $$
   \begin{aligned}
   \int e^x\sin^2 x\,dx &= e^x\sin^2 x - \int e^x(2\sin x\cos x)\,dx \\
   &= e^x\sin^2 x - 2\int e^x\sin x\cos x\,dx
   \end{aligned}
   $$

4. For the remaining integral, let $u = \sin x$ and $dv = e^x\cos x\,dx$:

   $$
   \begin{aligned}
   \int e^x\sin x\cos x\,dx &= e^x\sin x\cos x - \int e^x(\cos^2 x - \sin^2 x)\,dx \\
   &= e^x\sin x\cos x - \int e^x\,dx + 2\int e^x\sin^2 x\,dx
   \end{aligned}
   $$

5. Substituting back:

   $$\int e^x\sin^2 x\,dx = e^x\sin^2 x - 2[e^x\sin x\cos x - e^x + 2\int e^x\sin^2 x\,dx]$$

6. Let $I = \int e^x\sin^2 x\,dx$. Then:

   $$
   \begin{aligned}
   I &= e^x\sin^2 x - 2[e^x\sin x\cos x - e^x + 2I] \\
   I &= e^x\sin^2 x - 2e^x\sin x\cos x + 2e^x - 4I \\
   5I &= e^x\sin^2 x - 2e^x\sin x\cos x + 2e^x \\
   I &= \frac{e^x}{5}(2 + \sin^2 x - 2\sin x\cos x) + C
   \end{aligned}
   $$
:::

### 4.2 Reduction Formulae

:::note[Introduction to Reduction Formulae]
A reduction formula is a relationship between integrals that allows us to reduce a complex integral to simpler ones. The basic idea is to:

1. Express the integral in terms of a simpler integral of the same type
2. Use the formula repeatedly until we reach a known integral
3. Combine the results to get the final answer
:::

:::note[Example: Reduction Formula for $x^n e^x$]
Let $J_n = \int x^n e^x\,dx$. Find a reduction formula and use it to evaluate $\int x^3 e^x\,dx$.

**(i)** Using integration by parts with $u = x^n$ and $dv = e^x\,dx$:

$$
\begin{aligned}
J_n &= x^n e^x - n\int x^{n-1} e^x\,dx \\
&= x^n e^x - nJ_{n-1}
\end{aligned}
$$

**(ii)** For $\int x^3 e^x\,dx$:

$$
\begin{aligned}
J_3 &= x^3 e^x - 3J_2 \\
J_2 &= x^2 e^x - 2J_1 \\
J_1 &= xe^x - J_0 \\
J_0 &= e^x
\end{aligned}
$$

**(iii)** Therefore:

$$
\begin{aligned}
J_3 &= x^3 e^x - 3(x^2 e^x - 2(xe^x - e^x)) \\
&= e^x(x^3 - 3x^2 + 6x - 6)
\end{aligned}
$$
:::

:::note[Example: Reduction Formula for $\sin^n x$]
Let $I_n = \int \sin^n x\,dx$. Find a reduction formula for $I_n$ and use it to evaluate $\int \sin^4 x\,dx$.

**(i)** Let $u = \sin^{n-1} x$ and $dv = \sin x\,dx$.

**(ii)** Then $du = (n-1)\sin^{n-2} x\cos x\,dx$ and $v = -\cos x$.

**(iii)** Using integration by parts:

$$
\begin{aligned}
I_n &= \int \sin^n x\,dx = \int \sin^{n-1} x\sin x\,dx \\
&= -\sin^{n-1} x\cos x + (n-1)\int \sin^{n-2} x\cos^2 x\,dx
\end{aligned}
$$

**(iv)** Using $\cos^2 x = 1 - \sin^2 x$:

$$
\begin{aligned}
I_n &= -\sin^{n-1} x\cos x + (n-1)\int \sin^{n-2} x(1 - \sin^2 x)\,dx \\
&= -\sin^{n-1} x\cos x + (n-1)I_{n-2} - (n-1)I_n
\end{aligned}
$$

**(v)** Therefore:

$$
\begin{aligned}
nI_n &= -\sin^{n-1} x\cos x + (n-1)I_{n-2} \\
I_n &= -\frac{1}{n}\sin^{n-1} x\cos x + \frac{n-1}{n}I_{n-2}
\end{aligned}
$$

**(vi)** For $\int \sin^4 x\,dx$:

$$
\begin{aligned}
I_4 &= -\frac{1}{4}\sin^3 x\cos x + \frac{3}{4}I_2 \\
I_2 &= -\frac{1}{2}\sin x\cos x + \frac{1}{2}x
\end{aligned}
$$

Therefore:

$$
\begin{aligned}
I_4 &= -\frac{1}{4}\sin^3 x\cos x + \frac{3}{4}\left(-\frac{1}{2}\sin x\cos x + \frac{1}{2}x\right) \\
&= -\frac{1}{4}\sin^3 x\cos x - \frac{3}{8}\sin x\cos x + \frac{3}{8}x
\end{aligned}
$$
:::

:::note[Types of Reduction Formulae]
Reduction formulae typically appear in several forms:

1. Trigonometric powers: $\int \sin^n x\,dx$, $\int \cos^n x\,dx$
2. Mixed functions: $\int e^x\sin^n x\,dx$
3. Rational functions with radicals: $\int \frac{x^n}{\sqrt{a^2 \pm x^2}}\,dx$
4. Composite functions: $\int x^n f(x^m)\,dx$
:::

:::note[Example: Reduction Formula for Rational Functions with Radicals]
For $I_n = \int \frac{x^n}{\sqrt{10 - x^2}}\, dx$, prove that:

$$nI_n = 10(n-1)I_{n-2} - x^{n-1}\sqrt{10 - x^2}, \qquad n \geq 2$$

**Strategy:**

1. Split $x^n$ into $x \cdot x^{n-1}$ to use integration by parts
2. Look for terms that can be combined to form the original integral
:::

:::note[Example: Reduction Formula for Mixed Functions]
For $I_n = \int e^x \sin^n x\,dx$, prove that:

$$I_n = \frac{e^x \sin^{n-1} x}{n^2 + 1}(\sin x - n\cos x) + \frac{n(n-1)}{n^2 + 1}I_{n-2}, \qquad n \geq 2$$

**Strategy:**

1. Use integration by parts twice
2. Look for patterns that will lead back to the original integral
3. Collect terms with $I_n$ and $I_{n-2}$
:::

:::note[Example: Reduction Formula for Composite Functions]
For $I_n = \int_0^{\sqrt{\pi/2}} x^n \cos(x^2)\,dx$, prove that:

$$I_n = \frac{1}{2}\left(\frac{\pi}{2}\right)^{\frac{n-1}{2}} - \frac{1}{4}(n-1)(n-3)I_{n-4}, \qquad n \geq 5$$

**Strategy:**

1. Split $x^n$ as $x^{n-1} \cdot x$ to use integration by parts
2. Look for opportunities to use the substitution $u = x^2$
3. Pay attention to the limits when evaluating boundary terms

**Application:** Find $I_5$.
:::

:::tip[Tips for Reduction Formulae]
1. Always look for patterns that suggest integration by parts
2. When dealing with powers, try splitting into lower powers
3. For mixed functions, consider which part to differentiate
4. Watch for opportunities to use standard identities
5. Pay attention to the domain restrictions
6. Remember to verify initial conditions
:::

## 5. Applications of Integration

### 5.1 Arc Length

:::note[Theorem: Arc Length Formula]
The length of a curve $y = f(x)$ from $x = a$ to $x = b$ is given by:

$$L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\, dx$$
:::

:::note[Proof 1: Using Small Segments]
Consider a small segment of the curve:

- The horizontal displacement is $dx$
- The vertical displacement is $dy$
- By Pythagoras' theorem, the length of the segment $ds$ is:

  $$ds = \sqrt{(dx)^2 + (dy)^2} = \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$$

- The total length is the sum of all such segments as $dx \to 0$:

  $$L = \int_a^b ds = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\, dx$$
:::

:::note[Proof 2: Using Parametrization]
Consider a parametric representation of the curve:

$$x = x(t), \quad y = y(t), \quad a \leq t \leq b$$

- The velocity vector is $\vec{v}(t) = (x'(t), y'(t))$
- The speed is $|\vec{v}(t)| = \sqrt{(x'(t))^2 + (y'(t))^2}$
- The arc length is the integral of speed:

  $$L = \int_a^b \sqrt{(x'(t))^2 + (y'(t))^2}\, dt$$

- For $y = f(x)$, we can use $t = x$ as parameter: $x = t,\ y = f(t) \implies x'(t) = 1,\ y'(t) = f'(t)$
- This gives:

  $$L = \int_a^b \sqrt{1 + (f'(x))^2}\, dx = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\, dx$$
:::

:::note[Example: Arc Length of a Semicircle]
The curve C has equation $y = \sqrt{9 - x^2}$ for $0 \leq x \leq 3$. Find its length.

**(i)** $\frac{dy}{dx} = -\frac{x}{\sqrt{9-x^2}}$

**(ii)** The arc length is:

$$\int_0^3 \sqrt{1 + \frac{x^2}{9-x^2}}\, dx = \int_0^3 \sqrt{\frac{9}{9-x^2}}\, dx = \int_0^3 \frac{3}{\sqrt{9-x^2}}\, dx = \left[3\arcsin\left(\frac{x}{3}\right)\right]_0^3$$

**(iii)** Therefore:

$$L = 3\arcsin(1) - 3\arcsin(0) = \frac{3\pi}{2}$$
:::

:::note[Example: Arc Length with Natural Logarithm]
The curve C has equation $y = 2 + \ln(1 - x^2)$ for $\frac{1}{2} \leq x \leq \frac{3}{4}$. Show that its length is $p + \ln q$ where $p$ and $q$ are rational numbers.
:::

### 5.2 Surface Area of Revolution

:::note[Theorem: Surface Area Formula]
When a curve $y = f(x)$ from $x = a$ to $x = b$ is rotated about the $x$-axis, the surface area is:

$$S = 2\pi\int_a^b y\sqrt{1 + \left(\frac{dy}{dx}\right)^2}\, dx$$
:::

:::note[Proof]
Consider a small segment of the curve:

- The slant length is $ds = \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$
- When rotated, this forms a frustum with radius $y$
- The surface area element is $2\pi y\,ds$
- Integrate to get total surface area
:::

:::note[Example: Surface Area of Revolution]
Find the surface area when the curve $y = \sqrt{9 - x^2}$, $0 \leq x \leq 3$ is rotated about the $x$-axis.

**(i)** From the previous example:

$$\frac{dy}{dx} = -\frac{x}{\sqrt{9-x^2}} \quad \text{and} \quad \sqrt{1 + \left(\frac{dy}{dx}\right)^2} = \frac{3}{\sqrt{9-x^2}}$$

**(ii)** The surface area is:

$$S = 2\pi\int_0^3 \sqrt{9-x^2} \cdot \frac{3}{\sqrt{9-x^2}}\, dx = 6\pi\int_0^3\, dx = 18\pi$$
:::

:::tip[Tips for Arc Length and Surface Area]
1. Always look for opportunities to simplify before integrating
2. Consider trigonometric or hyperbolic substitutions for radicals
3. Watch for cancellations in surface area problems
4. Pay attention to domain restrictions
5. Remember that surface area formulae assume positive $y$-values
:::

## 6. Practice Problems

:::tip[Exercise 1]
Use calculus to find the exact value of

$$\int_{-2}^1 \frac{1}{x^2 + 4x + 13}\, dx$$

(5 marks) giving your answer as a multiple of $\pi$.
:::

:::tip[Exercise 2]
Given that $y = \operatorname{arsinh}(\sqrt{x})$, $x > 0$:

**(a)** Find $\frac{dy}{dx}$, giving your answer as a simplified fraction. (3 marks)

**(b)** Hence, or otherwise, find

$$\int_{\frac{1}{4}}^4 \frac{1}{\sqrt{x(x+1)}}\, dx$$

giving your answer in the form $\ln\left(\frac{a+b\sqrt{5}}{2}\right)$, where $a$ and $b$ are integers. (6 marks)
:::

:::tip[Exercise 3]
Let $I_n = \int_0^5 \frac{x^n}{\sqrt{25-x^2}}\, dx$, $n \geq 0$.

**(a)** Find an expression for $\int \frac{x}{\sqrt{25-x^2}}\, dx$, $0 \leq x \leq 5$. (2 marks)

**(b)** Using your answer to part (a), or otherwise, show that

$$I_n = \frac{25(n-1)}{n}I_{n-2}, \qquad n \geq 2$$

(5 marks)

**(c)** Find $I_4$ in the form $k\pi$, where $k$ is a fraction. (4 marks)
:::

:::tip[Exercise 4]
The curve C has equation

$$y = \frac{1}{3}\cosh 3x, \quad 0 \leq x \leq \ln a$$

where $a$ is a constant and $a > 1$.

Using calculus, show that the length of curve C is $k\left(a^3 - \frac{1}{a^3}\right)$ and state the value of the constant $k$. (6 marks)
:::

:::tip[Exercise 5]
Let $I_n = \int_0^{a} (a-x)^n \cos x\,dx$, $a > 0$, $n \geq 0$.

**(a)** Show that, for $n \geq 2$,

$$I_n = na^{n-1} - n(n-1)I_{n-2}$$

(5 marks)

**(b)** Hence evaluate

$$\int_0^{\frac{\pi}{2}} \left(\frac{\pi}{2} - x\right)^2 \cos x\,dx$$

(3 marks)
:::

:::tip[Exercise 6]
A curve, which is part of an ellipse, has parametric equations:

$$x = 3\cos\theta, \quad y = 5\sin\theta, \quad 0 \leq \theta \leq \frac{\pi}{2}$$

The curve is rotated through $2\pi$ radians about the $x$-axis.

**(a)** Show that the area of the surface generated is given by the integral

$$k\pi\int_0^a \sqrt{16c^2 + 9}\, dc, \quad \text{where } c = \cos\theta$$

and where $a, k$ are constants to be found. (6 marks)

**(b)** Using the substitution $c = \frac{3}{4}\sinh u$, or otherwise, evaluate the integral, showing all of your working and giving the final answer to 3 significant figures. (5 marks)
:::

:::danger[Challenge Exercise: Gabriel's Horn]
Consider the solid formed by rotating the curve $y = \frac{1}{x}$ ($x \geq 1$) about the $x$-axis. This shape is known as Gabriel's Horn or Torricelli's Trumpet.

**(a)** Show that the volume of this solid is finite.

**(b)** Show that its surface area is infinite.

**(c)** Explain why this solid can be "filled with finite paint but requires infinite paint to cover its surface".

**Extension:** Search for **the Koch snowflake** and study the similarities and differences between the Koch snowflake and Gabriel's Horn.
:::

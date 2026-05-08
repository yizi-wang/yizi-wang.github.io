---
title: "FP3 Chapter 1: Hyperbolic Functions"
---

# FP3 Lecture Notes: Hyperbolic Functions

## Introduction

This lecture introduces hyperbolic functions, which arise naturally from certain rational function integrals. These functions share many properties with trigonometric functions but exhibit exponential growth behaviour. We'll explore their definitions, properties, and applications.

## Motivation

Consider the following integrals that appear frequently in calculus:

$$\int \frac{dx}{\sqrt{x^2 \pm a^2}}$$

These integrals have important applications in physics and engineering, particularly in:

- The length of a catenary curve (hanging chain)
- The motion of a pendulum
- Problems in special relativity

Their solutions lead us naturally to hyperbolic functions.

## Module 1: Definitions and Basic Properties

### Definition of Hyperbolic Functions

:::note[Definition: Hyperbolic Functions]
For any real number $x$, we define:

$$\sinh x = \frac{e^x - e^{-x}}{2} \quad \text{(hyperbolic sine)}$$

$$\cosh x = \frac{e^x + e^{-x}}{2} \quad \text{(hyperbolic cosine)}$$

$$\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}} \quad \text{(hyperbolic tangent)}$$
:::

:::tip[Exercise: Deriving Other Hyperbolic Functions]
Just as trigonometric functions have reciprocal relationships:

$$\sec \theta = \frac{1}{\cos \theta}, \quad \csc \theta = \frac{1}{\sin \theta}, \quad \cot \theta = \frac{\cos \theta}{\sin \theta}$$

derive expressions for their hyperbolic counterparts:

1. $\operatorname{sech} x$ (hyperbolic secant)
2. $\operatorname{csch} x$ (hyperbolic cosecant)
3. $\coth x$ (hyperbolic cotangent)

---

**Solution:**

1. $\operatorname{sech} x = \dfrac{1}{\cosh x} = \dfrac{2}{e^x + e^{-x}}$

2. $\operatorname{csch} x = \dfrac{1}{\sinh x} = \dfrac{2}{e^x - e^{-x}}$

3. $\coth x = \dfrac{\cosh x}{\sinh x} = \dfrac{e^x + e^{-x}}{e^x - e^{-x}}$

**Key Properties:**

- $\operatorname{sech} x$ is even and $0 < \operatorname{sech} x \leq 1$
- $\operatorname{csch} x$ is odd and has vertical asymptotes at $x = 0$
- $\coth x$ is odd and has vertical asymptotes at $x = 0$
- $|\coth x| > 1$ for all $x \neq 0$
:::

### Basic Properties

1. $\cosh x \geq 1$ for all real $x$
2. $\sinh x$ is odd: $\sinh(-x) = -\sinh(x)$
3. $\cosh x$ is even: $\cosh(-x) = \cosh(x)$

### Key Observations

- $\sinh x$ is similar to $\sin x$ but grows exponentially as $|x| \to \infty$
- $\cosh x$ is similar to $\cos x$ but has minimum value 1 and grows exponentially
- $\tanh x$ has horizontal asymptotes at $y = \pm 1$

![Graphs of sinh, cosh, and tanh](/images/tikz/fp3-hyperbolic-graphs.svg)

### Example 1: Solve the equation $\sinh x = 3$

**Step 1.** Using the definition:

$$\frac{e^x - e^{-x}}{2} = 3$$

**Step 2.** Let $y = e^x$. Then $e^{-x} = \dfrac{1}{y}$:

$$y - \frac{1}{y} = 6$$

**Step 3.** Rearrange to standard form:

$$y^2 - 6y - 1 = 0$$

**Step 4.** Solve quadratic equation:

$$y = \frac{6 \pm \sqrt{36 + 4}}{2} = 3 \pm \sqrt{10}$$

**Step 5.** Since $y = e^x$, and we need $y > 0$:

$$x = \ln(3 + \sqrt{10})$$

### In-class Exercise

:::tip[Exercise]
The curve $C_1$ has equation $y = 3\sinh 2x$, and the curve $C_2$ has equation $y = 13 - 3e^{2x}$.

(a) Sketch the graphs of curves $C_1$ and $C_2$ on one set of axes, giving the equation of any asymptote and the coordinates of points where the curves cross the axes.

(b) Hence solve the equation $3\sinh 2x = 13 - 3e^{2x}$, giving your answer in the form $\frac{1}{2}\ln k$, where $k$ is an integer.

---

**Solution:**

**(a)** For curve $C_1: y = 3\sinh 2x$:

- When $x = 0$: $y = 0$, so $(0,0)$ is on the curve
- As $x \to \infty$: $y \to \infty$ exponentially
- As $x \to -\infty$: $y \to -\infty$ exponentially
- Odd function, symmetric about origin

For curve $C_2: y = 13 - 3e^{2x}$:

- When $x = 0$: $y = 13 - 3 = 10$, so $(0,10)$ is on the curve
- As $x \to \infty$: $y \to -\infty$
- As $x \to -\infty$: $y \to 13$ (horizontal asymptote)
- Crosses $y$-axis at $(0,10)$

**(b)** Using the definition of $\sinh x$:

$$3\sinh 2x = 13 - 3e^{2x}$$

$$3\left(\frac{e^{2x} - e^{-2x}}{2}\right) = 13 - 3e^{2x}$$

$$\frac{3e^{2x} - 3e^{-2x}}{2} = 13 - 3e^{2x}$$

$$3e^{2x} - 3e^{-2x} = 26 - 6e^{2x}$$

$$9e^{2x} - 3e^{-2x} = 26$$

$$9e^{4x} - 3 = 26e^{2x}$$

$$9e^{4x} - 26e^{2x} - 3 = 0$$

Let $y = e^{2x}$, then:

$$9y^2 - 26y - 3 = 0 \Rightarrow (3y-1)(3y+3) = 0$$

Therefore $y = \dfrac{1}{3}$ or $y = -1$.

Since $y = e^{2x} > 0$, we have $y = \dfrac{1}{3}$.

Hence $e^{2x} = \dfrac{1}{3}$, so $x = \dfrac{1}{2}\ln\!\left(\dfrac{1}{3}\right) = -\dfrac{1}{2}\ln 3$.
:::

## Module 2: Inverse Hyperbolic Functions and Identities

### Determining Domains of Inverse Functions

To find the domain of an inverse function:

1. Check if the original function is one-to-one (injective)
2. If not, restrict the domain to make it one-to-one
3. The range of the original function becomes the domain of the inverse function
4. The domain of the original function becomes the range of the inverse function

For example, $\cosh x$ is not one-to-one as it's even, so we restrict its domain to $[0,\infty)$ to define $\cosh^{-1}$.

### Exercise: Domains of Inverse Hyperbolic Functions

For each of the six hyperbolic functions, determine:

1. Whether the function is one-to-one on $\mathbb{R}$
2. If not, what domain restriction is needed
3. The domain of its inverse function

| Function | One-to-one? | Restriction needed | Domain of inverse |
|---|---|---|---|
| $\sinh x$ | Yes | None | $-\infty < x < \infty$ |
| $\cosh x$ | No (even) | $x \geq 0$ | $x \geq 1$ |
| $\tanh x$ | Yes | None | $-1 < x < 1$ |
| $\operatorname{sech} x$ | No (even) | $x \geq 0$ | $0 < x \leq 1$ |
| $\operatorname{csch} x$ | No (asymptote) | $x < 0$ or $x > 0$ | $x \neq 0$ |
| $\coth x$ | No (asymptote) | $x < 0$ or $x > 0$ | $x < -1$ or $x > 1$ |

**Explanation:**

- **$\sinh x$**: Strictly increasing everywhere, so inverse exists for all $x \in \mathbb{R}$
- **$\cosh x$**: Even function, restrict to $x \geq 0$ where minimum value is 1
- **$\tanh x$**: Strictly increasing with horizontal asymptotes at $y = \pm 1$
- **$\operatorname{sech} x$**: Even function, restrict to $x \geq 0$ where $0 < y \leq 1$
- **$\operatorname{csch} x$**: Has vertical asymptote at $x = 0$, need to consider $x < 0$ and $x > 0$ separately
- **$\coth x$**: Has vertical asymptote at $x = 0$ and horizontal asymptotes at $y = \pm 1$

### Inverse Hyperbolic Functions

:::note[Definition: Inverse Hyperbolic Functions]
For appropriate domains:

$$\sinh^{-1} x = \ln(x + \sqrt{x^2 + 1})$$

$$\cosh^{-1} x = \ln(x + \sqrt{x^2 - 1}), \quad x \geq 1$$

$$\tanh^{-1} x = \frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right), \quad |x| < 1$$
:::

![Graphs of inverse hyperbolic functions](/images/tikz/fp3-inverse-hyperbolic.svg)

![Arc length on unit circle](/images/tikz/fp3-inverse-hyperbolic-arclength.svg)

### Connection with Trigonometric Functions

For any real $x$:

$$\cosh x = \cos(ix)$$

$$\sinh x = -i\sin(ix)$$

:::tip[Guided Exercise 1: Fundamental Identity]
Using the relationship between hyperbolic and trigonometric functions, prove that:

$$\cosh^2 x - \sinh^2 x = 1$$

given that $\cos^2 \theta + \sin^2 \theta = 1$.

---

**Solution:**

$$\cosh^2 x - \sinh^2 x = [\cos(ix)]^2 - [-i\sin(ix)]^2$$

$$= \cos^2(ix) + \sin^2(ix)$$

$$= 1$$
:::

### Hyperbolic Function Identities

:::tip[Guided Exercise 2]
Using the relationship with trigonometric functions, derive the addition formula for hyperbolic functions:

$$\sinh(x+y) = \sinh x \cosh y + \cosh x \sinh y$$

given that $\sin(A+B) = \sin A \cos B + \cos A \sin B$.

---

**Solution:**

$$\sinh(x+y) = -i\sin[i(x+y)]$$

$$= -i\sin(ix+iy)$$

$$= -i[\sin(ix)\cos(iy) + \cos(ix)\sin(iy)]$$

$$= -i[i\sinh x \cosh y + \cosh x \cdot i\sinh y]$$

$$= \sinh x \cosh y + \cosh x \sinh y$$
:::

### Summary of Key Identities

**1. Addition Formulas:**

$$\sinh(x+y) = \sinh x \cosh y + \cosh x \sinh y$$

$$\cosh(x+y) = \cosh x \cosh y + \sinh x \sinh y$$

**2. Double Angle Formulas:**

$$\sinh(2x) = 2\sinh x \cosh x$$

$$\cosh(2x) = \cosh^2 x + \sinh^2 x = 2\cosh^2 x - 1$$

**3. Pythagorean-like Identities:**

$$1 - \tanh^2 x = \operatorname{sech}^2 x \quad \text{(dividing fundamental identity by } \cosh^2 x\text{)}$$

$$\coth^2 x - 1 = \operatorname{csch}^2 x \quad \text{(dividing fundamental identity by } \sinh^2 x\text{)}$$

:::tip[Exercise]
Use the addition formula for $\sinh(x+y)$ to prove that:

$$\sinh(2x) = 2\sinh x \cosh x$$

---

**Solution:**

Let $y = x$ in the addition formula:

$$\sinh(2x) = \sinh(x+x)$$

$$= \sinh x \cosh x + \cosh x \sinh x$$

$$= 2\sinh x \cosh x$$
:::

## Summary

:::note[Key Points]

**1. Basic Properties**

- Hyperbolic functions are defined using exponential functions
- They share properties with trigonometric functions but grow exponentially
- The fundamental identity $\cosh^2 x - \sinh^2 x = 1$ is key
- $\cosh x$ is always greater than or equal to 1

**2. Inverse Functions and Identities**

- Inverse hyperbolic functions can be expressed using logarithms
- Complex relationships help derive hyperbolic identities
- Addition formulas mirror their trigonometric counterparts
- Double angle formulas are useful for simplification
:::

:::caution[Common Pitfalls]
- Don't confuse hyperbolic functions with their trigonometric counterparts
- Remember that $\cosh x \geq 1$ for all real $x$
- Pay attention to domain restrictions, especially for inverse functions
- Be careful with signs when using complex relationships
- Watch out for the differences between hyperbolic and trigonometric identities
:::

## Homework

### E.O.C.1 (6669/s09/01/1)

Solve the equation:

$$7\operatorname{sech} x - \tanh x = 5$$

Give your answers in the form $\ln a$ where $a$ is a rational number.

**Solution:**

**Method 1: Using the definitions**

$$\frac{7}{\cosh x} - \frac{\sinh x}{\cosh x} = 5$$

$$\frac{7 - \sinh x}{\cosh x} = 5$$

$$7 - \sinh x = 5\cosh x$$

$$7 - \frac{e^x - e^{-x}}{2} = 5\frac{e^x + e^{-x}}{2}$$

$$14 - (e^x - e^{-x}) = 5(e^x + e^{-x})$$

$$14 - e^x + e^{-x} = 5e^x + 5e^{-x}$$

$$14 - 6e^x - 4e^{-x} = 0$$

$$3e^{2x} - 7e^x + 2 = 0$$

Let $y = e^x$, then:

$$3y^2 - 7y + 2 = 0 \Rightarrow (3y-1)(y-2) = 0$$

Therefore $y = \dfrac{1}{3}$ or $y = 2$.

Hence $x = \ln\!\left(\dfrac{1}{3}\right)$ or $x = \ln 2$.

**Method 2: Using $\operatorname{sech}^2 x + \tanh^2 x = 1$**

$$(7\operatorname{sech} x - 5)^2 = \tanh^2 x$$

$$49\operatorname{sech}^2 x - 70\operatorname{sech} x + 25 = 1 - \operatorname{sech}^2 x$$

$$50\operatorname{sech}^2 x - 70\operatorname{sech} x + 24 = 0$$

$$2(5\operatorname{sech} x - 3)(5\operatorname{sech} x - 4) = 0$$

$$\operatorname{sech} x = \frac{3}{5} \text{ or } \frac{4}{5}$$

Leading to the same answers.

### E.O.C.2 (6669/s10/01/3)

**(a)** Starting from the definitions of $\sinh x$ and $\cosh x$ in terms of exponentials, prove that:

$$\cosh 2x = 1 + 2\sinh^2 x$$

**Solution:**

$$\text{RHS} = 1 + 2\sinh^2 x = 1 + 2\left(\frac{e^x - e^{-x}}{2}\right)^2$$

$$= 1 + 2\left(\frac{e^{2x} - 2 + e^{-2x}}{4}\right)$$

$$= 1 + \frac{e^{2x} - 2 + e^{-2x}}{2}$$

$$= \frac{2 + e^{2x} - 2 + e^{-2x}}{2}$$

$$= \frac{e^{2x} + e^{-2x}}{2}$$

$$= \cosh 2x = \text{LHS}$$

**(b)** Solve the equation:

$$\cosh 2x - 3\sinh x = 15$$

giving your answers as exact logarithms.

**Solution:**

1. Using part (a):

$$1 + 2\sinh^2 x - 3\sinh x = 15$$

2. Rearrange:

$$2\sinh^2 x - 3\sinh x - 14 = 0$$

3. Factorise:

$$(\sinh x + 2)(2\sinh x - 7) = 0$$

4. Therefore:

$$\sinh x = -2 \text{ or } \sinh x = \frac{7}{2}$$

5. For $\sinh x = -2$:

$$x = \ln(-2 + \sqrt{(-2)^2 + 1}) = \ln(-2 + \sqrt{5})$$

6. For $\sinh x = \dfrac{7}{2}$:

$$x = \ln\!\left(\frac{7}{2} + \sqrt{\left(\frac{7}{2}\right)^2 + 1}\right) = \ln\!\left(\frac{7 + \sqrt{53}}{2}\right)$$

### E.O.C.3 (6669/s14/01R/1)

Solve the equation:

$$5\tanh x + 7 = 5\operatorname{sech} x$$

Give each answer in the form $\ln k$ where $k$ is a rational number.

**Solution:**

**Method 1: Using exponential definitions**

$$5\frac{e^x - e^{-x}}{e^x + e^{-x}} + 7 = \frac{10}{e^x + e^{-x}}$$

$$5(e^x - e^{-x}) + 7(e^x + e^{-x}) = 10$$

$$5e^x - 5e^{-x} + 7e^x + 7e^{-x} = 10$$

$$12e^x + 2e^{-x} = 10$$

$$6e^{2x} - 5e^x + 1 = 0$$

Let $y = e^x$, then:

$$6y^2 - 5y + 1 = 0 \Rightarrow (3y-1)(2y-1) = 0$$

Therefore $y = \dfrac{1}{3}$ or $y = \dfrac{1}{2}$.

Hence $x = \ln\!\left(\dfrac{1}{3}\right)$ or $x = \ln\!\left(\dfrac{1}{2}\right)$.

**Method 2: Using $\tanh^2 x + \operatorname{sech}^2 x = 1$**

$$5\tanh x + 7 = 5\operatorname{sech} x$$

$$5\tanh x - 5\operatorname{sech} x = -7$$

$$25\tanh^2 x + 70\tanh x + 49 = 25\operatorname{sech}^2 x$$

$$25\tanh^2 x + 70\tanh x + 49 = 25(1-\tanh^2 x)$$

$$50\tanh^2 x + 70\tanh x + 24 = 0$$

$$2(5\tanh x + 3)(5\tanh x + 4) = 0$$

$$\tanh x = -\frac{3}{5} \text{ or } -\frac{4}{5}$$

Using $\tanh x = \dfrac{e^x - e^{-x}}{e^x + e^{-x}} = -\dfrac{4}{5}$:

$$\frac{e^x - e^{-x}}{e^x + e^{-x}} = -\frac{4}{5} \Rightarrow e^x = \frac{1}{2} \Rightarrow x = \ln\!\left(\frac{1}{2}\right)$$

Similarly for $\tanh x = -\dfrac{3}{5}$:

$$\frac{e^x - e^{-x}}{e^x + e^{-x}} = -\frac{3}{5} \Rightarrow e^x = \frac{1}{3} \Rightarrow x = \ln\!\left(\frac{1}{3}\right)$$

**Method 3: Using $\sinh x$ and $\cosh x$**

$$5\sinh x + 7\cosh x = 5$$

$$5\sinh x + 7\cosh x - 5 = 0$$

$$24\sinh^2 x + 50\sinh x + 24 = 0$$

$$\sinh x = -\frac{4}{3} \text{ or } -\frac{3}{4}$$

Using $\sinh x = \dfrac{e^x - e^{-x}}{2}$:

$$\frac{e^x - e^{-x}}{2} = -\frac{4}{3} \Rightarrow e^x = \frac{1}{3} \text{ or } \frac{1}{2}$$

Leading to the same answers.

## Challenge (Optional): Deriving the Catenary Equation

Consider a flexible chain hanging under its own weight. We'll derive its shape — the famous catenary curve $y = a\cosh\!\left(\dfrac{x}{a}\right)$.

### Part 1: Physical Setup

Let's establish our coordinate system:

- $x$-axis horizontal, $y$-axis vertical upward
- $\rho$ = mass per unit length of the chain
- $s$ = arc length from the bottom to point $P(x,y)$
- $T$ = tension at point $P$
- $T_h$ = horizontal component of tension (constant throughout the chain)

![Catenary setup diagram](/images/tikz/fp3-catenary-setup.svg)

### Part 2: Force Analysis

For a small segment of the chain:

- Mass of segment = $\rho s$ (proportional to arc length)
- Tension $T$ acts tangent to the curve
- $T_h$ remains constant (key insight!)
- $\theta$ is the angle between $T$ and horizontal

![Force analysis diagram](/images/tikz/fp3-catenary-forces.svg)

From the force balance:

$$T\sin\theta = \rho s g \quad \text{(vertical force balance)}$$

$$T\cos\theta = T_h \quad \text{(horizontal force balance)}$$

### Part 3: Deriving the Differential Equation

![Differential triangle](/images/tikz/fp3-differential-triangle.svg)

For a small segment:

$$\sin\theta = \frac{dy}{ds}$$

$$\cos\theta = \frac{dx}{ds}$$

Dividing the force equations:

$$\tan\theta = \frac{\rho s g}{T_h} = \frac{dy}{dx}$$

Let $a = \dfrac{T_h}{\rho g}$, then:

$$\frac{dy}{dx} = \frac{s}{a}$$

From the differential triangle:

$$ds^2 = dx^2 + dy^2 \quad \text{therefore} \quad \frac{ds}{dx} = \sqrt{1 + \left(\frac{dy}{dx}\right)^2}$$

Differentiating $\dfrac{dy}{dx} = \dfrac{s}{a}$ with respect to $x$:

$$\frac{d^2y}{dx^2} = \frac{1}{a}\frac{ds}{dx} = \frac{1}{a}\sqrt{1 + \left(\frac{dy}{dx}\right)^2}$$

### Part 4: Solving the Differential Equation

We have derived the differential equation:

$$\frac{d^2y}{dx^2} = \frac{1}{a}\sqrt{1 + \left(\frac{dy}{dx}\right)^2}$$

**Question:** Try to solve this equation with the following hints:

1. Substitute $\dfrac{dy}{dx}$ by $p$.
2. The derivative of $\operatorname{arsinh}(p)$ is $\dfrac{1}{\sqrt{1 + p^2}}$. (We will study this in Chapter 3. You can also prove it by yourself using the definition of $\operatorname{arsinh}(p)$.)
3. The derivative of $\sinh(x)$ is $\cosh(x)$. (We will also study this in Chapter 3. You can also prove it by yourself using the definition of $\sinh(x)$ and $\cosh(x)$ in terms of exponentials.)

**Solution:**

1. Using the hint about $\operatorname{arsinh}(p)$, we can integrate directly:

$$\operatorname{arsinh}(p) = \frac{x}{a} + C_1$$

2. Therefore:

$$p = \sinh\!\left(\frac{x}{a} + C_1\right)$$

3. Since $p = \dfrac{dy}{dx}$, we can absorb $C_1$ into our choice of origin:

$$\frac{dy}{dx} = \sinh\!\left(\frac{x}{a}\right)$$

4. Integrating again:

$$y = a\cosh\!\left(\frac{x}{a}\right) + C_2$$

This is the general equation of a catenary curve, where:

- $a$ determines the "scale" of the curve
- $C_2$ shifts the curve vertically

### Extension Questions

1. Prove that the tension at any point is:

$$T = T_h\cosh\!\left(\frac{x}{a}\right)$$

2. **Research:** Why do suspension bridges follow a parabolic shape instead of a catenary? (Hint: Consider how the load is distributed)

:::note[Historical Note: The Catenary Challenge]
It is important to highlight the historical significance of the catenary, particularly the challenge posed by mathematician Jacob Bernoulli in the late 17th century. Bernoulli offered a prize for the solution to the problem of determining the shape of a hanging chain or cable, which is known as the catenary.

The catenary curve, described by the equation $y = a\cosh\!\left(\dfrac{x}{a}\right)$, was first studied by the ancient Greeks, but it was Bernoulli's challenge that reignited interest in this fascinating shape. The problem attracted the attention of many prominent mathematicians, including Leonhard Euler and Johann Bernoulli, who sought to derive the mathematical properties of the catenary.

Bernoulli's prize not only stimulated research into the catenary but also contributed to the development of calculus and the understanding of hyperbolic functions. The catenary's unique properties, such as its ability to minimise potential energy, made it a crucial subject of study in both mathematics and engineering.
:::

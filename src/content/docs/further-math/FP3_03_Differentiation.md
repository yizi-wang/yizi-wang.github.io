---
title: "FP3 Chapter 3: Differentiation"
---

# FP3 Lecture Notes: Differentiation

## Prior Knowledge Check

Before we begin, let's review some key concepts:

:::tip[Exercise 1: Basic Trigonometric Derivatives]
Without referring to any formula, prove that:

1. $\frac{d}{dx}(\sin^2 x) = \sin 2x$
2. $\frac{d}{dx}(\tan x) = \sec^2 x$
3. Given that $y = x^2 \cos 3x$, find $\frac{dy}{dx}$
:::

:::tip[Exercise 2: Basic Hyperbolic Functions]
Write down the definitions of the following functions:

$\sinh x, \cosh x, \tanh x, \operatorname{sech} x, \operatorname{csch} x, \coth x$
:::

## 1. Differentiation: Geometric and Algebraic Perspectives

### 1.1 The Geometric View

The derivative of a function at a point represents the gradient of the tangent line at that point. This can be understood as the limit of the gradient of secant lines.

:::note[Definition: Derivative as a Limit from First Principle]
The derivative of a function $f$ at a point $x = a$ is defined as:

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

provided this limit exists.
:::

### 1.2 The Algebraic View

From an algebraic perspective, differentiation can be viewed as finding the best linear approximation to a function near a point.

:::note[Theorem: Linear Approximation]
Near $x = a$, a differentiable function $f(x)$ can be approximated by:

$$f(x) \approx f(a) + f'(a)(x - a)$$

This is called the linear approximation or tangent line approximation.
:::

:::note[Example: Application to Error Analysis]
Consider estimating $\sqrt{4.1}$ using the linear approximation to $f(x) = \sqrt{x}$ at $x = 4$.

Since $f'(x) = \frac{1}{2\sqrt{x}}$, we have:

$$\sqrt{4.1} \approx \sqrt{4} + \frac{1}{2\sqrt{4}}(4.1 - 4) = 2 + \frac{0.1}{4} = 2.025$$
:::

## 2. Differentiation of Trigonometric Functions and Their Inverses

### 2.1 Deriving Inverse Trigonometric Derivatives

:::note[Example: Derivative of arcsin]
Show that $\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1 - x^2}}$.

**Implicit Differentiation:**

1. Let $y = \arcsin x$, then $\sin y = x$
2. Differentiate both sides: $\cos y \frac{dy}{dx} = 1$
3. Therefore $\frac{dy}{dx} = \frac{1}{\cos y}$
4. Since $\sin^2 y + \cos^2 y = 1$, we have $\cos^2 y = 1 - \sin^2 y = 1 - x^2$
5. Thus $\frac{dy}{dx} = \frac{1}{\sqrt{1 - x^2}}$
:::

:::tip[Guided Exercise: Derivative of arccos]
Show that $\frac{d}{dx}(\arccos x) = -\frac{1}{\sqrt{1 - x^2}}$.

**Method 1** (Using $\arccos x + \arcsin x = \frac{\pi}{2}$):

**Method 2** (Implicit Differentiation):
Try this yourself using $y = \arccos x \implies \cos y = x$.
:::

:::tip[Guided Exercise: Derivative of arctan]
Show that $\frac{d}{dx}(\arctan x) = \frac{1}{1 + x^2}$.
:::

## 3. Differentiation of Hyperbolic Functions

### 3.1 Deriving Basic Hyperbolic Derivatives

:::tip[Guided Exercise: Basic Hyperbolic Derivatives]
Using the definitions:

$$\sinh x = \frac{e^x - e^{-x}}{2}, \qquad \cosh x = \frac{e^x + e^{-x}}{2}$$

show that:

$$\frac{d}{dx}(\sinh x) = \cosh x, \quad \frac{d}{dx}(\cosh x) = \sinh x, \quad \frac{d}{dx}(\tanh x) = \operatorname{sech}^2 x$$
:::

:::tip[Guided Exercise: Reciprocal Hyperbolic Derivatives]
Show that:

1. $\frac{d}{dx}(\operatorname{sech} x) = -\tanh x \operatorname{sech} x$
2. $\frac{d}{dx}(\operatorname{csch} x) = -\coth x \operatorname{csch} x$
3. $\frac{d}{dx}(\coth x) = -\operatorname{csch}^2 x$

**Hint:** Use the quotient rule and previous results.
:::

### 3.2 Inverse Hyperbolic Functions

:::tip[Guided Exercise: Derivative of arsinh]
Show that $\frac{d}{dx}(\operatorname{arsinh} x) = \frac{1}{\sqrt{x^2 + 1}}$.

**Method 1** (Using definition):

1. Use $\operatorname{arsinh} x = \ln(x + \sqrt{x^2 + 1})$
2. Apply chain rule to differentiate

**Method 2** (Implicit Differentiation):

1. Let $y = \operatorname{arsinh} x$, then $\sinh y = x$
2. Differentiate both sides: $\cosh y \frac{dy}{dx} = 1$
3. Use $\cosh^2 y - \sinh^2 y = 1$ to eliminate $\cosh y$
:::

:::tip[Guided Exercise: Derivative of arcosh]
Show that $\frac{d}{dx}(\operatorname{arcosh} x) = \frac{1}{\sqrt{x^2 - 1}}$, for $x > 1$.

**Method 1** (Using definition $\operatorname{arcosh} x = \ln(x + \sqrt{x^2 - 1})$):

**Method 2** (Implicit Differentiation):
Try this yourself using $y = \operatorname{arcosh} x \implies \cosh y = x$.
:::

:::tip[Guided Exercise: Derivative of artanh]
Show that $\frac{d}{dx}(\operatorname{artanh} x) = \frac{1}{1 - x^2}$, for $|x| < 1$.

**Method 1** (Using definition $\operatorname{artanh} x = \frac{1}{2}\ln\left(\frac{1+x}{1-x}\right)$):

**Method 2** (Implicit Differentiation):
Try this yourself using $y = \operatorname{artanh} x \implies \tanh y = x$.
:::

## 4. Applications and Past Paper Questions

:::note[Example: Q04 WFM03/01, June 2021]

**(a)** Given that $f(x) = x \arccos x$ where $-1 \leq x \leq 1$, find the exact value of $f'(0.5)$.

**(b)** Given that $g(x) = \arctan(e^{2x})$, show that

$$g''(x) = k \operatorname{sech}(2x) \tanh(2x)$$

where $k$ is a constant to be found.
:::

:::note[Example: Q03 WFM03/01, Jan 2022]

**(a)** Given that $y = \operatorname{arsech}\left(\frac{x}{2}\right)$, where $0 < x \leq 2$, show that

$$\frac{dy}{dx} = \frac{p}{x\sqrt{q - x^2}}$$

where $p$ and $q$ are constants to be determined.

**(b)** Given that $f(x) = \operatorname{artanh}(x) + \operatorname{arsech}\left(\frac{x}{2}\right)$ where $0 < x \leq 1$, determine, in simplest form, the exact value of $x$ for which $f'(x) = 0$.
:::

:::note[Example: Q04 WFM03/01, June 2022]
Given that $y = \operatorname{artanh}\left(\frac{\cos x + a}{\cos x - a}\right)$ where $a$ is a non-zero constant, show that

$$\frac{dy}{dx} = k \tan x$$

where $k$ is a constant to be determined.
:::

## Summary

:::note[Key Points]
- The derivative can be understood both geometrically (as slope) and algebraically (as rate of change)
- Inverse trigonometric derivatives involve the form $\frac{1}{\sqrt{1-x^2}}$
- Hyperbolic function derivatives mirror trigonometric ones, but with some sign differences
- Inverse hyperbolic derivatives can be derived using logarithmic definitions
:::

:::caution[Common Mistakes]
- Forgetting the minus sign in $\frac{d}{dx}(\arccos x)$
- Confusing domains of inverse functions
- Not recognizing hyperbolic identities
- Incorrect use of chain rule with composite functions
:::

## Homework Exercises

:::tip[Past Paper Question: 6669/s10/01/5]
Given that $y = (\operatorname{arcosh} 3x)^2$, where $3x > 1$, show that:

**(a)** $(9x^2 - 1)\left(\frac{dy}{dx}\right)^2 = 36y$ (5 marks)

**(b)** $(9x^2 - 1)\frac{d^2y}{dx^2} + 9x\frac{dy}{dx} = 18$ (4 marks)
:::

:::tip[Past Paper Question: 6669/s14/01/5]
Given that $y = \operatorname{artanh}\frac{x}{\sqrt{1+x^2}}$, show that

$$\frac{dy}{dx} = \frac{1}{\sqrt{1+x^2}}$$

(4 marks)
:::

## Challenge Problem: Proof of $(\sin x)' = \cos x$

### Background Review

:::note[Key Concept 1: Unit Circle and Trigonometric Functions]
For a point $P(\cos\theta, \sin\theta)$ on the unit circle:

- $\cos\theta$ is the $x$-coordinate
- $\sin\theta$ is the $y$-coordinate
- As $\theta$ increases, $P$ moves counterclockwise
:::

:::note[Key Concept 2: Definition of Derivative]
The derivative of a function $f(x)$ at point $x$ is defined as the limit of the difference quotient

$$\frac{f(x+h) - f(x)}{h}$$

as $h$ approaches $0$.
:::

:::note[Key Concept 3: Arclength Definition of Arcsin]
On the unit circle, $\arcsin x$ represents the arclength of the arc from the point $(1, 0)$ to the point $(\sqrt{1-x^2}, x)$.

**Key Properties:**

- The angle $\theta = \arcsin(x)$ is measured in radians
- For any point $(\sqrt{1-x^2}, x)$ on the unit circle, $x = \sin(\theta)$
- The arclength equals the radian measure $\theta$ (since radius = 1)
- Domain restriction $|x| \leq 1$ comes from the unit circle geometry
:::

### Task 1: Physical Method

:::tip[Task 1: Physical Method]

1. Consider a particle moving on the plane with parametric equations:
   $x(t) = \cos t, \quad y(t) = \sin t$
   What does this mean physically?

2. The velocity vector $\vec{v}(t)$ is given by $\vec{v}(t) = (x'(t), y'(t))$.
   - What is the direction of the velocity vector?
   - Why must it be perpendicular to the position vector?
   - What is its magnitude?

3. How does this physical interpretation help us understand why $\frac{d}{dt}\sin t = \cos t$?
:::

### Task 2: Understanding the Derivative Through Limits

:::tip[Task 2: Understanding the Derivative Through Limits]
Let's break down the derivative of sine function step by step:

1. At any point $a$, we want to find $(\sin x)'$ at $x = a$. This means we need to evaluate:

   $$\frac{\sin(a+h) - \sin a}{h} \quad \text{as $h$ gets closer and closer to 0}$$

2. We can use the trigonometric addition formula:

   $$\sin(a+h) = \sin a \cos h + \cos a \sin h$$

3. **Q:** Substitute this into our difference quotient and show that:

   $$\frac{\sin(a+h) - \sin a}{h} = \sin a \cdot \frac{(\cos h - 1)}{h} + \cos a \cdot \frac{\sin h}{h}$$

4. To show this approaches $\cos a$, we need to understand what happens to:
   - $\frac{\sin h}{h}$ as $h$ approaches $0$
   - $\frac{\cos h - 1}{h}$ as $h$ approaches $0$

5. **Q:** Using the identity $\cos h - 1 = -2\sin^2(h/2)$, show that:

   $$\frac{\cos h - 1}{h} = -\sin(h/2) \cdot \frac{\sin(h/2)}{h/2}$$

   Hence explain why $\frac{\cos h - 1}{h}$ approaches $0$ as long as $\frac{\sin h}{h}$ approaches $1$ as $h$ approaches $0$.

6. Therefore, if we can show $\frac{\sin h}{h}$ approaches $1$ as $h$ approaches $0$ (which we'll do in Task 3), we'll have proved that **the derivative of $\sin x$ at any point $a$ is $\cos a$**.
:::

### Task 3: Analytical Method

:::tip[Task 3: Analytical Method]
In this task, we will explore an alternative definition of the sine function through integration and use such definition to prove that $\frac{\sin x}{x}$ approaches $1$ as $x$ approaches $0$.

**Part 1: Understanding Arclength and Arcsine**

1. Recall from Task 1 that when a point moves along the unit circle with position vector $(\cos t, \sin t)$:
   - Its velocity vector is $(-\sin t, \cos t)$
   - The speed (magnitude of velocity) is constant = 1
   - Therefore, the parameter $t$ equals the arclength traveled

2. Consider the arclength definition of $\arcsin x$ (see Key Concept 3):
   - On the unit circle, $\arcsin x$ is the arclength from $(1, 0)$ to $(\sqrt{1-x^2}, x)$
   - For a curve given by $(f(t), g(t))$, its arclength is $\int \sqrt{(f'(t))^2 + (g'(t))^2}\,dt$
   - *Remark: this is how "arc"sin is related to "arc"length and we will discuss the computation of arclength in detail in the next chapter.*

3. **Q:** Using the arclength formula above:
   - (a) Express the arc representing $\arcsin x$ as $(x(t), y(t)) = (\sqrt{1-t^2}, t)$ for $0 \leq t \leq x$.
   - (b) Show that $\arcsin x = \int_0^x \frac{1}{\sqrt{1-t^2}}\,dt$.

**Part 2: Properties of the Integral**

1. For the function $f(x) = \int_0^x \frac{1}{\sqrt{1-t^2}}\,dt$, explain why:
   - The value of $f(0)$ must be $0$
   - As $x$ increases, $f(x)$ must increase (think about the area under a positive curve)
   - The function is symmetric about the origin (what happens if you replace $x$ with $-x$?)

2. For any $x$ between $0$ and $1$:
   - Find the smallest value of $\frac{1}{\sqrt{1-t^2}}$ on $[0, x]$
   - Find the largest value of $\frac{1}{\sqrt{1-t^2}}$ on $[0, x]$

   Use these facts to explain why:

   $$x \leq f(x) \leq \frac{x}{\sqrt{1-x^2}}$$

**Part 3: The Fundamental Property**

**The Squeeze Theorem** states: if $a(x) \leq b(x) \leq c(x)$ for all $x$ near some value $p$, and if $a(x)$ and $c(x)$ both approach the same value $L$ as $x$ approaches $p$, then $b(x)$ must also approach $L$.

1. Use the squeeze theorem to explain why $\frac{f(x)}{x}$ approaches $1$ as $x$ approaches $0$.

2. Let $y = f(x)$, then show that $\frac{\sin y}{y}$ also approaches $1$ as $y$ approaches $0$.
:::

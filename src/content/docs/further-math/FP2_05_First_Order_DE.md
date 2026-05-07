---
title: "FP2 Chapter 5: First-Order Differential Equations"
---

# FP2 Lecture Notes: First-Order Ordinary Differential Equations

First order ordinary differential equations (ODEs) are fundamental in mathematical modeling of real-world phenomena. These equations describe relationships involving an unknown function and its first derivative. We'll explore various techniques for solving these equations, with a particular focus on linear equations and integrating factors.

:::note[Motivating Problem: Population Growth]
Consider a population $P(t)$ that grows at a rate proportional to its current size:

$$
\frac{dP}{dt} = kP
$$

where $k$ is a positive constant. How does this population grow over time?

This famous equation leads to exponential growth. The solution is $P(t) = P_0e^{kt}$, where $P_0$ is the initial population at $t = 0$. This simple ODE and its solution have widespread applications in biology, economics, and many other fields.

The equation $\frac{dP}{dt} = kP$ is an example of a **separable differential equation**, one of the simplest types of first order ODEs that we'll explore in this lecture.
:::

## Module 1: Separable Differential Equations (Review)

### Definition

**Separable Differential Equation.** A differential equation is separable if it can be written in the form:

$$
\frac{dy}{dx} = \frac{f(x)}{g(y)}
$$

or equivalently:

$$
g(y)\frac{dy}{dx} = f(x)
$$

:::note[Solution Method]
To solve a separable differential equation:

1. Separate the variables: $g(y)\,dy = f(x)\,dx$
2. Integrate both sides: $\int g(y)\,dy = \int f(x)\,dx$
3. Solve for $y$ explicitly if possible
4. Apply initial conditions if given
:::

## Module 2: Linear First Order ODEs

### Definition and Standard Form

**Linear First Order ODE.** A first order differential equation is linear if it can be written in the form:

$$
\frac{dy}{dx} + P(x)y = Q(x)
$$

where $P(x)$ and $Q(x)$ are functions of $x$ only.

:::note[How to Recognize a Linear ODE]
A linear equation must have these properties:

- The dependent variable $y$ appears only to the first power (never as $y^2$, $\sqrt{y}$, etc.)
- The derivative $\frac{dy}{dx}$ appears only to the first power
- The coefficients $P(x)$ and $Q(x)$ depend only on $x$, not on $y$

**Examples:**
- $\frac{dy}{dx} + 2xy = \sin x$ — Linear: $y$ appears only to first power
- $\frac{dy}{dx} + y = xy^2$ — Not linear: $y$ appears as $y^2$
- $y\frac{dy}{dx} = x$ — Not linear: $\frac{dy}{dx}$ is multiplied by $y$
:::

### The Integrating Factor Method

:::note[Why Do We Need an Integrating Factor?]
When solving $\frac{dy}{dx} + P(x)y = Q(x)$, we face a challenge: the left side is not the derivative of a simple function.

Imagine if the left side were $\frac{d}{dx}[y]$, we could just integrate both sides. But it's not that simple.

The integrating factor helps us transform the equation so that the left side becomes the derivative of a product, which we can then integrate directly.

**Think of it as:** Finding a special function that, when multiplied through the equation, turns the left side into a perfect derivative.
:::

:::note[Integrating Factor Method: Step-by-Step]

**Goal:** Solve $\frac{dy}{dx} + P(x)y = Q(x)$

**Step 1:** Identify $P(x)$ and $Q(x)$ from your equation. Ensure equation is in standard form with $\frac{dy}{dx}$ isolated.

**Step 2:** Calculate the integrating factor

$$
\mu(x) = e^{\int P(x)\,dx}
$$

Find a basic antiderivative of $P(x)$ (no +C needed). Take $e$ to that power.

**Step 3:** Multiply every term in the equation by $\mu(x)$

$$
\mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \mu(x)Q(x)
$$

**Step 4:** Recognize that the left side equals $\frac{d}{dx}[\mu(x)y]$.

This is the product rule in reverse!

$$
\frac{d}{dx}[\mu(x)y] = \mu(x)\frac{dy}{dx} + \frac{d\mu}{dx}y = \mu(x)\frac{dy}{dx} + \mu(x)P(x)y
$$

**Step 5:** Rewrite equation with this derivative

$$
\frac{d}{dx}[\mu(x)y] = \mu(x)Q(x)
$$

**Step 6:** Integrate both sides

$$
\mu(x)y = \int \mu(x)Q(x)\,dx + C
$$

**Step 7:** Solve for $y$

$$
y = \frac{1}{\mu(x)}\left[\int \mu(x)Q(x)\,dx + C\right]
$$
:::

:::note[The Magic of Integrating Factors Explained]
The key insight behind the integrating factor is that:

$$
\frac{d}{dx}\left[e^{\int P(x)\,dx} \cdot y\right] = e^{\int P(x)\,dx} \cdot \left(P(x)y + \frac{dy}{dx}\right)
$$

When we multiply our original equation $\frac{dy}{dx} + P(x)y = Q(x)$ by the integrating factor $\mu(x) = e^{\int P(x)\,dx}$, the left side becomes exactly this derivative.

This transforms the equation from one that's difficult to integrate directly into one that's straightforward.
:::

### Example 1: Simple Linear ODE

Solve $\frac{dy}{dx} + y = e^x$.

**Solution:**

1. **Identify:** $P(x) = 1$ and $Q(x) = e^x$

2. **Find the integrating factor:**

$$
\mu(x) = e^{\int 1\,dx} = e^x
$$

3. **Multiply the equation by $\mu(x)$:**

$$
e^x\frac{dy}{dx} + e^x \cdot y = e^x \cdot e^x = e^{2x}
$$

4. **Left side is a derivative:**

$$
\frac{d}{dx}[e^x y] = e^{2x}
$$

5. **Integrate both sides:**

$$
e^x y = \int e^{2x}\,dx = \frac{1}{2}e^{2x} + C
$$

6. **Solve for $y$:**

$$
y = \frac{1}{e^x}\left[\frac{1}{2}e^{2x} + C\right] = \frac{1}{2}e^x + Ce^{-x}
$$

**Check:** Verify by substituting back:

$$
\frac{dy}{dx} + y = \left(\frac{1}{2}e^x - Ce^{-x}\right) + \left(\frac{1}{2}e^x + Ce^{-x}\right) = e^x \quad \checkmark
$$

### Example 2: Linear ODE with Initial Condition

Solve the initial value problem: $\frac{dy}{dx} - \frac{1}{x}y = x^2$ with $y(1) = 2$ for $x > 0$.

**Solution:**

1. **Identify:** $P(x) = -\frac{1}{x}$ and $Q(x) = x^2$

2. **Find the integrating factor:**

$$
\mu(x) = e^{\int -\frac{1}{x}\,dx} = e^{-\ln|x|} = \frac{1}{x} \quad \text{for } x > 0
$$

3. **Multiply the equation by $\mu(x)$:**

$$
\frac{1}{x}\frac{dy}{dx} - \frac{1}{x^2}y = x
$$

4. **Recognize the left side as a derivative:**

$$
\frac{d}{dx}\left[\frac{y}{x}\right] = x
$$

5. **Integrate both sides:**

$$
\frac{y}{x} = \int x\,dx = \frac{x^2}{2} + C
$$

6. **Solve for $y$:**

$$
y = \frac{x^3}{2} + Cx
$$

7. **Apply the initial condition** $y(1) = 2$:

$$
2 = \frac{1}{2} + C \implies C = \frac{3}{2}
$$

8. **Final solution:**

$$
y = \frac{x^3}{2} + \frac{3x}{2}
$$

**Note:** The solution represents the family of curves $y = \frac{x^3}{2} + Cx$. The initial condition $y(1) = 2$ selects the specific curve where $C = \frac{3}{2}$.

:::note[Common Integrating Factors]
Here are some common patterns to recognize:

| $P(x)$ | $\int P(x)\,dx$ | Integrating factor $\mu(x)$ |
|---|---|---|
| $k$ (constant) | $kx$ | $e^{kx}$ |
| $\frac{1}{x}$ | $\ln\lvert x\rvert$ | $x$ |
| $-\frac{1}{x}$ | $-\ln\lvert x\rvert$ | $\frac{1}{x}$ |
| $\frac{n}{x}$ | $n\ln\lvert x\rvert$ | $x^n$ |
| $ax$ | $\frac{ax^2}{2}$ | $e^{\frac{ax^2}{2}}$ |
| $\tan x$ | $\ln\lvert\sec x\rvert$ | $\sec x$ |

Memorizing these patterns can save you time in solving linear ODEs!
:::

:::note[In-class Exercise]
Solve the following linear differential equations:

(a) $\frac{dy}{dx} + 3y = e^{-x}$

(b) $x\frac{dy}{dx} + 2y = 4x^2$ for $x > 0$

(c) $\frac{dy}{dx} - y\cot x = \sin x$ for $0 < x < \pi$
:::

## Module 3: Change of Variable Methods

:::note[Using Substitutions to Transform Differential Equations]
Many differential equations that aren't directly solvable can be transformed into simpler forms through substitution. The key approach is:

1. Apply a given substitution to transform the variables
2. Use the chain rule to express the derivative in terms of the new variable
3. Simplify the resulting equation
4. Solve using standard methods (separation of variables or integrating factors)
5. Substitute back to find the original solution

Substitutions can transform complicated-looking equations into familiar forms that are easier to handle.
:::

### Transformation to Linear Form

#### Example 3: Substitution $u = y + 2x$

**a.** Use the substitution $u = y + 2x$ to transform the differential equation

$$
\frac{dy}{dx} = \frac{-(1 + 2y + 4x)}{1 + y + 2x}
$$

into a differential equation in $u$ and $x$.

**b.** By first solving this new equation, show that the general solution to the original equation may be written as $4x^2 + 4xy + y^2 + 2y + 2x = k$, where $k$ is a constant.

**Solution:**

**Part (a):**

Given the substitution $u = y + 2x$, we need to express $\frac{dy}{dx}$ in terms of $u$ and $x$.

Rearranging: $y = u - 2x$, so by the chain rule:

$$
\frac{dy}{dx} = \frac{du}{dx} - 2
$$

Substitute $y = u - 2x$ into the right side:

$$
\frac{-(1 + 2(u - 2x) + 4x)}{1 + (u - 2x) + 2x} = \frac{-(1 + 2u)}{1 + u}
$$

So the equation becomes:

$$
\frac{du}{dx} - 2 = \frac{-(1 + 2u)}{1 + u}
$$

Rearranging:

$$
\frac{du}{dx} = \frac{-(1 + 2u) + 2(1 + u)}{1 + u} = \frac{1}{1 + u}
$$

**Part (b):**

Solve the transformed equation $\frac{du}{dx} = \frac{1}{1 + u}$, which is separable:

$$
(1 + u)\,du = dx
$$

Integrating both sides:

$$
u + \frac{u^2}{2} = x + C_1
$$

Substitute back $u = y + 2x$:

$$
(y + 2x) + \frac{(y + 2x)^2}{2} = x + C_1
$$

Expanding and simplifying, setting $k = 2C_1$:

$$
4x^2 + 4xy + y^2 + 2y + 2x = k
$$

#### Example 4: Substitution $z = y^{-1}$

**a.** Use the substitution $z = y^{-1}$ to transform the differential equation

$$
\frac{dy}{dx} - \frac{1}{x}y = \frac{(x + 1)^3}{x}y^2
$$

into the differential equation

$$
\frac{dz}{dx} + \frac{1}{x}z = -\frac{(x + 1)^3}{x}
$$

**b.** By first solving the transformed equation, find the general solution to the original equation, giving $y$ in terms of $x$.

**Solution:**

**Part (a):**

Given $z = y^{-1}$, we have $y = z^{-1}$. Using the chain rule:

$$
\frac{dy}{dx} = -z^{-2}\frac{dz}{dx} = -\frac{1}{z^2}\frac{dz}{dx}
$$

Substituting $y = z^{-1}$ into the original equation:

$$
-\frac{1}{z^2}\frac{dz}{dx} - \frac{1}{x}\frac{1}{z} = \frac{(x + 1)^3}{x}\frac{1}{z^2}
$$

Multiply both sides by $-z^2$:

$$
\frac{dz}{dx} + \frac{1}{x}z = -\frac{(x + 1)^3}{x} \quad \checkmark
$$

**Part (b):**

This is a linear first order ODE with $P(x) = \frac{1}{x}$ and $Q(x) = -\frac{(x + 1)^3}{x}$.

Find the integrating factor:

$$
\mu(x) = e^{\int \frac{1}{x}\,dx} = e^{\ln|x|} = x \quad (\text{for } x > 0)
$$

Multiply by $\mu(x)$:

$$
\frac{d}{dx}(xz) = -(x + 1)^3
$$

Integrate both sides:

$$
xz = -\frac{(x+1)^4}{4} + C
$$

Since $z = y^{-1}$:

$$
\frac{x}{y} = -\frac{(x+1)^4}{4} + C
$$

$$
y = \frac{4x}{4C - (x + 1)^4}
$$

:::note[Key Strategies for Change of Variable]
**Remember the chain rule and the product rule:**
- If $y = f(v)$, then $\frac{dy}{dx} = f'(v)\frac{dv}{dx}$
- If $y = vx$, then $\frac{dy}{dx} = v + x\frac{dv}{dx}$
:::

:::note[In-class Exercise]
For each equation, apply the given substitution and solve:

1. $\frac{dy}{dx} = \frac{y^2-2y}{x}$, using $y = vx$

2. $\frac{dy}{dx} + 2y = e^{3x}$, using $v = ye^{-2x}$

3. $(x+y)\frac{dy}{dx} = y$, using $v = x+y$
:::

## Summary

:::note[Key Concepts]

1. **Separable Equations:**
   - Form: $g(y)y' = f(x)$
   - Technique: Separate variables and integrate

2. **Linear Equations:**
   - Form: $y' + P(x)y = Q(x)$
   - Technique: Find integrating factor $\mu(x) = e^{\int P(x)\,dx}$ and multiply both sides

3. **Substitution:**
   - If $y = f(v)$, then $\frac{dy}{dx} = f'(v)\frac{dv}{dx}$
   - If $y = vx$, then $\frac{dy}{dx} = v + x\frac{dv}{dx}$
:::

:::note[Common Pitfalls]
- Forgetting to check if an equation is separable before trying more complex methods
- Making errors when finding the integrating factor
- Incorrectly identifying the $P(x)$ and $Q(x)$ functions in a linear equation
- Not properly applying initial conditions
:::

## Practice Problems

### Practice Problem 1

Solve the differential equation:

$$
\sin x \frac{dy}{dx} - y\cos x = \sin 2x \sin x
$$

### Practice Problem 2

Consider the differential equation:

$$
\frac{dy}{dx} - 4y\tan x = 2y^{\frac{1}{2}}
$$

(a) Show that the substitution $z = y^{\frac{1}{2}}$ transforms this equation into:

$$
\frac{dz}{dx} - 2z\tan x = 1
$$

(b) Solve the transformed equation to find $z$ as a function of $x$.

(c) Hence obtain the general solution of the original equation.

### Practice Problem 3

(a) Find, in the form $y = f(x)$, the general solution of the equation:

$$
\frac{dy}{dx} + 2y\tan x = \sin 2x, \quad 0 < x < \frac{\pi}{2}
$$

given that $y = 2$ at $x = \frac{\pi}{3}$.

(b) Find the value of $y$ at $x = \frac{\pi}{6}$, giving your answer in the form $a + k\ln b$, where $a$ and $b$ are integers and $k$ is rational.

![Solution curve y = x² + 4/x²](/images/tikz/fp2-ode-solution-curves.svg)

### Practice Problem 4

Consider the differential equation:

$$
x\frac{dy}{dx} + 2y = 4x^2
$$

(1) Find the general solution of this differential equation.

(2) Find the particular solution for which $y = 5$ at $x = 1$, giving your answer in the form $y = f(x)$.

(3) For this particular solution:

(a) Find the exact values of the coordinates of the turning points of the curve.

(b) Sketch the curve, showing the coordinates of the turning points.

---
title: "FP2 Chapter 6: Second-Order Differential Equations"
---

# FP2 Lecture Notes: Second-Order Ordinary Differential Equations

Second order ordinary differential equations (ODEs) are equations involving the second derivative of an unknown function. They are fundamental in mathematical modeling of physical systems and appear in countless applications in physics, engineering, and other sciences. In this lecture, we'll explore the theory and techniques for solving these equations, with special focus on linear equations with constant coefficients.

:::note[Motivating Problem: Spring-Mass System]
Consider a mass $m$ attached to a spring with spring constant $k$. If the mass is displaced from equilibrium and released, its position $x(t)$ satisfies:

$$
m\frac{d^2x}{dt^2} = -kx
$$

or equivalently:

$$
\frac{d^2x}{dt^2} + \frac{k}{m}x = 0
$$

How does the mass move over time?

This is a classic example of a second-order ODE. Its solution describes simple harmonic motion: $x(t) = A\cos(\omega t) + B\sin(\omega t)$ where $\omega = \sqrt{\frac{k}{m}}$ and $A$, $B$ are constants determined by initial conditions.

This equation appears in various contexts beyond springs, including pendulums (for small oscillations), electrical circuits, and sound wave propagation.
:::

## Module 1: Review of Quadratic Equations

Before diving into second-order ODEs, we need to review quadratic equations, as they will play a crucial role in our solution methods.

**Quadratic Equation.** An equation of the form:

$$
ax^2 + bx + c = 0
$$

where $a \neq 0$ and $a, b, c$ are constants.

:::note[The Quadratic Formula]
The solutions to $ax^2 + bx + c = 0$ are given by:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

The expression $\Delta = b^2 - 4ac$ is called the **discriminant** and determines the nature of the solutions:

- If $\Delta > 0$: Two distinct real roots
- If $\Delta = 0$: One repeated real root (a "double root")
- If $\Delta < 0$: Two complex conjugate roots
:::

## Module 2: Introduction to Second Order ODEs

**Second Order ODE.** An equation involving the second derivative of an unknown function. The general form is:

$$
F\!\left(x, y, \frac{dy}{dx}, \frac{d^2y}{dx^2}\right) = 0
$$

where $y = f(x)$ is the unknown function.

:::note[Classification of Second Order ODEs]
Second order ODEs can be classified in several ways:

**1. Linear vs. Nonlinear**
- **Linear:** Can be written as $a(x)\frac{d^2y}{dx^2} + b(x)\frac{dy}{dx} + c(x)y = g(x)$
- **Nonlinear:** Cannot be written in the above form

**2. Homogeneous vs. Non-homogeneous**
- **Homogeneous:** $g(x) = 0$
- **Non-homogeneous:** $g(x) \neq 0$

**3. Constant Coefficients vs. Variable Coefficients**
- **Constant Coefficients:** $a(x)$, $b(x)$, $c(x)$ are constants
- **Variable Coefficients:** At least one depends on $x$

In this lecture, we focus on linear second-order ODEs with constant coefficients:

$$
a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = g(x)
$$

where $a$, $b$, $c$ are constants ($a \neq 0$).
:::

### Example 1: Examples of Second Order ODEs

1. $\frac{d^2y}{dx^2} + 4y = 0$ — Linear, homogeneous, constant coefficients
2. $\frac{d^2y}{dx^2} + 2\frac{dy}{dx} + y = \sin x$ — Linear, non-homogeneous, constant coefficients
3. $x\frac{d^2y}{dx^2} + \frac{dy}{dx} + xy = 0$ — Linear, homogeneous, variable coefficients
4. $\frac{d^2y}{dx^2} + \left(\frac{dy}{dx}\right)^2 + y = 0$ — Nonlinear
5. $\frac{d^2y}{dx^2} = y^3$ — Nonlinear

## Module 3: Linear Homogeneous ODEs with Constant Coefficients

### The Auxiliary Equation Method

We now focus on solving linear homogeneous second-order ODEs with constant coefficients:

$$
a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = 0
$$

:::note[The Auxiliary Equation Approach]
To solve $a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = 0$:

1. Look for solutions of the form $y = e^{rx}$, where $r$ is a constant to be determined

2. Substitute into the differential equation:

$$
ar^2e^{rx} + bre^{rx} + ce^{rx} = 0
$$

$$
e^{rx}(ar^2 + br + c) = 0
$$

3. Since $e^{rx} \neq 0$, we must have:

$$
ar^2 + br + c = 0
$$

This is the **auxiliary equation** (or **characteristic equation**).

4. Solve this quadratic for $r$. The form of the general solution depends on the roots.
:::

### Three Cases for the Auxiliary Equation

:::note[Case 1: Two Distinct Real Roots]
If $ar^2 + br + c = 0$ has two distinct real roots $r_1$ and $r_2$ (i.e., $b^2 - 4ac > 0$), then:

$$
y = C_1e^{r_1x} + C_2e^{r_2x}
$$

where $C_1$ and $C_2$ are arbitrary constants.

**Why this works:** Since the ODE is linear, if $y_1$ and $y_2$ are both solutions, then $C_1y_1 + C_2y_2$ is also a solution. Both $e^{r_1x}$ and $e^{r_2x}$ satisfy the auxiliary equation, and this is the complete general solution.
:::

### Example 2: Distinct Real Roots

Solve $\frac{d^2y}{dx^2} - 5\frac{dy}{dx} + 6y = 0$.

**Solution:**

1. Auxiliary equation: $r^2 - 5r + 6 = 0$
2. Factor: $(r - 2)(r - 3) = 0$
3. Roots: $r_1 = 2$, $r_2 = 3$
4. General solution: $y = C_1e^{2x} + C_2e^{3x}$

:::note[Case 2: Repeated Real Root]
If $ar^2 + br + c = 0$ has a repeated real root $r_1$ (i.e., $b^2 - 4ac = 0$), then:

$$
y = C_1e^{r_1x} + C_2xe^{r_1x}
$$

**Why $xe^{r_1x}$ appears:** With a repeated root, we need a second linearly independent solution. It can be shown that $xe^{r_1x}$ is also a solution, ensuring the complete general solution.
:::

### Example 3: Repeated Real Root

Solve $\frac{d^2y}{dx^2} - 6\frac{dy}{dx} + 9y = 0$.

**Solution:**

1. Auxiliary equation: $r^2 - 6r + 9 = 0$
2. Factor: $(r - 3)^2 = 0$
3. Repeated root: $r = 3$
4. General solution: $y = C_1e^{3x} + C_2xe^{3x}$

:::note[Case 3: Complex Conjugate Roots]
If $ar^2 + br + c = 0$ has complex conjugate roots $r = \alpha \pm i\beta$ (i.e., $b^2 - 4ac < 0$), then:

$$
y = e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)
$$

**Why this form?** Complex roots yield complex solutions: $e^{(\alpha+i\beta)x} = e^{\alpha x}(\cos\beta x + i\sin\beta x)$. Since we want real solutions, we use linear combinations of the real and imaginary parts.

This form is particularly useful in physics, as it represents oscillatory motion with exponential growth or decay.
:::

### Example 4: Complex Conjugate Roots

Solve $\frac{d^2y}{dx^2} + 4y = 0$.

**Solution:**

1. Auxiliary equation: $r^2 + 4 = 0$
2. Roots: $r = \pm 2i$ (i.e., $\alpha = 0$, $\beta = 2$)
3. General solution: $y = C_1\cos 2x + C_2\sin 2x$

:::note[Exercise]
Solve the following differential equation:

$$
4\frac{d^2y}{dx^2} - 4\frac{dy}{dx} + y = 0
$$
:::

## Module 4: Inhomogeneous Second-Order ODEs

After mastering homogeneous equations, we now turn to inhomogeneous linear second-order ODEs with constant coefficients:

$$
a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = g(x)
$$

where $g(x) \neq 0$ is the inhomogeneous term (forcing function).

### The Structure of the General Solution

:::note[General Solution Structure]
The general solution to an inhomogeneous linear ODE is:

$$
y = y_c + y_p
$$

where:
- $y_c$ is the **complementary function** (general solution of $a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = 0$)
- $y_p$ is a **particular integral** (any specific solution of the full inhomogeneous equation)

**Key points:**
- The complementary function contains the arbitrary constants
- The particular integral contains no arbitrary constants
- We only need to find one particular integral
:::

### Example 5: Finding a General Solution

Consider $\frac{d^2y}{dx^2} + 4y = \sin x$.

**Step 1: Complementary function $y_c$** (from $\frac{d^2y}{dx^2} + 4y = 0$):
- Auxiliary equation: $r^2 + 4 = 0 \implies r = \pm 2i$
- $y_c = A\cos 2x + B\sin 2x$

**Step 2: Particular integral $y_p$:**
- $y_p = -\frac{1}{3}\sin x$

**Step 3: General solution:**

$$
y = A\cos 2x + B\sin 2x - \frac{1}{3}\sin x
$$

### Method of Undetermined Coefficients

:::note[Method of Undetermined Coefficients]
This method works when $g(x)$ has a simple form like polynomials, exponentials, sines, cosines, or products of these:

1. Based on the form of $g(x)$, guess an appropriate form for $y_p$ with undetermined coefficients
2. Compute $y_p'$ and $y_p''$
3. Substitute into the original equation
4. Solve for the unknown coefficients by comparing like terms

**Important:** If your trial function or any part of it is already a solution to the homogeneous equation, you must multiply by $x$ (or $x^2$ if necessary) to ensure linear independence.
:::

:::note[Trial Functions for Particular Integrals]

| Inhomogeneous Term $g(x)$ | Trial Function for $y_p$ |
|---|---|
| $k$ (constant) | $A$ |
| Polynomial: $a_nx^n + \cdots + a_0$ | $A_nx^n + \cdots + A_0$ |
| Exponential: $ke^{\alpha x}$ | $Ae^{\alpha x}$ |
| Sine/Cosine: $k\sin\beta x$ or $k\cos\beta x$ | $A\sin\beta x + B\cos\beta x$ |
| $p(x)e^{\alpha x}$ | $q(x)e^{\alpha x}$ (same degree as $p$) |
| $p(x)\sin\beta x$ or $p(x)\cos\beta x$ | $q_1(x)\sin\beta x + q_2(x)\cos\beta x$ (same degree) |
| $e^{\alpha x}\sin\beta x$ or $e^{\alpha x}\cos\beta x$ | $e^{\alpha x}(A\sin\beta x + B\cos\beta x)$ |

**Special Cases:** If the trial function appears in the complementary function:
- If $g(x) = ke^{\alpha x}$ and $e^{\alpha x}$ is in $y_c$, use $y_p = Axe^{\alpha x}$
- If $g(x) = k\sin\beta x$ or $k\cos\beta x$ and these are in $y_c$, use $y_p = x(A\sin\beta x + B\cos\beta x)$
- If repeated root and trial includes $xe^{\alpha x}$, use $y_p = Ax^2e^{\alpha x}$
:::

### Example 6: Polynomial Inhomogeneous Term

Solve $\frac{d^2y}{dx^2} - 3\frac{dy}{dx} + 2y = 4x + 5$.

**Step 1: Complementary function**
- Auxiliary: $r^2 - 3r + 2 = 0 \implies (r-1)(r-2) = 0 \implies r = 1, 2$
- $y_c = C_1e^x + C_2e^{2x}$

**Step 2: Particular integral**
- Try $y_p = Ax + B$, so $y_p' = A$, $y_p'' = 0$
- Substituting: $0 - 3A + 2(Ax + B) = 4x + 5$
- Comparing coefficients: $2A = 4 \implies A = 2$; $2B - 3A = 5 \implies B = 5.5$
- $y_p = 2x + 5.5$

**Step 3: General solution:**

$$
y = C_1e^x + C_2e^{2x} + 2x + 5.5
$$

### Example 7: Exponential Inhomogeneous Term

Solve $\frac{d^2y}{dx^2} - \frac{dy}{dx} - 6y = 3e^{2x}$.

**Step 1:** Auxiliary: $r^2 - r - 6 = 0 \implies r = 3, -2$. So $y_c = C_1e^{3x} + C_2e^{-2x}$.

**Step 2:** Try $y_p = Ae^{2x}$. Substituting:

$$
4Ae^{2x} - 2Ae^{2x} - 6Ae^{2x} = 3e^{2x} \implies -4A = 3 \implies A = -\frac{3}{4}
$$

**Step 3:** $y = C_1e^{3x} + C_2e^{-2x} - \frac{3}{4}e^{2x}$

### Example 8: Trigonometric Inhomogeneous Term (Special Case)

Solve $\frac{d^2y}{dx^2} + 4y = 3\sin 2x$.

**Step 1:** Auxiliary: $r^2 + 4 = 0 \implies r = \pm 2i$. So $y_c = C_1\cos 2x + C_2\sin 2x$.

**Step 2:** Since $\sin 2x$ and $\cos 2x$ are already in $y_c$, multiply by $x$:

Try $y_p = x(A\cos 2x + B\sin 2x)$.

Computing derivatives and substituting:

$$
-4A\sin 2x + 4B\cos 2x = 3\sin 2x
$$

Comparing coefficients: $-4A = 3 \implies A = -\frac{3}{4}$; $4B = 0 \implies B = 0$.

So $y_p = -\frac{3}{4}x\cos 2x$.

**Step 3:**

$$
y = C_1\cos 2x + C_2\sin 2x - \frac{3}{4}x\cos 2x
$$

:::note[Exercise]
Solve the differential equation:

$$
\frac{d^2y}{dx^2} - 2\frac{dy}{dx} - 3y = 4e^x + 2x
$$
:::

## Module 5: Boundary Conditions and Particular Solutions

### Initial Value Problems

:::note[Initial Value Problems (IVPs)]
An initial value problem for a second-order ODE specifies:
- The differential equation itself
- The value of the function at a specific point: $y(x_0) = y_0$
- The value of the first derivative at the same point: $y'(x_0) = y_1$

For a second-order ODE, we need exactly **two** conditions to determine the arbitrary constants.
:::

### Example 9: Initial Value Problem

Solve:

$$
\frac{d^2y}{dx^2} + y = x, \quad y(0) = 2, \quad y'(0) = -1
$$

**Solution:**

1. **Complementary function:** $r^2 + 1 = 0 \implies r = \pm i$, so $y_c = A\cos x + B\sin x$

2. **Particular integral:** Try $y_p = Cx$. Substituting: $0 + Cx = x \implies C = 1$. So $y_p = x$.

3. **General solution:** $y = A\cos x + B\sin x + x$

4. **Apply initial conditions:**

$$
y(0) = A = 2
$$

$$
y'(0) = B + 1 = -1 \implies B = -2
$$

5. **Particular solution:** $y = 2\cos x - 2\sin x + x$

### Boundary Value Problems

:::note[Boundary Value Problems (BVPs)]
A boundary value problem specifies conditions at **different** points:

$$
y(a) = \alpha \quad \text{and} \quad y(b) = \beta
$$
:::

### Example 10: Boundary Value Problem

Solve:

$$
\frac{d^2y}{dx^2} + y = 0, \quad y(0) = 0, \quad y(\pi/2) = 1
$$

**Solution:**

1. General solution: $y = A\cos x + B\sin x$
2. $y(0) = A = 0$
3. $y(\pi/2) = B = 1$
4. $y = \sin x$

## Module 6: Substitution Methods for Second-Order ODEs

Sometimes a second-order ODE can be simplified through appropriate substitutions. We explore two main types: substituting the independent variable $x$ and substituting the dependent variable $y$.

### Variable Substitution (Changing the Independent Variable)

:::note[Substituting the Independent Variable]
When a differential equation contains functions with a common argument, substitute that argument with a new variable to simplify.

**Chain rule transformations:** When $t = f(x)$ and $y = y(t)$:

$$
\frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx} = \frac{dy}{dt} \cdot f'(x)
$$

$$
\frac{d^2y}{dx^2} = \frac{d^2y}{dt^2} \cdot [f'(x)]^2 + \frac{dy}{dt} \cdot f''(x)
$$
:::

### Example 11: Logarithmic Substitution

Solve:

$$
x^2\frac{d^2y}{dx^2} - 3x\frac{dy}{dx} + 4y = 0, \quad x > 0
$$

Using $t = \ln x$.

**Solution:**

1. Let $t = \ln x$, so $x = e^t$.

2. Transform derivatives:

$$
\frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{1}{x}
$$

$$
\frac{d^2y}{dx^2} = \frac{1}{x^2}\left(\frac{d^2y}{dt^2} - \frac{dy}{dt}\right)
$$

3. Substitute into the original equation:

$$
x^2 \cdot \frac{1}{x^2}\left(\frac{d^2y}{dt^2} - \frac{dy}{dt}\right) - 3x \cdot \frac{1}{x} \cdot \frac{dy}{dt} + 4y = 0
$$

$$
\frac{d^2y}{dt^2} - 4\frac{dy}{dt} + 4y = 0
$$

4. Solve with constant coefficients:
   - Auxiliary: $(r-2)^2 = 0 \implies r = 2$ (repeated)
   - $y(t) = C_1e^{2t} + C_2te^{2t}$

5. Substitute back:

$$
y(x) = C_1x^2 + C_2x^2\ln x
$$

### Example 12: Square Root Substitution

Solve:

$$
x\frac{d^2y}{dx^2} - (6x^2 + 1)\frac{dy}{dx} + 9x^3y = x^5, \quad x > 0
$$

Using $x = t^{\frac{1}{2}}$ (equivalently $t = x^2$), this transforms into:

$$
4\frac{d^2y}{dt^2} - 12\frac{dy}{dt} + 9y = t
$$

which is a second-order ODE with constant coefficients.

### Dependent Variable Substitution (Transforming the Equation)

:::note[Substituting the Dependent Variable]
When a differential equation has a particular structure, substituting the dependent variable $y$ can sometimes transform it into a simpler equation.
:::

### Example 13: Power Substitution

Solve:

$$
\frac{d^2y}{dx^2} - \frac{(y')^2}{y} + y' = 0
$$

Using $y = e^z$.

**Solution:**

1. Let $y = e^z$, so $y' = e^z z'$ and $y'' = e^z(z')^2 + e^z z''$.

2. Substitute:

$$
e^z(z')^2 + e^z z'' - \frac{(e^z z')^2}{e^z} + e^z z' = 0
$$

$$
e^z z'' + e^z z' = 0
$$

3. Since $e^z \neq 0$: $z'' + z' = 0$

4. Auxiliary: $r^2 + r = 0 \implies r = 0, -1$. So $z = C_1 + C_2e^{-x}$.

5. Substitute back:

$$
y = e^{C_1 + C_2e^{-x}} = A \cdot e^{Be^{-x}}
$$

where $A = e^{C_1} > 0$ and $B = C_2$ are arbitrary constants.

### Review Exercise: Logarithmic Substitution

Given:

$$
x^2\frac{d^2y}{dx^2} - 2y = 1 + 4\ln x - 2(\ln x)^2, \quad x > 0
$$

Show that using $t = \ln x$, this becomes:

$$
\frac{d^2y}{dt^2} - \frac{dy}{dt} - 2y = 1 + 4t - 2t^2
$$

Then solve to determine the general solution of the original equation.

### Distinguishing Between Transformation Types

:::note[Dependent vs. Independent Variable Change]

**Dependent Variable Change ($y \to v$):**
- The substitution redefines the dependent variable: $v = f(y)$, $y = g(v)$
- Derivatives remain with respect to $x$ (e.g., $\frac{dv}{dx}$)
- You are changing *what* is varying with $x$
- Examples: $v = y^{-2}$, $z = y^2$, $y = ve^x$

**Independent Variable Change ($x \to t$):**
- The substitution redefines the independent variable: $t = h(x)$ or $x = k(t)$
- $y$ remains the dependent variable, but now as a function of $t$
- Derivatives are with respect to $t$ (e.g., $\frac{dy}{dt}$)
- You are changing *with respect to which variable* $y$ varies
- Examples: $t = \ln x$, $x = e^t$, $x = t^2$
:::

:::note[Chain Rule for Independent Variable Changes]

**Case 1: $t = h(x)$**

$$
\frac{dy}{dx} = \frac{dy}{dt} \cdot h'(x)
$$

$$
\frac{d^2y}{dx^2} = \frac{d^2y}{dt^2} \cdot [h'(x)]^2 + \frac{dy}{dt} \cdot h''(x)
$$

Express everything in terms of $t$ using $x = h^{-1}(t)$.

**Case 2: $x = k(t)$**

$$
\frac{dy}{dx} = \frac{dy/dt}{k'(t)}
$$

$$
\frac{d^2y}{dx^2} = \frac{\frac{d^2y}{dt^2}k'(t) - \frac{dy}{dt}k''(t)}{[k'(t)]^3}
$$
:::

## Homework Problems

### Problem 1

(a) Determine the general solution of

$$
\frac{d^2y}{dx^2} + 2\frac{dy}{dx} + 5y = 6\cos x
$$

(b) Find the particular solution for which $y = 0$ and $\frac{dy}{dx} = 0$ at $x = 0$.

### Problem 2

(a) Find the general solution of

$$
\frac{d^2y}{dx^2} - 6\frac{dy}{dx} + 8y = 2x^2 + x
$$

(b) Find the particular solution for which $y = 1$ and $\frac{dy}{dx} = 0$ when $x = 0$.

### Problem 3

(a) Show that the transformation $y = xv$ transforms

$$
3\frac{d^2y}{dx^2} - \frac{6}{x}\frac{dy}{dx} + \frac{6y}{x^2} + 3y = x^2, \quad x \neq 0 \quad \text{(I)}
$$

into

$$
3\frac{d^2v}{dx^2} + 3v = x \quad \text{(II)}
$$

(b) Hence obtain the general solution of (I), giving your answer in the form $y = f(x)$.

### Problem 4

(a) Show that the transformation $x = t^2$ transforms

$$
4x\frac{d^2y}{dx^2} + 2(1 + 2\sqrt{x})\frac{dy}{dx} - 15y = 15x \quad \text{(I)}
$$

into

$$
\frac{d^2y}{dt^2} + 2\frac{dy}{dt} - 15y = 15t^2 \quad \text{(II)}
$$

(b) Solve (II) to determine $y$ in terms of $t$.

(c) Hence determine the general solution of (I).

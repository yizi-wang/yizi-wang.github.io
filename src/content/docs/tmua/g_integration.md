---
title: "G Integration"
---

## Module G: Integration

> **Syllabus Sections**: MM7.1, MM7.2, MM7.3, MM7.4, MM7.5, MM7.6
> **Paper Coverage**: P1 Focus (27/320 questions), P2 Covers (logic-based integration questions)
> **Recommended Time**: 2 lessons | **Target Question Count**: 15-20 questions

---

## 📋 Module Overview

| Section | Content | Syllabus | Past Paper Frequency | Lessons |
|------|------|---------|-------------|------|
| G1 | Definite Integrals and Area | MM7.1, MM7.4 | 15 times in 8 years | 0.5 |
| G2 | Integration of Power Functions | MM7.2, MM7.3 | 18 times in 8 years | 1 |
| G3 | The Trapezium Rule and Differential Equations | MM7.5, MM7.6 | 8 times in 8 years | 0.5 |

---

## G1 Definite Integrals and Area [MM7.1, MM7.4]

### 1.1 Geometric Meaning of Definite Integrals

The definite integral $\displaystyle\int_a^b f(x)\,dx$ represents the **signed area** between the curve $y = f(x)$ and the $x$-axis:
- When $f(x) > 0$, the integral value is positive (area above the $x$-axis).
- When $f(x) < 0$, the integral value is negative (area below the $x$-axis).

**⚠️ Difference Between Area and Integral**:
When calculating the area, if the curve is below the $x$-axis, you need to take the absolute value:
$$\text{Area} = \int_a^b |f(x)|\,dx$$

This may be different from directly calculating $\displaystyle\int_a^b f(x)\,dx$!

### 1.2 Area Between Curves

The area enclosed by two curves $y = f(x)$ (the upper curve) and $y = g(x)$ (the lower curve):

$$\text{Area} = \int_a^b [f(x) - g(x)]\,dx$$

**Key Steps**:
1. Find the points of intersection (solve the equation $f(x) = g(x)$) to determine the limits of integration $[a, b]$.
2. Determine which curve is on top (by choosing test points within the interval).
3. Subtract the lower curve from the upper curve, then integrate.

### 1.3 Combining Integrals [MM7.4]

**Combining Over the Same Interval**:
$$\int_a^b f(x)\,dx + \int_a^b g(x)\,dx = \int_a^b [f(x) + g(x)]\,dx$$

**Combining Adjacent Intervals**:
$$\int_a^c f(x)\,dx + \int_c^b f(x)\,dx = \int_a^b f(x)\,dx$$

**Reversing Limits**:
$$\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx$$

**⚡ Application Tip**: If a question provides $\displaystyle\int_0^q f(x)\,dx$ and $\displaystyle\int_p^r f(x)\,dx$, you can use the combining properties to find integral values for other intervals without recalculating.

---

## G2 Integration of Power Functions [MM7.2, MM7.3]

### 2.1 Basic Integration Formula

**Integration of Power Functions** ($n \neq -1$):
$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$$

**⚠️ Note**:
- When $n = -1$, $\displaystyle\int \frac{1}{x}\,dx = \ln|x| + C$ (Not tested in TMUA).
- Watch for sign changes after integrating negative indices: $\displaystyle\int x^{-2}\,dx = -x^{-1} + C$.

### 2.2 Simplify Before Integrating

Many questions require you to expand the expression before integrating:

**Example**: $\displaystyle\int (x + 2)^2\,dx$
First expand: $(x + 2)^2 = x^2 + 4x + 4$
Then integrate: $\displaystyle\int (x^2 + 4x + 4)\,dx = \frac{x^3}{3} + 2x^2 + 4x + C$

**Example**: $\displaystyle\int \frac{(3x - 5)^2}{x^{1/2}}\,dx$
First expand the numerator: $(3x - 5)^2 = 9x^2 - 30x + 25$
Divide by $x^{1/2}$: $9x^{3/2} - 30x^{1/2} + 25x^{-1/2}$
Then integrate: $9 \cdot \frac{x^{5/2}}{5/2} - 30 \cdot \frac{x^{3/2}}{3/2} + 25 \cdot \frac{x^{1/2}}{1/2}$
$= \frac{18}{5}x^{5/2} - 20x^{3/2} + 50x^{1/2} + C$

### 2.3 The Fundamental Theorem of Calculus [MM7.3]

**First Form**:
$$\int_a^b f(x)\,dx = F(b) - F(a)$$
Where $F'(x) = f(x)$, meaning $F$ is the antiderivative of $f$.

**Second Form**:
$$\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$$

**Application Scenarios**:
- If the expression for $\displaystyle\int_0^x f(t)\,dt$ is known, differentiating it with respect to $x$ yields $f(x)$.
- The inverse relationship between antiderivatives and derivatives is used in comprehensive questions (e.g., 2022 P1 Q3).

---

## G3 The Trapezium Rule and Differential Equations [MM7.5, MM7.6]

### 3.1 The Trapezium Rule

Use $n$ equally spaced trapeziums to approximate the integral $\displaystyle\int_a^b f(x)\,dx$:

$$\int_a^b f(x)\,dx \approx \frac{h}{2}\left[y_0 + 2(y_1 + y_2 + \cdots + y_{n-1}) + y_n\right]$$

Where $h = \frac{b - a}{n}$ and $y_i = f(x_i)$.

**Overestimate and Underestimate Analysis**:
- Curve is **concave up** (e.g., $\sin^2 x$ in its increasing section) → Trapezium rule **overestimates**
- Curve is **concave down** (e.g., $\cos^2 x$ in its increasing section) → Trapezium rule **underestimates**

**⚡ Quick Judgement Tip**: Consider the concavity; chords lie above a concave up curve, making the trapezium area larger.

### 3.2 Solving Differential Equations [MM7.6]

Differential equations of the form $\displaystyle\frac{dy}{dx} = f(x)$:

**Solving Steps**:
1. Integrate both sides: $y = \int f(x)\,dx + C$
2. Use the initial condition (e.g., when $x = 1$, $y = 5$) to determine $C$.
3. Write the complete expression for $y$.

**⚠️ Common Mistakes**:
- Fractional terms in the integrand must be written in index form before integrating.
- Do not forget the constant of integration $C$.
- Simplify the expression before substituting the initial condition.

---

## Three Typical Question Types and Strategies

### Type A: Integral Calculation (Simplify + Integrate Term by Term)

**Identifying Features**: The integrand contains brackets or fractions and needs to be expanded first.

**Solving Strategy**:
1. Expand brackets or split fractions.
2. Convert to the index form $x^n$.
3. Integrate term by term and combine the results.

**Example Features**:
- $\displaystyle\int (x^2 - \frac{4}{x^2})^2\,dx$ (2016 P2 Q1)
- $\displaystyle\int \frac{3 - 2x}{x\sqrt{x}}\,dx$ (2018 P1 Q1)

### Type B: Area Problems (Find Intersections + Upper minus Lower)

**Identifying Features**: Find the area enclosed by a curve and an axis, or between two curves.

**Solving Strategy**:
1. Find the points of intersection to determine the limits of integration.
2. Identify the upper and lower curves (or determine if the curve is above/below the axis).
3. Integrate the upper curve minus the lower curve, making sure to take the absolute value if necessary.

**Example Features**:
- Area enclosed by $y = x^2 - 1$ and the $x$-axis (2016 P1 Q5)
- Area enclosed by $y = p\sqrt{x}$ and $x = p\sqrt{y}$ (2019 P1 Q9)

### Type C: Trapezium Rule Error Analysis

**Identifying Features**: Determine whether the trapezium approximation is an overestimate or an underestimate.

**Solving Strategy**:
1. Analyse the concavity of the curve (concave up or concave down).
2. Use symmetry (reflection of an even function does not change the direction of the error).
3. Use complementary relationships (e.g., $\sin^2 x + \cos^2 x = 1$).

---

## ⚡ Quick Solving Tips Summary

| Scenario | Tip |
|------|------|
| Integrating fractions | Rewrite as powers $x^{-n}$ first, then apply the formula. |
| Integrating brackets | Expand! Do not integrate $(x+2)^2$ directly. |
| Negative indices | The sign will change: $x^{-2} \to -x^{-1}$. |
| Area problems | Sketch a graph to determine the upper/lower curves. |
| Trapezium error | Consider the concavity; chords lie above a concave up curve. |
| Differential equations | Integrate first, then use the initial condition to find the constant. |

## ⚠️ Common Pitfalls

- ❌ The integration formula is $\frac{x^{n+1}}{n+1}$, **not** $nx^{n-1}$ (which is the differentiation formula).
- ❌ $\displaystyle\int x^{-2}\,dx = -x^{-1} + C$, **not** $x^{-1} + C$ (watch out for the sign change with negative indices).
- ❌ Integrating directly to find the area and **forgetting to take the absolute value** (when the curve is below the axis).
- ❌ **Forgetting the integration constant $C$** when solving differential equations.
- ❌ In the trapezium rule formula, **the coefficient of the middle terms is 2**, while the first and last terms have a coefficient of 1.

---

## 📝 Selected Examples

### Example 1 (2017 P1 Q1 · Solving Differential Equations)

**Question**: Given that

$$\frac{dy}{dx} = 3x^2 - \frac{2-3x}{x^3}, \quad x \neq 0$$

and $y = 5$ when $x = 1$, find the expression for $y$ in terms of $x$.

**[Question Analysis]**
This question tests finding the antiderivative. Given the derivative expression, you need to integrate each term separately and then use the initial condition to determine the constant of integration.

**[Solving Steps]**
Step 1: Simplify the integrand. Rewrite the fractional terms in index form:
$$\frac{dy}{dx} = 3x^2 - \frac{2-3x}{x^3} = 3x^2 - \frac{2}{x^3} + \frac{3x}{x^3} = 3x^2 - 2x^{-3} + 3x^{-2}$$

Step 2: Integrate term by term. Use the integration formula for power functions:
$$y = \int (3x^2 - 2x^{-3} + 3x^{-2})\,dx = x^3 + x^{-2} - 3x^{-1} + C$$

Step 3: Substitute the initial condition. When $x = 1$, $y = 5$:
$$5 = 1^3 + 1^{-2} - 3 \cdot 1^{-1} + C = 1 + 1 - 3 + C = -1 + C$$
Solving gives $C = 6$.

Therefore, $y = x^3 + x^{-2} - 3x^{-1} + 6$.

**[Quick Shortcut]**
After integrating term by term, simply substitute $x = 1$ to find the constant. Be careful with splitting the signs in $(2-3x)/x^3$; it is safer to rewrite it in index form before integrating.

**[Correct Answer]** C

**[Knowledge Point]** Integration | **Syllabus**: MM7.2, MM7.6

---

### Example 2 (2019 P1 Q9 · Area Between Curves)

**Question**: $p$ is a positive constant. Find the area enclosed by the curves $y = p\sqrt{x}$ and $x = p\sqrt{y}$.

**[Question Analysis]**
The two curves are inverse functions of each other, so their graphs are symmetric about $y = x$. After finding the points of intersection to determine the limits of integration, integrate the upper curve minus the lower curve.

**[Solving Steps]**
Step 1: Write the explicit forms of both curves.
From $y = p\sqrt{x}$, we get $y^2 = p^2 x$, so $x = \frac{y^2}{p^2}$.
From $x = p\sqrt{y}$, we get $x^2 = p^2 y$, so $y = \frac{x^2}{p^2}$.

Step 2: Find the points of intersection.
Substituting gives $\frac{y^2}{p^2} = p\sqrt{y}$, which simplifies to $y^4 = p^6 y$.
$y(y^3 - p^6) = 0$, giving $y = 0$ or $y = p^2$.

When $y = p^2$: $x = p\sqrt{p^2} = p^2$.
The points of intersection are $(0, 0)$ and $(p^2, p^2)$.

Step 3: Integrate to find the area.
On the interval $[0, p^2]$, $y = p\sqrt{x}$ is the upper curve and $y = \frac{x^2}{p^2}$ is the lower curve.

$$\text{Area} = \int_0^{p^2} \left(p\sqrt{x} - \frac{x^2}{p^2}\right)\,dx = \left[\frac{2}{3}px^{3/2} - \frac{x^3}{3p^2}\right]_0^{p^2}$$

$$= \frac{2}{3}p(p^2)^{3/2} - \frac{(p^2)^3}{3p^2} = \frac{2}{3}p^4 - \frac{p^4}{3} = \frac{p^4}{3}$$

**[Quick Shortcut]**
The two curves are inverse functions, so their intersections lie on $y = x$. Directly substitute $y = x$ to solve $x^2 = p^2 x$, giving $x = p^2$ (ignoring $x = 0$). Using symmetry, the area is $\displaystyle\int_0^{p^2}(p\sqrt{x} - \frac{x^2}{p^2})\,dx$.

**[Correct Answer]** D ($\frac{p^4}{3}$)

**[Knowledge Point]** Integration | **Syllabus**: MM7.1

---

### Example 3 (2019 P2 Q13 · Trapezium Rule Error Analysis)

**Question**: A student uses the trapezium rule with 4 sub-intervals to approximate $\displaystyle\int_a^b \sin^2 x\,dx$, and the result is an overestimate.

Determine which of the following statements **must** be true:

- **I** If the same method is used to approximate $\displaystyle\int_{-b}^{-a} \sin^2 x\,dx$, the result will still be an overestimate.
- **II** If the same method is used to approximate $\displaystyle\int_a^b \cos^2 x\,dx$, the result will be an underestimate.

**[Question Analysis]**
This tests the error analysis of the trapezium rule and function symmetry. Make use of the even function symmetry and the complementary relationship $\sin^2 x + \cos^2 x = 1$.

**[Solving Steps]**
Statement I: $\sin^2 x$ is an even function, so its graph is symmetric about the $y$-axis.
Reflecting the trapeziums on the original interval $[a, b]$ across the $y$-axis gives exactly the trapeziums on $[-b, -a]$. The geometry is completely symmetric, so the direction of the error remains unchanged. Statement I is true.

Statement II: Using $\sin^2 x + \cos^2 x = 1$, we have $\cos^2 x = 1 - \sin^2 x$.
The graph of $\cos^2 x$ is the reflection of $\sin^2 x$ across the line $y = \frac{1}{2}$.
The sum of the trapezium areas for $\sin^2 x$ and $\cos^2 x$ equals the area of the rectangle (with a height of 1), which is an exact value.
If the trapezium approximation for $\sin^2 x$ is an overestimate $\Rightarrow$ the trapezium approximation for $\cos^2 x$ must be an underestimate. Statement II is true.

**[Quick Shortcut]**
Reflecting an even function does not change the error (Statement I); For the complementary relationship $\sin^2 x + \cos^2 x = 1$, if one is an overestimate, the other must be an underestimate (Statement II).

**[Correct Answer]** D (Both I and II are true)

**[Knowledge Point]** Integration | **Syllabus**: MM7.5

---

## 🏋️ Post-Lesson Practice (15 Minutes Time Limit)

| # | Question | Topic | Syllabus | Difficulty |
|---|------|------|---------|------|
| 1 | 2016 P1 Q5 | Area + Piecewise Integration | MM7.1 | ⭐⭐⭐ |
| 2 | 2016 P2 Q1 | Expand then Integrate | MM7.2 | ⭐⭐⭐ |
| 3 | 2018 P1 Q1 | Integrating Fractions | MM7.2 | ⭐⭐⭐ |
| 4 | 2017 P1 Q12 | Properties of Integrals | MM7.4 | ⭐⭐⭐ |
| 5 | 2017 P1 Q17 | Integrals and Summations | MM7.3, MM7.4 | ⭐⭐⭐⭐ |
| 6 | 2022 P1 Q3 | Fundamental Theorem of Calculus | MM7.3 | ⭐⭐⭐⭐ |
| 7 | 2022 P1 Q6 | Definite Integrals + Logarithms | MM7.2, MM5 | ⭐⭐⭐ |
| 8 | 2023 P1 Q1 | Combining Integrals + Undetermined Coefficients | MM7.4 | ⭐⭐⭐ |

---

*For full step-by-step solutions, please refer to the question bank database. Each question includes **[Solving Steps]** and **[Quick Shortcut]**.*

---

## 🎯 Complementary Practice

Finished this chapter? [→ Go to Integration practice questions](/practice/tmua/?topic=Integration)

---

*Notes Version: v1.0 | Generated: 2026-04-29*

---
title: "F Differentiation"
---

## Module F: Differentiation

> **Corresponding Syllabus Section**: MM6.1, MM6.2, MM6.3
> **Corresponding Papers**: P1 focus (24/320 questions), P2 involves (monotonicity proofs, extrema judgment)
> **Recommended Hours**: 2 hours | **Target Number of Questions**: 15-20 questions

---

## 📋 Module Overview

| Section | Content | Corresponding Syllabus | Past Paper Frequency | Hours |
|---------|---------|------------------------|----------------------|-------|
| F1 | Derivatives and Tangent/Normal Lines | MM6.1, MM6.3 | 8 times in 8 years | 0.5 |
| F2 | Differentiation of Power Functions | MM6.2 | 6 times in 8 years | 0.5 |
| F3 | Stationary Points and Extrema | MM6.3 | 5 times in 8 years | 0.5 |
| F4 | Determining Monotonicity | MM6.3 | 5 times in 8 years | 0.5 |

---

## F1 Derivatives and Tangent/Normal Lines [MM6.1, MM6.3]

### 1.1 Geometric Meaning of the Derivative

The derivative $f'(x)$ is the **slope of the tangent line** to the curve $y = f(x)$ at the point $(x, f(x))$.

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Understanding the geometric meaning of the derivative**:
- $f'(x) > 0$: The tangent has a positive slope; the curve is sloping upwards to the right at that point.
- $f'(x) < 0$: The tangent has a negative slope; the curve is sloping downwards to the right at that point.
- $f'(x) = 0$: The tangent is horizontal; the point may be an extremum.
- Derivative does not exist: The tangent is vertical (e.g., $y = \sqrt{x}$ at $x = 0$) or the function is not smooth.

**⚠️ Note**: TMUA does not test "differentiation from first principles"; you only need to master the differentiation formulas for power functions and their applications.

### 1.2 Equations of Tangent and Normal Lines

**Equation of Tangent Line**: Passing through the point $(x_0, y_0)$ with slope $f'(x_0)$

$$y - y_0 = f'(x_0)(x - x_0)$$

**Equation of Normal Line**: The normal is perpendicular to the tangent, so its slope is the negative reciprocal.

$$m_{\text{normal}} = -\frac{1}{f'(x_0)}$$

**Special cases**:
- If $f'(x_0) = 0$ (horizontal tangent), the normal is vertical (slope is undefined).
- If the tangent is vertical, the normal is horizontal (slope is 0).

### 1.3 Intercepts of Tangent/Normal Lines with Coordinate Axes

Given a tangent/normal line equation $y = mx + c$ or $y - y_0 = m(x - x_0)$:

- **$x$-intercept**: Set $y = 0$, solve for $x$.
- **$y$-intercept**: Set $x = 0$, solve for $y$.

The distance between two points $P(a, 0)$ and $Q(0, b)$:

$$PQ = \sqrt{a^2 + b^2}$$

---

## F2 Differentiation of Power Functions [MM6.2]

### 2.1 Basic Formulas

The derivative formula for a power function $x^n$:

$$\frac{d}{dx} x^n = nx^{n-1}$$

**Applicability**: $n$ can be any real number (positive integers, negative numbers, fractions).

**Common examples**:
- $\frac{d}{dx} x^3 = 3x^2$
- $\frac{d}{dx} x^{-2} = -2x^{-3}$
- $\frac{d}{dx} x^{\frac{1}{2}} = \frac{1}{2}x^{-\frac{1}{2}}$
- $\frac{d}{dx} x^{-\frac{3}{2}} = -\frac{3}{2}x^{-\frac{5}{2}}$

### 2.2 Rules of Differentiation

**Sum and Difference Rule** (Linearity):

$$\frac{d}{dx} [af(x) + bg(x)] = af'(x) + bg'(x)$$

**Product Rule**:

$$\frac{d}{dx} [f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)$$

**⚠️ Common TMUA Strategy**: When encountering fractional functions with radicals, expand first before differentiating to avoid using the quotient rule.

For example:
$$\frac{(x^2 + 5)(2x)}{\sqrt[4]{x^3}} = \frac{2x^3 + 10x}{x^{\frac{3}{4}}} = 2x^{\frac{9}{4}} + 10x^{\frac{1}{4}}$$

Then differentiate term by term: $f'(x) = \frac{9}{2}x^{\frac{5}{4}} + \frac{5}{2}x^{-\frac{3}{4}}$

### 2.3 Second Derivative

$$f''(x) = \frac{d}{dx} f'(x) = \frac{d^2y}{dx^2}$$

**Geometric meaning**:
- $f''(x) > 0$: The curve is bending upwards at that point (concave up).
- $f''(x) < 0$: The curve is bending downwards at that point (concave down).
- **Stationary point criterion**: If $f'(x_0) = 0$ and $f''(x_0) < 0$, then $x_0$ is a local maximum point.

---

## F3 Stationary Points and Extrema [MM6.3]

### 3.1 Stationary Points

Stationary points are points where the derivative is zero: $f'(x_0) = 0$.

**Determining the type of stationary point**:
| Condition | Type |
|-----------|------|
| $f'(x_0) = 0$ and $f''(x_0) > 0$ | Local minimum |
| $f'(x_0) = 0$ and $f''(x_0) < 0$ | Local maximum |
| $f'(x_0) = 0$ and $f''(x_0) = 0$ | Needs further investigation (could be a point of inflexion) |

**⚠️ TMUA Note**: The syllabus indicates that points of inflexion will not be tested separately, but students need to understand the concept of a point of inflexion for simple polynomial curves.

### 3.2 Extrema Problems

**Global Extrema**: The absolute maximum/minimum values of a function over its entire domain.

**Local Extrema**: The maximum/minimum values of a function within a certain interval.

**Problem-solving strategy**:
1. Find all stationary points ($f'(x) = 0$).
2. Calculate the function values at the stationary points.
3. Check the boundary points (if the domain is finite).
4. Compare all candidate values to select the maximum/minimum.

### 3.3 Extrema with Parameters

When a function contains a parameter $a$, the extrema may vary with $a$. Approach:

1. Differentiate to get the condition for stationary points involving $a$.
2. Substitute the specific value of $x$ to get a function of $a$ for the extrema.
3. Differentiate again with respect to $a$ to find the extrema of this new function (often a quadratic function extrema problem).

---

## F4 Determining Monotonicity [MM6.3]

### 4.1 Increasing and Decreasing

**Strictly increasing**: $f'(x) > 0$ for all $x$ in the interval.

**Strictly decreasing**: $f'(x) < 0$ for all $x$ in the interval.

**⚠️ The Equality Trap**: The syllabus emphasizes "strictly", meaning the inequalities should not include the "or equal to" sign.

### 4.2 Finding Monotonic Intervals

Divide monotonic intervals by analyzing the sign changes of $f'(x)$:

1. Solve the equation $f'(x) = 0$ to find stationary points.
2. Choose test points within each interval partitioned by the stationary points.
3. Determine the sign of $f'(x)$.

### 4.3 Using Monotonicity to Determine the Number of Roots

Suppose $f(x)$ is continuous and monotonic over a certain interval:

- If $f(a) < 0$ and $f(b) > 0$ (monotonically increasing), then there is exactly one root.
- If $f(a) > 0$ and $f(b) < 0$ (monotonically decreasing), then there is exactly one root.

**Application of the Intermediate Value Theorem**: Combined with the analysis of endpoint trends, this can be used to determine the number of real roots for complex functions like quintic equations.

---

## ⚡ Fast Solution Tips Summary

| Scenario | Tip |
|----------|-----|
| Differentiating fractions with radicals | Expand first before differentiating to avoid the quotient rule. |
| Slope of the normal line | Take the negative reciprocal, $m \to -\frac{1}{m}$. |
| Identifying stationary points | Second derivative method: $f''(x_0) > 0$ for a local minimum, $f''(x_0) < 0$ for a local maximum. |
| Monotonic intervals | Find stationary points, then draw a sign table for the derivative. |
| Extrema problems | Compare the values at stationary points and boundary points. |
| Extrema with parameters | Find the extrema of the resulting quadratic function with respect to the parameter. |
| Distance from tangent to coordinate axes | The $x$-intercept and $y$-intercept form the hypotenuse of a right-angled triangle. |

---

## ⚠️ Common Mistakes Warnings

- ❌ **Not simplifying** before differentiating, leading to complicated and error-prone calculations — expand into a sum of power functions first.
- ❌ Writing the normal slope as $-f'(x_0)$, **forgetting to take the reciprocal** — the correct form is $-\frac{1}{f'(x_0)}$.
- ❌ When the tangent is horizontal, still writing the normal slope as $-\frac{1}{0}$ — in this case, the normal is vertical, and the slope is undefined.
- ❌ Reversing the sign of the second derivative — $f'' > 0$ corresponds to a local minimum (bowl facing up).
- ❌ Including interval endpoints as $x \leq a$ — strict monotonicity should not include the equal sign.
- ❌ Missing the discriminant analysis when determining the number of stationary points — need to check if $f'(x) = 0$ has real roots.
- ❌ Getting the sign wrong when differentiating power functions with negative exponents — for example, the derivative of $x^{-2}$ is $-2x^{-3}$, note the negative signs in both places.

---

## 📝 Selected Examples

### Example 1 (2016 P1 Q3 · Normal Lines and Coordinate Axes)

**Question**: The normal to the curve $y = \frac{2}{x^2}$ at $x = 1$ intersects the $x$-axis at $P$ and the $y$-axis at $Q$. Find the length of $PQ$.

【Question Analysis】
This question tests the geometric meaning of derivatives and normal line equations. First, find the derivative (tangent slope) of the curve at the given point, take the negative reciprocal to get the normal slope, write down the normal equation to find its intersections with the two coordinate axes, and finally use the distance formula to calculate $PQ$.

【Step-by-Step Solution】
Step 1: Find the coordinates of the point of tangency.

When $x = 1$, $y = \dfrac{2}{1^2} = 2$, so the point of tangency is $(1, 2)$.

Step 2: Find the derivative and the tangent slope.

$$y = 2x^{-2} \quad \Rightarrow \quad \frac{dy}{dx} = -4x^{-3} = -\frac{4}{x^3}$$

At $x = 1$, the tangent slope is $y'(1) = -4$.

Step 3: Find the normal slope and the normal equation.

The normal slope is the negative reciprocal of the tangent slope:

$$m_{\text{normal}} = -\frac{1}{-4} = \frac{1}{4}$$

The normal passes through the point $(1, 2)$, so its equation is:

$$y - 2 = \frac{1}{4}(x - 1)$$

Step 4: Find the intersections with the coordinate axes.

Intersection $P$ with the $x$-axis: Let $y = 0$, giving $-2 = \dfrac{1}{4}(x-1)$, which solves to $x = -7$, so $P(-7, 0)$.

Intersection $Q$ with the $y$-axis: Let $x = 0$, giving $y - 2 = -\dfrac{1}{4}$, which solves to $y = \dfrac{7}{4}$, so $Q\!\left(0, \dfrac{7}{4}\right)$.

Step 5: Calculate the length of $PQ$.

$$PQ = \sqrt{(-7)^2 + \left(\frac{7}{4}\right)^2} = \sqrt{49 + \frac{49}{16}} = \sqrt{\frac{833}{16}}$$

Note that $833 = 49 \times 17$, therefore:

$$PQ = \frac{\sqrt{49 \times 17}}{4} = \frac{7\sqrt{17}}{4}$$

【Fast Solution Approach】
The normal slope is $m = \dfrac{1}{4}$, and the absolute value of the $x$-intercept is $7$. Using the slope and the $x$-intercept, we can directly write the hypotenuse $PQ = 7 \times \dfrac{\sqrt{1^2+4^2}}{4} = \dfrac{7\sqrt{17}}{4}$, saving the step of separately finding the coordinates of point $Q$.

【Correct Answer】C ($\dfrac{7\sqrt{17}}{4}$)

【Knowledge Points】Differentiation, Coordinate Geometry | **Syllabus**: MM6.1, MM6.3

---

### Example 2 (2016 P1 Q12 · Maximum Volume of an Inscribed Cylinder)

**Question**: A cylinder is inscribed in a sphere of radius 5 cm. The entire circumference of each end face of the cylinder is in contact with the sphere. Find the maximum volume of the cylinder.

【Question Analysis】
This question tests the volume optimization problem of an inscribed geometric solid. The cylinder is inscribed in a sphere. Use the Pythagorean theorem in a cross-section to establish the relationship between the variables, express the volume as a single-variable function, and then use the derivative to find the maximum value.

【Step-by-Step Solution】
Step 1: Establish the geometric relationship.

Let the sphere radius be $R = 5$. Take a cross-section passing through the center of the sphere. Let the radius of the base of the cylinder be $r$, and half of the cylinder's height be $h$ (which is the distance from the center of the sphere to the base of the cylinder).

By the Pythagorean theorem:

$$h^2 + r^2 = 5^2 = 25$$

So $r^2 = 25 - h^2$.

The total height of the cylinder is $2h$, and its volume is:

$$V = \pi r^2 (2h) = \pi(25 - h^2)(2h) = 2\pi(25h - h^3)$$

Step 2: Differentiate to find the extreme point.

$$\frac{dV}{dh} = 2\pi(25 - 3h^2)$$

Set the derivative to zero:

$$25 - 3h^2 = 0 \quad \Rightarrow \quad h^2 = \frac{25}{3} \quad \Rightarrow \quad h = \frac{5}{\sqrt{3}}$$

Verify that it's a maximum: $\frac{d^2V}{dh^2} = -12\pi h < 0$ (since $h > 0$), confirming it is indeed a local maximum.

Step 3: Calculate the maximum volume.

$$r^2 = 25 - \frac{25}{3} = \frac{50}{3}$$

The height of the cylinder is $2h = \frac{10}{\sqrt{3}} = \frac{10\sqrt{3}}{3}$.

Maximum volume:

$$V_{\max} = \pi \cdot \frac{50}{3} \cdot \frac{10\sqrt{3}}{3} = \frac{500\sqrt{3}}{9}\pi$$

【Fast Solution Approach】
Classic conclusion for the maximum volume of an inscribed cylinder: optimal when the distance from the center of the sphere to the end face is $h = \frac{R}{\sqrt{3}}$. Substituting $R = 5$ gives $h = \frac{5}{\sqrt{3}}$, $r^2 = \frac{2}{3}R^2 = \frac{50}{3}$, and the volume is $\frac{500\sqrt{3}}{9}\pi$.

【Correct Answer】E ($\dfrac{500\sqrt{3}}{9}\pi$)

【Knowledge Points】Differentiation, Coordinate Geometry | **Syllabus**: MM6.2, MM6.3

---

### Example 3 (2016 P1 Q13 · Determining the Number of Real Roots)

**Question**: How many real roots does the equation $3x^5 - 10x^3 - 120x + 30 = 0$ have?

【Question Analysis】
This question tests the use of derivatives to study the monotonicity of polynomial functions and the number of real roots. Differentiate the quintic equation $3x^5-10x^3-120x+30=0$ to find the critical points, and use the Intermediate Value Theorem to determine the number of roots interval by interval.

【Step-by-Step Solution】
Let $f(x)=3x^5-10x^3-120x+30$. Differentiating gives:

$$f'(x)=15x^4-30x^2-120=15(x^2-4)(x^2+2)$$

Since $x^2+2>0$ for all real $x$, the zeros of the derivative are $x=\pm 2$.

Analyzing the sign of the derivative:
- $x < -2$: $f' > 0$ (increasing)
- $-2 < x < 2$: $f' < 0$ (decreasing)
- $x > 2$: $f' > 0$ (increasing)

Calculate the extrema (we only need the sign):

$$f(-2)=-96+80+240+30>0, \quad f(2)=96-80-240+30<0$$

Combining with the endpoint trends:
- As $x \to -\infty$, $f \to -\infty$
- As $x \to +\infty$, $f \to +\infty$

Determine the roots interval by interval using the Intermediate Value Theorem:
- $(-\infty, -2)$: Increasing from $-\infty$ to a positive value $f(-2) > 0$ → 1 root
- $(-2, 2)$: Decreasing from a positive value $f(-2)$ to a negative value $f(2) < 0$ → 1 root
- $(2, +\infty)$: Increasing from a negative value $f(2)$ to $+\infty$ → 1 root

There are 3 real roots in total.

【Fast Solution Approach】
The derivative zeros $\pm 2$ divide the domain into three monotonic intervals. The left end approaches $-\infty$, the right end approaches $+\infty$, and the intermediate extrema are $f(-2) > 0$ and $f(2) < 0$, meaning there is exactly one root in each of the three sections.

【Correct Answer】C (3 roots)

【Knowledge Points】Differentiation, Graphs, Algebra | **Syllabus**: MM6.3

---

## 🏋️ After-Class Practice (15 Minutes Time Limit)

| # | Question ID | Topic | Corresponding Syllabus | Difficulty |
|---|-------------|-------|------------------------|------------|
| 1 | 2016 P1 Q15 | Extrema with Parameters | MM6.2, MM6.3 | ⭐⭐⭐ |
| 2 | 2016 P1 Q18 | Determining Monotonicity | MM6.3 | ⭐⭐⭐ |
| 3 | 2016 P2 Q2 | Differentiation of Power Functions | MM6.2 | ⭐⭐ |
| 4 | 2017 P1 Q2 | Second Derivative | MM6.1 | ⭐⭐ |
| 5 | 2017 P1 Q10 | Extrema of Normal Slopes | MM6.1, MM6.3 | ⭐⭐⭐⭐ |
| 6 | 2017 P1 Q16 | Monotonicity of Two Functions | MM6.3 | ⭐⭐⭐ |
| 7 | 2018 P1 Q11 | Normal Lines and Parabolas | MM6.1, MM6.3 | ⭐⭐⭐ |
| 8 | 2018 P1 Q13 | Derivative Graph Analysis | MM6.1, MM6.3 | ⭐⭐⭐ |

---

*For full solutions, please refer to the question bank database. Each question includes 【Step-by-Step Solution】 and 【Fast Solution Approach】.*

---

## 📌 Syllabus Quick Reference

### MM6.1 Definition and Understanding of the Derivative

- Derivative as the gradient of a tangent to a graph
- Derivative as a rate of change
- Second derivative
- Notation: $\frac{dy}{dx}$, $\frac{d^2y}{dx^2}$, $f'(x)$, $f''(x)$

### MM6.2 Differentiation of Power Functions

- Derivative of $x^n$ (where $n$ is any real number)
- Derivative of a sum or difference
- **Need to simplify before differentiating**: e.g. $\frac{(3x+2)^2}{x^{\frac{1}{2}}}$

### MM6.3 Applications

- Equations of tangent and normal lines
- Stationary points (local maximum and local minimum)
- Strictly increasing ($f' > 0$)
- Strictly decreasing ($f' < 0$)
- **Points of inflexion will not be tested separately**

---

## 🎯 Companion Exercises

Finished this chapter? [→ Go to Differentiation practice questions](/practice/tmua/?topic=Differentiation)

---

*These lecture notes are compiled based on the TMUA 2016-2023 past papers. All examples are from real exams.*

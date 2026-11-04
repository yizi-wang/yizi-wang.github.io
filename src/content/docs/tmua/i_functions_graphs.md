---
title: "I Functions and Graphs"
---

## Module I: Functions and Graphs

> **Corresponding Syllabus Section 1**: MM1.7, MM8.1-MM8.7
> **Corresponding Paper**: P1 Foundation Types + P2 Reasoning Types (22/320 questions)
> **Suggested Lessons**: 2 Lessons | **Target Question Volume**: 15-20 Questions

---

## 📋 Module Overview

| Sub-section | Content | Corresponding Syllabus | Past Paper Frequency | Lessons |
|-------------|---------|------------------------|----------------------|---------|
| I1 | Function Definition and Properties | MM1.7 | 6 times in 6 years | 0.5 |
| I2 | Common Function Graphs | MM8.1, MM8.3-MM8.4 | 12 times in 8 years | 0.5 |
| I3 | Graph Transformations | MM8.2 | 8 times in 8 years | 0.5 |
| I4 | Derivatives and Function Shapes | MM8.5 | 10 times in 8 years | 0.3 |
| I5 | Number of Roots of Equations | MM8.6-MM8.7 | 8 times in 8 years | 0.2 |

---

## I1 Function Definition and Properties [MM1.7]

### 1.1 The Essence of Functions

A function is a **mapping relationship**: each input $x$ corresponds to a **unique** output $y$.

$$y = f(x)$$

Key understanding: A function is a **many-to-one or one-to-one** mapping, not a one-to-many mapping. The same $x$ cannot correspond to different $y$ values.

**⚠️ Common Misconception**: Students often think functions must be one-to-one (like linear functions), but actually many-to-one is also valid (like $y = x^2$, both $x = 2$ and $x = -2$ correspond to $y = 4$).

### 1.2 Common Function Properties

| Function Type | Domain | Monotonicity | Special Properties |
|---------------|--------|--------------|--------------------|
| $y = \sqrt{x}$ | $x \geq 0$ | Strictly increasing | Positive square root, $y \geq 0$ |
| $y = |x|$ | All real numbers | Decreasing for $x<0$, increasing for $x>0$ | $V$-shaped graph, symmetric about the $y$-axis |
| $y = x^n$ (Odd $n$) | All real numbers | Strictly increasing | Passes through the origin, symmetric about the origin |
| $y = x^n$ (Even $n$) | All real numbers | Decreasing for $x<0$, increasing for $x>0$ | Passes through the origin, symmetric about the $y$-axis |

### 1.3 Monotonicity of Functions and Inequalities

If a function $f$ is **strictly monotonically increasing** over the entire domain of real numbers, then:

$$f(x) < f(y) \iff x < y$$

This is the key basis for determining whether an inequality can imply a magnitude relationship [2016 P2 Q10].

**Application Scenario**: Given $f(x) < f(y)$, can we deduce $x < y$? Simply check whether $f$ is strictly increasing on $\mathbb{R}$.

---

## I2 Common Function Graphs [MM8.1, MM8.3-MM8.4]

### 2.1 Six Core Graphs

Function graphs required by the TMUA syllabus to recognize and be able to sketch:

| Function Type | Graph Features | Key Points | TMUA Focus |
|---------------|----------------|------------|------------|
| **Linear Function** $y = mx + c$ | Straight line | Gradient $m$, $y$-intercept $c$ | MM8.3 |
| **Quadratic Function** $y = a(x+b)^2+c$ | Parabola | Vertex $(-b, c)$, opening direction determined by $a$ | MM8.4 |
| **Cubic Function** $y = x^3$ | S-shaped curve | Passes through the origin, monotonically increasing | MM8.1 |
| **Exponential Function** $y = a^x$ | Asymptotic rise | Passes through $(0,1)$, increasing when $a>1$ | MM8.1 |
| **Logarithmic Function** $y = \log_a x$ | Asymptotic curve | Passes through $(1,0)$, increasing when $a>1$ | MM8.1 |
| **Absolute Value Function** $y = |x|$ | V-shaped | Vertex at the origin, symmetric about the $y$-axis | MM1.7 |

### 2.2 Influence of Parameters on Quadratic Functions [MM8.4]

Standard form: $y = a(x+b)^2 + c$

- **$a$**: Controls the opening direction and width
  - $a > 0$: Opens upwards
  - $a < 0$: Opens downwards
  - The larger $|a|$ is, the narrower the opening (steeper curve)

- **$b$**: Controls the $x$-coordinate of the vertex (vertex at $x = -b$)
- **$c$**: Controls the $y$-coordinate of the vertex (vertex at $y = c$)

**⚡ Quick Completing the Square Trick**: For $y = x^2 + px + q$, after completing the square, the vertex is at $\left(-\frac{p}{2}, q - \frac{p^2}{4}\right)$.

---

## I3 Graph Transformations [MM8.2]

### 3.1 Four Basic Transformations

Let the original function be $y = f(x)$, the four transformations and their effects:

| Transformation | Expression | Effect | ⚠️ Common Mistakes |
|----------------|------------|--------|--------------------|
| **Vertical Stretch** | $y = af(x)$ | Multiply $y$-coordinates by $a$ | $a<0$ causes vertical reflection |
| **Vertical Translation** | $y = f(x) + a$ | Shift upwards by $a$ units | Positive means up, negative means down |
| **Horizontal Translation** | $y = f(x + a)$ | Shift **left** by $a$ units | Opposite sign: $+a$ means left, $-a$ means right |
| **Horizontal Stretch** | $y = f(ax)$ | Horizontal compression by factor of $\frac{1}{a}$ | Opposite to vertical stretch |

### 3.2 Transformation Order and Composition [MM8.2]

When multiple transformations are combined, the **order is crucial**:

$$y = 2f(x+3)$$

Steps:
1. Translate first: $f(x) \to f(x+3)$ (shift left by 3 units)
2. Stretch then: $f(x+3) \to 2f(x+3)$ (vertical stretch by a factor of 2)

**⚡ Quick Solving Tip**:
- Translations inside brackets: left is addition, right is subtraction (counter-intuitive)
- Stretches outside brackets: vertical stretch is normal, horizontal stretch is reversed

### 3.3 Special Transformations of Logarithmic Functions [2017 P1 Q18]

Logarithmic functions have a unique property: **vertical translation is equivalent to horizontal stretch**

$$y = \log_{10}x + k = \log_{10}(10^k \cdot x)$$

This means:
- Shift upwards by $k$ units $\Leftrightarrow$ horizontal stretch by a factor of $10^k$

**Application**: If a question asks "what horizontal stretch is equivalent to shifting upwards by 2 units", calculate directly $k = 10^2 = 100$, so the scale factor is $\frac{1}{100}$ (compression).

---

## I4 Derivatives and Function Shapes [MM8.5]

### 4.1 Geometric Meaning of the Derivative

The derivative $f'(x)$ is the gradient of the tangent line, determining the increasing or decreasing trend of the function:

| Sign of Derivative | Function Behaviour | Graph Feature |
|--------------------|--------------------|---------------|
| $f'(x) > 0$ | Strictly increasing | Curve rises |
| $f'(x) < 0$ | Strictly decreasing | Curve falls |
| $f'(x) = 0$ | Stationary point (Turning point) | Vertex or turning point |

### 4.2 Stationary Points and Extrema

Three-step method to find stationary points [MM8.5]:

1. **Find derivative**: $f'(x) = \cdots$
2. **Find stationary points**: Set $f'(x) = 0$ and solve for $x$
3. **Determine nature**:
   - $f'(x)$ changes from positive to negative → Local maximum
   - $f'(x)$ changes from negative to positive → Local minimum
   - Or use the second derivative: $f''(x) < 0$ for maximum, $f''(x) > 0$ for minimum

### 4.3 Using Derivatives to Determine the Number of Roots

**Core Idea**: The stationary points of a function determine the "undulations" of its graph, which in turn determines the possible number of intersections with a horizontal line [2016 P1 Q13].

For example, a cubic function:
- If it has two stationary points (maximum + minimum), it can intersect a horizontal line at most 3 times
- If the local minimum is $< 0$ and the local maximum is $> 0$, then the equation $f(x) = 0$ must have 3 real roots

---

## I5 Number of Roots of Equations [MM8.6-MM8.7]

### 5.1 Algebraic Solutions and Graph Intersections

The solutions to the equation $f(x) = g(x)$ = the $x$-coordinates of the intersections between the curves $y = f(x)$ and $y = g(x)$.

**Geometric Interpretation**:
- Solutions to $f(x) = k$ = number of intersections between $y = f(x)$ and the horizontal line $y = k$
- Solutions to $f(x) = g(x)$ = number of intersections between the two function graphs

### 5.2 Determining the Number of Roots for Polynomials

| Degree of Polynomial | Maximum Number of Real Roots | Common TMUA Question Types |
|----------------------|------------------------------|----------------------------|
| Linear | 1 | Single intersection |
| Quadratic | 2 | Discriminant, completing the square |
| Cubic | 3 | Derivative analysis of stationary point positions |
| Quartic | 4 | W-shaped curve analysis [2016 P2 Q14] |

### 5.3 Exponential and Logarithmic Equations

**Exponential Equation**: Solutions to $2^x = mx + c$ = intersections between the exponential curve and the straight line [2018 P2 Q11]

Key observations:
- $y = 2^x$ is strictly increasing and convex
- When the line gradient $m < 0$, there is at most 1 intersection
- When the line gradient $m > 0$, there can be 0, 1, or 2 intersections (depending on the intercept $c$)

---

## ⚡ Summary of Quick Solving Techniques

| Scenario | Technique |
|----------|-----------|
| Determine if $f(x) < f(y)$ can imply $x < y$ | Check if $f$ is strictly increasing on $\mathbb{R}$ (exclude even functions and functions with discontinuities) |
| Quick way to find quadratic vertex | Divide the coefficient of the linear term by $-2$ for the $x$-coordinate, then substitute back to get the $y$-coordinate |
| Direction of horizontal translation | Inside brackets: left is addition, right is subtraction (counter-intuitive!) |
| Logarithmic function upward shift $\Leftrightarrow$ horizontal stretch | Shift up by $k$ = horizontal compression by $10^{-k}$ (when the base is 10) |
| Determine the number of roots for cubic equations | Differentiate to find turning points, check if local minimum $< 0$ and local maximum $> 0$ |
| Change in number of intersections for a quartic function | W-shaped curve: as a horizontal line moves upwards, the number of intersections follows a $1 \to 2 \to 4 \to 3 \to 1$ pattern |

---

## ⚠️ Common Mistake Warnings

- ❌ In horizontal translations, $y = f(x + 3)$ is a shift **left** by 3 units, not right—the sign inside the bracket is opposite to the direction of movement
- ❌ When determining monotonicity, even functions (like $x^2$, $x^4$) are not monotonic overall, they are only monotonic for $x > 0$ and $x < 0$ separately
- ❌ $f(a - x) = f(x)$ indicates the axis of symmetry is $x = \frac{a}{2}$, not $x = a$ [2018 P2 Q10]
- ❌ A cubic function does not necessarily have 3 real roots—if the turning points have the same sign (both above or below the axis), there might only be 1 root
- ❌ The exponential function $y = a^x$ passes through $(0, 1)$, not the origin—when $x = 0$, $y = 1$

---

## 📝 Selected Examples

### Example 1 (2016 P2 Q10 · Function Monotonicity and Inequalities)

**Question**: $x$ and $y$ are non-zero real numbers. Which condition is **sufficient** to deduce that $x < y$?

Options:
- A: $x^4 < y^4$
- B: $y^4 < x^4$
- C: $x^{-1} < y^{-1}$
- D: $y^{-1} < x^{-1}$
- E: $x^{\frac{3}{5}} < y^{\frac{3}{5}}$

【Question Analysis】
The core issue is: given $f(x) < f(y)$, can we deduce backwards that $x < y$? This depends on whether the function $f$ is **strictly monotonically increasing** over the entire domain of real numbers.

【Solving Steps】
Check the monotonicity of the function in each option one by one:

**Options A/B**: $f(t) = t^4$. Even function, decreasing for $t < 0$ and increasing for $t > 0$, not monotonic overall. Counterexample: $x = 1$, $y = -2$, $x^4 = 1 < 16 = y^4$, but $x > y$. Not sufficient.

**Options C/D**: $f(t) = t^{-1}$. Decreasing in both positive and negative branches separately, but not monotonic overall. Counterexample: $x = 2$, $y = 1$, $x^{-1} = 0.5 < 1 = y^{-1}$, but $x > y$. Not sufficient.

**Option E**: $f(t) = t^{3/5} = \sqrt[5]{t^3}$. $t^3$ is strictly increasing on $\mathbb{R}$, and $\sqrt[5]{\cdot}$ is also strictly increasing on $\mathbb{R}$, their composition is strictly increasing overall. Therefore $x^{3/5} < y^{3/5} \Leftrightarrow x < y$. **Sufficient**.

【Quick Thought】
Check if the function is an even function (even functions are definitely not monotonic overall), or if it has points of discontinuity. Only $t^{3/5}$ is strictly increasing over all real numbers.

【Correct Answer】E

【Knowledge Points】Functions | **Syllabus**: MM1.7

---

### Example 2 (2017 P1 Q18 · Logarithmic Function Transformations)

**Question**: $y = \log_{10}x$ is translated upwards by 2 units. This transformation is equivalent to a stretch along the $x$-axis by a scale factor of $k$. Find the value of $k$.

【Question Analysis】
Logarithmic functions have a special property: vertical translations can be converted into horizontal stretches. This is because $\log a + \log b = \log(ab)$.

【Solving Steps】
After translating upwards by 2 units:
$$y = \log_{10}x + 2 = \log_{10}x + \log_{10}100 = \log_{10}(100x)$$

After stretching along the $x$-axis by a scale factor of $k$:
$$y = \log_{10}\left(\frac{x}{k}\right) = \log_{10}x - \log_{10}k$$

Equating the two expressions:
$$\log_{10}x + 2 = \log_{10}x - \log_{10}k$$
$$2 = -\log_{10}k$$
$$\log_{10}k = -2$$
$$k = 10^{-2} = 0.01$$

【Quick Thought】
Take a specific point: the original function passes through $(1, 0)$. After translation, it passes through $(1, 2)$. To make the stretched function also pass through $(1, 2)$, the original function must evaluate to $2$ at $x = \frac{1}{k}$, meaning $\log_{10}\frac{1}{k} = 2$, which gives $k = 0.01$.

【Correct Answer】A ($k = 0.01$)

【Knowledge Points】Functions, Graphs | **Syllabus**: MM8.2

---

### Example 3 (2018 P2 Q10 · Algebraic Expression of Symmetry)

**Question**: Determine which of the following three conditions are **necessary and sufficient** for the graph of $y = f(x)$ to be symmetric about the line $x = a$:

- I: $f(a - x) = f(a + x)$
- II: $f(2a - x) = f(x)$
- III: $f(a - x) = f(x)$

【Question Analysis】
The core is to understand the algebraic definition of symmetry: symmetry about $x = a$ means that function values at points equidistant from the center $a$ are equal.

【Solving Steps】
**Condition I**: The midpoint of $a - x$ and $a + x$ is $a$, and the distance of both points to $x = a$ is $|x|$. This is precisely the direct definition of symmetry, making it a **necessary and sufficient condition**.

**Condition II**: The midpoint of $2a - x$ and $x$ is $\frac{2a - x + x}{2} = a$, which is also symmetric about $x = a$. Let's make a substitution: let $t = a - x$, then $2a - x = a + t$, and $f(2a - x) = f(x)$ becomes $f(a + t) = f(a - t)$, which is equivalent to Condition I. **Necessary and sufficient condition**.

**Condition III**: The midpoint of $a - x$ and $x$ is $\frac{a}{2}$, which represents symmetry about $x = \frac{a}{2}$, not $x = a$. Counterexample: take $f(x) = (x - a)^2$, which is symmetric about $x = a$, but $f(a - x) = x^2$ is not equal to $f(x) = (x - a)^2$. **Not a necessary and sufficient condition**.

【Quick Thought】
When finding the axis of symmetry, key is to look at the midpoint of the two independent variables: the midpoint of $a - x$ and $a + x$ is $a$ (correct); the midpoint of $2a - x$ and $x$ is $a$ (correct); the midpoint of $a - x$ and $x$ is $\frac{a}{2}$ (incorrect).

【Correct Answer】B (I and II are necessary and sufficient conditions)

【Knowledge Points】Functions, Graphs | **Syllabus**: MM8.1, MM8.7

---

## 🏋️ After-class Exercises (15 Minutes Limit)

| # | Question Number | Topic | Corresponding Syllabus | Difficulty |
|---|-----------------|-------|------------------------|------------|
| 1 | 2016 P2 Q14 | Number of roots of quartic functions | MM8.6, MM8.7 | ⭐⭐⭐ |
| 2 | 2017 P2 Q7 | Exponential function graphs | MM8.1, MM8.2 | ⭐⭐⭐ |
| 3 | 2017 P2 Q14 | Quadratic function transformations | MM8.4 | ⭐⭐⭐ |
| 4 | 2018 P1 Q5 | Remainder theorem | MM1.7 | ⭐⭐⭐ |
| 5 | 2018 P2 Q11 | Number of roots of exponential equations | MM8.7 | ⭐⭐⭐ |
| 6 | 2018 P2 Q15 | Cubic function transformations | MM8.5 | ⭐⭐⭐ |
| 7 | 2019 P1 Q11 | Logarithmic equations | MM1.7 | ⭐⭐⭐ |
| 8 | 2022 P1 Q9 | Function properties | MM1.7 | ⭐⭐⭐ |

---

*Full solutions can be found in the question bank database, each containing 【Solving Steps】 and 【Quick Thought】.*

---

## 📚 Syllabus Mapping Quick Reference

| Syllabus Code | Content | Corresponding Sub-section |
|---------------|---------|---------------------------|
| MM1.7 | Function definitions and properties (many-to-one mapping, $\sqrt{x}$, $|x|$) | I1 |
| MM8.1 | Recognizing and sketching common function graphs | I2 |
| MM8.2 | Graph transformations (translations, stretches, compositions) | I3 |
| MM8.3 | Influence of linear function parameters ($m$, $c$) | I2 |
| MM8.4 | Influence of quadratic function parameters ($a$, $b$, $c$) | I2 |
| MM8.5 | Derivatives and function shapes (stationary points, increasing/decreasing intervals) | I4 |
| MM8.6 | Number of roots of equations (intersections with axes) | I5 |
| MM8.7 | Correspondence between graph intersections and equation solutions | I5 |

---

## 🎯 Companion Exercises

Finished this chapter? [→ Do Functions related practice questions](/practice/tmua/?topic=Functions)

Finished this chapter? [→ Do Graphs related practice questions](/practice/tmua/?topic=Graphs)

---

**Module I Notes Completed | Total 22 Questions | Suggested Lessons: 2 Hours**

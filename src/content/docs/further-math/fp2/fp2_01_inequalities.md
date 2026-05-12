---
title: "FP2 Chapter 1: Inequalities"
---

## FP2 Lecture Notes: Inequalities

## Introduction

This lecture note details the solution of inequalities involving rational expressions and absolute values using critical values and sign analysis. The material is divided into two modules with examples, visualizations, and interactive exercises.

## Key Concepts Illustration

Sign analysis of $\frac{x-2}{x+3}$:

![Sign analysis number line](/images/tikz/fp2-number-line-sign.svg)

## Module 1: Rational Inequalities

### Solution Procedure

1. **Find Critical Values**: Solve numerator = 0 and denominator = 0.
2. **Partition Intervals**: Divide the number line, excluding points where denominator = 0.
3. **Sign Testing**: Choose test points in each interval.
4. **Combine Solutions**: Select intervals satisfying the inequality direction ($>$ or $<$).

### Example 1

Solve $\dfrac{x-2}{x+3} > 0$.

**Critical Values:** Zero at $x = 2$, Undefined at $x = -3$.

**Interval Analysis:**

| Interval | $x < -3$ | $-3 < x < 2$ | $x > 2$ |
|---|---|---|---|
| Test Point | $x = -4$ | $x = 0$ | $x = 3$ |
| Sign | $\dfrac{-}{-} = +$ | $\dfrac{-}{+} = -$ | $\dfrac{+}{+} = +$ |

**Solution:** $x < -3$ or $x > 2$.

### Example 2

Solve $\dfrac{(x-4)(x+1)}{x(3x+4)} < 0$.

**Critical Values:**

$$x = -\frac{4}{3} \text{ (denominator)},\ x = 0 \text{ (denominator)},\ x = -1 \text{ (numerator)},\ x = 4 \text{ (numerator)}$$

**Number Line Partitioning:**

![Number line for Example 2](/images/tikz/fp2-example2-number-line.svg)

**Sign Analysis Table:**

| Interval | $x < -\frac{4}{3}$ | $-\frac{4}{3} < x < -1$ | $-1 < x < 0$ | $0 < x < 4$ | $x > 4$ |
|---|---|---|---|---|---|
| Sign | $+$ | $-$ | $+$ | $-$ | $+$ |

**Solution:** $-\dfrac{4}{3} < x < -1$ or $0 < x < 4$.

### In-class Exercise

:::note[Exercise]
Solve $\dfrac{x}{3x+4} \geq \dfrac{1}{x}$.

**Hint:** Exclude points where denominator = 0.
:::

:::note[Exercise]
Solve $\dfrac{1}{x+2} > 2x + 3$.
:::

## Module 2: Absolute Value Inequalities

### Solution Strategy

- **Case Analysis**: Split into cases based on the sign inside the absolute value.

### Example 3

Solve $\dfrac{x}{|3x + 4|} > \dfrac{1}{x}$.

**Case 1: $3x + 4 > 0$ (i.e. $x > -\frac{4}{3}$)**

$$\frac{x}{3x + 4} > \frac{1}{x} \Rightarrow \frac{x}{3x + 4} - \frac{1}{x} > 0 \Rightarrow \frac{x^2 - (3x + 4)}{x(3x + 4)} > 0 \Rightarrow \frac{(x-4)(x+1)}{x(3x+4)} > 0$$

**Solution for Case 1:** $x \in (-1, 0) \cup (4, \infty)$ (by sign analysis in Example 2).

**Case 2: $3x + 4 < 0$ (i.e. $x < -\frac{4}{3}$)**

$$\frac{x}{-(3x + 4)} > \frac{1}{x} \Rightarrow \frac{x}{3x + 4} + \frac{1}{x} < 0 \Rightarrow \frac{x^2 + 3x + 4}{x(3x + 4)} < 0$$

**Key Observation:** The quadratic $x^2 + 3x + 4$ has discriminant $9 - 16 = -7 < 0$, so it is always positive.

**Sign Analysis:**

$$\frac{\text{Always } (+)}{x(3x + 4)} < 0 \Rightarrow x(3x + 4) < 0$$

**Solution:** $-\frac{4}{3} < x < 0$, **BUT** this contradicts the case condition $x < -\frac{4}{3}$.

**Conclusion:** No solution in this case.

**Final Solution:** $-1 < x < 0$ or $x > 4$.

### Example 3* — Graphical Solution

We analyse the inequality by comparing the graphs of:

$$f(x) = \frac{x}{|3x + 4|} \quad \text{and} \quad g(x) = \frac{1}{x}$$

**Step 1: Domain Restrictions**

$$x \neq -\frac{4}{3},\ x \neq 0$$

**Step 2: Key Features Visualisation**

![Graph of f(x) and g(x)](/images/tikz/fp2-example3-graph.svg)

**Step 3: Graphical Analysis**

- **Blue curve** $f(x)$ has:
  - Vertical asymptote at $x = -\frac{4}{3}$ (left branch)
  - Horizontal asymptote $f(x) \to \frac{1}{3}$ as $x \to +\infty$ and $f(x) \to -\frac{1}{3}$ as $x \to -\infty$

- **Green curve** $g(x)$ is the standard rectangular hyperbola.

- Intersection points found algebraically by solving $\frac{x}{|3x + 4|} = \frac{1}{x}$ at:

$$x = -1 \quad \text{and} \quad x = 4$$

**Step 4: Solution Identification**

- In $x > 0$ region:
  - $f(x)$ crosses $g(x)$ at $x = 4$.
  - $f(x)$ stays above $g(x)$ for $x > 4$ because $f(x) \to \frac{1}{3}$ and $g(x) \to 0 < \frac{1}{3}$ as $x \to +\infty$.

- In $-\frac{4}{3} < x < 0$ region:
  - $f(x)$ crosses $g(x)$ at $x = -1$.
  - $f(x)$ is above $g(x)$ between $x = -1$ and $x = 0$ because $f(x)$ is finite and $g(x) \to -\infty$ as $x \to 0$ from the left.

- In $x < -\frac{4}{3}$ region:
  - $f(x)$ and $g(x)$ do not intersect.
  - $f(x)$ always stays above $g(x)$ because $f(x) \to -\frac{1}{3}$ and $g(x) \to 0 > -\frac{1}{3}$ as $x \to -\infty$ with no intersection in this region.

**Final Solution:** $-1 < x < 0$ or $x > 4$.

### In-class Exercise

:::note[Exercise — 6668/s12/01/1]
Find the set of values of $x$ for which

$$|x^2 - 4| > 3x$$
:::

## Summary

:::note[Memory Tips]
Critical values divide, sign tests decide;
Absolute values split, merge solutions tight!
:::

:::caution[Common Pitfalls]
- **Exclude Undefined Points**: Always exclude values where the denominator is zero.
- **Check Case Conditions**: Ensure solutions from each case satisfy the original inequality.
- **Simplify Carefully**: When multiplying or dividing by a variable, consider the sign to avoid reversing the inequality.
:::

## Homework

### E.O.C.1 — 6668/s10/01/3

1. Find the set of values of $x$ for which

$$x + 4 > \frac{2}{x + 3}$$

2. Deduce the values of $x$ for which

$$x + 4 > \frac{2}{|x + 3|}$$

### E.O.C.2 — 6668/s11/01/1

Find the set of values of $x$ for which

$$\frac{3}{x + 3} > \frac{x - 4}{x}$$

### E.O.C.3 — 6668/s09/01/7

1. Sketch the graph of $y = |x^2 - a^2|$, where $a > 1$. Show the coordinates of the points where the graph meets the axes.

2. Solve $|x^2 - a^2| = a^2 - x$, $a > 1$.

3. Find the set of values of $x$ for which $|x^2 - a^2| > a^2 - x$, $a > 1$.

### Challenge Problem (Optional)

Solve the inequality:

$$|x - 2| + |x + 1| < 5$$

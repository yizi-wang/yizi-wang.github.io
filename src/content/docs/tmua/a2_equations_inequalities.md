---
title: "A2 Equations and Inequalities"
---

## Module A2: Equations and Inequalities

> **Corresponding Syllabus Section 1**: MM1.3, MM1.4, MM1.5, MM1.6
> **Corresponding Paper**: P1 Focus (Discriminant, Factor Theorem), P2 Included (Logic Reasoning Inequalities)
> **Suggested Lessons**: 2 Lessons | **Target Number of Questions**: 15-20 Questions

---

## 📋 Module Overview

| Sub-section | Content | Corresponding Syllabus | Past Paper Frequency | Lessons |
|-------------|---------|------------------------|----------------------|---------|
| A2.1 | Quadratic Equations and Discriminant | MM1.3 | 12 times in 8 years | 0.5 |
| A2.2 | Solving Simultaneous Equations | MM1.4 | 8 times in 8 years | 0.5 |
| A2.3 | Solving Inequalities | MM1.5 | 10 times in 8 years | 0.5 |
| A2.4 | Factor Theorem and Remainder Theorem | MM1.6 | 6 times in 8 years | 0.5 |

---

## A2.1 Quadratic Equations and Discriminant [MM1.3]

### 1.1 Quadratic Formula and Discriminant

For the quadratic equation $ax^2 + bx + c = 0$ ($a \neq 0$), the quadratic formula is:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

The discriminant $\Delta = b^2 - 4ac$ determines the nature of the roots:

| $\Delta$ | Nature of Roots | Intersection with $x$-axis |
|----------|-----------------|----------------------------|
| $\Delta > 0$ | Two distinct real roots | Two intersections |
| $\Delta = 0$ | Two equal real roots (Repeated root) | One intersection (Tangent point) |
| $\Delta < 0$ | No real roots (Complex roots) | No intersections |

**⚡ Quick Check for Number of Roots**: No need to solve the equation, just calculate the sign of $\Delta$.

### 1.2 Completing the Square

Completing the square is the core technique for dealing with quadratic functions, used to:
- Find the coordinates of the vertex
- Determine the maximum/minimum value
- Analyse the axis of symmetry

Standard form: $ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right)$

**Steps for Completing the Square**:
1. Factor out $a$: $a\left(x^2 + \frac{b}{a}x\right) + c$
2. Add and subtract the square term: $a\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} - \frac{b^2}{4a^2}\right) + c$
3. Simplify: $a\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a}$

**⚡ Completing the Square Tip**: "Half the coefficient squared" — the square of half the coefficient of the linear term.

### 1.3 Relationship between Roots and Coefficients (Vieta's Formulas)

Let the two roots of the equation $ax^2 + bx + c = 0$ be $x_1$ and $x_2$:

$$x_1 + x_2 = -\frac{b}{a}, \quad x_1 \cdot x_2 = \frac{c}{a}$$

**⚠️ Common Pitfall**: Vieta's formulas can be used without finding the roots, but you must confirm that the equation has real roots ($\Delta \ge 0$).

### 1.4 Application of the Difference of Two Roots

The difference of two roots $|x_1 - x_2| = \frac{\sqrt{\Delta}}{a}$, commonly used to:
- Determine the distribution range of the roots
- Construct constraints to find the range of parameters

---

## A2.2 Solving Simultaneous Equations [MM1.4]

### 2.1 Simultaneous Linear and Quadratic Equations

Typical form:
$$\begin{cases} y = mx + c \\ y = ax^2 + bx + d \end{cases}$$

**Elimination method**: Substitute to eliminate $y$, reducing it to a quadratic equation in $x$:
$$ax^2 + (b - m)x + (d - c) = 0$$

**Geometric meaning**: The solutions to the simultaneous equations correspond to the intersections of the line and the parabola.

| Discriminant | Number of Intersections | Geometric Meaning |
|--------------|-------------------------|-------------------|
| $\Delta > 0$ | Two intersections | Line passes through the parabola |
| $\Delta = 0$ | One intersection (Tangent point) | Line is a tangent |
| $\Delta < 0$ | No intersections | Line and parabola do not intersect |

### 2.2 Simultaneous Quadratic Equations

When two parabolas are solved simultaneously, it may lead to a quartic equation, but common cases can be reduced in order:

**Techniques**:
- Observe whether symmetry can be used
- Check whether the $x^2$ or $y^2$ terms can be directly eliminated
- Use Vieta's formulas to handle symmetric structures

---

## A2.3 Solving Inequalities [MM1.5]

### 3.1 Quadratic Inequalities

Standard procedure for solving quadratic inequalities $ax^2 + bx + c > 0$ or $ax^2 + bx + c < 0$:

1. Determine the opening direction of the parabola (sign of $a$)
2. Find the roots (if $\Delta \le 0$, there are no real roots or a single repeated root)
3. Sketch the graph based on the opening direction and the position of the roots
4. Write the solution set based on the graph

**Tip**: "Greater than takes the outside, less than takes the inside" (only when $a > 0$)

| Condition | Solution to $ax^2 + bx + c > 0$ | Solution to $ax^2 + bx + c < 0$ |
|-----------|---------------------------------|---------------------------------|
| $a > 0$, $\Delta > 0$ | $x < x_1$ or $x > x_2$ | $x_1 < x < x_2$ |
| $a > 0$, $\Delta = 0$ | $x \neq x_0$ (except the repeated root) | No solution |
| $a > 0$, $\Delta < 0$ | All real numbers | No solution |
| $a < 0$ | Solution set is opposite to $a > 0$ | Solution set is opposite to $a > 0$ |

### 3.2 Intersection and Union of Multiple Inequalities

**Finding Intersection**: Solve each inequality separately, then take the overlapping part of their solution sets.

**Technique**: Multiplying inequalities can construct new quadratic inequalities, but pay attention to sign changes.

**⚠️ Common Pitfalls**:
- Do not "multiply" two inequalities directly — negative times negative equals positive, which can change the direction of the inequality sign.
- When solving systems of inequalities, verify if the intersection exists.

---

## A2.4 Factor Theorem and Remainder Theorem [MM1.6]

### 4.1 Factor Theorem

**Core Conclusion**: If $(x - a)$ is a factor of the polynomial $f(x)$, then $f(a) = 0$.

Conversely, if $f(a) = 0$, then $(x - a)$ is a factor of $f(x)$.

**Applications**:
- Quickly check if a polynomial has a specific factor.
- Deduce the coefficients of a polynomial from its known roots.

### 4.2 Remainder Theorem

The remainder when the polynomial $f(x)$ is divided by $(x - a)$ is $f(a)$.

**Extension**: The remainder when $f(x)$ is divided by $(ax - b)$ is $f\left(\frac{b}{a}\right)$.

**⚡ Quick Tip**: No need to perform polynomial division to find the remainder, simply substitute!

### 4.3 Comprehensive Application of Factorisation

Once a factor is known, the remaining factors can be found by:
- Polynomial division (long division or synthetic division)
- The method of undetermined coefficients, assuming the remaining factor is a quadratic expression and comparing coefficients

**Typical Workflow**:
1. Use the Factor Theorem to check for a linear factor $(x - a)$.
2. Use the Remainder Theorem to determine the constant term.
3. Continue to factorise the remaining part or directly verify the given options.

---

## 📝 Typical Question Types and Solving Strategies

### Type A: Discriminant and Parameter Range

**Features**: A quadratic equation with a parameter, asking for the range of the parameter under certain conditions.

**Strategies**:
1. Write the expression for the discriminant $\Delta$ in terms of the parameter.
2. Convert the conditions into inequalities (e.g., $\Delta > 0$).
3. Solve the inequalities to find the parameter range.

**Example**: The equation $x^2 - 2px + q = 0$ has two real roots, and the difference between the roots is in the interval $(2, 4)$. Find the range of $p^2 - q$.

**Solution**: The difference between the two roots is $2\sqrt{p^2 - q} \in (2, 4)$, hence $p^2 - q \in (1, 4)$.

---

### Type B: Solution Sets of Inequalities and Coefficient Relationships

**Features**: Given the solution set of an inequality, deduce the coefficients or construct a new inequality.

**Strategies**:
1. Work backwards from the solution set $p < x < q$: the quadratic expression is $(x - p)(x - q)$ (assuming $a = 1$).
2. Based on the coefficient relationships, $b = -(p + q)$, $c = pq$.
3. Substitute into the new inequality to solve.

---

### Type C: Factor Theorem and Coefficient Determination

**Features**: A polynomial with unknown coefficients, given a factor to find the values of the coefficients.

**Strategies**:
1. Suppose the factor is $(x - a)$, substitute $x = a$ to set the polynomial to zero.
2. Solve the equation for the coefficients.
3. Verify other coefficients (if the question has multiple conditions).

---

## ⚡ Summary of Quick Solving Techniques

| Scenario | Technique |
|----------|-----------|
| Determining the existence of roots | Calculate $\Delta$ directly, no need to solve the equation |
| Sum/Product of two roots | Use Vieta's formulas, no need to find roots |
| Difference of two roots | $|x_1 - x_2| = \sqrt{\Delta}/a$ |
| Finding remainder | Simply substitute, no division needed |
| Checking a factor | Substitute and check if it equals zero |
| Finding vertex by completing the square | "Half the coefficient squared" tip |
| Solution set of quadratic inequality | "Greater than takes outside, less than takes inside" ($a > 0$) |
| Number of intersections of simultaneous equations | Convert to quadratic equation, check $\Delta$ |

---

## ⚠️ Common Pitfalls

- ❌ You must confirm $\Delta \ge 0$ before using Vieta's formulas
- ❌ Inequalities cannot be directly multiplied — multiplying $(-3 < x)$ and $(-2 < x)$ does not mean $(x^2 < 6)$
- ❌ In the Remainder Theorem, when the divisor is $(ax - b)$, substitute $x = b/a$, not $x = a$
- ❌ The "outside/inside" tip for quadratic inequality solution sets only applies when $a > 0$; when $a < 0$, it must be reversed
- ❌ Do not forget to adjust the constant term when completing the square — "subtract what you add"

---

## 📝 Selected Examples

### Example 1 (2017 P1 Q5 · Intersection of Quadratic Inequalities)

**Question**: Find the solution set $S$ that satisfies both $x^2 - 8x + 12 < 0$ and $2x + 1 > 9$, and express it as a single inequality.

【Analysis】
This question tests solving simultaneous quadratic and linear inequalities. You need to solve both inequalities separately, take their intersection, and then work backwards to construct a single quadratic inequality.

【Steps】
Step 1: Solve the quadratic inequality $x^2 - 8x + 12 < 0$.

Factorisation: $(x - 2)(x - 6) < 0$.

The parabola opens upwards, taking negative values between the two roots. The solution is $2 < x < 6$.

Step 2: Solve the linear inequality $2x + 1 > 9$.

$2x > 8$, which gives $x > 4$.

Step 3: Find the intersection.

$S = (2, 6) \cap (4, \infty) = (4, 6)$, so $4 < x < 6$.

Step 4: Construct a single inequality in reverse.

The interval $(4, 6)$ corresponds to the quadratic expression $(x - 4)(x - 6) < 0$ (opens upwards, negative between the roots).

Expanding gives $x^2 - 10x + 24 < 0$.

【Quick Approach】
The intersection is $(4, 6)$, so directly write the quadratic inequality with roots $4$ and $6$. "Negative in the middle" requires the parabola to open upwards, meaning $a > 0$, giving the standard form $x^2 - 10x + 24 < 0$.

【Correct Answer】C

【Knowledge Point】Algebra | **Syllabus**: MM1.5

---

### Example 2 (2016 P1 Q2 · Factor Theorem)

**Question**: The polynomial $3x^3 + 13x^2 + 8x + a$ has a factor of $(x + 2)$. Find its complete factorisation.

【Analysis】
This question tests the Factor Theorem and polynomial factorisation. Given a linear factor, first use the Factor Theorem to find the constant $a$, then factorise the remaining part.

【Steps】
Step 1: Use the Factor Theorem to find $a$.

Let $f(x) = 3x^3 + 13x^2 + 8x + a$.

Since $(x + 2)$ is a factor, $f(-2) = 0$:

$$f(-2) = 3(-8) + 13(4) + 8(-2) + a = -24 + 52 - 16 + a = 12 + a = 0$$

Giving $a = -12$.

Step 2: Divide the polynomial by $(x + 2)$.

Let $f(x) = (x + 2)(3x^2 + bx + c)$, expand and compare coefficients:

$$3x^3 + (b + 6)x^2 + (c + 2b)x + 2c$$

From the $x^2$ coefficient: $b + 6 = 13$, giving $b = 7$.

From the constant term: $2c = -12$, giving $c = -6$.

Step 3: Factorise the quadratic factor.

$3x^2 + 7x - 6 = (x + 3)(3x - 2)$ (verified using the cross-multiplication method).

Step 4: Write out the complete factorisation.

$$f(x) = (x + 2)(x + 3)(3x - 2)$$

【Quick Approach】
After finding $a = -12$, the constant term of the expanded options equals the product of the constants of each factor. Only D and E have a constant term of $-12$. Check the $x^2$ coefficient: in E, the $x^2$ coefficient of $(x+2)(x+3)(3x-2)$ is $13$, which matches, so choose E.

【Correct Answer】E

【Knowledge Point】Algebra | **Syllabus**: MM1.6

---

### Example 3 (2016 P2 Q15 · Discriminant and Difference of Roots)

**Question**: The quadratic equation $f(x) = x^2 - 2px + q = 0$ has two real roots, and the difference between the two roots is greater than $2$ and less than $4$. Find a necessary and sufficient condition equivalent to this.

【Analysis】
This question tests the application of the discriminant and the representation of the difference of roots. You need to convert "the difference of two roots is in $(2, 4)$" into an inequality involving $p$ and $q$.

【Steps】
Step 1: Represent the two roots.

$$x_1 = p + \sqrt{p^2 - q}, \quad x_2 = p - \sqrt{p^2 - q}$$

Discriminant $\Delta = 4(p^2 - q) > 0$, meaning $p^2 > q$.

Step 2: Calculate the difference of the two roots.

$$|x_1 - x_2| = 2\sqrt{p^2 - q}$$

Step 3: Substitute into the condition.

$2 < 2\sqrt{p^2 - q} < 4$, divide both sides by $2$:

$1 < \sqrt{p^2 - q} < 2$

Square both sides (all terms are positive):

$1 < p^2 - q < 4$

Step 4: Compare with the options.

The condition "the difference of two roots is in $(2, 4)$" is equivalent to $1 < p^2 - q < 4$.

Option D: $q < p^2 - 1 < q + 3$

Add $1$ to all parts: $q + 1 < p^2 < q + 4$

Which is $1 < p^2 - q < 4$, completely equivalent.

【Quick Approach】
Directly write the difference of roots formula $|x_1 - x_2| = \sqrt{\Delta}/a = 2\sqrt{p^2 - q}$, substitute into the inequality $2 < d < 4$ to get $1 < p^2 - q < 4$, and then verify which option is equivalent to this.

【Correct Answer】D

【Knowledge Point】Algebra | **Syllabus**: MM1.3

---

## 🏋️ Post-Lesson Practice (15 Minutes Time Limit)

| # | Question Number | Topic | Syllabus | Difficulty |
|---|-----------------|-------|----------|------------|
| 1 | 2017 P1 Q4 | Remainder Theorem | MM1.6 | ⭐⭐ |
| 2 | 2017 P1 Q19 | Inequality Solution Set and Coefficients | MM1.5 | ⭐⭐⭐ |
| 3 | 2018 P1 Q2 | Quadratic Equation Coefficient Matching | MM1.3 | ⭐⭐ |
| 4 | 2018 P2 Q5 | Inequality Regions | MM1.5 | ⭐⭐⭐ |
| 5 | 2019 P1 Q1 | Factor Theorem | MM1.6 | ⭐⭐ |
| 6 | 2019 P1 Q6 | Applications of Discriminant | MM1.3 | ⭐⭐⭐ |
| 7 | 2020 P1 Q3 | Quadratic Inequalities | MM1.5 | ⭐⭐ |
| 8 | 2020 P2 Q8 | Intersections of Simultaneous Equations | MM1.4 | ⭐⭐⭐ |

---

*Full solutions are available in the question bank database, each including 【Steps】 and 【Quick Approach】.*

---

## 📚 Syllabus Key Points Review

**MM1.3 Quadratic Equations**: Master the quadratic formula, discriminant, completing the square, and Vieta's formulas.

**MM1.4 Simultaneous Equations**: Master the substitution elimination method, understand the relationship between the number of intersections and the discriminant.

**MM1.5 Inequalities**: Be able to correctly solve quadratic inequalities, understand the relationship between solution sets and graphs, and handle the intersection of inequality systems.

**MM1.6 Factor Theorem**: Understand the essence of the Factor Theorem and the Remainder Theorem, be able to quickly check factors and determine coefficients.

---

## 🎯 Corresponding Practice

Finished this chapter? [→ Go to Algebra related practice questions](/practice/tmua/?topic=Algebra)

---

*Created at: 2026-04-29*
*Module Number: A2*
*Status: ✅ Completed*

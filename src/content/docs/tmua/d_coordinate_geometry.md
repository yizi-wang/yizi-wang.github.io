---
title: "D Coordinate Geometry"
---

## Module D: Coordinate Geometry

> **Syllabus Correspondence Section 1**: MM3.1, MM3.2, MM3.3, MM8.3, MM8.7
> **Paper Correspondence**: P1 Core (28/320 questions), P2 Involved (logical reasoning coordinate geometry questions)
> **Recommended Class Time**: 2 classes | **Target Question Count**: 15-20 questions

---

## 📋 Module Overview

| Section | Content | Syllabus | Past Paper Frequency | Class Time |
|------|------|---------|-------------|------|
| D1 | Equations of Straight Lines and Gradients | MM3.1, MM8.3 | 10 times in 8 years | 0.5 |
| D2 | Equation of a Circle (Standard/General/Completing the Square) | MM3.2, MM3.3 | 15 times in 8 years | 1 |
| D3 | Intersection of a Line and a Circle | MM3.3, MM8.7 | 8 times in 8 years | 0.5 |

---

## D1 Equations of Straight Lines and Gradients [MM3.1, MM8.3]

### 1.1 Geometric Meaning of Gradient

The gradient $m$ of a straight line describes its 'steepness', defined as the ratio of the change in the y-coordinate to the change in the x-coordinate:

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Geometric Interpretation of Gradient**:
- $m > 0$: The line goes from bottom-left to top-right; the steeper it is, the larger $m$ is.
- $m < 0$: The line goes from top-left to bottom-right.
- $m = 0$: Horizontal line.
- Gradient is undefined (denominator is zero): Vertical line.

### 1.2 Three Forms of the Equation of a Straight Line

| Form | Formula | Known Conditions | When to Use |
|------|------|---------|---------|
| Gradient-Intercept Form | $y = mx + c$ | Gradient $m$ and $y$-intercept $c$ | Most commonly used, read gradient directly |
| Point-Gradient Form | $y - y_1 = m(x - x_1)$ | A point $(x_1, y_1)$ and gradient $m$ | Given a point to find the equation |
| General Form | $ax + by + c = 0$ | Standard form | Relationship between two lines, distance formula |

**⚡ Quick Gradient Identification**: The gradient of the general form $ax + by + c = 0$ is $m = -\frac{a}{b}$, which can be read directly without conversion.

### 1.3 Parallel and Perpendicular Lines

**Parallel condition**: Equal gradients $m_1 = m_2$

**Perpendicular condition**: Gradients are negative reciprocals $m_1 \cdot m_2 = -1$

**Derivation of the perpendicular condition (for understanding rather than memorizing)**:
Let the gradient of line $l_1$ be $m_1 = \tan\theta_1$, and the gradient of line $l_2$ be $m_2 = \tan\theta_2$.
If $l_1 \perp l_2$, then $\theta_2 = \theta_1 + 90^\circ$, so

$$m_2 = \tan(\theta_1 + 90^\circ) = -\frac{1}{\tan\theta_1} = -\frac{1}{m_1}$$

Therefore $m_1 \cdot m_2 = -1$.

**⚠️ Special case for perpendicularity**: A horizontal line ($m = 0$) and a vertical line (gradient is undefined) are perpendicular to each other, but this cannot be determined directly using $m_1 \cdot m_2 = -1$.

### 1.4 Perpendicular Distance from a Point to a Line [MM8.7]

The distance from a point $(x_0, y_0)$ to the line $ax + by + c = 0$ is:

$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

**Core application**: Tangent to a circle problems — the distance from the tangent to the centre of the circle is equal to the radius.

---

## D2 Equation of a Circle [MM3.2, MM3.3]

### 2.1 Standard Form and General Form

**Standard Form**:
$$(x - a)^2 + (y - b)^2 = r^2$$
Centre $(a, b)$, radius $r$. This is the most intuitive form, where the centre and radius can be seen at a glance.

**General Form**:
$$x^2 + y^2 + 2gx + 2fy + c = 0$$
Centre $(-g, -f)$, radius $r = \sqrt{g^2 + f^2 - c}$.

**⚠️ Sign Trap**: The coordinates of the centre are $(-g, -f)$, **not** $(g, f)$. The signs of the coefficients of the linear terms must be reversed!

### 2.2 Completing the Square — From General to Standard

Given $x^2 + y^2 - 6x + 8y - 11 = 0$, completing the square gives:

$$(x^2 - 6x) + (y^2 + 8y) = 11$$
$$(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16$$
$$(x - 3)^2 + (y + 4)^2 = 36$$

So the centre is $(3, -4)$ and the radius is $6$.

**⚡ Quick Completing the Square Mnemonic**: Divide the coefficients of the linear terms by $-2$ to get the coordinates of the centre.
- Coefficient of $x$ term $-6 \div (-2) = 3$ → $x$-coordinate of the centre
- Coefficient of $y$ term $8 \div (-2) = -4$ → $y$-coordinate of the centre

### 2.3 Application of Distance from Centre to Line [MM3.3]

| Relationship | Condition | Geometric Meaning |
|------|---------|---------|
| Disjoint | $d > r$ | The line and the circle have no intersection points |
| Tangent | $d = r$ | The line and the circle have exactly one intersection point |
| Intersecting | $d < r$ | The line and the circle have two intersection points |

Where $d$ is the distance from the centre to the line, and $r$ is the radius.

**Common Properties of Circles**:
1. The radius to the point of tangency is perpendicular to the tangent
2. The lengths of two tangents drawn from an external point to a circle are equal
3. The angle between the tangent and the radius at the point of tangency is $90^\circ$

---

## D3 Typical Question Types and Solving Strategies [MM8.7]

### Question Type A: Circle Transformations

When a circle undergoes translation, reflection, or scaling, simply **track the changes to the centre and radius**; there is no need to complete the square again.

| Transformation | Change in Centre | Change in Radius |
|------|---------|---------|
| Translation by $(a, b)$ | $(h, k) \to (h+a, k+b)$ | Unchanged |
| Reflection in $x$-axis | $(h, k) \to (h, -k)$ | Unchanged |
| Reflection in $y$-axis | $(h, k) \to (-h, k)$ | Unchanged |
| Reflection in origin | $(h, k) \to (-h, -k)$ | Unchanged |
| Scaling by scale factor $k$ | $(h, k)$ unchanged | $r \to kr$ |

### Question Type B: Tangent Problems

**Three-Step Method**:
1. Let the tangent equation be $y - y_0 = m(x - x_0)$
2. Set up an equation using 'distance from centre to tangent = radius'
3. Solve for the gradient $m$ and write down the tangent equation

**Note**: Usually **two** tangents can be drawn from an external point. Check if both solutions fit the context of the question (e.g., 'intersects the positive y-axis').

### Question Type C: Regular Polygons Inscribed in a Circle

When the radius of the circumcircle of a regular $n$-gon is $R$:

$$\text{Area} = \frac{n}{2} R^2 \sin\frac{2\pi}{n}$$

Common special cases:
- Equilateral triangle ($n=3$): $\frac{3\sqrt{3}}{4} R^2$
- Regular hexagon ($n=6$): $\frac{3\sqrt{3}}{2} R^2$
- Square ($n=4$): $2R^2$

---

## ⚡ Summary of Quick Solving Techniques

| Scenario | Technique |
|------|------|
| Finding the circle given the endpoints of a diameter | The centre is the midpoint, and the radius is half the length; done in one step |
| Reading information from the general form of a circle | Coefficient of linear term $\div (-2)$ = centre, $r = \sqrt{g^2+f^2-c}$ |
| Gradient of a tangent | Set up an equation using 'distance = radius' to avoid simultaneous equations with discriminant |
| Perpendicular lines | Take the negative reciprocal of the gradient, $m \to -\frac{1}{m}$ |
| Intersection of two lines | Solve simultaneous equations; elimination is the fastest |
| Determining the existence of a circle | Complete the square and set $R^2 > 0$ ($R^2 = 0$ is a point, $R^2 < 0$ is no real locus) |

## ⚠️ Common Pitfalls

- ❌ In the general form of a circle, the centre is $(-g, -f)$ **not** $(g, f)$ — the signs of the coefficients of linear terms must be reversed
- ❌ The perpendicular condition is $m_1 \cdot m_2 = -1$, **not** $m_1 = -m_2$
- ❌ The area coefficient for a regular hexagon is $\frac{3\sqrt{3}}{2}$, **not** $\frac{\sqrt{3}}{4}$ (which is for an equilateral triangle)
- ❌ In the perpendicular distance formula, the denominator is $\sqrt{a^2 + b^2}$, **not** $a^2 + b^2$
- ❌ After completing the square for a circle's equation, the squared radius $R^2$ must be **positive** to represent a real circle

---

## 📝 Selected Examples

### Example 1 (2016 P1 Q9 · Circle Transformations)

**Question**: The line segment connecting the points $(3, 3)$ and $(7, 5)$ is the diameter of a circle. The circle is first translated 3 units in the negative $x$-direction, then reflected in the $x$-axis, and finally enlarged by a scale factor of 4 with the resulting centre as the centre of enlargement. Find the final equation of the circle.

【Question Analysis】
This question tests the comprehensive application of circle equations and geometric transformations. Knowing the two endpoints of the diameter determines a circle. It successively undergoes three transformations: translation, reflection, and enlargement, requiring us to track the changes in the centre and radius step by step.

【Solving Steps】
Step 1: Determine the centre and radius of the original circle

The endpoints of the diameter are $A(3, 3)$ and $B(7, 5)$.

The centre is the midpoint of the diameter:
$$C = \left(\frac{3+7}{2}, \frac{3+5}{2}\right) = (5, 4)$$

Length of the diameter $|AB| = \sqrt{(7-3)^2 + (5-3)^2} = \sqrt{16+4} = \sqrt{20}$.

Radius $r = \frac{\sqrt{20}}{2} = \sqrt{5}$.

Step 2: Translate 3 units in the negative $x$-direction

The $x$-coordinate of the centre decreases by 3, the $y$-coordinate remains unchanged, and the radius remains unchanged:
$$(5, 4) \to (2, 4)$$

Step 3: Reflection in the $x$-axis

Reflection only changes the sign of the $y$-coordinate, while the radius remains unchanged:
$$(2, 4) \to (2, -4)$$

Step 4: Enlargement from the centre with a scale factor of 4

When the centre of the circle is the centre of enlargement, the position of the centre remains unchanged, and the radius is multiplied by the scale factor:
$$R = 4 \times \sqrt{5} = 4\sqrt{5}$$
$$R^2 = (4\sqrt{5})^2 = 80$$

The final centre is $(2, -4)$, and the squared radius is $80$. The equation is:
$$(x-2)^2 + (y+4)^2 = 80$$

【Quick Approach】
Observe that the right-hand side of the options can only be $320, 80, 20$. The original squared radius is 5, and after enlarging by a scale factor of 4, the radius becomes $4\sqrt{5}$, and its square is $80$, which eliminates other options. Then, from the reflection step, we know the sign of the $y$-coordinate changes, resulting in $(y+4)$, which directly locks in the answer.

【Correct Answer】D

【Knowledge Point】Coordinate Geometry | **Syllabus**: MM3.2, MM8.2

---

### Example 2 (2017 P1 Q6 · Tangent to a Circle)

**Question**: A tangent to the circle $x^2 + y^2 = 144$ passes through the point $(20, 0)$ and intersects the positive $y$-axis. Find the $y$-coordinate of the intersection point of the tangent and the $y$-axis.

【Question Analysis】
A tangent to the circle $x^2 + y^2 = 144$ (radius 12, centre at the origin) passes through $(20, 0)$ and intersects the positive $y$-axis. Let the gradient of the tangent be $m$, and find the coordinates of the intersection point. Solve this using the core geometric condition that the distance from the tangent to the centre equals the radius.

【Solving Steps】
The tangent passes through $(20, 0)$, so its equation is $y = m(x - 20)$.

The distance from the centre $(0, 0)$ to the tangent equals the radius $12$. Using the perpendicular distance formula:
$$\frac{|m \cdot 0 - 0 - 20m|}{\sqrt{m^2 + 1}} = 12 \quad \Rightarrow \quad \frac{20|m|}{\sqrt{m^2 + 1}} = 12$$

Squaring both sides: $400m^2 = 144(m^2 + 1)$, which gives $256m^2 = 144$, i.e., $m^2 = \frac{9}{16}$.

Since the tangent intersects the **positive** $y$-axis, when $x = 0$, $y = -20m > 0$, so $m < 0$. Therefore, $m = -\frac{3}{4}$.

The $y$-coordinate of the intersection point is: $y = -20 \times \left(-\frac{3}{4}\right) = 15$.

【Quick Approach】
Using similar triangles allows for a faster solution: Let the intersection point of the tangent and the $y$-axis be $P(0, k)$, the point of tangency be $Q$, and the origin be $O$. In $\triangle OQP$, $OP = 20$, $OQ = 12$, and by Pythagoras' theorem, $QP = 16$ (a 3-4-5 triangle). Since $\triangle PQO \sim \triangle OQP$, we have $\frac{k}{12} = \frac{20}{16}$, thus $k = 15$.

【Correct Answer】B

【Knowledge Point】Coordinate Geometry | **Syllabus**: MM3.2, MM3.3

---

### Example 3 (2017 P1 Q9 · Circle and Regular Hexagon)

**Question**: The equation of a circle is $x^2 + y^2 - 18x - 22y + 178 = 0$. A regular hexagon is inscribed in the circle such that all its vertices lie on the circle. Find the area of the regular hexagon.

【Question Analysis】
Given the general equation of a circle, we first need to complete the square to find the centre and radius, and then use the area formula for a regular hexagon (since the radius of its circumcircle is known).

【Solving Steps】
Step 1: Complete the square to convert the circle's equation into standard form

$(x - 9)^2 + (y - 11)^2 - 9^2 - 11^2 + 178 = 0$
$(x - 9)^2 + (y - 11)^2 = 81 + 121 - 178 = 24$

The centre is $(9, 11)$, and the radius is $r = \sqrt{24}$.

Step 2: Analyse the geometric structure of the regular hexagon

When a regular hexagon is inscribed in a circle, its six radii divide it into 6 congruent equilateral triangles, each with a side length equal to the radius $r$.

Step 3: Calculate the area of a single equilateral triangle

Using the area formula $\frac{1}{2}ab\sin C$:
$S_{\triangle} = \frac{1}{2} r^2 \sin 60^\circ = \frac{1}{2} \cdot 24 \cdot \frac{\sqrt{3}}{2} = 6\sqrt{3}$

Step 4: Total area of the regular hexagon

$S = 6 \times 6\sqrt{3} = 36\sqrt{3}$

【Quick Approach】
The area formula for a regular hexagon inscribed in a circle is $\frac{3\sqrt{3}}{2}r^2$. Substituting $r^2 = 24$ directly gives $36\sqrt{3}$. The key is to use completing the square to find the squared radius first, without fully simplifying the radius.

【Correct Answer】F

【Knowledge Point】Coordinate Geometry | **Syllabus**: MM3.2

---

## 🏋️ After-Class Exercises (15 Minutes Time Limit)

| # | Question | Topic | Syllabus | Difficulty |
|---|------|------|---------|------|
| 1 | 2016 P2 Q8 | Inequality Regions | MM1.5, MM3.1 | ⭐⭐⭐ |
| 2 | 2016 P2 Q16 | Trapezium Diagonals | MM3.1, MM3.3 | ⭐⭐⭐ |
| 3 | 2017 P1 Q3 | Perpendicular Lines + Area | MM3.1, MM8.3 | ⭐⭐⭐ |
| 4 | 2017 P2 Q2 | Rectangle + Perpendicularity | MM3.1, MM3.3 | ⭐⭐⭐ |
| 5 | 2018 P1 Q3 | Shortest Distance Between Two Circles | MM3.2 | ⭐⭐⭐ |
| 6 | 2019 P1 Q6 | Intersecting Circles | MM3.2, MM3.3 | ⭐⭐⭐ |
| 7 | 2022 P1 Q2 | Existence of a Circle (Parameters) | MM3.2 | ⭐⭐⭐⭐ |
| 8 | 2023 P1 Q2 | Line and Parabola Do Not Intersect | MM3.1, MM8.7 | ⭐⭐⭐ |

---

*For full solutions, please refer to the question database, where every question includes 【Solving Steps】 and 【Quick Approach】.*

---

## 🎯 Supplementary Exercises

Finished this chapter? [→ Go to Coordinate Geometry practice questions](/practice/tmua/?topic=Coordinate%20Geometry)

---

**Module Knowledge Point Coverage**:
- Equations of Straight Lines: MM3.1, MM8.3 ✓
- Standard Equation of a Circle: MM3.2 ✓
- General Equation of a Circle and Completing the Square: MM3.2 ✓
- Properties of Circles and Tangents: MM3.3 ✓
- Intersection of Graphs and Area: MM8.7 ✓

**Recommended Teaching Sequence**: D1 (Straight Lines) → D2 (Circles) → D3 (Comprehensive Question Types), progressing step by step from easy to difficult.

---

*Handout Version: v1.0 | Generated Date: 2026-04-29*

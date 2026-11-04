---
title: "E Trigonometry"
---

## Module E: Trigonometry

> **Corresponding Syllabus Section 1**: MM4.1, MM4.2, MM4.3, MM4.4, MM4.5, MM4.6
> **Corresponding Paper**: High frequency in both P1 and P2 (41/320 questions, second largest topic)
> **Recommended Teaching Hours**: 2 hours | **Target Number of Questions**: 15-20 questions

---

## 📋 Module Overview

| Section | Content | Corresponding Syllabus | Past Paper Frequency | Hours |
|------|------|---------|-------------|------|
| E1 | Sine/Cosine rules, area of a triangle | MM4.1 | 8 times in 8 years | 0.5 |
| E2 | Radians, arc length, and sector area | MM4.2 | 12 times in 8 years | 0.5 |
| E3 | Exact values, graphs, and properties | MM4.3, MM4.4 | 15 times in 8 years | 0.5 |
| E4 | Identities and solving trigonometric equations | MM4.5, MM4.6 | 20 times in 8 years | 0.5 |

---

## E1 Sine/Cosine Rules and Area of a Triangle [MM4.1]

### 1.1 The Sine Rule

For any triangle ABC:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$

where $R$ is the radius of the circumscribed circle (circumcircle) of the triangle.

**Application Scenarios**:
- Given two angles and one side (AAS or ASA): To find other sides.
- Given two sides and one non-included angle (SSA): To find other angles (watch out for the **ambiguous case**).

**⚠️ Ambiguous Case (SSA)**: Given two sides $a, b$ and angle $A$, when $A$ is an acute angle and $b < a$, there could be two solutions, one solution, or no solution.

Method to check: Compare $b$ and $a\sin A$:
- $b > a\sin A$: Two solutions (angle $B$ can be acute or obtuse).
- $b = a\sin A$: One solution (right-angled triangle).
- $b < a\sin A$: No solution.

### 1.2 The Cosine Rule

$$c^2 = a^2 + b^2 - 2ab\cos C$$

**Application Scenarios**:
- Given three sides (SSS): To find angles.
- Given two sides and the included angle (SAS): To find the third side.

**Derivation Insight**: When $C = 90^\circ$, $\cos C = 0$, the formula becomes Pythagoras' theorem $c^2 = a^2 + b^2$. The cosine rule is a generalization of Pythagoras' theorem.

### 1.3 Area of a Triangle

$$\text{Area} = \frac{1}{2} ab \sin C$$

This formula applies to **any triangle**, and you don't need to know the perpendicular height.

**⚡ Quick Memory Tip**: The area is half the product of two sides multiplied by the sine of the included angle. You just need two sides and their included angle to find the area.

---

## E2 Radians, Arc Length, and Sector Area [MM4.2]

### 2.1 Definition of Radians

Conversion between degrees and radians:

$$180^\circ = \pi \text{ radians}$$

Common conversions:

| Degrees | Radians | Notes |
|------|------|------|
| 0° | 0 | - |
| 30° | $\frac{\pi}{6}$ | - |
| 45° | $\frac{\pi}{4}$ | - |
| 60° | $\frac{\pi}{3}$ | - |
| 90° | $\frac{\pi}{2}$ | - |
| 180° | $\pi$ | Semicircle |
| 270° | $\frac{3\pi}{2}$ | - |
| 360° | $2\pi$ | Full circle |

**Conversion Rule**: Multiply degrees by $\frac{\pi}{180}$ to get radians; multiply radians by $\frac{180}{\pi}$ to get degrees.

### 2.2 Arc Length Formula

$$l = r\theta$$

where $\theta$ is the angle subtended at the centre in **radians**. If the angle is given in degrees, it must be converted to radians first.

**Note**: In radians, the formula is simple with no extra coefficients; in degrees, it requires $l = \frac{r\theta\pi}{180}$.

### 2.3 Sector Area Formula

$$\text{Area} = \frac{1}{2} r^2 \theta$$

where $\theta$ is the angle subtended at the centre in radians.

**Derivation Insight**: The area of a full circle $\pi r^2$ corresponds to $2\pi$ radians. The proportion is $\frac{\theta}{2\pi}$, thus the area of a sector $= \pi r^2 \times \frac{\theta}{2\pi} = \frac{1}{2} r^2 \theta$.

**⚡ Simplified Memory Tip**: Half the arc length multiplied by the radius, i.e., $\text{Area} = \frac{1}{2} lr$.

---

## E3 Exact Values, Trigonometric Graphs, and Properties [MM4.3, MM4.4]

### 3.1 Exact Values of Trigonometric Functions

**Table to Memorize**:

| Angle | Radians | $\sin$ | $\cos$ | $\tan$ |
|------|------|--------|--------|--------|
| 0° | 0 | 0 | 1 | 0 |
| 30° | $\frac{\pi}{6}$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ |
| 45° | $\frac{\pi}{4}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | 1 |
| 60° | $\frac{\pi}{3}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| 90° | $\frac{\pi}{2}$ | 1 | 0 | undefined |

**Memory Tricks**:
- $\sin$: From $0$ to $1$, values are $\frac{\sqrt{n}}{2}$ for $n = 0, 1, 2, 3, 4$.
- $\cos$: From $1$ to $0$, in reverse order.
- $\tan = \frac{\sin}{\cos}$: From 0° to 60°, the sequence is $0, \frac{1}{\sqrt{3}}, 1, \sqrt{3}$ (increasing).

### 3.2 Trigonometric Graphs

**Graph of $\sin x$**:
- Period: $2\pi$
- Amplitude: 1 (ranges from $-1$ to $1$)
- Starts at $(0, 0)$, moves upwards first.

**Graph of $\cos x$**:
- Period: $2\pi$
- Amplitude: 1
- Starts at $(0, 1)$, moves downwards first (can be viewed as $\sin(x + \frac{\pi}{2})$).

**Graph of $\tan x$**:
- Period: $\pi$ (shorter than sine/cosine)
- Unbounded (undefined at $x = \frac{\pi}{2}, \frac{3\pi}{2}, \ldots$)
- Monotonically increasing (within each period).

### 3.3 Symmetry and Periodicity

**Properties of $\sin x$**:
- Periodicity: $\sin(x + 2\pi) = \sin x$
- Origin symmetry (odd function): $\sin(-x) = -\sin x$
- Supplementary angle identity: $\sin(\pi - x) = \sin x$

**Properties of $\cos x$**:
- Periodicity: $\cos(x + 2\pi) = \cos x$
- $y$-axis symmetry (even function): $\cos(-x) = \cos x$
- Supplementary angle identity: $\cos(\pi - x) = -\cos x$

**Properties of $\tan x$**:
- Periodicity: $\tan(x + \pi) = \tan x$
- Origin symmetry (odd function): $\tan(-x) = -\tan x$

**⚡ Problem-Solving Tool**: Use periodicity to simplify large angles, and use symmetry to handle negative angles.

---

## E4 Identities and Solving Trigonometric Equations [MM4.5, MM4.6]

### 4.1 Core Identities

**Identity 1**:

$$\tan\theta = \frac{\sin\theta}{\cos\theta}$$

**Identity 2 (Pythagorean Identity)**:

$$\sin^2\theta + \cos^2\theta = 1$$

**Deductions**:
- $\sin^2\theta = 1 - \cos^2\theta$
- $\cos^2\theta = 1 - \sin^2\theta$
- $1 + \tan^2\theta = \frac{1}{\cos^2\theta}$ (secant)

### 4.2 Strategies for Solving Trigonometric Equations

**Basic Types**:

| Equation Type | Solution Method | Example |
|---------|------|------|
| $\sin x = k$ | Two solutions (in one period) | $\sin x = \frac{1}{2}$ → $x = \frac{\pi}{6}, \frac{5\pi}{6}$ |
| $\cos x = k$ | Two solutions (positive/negative symmetry) | $\cos x = \frac{1}{2}$ → $x = \pm\frac{\pi}{3}$ |
| $\tan x = k$ | One solution (monotonic) | $\tan x = 1$ → $x = \frac{\pi}{4} + n\pi$ |

**⚠️ The Range of Solutions is Crucial**:
- Read the question carefully: Is the range of $x$ in $[0, 2\pi]$? $[0^\circ, 360^\circ]$? Or something else?
- Sketch graphs to help determine the number and position of solutions.
- The period of $\tan x$ is $\pi$, not $2\pi$.

### 4.3 Quadratic Trigonometric Equations

Equations like $a\sin^2 x + b\sin x + c = 0$:

**Solution Steps**:
1. Substitute using identities (e.g., $\cos^2 x = 1 - \sin^2 x$).
2. Simplify into a quadratic equation in terms of a single trigonometric function.
3. Solve the quadratic equation to get values for the trigonometric function.
4. Find the angle $x$.

**⚡ Trick**: Let $t = \sin x$ or $t = \cos x$, converting to $at^2 + bt + c = 0$.

### 4.4 Graph Intersection Method

For transcendental equations (e.g., $x\sin x = \cos x$), exact analytical solutions cannot be found:

**Strategy**:
1. Rearrange to represent the intersection of two functions: $\tan x = \frac{1}{x}$.
2. Sketch the graphs of both functions.
3. Observe the number of intersection points.

**Key Points**:
- Use periodicity to determine how many periods fall within the given range.
- Use amplitude and monotonicity to determine if they intersect.
- Check special points: endpoints, extrema.

---

## ⚡ Summary of Quick Tricks

| Scenario | Trick |
|------|------|
| Calculating exact values | Memorize the table, $\sin$ goes from $\frac{0}{2}$ to $\frac{2}{2}$, $\cos$ is the reverse. |
| Arc length/sector area | In radians, formulas have no extra coefficients: $l = r\theta$, $A = \frac{1}{2}r^2\theta$. |
| Solving trigonometric equations | Sketch graphs first to determine the number and position of solutions. |
| Simplifying large angles | Use periodicity: $\sin(x + 2\pi) = \sin x$, $\tan(x + \pi) = \tan x$. |
| Handling negative angles | Use symmetry: $\sin(-x) = -\sin x$, $\cos(-x) = \cos x$. |
| Quadratic equations | Let $t = \sin x$, converting to $at^2 + bt + c = 0$. |
| SSA problems | Check for the ambiguous case, which can have 0, 1, or 2 solutions. |

## ⚠️ Common Mistakes Warning

- ❌ The period of $\tan$ is $\pi$, **not** $2\pi$ (easy to miss solutions).
- ❌ $\sin x = k$ has **two solutions** within one period, not just one (unless $k = \pm 1$).
- ❌ Always clarify the range of $x$ before solving equations; **do not default** to $[0, 2\pi]$ or $[0^\circ, 360^\circ]$.
- ❌ In the arc length formula $l = r\theta$, $\theta$ must be in **radians**; degrees require conversion.
- ❌ The exact value $\tan 90^\circ$ is undefined; **do not write** $\tan 90^\circ = \infty$.
- ❌ SSA (two sides and one angle) can result in an ambiguous case; you must check the relationship between $b$ and $a\sin A$.

---

## 📝 Selected Examples

### Example 1 (2018 P1 Q6 · Number of Solutions to a Trigonometric Equation)

**Question**: Find the number of solutions of the equation

$$x \sin 2x = \cos 2x$$

with $0 \le x \le 2\pi$.

【Problem Analysis】
This question tests finding the number of solutions for a transcendental equation. The equation cannot be solved exactly, but the number of solutions can be determined by the graph intersection method. The idea is to isolate trigonometric functions on one side and convert it into finding intersections of two function graphs.

【Solution Steps】
Step 1: Rearrange the equation

If $\cos 2x = 0$, then $\sin 2x = \pm 1$, and the equation becomes $x \cdot (\pm 1) = 0$, giving $x = 0$. However, when $x = 0$, $\cos 0 = 1 \neq 0$, which is a contradiction. Therefore, $\cos 2x \neq 0$.

Divide both sides by $\cos 2x$: $x \tan 2x = 1$. Then divide by $x$ (since $x \neq 0$):

$$\tan 2x = \frac{1}{x}$$

Step 2: Analyze the number of intersections

Let $t = 2x$, then $t \in [0, 4\pi]$. The equation becomes:

$$\tan t = \frac{2}{t}$$

In $t \in (0, 4\pi]$, $y = \tan t$ has four positive branches:
- $(0, \frac{\pi}{2})$: From 0 to $+\infty$
- $(\pi, \frac{3\pi}{2})$: From 0 to $+\infty$
- $(2\pi, \frac{5\pi}{2})$: From 0 to $+\infty$
- $(3\pi, \frac{7\pi}{2})$: From 0 to $+\infty$

$y = \frac{2}{t}$ is strictly decreasing on each branch, starting from a large value down to near 0.

Step 3: Determine if each branch intersects

In each branch, $\tan t$ rises from 0 to $+\infty$, while $\frac{2}{t}$ drops from a finite value to near 0. They must intersect exactly once per branch.

With one intersection per branch across four branches, there are **4 solutions** in total.

【Quick Approach】
Rewrite the equation as $\tan 2x = \frac{1}{x}$. Over $[0, 2\pi]$, $2x$ covers $[0, 4\pi]$, and $\tan t$ has 4 complete periodic branches. Each branch goes from 0 to $+\infty$, and it must intersect exactly once with $\frac{2}{t}$ (which is strictly decreasing). Directly deduce 4 solutions.

【Correct Answer】E (4 solutions)

【Topic】Trigonometry | **Syllabus**: MM4.5, MM4.6

---

### Example 2 (2022 P1 Q4 · Arc Length and Sector Area)

**Question**: These sectors of circles are similar.

The arc length of the smaller sector is 6.

The difference between the areas of the sectors is 21.

Find the positive difference between the perimeters of the sectors.

【Problem Analysis】
Two similar sectors (same central angle), with the smaller sector's arc length given as 6, and the difference in their areas is 21. From the diagram, the larger sector's radius is 3 greater than the smaller sector's. Find the difference in their perimeters.

【Solution Steps】
Step 1: Define variables

Let the central angle be $\theta$ (in radians), and the smaller sector's radius be $r$.

Using the arc length formula: $r\theta = 6$, so $\theta = \frac{6}{r}$.

Step 2: Calculate areas

Area of the smaller sector: $A_1 = \frac{1}{2}r^2\theta = \frac{1}{2}r^2 \cdot \frac{6}{r} = 3r$.

The larger sector's radius is $r + 3$, so its area is: $A_2 = \frac{1}{2}(r+3)^2\theta = \frac{3(r+3)^2}{r}$.

Step 3: Use the area difference to find $r$

Given $A_2 - A_1 = 21$:

$$\frac{3(r+3)^2}{r} - 3r = 21$$

Multiply both sides by $r$: $3(r+3)^2 - 3r^2 - 21r = 0$

Expand: $3(r^2 + 6r + 9) - 3r^2 - 21r = 0$

Simplify: $18r + 27 - 21r = 0$

Solve to get: $-3r + 27 = 0$, which gives $r = 9$.

Step 4: Calculate the difference in perimeters

Perimeter of the smaller sector: $P_1 = 2r + l = 2 \times 9 + 6 = 24$.

The larger sector's radius is $12$, and its arc length is $(r+3)\theta = 12 \times \frac{6}{9} = 8$.

Perimeter of the larger sector: $P_2 = 2 \times 12 + 8 = 32$.

Difference in perimeters: $32 - 24 = 8$.

【Quick Approach】
For similar sectors, the ratio of their areas is the square of the ratio of their radii. Let the scale factor be $k = \frac{r+3}{r}$, then $\frac{A_2}{A_1} = k^2$. Using $A_2 - A_1 = 21$ and $A_1 = 3r$, find $r$ and the perimeter difference directly.

【Correct Answer】C (8)

【Topic】Trigonometry | **Syllabus**: MM4.2

---

### Example 3 (2016 P1 Q8 · Solving Trigonometric Equations)

**Question**: Find the maximum angle $x$ in the range $0^\circ \le x \le 360^\circ$ which satisfies the equation

$$\cos^2(2x) + \sqrt{3} \sin(2x) - \frac{7}{4} = 0$$

【Problem Analysis】
This question involves solving a quadratic trigonometric equation. Use the identity $\cos^2\theta = 1 - \sin^2\theta$ to convert it into a quadratic equation in terms of $\sin(2x)$.

【Solution Steps】
Step 1: Substitute using the identity

$$\cos^2(2x) = 1 - \sin^2(2x)$$

Substitute into the equation:

$$1 - \sin^2(2x) + \sqrt{3}\sin(2x) - \frac{7}{4} = 0$$

Rearrange:

$$\sin^2(2x) - \sqrt{3}\sin(2x) + \frac{3}{4} = 0$$

Step 2: Solve the quadratic equation

Let $t = \sin(2x)$:

$$t^2 - \sqrt{3}\,t + \frac{3}{4} = 0$$

The discriminant is $\Delta = (\sqrt{3})^2 - 4 \times \frac{3}{4} = 3 - 3 = 0$, indicating a repeated root at $t = \frac{\sqrt{3}}{2}$.

Step 3: Find the angles

Since $x \in [0^\circ, 360^\circ]$, we have $2x \in [0^\circ, 720^\circ]$.

The solutions to $\sin(2x) = \frac{\sqrt{3}}{2}$ are: $2x = 60^\circ, 120^\circ, 420^\circ, 480^\circ$.

The corresponding values for $x$ are: $30^\circ, 60^\circ, 210^\circ, 240^\circ$.

Step 4: Find the maximum value

Out of the four solutions, the largest is $240^\circ$.

【Quick Approach】
The quadratic equation has a discriminant of zero, leading directly to $\sin(2x) = \frac{\sqrt{3}}{2}$. Find all solutions in the interval $[0^\circ, 720^\circ]$, remembering that $x$ is half the angle, and then take the maximum.

【Correct Answer】F ($240^\circ$)

【Topic】Trigonometry | **Syllabus**: MM4.5, MM4.6

---

## 🏋️ Practice Exercises (15-minute time limit)

| # | Question | Topic | Syllabus | Difficulty |
|---|------|------|---------|------|
| 1 | 2016 P1 Q10 | Trigonometric equations | MM4.6 | ⭐⭐⭐ |
| 2 | 2016 P1 Q17 | Exact values calculation | MM4.3 | ⭐⭐⭐ |
| 3 | 2016 P2 Q3 | Sine rule | MM4.1 | ⭐⭐⭐ |
| 4 | 2016 P2 Q17 | Properties of trigonometric functions | MM4.4 | ⭐⭐⭐ |
| 5 | 2017 P1 Q8 | Trigonometric equations | MM4.6 | ⭐⭐⭐ |
| 6 | 2017 P1 Q20 | Graph intersections | MM4.4, MM4.6 | ⭐⭐⭐ |
| 7 | 2017 P2 Q4 | Radians | MM4.2 | ⭐⭐⭐ |
| 8 | 2017 P2 Q12 | Trigonometric identities | MM4.5 | ⭐⭐⭐ |
| 9 | 2018 P1 Q18 | Trigonometric equations | MM4.6 | ⭐⭐⭐ |
| 10 | 2018 P1 Q19 | Exact values | MM4.3 | ⭐⭐⭐ |
| 11 | 2018 P1 Q20 | Trigonometric graphs | MM4.4 | ⭐⭐⭐ |
| 12 | 2018 P2 Q4 | Arc length calculation | MM4.2 | ⭐⭐⭐ |
| 13 | 2019 P1 Q2 | Trigonometric equations | MM4.6 | ⭐⭐⭐ |
| 14 | 2020 P1 Q3 | Radians | MM4.2 | ⭐⭐⭐ |
| 15 | 2020 P1 Q18 | Graph intersections | MM4.4, MM4.6 | ⭐⭐⭐ |

---

*For full step-by-step solutions, refer to the question bank database, where each question comes with 【Solution Steps】 and a 【Quick Approach】.*

---

## 🎯 Companion Practice

Finished studying this chapter? [→ Head over to practice Trigonometry questions](/practice/tmua/?topic=Trigonometry)

---

**Editorial Notes**:
- These notes cover all topics under the MM4.1-MM4.6 syllabus.
- 15 questions have been carefully selected from a total of 41, ensuring a well-rounded distribution of concepts.
- The chosen examples are highly representative past paper questions, covering three typical question types: solving equations, arc length & sectors, and graph intersections.
- The quick tricks and common mistake warnings are all compiled from years of analyzing past paper solutions.

---

*Last updated: 2026-04-29*

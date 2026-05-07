---
title: "FP3 Chapter 2: Further Coordinate Systems"
---

# FP3 Lecture Notes: Ellipses and Hyperbolas

## Introduction

Having explored parabolas and rectangular hyperbolas in the previous modules, we now turn our attention to their cousins: ellipses and general hyperbolas. These curves appear frequently in nature and have fascinating applications, from planetary orbits to satellite dishes. We'll discover how these curves are unified through the concept of eccentricity and explore their geometric properties.

:::note[Chapter Overview]
This chapter covers the identification of ellipses and hyperbolas from their equations, finding foci, directrices, and eccentricity, and solving loci problems. It also includes finding tangents and normals to these curves.
:::

:::caution[Examination Focus Areas]
Based on past papers and examiner reports, these areas require particular attention:

**1. Calculus Applications**

- Parametric differentiation vs. implicit differentiation
- Finding equations of tangents and normals
- Area calculations involving points on conics

**2. Geometric Understanding**

- Relationship between parameters and shape
- Interpretation of negative coordinates
- Understanding of loci problems

**3. Technical Proficiency**

- Correct use of standard forms
- Manipulation of trigonometric identities
- Clear presentation of working
:::

## Module 2.1: Ellipses

### Definition and Standard Form

:::note[Definition: Ellipse]
An ellipse is a conic section defined by slicing a cone with a plane that is inclined to the axis of the cone, resulting in a closed curve.
:::

:::note[Standard Forms]
For an ellipse centred at the origin:

1. **Cartesian equation:** $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ where $a > b > 0$
2. **Parametric equations:** $x = a\cos t$, $y = b\sin t$ where $0 \leq t < 2\pi$
:::

![Ellipse diagram](/images/fp3-ellipse.svg)

### Example: Deriving Tangent and Normal Equations

Let's derive the equation of the tangent to the ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ at point $P(x_1, y_1)$ using two different methods.

**Finding Tangent using Implicit Differentiation**

1. Differentiate both sides with respect to $x$:

$$\frac{2x}{a^2} + \frac{2y}{b^2}\frac{dy}{dx} = 0$$

2. Solve for $\dfrac{dy}{dx}$:

$$\frac{dy}{dx} = -\frac{b^2x}{a^2y}$$

3. At point $P(x_1, y_1)$, the gradient is:

$$m = -\frac{b^2x_1}{a^2y_1}$$

4. Use point-gradient form $y - y_1 = m(x - x_1)$:

$$y - y_1 = -\frac{b^2x_1}{a^2y_1}(x - x_1)$$

5. Multiply throughout by $a^2y_1$:

$$a^2y_1y - a^2y_1^2 = -b^2x_1x + b^2x_1^2$$

6. Since $(x_1, y_1)$ lies on the ellipse: $\dfrac{x_1^2}{a^2} + \dfrac{y_1^2}{b^2} = 1$

7. After simplification:

$$\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$$

**Finding Tangent using Parametric Differentiation**

1. Use parametric equations: $x = a\cos t$, $y = b\sin t$

2. Find $\dfrac{dy}{dx}$:

$$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{b\cos t}{-a\sin t} = -\frac{b\cos t}{a\sin t}$$

3. Use point-gradient form:

$$y - b\sin t = -\frac{b\cos t}{a\sin t}(x - a\cos t)$$

4. Simplify to:

$$bx\cos t + ay\sin t = ab$$

**Finding Normal using Parametric Form**

1. At point $P(a\cos t, b\sin t)$
2. Normal gradient: $\dfrac{a\sin t}{b\cos t}$
3. Form equation:

$$y - b\sin t = \frac{a\sin t}{b\cos t}(x - a\cos t)$$

4. Simplify to:

$$ax\sin t - by\cos t = (a^2 - b^2)\cos t\sin t$$

### Example: Finding a Normal

Find the normal to the ellipse $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$ at $P(5\cos\theta, 3\sin\theta)$.

**Step 1:** Find $\dfrac{dy}{dx}$ using parametric differentiation

$$\frac{dy}{dx} = \frac{3\cos\theta}{-5\sin\theta} = -\frac{3\cos\theta}{5\sin\theta}$$

**Step 2:** Use perpendicular gradient rule for normal

$$\text{Normal gradient} = \frac{5\sin\theta}{3\cos\theta}$$

**Step 3:** Form equation using point-gradient form

$$y - 3\sin\theta = \frac{5\sin\theta}{3\cos\theta}(x - 5\cos\theta)$$

**Step 4:** Simplify to standard form

$$5x\sin\theta - 3y\cos\theta = 16\sin\theta\cos\theta$$

:::caution[Common Errors to Avoid]
- Don't forget to negate the reciprocal for perpendicular gradient
- Show clear substitution of point coordinates
- Include intermediate steps in simplification
:::

:::tip[Application: Whispering Gallery]
The elliptical dome of certain buildings exhibits an interesting acoustic property: a whisper at one focus can be clearly heard at the other focus. This is because sound waves emanating from one focus are reflected by the elliptical surface to the other focus.

This principle is used in:

- St. Paul's Cathedral, London
- Grand Central Terminal, New York
- The Mormon Tabernacle, Salt Lake City
:::

![Elliptical orbit with Sun at focus](/images/fp3-conic-ellipse-orbit.svg)

## Module 2.2: Hyperbolas

### Definition and Standard Form

:::note[Definition: Hyperbola]
A hyperbola is a conic section defined by slicing a cone with a plane that is parallel to the axis of the cone, resulting in two separate branches.
:::

:::note[Standard Forms]
For a hyperbola centred at the origin with horizontal transverse axis:

1. **Cartesian equation:** $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ where $a, b > 0$
2. **Parametric equations:** $x = a\cosh t$, $y = b\sinh t$ where $t \in \mathbb{R}$
3. **Alternative parametric equations:** $x = a\sec \theta$, $y = b\tan \theta$ where $-\pi \leq \theta < \pi$, $\theta \neq \pm\dfrac{\pi}{2}$
:::

![Hyperbola diagram](/images/fp3-hyperbola.svg)

### Deriving Tangent and Normal Equations for Hyperbolas

:::tip[Guided Exercise: Tangent and Normal Equations]
Consider a hyperbola $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$. Let's derive its tangent and normal equations following similar methods to those used for ellipses.

**Part 1: Using Implicit Differentiation**

(a) Differentiate the equation of the hyperbola with respect to $x$

(b) Find $\dfrac{dy}{dx}$ at point $P(x_1,y_1)$

(c) Use point-gradient form to write the equation of the tangent

(d) Simplify to show that the tangent equation is $\dfrac{x_1x}{a^2} - \dfrac{y_1y}{b^2} = 1$

**Part 2: Using Parametric Form**

Given that a point on the hyperbola can be written as $(a\cosh t, b\sinh t)$ or $(a\sec \theta, b\tan \theta)$:

(a) Find $\dfrac{dy}{dx}$ using parametric differentiation

(b) Write the equation of the tangent at $P(a\cosh t, b\sinh t)$ or $P(a\sec \theta, b\tan \theta)$

(c) Show that this leads to $bx\cosh t - ay\sinh t = ab$ or $bx\sec \theta - ay\tan \theta = ab$

**Part 3: Finding the Normal**

(a) Use the perpendicular gradient rule to find the normal gradient

(b) Write the equation of the normal at $P(a\cosh t, b\sinh t)$ or $P(a\sec \theta, b\tan \theta)$

(c) Show that this leads to $ax\sinh t + by\cosh t = (a^2 + b^2)\sinh t\cosh t$ or $ax\sin \theta + by = (a^2 + b^2)\tan \theta$

**Hints:**

- Use the fact that $P(x_1,y_1)$ lies on the hyperbola: $\dfrac{x_1^2}{a^2} - \dfrac{y_1^2}{b^2} = 1$
- For parametric form, recall that $\cosh^2 t - \sinh^2 t = 1$ and $\sec^2 \theta - \tan^2 \theta = 1$
:::

## Module 2.3: Eccentricity

:::note[From Parabolas to Eccentricity]
Recall that for a parabola, any point $P$ on the curve satisfies:

$$PF = PM$$

where $F$ is the focus and $M$ is the foot of the perpendicular from $P$ to the directrix.

This leads to a natural generalisation: What if we consider curves where

$$\frac{PF}{PM} = e$$

where $e$ is some constant? This ratio $e$ is called the **eccentricity**.
:::

![Parabola with focus and directrix](/images/fp3-parabola-focus-directrix.svg)

:::note[Visualising Different Eccentricities]

| $e = 0$ | $0 < e < 1$ | $e = 1$ | $e > 1$ |
|---|---|---|---|
| Circle | Ellipse | Parabola | Hyperbola |
:::

![Eccentricity comparison of conic sections](/images/fp3-eccentricity-comparison.svg)

### Example: Deriving the Ellipse Equation

Let's derive the standard form of an ellipse using the eccentricity definition.

**Given:**

- Focus $F(c,0)$
- Directrix $x = \dfrac{a}{e}$
- Point $P(x,y)$ on the curve
- $\dfrac{PF}{PM} = e$ where $0 < e < 1$

**Step 1:** Express $PF$ using distance formula

$$PF = \sqrt{(x-c)^2 + y^2}$$

**Step 2:** Express $PM$

$$PM = \frac{a}{e} - x$$

**Step 3:** Apply the definition

$$\frac{\sqrt{(x-c)^2 + y^2}}{\frac{a}{e} - x} = e$$

**Step 4:** Square both sides and simplify

$$(x-c)^2 + y^2 = e^2\!\left(\frac{a^2}{e^2} - \frac{2ax}{e} + x^2\right)$$

**Step 5:** Show that this reduces to

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$

where $b^2 = a^2(1-e^2)$.

:::tip[Guided Exercise: Deriving the Hyperbola Equation]
Now it's your turn! Follow similar steps to derive the standard form of a hyperbola.

**Given:**

- Focus $F(c,0)$
- Directrix $x = \dfrac{a}{e}$
- Point $P(x,y)$ on the curve
- $\dfrac{PF}{PM} = e$ where $e > 1$

**Hints:**

1. The key difference will be that $e > 1$
2. You should arrive at $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ where $b^2 = a^2(e^2-1)$
:::

:::note[Historical Note: Discovery of Eccentricity]
**Did You Know?** Halley's Comet has an eccentricity of 0.967, making its orbit highly elliptical. This explains why it's only visible from Earth every 76 years!
:::

![Hyperbolic comet trajectory](/images/fp3-conic-hyperbola-comet.svg)

### Comprehensive Exercise: Hyperbola and Eccentricity

Consider a hyperbola $H$ with equation $\dfrac{x^2}{a^2} - \dfrac{y^2}{25} = 1$ where $a$ is a positive constant. Let $e$ be its eccentricity.

**Part A:** Find $e^2$ in terms of $a$.

**Part B:** The line $l$ is the directrix of $H$ for which $x > 0$. Points $A$ and $A'$ are where $l$ intersects the asymptotes. Find $|AA'|$ in terms of $e$.

**Part C:** Point $F$ is the focus of $H$ for which $x < 0$. Given that the area of triangle $AFA'$ is $\dfrac{164}{3}$, show that:

$$30a^3 - 164a^2 + 375a - 4100 = 0$$

**Part D:** Using algebra, show that $a = \dfrac{20}{3}$ is the only possible value.

**Key Learning Points:**

- Relationship between eccentricity and the constants $a$ and $b$
- Using asymptotes to find intersections with directrix
- Area calculations involving focus and directrix

## Module 2.4: Loci Problems

:::note[Introduction to Loci Problems]
Finding the locus (path) of a point that satisfies certain conditions is a common type of problem. The key steps are:

1. Identify the moving point and parameters
2. Express coordinates in terms of parameter(s)
3. Eliminate parameter(s) to find the equation of the locus
:::

### Example: Finding Locus of Midpoint

Consider an ellipse $E$ with equation $\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$ and a line $l: y = kx - 3$ where $k$ is a constant. Let's explore how to find the locus of the midpoint of the chord formed by the intersection of $E$ and $l$.

**Step-by-Step Investigation:**

**1. Finding Intersection Points**

- Substitute $y = kx - 3$ into the ellipse equation
- Show that $x$ satisfies: $(9k^2 + 4)x^2 - 54kx + 45 = 0$
- What does this tell us about the number of intersection points?

**2. Locating the Midpoint**

- If $P(x_1,y_1)$ and $Q(x_2,y_2)$ are intersection points
- Midpoint $M$ has coordinates $\left(\dfrac{x_1+x_2}{2}, \dfrac{y_1+y_2}{2}\right)$
- For a quadratic $ax^2 + bx + c = 0$, sum of roots $= -\dfrac{b}{a}$

**3. Finding the Locus**

- Express $x$-coordinate of $M$: $x = \dfrac{27k}{9k^2+4}$
- Express $y$-coordinate of $M$: $y = -\dfrac{12}{9k^2+4}$
- Eliminate parameter $k$ to find the equation of the locus

**Key Insights:**

- The quadratic equation helps us find intersection points without solving explicitly
- The sum and product of roots give us information about the midpoint
- The final locus has form $x^2 + py^2 = qy$ where $p$ and $q$ are constants

**Solution:** The locus is $x^2 + \dfrac{9}{4}y^2 = -\dfrac{27}{4}y$.

### Example: Finding Intersection of Normals

Consider a parabola $y^2 = 4ax$. Let $P(ap^2, 2ap)$ and $Q(aq^2, 2aq)$ be two points on the parabola, and let $R$ be the intersection of their normals. The chord $PQ$ passes through the focus $(a,0)$.

(a) Find the coordinates of point $R$ in terms of $p$ and $q$.

(b) Prove that $pq = -1$.

(c) Prove that the locus of $R$ is a parabola with equation $y^2 = a(x-3a)$.

**Solution:**

**(a)** To find coordinates of $R$:

- Normal at $P$: $y + px = 2ap + ap^3$
- Normal at $Q$: $y + qx = 2aq + aq^3$
- Solving these equations simultaneously:

$$(p-q)x = 2a(p-q) + a(p^3-q^3)$$

$$x = 2a + a(p^2 + pq + q^2)$$

$$y = -apq(p+q)$$

**(b)** To prove $pq = -1$:

Since $P$, $Q$, and $F(a,0)$ are collinear:

$$\frac{2ap-0}{ap^2-a} = \frac{2aq-0}{aq^2-a}$$

$$\frac{2p}{p^2-1} = \frac{2q}{q^2-1}$$

$$p(q^2-1) = q(p^2-1)$$

$$pq^2 - p = qp^2 - q$$

$$pq^2 - qp^2 = p - q$$

$$pq(q-p) = p - q$$

$$pq = -1$$

**(c)** To find the locus of $R$:

Using $pq = -1$:

$$x = 3a + a(p+q)^2$$

$$y = a(p+q)$$

Let $k = p+q$, then:

$$x = 3a + ak^2$$

$$y = ak$$

Eliminating parameter $k$:

$$y^2 = a(x-3a)$$

Therefore, the locus of $R$ is a parabola with equation $y^2 = a(x-3a)$.

## Summary

:::note[Key Points]
1. Ellipses and hyperbolas are conic sections unified by eccentricity
2. Standard forms help identify and analyse these curves
3. Practical applications include:
   - Planetary orbits (ellipses)
   - Satellite dishes (parabolas)
   - Cooling towers (hyperbolas)
   - Navigation systems (hyperbolas)
4. Understanding tangents and normals is crucial for applications
:::

:::caution[Common Student Mistakes]
- Confusing $a$ and $b$ when $b > a$
- Forgetting to justify steps in proofs
- Not showing intermediate steps when finding tangents/normals
- Incorrect application of the perpendicular gradient rule
- Mishandling negative coordinates in area calculations
:::

## Homework Questions

### E.O.C.1 (Q03 WFM03/01, Jan 2024)

The ellipse $E$ has equation $\dfrac{x^2}{49} + \dfrac{y^2}{b^2} = 1$ where $b$ is a constant and $0 < b < 7$. The eccentricity of the ellipse is $e$.

**(a)** Write down, in terms of $e$ only:

- The coordinates of the foci
- The equations of the directrices

Given that:

- the point $P(x, y)$ lies on $E$ where $x > 0$
- the point $S$ is the focus of $E$ on the positive $x$-axis
- the line $l$ is the directrix of $E$ which crosses the positive $x$-axis
- the point $M$ lies on $l$ such that the line through $P$ and $M$ is parallel to the $x$-axis

**(b)** For point $P(x,y)$ on $E$ where $x > 0$, find expressions for:

- $PS^2$ in terms of $e$, $x$, and $y$
- $PM^2$ in terms of $e$ and $x$

**(c)** Hence show that $b^2 = 49(1-e^2)$.

**(d)** Given that $E$ crosses the $y$-axis at $(0,\pm 4\sqrt{3})$, determine the value of $e$.

**(e)** Given that the $x$-coordinate of $P$ is $\dfrac{7}{2}$, determine the area of triangle $OPM$ where $O$ is the origin.

### E.O.C.2 (6669/s11/01/8)

The hyperbola $H$ has equation $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$.

**(a)** Use calculus to show that the equation of the tangent to $H$ at the point $(a\cosh \theta, b\sinh \theta)$ may be written in the form:

$$xb\cosh \theta - ya\sinh \theta = ab$$

**(b)** The line $l_1$ is the tangent to $H$ at the point $(a\cosh \theta, b\sinh \theta)$, $\theta \neq 0$. Given that $l_1$ meets the $x$-axis at point $P$, find, in terms of $a$ and $\theta$, the coordinates of $P$.

**(c)** The line $l_2$ is the tangent to $H$ at the point $(a,0)$. Given that $l_1$ and $l_2$ meet at the point $Q$, find, in terms of $a$, $b$ and $\theta$, the coordinates of $Q$.

**(d)** Show that, as $\theta$ varies, the locus of the mid-point of $PQ$ has equation:

$$x(4y^2 + b^2) = ab^2$$

### Challenge Problem (Optional): Coordinate Transformation and Conics

Consider the hyperbola with equation $xy = 1$. We will prove this is equivalent to a standard form hyperbola through coordinate transformation.

**Part 1: Matrix Representation**

(a) Show that $xy = 1$ can be written as a quadratic form:

$$\begin{bmatrix} x & y \end{bmatrix} \begin{bmatrix} 0 & \frac{1}{2} \\ \frac{1}{2} & 0 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = 1$$

(b) Explain why this matrix is not in diagonal form.

**Part 2: Coordinate Transformation**

(a) Given that:

$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{bmatrix} \begin{bmatrix} X \\ Y \end{bmatrix}$$

Show that:

$$\begin{bmatrix} x & y \end{bmatrix} = \begin{bmatrix} X & Y \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{bmatrix}$$

(b) Under this transformation, prove that the equation becomes:

$$\frac{X^2}{2} - \frac{Y^2}{2} = 1$$

**Extension Question:** What happens if we consider the curve $xy = k$ where $k \neq 0$? How does the value of $k$ affect the shape of the hyperbola?

:::note[Remark: Matrix Diagonalisation]

**1. Matrix Diagonalisation**

In Part 2, we found a matrix $P = \begin{bmatrix} \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \end{bmatrix}$ such that $P^{-1}AP = D$, where $A = \begin{bmatrix} 0 & \frac{1}{2} \\ \frac{1}{2} & 0 \end{bmatrix}$ and $D$ is a diagonal matrix. This process is called **matrix diagonalisation**.

**2. Geometric Meaning of Matrix Diagonalisation**

- A diagonal matrix has zeros everywhere except on the main diagonal
- For conics, diagonalisation means eliminating the $xy$ term
- This is equivalent to rotating the coordinate system to align with the principal axes

**3. Standard Forms of Conics**

- **Ellipse:** $\dfrac{X^2}{A^2} + \dfrac{Y^2}{B^2} = 1$ corresponds to $\begin{bmatrix} \frac{1}{A^2} & 0 \\ 0 & \frac{1}{B^2} \end{bmatrix}$

- **Hyperbola:** $\dfrac{X^2}{A^2} - \dfrac{Y^2}{B^2} = 1$ corresponds to $\begin{bmatrix} \frac{1}{A^2} & 0 \\ 0 & -\frac{1}{B^2} \end{bmatrix}$

We will revisit the concept of diagonalisation in later chapters.
:::

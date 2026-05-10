---
title: "FP2 Chapter 8: Polar Coordinates"
---

# FP2 Lecture Notes: Polar Coordinates

## Module 1: Introduction to Polar Coordinates

### Key Concept: Polar Coordinate System

**Definition:** The polar coordinate system specifies the position of a point in a plane using:
- $r$: the radial distance from the origin (the pole), where $r \geq 0$
- $\theta$: the angular coordinate (polar angle) measured counterclockwise from the positive $x$-axis

![Polar coordinate system](/images/tikz/fp2-polar-coordinates.svg)

**Key Observations:**

A point $(r, \theta)$ in polar coordinates can be converted to Cartesian coordinates $(x, y)$ using:

$$
\begin{aligned}
x &= r\cos\theta \\
y &= r\sin\theta
\end{aligned}
$$

Conversely, Cartesian coordinates $(x, y)$ can be converted to polar coordinates $(r, \theta)$ using:

$$
\begin{aligned}
r &= \sqrt{x^2 + y^2} \\
\theta &= \tan^{-1}\left(\frac{y}{x}\right) \quad \text{(with appropriate quadrant adjustments)}
\end{aligned}
$$

Multiple polar coordinates can represent the same point:

$$
(r, \theta) = (r, \theta + 2\pi n) \quad \text{for any integer } n
$$

### Example: Converting Between Coordinate Systems

Convert the following points between polar and Cartesian coordinates:

(a) The polar point $(3, \pi/4)$ to Cartesian coordinates

(b) The Cartesian point $(0, -2)$ to polar coordinates

## Module 2: Basic Polar Curves

### Case 1: $\theta = a$ (Rays)

The equation $\theta = a$ represents a ray (half-line) starting from the origin and making an angle $a$ with the positive $x$-axis.

**Cartesian Equivalent:**

$$
y = (\tan a) \cdot x
$$

with the constraint that the point must lie in the appropriate quadrant determined by $a$.

### Case 2: $r = a$ (Circles)

The equation $r = a$, where $a > 0$, represents a circle centred at the origin with radius $a$.

**Cartesian Equivalent:**

$$
x^2 + y^2 = a^2
$$

### Case 3: $r = p \sec(a - \theta)$ (Lines)

The equation $r = p \sec(a - \theta)$ represents a straight line that is at distance $p$ from the origin, with the perpendicular to the line making an angle $a$ with the positive $x$-axis.

**Characteristics:**
- The line is at a perpendicular distance $p$ from the origin
- The normal from the origin to the line makes an angle $a$ with the positive $x$-axis

### Example: Identifying and Sketching Basic Polar Curves

Identify and sketch the following polar curves:

(a) $\theta = 4\pi/3$

(b) $r = 2$

(c) $r = 4\sec(\pi/4 - \theta)$

## Module 3: Special Polar Curves

### Case 4: $r = 2a\cos\theta$ (Circles through the Origin)

The equation $r = 2a\cos\theta$ represents a circle with diameter $2a$, passing through the origin, with centre at $(a, 0)$.

**Characteristics:**
- The circle is traversed as $\theta$ varies from $-\pi/2$ to $\pi/2$ where $\cos\theta$ is non-negative.

**Cartesian Equivalent:**

$$
(x-a)^2 + y^2 = a^2
$$

### Case 5: $r = k\theta$ (Spirals of Archimedes)

The equation $r = k\theta$ represents an Archimedean spiral, where the distance from the origin increases linearly with the angle.

### Case 6: $r = a(1 \pm \cos\theta)$ (Cardioids)

The equations $r = a(1 + \cos\theta)$ and $r = a(1 - \cos\theta)$ represent cardioids ("heart-shaped" curves).

![Cardioid r = a(1+cos θ)](/images/tikz/fp2-polar-cardioid.svg)

**Characteristics:**
- The cardioid has a cusp (sharp point) at $\theta = \pi$ for $r = a(1 + \cos\theta)$ and at $\theta = 0$ for $r = a(1 - \cos\theta)$
- The maximum distance from the origin is $2a$ (occurring at $\theta = 0$ for the first curve and $\theta = \pi$ for the second)
- The curve resembles a heart or kidney shape
- The cardioid can be generated as the path traced by a point on a circle as it rolls around another circle of the same radius

### Case 7: $r = a(3 + 2\cos\theta)$ (Limaçons)

The equation $r = a(3 + 2\cos\theta)$ represents a limaçon without an inner loop.

**Characteristics:**
- This is a limaçon without an inner loop (since $3 > 2$)
- The curve is symmetric about the $x$-axis

### Case 8: $r^2 = a^2\cos 2\theta$ (Lemniscate of Bernoulli)

The equation $r^2 = a^2\cos 2\theta$ represents a lemniscate of Bernoulli.

![Lemniscate of Bernoulli](/images/tikz/fp2-polar-lemniscate.svg)

**Characteristics:**
- The curve passes through the origin (which is a self-intersection point)
- The curve has two loops, each extending a distance $a$ from the origin
- The curve exists only when $\cos 2\theta \geq 0$, i.e., for $\theta$ in $[-\pi/4, \pi/4]$ or $[3\pi/4, 5\pi/4]$

## Module 4: Computing Areas in Polar Coordinates

### Key Concept: Area Formula in Polar Coordinates

The area of a region in polar coordinates is given by:

$$
A = \int_{\alpha}^{\beta} \frac{1}{2}r^2 \, d\theta
$$

where the region is bounded by:
- The rays $\theta = \alpha$ and $\theta = \beta$
- The curve $r = f(\theta)$
- The origin

![Area in polar coordinates](/images/tikz/fp2-polar-area-diagram.svg)

### Example: Area of a Circle

Find the area of a circle with radius $a$ using polar coordinates.

**Solution:**

In polar coordinates, a circle of radius $a$ centred at the origin is given by the equation $r = a$. The area is:

$$
\begin{aligned}
A &= \int_{0}^{2\pi} \frac{1}{2}r^2 \, d\theta \\
&= \int_{0}^{2\pi} \frac{1}{2}a^2 \, d\theta \\
&= \frac{1}{2}a^2 \int_{0}^{2\pi} d\theta \\
&= \frac{1}{2}a^2 \cdot 2\pi \\
&= \pi a^2
\end{aligned}
$$

This confirms the well-known formula for the area of a circle.

### Example: Area of a Cardioid

Find the area enclosed by the cardioid $r = a(1 + \cos\theta)$.

**Solution:**

We need to integrate over the entire curve, which spans $\theta$ from $0$ to $2\pi$:

$$
\begin{aligned}
A &= \int_{0}^{2\pi} \frac{1}{2}r^2 \, d\theta \\
&= \int_{0}^{2\pi} \frac{1}{2}[a(1 + \cos\theta)]^2 \, d\theta \\
&= \frac{a^2}{2}\int_{0}^{2\pi} (1 + 2\cos\theta + \cos^2\theta) \, d\theta
\end{aligned}
$$

Using the identity $\cos^2\theta = \frac{1 + \cos 2\theta}{2}$:

$$
\begin{aligned}
A &= \frac{a^2}{2}\int_{0}^{2\pi} \left(1 + 2\cos\theta + \frac{1 + \cos 2\theta}{2}\right) \, d\theta \\
&= \frac{a^2}{2}\int_{0}^{2\pi} \left(\frac{3}{2} + 2\cos\theta + \frac{\cos 2\theta}{2}\right) \, d\theta
\end{aligned}
$$

Evaluating the integral:

$$
\begin{aligned}
A &= \frac{a^2}{2}\left[\frac{3\theta}{2} + 2\sin\theta + \frac{\sin 2\theta}{4}\right]_{0}^{2\pi} \\
&= \frac{a^2}{2}\left[\frac{3 \cdot 2\pi}{2} + 0 + 0\right] \\
&= \frac{3\pi a^2}{2}
\end{aligned}
$$

Therefore, the area enclosed by the cardioid $r = a(1 + \cos\theta)$ is $\frac{3\pi a^2}{2}$.

### Example: Area Between Curves

Find the area of the region that lies inside the circle $r = 3$ and outside the cardioid $r = 1 + \cos\theta$.

## Module 5: Tangents and Slopes in Polar Coordinates

### Key Concept: Finding Slopes of Tangent Lines

For a curve given by $r = f(\theta)$ in polar coordinates, the slope of the tangent line at a point is:

$$
\frac{dy}{dx} = \frac{r'(\theta)\sin\theta + r\cos\theta}{r'(\theta)\cos\theta - r\sin\theta}
$$

where $r'(\theta) = \frac{dr}{d\theta}$ is the derivative of $r$ with respect to $\theta$.

![Tangent to a polar curve](/images/tikz/fp2-polar-tangent.svg)

**Derivation:**

The parametric equations for a polar curve are:

$$
\begin{aligned}
x &= r\cos\theta \\
y &= r\sin\theta
\end{aligned}
$$

Differentiating with respect to $\theta$:

$$
\begin{aligned}
\frac{dx}{d\theta} &= \frac{dr}{d\theta}\cos\theta - r\sin\theta \\
\frac{dy}{d\theta} &= \frac{dr}{d\theta}\sin\theta + r\cos\theta
\end{aligned}
$$

The slope of the tangent line is:

$$
\begin{aligned}
\frac{dy}{dx} &= \frac{dy/d\theta}{dx/d\theta} \\
&= \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}
\end{aligned}
$$

### Example: Finding the Slope at a Point

Find the slope of the tangent line to the cardioid $r = 1 + \cos\theta$ at the point where $\theta = \pi/3$.

**Solution:**

First, we need to find $r$ and $r'(\theta)$ at $\theta = \pi/3$:

$$
\begin{aligned}
r &= 1 + \cos(\pi/3) = 1 + \frac{1}{2} = \frac{3}{2} \\
r'(\theta) &= -\sin\theta \\
r'(\pi/3) &= -\sin(\pi/3) = -\frac{\sqrt{3}}{2}
\end{aligned}
$$

Now, we can calculate the slope:

$$
\begin{aligned}
\frac{dy}{dx} &= \frac{r'(\theta)\sin\theta + r\cos\theta}{r'(\theta)\cos\theta - r\sin\theta} \\
&= \frac{-\frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{3}{2} \cdot \frac{1}{2}}{-\frac{\sqrt{3}}{2} \cdot \frac{1}{2} - \frac{3}{2} \cdot \frac{\sqrt{3}}{2}} \\
&= \frac{-\frac{3}{4} + \frac{3}{4}}{-\frac{\sqrt{3}}{4} - \frac{3\sqrt{3}}{4}} \\
&= \frac{0}{-\sqrt{3}} \\
&= 0
\end{aligned}
$$

Therefore, the tangent line at the point where $\theta = \pi/3$ is horizontal.

### Finding Points with Horizontal and Vertical Tangents

For a curve $r = f(\theta)$:

**Horizontal Tangents** (where $\frac{dy}{dx} = 0$):

$$
r'(\theta)\sin\theta + r\cos\theta = 0
$$

**Vertical Tangents** (where $\frac{dy}{dx} = \infty$):

$$
r'(\theta)\cos\theta - r\sin\theta = 0
$$

These equations can be used to find special points on polar curves.

### Comprehensive Exercise: Tangents and Areas

:::note[Comprehensive Exercise]
Consider the curve with equation $r = 2 + \sqrt{2}\sin\theta$.

(a) Find all points on the curve where the tangent line is horizontal.

(b) Sketch the curve, clearly indicating the points with horizontal tangents.

(c) Find the area of the region bounded by:
- The curve $r = 2 + \sqrt{2}\sin\theta$
- The rays from the origin through the points with horizontal tangents found in part (a) where $\pi < \theta < 2\pi$
:::

**Solution (a):**

For the curve $r = 2 + \sqrt{2}\sin\theta$, we need to find where the tangent is horizontal. For a polar curve, horizontal tangents occur when:

$$
r'(\theta)\sin\theta + r\cos\theta = 0
$$

Let's find $r'(\theta)$:

$$
r'(\theta) = \sqrt{2}\cos\theta
$$

Substituting into the horizontal tangent condition:

$$
\sqrt{2}\cos\theta\sin\theta + (2 + \sqrt{2}\sin\theta)\cos\theta = 0
$$

Factoring out $\cos\theta$:

$$
\cos\theta[\sqrt{2}\sin\theta + 2 + \sqrt{2}\sin\theta] = 0
$$

$$
\cos\theta[2\sqrt{2}\sin\theta + 2] = 0
$$

This means either:

- $\cos\theta = 0$, which occurs at $\theta = \frac{\pi}{2}$ and $\theta = \frac{3\pi}{2}$, or
- $2\sqrt{2}\sin\theta + 2 = 0$, which means $\sin\theta = -\frac{1}{\sqrt{2}} = -\frac{\sqrt{2}}{2}$

The second condition gives us $\theta = \frac{5\pi}{4}$ and $\theta = \frac{7\pi}{4}$ in the interval $[0, 2\pi)$.

**Solution (b):**

Key points on the curve:

| $\theta$ | $r = 2 + \sqrt{2}\sin\theta$ | Note |
|---|---|---|
| $0$ | $2$ | |
| $\pi/2$ | $2 + \sqrt{2} \approx 3.41$ | horizontal tangent |
| $\pi$ | $2$ | |
| $3\pi/2$ | $2 - \sqrt{2} \approx 0.59$ | horizontal tangent |
| $5\pi/4$ | $1$ | horizontal tangent |
| $7\pi/4$ | $1$ | horizontal tangent |

**Solution (c):**

The horizontal tangents in the range $\pi < \theta < 2\pi$ are at $\theta = \frac{5\pi}{4}$ and $\theta = \frac{7\pi}{4}$.

Using the area formula in polar coordinates:

$$
A = \int_{\frac{5\pi}{4}}^{\frac{7\pi}{4}} \frac{1}{2}(2 + \sqrt{2}\sin\theta)^2 \, d\theta
$$

Expanding the integrand:

$$
(2 + \sqrt{2}\sin\theta)^2 = 4 + 4\sqrt{2}\sin\theta + 2\sin^2\theta
$$

Using the identity $\sin^2\theta = \frac{1 - \cos 2\theta}{2}$:

$$
(2 + \sqrt{2}\sin\theta)^2 = 4 + 4\sqrt{2}\sin\theta + 1 - \cos 2\theta = 5 + 4\sqrt{2}\sin\theta - \cos 2\theta
$$

Therefore:

$$
\begin{aligned}
A &= \frac{1}{2}\int_{\frac{5\pi}{4}}^{\frac{7\pi}{4}} (5 + 4\sqrt{2}\sin\theta - \cos 2\theta) \, d\theta \\
&= \frac{1}{2}\left[5\theta - 4\sqrt{2}\cos\theta - \frac{\sin 2\theta}{2}\right]_{\frac{5\pi}{4}}^{\frac{7\pi}{4}}
\end{aligned}
$$

Evaluating at the limits:

At $\theta = \frac{7\pi}{4}$: $5\theta = \frac{35\pi}{4}$, $\;-4\sqrt{2}\cos\theta = -4$, $\;-\frac{\sin 2\theta}{2} = \frac{1}{2}$

At $\theta = \frac{5\pi}{4}$: $5\theta = \frac{25\pi}{4}$, $\;-4\sqrt{2}\cos\theta = 4$, $\;-\frac{\sin 2\theta}{2} = -\frac{1}{2}$

Substituting:

$$
\begin{aligned}
A &= \frac{1}{2}\left[\frac{35\pi}{4} - 4 + \frac{1}{2} - \left(\frac{25\pi}{4} + 4 - \frac{1}{2}\right)\right] \\
&= \frac{1}{2}\left[\frac{10\pi}{4} - 7\right] \\
&= \frac{1}{2}\left[\frac{5\pi}{2} - 7\right] \\
&= \frac{5\pi - 14}{4}
\end{aligned}
$$

Therefore, the area of the region is $\frac{5\pi - 14}{4}$ square units.

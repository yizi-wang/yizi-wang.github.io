---
title: "FP2 Chapter 4: Further Argand Diagrams"
---

# FP2 Lecture Notes: Complex Loci and Transformations

## Review: Complex Numbers in the Argand Diagram

:::note[Quick Review Exercise]
For $z = 2e^{i\pi/3}$, please:
- Plot it on an Argand diagram, explain the geometric meaning of its modulus and argument on the diagram
- Find all complex numbers $w$ such that $|w-z| = 2$ and represent it on the diagram
:::

## Module 1: Loci Represented by Modulus

### Circles in the Complex Plane

:::note[Key Concept: The Circle Equation]
The equation $|z-z_0| = r$ represents a circle in the complex plane where:
- $z_0$ is the center of the circle
- $r$ is the radius of the circle
- $z$ represents any point on the circle

**Alternative Forms:**

If $z_0 = a + bi$, then $|z-(a+bi)| = r$ can be written as:

$$
(x-a)^2 + (y-b)^2 = r^2
$$

where $z = x + yi$. This is equivalent to the standard circle equation in Cartesian coordinates.
:::

![Complex locus: circle](/images/tikz/fp2-complex-locus-circle.svg)

### Example 1: Finding the Equation of a Circle

Find the equation of the circle with center $2+i$ and radius 3 in:

(a) Complex form

(b) Cartesian form

### Perpendicular Bisector and Equal Distances

:::note[Key Concept: Equal Distances]
The equation $|z-z_1| = |z-z_2|$ represents the perpendicular bisector of the line segment joining $z_1$ and $z_2$.

**Properties:**
- Every point on this line is equidistant from $z_1$ and $z_2$
- This line divides the complex plane into two regions:
  - Points closer to $z_1$: $|z-z_1| < |z-z_2|$
  - Points closer to $z_2$: $|z-z_1| > |z-z_2|$
:::

### Example 2: Finding the Perpendicular Bisector

Find the equation of the perpendicular bisector of the line segment joining $z_1 = 2+i$ and $z_2 = -1+4i$ in:

(a) Complex form

(b) Cartesian form

**Geometric Interpretation:** This line divides the complex plane into two regions — points closer to $z_1$ and points closer to $z_2$.

## Module 2: Loci Represented by Argument

:::note[Key Concept: Lines Through Argument]
The equation $\arg(z-z_0) = \theta$ represents a ray (or line) starting from point $z_0$ at angle $\theta$ to the positive real axis.

**Properties:**

If $z_0 = a + bi$, then any point $z$ on this line satisfies:

$$
\frac{\text{Im}(z-z_0)}{\text{Re}(z-z_0)} = \tan \theta
$$

The line can be written in the form $y = mx + c$ where $m = \tan \theta$ and $c = b - m \cdot a$.
:::

![Complex locus: half-line](/images/tikz/fp2-complex-locus-halfline.svg)

### Example 3: Finding a Line Equation

Find the equation of the line given by $\arg(z-2) = \dfrac{\pi}{3}$ in Cartesian form.

:::note[Key Points to Remember]
1. Modulus equations $|z-z_0| = r$ represent circles
2. Equal modulus equations $|z-z_1| = |z-z_2|$ represent perpendicular bisectors
3. Argument equations $\arg(z-z_0) = \theta$ represent lines
:::

### Exercise 1

Sketch on the same Argand diagram the locus of points satisfying:

(a) $|z-2i| = |z-8i|$

(b) $\arg(z-2-i) = \dfrac{\pi}{4}$

The complex number $z$ satisfies both $|z-2i| = |z-8i|$ and $\arg(z-2-i) = \dfrac{\pi}{4}$.

(c) Use your answers to parts (a) and (b) to find the value of $z$.

:::tip[Hints]
- For part (a), think about points equidistant from two fixed points
- For part (b), consider the geometric meaning of argument
- For part (c), find the intersection of the two loci
:::

## Module 3: Further Loci Represented by Modulus

:::note[Key Concept: Ratio of Distances]
The equation $|z-z_0| = k|z-z_1|$ where $k \neq 1$ represents a circle in the complex plane, known as a **circle of Apollonius**.
:::

### Example 4: Circle of Apollonius

Find the equation of the locus of points $z$ such that $|z-1| = 2|z+1|$.

### In-class Exercise

Find the equation of the locus of points $z$ such that $|z-(1-i)| = \sqrt{2}|z-(2-i)|$ and sketch the locus.

:::note[Derivation: Circle of Apollonius Formula — Not Required for Exam]
Let's derive the formulas for the center and radius of $|z-z_0| = k|z-z_1|$.

1. Square both sides of the equation:

$$
|z-z_0|^2 = k^2|z-z_1|^2
$$

2. Let $z = x + yi$, $z_0 = x_0 + y_0i$, and $z_1 = x_1 + y_1i$:

$$
\begin{aligned}
(x-x_0)^2 + (y-y_0)^2 &= k^2[(x-x_1)^2 + (y-y_1)^2] \\
x^2-2xx_0+x_0^2+y^2-2yy_0+y_0^2 &= k^2(x^2-2xx_1+x_1^2+y^2-2yy_1+y_1^2)
\end{aligned}
$$

3. Collect terms with $x^2$ and $y^2$:

$$
(1-k^2)(x^2+y^2) + (-2x_0+2k^2x_1)x + (-2y_0+2k^2y_1)y + (x_0^2+y_0^2-k^2x_1^2-k^2y_1^2) = 0
$$

4. Divide both sides by $1-k^2$ and complete the square:

$$
\left(x+\frac{k^2x_1-x_0}{1-k^2}\right)^2 + \left(y+\frac{k^2y_1-y_0}{1-k^2}\right)^2 = R^2
$$

where $R$ is some constant.

5. Therefore, the center is at

$$
\frac{z_0-k^2z_1}{1-k^2}
$$

in complex form.

6. The radius can be found by substituting any point satisfying the original equation:

$$
R = \frac{k|z_1-z_0|}{|1-k^2|}
$$
:::

:::note[Geometric Proof: Why is it a Circle? — Not Required for Exam]
Let's prove geometrically that the locus of points where $\dfrac{|PF_1|}{|PF_2|} = k$ is a circle.

**The Proof:**

1. Let $A$ and $B$ be the points where the locus intersects the line $F_1F_2$. Then:

$$
\frac{|AF_1|}{|AF_2|} = \frac{|BF_1|}{|BF_2|} = k
$$

2. For any point $P$ on the locus: $\dfrac{|PF_1|}{|PF_2|} = k$

3. By the Angle Bisector Theorem:
   - Since $P$ divides $F_1F_2$ internally in ratio $k$, then $PA$ is the internal angle bisector of $\angle F_1PF_2$.
   - If $P$ divides $F_1F_2$ externally in ratio $k$, then $PB$ is the external angle bisector of $\angle F_1PF_2$.

4. Then $\angle APB = 180^\circ / 2 = 90^\circ$.

5. By the properties of circles:
   - Points $P$ where $\angle APB = 90^\circ$ lie on a circle.
   - This circle has diameter $AB$.

**Note on Angle Bisector Theorem:**

The Angle Bisector Theorem states that if a line bisects an angle of a triangle, then it divides the opposite side in the ratio of the lengths of the other two sides. Conversely:
- If a point $P$ divides a line segment $F_1F_2$ internally in ratio $k$, then $\overrightarrow{PA}$ bisects $\angle F_1PF_2$.
- If a point $P$ divides a line segment $F_1F_2$ externally in ratio $k$, then $\overrightarrow{PB}$ bisects the external angle at $P$.
:::

## Module 4: Further Loci Represented by Argument

:::note[Key Concept: Angle Between Lines]
The equation $\arg\left(\dfrac{z-z_0}{z-z_1}\right) = \theta$ represents an arc in the complex plane.

Consider the complex number $z_0 - z$: this is a vector from $z$ to $z_0$. Similarly, $z_1 - z$ is a vector from $z$ to $z_1$.

When we divide two complex numbers, we divide their moduli and subtract their arguments:

$$
z-z_0=pe^{i\alpha}, \quad z-z_1=qe^{i\beta}, \quad \frac{z-z_0}{z-z_1}=\frac{p}{q}e^{i(\alpha-\beta)}
$$

Therefore, $\arg\left(\dfrac{z-z_0}{z-z_1}\right) = \beta - \alpha$ represents the angle between these vectors.

**Why is it an arc?**

For any point $z$ on the locus, the angle between $z-z_0$ and $z-z_1$ is constant ($\theta$). This means $z$ sees the line segment $z_0z_1$ at a constant angle. By a property of circles, points that see a line segment at a constant angle form an arc of a circle. The arc is determined by the angle $\theta$.
:::

### Example 5: Finding an Arc Locus

Find the locus of points $z$ where $\arg\left(\dfrac{z-1}{z+1}\right) = \dfrac{\pi}{3}$.

**Solution:**

1. Let $z = x + yi$. Then:

$$
\frac{z-1}{z+1} = \frac{(x-1)+yi}{(x+1)+yi} = \frac{[(x-1)+yi][(x+1)-yi]}{(x+1)^2+y^2}
$$

2. This gives:

$$
\frac{z-1}{z+1} = \frac{(x^2-1+y^2) + 2yi}{(x+1)^2+y^2} = u + vi
$$

3. Since the argument is $\dfrac{\pi}{3}$:

$$
\frac{v}{u} = \tan \frac{\pi}{3} = \sqrt{3} \text{ and } u,v > 0
$$

4. This means:

$$
\frac{2y}{x^2-1+y^2} = \sqrt{3} \text{ and } y > 0
$$

5. Cross multiply:

$$
2y = \sqrt{3}(x^2-1+y^2)
$$

6. Rearrange:

$$
\sqrt{3}x^2 + \sqrt{3}y^2 - 2y - \sqrt{3} = 0
$$

7. Complete the square in $y$:

$$
\sqrt{3}x^2 + \sqrt{3}\left(y - \frac{1}{\sqrt{3}}\right)^2 - \frac{4}{3}\sqrt{3} = 0
$$

8. Therefore:

$$
x^2 + \left(y - \frac{1}{\sqrt{3}}\right)^2 = \frac{4}{3}
$$

**Geometric Interpretation:** This is an arc with:
- Center at $\left(0, \dfrac{1}{\sqrt{3}}\right)$
- Radius $\sqrt{\dfrac{4}{3}}$
- On the upper half plane where $y > 0$

:::note[Summary: Two Cases of Angle Loci]
When $\arg\left(\dfrac{z-z_0}{z-z_1}\right) = \theta$, the shape of the arc depends on the value of $\theta$:

**Case 1: $0 < \theta < \dfrac{\pi}{2}$** — Acute angle, **major arc** above the line segment.

**Case 2: $\dfrac{\pi}{2} < \theta < \pi$** — Obtuse angle, **minor arc** above the line segment.

**Common feature:** Moving from $z_0$ to $z$ to $z_1$ rotates counterclockwise along the circle.
:::

### Matching Exercise

Match each equation with its corresponding arc diagram:

1. $\arg\left(\dfrac{z-z_0}{z-z_1}\right) = \dfrac{\pi}{3}$
2. $\arg\left(\dfrac{z-z_0}{z-z_1}\right) = \dfrac{2\pi}{3}$
3. $\arg\left(\dfrac{z-z_0}{z-z_1}\right) = \dfrac{4\pi}{3}$
4. $\arg\left(\dfrac{z-z_0}{z-z_1}\right) = \dfrac{5\pi}{3}$

:::tip[Hint]
For any complex number $z$: $\arg(\frac{1}{z}) = -\arg(z)$ or $2\pi - \arg(z)$.
:::

## Module 5: Regions in the Complex Plane

:::note[Key Concept: Inequalities in Complex Plane]
Inequalities involving modulus or argument define regions in the complex plane:

- $|z-z_0| < r$: Inside a circle with center $z_0$ and radius $r$
- $|z-z_0| > r$: Outside a circle with center $z_0$ and radius $r$
- $|z-z_1| < |z-z_2|$: Points closer to $z_1$ than to $z_2$
- $\alpha < \arg(z-z_0) < \beta$: Sector between two rays from $z_0$
:::

![Complex locus: inequality region](/images/tikz/fp2-complex-locus-inequality.svg)

:::tip[Key Tips: Inside or Outside a Circle]
For a circle defined by $|z-z_1| = k|z-z_2|$:
- Test a point $P$ not on the circle (e.g., the center of the circle)
- If $|P-z_1| < k|P-z_2|$: The inside region satisfies $|z-z_1| < k|z-z_2|$
- If $|P-z_1| > k|P-z_2|$: The inside region satisfies $|z-z_1| > k|z-z_2|$
:::

### Example 6: Sketching a Region

Sketch the region defined by $|z-1| > 2|z+1|$ and determine whether it's inside or outside the circle $|z-1| = 2|z+1|$.

**Solution:**

1. First, sketch the circle $|z-1| = 2|z+1|$
2. Test point $z = 1$:
   - $|1-1| = 0$
   - $2|1+1| = 4$
   - Since $0 < 4$, point $z = 1$ does not lie in the region
   - Therefore, the region is **inside** the circle

### Exercise

Sketch the region defined by $|z-(1+i)| > 2|z-(1-i)|$ and determine whether it's inside or outside the circle $|z-(1+i)| = 2|z-(1-i)|$.

:::tip[Hint]
Test the point $z = 1+i$ to determine which side of the circle the region lies on.
:::

## Module 6: Complex Plane Transformations

:::note[Key Concept: Linear Transformations]
A complex function $w = f(z)$ maps points from the $z$-plane to the $w$-plane.

**Basic Transformations:**
- **Rotation:** $w = e^{i\theta}z$ rotates by angle $\theta$ counterclockwise
- **Scaling:** $w = kz$ scales by factor $k$
- **Translation:** $w = z + a$ translates by vector $a$

**Connection to Linear Algebra:**

When $z = x + yi$ and $w = u + vi$, the transformation $w = (a+bi)z$ can be written as matrix multiplication:

$$
\begin{pmatrix} u \\ v \end{pmatrix} = \begin{pmatrix} a & -b \\ b & a \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}
$$

**Why this relationship?**

Consider the complex multiplication $(a+bi)(x+yi)$:

$$
(a+bi)(x+yi) = \underbrace{(ax-by)}_{\text{real part}} + \underbrace{(bx+ay)}_{\text{imaginary part}}i
$$

which is exactly what we get from the matrix multiplication:

$$
\begin{pmatrix} a & -b \\ b & a \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax-by \\ bx+ay \end{pmatrix}
$$

For example:
- Rotation by $\theta$: $e^{i\theta} = \cos\theta + i\sin\theta$ corresponds to $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$
- Scaling by $k$: $k = k + 0i$ corresponds to $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$
:::

![Complex multiplication: rotation and scaling](/images/tikz/fp2-complex-multiplication.svg)

![Complex transformation w = z²](/images/tikz/fp2-complex-transformation.svg)

:::note[Key Concept: Möbius Transformations]
A Möbius transformation has the form:

$$
w = \frac{az + b}{cz + d}, \quad ad-bc \neq 0
$$

**Properties:**
- Maps circles and lines to circles or lines
:::

### Finding Images under Möbius Transformations

Under $w = \dfrac{az + b}{cz + d}$, circles and lines map to circles or lines.

**Case 1: Mapping to a Line**

### Example 7: Finding Image of Points on Imaginary Axis

The transformation $T$ from the $z$-plane to the $w$-plane is given by $w = \dfrac{(1+i)z+2(1-i)}{z-i}$, $z \neq i$. The transformation maps points on the imaginary axis in the $z$-plane onto a line $l$ in the $w$-plane. Find an equation for this line.

**Solution:**

1. Find the images of two points on the imaginary axis:
   - Let $z_1 = 0$ (origin):

$$
w_1 = \frac{(1+i)(0)+2(1-i)}{0-i} = \frac{2-2i}{-i} = \frac{(2-2i)(i)}{(-i)(i)} = 2 + 2i
$$

   - Let $z_2 = 2i$:

$$
w_2 = \frac{(1+i)(2i)+2(1-i)}{2i-i} = \frac{(2i-2)+2-2i}{i} = \frac{0}{i} = 0
$$

2. Hence $l$ passes through $w_1 = 2+2i$ and $w_2 = 0$, and has equation $u = v$.

**Case 2: Line to Circle**

### Example 8: Finding Image of Real Axis

The transformation $T$ from the $z$-plane to the $w$-plane is given by $w = \dfrac{(1+i)z+2(1-i)}{z-i}$, $z \neq i$. Show that the transformation maps points on the real axis in the $z$-plane onto a circle $C$ in the $w$-plane. Find the centre and radius of $C$.

**Solution:**

1. For points on the real axis, $z = x$ where $x$ is real.

2. Find the inverse transformation:

$$
\begin{aligned}
w &= \frac{(1+i)z+2(1-i)}{z-i} \\
w(z-i) &= (1+i)z+2(1-i) \\
wz - wi &= (1+i)z+2(1-i) \\
wz - (1+i)z &= wi + 2(1-i) \\
z(w-(1+i)) &= wi + 2(1-i) \\
\therefore z &= \frac{wi + 2(1-i)}{w-(1+i)}
\end{aligned}
$$

3. Let $w = u + vi$. Then:

$$
z = \frac{(u+vi)i + 2(1-i)}{(u+vi)-(1+i)} = \frac{2-v + (u - 2)i}{(u-1) + (v-1)i}
$$

4. Rationalize the denominator:

$$
z = \frac{(2-v + (u - 2)i)((u-1) - (v-1)i)}{(u-1)^2 + (v-1)^2}
$$

5. Since $z$ is real, the imaginary part must be zero:

$$
\begin{aligned}
&\text{Im} \left\{((2-v) + (u - 2)i)((u-1) - (v-1)i)\right\} \\
=&\ (2-v)(-(v-1)) + (u-2)(u-1) \\
=&\ -2v + 2 + v^2 - v + u^2 - u - 2u + 2 \\
=&\ v^2 - 3v + u^2 - 3u + 4
\end{aligned}
$$

6. Setting the imaginary part to zero and completing the square:

$$
\begin{aligned}
v^2 - 3v + u^2 - 3u + 4 &= 0 \\
\left(u - \frac{3}{2}\right)^2 + \left(v - \frac{3}{2}\right)^2 &= \frac{1}{2}
\end{aligned}
$$

7. The image is a circle with centre $\left(\dfrac{3}{2}, \dfrac{3}{2}\right)$ and radius $\sqrt{\dfrac{1}{2}}$.

**Case 3: Circle to Circle**

### Example 9: Finding Image of a Circle

The transformation $T$ from the $z$-plane to the $w$-plane is given by $w = \dfrac{2z+1}{z-1}$. Show that the image of the circle $|z| = 2$ is a circle $C$ in the $w$-plane. State the centre and radius of $C$.

**Solution:**

1. The circle $|z| = 2$ is centered at the origin with radius 2.

2. Find the inverse transformation:

$$
\begin{aligned}
w &= \frac{2z+1}{z-1} \\
w(z-1) &= 2z+1 \\
wz - w &= 2z+1 \\
wz - 2z &= w+1 \\
z(w-2) &= w+1 \\
z &= \frac{w+1}{w-2}
\end{aligned}
$$

3. Substitute into $|z| = 2$:

$$
\left|\frac{w+1}{w-2}\right| = 2 \implies |w+1| = 2|w-2|
$$

4. Let $w = u + vi$, square both sides:

$$
\begin{aligned}
|w+1|^2 &= 4|w-2|^2 \\
(u+1)^2 + v^2 &= 4((u-2)^2 + v^2)
\end{aligned}
$$

5. Expand and rearrange:

$$
\begin{aligned}
u^2 + 2u + 1 + v^2 &= 4u^2 - 16u + 16 + 4v^2 \\
-3u^2 + 18u - 15 - 3v^2 &= 0 \\
u^2 - 6u + 5 + v^2 &= 0
\end{aligned}
$$

6. Complete the square:

$$
(u - 3)^2 + v^2 = 4
$$

7. The image is a circle with centre $(3, 0)$ and radius $2$.

### Exercise

A transformation $T$ of the $z$-plane to the $w$-plane is given by $w = \dfrac{iz-2}{1-z}$, $z \neq 1$.

1. Show that as $z$ lies on the real axis in the $z$-plane, then $w$ lies on a line $l$ in the $w$-plane.
2. Find an equation for $l$.
3. Sketch $l$ on an Argand diagram.

## Homework Problems

### Problem 1

A transformation $T$ from the $z$-plane to the $w$-plane is given by $w = \dfrac{z}{z+i}$, $z \neq -i$.

(a) Show that the circle $|z| = 3$ is mapped by $T$ onto a circle $C$ in the $w$-plane. Find its centre and radius.

(b) The region $|z| < 3$ in the $z$-plane is mapped by $T$ onto the region $R$ in the $w$-plane. Shade the region $R$ on an Argand diagram.

### Problem 2

A complex number $z$ is represented by the point $P$ in the Argand diagram.

(a) Given that $|z-6| = |z|$, sketch the locus of $P$.

(b) Find the complex numbers $z$ which satisfy both $|z-6| = |z|$ and $|z-3-4i| = 5$.

(c) The transformation $T$ from the $z$-plane to the $w$-plane is given by $w = \dfrac{30}{z}$. Show that $T$ maps $|z-6| = |z|$ onto a circle in the $w$-plane and give the Cartesian equation of this circle.

### Problem 3

The point $P$ represents a complex number $z$ on an Argand diagram such that $|z-6i| = 2|z-3|$.

(a) Show that, as $z$ varies, the locus of $P$ is a circle, stating the radius and the coordinates of the centre of this circle.

(b) The point $Q$ represents a complex number $z$ on an Argand diagram such that $\arg(z-6) = -\dfrac{3\pi}{4}$. Sketch, on the same Argand diagram, the locus of $P$ and the locus of $Q$ as $z$ varies.

(c) Find the complex number for which both $|z-6i| = 2|z-3|$ and $\arg(z-6) = -\dfrac{3\pi}{4}$.

### Problem 4

A complex number $z$ is represented by the point $P$ in an Argand diagram. Given that $|z-2i| = |z-3|$.

(a) Sketch the locus of $P$.

The transformation $T$ from the $z$-plane to the $w$-plane is given by $w = \dfrac{iz}{z-2i}$, $z \neq 2i$.

Given that $T$ maps $|z-2i| = |z-3|$ to a circle $C$ in the $w$-plane,

(b) Find the equation of $C$, giving your answer in the form $|w-(p+qi)| = r$ where $p$, $q$ and $r$ are real numbers to be determined.

:::note[Challenge Exercise: Exploring Möbius Transformations]
A Möbius transformation is a function of the form:

$$
w = \frac{az+b}{cz+d}
$$

where $a$, $b$, $c$, and $d$ are complex constants with $ad-bc \neq 0$.

**Fundamental Properties:**

1. **Conformal Mapping:** Möbius transformations preserve angles between curves.
2. **Circle Preservation:** They map generalized circles to generalized circles. A generalized circle is either a circle or a line (a line can be thought of as a circle through infinity).
:::

:::note[Derived Property: Circle to Circle Mapping]
When a circle in the $z$-plane is mapped to a circle in the $w$-plane:
- The singularity point $z = -\dfrac{d}{c}$ is mapped to $w = \infty$
- The line connecting this singularity point to the center of the circle intersects the circle at two points
- These intersection points are mapped to the endpoints of a diameter in the transformed circle in the $w$-plane

**Why this works:**
- The singularity point $z_s$ maps to $\infty$
- The line through $z_s$ also passes through $\infty$
- Any angle in the $z$-plane is preserved in the $w$-plane (conformal property)
- The angle between the line and the circle at the intersection points must be $90^{\circ}$
- Therefore, in the $w$-plane, the images of these intersection points form a diameter

**Method to find the image circle:**
1. Identify the singularity point $z_s$
2. Find the two intersection points of the line through $z_s$ and $z_0$ with the circle
3. Map these points to find the endpoints of a diameter in the image circle
4. The midpoint of these images is the center of the image circle
5. Half the distance between these images is the radius
:::

:::note[Derived Property: Line to Circle Mapping]
When a line in the $z$-plane is mapped to a circle in the $w$-plane:
- The inverse point of the singularity point $z = -\dfrac{d}{c}$ with respect to the line will be mapped to the center of the circle in the $w$-plane

**Geometric Interpretation:**
1. Consider a line $L$ in the $z$-plane
2. The singularity point $z_s = -\dfrac{d}{c}$ plays a special role in this mapping
3. The inverse point $z_i$ of $z_s$ with respect to the line is its reflection across the line

The inverse point $z_i$ is determined such that:
- It lies on the perpendicular line from $z_s$ to $L$
- If the distance from $z_s$ to the line is $d$, then the distance from $z_i$ to the line is also $d$
- $z_i$ and $z_s$ are on opposite sides of the line

Under the Möbius transformation:
- The singularity point $z_s$ maps to $\infty$
- The line $L$ maps to a circle
- The inverse point $z_i$ maps to the center of the image circle
:::

### Challenge 1: Singularity and Diameter

Consider the transformation $w = \dfrac{z+2}{z-i}$. Given that this transformation maps the circle $|z| = 2$ to a circle in the $w$-plane, find the centre and radius of this circle using the following method:

- Find the singularity point $z_0$
- Find the diameter of the circle $|z| = 2$ passing through the singularity point
- Thus find the center and radius of the circle in the $w$-plane

### Challenge 2: Mapping Lines and Circles

A transformation from the $z$-plane to the $w$-plane is given by

$$
w = \frac{(1+i)z + 2(1-i)}{z-i}, \quad z \neq i
$$

The transformation maps points on the real axis in the $z$-plane onto a circle in the $w$-plane. Find the centre and radius of this circle.

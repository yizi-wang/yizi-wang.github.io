---
title: 'M2 Mechanics: Statics — Centres of Mass and Equilibrium'
description: 'Edexcel IAL M2 静力学 — 质心、组合法则、平衡与稳定性'
---

# M2 Mechanics: Statics — Centres of Mass and Equilibrium

## From Balance to Understanding: The Physics of Stability

Have you ever wondered why a tightrope walker carries a long pole? Or why some buildings can withstand earthquakes while others cannot? The secret lies in understanding a fundamental concept in physics: the **center of mass**.

:::caution[The Central Question of Statics]
Where is the "balance point" of any object, and how does this determine whether it will remain stable or topple over?
:::

This chapter explores the mathematical tools and physical insights that help engineers design stable structures, athletes optimise their performance, and artists create perfectly balanced sculptures.

## The Concept of Center of Mass: Finding the Balance Point

### Physical Intuition: The Great Balancing Act

Before diving into formulas, let's develop our physical intuition through hands-on exploration.

**Classroom Discovery: The Mystery of Balance Points**

**Challenge 1:** Balance each cardboard shape on a pencil point. Mark the balance point.

- Does every shape have exactly one balance point?
- What happens if you try to balance the shape at a different point?
- For symmetrical shapes (circle, square), where do you expect the balance point?

**Challenge 2:** Take two identical objects and tape them together at different distances. Find the balance point of this "dumbbell." Where is the balance point located relative to the two masses?

:::tip[The Center of Mass Concept]
Every object, no matter how complex its shape, has exactly one point called its **center of mass** (or center of gravity) where:
- The object can be perfectly balanced
- All the object's weight can be considered to act
- The object will rotate if suspended from any other point
:::

### From Two Points to Many: Building the Mathematical Framework

Let's start with the simplest case and build our understanding systematically.

**Example: Two-Mass System — The Foundation**

Two point masses $m_1$ and $m_2$ are placed on a massless rod at positions $x_1$ and $x_2$ respectively.

For balance, the clockwise moment must equal the counter-clockwise moment about the pivot. Solving for $\bar{x}$:

$$\bar{x} = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}$$

The center of mass is the **weighted average** of the positions, where the "weights" are the actual masses.

![Center of mass on a rod](/images/tikz/m2-center-of-mass-rod.svg)

**Example: Three's Company**

Three friends with masses 50 kg, 60 kg, and 70 kg sit on a seesaw at positions 0 m, 2 m, and 5 m respectively.

$$\bar{x} = \frac{50(0) + 60(2) + 70(5)}{50 + 60 + 70} = \frac{470}{180} = 2.61 \text{ m}$$

:::note[Definition: Center of Mass for Multiple Point Masses]
For $n$ point masses $m_i$ at positions $(x_i, y_i)$:

**One Dimension:**

$$\bar{x} = \frac{\sum_{i=1}^{n} m_i x_i}{\sum_{i=1}^{n} m_i}$$

**Two Dimensions:**

$$\bar{x} = \frac{\sum_{i=1}^{n} m_i x_i}{\sum_{i=1}^{n} m_i}, \quad \bar{y} = \frac{\sum_{i=1}^{n} m_i y_i}{\sum_{i=1}^{n} m_i}$$
:::

**Example: 2D Center of Mass Challenge**

A mobile artist wants to create a balanced sculpture using four spheres:

| Sphere | Mass (kg) | x-position (m) | y-position (m) |
|---|---|---|---|
| A | 2 | 0 | 0 |
| B | 3 | 4 | 0 |
| C | 1 | 4 | 3 |
| D | 4 | 0 | 2 |

$$\bar{x} = \frac{2(0) + 3(4) + 1(4) + 4(0)}{2 + 3 + 1 + 4} = \frac{16}{10} = 1.6 \text{ m}$$

$$\bar{y} = \frac{2(0) + 3(0) + 1(3) + 4(2)}{10} = \frac{11}{10} = 1.1 \text{ m}$$

The artist should attach the hanging wire at $(1.6, 1.1)$ for perfect balance.

:::note[配图]
行星示意图（`planet.jpg`）。
:::

## Centers of Mass for Extended Objects: From Points to Laminae

### The Power of Symmetry: Nature's Shortcut

:::tip[The Symmetry Principle]
For uniform objects:
- If an object has one line of symmetry, its center of mass lies on that line
- If an object has multiple lines of symmetry, its center of mass lies at their intersection
:::

Examples:
- **Rectangle:** Center at geometric center
- **Circle:** Center at the circle center
- **Equilateral triangle:** Center at centroid

### Triangle Center of Mass — Universal Result

For ANY triangle with vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$:

$$\boxed{\bar{x} = \frac{x_1 + x_2 + x_3}{3}, \quad \bar{y} = \frac{y_1 + y_2 + y_3}{3}}$$

The center of mass is at the **centroid** (intersection of medians), located $\frac{2}{3}$ along each median from any vertex.

### Circular Sector and Arc

For a uniform circular sector of radius $r$ and half-angle $\alpha$:

$$\text{Center of mass distance from center} = \frac{2r\sin\alpha}{3\alpha}$$

For a uniform circular arc of radius $r$ and half-angle $\alpha$:

$$\text{Distance from center} = \frac{r\sin\alpha}{\alpha}$$

### Linear Objects: Uniform Wires and Rods

For a straight uniform wire with endpoints $(x_1, y_1)$ and $(x_2, y_2)$:

$$\bar{x} = \frac{x_1 + x_2}{2}, \quad \bar{y} = \frac{y_1 + y_2}{2}$$

:::note[Standard Laminae Results]
- **Rectangular Lamina:** Center at $\left(\dfrac{a}{2}, \dfrac{b}{2}\right)$
- **Triangular Lamina:** $\bar{x} = \dfrac{x_1+x_2+x_3}{3}$, $\bar{y} = \dfrac{y_1+y_2+y_3}{3}$
- **Circular Sector:** Distance $\dfrac{2r\sin\alpha}{3\alpha}$ from center
- **Circular Arc:** Distance $\dfrac{r\sin\alpha}{\alpha}$ from center
- **Straight Wire:** At geometric midpoint
:::

![Center of mass of shapes](/images/tikz/m2-center-of-mass-shapes.svg)

## The Combination Principle: Building Complex Shapes

:::tip[The Core Principle]
**Every complex object can be treated as a system of point masses.**

Each part can be replaced by a single point mass at its center of mass. The overall center of mass follows:

$$\bar{x} = \frac{\sum m_i x_i}{\sum m_i}, \quad \bar{y} = \frac{\sum m_i y_i}{\sum m_i}$$
:::

### Type 1: Direct Decomposition — The L-Shaped Lamina

Find the distance from the center of mass of the uniform L-shaped lamina to AB and BC.

Decompose into two rectangles (with B at origin):
- Rectangle 1 (bottom): $4 \times 1$, mass $m_1 = 4\rho$, center at $(2, 0.5)$
- Rectangle 2 (left): $1 \times 3$, mass $m_2 = 3\rho$, center at $(0.5, 2.5)$

Total mass: $M = 7\rho$

$$\bar{x} = \frac{4\rho \times 2 + 3\rho \times 0.5}{7\rho} = \frac{19}{14}$$

$$\bar{y} = \frac{4\rho \times 0.5 + 3\rho \times 2.5}{7\rho} = \frac{19}{14}$$

**Answer:** Distance from center of mass to AB and BC are both $\dfrac{19}{14}$.

![L-shaped lamina decomposition](/images/tikz/m2-l-shape-composite.svg)

### Type 2: Bent Wire Frame

A uniform wire is bent to form ABCD: AB = 4, BC = 3, CD = 2.

With B at origin: A$(-4,0)$, B$(0,0)$, C$(0,3)$, D$(-2,3)$.

| Segment | Mass | Center |
|---|---|---|
| AB | 4 | $(-2, 0)$ |
| BC | 3 | $(0, 1.5)$ |
| CD | 2 | $(-1, 3)$ |

Total mass: $M = 9$

$$\bar{x} = \frac{4(-2) + 3(0) + 2(-1)}{9} = -\frac{10}{9}$$

$$\bar{y} = \frac{4(0) + 3(1.5) + 2(3)}{9} = \frac{10.5}{9} = \frac{7}{6}$$

Distance to BC: $\dfrac{10}{9}$; distance to AB: $\dfrac{7}{6}$.

### Type 3: Holes and Negative Mass

A circular lamina of radius 6 has a circular hole of radius 2. The hole center is 3 from the lamina center.

Place the large circle center at origin, hole center at $(3, 0)$.

- Large circle: mass $m_1 = 36\pi$, center $(0, 0)$
- Hole (negative mass): $m_2 = -4\pi$, center $(3, 0)$

$$\bar{x} = \frac{36\pi \times 0 + (-4\pi) \times 3}{36\pi - 4\pi} = \frac{-12\pi}{32\pi} = -\frac{3}{8}$$

**Answer:** Distance from original center $= \dfrac{3}{8}$ units (away from the hole).

![Washer with offset hole](/images/tikz/m2-washer-hole.svg)

### Type 4: Non-Uniform Objects

Rectangle A: $4 \times 2$, mass 24, center at $(2, 1)$. Rectangle B: $2 \times 3$, mass 30, center at $(5, 1.5)$.

$$d_{\text{left}} = \frac{24 \times 2 + 30 \times 5}{24 + 30} = \frac{198}{54} = \frac{11}{3} \text{ cm}$$

$$d_{\text{bottom}} = \frac{24 \times 1 + 30 \times 1.5}{54} = \frac{69}{54} = \frac{23}{18} \text{ cm}$$

## Equilibrium and Stability

### The Hanging Mobile

**Fundamental Principle:** An object suspended from any point will hang so that its center of mass is directly below the suspension point.

For equilibrium, the total moment about the suspension point must be zero. If the center of mass is not directly below the pivot, gravity creates a restoring moment.

### The Leaning Tower — Stability on Tilted Surfaces

For an object on a tilted surface, stability depends on whether the vertical line through the center of mass passes through the base of support.

- **Stable:** CM vertical line passes within the base
- **Critical:** CM vertical line passes at the edge
- **Unstable:** CM vertical line falls outside the base → toppling

![Stability diagram](/images/tikz/m2-stability-diagram.svg)

## Forces and Moments: The Complete Picture

### The Ladder Problem

A uniform ladder of length $L$ and weight $W$ leans against a smooth wall at angle $\theta$ to the horizontal. Coefficient of friction $\mu$ at ground. Find the minimum $\mu$ for equilibrium.

**Forces:**
- $W$ downward at ladder center
- $N_w$ horizontal from wall (smooth, no friction)
- $N_g$ vertical upward from ground
- $f$ horizontal friction at ground

![Ladder against wall with forces](/images/tikz/m2-ladder-equilibrium.svg)

**Equilibrium conditions:**

$\sum F_x = 0$: $f = N_w$

$\sum F_y = 0$: $N_g = W$

$\sum M_A = 0$: $W \cdot \dfrac{L}{2}\cos\theta - N_w \cdot L\sin\theta = 0$

Solving:

$$N_w = \frac{W}{2\tan\theta}$$

For no slip: $f \leq \mu N_g \implies \dfrac{W}{2\tan\theta} \leq \mu W$

$$\mu \geq \frac{1}{2\tan\theta}$$

:::tip[Key Insight]
The steeper the ladder (larger $\theta$), the less friction needed!
:::

### Types of Supports

- **Rested Support:** 1 perpendicular reaction, can rotate and slide
- **Hinged Support:** $R_x$ and $R_y$ adjust for equilibrium, can rotate
- **Fixed Support:** Cannot rotate or move, provides force and moment reactions

### Light Rod vs Weighted Rod

- **Light Rod:** No self-weight, only external loads
- **Weighted Rod:** Has weight $W$ at center of mass plus external loads

### Friction and Limiting Equilibrium

$$f \leq \mu N$$

- $f < \mu N$: no tendency to slip, friction adjusts automatically
- $f = \mu N$: limiting equilibrium (on the verge of slipping)
- $f = \mu N$ (kinetic): slipping occurs

:::caution[The Systematic Approach for Rod/Ladder Problems]
1. **Identify the system:** light or weighted? support types? friction?
2. **Draw the free body diagram:** mark all forces, reactions, friction
3. **Choose moment center strategically:** pick a point eliminating unknowns
4. **Apply $\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$:** max 3 unknowns
5. **Check friction:** verify $f \leq \mu N$
:::

## The Triangle Challenge: Integration and Moment Balance

### The Strip Method

![Triangle divided into strips](/images/tikz/m2-triangle-strips.svg)

Slice the triangle into horizontal strips. Each strip at height $y$ has width $w(y)$ and thickness $dy$.

For a right triangle with vertices $(0,0)$, $(a,0)$, $(0,b)$:

Using similar triangles: $w(y) = a\left(1 - \dfrac{y}{b}\right)$

Total mass:

$$M = \int_0^b w(y)\,dy = a\int_0^b \left(1 - \frac{y}{b}\right) dy = \frac{ab}{2}$$

Total moment about x-axis:

$$M_y = \int_0^b y\,w(y)\,dy = a\int_0^b y\left(1 - \frac{y}{b}\right) dy = \frac{ab^2}{6}$$

Therefore:

$$\bar{y} = \frac{M_y}{M} = \frac{ab^2/6}{ab/2} = \frac{b}{3}$$

Similarly, $\bar{x} = \dfrac{a}{3}$.

### From Right Triangles to Any Triangle

A triangle with vertices $A(-a,0)$, $B(0,b)$, $C(c,0)$ can be split into two right triangles:
- $\triangle_1$: $(-a,0)$, $(0,b)$, $(0,0)$ — CM at $\left(-\dfrac{a}{3}, \dfrac{b}{3}\right)$
- $\triangle_2$: $(0,0)$, $(0,b)$, $(c,0)$ — CM at $\left(\dfrac{c}{3}, \dfrac{b}{3}\right)$

Using the combination formula:

$$\bar{x} = \frac{\frac{ab}{2}\left(-\frac{a}{3}\right) + \frac{cb}{2}\left(\frac{c}{3}\right)}{\frac{ab}{2} + \frac{cb}{2}} = \frac{c-a}{3} = \frac{-a+0+c}{3}$$

$$\bar{y} = \frac{\frac{ab}{2}\left(\frac{b}{3}\right) + \frac{cb}{2}\left(\frac{b}{3}\right)}{\frac{ab}{2} + \frac{cb}{2}} = \frac{b}{3} = \frac{0+b+0}{3}$$

This confirms the universal result: **for any triangle, the center of mass is at the average of the three vertex coordinates.**

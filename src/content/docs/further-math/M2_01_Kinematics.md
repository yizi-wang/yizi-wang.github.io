---
title: 'M2 Mechanics: Kinematics of Motion in Two Dimensions'
description: 'Edexcel IAL M2 运动学 — 二维运动分析、抛体运动、变加速与向量微积分'
---

# M2 Mechanics: Kinematics of Motion in Two Dimensions

## From Lines to Planes: Understanding Motion in the Real World

Imagine you're watching a basketball game. As a player shoots for a three-pointer, the ball follows a graceful curved path through the air. How can we mathematically describe this motion? Or consider a rocket launch — as it accelerates upward, its speed changes continuously. How do we analyze motion when acceleration isn't constant?

:::caution[The Central Challenge of Two-Dimensional Kinematics]
How can we extend our understanding of straight-line motion to analyze complex, curved trajectories in the real world?
:::

This chapter explores the mathematical framework that allows us to analyse motion in two dimensions, introducing the powerful concept of **vector decomposition** and the calculus-based approach to **variable acceleration**.

## The Foundation: Decomposing Motion by Direction

### The Revolutionary Insight: Independent Components

Before diving into projectile motion, we must first understand one of the most powerful concepts in physics: **the principle of independence of motion components**.

**Example: The Monkey and the Hunter — A Classic Thought Experiment**

**The Setup:** A hunter aims directly at a monkey hanging from a tree branch. At the exact moment the hunter fires, the monkey, startled by the sound, drops from the branch.

**The Question:** Will the bullet hit the monkey?

**The Surprising Answer:** Yes! Even though both the bullet and monkey are falling due to gravity.

**Why This Works:** This classic problem illustrates that horizontal and vertical motions are completely independent. Both the bullet and monkey experience the same vertical acceleration due to gravity, so their vertical positions change by exactly the same amount at any given time.

This independence principle is the foundation of all two-dimensional kinematics and leads us to our first major insight:

:::tip[The Principle of Component Independence]
**Any motion in two dimensions can be analysed by treating the horizontal and vertical components completely separately.**

Key Implications:
1. Motion in the $x$-direction is independent of motion in the $y$-direction
2. Each component follows the same kinematic equations we learned in M1
3. We can solve for each component separately, then combine the results
:::

### The Mathematical Foundation: Vector Decomposition

Let's formalise this concept mathematically.

**Definition: Position Vector**

The **position vector** $\mathbf{r}(t)$ describes the location of a particle at time $t$ relative to a fixed origin:

$$\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j}$$

where $\mathbf{i}$ and $\mathbf{j}$ are unit vectors in the $x$ and $y$ directions respectively.

**Definition: Velocity Vector**

The **velocity vector** $\mathbf{v}(t)$ is the rate of change of position:

$$\mathbf{v}(t) = \frac{d\mathbf{r}}{dt} = v_x(t)\mathbf{i} + v_y(t)\mathbf{j}=\frac{dx}{dt}\mathbf{i} + \frac{dy}{dt}\mathbf{j}$$

**Definition: Acceleration Vector**

The **acceleration vector** $\mathbf{a}(t)$ is the rate of change of velocity:

$$\mathbf{a}(t) = \frac{d\mathbf{v}}{dt} = a_x(t)\mathbf{i} + a_y(t)\mathbf{j}=\frac{dv_x}{dt}\mathbf{i} + \frac{dv_y}{dt}\mathbf{j}$$

### From Theory to Practice: Setting Up the Framework

**Example: Establishing Our Coordinate System**

For most projectile motion problems, we use a standard coordinate system:

- **Origin:** Usually at the launch point or ground level
- **x-axis:** Horizontal, positive in the direction of initial motion
- **y-axis:** Vertical, positive upward
- **Acceleration:** $\mathbf{a} = 0\mathbf{i} - g\mathbf{j}$ where $g = 9.8 \text{ m/s}^2$

:::note[配图]
抛体运动坐标示意图（对应原 TikZ 图）。
:::

## Projectile Motion: Motion Under Constant Acceleration

### The Physical Setup and Assumptions

Projectile motion occurs when an object moves under the influence of gravity alone, after being given some initial velocity. Let's establish our key assumptions:

:::note[Projectile Motion Assumptions]
1. **No air resistance:** We ignore drag forces
2. **Flat Earth:** We assume $g$ is constant and always points downward
3. **No other forces:** Only gravity acts on the projectile
4. **Point particle:** We ignore the size and rotation of the object
:::

Under these assumptions, we have:

$$a_x = 0 \quad \text{(horizontal acceleration)}$$
$$a_y = -g \quad \text{(vertical acceleration)}$$

### The Kinematic Equations for Projectile Motion

Applying the M1 kinematic equations to each component separately:

**Horizontal Motion (constant velocity):**

$$x(t) = x_0 + v_{0x}t, \quad v_x(t) = v_{0x}$$

**Vertical Motion (constant acceleration):**

$$y(t) = y_0 + v_{0y}t - \frac{1}{2}gt^2$$
$$v_y(t) = v_{0y} - gt$$
$$v_y^2 = v_{0y}^2 - 2g(y - y_0)$$

### Analysing Launch Angles: The Complete Picture

**Example: The Soccer Ball Trajectory Analysis**

**Scenario:** A soccer player kicks a ball from ground level with initial speed $v_0 = 20$ m/s at an angle $\theta = 30^\circ$ above horizontal.

**Step 1: Decompose the Initial Velocity**

$$v_{0x} = v_0 \cos\theta = 20 \cos(30^\circ) = 20 \times \frac{\sqrt{3}}{2} = 10\sqrt{3} \text{ m/s}$$
$$v_{0y} = v_0 \sin\theta = 20 \sin(30^\circ) = 20 \times \frac{1}{2} = 10 \text{ m/s}$$

**Step 2: Write the Position Equations**

Taking the launch point as origin ($x_0 = y_0 = 0$):

$$x(t) = 10\sqrt{3}t, \quad y(t) = 10t - 4.9t^2$$

**Step 3: Find Key Characteristics**

**Time to Maximum Height:** At maximum height, $v_y = 0$:

$$0 = v_{0y} - gt \implies t_{\text{max}} = \frac{v_{0y}}{g} = \frac{10}{9.8} = 1.02 \text{ s}$$

**Maximum Height:**

$$y_{\text{max}} = y(t_{\text{max}}) = 10(1.02) - 4.9(1.02)^2 = 5.10 \text{ m}$$

**Total Flight Time:** When the ball returns to ground level, $y = 0$:

$$0 = 10t - 4.9t^2 = t(10 - 4.9t)$$

So $t = 0$ (launch) or $t = \dfrac{10}{4.9} = 2.04$ s (landing).

**Range:**

$$R = x(2.04) = 10\sqrt{3} \times 2.04 = 35.3 \text{ m}$$

**Step 4: Find the Trajectory Equation**

Eliminate time to get $y$ as a function of $x$:

From $x = 10\sqrt{3}t$, we get $t = \dfrac{x}{10\sqrt{3}}$.

Substituting into $y = 10t - 4.9t^2$:

$$y = \frac{x}{\sqrt{3}} - \frac{4.9x^2}{300}$$

This is the equation of a parabola!

**Example: Student Investigation — Deriving Universal Projectile Laws**

**Your Mission:** Starting from first principles, derive the key formulas that work for ANY projectile launch.

**Given Information:**
- A projectile is launched from the origin with initial speed $v_0$ at angle $\theta$
- Initial velocity components: $v_{0x} = v_0\cos\theta$, $v_{0y} = v_0\sin\theta$
- Motion equations: $x(t) = v_{0x}t$ and $y(t) = v_{0y}t - \dfrac{1}{2}gt^2$

**Investigation Part 1: When does the projectile reach maximum height?**

1. Write the equation for vertical velocity at time $t$: $v_y(t) = \text{___}$
2. At maximum height, what must be true about $v_y$? Why?
3. Set up and solve the equation to find $t_{\text{max}}$:

$$v_y = 0 \implies t_{\text{max}} = \text{___}$$

**Investigation Part 2: What IS the maximum height?**

4. Substitute $t_{\text{max}}$ into the position equation $y(t)$:

$$H = v_{0y} \cdot t_{\text{max}} - \frac{1}{2}g \cdot {t_{\text{max}}}^2$$

5. Simplify using $v_{0y} = v_0\sin\theta$:

$$H = \frac{{v_0}^2 \sin^2\theta}{2g}$$

**Investigation Part 3: How long is the total flight?**

6. For level launch and landing, set $y(t) = 0$ and solve:

$$0 = v_{0y}t - \frac{1}{2}gt^2 = t\left(v_{0y} - \frac{1}{2}gt\right)$$

This gives $t = 0$ (launch) and $t = \dfrac{2v_{0y}}{g}$ (landing).

7. How does the total flight time $T$ relate to $t_{\text{max}}$? $T = 2t_{\text{max}}$.

**Investigation Part 4: What's the range?**

8. The range is the horizontal distance when the projectile lands:

$$R = v_{0x} \cdot T = v_0\cos\theta \cdot \frac{2v_0\sin\theta}{g} = \frac{{v_0}^2 \sin(2\theta)}{g}$$

**Investigation Part 5: What's the trajectory equation?**

10. From $x = v_{0x}t$, express $t = \dfrac{x}{v_0\cos\theta}$.

11. Substitute into the vertical motion equation and simplify:

$$y = x\tan\theta - \frac{gx^2}{2{v_0}^2\cos^2\theta}$$

### Optimising Projectile Motion: The Mathematics of Sports

**Example: The Angle Tolerance Mystery**

**Basketball Challenge:** A player has perfected their shooting motion and always releases the ball at exactly $v_0 = 8.0$ m/s from the free-throw line. But sometimes they miss due to slight angle variations.

**Given Data:**
- Fixed release speed: $v_0 = 8.0$ m/s
- Distance to basket: 4.6 m horizontally
- Basket height: 3.05 m, Release height: 2.1 m

**Your Mission:** Find which launch angles work, and which gives the best margin for error.

**Step 1: Set up the coordinate system**
- Origin at release point
- Horizontal distance to basket: $x = 4.6$ m
- Vertical displacement: $y = 3.05 - 2.1 = 0.95$ m

**Step 2: Apply projectile motion equations**

$$y = x\tan\theta - \frac{gx^2}{2{v_0}^2\cos^2\theta}$$

Substituting $x = 4.6$, $y = 0.95$, $v_0 = 8.0$, $g = 9.8$:

$$0.95 = 4.6\tan\theta - \frac{9.8 \times 4.6^2}{2 \times 8.0^2}\sec^2\theta$$

**Step 3: Find all possible launch angles**

Let $u = \tan\theta$. Then $\sec^2\theta = 1 + u^2$:

$$0.95 = 4.6u - \frac{9.8 \times 21.16}{128}(1 + u^2)$$

This is a quadratic in $u$. Solving gives two solutions:

- $u_1 \approx 1.19 \implies \theta_1 \approx 50.0^\circ$ (Low arc)
- $u_2 \approx 2.36 \implies \theta_2 \approx 67.1^\circ$ (High arc)

:::tip[Coaching Insight]
Basketball coaches often tell players to "put more arc on their shots" because the high arc trajectory provides a larger target area — the ball approaches the basket from above rather than horizontally.
:::

## Variable Acceleration: Beyond Constant Forces

### When the M1 Equations Aren't Enough

In M1, we assumed acceleration was constant. But what happens when forces — and therefore accelerations — change with time, position, or velocity?

**Example: Real-World Variable Acceleration Scenarios**

1. **Car braking:** Friction forces change as tires heat up
2. **Rocket launch:** As fuel burns, the rocket's mass decreases, changing acceleration
3. **Spring systems:** Force (and acceleration) varies with displacement: $F = -kx$
4. **Air resistance:** Drag force depends on speed: $F_{\text{drag}} \propto v^2$

For these situations, we need the power of calculus!

### The Calculus Connection: Derivatives and Motion

The relationship between position, velocity, and acceleration through derivatives gives us the tools to handle variable acceleration.

**Definition: Kinematic Relationships Using Calculus**

For a particle with position vector $\mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j}$:

**Velocity:**

$$\mathbf{v}(t) = \frac{d\mathbf{r}}{dt} = \frac{dx}{dt}\mathbf{i} + \frac{dy}{dt}\mathbf{j}$$

**Acceleration:**

$$\mathbf{a}(t) = \frac{d\mathbf{v}}{dt} = \frac{d^2\mathbf{r}}{dt^2} = \frac{d^2x}{dt^2}\mathbf{i} + \frac{d^2y}{dt^2}\mathbf{j}$$

## Vector Analysis of Motion

### Beyond Components: Vector Calculus in Action

**Definition: Vector Differentiation**

For a vector function $\mathbf{r}(t) = f(t)\mathbf{i} + g(t)\mathbf{j}$:

$$\frac{d\mathbf{r}}{dt} = \frac{df}{dt}\mathbf{i} + \frac{dg}{dt}\mathbf{j}$$

The same rule applies for integration:

$$\int \mathbf{r}(t) \, dt = \left(\int f(t) \, dt\right)\mathbf{i} + \left(\int g(t) \, dt\right)\mathbf{j}$$

**Example: Circular Motion**

**Scenario:** A particle moves in a circle of radius $R$.

**Position vector:** $\mathbf{r}(t) = R\cos(\omega t)\mathbf{i} + R\sin(\omega t)\mathbf{j}$

**Velocity vector:**

$$\mathbf{v}(t) = \frac{d\mathbf{r}}{dt} = -R\omega\sin(\omega t)\mathbf{i} + R\omega\cos(\omega t)\mathbf{j}$$

**Speed:** $|\mathbf{v}| = \sqrt{R^2\omega^2\sin^2(\omega t) + R^2\omega^2\cos^2(\omega t)} = R\omega$ (constant)

**Acceleration vector:**

$$\mathbf{a}(t) = \frac{d\mathbf{v}}{dt} = -R\omega^2\cos(\omega t)\mathbf{i} - R\omega^2\sin(\omega t)\mathbf{j} = -\omega^2\mathbf{r}(t)$$

**Key Insights:**
- $\mathbf{v} \cdot \mathbf{r} = 0$ always (velocity perpendicular to position)
- $|\mathbf{a}| = R\omega^2$ (centripetal acceleration)
- $\mathbf{a}$ always points toward the center

**Example: In-Class Activity — Drone Navigation System**

**Real-World Challenge:** Program a drone to follow a specific flight path.

**Mission:** The drone must fly from point A$(0,0)$ to point B$(100,100)$ following the path:

$$\mathbf{r}(t) = (100t - 25t^2)\mathbf{i} + (25t^2)\mathbf{j}$$

for $0 \leq t \leq 2$ seconds.

**Analysis Tasks:**
1. Verify that this path connects A to B
2. Find the velocity and acceleration vectors
3. Determine when the drone has maximum speed
4. Calculate the total distance traveled

**Example: The Loop Challenge — Vector Forces in Action**

**Real-World Application:** A roller coaster has a vertical circular loop with radius $R = 15$ m. Cars travel at constant speed $v = 20$ m/s.

**Your Mission:** Find the total acceleration (gravity + centripetal) at different positions.

**Step 1: Calculate the centripetal acceleration**

$$a_c = \frac{v^2}{R} = \frac{20^2}{15} = \frac{400}{15} \approx 26.67 \text{ m/s}^2$$

**Step 2: Analyse key positions**

**At Bottom of Loop:**
- Centripetal acceleration: $26.67 \text{ m/s}^2$ upward
- Gravitational acceleration: $9.8 \text{ m/s}^2$ downward
- Total acceleration magnitude: $26.67 + 9.8 = 36.47 \text{ m/s}^2$ (felt by rider)

**At Top of Loop:**
- Centripetal acceleration: $26.67 \text{ m/s}^2$ downward
- Gravitational acceleration: $9.8 \text{ m/s}^2$ downward
- Total acceleration magnitude: $26.67 - 9.8 = 16.87 \text{ m/s}^2$

**Step 3: Safety Analysis**

G-force $= \dfrac{|\mathbf{a}_{\text{total}}|}{9.8}$

- Bottom: G-force $\approx 3.72$
- Top: G-force $\approx 1.72$

:::caution[Engineering Insight]
Vector addition of accelerations determines both thrill and safety! The bottom of the loop produces the highest G-force on riders.
:::

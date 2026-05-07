---
title: 'M2 Mechanics: Work, Energy, Impulses and Collisions'
description: 'Edexcel IAL M2 动力学 — 功与能、功能原理、冲量-动量、碰撞与恢复系数'
---

# M2 Mechanics: Work, Energy, Impulses and Collisions

## From Forces to Conservation: A New Perspective on Motion

In the 17th century, Newton's laws revolutionised mechanics: if you know all the forces, you can trace every instant of motion. But by the late 1600s, scientists noticed something remarkable — *certain quantities remain constant* throughout complex motions, even when forces change dramatically.

### The Historical Quest: Beyond Forces

Imagine a pendulum swinging back and forth, or a roller coaster plunging down a track. Using $F=ma$ at every instant is possible but exhausting. Forces change direction, speeds vary, paths curve. Is there a *shortcut*?

Leibniz, the Bernoullis, and later Joule discovered that for many systems, you can ignore the messy details of *how* motion unfolds and focus on *what is conserved*:

- **"Vis viva"** (living force) $K = mv^2$ — what we now call kinetic energy
- **Potential energy** $U$ from position in a gravitational or elastic field
- **Total mechanical energy** $E = K + U$ stays constant if only conservative forces act

Instead of solving differential equations step by step, you write one equation: $E_{\text{initial}} = E_{\text{final}}$. This **conservation principle** became one of the most powerful tools in all of physics.

:::caution[The Core Insight]
- **Energy methods** answer: "What is possible?" and "What is the final state?" without tracking every intermediate moment.
- **Force methods** answer: "What happens at this instant?" and give the entire trajectory.
:::

### A Parallel Revolution: Momentum and Impulse

Around the same time, scientists studying *collisions* faced another puzzle: when two objects crash, forces are enormous and fleeting. How do you predict the outcome without knowing the exact force history?

Descartes (1644) and Huygens (1669) realised that the *total quantity of motion* — mass × velocity — is conserved in collisions (in the absence of external forces). Newton later formalised this as **momentum conservation**.

Instead of $F(t)$, consider $I = \int F\,dt$, the accumulated effect. This transforms intractable collision problems into simple before-and-after algebra.

:::note[Why Two Approaches?]
- **Energy:** Focus on work, scalar quantities, and changes in speed/height. Best when you care about "how fast" or "how high."
- **Momentum/Impulse:** Focus on vector quantities and interactions. Best for collisions, explosions, or when external forces act briefly.
:::

## Work and Energy

### The Concept of Work: Quantifying Energy Transfer

In the 1800s, engineers building steam engines needed to measure how effectively a force could lift a weight or push a piston. They coined the term **work** to quantify the energy transferred *by a force along a displacement*.

**Key realisation:** Only the component of force *along the direction of motion* contributes. Pushing perpendicular to motion does no work (think of carrying a suitcase horizontally — gravity does no work because displacement is perpendicular to the weight).

:::tip[When to choose the energy method]
- Use energy when you care about *initial vs final* states (speed, height, distance) more than the path.
- If only conservative forces (e.g., gravity) do work, total mechanical energy is constant.
- With friction or drives, include their work using $W_{\text{nc}}$ and apply the work–energy principle.
:::

### Definition of Work

For a constant force of magnitude $F$ making angle $\theta$ with the displacement $\vec{s}$, the work done $W$ is:

$$W = \vec{F} \cdot \vec{s} = Fs\cos\theta$$

**Only the component along the direction of motion does work.**

**Example: Pulling at an angle**

A constant force of 20 N is applied at $30^\circ$ above the horizontal to move a crate 5 m along a smooth floor.

$$W = 20 \times 5 \times \cos(30^\circ) = 100 \times \frac{\sqrt{3}}{2} = 86.6 \text{ J}$$

### Constant-Force Work: Component × Distance

Work measures energy transfer. When you push a box, only the force component *parallel to the motion* does useful work.

**Sign convention:**
- $W > 0$: force aids motion (engine pushing a car forward)
- $W < 0$: force opposes motion (friction, air resistance)
- $W = 0$: force perpendicular to motion

**Example: Work against friction on a rough floor**

A 12 kg box is pushed 8 m on a horizontal rough surface with coefficient of friction $\mu = 0.25$. The pushing force is horizontal and just large enough to keep constant speed.

Normal force: $N = mg = 12 \times 9.8 = 117.6 \text{ N}$

Friction: $f = \mu N = 0.25 \times 117.6 = 29.4 \text{ N}$

Work by push: $W_{\text{push}} = 29.4 \times 8 = 235.2 \text{ J}$

Work by friction: $W_f = -29.4 \times 8 = -235.2 \text{ J}$

Net work: $W_{\text{net}} = 0$ (constant speed, $\Delta K = 0$)

### Kinetic and Potential Energy

Two forms of mechanical energy: energy of motion (kinetic) and energy of position (potential).

**Kinetic energy — the energy of motion:**

$$K = \frac{1}{2}mv^2$$

**Why squared?** From work: $W = F \cdot s = ma \cdot s$. Using $v^2 = u^2 + 2as$ with $u = 0$ gives $W = \frac{1}{2}mv^2$. The work done to accelerate from rest equals the kinetic energy gained.

**Gravitational potential energy — stored energy of position:**

$$U = mgh$$

When you lift a mass $m$ to height $h$, you do work $W = mgh$ against gravity. This energy is "stored" and can be recovered when the object falls.

:::note[Standard Forms]
- **Kinetic energy:** $K = \dfrac{1}{2}mv^2$
- **Gravitational potential (near Earth):** $U = mgh$
:::

### Conservation of Mechanical Energy

When only *conservative forces* act (gravity, springs, electrostatic forces), the total mechanical energy $E = K + U$ remains constant throughout the motion.

A force is conservative if the work it does is independent of path, depending only on start and end positions. Gravity is conservative: lifting a book 1 m requires the same work whether you lift it straight up or carry it up a winding staircase.

:::tip[Energy Conservation — no non-conservative work]
If only gravity (and other conservative forces) do work on the system:

$$K_i + U_i = K_f + U_f$$
:::

**Example: Smooth track drop**

![Energy conservation track](/images/m2-energy-track.svg)

A bead of mass $m$ starts from rest at height $H$ on a smooth track and descends to height $h$.

$$mgH + 0 = mgh + \frac{1}{2}mv^2$$

$$v = \sqrt{2g(H - h)}$$

### Work–Energy Principle

When non-conservative forces (like friction) are present, they do work $W_{\text{nc}}$ that changes the total mechanical energy:

$$\Delta(K + U) = W_{\text{nc}}$$

- $W_{\text{nc}} > 0$: external agent adds energy
- $W_{\text{nc}} < 0$: energy dissipated (friction, air resistance)
- $W_{\text{nc}} = 0$: pure conservative system

**Example: Block up a rough incline**

A block of mass $m$ is pulled up an incline of angle $\alpha$ by a constant force $P$ parallel to the plane over distance $s$. Coefficient of friction is $\mu$; the block starts from rest.

- Work by $P$: $Ps$
- Work by gravity: $-mg s\sin\alpha$
- Work by friction: $-\mu mg\cos\alpha \cdot s$

$$\frac{1}{2}mv^2 = Ps - mgs\sin\alpha - \mu mgs\cos\alpha$$

$$v^2 = \frac{2s}{m}(P - mg\sin\alpha - \mu mg\cos\alpha)$$

**Example: Braking distance**

A car of mass $m$ moves on level ground at speed $v_0$. The brakes lock and the tyres slide with coefficient of kinetic friction $\mu$ until rest.

$$\Delta K = W_f \implies 0 - \frac{1}{2}mv_0^2 = -\mu mgd$$

$$d = \frac{v_0^2}{2\mu g}$$

### Power

Power measures *how fast* energy is transferred.

:::note[Power]
- **Average power:** $\bar{P} = \dfrac{W}{t}$
- **Instantaneous power:** $P = \vec{F} \cdot \vec{v} = Fv\cos\theta$
:::

James Watt (1780s) needed to compare steam engines to horses. He defined power as work per unit time, creating the unit "horsepower" (1 hp ≈ 746 W).

A car climbing a hill at constant speed needs power $P = F_{\text{engine}} \times v$ to balance resistive forces (gravity component, friction, air resistance).

### Practice Exercise: Multi-Stage Motion

A block of mass 5 kg starts from rest at point A, at the top of a smooth curved ramp of height $h_1 = 4$ m. It slides down to point B, then travels across a rough horizontal surface BC of length $d = 6$ m with $\mu = 0.3$. Finally, it moves up a smooth incline CD at $\alpha = 30^\circ$.

**(a) Speed at B:**

$$mgh_1 = \frac{1}{2}mv_B^2 \implies v_B = \sqrt{2gh_1} = \sqrt{2 \times 9.8 \times 4} = 8.85 \text{ m/s}$$

**(b) Work by friction from B to C:**

$$W_f = -\mu mgd = -0.3 \times 5 \times 9.8 \times 6 = -88.2 \text{ J}$$

$$\frac{1}{2}mv_C^2 = \frac{1}{2}mv_B^2 + W_f = 5 \times 9.8 \times 4 - 88.2 = 196 - 88.2 = 107.8$$

$$v_C = \sqrt{\frac{2 \times 107.8}{5}} = 6.57 \text{ m/s}$$

**(c) Maximum height on the incline:**

$$\frac{1}{2}mv_C^2 = mgh \implies h = \frac{v_C^2}{2g} = \frac{107.8}{5 \times 9.8} = 2.20 \text{ m}$$

## Impulses and Collisions

![1D collision setup](/images/m2-collision-1d.svg)

### The Story of Collisions: From Billiard Balls to Conservation Laws

In the mid-1600s, natural philosophers were puzzled by a simple question: *When two objects collide, what determines the outcome?*

Christiaan Huygens (1669) noticed a striking pattern: even though forces during impact were unknown and impossibly brief, the *total "quantity of motion"* (mass × velocity) before and after collision remained the same — provided no external forces interfered.

:::caution[The Impulse–Momentum Breakthrough]
Newton's insight (1687): Define **momentum** $\vec{p} = m\vec{v}$ and **impulse** $I = \int F\,dt$. Then Newton's second law integrates to:

$$I = \Delta p = mv_{\text{final}} - mv_{\text{initial}}$$

This transforms an intractable force problem into a simple before-and-after comparison.
:::

### Impulse–Momentum Principle

The **impulse** $I$ is the "total push" delivered over the contact time:

$$I = \int_{t_i}^{t_f} F\, dt$$

Newton's second law $F = ma = m\dfrac{dv}{dt}$ integrates to:

$$\int F\, dt = m \int dv = m(v - u) = \Delta p$$

So impulse equals the change in momentum: $I = mv - mu$.

**Why this is powerful:** Even if $F(t)$ is complicated, the integral $I$ depends only on before-and-after velocities.

**Example: Why airbags help**

A 70 kg passenger moves at 15 m/s. The car stops in a collision.

Stopping time 0.04 s: $F_{\text{avg}} = \dfrac{70 \times 15}{0.04} = 26{,}250 \text{ N}$

Stopping time 0.20 s: $F_{\text{avg}} = \dfrac{70 \times 15}{0.20} = 5{,}250 \text{ N}$

The airbag increases stopping time by 5×, reducing peak force by 5×!

:::note[Real-world engineering: Safety by design]
Airbags and crumple zones increase collision time $\Delta t$, so $F_{\text{avg}} = I/\Delta t$ decreases for the same momentum change. Lower peak force → reduced injury.
:::

### Conservation of Linear Momentum

When two objects interact, Newton's third law says forces are equal and opposite: $\vec{F}_{12} = -\vec{F}_{21}$.

Therefore impulses are also equal and opposite, so $\Delta p_1 = -\Delta p_2$, meaning $\Delta(p_1 + p_2) = 0$.

For an *isolated system* (no external forces), total momentum is constant:

$$p_{\text{total, before}} = p_{\text{total, after}}$$

:::tip[Momentum Conservation — isolated system]
Along a straight line with no external impulse:

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$
:::

**Example: Sticky collision**

Two trolleys of masses $m_1$ and $m_2$ move with speeds $u_1 > u_2$. They stick together after impact.

$$m_1 u_1 + m_2 u_2 = (m_1 + m_2)v \implies v = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}$$

### Newton's Law of Restitution

Momentum conservation gives one equation, but for two unknowns ($v_1$ and $v_2$) we need a second relationship. This comes from the **coefficient of restitution** $e$:

$$e = \frac{\text{relative speed of separation}}{\text{relative speed of approach}}$$

:::note[Law of Restitution]
For direct (head-on) impact along a common line:

$$e = \frac{\text{speed of separation}}{\text{speed of approach}}, \quad 0 \leq e \leq 1$$

- $e = 1$: perfectly elastic (no energy lost)
- $e = 0$: perfectly inelastic (objects stick together)
- $0 < e < 1$: real-world collisions
:::

**Example: Head-on impact with $e$**

Given $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$ and $e = \dfrac{v_2 - v_1}{u_1 - u_2}$, solve simultaneously for $v_1$ and $v_2$.

**Example: Bounce from a wall**

A ball strikes a smooth vertical wall head-on with speed $u$ and rebounds with coefficient of restitution $e$.

Speed after impact: $v = eu$ (in the opposite direction)

Impulse on the ball: $I = m(v - (-u)) = m(eu + u) = mu(1 + e)$

### Loss of Kinetic Energy in Impact

Momentum is *always* conserved in isolated collisions, but kinetic energy is conserved *only if* $e = 1$.

Where does the energy go? Heat, sound, permanent deformation, internal vibrations.

:::note[Energy Loss Formula — head-on]
For two masses $m_1, m_2$ with relative speed $u_1 - u_2$ before impact and coefficient $e$:

$$\Delta K = \frac{1}{2}\,\mu\,(u_1 - u_2)^2\,(1 - e^2), \quad \mu = \frac{m_1 m_2}{m_1 + m_2}$$

where $\mu$ is the **reduced mass**.
:::

**Physical insight:**
- If $e = 1$: no energy lost (elastic)
- If $e = 0$: maximum energy lost for given approach speed
- Larger relative speed → more energy dissipated

**Example: How much energy is lost?**

Let $m_1 = 2$ kg, $m_2 = 3$ kg, $u_1 = 6$ m/s, $u_2 = 1$ m/s, $e = 0.6$.

$$\mu = \frac{2 \times 3}{2 + 3} = 1.2 \text{ kg}$$

$$\Delta K = \frac{1}{2} \times 1.2 \times (6 - 1)^2 \times (1 - 0.6^2) = 0.6 \times 25 \times 0.64 = 9.6 \text{ J}$$

### Practice Exercise: Two-Stage Collision

Three smooth spheres A, B, C with masses $m_A = 2$ kg, $m_B = 3$ kg, $m_C = 5$ kg lie in a line. A moves at 6 m/s toward B (at rest). C is also at rest. $e_1 = 0.5$ (A–B), $e_2 = 0.8$ (B–C).

**Stage 1: A collides with B**

Momentum: $2(6) + 3(0) = 2v_A + 3v_B \implies 2v_A + 3v_B = 12$

Restitution: $e_1 = 0.5 = \dfrac{v_B - v_A}{6 - 0} \implies v_B - v_A = 3$

Solving: $v_A = 0.6$ m/s, $v_B = 3.6$ m/s (both forward)

**(a)** A does not rebound — it continues forward at 0.6 m/s.

**(b)** Impulse on A: $I = 2(0.6 - 6) = -10.8 \text{ N·s}$, magnitude = 10.8 N·s.

**Stage 2: B collides with C**

Momentum: $3(3.6) + 5(0) = 3v_B' + 5v_C \implies 3v_B' + 5v_C = 10.8$

Restitution: $e_2 = 0.8 = \dfrac{v_C - v_B'}{3.6 - 0} \implies v_C - v_B' = 2.88$

Solving: $v_B' = 0.45$ m/s, $v_C = 3.33$ m/s.

**(d) Total kinetic energy lost:**

Initial KE: $\frac{1}{2}(2)(6^2) = 36$ J

After Stage 1: $\frac{1}{2}(2)(0.6^2) + \frac{1}{2}(3)(3.6^2) = 0.36 + 19.44 = 19.8$ J

After Stage 2: $\frac{1}{2}(2)(0.6^2) + \frac{1}{2}(3)(0.45^2) + \frac{1}{2}(5)(3.33^2) = 0.36 + 0.304 + 27.72 = 28.38$ J

Total loss: $36 - 28.38 = 7.62$ J.

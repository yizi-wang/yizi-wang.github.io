---
title: "Lecture 8: Surface Curvature and the Catenoid"
---

# Lecture 8: Surface Curvature and the Catenoid

## Opening: From Soap Films to Engineering Marvels

- Imagine: two parallel metal rings dipped in soap water. When gently separated, a beautiful surface forms between them—this is the **catenoid**.

- This seemingly simple shape contains profound mathematical principles and plays important roles in modern engineering.

- Today's goal: understand how surfaces bend, and through calculating the catenoid's curvature, reveal the perfect combination of mathematics and engineering.

## Two "Rulers" for Measuring Surface Curvature

### First Ruler: Intrinsic Measurement

For parameterized surface $\vec{r}(u,v)$, the **first fundamental form** tells us how to measure distance on the surface:

$$I = E du^2 + 2F du dv + G dv^2$$

Where: $E = \vec{r}_u \cdot \vec{r}_u$, $F = \vec{r}_u \cdot \vec{r}_v$, $G = \vec{r}_v \cdot \vec{r}_v$

**Intuitive understanding**: This gives a ruler to "2D ants" living on the surface, measuring distances, angles, and areas.

### Second Ruler: Extrinsic Bending

The **second fundamental form** measures the surface's bending in 3D space:

$$II = L du^2 + 2M du dv + N dv^2$$

Where: $L = \vec{r}_{uu} \cdot \vec{n}$, $M = \vec{r}_{uv} \cdot \vec{n}$, $N = \vec{r}_{vv} \cdot \vec{n}$

**Intuitive understanding**: This measures normal vector $\vec{n}$'s change rate—only the "3D god" can perceive it.

### Two Key Curvatures

- **Gauss curvature**: $K = \frac{LN - M^2}{EG - F^2}$ (intrinsic property, bending paper doesn't change it)
- **Mean curvature**: $H = \frac{EN - 2FM + GL}{2(EG - F^2)}$ (extrinsic property, describes bending in space)

### Origin of Curvature Formulas

- **Gauss curvature formula's origin**:
  - Gauss in 1827 discovered: surface's Gauss curvature equals the product of two principal curvatures: $K = \kappa_1 \kappa_2$
  - Principal curvatures are eigenvalues of shape operator $S = I^{-1}II$, and eigenvalues' product equals the matrix determinant
  - Therefore: $K = \det(S) = \det(I^{-1}II) = \frac{\det(II)}{\det(I)} = \frac{LN - M^2}{EG - F^2}$
  - This formula's magic: though defined using embedding space, the result only depends on the first fundamental form!

- **Mean curvature formula's origin**:
  - Mean curvature is arithmetic mean of two principal curvatures: $H = \frac{\kappa_1 + \kappa_2}{2}$
  - Sum of principal curvatures equals shape operator's trace: $\kappa_1 + \kappa_2 = \text{tr}(S)$
  - Shape operator's trace through matrix calculation: $\text{tr}(S) = \text{tr}(I^{-1}II)$
  - Calculation yields: $H = \frac{1}{2}\text{tr}(S) = \frac{EN - 2FM + GL}{2(EG - F^2)}$
  - Mean curvature describes the surface's "outward bending" degree—an important concept in variational geometry

## Principal Curvatures: The Key to Understanding Bending

### Intuitive Understanding

- At any point on the surface, there are two special directions—**principal directions**
- Along these directions, surface bending reaches extrema: $\kappa_1$ (maximum bending) and $\kappa_2$ (minimum bending)
- These two **principal curvatures** completely determine the point's bending properties

### Euler's Formula: Predicting Bending in Any Direction

$$\boxed{\kappa_n(\theta) = \kappa_1 \cos^2\theta + \kappa_2 \sin^2\theta}$$

**Meaning**: Knowing principal curvatures, we can predict bending degree in any direction $\theta$.

## Catenoid: Nature's Perfect Design

### What is a Catenoid?

- **Definition**: Surface with mean curvature $H = 0$, i.e., $\kappa_1 + \kappa_2 = 0$
- **Physical meaning**: Shape with minimum surface tension—soap film's natural choice
- **History**: First minimal surface discovered by Euler in 1744

### Mathematical Description

Parametric equations (taking $a = 1$ for simplified calculation):

$$\vec{r}(u,v) = (\cosh v \cos u, \cosh v \sin u, v)$$

Where $u \in [0, 2\pi]$, $v \in \mathbb{R}$.

## Complete Curvature Calculation for the Catenoid

### Step 1: Partial Derivatives

$$\begin{aligned} \vec{r}_u &= (-\cosh v \sin u, \cosh v \cos u, 0) \\ \vec{r}_v &= (\sinh v \cos u, \sinh v \sin u, 1) \\ \vec{r}_{uu} &= (-\cosh v \cos u, -\cosh v \sin u, 0) \\ \vec{r}_{uv} &= (-\sinh v \sin u, \sinh v \cos u, 0) \\ \vec{r}_{vv} &= (\cosh v \cos u, \cosh v \sin u, 0) \end{aligned}$$

### Step 2: First Fundamental Form

$$\begin{aligned} E &= \vec{r}_u \cdot \vec{r}_u = \cosh^2 v \\ F &= \vec{r}_u \cdot \vec{r}_v = 0 \\ G &= \vec{r}_v \cdot \vec{r}_v = \sinh^2 v + 1 = \cosh^2 v \end{aligned}$$

### Step 3: Normal Vector

$$\begin{aligned} \vec{r}_u \times \vec{r}_v &= (\cosh v \cos u, \cosh v \sin u, -\sinh v \cosh v) \\ |\vec{r}_u \times \vec{r}_v| &= \cosh^2 v \\ \vec{n} &= \frac{(\cos u, \sin u, -\sinh v)}{\cosh v} \end{aligned}$$

### Step 4: Second Fundamental Form

$$\begin{aligned} L &= \vec{r}_{uu} \cdot \vec{n} = -1 \\ M &= \vec{r}_{uv} \cdot \vec{n} = 0 \\ N &= \vec{r}_{vv} \cdot \vec{n} = \frac{1}{\cosh v} \end{aligned}$$

### Step 5: Curvature Results

$$\begin{aligned} K &= \frac{LN - M^2}{EG - F^2} = \frac{(-1) \cdot \frac{1}{\cosh v}}{\cosh^4 v} = \frac{-1}{\cosh^4 v} < 0 \\ H &= \frac{EN - 2FM + GL}{2(EG - F^2)} = \frac{\cosh^2 v \cdot \frac{1}{\cosh v} + \cosh^2 v \cdot (-1)}{2\cosh^4 v} = 0 \\ \kappa_1 &= \frac{1}{\cosh^2 v}, \quad \kappa_2 = -\frac{1}{\cosh^2 v} \end{aligned}$$

### Interpretation of Results

- **Minimal surface**: $H = 0$, minimum surface tension
- **Saddle shape**: $K = \frac{-1}{\cosh^4 v} < 0$, every point bends in opposite directions
- **Perfect balance**: $\kappa_1 = \frac{1}{\cosh^2 v}$, $\kappa_2 = -\frac{1}{\cosh^2 v}$, principal directions bend equally but opposite
- **Specific values**:
  - At $v = 0$ (thinnest waist): $\cosh 0 = 1$, so $\kappa_1 = 1$, $\kappa_2 = -1$, $K = -1$
  - As $|v|$ increases, $\cosh v$ increases, principal curvatures' absolute values decrease, surface becomes "flatter"
  - This explains the catenoid's shape: most "bent" in middle, gradually flattening at ends

## Engineering Applications of the Catenoid

### Architectural Structures

- **St. Louis Arch**: World's tallest arch, using catenary design principles
- **Thin-shell roofs**: Catenoid-shaped roofs bear maximum load with minimum material
- **Advantages**: Uniform stress distribution, avoiding stress concentration, improving structural stability

### Modern Engineering Innovations

- **3D printing**: Lightweight structures using catenoid design
- **Aerospace**: Wing designs borrowing catenoid's optimization properties
- **Marine engineering**: Offshore platform support structures using catenoid design
- **Materials science**: Bubble walls in foam materials naturally form catenoids

### Future Prospects

- **Smart materials**: Materials that can adaptively form catenoids
- **Biomedical**: Artificial organ scaffolds using catenoid principles
- **Architectural revolution**: Larger span, lighter weight building structures

## Summary: Mathematical Beauty and Engineering Utility

- **Mathematics' power**: A simple condition ($H = 0$) produces such rich geometric structure
- **Nature's wisdom**: Soap film "knows" how to find the optimal shape
- **Engineering applications**: Understanding curvature becomes a powerful tool for solving real problems
- **Future bridge**: Perfect combination of mathematics and engineering will create a better world

## Thinking Questions

1. Why do soap films always form catenoids? What's the relationship with surface tension?
2. If we change constant $a$ in the catenoid's parametric equation, how does curvature change?
3. Besides catenoids, what other minimal surfaces in nature can you think of?
4. In architectural design, when would we choose catenoid structures?
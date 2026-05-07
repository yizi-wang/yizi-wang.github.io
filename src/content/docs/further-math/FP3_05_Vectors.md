---
title: "FP3 Chapter 5: Vectors"
---

## Prior Knowledge Check

Before we begin, let's review some key concepts from our previous study of vectors:

:::note[Exercise: Vector Operations]
(a) Find the scalar product of the vectors $3\mathbf{i} + 2\mathbf{j} - 3\mathbf{k}$ and $4\mathbf{i} - 5\mathbf{j} + \mathbf{k}$

(b) A straight line has vector equation $\mathbf{r} = (1, 4, -2) + \lambda(2, 3, 5)$. Write down the Cartesian equation of the line.

(c) The coordinates of points P, Q and R are (1, 0, -1), (2, 4, 1) and (3, 5, 6) respectively. Find angle QPR.
:::

:::note[Vector Operations Review]

| Operation | Definition |
|---|---|
| Scalar (dot) product | $\mathbf{a}\cdot\mathbf{b} = \|\mathbf{a}\|\|\mathbf{b}\|\cos\theta$ |
| Component form of scalar product | $\mathbf{a}\cdot\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3$ |
| Angle between vectors | $\cos\theta = \dfrac{\mathbf{a}\cdot\mathbf{b}}{\|\mathbf{a}\|\|\mathbf{b}\|}$ |
| Parametric equation of a line | $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$ |

:::

## 1. Vector Product

### 1.1 Geometric Motivation

The scalar (dot) product of two vectors provides a scalar quantity that relates to the projection of one vector onto another. However, we often need a way to represent quantities that have both magnitude and direction that are perpendicular to both input vectors. The vector product (or cross product) fulfills this need.

:::note[Geometric Intuition for Vector Product]
When two vectors $\mathbf{a}$ and $\mathbf{b}$ are not parallel, they define a plane. The vector product $\mathbf{a} \times \mathbf{b}$ gives us:

- A vector perpendicular to this plane (and thus perpendicular to both $\mathbf{a}$ and $\mathbf{b}$)
- Whose magnitude equals the area of the parallelogram formed by $\mathbf{a}$ and $\mathbf{b}$
- Whose direction is determined by the right-hand rule

The cross product has important applications in:

- Finding areas and volumes
- Defining torque and angular momentum in physics
- Computing normal vectors to planes
- Determining perpendicular directions in 3D space
:::

![Cross product geometric illustration](/images/tikz/fp3-cross-product-3d.svg)

**Definition (Vector Product):** The vector (or cross) product of two vectors $\mathbf{a}$ and $\mathbf{b}$ is defined as:

$$
\mathbf{a} \times \mathbf{b} = |\mathbf{a}||\mathbf{b}|\sin\theta\, \hat{\mathbf{n}}
$$

where $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$, and $\hat{\mathbf{n}}$ is the unit vector perpendicular to both $\mathbf{a}$ and $\mathbf{b}$, with direction determined by the right-hand rule.

:::note[Right-Hand Rule]
You can use the 'right-hand rule' to determine the direction of $\hat{\mathbf{n}}$:

- If $\mathbf{a}$ is your first finger and $\mathbf{b}$ is your second finger
- Then $\mathbf{a} \times \mathbf{b}$ acts in the direction of your thumb
:::

### 1.2 Key Properties

- $\mathbf{b} \times \mathbf{a} = -\mathbf{a} \times \mathbf{b}$ (not commutative)
- $\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c}$ (distributive)
- $\mathbf{a} \times \mathbf{b} = \mathbf{0}$ if and only if $\mathbf{a} = \mathbf{0}$, $\mathbf{b} = \mathbf{0}$, or $\mathbf{a}$ and $\mathbf{b}$ are parallel

:::tip[Why is $\mathbf{a} \times \mathbf{b} = -\mathbf{b} \times \mathbf{a}$?]
When we swap the order of vectors in a cross product, the plane they define remains the same, but the direction of rotation from the first vector to the second is reversed:

![Anticommutative property of cross product](/images/tikz/fp3-cross-product-anticommutative.svg)

This change in rotational direction causes the perpendicular vector to point in the opposite direction, resulting in the negative sign.
:::

### 1.3 Unit Vector Products

:::note[Products of Unit Vectors]
By the key properties of the cross product, we can obtain the following identities for unit vectors.

| | $\times\ \mathbf{i}$ | $\times\ \mathbf{j}$ | $\times\ \mathbf{k}$ |
|---|---|---|---|
| $\mathbf{i}\ \times$ | $\mathbf{0}$ | $\mathbf{k}$ | $-\mathbf{j}$ |
| $\mathbf{j}\ \times$ | $-\mathbf{k}$ | $\mathbf{0}$ | $\mathbf{i}$ |
| $\mathbf{k}\ \times$ | $\mathbf{j}$ | $-\mathbf{i}$ | $\mathbf{0}$ |

![Unit vector cross products](/images/tikz/fp3-unit-vector-cross-product.svg)
:::

### 1.4 Component Form and Its Derivation

The component form of the cross product can be derived from its geometric definition and the properties of unit vector products.

Starting with vectors $\mathbf{a} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$ and $\mathbf{b} = b_1\mathbf{i} + b_2\mathbf{j} + b_3\mathbf{k}$, and using the distributive property:

$$
\begin{aligned}
\mathbf{a} \times \mathbf{b} &= (a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}) \times (b_1\mathbf{i} + b_2\mathbf{j} + b_3\mathbf{k})\\
&= a_1b_1(\mathbf{i} \times \mathbf{i}) + a_1b_2(\mathbf{i} \times \mathbf{j}) + a_1b_3(\mathbf{i} \times \mathbf{k})\\
&\quad + a_2b_1(\mathbf{j} \times \mathbf{i}) + a_2b_2(\mathbf{j} \times \mathbf{j}) + a_2b_3(\mathbf{j} \times \mathbf{k})\\
&\quad + a_3b_1(\mathbf{k} \times \mathbf{i}) + a_3b_2(\mathbf{k} \times \mathbf{j}) + a_3b_3(\mathbf{k} \times \mathbf{k})
\end{aligned}
$$

Substituting the unit vector products:

$$
\begin{aligned}
\mathbf{a} \times \mathbf{b} &= a_1b_2\mathbf{k} - a_1b_3\mathbf{j} - a_2b_1\mathbf{k} + a_2b_3\mathbf{i} + a_3b_1\mathbf{j} - a_3b_2\mathbf{i}\\
&= (a_2b_3 - a_3b_2)\mathbf{i} + (a_3b_1 - a_1b_3)\mathbf{j} + (a_1b_2 - a_2b_1)\mathbf{k}
\end{aligned}
$$

This can be written in determinant form:

$$
\mathbf{a} \times \mathbf{b} = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3
\end{vmatrix}
$$

:::tip[Intuition for the Component Form]
The components of $\mathbf{a} \times \mathbf{b}$ represent the areas of projections of the parallelogram formed by $\mathbf{a}$ and $\mathbf{b}$ onto the three coordinate planes:

- $a_2b_3 - a_3b_2$: Area of projection onto the $yz$-plane (perpendicular to $\mathbf{i}$)
- $a_3b_1 - a_1b_3$: Area of projection onto the $xz$-plane (perpendicular to $\mathbf{j}$)
- $a_1b_2 - a_2b_1$: Area of projection onto the $xy$-plane (perpendicular to $\mathbf{k}$)

This gives us another way to understand why the cross product represents area.
:::

**Example (Vector Product in Component Form):** Given that $\mathbf{a} = 2\mathbf{i} - 3\mathbf{j}$ and $\mathbf{b} = 4\mathbf{i} + \mathbf{j} - \mathbf{k}$, find $\mathbf{a} \times \mathbf{b}$:

(a) directly

(b) by a method involving a determinant

(c) Verify that $\mathbf{a} \times \mathbf{b}$ is perpendicular to both $\mathbf{a}$ and $\mathbf{b}$

:::caution[Common Mistake]
A common error is forgetting that the vector product is not commutative. Always remember that:

$$
\mathbf{a} \times \mathbf{b} = -\mathbf{b} \times \mathbf{a}
$$

This means the order matters when calculating a vector product.
:::

## 2. Geometric Applications of Vector Product

### 2.1 Areas

**Theorem (Area of a Triangle):** If $\mathbf{a}$ and $\mathbf{b}$ are position vectors of points A and B relative to an origin O, then:

$$
\text{Area of triangle OAB} = \frac{1}{2}|\mathbf{a} \times \mathbf{b}|
$$

*Proof.* The area of triangle OAB is $\frac{1}{2}|\mathbf{a}||\mathbf{b}|\sin\theta$, where $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$. But this is exactly $\frac{1}{2}|\mathbf{a} \times \mathbf{b}|$. $\square$

![Triangle area illustration](/images/tikz/fp3-triangle-area.svg)

:::note[Key Formulas for Areas]
- Area of triangle OAB = $\frac{1}{2}|\mathbf{a} \times \mathbf{b}|$
- Area of triangle ABC = $\frac{1}{2}|(\mathbf{b} - \mathbf{a}) \times (\mathbf{c} - \mathbf{a})|$
- Area of parallelogram OABC = $|\mathbf{a} \times \mathbf{b}|$
- Area of parallelogram ABCD = $|(\mathbf{b} - \mathbf{a}) \times (\mathbf{d} - \mathbf{a})|$

![Area formulas for triangles and parallelograms](/images/tikz/fp3-area-formulas.svg)
:::

**Example (Area of a Triangle):** Find the area of triangle ABC, where the position vectors of A, B and C are $4\mathbf{i} - 2\mathbf{j} + \mathbf{k}$, $-12\mathbf{i} + 14\mathbf{j} + \mathbf{k}$ and $-4\mathbf{i} - 2\mathbf{j} + \mathbf{k}$ respectively.

## 3. Scalar Triple Product

### 3.1 Definition and Properties

**Definition (Scalar Triple Product):** The scalar triple product of three vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ is defined as:

$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})
$$

:::note[Geometric Interpretation]
The scalar triple product $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$ represents:

- The signed volume of the parallelepiped formed by the three vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$
- A positive value if $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ form a right-handed system
- A negative value if they form a left-handed system
- Zero if the three vectors are coplanar (or any vector is zero)
:::

:::note[Key Properties of Scalar Triple Product]
- Cyclic property: $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \mathbf{b} \cdot (\mathbf{c} \times \mathbf{a}) = \mathbf{c} \cdot (\mathbf{a} \times \mathbf{b})$
- If a vector is repeated, the scalar triple product is zero: $\mathbf{a} \cdot (\mathbf{a} \times \mathbf{p}) = 0$ for any vector $\mathbf{p}$
- In component form:

$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \begin{vmatrix}
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3 \\
c_1 & c_2 & c_3
\end{vmatrix}
$$
:::

**Example (Computing Scalar Triple Product):** Calculate the scalar triple product $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$ for the vectors:

$$
\mathbf{a} = 2\mathbf{i} - \mathbf{j} + 3\mathbf{k}, \quad \mathbf{b} = \mathbf{i} + 2\mathbf{j} - \mathbf{k}, \quad \mathbf{c} = 3\mathbf{i} - \mathbf{j} + 2\mathbf{k}
$$

**Solution:**

**Method 1:** First compute the cross product $\mathbf{b} \times \mathbf{c}$, then take the dot product with $\mathbf{a}$.

$$
\begin{aligned}
\mathbf{b} \times \mathbf{c} &= \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
1 & 2 & -1 \\
3 & -1 & 2
\end{vmatrix}\\
&= \mathbf{i}\begin{vmatrix} 2 & -1 \\ -1 & 2 \end{vmatrix} - \mathbf{j}\begin{vmatrix} 1 & -1 \\ 3 & 2 \end{vmatrix} + \mathbf{k}\begin{vmatrix} 1 & 2 \\ 3 & -1 \end{vmatrix}\\
&= \mathbf{i}(4 - 1) - \mathbf{j}(2 + 3) + \mathbf{k}(-1 - 6)\\
&= 3\mathbf{i} - 5\mathbf{j} - 7\mathbf{k}
\end{aligned}
$$

Now we compute the dot product:

$$
\begin{aligned}
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) &= (2\mathbf{i} - \mathbf{j} + 3\mathbf{k}) \cdot (3\mathbf{i} - 5\mathbf{j} - 7\mathbf{k})\\
&= 6 + 5 - 21 = -10
\end{aligned}
$$

**Method 2:** Use the determinant formula directly.

$$
\begin{aligned}
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) &= \begin{vmatrix}
2 & -1 & 3 \\
1 & 2 & -1 \\
3 & -1 & 2
\end{vmatrix}\\
&= 2(4 - 1) + 1(2 + 3) + 3(-1 - 6)\\
&= 6 + 5 - 21 = -10
\end{aligned}
$$

:::note[Applications of Scalar Triple Product]
1. **Volume calculation:** The absolute value gives the volume of a parallelepiped or a tetrahedron (one-sixth of the parallelepiped).
2. **Testing coplanarity:** Three vectors are coplanar (lie in the same plane) if and only if their scalar triple product is zero.
3. **Orientation:** The sign of the scalar triple product determines whether the three vectors form a right-handed or left-handed system.
:::

:::note[Exercise: Scalar Triple Product]
1. Calculate the scalar triple product $[\mathbf{a}, \mathbf{b}, \mathbf{c}]$ for: $\mathbf{a} = (3, 0, -2)$, $\mathbf{b} = (1, 2, 4)$, and $\mathbf{c} = (2, -1, 3)$

2. Determine whether the vectors $\mathbf{p} = (1, 2, 1)$, $\mathbf{q} = (3, 1, -1)$, and $\mathbf{r} = (5, 5, -1)$ are coplanar.

3. Show that $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \mathbf{b} \cdot (\mathbf{c} \times \mathbf{a})$ for any three vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$.
:::

### 3.2 Volumes

**Theorem (Volume of a Parallelepiped):** The volume of a parallelepiped with edges $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ from a common vertex is:

$$
\text{Volume} = |\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|
$$

![Parallelepiped volume illustration](/images/tikz/fp3-parallelepiped.svg)

**Theorem (Volume of a Tetrahedron):** The volume of a tetrahedron with vertices at the origin and at points with position vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ is:

$$
\text{Volume} = \frac{1}{6}|\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|
$$

![Tetrahedron volume illustration](/images/tikz/fp3-tetrahedron.svg)

**Example (Volume of a Tetrahedron):** Find the volume of the tetrahedron with vertices at A(1, 3, 0), B(3, 2, -1), C(2, -1, -1) and D(-1, 3, 6).

**Solution:**

$$
\begin{aligned}
\overrightarrow{AB} &= (2, -1, -1) \\
\overrightarrow{AC} &= (1, -4, -1) \\
\overrightarrow{AD} &= (-2, 0, 6)
\end{aligned}
$$

The volume is given by:

$$
\begin{aligned}
V &= \frac{1}{6}|\overrightarrow{AB} \cdot (\overrightarrow{AC} \times \overrightarrow{AD})| \\
&= \frac{1}{6}\left|\begin{vmatrix}
2 & -1 & -1 \\
1 & -4 & -1 \\
-2 & 0 & 6
\end{vmatrix}\right| \\
&= \frac{1}{6}|36| = 6
\end{aligned}
$$

:::note[Exercise: Finding Volume]
Find the volume of the tetrahedron with vertices at O(0, 0, 0), A(2, 2, 1), B(3, -1, 2), and C(1, 1, 3).
:::

## 4. Vector Equations of Lines and Planes

### 4.1 Vector Equation of a Line

A line in three-dimensional space can be represented in several equivalent forms. We'll start with the parametric form and then explore the vector equation.

**Definition (Parametric Form of a Line):** If a line passes through a point with coordinates $(x_1, y_1, z_1)$ and has direction vector $\mathbf{b} = (l, m, n)$, then any point $(x, y, z)$ on the line can be represented parametrically as:

$$
\begin{aligned}
x &= x_1 + \lambda l\\
y &= y_1 + \lambda m\\
z &= z_1 + \lambda n
\end{aligned}
$$

where $\lambda$ is a scalar parameter.

This can be equivalently written in the form:

$$
\frac{x-x_1}{l} = \frac{y-y_1}{m} = \frac{z-z_1}{n} = \lambda
$$

**Definition (Vector Equation of a Line):** For a line passing through point $A$ with position vector $\mathbf{a}$ and parallel to vector $\mathbf{b}$, the parametric vector form is:

$$
\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}
$$

where $\mathbf{r}$ is the position vector of any point on the line and $\lambda$ is a scalar parameter.

Note that this can also be expressed using the cross product:

$$
(\mathbf{r} - \mathbf{a}) \times \mathbf{b} = \mathbf{0}
$$

![Line equation illustration](/images/tikz/fp3-vector-line-equation.svg)

:::note[Geometric Interpretation of Line Equations]
- $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$: Any point on the line can be reached by starting at point $A$ and moving some distance in the direction of $\mathbf{b}$
- $(\mathbf{r} - \mathbf{a}) \times \mathbf{b} = \mathbf{0}$: The vector from any point $A$ on the line to any other point on the line is parallel to $\mathbf{b}$ (so their cross product is zero)
- $\frac{x-x_1}{l} = \frac{y-y_1}{m} = \frac{z-z_1}{n} = \lambda$: The components of the displacement from $(x_1,y_1,z_1)$ are proportional to the components of the direction vector $(l,m,n)$
:::

**Example (Finding the Equation of a Line):** Find the vector equation of the line through the points (1, 2, -1) and (3, -2, 2) in the form $(\mathbf{r} - \mathbf{a}) \times \mathbf{b} = \mathbf{0}$.

### 4.2 Vector Equation of a Plane

**Definition (Vector Equation of a Plane):** A plane can be represented in several forms:

- **Scalar product form:** $\mathbf{r} \cdot \mathbf{n} = p$ where $\mathbf{n}$ is normal to the plane and $p$ is a scalar.
- **Point-normal form:** $(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} = 0$ where $\mathbf{a}$ is the position vector of a point on the plane.
- **Parametric form:** $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$ where $\mathbf{b}$ and $\mathbf{c}$ are non-parallel vectors in the plane, and $\lambda$ and $\mu$ are scalar parameters.
- **Cartesian form:** $ax + by + cz + d = 0$

![Plane equation illustrations](/images/tikz/fp3-plane-equations.svg)

:::note[Geometric Interpretation of Plane Equations]
- $\mathbf{r} \cdot \mathbf{n} = p$: The projection of any position vector $\mathbf{r}$ onto the normal $\mathbf{n}$ equals $p$. The scalar $p$ is the length of the perpendicular from the origin to the plane (when $\mathbf{n}$ is a unit vector).
- $(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} = 0$: The vector from any point $A$ (with position vector $\mathbf{a}$) to any other point on the plane (with position vector $\mathbf{r}$) is perpendicular to $\mathbf{n}$ (i.e., lies in the plane).
- $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$: Any point on the plane can be reached by starting at point $A$ and moving along linear combinations of vectors $\mathbf{b}$ and $\mathbf{c}$ that lie in the plane.
:::

**Example (Converting Between Plane Representations):** Find different forms of the equation of a plane passing through the point $P(2,1,3)$ with normal vector $\mathbf{n} = (3,2,-1)$.

**Solution:**

**(a) Point-normal form:**

The point-normal form is:

$$
(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} = 0
$$

where $\mathbf{a} = 2\mathbf{i} + \mathbf{j} + 3\mathbf{k}$ and normal vector $\mathbf{n} = 3\mathbf{i} + 2\mathbf{j} - \mathbf{k}$.

**(b) Scalar product form:**

Expanding the point-normal form:

$$
\begin{aligned}
(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} &= 0\\
\mathbf{r} \cdot \mathbf{n} &= \mathbf{a} \cdot \mathbf{n}
\end{aligned}
$$

Computing the constant term:

$$
\mathbf{a} \cdot \mathbf{n} = (2\mathbf{i} + \mathbf{j} + 3\mathbf{k}) \cdot (3\mathbf{i} + 2\mathbf{j} - \mathbf{k}) = 6 + 2 - 3 = 5
$$

Therefore, the scalar product form is $\mathbf{r} \cdot \mathbf{n} = 5$ where $\mathbf{n} = 3\mathbf{i} + 2\mathbf{j} - \mathbf{k}$.

**(c) Cartesian form:**

Setting $\mathbf{r} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$, we expand the scalar product form:

$$
3x + 2y - z = 5
$$

**(d) Parametric form:**

To find this form, we need to find two non-parallel vectors that lie in the plane. Since these vectors must be perpendicular to the normal vector $\mathbf{n} = (3,2,-1)$, we can choose $\mathbf{b} = (-2,3,0)$ and $\mathbf{c} = (1,0,3)$.

Verification:

$$
\begin{aligned}
\mathbf{n} \cdot \mathbf{b} &= 3(-2) + 2(3) + (-1)(0) = 0\\
\mathbf{n} \cdot \mathbf{c} &= 3(1) + 2(0) + (-1)(3) = 0
\end{aligned}
$$

The parametric form is:

$$
\mathbf{r} = (2\mathbf{i} + \mathbf{j} + 3\mathbf{k}) + \lambda(-2\mathbf{i} + 3\mathbf{j}) + \mu(\mathbf{i} + 3\mathbf{k})
$$

:::note[Exercise: Converting Between Plane Representations]
1. Find the point-normal form, scalar product form, and Cartesian form of the plane passing through the points $A(1,0,2)$, $B(3,1,0)$, and $C(2,2,1)$.

2. A plane has Cartesian equation $2x - 3y + z = 6$. Find:
   (a) The normal vector to the plane
   (b) A point on the plane
   (c) The scalar product form of the plane
   (d) The point-normal form of the plane
   (e) A parametric representation of the plane

3. A plane has parametric representation $\mathbf{r} = (1,2,3) + \lambda(2,0,1) + \mu(0,1,-1)$. Find the normal vector to this plane and then express the plane in Cartesian form.
:::

## 5. Geometric Problems in 3D Space

### 5.1 Intersections

:::note[Methods for Finding Intersections]
1. **Line-Line Intersection:**
   - Set up parametric equations for both lines
   - Equate components to find parameter values
   - Check if parameter values give same point on both lines

2. **Line-Plane Intersection:**
   - Substitute line equation into plane equation
   - Solve for the parameter value
   - Substitute back to find intersection point

3. **Plane-Plane Intersection:**
   - Direction of intersection line is $\mathbf{n}_1 \times \mathbf{n}_2$
   - Find a point on both planes by solving simultaneous equations
   - Write line equation using point and direction
:::

![Plane-plane intersection](/images/tikz/fp3-plane-intersection.svg)

**Example (Line-Plane Intersection):** Find the point of intersection between the line $\mathbf{r} = (2, 1, 3) + t(1, 2, -1)$ and the plane $2x - y + 3z = 8$.

**Example (Plane-Plane Intersection):** Find the line of intersection between the planes $2x + y - z = 3$ and $x - y + 2z = 4$.

:::note[Exercise: Intersections]
1. Find the point of intersection between the line $\mathbf{r} = (1, 0, 2) + t(2, 1, 3)$ and the plane $3x - 2y + z = 5$.

2. Determine whether the lines $\mathbf{r} = (1, 2, 3) + s(2, 3, 1)$ and $\mathbf{r} = (2, 1, 4) + t(4, 6, 2)$ intersect. If they do, find the point of intersection.

3. Find the line of intersection between the planes $x + 2y + z = 4$ and $2x - y + 3z = 5$.
:::

### 5.2 Angles

:::note[Angle Formulas]
**1. Angle Between Two Vectors:**

$$
\cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}
$$

![Angle between two vectors](/images/tikz/fp3-angle-vector-vector.svg)

**2. Angle Between Line and Plane:**

$$
\sin\theta = \frac{|\mathbf{b} \cdot \mathbf{n}|}{|\mathbf{b}||\mathbf{n}|}
$$

where $\mathbf{b}$ is the direction of the line and $\mathbf{n}$ is normal to the plane.

![Angle between line and plane](/images/tikz/fp3-angle-line-plane.svg)

**3. Angle Between Two Planes:**

$$
\cos\theta = \frac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}
$$

where $\mathbf{n}_1$ and $\mathbf{n}_2$ are normals to the planes.

![Angle between two planes](/images/tikz/fp3-angle-plane-plane.svg)
:::

:::tip[Geometric Interpretation of Angles]
**1. Angle Between Line and Plane:**

For a line with direction vector $\mathbf{b}$ and a plane with normal vector $\mathbf{n}$, the angle $\theta$ between the line and the plane satisfies:

$$
\sin\theta = \frac{|\mathbf{b} \cdot \mathbf{n}|}{|\mathbf{b}||\mathbf{n}|}
$$

- The angle $\alpha$ between the direction vector $\mathbf{b}$ of the line and the normal vector $\mathbf{n}$ of the plane satisfies $\cos\alpha = \frac{|\mathbf{b} \cdot \mathbf{n}|}{|\mathbf{b}||\mathbf{n}|}$.
- From the diagram, we can see that $\theta$ and $\alpha$ are complementary angles ($\theta = \frac{\pi}{2} - \alpha$), so $\sin\theta = \cos\alpha$.

**2. Angle Between Two Planes:**

For planes with normal vectors $\mathbf{n}_1$ and $\mathbf{n}_2$, the angle is:

$$
\cos\theta = \frac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}
$$

- The acute angle $\theta$ between the normal vectors $\mathbf{n}_1$ and $\mathbf{n}_2$ satisfies $\cos\theta = \frac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}$.
- From the diagram, we can see that $\theta$ is indeed the acute angle between the two planes.
:::

**Example (Angle Between Line and Plane):** Find the acute angle between the line $\mathbf{r} = 2\mathbf{i} + \mathbf{j} - 5\mathbf{k} + \lambda(3\mathbf{i} + 4\mathbf{j} - 12\mathbf{k})$ and the plane with equation $\mathbf{r}\cdot(2\mathbf{i} - 2\mathbf{j} - \mathbf{k}) = 2$.

### 5.3 Distances

:::note[Distance Formulas]
**1. Distance from Point to Plane:**

$$
\text{Distance} = \frac{|(\mathbf{p}-\mathbf{r}) \cdot \mathbf{n}|}{|\mathbf{n}|} = \frac{|\mathbf{p} \cdot \mathbf{n} - a|}{|\mathbf{n}|}
$$

where plane equation is $\mathbf{r}\cdot\mathbf{n} = a$.

![Distance from point to plane](/images/tikz/fp3-distance-point-plane.svg)

**2. Distance from Point to Line:**

$$
\text{Distance} = |\mathbf{p} - \mathbf{a}| \sin\theta = \frac{|(\mathbf{p} - \mathbf{a}) \times \mathbf{b}|}{|\mathbf{b}|}
$$

where line equation is $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$.

![Distance from point to line](/images/tikz/fp3-distance-point-line.svg)

**3. Distance Between Skew Lines:**

$$
\text{Distance} = \frac{|(\mathbf{a} - \mathbf{c}) \cdot (\mathbf{b} \times \mathbf{d})|}{|\mathbf{b} \times \mathbf{d}|}
$$

where line equations are $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$ and $\mathbf{r} = \mathbf{c} + \mu\mathbf{d}$.

![Distance between skew lines](/images/tikz/fp3-distance-skew-lines.svg)
:::

:::tip[Geometric Interpretation of Distances]
**1. Point to Plane:**

The shortest distance from a point to a plane is along the perpendicular to the plane. The formula $\frac{|(\mathbf{p}-\mathbf{r}) \cdot \mathbf{n}|}{|\mathbf{n}|}$ calculates this perpendicular distance by:

- Picking a point on the plane $\mathbf{r}$
- Projecting the position vector $\mathbf{p}-\mathbf{r}$ onto the unit normal direction $\mathbf{n}$
- Computing the magnitude of the projection

**2. Point to Line:**

The formula $\frac{|(\mathbf{p} - \mathbf{a}) \times \mathbf{b}|}{|\mathbf{b}|}$ calculates the distance by:

- Picking a point on the line $\mathbf{a}$
- Computing the magnitude of the cross product of $\mathbf{p} - \mathbf{a}$ and the direction vector $\mathbf{b}$
- This can be visualized as the quantity $|\mathbf{p} - \mathbf{a}||\mathbf{b}|\sin\theta$ where $\theta$ is the angle between $\mathbf{p} - \mathbf{a}$ and $\mathbf{b}$
- Dividing by $|\mathbf{b}|$ gives the distance

**3. Skew Lines:**

For skew lines (lines in 3D space that neither intersect nor are parallel), the formula $\frac{|(\mathbf{a} - \mathbf{c}) \cdot (\mathbf{b} \times \mathbf{d})|}{|\mathbf{b} \times \mathbf{d}|}$ calculates the shortest distance between the two lines by:

- Picking a point on each line $\mathbf{a}$ and $\mathbf{c}$
- Computing the cross product of the direction vectors $\mathbf{b}$ and $\mathbf{d}$
- $\mathbf{b} \times \mathbf{d}$ gives a vector perpendicular to both direction vectors
- Projecting the displacement vector $\mathbf{a} - \mathbf{c}$ onto the perpendicular direction $\mathbf{b} \times \mathbf{d}$
- Computing the magnitude of the projection
:::

**Example (Distance Between Skew Lines):** Find the shortest distance between the two skew lines with equations $\mathbf{r} = \mathbf{i} + \lambda(\mathbf{j} + \mathbf{k})$ and $\mathbf{r} = -\mathbf{i} + 3\mathbf{j} - \mathbf{k} + \mu(2\mathbf{i} - \mathbf{j} - \mathbf{k})$, where $\lambda$ and $\mu$ are scalars.

**Example (Distance from Point to Plane):** Find the distance from the point $P(3, 1, -2)$ to the plane with equation $2x - y + 2z = 5$.

:::note[Exercise: Finding Distances]
1. Find the distance from the point $P(2, 3, 4)$ to the line with equation $\mathbf{r} = (1, 0, 1) + t(2, 1, 1)$.

2. Find the shortest distance between the skew lines $\mathbf{r} = (1, 2, 0) + s(1, 0, 1)$ and $\mathbf{r} = (0, 0, 3) + t(0, 1, 1)$.
:::

## 6. Summary and Key Formulas

:::note[Key Definitions and Formulas]
- **Vector Product:** $\mathbf{a} \times \mathbf{b} = |\mathbf{a}||\mathbf{b}|\sin\theta\, \hat{\mathbf{n}}$

- **Component Form:** $\mathbf{a} \times \mathbf{b} = (a_2b_3 - a_3b_2)\mathbf{i} + (a_3b_1 - a_1b_3)\mathbf{j} + (a_1b_2 - a_2b_1)\mathbf{k}$

- **Areas:**
  - Triangle OAB: $\frac{1}{2}|\mathbf{a} \times \mathbf{b}|$
  - Triangle ABC: $\frac{1}{2}|(\mathbf{b} - \mathbf{a}) \times (\mathbf{c} - \mathbf{a})|$
  - Parallelogram OABC: $|\mathbf{a} \times \mathbf{b}|$

- **Scalar Triple Product:** $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$

- **Volumes:**
  - Parallelepiped: $|\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$
  - Tetrahedron: $\frac{1}{6}|\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$

- **Line Equations:**
  - Vector form: $(\mathbf{r} - \mathbf{a}) \times \mathbf{b} = \mathbf{0}$
  - Parametric form: $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$
  - Cartesian form: $\frac{x-x_1}{a} = \frac{y-y_1}{b} = \frac{z-z_1}{c} = \lambda$

- **Plane Equations:**
  - Scalar product form: $\mathbf{r} \cdot \mathbf{n} = p$
  - Parametric form: $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$
  - Cartesian form: $ax + by + cz = d$

- **Angles:**
  - Between line and plane: $\sin\theta = \frac{|\mathbf{b} \cdot \mathbf{n}|}{|\mathbf{b}||\mathbf{n}|}$
  - Between two planes: $\cos\theta = \frac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}$

- **Distances:**
  - Point to plane: $\frac{|\mathbf{p} \cdot \mathbf{n} - d|}{|\mathbf{n}|}$
  - Point to line: $\frac{|(\mathbf{p} - \mathbf{a}) \times \mathbf{b}|}{|\mathbf{b}|}$
  - Between skew lines: $\frac{|(\mathbf{a} - \mathbf{c}) \cdot (\mathbf{b} \times \mathbf{d})|}{|\mathbf{b} \times \mathbf{d}|}$
:::

:::danger[Common Mistakes to Avoid]
1. Forgetting that the vector product is not commutative: $\mathbf{a} \times \mathbf{b} \neq \mathbf{b} \times \mathbf{a}$
2. Calculating $\mathbf{a} \times \mathbf{a}$ and expecting a non-zero result (it's always zero)
3. Using the wrong formula for the angle between a line and a plane (it's $\sin\theta$, not $\cos\theta$)
4. Not normalizing the normal vector when finding the perpendicular distance from the origin to a plane
5. Forgetting to take the absolute value in distance formulas
6. Confusing the parametric representation of a line ($\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$) with the vector equation ($(\mathbf{r} - \mathbf{a}) \times \mathbf{b} = \mathbf{0}$)
:::

## 7. Practice Problems

:::note[Exercise 1]
The points $A$, $B$ and $C$ have position vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ respectively, relative to a fixed origin $O$.

It is given that:
$\mathbf{a} = \mathbf{i} + \mathbf{j}$, $\quad \mathbf{b} = 3\mathbf{i} - \mathbf{j} + \mathbf{k}$, $\quad \mathbf{c} = 2\mathbf{i} + \mathbf{j} - \mathbf{k}$

Calculate:
(a) $\mathbf{b} \times \mathbf{c}$ *(3 marks)*
(b) $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$ *(2 marks)*
(c) the area of triangle $OBC$ *(2 marks)*
(d) the volume of the tetrahedron $OABC$ *(1 mark)*
:::

:::note[Exercise 2]
The position vectors of the points $A$, $B$ and $C$ relative to an origin $O$ are $\mathbf{i} - 2\mathbf{j} - 2\mathbf{k}$, $7\mathbf{i} - 3\mathbf{k}$ and $4\mathbf{i} + 4\mathbf{j}$ respectively.

Find:
(a) $\overrightarrow{AC} \times \overrightarrow{BC}$ *(4 marks)*
(b) the area of triangle $ABC$ *(2 marks)*
(c) an equation of the plane $ABC$ in the form $\mathbf{r} \cdot \mathbf{n} = p$ *(2 marks)*
:::

:::note[Exercise 3]
The plane $P$ has equation

$$
\mathbf{r} = \begin{pmatrix} 3 \\ 1 \\ 2 \end{pmatrix} + \lambda \begin{pmatrix} 0 \\ 2 \\ -1 \end{pmatrix} + \mu \begin{pmatrix} 3 \\ 2 \\ 2 \end{pmatrix}
$$

(a) Find a vector perpendicular to the plane $P$. *(2 marks)*

The line $l$ passes through the point $A(1, 3, 3)$ and meets $P$ at $(3, 1, 2)$.

The acute angle between the plane $P$ and the line $l$ is $\alpha$.

(b) Find $\alpha$ to the nearest degree. *(4 marks)*
(c) Find the perpendicular distance from $A$ to the plane $P$. *(4 marks)*
:::

:::note[Exercise 4]
The lines $l_1$ and $l_2$ have equations

$$
\mathbf{r} = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix} + \lambda \begin{pmatrix} -1 \\ 3 \\ 4 \end{pmatrix} \quad \text{and} \quad \mathbf{r} = \begin{pmatrix} a \\ -4 \\ 0 \end{pmatrix} + \mu \begin{pmatrix} 0 \\ 3 \\ 2 \end{pmatrix}
$$

If the lines $l_1$ and $l_2$ intersect, find:
(a) the value of $a$, *(4 marks)*
(b) an equation for the plane containing the lines $l_1$ and $l_2$, giving your answer in the form $ax + by + cz + d = 0$, where $a$, $b$, $c$ and $d$ are constants. *(4 marks)*

For other values of $a$, the lines $l_1$ and $l_2$ do not intersect and are skew lines.

Given that $a = 2$,

(c) find the shortest distance between the lines $l_1$ and $l_2$. *(3 marks)*
:::

:::note[Exercise 5]
The plane $\Pi$ has vector equation

$$
\mathbf{r} = 3\mathbf{i} + \mathbf{k} + \lambda(-4\mathbf{i} + \mathbf{j}) + \mu(6\mathbf{i} - 2\mathbf{j} + \mathbf{k})
$$

(a) Find an equation of $\Pi$ in the form $\mathbf{r}\cdot\mathbf{n} = p$, where $\mathbf{n}$ is a vector perpendicular to $\Pi$ and $p$ is a constant. *(5 marks)*

The point $P$ has coordinates $(6, 13, 5)$. The line $l$ passes through $P$ and is perpendicular to $\Pi$. The line $l$ intersects $\Pi$ at the point $N$.

(b) Show that the coordinates of $N$ are $(3, 1, -1)$. *(4 marks)*

The point $R$ lies on $\Pi$ and has coordinates $(1, 0, 2)$.

(c) Find the perpendicular distance from $N$ to the line $PR$. Give your answer to 3 significant figures. *(5 marks)*
:::

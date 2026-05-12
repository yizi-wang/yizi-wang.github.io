---
title: "FP3 Chapter 6: Further Matrix Algebra"
---

## FP3 Lecture Notes: Further Topics in Matrix Algebra

## 6.1 Introduction to 3×3 Matrices

In previous courses, we have studied 2×2 matrices and their properties. In this lecture, we'll extend our understanding to 3×3 matrices, which are crucial in solving systems of linear equations with three variables, 3D transformations, and various applications in physics and engineering.

:::note[Applications of 3×3 Matrices]
3×3 matrices have numerous applications across different fields:

- Solving systems of three linear equations with three variables
- Representing 3D transformations in computer graphics and animation
- Analyzing structural problems in engineering
- Quantum mechanics calculations in physics
- Economic models with three interrelated factors
- Network analysis in computer science
:::

## 6.2 Review of 2×2 Matrices

### 6.2.1 Systems of Linear Equations and Matrices

:::note[Matrix Representation of Linear Systems]
A system of two linear equations with two variables can be represented as:

$$
\begin{aligned}
a_{11}x_1 + a_{12}x_2 &= b_1 \\
a_{21}x_1 + a_{22}x_2 &= b_2
\end{aligned}
$$

This can be written in matrix form as $A\mathbf{x} = \mathbf{b}$, where $A$ is the coefficient matrix, $\mathbf{x}$ is the vector of variables, and $\mathbf{b}$ is the constant vector.
:::

### 6.2.2 Determinant of a 2×2 Matrix

**Definition.** The determinant of a 2×2 matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ is defined as:

$$
\det(A) = |A| = ad - bc
$$

**Theorem.** For a system of linear equations represented by the matrix equation $A\mathbf{x} = \mathbf{b}$:

- If $\det(A) \neq 0$, the system has exactly one solution.
- If $\det(A) = 0$ and the system is consistent, it has infinitely many solutions.
- If $\det(A) = 0$ and the system is inconsistent, it has no solution.

![Unique solution vs parallel lines](/images/tikz/fp3-matrix-system-2x2.svg)

### 6.2.3 Inverse of a 2×2 Matrix

:::note[Computing and Using the Inverse]
For a 2×2 matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the inverse (when $\det(A) \neq 0$) is given by:

$$
A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

If $\det(A) \neq 0$, then the solution to the system $A\mathbf{x} = \mathbf{b}$ is given by $\mathbf{x} = A^{-1}\mathbf{b}$.
:::

:::note[Example]
Solve the system:

$$
\begin{aligned}
3x + 2y &= 7 \\
x - y &= 2
\end{aligned}
$$

**Solution:** $A = \begin{pmatrix} 3 & 2 \\ 1 & -1 \end{pmatrix}$, $\mathbf{b} = \begin{pmatrix} 7 \\ 2 \end{pmatrix}$.

$\det(A) = -3 - 2 = -5 \neq 0$, so there is a unique solution.

$$
A^{-1} = \frac{1}{-5} \begin{pmatrix} -1 & -2 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} \frac{1}{5} & \frac{2}{5} \\ \frac{1}{5} & -\frac{3}{5} \end{pmatrix}
$$

$$
\mathbf{x} = A^{-1}\mathbf{b} = \begin{pmatrix} \frac{11}{5} \\ \frac{1}{5} \end{pmatrix}
$$

So $x = \frac{11}{5}$ and $y = \frac{1}{5}$.
:::

:::note[Key Properties of Inverses]
For any invertible matrix $A$:

- $A A^{-1} = A^{-1} A = I$
- $(A^{-1})^{-1} = A$
- $(AB)^{-1} = B^{-1}A^{-1}$ (note the reversed order)
- $(A^T)^{-1} = (A^{-1})^T$
:::

## 6.3 3×3 Matrices and Systems of Linear Equations

### 6.3.1 Representation of Systems with Three Variables

:::note[Matrix Representation of 3D Linear Systems]
A system of three linear equations with three variables can be written as $A\mathbf{x} = \mathbf{b}$, where $A$ is a 3×3 matrix.

Geometrically, each equation represents a plane in 3D space, and the solution(s) to the system represent the point(s) where all three planes intersect.
:::

![Three planes intersecting](/images/tikz/fp3-matrix-3planes.svg)

### 6.3.2 Determinant of a 3×3 Matrix

**Definition.** For a 3×3 matrix $A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$, the determinant can be calculated by expanding along the first row:

$$
\begin{aligned}
\det(A) &= a_{11}\begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{12}\begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} + a_{13}\begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix}
\end{aligned}
$$

:::note[Example]
Calculate the determinant of $A = \begin{pmatrix} 3 & 0 & 1 \\ 2 & 1 & -1 \\ 4 & 2 & 3 \end{pmatrix}$.

$$
\begin{aligned}
\det(A) &= 3\begin{vmatrix} 1 & -1 \\ 2 & 3 \end{vmatrix} - 0 + 1\begin{vmatrix} 2 & 1 \\ 4 & 2 \end{vmatrix} \\
&= 3(3 + 2) + 1(4 - 4) = 15
\end{aligned}
$$
:::

:::note[Optional: Further Methods for Computing 3×3 Determinants]
There are several methods to compute the determinant of a 3×3 matrix:

**Expansion by minors along any row or column:**

$$
\det(A) = a_{i1}M_{i1} - a_{i2}M_{i2} + a_{i3}M_{i3}
$$

where $M_{ij}$ is the minor of element $a_{ij}$ (the determinant of the 2×2 matrix obtained by deleting row $i$ and column $j$).
:::

**Theorem.** As with 2×2 matrices, the determinant of a 3×3 matrix determines the nature of solutions:

- If $\det(A) \neq 0$, the system has exactly one solution.
- If $\det(A) = 0$ and the system is consistent, it has infinitely many solutions.
- If $\det(A) = 0$ and the system is inconsistent, it has no solution.

:::tip[Connecting Algebra and Geometry]
When we view the columns of matrix $A$ as vectors in 3D space, these vectors define a parallelepiped. If $\det(A) \neq 0$, these vectors span the entire 3D space (they are linearly independent), meaning there is exactly one way to express $\mathbf{b}$ as a linear combination of these column vectors.

When $\det(A) = 0$, the parallelepiped has zero volume, meaning the column vectors are linearly dependent and lie in the same plane or line.
:::

### 6.3.3 Geometric Interpretation of the Determinant

:::note[Volume Interpretation of Determinant]
For a 3×3 matrix, the absolute value of the determinant gives the volume of the parallelepiped formed by its column vectors.

When $\det(A) = 0$, the parallelepiped has zero volume, meaning the three vectors are linearly dependent.
:::

![Parallelepiped](/images/tikz/fp3-determinant-volume.svg)

:::note[Exercise: Determinants and Systems]
(a) Calculate the determinant of $\begin{pmatrix} 2 & 1 & 3 \\ 0 & -1 & 2 \\ 1 & 0 & 4 \end{pmatrix}$

(b) Using the determinant, determine whether the system below has a unique solution, infinitely many solutions, or no solution:

$$
\begin{aligned}
2x + y + 3z &= 4 \\
-x + 2y - z &= 3 \\
x + 3y + 2z &= 1
\end{aligned}
$$

(c) Interpret geometrically what it means if the determinant of a 3×3 matrix is zero.
:::

## 6.4 Inverse of a 3×3 Matrix

### 6.4.1 Cofactor Method for Finding the Inverse

**Definition.** The cofactor $C_{ij}$ of an element $a_{ij}$ in a matrix is $(-1)^{i+j}$ times the determinant of the submatrix obtained by deleting the $i$-th row and $j$-th column.

:::note[Adjugate and Inverse Matrix]
The adjugate (or classical adjoint) of a matrix $A$ is the transpose of the cofactor matrix:

$$
\text{adj}(A) = 
\begin{pmatrix}
C_{11} & C_{21} & C_{31} \\
C_{12} & C_{22} & C_{32} \\
C_{13} & C_{23} & C_{33}
\end{pmatrix}
$$

For a 3×3 matrix $A$ with $\det(A) \neq 0$:

$$
A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A)
$$
:::

![Cofactor signs](/images/tikz/fp3-cofactor-minor.svg)

:::note[Example]
Find the inverse of $A = \begin{pmatrix} 1 & 2 & 1 \\ 3 & 2 & 1 \\ 2 & 1 & 2 \end{pmatrix}$.

**Solution:**

$$
\det(A) = 1(4-1) - 2(6-2) + 1(3-4) = 3 - 8 - 1 = -6
$$

Computing all nine cofactors:

$$
\begin{aligned}
C_{11} &= 3, \quad C_{12} = -4, \quad C_{13} = -1 \\
C_{21} &= -3, \quad C_{22} = 0, \quad C_{23} = 3 \\
C_{31} &= 0, \quad C_{32} = 2, \quad C_{33} = -4
\end{aligned}
$$

The adjugate is:

$$
\text{adj}(A) = 
\begin{pmatrix}
3 & -3 & 0 \\
-4 & 0 & 2 \\
-1 & 3 & -4
\end{pmatrix}
$$

Therefore:

$$
A^{-1} = \frac{1}{-6} \cdot 
\begin{pmatrix}
3 & -3 & 0 \\
-4 & 0 & 2 \\
-1 & 3 & -4
\end{pmatrix} = 
\begin{pmatrix}
-\frac{1}{2} & \frac{1}{2} & 0 \\[0.2cm]
\frac{2}{3} & 0 & -\frac{1}{3} \\[0.2cm]
\frac{1}{6} & -\frac{1}{2} & \frac{2}{3}
\end{pmatrix}
$$
:::

:::caution[When is a Matrix Not Invertible?]
A matrix is **not invertible** (singular) if and only if its determinant is zero. This happens when:

- One row or column is a multiple of another
- One row or column contains only zeros
- One row or column is a linear combination of others

Geometrically, a singular 3×3 matrix represents a transformation that collapses 3D space onto a plane or a line.
:::

### 6.4.2 Application to Solving Linear Equations

:::note[Solving Systems Using Matrix Inverse]
Once we have the inverse, we can solve the system using $\mathbf{x} = A^{-1}\mathbf{b}$.
:::

:::note[Example]
Solve the system:

$$
\begin{aligned}
x + 2y + z &= 5 \\
3x + 2y + z &= 7 \\
2x + y + 2z &= 8
\end{aligned}
$$

Using the inverse matrix from the previous example:

$$
\mathbf{x} = A^{-1}\mathbf{b} = \begin{pmatrix} 1 \\ \frac{2}{3} \\ \frac{8}{3} \end{pmatrix}
$$

Therefore, $x = 1$, $y = \frac{2}{3}$, and $z = \frac{8}{3}$.
:::

### 6.4.3 Optional: Gaussian Elimination

:::note[Beyond the Cofactor Method]
While the cofactor method provides a clear formula, it is computationally intensive for larger matrices. Gaussian elimination (row reduction) is more efficient for practical applications.

To find the inverse of a matrix $A$ using Gaussian elimination:

1. Create an augmented matrix $[A|I]$ where $I$ is the identity matrix
2. Apply elementary row operations to transform the left side into the identity matrix
3. The resulting right side will be $A^{-1}$
:::

:::note[Example: Gaussian Elimination]
Find the inverse of $A = \begin{pmatrix} 1 & 2 & 1 \\ 3 & 2 & 1 \\ 2 & 1 & 2 \end{pmatrix}$ using Gaussian elimination.

Starting with the augmented matrix $[A|I]$:

$$
\left[\begin{array}{ccc|ccc}
1 & 2 & 1 & 1 & 0 & 0 \\
3 & 2 & 1 & 0 & 1 & 0 \\
2 & 1 & 2 & 0 & 0 & 1
\end{array}\right]
$$

After applying row operations:

$$
\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & -\frac{1}{2} & \frac{1}{2} & 0 \\
0 & 1 & 0 & \frac{2}{3} & 0 & -\frac{1}{3} \\
0 & 0 & 1 & \frac{1}{6} & -\frac{1}{2} & \frac{2}{3}
\end{array}\right]
$$

This matches our result from the cofactor method.
:::

:::note[Exercise: Finding Inverses]
(a) Use the cofactor method to find the inverse of $\begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 2 & 2 \end{pmatrix}$

(b) Write the system as a matrix equation and solve using the inverse:

$$
\begin{aligned}
2x + y - z &= 5 \\
x + 2y + z &= 8 \\
x + y + 3z &= 10
\end{aligned}
$$

(c) Explain why the matrix $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix}$ does not have an inverse.
:::

## 6.5 Transpose and Orthogonal Matrices

### 6.5.1 Matrix Transpose

**Definition.** The transpose of a matrix $A$, denoted by $A^T$, is obtained by reflecting the elements of $A$ across its main diagonal.

:::note[Properties of Transpose]
- $(A^T)^T = A$
- $(A + B)^T = A^T + B^T$
- $(AB)^T = B^T A^T$ (Note the reversed order)
- $\det(A^T) = \det(A)$
- If $A$ is invertible, then $(A^T)^{-1} = (A^{-1})^T$
:::

### 6.5.2 Orthogonal Matrices

**Definition.** A square matrix $Q$ is orthogonal if its transpose equals its inverse:

$$
Q^T = Q^{-1} \quad \text{or equivalently} \quad Q^T Q = Q Q^T = I
$$

:::note[Criteria for Orthogonal Matrices]
A matrix $Q$ is orthogonal if and only if its row vectors (or column vectors) form an orthonormal set:

1. Each row vector has norm (length) equal to 1
2. Any two different row vectors are orthogonal to each other

For a 3×3 matrix $Q$ with rows $\mathbf{r}_1$, $\mathbf{r}_2$, and $\mathbf{r}_3$:

$$
\begin{aligned}
\mathbf{r}_1 \cdot \mathbf{r}_1 = \mathbf{r}_2 \cdot \mathbf{r}_2 = \mathbf{r}_3 \cdot \mathbf{r}_3 &= 1 \\
\mathbf{r}_1 \cdot \mathbf{r}_2 = \mathbf{r}_1 \cdot \mathbf{r}_3 = \mathbf{r}_2 \cdot \mathbf{r}_3 &= 0
\end{aligned}
$$
:::

![Orthogonal vectors](/images/tikz/fp3-orthogonal-vectors.svg)

**Theorem.** For any orthogonal matrix $Q$:

- $\det(Q) = \pm 1$
- If $\det(Q) = 1$, $Q$ represents a rotation
- If $\det(Q) = -1$, $Q$ represents a reflection followed by a rotation

:::tip[Finding the Inverse of an Orthogonal Matrix]
If $Q$ is orthogonal, then $Q^{-1} = Q^T$

This means to find the inverse of an orthogonal matrix, you simply take its transpose! This is a significant computational advantage.
:::

:::note[Example]
Determine if the following matrix is orthogonal, and if so, find its inverse:

$$
Q = \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ -\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

**Solution:** Checking that all rows are unit vectors and orthogonal to each other confirms $Q$ is orthogonal.

$$
Q^{-1} = Q^T = \begin{pmatrix} \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 0 \\ \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$
:::

:::note[Important Examples of Orthogonal Matrices]
**1. Rotation matrices** in 3D space are orthogonal matrices with determinant 1:

Rotation around the x-axis by angle $\theta$:

$$
R_x(\theta) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & -\sin\theta \\ 0 & \sin\theta & \cos\theta \end{pmatrix}
$$

Rotation around the y-axis by angle $\theta$:

$$
R_y(\theta) = \begin{pmatrix} \cos\theta & 0 & \sin\theta \\ 0 & 1 & 0 \\ -\sin\theta & 0 & \cos\theta \end{pmatrix}
$$

Rotation around the z-axis by angle $\theta$:

$$
R_z(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

**2. Reflection matrices** are orthogonal matrices with determinant -1. For example, reflection across the xy-plane:

$$
R_{xy} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}
$$
:::

:::note[Exercise: Matrix Transpose and Orthogonal Matrices]
(a) Find the transpose of $\begin{pmatrix} 3 & -1 & 4 \\ 2 & 0 & 5 \\ 1 & 7 & -2 \end{pmatrix}$.

(b) Verify whether $\begin{pmatrix} \frac{3}{5} & \frac{4}{5} & 0 \\ -\frac{4}{5} & \frac{3}{5} & 0 \\ 0 & 0 & 1 \end{pmatrix}$ is orthogonal.

(c) If a 3×3 matrix $Q$ is orthogonal with $\det(Q) = -1$, what type of transformation does it represent?
:::

## 6.6 Matrix Transformations of Lines and Planes

### 6.6.1 Transforming Lines

:::note[Transforming a Line]
When a line $\mathbf{r}(t) = \mathbf{r}_0 + t\mathbf{v}$ is transformed by a matrix $A$, the resulting line has the parametric form:

$$
T(\mathbf{r}(t)) = A\mathbf{r}_0 + tA\mathbf{v}
$$

This means:
- The point $\mathbf{r}_0$ transforms to $A\mathbf{r}_0$
- The direction vector $\mathbf{v}$ transforms to $A\mathbf{v}$

Note: If $A$ is singular and $A\mathbf{v} = \mathbf{0}$, the line collapses to a single point $A\mathbf{r}_0$.
:::

:::note[Example]
The line $L$ has parametric equations $x = 1 + 2t$, $y = 3 - t$, $z = 2t$. Find the equation of the transformed line after applying the matrix $A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}$.

**Solution:**

$$
\mathbf{r}_0' = A\mathbf{r}_0 = \begin{pmatrix} 2 \\ 9 \\ 1 \end{pmatrix}, \quad
\mathbf{v}' = A\mathbf{v} = \begin{pmatrix} 4 \\ -3 \\ 4 \end{pmatrix}
$$

The transformed line is:

$$
\mathbf{r}'(t) = \begin{pmatrix} 2 \\ 9 \\ 1 \end{pmatrix} + t\begin{pmatrix} 4 \\ -3 \\ 4 \end{pmatrix}
$$

In symmetric form: $\frac{x-2}{4} = \frac{y-9}{-3} = \frac{z-1}{4}$
:::

### 6.6.2 Transforming Planes

:::note[Transforming a Plane]
When a plane $\Pi_1$ is transformed by a non-singular matrix $\mathbf{M}$ to a plane $\Pi_2$, there are two approaches:

**1. Using the parametric form:**

$$
T(\mathbf{r}(s,t)) = A\mathbf{r}_0 + sA\mathbf{v}_1 + tA\mathbf{v}_2
$$

**2. Using the inverse transformation method:**

If $(x,y,z)$ on $\Pi_1$ maps to $(u,v,w)$ on $\Pi_2$ by $\mathbf{M}$, find $\mathbf{M}^{-1}$, express $(x,y,z)$ in terms of $(u,v,w)$, and substitute into the equation of $\Pi_1$.
:::

:::note[Example]
Consider the plane $3x - 7y + 2z = -3$ and the transformation $\mathbf{M} = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3 \end{pmatrix}$.

$$
\mathbf{M}^{-1} = \begin{pmatrix} \frac{1}{2} & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & \frac{1}{3} \end{pmatrix}
$$

So $x = \frac{1}{2}u$, $y = v$, $z = \frac{1}{3}w$. Substituting:

$$
\frac{3}{2}u - 7v + \frac{2}{3}w = -3 \implies 9u - 42v + 4w = -18
$$
:::

:::note[Exercise: Matrix Transformation of Planes]
Let $\mathbf{M} = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 4 \\ 3 & -2 & -3 \end{pmatrix}$.

(a) Determine $\mathbf{M}^{-1}$.

The transformation represented by $\mathbf{M}$ maps the plane $\Pi_1$ to the plane $\Pi_2$. The point $(x, y, z)$ on $\Pi_1$ maps to the point $(u, v, w)$ on $\Pi_2$.

(b) Determine $x$, $y$ and $z$ in terms of $u$, $v$ and $w$.

The plane $\Pi_1$ has equation $3x - 7y + 2z = -3$.

(c) Find a Cartesian equation for $\Pi_2$ in the form $au + bv + cw = d$ where $a$, $b$, $c$ and $d$ are integers.
:::

## 6.7 Eigenvalues and Eigenvectors

### 6.7.1 Introduction: Why Eigenvalues Matter

:::note[A Motivating Question: Computing Powers of Matrices]
How would you compute $A^{100}$ for a matrix $A$?

**Diagonalization provides the answer.** If $A = PDP^{-1}$ where $D$ is a diagonal matrix, then:

$$
A^n = PD^nP^{-1}
$$

And since $D$ is diagonal with eigenvalues $\lambda_1, \lambda_2, \ldots, \lambda_n$ on its diagonal:

$$
D^n = \begin{pmatrix} \lambda_1^n & 0 & \cdots & 0 \\ 0 & \lambda_2^n & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n^n \end{pmatrix}
$$

This means we can compute $A^{100}$ or $A^{1000}$ with just a few matrix multiplications!
:::

:::note[Real-World Applications of Eigenvalues and Eigenvectors]
- **Dynamical Systems:** Predicting the long-term behavior of systems relies on analyzing eigenvalues to determine stability and growth rates.
- **Facial Recognition and AI:** Principal Component Analysis (PCA) uses eigenvalues to identify the most important features in facial images.
- **Google's PageRank Algorithm:** The ranking of websites is determined by finding the eigenvector of a massive matrix representing web page links.
:::

### 6.7.2 Definition and Basic Properties

**Definition.** For a square matrix $A$, a non-zero vector $\mathbf{v}$ is an **eigenvector** of $A$ if there exists a scalar $\lambda$ (the **eigenvalue**) such that:

$$
A\mathbf{v} = \lambda\mathbf{v}
$$

:::note[Geometric Interpretation]
When a matrix $A$ transforms vectors in space, most vectors change direction. Eigenvectors are the special vectors that maintain their direction (although they may be stretched or compressed).

- If $\lambda > 0$, the eigenvector is stretched/compressed in its original direction.
- If $\lambda < 0$, the eigenvector is stretched/compressed in the opposite direction.
- If $\lambda = 0$, the eigenvector is collapsed to the origin.
:::

### 6.7.3 Finding Eigenvalues and Eigenvectors

:::note[Step-by-Step Procedure]
1. Start with the equation $A\mathbf{v} = \lambda\mathbf{v}$
2. Rearrange to $(A - \lambda I)\mathbf{v} = \mathbf{0}$
3. For non-zero solutions, we need $\det(A - \lambda I) = 0$
4. Solve this **characteristic equation** to find the eigenvalues $\lambda$
5. For each eigenvalue, find the corresponding eigenvectors by solving $(A - \lambda I)\mathbf{v} = \mathbf{0}$
:::

**Eigenvalues and Eigenvectors of 2×2 Matrices**

:::note[Example]
Find the eigenvalues and eigenvectors of $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$.

**Step 1:** Characteristic equation:

$$
\det(A - \lambda I) = (3-\lambda)^2 - 1 = \lambda^2 - 6\lambda + 8 = (\lambda-4)(\lambda-2) = 0
$$

Eigenvalues: $\lambda_1 = 4$ and $\lambda_2 = 2$.

**Step 2:** For $\lambda_1 = 4$: $(A - 4I)\mathbf{v} = \mathbf{0}$ gives $v_1 = v_2$, so $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**Step 3:** For $\lambda_2 = 2$: $(A - 2I)\mathbf{v} = \mathbf{0}$ gives $v_1 = -v_2$, so $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.
:::

![Eigenvectors visualization](/images/tikz/fp3-eigenvectors-visual.svg)

**Eigenvalues and Eigenvectors of 3×3 Matrices**

:::note[Example]
Find the eigenvalues and one eigenvector for each eigenvalue of $A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & 4 \\ 0 & 4 & 9 \end{pmatrix}$.

**Step 1:** Characteristic polynomial:

$$
\det(A - \lambda I) = (2-\lambda)[(3-\lambda)(9-\lambda) - 16] = (2-\lambda)(\lambda^2 - 12\lambda + 11)
$$

**Step 2:** Eigenvalues: $\lambda_1 = 2$, $\lambda_2 = 11$, $\lambda_3 = 1$.

**Step 3:** Eigenvectors:

$$
\begin{aligned}
\lambda_1 = 2 &: \mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \\
\lambda_2 = 11 &: \mathbf{v}_2 = \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix} \\
\lambda_3 = 1 &: \mathbf{v}_3 = \begin{pmatrix} 0 \\ 2 \\ -1 \end{pmatrix}
\end{aligned}
$$
:::

:::note[Key Properties]
1. The determinant of a matrix equals the product of its eigenvalues: $\det(A) = \lambda_1 \lambda_2 \cdots \lambda_n$.
2. The trace of a matrix equals the sum of its eigenvalues: $\text{tr}(A) = \lambda_1 + \lambda_2 + \cdots + \lambda_n$.
3. The trace is the sum of the elements on the main diagonal: $\text{tr}(A) = a_{11} + a_{22} + \cdots + a_{nn}$.
:::

### 6.7.4 Diagonalization of Matrices

:::note[Diagonalization Procedure]
A matrix $A$ is **diagonalizable** if it can be written as $A = PDP^{-1}$, where:

- $D$ is a diagonal matrix containing the eigenvalues of $A$
- $P$ is a matrix whose columns are the corresponding eigenvectors

To construct the diagonalization:

1. Find all eigenvalues of $A$
2. For each eigenvalue, find a corresponding eigenvector
3. Form matrix $P$ with eigenvectors as columns
4. Form diagonal matrix $D$ with eigenvalues on the diagonal
5. Verify that $P^{-1}AP = D$
:::

:::note[Normalization of Eigenvectors]
To normalize an eigenvector $\mathbf{v}$:

$$
\mathbf{v}_{\text{normalized}} = \frac{\mathbf{v}}{||\mathbf{v}||}
$$

For symmetric matrices, if all eigenvectors are normalized, then $P^{-1} = P^T$, giving us $P^TAP = D$.
:::

:::note[Example: Diagonalization of a 2×2 Matrix]
Diagonalize $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$.

From the previous example, eigenvalues are $\lambda_1 = 4$ and $\lambda_2 = 2$, with eigenvectors $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

Normalizing:

$$
P = \begin{pmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{pmatrix}, \quad
D = \begin{pmatrix} 4 & 0 \\ 0 & 2 \end{pmatrix}
$$

Verification: $P^TAP = D$. ✓
:::

:::note[Example: Diagonalization of a 3×3 Matrix]
Given that $A = \begin{pmatrix} 5 & 3 & 3 \\ 3 & 1 & 1 \\ 3 & 1 & 1 \end{pmatrix}$ has eigenvalues $0$, $-1$, and $8$, with eigenvectors $\begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix}$ (for $\lambda = -1$) and $\begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}$ (for $\lambda = 8$).

**Task 1:** Find a normalized eigenvector for $\lambda = 0$.

Solving $A\mathbf{v} = \mathbf{0}$: $\mathbf{v}_3 = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$, normalized: $\frac{1}{\sqrt{2}}\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$.

**Task 2:** Form $P$ and $D$:

$$
P = \begin{pmatrix} 0 & -1 & 2 \\ 1 & 1 & 1 \\ -1 & 1 & 1 \end{pmatrix}, \quad
D = \begin{pmatrix} 0 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 8 \end{pmatrix}
$$
:::

:::tip[Special Case: Symmetric Matrices]
When $A$ is a symmetric matrix ($A = A^T$):

- All eigenvalues are real numbers
- Eigenvectors corresponding to distinct eigenvalues are orthogonal
- We can always find an orthonormal basis of eigenvectors
- The matrix $P$ can be chosen so that $P^T = P^{-1}$, giving us $P^TAP = D$
:::

:::note[Example: Symmetric Matrix Diagonalization]
Given that $9$ is an eigenvalue of $A = \begin{pmatrix} 7 & 0 & -2 \\ 0 & 5 & -2 \\ -2 & -2 & 6 \end{pmatrix}$.

**(a) Find the other two eigenvalues:**

$$
\det(A - \lambda I) = -(\lambda - 9)(\lambda - 6)(\lambda - 3)
$$

Eigenvalues: $9$, $6$, and $3$.

**(b) Find eigenvectors:**

$$
\begin{aligned}
\lambda_1 = 9 &: \mathbf{v}_1 = \begin{pmatrix} -2 \\ -1 \\ 2 \end{pmatrix}, \quad \mathbf{u}_1 = \frac{1}{3}\begin{pmatrix} -2 \\ -1 \\ 2 \end{pmatrix} \\[0.3cm]
\lambda_2 = 6 &: \mathbf{v}_2 = \begin{pmatrix} 2 \\ -2 \\ 1 \end{pmatrix}, \quad \mathbf{u}_2 = \frac{1}{3}\begin{pmatrix} 2 \\ -2 \\ 1 \end{pmatrix} \\[0.3cm]
\lambda_3 = 3 &: \mathbf{v}_3 = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}, \quad \mathbf{u}_3 = \frac{1}{3}\begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}
\end{aligned}
$$

**(c) Form $P$ and $D$:**

$$
P = \begin{pmatrix} -\frac{2}{3} & \frac{2}{3} & \frac{1}{3} \\ -\frac{1}{3} & -\frac{2}{3} & \frac{2}{3} \\ \frac{2}{3} & \frac{1}{3} & \frac{2}{3} \end{pmatrix}, \quad
D = \begin{pmatrix} 9 & 0 & 0 \\ 0 & 6 & 0 \\ 0 & 0 & 3 \end{pmatrix}
$$

Verification: $P^TAP = D$. ✓
:::

:::note[Exercise: Eigenvalues and Eigenvectors]
(a) The matrix $A = \begin{pmatrix} 2 & -1 & 3 \\ 0 & 2 & 4 \\ 0 & 2 & 0 \end{pmatrix}$.

(i) Show that 4 is an eigenvalue of $A$ and find the other two eigenvalues.

(ii) Find an eigenvector corresponding to the eigenvalue 4.

(b) Consider $\mathbf{A} = \begin{pmatrix} 3 & 4 & -4 \\ 4 & 5 & 0 \\ -4 & 0 & 1 \end{pmatrix}$.

(i) Show that 3 is an eigenvalue of $\mathbf{A}$ and find the other two eigenvalues.

(ii) Find an eigenvector corresponding to the eigenvalue 3.

(iii) Given that $\begin{pmatrix} 2 \\ 2 \\ -1 \end{pmatrix}$ and $\begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$ are eigenvectors corresponding to the other two eigenvalues, find a matrix $\mathbf{P}$ such that $\mathbf{P}^T\mathbf{A}\mathbf{P}$ is a diagonal matrix.
:::

## 6.8 Practice Problems

:::note[Exercise 1]
Find the determinant of the following matrices:

$$
A = \begin{pmatrix} 3 & 1 & 2 \\ 0 & -1 & 4 \\ 2 & 2 & 1 \end{pmatrix}, \quad
B = \begin{pmatrix} 2 & 0 & 1 \\ 4 & 3 & 2 \\ 2 & 1 & 1 \end{pmatrix}, \quad
C = \begin{pmatrix} 3 & 6 & -3 \\ 1 & 2 & -1 \\ 2 & 4 & -2 \end{pmatrix}
$$

For each matrix, explain what the determinant tells you about the corresponding systems of linear equations.
:::

:::note[Exercise 2]
The matrix $P = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 1 & -1 \\ 3 & 1 & 0 \end{pmatrix}$.

(a) Find the determinant of $P$.

(b) Find the inverse of $P$ using the cofactor method.

(c) Hence solve the system:

$$
\begin{aligned}
x + 2y + z &= 6 \\
2x + y - z &= 1 \\
3x + y &= 4
\end{aligned}
$$
:::

:::note[Exercise 3]
For the matrix $A = \begin{pmatrix} 3 & 1 & 1 \\ 2 & k & 0 \\ 4 & -1 & 3 \end{pmatrix}$, find:

(a) The value of $k$ for which $\det(A) = 0$.

(b) For this value of $k$, determine whether $A\mathbf{x} = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix}$ has no solution, a unique solution, or infinitely many solutions.

(c) For $k = 2$, find $\det(A)$ and $A^{-1}$.
:::

:::note[Exercise 4]
The 3D transformation matrix $T = \begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}$ represents a rotation around the $z$-axis.

(a) Show that $\det(T) = 1$ for any value of $\theta$.

(b) Find the inverse of $T$ and verify that $T^{-1}$ represents a rotation by $-\theta$.

(c) If the point $P(2,1,3)$ is rotated by $\frac{\pi}{4}$ (45°) around the $z$-axis, find the coordinates of the resulting point $P'$.
:::

:::note[Exercise 5]
Let $\mathbf{T} = \begin{pmatrix} 2 & 3 & 7 \\ 3 & 2 & 6 \\ a & 4 & b \end{pmatrix}$ and $\mathbf{U} = \begin{pmatrix} 6 & -1 & -4 \\ 15 & c & -9 \\ -8 & a & 5 \end{pmatrix}$ where $a$, $b$ and $c$ are constants.

Given that $\mathbf{T}\mathbf{U} = \mathbf{I}$:

(a) Determine the value of $a$, the value of $b$ and the value of $c$.

The transformation represented by the matrix $\mathbf{T}$ transforms the line $l_1$ to the line $l_2$.

Given that $l_2$ has equation $\frac{x-1}{3} = \frac{y}{-4} = z+2$:

(b) Determine a Cartesian equation for $l_1$.
:::

:::note[Exercise 6]
Let $\mathbf{M} = \begin{pmatrix} 0 & -1 & 3 \\ -1 & 4 & -1 \\ 3 & -1 & 0 \end{pmatrix}$.

Given that $\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$ is an eigenvector of $\mathbf{M}$:

(a) Determine its corresponding eigenvalue.

Given that $-3$ is an eigenvalue of $\mathbf{M}$:

(b) Determine a corresponding eigenvector.

Hence, given that $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ is also an eigenvector of $\mathbf{M}$:

(c) Determine a diagonal matrix $\mathbf{D}$ and an orthogonal matrix $\mathbf{P}$ such that $\mathbf{D} = \mathbf{P}^T\mathbf{M}\mathbf{P}$.
:::

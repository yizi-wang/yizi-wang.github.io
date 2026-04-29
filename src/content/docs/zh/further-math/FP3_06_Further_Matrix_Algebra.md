---
title: "FP3 第六章：进阶矩阵代数"
---

# FP3 讲义：进阶矩阵代数

## 6.1 3×3 矩阵简介

在之前的课程中，我们学习了 2×2 矩阵及其性质。本讲将把理解扩展到 3×3 矩阵，这对于求解三元线性方程组、三维变换以及物理和工程中的各种应用至关重要。

:::note[3×3 矩阵的应用]
3×3 矩阵在不同领域有广泛的应用：

- 求解三元线性方程组
- 在计算机图形学和动画中表示三维变换
- 分析工程中的结构问题
- 物理学中的量子力学计算
- 包含三个相互关联因素的经济模型
- 计算机科学中的网络分析
:::

## 6.2 2×2 矩阵回顾

### 6.2.1 线性方程组与矩阵

:::note[线性方程组的矩阵表示]
二元线性方程组可以表示为 $A\mathbf{x} = \mathbf{b}$，其中 $A$ 是系数矩阵，$\mathbf{x}$ 是变量向量，$\mathbf{b}$ 是常数向量。
:::

### 6.2.2 2×2 矩阵的行列式

**定义。** 2×2 矩阵 $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ 的行列式定义为：

$$
\det(A) = |A| = ad - bc
$$

**定理。** 对于矩阵方程 $A\mathbf{x} = \mathbf{b}$ 表示的线性方程组：

- 若 $\det(A) \neq 0$，方程组有唯一解
- 若 $\det(A) = 0$ 且方程组相容，则有无穷多解
- 若 $\det(A) = 0$ 且方程组不相容，则无解

![唯一解与平行线](/images/fp3_matrix_unique_solution.svg)

### 6.2.3 2×2 矩阵的逆

:::note[计算和使用逆矩阵]
对于 2×2 矩阵 $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$，当 $\det(A) \neq 0$ 时，逆矩阵为：

$$
A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

若 $\det(A) \neq 0$，则方程组的解为 $\mathbf{x} = A^{-1}\mathbf{b}$。
:::

:::note[逆矩阵的性质]
对于可逆矩阵 $A$：

- $A A^{-1} = A^{-1} A = I$
- $(A^{-1})^{-1} = A$
- $(AB)^{-1} = B^{-1}A^{-1}$（注意顺序相反）
- $(A^T)^{-1} = (A^{-1})^T$
:::

## 6.3 3×3 矩阵与线性方程组

### 6.3.1 三元方程组的表示

:::note[三维线性方程组的矩阵表示]
三元线性方程组可以写为 $A\mathbf{x} = \mathbf{b}$，其中 $A$ 是 3×3 矩阵。

从几何上看，每个方程代表三维空间中的一个平面，方程组的解代表三个平面的交点。
:::

![三个平面相交](/images/fp3_matrix_planes.svg)

### 6.3.2 3×3 矩阵的行列式

**定义。** 对于 3×3 矩阵，行列式可以沿第一行展开计算：

$$
\begin{aligned}
\det(A) &= a_{11}\begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{12}\begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} + a_{13}\begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix}
\end{aligned}
$$

:::tip[代数与几何的联系]
将矩阵 $A$ 的列视为三维空间中的向量，这些向量定义了一个平行六面体。若 $\det(A) \neq 0$，这些向量张成整个三维空间（线性无关），意味着恰好有一种方式将 $\mathbf{b}$ 表示为这些列向量的线性组合。

当 $\det(A) = 0$ 时，平行六面体体积为零，意味着列向量线性相关。
:::

### 6.3.3 行列式的几何解释

:::note[行列式的体积解释]
对于 3×3 矩阵，行列式的绝对值给出其列向量形成的平行六面体的体积。

当 $\det(A) = 0$ 时，平行六面体体积为零，意味着三个向量线性相关。
:::

![平行六面体](/images/fp3_matrix_parallelepiped.svg)

:::note[练习：行列式与方程组]
(a) 计算 $\begin{pmatrix} 2 & 1 & 3 \\ 0 & -1 & 2 \\ 1 & 0 & 4 \end{pmatrix}$ 的行列式

(b) 用行列式判断以下方程组有唯一解、无穷多解还是无解：

$$
\begin{aligned}
2x + y + 3z &= 4 \\
-x + 2y - z &= 3 \\
x + 3y + 2z &= 1
\end{aligned}
$$

(c) 从几何角度解释 3×3 矩阵行列式为零意味着什么。
:::

## 6.4 3×3 矩阵的逆

### 6.4.1 余子式法求逆

**定义。** 矩阵中元素 $a_{ij}$ 的余子式 $C_{ij}$ 是 $(-1)^{i+j}$ 乘以删除第 $i$ 行第 $j$ 列后得到的子矩阵的行列式。

:::note[伴随矩阵与逆矩阵]
矩阵 $A$ 的伴随矩阵是余子式矩阵的转置：

$$
\text{adj}(A) = 
\begin{pmatrix}
C_{11} & C_{21} & C_{31} \\
C_{12} & C_{22} & C_{32} \\
C_{13} & C_{23} & C_{33}
\end{pmatrix}
$$

对于 $\det(A) \neq 0$ 的 3×3 矩阵：

$$
A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A)
$$
:::

![余子式符号](/images/fp3_matrix_cofactor_signs.svg)

:::note[例题]
求 $A = \begin{pmatrix} 1 & 2 & 1 \\ 3 & 2 & 1 \\ 2 & 1 & 2 \end{pmatrix}$ 的逆矩阵。

**解：**

$$
\det(A) = 1(4-1) - 2(6-2) + 1(3-4) = 3 - 8 - 1 = -6
$$

计算九个余子式后，得到伴随矩阵：

$$
\text{adj}(A) = 
\begin{pmatrix}
3 & -3 & 0 \\
-4 & 0 & 2 \\
-1 & 3 & -4
\end{pmatrix}
$$

$$
A^{-1} = \frac{1}{-6} \cdot \text{adj}(A) = 
\begin{pmatrix}
-\frac{1}{2} & \frac{1}{2} & 0 \\[0.2cm]
\frac{2}{3} & 0 & -\frac{1}{3} \\[0.2cm]
\frac{1}{6} & -\frac{1}{2} & \frac{2}{3}
\end{pmatrix}
$$
:::

:::caution[矩阵何时不可逆？]
矩阵**不可逆**（奇异）当且仅当其行列式为零。这发生在：

- 某行或某列是另一行或列的倍数
- 某行或某列全为零
- 某行或某列是其他行或列的线性组合

从几何上看，奇异的 3×3 矩阵代表将三维空间压缩到平面或直线的变换。
:::

### 6.4.2 应用于求解线性方程组

:::note[用矩阵逆求解方程组]
一旦得到逆矩阵，就可以用 $\mathbf{x} = A^{-1}\mathbf{b}$ 求解方程组。
:::

:::note[例题]
求解方程组：

$$
\begin{aligned}
x + 2y + z &= 5 \\
3x + 2y + z &= 7 \\
2x + y + 2z &= 8
\end{aligned}
$$

使用前面例题中计算的逆矩阵：

$$
\mathbf{x} = A^{-1}\mathbf{b} = \begin{pmatrix} 1 \\ \frac{2}{3} \\ \frac{8}{3} \end{pmatrix}
$$
:::

### 6.4.3 高斯消元法

:::note[余子式法之外]
虽然余子式法提供了清晰的公式，但对于较大的矩阵计算量很大。高斯消元法（行化简）在实际应用中更高效。

用高斯消元法求逆矩阵：

1. 创建增广矩阵 $[A|I]$
2. 用初等行变换将左侧化为单位矩阵
3. 右侧即为 $A^{-1}$
:::

:::note[练习：求逆矩阵]
(a) 用余子式法求 $\begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 2 & 2 \end{pmatrix}$ 的逆矩阵

(b) 将方程组写成矩阵方程并用逆矩阵求解：

$$
\begin{aligned}
2x + y - z &= 5 \\
x + 2y + z &= 8 \\
x + y + 3z &= 10
\end{aligned}
$$

(c) 解释为什么矩阵 $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix}$ 没有逆矩阵。
:::

## 6.5 转置与正交矩阵

### 6.5.1 矩阵转置

**定义。** 矩阵 $A$ 的转置 $A^T$ 是将 $A$ 的元素沿主对角线反射得到的。

:::note[转置的性质]
- $(A^T)^T = A$
- $(A + B)^T = A^T + B^T$
- $(AB)^T = B^T A^T$（注意顺序相反）
- $\det(A^T) = \det(A)$
- 若 $A$ 可逆，则 $(A^T)^{-1} = (A^{-1})^T$
:::

### 6.5.2 正交矩阵

**定义。** 方阵 $Q$ 是正交的，如果其转置等于其逆：

$$
Q^T = Q^{-1} \quad \text{即} \quad Q^T Q = Q Q^T = I
$$

:::note[正交矩阵的判据]
矩阵 $Q$ 是正交的当且仅当其行向量（或列向量）构成标准正交集：

1. 每个行向量的范数（长度）等于 1
2. 任意两个不同的行向量相互正交
:::

![正交向量](/images/fp3_matrix_orthogonal.svg)

**定理。** 对于任意正交矩阵 $Q$：

- $\det(Q) = \pm 1$
- 若 $\det(Q) = 1$，$Q$ 代表旋转
- 若 $\det(Q) = -1$，$Q$ 代表反射后接旋转

:::tip[求正交矩阵的逆]
若 $Q$ 是正交矩阵，则 $Q^{-1} = Q^T$

这意味着求正交矩阵的逆只需取其转置！这是一个重要的计算优势。
:::

:::note[重要的正交矩阵示例]
**1. 旋转矩阵**是行列式为 1 的正交矩阵：

绕 x 轴旋转角度 $\theta$：

$$
R_x(\theta) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & -\sin\theta \\ 0 & \sin\theta & \cos\theta \end{pmatrix}
$$

绕 y 轴旋转角度 $\theta$：

$$
R_y(\theta) = \begin{pmatrix} \cos\theta & 0 & \sin\theta \\ 0 & 1 & 0 \\ -\sin\theta & 0 & \cos\theta \end{pmatrix}
$$

绕 z 轴旋转角度 $\theta$：

$$
R_z(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

**2. 反射矩阵**是行列式为 -1 的正交矩阵。例如，关于 xy 平面的反射：

$$
R_{xy} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}
$$
:::

:::note[练习：矩阵转置与正交矩阵]
(a) 求 $\begin{pmatrix} 3 & -1 & 4 \\ 2 & 0 & 5 \\ 1 & 7 & -2 \end{pmatrix}$ 的转置。

(b) 验证 $\begin{pmatrix} \frac{3}{5} & \frac{4}{5} & 0 \\ -\frac{4}{5} & \frac{3}{5} & 0 \\ 0 & 0 & 1 \end{pmatrix}$ 是否为正交矩阵。

(c) 若 3×3 矩阵 $Q$ 是正交的且 $\det(Q) = -1$，它代表什么类型的变换？
:::

## 6.6 直线和平面的矩阵变换

### 6.6.1 变换直线

:::note[变换直线]
当直线 $\mathbf{r}(t) = \mathbf{r}_0 + t\mathbf{v}$ 被矩阵 $A$ 变换时，结果直线的参数形式为：

$$
T(\mathbf{r}(t)) = A\mathbf{r}_0 + tA\mathbf{v}
$$

- 点 $\mathbf{r}_0$ 变换为 $A\mathbf{r}_0$
- 方向向量 $\mathbf{v}$ 变换为 $A\mathbf{v}$

注意：若 $A$ 是奇异的且 $A\mathbf{v} = \mathbf{0}$，直线退化为一个点 $A\mathbf{r}_0$。
:::

:::note[例题]
直线 $L$ 的参数方程为 $x = 1 + 2t$，$y = 3 - t$，$z = 2t$。求经矩阵 $A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ 变换后的直线方程。

**解：**

$$
\mathbf{r}_0' = A\mathbf{r}_0 = \begin{pmatrix} 2 \\ 9 \\ 1 \end{pmatrix}, \quad
\mathbf{v}' = A\mathbf{v} = \begin{pmatrix} 4 \\ -3 \\ 4 \end{pmatrix}
$$

对称形式：$\frac{x-2}{4} = \frac{y-9}{-3} = \frac{z-1}{4}$
:::

### 6.6.2 变换平面

:::note[变换平面]
当平面 $\Pi_1$ 被非奇异矩阵 $\mathbf{M}$ 变换为平面 $\Pi_2$ 时，有两种方法：

**1. 参数形式法：**

$$
T(\mathbf{r}(s,t)) = A\mathbf{r}_0 + sA\mathbf{v}_1 + tA\mathbf{v}_2
$$

**2. 逆变换法：**

若 $(x,y,z)$ 在 $\Pi_1$ 上映射到 $(u,v,w)$ 在 $\Pi_2$ 上，求 $\mathbf{M}^{-1}$，将 $(x,y,z)$ 用 $(u,v,w)$ 表示，代入 $\Pi_1$ 的方程。
:::

:::note[例题]
平面 $3x - 7y + 2z = -3$，变换矩阵 $\mathbf{M} = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3 \end{pmatrix}$。

$$
\mathbf{M}^{-1} = \begin{pmatrix} \frac{1}{2} & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & \frac{1}{3} \end{pmatrix}
$$

代入得：$9u - 42v + 4w = -18$
:::

:::note[练习：平面的矩阵变换]
设 $\mathbf{M} = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 4 \\ 3 & -2 & -3 \end{pmatrix}$。

(a) 求 $\mathbf{M}^{-1}$。

变换将平面 $\Pi_1$ 映射到平面 $\Pi_2$，$(x, y, z)$ 映射到 $(u, v, w)$。

(b) 用 $u$、$v$、$w$ 表示 $x$、$y$、$z$。

平面 $\Pi_1$ 的方程为 $3x - 7y + 2z = -3$。

(c) 求 $\Pi_2$ 的笛卡尔方程，形式为 $au + bv + cw = d$。
:::

## 6.7 特征值与特征向量

### 6.7.1 引言：为什么特征值重要

:::note[一个激励性问题：计算矩阵的幂]
如何计算矩阵 $A$ 的 $A^{100}$？

**对角化提供了答案。** 若 $A = PDP^{-1}$，其中 $D$ 是对角矩阵，则：

$$
A^n = PD^nP^{-1}
$$

由于 $D$ 是对角矩阵，对角线上是特征值 $\lambda_1, \lambda_2, \ldots, \lambda_n$：

$$
D^n = \begin{pmatrix} \lambda_1^n & 0 & \cdots & 0 \\ 0 & \lambda_2^n & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n^n \end{pmatrix}
$$

只需几次矩阵乘法就能计算 $A^{100}$！
:::

:::note[特征值与特征向量的实际应用]
- **动力系统：** 预测系统的长期行为依赖于分析特征值来确定稳定性和增长率。
- **人脸识别与 AI：** 主成分分析（PCA）使用特征值识别人脸图像中最重要的特征。
- **Google 的 PageRank 算法：** 网站排名通过求代表网页链接的大型矩阵的特征向量来确定。
:::

### 6.7.2 定义与基本性质

**定义。** 对于方阵 $A$，非零向量 $\mathbf{v}$ 是 $A$ 的**特征向量**，如果存在标量 $\lambda$（**特征值**）使得：

$$
A\mathbf{v} = \lambda\mathbf{v}
$$

:::note[几何解释]
当矩阵 $A$ 变换空间中的向量时，大多数向量会改变方向。特征向量是保持方向不变的特殊向量（尽管可能被拉伸或压缩）。

- 若 $\lambda > 0$，特征向量沿原方向被拉伸/压缩
- 若 $\lambda < 0$，特征向量沿相反方向被拉伸/压缩
- 若 $\lambda = 0$，特征向量被压缩到原点
:::

### 6.7.3 求特征值和特征向量

:::note[逐步过程]
1. 从方程 $A\mathbf{v} = \lambda\mathbf{v}$ 出发
2. 整理为 $(A - \lambda I)\mathbf{v} = \mathbf{0}$
3. 为使非零解存在，需要 $\det(A - \lambda I) = 0$
4. 解这个**特征方程**求特征值 $\lambda$
5. 对每个特征值，解 $(A - \lambda I)\mathbf{v} = \mathbf{0}$ 求对应的特征向量
:::

**2×2 矩阵的特征值和特征向量**

:::note[例题]
求 $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$ 的特征值和特征向量。

**第一步：** 特征方程：

$$
\det(A - \lambda I) = (3-\lambda)^2 - 1 = (\lambda-4)(\lambda-2) = 0
$$

特征值：$\lambda_1 = 4$，$\lambda_2 = 2$。

**第二步：** $\lambda_1 = 4$：$\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$。

**第三步：** $\lambda_2 = 2$：$\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$。
:::

![特征向量可视化](/images/fp3_matrix_eigenvectors.svg)

**3×3 矩阵的特征值和特征向量**

:::note[例题]
求 $A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & 4 \\ 0 & 4 & 9 \end{pmatrix}$ 的特征值和对应的特征向量。

特征多项式：

$$
\det(A - \lambda I) = (2-\lambda)(\lambda^2 - 12\lambda + 11)
$$

特征值：$\lambda_1 = 2$，$\lambda_2 = 11$，$\lambda_3 = 1$。

特征向量：

$$
\begin{aligned}
\lambda_1 = 2 &: \mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \\
\lambda_2 = 11 &: \mathbf{v}_2 = \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix} \\
\lambda_3 = 1 &: \mathbf{v}_3 = \begin{pmatrix} 0 \\ 2 \\ -1 \end{pmatrix}
\end{aligned}
$$
:::

:::note[关键性质]
1. 矩阵的行列式等于其特征值的乘积：$\det(A) = \lambda_1 \lambda_2 \cdots \lambda_n$
2. 矩阵的迹等于其特征值的和：$\text{tr}(A) = \lambda_1 + \lambda_2 + \cdots + \lambda_n$
3. 迹是主对角线元素的和：$\text{tr}(A) = a_{11} + a_{22} + \cdots + a_{nn}$
:::

### 6.7.4 矩阵的对角化

:::note[对角化过程]
矩阵 $A$ 是**可对角化的**，如果它可以写成 $A = PDP^{-1}$，其中：

- $D$ 是包含 $A$ 的特征值的对角矩阵
- $P$ 是以对应特征向量为列的矩阵
:::

:::note[特征向量的归一化]
归一化特征向量 $\mathbf{v}$：

$$
\mathbf{v}_{\text{normalized}} = \frac{\mathbf{v}}{||\mathbf{v}||}
$$

对于对称矩阵，若所有特征向量已归一化，则 $P^{-1} = P^T$，即 $P^TAP = D$。
:::

:::note[例题：对称矩阵的对角化]
已知 $9$ 是 $A = \begin{pmatrix} 7 & 0 & -2 \\ 0 & 5 & -2 \\ -2 & -2 & 6 \end{pmatrix}$ 的特征值。

**(a) 求另外两个特征值：**

$$
\det(A - \lambda I) = -(\lambda - 9)(\lambda - 6)(\lambda - 3)
$$

特征值：$9$、$6$ 和 $3$。

**(b) 求特征向量并归一化：**

$$
\begin{aligned}
\lambda_1 = 9 &: \mathbf{u}_1 = \frac{1}{3}\begin{pmatrix} -2 \\ -1 \\ 2 \end{pmatrix} \\[0.3cm]
\lambda_2 = 6 &: \mathbf{u}_2 = \frac{1}{3}\begin{pmatrix} 2 \\ -2 \\ 1 \end{pmatrix} \\[0.3cm]
\lambda_3 = 3 &: \mathbf{u}_3 = \frac{1}{3}\begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}
\end{aligned}
$$

**(c) 构造 $P$ 和 $D$：**

$$
P = \begin{pmatrix} -\frac{2}{3} & \frac{2}{3} & \frac{1}{3} \\ -\frac{1}{3} & -\frac{2}{3} & \frac{2}{3} \\ \frac{2}{3} & \frac{1}{3} & \frac{2}{3} \end{pmatrix}, \quad
D = \begin{pmatrix} 9 & 0 & 0 \\ 0 & 6 & 0 \\ 0 & 0 & 3 \end{pmatrix}
$$

验证：$P^TAP = D$。✓
:::

:::tip[特殊情况：对称矩阵]
当 $A$ 是对称矩阵（$A = A^T$）时：

- 所有特征值都是实数
- 对应于不同特征值的特征向量相互正交
- 总能找到特征向量的标准正交基
- 矩阵 $P$ 可以选择使得 $P^T = P^{-1}$，即 $P^TAP = D$
:::

:::note[练习：特征值与特征向量]
(a) 矩阵 $A = \begin{pmatrix} 2 & -1 & 3 \\ 0 & 2 & 4 \\ 0 & 2 & 0 \end{pmatrix}$。

(i) 证明 4 是 $A$ 的特征值并求另外两个特征值。

(ii) 求对应于特征值 4 的特征向量。

(b) 考虑 $\mathbf{A} = \begin{pmatrix} 3 & 4 & -4 \\ 4 & 5 & 0 \\ -4 & 0 & 1 \end{pmatrix}$。

(i) 证明 3 是 $\mathbf{A}$ 的特征值并求另外两个特征值。

(ii) 求对应于特征值 3 的特征向量。

(iii) 已知 $\begin{pmatrix} 2 \\ 2 \\ -1 \end{pmatrix}$ 和 $\begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$ 是另外两个特征值对应的特征向量，求矩阵 $\mathbf{P}$ 使得 $\mathbf{P}^T\mathbf{A}\mathbf{P}$ 为对角矩阵。
:::

## 6.8 练习题

:::note[练习 1]
求以下矩阵的行列式：

$$
A = \begin{pmatrix} 3 & 1 & 2 \\ 0 & -1 & 4 \\ 2 & 2 & 1 \end{pmatrix}, \quad
B = \begin{pmatrix} 2 & 0 & 1 \\ 4 & 3 & 2 \\ 2 & 1 & 1 \end{pmatrix}, \quad
C = \begin{pmatrix} 3 & 6 & -3 \\ 1 & 2 & -1 \\ 2 & 4 & -2 \end{pmatrix}
$$

对每个矩阵，解释行列式告诉你关于对应线性方程组的什么信息。
:::

:::note[练习 2]
矩阵 $P = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 1 & -1 \\ 3 & 1 & 0 \end{pmatrix}$。

(a) 求 $P$ 的行列式。

(b) 用余子式法求 $P$ 的逆矩阵。

(c) 用逆矩阵求解方程组：

$$
\begin{aligned}
x + 2y + z &= 6 \\
2x + y - z &= 1 \\
3x + y &= 4
\end{aligned}
$$
:::

:::note[练习 3]
对于矩阵 $A = \begin{pmatrix} 3 & 1 & 1 \\ 2 & k & 0 \\ 4 & -1 & 3 \end{pmatrix}$，求：

(a) 使 $\det(A) = 0$ 的 $k$ 值。

(b) 对于该 $k$ 值，判断 $A\mathbf{x} = \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix}$ 无解、唯一解还是无穷多解。

(c) 当 $k = 2$ 时，求 $\det(A)$ 和 $A^{-1}$。
:::

:::note[练习 4]
三维变换矩阵 $T = \begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}$ 表示绕 $z$ 轴的旋转。

(a) 证明对任意 $\theta$ 值，$\det(T) = 1$。

(b) 求 $T$ 的逆并验证 $T^{-1}$ 表示绕 $-\theta$ 的旋转。

(c) 若点 $P(2,1,3)$ 绕 $z$ 轴旋转 $\frac{\pi}{4}$（45°），求所得点 $P'$ 的坐标。
:::

:::note[练习 5]
设 $\mathbf{T} = \begin{pmatrix} 2 & 3 & 7 \\ 3 & 2 & 6 \\ a & 4 & b \end{pmatrix}$，$\mathbf{U} = \begin{pmatrix} 6 & -1 & -4 \\ 15 & c & -9 \\ -8 & a & 5 \end{pmatrix}$，其中 $a$、$b$、$c$ 为常数。

已知 $\mathbf{T}\mathbf{U} = \mathbf{I}$：

(a) 求 $a$、$b$ 和 $c$ 的值。

矩阵 $\mathbf{T}$ 表示的变换将直线 $l_1$ 变换为直线 $l_2$。

已知 $l_2$ 的方程为 $\frac{x-1}{3} = \frac{y}{-4} = z+2$：

(b) 求 $l_1$ 的笛卡尔方程。
:::

:::note[练习 6]
设 $\mathbf{M} = \begin{pmatrix} 0 & -1 & 3 \\ -1 & 4 & -1 \\ 3 & -1 & 0 \end{pmatrix}$。

已知 $\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$ 是 $\mathbf{M}$ 的特征向量：

(a) 求对应的特征值。

已知 $-3$ 是 $\mathbf{M}$ 的特征值：

(b) 求对应的特征向量。

已知 $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ 也是 $\mathbf{M}$ 的特征向量：

(c) 求对角矩阵 $\mathbf{D}$ 和正交矩阵 $\mathbf{P}$ 使得 $\mathbf{D} = \mathbf{P}^T\mathbf{M}\mathbf{P}$。
:::

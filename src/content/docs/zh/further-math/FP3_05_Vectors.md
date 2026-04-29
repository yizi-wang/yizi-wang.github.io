---
title: "FP3 第五章：向量"
---

# FP3 讲义：向量

## 先备知识检查

在开始之前，让我们回顾一些向量学习中的关键概念：

:::tip[练习：向量运算]
1. 求向量 $3\mathbf{i} + 2\mathbf{j} - 3\mathbf{k}$ 和 $4\mathbf{i} - 5\mathbf{j} + \mathbf{k}$ 的标量积
2. 一条直线的向量方程为 $\mathbf{r} = (1, 4, -2) + \lambda(2, 3, 5)$。写出该直线的笛卡尔方程。
3. 点 P、Q 和 R 的坐标分别为 $(1, 0, -1)$、$(2, 4, 1)$ 和 $(3, 5, 6)$。求角 QPR。
:::

:::note[向量运算回顾]

| 运算 | 定义 |
|---|---|
| 标量（点）积 | $\mathbf{a}\cdot\mathbf{b} = \|\mathbf{a}\|\|\mathbf{b}\|\cos\theta$ |
| 标量积的分量形式 | $\mathbf{a}\cdot\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3$ |
| 向量夹角 | $\cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{\|\mathbf{a}\|\|\mathbf{b}\|}$ |
| 直线的参数方程 | $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$ |

:::

## 5.1 向量积

### 5.1.1 几何动机

两个向量的标量（点）积提供了一个标量量，与一个向量在另一个向量上的投影有关。然而，我们经常需要一种方法来表示同时垂直于两个输入向量的、既有大小又有方向的量。向量积（或叉积）满足了这一需求。

:::note[向量积的几何直觉]
当两个向量 $\mathbf{a}$ 和 $\mathbf{b}$ 不平行时，它们定义一个平面。向量积 $\mathbf{a} \times \mathbf{b}$ 给出：

- 一个垂直于该平面的向量（因此同时垂直于 $\mathbf{a}$ 和 $\mathbf{b}$）
- 其大小等于 $\mathbf{a}$ 和 $\mathbf{b}$ 形成的平行四边形的面积
- 其方向由右手定则确定

叉积在以下方面有重要应用：

- 求面积和体积
- 在物理学中定义力矩和角动量
- 计算平面的法向量
- 确定三维空间中的垂直方向
:::

![向量积图示](/images/fp3_vectors_cross_product.svg)

**定义：向量积。** 两个向量 $\mathbf{a}$ 和 $\mathbf{b}$ 的向量（叉）积定义为：

$$
\mathbf{a} \times \mathbf{b} = |\mathbf{a}||\mathbf{b}|\sin\theta\, \hat{\mathbf{n}}
$$

其中 $\theta$ 是 $\mathbf{a}$ 和 $\mathbf{b}$ 之间的夹角，$\hat{\mathbf{n}}$ 是垂直于 $\mathbf{a}$ 和 $\mathbf{b}$ 的单位向量，方向由右手定则确定。

:::note[右手定则]
你可以使用"右手定则"来确定 $\hat{\mathbf{n}}$ 的方向：

- 如果 $\mathbf{a}$ 是你的食指，$\mathbf{b}$ 是你的中指
- 那么 $\mathbf{a} \times \mathbf{b}$ 沿着你的拇指方向
:::

### 5.1.2 基本性质

- $\mathbf{b} \times \mathbf{a} = -\mathbf{a} \times \mathbf{b}$（不满足交换律）
- $\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c}$（满足分配律）
- $\mathbf{a} \times \mathbf{b} = \mathbf{0}$ 当且仅当 $\mathbf{a} = \mathbf{0}$、$\mathbf{b} = \mathbf{0}$ 或 $\mathbf{a}$ 与 $\mathbf{b}$ 平行

:::tip[为什么 $\mathbf{a} \times \mathbf{b} = -\mathbf{b} \times \mathbf{a}$？]
当我们在叉积中交换向量的顺序时，它们定义的平面保持不变，但从第一个向量到第二个向量的旋转方向反转了：

![叉积反交换性](/images/fp3_vectors_anticommutative.svg)

这种旋转方向的改变导致垂直向量指向相反方向，从而产生负号。
:::

### 5.1.3 单位向量积

:::note[单位向量的乘积]
根据叉积的基本性质，我们可以得到以下单位向量的恒等式：

$$
\begin{aligned}
\mathbf{i} \times \mathbf{i} &= \mathbf{0} & \mathbf{i} \times \mathbf{j} &= \mathbf{k} & \mathbf{i} \times \mathbf{k} &= -\mathbf{j} \\
\mathbf{j} \times \mathbf{j} &= \mathbf{0} & \mathbf{j} \times \mathbf{k} &= \mathbf{i} & \mathbf{j} \times \mathbf{i} &= -\mathbf{k} \\
\mathbf{k} \times \mathbf{k} &= \mathbf{0} & \mathbf{k} \times \mathbf{i} &= \mathbf{j} & \mathbf{k} \times \mathbf{j} &= -\mathbf{i}
\end{aligned}
$$

![单位向量积](/images/fp3_vectors_unit_products.svg)
:::

### 5.1.4 分量形式及其推导

叉积的分量形式可以从其几何定义和单位向量积的性质推导出来。

从向量 $\mathbf{a} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$ 和 $\mathbf{b} = b_1\mathbf{i} + b_2\mathbf{j} + b_3\mathbf{k}$ 出发，利用分配律：

$$
\begin{aligned}
\mathbf{a} \times \mathbf{b} &= (a_2b_3 - a_3b_2)\mathbf{i} + (a_3b_1 - a_1b_3)\mathbf{j} + (a_1b_2 - a_2b_1)\mathbf{k}
\end{aligned}
$$

可以用行列式形式表示：

$$
\mathbf{a} \times \mathbf{b} = \begin{vmatrix} 
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3
\end{vmatrix}
$$

:::tip[分量形式的直觉]
$\mathbf{a} \times \mathbf{b}$ 的分量代表 $\mathbf{a}$ 和 $\mathbf{b}$ 形成的平行四边形在三个坐标平面上的投影面积：

- $a_2b_3 - a_3b_2$：在 $yz$ 平面上的投影面积（垂直于 $\mathbf{i}$）
- $a_3b_1 - a_1b_3$：在 $xz$ 平面上的投影面积（垂直于 $\mathbf{j}$）
- $a_1b_2 - a_2b_1$：在 $xy$ 平面上的投影面积（垂直于 $\mathbf{k}$）
:::

:::note[例题：分量形式的向量积]
已知 $\mathbf{a} = 2\mathbf{i} - 3\mathbf{j}$ 和 $\mathbf{b} = 4\mathbf{i} + \mathbf{j} - \mathbf{k}$，求 $\mathbf{a} \times \mathbf{b}$：

(a) 直接计算

(b) 用行列式方法

(c) 验证 $\mathbf{a} \times \mathbf{b}$ 同时垂直于 $\mathbf{a}$ 和 $\mathbf{b}$
:::

:::caution[常见错误]
一个常见的错误是忘记向量积不满足交换律。请始终记住：

$$
\mathbf{a} \times \mathbf{b} = -\mathbf{b} \times \mathbf{a}
$$

这意味着在计算向量积时顺序很重要。
:::

## 5.2 向量积的几何应用

### 5.2.1 面积

**定理：三角形面积。** 如果 $\mathbf{a}$ 和 $\mathbf{b}$ 是点 A 和 B 相对于原点 O 的位置向量，则：

$$
\text{三角形 OAB 的面积} = \frac{1}{2}|\mathbf{a} \times \mathbf{b}|
$$

*证明。* 三角形 OAB 的面积为 $\frac{1}{2}|\mathbf{a}||\mathbf{b}|\sin\theta$，其中 $\theta$ 是 $\mathbf{a}$ 和 $\mathbf{b}$ 之间的夹角。而这恰好等于 $\frac{1}{2}|\mathbf{a} \times \mathbf{b}|$。

![三角形面积](/images/fp3_vectors_triangle_area.svg)

:::note[面积关键公式]
- 三角形 OAB 面积 = $\frac{1}{2}|\mathbf{a} \times \mathbf{b}|$
- 三角形 ABC 面积 = $\frac{1}{2}|(\mathbf{b} - \mathbf{a}) \times (\mathbf{c} - \mathbf{a})|$
- 平行四边形 OABC 面积 = $|\mathbf{a} \times \mathbf{b}|$
- 平行四边形 ABCD 面积 = $|(\mathbf{b} - \mathbf{a}) \times (\mathbf{d} - \mathbf{a})|$

![面积公式](/images/fp3_vectors_area_formulas.svg)
:::

:::note[例题：三角形面积]
求三角形 ABC 的面积，其中 A、B 和 C 的位置向量分别为 $4\mathbf{i} - 2\mathbf{j} + \mathbf{k}$、$-12\mathbf{i} + 14\mathbf{j} + \mathbf{k}$ 和 $-4\mathbf{i} - 2\mathbf{j} + \mathbf{k}$。
:::

## 5.3 标量三重积

### 5.3.1 定义与性质

**定义：标量三重积。** 三个向量 $\mathbf{a}$、$\mathbf{b}$ 和 $\mathbf{c}$ 的标量三重积定义为：

$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})
$$

:::note[几何解释]
标量三重积 $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$ 表示：

- 三个向量 $\mathbf{a}$、$\mathbf{b}$ 和 $\mathbf{c}$ 形成的平行六面体的有符号体积
- 如果 $\mathbf{a}$、$\mathbf{b}$ 和 $\mathbf{c}$ 构成右手系，值为正
- 如果构成左手系，值为负
- 如果三个向量共面（或任一向量为零），值为零
:::

:::note[标量三重积的关键性质]
- 循环性质：$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \mathbf{b} \cdot (\mathbf{c} \times \mathbf{a}) = \mathbf{c} \cdot (\mathbf{a} \times \mathbf{b})$
- 如果某个向量重复出现，标量三重积为零：$\mathbf{a} \cdot (\mathbf{a} \times \mathbf{p}) = 0$ 对任意向量 $\mathbf{p}$
- 分量形式：

$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 
\begin{vmatrix} 
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3 \\
c_1 & c_2 & c_3
\end{vmatrix}
$$
:::

:::note[例题：计算标量三重积]
计算以下向量的标量三重积 $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$：

$$
\begin{aligned}
\mathbf{a} &= 2\mathbf{i} - \mathbf{j} + 3\mathbf{k} \\
\mathbf{b} &= \mathbf{i} + 2\mathbf{j} - \mathbf{k} \\
\mathbf{c} &= 3\mathbf{i} - \mathbf{j} + 2\mathbf{k}
\end{aligned}
$$

**解：**

**方法一：** 先计算叉积 $\mathbf{b} \times \mathbf{c}$，再与 $\mathbf{a}$ 取点积。

$$
\mathbf{b} \times \mathbf{c} = 3\mathbf{i} - 5\mathbf{j} - 7\mathbf{k}
$$

$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 6 + 5 - 21 = -10
$$

**方法二：** 直接使用行列式公式。

$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 
\begin{vmatrix}
2 & -1 & 3 \\
1 & 2 & -1 \\
3 & -1 & 2
\end{vmatrix} = -10
$$
:::

:::note[标量三重积的应用]
1. **体积计算：** 绝对值给出平行六面体或四面体的体积（平行六面体的六分之一）。
2. **共面性检验：** 三个向量共面当且仅当其标量三重积为零。
3. **方向性：** 标量三重积的符号决定了三个向量构成右手系还是左手系。
:::

:::note[练习：标量三重积]
1. 计算标量三重积 $[\mathbf{a}, \mathbf{b}, \mathbf{c}]$，其中 $\mathbf{a} = (3, 0, -2)$，$\mathbf{b} = (1, 2, 4)$，$\mathbf{c} = (2, -1, 3)$
2. 判断向量 $\mathbf{p} = (1, 2, 1)$、$\mathbf{q} = (3, 1, -1)$ 和 $\mathbf{r} = (5, 5, -1)$ 是否共面。
3. 证明对任意三个向量 $\mathbf{a}$、$\mathbf{b}$ 和 $\mathbf{c}$，有 $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \mathbf{b} \cdot (\mathbf{c} \times \mathbf{a})$。
:::

### 5.3.2 体积

**定理：平行六面体体积。** 以 $\mathbf{a}$、$\mathbf{b}$ 和 $\mathbf{c}$ 为从公共顶点出发的棱的平行六面体的体积为：

$$
\text{体积} = |\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|
$$

![平行六面体](/images/fp3_vectors_parallelepiped.svg)

**定理：四面体体积。** 以原点和位置向量为 $\mathbf{a}$、$\mathbf{b}$ 和 $\mathbf{c}$ 的点为顶点的四面体的体积为：

$$
\text{体积} = \frac{1}{6}|\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|
$$

![四面体](/images/fp3_vectors_tetrahedron.svg)

:::note[例题：四面体体积]
求以 A(1, 3, 0)、B(3, 2, -1)、C(2, -1, -1) 和 D(-1, 3, 6) 为顶点的四面体的体积。

**解：**

$$
\begin{aligned}
\overrightarrow{AB} &= (2, -1, -1) \\
\overrightarrow{AC} &= (1, -4, -1) \\
\overrightarrow{AD} &= (-2, 0, 6)
\end{aligned}
$$

$$
V = \frac{1}{6}\left|\begin{vmatrix} 
2 & -1 & -1 \\
1 & -4 & -1 \\
-2 & 0 & 6
\end{vmatrix}\right| = \frac{1}{6}|36| = 6
$$
:::

:::note[练习：求体积]
求以 O(0, 0, 0)、A(2, 2, 1)、B(3, -1, 2) 和 C(1, 1, 3) 为顶点的四面体的体积。
:::

## 5.4 直线和平面的向量方程

### 5.4.1 直线的向量方程

三维空间中的直线可以用几种等价形式表示。

**定义：直线的参数形式。** 如果一条直线通过坐标为 $(x_1, y_1, z_1)$ 的点，方向向量为 $\mathbf{b} = (l, m, n)$，则直线上的任意点 $(x, y, z)$ 可以参数化表示为：

$$
\frac{x-x_1}{l} = \frac{y-y_1}{m} = \frac{z-z_1}{n} = \lambda
$$

**定义：直线的向量方程。** 对于通过点 $A$（位置向量为 $\mathbf{a}$）且平行于向量 $\mathbf{b}$ 的直线，参数向量形式为：

$$
\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}
$$

也可以用叉积表示：

$$
(\mathbf{r} - \mathbf{a}) \times \mathbf{b} = \mathbf{0}
$$

![直线方程图示](/images/fp3_vectors_line_equation.svg)

:::note[直线方程的几何解释]
- $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$：直线上的任意点可以从点 $A$ 出发，沿 $\mathbf{b}$ 方向移动一定距离到达
- $(\mathbf{r} - \mathbf{a}) \times \mathbf{b} = \mathbf{0}$：从直线上任意点 $A$ 到直线上其他点的向量平行于 $\mathbf{b}$
:::

:::note[例题：求直线方程]
求通过点 $(1, 2, -1)$ 和 $(3, -2, 2)$ 的直线的向量方程，形式为 $(\mathbf{r} - \mathbf{a}) \times \mathbf{b} = \mathbf{0}$。
:::

### 5.4.2 平面的向量方程

**定义：平面的向量方程。** 平面可以用以下几种形式表示：

- **标量积形式：** $\mathbf{r} \cdot \mathbf{n} = p$，其中 $\mathbf{n}$ 是平面的法向量
- **点法式：** $(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} = 0$，其中 $\mathbf{a}$ 是平面上一点的位置向量
- **参数形式：** $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$，其中 $\mathbf{b}$ 和 $\mathbf{c}$ 是平面内不平行的向量
- **笛卡尔形式：** $ax + by + cz + d = 0$

![平面方程图示](/images/fp3_vectors_plane_equation.svg)

:::note[例题：平面表示形式之间的转换]
求通过点 $P(2,1,3)$ 且法向量为 $\mathbf{n} = (3,2,-1)$ 的平面的不同形式方程。

**解：**

**(a) 点法式：**

$$
(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} = 0
$$

**(b) 标量积形式：**

$$
\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n} = 6 + 2 - 3 = 5
$$

**(c) 笛卡尔形式：**

$$
3x + 2y - z = 5
$$

**(d) 参数形式：**

选择 $\mathbf{b} = (-2,3,0)$ 和 $\mathbf{c} = (1,0,3)$（均垂直于 $\mathbf{n}$）。
:::

:::note[练习：平面表示形式之间的转换]
1. 求通过点 $A(1,0,2)$、$B(3,1,0)$ 和 $C(2,2,1)$ 的平面的点法式、标量积形式和笛卡尔形式。
2. 平面的笛卡尔方程为 $2x - 3y + z = 6$。求法向量、平面上一点、标量积形式、点法式和参数表示。
3. 平面的参数表示为 $\mathbf{r} = (1,2,3) + \lambda(2,0,1) + \mu(0,1,-1)$。求法向量并用笛卡尔形式表示。
:::

## 5.5 三维空间中的几何问题

### 5.5.1 相交

:::note[求交点的方法]
**1. 直线-直线相交：**
- 建立两条直线的参数方程
- 使分量相等求参数值
- 检查参数值是否给出两条直线上的同一点

**2. 直线-平面相交：**
- 将直线方程代入平面方程
- 求解参数值
- 代回求交点

**3. 平面-平面相交：**
- 交线方向为 $\mathbf{n}_1 \times \mathbf{n}_2$
- 通过解联立方程找到两平面上的一点
- 用点和方向写出直线方程
:::

![两平面相交](/images/fp3_vectors_plane_intersection.svg)

:::note[例题：直线-平面相交]
求直线 $\mathbf{r} = (2, 1, 3) + t(1, 2, -1)$ 与平面 $2x - y + 3z = 8$ 的交点。
:::

:::note[练习：相交]
1. 求直线 $\mathbf{r} = (1, 0, 2) + t(2, 1, 3)$ 与平面 $3x - 2y + z = 5$ 的交点。
2. 判断直线 $\mathbf{r} = (1, 2, 3) + s(2, 3, 1)$ 和 $\mathbf{r} = (2, 1, 4) + t(4, 6, 2)$ 是否相交。
3. 求平面 $x + 2y + z = 4$ 和 $2x - y + 3z = 5$ 的交线方程。
:::

### 5.5.2 角度

:::note[角度公式]
**1. 两向量夹角：**

$$
\cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}
$$

**2. 直线与平面的夹角：**

$$
\sin\theta = \frac{|\mathbf{b} \cdot \mathbf{n}|}{|\mathbf{b}||\mathbf{n}|}
$$

![直线与平面的夹角](/images/fp3_vectors_angle_line_plane.svg)

**3. 两平面的夹角：**

$$
\cos\theta = \frac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}
$$

![两平面的夹角](/images/fp3_vectors_angle_planes.svg)
:::

:::note[例题：直线与平面的夹角]
求直线 $\mathbf{r} = 2\mathbf{i} + \mathbf{j} - 5\mathbf{k} + \lambda(3\mathbf{i} + 4\mathbf{j} - 12\mathbf{k})$ 与平面 $\mathbf{r}\cdot(2\mathbf{i} - 2\mathbf{j} - \mathbf{k}) = 2$ 之间的锐角。
:::

### 5.5.3 距离

:::note[距离公式]
**1. 点到平面的距离：**

$$
\text{距离} = \frac{|(\mathbf{p}-\mathbf{r}) \cdot \mathbf{n}|}{|\mathbf{n}|} = \frac{|\mathbf{p} \cdot \mathbf{n} - a|}{|\mathbf{n}|}
$$

其中平面方程为 $\mathbf{r}\cdot\mathbf{n} = a$。

![点到平面的距离](/images/fp3_vectors_distance_point_plane.svg)

**2. 点到直线的距离：**

$$
\text{距离} = \frac{|(\mathbf{p} - \mathbf{a}) \times \mathbf{b}|}{|\mathbf{b}|}
$$

其中直线方程为 $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$。

![点到直线的距离](/images/fp3_vectors_distance_point_line.svg)

**3. 异面直线间的距离：**

$$
\text{距离} = \frac{|(\mathbf{a} - \mathbf{c}) \cdot (\mathbf{b} \times \mathbf{d})|}{|\mathbf{b} \times \mathbf{d}|}
$$

其中直线方程为 $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$ 和 $\mathbf{r} = \mathbf{c} + \mu\mathbf{d}$。
:::

:::note[例题：异面直线间的距离]
求两条异面直线 $\mathbf{r} = \mathbf{i} + \lambda(\mathbf{j} + \mathbf{k})$ 和 $\mathbf{r} = -\mathbf{i} + 3\mathbf{j} - \mathbf{k} + \mu(2\mathbf{i} - \mathbf{j} - \mathbf{k})$ 之间的最短距离。
:::

:::note[练习：求距离]
1. 求点 $P(2, 3, 4)$ 到直线 $\mathbf{r} = (1, 0, 1) + t(2, 1, 1)$ 的距离。
2. 求异面直线 $\mathbf{r} = (1, 2, 0) + s(1, 0, 1)$ 和 $\mathbf{r} = (0, 0, 3) + t(0, 1, 1)$ 之间的最短距离。
:::

## 5.6 总结与关键公式

:::note[关键定义与公式]

- **向量积：** $\mathbf{a} \times \mathbf{b} = |\mathbf{a}||\mathbf{b}|\sin\theta\, \hat{\mathbf{n}}$
- **分量形式：** $\mathbf{a} \times \mathbf{b} = (a_2b_3 - a_3b_2)\mathbf{i} + (a_3b_1 - a_1b_3)\mathbf{j} + (a_1b_2 - a_2b_1)\mathbf{k}$
- **面积：**
  - 三角形 OAB：$\frac{1}{2}|\mathbf{a} \times \mathbf{b}|$
  - 三角形 ABC：$\frac{1}{2}|(\mathbf{b} - \mathbf{a}) \times (\mathbf{c} - \mathbf{a})|$
  - 平行四边形 OABC：$|\mathbf{a} \times \mathbf{b}|$
- **标量三重积：** $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$
- **体积：**
  - 平行六面体：$|\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$
  - 四面体：$\frac{1}{6}|\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$
- **直线方程：**
  - 向量形式：$(\mathbf{r} - \mathbf{a}) \times \mathbf{b} = \mathbf{0}$
  - 参数形式：$\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$
  - 笛卡尔形式：$\frac{x-x_1}{a} = \frac{y-y_1}{b} = \frac{z-z_1}{c}=\lambda$
- **平面方程：**
  - 标量积形式：$\mathbf{r} \cdot \mathbf{n} = p$
  - 参数形式：$\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$
  - 笛卡尔形式：$ax + by + cz = d$
- **角度：**
  - 直线与平面：$\sin\theta = \frac{|\mathbf{b} \cdot \mathbf{n}|}{|\mathbf{b}||\mathbf{n}|}$
  - 两平面：$\cos\theta = \frac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}$
- **距离：**
  - 点到平面：$\frac{|\mathbf{p} \cdot \mathbf{n} - d|}{|\mathbf{n}|}$
  - 点到直线：$\frac{|(\mathbf{p} - \mathbf{a}) \times \mathbf{b}|}{|\mathbf{b}|}$
  - 异面直线：$\frac{|(\mathbf{a} - \mathbf{c}) \cdot (\mathbf{b} \times \mathbf{d})|}{|\mathbf{b} \times \mathbf{d}|}$
:::

:::caution[常见错误提示]
1. 忘记向量积不满足交换律：$\mathbf{a} \times \mathbf{b} \neq \mathbf{b} \times \mathbf{a}$
2. 计算 $\mathbf{a} \times \mathbf{a}$ 时期望得到非零结果（它总是零）
3. 用错直线与平面夹角的公式（是 $\sin\theta$，不是 $\cos\theta$）
4. 求原点到平面的垂直距离时忘记归一化法向量
5. 在距离公式中忘记取绝对值
6. 混淆直线的参数表示（$\mathbf{r} = \mathbf{a} + \lambda\mathbf{b}$）和向量方程（$(\mathbf{r} - \mathbf{a}) \times \mathbf{b} = \mathbf{0}$）
:::

## 5.7 练习题

:::note[练习 1]
点 $A$、$B$ 和 $C$ 相对于固定原点 $O$ 的位置向量分别为 $\mathbf{a}$、$\mathbf{b}$ 和 $\mathbf{c}$。

已知：

$$
\mathbf{a} = \mathbf{i} + \mathbf{j}, \quad \mathbf{b} = 3\mathbf{i} - \mathbf{j} + \mathbf{k}, \quad \mathbf{c} = 2\mathbf{i} + \mathbf{j} - \mathbf{k}
$$

计算：

(a) $\mathbf{b} \times \mathbf{c}$

(b) $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$

(c) 三角形 $OBC$ 的面积

(d) 四面体 $OABC$ 的体积
:::

:::note[练习 2]
点 $A$、$B$ 和 $C$ 相对于原点 $O$ 的位置向量分别为 $\mathbf{i} - 2\mathbf{j} - 2\mathbf{k}$、$7\mathbf{i} - 3\mathbf{k}$ 和 $4\mathbf{i} + 4\mathbf{j}$。

求：

(a) $\overrightarrow{AC} \times \overrightarrow{BC}$

(b) 三角形 $ABC$ 的面积

(c) 平面 $ABC$ 的方程，形式为 $\mathbf{r} \cdot \mathbf{n} = p$
:::

:::note[练习 3]
平面 $P$ 的方程为

$$
\mathbf{r} = \begin{pmatrix} 3 \\ 1 \\ 2 \end{pmatrix} + \lambda \begin{pmatrix} 0 \\ 2 \\ -1 \end{pmatrix} + \mu \begin{pmatrix} 3 \\ 2 \\ 2 \end{pmatrix}
$$

(a) 求垂直于平面 $P$ 的向量。

直线 $l$ 通过点 $A(1, 3, 3)$ 且与 $P$ 相交于 $(3, 1, 2)$。平面 $P$ 与直线 $l$ 的锐角为 $\alpha$。

(b) 求 $\alpha$（精确到度）。

(c) 求 $A$ 到平面 $P$ 的垂直距离。
:::

:::note[练习 4]
直线 $l_1$ 和 $l_2$ 的方程为

$$
\mathbf{r} = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix} + \lambda \begin{pmatrix} -1 \\ 3 \\ 4 \end{pmatrix} \quad \text{和} \quad \mathbf{r} = \begin{pmatrix} a \\ -4 \\ 0 \end{pmatrix} + \mu \begin{pmatrix} 0 \\ 3 \\ 2 \end{pmatrix}
$$

如果直线 $l_1$ 和 $l_2$ 相交，求：

(a) $a$ 的值

(b) 包含直线 $l_1$ 和 $l_2$ 的平面方程，形式为 $ax + by + cz + d = 0$

当 $a = 2$ 时，直线 $l_1$ 和 $l_2$ 为异面直线。

(c) 求直线 $l_1$ 和 $l_2$ 之间的最短距离。
:::

:::note[练习 5]
平面 $\Pi$ 的向量方程为

$$
\mathbf{r} = 3\mathbf{i} + \mathbf{k} + \lambda(-4\mathbf{i} + \mathbf{j}) + \mu(6\mathbf{i} - 2\mathbf{j} + \mathbf{k})
$$

(a) 求 $\Pi$ 的方程，形式为 $\mathbf{r}\cdot\mathbf{n} = p$。

点 $P$ 的坐标为 $(6, 13, 5)$。直线 $l$ 通过 $P$ 且垂直于 $\Pi$。直线 $l$ 与 $\Pi$ 相交于点 $N$。

(b) 证明 $N$ 的坐标为 $(3, 1, -1)$。

点 $R$ 在 $\Pi$ 上，坐标为 $(1, 0, 2)$。

(c) 求 $N$ 到直线 $PR$ 的垂直距离，精确到 3 位有效数字。
:::

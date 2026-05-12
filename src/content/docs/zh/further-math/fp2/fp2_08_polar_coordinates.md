---
title: "FP2 第八章：极坐标"
---

## FP2 讲义：极坐标

## 模块一：极坐标简介

### 核心概念：极坐标系

**定义：** 极坐标系使用以下两个量来确定平面上点的位置：
- $r$：从原点（极点）出发的径向距离，$r \geq 0$
- $\theta$：极角，从正 $x$ 轴逆时针方向测量

![极坐标系](/images/tikz/fp2-polar-coordinates.svg)

**关键观察：**

极坐标中的点 $(r, \theta)$ 可以用以下公式转换为直角坐标 $(x, y)$：

$$
\begin{aligned}
x &= r\cos\theta \\
y &= r\sin\theta
\end{aligned}
$$

反之，直角坐标 $(x, y)$ 可以用以下公式转换为极坐标 $(r, \theta)$：

$$
\begin{aligned}
r &= \sqrt{x^2 + y^2} \\
\theta &= \tan^{-1}\left(\frac{y}{x}\right) \quad \text{（需要根据象限调整）}
\end{aligned}
$$

同一个点可以有多组极坐标表示：

$$
(r, \theta) = (r, \theta + 2\pi n) \quad \text{其中 } n \text{ 为任意整数}
$$

### 例题：坐标系之间的转换

在极坐标和直角坐标之间转换以下点：

(a) 将极坐标点 $(3, \pi/4)$ 转换为直角坐标

(b) 将直角坐标点 $(0, -2)$ 转换为极坐标

## 模块二：基本极坐标曲线

### 情况一：$\theta = a$（射线）

方程 $\theta = a$ 表示从原点出发、与正 $x$ 轴成角度 $a$ 的射线（半直线）。

**直角坐标等价形式：**

$$
y = (\tan a) \cdot x
$$

约束条件：点必须位于由 $a$ 确定的相应象限内。

### 情况二：$r = a$（圆）

方程 $r = a$（其中 $a > 0$）表示以原点为圆心、半径为 $a$ 的圆。

**直角坐标等价形式：**

$$
x^2 + y^2 = a^2
$$

### 情况三：$r = p \sec(a - \theta)$（直线）

方程 $r = p \sec(a - \theta)$ 表示一条距离原点为 $p$ 的直线，其中从原点到该直线的垂线与正 $x$ 轴成角度 $a$。

**特征：**
- 该直线到原点的垂直距离为 $p$
- 从原点到该直线的法线与正 $x$ 轴成角度 $a$

### 例题：识别和绘制基本极坐标曲线

识别并绘制以下极坐标曲线：

(a) $\theta = 4\pi/3$

(b) $r = 2$

(c) $r = 4\sec(\pi/4 - \theta)$

## 模块三：特殊极坐标曲线

### 情况四：$r = 2a\cos\theta$（过原点的圆）

方程 $r = 2a\cos\theta$ 表示直径为 $2a$、过原点、圆心在 $(a, 0)$ 的圆。

**特征：**
- 当 $\theta$ 从 $-\pi/2$ 变化到 $\pi/2$（$\cos\theta$ 非负）时，圆被遍历。

**直角坐标等价形式：**

$$
(x-a)^2 + y^2 = a^2
$$

### 情况五：$r = k\theta$（阿基米德螺线）

方程 $r = k\theta$ 表示阿基米德螺线，其中到原点的距离随角度线性增长。

### 情况六：$r = a(1 \pm \cos\theta)$（心形线）

方程 $r = a(1 + \cos\theta)$ 和 $r = a(1 - \cos\theta)$ 表示心形线（"心形"曲线）。

![心形线 r = a(1+cos θ)](/images/tikz/fp2-polar-cardioid.svg)

**特征：**
- 心形线在 $r = a(1 + \cos\theta)$ 的 $\theta = \pi$ 处和 $r = a(1 - \cos\theta)$ 的 $\theta = 0$ 处有一个尖点
- 到原点的最大距离为 $2a$（第一条曲线在 $\theta = 0$ 处，第二条在 $\theta = \pi$ 处）
- 曲线形状类似心脏或肾脏
- 心形线可以由一个圆在另一个相同半径的圆上滚动时，圆上一点的轨迹生成

### 情况七：$r = a(3 + 2\cos\theta)$（蚶线）

方程 $r = a(3 + 2\cos\theta)$ 表示没有内环的蚶线。

**特征：**
- 这是没有内环的蚶线（因为 $3 > 2$）
- 曲线关于 $x$ 轴对称

### 情况八：$r^2 = a^2\cos 2\theta$（伯努利双纽线）

方程 $r^2 = a^2\cos 2\theta$ 表示伯努利双纽线。

![伯努利双纽线](/images/tikz/fp2-polar-lemniscate.svg)

**特征：**
- 曲线通过原点（自交点）
- 曲线有两个环，每个环从原点延伸距离 $a$
- 曲线仅在 $\cos 2\theta \geq 0$ 时存在，即 $\theta$ 在 $[-\pi/4, \pi/4]$ 或 $[3\pi/4, 5\pi/4]$ 范围内

## 模块四：极坐标中的面积计算

### 核心概念：极坐标面积公式

极坐标中区域的面积由以下公式给出：

$$
A = \int_{\alpha}^{\beta} \frac{1}{2}r^2 \, d\theta
$$

其中区域由以下边界围成：
- 射线 $\theta = \alpha$ 和 $\theta = \beta$
- 曲线 $r = f(\theta)$
- 原点

![极坐标中的面积](/images/tikz/fp2-polar-area-diagram.svg)

### 例题：圆的面积

用极坐标求半径为 $a$ 的圆的面积。

**解答：**

在极坐标中，以原点为圆心、半径为 $a$ 的圆的方程为 $r = a$。面积为：

$$
\begin{aligned}
A &= \int_{0}^{2\pi} \frac{1}{2}r^2 \, d\theta \\
&= \int_{0}^{2\pi} \frac{1}{2}a^2 \, d\theta \\
&= \frac{1}{2}a^2 \int_{0}^{2\pi} d\theta \\
&= \frac{1}{2}a^2 \cdot 2\pi \\
&= \pi a^2
\end{aligned}
$$

这证实了圆面积的著名公式。

### 例题：心形线的面积

求心形线 $r = a(1 + \cos\theta)$ 所围成的面积。

**解答：**

我们需要对整条曲线积分，$\theta$ 从 $0$ 到 $2\pi$：

$$
\begin{aligned}
A &= \int_{0}^{2\pi} \frac{1}{2}r^2 \, d\theta \\
&= \int_{0}^{2\pi} \frac{1}{2}[a(1 + \cos\theta)]^2 \, d\theta \\
&= \frac{a^2}{2}\int_{0}^{2\pi} (1 + 2\cos\theta + \cos^2\theta) \, d\theta
\end{aligned}
$$

利用恒等式 $\cos^2\theta = \frac{1 + \cos 2\theta}{2}$：

$$
\begin{aligned}
A &= \frac{a^2}{2}\int_{0}^{2\pi} \left(1 + 2\cos\theta + \frac{1 + \cos 2\theta}{2}\right) \, d\theta \\
&= \frac{a^2}{2}\int_{0}^{2\pi} \left(\frac{3}{2} + 2\cos\theta + \frac{\cos 2\theta}{2}\right) \, d\theta
\end{aligned}
$$

计算积分：

$$
\begin{aligned}
A &= \frac{a^2}{2}\left[\frac{3\theta}{2} + 2\sin\theta + \frac{\sin 2\theta}{4}\right]_{0}^{2\pi} \\
&= \frac{a^2}{2}\left[\frac{3 \cdot 2\pi}{2} + 0 + 0\right] \\
&= \frac{3\pi a^2}{2}
\end{aligned}
$$

因此，心形线 $r = a(1 + \cos\theta)$ 所围成的面积为 $\frac{3\pi a^2}{2}$。

### 例题：曲线之间的面积

求圆 $r = 3$ 内部且心形线 $r = 1 + \cos\theta$ 外部的区域面积。

## 模块五：极坐标中的切线与斜率

### 核心概念：求切线斜率

对于极坐标中由 $r = f(\theta)$ 给出的曲线，某点处切线的斜率为：

$$
\frac{dy}{dx} = \frac{r'(\theta)\sin\theta + r\cos\theta}{r'(\theta)\cos\theta - r\sin\theta}
$$

其中 $r'(\theta) = \frac{dr}{d\theta}$ 是 $r$ 关于 $\theta$ 的导数。

![极坐标曲线的切线](/images/tikz/fp2-polar-tangent.svg)

**推导：**

极坐标曲线的参数方程为：

$$
\begin{aligned}
x &= r\cos\theta \\
y &= r\sin\theta
\end{aligned}
$$

对 $\theta$ 求导：

$$
\begin{aligned}
\frac{dx}{d\theta} &= \frac{dr}{d\theta}\cos\theta - r\sin\theta \\
\frac{dy}{d\theta} &= \frac{dr}{d\theta}\sin\theta + r\cos\theta
\end{aligned}
$$

切线的斜率为：

$$
\begin{aligned}
\frac{dy}{dx} &= \frac{dy/d\theta}{dx/d\theta} \\
&= \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}
\end{aligned}
$$

### 例题：求某点处的斜率

求心形线 $r = 1 + \cos\theta$ 在 $\theta = \pi/3$ 处的切线斜率。

**解答：**

首先，求 $\theta = \pi/3$ 处的 $r$ 和 $r'(\theta)$：

$$
\begin{aligned}
r &= 1 + \cos(\pi/3) = 1 + \frac{1}{2} = \frac{3}{2} \\
r'(\theta) &= -\sin\theta \\
r'(\pi/3) &= -\sin(\pi/3) = -\frac{\sqrt{3}}{2}
\end{aligned}
$$

现在计算斜率：

$$
\begin{aligned}
\frac{dy}{dx} &= \frac{r'(\theta)\sin\theta + r\cos\theta}{r'(\theta)\cos\theta - r\sin\theta} \\
&= \frac{-\frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{3}{2} \cdot \frac{1}{2}}{-\frac{\sqrt{3}}{2} \cdot \frac{1}{2} - \frac{3}{2} \cdot \frac{\sqrt{3}}{2}} \\
&= \frac{-\frac{3}{4} + \frac{3}{4}}{-\frac{\sqrt{3}}{4} - \frac{3\sqrt{3}}{4}} \\
&= \frac{0}{-\sqrt{3}} \\
&= 0
\end{aligned}
$$

因此，在 $\theta = \pi/3$ 处的切线是水平的。

### 求水平切线和垂直切线的位置

对于曲线 $r = f(\theta)$：

**水平切线**（$\frac{dy}{dx} = 0$）：

$$
r'(\theta)\sin\theta + r\cos\theta = 0
$$

**垂直切线**（$\frac{dy}{dx} = \infty$）：

$$
r'(\theta)\cos\theta - r\sin\theta = 0
$$

这些方程可用于求极坐标曲线上的特殊点。

### 综合练习：切线与面积

:::note[综合练习]
考虑曲线方程 $r = 2 + \sqrt{2}\sin\theta$。

(a) 求曲线上所有切线水平的点。

(b) 绘制曲线，清楚标出水平切线的位置。

(c) 求以下区域围成的面积：
- 曲线 $r = 2 + \sqrt{2}\sin\theta$
- 从原点出发经过 (a) 中求得的水平切线点的射线（$\pi < \theta < 2\pi$ 范围内）
:::

**解答 (a)：**

对于曲线 $r = 2 + \sqrt{2}\sin\theta$，我们需要求切线水平的位置。极坐标曲线的水平切线出现在：

$$
r'(\theta)\sin\theta + r\cos\theta = 0
$$

求 $r'(\theta)$：

$$
r'(\theta) = \sqrt{2}\cos\theta
$$

代入水平切线条件：

$$
\sqrt{2}\cos\theta\sin\theta + (2 + \sqrt{2}\sin\theta)\cos\theta = 0
$$

提取公因式 $\cos\theta$：

$$
\cos\theta[\sqrt{2}\sin\theta + 2 + \sqrt{2}\sin\theta] = 0
$$

$$
\cos\theta[2\sqrt{2}\sin\theta + 2] = 0
$$

这意味着：

- $\cos\theta = 0$，在 $\theta = \frac{\pi}{2}$ 和 $\theta = \frac{3\pi}{2}$ 处，或
- $2\sqrt{2}\sin\theta + 2 = 0$，即 $\sin\theta = -\frac{1}{\sqrt{2}} = -\frac{\sqrt{2}}{2}$

第二个条件在区间 $[0, 2\pi)$ 内给出 $\theta = \frac{5\pi}{4}$ 和 $\theta = \frac{7\pi}{4}$。

**解答 (b)：**

曲线上的关键点：

| $\theta$ | $r = 2 + \sqrt{2}\sin\theta$ | 备注 |
|---|---|---|
| $0$ | $2$ | |
| $\pi/2$ | $2 + \sqrt{2} \approx 3.41$ | 水平切线 |
| $\pi$ | $2$ | |
| $3\pi/2$ | $2 - \sqrt{2} \approx 0.59$ | 水平切线 |
| $5\pi/4$ | $1$ | 水平切线 |
| $7\pi/4$ | $1$ | 水平切线 |

**解答 (c)：**

$\pi < \theta < 2\pi$ 范围内的水平切线在 $\theta = \frac{5\pi}{4}$ 和 $\theta = \frac{7\pi}{4}$ 处。

使用极坐标面积公式：

$$
A = \int_{\frac{5\pi}{4}}^{\frac{7\pi}{4}} \frac{1}{2}(2 + \sqrt{2}\sin\theta)^2 \, d\theta
$$

展开被积函数：

$$
(2 + \sqrt{2}\sin\theta)^2 = 4 + 4\sqrt{2}\sin\theta + 2\sin^2\theta
$$

利用恒等式 $\sin^2\theta = \frac{1 - \cos 2\theta}{2}$：

$$
(2 + \sqrt{2}\sin\theta)^2 = 4 + 4\sqrt{2}\sin\theta + 1 - \cos 2\theta = 5 + 4\sqrt{2}\sin\theta - \cos 2\theta
$$

因此：

$$
\begin{aligned}
A &= \frac{1}{2}\int_{\frac{5\pi}{4}}^{\frac{7\pi}{4}} (5 + 4\sqrt{2}\sin\theta - \cos 2\theta) \, d\theta \\
&= \frac{1}{2}\left[5\theta - 4\sqrt{2}\cos\theta - \frac{\sin 2\theta}{2}\right]_{\frac{5\pi}{4}}^{\frac{7\pi}{4}}
\end{aligned}
$$

在上下限处求值：

$\theta = \frac{7\pi}{4}$ 处：$5\theta = \frac{35\pi}{4}$，$\;-4\sqrt{2}\cos\theta = -4$，$\;-\frac{\sin 2\theta}{2} = \frac{1}{2}$

$\theta = \frac{5\pi}{4}$ 处：$5\theta = \frac{25\pi}{4}$，$\;-4\sqrt{2}\cos\theta = 4$，$\;-\frac{\sin 2\theta}{2} = -\frac{1}{2}$

代入：

$$
\begin{aligned}
A &= \frac{1}{2}\left[\frac{35\pi}{4} - 4 + \frac{1}{2} - \left(\frac{25\pi}{4} + 4 - \frac{1}{2}\right)\right] \\
&= \frac{1}{2}\left[\frac{10\pi}{4} - 7\right] \\
&= \frac{1}{2}\left[\frac{5\pi}{2} - 7\right] \\
&= \frac{5\pi - 14}{4}
\end{aligned}
$$

因此，该区域的面积为 $\frac{5\pi - 14}{4}$ 平方单位。

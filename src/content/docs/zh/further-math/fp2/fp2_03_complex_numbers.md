---
title: "FP2 第三章：复数与棣莫弗定理"
---

## FP2 讲义：复数与棣莫弗定理

## 复习：复数基础

:::note[快速复习练习]
对于下列每个复数 $z$：
- 求其模 $|z|$
- 求其辐角 $\arg(z)$（主值）
- 求其共轭复数 $\overline{z}$
- 在阿甘图上标出

a) $z_1 = 3 + 4i$

b) $z_2 = -2 - 2i$

c) $z_3 = -3$
:::

## 模块一：指数形式与欧拉公式

### 几何解释

:::note[核心概念：复数与旋转]
**把复数想象成箭头**

每个复数就像从原点出发的一支箭。箭的长度是模 $|z|$，与正实轴的夹角是辐角 $\arg(z)$。

**两个复数相乘时：**

- 箭的长度相乘：$|z_1z_2| = |z_1||z_2|$
- 角度相加：$\arg(z_1z_2) = \arg(z_1) + \arg(z_2)$

**传统 $a+bi$ 形式的局限**

相乘时，我们无法直接看出几何意义。例如，$z_1 = a + bi$ 和 $z_2 = c + di$ 的乘积结果很复杂，难以把握其几何含义。使用极坐标形式（模和角度）能更清晰地展示复数乘法对应的几何旋转和缩放。

**欧拉公式：两种形式之间的桥梁**

$$
e^{i\theta} = \cos \theta + i\sin \theta
$$

这意味着任何复数都可以写成：

$$
z = re^{i\theta} \text{，其中 } r = |z| \text{，} \theta = \arg(z)
$$

**简单记忆规则：**
- 乘以 $e^{i\theta}$ 旋转角度 $\theta$
- 乘以正实数 $r$ 拉伸 $r$ 倍
- 乘以 $re^{i\theta}$ 同时做两件事
:::

![阿甘图：模与辐角](/images/tikz/fp2-complex-argand.svg)

### 例题 1：形式转换

将下列复数写成指数形式 $re^{i\theta}$：

1. $1 + i$
2. $-2i$
3. $-1 - \sqrt{3}i$

### 例题 2：幂与指数形式

证明 $z^n + \frac{1}{z^n} = 2\cos n \theta$，其中 $n$ 为正整数，$z = e^{i\theta}$。

### 例题 3：解复数方程

解方程 $z^5 - 32i = 0$，将每个答案写成 $re^{i\theta}$ 的形式，其中 $0 < \theta < 2\pi$。

:::note[要点]
1. 指数形式 $re^{i\theta}$ 将缩放（$r$）和旋转（$\theta$）优雅地结合在一个表达式中
2. 处理幂运算时，指数形式通常比笛卡尔形式更方便
3. 对于 $n$ 次方根：
   - 若 $z = re^{i\theta}$，则 $z^{1/n} = r^{1/n}e^{i(\theta + 2\pi k)/n}$
   - 总有 $n$ 个不同的 $n$ 次方根
   - 这些根在复平面上构成正 $n$ 边形
:::

## 模块二：棣莫弗定理

:::note[历史背景]
棣莫弗定理由亚伯拉罕·棣莫弗（1667–1754）于 1722 年发现，早于欧拉公式的建立。虽然今天我们常用欧拉公式来证明它，但棣莫弗最初是用数学归纳法证明的。这个历史事实提醒我们，数学证明往往有多种有效方法。

该定理于 1730 年首次以完整形式发表，成为复分析和三角学中的重要工具。有趣的是，棣莫弗是在研究复数幂的模式时发现这个定理的，这说明数学发现往往源于对模式的观察。
:::

### 定理：棣莫弗定理

对于任意实数 $\theta$ 和任意整数 $n$：

$$
(\cos \theta + i\sin \theta)^n = \cos(n\theta) + i\sin(n\theta)
$$

**欧拉公式证明：**

1. 由欧拉公式，$\cos \theta + i\sin \theta = e^{i\theta}$
2. 因此，$(\cos \theta + i\sin \theta)^n = (e^{i\theta})^n = e^{in\theta}$
3. 再由欧拉公式，$e^{in\theta} = \cos(n\theta) + i\sin(n\theta)$

**数学归纳法证明：**

设 $P(n)$ 为命题：$(\cos \theta + i\sin \theta)^n = \cos(n\theta) + i\sin(n\theta)$。

1. **基础情况：** 当 $n=1$ 时，命题显然成立。
2. **归纳步骤：** 假设 $P(k)$ 对某个正整数 $k$ 成立。则：

$$
\begin{aligned}
(\cos \theta + i\sin \theta)^{k+1} &= (\cos \theta + i\sin \theta)^k(\cos \theta + i\sin \theta) \\
&= [\cos(k\theta) + i\sin(k\theta)][\cos \theta + i\sin \theta] \\
&= [\cos(k\theta)\cos \theta - \sin(k\theta)\sin \theta] \\
&\quad + i[\sin(k\theta)\cos \theta + \cos(k\theta)\sin \theta] \\
&= \cos((k+1)\theta) + i\sin((k+1)\theta)
\end{aligned}
$$

3. 因此，由数学归纳法，$P(n)$ 对所有正整数 $n$ 成立。

### 例题 4：三角恒等式的应用

证明 $\cos 5x \equiv \cos x(16\sin^4 x - 12\sin^2 x + 1)$。

### 例题 5：复数方程的应用

利用上一题的结果，解方程

$$
\cos 5\theta = \sin 2\theta \sin \theta - \cos \theta
$$

其中 $0 < \theta < \dfrac{\pi}{2}$。

## 模块三：考试题型与应用

:::note[常见题型]
**题型一：求 $n$ 次方根**

已知 $z^n = a + bi$，求所有 $z$ 的值。

关键步骤：
1. 将 $a + bi$ 转换为 $re^{i\theta}$ 形式
2. 使用 $z = r^{1/n}e^{i(\theta + 2\pi k)/n}$，$k = 0,1,\ldots,n-1$
3. 按要求的形式写出答案（$re^{i\theta}$ 或 $a + bi$）

**题型二：倍角公式**

证明 $\cos n\theta = f(\cos \theta)$ 或 $\sin n\theta = f(\sin \theta)$ 之类的恒等式。

关键步骤：
1. 应用棣莫弗定理得到 $(\cos \theta + i \sin \theta)^n = \cos(n\theta) + i \sin(n\theta)$
2. 用二项式定理展开
3. 比较实部和虚部

**题型三：三角函数的幂**

将 $\cos^n \theta$ 或 $\sin^n \theta$ 表示为倍角形式。

关键步骤：
1. 利用 $z = e^{i\theta}$ 和 $\frac{1}{z} = e^{-i\theta}$
2. 表示 $\cos \theta = \frac{z + \frac{1}{z}}{2}$，$\sin \theta = \frac{z - \frac{1}{z}}{2i}$
3. 展开并合并同类项
4. 转换回三角形式

**应用一：利用棣莫弗积分**

对于涉及正弦和余弦幂的积分：
1. 用棣莫弗转换为倍角形式
2. 积分变得简单直接

**应用二：解方程**

对于涉及三角函数的方程：
1. 用棣莫弗转换为更简单的形式
2. 通常化为关于 $\sin \theta$ 或 $\cos \theta$ 的多项式
3. 解所得方程
4. 在给定范围内检验解

对于多项式方程：
1. 有时可以通过代换 $x = \tan \theta$ 求解
2. 使用棣莫弗的倍角公式
3. 转换回原变量
:::

### 例题 6：乘积与幂

**第一部分：** 证明

$$
\left(z + \frac{1}{z}\right)^3 \left(z - \frac{1}{z}\right)^3 = z^6 - \frac{1}{z^6} - k\left(z^2 - \frac{1}{z^2}\right)
$$

其中 $k$ 为某常数。

**第二部分：** 已知 $z = \cos \theta + i\sin \theta$，证明：

(i) $z^n + \dfrac{1}{z^n} = 2\cos n\theta$

(ii) $z^n - \dfrac{1}{z^n} = 2i\sin n\theta$

**第三部分：** 由此证明：

$$
\cos^3 \theta \sin^3 \theta = \frac{1}{32}(3\sin 2\theta - \sin 6\theta)
$$

**第四部分：** 求

$$
\int_0^{\frac{\pi}{8}} \cos^3 \theta \sin^3 \theta \, d\theta
$$

的精确值。

### 例题 7：解方程

利用棣莫弗定理证明

$$
\tan 4\theta = \frac{4\tan \theta - 4\tan^3 \theta}{1 - 6\tan^2 \theta + \tan^4 \theta}
$$

**应用：** 利用此结果解方程 $x^4 + 2x^3 - 6x^2 - 2x + 1 = 0$。

## 课后练习

### 练习一：复数幂运算

设 $z = -8 + (8\sqrt{3})i$。

(a) 求 $z$ 的模和辐角。

(b) 利用棣莫弗定理，求 $z^3$。

(c) 求满足 $w^4 = z$ 的所有 $w$ 值，将答案写成 $a + ib$ 的形式，其中 $a, b \in \mathbb{R}$。

:::tip[提示]
- 对于 (a)，记住 $|z| = \sqrt{a^2 + b^2}$，$\arg(z) = \arctan(\frac{b}{a})$，注意象限调整
- 对于 (b)，先将 $z$ 写成 $re^{i\theta}$ 的形式
- 对于 (c)，利用若 $w^4 = re^{i\theta}$，则 $w = r^{\frac{1}{4}}e^{i(\theta + 2\pi k)/4}$，$k = 0,1,2,3$
:::

### 练习二：倍角公式

(a) 利用棣莫弗定理证明

$$
\sin 5\theta = 16\sin^5 \theta - 20\sin^3 \theta + 5\sin \theta
$$

(b) 由此，已知 $\sin 3\theta = 3\sin \theta - 4\sin^3 \theta$，求方程

$$
\sin 5\theta = 5\sin 3\theta
$$

在区间 $0 \leq \theta < 2\pi$ 内的所有解，答案保留三位小数。

:::tip[提示]
- 对于 (a)，从 $(e^{i\theta})^5$ 出发，取虚部
- 对于 (b)：
  - 代入已知的 $\sin 3\theta$ 公式
  - 合并同类项，得到关于 $\sin \theta$ 的多项式
  - 考虑 $\sin \theta = 0$ 的情况
  - 对于其他解，解所得多项式方程
:::

### 挑战题：证明欧拉公式

**用微分方程证明欧拉公式**

让我们用微分方程证明 $e^{ix} = \cos x + i\sin x$。

**预备知识：**

- 复值函数的求导规则与实函数相同
- 若 $f(x) = u(x) + iv(x)$，其中 $u$ 和 $v$ 是实函数，则：

$$
f'(x) = u'(x) + iv'(x)
$$

- 常函数的导数为零；若 $f'(x) = 0$ 对所有 $x$ 成立且 $f$ 连续，则 $f$ 为常数

**问题：** 按以下步骤证明欧拉公式：

1. 设 $f(x) = e^{ix}$，$g(x) = \cos x + i\sin x$。证明：

$$
\begin{aligned}
f'(x) &= ie^{ix} \\
g'(x) &= -\sin x + i\cos x = i(\cos x + i\sin x) = ig(x)
\end{aligned}
$$

2. 证明 $f$ 和 $g$ 都满足微分方程 $y' = iy$。
3. 证明 $f(0) = g(0) = 1$。
4. 设 $h(x) = f(x) - g(x)$。证明 $h'(x) = ih(x)$ 且 $h(0) = 0$。
5. 考虑 $k(x) = h(x)e^{-ix}$。证明 $k'(x) = 0$。
6. 利用导数为零的连续函数必为常数，且 $k(0) = 0$，推出 $k(x) = 0$ 对所有 $x$ 成立。
7. 因此 $h(x) = 0$ 对所有 $x$ 成立，即 $f(x) = g(x)$ 对所有 $x$ 成立。

:::tip[关键洞察]
- 此证明利用了一阶线性微分方程的唯一性定理
- 函数 $k(x)$ 的构造巧妙地使其导数为零
- 初始条件 $f(0) = g(0) = 1$ 对证明至关重要
:::

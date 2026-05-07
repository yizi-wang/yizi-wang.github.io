---
title: "FP3 第四章：积分"
---

# FP3 讲义：积分

## 先备知识检查

在开始之前，让我们回顾一些微分学习中的关键概念：

:::tip[练习：链式法则与复合函数]
求以下函数的 $\frac{dy}{dx}$：

1. $y = \sin(\operatorname{arcosh} x)$
2. $y = \arctan(e^x)$
3. $y = \ln(\sqrt{1-x^2})$
:::

:::note[参考：积分与微分公式]

**三角函数**

| $f(x)$ | $\int f(x)\,dx$ | $f'(x)$ |
|---|---|---|
| $\tan x$ | $\ln\|\sec x\|$ | $\sec^2 x$ |
| $\cot x$ | $\ln\|\sin x\|$ | $-\operatorname{cosec}^2 x$ |
| $\sec x$ | | $\sec x\tan x$ |
| $\operatorname{cosec} x$ | | $-\operatorname{cosec} x\cot x$ |
| $\arcsin x$ | | $\frac{1}{\sqrt{1-x^2}}$ |
| $\arccos x$ | | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | | $\frac{1}{1+x^2}$ |

**双曲函数**

| $f(x)$ | $\int f(x)\,dx$ | $f'(x)$ |
|---|---|---|
| $\tanh x$ | $\ln\cosh x$ | $\operatorname{sech}^2 x$ |
| $\coth x$ | $\ln\|\sinh x\|$ | $-\operatorname{csch}^2 x$ |
| $\operatorname{sech} x$ | | $-\operatorname{sech} x\tanh x$ |
| $\operatorname{csch} x$ | | $-\operatorname{csch} x\coth x$ |
| $\operatorname{arsinh} x$ | | $\frac{1}{\sqrt{x^2+1}}$ |
| $\operatorname{arcosh} x$ | | $\frac{1}{\sqrt{x^2-1}}$ |
| $\operatorname{artanh} x$ | | $\frac{1}{1-x^2}$ |

**标准积分形式**

| 形式 | 积分 | 条件 |
|---|---|---|
| $\frac{1}{\sqrt{a^2-x^2}}$ | $\arcsin(\frac{x}{a})$ | $\|x\| < a$ |
| $\frac{1}{a^2+x^2}$ | $\frac{1}{a}\arctan(\frac{x}{a})$ | |
| $\frac{1}{\sqrt{x^2-a^2}}$ | $\operatorname{arcosh}(\frac{x}{a})$ | $\|x\| > a$ |
| $\frac{1}{\sqrt{x^2+a^2}}$ | $\operatorname{arsinh}(\frac{x}{a})$ | |
| $\frac{1}{a^2-x^2}$ | $\frac{1}{a}\operatorname{artanh}(\frac{x}{a})$ | $\|x\| < a$ |
| $\frac{1}{x^2-a^2}$ | $\frac{1}{2a}\ln\|\frac{x-a}{x+a}\|$ | $\|x\| > a$ |

**要点：**

- 注意定义域限制
- 注意三角函数和双曲函数形式的相似性
- 记住某些形式需要先配完全平方
- 留意换元的机会
:::

## 1. 积分回顾

### 1.1 积分作为累积

:::note[定义：定积分]
对于区间 $[a, b]$ 上的连续函数 $f$，定积分 $\int_a^b f(x)\,dx$ 表示量 $f$ 在区间 $[a, b]$ 上的净累积。几何上，它表示曲线 $y = f(x)$ 与 $x$ 轴之间的有符号面积。
:::

:::caution[常见误解]
许多学生仅将积分视为"反微分"或"找到导数为 $f(x)$ 的函数"。虽然这通过微积分基本定理与积分相关，但它遗漏了积分作为累积或求和过程的更深层含义。

考虑质点的速度 $v(t)$。在时间 $[a, b]$ 上的位移为：

$$\int_a^b v(t)\,dt$$

这表示瞬时速度的累积，而不仅仅是"撤销"微分。
:::

:::note[定理：微积分基本定理]
设 $f$ 在 $[a, b]$ 上连续。则：

1. 若定义 $F(x) = \int_a^x f(t)\,dt$，则 $F'(x) = f(x)$
2. 若 $G$ 是 $f$ 的任意原函数（即 $G' = f$），则：

   $$\int_a^b f(x)\,dx = G(b) - G(a)$$
:::

### 1.2 换元法则：链式法则的推论

:::note[定理：换元法则]
若 $u = g(x)$ 可微且 $f$ 连续，则：

$$\int f(g(x))g'(x)\,dx = \int f(u)\,du$$
:::

:::note[证明]
设 $F$ 是 $f$ 的一个原函数。则：

- 由链式法则，$\frac{d}{dx}[F(g(x))] = F'(g(x))g'(x) = f(g(x))g'(x)$
- 因此 $F(g(x))$ 是 $f(g(x))g'(x)$ 的原函数
- 类似地，$F(u)$ 是 $f(u)$ 的原函数
- 换元 $u = g(x)$ 将一个转化为另一个
:::

:::note[例题]
用换元法求 $\int \cos(2x)\,dx$。
:::

### 1.3 分部积分：乘积法则的逆用

:::note[定理：分部积分]
对于可微函数 $u$ 和 $v$：

$$\int u\,dv = uv - \int v\,du$$
:::

:::note[证明]
由乘积法则：

$$\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$$

两边积分：

$$uv = \int u\frac{dv}{dx}\,dx + \int v\frac{du}{dx}\,dx$$

整理并使用微分记号：

$$\int u\,dv = uv - \int v\,du$$
:::

:::note[例题]

**(a)** 对 $x$ 求 $x \operatorname{arcosh} 5x$ 的导数。

**(b)** 由此或用其他方法证明

$$\int_{\frac{1}{4}}^{\frac{3}{5}} \operatorname{arcosh} 5x \, dx = \frac{3}{20} - \frac{2\sqrt{2}}{5} + \ln(p + q\sqrt{2})^k - \frac{1}{4}\ln r$$

其中 $p$、$q$、$k$ 和 $r$ 为待定有理数。
:::

## 2. 有理函数的积分

### 2.1 配完全平方

:::note[例题]
已知 $4x^2 + 4x + 17 \equiv (2x + p)^2 + q$，其中 $p$ 和 $q$ 为整数：

**(a)** 求 $p$ 和 $q$ 的值。

**(b)** 由此用代数积分法证明

$$\int \frac{8x + 5}{\sqrt{4x^2 + 4x + 17}}\, dx = 2\sqrt{4x^2 + 4x + 17} + \frac{1}{2}\ln(2x + 1 + \sqrt{4x^2 + 4x + 17})$$
:::

### 2.2 部分分式分解

:::note[定理：部分分式]
任何真有理函数 $\frac{sx+r}{x^2+px+q}$ 可以分解为：

1. 线性因子：$\frac{A}{x-a}$
2. 重复线性因子：$\frac{A}{(x-a)^n}$
3. 不可约二次因子：$\frac{Ax+B}{x^2+px+q}$
:::

:::note[例题]
求 $\int \frac{2x+3}{x^2+4x+3}\, dx$
:::

## 3. 高级换元技巧

### 3.1 三角换元

:::note[关键洞察：三角换元]
当积分涉及二次表达式的平方根时，表达式的形式暗示了应使用哪种三角换元：

- 对于 $\sqrt{a^2 - x^2}$：使用 $x = a\sin\theta$ 或 $x = a\cos\theta$
- 对于 $\sqrt{x^2 + a^2}$：使用 $x = a\tan\theta$
- 对于 $\sqrt{x^2 - a^2}$：使用 $x = a\sec\theta$
:::

:::note[例题：基本三角换元]
求 $\int \frac{dx}{\sqrt{1-x^2}}$。
:::

### 3.2 双曲换元

:::note[关键洞察：双曲换元]
双曲换元在处理以下情况时特别有用：

- 对于 $\sqrt{x^2 - a^2}$：使用 $x = a\cosh\theta$（当 $|x| > a$ 时）
- 对于 $\sqrt{x^2 + a^2}$：使用 $x = a\sinh\theta$
- 对于 $\sqrt{a^2 - x^2}$：使用 $x = a\tanh\theta$（当 $|x| < a$ 时）

这些换元与三角换元类似，但通常更适合某些类型的表达式。
:::

:::note[例题：Q04 WFM03/01，2021年1月]
利用换元 $x = 4\cosh\theta$ 证明

$$\int \frac{1}{(x^2 - 16)^{3/2}}\, dx = \frac{ax}{\sqrt{x^2 - 16}} + c, \qquad |x| > 4$$

**提示：** $\frac{d}{dx}(\coth x) = -\operatorname{csch}^2 x$
:::

### 3.3 代数换元与参数化

:::note[例题：Q08 WFM03/01，2021年10月]
已知 $y = \arccos(2\sqrt{x})$：

**(a)** 求 $\frac{dy}{dx}$。

**(b)** 证明

$$\int y \, dx = x \arccos(2\sqrt{x}) + \int \frac{\sqrt{x}}{\sqrt{1-4x}} \, dx$$

**(c)** 利用换元 $\sqrt{x} = \frac{1}{2}\cos\theta$ 证明

$$\int_0^{\frac{1}{8}} \frac{\sqrt{x}}{\sqrt{1-4x}}\, dx = \frac{1}{4} \int_a^b \cos^2\theta\, d\theta$$

其中 $a$ 和 $b$ 为待定积分限。

**(d)** 由此求

$$\int_0^{\frac{1}{8}} \arccos(2\sqrt{x})\, dx$$

的精确值。
:::

## 4. 高级分部积分

### 4.1 反函数的积分

:::note[例题：$\arccos x$ 的积分]
求 $\int \arccos x\,dx$。

**提示：** 令 $u = \arccos x$，$v = x$，应用分部积分。
:::

:::note[例题：$\operatorname{arcosh} x$ 的积分]
求 $\int \operatorname{arcosh} x\,dx$，其中 $x > 1$。

**注：** 与 $\arccos$ 积分比较——观察形式的相似性和符号的差异。
:::

:::note[$e^x\sin^n x$ 型积分的策略]
当积分指数函数与三角函数的乘积时：

1. 选择指数部分或三角部分作为 $u$
2. 选择会影响后续步骤的复杂度
3. 寻找可能导致递推公式的模式
:::

:::note[例题：$\int e^x\sin^2 x\,dx$]

1. 令 $u = \sin^2 x$，$dv = e^x\,dx$

2. 则 $du = 2\sin x\cos x\,dx$，$v = e^x$

3. 利用分部积分：

   $$
   \begin{aligned}
   \int e^x\sin^2 x\,dx &= e^x\sin^2 x - \int e^x(2\sin x\cos x)\,dx \\
   &= e^x\sin^2 x - 2\int e^x\sin x\cos x\,dx
   \end{aligned}
   $$

4. 对剩余积分，令 $u = \sin x$，$dv = e^x\cos x\,dx$：

   $$
   \begin{aligned}
   \int e^x\sin x\cos x\,dx &= e^x\sin x\cos x - \int e^x(\cos^2 x - \sin^2 x)\,dx \\
   &= e^x\sin x\cos x - \int e^x\,dx + 2\int e^x\sin^2 x\,dx
   \end{aligned}
   $$

5. 代回：

   $$\int e^x\sin^2 x\,dx = e^x\sin^2 x - 2[e^x\sin x\cos x - e^x + 2\int e^x\sin^2 x\,dx]$$

6. 令 $I = \int e^x\sin^2 x\,dx$。则：

   $$
   \begin{aligned}
   I &= e^x\sin^2 x - 2[e^x\sin x\cos x - e^x + 2I] \\
   I &= e^x\sin^2 x - 2e^x\sin x\cos x + 2e^x - 4I \\
   5I &= e^x\sin^2 x - 2e^x\sin x\cos x + 2e^x \\
   I &= \frac{e^x}{5}(2 + \sin^2 x - 2\sin x\cos x) + C
   \end{aligned}
   $$
:::

### 4.2 递推公式

:::note[递推公式简介]
递推公式是积分之间的关系，允许我们将复杂积分化简为更简单的积分。基本思路是：

1. 将积分表示为同类型更简单积分的形式
2. 重复使用公式直到达到已知积分
3. 合并结果得到最终答案
:::

:::note[例题：$x^n e^x$ 的递推公式]
设 $J_n = \int x^n e^x\,dx$。求递推公式并用它计算 $\int x^3 e^x\,dx$。

**(i)** 用分部积分，令 $u = x^n$，$dv = e^x\,dx$：

$$
\begin{aligned}
J_n &= x^n e^x - n\int x^{n-1} e^x\,dx \\
&= x^n e^x - nJ_{n-1}
\end{aligned}
$$

**(ii)** 对于 $\int x^3 e^x\,dx$：

$$
\begin{aligned}
J_3 &= x^3 e^x - 3J_2 \\
J_2 &= x^2 e^x - 2J_1 \\
J_1 &= xe^x - J_0 \\
J_0 &= e^x
\end{aligned}
$$

**(iii)** 因此：

$$
\begin{aligned}
J_3 &= x^3 e^x - 3(x^2 e^x - 2(xe^x - e^x)) \\
&= e^x(x^3 - 3x^2 + 6x - 6)
\end{aligned}
$$
:::

:::note[例题：$\sin^n x$ 的递推公式]
设 $I_n = \int \sin^n x\,dx$。求 $I_n$ 的递推公式并用它计算 $\int \sin^4 x\,dx$。

**(i)** 令 $u = \sin^{n-1} x$，$dv = \sin x\,dx$。

**(ii)** 则 $du = (n-1)\sin^{n-2} x\cos x\,dx$，$v = -\cos x$。

**(iii)** 利用分部积分：

$$
\begin{aligned}
I_n &= \int \sin^n x\,dx = \int \sin^{n-1} x\sin x\,dx \\
&= -\sin^{n-1} x\cos x + (n-1)\int \sin^{n-2} x\cos^2 x\,dx
\end{aligned}
$$

**(iv)** 利用 $\cos^2 x = 1 - \sin^2 x$：

$$
\begin{aligned}
I_n &= -\sin^{n-1} x\cos x + (n-1)\int \sin^{n-2} x(1 - \sin^2 x)\,dx \\
&= -\sin^{n-1} x\cos x + (n-1)I_{n-2} - (n-1)I_n
\end{aligned}
$$

**(v)** 因此：

$$
\begin{aligned}
nI_n &= -\sin^{n-1} x\cos x + (n-1)I_{n-2} \\
I_n &= -\frac{1}{n}\sin^{n-1} x\cos x + \frac{n-1}{n}I_{n-2}
\end{aligned}
$$

**(vi)** 对于 $\int \sin^4 x\,dx$：

$$
\begin{aligned}
I_4 &= -\frac{1}{4}\sin^3 x\cos x + \frac{3}{4}I_2 \\
I_2 &= -\frac{1}{2}\sin x\cos x + \frac{1}{2}x
\end{aligned}
$$

因此：

$$
\begin{aligned}
I_4 &= -\frac{1}{4}\sin^3 x\cos x + \frac{3}{4}\left(-\frac{1}{2}\sin x\cos x + \frac{1}{2}x\right) \\
&= -\frac{1}{4}\sin^3 x\cos x - \frac{3}{8}\sin x\cos x + \frac{3}{8}x
\end{aligned}
$$
:::

:::note[递推公式的类型]
递推公式通常以以下几种形式出现：

1. 三角幂次：$\int \sin^n x\,dx$，$\int \cos^n x\,dx$
2. 混合函数：$\int e^x\sin^n x\,dx$
3. 带根式的有理函数：$\int \frac{x^n}{\sqrt{a^2 \pm x^2}}\,dx$
4. 复合函数：$\int x^n f(x^m)\,dx$
:::

:::note[例题：带根式的有理函数的递推公式]
对于 $I_n = \int \frac{x^n}{\sqrt{10 - x^2}}\, dx$，证明：

$$nI_n = 10(n-1)I_{n-2} - x^{n-1}\sqrt{10 - x^2}, \qquad n \geq 2$$

**策略：**

1. 将 $x^n$ 拆分为 $x \cdot x^{n-1}$ 以使用分部积分
2. 寻找可以合并为原积分的项
:::

:::note[例题：混合函数的递推公式]
对于 $I_n = \int e^x \sin^n x\,dx$，证明：

$$I_n = \frac{e^x \sin^{n-1} x}{n^2 + 1}(\sin x - n\cos x) + \frac{n(n-1)}{n^2 + 1}I_{n-2}, \qquad n \geq 2$$

**策略：**

1. 使用两次分部积分
2. 寻找会回到原积分的模式
3. 收集含 $I_n$ 和 $I_{n-2}$ 的项
:::

:::note[例题：复合函数的递推公式]
对于 $I_n = \int_0^{\sqrt{\pi/2}} x^n \cos(x^2)\,dx$，证明：

$$I_n = \frac{1}{2}\left(\frac{\pi}{2}\right)^{\frac{n-1}{2}} - \frac{1}{4}(n-1)(n-3)I_{n-4}, \qquad n \geq 5$$

**策略：**

1. 将 $x^n$ 拆分为 $x^{n-1} \cdot x$ 以使用分部积分
2. 寻找使用换元 $u = x^2$ 的机会
3. 计算边界项时注意积分限

**应用：** 求 $I_5$。
:::

:::tip[递推公式技巧]
1. 始终寻找暗示分部积分的模式
2. 处理幂次时，尝试拆分为更低的幂次
3. 对于混合函数，考虑对哪部分求导
4. 留意使用标准恒等式的机会
5. 注意定义域限制
6. 记得验证初始条件
:::

## 5. 积分的应用

### 5.1 弧长

:::note[定理：弧长公式]
曲线 $y = f(x)$ 从 $x = a$ 到 $x = b$ 的长度为：

$$L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\, dx$$
:::

![弧长元素 ds](/images/fp3-arc-length.svg)

:::note[证明一：利用微小线段]
考虑曲线的一个微小线段：

- 水平位移为 $dx$
- 垂直位移为 $dy$
- 由勾股定理，线段长度 $ds$ 为：

  $$ds = \sqrt{(dx)^2 + (dy)^2} = \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$$

- 当 $dx \to 0$ 时，总长度为所有此类线段之和：

  $$L = \int_a^b ds = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\, dx$$
:::

:::note[证明二：利用参数化]
考虑曲线的参数表示：

$$x = x(t), \quad y = y(t), \quad a \leq t \leq b$$

- 速度矢量为 $\vec{v}(t) = (x'(t), y'(t))$
- 速率为 $|\vec{v}(t)| = \sqrt{(x'(t))^2 + (y'(t))^2}$
- 弧长为速率的积分：

  $$L = \int_a^b \sqrt{(x'(t))^2 + (y'(t))^2}\, dt$$

- 对于 $y = f(x)$，可取 $t = x$ 为参数：$x = t,\ y = f(t) \implies x'(t) = 1,\ y'(t) = f'(t)$
- 这给出：

  $$L = \int_a^b \sqrt{1 + (f'(x))^2}\, dx = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\, dx$$
:::

:::note[例题：半圆的弧长]
曲线 C 的方程为 $y = \sqrt{9 - x^2}$，$0 \leq x \leq 3$。求其长度。

**(i)** $\frac{dy}{dx} = -\frac{x}{\sqrt{9-x^2}}$

**(ii)** 弧长为：

$$\int_0^3 \sqrt{1 + \frac{x^2}{9-x^2}}\, dx = \int_0^3 \sqrt{\frac{9}{9-x^2}}\, dx = \int_0^3 \frac{3}{\sqrt{9-x^2}}\, dx = \left[3\arcsin\left(\frac{x}{3}\right)\right]_0^3$$

**(iii)** 因此：

$$L = 3\arcsin(1) - 3\arcsin(0) = \frac{3\pi}{2}$$
:::

:::note[例题：含自然对数的弧长]
曲线 C 的方程为 $y = 2 + \ln(1 - x^2)$，$\frac{1}{2} \leq x \leq \frac{3}{4}$。证明其长度为 $p + \ln q$，其中 $p$ 和 $q$ 为有理数。
:::

### 5.2 旋转曲面的表面积

:::note[定理：表面积公式]
当曲线 $y = f(x)$ 从 $x = a$ 到 $x = b$ 绕 $x$ 轴旋转时，表面积为：

$$S = 2\pi\int_a^b y\sqrt{1 + \left(\frac{dy}{dx}\right)^2}\, dx$$
:::

:::note[证明]
考虑曲线的一个微小线段：

- 斜边长度为 $ds = \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$
- 旋转时形成半径为 $y$ 的截锥
- 表面积微元为 $2\pi y\,ds$
- 积分得到总表面积
:::

:::note[例题：旋转曲面的表面积]
求曲线 $y = \sqrt{9 - x^2}$，$0 \leq x \leq 3$ 绕 $x$ 轴旋转时的表面积。

**(i)** 由前例：

$$\frac{dy}{dx} = -\frac{x}{\sqrt{9-x^2}} \quad \text{且} \quad \sqrt{1 + \left(\frac{dy}{dx}\right)^2} = \frac{3}{\sqrt{9-x^2}}$$

**(ii)** 表面积为：

$$S = 2\pi\int_0^3 \sqrt{9-x^2} \cdot \frac{3}{\sqrt{9-x^2}}\, dx = 6\pi\int_0^3\, dx = 18\pi$$
:::

:::tip[弧长与表面积技巧]
1. 始终寻找积分前简化的机会
2. 对含根式的表达式考虑三角换元或双曲换元
3. 注意表面积问题中的约分
4. 注意定义域限制
5. 记住表面积公式假设 $y$ 值为正
:::

## 6. 练习题

:::tip[练习 1]
用微积分求以下积分的精确值

$$\int_{-2}^1 \frac{1}{x^2 + 4x + 13}\, dx$$

（5 分）答案以 $\pi$ 的倍数表示。
:::

:::tip[练习 2]
已知 $y = \operatorname{arsinh}(\sqrt{x})$，$x > 0$：

**(a)** 求 $\frac{dy}{dx}$，答案化为最简分数。（3 分）

**(b)** 由此或用其他方法求

$$\int_{\frac{1}{4}}^4 \frac{1}{\sqrt{x(x+1)}}\, dx$$

答案以 $\ln\left(\frac{a+b\sqrt{5}}{2}\right)$ 的形式表示，其中 $a$ 和 $b$ 为整数。（6 分）
:::

:::tip[练习 3]
设 $I_n = \int_0^5 \frac{x^n}{\sqrt{25-x^2}}\, dx$，$n \geq 0$。

**(a)** 求 $\int \frac{x}{\sqrt{25-x^2}}\, dx$ 的表达式，$0 \leq x \leq 5$。（2 分）

**(b)** 利用 (a) 的答案或用其他方法证明

$$I_n = \frac{25(n-1)}{n}I_{n-2}, \qquad n \geq 2$$

（5 分）

**(c)** 求 $I_4$，以 $k\pi$ 的形式表示，其中 $k$ 为分数。（4 分）
:::

:::tip[练习 4]
曲线 C 的方程为

$$y = \frac{1}{3}\cosh 3x, \quad 0 \leq x \leq \ln a$$

其中 $a$ 为常数且 $a > 1$。

用微积分证明曲线 C 的长度为 $k\left(a^3 - \frac{1}{a^3}\right)$，并说明常数 $k$ 的值。（6 分）
:::

:::tip[练习 5]
设 $I_n = \int_0^{a} (a-x)^n \cos x\,dx$，$a > 0$，$n \geq 0$。

**(a)** 证明当 $n \geq 2$ 时，

$$I_n = na^{n-1} - n(n-1)I_{n-2}$$

（5 分）

**(b)** 由此计算

$$\int_0^{\frac{\pi}{2}} \left(\frac{\pi}{2} - x\right)^2 \cos x\,dx$$

（3 分）
:::

:::tip[练习 6]
一段椭圆曲线的参数方程为：

$$x = 3\cos\theta, \quad y = 5\sin\theta, \quad 0 \leq \theta \leq \frac{\pi}{2}$$

该曲线绕 $x$ 轴旋转 $2\pi$ 弧度。

**(a)** 证明生成的表面积为

$$k\pi\int_0^a \sqrt{16c^2 + 9}\, dc, \quad \text{其中 } c = \cos\theta$$

其中 $a, k$ 为待定常数。（6 分）

**(b)** 利用换元 $c = \frac{3}{4}\sinh u$ 或用其他方法计算该积分，展示所有步骤，最终答案保留 3 位有效数字。（5 分）
:::

:::danger[挑战题：加百列号角]
![加百列号角：y = 1/x 旋转体](/images/fp3-integration-gabriel-horn.svg)

考虑曲线 $y = \frac{1}{x}$（$x \geq 1$）绕 $x$ 轴旋转形成的立体。这个形状被称为加百列号角（Gabriel's Horn）或托里切利小号（Torricelli's Trumpet）。

**(a)** 证明该立体的体积是有限的。

**(b)** 证明其表面积是无限的。

**(c)** 解释为什么这个立体可以"用有限的油漆填满，但需要无限的油漆来覆盖其表面"。

**拓展：** 搜索 **科赫雪花（Koch snowflake）**，研究科赫雪花与加百列号角的异同。
:::

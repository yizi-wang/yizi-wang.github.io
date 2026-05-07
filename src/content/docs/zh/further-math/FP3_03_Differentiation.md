---
title: "FP3 第三章：微分"
---

# FP3 讲义：微分

## 先备知识检查

在开始之前，让我们回顾一些关键概念：

:::tip[练习 1：基本三角函数导数]
不参考任何公式，证明：

1. $\frac{d}{dx}(\sin^2 x) = \sin 2x$
2. $\frac{d}{dx}(\tan x) = \sec^2 x$
3. 已知 $y = x^2 \cos 3x$，求 $\frac{dy}{dx}$
:::

:::tip[练习 2：基本双曲函数]
写出以下函数的定义：

$\sinh x, \cosh x, \tanh x, \operatorname{sech} x, \operatorname{csch} x, \coth x$
:::

## 1. 微分：几何与代数视角

### 1.1 几何视角

函数在某点的导数表示该点切线的斜率。这可以理解为割线斜率的极限。

![割线趋近切线](/images/fp3-differentiation-secant-tangent.svg)

:::note[定义：从第一性原理出发的导数]
函数 $f$ 在点 $x = a$ 处的导数定义为：

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

前提是该极限存在。
:::

### 1.2 代数视角

从代数的角度来看，微分可以视为在某点附近找到函数的最佳线性逼近。

:::note[定理：线性逼近]
在 $x = a$ 附近，可微函数 $f(x)$ 可以近似为：

$$f(x) \approx f(a) + f'(a)(x - a)$$

这称为线性逼近或切线逼近。
:::

:::note[例题：误差分析应用]
利用 $f(x) = \sqrt{x}$ 在 $x = 4$ 处的线性逼近估算 $\sqrt{4.1}$。

由于 $f'(x) = \frac{1}{2\sqrt{x}}$，我们有：

$$\sqrt{4.1} \approx \sqrt{4} + \frac{1}{2\sqrt{4}}(4.1 - 4) = 2 + \frac{0.1}{4} = 2.025$$
:::

## 2. 三角函数及其反函数的微分

### 2.1 推导反三角函数导数

:::note[例题：arcsin 的导数]
证明 $\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1 - x^2}}$。

**隐函数微分法：**

1. 令 $y = \arcsin x$，则 $\sin y = x$
2. 两边求导：$\cos y \frac{dy}{dx} = 1$
3. 因此 $\frac{dy}{dx} = \frac{1}{\cos y}$
4. 由于 $\sin^2 y + \cos^2 y = 1$，有 $\cos^2 y = 1 - \sin^2 y = 1 - x^2$
5. 故 $\frac{dy}{dx} = \frac{1}{\sqrt{1 - x^2}}$
:::

:::tip[引导练习：arccos 的导数]
证明 $\frac{d}{dx}(\arccos x) = -\frac{1}{\sqrt{1 - x^2}}$。

**方法一**（利用 $\arccos x + \arcsin x = \frac{\pi}{2}$）：

**方法二**（隐函数微分法）：
尝试用 $y = \arccos x \implies \cos y = x$ 自行推导。
:::

:::tip[引导练习：arctan 的导数]
证明 $\frac{d}{dx}(\arctan x) = \frac{1}{1 + x^2}$。
:::

## 3. 双曲函数的微分

### 3.1 推导基本双曲函数导数

:::tip[引导练习：基本双曲函数导数]
利用定义：

$$\sinh x = \frac{e^x - e^{-x}}{2}, \qquad \cosh x = \frac{e^x + e^{-x}}{2}$$

证明：

$$\frac{d}{dx}(\sinh x) = \cosh x, \quad \frac{d}{dx}(\cosh x) = \sinh x, \quad \frac{d}{dx}(\tanh x) = \operatorname{sech}^2 x$$
:::

:::tip[引导练习：倒数双曲函数导数]
证明：

1. $\frac{d}{dx}(\operatorname{sech} x) = -\tanh x \operatorname{sech} x$
2. $\frac{d}{dx}(\operatorname{csch} x) = -\coth x \operatorname{csch} x$
3. $\frac{d}{dx}(\coth x) = -\operatorname{csch}^2 x$

**提示：** 使用商法则和之前的结果。
:::

### 3.2 反双曲函数

:::tip[引导练习：arsinh 的导数]
证明 $\frac{d}{dx}(\operatorname{arsinh} x) = \frac{1}{\sqrt{x^2 + 1}}$。

**方法一**（利用定义）：

1. 使用 $\operatorname{arsinh} x = \ln(x + \sqrt{x^2 + 1})$
2. 应用链式法则求导

**方法二**（隐函数微分法）：

1. 令 $y = \operatorname{arsinh} x$，则 $\sinh y = x$
2. 两边求导：$\cosh y \frac{dy}{dx} = 1$
3. 利用 $\cosh^2 y - \sinh^2 y = 1$ 消去 $\cosh y$
:::

:::tip[引导练习：arcosh 的导数]
证明 $\frac{d}{dx}(\operatorname{arcosh} x) = \frac{1}{\sqrt{x^2 - 1}}$，其中 $x > 1$。

**方法一**（利用定义 $\operatorname{arcosh} x = \ln(x + \sqrt{x^2 - 1})$）：

**方法二**（隐函数微分法）：
尝试用 $y = \operatorname{arcosh} x \implies \cosh y = x$ 自行推导。
:::

:::tip[引导练习：artanh 的导数]
证明 $\frac{d}{dx}(\operatorname{artanh} x) = \frac{1}{1 - x^2}$，其中 $|x| < 1$。

**方法一**（利用定义 $\operatorname{artanh} x = \frac{1}{2}\ln\left(\frac{1+x}{1-x}\right)$）：

**方法二**（隐函数微分法）：
尝试用 $y = \operatorname{artanh} x \implies \tanh y = x$ 自行推导。
:::

## 4. 应用与历年真题

:::note[例题：Q04 WFM03/01，2021年6月]

**(a)** 已知 $f(x) = x \arccos x$，其中 $-1 \leq x \leq 1$，求 $f'(0.5)$ 的精确值。

**(b)** 已知 $g(x) = \arctan(e^{2x})$，证明

$$g''(x) = k \operatorname{sech}(2x) \tanh(2x)$$

其中 $k$ 为待定常数。
:::

:::note[例题：Q03 WFM03/01，2022年1月]

**(a)** 已知 $y = \operatorname{arsech}\left(\frac{x}{2}\right)$，其中 $0 < x \leq 2$，证明

$$\frac{dy}{dx} = \frac{p}{x\sqrt{q - x^2}}$$

其中 $p$ 和 $q$ 为待定常数。

**(b)** 已知 $f(x) = \operatorname{artanh}(x) + \operatorname{arsech}\left(\frac{x}{2}\right)$，其中 $0 < x \leq 1$，以最简形式确定使 $f'(x) = 0$ 的 $x$ 的精确值。
:::

:::note[例题：Q04 WFM03/01，2022年6月]
已知 $y = \operatorname{artanh}\left(\frac{\cos x + a}{\cos x - a}\right)$，其中 $a$ 为非零常数，证明

$$\frac{dy}{dx} = k \tan x$$

其中 $k$ 为待定常数。
:::

## 小结

:::note[要点]
- 导数可以从几何（斜率）和代数（变化率）两个角度理解
- 反三角函数导数涉及 $\frac{1}{\sqrt{1-x^2}}$ 形式
- 双曲函数导数与三角函数相似，但符号有所不同
- 反双曲函数导数可以通过对数定义推导
:::

:::caution[常见错误]
- 忘记 $\frac{d}{dx}(\arccos x)$ 中的负号
- 混淆反函数的定义域
- 不认识双曲恒等式
- 复合函数链式法则使用不当
:::

## 课后练习

:::tip[历年真题：6669/s10/01/5]
已知 $y = (\operatorname{arcosh} 3x)^2$，其中 $3x > 1$，证明：

**(a)** $(9x^2 - 1)\left(\frac{dy}{dx}\right)^2 = 36y$（5 分）

**(b)** $(9x^2 - 1)\frac{d^2y}{dx^2} + 9x\frac{dy}{dx} = 18$（4 分）
:::

:::tip[历年真题：6669/s14/01/5]
已知 $y = \operatorname{artanh}\frac{x}{\sqrt{1+x^2}}$，证明

$$\frac{dy}{dx} = \frac{1}{\sqrt{1+x^2}}$$

（4 分）
:::

## 挑战题：证明 $(\sin x)' = \cos x$

### 背景回顾

:::note[关键概念 1：单位圆与三角函数]
对于单位圆上的点 $P(\cos\theta, \sin\theta)$：

- $\cos\theta$ 是 $x$ 坐标
- $\sin\theta$ 是 $y$ 坐标
- 随着 $\theta$ 增大，$P$ 逆时针移动
:::

:::note[关键概念 2：导数的定义]
函数 $f(x)$ 在点 $x$ 处的导数定义为差商的极限

$$\frac{f(x+h) - f(x)}{h}$$

当 $h$ 趋近于 $0$ 时。
:::

:::note[关键概念 3：arcsin 的弧长定义]
在单位圆上，$\arcsin x$ 表示从点 $(1, 0)$ 到点 $(\sqrt{1-x^2}, x)$ 的弧长。

**关键性质：**

- 角 $\theta = \arcsin(x)$ 以弧度为单位
- 对于单位圆上的任意点 $(\sqrt{1-x^2}, x)$，$x = \sin(\theta)$
- 弧长等于弧度量 $\theta$（因为半径 = 1）
- 定义域限制 $|x| \leq 1$ 来自单位圆几何
:::

### 任务一：物理方法

:::tip[任务一：物理方法]

1. 考虑一个在平面上运动的质点，其参数方程为：
   $x(t) = \cos t, \quad y(t) = \sin t$
   这在物理上意味着什么？

2. 速度矢量 $\vec{v}(t)$ 为 $\vec{v}(t) = (x'(t), y'(t))$。
   - 速度矢量的方向是什么？
   - 为什么它一定与位置矢量垂直？
   - 它的大小是多少？

3. 这个物理解释如何帮助我们理解为什么 $\frac{d}{dt}\sin t = \cos t$？
:::

### 任务二：通过极限理解导数

:::tip[任务二：通过极限理解导数]
让我们一步步分解正弦函数的导数：

1. 在任意点 $a$，我们要求 $(\sin x)'$ 在 $x = a$ 处的值。这意味着我们需要计算：

   $$\frac{\sin(a+h) - \sin a}{h} \quad \text{当 } h \text{ 越来越接近 } 0$$

2. 我们可以使用三角加法公式：

   $$\sin(a+h) = \sin a \cos h + \cos a \sin h$$

3. **问：** 将其代入差商，证明：

   $$\frac{\sin(a+h) - \sin a}{h} = \sin a \cdot \frac{(\cos h - 1)}{h} + \cos a \cdot \frac{\sin h}{h}$$

4. 为了证明它趋近于 $\cos a$，我们需要理解以下两项的行为：
   - $\frac{\sin h}{h}$ 当 $h$ 趋近于 $0$ 时
   - $\frac{\cos h - 1}{h}$ 当 $h$ 趋近于 $0$ 时

5. **问：** 利用恒等式 $\cos h - 1 = -2\sin^2(h/2)$，证明：

   $$\frac{\cos h - 1}{h} = -\sin(h/2) \cdot \frac{\sin(h/2)}{h/2}$$

   由此解释为什么只要 $\frac{\sin h}{h}$ 趋近于 $1$，$\frac{\cos h - 1}{h}$ 就趋近于 $0$。

6. 因此，如果我们能证明 $\frac{\sin h}{h}$ 当 $h$ 趋近于 $0$ 时趋近于 $1$（我们将在任务三中完成），我们就证明了 **$\sin x$ 在任意点 $a$ 处的导数是 $\cos a$**。
:::

### 任务三：解析方法

:::tip[任务三：解析方法]
在本任务中，我们将通过积分探索正弦函数的替代定义，并利用此定义证明 $\frac{\sin x}{x}$ 当 $x$ 趋近于 $0$ 时趋近于 $1$。

**第一部分：理解弧长与反正弦**

1. 回顾任务一中，当一个点沿单位圆以位置矢量 $(\cos t, \sin t)$ 运动时：
   - 其速度矢量为 $(-\sin t, \cos t)$
   - 速率（速度大小）恒为 $1$
   - 因此，参数 $t$ 等于走过的弧长

2. 考虑 $\arcsin x$ 的弧长定义（见关键概念 3）：
   - 在单位圆上，$\arcsin x$ 是从 $(1, 0)$ 到 $(\sqrt{1-x^2}, x)$ 的弧长
   - 对于曲线 $(f(t), g(t))$，其弧长为 $\int \sqrt{(f'(t))^2 + (g'(t))^2}\,dt$
   - *注：这就是"arc"sin 与"arc"length 的关系，弧长的详细计算将在下一章讨论。*

3. **问：** 利用上述弧长公式：
   - (a) 将表示 $\arcsin x$ 的弧表示为 $(x(t), y(t)) = (\sqrt{1-t^2}, t)$，其中 $0 \leq t \leq x$。
   - (b) 证明 $\arcsin x = \int_0^x \frac{1}{\sqrt{1-t^2}}\,dt$。

**第二部分：积分的性质**

1. 对于函数 $f(x) = \int_0^x \frac{1}{\sqrt{1-t^2}}\,dt$，解释为什么：
   - $f(0)$ 的值必须为 $0$
   - 随着 $x$ 增大，$f(x)$ 必然增大（考虑正函数曲线下的面积）
   - 函数关于原点对称（将 $x$ 替换为 $-x$ 会怎样？）

2. 对于 $0$ 到 $1$ 之间的任意 $x$：
   - 找出 $\frac{1}{\sqrt{1-t^2}}$ 在 $[0, x]$ 上的最小值
   - 找出 $\frac{1}{\sqrt{1-t^2}}$ 在 $[0, x]$ 上的最大值

   利用这些事实解释为什么：

   $$x \leq f(x) \leq \frac{x}{\sqrt{1-x^2}}$$

**第三部分：基本性质**

**夹逼定理**：如果 $a(x) \leq b(x) \leq c(x)$ 对所有接近某值 $p$ 的 $x$ 成立，且 $a(x)$ 和 $c(x)$ 当 $x$ 趋近于 $p$ 时都趋近于同一值 $L$，则 $b(x)$ 也必然趋近于 $L$。

1. 利用夹逼定理解释为什么 $\frac{f(x)}{x}$ 当 $x$ 趋近于 $0$ 时趋近于 $1$。

2. 令 $y = f(x)$，证明 $\frac{\sin y}{y}$ 当 $y$ 趋近于 $0$ 时也趋近于 $1$。
:::

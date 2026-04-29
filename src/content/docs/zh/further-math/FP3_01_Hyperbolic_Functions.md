---
title: "FP3 第一章：双曲函数"
---

# FP3 讲义：双曲函数

## 引言

本讲义介绍双曲函数，这类函数自然地出现在某些有理函数积分中。双曲函数与三角函数有许多相似的性质，但表现出指数增长的特性。我们将探讨它们的定义、性质和应用。

## 动机

考虑以下在微积分中频繁出现的积分：

$$\int \frac{dx}{\sqrt{x^2 \pm a^2}}$$

这些积分在物理和工程中有重要应用，特别是在：

- 悬链线（悬挂链条）的长度
- 钟摆的运动
- 狭义相对论中的问题

它们的解自然地引出了双曲函数。

## 模块一：定义与基本性质

### 双曲函数的定义

:::note[定义：双曲函数]
对于任意实数 $x$，定义：

$$\sinh x = \frac{e^x - e^{-x}}{2} \quad \text{（双曲正弦）}$$

$$\cosh x = \frac{e^x + e^{-x}}{2} \quad \text{（双曲余弦）}$$

$$\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}} \quad \text{（双曲正切）}$$
:::

:::tip[练习：推导其他双曲函数]
正如三角函数有倒数关系：

$$\sec \theta = \frac{1}{\cos \theta}, \quad \csc \theta = \frac{1}{\sin \theta}, \quad \cot \theta = \frac{\cos \theta}{\sin \theta}$$

推导其双曲对应函数的表达式：

1. $\operatorname{sech} x$（双曲正割）
2. $\operatorname{csch} x$（双曲余割）
3. $\coth x$（双曲余切）

---

**解答：**

1. $\operatorname{sech} x = \dfrac{1}{\cosh x} = \dfrac{2}{e^x + e^{-x}}$

2. $\operatorname{csch} x = \dfrac{1}{\sinh x} = \dfrac{2}{e^x - e^{-x}}$

3. $\coth x = \dfrac{\cosh x}{\sinh x} = \dfrac{e^x + e^{-x}}{e^x - e^{-x}}$

**关键性质：**

- $\operatorname{sech} x$ 是偶函数，$0 < \operatorname{sech} x \leq 1$
- $\operatorname{csch} x$ 是奇函数，在 $x = 0$ 处有垂直渐近线
- $\coth x$ 是奇函数，在 $x = 0$ 处有垂直渐近线
- $|\coth x| > 1$ 对所有 $x \neq 0$ 成立
:::

### 基本性质

1. $\cosh x \geq 1$ 对所有实数 $x$ 成立
2. $\sinh x$ 是奇函数：$\sinh(-x) = -\sinh(x)$
3. $\cosh x$ 是偶函数：$\cosh(-x) = \cosh(x)$

### 关键观察

- $\sinh x$ 类似于 $\sin x$，但当 $|x| \to \infty$ 时呈指数增长
- $\cosh x$ 类似于 $\cos x$，但最小值为 1 且呈指数增长
- $\tanh x$ 有水平渐近线 $y = \pm 1$

![双曲函数图像](/images/fp3-hyperbolic-graphs.svg)

### 例题 1：解方程 $\sinh x = 3$

**第一步.** 利用定义：

$$\frac{e^x - e^{-x}}{2} = 3$$

**第二步.** 令 $y = e^x$，则 $e^{-x} = \dfrac{1}{y}$：

$$y - \frac{1}{y} = 6$$

**第三步.** 整理为标准形式：

$$y^2 - 6y - 1 = 0$$

**第四步.** 解二次方程：

$$y = \frac{6 \pm \sqrt{36 + 4}}{2} = 3 \pm \sqrt{10}$$

**第五步.** 由于 $y = e^x$，且需要 $y > 0$：

$$x = \ln(3 + \sqrt{10})$$

### 课堂练习

:::tip[练习]
曲线 $C_1$ 的方程为 $y = 3\sinh 2x$，曲线 $C_2$ 的方程为 $y = 13 - 3e^{2x}$。

(a) 在同一组坐标轴上画出曲线 $C_1$ 和 $C_2$ 的图像，给出渐近线方程以及曲线与坐标轴交点的坐标。

(b) 解方程 $3\sinh 2x = 13 - 3e^{2x}$，答案写成 $\frac{1}{2}\ln k$ 的形式，其中 $k$ 为整数。

---

**解答：**

**(a)** 对于曲线 $C_1: y = 3\sinh 2x$：

- 当 $x = 0$ 时：$y = 0$，所以 $(0,0)$ 在曲线上
- 当 $x \to \infty$ 时：$y \to \infty$（指数增长）
- 当 $x \to -\infty$ 时：$y \to -\infty$（指数增长）
- 奇函数，关于原点对称

对于曲线 $C_2: y = 13 - 3e^{2x}$：

- 当 $x = 0$ 时：$y = 13 - 3 = 10$，所以 $(0,10)$ 在曲线上
- 当 $x \to \infty$ 时：$y \to -\infty$
- 当 $x \to -\infty$ 时：$y \to 13$（水平渐近线）
- 与 $y$ 轴交于 $(0,10)$

**(b)** 利用 $\sinh x$ 的定义：

$$3\sinh 2x = 13 - 3e^{2x}$$

$$3\left(\frac{e^{2x} - e^{-2x}}{2}\right) = 13 - 3e^{2x}$$

$$\frac{3e^{2x} - 3e^{-2x}}{2} = 13 - 3e^{2x}$$

$$3e^{2x} - 3e^{-2x} = 26 - 6e^{2x}$$

$$9e^{2x} - 3e^{-2x} = 26$$

$$9e^{4x} - 3 = 26e^{2x}$$

$$9e^{4x} - 26e^{2x} - 3 = 0$$

令 $y = e^{2x}$，则：

$$9y^2 - 26y - 3 = 0 \Rightarrow (3y-1)(3y+3) = 0$$

因此 $y = \dfrac{1}{3}$ 或 $y = -1$。

由于 $y = e^{2x} > 0$，所以 $y = \dfrac{1}{3}$。

因此 $e^{2x} = \dfrac{1}{3}$，即 $x = \dfrac{1}{2}\ln\!\left(\dfrac{1}{3}\right) = -\dfrac{1}{2}\ln 3$。
:::

## 模块二：反双曲函数与恒等式

### 确定反函数的定义域

求反函数定义域的步骤：

1. 检查原函数是否为一一映射（单射）
2. 如果不是，限制定义域使其成为一一映射
3. 原函数的值域成为反函数的定义域
4. 原函数的定义域成为反函数的值域

例如，$\cosh x$ 不是一一映射（因为它是偶函数），所以我们将其定义域限制为 $[0,\infty)$ 来定义 $\cosh^{-1}$。

### 练习：反双曲函数的定义域

对于六个双曲函数中的每一个，确定：

1. 该函数在 $\mathbb{R}$ 上是否为一一映射
2. 如果不是，需要什么样的定义域限制
3. 其反函数的定义域

| 函数 | 一一映射？ | 需要的限制 | 反函数定义域 |
|---|---|---|---|
| $\sinh x$ | 是 | 无 | $-\infty < x < \infty$ |
| $\cosh x$ | 否（偶函数） | $x \geq 0$ | $x \geq 1$ |
| $\tanh x$ | 是 | 无 | $-1 < x < 1$ |
| $\operatorname{sech} x$ | 否（偶函数） | $x \geq 0$ | $0 < x \leq 1$ |
| $\operatorname{csch} x$ | 否（渐近线） | $x < 0$ 或 $x > 0$ | $x \neq 0$ |
| $\coth x$ | 否（渐近线） | $x < 0$ 或 $x > 0$ | $x < -1$ 或 $x > 1$ |

**说明：**

- **$\sinh x$**：严格递增，反函数对所有 $x \in \mathbb{R}$ 存在
- **$\cosh x$**：偶函数，限制为 $x \geq 0$，最小值为 1
- **$\tanh x$**：严格递增，水平渐近线为 $y = \pm 1$
- **$\operatorname{sech} x$**：偶函数，限制为 $x \geq 0$，$0 < y \leq 1$
- **$\operatorname{csch} x$**：在 $x = 0$ 处有垂直渐近线，需分别考虑 $x < 0$ 和 $x > 0$
- **$\coth x$**：在 $x = 0$ 处有垂直渐近线，水平渐近线为 $y = \pm 1$

### 反双曲函数

:::note[定义：反双曲函数]
在适当的定义域上：

$$\sinh^{-1} x = \ln(x + \sqrt{x^2 + 1})$$

$$\cosh^{-1} x = \ln(x + \sqrt{x^2 - 1}), \quad x \geq 1$$

$$\tanh^{-1} x = \frac{1}{2}\ln\!\left(\frac{1+x}{1-x}\right), \quad |x| < 1$$
:::

![反双曲函数图像](/images/fp3-inverse-hyperbolic.svg)

### 与三角函数的联系

对于任意实数 $x$：

$$\cosh x = \cos(ix)$$

$$\sinh x = -i\sin(ix)$$

:::tip[引导练习 1：基本恒等式]
利用双曲函数与三角函数的关系，证明：

$$\cosh^2 x - \sinh^2 x = 1$$

已知 $\cos^2 \theta + \sin^2 \theta = 1$。

---

**解答：**

$$\cosh^2 x - \sinh^2 x = [\cos(ix)]^2 - [-i\sin(ix)]^2$$

$$= \cos^2(ix) + \sin^2(ix)$$

$$= 1$$
:::

### 双曲函数恒等式

:::tip[引导练习 2]
利用与三角函数的关系，推导双曲函数的加法公式：

$$\sinh(x+y) = \sinh x \cosh y + \cosh x \sinh y$$

已知 $\sin(A+B) = \sin A \cos B + \cos A \sin B$。

---

**解答：**

$$\sinh(x+y) = -i\sin[i(x+y)]$$

$$= -i\sin(ix+iy)$$

$$= -i[\sin(ix)\cos(iy) + \cos(ix)\sin(iy)]$$

$$= -i[i\sinh x \cosh y + \cosh x \cdot i\sinh y]$$

$$= \sinh x \cosh y + \cosh x \sinh y$$
:::

### 关键恒等式总结

**1. 加法公式：**

$$\sinh(x+y) = \sinh x \cosh y + \cosh x \sinh y$$

$$\cosh(x+y) = \cosh x \cosh y + \sinh x \sinh y$$

**2. 倍角公式：**

$$\sinh(2x) = 2\sinh x \cosh x$$

$$\cosh(2x) = \cosh^2 x + \sinh^2 x = 2\cosh^2 x - 1$$

**3. 类勾股恒等式：**

$$1 - \tanh^2 x = \operatorname{sech}^2 x \quad \text{（基本恒等式除以 } \cosh^2 x\text{）}$$

$$\coth^2 x - 1 = \operatorname{csch}^2 x \quad \text{（基本恒等式除以 } \sinh^2 x\text{）}$$

:::tip[练习]
利用 $\sinh(x+y)$ 的加法公式证明：

$$\sinh(2x) = 2\sinh x \cosh x$$

---

**解答：**

在加法公式中令 $y = x$：

$$\sinh(2x) = \sinh(x+x)$$

$$= \sinh x \cosh x + \cosh x \sinh x$$

$$= 2\sinh x \cosh x$$
:::

## 总结

:::note[要点]

**1. 基本性质**

- 双曲函数由指数函数定义
- 与三角函数有相似性质，但呈指数增长
- 基本恒等式 $\cosh^2 x - \sinh^2 x = 1$ 是核心
- $\cosh x$ 始终大于或等于 1

**2. 反函数与恒等式**

- 反双曲函数可用对数表示
- 复数关系有助于推导双曲恒等式
- 加法公式与三角函数对应
- 倍角公式可用于化简
:::

:::caution[常见易错点]
- 不要将双曲函数与三角函数混淆
- 记住 $\cosh x \geq 1$ 对所有实数 $x$ 成立
- 注意定义域限制，特别是反函数
- 使用复数关系时注意符号
- 注意双曲恒等式与三角恒等式的区别
:::

## 作业

### E.O.C.1 (6669/s09/01/1)

解方程：

$$7\operatorname{sech} x - \tanh x = 5$$

答案写成 $\ln a$ 的形式，其中 $a$ 为有理数。

**解答：**

**方法 1：利用定义**

$$\frac{7}{\cosh x} - \frac{\sinh x}{\cosh x} = 5$$

$$\frac{7 - \sinh x}{\cosh x} = 5$$

$$7 - \sinh x = 5\cosh x$$

$$7 - \frac{e^x - e^{-x}}{2} = 5\frac{e^x + e^{-x}}{2}$$

$$14 - (e^x - e^{-x}) = 5(e^x + e^{-x})$$

$$14 - e^x + e^{-x} = 5e^x + 5e^{-x}$$

$$14 - 6e^x - 4e^{-x} = 0$$

$$3e^{2x} - 7e^x + 2 = 0$$

令 $y = e^x$，则：

$$3y^2 - 7y + 2 = 0 \Rightarrow (3y-1)(y-2) = 0$$

因此 $y = \dfrac{1}{3}$ 或 $y = 2$。

因此 $x = \ln\!\left(\dfrac{1}{3}\right)$ 或 $x = \ln 2$。

**方法 2：利用 $\operatorname{sech}^2 x + \tanh^2 x = 1$**

$$(7\operatorname{sech} x - 5)^2 = \tanh^2 x$$

$$49\operatorname{sech}^2 x - 70\operatorname{sech} x + 25 = 1 - \operatorname{sech}^2 x$$

$$50\operatorname{sech}^2 x - 70\operatorname{sech} x + 24 = 0$$

$$2(5\operatorname{sech} x - 3)(5\operatorname{sech} x - 4) = 0$$

$$\operatorname{sech} x = \frac{3}{5} \text{ 或 } \frac{4}{5}$$

得到相同答案。

### E.O.C.2 (6669/s10/01/3)

**(a)** 从 $\sinh x$ 和 $\cosh x$ 的指数定义出发，证明：

$$\cosh 2x = 1 + 2\sinh^2 x$$

**解答：**

$$\text{右边} = 1 + 2\sinh^2 x = 1 + 2\left(\frac{e^x - e^{-x}}{2}\right)^2$$

$$= 1 + 2\left(\frac{e^{2x} - 2 + e^{-2x}}{4}\right)$$

$$= 1 + \frac{e^{2x} - 2 + e^{-2x}}{2}$$

$$= \frac{2 + e^{2x} - 2 + e^{-2x}}{2}$$

$$= \frac{e^{2x} + e^{-2x}}{2}$$

$$= \cosh 2x = \text{左边}$$

**(b)** 解方程：

$$\cosh 2x - 3\sinh x = 15$$

答案用精确对数表示。

**解答：**

1. 利用 (a) 部分：

$$1 + 2\sinh^2 x - 3\sinh x = 15$$

2. 整理：

$$2\sinh^2 x - 3\sinh x - 14 = 0$$

3. 因式分解：

$$(\sinh x + 2)(2\sinh x - 7) = 0$$

4. 因此：

$$\sinh x = -2 \text{ 或 } \sinh x = \frac{7}{2}$$

5. 对于 $\sinh x = -2$：

$$x = \ln(-2 + \sqrt{(-2)^2 + 1}) = \ln(-2 + \sqrt{5})$$

6. 对于 $\sinh x = \dfrac{7}{2}$：

$$x = \ln\!\left(\frac{7}{2} + \sqrt{\left(\frac{7}{2}\right)^2 + 1}\right) = \ln\!\left(\frac{7 + \sqrt{53}}{2}\right)$$

### E.O.C.3 (6669/s14/01R/1)

解方程：

$$5\tanh x + 7 = 5\operatorname{sech} x$$

每个答案写成 $\ln k$ 的形式，其中 $k$ 为有理数。

**解答：**

**方法 1：利用指数定义**

$$5\frac{e^x - e^{-x}}{e^x + e^{-x}} + 7 = \frac{10}{e^x + e^{-x}}$$

$$5(e^x - e^{-x}) + 7(e^x + e^{-x}) = 10$$

$$5e^x - 5e^{-x} + 7e^x + 7e^{-x} = 10$$

$$12e^x + 2e^{-x} = 10$$

$$6e^{2x} - 5e^x + 1 = 0$$

令 $y = e^x$，则：

$$6y^2 - 5y + 1 = 0 \Rightarrow (3y-1)(2y-1) = 0$$

因此 $y = \dfrac{1}{3}$ 或 $y = \dfrac{1}{2}$。

因此 $x = \ln\!\left(\dfrac{1}{3}\right)$ 或 $x = \ln\!\left(\dfrac{1}{2}\right)$。

**方法 2：利用 $\tanh^2 x + \operatorname{sech}^2 x = 1$**

$$5\tanh x + 7 = 5\operatorname{sech} x$$

$$5\tanh x - 5\operatorname{sech} x = -7$$

$$25\tanh^2 x + 70\tanh x + 49 = 25\operatorname{sech}^2 x$$

$$25\tanh^2 x + 70\tanh x + 49 = 25(1-\tanh^2 x)$$

$$50\tanh^2 x + 70\tanh x + 24 = 0$$

$$2(5\tanh x + 3)(5\tanh x + 4) = 0$$

$$\tanh x = -\frac{3}{5} \text{ 或 } -\frac{4}{5}$$

利用 $\tanh x = \dfrac{e^x - e^{-x}}{e^x + e^{-x}} = -\dfrac{4}{5}$：

$$\frac{e^x - e^{-x}}{e^x + e^{-x}} = -\frac{4}{5} \Rightarrow e^x = \frac{1}{2} \Rightarrow x = \ln\!\left(\frac{1}{2}\right)$$

类似地，对于 $\tanh x = -\dfrac{3}{5}$：

$$\frac{e^x - e^{-x}}{e^x + e^{-x}} = -\frac{3}{5} \Rightarrow e^x = \frac{1}{3} \Rightarrow x = \ln\!\left(\frac{1}{3}\right)$$

**方法 3：利用 $\sinh x$ 和 $\cosh x$**

$$5\sinh x + 7\cosh x = 5$$

$$5\sinh x + 7\cosh x - 5 = 0$$

$$24\sinh^2 x + 50\sinh x + 24 = 0$$

$$\sinh x = -\frac{4}{3} \text{ 或 } -\frac{3}{4}$$

利用 $\sinh x = \dfrac{e^x - e^{-x}}{2}$：

$$\frac{e^x - e^{-x}}{2} = -\frac{4}{3} \Rightarrow e^x = \frac{1}{3} \text{ 或 } \frac{1}{2}$$

得到相同答案。

## 挑战题（选做）：推导悬链线方程

考虑一根在自身重力作用下悬挂的柔性链条。我们将推导其形状——著名的悬链线 $y = a\cosh\!\left(\dfrac{x}{a}\right)$。

### 第一部分：物理设定

建立坐标系：

- $x$ 轴水平，$y$ 轴竖直向上
- $\rho$ = 链条单位长度的质量
- $s$ = 从底部到点 $P(x,y)$ 的弧长
- $T$ = 点 $P$ 处的张力
- $T_h$ = 张力的水平分量（沿链条保持恒定）

![悬链线设定图](/images/fp3-catenary-setup.svg)

### 第二部分：力分析

对于链条的一小段：

- 小段质量 = $\rho s$（与弧长成正比）
- 张力 $T$ 沿曲线切线方向
- $T_h$ 保持恒定（关键洞察！）
- $\theta$ 是 $T$ 与水平方向的夹角

![力分析图](/images/fp3-catenary-forces.svg)

由力平衡：

$$T\sin\theta = \rho s g \quad \text{（竖直力平衡）}$$

$$T\cos\theta = T_h \quad \text{（水平力平衡）}$$

### 第三部分：推导微分方程

![微分三角形](/images/fp3-differential-triangle.svg)

对于一小段：

$$\sin\theta = \frac{dy}{ds}$$

$$\cos\theta = \frac{dx}{ds}$$

将力方程相除：

$$\tan\theta = \frac{\rho s g}{T_h} = \frac{dy}{dx}$$

令 $a = \dfrac{T_h}{\rho g}$，则：

$$\frac{dy}{dx} = \frac{s}{a}$$

由微分三角形：

$$ds^2 = dx^2 + dy^2 \quad \text{因此} \quad \frac{ds}{dx} = \sqrt{1 + \left(\frac{dy}{dx}\right)^2}$$

对 $\dfrac{dy}{dx} = \dfrac{s}{a}$ 关于 $x$ 求导：

$$\frac{d^2y}{dx^2} = \frac{1}{a}\frac{ds}{dx} = \frac{1}{a}\sqrt{1 + \left(\frac{dy}{dx}\right)^2}$$

### 第四部分：解微分方程

我们已推导出微分方程：

$$\frac{d^2y}{dx^2} = \frac{1}{a}\sqrt{1 + \left(\frac{dy}{dx}\right)^2}$$

**问题：** 尝试用以下提示解这个方程：

1. 用 $p$ 替换 $\dfrac{dy}{dx}$。
2. $\operatorname{arsinh}(p)$ 的导数是 $\dfrac{1}{\sqrt{1 + p^2}}$。（我们将在第三章学习这个。你也可以利用 $\operatorname{arsinh}(p)$ 的定义自行证明。）
3. $\sinh(x)$ 的导数是 $\cosh(x)$。（我们也将在第三章学习这个。你也可以利用 $\sinh(x)$ 和 $\cosh(x)$ 的指数定义自行证明。）

**解答：**

1. 利用关于 $\operatorname{arsinh}(p)$ 的提示，可以直接积分：

$$\operatorname{arsinh}(p) = \frac{x}{a} + C_1$$

2. 因此：

$$p = \sinh\!\left(\frac{x}{a} + C_1\right)$$

3. 由于 $p = \dfrac{dy}{dx}$，可以将 $C_1$ 吸收到坐标原点的选择中：

$$\frac{dy}{dx} = \sinh\!\left(\frac{x}{a}\right)$$

4. 再次积分：

$$y = a\cosh\!\left(\frac{x}{a}\right) + C_2$$

这是悬链线的一般方程，其中：

- $a$ 决定曲线的"尺度"
- $C_2$ 将曲线沿竖直方向平移

### 延伸问题

1. 证明任意点处的张力为：

$$T = T_h\cosh\!\left(\frac{x}{a}\right)$$

2. **研究：** 为什么悬索桥呈抛物线形状而不是悬链线？（提示：考虑荷载如何分布）

:::note[历史笔记：悬链线挑战]
悬链线的历史意义值得强调，特别是 17 世纪末数学家雅各布·伯努利提出的挑战。伯努利悬赏求解悬挂链条或缆绳的形状问题，这就是著名的悬链线。

悬链线 $y = a\cosh\!\left(\dfrac{x}{a}\right)$ 最早由古希腊人研究，但正是伯努利的挑战重新点燃了对这一迷人曲线的兴趣。这个问题吸引了许多著名数学家的关注，包括莱昂哈德·欧拉和约翰·伯努利，他们试图推导悬链线的数学性质。

伯努利的悬赏不仅促进了悬链线的研究，还推动了微积分的发展和对双曲函数的理解。悬链线的独特性质，如最小化势能的能力，使其成为数学和工程学中至关重要的研究对象。
:::

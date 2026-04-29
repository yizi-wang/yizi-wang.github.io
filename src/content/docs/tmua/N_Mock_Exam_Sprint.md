---
title: "N Mock Exam Sprint"
---

# 模块 N：模考冲刺

> **对应考纲**：全考纲（MM1-MM8 + Arg1-Arg4 + Prf1-Prf5 + Err1-Err2）
> **对应 Paper**：Paper 1（应用数学知识）+ Paper 2（数学推理）
> **建议课时**：2 课时 | **题量**：2 套完整模拟题（各 20 题，共 40 题）
> **题目来源**：全部精选自 TMUA 历年真题（2016-2023）

---

## 📋 模块概览

| 模拟试卷 | 题目数 | 覆盖考纲 | 题型特点 | 建议用时 |
|----------|--------|---------|---------|---------|
| Paper 1 模拟题 | 20 题 | MM1-MM8（全考纲 Section 1） | 重计算速度与准确性 | 75 分钟 |
| Paper 2 模拟题 | 20 题 | MM1-MM8 + Arg1-Arg4 + Prf1-Prf5 + Err1-Err2 | 重推理深度与逻辑链 | 75 分钟 |

### Paper 1 考纲覆盖分布

| 考纲模块 | 知识点 | 题号 | 题量 |
|----------|--------|------|------|
| MM1 | 代数与函数 | 第 1, 2, 11, 15 题 | 4 |
| MM2 | 数列与级数 | 第 3, 16 题 | 2 |
| MM3 | 坐标几何 | 第 4, 13, 19 题 | 3 |
| MM4 | 三角函数 | 第 5, 14, 20 题 | 3 |
| MM5 | 指数与对数 | 第 6 题 | 1 |
| MM6 | 微分 | 第 7, 17 题 | 2 |
| MM7 | 积分 | 第 8, 12, 18 题 | 3 |
| MM8 | 函数图像 | 第 9, 10 题 | 2 |
| **合计** | | | **20** |

### Paper 2 考纲覆盖分布

| 考纲模块 | 知识点 | 题号 | 题量 |
|----------|--------|------|------|
| Arg1-Arg4 | 逻辑推理 | 第 1, 4, 6, 8, 12 题 | 5 |
| Prf1-Prf5 | 数学证明 | 第 2, 7, 11, 20 题 | 4 |
| Err1-Err2 | 错误识别 | 第 3, 5, 19 题 | 3 |
| MM6 | 微分推理 | 第 13, 14, 15, 16, 18 题 | 5 |
| MM7 | 积分推理 | 第 9, 10, 17 题 | 3 |
| **合计** | | | **20** |

---

## 📝 Paper 1 模拟题（Applications of Mathematical Knowledge）

> **考试要求**：75 分钟完成 20 题，每题约 3.75 分钟。不可使用计算器，无公式表。
> **策略提示**：先做有把握的题目，标记难题最后回头。所有题目分值相同，答错不扣分。

### 第1题（2016 P1 Q1 · Algebra）

**考纲**：MM1.1-MM1.7

**题目**：It is given that the expansion of $(ax + b)^3$ is $8x^3 - px^2 + 18x - 3\sqrt{3}$, where $a$, $b$ and $p$ are real constants.

What is the value of $p$?

**选项**：
- **A**：$-12\sqrt{3}$
- **B**：$-6\sqrt{3}$
- **C**：$-4\sqrt{3}$
- **D**：$-\sqrt{3}$
- **E**：$\sqrt{3}$
- **F**：$4\sqrt{3}$
- **G**：$6\sqrt{3}$
- **H**：$12\sqrt{3}$

**正确答案**：H

【题目分析】
本题考查二项式展开与系数匹配。核心思路是将 $(ax+b)^3$ 展开，与已知表达式逐项对比系数，解出 $a$ 和 $b$，进而求得 $p$。

【解题步骤】
第一步：写出二项式展开式

$$(ax+b)^3 = a^3x^3 + 3a^2b\,x^2 + 3ab^2\,x + b^3$$

第二步：对比 $x^3$ 项系数

$$a^3 = 8 \quad \Rightarrow \quad a = 2$$

第三步：对比常数项

$$b^3 = -3\sqrt{3}$$

注意到 $(-\sqrt{3})^3 = -(\sqrt{3})^3 = -3\sqrt{3}$，因此 $b = -\sqrt{3}$。

第四步：用 $x$ 项系数验证（考试可跳过）

$$3ab^2 = 3 \times 2 \times (-\sqrt{3})^2 = 3 \times 2 \times 3 = 18$$

与题目中 $18x$ 吻合，确认 $a$、$b$ 无误。

第五步：求 $x^2$ 项系数，确定 $p$

$$3a^2b = 3 \times 2^2 \times (-\sqrt{3}) = -12\sqrt{3}$$

题目中 $x^2$ 项为 $-px^2$，故 $-p = -12\sqrt{3}$，即

$$p = 12\sqrt{3}$$

【快捷思路】
由 $a^3=8$ 和 $b^3=-3\sqrt{3}$ 直接得出 $a=2$、$b=-\sqrt{3}$，代入 $3a^2b = -p$ 即可得到 $p=12\sqrt{3}$，无需验证中间系数。

---

### 第2题（2020 P1 Q10 · Algebra）

**考纲**：MM1.1-MM1.7

**题目**：The following sequence of transformations is applied to the curve $y = 4x^2$

1. Translation by $\begin{pmatrix} 3 \\ -5 \end{pmatrix}$

2. Reflection in the $x$-axis

3. Stretch parallel to the $x$-axis with scale factor 2

What is the equation of the resulting curve?

**选项**：
- **A**：$y = -x^2 + 12x - 31$
- **B**：$y = -x^2 + 12x - 41$
- **C**：$y = x^2 + 12x + 31$
- **D**：$y = x^2 + 12x + 41$
- **E**：$y = -16x^2 + 48x - 31$
- **F**：$y = -16x^2 + 48x - 41$
- **G**：$y = 16x^2 - 48x + 31$
- **H**：$y = 16x^2 - 48x + 41$

**正确答案**：A

【题目分析】
对 $y = 4x^2$ 依次进行三次变换，求最终方程。

【解题步骤】
从 $y = 4x^2$ 出发，逐步变换：

**变换1：平移 $\begin{pmatrix}3\\-5\end{pmatrix}$**
向右平移3，向下平移5：
$y = 4(x-3)^2 - 5$

**变换2：关于 $x$ 轴反射**
$y$ 变为 $-y$：
$y = -4(x-3)^2 + 5$

**变换3：沿 $x$ 轴方向拉伸，scale factor 2**
$x$ 用 $\frac{x}{2}$ 替换：
$y = -4\left(\frac{x}{2}-3\right)^2 + 5 = -4 \cdot \frac{(x-6)^2}{4} + 5 = -(x-6)^2 + 5$

展开：$y = -(x^2 - 12x + 36) + 5 = -x^2 + 12x - 31$

对应选项 A。

---

### 第3题（2016 P1 Q4 · Sequences and Series）

**考纲**：MM2.1-MM2.4

**题目**：The sequence $a_n$ is defined by the rule:

$$a_n = (-1)^n - (-1)^{n-1} + (-1)^{n+2} \text{ for } n \geq 1.$$

Find the value of

$$\sum_{n=1}^{39} a_n$$

**选项**：
- **A**：$-39$
- **B**：$-3$
- **C**：$-1$
- **D**：$0$
- **E**：$1$
- **F**：$3$
- **G**：$39$

**正确答案**：B

【题目分析】
本题考查含 $(-1)^n$ 型数列的通项化简与求和。先化简 $a_n$ 为简洁形式，再观察奇偶项交替规律快速求和。

【解题步骤】
第一步：化简通项 $a_n$

$$a_n = (-1)^n - (-1)^{n-1} + (-1)^{n+2}$$

利用指数性质：

$$(-1)^{n-1} = (-1)^n \cdot (-1)^{-1} = -(-1)^n$$

$$(-1)^{n+2} = (-1)^n \cdot (-1)^2 = (-1)^n$$

代入得

$$a_n = (-1)^n - \bigl(-(-1)^n\bigr) + (-1)^n = 3 \cdot (-1)^n$$

第二步：写出前几项验证规律

$$a_1 = -3,\quad a_2 = 3,\quad a_3 = -3,\quad a_4 = 3,\quad \ldots$$

数列在 $-3$ 和 $3$ 之间交替，规律清晰。

第三步：求 $\displaystyle\sum_{n=1}^{39} a_n$

$$\sum_{n=1}^{39} a_n = 3 \sum_{n=1}^{39} (-1)^n$$

从 $n=1$ 到 $39$，奇数项共 $20$ 个（各为 $-1$），偶数项共 $19$ 个（各为 $+1$）：

$$\sum_{n=1}^{39} (-1)^n = 20 \times (-1) + 19 \times 1 = -1$$

因此

$$\sum_{n=1}^{39} a_n = 3 \times (-1) = -3$$

【快捷思路】
每相邻两项之和为零（$a_{2k-1}+a_{2k} = -3+3 = 0$）。$39$ 项中有 $19$ 对完整的零和项，只剩最后一项 $a_{39} = 3 \cdot (-1)^{39} = -3$，即得答案。

【正确答案】B
 and Series

---

### 第4题（2017 P1 Q3 · Coordinate Geometry）

**考纲**：MM3.1-MM3.3

**题目**：A line $l$ has equation $y = 6 - 2x$

A second line is perpendicular to $l$ and passes through the point $(-6, 0)$.

Find the area of the region enclosed by the two lines and the $x$-axis.

**选项**：
- **A**：$16 \frac{1}{5}$
- **B**：18
- **C**：$21 \frac{3}{5}$
- **D**：27
- **E**：$40 \frac{1}{2}$

**正确答案**：A

【题目分析】
本题考点为坐标几何中的直线方程与面积计算。需要求垂直直线的方程、两直线交点，再求与 $x$ 轴围成的三角形面积。

【解题步骤】
第一步：确定第二条直线的方程。直线 $l: y = 6-2x$ 的斜率为 $-2$，与之垂直的直线斜率为 $\frac{1}{2}$。过点 $(-6,0)$，方程为：
$$y - 0 = \frac{1}{2}(x + 6) \quad \Rightarrow \quad y = \frac{1}{2}x + 3$$

第二步：求两直线与 $x$ 轴的交点。
直线 $l$ 与 $x$ 轴交于 $y=0 \Rightarrow x=3$，即点 $A(3,0)$。
第二条直线与 $x$ 轴交于 $y=0 \Rightarrow x=-6$，即点 $B(-6,0)$。

第三步：求两直线的交点。联立方程：
$$6 - 2x = \frac{1}{2}x + 3 \quad \Rightarrow \quad \frac{5}{2}x = 3 \quad \Rightarrow \quad x = \frac{6}{5}$$
代入得 $y = \frac{1}{2}\cdot\frac{6}{5} + 3 = \frac{18}{5}$，即交点 $C\left(\frac{6}{5}, \frac{18}{5}\right)$。

第四步：计算三角形面积。底边 $AB$ 长为 $3 - (-6) = 9$，高为交点的纵坐标 $\frac{18}{5}$：
$$\text{面积} = \frac{1}{2} \times 9 \times \frac{18}{5} = \frac{81}{5} = 16\frac{1}{5}$$

对应选项 A。

【快捷思路】
底边长度 $9$ 可直接读出（两直线与 $x$ 轴交点横坐标之差），只需计算交点纵坐标代入面积公式即可。

【正确答案】A
 Geometry

---

### 第5题（2016 P1 Q8 · Trigonometry）

**考纲**：MM4.1-MM4.6

**题目**：Find the maximum angle $x$ in the range $0^\circ \le x \le 360^\circ$ which satisfies the equation

$$\cos^2(2x) + \sqrt{3} \sin(2x) - \frac{7}{4} = 0$$

**选项**：
- **A**：$30^\circ$
- **B**：$60^\circ$
- **C**：$120^\circ$
- **D**：$150^\circ$
- **E**：$210^\circ$
- **F**：$240^\circ$
- **G**：$300^\circ$
- **H**：$330^\circ$

**正确答案**：F

【题目分析】
本题考查三角方程求解。利用 $\cos^2\theta = 1 - \sin^2\theta$ 化为关于 $\sin(2x)$ 的二次方程。

【解题步骤】
Step 1：代入得 $\sin^2(2x) - \sqrt{3}\sin(2x) + \frac{3}{4} = 0$。

Step 2：令 $t = \sin(2x)$，得 $t^2 - \sqrt{3}\,t + \frac{3}{4} = 0$。判别式 $\Delta = 0$，重根 $t = \dfrac{\sqrt{3}}{2}$。

Step 3：$x \in [0^\circ, 360^\circ]$ 则 $2x \in [0^\circ, 720^\circ]$。$\sin(2x) = \dfrac{\sqrt{3}}{2}$ 的解为 $2x = 60^\circ, 120^\circ, 420^\circ, 480^\circ$。

Step 4：$x = 30^\circ, 60^\circ, 210^\circ, 240^\circ$，最大值为 $240^\circ$。

【快捷思路】
判别式为零，$2x$ 最大解 $480^\circ$，即 $x = 240^\circ$。

---

### 第6题（2020 P1 Q15 · Algebra）

**考纲**：MM1.1-MM1.7

**题目**：Find the positive difference between the two real values of $x$ for which

$$(\log_2 x)^4 + 12 \left( \log_2 \left( \frac{1}{x} \right) \right)^2 - 2^6 = 0$$

**选项**：
- **A**：4
- **B**：16
- **C**：$\frac{15}{4}$
- **D**：$\frac{17}{4}$
- **E**：$\frac{255}{16}$
- **F**：$\frac{257}{16}$

**正确答案**：C

【题目分析】
解方程 $(\log_2 x)^4 + 12\left(\log_2 \frac{1}{x}\right)^2 - 2^6 = 0$，求两个实数 $x$ 的正差。

【解题步骤】

首先化简：$\log_2 \frac{1}{x} = -\log_2 x$，所以 $\left(\log_2 \frac{1}{x}\right)^2 = (\log_2 x)^2$

$2^6 = 64$，方程变为：

$(\log_2 x)^4 + 12(\log_2 x)^2 - 64 = 0$

设 $y = (\log_2 x)^2 \geq 0$，则：

$y^2 + 12y - 64 = 0$

因式分解：$(y + 16)(y - 4) = 0$

$y = -16$（舍去）或 $y = 4$

所以 $(\log_2 x)^2 = 4$，得 $\log_2 x = 2$ 或 $\log_2 x = -2$

$x = 2^2 = 4$ 或 $x = 2^{-2} = \frac{1}{4}$

正差 $= 4 - \frac{1}{4} = \frac{15}{4}$

对应选项 C。

---

### 第7题（2016 P1 Q3 · Differentiation）

**考纲**：MM6.1-MM6.3

**题目**：A line is drawn normal to the curve $y = \frac{2}{x^2}$ at the point on the curve where $x = 1$.

This line cuts the $x$-axis at $P$ and the $y$-axis at $Q$.

The length of $PQ$ is

**选项**：
- **A**：$\frac{3\sqrt{5}}{2}$
- **B**：$\frac{3\sqrt{17}}{4}$
- **C**：$\frac{7\sqrt{17}}{4}$
- **D**：$\frac{35}{4}$
- **E**：$\frac{35\sqrt{5}}{2}$
- **F**：$\frac{3\sqrt{17}}{2}$

**正确答案**：C

【题目分析】
本题考查导数的几何意义与法线方程。先求曲线在指定点的导数（切线斜率），取负倒数得法线斜率，写出法线方程后求其与两坐标轴的交点，最后用距离公式计算 $PQ$。

【解题步骤】
第一步：求切点坐标

当 $x = 1$ 时，$y = \dfrac{2}{1^2} = 2$，切点为 $(1, 2)$。

第二步：求导数与切线斜率

$$y = 2x^{-2} \quad \Rightarrow \quad \frac{dy}{dx} = -4x^{-3} = -\frac{4}{x^3}$$

在 $x = 1$ 处，切线斜率为 $y'(1) = -4$。

第三步：求法线斜率与法线方程

法线斜率为切线斜率的负倒数：

$$m_{\text{法线}} = -\frac{1}{-4} = \frac{1}{4}$$

法线过点 $(1, 2)$，方程为

$$y - 2 = \frac{1}{4}(x - 1)$$

第四步：求与坐标轴交点

与 $x$ 轴交点 $P$：令 $y = 0$，得 $-2 = \dfrac{1}{4}(x-1)$，解得 $x = -7$，即 $P(-7, 0)$。

与 $y$ 轴交点 $Q$：令 $x = 0$，得 $y - 2 = -\dfrac{1}{4}$，解得 $y = \dfrac{7}{4}$，即 $Q\!\left(0, \dfrac{7}{4}\right)$。

第五步：计算 $PQ$ 长度

$$PQ = \sqrt{(-7)^2 + \left(\frac{7}{4}\right)^2} = \sqrt{49 + \frac{49}{16}} = \sqrt{\frac{833}{16}}$$

注意到 $833 = 49 \times 17$，因此

$$PQ = \frac{\sqrt{49 \times 17}}{4} = \frac{7\sqrt{17}}{4}$$

【快捷思路】
法线斜率 $m = \dfrac{1}{4}$，$x$ 截距绝对值为 $7$。由斜率与 $x$ 截距可直接写出斜边 $PQ = 7 \times \dfrac{\sqrt{1^2+4^2}}{4} = \dfrac{7\sqrt{17}}{4}$，省去单独求 $Q$ 点坐标的步骤。

---

### 第8题（2016 P1 Q5 · Integration）

**考纲**：MM7.1-MM7.6

**题目**：What is the total area enclosed between the curve $y = x^2 - 1$, the $x$-axis and the lines $x = -2$ and $x = 2$?

**选项**：
- **A**：$\frac{4}{3}$
- **B**：$\frac{8}{3}$
- **C**：4
- **D**：$\frac{16}{3}$
- **E**：12
- **F**：16

**正确答案**：C

【题目分析】
本题考查定积分求曲线与坐标轴围成的面积。抛物线 $y = x^2 - 1$ 在 $[-2, 2]$ 上跨越 $x$ 轴，需分段积分取绝对值。

【解题步骤】
Step 1：找零点。令 $x^2 - 1 = 0$，得 $x = \pm 1$。$[-2, -1]$ 和 $[1, 2]$ 上 $y \ge 0$，$[-1, 1]$ 上 $y \le 0$。

Step 2：利用偶函数对称性：
$$\text{面积} = 2\left[\int_{0}^{1}(1 - x^2)\,dx + \int_{1}^{2}(x^2 - 1)\,dx\right]$$

Step 3：$\displaystyle\int_{0}^{1}(1 - x^2)\,dx = \frac{2}{3}$，$\displaystyle\int_{1}^{2}(x^2 - 1)\,dx = \frac{4}{3}$。

Step 4：面积 $= 2 \times \left(\frac{2}{3} + \frac{4}{3}\right) = 4$。

【快捷思路】
偶函数只算右半再乘 $2$，三段面积各 $\frac{4}{3}$，总计 $4$。

---

### 第9题（2022 P1 Q18 · Graphs）

**考纲**：MM8.1-MM8.7

**题目**：It is given that

$$f(x) = x^2(x - 1)^2(x - 2)$$

$$g(x) = -p(x - q)^2(x - r)^2$$

where $p$, $q$ and $r$ are positive and $q < r$

Find the set of values of $q$ and $r$ that guarantees the greatest number of distinct real solutions of the equation $f(x) = g(x)$ for all $p$.

**选项**：
- **A**：$q < 1$ and $r < 1$
- **B**：$q < 1$ and $1 < r < 2$
- **C**：$q < 1$ and $r > 2$
- **D**：$1 < q < 2$ and $1 < r < 2$
- **E**：$1 < q < 2$ and $r > 2$
- **F**：$q > 2$ and $r > 2$

**正确答案**：B

【题目分析】
给定五次多项式 $f(x)=x^2(x-1)^2(x-2)$ 和四次多项式 $g(x)=-p(x-q)^2(x-r)^2$（$p,q,r>0$，$q<r$），求使方程 $f(x)=g(x)$ 对一切 $p>0$ 都有最多不同实根的 $q,r$ 取值范围。本质是两个函数图像交点个数的讨论。

【解题步骤】
令 $h(x)=f(x)-g(x)$，方程 $f(x)=g(x)$ 即 $h(x)=0$。$h(x)$ 是五次多项式，最多 $5$ 个不同实根。

分析 $f(x)$ 的图像：零点为 $x=0$（二重根，切 $x$ 轴）、$x=1$（二重根，切 $x$ 轴）、$x=2$（单根）。当 $x>2$ 时 $f(x)>0$，当 $x<2$ 时 $f(x)\le 0$，在 $x=0$ 和 $x=1$ 附近形成两个下凹的谷。

分析 $g(x)$ 的图像：$g(x)\le 0$ 恒成立，在 $x=q$ 和 $x=r$ 处切 $x$ 轴，形成上凸的峰。

要使交点始终为 $5$ 个，$g(x)$ 的峰必须覆盖 $f(x)$ 的两个谷，即 $q$ 和 $r$ 分别落在两个谷内。若 $r>2$ 或 $r<1$，当 $p$ 很大时 $g(x)$ 的峰会过高而跳过其中一个谷，交点不超过 $3$ 个。因此必须有 $1<r<2$。

同理，若 $q>1$（即 $1<q<r$），则左谷未被覆盖，故必须 $q<1$。此时 $g(1)<0$，峰覆盖两个谷各产生两个交点（共 $4$ 个），再加上 $x<0$ 处由于 $f(x)$ 是五次而 $g(x)$ 是四次，当 $x\to-\infty$ 时 $f(x)$ 下降更快，必有第 $5$ 个交点。

验证边界：$q=1$ 时在 $x=1$ 处出现二重根，不足 $5$ 个不同根；$r=2$ 时因 $x=2$ 是 $f(x)$ 的单根仍可保持 $5$ 个不同根。选项中最匹配的是 $q<1$ 且 $1<r<2$。

【快捷思路】
抓住核心：五次多项式最多 $5$ 个实根，$g(x)$ 需覆盖 $f(x)$ 的两个谷。观察零点分布即可判断 $q\in(0,1)$，$r\in(1,2)$。

---

### 第10题（2018 P1 Q5 · Functions）

**考纲**：MM1.7, MM8.1-MM8.7

**题目**：The function f is defined by $f(x) = x^3 + ax^2 + bx + c$.

$a, b$ and $c$ take the values 1, 2 and 3 with no two of them being equal and not necessarily in this order.

The remainder when $f(x)$ is divided by $(x + 2)$ is $R$.

The remainder when $f(x)$ is divided by $(x + 3)$ is $S$.

What is the largest possible value of $R - S$?

**选项**：
- **A**：$-26$
- **B**：$5$
- **C**：$7$
- **D**：$17$
- **E**：$29$

**正确答案**：D

【题目分析】
给定三次多项式 $f(x)=x^3+ax^2+bx+c$，其中 $a,b,c$ 是 $\{1,2,3\}$ 的一个排列（互不相等）。记 $R$ 为 $f(x)$ 除以 $(x+2)$ 的余数，$S$ 为 $f(x)$ 除以 $(x+3)$ 的余数，求 $R-S$ 的最大可能值。

本题核心工具是余数定理：$f(x)$ 除以 $(x-p)$ 的余数等于 $f(p)$。因此 $R=f(-2)$，$S=f(-3)$。

【解题步骤】
由余数定理：
$R=f(-2)=-8+4a-2b+c$
$S=f(-3)=-27+9a-3b+c$

作差得：
$R-S=(-8+4a-2b+c)-(-27+9a-3b+c)=19-5a+b$

要使 $R-S$ 最大，需 $-5a+b$ 最大。由于 $a$ 的系数为负，应取 $a$ 尽可能小；$b$ 的系数为正，应取 $b$ 尽可能大。$a,b,c$ 为 $\{1,2,3\}$ 的排列，故取 $a=1$，$b=3$，$c=2$。

此时 $R-S=19-5\times 1+3=17$。

【快捷思路】
直接作差消去 $c$，得到 $R-S=19-5a+b$。由于 $a$ 的系数绝对值远大于 $b$，优先让 $a$ 取最小值 $1$，再让 $b$ 取最大值 $3$，立即得到答案 $17$。

---

### 第11题（2018 P1 Q14 · Algebra）

**考纲**：MM1.1-MM1.7

**题目**：The line $y = mx + 4$ passes through the points $(3, \log_2 p)$ and $(\log_2 p, 4)$.

What are the possible values of $p$?

**选项**：
- **A**：$p = 1$ and $p = 4$
- **B**：$p = 1$ and $p = 16$
- **C**：$p = \frac{1}{4}$ and $p = 4$
- **D**：$p = \frac{1}{4}$ and $p = 64$
- **E**：$p = \frac{1}{64}$ and $p = 4$
- **F**：$p = \frac{1}{64}$ and $p = 16$

**正确答案**：B

【题目分析】
已知直线 $y = mx + 4$ 经过两点 $(3, \log_2 p)$ 和 $(\log_2 p, 4)$，求 $p$ 的可能值。本题将直线方程与对数运算结合，考查代入法求解参数。
【解题步骤】
将两点分别代入直线方程：
$\log_2 p = 3m + 4$ …… (1)
$4 = m \log_2 p + 4$ …… (2)

由 (2) 得 $m \log_2 p = 0$，因此 $m = 0$ 或 $\log_2 p = 0$。

情况一：$m = 0$，代入 (1) 得 $\log_2 p = 4$，故 $p = 2^4 = 16$。
情况二：$\log_2 p = 0$，则 $p = 2^0 = 1$，代入 (1) 得 $3m + 4 = 0$，即 $m = -4/3$，存在解。

综上，$p = 1$ 或 $p = 16$。
【快捷思路】
令 $q = \log_2 p$ 简化记号，方程组变为 $q = 3m + 4$ 和 $4 = mq + 4$。由第二个方程立刻得到 $mq = 0$，分 $m = 0$ 和 $q = 0$ 两种情况讨论即可，避免反复书写 $\log_2 p$。

---

### 第12题（2019 P1 Q12 · Integration）

**考纲**：MM7.1-MM7.6

**题目**：It is given that

$$\frac{dV}{dt} = \frac{24\pi(t - 1)}{(1 + \sqrt{t})} \text{ for } t \geq 1$$

and $V = 7$ when $t = 1$.

Find the value of $V$ when $t = 9$.

**选项**：
- **A**：$208\pi + 7$
- **B**：$216\pi + 7$
- **C**：$224\pi + 7$
- **D**：$416\pi + 7$
- **E**：$608\pi + 7$
- **F**：$744\pi + 7$

**正确答案**：C

【题目分析】
已知 $\frac{dV}{dt} = \frac{24\pi(t-1)}{1+\sqrt{t}}$（$t \geq 1$），且 $V(1) = 7$，求 $V(9)$。

【化简】
注意到 $t-1 = (\sqrt{t}+1)(\sqrt{t}-1)$，所以：
$\frac{dV}{dt} = 24\pi(\sqrt{t}-1)$

【积分】
$V = 24\pi \left( \frac{2}{3}t^{3/2} - t \right) + c$
$V = 16\pi t^{3/2} - 24\pi t + c$

代入 $t = 1$，$V = 7$：
$7 = 16\pi - 24\pi + c$
$c = 8\pi + 7$

当 $t = 9$：
$V = 16\pi \times 9^{3/2} - 24\pi \times 9 + 8\pi + 7$
$= (16 \times 27 - 24 \times 9 + 8)\pi + 7$
$= (432 - 216 + 8)\pi + 7$
$= 224\pi + 7$

对应选项 C。

---

### 第13题（2021 P1 Q8 · Coordinate Geometry）

**考纲**：MM3.1-MM3.3

**题目**：The line $y = 2x + 3$ meets the curve $y = x^2 + bx + c$ at exactly one point.

The line $y = 4x - 2$ also meets the curve $y = x^2 + bx + c$ at exactly one point.

What is the value of $b - c$?

**选项**：
- **A**：$-9$
- **B**：$-5.5$
- **C**：$-1$
- **D**：$5$
- **E**：$6$
- **F**：$14$

**正确答案**：A

【题目分析】
直线 $y = 2x+3$ 和 $y = 4x-2$ 分别与抛物线 $y = x^2+bx+c$ 恰有一个交点（相切），求 $b-c$。

【解题步骤】
直线与抛物线相切 $\Leftrightarrow$ 联立方程有重根 $\Leftrightarrow$ 判别式 $= 0$

**直线1：** $x^2 + bx + c = 2x + 3$，即 $x^2 + (b-2)x + (c-3) = 0$
$(b-2)^2 - 4(c-3) = 0$ ……①

**直线2：** $x^2 + bx + c = 4x - 2$，即 $x^2 + (b-4)x + (c+2) = 0$
$(b-4)^2 - 4(c+2) = 0$ ……②

展开整理：
①：$b^2 - 4b - 4c = -16$
②：$b^2 - 8b - 4c = -8$

相减：$4b = -8$，$b = -2$

代入①：$4 + 8 - 4c = -16$，$c = 7$

$b - c = -2 - 7 = -9$

对应选项 A。

---

### 第14题（2019 P1 Q17 · Trigonometry）

**考纲**：MM4.1-MM4.6

**题目**：Find the fraction of the interval $0 \le \theta \le \pi$ for which the inequality

$$(\sin(2\theta) - \frac{1}{2}) (\sin \theta - \cos \theta) \ge 0$$

is satisfied.

**选项**：
- **A**：$\frac{1}{12}$
- **B**：$\frac{1}{6}$
- **C**：$\frac{1}{4}$
- **D**：$\frac{5}{12}$
- **E**：$\frac{7}{12}$
- **F**：$\frac{3}{4}$
- **G**：$\frac{5}{6}$
- **H**：$\frac{11}{12}$

**正确答案**：C

【题目分析】
求 $(\sin 2\theta - 1)(\sin \theta - \cos \theta) \geq 0$ 在 $0 \leq \theta \leq \pi$ 上的解区间占总区间的比例。

【分析符号】
乘积 $\geq 0$ 当且仅当两因子同号（均非负或均非正）。

在 $0 \leq \theta \leq \pi$ 上：
- $\sin 2\theta - 1 \leq 0$ 恒成立（因为 $\sin 2\theta \leq 1$）
- $\sin \theta - \cos \theta < 0$ 当 $\theta < \frac{\pi}{4}$
- $\sin \theta - \cos \theta > 0$ 当 $\theta > \frac{\pi}{4}$

【确定区间】
两因子同号：
- 均非正：$\theta \in \left[0, \frac{\pi}{4}\right]$（两因子均 $\leq 0$）
- 均非负：仅 $\theta = \frac{5\pi}{4}$ 满足（不在 $[0,\pi]$ 内，舍去）

故不等式成立的区间为 $\left[0, \frac{\pi}{4}\right]$。
总长度 $= \frac{\pi}{4}$。

占总区间 $\pi$ 的比例 $= \frac{\pi/4}{\pi} = \frac{1}{4}$。

对应选项 A。

---

### 第15题（2020 P1 Q4 · Algebra）

**考纲**：MM1.1-MM1.7

**题目**：The 1<sup>st</sup>, 2<sup>nd</sup> and 3<sup>rd</sup> terms of a geometric progression are also the 1<sup>st</sup>, 4<sup>th</sup> and 6<sup>th</sup> terms, respectively, of an arithmetic progression.

The sum to infinity of the geometric progression is 12.

Find the 1<sup>st</sup> term of the geometric progression.

**选项**：
- **A**：1
- **B**：2
- **C**：3
- **D**：4
- **E**：5
- **F**：6

**正确答案**：D

【题目分析】
几何数列前3项也是某算术数列的第1、4、6项。几何数列无穷和 $= 12$。求首项。

【解题步骤】
设几何数列首项 $a$，公比 $r$。前3项：$a$, $ar$, $ar^2$
无穷和：$\frac{a}{1-r} = 12$，即 $a = 12(1-r)$ ……①

设算术数列首项 $a$，公差 $d$。第1、4、6项：$a$, $a+3d$, $a+5d$

所以 $ar = a+3d$ ……②，$ar^2 = a+5d$ ……③

消去 $d$：$5 \times$② $- 3 \times$③ 得 $5ar - 3ar^2 = 2a$
除以 $a$（$a \neq 0$）：$5r - 3r^2 = 2$，即 $3r^2 - 5r + 2 = 0$
因式分解：$(3r-2)(r-1) = 0$，$r = \frac{2}{3}$ 或 $r = 1$

$r = 1$ 时无穷和发散，舍去。
$r = \frac{2}{3}$：$a = 12(1 - \frac{2}{3}) = 12 \cdot \frac{1}{3} = 4$

对应选项 D。

---

### 第16题（2017 P1 Q7 · Sequences and Series）

**考纲**：MM2.1-MM2.4

**题目**：The first three terms of an arithmetic progression are $p$, $q$ and $p^2$ respectively, where $p < 0$

The first three terms of a geometric progression are $p$, $p^2$ and $q$ respectively.

Find the sum of the first 10 terms of the arithmetic progression.

**选项**：
- **A**：$\frac{23}{8}$
- **B**：$\frac{95}{8}$
- **C**：$\frac{115}{8}$
- **D**：$\frac{185}{8}$

**正确答案**：B

【题目分析】
已知等差数列前三项为 $p, q, p^2$（$p < 0$），等比数列前三项为 $p, p^2, q$，求等差数列前 10 项和。本题需要联立两种数列的定义，建立关于 $p$ 的方程。

【解题步骤】
先利用等比数列：公比 $r = \frac{p^2}{p} = p$，第三项 $q = p \cdot r = p^3$。

再利用等差数列：公差 $d = q - p$，第三项 $p + 2d = p^2$。代入 $q = p^3$ 得：
$$p + 2(p^3 - p) = p^2 \implies 2p^3 - p^2 - p = 0$$
因式分解：$p(2p+1)(p-1) = 0$。

由条件 $p < 0$ 且 $p \neq 0$，得 $p = -\frac{1}{2}$。进而 $q = p^3 = -\frac{1}{8}$，公差 $d = q - p = \frac{3}{8}$。

等差数列前 $n$ 项和公式 $S_n = \frac{n}{2}[2a + (n-1)d]$，代入 $n = 10$，$a = -\frac{1}{2}$，$d = \frac{3}{8}$：
$$S_{10} = 5 \times \left(-1 + \frac{27}{8}\right) = 5 \times \frac{19}{8} = \frac{95}{8}$$

【快捷思路】
联立等差与等比条件直接消去 $q$ 和 $d$：由等比得 $q = p^3$，由等差得 $2q = p + p^2$，联立即 $2p^3 - p^2 - p = 0$，解出 $p$ 后代入求和公式。

【正确答案】B and Series

---

### 第17题（2020 P1 Q1 · Differentiation）

**考纲**：MM6.1-MM6.3

**题目**：Which of the following is an expression for the first derivative with respect to $x$ of

$$\frac{x^3 - 5x^2}{2x\sqrt{x}}$$

**选项**：
- **A**：$-\frac{\sqrt{x}}{2}$
- **B**：$\frac{\sqrt{x}}{4}$
- **C**：$\frac{3x - 5}{4\sqrt{x}}$
- **D**：$\frac{3\sqrt{x} - 5}{4\sqrt{x}}$
- **E**：$\frac{3\sqrt{x} - 10}{3\sqrt{x}}$
- **F**：$\frac{3x^2 - 10x}{3\sqrt{x}}$

**正确答案**：C

【题目分析】
求 $f(x) = \frac{x^3 - 5x^2}{2x\sqrt{x}}$ 的导数。

【解题步骤】
先将表达式写成 $x$ 的幂次形式：

$f(x) = \frac{x^3 - 5x^2}{2x^{3/2}} = \frac{x^3}{2x^{3/2}} - \frac{5x^2}{2x^{3/2}} = \frac{1}{2}x^{3/2} - \frac{5}{2}x^{1/2}$

对各项求导：

$f'(x) = \frac{1}{2} \cdot \frac{3}{2}x^{1/2} - \frac{5}{2} \cdot \frac{1}{2}x^{-1/2} = \frac{3}{4}x^{1/2} - \frac{5}{4}x^{-1/2}$

将结果整理为选项中的形式：

$f'(x) = \frac{3\sqrt{x}}{4} - \frac{5}{4\sqrt{x}} = \frac{3\sqrt{x} \cdot \sqrt{x} - 5}{4\sqrt{x}} = \frac{3x - 5}{4\sqrt{x}}$

这对应选项 C。

---

### 第18题（2017 P1 Q17 · Integration）

**考纲**：MM7.1-MM7.6

**题目**：The two functions $F(n)$ and $G(n)$ are defined as follows for positive integers $n$:

$$F(n) = \frac{1}{n} \int_{0}^{n} (n - x) \, dx$$

$$G(n) = \sum_{r=1}^{n} F(r)$$

What is the smallest positive integer $n$ such that $G(n) > 150$?

**选项**：
- **A**：22
- **B**：23
- **C**：24
- **D**：25
- **E**：26

**正确答案**：D

【题目分析】
本题考查积分与数列求和的综合应用。先由定积分求 $F(n)$，再求和得 $G(n)$，最后解不等式求最小 $n$。

【解题步骤】
计算 $F(n)$：
$$F(n)=\frac{1}{n}\int_{0}^{n}(n-x)\,dx=\frac{1}{n}\left[nx-\frac{x^2}{2}\right]_{0}^{n}=\frac{n}{2}$$
求和得：
$$G(n)=\sum_{r=1}^{n}\frac{r}{2}=\frac{1}{2}\cdot\frac{n(n+1)}{2}=\frac{n(n+1)}{4}$$
解 $G(n) > 150$ 即 $n(n+1) > 600$：
$24\times 25=600$，$G(24)=150$ 不满足；$25\times 26=650$，$G(25)=162.5>150$。

【快捷思路】
几何法：$y=n-x$ 在 $[0,n]$ 上围成面积为 $n^2/2$ 的三角形，$F(n)=n/2$。利用三角数公式直接写出 $G(n)$。试值从 $25$ 入手，$25^2=625$，$25\times 26=650>600$。

---

### 第19题（2021 P1 Q1 · Coordinate Geometry）

**考纲**：MM3.1-MM3.3

**题目**：Two circles have the same radius.

The centre of one circle is (–2, 1).

The centre of the other circle is (3, –2).

The circles intersect at two distinct points.

What is the equation of the straight line through the two points at which the circles intersect?

**选项**：
- **A**：$3x - 5y = 4$
- **B**：$3x + 5y = -1$
- **C**：$5x - 3y = -4$
- **D**：$5x - 3y = -1$
- **E**：$5x - 3y = 1$
- **F**：$5x - 3y = 4$
- **G**：$5x + 3y = 1$

**正确答案**：F

【题目分析】
两圆半径相同，相交于两点，求交点连线方程。

【解题步骤——方法1：联立方程】

设两圆半径均为 $r$，则：
$(x+2)^2 + (y-1)^2 = r^2$
$(x-3)^2 + (y+2)^2 = r^2$

展开：
$x^2 + 4x + 4 + y^2 - 2y + 1 = r^2$
$x^2 - 6x + 9 + y^2 + 4y + 4 = r^2$

两式相减，消去 $x^2, y^2, r^2$：
$10x - 6y - 8 = 0$

化简得 $5x - 3y = 4$

对应选项 F。

【解题步骤——方法2：几何法】

两圆半径相同，交点连线是圆心连线的中垂线。

圆心 $O_1 = (-2, 1)$，$O_2 = (3, -2)$

中点 $M = \left(\frac{1}{2}, -\frac{1}{2}\right)$

$O_1O_2$ 斜率 $= \frac{-2-1}{3-(-2)} = -\frac{3}{5}$

中垂线斜率 $= \frac{5}{3}$

方程：$y - \left(-\frac{1}{2}\right) = \frac{5}{3}\left(x - \frac{1}{2}\right)$

化简得 $5x - 3y = 4$，对应选项 F。

---

### 第20题（2022 P1 Q14 · Trigonometry）

**考纲**：MM4.1-MM4.6

**题目**：A circle has centre $O$ and radius 6.

$P, Q$ and $R$ are points on the circumference with angle $POQ \geq \frac{\pi}{2}$

The area of the triangle $POQ$ is $9\sqrt{3}$

What is the greatest possible area of triangle $PRQ$?

**选项**：
- **A**：$18 + 9\sqrt{3}$
- **B**：$18\sqrt{3}$
- **C**：$27 + 9\sqrt{3}$
- **D**：$27\sqrt{3}$
- **E**：$36 + 9\sqrt{3}$
- **F**：$36\sqrt{3}$

**正确答案**：D

【题目分析】
圆 $O$ 半径为 $6$，$P$、$Q$、$R$ 在圆周上，$\angle POQ \geq \frac{\pi}{2}$，三角形 $POQ$ 面积为 $9\sqrt{3}$。求三角形 $PRQ$ 面积的最大值。这是圆的几何与三角函数综合题。

【解题步骤】
第一步，利用三角形面积公式 $A = \frac{1}{2}ab \sin C$ 求 $\angle POQ$。设 $\angle POQ = 2\theta$，则
$\frac{1}{2} \times 6 \times 6 \times \sin 2\theta = 9\sqrt{3}$，得 $\sin 2\theta = \frac{\sqrt{3}}{2}$。
由 $2\theta \geq \frac{\pi}{2}$ 知 $2\theta = \frac{2\pi}{3}$，即 $\theta = \frac{\pi}{3}$。

第二步，求弦 $PQ$ 的长度。作 $O$ 到 $PQ$ 的垂线交于 $S$，则 $PS = 6 \sin\theta = 6 \sin\frac{\pi}{3} = 3\sqrt{3}$，故 $PQ = 6\sqrt{3}$。同时 $OS = 6 \cos\theta = 6 \cos\frac{\pi}{3} = 3$。

第三步，固定 $PQ$ 为底边，三角形 $PRQ$ 的面积为 $\frac{1}{2} \times PQ \times h$，其中 $h$ 是 $R$ 到 $PQ$ 的距离。$R$ 在圆周上，$h$ 的最大值出现在 $R$ 位于 $PQ$ 对侧最远处，此时高为 $RO + OS = 6 + 3 = 9$。

第四步，最大面积为 $\frac{1}{2} \times 6\sqrt{3} \times 9 = 27\sqrt{3}$。

【快捷思路】
核心思想是固定底边 $PQ$ 后面积仅取决于高。圆上一点到固定弦的最大距离等于半径加弦心距，直接得到最大高为 $6+3=9$，一步算出结果。

---



## 📝 Paper 2 模拟题（Mathematical Reasoning）

> **考试要求**：75 分钟完成 20 题，每题约 3.75 分钟。需要阅读并分析数学论证。
> **策略提示**：P2 重推理而非计算。仔细分析每一步推导的合理性，注意逻辑连接词。

### 第1题（2016 P2 Q4 · Logic）

**考纲**：Arg1-Arg4

**题目**：Five sealed urns, labelled P, Q, R, S, and T, each contain the **same** (non-zero) number of balls. The following statements are attached to the urns.

Urn P This urn contains one or four balls.

Urn Q This urn contains two or four balls.

Urn R This urn contains more than two balls and fewer than five balls.

Urn S This urn contains one or two balls.

Urn T This urn contains fewer than three balls.

Exactly one of the urns has a true statement attached to it.

Which urn is it?

**选项**：
- **A**：Urn P
- **B**：Urn Q
- **C**：Urn R
- **D**：Urn S
- **E**：Urn T

**正确答案**：C

【题目分析】
本题考查逻辑推理。五个瓮装有相同数量$n$个球（$n > 0$），每个瓮附有一条关于$n$的陈述，且恰有一条陈述为真。各陈述对应的$n$的取值集合分别为：$P:\{1,4\}$，$Q:\{2,4\}$，$R:\{3,4\}$，$S:\{1,2\}$，$T:\{1,2\}$（即$n < 3$）。关键观察：当$n=1$时$P$和$S$同时为真，当$n=2$时$Q$、$S$、$T$同时为真，当$n=4$时$P$和$Q$同时为真。唯有$n=3$时仅$R$为真，其余全假。

【解题步骤】
逐一假设某瓮的陈述为真，检验是否导致矛盾：
- 假设$P$为真：$n \in \{1,4\}$。若$n=1$则$S$也真（矛盾）；若$n=4$则$Q$也真（矛盾）。
- 假设$Q$为真：$n \in \{2,4\}$。若$n=2$则$S$和$T$也真（矛盾）；若$n=4$则$P$也真（矛盾）。
- 假设$R$为真：$n \in \{3,4\}$。若$n=4$则$P$也真（矛盾）；若$n=3$，验证$P$假、$Q$假、$S$假、$T$假，全部通过。
- 假设$S$为真：$n \in \{1,2\}$。若$n=1$则$P$也真；若$n=2$则$Q$也真。均矛盾。
- 假设$T$为真：$n < 3$即$n \in \{1,2\}$，此时$S$也真（矛盾）。

唯一无矛盾情形：$n=3$，$R$的陈述为真。

【快捷思路】
注意到$S$和$T$的集合存在包含关系（$n<3$蕴含$n \in \{1,2\}$），故$T$为真时$S$必为真，直接排除。剩余只需检验$P$、$Q$、$R$三种情况。

---

### 第2题（2016 P2 Q9 · Proof）

**考纲**：Prf1-Prf5

**题目**：Triangles $ABC$ and $XYZ$ have the **same area**.

Which of these extra conditions, taken independently, would **imply** that they are congruent?

**(1)** $AB = XY$ **and** $BC = YZ$

**(2)** $AB = XY$ **and** $\angle ABC = \angle XYZ$

**(3)** $\angle ABC = \angle XYZ$ **and** $\angle BCA = \angle YZX$

<table>
  <thead>
    <tr>
        <th> </th>
        <th>Condition (1)</th>
        <th>Condition (2)</th>
        <th>Condition (3)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>A</td>
<td>Does not imply congruent</td>
<td>Does not imply congruent</td>
<td>Does not imply congruent</td>
    </tr>
<tr>
        <td>B</td>
<td>Does not imply congruent</td>
<td>Does not imply congruent</td>
<td>Implies congruent</td>
    </tr>
<tr>
        <td>C</td>
<td>Does not imply congruent</td>
<td>Implies congruent</td>
<td>Does not imply congruent</td>
    </tr>
<tr>
        <td>D</td>
<td>Does not imply congruent</td>
<td>Implies congruent</td>
<td>Implies congruent</td>
    </tr>
<tr>
        <td>E</td>
<td>Implies congruent</td>
<td>Does not imply congruent</td>
<td>Does not imply congruent</td>
    </tr>
<tr>
        <td>F</td>
<td>Implies congruent</td>
<td>Does not imply congruent</td>
<td>Implies congruent</td>
    </tr>
<tr>
        <td>G</td>
<td>Implies congruent</td>
<td>Implies congruent</td>
<td>Does not imply congruent</td>
    </tr>
<tr>
        <td>H</td>
<td>Implies congruent</td>
<td>Implies congruent</td>
<td>Implies congruent</td>
    </tr>
  </tbody>
</table>

**选项**：
- **A**：Option A
- **B**：Option B
- **C**：Option C
- **D**：Option D
- **E**：Option E
- **F**：Option F
- **G**：Option G
- **H**：Option H

**正确答案**：D

【题目分析】
已知 $\triangle ABC$ 与 $\triangle XYZ$ 面积相等，判断三个额外条件中哪些能独立推出两三角形全等。本题核心在于将面积公式与全等判定定理（SSS、SAS、ASA）结合使用，注意面积相等本身不足以保证全等。

【解题步骤】
条件（1）：$AB = XY$ 且 $BC = YZ$。由面积公式 $\frac{1}{2}AB\cdot BC\sin B = \frac{1}{2}XY\cdot YZ\sin Y$，已知两边相等，可得 $\sin B = \sin Y$。但 $\sin B = \sin Y$ 不能推出 $B = Y$，因为可能有 $Y = 180^\circ - B$。此时两边夹角不等，无法用 SAS 判定全等。反例存在，故不推出全等。

条件（2）：$AB = XY$ 且 $\angle ABC = \angle XYZ$。面积相等给出 $\frac{1}{2}AB\cdot BC\sin B = \frac{1}{2}XY\cdot YZ\sin Y$。已知 $AB = XY$、$\angle B = \angle Y$（角度在 $(0,180^\circ)$ 内正弦为正），消去后得 $BC = YZ$。于是两边及其夹角对应相等，由 SAS 判定全等。

条件（3）：$\angle ABC = \angle XYZ$ 且 $\angle BCA = \angle YZX$。两角相等则第三角也相等，两三角形相似。相似三角形面积比等于相似比的平方，面积相等说明相似比为 $1$，即两三角形全等。

综上，条件（2）和（3）各自推出全等，选 D。

【快捷思路】
条件（1）中 $\sin B = \sin Y$ 可能对应互补角，无法锁定夹角；条件（2）中已知一角相等，面积公式直接定出第二边，凑成 SAS；条件（3）中两角相等保证相似，面积相等将相似比锁定为 $1$。

---

### 第3题（2016 P2 Q18 · Counterexamples）

**考纲**：Prf1, Err1-Err2

**题目**：Consider this statement about a function $f(x)$:

$$(*) \text{ If } (f(x))^2 \le 1 \text{ for all } -1 \le x \le 1 \text{ then } \int_{-1}^{1} (f(x))^2 \, dx \le \int_{-1}^{1} f(x) \, dx$$

Which one of the following functions provides a **counterexample** to (*)?

**选项**：
- **A**：$f(x) = x + \frac{1}{2}$
- **B**：$f(x) = x - \frac{1}{2}$
- **C**：$f(x) = x + x^3$
- **D**：$f(x) = x - x^3$
- **E**：$f(x) = x^2 + x^4$
- **F**：$f(x) = x^2 - x^4$

**正确答案**：D

【题目分析】
为命题 $(*)$ 构造反例：若 $(f(x))^2 \leq 1$ 在 $[-1, 1]$ 上成立，则 $\int_{-1}^{1}(f(x))^2\,dx \leq \int_{-1}^{1}f(x)\,dx$。需前件真、后件假。

【解题步骤】
检验前件：A 中 $f(1) = 3/2$，平方超 $1$，排除。B 中 $f(-1) = -3/2$，排除。C、E 中 $f(1) = 2$，均排除。

仅 D 和 F 可能。对 D：$f(x) = x - x^3$，驻点 $x = \pm 1/\sqrt{3}$，极值 $2/(3\sqrt{3}) < 1$，前件真。$f$ 为奇函数，$\int_{-1}^{1}f = 0$，而 $\int_{-1}^{1}f^2 > 0$，后件假，D 是反例。

对 F：$0 \leq f(x) < 1$，故 $f^2 \leq f$，后件真，不是反例。

【快捷思路】
A、B、C、E 端点值超 $1$，秒排除。D 是奇函数，$\int f = 0 < \int f^2$，天然反例。

---

### 第4题（2017 P2 Q5 · Logic）

**考纲**：Arg1-Arg4

**题目**：Consider the following three statements:

**1** $10p^2 + 1$ and $10p^2 - 1$ are both prime when $p$ is an odd prime.

**2** Every prime greater than 5 is of the form $6n + 1$ for some integer $n$.

**3** No multiple of 7 greater than 7 is prime.

The result $91 = 7 \times 13$ can be used to provide a counterexample to which of the above statements?

**选项**：
- **A**：none of them
- **B**：1 only
- **C**：2 only
- **D**：3 only
- **E**：1 and 2 only
- **F**：1 and 3 only
- **G**：2 and 3 only
- **H**：1, 2 and 3

**正确答案**：B

【题目分析】
本题给出三个命题，要求判断 $91 = 7 \times 13$ 能作为哪个命题的反例。核心考点是理解反例的逻辑定义：对于一个全称命题（形如“对所有 $x$，某性质成立”），反例必须满足命题的前提条件，但结论不成立。

三个命题分别为：
1. 当 $p$ 为奇素数时，$10p^2 + 1$ 和 $10p^2 - 1$ 都是素数。
2. 每个大于 $5$ 的素数都是 $6n + 1$ 的形式。
3. 任何大于 $7$ 的 $7$ 的倍数都不是素数。

【解题步骤】
先将命题1改写为“若 $p$ 是奇素数，则 $10p^2 + 1$ 和 $10p^2 - 1$ 均为素数”。
若 $91$ 是反例，需存在某个奇素数 $p$ 使得 $10p^2 + 1 = 91$ 或 $10p^2 - 1 = 91$。
解 $10p^2 + 1 = 91$，得 $p^2 = 9$，$p = 3$。$3$ 是奇素数，但 $91 = 7 \times 13$ 不是素数，故命题1的结论不成立。$91$ 是命题1的反例。

对命题2，反例需为大于 $5$ 的素数且不能写成 $6n + 1$ 形式。但 $91$ 本身不是素数，无法作为反例。

对命题3，它是真命题（任何大于 $7$ 的 $7$ 的倍数均可分解为 $7 \times k$，其中 $k \geq 2$，故不是素数）。$91$ 是该命题的正面例证而非反例。

【快捷思路】
直接验证 $p = 3$（最小奇素数）：$10 \times 3^2 + 1 = 91 = 7 \times 13$，非素数，立即反驳命题1。命题3本身正确无需验证，命题2的反例需为素数而 $91$ 不是。

---

### 第5题（2018 P2 Q3 · Counterexamples）

**考纲**：Prf1, Err1-Err2

**题目**：Consider the following statement:

> A car journey consists of two parts. In the first part, the average speed is $u$ km/h. In the second part, the average speed is $v$ km/h. Hence the average speed for the whole journey is $\frac{1}{2}(u + v)$ km/h.

Which of the following examples of car journeys provide(s) a **counterexample** to the statement?

*   **I** In the first part of the journey, the car travels at a constant speed of 50 km/h for 100 km. In the second part of the journey, the car travels at a constant speed of 40 km/h for 100 km.
*   **II** In the first part of the journey, the car travels at a constant speed of 50 km/h for one hour. In the second part of the journey, the car travels at a constant speed of 40 km/h for one hour.
*   **III** In the first part of the journey, the car travels at a constant speed of 50 km/h for 80 km. In the second part of the journey, the car travels at a constant speed of 40 km/h for 100 km.

**选项**：
- **A**：none of them
- **B**：I only
- **C**：II only
- **D**：III only
- **E**：I and II only
- **F**：I and III only
- **G**：II and III only
- **H**：I, II and III

**正确答案**：F

【题目分析】
题目给出一个论断：一段行程分两部分，第一部分平均速度为 $u$，第二部分平均速度为 $v$，则全程平均速度为 $\dfrac{1}{2}(u+v)$。要求判断给出的三个具体行程中，哪些构成该论断的反例（counterexample），即哪些行程的实际平均速度不等于 $\dfrac{1}{2}(u+v)$。注意 $\dfrac{1}{2}(u+v)=\dfrac{1}{2}(50+40)=45$，只需逐一计算各行程的真实平均速度即可。

【解题步骤】
平均速度 = 总距离 $\div$ 总时间。

**行程 I**：第一段 $50$ km/h 行驶 $100$ km，用时 $t_1=2$ h；第二段 $40$ km/h 行驶 $100$ km，用时 $t_2=2.5$ h。总距离 $D=200$ km，总时间 $T=4.5$ h，平均速度 $V=\dfrac{200}{4.5}=\dfrac{400}{9}\approx 44.44\neq 45$，是反例。

**行程 II**：第一段 $50$ km/h 行驶 $1$ h，距离 $d_1=50$ km；第二段 $40$ km/h 行驶 $1$ h，距离 $d_2=40$ km。总距离 $D=90$ km，总时间 $T=2$ h，平均速度 $V=\dfrac{90}{2}=45$，恰好等于 $\dfrac{1}{2}(u+v)$，不是反例。

**行程 III**：第一段 $50$ km/h 行驶 $80$ km，用时 $t_1=1.6$ h；第二段 $40$ km/h 行驶 $100$ km，用时 $t_2=2.5$ h。总距离 $D=180$ km，总时间 $T=4.1$ h，平均速度 $V=\dfrac{180}{4.1}=\dfrac{1800}{41}\approx 43.90\neq 45$，是反例。

因此 I 和 III 是反例。

【快捷思路】
当两段时间相等时（如行程 II），平均速度恰好是算术平均 $\dfrac{u+v}{2}$；但当两段距离相等或时间不等时（如行程 I 和 III），实际平均速度是加权平均，不等于算术平均。掌握这个规律可直接判断，无需逐个计算。

---

### 第6题（2022 P2 Q9 · Logic）

**考纲**：Arg1-Arg4

**题目**：Consider the following statement:

($*$) **For all** real numbers $x$, **if** $x < k$ **then** $x^2 < k$

What is the complete set of values of $k$ for which ($*$) is true?

**选项**：
- **A**：no real numbers
- **B**：$k > 0$
- **C**：$k < 1$
- **D**：$k \le 1$
- **E**：$0 < k < 1$
- **F**：$0 < k \le 1$
- **G**：all real numbers

**正确答案**：A

【题目分析】
命题：对所有实数$x$，若$x < k$则$x^2 < k$。求使命题成立的$k$的取值范围。本题核心在于意识到$x$可以取负值，而负数的平方可能很大，这是解题的关键突破口。

【解题步骤】
对任意实数$k$，我们需要判断是否存在反例使$x < k$但$x^2 \geq k$。

情况一：$k \leq 0$。取$x = k - 1$，显然$x < k$成立。但$x^2 = (k - 1)^2 > 0$，而$k \leq 0$，故$x^2 > k$，即$x^2 < k$不成立。

情况二：$k > 0$。取$x = -\sqrt{k}$。由于$\sqrt{k} > 0$，有$x = -\sqrt{k} < 0 < k$，故$x < k$成立。但$x^2 = k$，不满足严格不等式$x^2 < k$。

综上，无论$k$取何值，总能找到反例使命题为假。

【快捷思路】
不需要分类讨论到如此细致。只需注意到：对任何$k$，总能取一个绝对值足够大的负数$x$，使得$x < k$但$x^2$非常大，自然不小于$k$。因此不存在任何$k$使命题成立。

---

### 第7题（2022 P2 Q7 · Proof）

**考纲**：Prf1-Prf5

**题目**：> The difference between two consecutive positive cube numbers is always prime.

Here is an attempted proof of this claim:

I $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$

II Taking $x$ to be a positive integer, the difference between two consecutive cube numbers can be expressed as $(x + 1)^3 - x^3 = 3x^2 + 3x + 1$

III It is impossible to factorise $3x^2 + 3x + 1$ into two linear factors with integer coefficients because its discriminant is negative.

IV Therefore for every positive integer value of $x$ the integer $3x^2 + 3x + 1$ cannot be factorised.

V Hence, the difference between two consecutive cube numbers will always be prime.

Which of the following best describes this proof?

**选项**：
- **A**：The proof is completely correct, and the claim is true.
- **B**：The proof is completely correct, but there are counterexamples to the claim.
- **C**：The proof is wrong, and the first error occurs on line I.
- **D**：The proof is wrong, and the first error occurs on line II.
- **E**：The proof is wrong, and the first error occurs on line III.
- **F**：The proof is wrong, and the first error occurs on line IV.
- **G**：The proof is wrong, and the first error occurs on line V.

**正确答案**：F

【题目分析】
声称两个连续正立方数之差总是素数，需要逐行检查证明过程，找出第一个错误所在的行。

【解题步骤】
逐行验证：
I：$(x+1)^3 = x^3 + 3x^2 + 3x + 1$，代数展开正确。
II：差值$(x+1)^3 - x^3 = 3x^2 + 3x + 1$，计算正确。
III：判别式$3^2 - 4 \times 3 \times 1 = -3 < 0$，故$3x^2 + 3x + 1$无实根，不能分解为实系数线性因子，正确。
IV：由代数表达式不可因式分解，推断对每个正整数$x$其值不能分解——这是错误跳跃。代数表达式不可分解不等于其整数值一定是素数。例如$x^2+1$代数上不可分解，但$x=3$时$3^2+1 = 10 = 2 \times 5$可分解。
V：由IV推出的结论，但IV本身有误。

反例验证：$6^3 - 5^3 = 216 - 125 = 91 = 7 \times 13$，不是素数。或取$x = 7$，$3(49) + 21 + 1 = 169 = 13^2$，同样不是素数。

第一个错误出现在第IV行。

【快捷思路】
I-III都是正确的代数运算。关键陷阱在IV：代数表达式不可分解$\not\Rightarrow$代入整数后得到素数。只要记住$x^2+1$的经典反例，就能快速定位错误在IV。

---

### 第8题（2017 P2 Q17 · Logic）

**考纲**：Arg1-Arg4

**题目**：A set $S$ of whole numbers is called *stapled* **if and only if** for every whole number $a$ which is in $S$ there exists a prime factor of $a$ which divides at least one other number in $S$.

Let $T$ be a set of whole numbers. Which of the following is true **if and only if** $T$ is **not** stapled?

**选项**：
- **A**：For every number $a$ which is in $T$, there is no prime factor of $a$ which divides every other number in $T$.
- **B**：For every number $a$ which is in $T$, there is no prime factor of $a$ which divides at least one other number in $T$.
- **C**：For every number $a$ which is in $T$, there is a prime factor of $a$ which does not divide any other number in $T$.
- **D**：For every number $a$ which is in $T$, there is a prime factor of $a$ which does not divide at least one other number in $T$.
- **E**：There exists a number $a$ which is in $T$ such that there is no prime factor of $a$ which divides every other number in $T$.
- **F**：There exists a number $a$ which is in $T$ such that there is no prime factor of $a$ which divides at least one other number in $T$.
- **G**：There exists a number $a$ which is in $T$ such that there is a prime factor of $a$ which does not divide any other number in $T$.
- **H**：There exists a number $a$ which is in $T$ such that there is a prime factor of $a$ which does not divide at least one other number in $T$.

**正确答案**：F

【题目分析】
本题考察逻辑量词的否定运算，属于集合论与数理逻辑的结合题。题目定义了一个新概念stapled：集合$S$称为stapled，当且仅当对$S$中每个元素$a$，都存在$a$的某个质因子能整除$S$中至少一个其他数。要求找出$T$不是stapled的充要条件。解题核心在于准确地将复合逻辑命题进行否定。

【解题步骤】
原命题：$T$是stapled$\iff\forall a\in T,\;\exists p$( $p$是$a$的质因子$\;\land\;$$p$整除$T$中至少一个其他数)。

否定过程分两步：
第一步，否定外层全称量词$\forall$，变为存在量词$\exists$：
$T$不是stapled$\iff\exists a\in T$，使得并非存在这样的质因子。

第二步，并非存在这样的质因子，等价于不存在这样的质因子，即there is no prime factor of $a$ which divides at least one other number in $T$。

综合得到：$T$不是stapled$\iff$存在$a\in T$，使得$a$没有能整除$T$中至少一个其他数的质因子。

对照选项，F项正是此表述。

注意：不要混淆at least one与every的区别。选项A、D等使用了every other number，与原定义中的at least one other number不等价。

【快捷思路】
直接套用逻辑否定规则：$\neg(\forall x,P(x))\iff\exists x,\neg P(x)$，$\neg(\exists x,Q(x))\iff\forall x,\neg Q(x)$。这里只需否定最外层的for every变为there exists，内层的there exists变为there is no，其余文字完全保留即可选出F。

---

### 第9题（2016 P2 Q1 · Integration）

**考纲**：MM7.1-MM7.6

**题目**：Find the value of

$$\int_{1}^{2} \left( x^{2} - \frac{4}{x^{2}} \right)^{2} dx$$

**选项**：
- **A**：$\frac{43}{15}$
- **B**：$3$
- **C**：$\frac{97}{15}$
- **D**：$\frac{103}{15}$
- **E**：$\frac{163}{15}$
- **F**：$18$

**正确答案**：A

【题目分析】
本题考查定积分的计算。被积函数为$\left(x^2 - \frac{4}{x^2}\right)^2$，积分区间为$[1,2]$。核心思路是先将括号内表达式平方展开，再逐项利用幂函数积分公式$\int x^n dx = \frac{x^{n+1}}{n+1}$（$n \neq -1$）求解，最后代入上下限计算差值。这是定积分计算的标准流程，展开后各项均为幂函数形式，可直接积分。

【解题步骤】
第一步：展开被积函数
$\left(x^2 - \frac{4}{x^2}\right)^2 = x^4 - 2 \cdot x^2 \cdot \frac{4}{x^2} + \frac{16}{x^4} = x^4 - 8 + 16x^{-4}$

第二步：逐项求原函数
$\int (x^4 - 8 + 16x^{-4})dx = \frac{x^5}{5} - 8x - \frac{16}{3x^3} + C$

第三步：代入上下限$[1,2]$
$\left[\frac{x^5}{5} - 8x - \frac{16}{3x^3}\right]_1^2 = \left(\frac{32}{5} - 16 - \frac{2}{3}\right) - \left(\frac{1}{5} - 8 - \frac{16}{3}\right) = \frac{31}{5} - 8 + \frac{14}{3} = \frac{93 - 120 + 70}{15} = \frac{43}{15}$

【快捷思路】
展开后三项分别为$x^4$、常数项和$x^{-4}$，积分后注意$x^{-4}$积分时指数加一除以新指数，得到$-\frac{16}{3}x^{-3}$，代入下限时注意负号变正。

---

### 第10题（2017 P2 Q6 · Integration）

**考纲**：MM7.1-MM7.6

**题目**：A sequence $u_0, u_1, u_2, \dots$ is defined as follows:

$$
\begin{aligned}
u_0 &= 1 \\
u_n &= \int_0^1 4xu_{n-1} \, dx \quad \text{for } n \geqslant 1
\end{aligned}
$$

What is the value of $u_{1000}$?

**选项**：
- **A**：$2^{1000}$
- **B**：$4^{1000}$
- **C**：$\frac{4}{1000!}$
- **D**：$\frac{4}{1001!}$
- **E**：$\frac{2^{1000}}{1000!}$
- **F**：$\frac{4^{1000}}{1000!}$
- **G**：$\frac{2^{1000}}{1001!}$
- **H**：$\frac{4^{1000}}{1001!}$

**正确答案**：A

【题目分析】
已知序列 $u_0 = 1$，$u_n = \int_0^1 4x u_{n-1} \, dx$（$n \geq 1$），求 $u_{1000}$。

关键点：虽然递推式含积分，但每次积分中 $u_{n-1}$ 是常数（与积分变量 $x$ 无关），因此积分结果仍为常数，可直接计算。

【解题步骤】
逐项计算寻找规律：
$u_0 = 1$

$u_1 = \int_0^1 4x \cdot u_0 \, dx = \int_0^1 4x \, dx = \left[ 2x^2 \right]_0^1 = 2$

$u_2 = \int_0^1 4x \cdot u_1 \, dx = \int_0^1 4x \cdot 2 \, dx = \left[ 4x^2 \right]_0^1 = 4$

$u_3 = \int_0^1 4x \cdot u_2 \, dx = \int_0^1 4x \cdot 4 \, dx = \left[ 8x^2 \right]_0^1 = 8$

规律为 $u_n = 2^n$。

严格证明可用数学归纳法：假设 $u_k = 2^k$，则
$u_{k+1} = \int_0^1 4x \cdot 2^k \, dx = 2^k \cdot \left[ 2x^2 \right]_0^1 = 2^k \cdot 2 = 2^{k+1}$
归纳成立，故 $u_n = 2^n$ 对所有 $n \geq 0$ 成立。

$u_{1000} = 2^{1000}$。

【快捷思路】
注意到 $u_{n-1}$ 与 $x$ 无关，提出积分号外：$u_n = u_{n-1} \int_0^1 4x \, dx = 2 u_{n-1}$。这是一个公比为 $2$ 的等比数列，首项为 $1$，故 $u_n = 2^n$。

---

### 第11题（2020 P2 Q3 · Proof）

**考纲**：Prf1-Prf5

**题目**：A student makes the following claim:

For all integers $n$, the expression $4 \left( \frac{9n + 1}{2} - \frac{3n - 1}{2} \right)$ is divisible by 3.

Here is the student’s argument:

$$ 4 \left( \frac{9n + 1}{2} - \frac{3n - 1}{2} \right) = 2 \left( 2 \left( \frac{9n + 1}{2} - \frac{3n - 1}{2} \right) \right) \quad \text{(I)} $$
$$ = 2(9n + 1 - 3n - 1) \quad \text{(II)} $$
$$ = 2(6n) \quad \text{(III)} $$
$$ = 12n \quad \text{(IV)} $$
$$ = 3(4n) \quad \text{(V)} $$

which is always a multiple of 3. (VI)

So the expression $4 \left( \frac{9n + 1}{2} - \frac{3n - 1}{2} \right)$ is always divisible by 3.

Which one of the following is true?

**选项**：
- **A**：The argument is correct.
- **B**：The argument is incorrect, and the first error occurs on line (I).
- **C**：The argument is incorrect, and the first error occurs on line (II).
- **D**：The argument is incorrect, and the first error occurs on line (III).
- **E**：The argument is incorrect, and the first error occurs on line (IV).
- **F**：The argument is incorrect, and the first error occurs on line (V).
- **G**：The argument is incorrect, and the first error occurs on line (VI).

**正确答案**：C

【题目分析】
学生论证：4((9n+1)/2-(3n-1)/2)可被3整除。
找出第一个错误行。

【解题步骤】
(I): 4(...)=2(2(...)) ✓ 恒等变形
(II): 2(2((9n+1)/2-(3n-1)/2))=2(9n+1-3n-1)
     2·((9n+1)/2-(3n-1)/2)=(9n+1)-(3n-1)=9n+1-3n+1=6n+2
     但学生写成了9n+1-3n-1=6n ✗

第一个错误在(II)。

---

### 第12题（2018 P2 Q12 · Logic）

**考纲**：Arg1-Arg4

**题目**：> For any positive integer $N$ there is a positive integer $K$ such that $N(Km + 1) - 1$ is not prime for any positive integer $m$.

Which one of the following is the negation of this statement?

**选项**：
- **A**：For any positive integer $N$ there is a positive integer $K$ such that there is a positive integer $m$ for which $N(Km + 1) - 1$ is prime.
- **B**：For any positive integer $N$ there is a positive integer $K$ such that there is a positive integer $m$ for which $N(Km + 1) - 1$ is not prime.
- **C**：For any positive integer $N$ there is a positive integer $K$ such that for any positive integer $m$, $N(Km + 1) - 1$ is not prime.
- **D**：For any positive integer $N$, any positive integer $K$ and any positive integer $m$, $N(Km + 1) - 1$ is not prime.
- **E**：There is a positive integer $N$ such that for any positive integer $K$ there is a positive integer $m$ for which $N(Km + 1) - 1$ is not prime.
- **F**：There is a positive integer $N$ such that for any positive integer $K$ there is a positive integer $m$ for which $N(Km + 1) - 1$ is prime.
- **G**：There is a positive integer $N$ such that for any positive integer $K$ and any positive integer $m$, $N(Km + 1) - 1$ is prime.
- **H**：There is a positive integer $N$ and a positive integer $K$ for which there is no positive integer $m$ for which $N(Km + 1) - 1$ is prime.

**正确答案**：F

【题目分析】
本题考察量词否定的逻辑规则：全称量词 $\forall$ 与存在量词 $\exists$ 互换，同时否定内部命题。原命题含有三层量词嵌套，需要逐层取否。

【解题步骤】
原命题的结构为：
$$\forall N \in \mathbb{Z}^+, \; \exists K \in \mathbb{Z}^+, \; \forall m \in \mathbb{Z}^+, \; N(Km + 1) - 1 \text{ 不是素数}$$

逐层取否：
第一层：$\forall N$ 取否定为 $\exists N$。
第二层：$\exists K$ 取否定为 $\forall K$。
第三层：$\forall m$ 取否定为 $\exists m$。
第四层：不是素数取否定为是素数。

综合得到否定命题：
$$\exists N \in \mathbb{Z}^+, \; \forall K \in \mathbb{Z}^+, \; \exists m \in \mathbb{Z}^+, \; N(Km + 1) - 1 \text{ 是素数}$$

用自然语言表述：存在正整数 $N$，使得对任意正整数 $K$，存在正整数 $m$，使得 $N(Km + 1) - 1$ 是素数。

对照选项，选项F恰好匹配此表述。排除过程：A到D仍以对于任意 $N$ 开头，量词第一层未取否；H以存在 $N$ 和存在 $K$ 开头，第二层未取否；G的末尾仍为不是素数，双重否定未消除。

【快捷思路】
量词否定口诀：全称变存在，存在变全称，最后否定结论。逐层替换即可：$\forall \to \exists$，$\exists \to \forall$，内部命题取反。注意不是素数的否定是是素数（双重否定）。

---

### 第13题（2016 P2 Q2 · Differentiation）

**考纲**：MM6.1-MM6.3

**题目**：$$f(x) = \frac{(x^{2} + 5)(2x)}{\sqrt[4]{x^{3}}} \text{ , } \quad x > 0$$

Which one of the following is equal to $f'(x)$ ?

**选项**：
- **A**：$8x^{\frac{9}{4}} + \frac{40}{3}x^{\frac{1}{4}}$
- **B**：$\frac{9}{2}x^{\frac{5}{4}} + \frac{5}{2}x^{-\frac{3}{4}}$
- **C**：$8x^{\frac{9}{4}} + \frac{40}{3}x^{-\frac{1}{4}}$
- **D**：$\frac{8}{13}x^{\frac{13}{4}} + 8x^{\frac{5}{4}}$

**正确答案**：B

【题目分析】
本题考查函数求导。函数$f(x) = \frac{(x^2+5)(2x)}{\sqrt[4]{x^3}}$中分母含四次根式，直接求导会很繁琐。正确做法是先化简函数表达式：将分母$\sqrt[4]{x^3}$写成$x^{\frac{3}{4}}$，分子展开后逐项除以分母，化为幂函数的和，再利用幂函数求导公式$\frac{d}{dx}x^n = nx^{n-1}$逐项求导。这是处理含根式函数求导的标准技巧。

【解题步骤】
第一步：化简函数
分子：$(x^2+5)(2x) = 2x^3 + 10x$
分母：$\sqrt[4]{x^3} = x^{\frac{3}{4}}$
$f(x) = \frac{2x^3 + 10x}{x^{\frac{3}{4}}} = 2x^{3-\frac{3}{4}} + 10x^{1-\frac{3}{4}} = 2x^{\frac{9}{4}} + 10x^{\frac{1}{4}}$

第二步：逐项求导
$f'(x) = 2 \cdot \frac{9}{4}x^{\frac{9}{4}-1} + 10 \cdot \frac{1}{4}x^{\frac{1}{4}-1} = \frac{9}{2}x^{\frac{5}{4}} + \frac{5}{2}x^{-\frac{3}{4}}$

第三步：对照选项
结果与选项B完全一致。

【快捷思路】
先化简再求导永远比直接套用商法则简单。关键是将根式转化为分数指数幂，分子展开后分别除以分母，即可化为幂函数线性组合。

---

### 第14题（2017 P2 Q1 · Differentiation）

**考纲**：MM6.1-MM6.3

**题目**：Given that $y = \frac{(1 - 3x)^2}{2x^{\frac{3}{2}}}$, which one of the following is a correct expression for $\frac{dy}{dx}$?

**选项**：
- **A**：$\frac{9}{4}x^{-\frac{1}{2}} + \frac{3}{2}x^{-\frac{3}{2}} - \frac{3}{4}x^{-\frac{5}{2}}$
- **B**：$\frac{9}{4}x^{-\frac{1}{2}} - \frac{3}{2}x^{-\frac{3}{2}} + \frac{3}{4}x^{-\frac{5}{2}}$
- **C**：$\frac{9}{4}x^{-\frac{1}{2}} - \frac{3}{2}x^{-\frac{3}{2}} - \frac{3}{4}x^{-\frac{5}{2}}$
- **D**：$-\frac{9}{4}x^{-\frac{1}{2}} + \frac{3}{2}x^{-\frac{3}{2}} + \frac{3}{4}x^{-\frac{5}{2}}$
- **E**：$-\frac{9}{4}x^{-\frac{1}{2}} + \frac{3}{2}x^{-\frac{3}{2}} - \frac{3}{4}x^{-\frac{5}{2}}$
- **F**：$-\frac{9}{4}x^{-\frac{1}{2}} - \frac{3}{2}x^{-\frac{3}{2}} - \frac{3}{4}x^{-\frac{5}{2}}$

**正确答案**：A

【题目分析】
本题要求对函数 $y = \dfrac{(1 - 3x)^2}{2x^{\frac{3}{2}}}$ 求导，并从六个选项中选出正确的 $\dfrac{dy}{dx}$ 表达式。关键策略是先将分式展开为幂函数的代数和，再逐项求导，避免使用商法则带来的繁琐运算。

【解题步骤】
第一步：展开分子并拆项。$(1 - 3x)^2 = 1 - 6x + 9x^2$，代入原式得
$$y = \frac{1 - 6x + 9x^2}{2x^{\frac{3}{2}}} = \frac{1}{2}x^{-\frac{3}{2}} - 3x^{-\frac{1}{2}} + \frac{9}{2}x^{\frac{1}{2}}$$
第二步：逐项利用幂函数求导法则 $\dfrac{d}{dx}(x^n) = nx^{n-1}$ 求导。
第一项：$\dfrac{1}{2} \cdot \left(-\dfrac{3}{2}\right)x^{-\frac{5}{2}} = -\dfrac{3}{4}x^{-\frac{5}{2}}$
第二项：$-3 \cdot \left(-\dfrac{1}{2}\right)x^{-\frac{3}{2}} = \dfrac{3}{2}x^{-\frac{3}{2}}$
第三项：$\dfrac{9}{2} \cdot \dfrac{1}{2}x^{-\frac{1}{2}} = \dfrac{9}{4}x^{-\frac{1}{2}}$
第三步：合并结果得 $\dfrac{dy}{dx} = \dfrac{9}{4}x^{-\frac{1}{2}} + \dfrac{3}{2}x^{-\frac{3}{2}} - \dfrac{3}{4}x^{-\frac{5}{2}}$，对应选项 A。

【快捷思路】
直接展开为幂函数后求导是最简方法，比商法则快得多。注意中间项 $-6x \div 2x^{3/2} = -3x^{-1/2}$，其导数变号为正，这是区分选项的关键。

---

### 第15题（2022 P2 Q1 · Differentiation）

**考纲**：MM6.1-MM6.3

**题目**：Determine the number of stationary points on the curve with equation

$$y = 3x^4 + 4x^3 + 6x^2 - 5$$

**选项**：
- **A**：0
- **B**：1
- **C**：2
- **D**：3
- **E**：4

**正确答案**：B

【题目分析】
题目要求确定曲线 $y = 3x^4 + 4x^3 + 6x^2 - 5$ 上驻点的个数。驻点是导数为零的点，因此核心是求导后解方程，并判断实根的个数。

【解题步骤】
第一步：对函数求导
$$\frac{\mathrm{d}y}{\mathrm{d}x} = 12x^3 + 12x^2 + 12x$$

第二步：令导数为零，解方程
$$12x^3 + 12x^2 + 12x = 0 \quad\Longrightarrow\quad 12x(x^2 + x + 1) = 0$$

第三步：分析因式
由 $12x = 0$ 得 $x = 0$。
对于二次因式 $x^2 + x + 1 = 0$，判别式 $\Delta = 1^2 - 4 \times 1 \times 1 = -3 < 0$，无实根。

因此方程只有一个实根 $x = 0$，即仅有一个驻点。

【快捷思路】
求导后提取公因式 $12x$，剩余二次式判别式为负，直接得到仅一个实根，无需进一步计算。

---

### 第16题（2018 P2 Q1 · Differentiation）

**考纲**：MM6.1-MM6.3

**题目**：The function f is given, for $x > 0$, by

$$f(x) = \frac{x^3 - 4x}{2\sqrt{x}}$$

Find the value of $f'(4)$.

**选项**：
- **A**：3
- **B**：9
- **C**：9.5
- **D**：12
- **E**：39.5
- **F**：88

**正确答案**：C

【题目分析】
给定函数 $f(x)=\dfrac{x^3-4x}{2\sqrt{x}}$（$x>0$），求 $f'(4)$ 的值。本题核心在于先用指数法则化简分式，再对化简后的幂函数逐项求导，最后代入求值。直接对原分式用商法则会非常繁琐，化简是本题的关键突破口。

【解题步骤】
先将分子各项分别除以分母：
$$f(x)=\frac{x^3}{2x^{1/2}}-\frac{4x}{2x^{1/2}}=\frac{1}{2}x^{5/2}-2x^{1/2}$$

利用幂函数求导公式 $\dfrac{d}{dx}(x^n)=nx^{n-1}$：
$$f'(x)=\frac{1}{2}\cdot\frac{5}{2}x^{3/2}-2\cdot\frac{1}{2}x^{-1/2}=\frac{5}{4}x^{3/2}-x^{-1/2}$$

代入 $x=4$：
$$f'(4)=\frac{5}{4}\cdot 4^{3/2}-4^{-1/2}=\frac{5}{4}\cdot 8-\frac{1}{2}=10-\frac{1}{2}=9.5$$

【快捷思路】
先化简为幂函数形式是本题唯一高效路径。记住 $\sqrt{x}=x^{1/2}$，除法即指数相减：$x^3\div x^{1/2}=x^{5/2}$。化简后求导一步到位，代入时注意 $4^{3/2}=(\sqrt{4})^3=2^3=8$。

---

### 第17题（2017 P2 Q10 · Integration）

**考纲**：MM7.1-MM7.6

**题目**：$f(x)$ is a function defined for all real values of $x$.

Which one of the following is a **sufficient** condition for $\int_{1}^{3} f(x) dx = 0$?

**选项**：
- **A**：$f(2) = 0$
- **B**：$f(1) = f(3) = 0$
- **C**：$f(-x) = -f(x)$ for all $x$
- **D**：$f(x + 2) = -f(2 - x)$ for all $x$
- **E**：$f(x - 2) = -f(2 - x)$ for all $x$

**正确答案**：D

【题目分析】
寻找使$\int_1^3 f(x)\,dx=0$的充分条件。充分条件意味着：只要该条件成立，积分就必为零。

【解题步骤】
逐项分析：
选项A：$f(2)=0$。单点函数值无法决定整个区间的积分，例如$f(x)=(x-2)^2$满足$f(2)=0$但$\int_1^3 (x-2)^2\,dx>0$，不充分。
选项B：$f(1)=f(3)=0$。端点为零同样不保证积分为零，例如$f(x)=(x-1)(x-3)$在$[1,3]$上恒为负，积分非零，不充分。
选项C：$f(-x)=-f(x)$，即$f$为奇函数。奇函数关于原点对称，积分区间$[1,3]$不关于原点对称，故不充分。例如$f(x)=x$为奇函数但$\int_1^3 x\,dx=4\neq 0$。
选项E：$f(x-2)=-f(2-x)$。令$y=2-x$，则$f(-y)=-f(y)$，与选项C等价，不充分。
选项D：$f(x+2)=-f(2-x)$，即$f(2+x)=-f(2-x)$。这表明$f$关于点$(2,0)$中心对称。令$u=x-2$，则$\int_1^3 f(x)\,dx=\int_{-1}^1 f(u+2)\,du$。由对称性$f(u+2)=-f(2-u)$，可知被积函数在$[-1,1]$上关于$u=0$为奇函数，积分为零。

【快捷思路】
选项D的条件$f(2+x)=-f(2-x)$意味着图像关于$(2,0)$旋转对称，区间$[1,3]$关于$x=2$对称，对称区域上正负面积恰好抵消。

---

### 第18题（2017 P2 Q19 · Differentiation）

**考纲**：MM6.1-MM6.3

**题目**：Which one of the following is a **sufficient** condition for the equation $x^3 - 3x^2 + a = 0$, where $a$ is a constant, to have exactly one real root?

**选项**：
- **A**：$a > 0$
- **B**：$a \leqslant 0$
- **C**：$a \geqslant 4$
- **D**：$a < 4$
- **E**：$|a| > 4$
- **F**：$|a| \leqslant 4$
- **G**：$a = \frac{9}{4}$
- **H**：$|a| = \frac{3}{2}$

**正确答案**：E

【题目分析】
本题考察三次方程实根个数与参数取值范围的关系，属于微分学与函数的综合题。要求找出方程$x^3-3x^2+a=0$恰有一个实根的充分条件。充分条件的含义是：若该条件成立，则结论必然成立（但结论成立不一定需要该条件）。

【解题步骤】
设$f(x)=x^3-3x^2+a$。求驻点：
$f'(x)=3x^2-6x=3x(x-2)=0$，得驻点$x=0$和$x=2$。

计算函数值：
$f(0)=a$（局部极大值点），$f(2)=8-12+a=a-4$（局部极小值点）。

三次函数图像大致呈N型（首项系数为正）。方程恰有一个实根的充要条件是：局部极大值和局部极小值在$x$轴同侧。即：
极大值$<0$：$a<0$；或
极小值$>0$：$a-4>0$，即$a>4$。

因此充要条件为$a<0$或$a>4$，但这不在选项中。题目要求充分条件，即选项给出的范围必须是上述范围的真子集。

逐一检验：
A：$a>0$包含$a=1$（此时两根），不充分。
B：$a\leq 0$包含$a=0$（此时$x=0$为重根，超过一个实根），不充分。
C：$a\geq 4$包含$a=4$（此时极大值在轴上，超过一个实根），不充分。
D：$a<4$包含$a=1$，不充分。
E：$|a|>4$等价于$a>4$或$a<-4$，均落在有效范围内，充分。
G：$a=\frac{9}{4}$落在$(0,4)$内，此时三个实根，不充分。
H：$|a|=\frac{3}{2}$包含正负值，正侧不充分。

【快捷思路】
先求出充要条件为$|a|>4$（即$a>4$或$a<0$），再找选项中的子集。E项$|a|>4$恰好是充要条件的一部分（排除了$-4\leq a<0$），故为充分条件。

---

### 第19题（2017 P2 Q16 · Counterexamples）

**考纲**：Prf1, Err1-Err2

**题目**：Consider the following statement:

> ($\ast$) **If** $f(x)$ is an integer for every integer $x$, **then** $f'(x)$ is an integer for every integer $x$.

Which one of the following is a **counterexample** to ($\ast$)?

**选项**：
- **A**：$f(x) = \frac{x^3 + x + 1}{4}$
- **B**：$f(x) = \frac{x^4 + x^2 + x}{2}$
- **C**：$f(x) = \frac{x^4 + x^3 + x^2 + x}{2}$
- **D**：$f(x) = \frac{x^4 + 2x^3 + x^2}{4}$

**正确答案**：C

【题目分析】
本题考察反例的构造与验证。命题：若函数在所有整数处取整数值，则其导数也在所有整数处取整数值。需要找出一个使前提成立但结论不成立的函数作为反例。

【解题步骤】
反例需同时满足两个条件：
条件一：对所有整数，$f(x)$为整数。
条件二：存在某个整数$x$，使导数非整数。

先用简单值快速筛选。代入：
$A$：$f(0) = 1/4$，不满足条件一，排除。
$B$：$f(1) = 3/2$，不满足条件一，排除。
$C$：$f(0) = 0$，$f(1) = 2$，均为整数。
$D$：$f(0) = 0$，$f(1) = 1$，均为整数。

检查$C$和$D$的导数：
$C$：$f'(x) = \frac{4x^3 + 3x^2 + 2x + 1}{2}$，$f'(0) = 1/2$非整数。
$D$：$f'(x) = \frac{4x^3 + 6x^2 + 2x}{4}$，$f'(0) = 0$为整数。

因此$C$是候选反例。验证条件一：因式分解得
$f(x) = \frac{x(x+1)(x^2+1)}{2}$
对任意整数，$x(x+1)$为两连续整数之积必为偶数，故分子总为偶数，$f(x)$恒为整数。

验证$D$非反例：$f'(x) = \frac{x(x+1)(2x+1)}{2}$，分子同样恒为偶数，导数总为整数。

【快捷思路】
先用代入法排除$A$、$B$。对$C$、$D$分别求导并代入$0$即可区分：$C$的导数在$0$处为$1/2$，而$D$的导数在$0$处为$0$。

---

### 第20题（2022 P2 Q19 · Proof）

**考纲**：Prf1-Prf5

**题目**：A polygon has $n$ vertices, where $n \geq 3$. It has the following properties:

*   Every vertex of the polygon lies on the circumference of a circle $C$.
*   The centre of the circle $C$ is inside the polygon.
*   The radii from the centre of the circle $C$ to the vertices of the polygon cut the polygon into $n$ triangles of equal area.

For which values of $n$ are these properties **sufficient** to deduce that the polygon is regular?

**选项**：
- **A**：no values of $n$
- **B**：$n = 3$ only
- **C**：$n = 3$ and $n = 4$ only
- **D**：$n = 3$ and $n \geq 5$ only
- **E**：all values of $n$

**正确答案**：B

【题目分析】
一个 $n$ 边形满足：所有顶点在圆 $C$ 上，圆心在多边形内部，圆心到各顶点的半径将多边形分为 $n$ 个等面积三角形。问哪些 $n$ 能由此推出该多边形是正多边形。

【解题步骤】
设圆半径为 $r$，第 $i$ 个三角形的中心角为 $\theta_i$，则面积为 $\frac{1}{2}r^2\sin\theta_i$。等面积意味着所有 $\sin\theta_i$ 相等。由于 $\sin\theta = \sin\phi$ 当且仅当 $\phi = \theta$ 或 $\phi = \pi - \theta$，因此中心角可能取两种值：$\theta$ 和 $\pi - \theta$。

假设有 $k$ 个角为 $\pi - \theta$，$n-k$ 个角为 $\theta$，则 $(n-k)\theta + k(\pi - \theta) = 2\pi$，整理得 $(n-2k)\theta = (2-k)\pi$。

对于 $n=3$：逐一检验 $k=1,2,3$。$k=1$ 时 $\theta = \pi$ 不合要求；$k=2$ 时 $\theta = 0$ 不合要求；$k=3$ 时 $\theta = \frac{\pi}{3}$，三个角相等，即正三角形。因此 $n=3$ 只能是正多边形。

对于 $n=4$：$k=2$ 时方程退化为 $0=0$，任意 $\theta$ 均可。取 $\theta \neq \frac{\pi}{2}$ 则两个角为 $\theta$，两个为 $\pi-\theta$，构成非正方形的矩形，满足条件但不是正多边形。

对于 $n \geq 5$：$k=1$ 时 $\theta = \frac{\pi}{n-2} < \frac{\pi}{2}$，是锐角，构造合法，可得到非正多边形。

因此仅 $n=3$ 时条件足以推出正多边形。

【快捷思路】
关键在于 $\sin\theta_i$ 相等不等价于 $\theta_i$ 相等。当存在互补角 $\theta$ 和 $\pi-\theta$ 时，$n \geq 4$ 总能构造非正多边形反例，仅 $n=3$ 时方程无解（除正三角形外）。

---



## ⚡ 考试时间分配策略

### 总体原则

TMUA 每套试卷 **75 分钟 / 20 题 ≈ 3.75 分钟/题**（建议平均每题控制在 2 分钟内，留出 15 分钟检查时间）。实际并非每题用时相同：

| 阶段 | 时间 | 任务 | 目标 |
|------|------|------|------|
| 第一轮：快速扫描 | 0-5 分钟 | 快速浏览全卷，标记难度 | 识别“秒杀题”和“难题” |
| 第二轮：稳拿分 | 5-55 分钟 | 完成 12-14 道有把握的题目 | 确保基础分 |
| 第三轮：攻坚 | 55-70 分钟 | 解决标记的中等难度题 | 冲击高分 |
| 第四轮：复查 | 70-75 分钟 | 检查计算、填涂答案 | 避免粗心失分 |

### Paper 1 时间分配（重计算速度）

| 题型 | 预计用时 | 数量 | 总用时 |
|------|---------|------|--------|
| 直接计算题（代数、三角、数列） | 2 分钟 | 8 题 | 16 分钟 |
| 中等计算题（坐标几何、微分、积分） | 3 分钟 | 8 题 | 24 分钟 |
| 复杂综合题（多步骤、图像变换） | 4-5 分钟 | 4 题 | 18 分钟 |
| 检查与复查 | — | — | 12 分钟 |
| **缓冲时间** | — | — | **5 分钟** |

### Paper 2 时间分配（重推理深度）

| 题型 | 预计用时 | 数量 | 总用时 |
|------|---------|------|--------|
| 逻辑判断题（Arg 类） | 2-3 分钟 | 5 题 | 12 分钟 |
| 证明分析题（Prf 类） | 4-5 分钟 | 4 题 | 18 分钟 |
| 错误识别题（Err 类） | 3 分钟 | 3 题 | 9 分钟 |
| 数学推理综合题 | 4-5 分钟 | 8 题 | 35 分钟 |
| **缓冲时间** | — | — | **1 分钟** |

### ⚡ 快速解题技巧

1. **代入法**：选择题可将选项代入验证，特别是方程求解类题目
2. **排除法**：先排除明显错误的选项，缩小范围
3. **特殊值法**：用 $x = 0, 1, -1$ 等特殊值检验选项
4. **估算法**：对涉及近似值的题目先估算量级
5. **图像法**：草图辅助判断函数性质和交点

---

## ⚠️ 常见时间管理陷阱

### 🚫 陷阱 1：在一道题上花太多时间

- **表现**：一道题思考超过 5 分钟仍无头绪
- **对策**：超过 3 分钟无进展立即标记跳过，完成全卷后再回头
- **记住**：20 题中哪怕放弃 3 题，仍有机会拿到 85% 的分数

### 🚫 陷阱 2：过度检查已做题目

- **表现**：做完一题后反复检查，耽误后续时间
- **对策**：第一遍做完不回头，留最后 5 分钟统一检查
- **原则**：一遍做对的概率 > 检查发现错误的概率

### 🚫 陷阱 3：Paper 2 陷入长篇计算

- **表现**：P2 题目试图用代数硬算，忽略逻辑推理的捷径
- **对策**：P2 的核心是推理，不是计算。先问自己：“这道题在考什么逻辑？”
- **提示**：如果一道 P2 题需要大量计算，很可能你找错了方向

### 🚫 陷阱 4：忽视单位转换和符号

- **表现**：弧度与度数混淆、正负号搞反
- **对策**：做题时圈出关键条件（如“radian”、“positive”）
- **常见错误**：$sin$ 和 $cos$ 的取值区间、$\log$ 的定义域

### 🚫 陷阱 5：填涂答题卡失误

- **表现**：答案写对但填涂错误，或漏涂
- **对策**：做完 5 题集中填涂一次，避免最后手忙脚乱
- **检查**：最后一分钟核对题号与答案是否对应

---

## 📌 答题技巧总结

### Paper 1 核心技巧

| 技巧 | 适用场景 | 示例 |
|------|---------|------|
| 系数对比法 | 多项式展开、恒等式 | 对比 $(ax+b)^3$ 的各项系数 |
| 判别式法 | 二次方程根的情况 | $b^2 - 4ac$ 判断交点个数 |
| 导数判单调 | 函数增减性、极值 | $f'(x) > 0$ 则递增 |
| 面积分段法 | 曲线与坐标轴围成面积 | 过零点处分段积分取绝对值 |
| 配方法 | 圆的方程、二次函数最值 | $x^2 + bx + c = (x + \frac{b}{2})^2 + \cdots$ |
| 三角恒等变换 | 三角方程化简 | $cos^2\theta = 1 - sin^2\theta$ |

### Paper 2 核心技巧

| 技巧 | 适用场景 | 示例 |
|------|---------|------|
| 逆否命题等价 | 逻辑推理题 | “若 A 则 B” 等价于 “若非 B 则非 A” |
| 反证法 | 证明题 | 假设结论不成立，推出矛盾 |
| 反例法 | 证伪命题 | 找一个使命题不成立的具体例子 |
| 分类讨论 | 含参数的推理 | 分别讨论参数正负、大小关系 |
| 必要条件 vs 充分条件 | 逻辑判断 | “A 是 B 的必要条件” = “B → A” |
| 量词否定 | 含“所有”、“存在”的命题 | “所有 x 满足 P” 的否定是 “存在 x 不满足 P” |

### 通用策略

1. **读题三遍**：第一遍了解大意，第二遍提取关键信息，第三遍确认问题
2. **画图辅助**：坐标几何、函数图像、几何题务必画草图
3. **单位统一**：弧度 vs 度数、面积 vs 体积，注意题目要求
4. **验算习惯**：关键步骤用另一种方法验证
5. **不空题**：TMUA 答错不扣分，所有题目必须作答

---

## 📚 推荐练习的历年真题组合

以下按年份和难度排列，建议分阶段练习：

### 第一阶段：基础巩固（难度 ⭐⭐）

| 序号 | 题号 | 考纲 | 难度 | 建议用时 |
|------|------|------|------|---------|
| 1 | 2016 P1 Q1 | MM1（代数展开） | ⭐⭐ | 3 分钟 |
| 2 | 2016 P1 Q4 | MM2（数列求和） | ⭐⭐ | 3 分钟 |
| 3 | 2017 P1 Q7 | MM2（等比数列） | ⭐⭐ | 3 分钟 |
| 4 | 2016 P1 Q5 | MM7（定积分面积） | ⭐⭐ | 4 分钟 |
| 5 | 2021 P1 Q1 | MM3（直线方程） | ⭐⭐ | 3 分钟 |
| 6 | 2017 P1 Q3 | MM3（垂直直线与面积） | ⭐⭐ | 4 分钟 |
| 7 | 2020 P1 Q4 | MM1（二次函数） | ⭐⭐ | 3 分钟 |
| 8 | 2016 P2 Q4 | Arg1-Arg4（逻辑推理） | ⭐⭐ | 3 分钟 |

### 第二阶段：能力提升（难度 ⭐⭐⭐）

| 序号 | 题号 | 考纲 | 难度 | 建议用时 |
|------|------|------|------|---------|
| 1 | 2018 P1 Q14 | MM1.6（因式定理） | ⭐⭐⭐ | 4 分钟 |
| 2 | 2019 P1 Q12 | MM7（定积分计算） | ⭐⭐⭐ | 4 分钟 |
| 3 | 2021 P1 Q8 | MM3（圆的方程） | ⭐⭐⭐ | 4 分钟 |
| 4 | 2019 P1 Q17 | MM4（三角恒等式） | ⭐⭐⭐ | 4 分钟 |
| 5 | 2022 P1 Q14 | MM4（正余弦定理） | ⭐⭐⭐ | 4 分钟 |
| 6 | 2016 P1 Q8 | MM4（三角方程） | ⭐⭐⭐ | 5 分钟 |
| 7 | 2016 P2 Q9 | Prf1-Prf5（证明分析） | ⭐⭐⭐ | 4 分钟 |
| 8 | 2020 P2 Q3 | Prf1-Prf5（反证法） | ⭐⭐⭐ | 5 分钟 |
| 9 | 2016 P1 Q3 | MM6（法线与距离） | ⭐⭐⭐ | 5 分钟 |
| 10 | 2020 P1 Q1 | MM6（驻点判断） | ⭐⭐⭐ | 4 分钟 |

### 第三阶段：冲刺拔高（难度 ⭐⭐⭐⭐）

| 序号 | 题号 | 考纲 | 难度 | 建议用时 |
|------|------|------|------|---------|
| 1 | 2022 P1 Q18 | MM8（函数图像综合分析） | ⭐⭐⭐⭐ | 5 分钟 |
| 2 | 2017 P1 Q17 | MM7（梯形法则与面积） | ⭐⭐⭐⭐ | 5 分钟 |
| 3 | 2020 P1 Q15 | MM5（指数方程综合） | ⭐⭐⭐⭐ | 5 分钟 |
| 4 | 2017 P1 Q17 | MM7（积分与数列结合） | ⭐⭐⭐⭐ | 5 分钟 |
| 5 | 2017 P2 Q19 | MM6 + Prf5（复杂推理链） | ⭐⭐⭐⭐ | 6 分钟 |
| 6 | 2022 P2 Q19 | Prf5（深度推理） | ⭐⭐⭐⭐ | 6 分钟 |
| 7 | 2016 P2 Q18 | Err1-Err2（错误识别） | ⭐⭐⭐⭐ | 5 分钟 |
| 8 | 2017 P2 Q17 | Arg1-Arg4 + Prf（综合逻辑） | ⭐⭐⭐⭐ | 5 分钟 |

### 完整模拟练习时间表

| 练习阶段 | 内容 | 时间 | 目标分数 |
|----------|------|------|---------|
| 第 1 周 | Paper 1 模拟题（限时 75 分钟） | 75 min | ≥ 12/20 |
| 第 1 周 | Paper 2 模拟题（限时 75 分钟） | 75 min | ≥ 10/20 |
| 第 2 周 | 错题重做 + 薄弱知识点针对性练习 | 90 min | 查漏补缺 |
| 第 2 周 | 完整模考（P1 + P2 连做，150 分钟） | 150 min | ≥ 24/40 |
| 考前 3 天 | 历年真题精选组合（第三阶段） | 60 min | 保持手感 |

---

*本讲义所有题目均来自 TMUA 历年真题（2016-2023），每题均附详细解析。*
*建议配合完整题库数据库进行针对性强化练习。*

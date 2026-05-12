---
title: "FP2 第二章：级数 — 差分法"
---

## FP2 讲义：差分法

差分法是求序列和的强大技巧，尤其适用于含分式的序列。我们从一个推动该方法发展的经典问题出发：证明倒数平方和收敛。

:::note[引出问题：巴塞尔问题]
考虑无穷级数：

$$\sum_{n=1}^{\infty} \frac{1}{n^2}$$

如何证明该和是有限的？它的值是多少？

---

这个著名问题称为**巴塞尔问题**，由欧拉于 1735 年解决。他证明了：

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

虽然欧拉的证明使用了深刻的分析方法，但我们可以用**差分法**来证明该和是有限的。

要证明和是有限的，可以使用比较判别法。注意到：

$$\frac{1}{n^2} < \frac{1}{n(n-1)} \quad \text{当 } n \geq 2$$

这意味着：

$$\sum_{n=2}^{\infty} \frac{1}{n^2} < \sum_{n=2}^{\infty} \frac{1}{n(n-1)}$$

右边的级数可以用部分分式化简：

$$\frac{1}{n(n-1)} = \frac{1}{n-1} - \frac{1}{n}$$

这产生了一个裂项级数：

$$\sum_{n=2}^{\infty} \left( \frac{1}{n-1} - \frac{1}{n} \right)$$

各项相消，得到有限极限。因此，由于 $\sum_{n=2}^{\infty} \frac{1}{n(n-1)}$ 收敛，我们得出 $\sum_{n=1}^{\infty} \frac{1}{n^2}$ 也是有限的。
:::

## 模块一：差分法基础

### 定义与核心概念

**定义 — 差分法：** 差分法通过以下步骤求序列和：

1. 将通项表示为两项或多项之差
2. 利用相消求和

### 部分分式与差分法的关键步骤

:::note[标准方法]
**1. 对于形如** $\dfrac{cn+d}{(n+a)(n+b)}$ **的表达式：**

- 拆分为部分分式：$\dfrac{A}{n+a} + \dfrac{B}{n+b}$
- 两边乘以 $(n+a)(n+b)$ 求 $A$ 和 $B$

**2. 用差分法求和：**

- 找出首尾不消去的项
- 写出前 3 项和后 2 项以发现规律
- 通分化简
:::

### 例题 1

将 $\dfrac{1}{(r+3)(r+5)}$ 表示为部分分式，并用差分法求 $\displaystyle\sum_{r=1}^n \frac{1}{(r+3)(r+5)}$。

**解：**

1. 设 $\dfrac{1}{(r+3)(r+5)} = \dfrac{A}{r+3} + \dfrac{B}{r+5}$

2. 两边乘以 $(r+3)(r+5)$：

$$1 = A(r+5) + B(r+3)$$

3. $A = \_\_\_\_$，$B = \_\_\_\_$

4. 因此：

$$\frac{1}{(r+3)(r+5)} = \_\_\_\_$$

5. 写出前 3 项和后 2 项：

$$\_\_\_\_ + \_\_\_\_ + \_\_\_\_ + \cdots + \_\_\_\_ + \_\_\_\_$$

6. 不消去的项为：

$$\_\_\_\_ + \_\_\_\_ - \_\_\_\_ - \_\_\_\_$$

7. 通分化简：

$$= \_\_\_\_$$

### 课堂练习

:::note[练习]
将 $\dfrac{2}{(r-1)(r+1)}$ 表示为部分分式，并求：

$$\sum_{r=2}^n \frac{1}{(r-1)(r+1)}$$
:::

## 模块二：三项部分分式

### 三项部分分式分解

### 例题 2 — 三项部分分式

将 $\dfrac{1}{(2r-1)(2r+1)(2r+3)}$ 表示为部分分式，并用差分法求 $\displaystyle\sum_{r=1}^n \frac{1}{(2r-1)(2r+1)(2r+3)}$。

**解：**

1. 设 $\dfrac{1}{(2r-1)(2r+1)(2r+3)} = \dfrac{A}{2r-1} + \dfrac{B}{2r+1} + \dfrac{C}{2r+3}$

2. 两边乘以 $(2r-1)(2r+1)(2r+3)$：

$$1 = A(2r+1)(2r+3) + B(2r-1)(2r+3) + C(2r-1)(2r+1)$$

3. 令 $r = \_\_\_\_$，$r = \_\_\_\_$，$r = \_\_\_\_$ 求 $A$，$B$，$C$：

$$A = \_\_\_\_, \quad B = \_\_\_\_, \quad C = \_\_\_\_$$

4. 因此：

$$\frac{1}{(2r-1)(2r+1)(2r+3)} = \_\_\_\_$$

5. 写出前三项和后两项：

$$\_\_\_\_ + \_\_\_\_ + \_\_\_\_ + \cdots + \_\_\_\_ + \_\_\_\_$$

6. 找出不消去的项：

$$\_\_\_\_ - \_\_\_\_ + \_\_\_\_ - \_\_\_\_$$

7. 通分化简：

$$= \_\_\_\_$$

:::tip[三项问题要点]
**1. 求部分分式时：**
- 写出 $\dfrac{A}{ax+b} + \dfrac{B}{cx+d} + \dfrac{C}{ex+f}$
- 用特殊的 $x$ 值求系数
- 展开验证

**2. 用差分法求和时：**
- 写出足够多项以发现规律
- 注意系数，准确识别不消去的项
- 仔细通分合并
:::

### 课堂练习

:::note[练习]
将 $\dfrac{r+4}{r(r+1)(r+2)}$ 表示为部分分式，并求：

$$\sum_{r=1}^n \frac{r+4}{r(r+1)(r+2)}$$
:::

## 模块三：进阶应用

### 多项式差分

:::note[引导练习 1]
利用二项展开证明：

$$n^5 - (n-1)^5 = 5n^4 - 10n^3 + 10n^2 - 5n + 1$$

由此证明：

$$\sum_{r=1}^n r^4 = \frac{1}{30}n(n+1)(2n+1)(3n^2 + 3n - 1)$$

**引导：**

1. 整理，将 $r^4$ 用其他表达式表示。
2. 写出 $\sum_{r=1}^n r^4$ 的表达式。
3. 使用以下已知公式：
   - $\displaystyle\sum_{r=1}^n r = \frac{n(n+1)}{2}$
   - $\displaystyle\sum_{r=1}^n r^2 = \frac{n(n+1)(2n+1)}{6}$
   - $\displaystyle\sum_{r=1}^n r^3 = \left(\frac{n(n+1)}{2}\right)^2$
4. 代入化简得到所需形式。
:::

### 课堂练习

:::note[练习]
用差分法证明：

$$\sum_{r=1}^n r^3 = \left(\frac{n(n+1)}{2}\right)^2$$

**提示：** 考虑差 $(r+1)^4 - r^4$。
:::

### 含根号的求和

### 例题 3 — 含根号的和

证明当 $r \geq 1$ 时：

$$\frac{r}{\sqrt{r(r+1)} + \sqrt{r(r-1)}} = A\left(\sqrt{r(r+1)} - \sqrt{r(r-1)}\right)$$

其中 $A$ 为待定常数。

**解：**

1. 设左边为 $L$，右边为 $R$：

$$L = \frac{r}{\sqrt{r(r+1)} + \sqrt{r(r-1)}}, \quad R = A\left(\sqrt{r(r+1)} - \sqrt{r(r-1)}\right)$$

2. 为求 $A$，将 $L$ 乘以 $\dfrac{\sqrt{r(r+1)} - \sqrt{r(r-1)}}{\sqrt{r(r+1)} - \sqrt{r(r-1)}}$ 有理化分母：

$$L = \frac{r\left(\sqrt{r(r+1)} - \sqrt{r(r-1)}\right)}{\_\_\_\_}$$

3. 因此：

$$L = \_\_\_\_ \left(\sqrt{r(r+1)} - \sqrt{r(r-1)}\right)$$

4. 与 $R$ 比较得 $A = \_\_\_\_$。

### 例题 4 — 含根号的差分法

利用上述结果求：

$$\sum_{r=1}^n \frac{r}{\sqrt{r(r+1)} + \sqrt{r(r-1)}}$$

**解：**

1. 由上例：

$$\frac{r}{\sqrt{r(r+1)} + \sqrt{r(r-1)}} = \_\_\_\_ \left(\sqrt{r(r+1)} - \sqrt{r(r-1)}\right)$$

2. 写出前三项和后两项，找出裂项规律。

3. 因此：

$$\sum_{r=1}^n \frac{r}{\sqrt{r(r+1)} + \sqrt{r(r-1)}} = \_\_\_\_$$

### 例题 5 — 拓展

求常数 $k$ 使得：

$$\sum_{r=1}^n \frac{kr}{\sqrt{r(r+1)} + \sqrt{r(r-1)}} = \sqrt{\sum_{r=1}^n r}$$

**解：**

1. 由上例：

$$\sum_{r=1}^n \frac{kr}{\sqrt{r(r+1)} + \sqrt{r(r-1)}} = \_\_\_\_$$

2. 右边为：

$$\sqrt{\sum_{r=1}^n r} = \_\_\_\_$$

3. 令两边相等解得 $k = \_\_\_\_$。

### 三角形式*

### 例题 6 — 三角恒等式

利用公式

$$\cos(A+B) = \cos A \cos B - \sin A \sin B$$

证明：

$$2\sin\left(\frac{1}{2}\right)\sin(n) = \cos\left(n - \frac{1}{2}\right) - \cos\left(n + \frac{1}{2}\right)$$

**解：**

1. 利用给定公式：

$$\cos(A-B) - \cos(A+B) = \cos A \cos B + \sin A \sin B - (\cos A \cos B - \sin A \sin B) = 2 \sin A \sin B$$

2. 令 $A = n$，$B = \dfrac{1}{2}$：

$$2\sin\left(\frac{1}{2}\right)\sin(n) = \cos\left(n - \frac{1}{2}\right) - \cos\left(n + \frac{1}{2}\right)$$

### 例题 7 — 三角项的差分法

利用上述结果证明：

$$\sum_{n=1}^N \sin(n) = \frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(\frac{1}{2}\right) - \cos\left(\frac{2N+1}{2}\right)\right]$$

**解：**

1. 由上例：

$$\sin(n) = \frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(n - \frac{1}{2}\right) - \cos\left(n + \frac{1}{2}\right)\right]$$

2. 写出前几项：

$$\frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(\frac{1}{2}\right) - \cos\left(\frac{3}{2}\right)\right] + \frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(\frac{3}{2}\right) - \cos\left(\frac{5}{2}\right)\right] + \cdots$$

$$+ \frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(\frac{2N-1}{2}\right) - \cos\left(\frac{2N+1}{2}\right)\right]$$

3. 注意裂项规律：
   - 首项含 $\cos\left(\frac{1}{2}\right)$
   - 末项含 $-\cos\left(\frac{2N+1}{2}\right)$
   - 其余项两两相消

4. 因此：

$$\sum_{n=1}^N \sin(n) = \frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(\frac{1}{2}\right) - \cos\left(\frac{2N+1}{2}\right)\right]$$

## 小结

:::note[要点总结]
**1. 基础方法：**
- 寻找可裂项的项
- 用部分分式拆分复杂分式
- 和 = 首项 − 末项

**2. 进阶应用：**
- 三项部分分式通常需要两步
- 三角项可视为常数处理
- 根号可能需要代数变形
:::

:::caution[常见易错点]
- 别忘了检查各项是否真正裂项
- 拆分分式时注意符号
- 注意先因式分解再用部分分式的机会
- 记住此方法仅在能找到差的形式时有效
:::

## 作业

### E.O.C.1

1. 将

$$\frac{3}{(3r-1)(3r+2)}$$

表示为部分分式。

2. 利用第 1 题的结果和差分法，证明

$$\sum_{r=1}^n \frac{3}{(3r-1)(3r+2)} = \frac{3n}{2(3n+2)}$$

3. 求值

$$\sum_{r=100}^{1000} \frac{3}{(3r-1)(3r+2)}$$

答案保留 3 位有效数字。

### E.O.C.2

已知

$$(2r+1)^3 = Ar^3 + Br^2 + Cr + 1$$

其中 $A$、$B$、$C$ 为待定常数：

1. 求 $A$、$B$ 和 $C$。

2. 证明

$$(2r+1)^3 - (2r-1)^3 = 24r^2 + 2$$

3. 利用第 2 题的结果和差分法，证明

$$\sum_{r=1}^n r^2 = \frac{1}{6}n(n+1)(2n+1)$$

### 挑战题（选做）：反三角函数的差分法

:::note[挑战题]
已知 $A > B > 0$，设 $x = \arctan A$，$y = \arctan B$：

**(a)** 证明：

$$\arctan A - \arctan B = \arctan\left(\frac{A-B}{1+AB}\right)$$

**(b)** 当 $A = r + 2$，$B = r$ 时，证明：

$$\frac{A-B}{1+AB} = \frac{2}{(1+r)^2}$$

**(c)** 由此用差分法证明：

$$\sum_{r=1}^n \arctan\left(\frac{2}{(1+r)^2}\right) = \arctan(n+p) + \arctan(n+q) - \arctan 2 - \frac{\pi}{4}$$

其中 $p$ 和 $q$ 为待定整数。

**(d)** 由此，说明推理过程，求：

$$\sum_{r=1}^{\infty} \arctan\left(\frac{2}{(1+r)^2}\right)$$

答案表示为 $k\pi - \arctan 2$ 的形式，其中 $k$ 为常数。
:::

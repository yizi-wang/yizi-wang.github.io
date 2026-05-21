---
title: "第十讲 无穷级数——从无穷和到函数语言"
---

## 第十讲 无穷级数——从无穷和到函数语言

## 本讲主线

上一讲中，Newton 已经把微积分和 infinite series 绑在一起：如果函数能写成无限多项式，就可以逐项求导、逐项积分、反过来求函数。第 10 章继续追问：无穷级数本身到底是什么？它什么时候可信？它怎样从计算工具变成研究函数、数列和素数的语言？

本讲按 Stillwell 第 10 章展开：geometric series → harmonic series → Madhava 的三角级数 → power series → interpolation/Taylor series → summation problems → fractional power series → generating functions → Euler product and zeta function。

课堂目标不是让学生背很多展开式，而是让他们经历四个判断：

- 一个无穷和是否收敛；
- 一个函数能否被写成 power series；
- 一个给定级数能否被求和；
- 一个级数能否编码一列数或一类数。

## 问题入口：每一项趋于零，为什么还可能发散

很多学生第一次接触级数时会有一个自然判断：如果每一项越来越小，最后趋于 $0$，那么总和也许会稳定下来。

调和级数立刻打破这个直觉：

$$
1+\frac12+\frac13+\frac14+\cdots.
$$

它的每一项都趋于 $0$，但总和仍然发散。第 10 讲从这里建立级数的基本态度：无穷级数不是“把越来越小的东西加起来”这么简单，它需要判断速度、结构和适用范围。

## 1. Early results：几何级数和潜在无穷

Greek mathematics 已经处理过无穷过程，但通常尽量把它写成有限论证。Zeno 的 dichotomy 可以看成

$$
\frac12+\frac14+\frac18+\frac1{16}+\cdots=1.
$$

Archimedes 求抛物线弓形面积时，本质上也在求一个 geometric series：

$$
1+\frac14+\frac1{4^2}+\frac1{4^3}+\cdots=\frac43.
$$

一般地，若 $|r|<1$，则

$$
a+ar+ar^2+ar^3+\cdots=\frac{a}{1-r}.
$$

推导从有限和开始：

$$
S_n=a+ar+\cdots+ar^n.
$$

两边乘以 $r$ 并相减：

$$
S_n-rS_n=a-ar^{n+1}.
$$

所以

$$
S_n=\frac{a(1-r^{n+1})}{1-r}.
$$

当 $|r|<1$ 时，$r^{n+1}\to 0$，于是得到无穷和。

这里的数学点是：无穷和不是直接被“看见”的，而是由 partial sums 的极限定义出来。

## 2. Oresme：调和级数的发散

Oresme 对 harmonic series 的分组证明非常适合课堂：

$$
1+\frac12+\left(\frac13+\frac14\right)+\left(\frac15+\frac16+\frac17+\frac18\right)+\cdots.
$$

每一组都至少大于 $\frac12$：

$$
\frac13+\frac14>\frac14+\frac14=\frac12,
$$

$$
\frac15+\frac16+\frac17+\frac18>4\cdot\frac18=\frac12.
$$

继续分组，就会不断得到新的 $\frac12$。因此总和可以超过任意大的数。

这说明：

$$
a_n\to 0
$$

只是级数 $\sum a_n$ 收敛的必要条件，不是充分条件。

Oresme 还把 harmonic series 和 $y=1/x$ 下方面积联系起来。部分和

$$
1+\frac12+\cdots+\frac1n
$$

和 $\log n$ 的增长规模接近。这为后来 Euler constant $\gamma$ 留下入口。

## 3. Madhava：三角函数的级数

15 世纪 Kerala 学派，特别是 Madhava，发现了反正切、正弦、余弦的级数。最适合本课使用的是

$$
\arctan x=x-\frac{x^3}{3}+\frac{x^5}{5}-\frac{x^7}{7}+\cdots.
$$

令 $x=1$，得到

$$
\frac{\pi}{4}=1-\frac13+\frac15-\frac17+\cdots.
$$

这个结果有两层意义：

- 它给出了计算 $\pi$ 的明确规则；
- 它说明 trigonometric quantities 可以通过 infinite series 处理。

但它也暴露一个重要区别：公式正确，不等于计算高效。$x=1$ 时这个级数收敛很慢。课堂上可以让学生算前 5 项、前 10 项，观察它逼近 $\pi/4$ 的速度。

## 4. Power series：把函数写成无限多项式

17 世纪微积分释放出大量 power series：

$$
a_0+a_1x+a_2x^2+a_3x^3+\cdots.
$$

power series 的吸引力在于：它让很多函数可以像 polynomial 一样计算。

从 geometric series 开始：

$$
\frac{1}{1-x}=1+x+x^2+x^3+\cdots,\quad |x|<1.
$$

逐项积分，得到

$$
-\log(1-x)=x+\frac{x^2}{2}+\frac{x^3}{3}+\frac{x^4}{4}+\cdots.
$$

类似地，

$$
\frac{1}{1+x}=1-x+x^2-x^3+\cdots
$$

给出

$$
\log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots.
$$

这里要特别强调 condition。不是所有 $x$ 都可以代入。级数的等号通常有收敛范围，离开这个范围，公式可能失效。

## 5. Interpolation：从表格估值到 Taylor series

Stillwell 特别强调 interpolation 的历史作用。今天它常被当作数值方法，但在 Newton、Gregory、Leibniz 那里，它与微积分和级数展开关系很深。

Interpolation 的基本问题是：已知函数在一串点上的值，能不能推断中间点或其他点的值？

有限情况下，我们可以用 polynomial interpolation。无限情况下，Gregory-Newton interpolation formula 把这种思想推到更远。Taylor series 可以看成当间隔趋于 $0$ 时出现的极限形式：

$$
f(a+h)=f(a)+hf'(a)+\frac{h^2}{2!}f''(a)+\frac{h^3}{3!}f'''(a)+\cdots.
$$

但课堂上不能只把 Taylor series 当作“写出无限展开”。真正用于计算时，我们先取有限项：

$$
T_m(a+h)=f(a)+hf'(a)+\cdots+\frac{h^m}{m!}f^{(m)}(a),
$$

然后追问 remainder

$$
R_m=f(a+h)-T_m(a+h)
$$

有多大。以 $e^{0.1}$ 为例，取到三次项：

$$
1+0.1+\frac{0.1^2}{2!}+\frac{0.1^3}{3!}.
$$

下一项量级只有 $\frac{0.1^4}{4!}$，所以误差已经很小。这样学生才能看清 Taylor series 的数学身份：它既是函数展开，也是可控近似。

这条线索让学生看到：Taylor series 不只是一个公式，它来自一个更古老的问题：怎样从已知值重建函数；而 remainder 则回答另一个问题：重建到什么精度才可信？

## 6. Summation：从展开函数到求一个级数的和

把已知函数展开成级数是一回事；给定一个级数，求它的和是另一回事。

Mengoli 可以处理 telescoping series，例如

$$
\sum_{n=1}^{\infty}\frac{1}{n(n+1)}.
$$

因为

$$
\frac{1}{n(n+1)}=\frac1n-\frac1{n+1},
$$

所以前 $N$ 项为

$$
1-\frac1{N+1},
$$

极限是 $1$。

但 Basel problem

$$
1+\frac1{2^2}+\frac1{3^2}+\frac1{4^2}+\cdots
$$

困难得多。Euler 的结果是

$$
\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}{6}.
$$

Euler 的早期推理把 $\sin x/x$ 看成一个 infinite polynomial，并把它的零点与因式分解联系起来。这在严格性上需要后人补足，但思想非常强：用函数的零点结构求数值级数的和。

## 7. Fractional power series：普通幂级数不够时

并非所有函数都能写成普通 power series。

例如 $x^{1/2}$ 在 $x=0$ 附近不能写成

$$
a_0+a_1x+a_2x^2+\cdots.
$$

理由可以课堂化地说明：如果

$$
\sqrt{x}=a_1x+a_2x^2+a_3x^3+\cdots,
$$

两边平方，右边最低次项至少是 $x^2$，不可能等于左边的 $x$。

Newton 的贡献之一是发现 algebraic functions 可以用 fractional power series 描述，例如

$$
y=x^{1/2}(1-x+x^2-x^3+\cdots).
$$

这类展开后来在 complex variables 和 Puiseux expansions 中得到更清楚的解释。这里不需要深入复分析，但要让学生知道：power series 的失败不是终点，它迫使数学家寻找更合适的局部表达方式。

## 8. Generating functions：用级数编码数列

级数还可以不表示函数值，而是编码一列数。

Fibonacci sequence 取

$$
F_0=0,\quad F_1=1,\quad F_{n+2}=F_{n+1}+F_n.
$$

定义 generating function：

$$
F(x)=F_0+F_1x+F_2x^2+F_3x^3+\cdots.
$$

计算：

$$
xF(x)=F_0x+F_1x^2+F_2x^3+\cdots,
$$

$$
x^2F(x)=F_0x^2+F_1x^3+\cdots.
$$

于是

$$
F(x)-xF(x)-x^2F(x)=x,
$$

因为 $x^2$ 以后每个系数都是

$$
F_{n+2}-F_{n+1}-F_n=0.
$$

所以

$$
F(x)=\frac{x}{1-x-x^2}.
$$

一个递归数列被压缩成了一个 rational function。继续分解分母，就可以推出 Binet formula，其中会出现 golden ratio。这里最值得讨论的是：为什么一个全是整数的数列，会和 $\sqrt5$ 发生关系？

这里还要区分两种“级数语言”。Taylor series 通常是在讨论某个函数值，必须关心 convergence 和 remainder。Generating function 在组合与递推中常常先作为 formal power series 使用：$x$ 只是记录下标的符号，等式的意思是“每一项系数相等”。这时 convergence 不是第一问题，系数关系才是第一问题。

## 9. Euler product：级数怎样碰到素数

Euler 把 harmonic series 推广为

$$
\zeta(s)=1+\frac1{2^s}+\frac1{3^s}+\frac1{4^s}+\cdots.
$$

当 $s>1$ 时它收敛。Euler 发现

$$
\zeta(s)=\prod_p \frac{1}{1-p^{-s}},
$$

其中乘积遍历所有 primes。

为什么这是真的？每个因子展开为 geometric series：

$$
\frac{1}{1-p^{-s}}=1+\frac1{p^s}+\frac1{p^{2s}}+\frac1{p^{3s}}+\cdots.
$$

把所有素数对应的因子相乘，就会得到每个正整数 $n$ 的 $1/n^s$，而且只出现一次。这正是 unique prime factorization 的作用。

因此 Euler product 把“对所有整数求和”和“对所有素数相乘”连接起来。这是 analytic number theory 的入口。

## 课堂活动

### 活动 A：调和级数为什么“慢慢地”发散

先让学生估计下面两个和：

$$
H_8=1+\frac12+\frac13+\cdots+\frac18,
$$

$$
H_{16}=1+\frac12+\frac13+\cdots+\frac1{16}.
$$

然后用 Oresme 的分组法证明：

$$
1+\frac12+\left(\frac13+\frac14\right)+\left(\frac15+\cdots+\frac18\right)+\left(\frac19+\cdots+\frac1{16}\right)+\cdots
$$

每一组都至少是 $\frac12$。

学生完成：

1. 写出前四组各自的下界。
2. 解释为什么这样能推出 harmonic series 发散。
3. 比较这个发散速度和 geometric series 的收敛速度。
4. 用一句话说明：“项趋于 $0$”为什么只是必要条件。

加深一步：用面积图解释为什么 $H_n$ 的增长规模接近 $\log n$，而不是接近 $n$。

### 活动 B：Taylor 近似不是只写展开式

用 Taylor series 估计 $e^{0.1}$：

$$
e^{0.1}=1+0.1+\frac{0.1^2}{2!}+\frac{0.1^3}{3!}+\cdots.
$$

学生完成：

1. 用前三项估计 $e^{0.1}$。
2. 用前四项再估计一次。
3. 用计算器比较误差。
4. 解释为什么多加一项会显著改善结果。

接着换成

$$
\log(1.1)=0.1-\frac{0.1^2}{2}+\frac{0.1^3}{3}-\cdots.
$$

比较两个级数的收敛速度和误差表现。这个活动的重点是：Taylor series 的价值不在于“有一个无限公式”，而在于前几项就能给出可控近似。

### 活动 C：从 recurrence 到 generating function

Fibonacci sequence 满足

$$
F_0=0,\quad F_1=1,\quad F_{n+2}=F_{n+1}+F_n.
$$

定义

$$
F(x)=F_0+F_1x+F_2x^2+F_3x^3+\cdots.
$$

学生完成：

1. 写出 $xF(x)$ 和 $x^2F(x)$。
2. 计算 $F(x)-xF(x)-x^2F(x)$。
3. 指出为什么 $x^2$ 以后的系数都消失。
4. 得到

$$
F(x)=\frac{x}{1-x-x^2}.
$$

加深一步：解释为什么一个递归定义的整数数列，最后会和 rational function 发生关系。

### 活动 D：Euler product 的有限版本与唯一分解

只取素数 $2,3,5$，展开

$$
\left(1+\frac1{2^s}+\frac1{2^{2s}}+\cdots\right)
\left(1+\frac1{3^s}+\frac1{3^{2s}}+\cdots\right)
\left(1+\frac1{5^s}+\frac1{5^{2s}}+\cdots\right).
$$

学生完成：

1. 列出乘积中出现的前十个形如 $\frac1{n^s}$ 的项。
2. 判断这些 $n$ 的 prime factors 是否只来自 $2,3,5$。
3. 解释为什么每个这样的 $n$ 只出现一次。
4. 如果把所有 primes 都纳入乘积，为什么会得到

$$
\zeta(s)=\prod_p\frac{1}{1-p^{-s}}?
$$

最后追问：这个等式本质上用了整数的哪条定理？

## 讨论题

1. 为什么“项趋于 $0$”只能说明级数可能收敛，而不能保证收敛？请用 harmonic series 和 geometric series 对比说明。
2. 同样是 infinite series，geometric series 的和可以直接求出，harmonic series 却发散。决定差异的不是“有没有无限多项”，而是什么？
3. Taylor series 什么时候是计算工具，什么时候只是形式表达？convergence range 和 remainder 在这里各自承担什么角色？
4. Formal power series 可以不讨论收敛，analytic power series 必须讨论收敛。生成函数活动中，我们更接近哪一种用法？
5. Fibonacci generating function 把 recurrence 变成 rational function。这个转化为什么能让原本递归的问题变成代数问题？
6. Euler product 把 sum over integers 变成 product over primes。如果整数没有 unique factorization，这个推导会在哪一步失败？
7. Euler 对 Basel problem 的早期推理把 $\sin x/x$ 当作 infinite polynomial。这个类比为什么能给出正确答案？为什么后人仍然需要补证明？

## 课外拓展方向

- Oresme 的 harmonic series 证明与 $\log n$ 增长。
- Madhava/Gregory-Leibniz series for $\pi$，以及收敛速度问题。
- Gregory-Newton interpolation formula 与 Taylor series 的关系。
- Basel problem 与 Euler 的 infinite product for $\sin x$。
- Puiseux series：algebraic functions 的局部展开。
- Generating functions 在组合数学中的应用。
- Riemann zeta function 与 Riemann hypothesis 的历史入口。

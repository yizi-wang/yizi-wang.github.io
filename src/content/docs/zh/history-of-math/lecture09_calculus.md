---
title: "第九讲 微积分——从穷竭法到计算规则"
---

## 第九讲 微积分——从穷竭法到计算规则

## 本讲主线

这一讲不把微积分讲成 Newton 和 Leibniz 的人物故事，而是讲一个数学方法怎样形成：古希腊的 exhaustion 可以证明某些面积结果，但很难成为日常计算工具；17 世纪的数学家把面积、体积、切线、极值这些问题改写成代数程序，微积分因此成为一种可重复使用的 calculation。

Stillwell 第 9 章的重点不是现代严格极限理论，而是早期微积分的计算性：Cavalieri 和 Fermat 处理幂函数面积，Fermat 处理切线和极值，Wallis 用大胆的 analogy 和 interpolation 推广公式，Newton 把函数看成 infinite series，Leibniz 用 notation 和 rules 让方法传播。

本讲要让学生真正做三件事：

- 从 power sums 推出一个面积；
- 用 Fermat 的小量 $E$ 求一条切线；
- 从 geometric series 推出 logarithm series。

## 问题入口：为什么穷竭法不够用

Archimedes 可以用 exhaustion 求出抛物线弓形面积，也可以处理球和圆柱的体积。但这些证明通常为某个图形专门设计，不能直接变成一套通用算法。

17 世纪数学家面对的问题更密集：

- 曲线 $y=x^k$ 下方面积是多少？
- 旋转体体积怎么求？
- 曲线某点的切线斜率是多少？
- 函数在哪里取得 maximum 或 minimum？
- 对数、三角函数、反三角函数能不能计算？

微积分最早的力量就在这里：它把“每次都要发明一个证明”变成了“按规则计算”。

## 1. Areas and volumes：面积问题变成幂和问题

先看最基本的面积：曲线 $y=x^k$ 在 $[0,a]$ 下方的面积。

把区间分成 $n$ 份，用右端点矩形近似。第 $i$ 个矩形的宽是 $a/n$，高是 $(ia/n)^k$，所以总面积近似为

$$
A_n=\frac{a}{n}\left[\left(\frac{a}{n}\right)^k+\left(\frac{2a}{n}\right)^k+\cdots+\left(\frac{na}{n}\right)^k\right].
$$

整理得

$$
A_n=\frac{a^{k+1}}{n^{k+1}}(1^k+2^k+\cdots+n^k).
$$

因此，面积问题被转化为 power sums 的问题。

以 $k=2$ 为例，使用

$$
1^2+2^2+\cdots+n^2=\frac{n(n+1)(2n+1)}{6},
$$

得到

$$
A_n=\frac{1}{n^3}\cdot \frac{n(n+1)(2n+1)}{6}
=\frac{(n+1)(2n+1)}{6n^2}.
$$

当 $n$ 越来越大，$A_n$ 趋向

$$
\frac13.
$$

这就是

$$
\int_0^1 x^2\,dx=\frac13.
$$

Cavalieri、Fermat、Roberval 等人的工作可以理解为把这类结果推广到更多幂函数，最终得到

$$
\int_0^a x^k\,dx=\frac{a^{k+1}}{k+1}.
$$

这里的重点不是先讲 modern integral，而是让学生看到：积分一开始和求和、幂和、逼近密切相连。

## 2. Fermat 的切线方法：先算，再解释

切线问题比面积问题更晚成熟。原因之一是：面积可以用很多小块逼近，但切线需要抓住“瞬时方向”。

Fermat 的方法可以从 $y=x^2$ 看起。取相邻的两个点 $x$ 和 $x+E$，割线斜率是

$$
\frac{(x+E)^2-x^2}{E}
=\frac{2xE+E^2}{E}
=2x+E.
$$

当 $E$ 足够小，割线接近切线，于是舍去 $E$，得到切线斜率 $2x$。

现代人会写成

$$
\lim_{E\to 0}(2x+E)=2x.
$$

但 Fermat 的语言不是极限。他的计算方式是：先把 $E$ 当作非零量，完成代数除法；最后再把含 $E$ 的小项忽略。

这个步骤在今天看容易补上 rigor，但在当时确实会引起质疑：

- 如果 $E=0$，为什么可以除以 $E$？
- 如果 $E\ne 0$，为什么最后可以扔掉？

这正是早期微积分的历史状态：方法先有效，基础后来被整理。

再做一次 $y=x^3$：

$$
\frac{(x+E)^3-x^3}{E}
=\frac{3x^2E+3xE^2+E^3}{E}
=3x^2+3xE+E^2.
$$

舍去含 $E$ 的项，得到斜率

$$
3x^2.
$$

学生由此猜出

$$
\frac{d}{dx}x^k=kx^{k-1}.
$$

## 3. Maxima, minima, tangents：解析几何让切线可计算

解析几何把曲线写成方程。这样，切线问题就可以变成代数问题。

例如曲线若由 $F(x,y)=0$ 给出，切线方向可以通过 $x$ 和 $y$ 的微小变化来计算。Fermat、Hudde、Sluse 等人的方法虽然没有今天的 implicit differentiation 语言，但已经在处理类似问题。

一个课堂可做的例子是：

$$
y^2=x^3.
$$

若用现代记号，implicit differentiation 给出

$$
2y\frac{dy}{dx}=3x^2,
$$

所以

$$
\frac{dy}{dx}=\frac{3x^2}{2y}.
$$

历史上重要的不是学生背这个公式，而是看到：一旦曲线有方程，切线就不再只靠几何直觉，而可以被 algebraic manipulation 处理。

## 4. Linearization：导数不只是斜率

如果只把导数理解成 tangent slope，微积分的力量会被低估。更深的一步是：在一个点附近，函数可以先用线性函数替代。

现代写法是

$$
f(x+h)=f(x)+f'(x)h+\text{higher order terms}.
$$

其中 $f'(x)h$ 是增量的 principal linear part。早期数学家没有这套语言，但他们已经在使用同一个想法：忽略更高阶的小量，保留一阶变化。

例如估计 $\sqrt{10.4}$。取 $f(x)=\sqrt{x}$，在 $x=10$ 处展开：

$$
f'(10)=\frac{1}{2\sqrt{10}}.
$$

所以

$$
\sqrt{10.4}\approx \sqrt{10}+\frac{0.4}{2\sqrt{10}}.
$$

这不是“画一条切线”的几何装饰，而是把一个不容易心算的函数值变成局部线性计算。Newton method 正是这个思想的算法版本。

设要求方程 $f(x)=0$ 的根。在当前近似 $x_k$ 附近，用切线

$$
y=f(x_k)+f'(x_k)(x-x_k)
$$

替代曲线，再让切线与 $x$-axis 相交：

$$
0=f(x_k)+f'(x_k)(x_{k+1}-x_k).
$$

于是

$$
x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)}.
$$

对 $f(x)=x^2-2$，这给出

$$
x_{k+1}=\frac12\left(x_k+\frac{2}{x_k}\right),
$$

也就是一种快速求 $\sqrt2$ 的迭代算法。

## 5. Wallis：从整数幂到分数幂

Wallis 的《Arithmetica Infinitorum》代表一种很 17 世纪的工作方式：把面积问题算术化，然后通过 analogy 和 interpolation 推广。

对整数 $p$，有规律：

$$
\int_0^1 x^p\,dx=\frac{1}{p+1}.
$$

Wallis 不满足于整数幂。他会问：如果 $p=\frac12$ 呢？公式是否还应该给出

$$
\int_0^1 \sqrt{x}\,dx=\frac{1}{\frac12+1}=\frac23?
$$

今天我们可以用现代积分验证。但在当时，这类推断主要依靠表格、比例、插值和强烈的模式意识。

Wallis 的方法不够严格，却对 Newton 很关键。Newton 的 general binomial theorem 正是在这种把有限公式推广到分数指数、无限级数的气氛中出现的。

## 6. Newton：微积分作为 infinite series 的代数

Newton 的微积分不是只会求导积分的规则表，而是一套操作 infinite series 的代数。

从 geometric series 开始：

$$
\frac{1}{1+t}=1-t+t^2-t^3+\cdots,\quad |t|<1.
$$

两边从 $0$ 到 $x$ 积分，得到 Mercator logarithm series：

$$
\log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots.
$$

这一步的意义很大。对数原本不是多项式函数，但现在它可以像无限多项式一样被计算。

Newton 还把 binomial theorem 推广到任意指数：

$$
(1+x)^p=1+px+\frac{p(p-1)}{2!}x^2+\frac{p(p-1)(p-2)}{3!}x^3+\cdots.
$$

当 $p$ 是正整数时，这个级数会停止；当 $p$ 是分数或负数时，它变成无限级数。于是 $\sqrt{1+x}$、$1/(1+x)$、$\arcsin x$ 等函数都进入了同一套计算语言。

例如

$$
\sqrt{1+x}=1+\frac12x-\frac18x^2+\frac1{16}x^3-\cdots,\quad |x|<1.
$$

取 $x=0.04$，前三项就给出

$$
1+0.02-0.0002=1.0198,
$$

非常接近 $\sqrt{1.04}$。这一步把“二项式公式”从有限代数公式改造成了近似计算工具，也自然通向下一讲的 power series。

## 7. Newton interpolation：从表格到函数

Stillwell 反复提醒，早期微积分不只来自连续曲线，也来自天文表、数表和插值问题。Interpolation 的基本问题是：已知若干点的函数值，能否构造一个多项式来组织这些数据？

取三个点

$$
(0,1),\quad (1,2),\quad (2,5).
$$

Newton interpolation 用“逐级差分”的形式写多项式。先看一阶差：

$$
2-1=1,\quad 5-2=3.
$$

再看二阶差：

$$
3-1=2.
$$

对应的二次多项式可以写成

$$
P(x)=1+x+\frac{2}{2}x(x-1)=x^2+1.
$$

这里的重点不是背公式，而是看到一个思想：离散表值也可以被“局部变化”组织起来。有限差分在离散世界中扮演的角色，和导数在连续世界中的角色有相似之处。

## 8. Leibniz：notation 把方法变成可传播的规则

Leibniz 的微积分入口不同。他把微小变化写成 $dx,dy$，把积分写成

$$
\int y\,dx.
$$

积分符号来自拉长的 $S$，表示 sum。$\frac{dy}{dx}$ 则把变化率写成两个微小量的 quotient。

这种 notation 的力量在于，它会引导计算。例如 product rule 可以用 infinitesimal 的方式推出来：

$$
d(uv)=(u+du)(v+dv)-uv
= u\,dv+v\,du+du\,dv.
$$

忽略二阶小量 $du\,dv$，得到

$$
d(uv)=u\,dv+v\,du.
$$

除以 $dx$，就是

$$
\frac{d(uv)}{dx}=u\frac{dv}{dx}+v\frac{du}{dx}.
$$

今天我们会给它严格证明，但 Leibniz notation 的优势已经很明显：它把复杂关系写成可以操作的符号。

Leibniz 还清楚地表达了 integration 和 differentiation 的互逆关系，也就是 fundamental theorem of calculus 的核心思想。

## 9. 严格性：不是本讲起点，但必须留下问题

早期微积分的成功并不等于它从一开始就严格。Berkeley 后来批评 infinitesimals 是“消失量的鬼魂”，正是抓住了这个问题：它们到底是零还是非零？

19 世纪的 Cauchy、Weierstrass 等人用 limit 重新整理基础。20 世纪的 nonstandard analysis 又给 infinitesimals 一种新的严格解释。

所以这一讲的结论不是“早期数学家不严谨”，而是更准确的一点：数学史中常常先出现有效算法，再出现能完全解释它的基础语言。

## 课堂活动

### 活动 A：Fermat 极值法与 adequality

一个矩形周长固定为 $20$。设一边长为 $x$，另一边长为 $10-x$，面积为

$$
A(x)=x(10-x).
$$

不用现代导数，先模仿 Fermat 的方法。比较 $A(x+E)$ 和 $A(x)$：

$$
A(x+E)=(x+E)(10-x-E).
$$

学生完成：

1. 展开 $A(x+E)-A(x)$。
2. 去掉含 $E^2$ 的高阶小量。
3. 令剩下的一阶项为 $0$，求出 $x$。
4. 再用现代导数 $A'(x)$ 检查结果。

最后讨论：这个活动中，“极值点”为什么对应“一阶变化消失”？这比直接背 $A'(x)=0$ 更接近 Fermat 的原始问题。

### 活动 B：从幂和到面积，并估计误差

用右端点矩形求 $y=x^2$ 在 $[0,1]$ 下方面积。先写出

$$
A_n=\frac{1}{n}\left[\left(\frac1n\right)^2+\left(\frac2n\right)^2+\cdots+\left(\frac nn\right)^2\right].
$$

代入

$$
1^2+2^2+\cdots+n^2=\frac{n(n+1)(2n+1)}6.
$$

学生完成：

1. 化简 $A_n$。
2. 求 $A_n-\frac13$。
3. 判断右端点矩形给出的是 overestimate 还是 underestimate。
4. 解释为什么误差的主项大约是 $\frac{1}{2n}$。

这样，积分不只是“取极限得到面积”，还变成一个可估计误差的近似过程。

### 活动 C：线性化与局部近似

用 $f(x)=\sqrt{x}$ 估计 $\sqrt{10.4}$。

取基点 $x=10$，令 $dx=0.4$。学生计算：

$$
f'(10)=\frac{1}{2\sqrt{10}},
$$

所以

$$
\sqrt{10.4}\approx \sqrt{10}+\frac{0.4}{2\sqrt{10}}.
$$

然后让学生用计算器比较误差，并回答：

- 这个近似为什么本质上是“用切线代替曲线”？
- 如果把 $10.4$ 换成 $14$，同样的线性近似为什么会变差？
- 这说明导数除了表示斜率，还表示什么？

### 活动 D：Newton method 求 $\sqrt2$

要求学生从切线推导迭代公式，而不是直接给公式。

设

$$
f(x)=x^2-2.
$$

在当前近似 $x_k$ 处作切线：

$$
y=f(x_k)+f'(x_k)(x-x_k).
$$

令切线与 $x$-axis 相交，得到下一步近似：

$$
x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)}
=\frac12\left(x_k+\frac{2}{x_k}\right).
$$

从 $x_0=1.5$ 开始迭代两次，比较 $x_1,x_2$ 与 $\sqrt2$ 的差距。

最后讨论：Newton method 为什么通常比二分法快？它又可能在什么情况下失败？

### 活动 E：Newton interpolation 与有限差分

给学生三点

$$
(0,1),\quad (1,2),\quad (2,5).
$$

先不告诉他们函数是什么，只要求完成差分表：

$$
\begin{array}{c|ccc}
x&0&1&2\\
\hline
y&1&2&5\\
\Delta y&&1&3\\
\Delta^2 y&&&2
\end{array}
$$

学生完成：

1. 写出形如 $P(x)=a+bx+cx(x-1)$ 的二次多项式。
2. 用 $P(0)=1$、$P(1)=2$、$P(2)=5$ 解出 $a,b,c$。
3. 验证 $P(x)=x^2+1$。
4. 讨论：如果第四个数据点是 $(3,11)$，这个二次插值是否仍可信？

这个活动把 Wallis 的 interpolation、Newton 的数表传统和微积分中的“变化率”连起来。它也提醒学生：插值多项式可以组织数据，但不等于真实函数已经被确定。

## 讨论题

1. Fermat 的 adequality 和现代 derivative 都抓住“一阶变化”。它们的相同点和不同点分别是什么？
2. 为什么局部极值点通常满足 $f'(x)=0$？这个结论在哪些情况下会失效，例如不可导点或端点？
3. 导数作为 slope、rate of change、linear approximation 三种解释中，哪一种最能说明 Newton method？
4. 早期微积分先有有效算法，后有严格基础。数学中什么时候可以接受这种顺序，什么时候不能？
5. Wallis 从整数幂面积推广到分数幂面积，本质上是在做 interpolation。怎样区分有价值的模式识别和不可靠的猜测？
6. Newton interpolation 中，有限差分和导数都在描述“变化”。它们相似在哪里，又根本不同在哪里？
7. Newton 的 series 方法需要关注 convergence，Leibniz 的 differential notation 需要解释 infinitesimals。两种方法各自的数学风险是什么？
8. 如果一个数学记号能引导正确计算，但它的严格解释后来才完成，这个记号算不算“可靠的数学工具”？

## 课外拓展方向

- Cavalieri principle 与 indivisibles。
- Fermat 的 adequality 方法与 modern derivative。
- Wallis product for $\pi$。
- Newton general binomial theorem。
- Newton interpolation formula 与 finite differences。
- Mercator logarithm series 与 logarithm tables。
- Leibniz notation、differentials 与 fundamental theorem of calculus。
- Berkeley 对 infinitesimals 的批评，以及 Cauchy/Weierstrass 的极限化。

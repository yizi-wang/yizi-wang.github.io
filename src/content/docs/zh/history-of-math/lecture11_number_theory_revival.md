---
title: "第十一讲 数论复兴——从丢番图到费马"
---

## 第十一讲 数论复兴——从丢番图到费马

## 本讲主线

这一讲的主题不是“数论里有哪些著名结论”，而是数论在 17 世纪怎样重新形成一套方法。Stillwell 第 11 章的路线是：先补上 Diophantus 与 Fermat 之间的中世纪成果，尤其是 binomial coefficients；再进入 Fermat little theorem、Fermat last theorem、infinite descent、rational right triangles、rational points on cubics。

本讲的主轴应当是 Fermat，而不是 probability。Pascal triangle 需要讲，因为它连接 binomial theorem、combinations 和 Fermat little theorem 的证明线索；division of stakes 只适合作为旁支说明 Pascal 的组合解释有应用，不应成为课堂主活动。

本讲要让学生完成三类数学动作：

- 用 binomial coefficients 证明一个同余结论；
- 理解 infinite descent 为什么能证明“不存在”；
- 用直线与曲线交点构造 rational points。

## 问题入口：怎样证明一个整数方程没有解

前面几讲中，方程常常被用来找曲线、找面积、找切线。数论关心的方程更挑剔：它只允许整数或有理数解。

例如

$$
x^2+y^2=z^2
$$

有很多正整数解；但 Fermat 断言，当 $n>2$ 时，

$$
x^n+y^n=z^n
$$

没有正整数解。

“找一个解”可以靠尝试、参数化、构造；“证明没有解”需要完全不同的方法。Fermat 的重要性就在这里：他把数论推进到证明结构层面，尤其是 modular reasoning 和 infinite descent。

## 1. Between Diophantus and Fermat：中间并不是空白

古希腊的 Diophantus 研究了很多整数和有理数方程，但他的工作没有在欧洲形成连续传统。Stillwell 提醒我们，在 Diophantus 和 Fermat 之间，数论并没有消失：

- 中国数学发展了 Chinese remainder theorem 和 binomial coefficients 的数表；
- Yang Hui 和 Zhu Shijie 的著作保存了类似 Pascal triangle 的表格，并追溯到 Jia Xian；
- Levi ben Gershon 给出 permutations 和 combinations 的公式，并接近 mathematical induction 的思想。

这些材料说明，17 世纪的“复兴”不是从无到有，而是旧问题、旧工具和新符号在欧洲重新汇合。

## 2. Pascal triangle：为什么它在本章出现

Pascal triangle 记录 binomial coefficients：

$$
(a+b)^n=\sum_{k=0}^n {n\choose k}a^{n-k}b^k.
$$

三角形中的递推关系是

$$
{n\choose k}={n-1\choose k-1}+{n-1\choose k}.
$$

这个关系可以直接从恒等式看出：

$$
(a+b)^n=a(a+b)^{n-1}+b(a+b)^{n-1}.
$$

左边 $a^{n-k}b^k$ 的系数，来自右边两部分：

- 从 $a(a+b)^{n-1}$ 来的 ${n-1\choose k}$；
- 从 $b(a+b)^{n-1}$ 来的 ${n-1\choose k-1}$。

按具体约定调整下标，就得到 Pascal triangle 的“上方两数相加”规则。

Pascal 的贡献不在于第一个发现这个表，而在于把两个解释合在一起：

- algebraic interpretation：它是 binomial expansion 的系数；
- combinatorial interpretation：${n\choose k}$ 是从 $n$ 个对象中选 $k$ 个的方式数。

这一步对本章很关键，因为 Fermat little theorem 可以通过 binomial coefficients 的 divisibility 来理解。

Pascal triangle 还可以被当作 modular object。模 $2$ 看前几行，odd entries 会形成 Sierpinski-like pattern。Lucas theorem 给出这个现象的结构解释：若把 $n,k$ 写成二进制，那么

$$
{n\choose k}
$$

为 odd，当且仅当 $k$ 的每一个 $1$ 位都出现在 $n$ 的 $1$ 位上。比如

$$
13=(1101)_2.
$$

所以第 $13$ 行的 odd entries 出现在

$$
k=0,1,4,5,8,9,12,13.
$$

这让 Pascal triangle 从“组合数表”变成了一个带有同余结构的对象，也为下一节的 Fermat little theorem 做准备。

## 3. Fermat little theorem：从 binomial coefficients 到 modular arithmetic

Fermat little theorem 的现代表述是：若 $p$ 是 prime，且 $p\nmid n$，则

$$
n^{p-1}\equiv 1\pmod{p}.
$$

等价地，对任意整数 $n$，有

$$
n^p-n\equiv 0\pmod{p}.
$$

先证明 $n=2$ 的情形。由 binomial theorem：

$$
2^p=(1+1)^p=1+{p\choose 1}+{p\choose 2}+\cdots+{p\choose p-1}+1.
$$

如果 $p$ 是 prime，则对 $1\le k\le p-1$，

$$
{p\choose k}=\frac{p!}{k!(p-k)!}
$$

可以被 $p$ 整除。原因是 numerator 中有因子 $p$，而 denominator 中没有因子 $p$；组合数本身又是整数，所以这个因子不会被约掉。

因此中间所有项都被 $p$ 整除，得到

$$
2^p\equiv 2\pmod{p}.
$$

也就是

$$
p\mid (2^p-2).
$$

一般的 $n$ 可以用类似思想推进。一个方式是迭代 binomial theorem：如果 $n^p\equiv n\pmod{p}$，则

$$
(n+1)^p=n^p+{p\choose 1}n^{p-1}+\cdots+{p\choose p-1}n+1\equiv n+1\pmod{p}.
$$

由 induction 得到

$$
n^p\equiv n\pmod{p}
$$

对所有正整数 $n$ 成立。若 $p\nmid n$，两边除以 $n$，得到

$$
n^{p-1}\equiv 1\pmod{p}.
$$

这条证明线把 Pascal triangle、prime divisibility 和 induction 放在同一个地方。

这个定理还立刻产生一种算法性用法。若 $N$ 是奇数，且

$$
2^{N-1}\not\equiv 1\pmod{N},
$$

那么 $N$ 一定是 composite。问题是反方向不成立：通过检验不保证 $N$ 是 prime。典型例子是

$$
341=11\cdot 31.
$$

因为

$$
2^{10}=1024\equiv 1\pmod{341},
$$

所以

$$
2^{340}=(2^{10})^{34}\equiv 1\pmod{341}.
$$

341 是 composite，却通过了 base $2$ 的 Fermat test。这一点很适合课堂讨论：一个定理可以给出有用测试，但测试的逻辑强度取决于我们使用的是命题还是逆命题。

## 4. Fermat last theorem：名声背后的数学问题

Fermat 在 Diophantus 书页边上写下著名断言：当 $n>2$ 时，

$$
x^n+y^n=z^n
$$

没有正整数解。

今天我们知道，这个命题直到 1990s 才由 Andrew Wiles 证明，并且证明依赖 elliptic curves 和 modular forms。课堂上不应把重点放在现代证明，也不应把故事讲成传奇。

更适合本讲的问题是：Fermat 自己真正留下了什么方法？答案之一是 $n=4$ 相关的 infinite descent。

证明 Fermat last theorem 时，只需考虑 prime exponents。因为如果 $n=mp$，且

$$
a^n+b^n=c^n,
$$

那么

$$
(a^m)^p+(b^m)^p=(c^m)^p.
$$

所以复合指数的反例会给出某个素数指数的反例。

## 5. Infinite descent：怎样证明“不可能”

Infinite descent 的逻辑很简单，但使用很精巧。

要证明某类正整数对象不存在，可以假设存在一个“最小”的对象。然后从它构造出一个更小的同类对象。这与“最小”矛盾。因此原对象不存在。

它依赖 natural numbers 的 well-ordering：任何非空正整数集合都有最小元素。正因为如此，descent 特别适合整数问题。

Fermat 在 rational right-angled triangles 中使用了这种方法。他证明：

> 一个边长全为 rational numbers 的 right triangle，其面积不可能是 square number。

用现代语言整理思路如下。

任意 primitive Pythagorean triple 可以写成

$$
p^2-q^2,\quad 2pq,\quad p^2+q^2
$$

其中 $p,q$ 互素，且一奇一偶。其面积是

$$
\frac12(p^2-q^2)(2pq)=pq(p+q)(p-q).
$$

如果面积是 square，并经过 coprimality 和 parity 分析，就会迫使

$$
p,\quad q,\quad p+q,\quad p-q
$$

分别具有很强的平方结构。Fermat 的关键是：从这样一个假设的三角形，可以构造出另一个更小的 rational right triangle，面积仍然是 square。

于是如果存在一个最小的反例，就会有更小的反例；矛盾。

这一证明同时给出 Fermat last theorem 的 $n=4$ 情形，因为若

$$
r^4-s^4=v^2,
$$

就会导出一个面积为 square 的 rational right triangle。

课堂中不需要完整复原所有代数细节，但必须让学生抓住 descent 的三步：

1. 假设存在最小反例；
2. 用数论结构构造更小反例；
3. 与正整数不能无限下降矛盾。

## 6. Rational points on conics：数论和几何的连接

Diophantine problems 经常可以翻译为“曲线上有哪些 rational points”。

以单位圆为例：

$$
x^2+y^2=1.
$$

点 $(-1,0)$ 是 rational point。过它作一条 rational slope 的直线

$$
y=t(x+1).
$$

这条线与圆相交于 $(-1,0)$ 和另一个点。代入方程可得另一个交点：

$$
x=\frac{1-t^2}{1+t^2},\quad y=\frac{2t}{1+t^2}.
$$

当 $t$ 是 rational number 时，$x,y$ 也是 rational numbers。反过来，圆上除了 $(-1,0)$ 以外的 rational point 都可由某个 rational $t$ 得到。

这就是 Pythagorean triples 的几何解释：整数直角三角形等价于单位圆上的 rational points。

## 7. Rational points on cubics of genus 0：有奇点时可以参数化

Stillwell 接着讨论 cubic curves。并不是所有三次曲线都一样。若 cubic 有 double point，常常可以像圆一样用 rational functions 参数化，这类曲线属于 genus 0。

以 Descartes folium 为例：

$$
x^3+y^3=3axy.
$$

原点是一个 double point。取过原点的直线

$$
y=tx.
$$

代入曲线：

$$
x^3+t^3x^3=3atx^2.
$$

除了原点对应的重根外，另一个交点满足

$$
x=\frac{3at}{1+t^3},\quad y=\frac{3at^2}{1+t^3}.
$$

如果 $t$ 是 rational，得到的点就是 rational point。这里的思路和单位圆相似：已知一个特殊 rational point，再用 rational slope 的直线扫出其他 rational points。

## 8. Rational points on cubics of genus 1：割线、切线和新的结构

如果 cubic 没有 double point 或 cusp，情况就不同。它通常不能用 rational functions 参数化。这类曲线属于 genus 1，是 elliptic curves 的入口。

Stillwell 使用形如

$$
y^2=ax^3+bx^2+cx+d
$$

的 cubic。若 $P_1=(x_1,y_1)$ 和 $P_2=(x_2,y_2)$ 是 rational points，过它们的直线

$$
y=tx+k
$$

与 cubic 一般还会相交于第三点 $P_3$。代入曲线后得到一个三次方程，其三个根是 $x_1,x_2,x_3$。比较 $x^2$ 的系数可得

$$
x_1+x_2+x_3=\frac{t^2-b}{a},
$$

所以

$$
x_3=\frac{t^2-b}{a}-x_1-x_2.
$$

若曲线系数和 $P_1,P_2$ 都是 rational，且斜率 $t$ rational，那么 $P_3$ 也是 rational point。

这就是 chord-tangent construction 的起点。若选定一个 point at infinity 作为零元，可以把

$$
P_1+P_2
$$

定义为第三交点 $P_3$ 再关于 $x$-axis 反射后的点。这个定义的 associativity 很不显然，课堂上不需要证明；重要的是学生第一次看到：曲线上的 rational points 不只是“有没有”的问题，还可以组成一种运算结构。

这条线后来发展成 elliptic curve 上的加法结构，也解释了为什么 Fermat last theorem 的现代证明最终会与 elliptic curves 联系起来。这里不应把课堂变成密码学展示；真正要留下的是：整数方程、曲线有理点和几何运算在这里发生了连接。

## 课堂活动

### 活动 A：从 Fermat 小定理到素性检测

1. 展开 $(1+1)^p$。
2. 说明为什么 $1\le k\le p-1$ 时，${p\choose k}$ 被 prime $p$ 整除。
3. 推出

$$
2^p\equiv 2\pmod{p}.
$$

4. 选 $p=5,7$ 做数值验证。

然后把命题反过来使用：若某个奇数 $N$ 满足

$$
2^{N-1}\not\equiv 1\pmod{N},
$$

那么 $N$ 一定不是 prime。

学生测试 $N=9,15,21$。再给出反例：

$$
341=11\cdot 31.
$$

因为

$$
2^{10}=1024\equiv 1\pmod{341},
$$

所以

$$
2^{340}=(2^{10})^{34}\equiv 1\pmod{341}.
$$

讨论：为什么 Fermat test 能证明某些数是 composite，却不能单独证明一个数是 prime？

### 活动 B：Pascal triangle mod 2 与 Lucas 思想

先画出 Pascal triangle 前 16 行，把 odd entries 涂黑、even entries 留白。学生应当看到 Sierpinski-like pattern。

接着看第 13 行。因为

$$
13=(1101)_2.
$$

Lucas theorem 的一个模 2 结论是：${13\choose k}$ 为 odd，当且仅当 $k$ 的二进制中出现 $1$ 的位置都包含在 $1101$ 的 $1$ 位中。

学生列出这些 $k$：

$$
k=0,1,4,5,8,9,12,13.
$$

然后检查 Pascal triangle 第 13 行对应位置是否确实为 odd。

这个活动的目标是把 Pascal triangle 从“组合数表”推进到 modular pattern：同一个二项式系数表，在模 $p$ 下会出现数论结构。

### 活动 C：单位圆上的 rational points 与 Pythagorean triples

从直线

$$
y=t(x+1)
$$

和圆

$$
x^2+y^2=1
$$

出发，推导

$$
x=\frac{1-t^2}{1+t^2},\quad y=\frac{2t}{1+t^2}.
$$

取 $t=1/2,2,3/4$，计算对应 rational points。

然后把每个 rational point 写成

$$
\left(\frac{a}{c},\frac{b}{c}\right),
$$

得到一个 Pythagorean triple：

$$
a^2+b^2=c^2.
$$

最后回答：为什么“过 rational point 作 rational slope 的直线”会保证另一个交点仍是 rational？

### 活动 D：descent 的逻辑骨架，从 $\sqrt2$ 到 Fermat

先用简单版本热身：证明 $\sqrt2$ irrational。

假设存在最小正整数对 $(p,q)$，使

$$
p^2=2q^2.
$$

推出 $p,q$ 都是 even，于是 $(p/2,q/2)$ 是更小的同类解，矛盾。

再回到 Fermat 的 rational right triangle theorem。学生不需要复原全部代数，只写出 descent 证明必须具备的四个部件：

1. 什么对象被假设存在？
2. 用哪个正整数度量“最小”？
3. 如何从一个对象构造更小对象？
4. 为什么这个过程不能无限继续？

最后比较：$\sqrt2$ 的 descent 和 Fermat 的 descent 在逻辑结构上相同，难度差在哪里？

### 活动 E：genus 0 和 genus 1 的差异

对单位圆，过一个已知 rational point 作任意 rational slope 的直线，就能得到所有 rational points。

对 Descartes folium

$$
x^3+y^3=3axy,
$$

因为原点是 double point，过原点的直线 $y=tx$ 也能给出 rational parametrization。

但对 nonsingular cubic，例如

$$
y^2=x^3-x+1,
$$

一条直线通常与曲线有三个交点。课堂任务：

1. 解释为什么“一个已知点 + 一条斜率”不再像圆那样直接扫出所有点。
2. 解释为什么“两点确定一条线，再取第三个交点”会成为更自然的操作。
3. 这一步为什么会暗示 elliptic curve 上可能存在某种 addition law？

## 讨论题

1. Fermat little theorem 可以用来排除合数，但为什么不能直接确认素数？341 的例子说明了什么？
2. Pascal triangle 在模 2 下出现分形图案。这个现象说明二项式系数不只是组合计数，还携带什么数论信息？
3. Fermat little theorem 的证明中，prime 条件用在了哪里？如果 $p$ 是 composite，哪一步会失效？
4. Infinite descent 和 induction 都依赖 well-ordering。一个是“向上推出所有”，一个是“向下制造矛盾”；请比较二者的证明结构。
5. 为什么 rational points on conics 可以被 rational slope 参数化？这个方法到了 nonsingular cubic 上为什么不再够用？
6. Elliptic curve 上的 chord-tangent construction 为什么会把“找点”变成“点的运算”？这和普通几何中的作图有什么不同？
7. Fermat last theorem 的现代证明连接 elliptic curves 和 modular forms。这是否说明原来的整数方程问题其实早就包含了几何结构？

## 课外拓展方向

- Chinese remainder theorem 的早期历史，以及它为什么后来重新进入欧洲数学。
- Pascal triangle 的中国、Hebrew、Pascal 三条传统：发现、传播和系统化的区别。
- Fermat little theorem、Euler theorem、RSA 的数学基础。
- Infinite descent 的经典例子：$\sqrt2$ irrationality、Pythagorean triples、Fermat $n=4$。
- Congruent number problem：哪些数能成为 rational right triangle 的面积。
- Descartes folium 的 rational parameterization。
- Elliptic curves 的 chord-tangent law，以及它和 Fermat last theorem 的现代联系。
- Pascal 的 division of stakes 可作为组合解释的旁支阅读，但不作为本讲主线。


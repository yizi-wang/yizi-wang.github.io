---
title: "第一讲：勾股定理"
---

## 第一讲：勾股定理及其历史背景

## 什么是勾股定理？

想象一下，几千年前，没有精密的测量仪器，古代的工匠如何确保宫殿的墙角是标准的直角？农夫又如何精确计算一块斜边田地的面积？这些看似简单的实际需求，背后却隐藏着一个贯穿了数千年数学史，连接了算术与几何，甚至一度引发了数学危机的深刻定理。

**定理表述：**

$$
a^2 + b^2 = c^2
$$

其中 $a$ 和 $b$ 是直角边，$c$ 是斜边。

**几何意义：** 这个公式代表了三个正方形面积之间的关系。

**早期应用：** 古人可能通过简单的实践活动，如用打了 12 个等距绳结的绳子构造 (3, 4, 5) 直角三角形来确定直角。

**连接算术与几何的桥梁：** 勾股定理的精妙之处在于它架起了算术与几何之间的桥梁。通过简单的代数关系（如 $3^2 + 4^2 = 5^2$）与直观的几何图形（直角三角形的边长关系）之间的对应，它揭示了数与形之间深刻的内在联系。

## 古代渊源

### 巴比伦贡献

**普林顿 322 泥板（约公元前 1800 年）：** 这块约公元前 1800 年的巴比伦泥板系统地记录了多组成整数对 $(a, c)$，使得存在另一个整数 $b$ 满足 $a^2 + b^2 = c^2$。这些整数组 $(a, b, c)$ 被称为"勾股数"或"毕达哥拉斯三元组"（如我们熟知的 (3,4,5)、(5,12,13) 等）。

### 中国古代成就

**《周髀算经》：** 这部成书于约公元前 1 世纪（部分内容可能更早）的数学天文学著作，是中国现存最早系统阐述勾股定理的文献之一。书中记载了商高与周公的对话，明确提出了"勾广三，股修四，径隅五"的特例，并有"故折矩，以为句广三，股修四，径隅五"的论述，显示了勾股定理在古代测量中的应用。

**赵爽弦图：** 公元 3 世纪，三国时期的数学家赵爽在为《周髀算经》作注时，绘制了著名的"弦图"（亦称"勾股圆方图"）。该图通过对四个全等的直角三角形和一个中心小正方形的巧妙拼接，形成一个大正方形，从而用几何方法清晰直观地证明了勾股定理（即 $a^2+b^2=c^2$）。

**刘徽的"青朱出入图"：** 与赵爽同时代的另一位伟大数学家刘徽，在其为《九章算术》所作的注中，也给出了勾股定理的严谨证明。他运用"出入相补"的原理，通过对图形进行割补、拼合（后人常以"青朱出入图"的意象来形象描述其方法，即用不同颜色的图形块进行变换），以动态变换的思想论证了定理。

## 勾股数

### 定义与性质

**定义：** 满足 $a^2 + b^2 = c^2$ 的正整数组 $(a, b, c)$。

**系统生成：** 古希腊数学家，特别是欧几里得（约公元前 300 年）在其《几何原本》第十卷中给出了生成所有本原勾股数（即 $a, b, c$ 没有公因数）的公式。

**欧几里得公式：**

$$
a = p^2 - q^2, \quad b = 2pq, \quad c = p^2 + q^2
$$

其中 $p, q$ 为互质整数，一个奇一个偶，$p > q$。

**单位圆上的有理点：** 如果 $(a, b, c)$ 是一组勾股数，那么 $(a/c, b/c)$ 就是单位圆 $x^2 + y^2 = 1$ 上的一个有理点（其坐标 $x, y$ 均为有理数）。

## 勾股定理的证明

### 图形证明

最早的证明很可能是通过图形的分割和拼接（一种"面积归纳法"）得到的。通过构造两个大正方形，它们分别包含四个相同的直角三角形，余下的面积一方面是两直角边的平方和，另一方面是斜边的平方。

### 欧几里得的证明

欧几里得在其《几何原本》第一卷命题 47 中给出了一个基于面积的经典证明。在第六卷命题 31 中，他利用相似三角形的性质给出了另一个更为简洁的证明。

## 数学危机

### 无理数的发现

**$\sqrt{2}$ 的发现：** 当考虑边长为 1 的正方形时，根据勾股定理，其对角线的长度 $d$ 满足 $d^2 = 1^2 + 1^2 = 2$，即 $d = \sqrt{2}$。

**不可公度性：** 毕达哥拉斯学派的成员（据传是希帕索斯）证明了 $\sqrt{2}$ 无法表示成两个整数之比，即它是一个无理数。这意味着正方形的边长和对角线是"不可公度"的——它们不存在一个公共的单位长度，可以同时量尽两者。

**哲学与数学的冲击：** 这一发现对毕达哥拉斯学派造成了毁灭性的打击。他们的核心信条"万物皆数"是建立在"数"即整数或整数之比（有理数）的基础之上的。$\sqrt{2}$ 的存在证明了宇宙中存在无法用他们所理解的"数"来精确度量的量。

## 现代出口：什么才算距离？

### 从勾股定理到坐标距离

勾股定理的现代意义之一，是它把"距离"变成了坐标差的代数函数。

在平面上，两点之间的欧氏距离是：

$$
d_2((x_1,y_1),(x_2,y_2))
=
\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}.
$$

如果一个点有 $n$ 个坐标：

$$
x=(x_1,x_2,\ldots,x_n), \qquad
y=(y_1,y_2,\ldots,y_n),
$$

那么欧氏距离自然推广为：

$$
d_2(x,y)=\sqrt{\sum_{i=1}^{n}(x_i-y_i)^2}.
$$

这里的"空间"不一定是可以画出来的空间。它可以是数据的特征空间。例如：

$$
\text{movie}=(\text{action},\text{romance},\text{comedy},\text{rating},\ldots),
$$

$$
\text{student}=(\text{height},\text{score},\text{hours studied},\ldots),
$$

$$
\text{image}=(\text{pixel}_1,\text{pixel}_2,\ldots,\text{pixel}_{10000}).
$$

在现代数据处理中，"相似"经常被翻译成：

$$
\text{distance is small}.
$$

但一旦进入高维空间，距离本身就会变得不直观。二维里看起来很多的数据点，到了十维可能非常稀疏。

### 线性回归不是只在平面上画线

学生熟悉的线性回归，也可以从"距离"的角度重新理解。

给定数据点：

$$
(x_1,y_1),(x_2,y_2),\ldots,(x_n,y_n),
$$

用一条直线预测：

$$
\hat y=mx+b.
$$

对每个 $x_i$，模型给出预测值：

$$
\hat y_i=mx_i+b.
$$

于是我们得到预测向量：

$$
\hat y=(\hat y_1,\hat y_2,\ldots,\hat y_n),
$$

真实数据也可以看成向量：

$$
y=(y_1,y_2,\ldots,y_n).
$$

模型误差就是 residual vector：

$$
r=y-\hat y
=
(y_1-\hat y_1,\ldots,y_n-\hat y_n).
$$

所以"模型拟合得好不好"其实是在问：

> 真实值向量 $y$ 和预测值向量 $\hat y$ 有多远？

最小二乘法选择的是：

$$
\min_{m,b}\sum_{i=1}^{n}(y_i-\hat y_i)^2,
$$

也就是让 residual vector 的 $L^2$ 长度尽量小：

$$
\lVert r\rVert_2^2=\sum_i r_i^2.
$$

因此：

> Linear regression is not just drawing a line in the $x$-$y$ plane.<br>
> It is choosing the prediction vector closest to the data vector in $n$-dimensional output space.

换句话说，线性回归不只是"在平面上画一条线"，而是在 $n$ 维预测空间中，找离真实数据向量最近的预测向量。

### 距离选择就是建模选择

如果不用平方误差，而用绝对误差：

$$
\min_{m,b}\sum_i |y_i-\hat y_i|,
$$

那就是在 residual vector 上使用 $L^1$ loss。

这不是随便换一个公式，而是在改变我们对"误差"的理解：

$$
L^2:\quad \text{大误差会被平方重罚。}
$$

$$
L^1:\quad \text{大误差仍然是大误差，但不再被平方放大。}
$$

所以，距离选择不是数学家的玩具。它会直接改变模型训练出来的结果。一个 outlier 可能把 least squares regression 明显拉走，但对 least absolute deviations 的影响较小。

### 当空间本身不是平面

有时问题不在于距离公式换了，而在于空间本身变了。

在地球表面，两个城市之间的可行最短路不是穿过地球内部的直线，而是沿球面的 great circle arc。若球半径为 $R$，两点对应的球心角为 $\theta$，球面距离是：

$$
d_{\text{sphere}}=R\theta.
$$

这说明勾股定理不是"错了"，而是有适用范围：它描述的是平直空间中的距离。在曲面上，要改用 geodesic distance。

### 最后的边界案例：时空间隔

在狭义相对论中，事件可以写成：

$$
(t,x).
$$

若取 $c=1$，一维空间中的 Minkowski interval 是：

$$
s^2=(\Delta t)^2-(\Delta x)^2.
$$

它看起来像勾股定理，但中间是减号。于是两个不同事件也可能满足：

$$
s^2=0.
$$

这不再是普通 metric space 里的 distance，因为普通距离要求：

$$
d(x,y)=0 \iff x=y.
$$

这里应该称为 spacetime interval，而不是普通意义上的"距离"。它的作用不是测量空间长度，而是分类事件之间的因果关系。

最终可以把这一讲收束到一句话：

> 勾股定理给了我们一种距离。现代数学继续追问：在这个问题中，什么应该算远？

## 课堂活动：四个出口任务

下面四题可以作为课后阅读，也可以分组处理。每一题都不是为了背一个新公式，而是为了判断：当前问题中，哪一种"距离"最有意义？

### 1. 高维空间为什么比想象中更稀疏？

**English title:** High-dimensional space is mostly empty

假设所有数据点都落在单位立方体 $[0,1]^d$ 中。每个维度分成 10 段。

1. 计算空间会被分成多少个小格子：

$$
d=1:\ 10,\qquad
d=2:\ 10^2,\qquad
d=3:\ 10^3,\qquad
d=6:\ 10^6,\qquad
d=10:\ 10^{10}.
$$

2. 如果有 1000 个数据点，计算平均每个小格子里有多少点。

3. 解释为什么二维里看起来很多的 1000 个点，到了十维几乎什么也不是。

4. 进一步思考：如果"附近"越来越难找到点，nearest neighbour 或 similarity search 会遇到什么问题？

**反直觉结论：** 高维空间不是更拥挤，而是更空。每增加一个维度，空间规模都会成倍膨胀。这是数据科学中 curse of dimensionality 的一个入口。

**阅读材料：**

- 核心阅读：[FutureLearn / Coventry University, The curse of dimensionality](https://www.futurelearn.com/info/courses/applied-data-science/0/steps/169390)。重点读 sparsity 和 closeness 两部分，思考为什么高维空间会让"near"变得不可靠。
- 挑战阅读：[Cornell CS4780, k-nearest neighbors / Curse of Dimensionality](https://www.cs.cornell.edu/courses/cs4780/2017sp/lectures/lecturenote02_kNN.html)。只读 Curse of Dimensionality 小节，重点看 $\ell^d\approx k/n$ 这个估算。

### 2. 为什么最小二乘法会被 outlier 拖走？

**English title:** Least squares is a distance choice, not a law of nature

先研究一个最简单的回归模型：用一个常数 $a$ 代表一组数据。

给定数据：

$$
2,\ 2,\ 3,\ 3,\ 100.
$$

#### 平方误差

平方误差定义为：

$$
S_2(a)=\sum_i (x_i-a)^2.
$$

1. 证明使 $S_2(a)$ 最小的 $a$ 是平均数 $\bar x$。

   提示：把下式展开并配方：

$$
\sum_i (x_i-a)^2
=
\sum_i (x_i-\bar x)^2+n(a-\bar x)^2.
$$

2. 对这组数据计算平均数，并比较 $a=22$ 与 $a=3$ 时的平方误差。

#### 绝对误差

绝对误差定义为：

$$
S_1(a)=\sum_i |x_i-a|.
$$

3. 证明使 $S_1(a)$ 最小的 $a$ 是中位数。

   提示：先把数据从小到大排列。若 $a$ 向右移动一点，左边每个点贡献的距离增加，右边每个点贡献的距离减少。最小值出现在左右数量平衡的位置。

4. 对这组数据计算中位数，并比较 $a=3$ 与 $a=22$ 时的绝对误差。

5. 解释为什么同一组数据在 $L^2$ loss 下更倾向于 $a=22$，在 $L^1$ loss 下更倾向于 $a=3$。

#### 连接线性回归

一般线性回归中，我们不是选一个常数，而是选一条线：

$$
\hat y=mx+b.
$$

每个数据点都有 residual：

$$
r_i=y_i-\hat y_i.
$$

最小二乘法做的是：

$$
\min_{m,b}\sum_i r_i^2.
$$

如果改用绝对误差，则是：

$$
\min_{m,b}\sum_i |r_i|.
$$

**反直觉结论：** 最小二乘法不是天经地义。它选择了一种误差观：大 residual 应该被平方惩罚。这个选择计算方便，也和 Gaussian noise 有自然联系；但如果数据里有 outlier，它可能会为了减少一个巨大错误，牺牲对多数点的贴合。

> A loss function is a distance with a worldview.<br>
> 误差函数是一种带有世界观的距离。

**阅读材料：**

- 核心阅读 1：[OpenIntro / Introduction to Linear Regression](https://nulib.github.io/kuyper-stat202/introduction-to-linear-regression.html)。重点读 residual 的定义，以及 least squares minimises the sum of squared residuals 的说明。
- 核心阅读 2：[OpenIntro / LibreTexts, Types of Outliers in Linear Regression](<https://stats.libretexts.org/Bookshelves/Introductory_Statistics/OpenIntro_Statistics_%28Diez_et_al%29./07%3A_Introduction_to_Linear_Regression/7.04%3A_Types_of_Outliers_in_Linear_Regression>)。重点看 leverage point 和 influential point 的区别。
- 挑战阅读：[scikit-learn, Quantile regression](https://scikit-learn.org/stable/auto_examples/linear_model/plot_quantile_regression.html)。只读 Comparing QuantileRegressor and LinearRegression 小节，关注 MSE/MAE 与 mean/median 的关系。

### 3. 勾股定理在地球上错了吗？

**English title:** Is Pythagoras wrong on Earth?

在校园尺度上，如果向东走 3 m，再向北走 4 m，起点到终点的距离约为：

$$
\sqrt{3^2+4^2}=5.
$$

但在地球尺度上，情况不同。

设地球半径为 $R$。赤道上有两点，它们相差 $90^\circ$。

1. 如果允许穿过地球内部，计算直线 chord length：

$$
d_{\text{chord}}=2R\sin45^\circ=\sqrt2R.
$$

2. 如果只能沿地球表面走，计算四分之一赤道弧长：

$$
d_{\text{surface}}=R\cdot\frac{\pi}{2}.
$$

3. 比较这两个距离。哪一个更短？哪一个才是飞机、船、人真正可以沿地球表面走的距离？

4. 再看一个球面三角形：北极 $N$，赤道上一点 $A$，赤道上另一点 $B$，且 $A$ 与 $B$ 经度相差 $90^\circ$。说明这个球面三角形的三个角都可以是 $90^\circ$，所以内角和是 $270^\circ$。

**反直觉结论：** 勾股定理不是被推翻，而是被定位了。它是 flat geometry 的距离公式；球面上要使用 spherical geometry 和 geodesic distance。

**阅读材料：**

- 核心阅读：[National Geographic Education, Great Circle](https://education.nationalgeographic.org/resource/great-circle/)。重点读 great circle 和 flight route 的部分，解释为什么球面上的"直线"不是平面地图上的直线。
- 挑战阅读：[MIT PRIMES Circle, Triangles in Various Geometries](<https://math.mit.edu/research/highschool/primes/circle/documents/2022/Ben%20%26%20Sebastian.pdf>)。只读前 3 页，重点看 great circles 与 spherical triangle angle sum。

### 4. 为什么光走过的时空间隔为零？

**English title:** Why is the spacetime interval of light equal to zero?

一个 event 是某个时间、某个地点发生的一件事。在一维空间中，一个事件可以写成：

$$
(t,x).
$$

取 $c=1$，即光 1 秒走 1 个 light-second。

普通欧氏形式是：

$$
d^2=(\Delta t)^2+(\Delta x)^2.
$$

但 Minkowski interval 是：

$$
s^2=(\Delta t)^2-(\Delta x)^2.
$$

设事件 $A=(0,0)$。计算下列事件与 $A$ 的 $s^2$：

$$
B=(5,0),\qquad
C=(5,3),\qquad
D=(5,5),\qquad
E=(5,7).
$$

1. 判断哪些是 timelike separation，哪些是 lightlike/null separation，哪些是 spacelike separation。

2. 解释为什么 $D\ne A$，但从 $A$ 到 $D$ 的时空间隔满足 $s^2=0$。

3. 解释为什么 $E=(5,7)$ 不能由从 $A$ 发出的光或普通物体到达。

4. 说明为什么这里不能把 $s$ 简单叫作普通"距离"。

**反直觉结论：** 在欧氏几何中，

$$
x^2+y^2=0
$$

只有零解。但在 Minkowski geometry 中，

$$
t^2-x^2=0
$$

有非零解：

$$
x=t,\qquad x=-t.
$$

这两条线就是一维时空图中的 light cone。

最终收束：

> Pythagoras measures length in space.<br>
> Minkowski interval classifies causal separation in spacetime.

**阅读材料：**

- 核心阅读：[Einstein Online, Spacetime](https://www.einstein-online.info/en/spacetime/)。重点读 spacetime diagram 和 light cone 的解释。
- 挑战阅读：[Taylor & Wheeler / Physics LibreTexts, Light Cone: Partition in Spacetime](<https://phys.libretexts.org/Bookshelves/Relativity/Spacetime_Physics_%28Taylor_and_Wheeler%29/06%3A_Regions_of_Spacetime/6.03%3A_Light_Cone-_Partition_in_Spacetime>)。重点读 lightlike interval 附近的段落，比较 Euclidean distance 和 Lorentz geometry。
- 可选补充：[Physics LibreTexts, The Spacetime Interval](<https://phys.libretexts.org/Courses/Skidmore_College/Introduction_to_General_Relativity/01%3A_Special_Relativity/1.02%3A_The_Spacetime_Interval>)。适合想看完整公式 $c^2\Delta \tau^2=c^2\Delta t^2-\Delta x^2-\Delta y^2-\Delta z^2$ 的同学。

## 延伸阅读：metric space

如果想把本讲的出口再抽象一步，可以读 [MIT OCW, Introduction to Metric Spaces, Lecture 1](https://ocw.mit.edu/courses/18-s190-introduction-to-metric-spaces-january-iap-2023/mit18_s190iap23_lec1.pdf) 的开头部分。只需要读 metric space 的定义，以及 $d_1$、$d_2$、$d_\infty$ 的例子。

读后回答：

1. 一个函数要叫作 distance，至少要满足哪些性质？
2. 为什么 $L^1$、$L^2$、$L^\infty$ 都可以定义距离？
3. 为什么 Minkowski interval 不是 ordinary metric distance？

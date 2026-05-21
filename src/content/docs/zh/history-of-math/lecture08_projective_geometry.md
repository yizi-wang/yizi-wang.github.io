---
title: "第八讲 投影几何——透视、不变量与无穷远点"
---

## 第八讲 投影几何——透视、不变量与无穷远点

## 本讲主线

这一讲从一个很具体的问题开始：画家怎样把三维空间画到平面上，并且让图像从某个视点看起来合理？

透视画法会破坏长度、角度和平行性。正方形地砖在画面里不再是正方形，平行铁轨在画面里会相交。于是数学问题变成：如果常见的度量都不稳定，几何还能研究什么？

投影几何的回答是：研究在投影下仍然保留的结构。最基本的是 incidence，即点在线上、线过点、若干点共线、若干线共点。进一步地，四个共线点还有一个数值不变量：cross-ratio。到 homogeneous coordinates 出现以后，无穷远点也能被放进代数方程里，圆锥曲线和三次曲线的分类随之发生变化。

本讲按 Stillwell 第 8 章的路线展开：perspective → anamorphosis → Desargues → cross-ratio → conics at infinity → projective plane → homogeneous coordinates → Pascal/Pappus。

## 问题入口：一块地砖为什么会越画越窄

先画一个最简单的透视图。纸上有一条 horizon line，线上取一个 vanishing point $V$。在纸下方画一条 baseline，取几个等距点，把这些点都连到 $V$。这些线表示地砖边缘向远处延伸。

现在的问题是：怎样画横向地砖线，才能让它们表示现实中等距的地砖？

如果直接在纸面上等距画横线，结果会不对。远处的地砖在画面上应该更窄。Alberti 的方法是先确定第一块地砖，再用 diagonal 传递位置。对角线在真实地面中经过一串格点；透视投影把直线仍然送到直线，所以画面中的这条 diagonal 也能帮助确定后面的横线。

这里已经出现了投影几何的核心：

- 纸面上的长度不是可信量；
- 角度也不是可信量；
- 但“点是否在某条直线上”是可信关系。

从这一刻起，几何的重心从 measuring 转向 incidence。

## 1. Perspective：透视作为数学变换

Alberti 的 veil 可以这样建模：眼睛固定在点 $O$，画布是一张平面，空间中的点 $P$ 沿直线 $OP$ 投到画布上。这个过程就是 projection。

这个模型给出两个基本事实：

1. 空间中的直线，投影后仍然是直线。
2. 一族平行线可能在画面中汇聚到同一个 vanishing point。

这两个事实足以解释为什么 tiled floor 可以不用测量就画出。地砖的“相等”不是通过纸面长度表达，而是通过一套投影关系表达。

课堂停顿点：让学生判断下面哪些性质在透视下保留。

- 点 $A,B,C$ 共线；
- 两条线平行；
- 两条线垂直；
- 一个四边形是正方形；
- 两条线相交于同一点。

答案不应该只给 yes/no，而要让学生解释：哪些是 incidence，哪些是 metric properties。

## 2. Anamorphosis：投影的投影不再只是普通透视

Anamorphosis 是一种故意拉伸的图像：从正面看是扭曲图形，从某个极端视点看才恢复正常。Holbein 的《The Ambassadors》中那条变形的 skull 是典型例子。

数学上，这说明一件事：一次 perspective 已经会改变图形；如果再对一个透视图进行投影，得到的变换范围会更大。Niceron 的 anamorphic drawings 让人看到，projectivity 比单次 perspectivity 更宽。

这一步很重要，因为投影几何不是“怎样画得逼真”的理论，而是“经过一系列投影后，什么仍然不变”的理论。

## 3. Desargues：把平面图形放回空间理解

Desargues 的工作把透视经验变成几何定理。设两个三角形 $A_1B_1C_1$ 和 $A_2B_2C_2$ 满足：

$$
A_1A_2,\quad B_1B_2,\quad C_1C_2
$$

三条线都通过同一点 $O$。我们说这两个三角形从点 $O$ 透视。

Desargues theorem 说：对应边的交点共线。也就是若

$$
X=A_1B_1\cap A_2B_2,
$$

$$
Y=B_1C_1\cap B_2C_2,
$$

$$
Z=C_1A_1\cap C_2A_2,
$$

那么 $X,Y,Z$ 在同一条直线上。

为什么这不是普通的画图观察？如果两个三角形本来位于空间中的两个平面上，结论几乎是显然的：对应边的交点都落在这两个平面的交线上。真正困难的是：当两个三角形都画在同一个平面上时，怎样把这个平面图形解释成空间投影的结果？

这个定理让学生看到投影几何的一种典型思路：平面命题有时要通过空间模型来理解。

## 4. Points at infinity：让平行线也相交

欧几里得几何中，平行线不相交。透视图中，平行线会走向同一个 vanishing point。Desargues 和 Kepler 使用的处理方式是：给每一族平行线添加一个 point at infinity。

这样，任意两条不同直线都恰好有一个交点：

- 普通相交线在有限点相交；
- 平行线在对应的无穷远点相交。

这不是为了制造奇怪对象，而是为了减少例外。原来很多命题要分“相交”和“平行”两种情况；在 projective plane 中，它们可以统一成一句话。

## 5. Cross-ratio：投影几何中的尺子

投影不保留长度，也不保留长度比。三点共线本身也不够产生数值不变量，因为 projective transformation 可以把任意三个共线点送到任意另外三个共线点。

四个点开始不同。对同一直线上的四个点 $A,B,C,D$，定义 cross-ratio：

$$
(A,B;C,D)=\frac{(C-A)(D-B)}{(C-B)(D-A)}.
$$

这里把点暂时看成数轴上的数。不同教材的符号次序可能不同，但核心事实不变：cross-ratio 在 projective transformations 下保持不变。

一个可算的例子：取

$$
A=1,\quad B=2,\quad C=3,\quad D=5.
$$

则

$$
(A,B;C,D)=\frac{(3-1)(5-2)}{(3-2)(5-1)}=\frac{6}{4}=\frac32.
$$

课堂上可以让学生再用 transformation $x\mapsto 1/x$ 检查一次。普通距离已经完全改变，但 cross-ratio 保留下来。这就是投影几何中的“尺子”：它不量长度，而量投影下稳定的关系。

为什么它会保持不变？在一条 projective line 上，基本的投影变换可以写成

$$
f(x)=\frac{ax+b}{cx+d},\quad ad-bc\ne 0.
$$

直接相减可得

$$
f(u)-f(v)=\frac{(ad-bc)(u-v)}{(cu+d)(cv+d)}.
$$

把这个式子分别代入 cross-ratio，所有来自 $ad-bc$ 和分母的因子都会抵消，只剩下原来的

$$
\frac{(C-A)(D-B)}{(C-B)(D-A)}.
$$

这个小推导很重要：它让学生看到，projective invariant 不是神秘性质，而是由投影变换的代数形式逼出来的。

## 6. Conics at infinity：圆锥曲线的新分类

在古希腊传统中，ellipse、parabola、hyperbola 是圆锥被不同平面截出的曲线。在解析几何中，它们统一为二次方程。在投影几何中，它们还可以通过 points at infinity 来区分。

用 homogeneous coordinates $[X:Y:Z]$ 表示 projective plane。普通平面对应 $Z\ne 0$，通常令 $Z=1$。line at infinity 是 $Z=0$。

看三个二次曲线的 projective completion：

1. 圆或椭圆型：

$$
X^2+Y^2=Z^2.
$$

令 $Z=0$，得到

$$
X^2+Y^2=0.
$$

在 real projective plane 中没有非零实解，所以没有 real points at infinity。

2. 抛物线型：

$$
X^2=YZ.
$$

令 $Z=0$，得到 $X=0$，所以只有一个无穷远点：

$$
[0:1:0].
$$

3. 双曲线型：

$$
XY=Z^2.
$$

令 $Z=0$，得到 $XY=0$，所以有两个无穷远点：

$$
[1:0:0],\quad [0:1:0].
$$

这给出一个比“形状像什么”更结构化的分类：看曲线怎样遇到 line at infinity。

## 7. Homogeneous coordinates：把无穷远点写进方程

Homogeneous coordinates 的基本规则是：

$$
[X:Y:Z]=[\lambda X:\lambda Y:\lambda Z]
$$

其中 $\lambda\ne 0$。也就是说，一个 projective point 不是一个三元组，而是一整条穿过原点的线。

普通坐标 $(x,y)$ 对应

$$
[x:y:1].
$$

无穷远点对应 $Z=0$。

例如 affine parabola $y=x^2$ 可以写成 projective equation：

$$
X^2=YZ.
$$

当 $Z=1$ 时，它就是 $y=x^2$；当 $Z=0$ 时，它多出一个 point at infinity。这样，曲线不再只是普通平面上的图形，而是在 projective plane 中被补全的对象。

Homogeneous coordinates 还让 projective transformation 有统一写法。平面上的 projective transformation 可以由一个可逆的 $3\times 3$ 矩阵表示：

$$
\begin{bmatrix}
X'\\Y'\\Z'
\end{bmatrix}
=
H
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix}.
$$

因为 $[X:Y:Z]$ 只在比例意义下确定，矩阵 $H$ 也只在非零倍数意义下确定。非退化情况下，四个点的对应关系足以确定一个平面 homography。这正是文档扫描软件能把斜拍纸张拉成矩形的数学原因：它恢复的是平面上的 projective relation，而不是自动恢复所有真实长度和角度。

这也是 Bézout theorem 需要 projective viewpoint 的原因。两条曲线的交点数要稳定，就必须把无穷远点和 multiplicity 计算进去。

## 8. Pascal、Pappus 与 Brianchon：对偶如何产生新定理

Pascal theorem 说：如果一个六边形内接于一条 conic，那么三组 opposite sides 的交点共线。Pappus theorem 可以看作 conic 退化成两条直线时的特殊情形。

射影几何还有一个更高层的结构：duality principle。粗略地说，如果把“点”和“线”互换，很多真命题会变成另一个真命题。Pascal theorem 的对偶版本是 Brianchon theorem：

- Pascal：六边形内接于 conic，三组对边交点共线；
- Brianchon：六边形外切于 conic，三条连接对顶点的直线共点。

这几个定理适合作为本讲的收束，因为它们把几条线索合在一起：

- conic 不只是画出来的曲线，而是 projective object；
- collinearity 和 concurrence 都是 incidence statement；
- 对偶原理说明定理之间有结构关系，不只是各自孤立成立；
- 后来用 Bézout theorem 可以更代数地解释 Pascal theorem。

课堂中不需要完整证明 Pascal theorem 或 Brianchon theorem，但可以让学生画图观察 Pappus theorem，再讨论“共线”和“共点”为什么会成对出现。这样比只展示一个漂亮配置更有数学性。

## 课堂活动

### 活动 A：从一张透视图找 horizon line

给学生一张走廊、地砖或建筑立面的照片，也可以用教师提前画好的透视草图代替。要求他们完成三步：

1. 选出两组现实中应当平行的直线，例如地砖边缘或墙角边线。
2. 在图中延长每一组直线，找出对应的 vanishing point。
3. 连接两个 vanishing points，得到 horizon line。

然后回答：

- 为什么同一方向的平行线应该共享同一个 vanishing point？
- 如果两组平行线的 vanishing points 都落在同一条线上，这条线在 projective geometry 中表示什么？
- 这个活动中用到的是长度、角度，还是 incidence？

这一活动的目标不是画得漂亮，而是把“平行线在无穷远处相交”变成可观察、可解释的数学对象。

### 活动 B：验证 cross-ratio 不是普通长度比

在数轴上取四个点

$$
A=1,\quad B=2,\quad C=3,\quad D=5.
$$

先计算

$$
(A,B;C,D)=\frac{(C-A)(D-B)}{(C-B)(D-A)}.
$$

再对四个点做射影变换

$$
f(x)=\frac{x}{x+1}.
$$

得到

$$
f(A)=\frac12,\quad f(B)=\frac23,\quad f(C)=\frac34,\quad f(D)=\frac56.
$$

重新计算

$$
(f(A),f(B);f(C),f(D)).
$$

学生应当发现：普通距离都变了，例如 $B-A=1$ 但 $f(B)-f(A)=\frac16$；然而 cross-ratio 仍然相同。

最后讨论：为什么三点不够产生这样的 projective invariant，四点才开始有非平凡信息？

### 活动 C：用 line at infinity 区分三类 conics

对下面三个 homogeneous equations，令 $Z=0$，判断 real points at infinity 的个数：

$$
X^2+Y^2=Z^2,
$$

$$
X^2=YZ,
$$

$$
XY=Z^2.
$$

要求学生写出完整判断：

1. 令 $Z=0$ 后得到什么方程？
2. 在 real projective plane 中有几个非零解？
3. 这个数量为什么分别对应 ellipse、parabola、hyperbola？

加深一步：如果换一条 ordinary line 当作新的 line at infinity，同一条 projective conic 在新的 affine view 中可能变成哪一类 conic？这一步用来提醒学生：ellipse/parabola/hyperbola 的差异部分来自我们选择了哪条线作为 infinity。

### 活动 D：为什么四个角点能拉正文档

把一张斜拍的 A4 纸看成平面上的一个四边形。软件可以把它“拉正”为矩形。课堂中不要求计算 homography matrix，只要求学生解释：

1. 为什么一个平面到另一个平面的 projective transformation 会把直线送到直线？
2. 为什么矩形的四个角点足以确定一次平面 projective transformation？
3. 拉正之后，纸面上的长度和角度是否一定恢复为真实长度和真实角度？如果不能，软件恢复的到底是什么？

这一活动把 homogeneous coordinates 和现代 computer vision 联系起来，但核心仍然是本章的数学：incidence 与 projective transformation。

## 讨论题

1. 在透视图中恢复信息时，哪些问题只需要 projective data，哪些问题必须额外知道 metric data？请分别举例。
2. Point at infinity 只是方便语言，还是 projective plane 中必须承认的对象？请用“任意两条直线有唯一交点”来回答。
3. Cross-ratio 能从照片中保留下来，但长度不能。这个差别说明“测量”在 projective geometry 中发生了什么改变？
4. Desargues theorem 把平面配置放到空间中理解。这个方法和解析几何“把图形放进坐标系”相比，各自改变了什么？
5. Ellipse、parabola、hyperbola 在 projective geometry 中可以互相转化。那为什么在普通解析几何中仍然要区分它们？
6. Pascal theorem 和 Pappus theorem 的结论都是 collinearity。为什么“共线”会成为投影几何中特别自然的结论形式？
7. Pascal theorem 与 Brianchon theorem 是一组对偶命题。把“点”和“线”互换时，哪些语言会跟着互换？这种互换为什么不只是文字游戏？

## 课外拓展方向

- Renaissance perspective：Brunelleschi、Alberti、Dürer 的透视方法。
- Anamorphosis：Holbein 的《The Ambassadors》和 Niceron 的变形图。
- Projective transformations：linear fractional transformations 与 $\mathbb{RP}^1$。
- Algebraic geometry 入门：homogeneous polynomials、line at infinity、Bézout theorem。
- Pascal/Pappus/Brianchon theorem：从作图观察、对偶关系到代数证明。

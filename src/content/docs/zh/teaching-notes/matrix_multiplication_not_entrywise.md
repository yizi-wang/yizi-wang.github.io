---
title: 为什么矩阵乘法不是逐项相乘
---

# 为什么矩阵乘法不是逐项相乘

我第一次讲矩阵乘法时，最容易被问住的不是计算。

学生会算行乘列，但他们会盯着式子问：两个同样大小的矩阵，为什么不能对应位置相乘？为什么偏偏拿左边的一行去碰右边的一列？为什么 $AB$ 和 $BA$ 还不一样？

如果矩阵只是数字表，这些问题很难回答。最省事的说法是“定义就是这样”。这句话短期有效，后患也明显：学生会把矩阵乘法当成一条人为设计出来的怪规则。

我后来更愿意先问另一个问题：一次矩阵变换之后还要再做一次，能不能把这两步合成一步？这个问题摆出来，行乘列才有地方落脚。

## 先不要把矩阵看成数字表

在 A-Level Further Maths 的课堂里，学生已经见过矩阵表示二维几何变换。比如

$$
A=\begin{pmatrix}1&1\\0&1\end{pmatrix}
$$

表示一个水平剪切：

$$
\begin{pmatrix}x\\y\end{pmatrix}
\mapsto
\begin{pmatrix}x+y\\y\end{pmatrix}.
$$

再比如

$$
B=\begin{pmatrix}0&-1\\1&0\end{pmatrix}
$$

表示绕原点逆时针旋转 $90^\circ$：

$$
\begin{pmatrix}x\\y\end{pmatrix}
\mapsto
\begin{pmatrix}-y\\x\end{pmatrix}.
$$

到这里，先别急着说“矩阵乘法”。矩阵暂时就是一个动作：向量进去，位置变了，再出来。

只做一次动作还好。麻烦出现在连续做两次：先剪切再旋转，和先旋转再剪切，看起来只是换了顺序，实际处理的已经不是同一个向量。

## 先追踪一个向量

取向量

$$
v=\begin{pmatrix}1\\2\end{pmatrix}.
$$

先做 $A$，也就是水平剪切：

$$
Av=
\begin{pmatrix}1&1\\0&1\end{pmatrix}
\begin{pmatrix}1\\2\end{pmatrix}
=
\begin{pmatrix}3\\2\end{pmatrix}.
$$

再做 $B$，也就是旋转 $90^\circ$：

$$
B(Av)=
\begin{pmatrix}0&-1\\1&0\end{pmatrix}
\begin{pmatrix}3\\2\end{pmatrix}
=
\begin{pmatrix}-2\\3\end{pmatrix}.
$$

所以"先 $A$ 后 $B$"把

$$
\begin{pmatrix}1\\2\end{pmatrix}
$$

送到了

$$
\begin{pmatrix}-2\\3\end{pmatrix}.
$$

如果反过来呢？先旋转：

$$
Bv=
\begin{pmatrix}0&-1\\1&0\end{pmatrix}
\begin{pmatrix}1\\2\end{pmatrix}
=
\begin{pmatrix}-2\\1\end{pmatrix}.
$$

再剪切：

$$
A(Bv)=
\begin{pmatrix}1&1\\0&1\end{pmatrix}
\begin{pmatrix}-2\\1\end{pmatrix}
=
\begin{pmatrix}-1\\1\end{pmatrix}.
$$

同一个向量，同样两件事，只是顺序换了，结果已经不同。

这比直接告诉学生"$AB\ne BA$"有用。因为他们能看见：剪切改变的是水平方向上相对于高度的偏移，旋转会把水平和竖直方向交换到新的位置。先后顺序不同，第二个变换面对的对象已经不是同一个几何状态。

## 现在才需要矩阵乘法

上面的算法没有任何神秘之处。它只是一步一步追踪向量。

但如果每个向量都这样追踪，很快会烦。于是问题来了：能不能找到一个新矩阵，直接表示"先 $A$ 后 $B$"这整个动作？

也就是说，我们想找一个矩阵 $C$，使得对任意向量 $v$，

$$
Cv=B(Av).
$$

这个 $C$ 就应该是 $BA$。注意这里的顺序很容易让学生混乱：$BA$ 表示先做 $A$，再做 $B$，因为向量写在最右边，先碰到右边那个矩阵。

我们来算这个复合变换对一般向量的作用。

先做 $A$：

$$
\begin{pmatrix}x\\y\end{pmatrix}
\mapsto
\begin{pmatrix}x+y\\y\end{pmatrix}.
$$

再做 $B$：

$$
\begin{pmatrix}x+y\\y\end{pmatrix}
\mapsto
\begin{pmatrix}-y\\x+y\end{pmatrix}.
$$

所以复合变换是

$$
\begin{pmatrix}x\\y\end{pmatrix}
\mapsto
\begin{pmatrix}-y\\x+y\end{pmatrix}.
$$

把右边写成矩阵形式：

$$
\begin{pmatrix}-y\\x+y\end{pmatrix}
=
\begin{pmatrix}0&-1\\1&1\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}.
$$

因此

$$
BA=
\begin{pmatrix}0&-1\\1&1\end{pmatrix}.
$$

这时再把它拿去作用在刚才的向量上：

$$
\begin{pmatrix}0&-1\\1&1\end{pmatrix}
\begin{pmatrix}1\\2\end{pmatrix}
=
\begin{pmatrix}-2\\3\end{pmatrix}.
$$

和逐步追踪完全一致。

到这里再引入 $BA$，学生比较容易接受。它只是把刚才已经做过的事记下来：先做 $A$，再做 $B$，合起来是一个新的矩阵。

## 行乘列从哪里冒出来

现在可以回到行乘列了。

直接计算

$$
BA=
\begin{pmatrix}0&-1\\1&0\end{pmatrix}
\begin{pmatrix}1&1\\0&1\end{pmatrix}.
$$

按照行乘列：

$$
BA=
\begin{pmatrix}
0\cdot1+(-1)\cdot0 & 0\cdot1+(-1)\cdot1\\
1\cdot1+0\cdot0 & 1\cdot1+0\cdot1
\end{pmatrix}
=
\begin{pmatrix}0&-1\\1&1\end{pmatrix}.
$$

这和刚才从复合变换推出来的矩阵一样。

为什么会这样？可以用基向量讲得很干净。

一个二维线性变换只要知道它把

$$
e_1=\begin{pmatrix}1\\0\end{pmatrix},\quad
e_2=\begin{pmatrix}0\\1\end{pmatrix}
$$

送到哪里，就知道整个变换。矩阵的两列，正是在记录 $e_1$ 和 $e_2$ 的去向。

对于 $A$，

$$
Ae_1=\begin{pmatrix}1\\0\end{pmatrix},\quad
Ae_2=\begin{pmatrix}1\\1\end{pmatrix}.
$$

所以 $A$ 的第一列和第二列分别是这两个结果。

现在再做 $B$。复合变换 $BA$ 的第一列，应该是 $B(Ae_1)$；第二列，应该是 $B(Ae_2)$。

先看第一列：

$$
B(Ae_1)=B\begin{pmatrix}1\\0\end{pmatrix}
=
\begin{pmatrix}0\\1\end{pmatrix}.
$$

再看第二列：

$$
B(Ae_2)=B\begin{pmatrix}1\\1\end{pmatrix}
=
\begin{pmatrix}-1\\1\end{pmatrix}.
$$

于是复合矩阵的两列就是

$$
\begin{pmatrix}0\\1\end{pmatrix},
\quad
\begin{pmatrix}-1\\1\end{pmatrix},
$$

合起来仍然是

$$
BA=
\begin{pmatrix}0&-1\\1&1\end{pmatrix}.
$$

行乘列是在做同一件事，只是写得更短。

右边矩阵的一列，先告诉我们某个基向量经过第一步后去了哪里。左边矩阵的一行，再从这个结果里取出一个新坐标。两者相遇，算出来的是复合变换里某个基向量最终落点的某个坐标。

这句话不用一次性抛给学生。先让他们算两列，再问：为什么第一列来自 $B(Ae_1)$，第二列来自 $B(Ae_2)$？等他们接受"列记录基向量去向"之后，行乘列就不再像魔术。

## 为什么不是对应位置逐项相乘

对应位置逐项相乘当然也可以定义，而且它在别的地方有名字。但这节课要处理的是另一个问题。

矩阵乘法要解决的问题是：怎样表示两个线性变换的复合？

如果用对应位置逐项相乘，信息会断掉。比如 $A$ 的第二列告诉我们 $e_2$ 经过 $A$ 后变成了 $(1,1)^T$。接下来 $B$ 作用在这个向量上时，需要同时看 $B$ 如何处理水平方向和竖直方向，因为 $(1,1)^T$ 本来就是两个方向的合成。

这就是线性组合的味道。前一步把基向量变成若干方向的组合，后一步要把这些方向分别送走，再加起来。行乘列正是在计算这个"拆开、送走、再合并"的过程。

逐项相乘看不到这一层。它只是把两个数字表的相同位置配对，不会追踪基向量经过两层变换后的去向。

## 真放进课里，我会慢一点

我不会一上来写五六行行乘列。先让学生判断 $A$ 和 $B$ 分别在做什么，再拿 $(1,2)^T$ 跑一遍两个顺序。等他们亲眼看到结果不同，再问：如果以后每个向量都要这样追踪，是不是太麻烦？

这个时候，复合矩阵才有必要出现。

用一般向量 $(x,y)^T$ 推一遍就够了。先不讲口诀，直接写

$$
\begin{pmatrix}x\\y\end{pmatrix}
\mapsto
\begin{pmatrix}x+y\\y\end{pmatrix}
\mapsto
\begin{pmatrix}-y\\x+y\end{pmatrix}
$$

写出来，再读出复合矩阵。口诀可以晚一点来。它只是把前面的追踪压缩了，不是这节课的起点。

我也会少说“前一个矩阵的行乘后一个矩阵的列”。这句话能帮学生算题，但不能回答他们的困惑：为什么横着拿一排，竖着拿一列？为什么不是逐项相乘？为什么顺序会影响结果？

前面没有变换复合，后面的解释就会像补丁。

## 备课时让 AI 查账

这节课不适合让 AI 直接生成整套讲义。它更适合做两类检查。

第一，查计算。比如让它确认 $A$、$B$、$BA$、$AB$ 和向量例子都足够干净，不会让学生被算术拖走。

第二，查追问。可以把自己的草稿喂给它，问：哪些地方又把“行乘列”当成定义扔给学生了？哪个问题能更清楚地区分“先 $A$ 后 $B$”和“先 $B$ 后 $A$”？

至于课堂里的停顿、板书节奏和学生卡住时的那两句补话，还是要自己想。AI 可以帮忙查账，不能替你判断这一班学生现在站在哪里。

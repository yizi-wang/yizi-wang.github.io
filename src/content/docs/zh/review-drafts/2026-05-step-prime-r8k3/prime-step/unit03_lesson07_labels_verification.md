---
title: "Review: PRIME STEP Unit 03 Lesson 07"
description: "Temporary review draft."
editUrl: false
prev: false
next: false
pagefind: false
sidebar:
  hidden: true
head:
  - tag: meta
    attrs:
      name: robots
      content: noindex,nofollow
---

# Unit 03 Lesson 07: 一次称重能确认标签吗

> 内部备注：新版大纲 Unit 3 Markdown 草案 v1；旧 Unit 3 error/group-testing 内容已拆到新版 Unit 2 和 Unit 7。本课使用 Tanya posts 已核对题目：`post_id=1057`、`post_id=130`、`post_id=1476`。关键题干：6 袋硬币、每袋无限枚、真实重量为 1 到 6 克、标签应对应重量、只能用 balance scale、目标是 confirm labels are correct。

## 题目入口

有 6 袋硬币。每袋里有无限多枚硬币，同一袋里的硬币重量相同。

6 袋的真实重量分别是：



$$
1g,2g,3g,4g,5g,6g.
$$



每袋外面有一个标签，写着 $1,2,3,4,5,6$。标签应该表示这袋硬币每枚的重量。

现在你怀疑标签可能被调换了。

你只有一架两盘天平。天平只告诉你：



$$
\text{左盘重},\quad \text{右盘重},\quad \text{平衡}.
$$



问题：

> 最少称几次，能确认所有标签都是正确的？

注意任务不是“如果错了，找出每袋真实重量”。任务只是确认：



$$
\text{标签全对}\quad \text{还是}\quad \text{至少有标签错了}.
$$



## 第一轮思考

先试一个看起来合理的称法。

如果标签全对，我们希望天平平衡。比如：



$$
\text{左盘：标签 }1,6;\qquad \text{右盘：标签 }2,5.
$$



正确时：



$$
1+6=2+5.
$$



所以会平衡。

但这不能确认标签正确。比如标签 1 和 2 被互换，同时标签 5 和 6 被互换。此时左盘实际重量是：



$$
2+5=7,
$$



右盘实际重量是：



$$
1+6=7.
$$



仍然平衡。

这个称法的问题是：正确标签和某些错误标签落到了同一个输出“平衡”里。对当前任务来说，这个 collision 是致命的。

我们需要一种称法，使得：



$$
\text{平衡}\quad \Longleftrightarrow\quad \text{标签全对}.
$$



## 观察整理

Tanya 题中的一个一称方案是：



$$
\text{左盘： }6\text{ 枚标签 }1,\ 4\text{ 枚标签 }2,\ 3\text{ 枚标签 }3,\ 2\text{ 枚标签 }4,\ 1\text{ 枚标签 }5
$$





$$
\text{右盘： }6\text{ 枚标签 }6.
$$



如果标签正确，左盘重量是：



$$
6\cdot1+4\cdot2+3\cdot3+2\cdot4+1\cdot5=36.
$$



右盘重量是：



$$
6\cdot6=36.
$$



所以正确标签会平衡。

关键问题是：

> 如果标签被调换了，会不会也平衡？

## 方法或构造

把标签 $i$ 的真实重量记为 $w_i$。这些 $w_i$ 是 $1,2,3,4,5,6$ 的某种排列。

这次称重平衡意味着：



$$
6w_1+4w_2+3w_3+2w_4+w_5=6w_6.
$$



先看右盘。如果 $w_6<6$，右盘最多是 $30$。

但左盘包含剩下五个真实重量，其中一定包含 $6$。在所有这种情况下，左盘最小也超过 $30$。例如把较小重量放在较大系数上，已经很小：



$$
6\cdot1+4\cdot2+3\cdot3+2\cdot4+1\cdot6=37.
$$



所以如果平衡，必须有：



$$
w_6=6.
$$



此时左盘的真实重量就是 $1,2,3,4,5$ 的某个排列。为了让



$$
6w_1+4w_2+3w_3+2w_4+w_5
$$



尽可能小，应当把最小的重量放在最大的系数上：



$$
w_1=1,\quad w_2=2,\quad w_3=3,\quad w_4=4,\quad w_5=5.
$$



这时左盘刚好是 $36$。任何别的排列都会让左盘更重。

因此，平衡只能发生在标签全对时。

这说明一次称重就够：



$$
\boxed{1}
$$



## 概念命名

这一课的任务叫 verification。

Verification 和 identification 不一样。

- Identification：如果标签错了，还要找出每袋真实重量。
- Verification：只判断标签系统是否正确。

这也是为什么一次称重看起来只有三种输出，却能处理很多隐藏状态。

很多错误排列会落到同一个输出“左盘重”。这没有关系，因为这些错误排列对应同一个 task answer：



$$
\text{标签不全对}.
$$



输出不用还原完整 hidden state。输出只要能翻译成 task answer。

## 课堂练习

### 复现

1. 验算正确标签时，为什么左盘和右盘都是 $36g$？
2. 解释为什么如果 $w_6<6$，左盘一定比右盘重。

### 迁移

3. 4 袋硬币真实重量为 $1g,2g,3g,4g$。试设计一次 balance-scale 称重来确认标签是否正确。
4. 如果允许 digital scale 直接显示总重量，4 袋版本会不会更容易？请说明测量工具改变了什么。

### 探索

5. 在本课成功称法中，所有错误标签都落到“左盘重”。这是不是 collision？为什么它没有破坏 verification？
6. 如果任务改成“如果标签错了，找出正确对应关系”，一次称重还可能够吗？先数一数 hidden states 和输出数量。

## 收束

Unit 2 里我们给对象贴 signature，让不同 states 尽量产生不同答案。

这一课故意做了另一件事：允许大量错误 states 撞在一起，只要它们撞到同一个 task answer。

判断一个输出够不够，不要只问它能不能恢复全部真相。先问题目到底要你交什么答案。

---

## 内部处理记录

### 使用素材

- Tanya posts 已核对：
  - `post_id=1057`，`A New Question about Old Coins`，6 bags, infinite coins, weights 1-6g, balance scale, least weighings to confirm labels are correct。
  - `post_id=130`，`Oleg Kryzhanovsky's Problems`，包含早期 6 coins / two weighings 版本。
  - `post_id=1476`，`Confirming the Labels of Coins in One Weighing`，PRIMES STEP paper context and generalization。
- 本课采用 `post_id=1057` 的 6 袋 balance-scale verification 版本。

### 对应设计要求

- 已处理：回源核对题干，明确是 balance scale，不是 digital scale。
- 已处理：从一个会误判的称法进入，再引出成功称法。
- 已处理：把 verification 放在具体任务之后命名。
- 已处理：练习覆盖复现、迁移、探索。

### 暂不处理的问题

- 不展开 Tanya/PRIMES STEP paper 的一般 $n$ 袋最小用币数问题。
- 不把 4 袋 digital scale 版本作为主问题；它会放到 Unit 4 measurement model 中更合适。

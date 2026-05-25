---
title: "Review: PRIME STEP Unit 03 Lesson 08"
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

# Unit 03 Lesson 08: 碰撞什么时候算失败

> 内部备注：新版大纲 Unit 3 Markdown 草案 v1。本课承接 Lesson 07 的 Old Coins verification，不新增 Tanya 题源。目标是区分 collision、harmless collision、harmful collision，并为 Lesson 09 的 decoder 做准备。

## 题目入口

上一课的一次称重是：



$$
\text{左盘： }6\text{ 枚标签 }1,\ 4\text{ 枚标签 }2,\ 3\text{ 枚标签 }3,\ 2\text{ 枚标签 }4,\ 1\text{ 枚标签 }5
$$





$$
\text{右盘： }6\text{ 枚标签 }6.
$$



如果标签全对，天平平衡。

如果标签有任何错误，上一课的论证说明左盘会更重。

这有个看起来奇怪的地方：

> 很多不同的错误排列，都会得到同一个输出：左盘重。

这是不是说明方案丢失了太多信息？

## 第一轮思考

先比较两个称法。

称法 A：



$$
\text{左盘：标签 }1,6;\qquad \text{右盘：标签 }2,5.
$$



正确标签会平衡。但如果标签 $1,2$ 互换，标签 $5,6$ 互换，也会平衡。

所以称法 A 中：



$$
\text{标签全对}\quad \text{和}\quad \text{某些标签错误}
$$



会撞到同一个输出“平衡”。

称法 B 是上一课的成功称法。它也有大量 collision：



$$
\text{错误排列 1},\quad \text{错误排列 2},\quad \dots
$$



都会撞到“左盘重”。

为什么称法 A 失败，称法 B 成功？

## 观察整理

把任务答案写出来。

当前 verification 任务只有两个 task answers：



$$
\text{YES：标签全对}
$$





$$
\text{NO：至少有标签错了}
$$



称法 A 的问题是：

| 输出 | 可能的 hidden states | task answer |
|---|---|---|
| 平衡 | 标签全对；某些错误排列 | YES；NO |

同一个输出“平衡”对应了不同 task answers。这会让我们无法回答题目。

称法 B 的情况是：

| 输出 | 可能的 hidden states | task answer |
|---|---|---|
| 平衡 | 标签全对 | YES |
| 左盘重 | 所有错误排列 | NO |

虽然“左盘重”下面有很多 hidden states，但它们对应同一个 task answer：NO。

这就没问题。

## 方法或构造

现在给 collision 分两类。

如果两个 hidden states 产生同一个 output，但它们对应同一个 task answer，这种 collision 是 harmless。

如果两个 hidden states 产生同一个 output，而且它们对应不同 task answers，这种 collision 是 harmful。

称法 A 的平衡输出是 harmful collision，因为它混在一起的是：



$$
\text{标签全对}\quad \text{和}\quad \text{标签错误}.
$$



称法 B 的左盘重输出是 harmless collision，因为它混在一起的都是：



$$
\text{标签错误}.
$$



这也解释了为什么 verification 可以比 identification 省很多信息。

Identification 要区分很多 hidden states：



$$
\text{到底是哪一种排列？}
$$



Verification 只要区分两个 task answers：



$$
\text{全对}\quad \text{或}\quad \text{不全对}.
$$



## 概念命名

我们现在有四个词：

| 词 | 含义 |
|---|---|
| hidden state | 真实世界的完整情况 |
| output | 测试实际给出的结果 |
| task answer | 题目要求你交出的答案 |
| decoder | 把 output 翻译成 task answer 的规则 |

一次测试成功，不是因为它还原了所有 hidden states，而是因为存在一个 decoder：



$$
\text{output}\longrightarrow \text{task answer}.
$$



对上一课的成功称法，decoder 很短：

| output | task answer |
|---|---|
| 平衡 | 标签全对 |
| 左盘重 | 标签不全对 |

右盘重在这个称法中不会出现。实际课堂中如果出现右盘重，说明题目条件、取币数量或操作过程有一处不符合假设。

## 课堂练习

### 复现

1. 对称法 A，找出一个错误标签排列，使得天平仍然平衡。
2. 对称法 B，解释为什么多个错误排列撞到“左盘重”仍然不影响 verification。

### 迁移

3. 设计一个简单任务：hidden states 有 4 个，但 task answers 只有 2 个。写出一个允许 harmless collision 的 output 表。
4. 在 group testing 的 7 样本例子中，如果样本 2 和样本 5 拥有相同 signature，这个 collision 是 harmful 还是 harmless？为什么？

### 探索

5. 如果任务从 verification 改成 identification，称法 B 中的 collision 会变成 harmful 吗？
6. 有没有可能一个 output 同时包含很多 hidden states，但其中有一小部分对应 YES、大部分对应 NO？这个 output 能不能被 decoder 使用？

## 收束

Unit 2 告诉我们：non-adaptive 设计里，signature 撞了通常会造成不可区分。

这一课补上更精细的判断：不可区分不一定失败。只有当不可区分的 hidden states 需要给出不同 task answers 时，collision 才是真的坏。

下一课我们把这个判断推到更抽象的问题里：一个问题能不能一问解决，不是看隐藏状态有多复杂，而是看 output 能不能被解码成题目需要的答案。

---

## 内部处理记录

### 使用素材

- 承接 Lesson 07 的 Old Coins verification 构造。
- 不新增 Tanya 题源；本课所有例子来自 Lesson 07 和 Unit 2 group testing scaffold。

### 对应设计要求

- 已处理：collision 概念从具体失败称法和成功称法中长出来。
- 已处理：明确 hidden state / output / task answer / decoder 四个词的关系。
- 已处理：为 Lesson 09 的 output-to-answer 铺垫。
- 已处理：练习覆盖复现、迁移、探索。

### 暂不处理的问题

- 不展开 hash function 或 coding theory 中 collision 的正式定义；本课只保留 task-relative collision。

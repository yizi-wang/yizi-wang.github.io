---
title: 从 Mathpix 到 Agent：一个数学老师的 AI 工具流水线
---

## 真题 OCR：最早期的笨功夫

写讲义的第一步是让 AI 能读真题。问题是真题都是 PDF，数学公式直接丢给模型效果很差。

我最早用 [Mathpix](https://mathpix.com/) 做 OCR，它能把数学公式转成 [LaTeX](https://www.latex-project.org/) 代码（LaTeX 是数学领域常用的排版语言，用代码控制格式，编译后生成 PDF，公式排版比 Word 精确得多）。但 Mathpix 只能处理数学文本，真题里的选择题、填空题、解答题混在一起排版，每道题我得手动截图，一张一张喂给它。一份真题几十道题，光截图就要花不少时间。

现在 Mathpix 的功能已经被 [LlamaParse](https://github.com/run-llama/llama_parse) 接手了。LlamaParse 能直接处理整页 PDF，不需要手动截图，公式转换精度也更高，复杂排版也能识别。如果你现在才开始做类似的事，直接用 LlamaParse 就行，比我当时省很多功夫。

OCR 转完之后还得手动整理，把零散的文本拼成完整的题目，再喂给模型。

## 早期工作流：DeepSeek 出大纲，Cursor 写讲义

一开始的工作流是两步走。

先让 [DeepSeek](https://www.deepseek.com/) 生成讲义大纲。Prompt 要把所有背景信息一次性交代清楚，比如写复数单元的讲义：

> 我想设计一节数学课的讲义，学生之前学习了复数的模、幅角、共轭等基本知识。这个单元主要学习复数的指数形式以及 de Moivre 定理，目标是学会对复数开 n 次根号以及得到关于 n 倍角三角函数的恒等式以及关于三角函数 n 次方的恒等式，尽量用比较生动的形式导入，学生最终的目标是通过国际考，请根据提供的国际考真题帮我总结教学重点并提供一个完整的讲义大纲。

拿到大纲后，再喂给 [Cursor](https://cursor.com/) 生成完整的讲义。Cursor 是一个 AI 编程工具，本质上是代码编辑器加 AI 对话，不是专门为教育设计的，但因为它能读文件、按格式输出内容，我拿它来写 LaTeX 讲义。

第一份讲义我让 Cursor 自由发挥，生成出来之后再调整成合适的格式。格式定好之后，后续的讲义就让 Cursor 参照已有讲义的格式来生成——"格式参考 xxx.tex"比"写得生动一点"有用得多。

这个阶段的 prompt 越写越精炼，后来变成结构化指令：

> Please create an English handout in xxxx folder. The handout should be in the form of a LaTeX document and should be in the format and content order and arrangement similar as in xxx.tex. DO NOT make direct translation to create the notes, instead redesign a more detailed notes based on the content provided. Formatting Requirements: Maintain a consistent font size and style throughout the document. Include any necessary diagrams or illustrations that may help in understanding the concepts.

指定参考文件、明确约束"不要直译"、格式要求单独列。从"跟 AI 聊天"变成"给 AI 下指令"，prompt 短了但效果更好。

## Plan Mode：prompt 反而变简单了

2025 年 10 月，Cursor 出了 plan mode。之前一节讲义要分好几次生成——先出大纲，确认后逐节写，每次都要重新喂上下文。Plan mode 能一次性搭好框架，再逐节微调，上下文是连续的。

有意思的是，工具变强了，prompt 反而不需要写那么复杂了。以前要把课程背景、学生水平、教学目标全写进 prompt 里，现在只需要说"参考这份真题，写一节关于 XX 的讲义"，Plan mode 自己会拆任务、查上下文、逐段推进。

早期 DeepSeek 出大纲、Cursor 写讲义的两步流程，Plan mode 一个人就能跑完。

FP2 和 FP3 的讲义就是这个阶段产出的。Prompt 短了，产出质量反而更稳定。

## Agent 和 IDE 各干各的

2026 年初 Cursor 包年到期，不是主动想换，是不得不找替代。试了 [Trae IDE](https://www.trae.ai/)，发现也能用，同时开始探索 Agent。

很快发现一件事：Agent 不适合写讲义。

各种 AI IDE 在讲义撰写这种场景里表现差不多。Agent 反而不好用——你没办法实时看到它在写什么，调不了细节，发现问题要改又要等一轮。

Agent 的用处在后台任务。比如题库整理，TMUA 和 STEP 两个题库是 Agent 跑完的，几小时出初版，我再花时间校对分类。这部分以后再展开。

写讲义这件事，还是 IDE 更合适。能实时看、实时改、随时打断。

## 工具换了几轮，流程越跑越深

这篇文章提了不少工具：[DeepSeek](https://www.deepseek.com/)、[Cursor](https://cursor.com/)、[Trae IDE](https://www.trae.ai/)、[Mathpix](https://mathpix.com/)、[LlamaParse](https://github.com/run-llama/llama_parse)。列出来不是让大家挨个去试。

工具一直在变。我最早用 Mathpix 一张图一张图地截图 OCR，现在 LlamaParse 能直接处理整页 PDF，精度也更高。Cursor 出了 plan mode 我就用上了，包年到期了就换 Trae。每次切换都不是精心规划的，是碰上了就试，试了能用就留下来。

写这篇文章是想分享一个做事的思路：先搞清楚自己要解决什么问题，再去找工具。我真正花时间想的不是"用哪个工具"，而是"怎么把一份 PDF 真题变成能拿去上课的讲义"。这个问题想清楚了，工具换几轮都不怕，因为底层的流程和判断力是自己的。

你现在要开始做类似的事，工具肯定又不一样了。没关系，流程是相通的。

---

讲义成品在这里：[A-Level Further Pure Math 讲义](/zh/further-math/)（[English](/further-math/)）

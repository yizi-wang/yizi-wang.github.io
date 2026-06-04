---
title: TMUA 题库分享包使用指南
---

# TMUA 题库分享包使用指南

这篇文章写给拿到 TMUA 题库分享包的老师。

分享包本质上是一个本地网页项目。你把压缩包解开，双击里面的 `index.html`，就能打开 TMUA 做题系统。它不需要服务器，不需要安装 npm，也不要求你会写代码。

如果你只是想先试用，可以打开在线版：

[https://www.mathw.cn/practice/tmua/](https://www.mathw.cn/practice/tmua/)

如果你想了解这个题库是怎么做出来的，可以看这篇工作流说明：

[做 TMUA 题库，先管好数据，再做网页](./tmua_question_bank_workflow)

这篇指南只讲一件事：你拿到压缩包以后，具体怎么用，怎么让 Agent 帮你改，怎么配置 QuickForm 收反馈和成绩。

## 0. 先看结论

拿到压缩包以后，按这个顺序做：

1. 先解压，不要在压缩包内部打开文件。
2. 双击 `readme.html`，先读图文说明。
3. 双击 `index.html`，试一下做题系统。
4. 如果要修改，把整个文件夹交给 Agent 软件读取。
5. Agent 软件可以用 [WorkBuddy](https://www.workbuddy.cn/) 这类工具，也可以用你熟悉的 Codex、Claude Code、Cursor 等。
6. 如果要收集你自己学校的数据，去 [QuickForm](https://quickform.cn/) 注册并创建表单。
7. 把 QuickForm 的接口填进分享包里对应文件。
8. 测试题目反馈、成绩提交和看板读取。
9. 最后再重新压缩整个文件夹发给学生或同事。

有一点要先说清楚：分享包里默认不会写死我的 QuickForm 接口。这样不同学校的数据不会混在一起。你要长期使用，就需要配置自己的 QuickForm。

## 1. 分享包里有哪些文件

解压以后，你会看到类似下面的结构：

```text
readme.html             图文版使用说明，建议先打开
index.html              TMUA 做题系统入口
questions_data.js       题库数据
dashboard.html          成绩看板，需要自己配置 QuickForm
feedback-dashboard.html 题目反馈大屏，需要自己配置 QuickForm
css/                    页面样式
js/                     做题逻辑、反馈逻辑、导出逻辑
images/                 题目图片
AGENTS.md               给 Agent / AI 助手看的项目规则
skills/                 给 Agent 使用的任务规则卡
README.md               纯文本说明
```

最常用的是这三个：

- `readme.html`：先看这个。它是给老师看的图文说明。
- `index.html`：真正的做题系统。
- `questions_data.js`：题库数据。以后修题、加题，主要改它。

不要只把 `index.html` 单独拿出来。它需要同目录下的 `questions_data.js`、`css/`、`js/` 和 `images/`。

## 2. 第一次打开分享包

### 第一步：解压

右键压缩包，选择「解压到当前文件夹」或「解压到指定文件夹」。

不要在压缩包内部直接双击 HTML。很多浏览器在这种情况下读不到同目录文件，页面可能打开了，但题库加载失败。

### 第二步：打开说明页

进入解压后的文件夹，双击：

```text
readme.html
```

打开以后，你会看到几个入口：

- 打开做题系统
- 打开成绩看板
- 打开反馈大屏
- 查看题库数据
- 查看随包 skills

第一次使用，只需要点「打开做题系统」。

### 第三步：试做一道题

进入系统后，建议按这个顺序试：

1. 点「开始练习」。
2. 选择某一年和某个 Paper。
3. 随便做一道题。
4. 点选项，提交答案。
5. 查看解析。
6. 点「反馈这题」，确认反馈窗口能打开。

如果公式显示成 `$...$`，一般是 KaTeX 没加载出来。联网环境下通常会自动渲染；如果本地浏览器拦截 CDN，也可以先用在线版试：

[https://www.mathw.cn/practice/tmua/](https://www.mathw.cn/practice/tmua/)

## 3. 在线版怎么用

在线版是给老师快速试用和反馈用的：

[https://www.mathw.cn/practice/tmua/](https://www.mathw.cn/practice/tmua/)

在线版已经配置好题目反馈通道。如果你发现某道题有问题，建议直接在在线版里点「反馈这题」。

这样系统会自动带上：

- 题目 ID
- 年份
- Paper
- 题号
- topic
- modules
- sections
- skills
- 当前页面信息

不要只发一句「2018 年某题好像错了」。题库维护最怕这种反馈，因为定位成本很高。点「反馈这题」会省很多来回确认的时间。

## 4. 本地版适合做什么

本地分享包适合几类场景。

第一类是自己备课。你可以把它当成一个本地 TMUA 题库，按年份、Paper、知识点筛题。

第二类是学生练习。你可以把整个文件夹发给学生，让他们解压后打开 `index.html`。

第三类是二次改造。比如你想：

- 添加新考试题目；
- 改成 MAT、AMC、AIME 或校内测试；
- 调整题目分类；
- 修改页面标题和说明；
- 配置自己的反馈表单；
- 配置自己的成绩提交和看板。

这些修改不建议手工硬改。更稳的方式是把整个文件夹交给 Agent 软件。

## 5. 用 Agent 软件读取文件夹

这里以 [WorkBuddy](https://www.workbuddy.cn/) 为例。不同 Agent 软件界面不一样，但流程差不多。

### 第一步：打开 WorkBuddy

进入 WorkBuddy 后，新建一个任务或项目。你要做的不是普通聊天，而是让它读取并操作一个本地文件夹。

如果软件让你选择工作目录，就选择解压后的分享包文件夹，也就是包含 `index.html` 和 `questions_data.js` 的那个目录。

### 第二步：让 Agent 先读规则

不要一上来就说「帮我加一套题」。先让 Agent 读项目规则。

可以复制这段：

```text
请先读取这个文件夹里的 readme.html、AGENTS.md 和 skills/ 目录。

这是一个本地静态 TMUA 做题系统。要求保持解压后双击 index.html 可用。

不要引入服务器、npm 构建流程、React/Vue 项目化改造或数据库。

接下来请根据我的要求修改系统。完成后请告诉我：
1. 修改了哪些文件；
2. 为什么改这些文件；
3. 我应该如何手动测试；
4. 是否有需要我人工复核的地方。
```

这一步很重要。分享包里的 `AGENTS.md` 和 `skills/` 是给 Agent 看的规则卡。它们会告诉 Agent：哪些文件能改，哪些链接要自己配置，题库字段怎么保持一致。

### 第三步：按任务选择提示词

如果你要修题，让 Agent 使用：

```text
skills/question-bank-importer/SKILL.md
```

如果你要改本地系统或重新打包，让 Agent 使用：

```text
skills/tmua-local-maintainer/SKILL.md
```

如果你要改 QuickForm、反馈表单、成绩提交或看板，让 Agent 使用：

```text
skills/quickform-feedback-editor/SKILL.md
```

可以这样说：

```text
请读取并遵守 skills/question-bank-importer/SKILL.md。
接下来我会给你一份 PDF 和 answer key，请先做前 5 题小样，不要一次性导入整套试卷。
```

## 6. 让 Agent 修正某一道题

适合这种情况：

- 答案错了；
- 公式显示不对；
- 图片缺失；
- 解析不清楚；
- topic 或 skill 分类不准。

提示词如下：

```text
请读取并遵守 AGENTS.md 和 skills/question-bank-importer/SKILL.md。

请只检查 questions_data.js 中的这道题：

题目 ID：<填入题目 ID>
问题描述：<例如 答案错误 / 公式显示不对 / 解析需要修改>

要求：
1. 只修改这道题，除非图片路径也需要修复。
2. 保持题目 ID 不变。
3. 检查 question、options、answer、analysis、topic、modules、sections、skills、images、has_image 是否一致。
4. 不确定的信息不要猜，标记为 needs_review。
5. 修改后告诉我改了哪些字段。
6. 告诉我如何用 index.html?id=<题目ID> 打开复核。
```

改完以后，手动打开：

```text
index.html?id=<题目ID>
```

如果浏览器地址栏不方便输入，也可以先打开 `index.html`，再按年份和 Paper 找到那道题。

## 7. 让 Agent 添加一张新试卷

不要直接说「把这份 PDF 全部加入题库」。这类任务很容易一次做太大。

推荐先做 5 题样例。

提示词如下：

```text
请读取并遵守 AGENTS.md 和 skills/question-bank-importer/SKILL.md。

我想给这个本地做题系统添加一张新的考试试卷。请根据我提供的 PDF 或逐题截图，把题目加入 questions_data.js。

考试信息：
- 考试名称：<例如 MAT / STEP / AMC / 校内测试>
- 年份：<年份>
- 卷别：<Paper / Section / Round>
- 题目数量：<数量>
- 题目来源：<PDF 或截图路径>
- 答案来源：<answer key 路径>

要求：
1. 题干、选项和数学公式必须从原始 PDF 或截图还原。
2. 答案只从我指定的 answer key 读取。
3. 不要凭记忆改写题目。
4. 图片放入 images/，并在题目字段里正确引用。
5. 不确定的信息标记为 needs_review，不要编造。
6. 先完成前 5 题作为样例，让我确认格式后再继续。
```

确认样例时，重点看五件事：

1. 题干有没有漏字；
2. 公式有没有被 OCR 改坏；
3. 选项顺序是否正确；
4. answer key 是否对应；
5. 图片是否显示。

样例没问题，再让 Agent 继续下一批。每批 10 到 20 题比较合适。

## 8. QuickForm 是做什么的

[QuickForm](https://quickform.cn/) 可以理解成一个轻量表单后端。网页把数据 POST 给它，它帮你保存提交记录，你再去后台看结果。

在这个分享包里，QuickForm 可以做三件事：

1. 收题目反馈；
2. 收学生模考成绩；
3. 给数据看板提供读取接口。

分享包默认不写死具体 QuickForm 链接。你需要自己注册 QuickForm，然后创建自己的表单。

## 9. QuickForm 配置总览

你需要知道五个位置：

```text
js/feedback.js          题目反馈 POST 地址
feedback-dashboard.html 题目反馈读取地址
js/quiz.js              成绩提交 POST 地址
js/export.js            旧版成绩提交辅助逻辑，也要同步
dashboard.html          成绩看板读取地址
```

其中：

- POST 地址用于提交数据；
- 读取地址通常用于看板拉取数据；
- 读取地址一般会比 POST 地址多一个读取后缀，具体以 QuickForm 后台提供为准。

不要把题目反馈和成绩提交混用。题目反馈是老师报告题目问题；成绩提交是学生提交模考结果。最好分成两个 QuickForm 表单。

## 10. 创建题目反馈表单

在 QuickForm 里先创建一个「题目反馈」表单。

建议字段如下：

```text
feedback_kind
feedback_type
message
teacher_name
school
contact
question_id
year
paper
num
topic
modules
sections
skills
primary_section
page_url
submitted_at
```

字段不一定要全部手动建，看 QuickForm 的接收方式。有些表单工具会自动接收 POST 里的字段。但你至少要知道这些字段会出现，后面导出数据时才不会迷路。

创建好以后，把题目反馈 POST 地址填入：

```text
js/feedback.js
```

找到这一行：

```js
const QUICKFORM_FEEDBACK_API_URL = '';
```

改成你的地址。

然后把题目反馈读取地址填入：

```text
feedback-dashboard.html
```

找到这一行：

```js
const API_URL = '';
```

改成你的读取地址。

## 11. 创建成绩提交表单

如果你想让学生提交模考成绩，再创建一个「成绩提交」表单。

建议字段如下：

```text
student_name
exam_date
paper
score_total
score_correct
score_wrong
score_pct
time_seconds
avg_seconds
wrong_questions
topic_breakdown
module_breakdown
section_breakdown
skill_breakdown
question_results
```

创建好以后，把成绩提交 POST 地址填入两个文件：

```text
js/quiz.js
js/export.js
```

在这两个文件里找：

```js
SCORE_QUICKFORM_API_URL
```

填入你的成绩提交地址。

再把成绩看板读取地址填入：

```text
dashboard.html
```

找到：

```js
DASHBOARD_QUICKFORM_API_URL
```

填入你的读取地址。

## 12. 让 Agent 帮你配置 QuickForm

你不需要自己手改。把 QuickForm 后台给你的地址复制出来，然后让 Agent 改。

提示词如下：

```text
请读取并遵守 AGENTS.md 和 skills/quickform-feedback-editor/SKILL.md。

我已经在 QuickForm 创建了自己的表单。

题目反馈 POST 地址：<填入你的地址>
题目反馈读取地址：<填入你的读取地址>
成绩提交 POST 地址：<填入你的地址>
成绩看板读取地址：<填入你的读取地址>

请帮我把对应地址填入：
1. js/feedback.js
2. feedback-dashboard.html
3. js/quiz.js
4. js/export.js
5. dashboard.html

要求：
- 不要修改 questions_data.js。
- 保留提交失败时复制反馈内容的兜底功能。
- 改完后告诉我如何测试一次题目反馈、一次成绩提交和一次看板读取。
```

## 13. 配置完 QuickForm 后怎么测试

### 测试题目反馈

1. 打开 `index.html`。
2. 进入任意一道题。
3. 点击「反馈这题」。
4. 填写一个测试信息，比如 `TEST feedback`。
5. 提交。
6. 去 QuickForm 后台查看是否收到记录。
7. 打开 `feedback-dashboard.html`，看是否能读到数据。

测试完成后，可以在 QuickForm 后台删掉测试记录，或者保留并标注为测试。

### 测试成绩提交

1. 打开 `index.html`。
2. 进入模拟考试。
3. 做几道题并结束。
4. 输入一个测试姓名，比如 `TEST Student`。
5. 点击提交成绩。
6. 去 QuickForm 后台查看是否收到记录。
7. 打开 `dashboard.html`，看成绩看板是否能读到数据。

如果提交失败，先不要急着改代码。检查三件事：

1. QuickForm 地址有没有复制完整；
2. POST 地址和读取地址有没有填反；
3. 本地浏览器是否拦截了跨域请求。

## 14. 重新打包给学生或同事

修改完成以后，重新压缩整个文件夹。

不要只发 `index.html`。

给 Agent 的提示词：

```text
请读取并遵守 AGENTS.md 和 skills/tmua-local-maintainer/SKILL.md。

请把这个本地做题系统重新打包成 zip，用于发给其他老师或学生。

要求：
1. 确认 readme.html、index.html、dashboard.html、feedback-dashboard.html、questions_data.js、css/、js/、images/、README.md、AGENTS.md、skills/ 都存在。
2. 不要把临时截图、浏览器缓存、系统文件、个人隐私数据打进 zip。
3. 压缩整个目录，保持相对路径不变。
4. 打包后告诉我 zip 文件路径和大小。
```

打包前，至少自己做一次检查：

1. 解压新的 zip；
2. 双击 `readme.html`；
3. 从说明页进入 `index.html`；
4. 打开一道题；
5. 试一下反馈按钮；
6. 如果配置了 QuickForm，再试一次提交。

## 15. 常见问题

### 为什么本地打开时公式显示成 `$...$`？

数学公式依赖 KaTeX 渲染。联网环境下一般会自动加载。如果你所在网络拦截 CDN，或浏览器对本地文件限制较严，公式可能暂时显示成原始文本。

可以先用在线版检查：

[https://www.mathw.cn/practice/tmua/](https://www.mathw.cn/practice/tmua/)

### 为什么反馈提交失败？

常见原因有三个：

1. QuickForm 地址没有配置；
2. POST 地址填错；
3. 本地浏览器限制跨域请求。

分享包保留了「复制反馈内容」的兜底方式。如果提交失败，可以先复制内容发给维护者，不要让学生反复提交。

### 为什么看板没有数据？

先确认你配置的是读取地址，不是 POST 地址。

题目反馈大屏用的是 `feedback-dashboard.html`。成绩看板用的是 `dashboard.html`。这两个页面读的数据不同，不要混用。

### 能不能把这个系统改成其他考试？

可以，但建议从 5 题样例开始。

先让 Agent 处理一小段题目，确认字段、公式、图片、答案和筛选都没问题，再继续导入整套试卷。

## 16. 最后一条建议

不要把这个包当成一个普通 HTML 文件。它更像一个小型题库工作区。

老师负责判断题目、答案和分类是否靠谱。Agent 负责处理文件、改代码、批量整理。QuickForm 负责收集反馈和成绩。三件事分清楚，后面就不容易乱。

如果你只是想试用，从这里开始：

[https://www.mathw.cn/practice/tmua/](https://www.mathw.cn/practice/tmua/)

如果你想看完整建设思路，从这里开始：

[做 TMUA 题库，先管好数据，再做网页](./tmua_question_bank_workflow)
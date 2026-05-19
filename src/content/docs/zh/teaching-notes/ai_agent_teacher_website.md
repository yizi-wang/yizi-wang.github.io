---
title: AI Agent 时代，老师如何搭建自己的个人教学网站
---

# AI Agent 时代，老师如何搭建自己的个人教学网站

以前说到老师建个人网站，很多人第一反应是：我不会写代码。

这句话现在没那么重要了。不是因为写代码突然变简单，而是因为很多代码工作已经可以交给 Agent 做。[Codex](https://openai.com/codex/)、[Claude Code](https://www.anthropic.com/product/claude-code)、[OpenClaw](https://openclaw.ai/)、[WorkBuddy](https://www.codebuddy.cn/docs/workbuddy/Overview)、[Trae SOLO](https://www.trae.ai/solo-web) 这类工具，已经不只是帮你写一段 HTML。它们可以在本地创建项目、安装依赖、运行开发服务器、修构建错误，甚至把代码提交到 GitHub。

但这不等于老师可以什么都不懂。相反，真正需要自己搞清楚的部分更明确了：网站要放什么，账号归谁管，GitHub 仓库怎么建，Vercel 怎么部署，域名怎么买，DNS 怎么解析，哪些内容可以公开，哪些内容不能公开。

AI Agent 可以施工，但网站的所有权和边界要在自己手里。

## 下载：Agent 建站任务包

如果你不想一步一步照着文章操作，可以直接下载下面两个 Markdown 文件，发给自己的 AI Agent。

- [教师个人网站 Agent 建站任务包](/downloads/teacher_website_agent_brief.md)：适合直接发给 Agent，让它按流程帮你创建网站。
- [AGENTS.md 项目模板](/downloads/teacher_website_agents_template.md)：适合放到网站项目根目录，作为长期项目规则。

第一个文件更适合从零开始建站。第二个文件更适合已经有项目，想让 Agent 以后按固定规则维护。

## 先分清楚：Agent 能做什么，老师必须做什么

我会先把这件事拆开。建一个教师个人网站，大概有这些环节。

| 环节 | Agent 可以做 | 老师必须自己做 |
|---|---|---|
| 网站规划 | 生成栏目结构、页面草图、目录规范 | 决定哪些内容要公开，哪些只留本地 |
| 项目搭建 | 创建 Astro、Starlight、React 或纯 HTML 项目 | 选择能长期维护的方案 |
| 本地运行 | 安装依赖、启动开发服务器、修报错 | 看预览效果，判断是否符合需求 |
| 内容迁移 | 把 Markdown、Word、LaTeX 整理成网页内容 | 检查数学内容、版权、学生隐私 |
| GitHub | 初始化 git、提交代码、推送仓库 | 注册账号、创建仓库、授权工具访问 |
| Vercel | 配置构建命令、读取报错、修部署问题 | 注册账号、连接 GitHub、确认部署项目 |
| 域名 | 解释 DNS 记录、检查配置是否生效 | 买域名、实名认证、填写 DNS 记录 |
| 后续维护 | 新增文章、批量改链接、检查构建 | 决定更新节奏，审核发布内容 |

这张表的意思不是吓人。恰恰相反，它把事情变清楚了。

你不需要学会从零写一个网站。你需要学会把任务交给 Agent，并且知道哪些地方不能交出去。

![AI Agent 和老师的职责边界](/images/teaching-notes/agent-boundary-map.svg)

## 技术方案怎么选

如果只是想做一个单页介绍，纯 HTML 就够了。让 Agent 生成一个 `index.html`，放上个人介绍、课程列表、联系方式，再部署到 Vercel，半小时就能完成。

但教师网站通常不会停在单页。很快你会想放教学博客、讲义、题库、课程资料、学生项目介绍。内容一多，单页网站就会乱。

我的建议是：

- 只做个人展示页：纯 HTML/CSS/JS。
- 做博客和讲义：Astro + Starlight。
- 做复杂交互，比如刷题系统、登录、数据看板：React、Next.js 或纯前端应用。

如果你是数学老师，尤其要考虑公式。普通 Markdown 网站不一定能直接渲染数学公式，需要配置 KaTeX 或 MathJax。我的个人网站用的是 Astro + Starlight，因为它适合文档型内容：侧边栏、目录、搜索、深色模式都有，讲义和博客都可以用 Markdown 写。

这类项目也适合 Agent 维护。目录清楚，文件边界清楚，改错了也容易定位。

我自己第一次搭这个网站时，最开始就踩过一个坑：让 Agent 从零手写配置。它确实能写，但很容易漏掉框架自己的默认设置。后来真正稳定下来，是切换到 Starlight 官方模板，再在模板上改栏目、改样式、加数学公式支持。

所以我现在会直接告诉 Agent：

```text
请优先使用官方 starter/template，不要从零手写框架配置。
如果需要改配置，先说明为什么官方模板不够用。
```

这句话能省很多时间。Agent 很容易有一种“我都能写”的冲动，但建站不是算法题。能用官方模板，就先用官方模板。

可以这样问 Agent：

```text
我是一个高中数学老师，想搭建一个个人教学网站。

网站内容包括：
1. 教学博客
2. A-Level 进阶数学讲义
3. TMUA/STEP 备考资料
4. 数学史课程资料
5. 关于我页面

要求：
1. 尽量使用静态网站，不需要服务器和数据库
2. 内容用 Markdown 写，方便以后自己维护
3. 支持数学公式渲染
4. 能部署到 Vercel
5. 后续可以不断新增文章和讲义

请你推荐技术方案，并说明目录结构。
先不要写代码。
```

注意最后一句：先不要写代码。

很多人用 Agent 做项目，第一步就说“帮我做一个网站”。Agent 会很快开始生成页面，速度很快，但后面往往难维护。先让它说清楚技术方案和目录结构，再动手，会稳很多。

## 用能跑项目的 Agent，而不是只会聊天的模型

这里要区分两类工具。

ChatGPT、Claude 网页版这类聊天工具，很适合帮你想栏目、写文案、整理需求。但它们不能直接在你的电脑里创建项目、启动服务器、运行构建。

[Codex](https://openai.com/codex/)、[Claude Code](https://www.anthropic.com/product/claude-code)、[OpenClaw](https://openclaw.ai/)、[WorkBuddy](https://www.codebuddy.cn/docs/workbuddy/Overview)、[Trae SOLO](https://www.trae.ai/solo-web) 这类工具更适合真正建站。原因很简单：它们可以接触项目文件，可以执行命令，可以看到报错，然后继续修改。

一个真实的建站流程应该像这样：

1. Agent 创建项目文件。
2. Agent 安装依赖。
3. Agent 启动本地开发服务器。
4. 你在浏览器里看效果。
5. 你指出哪里不对。
6. Agent 修改代码。
7. Agent 跑构建检查。
8. 构建通过后，再准备提交到 GitHub。

![从需求到发布的 Agent 建站流程](/images/teaching-notes/agent-site-workflow.svg)

如果是多个 Agent 协作，不要让它们都改同一块东西。我之前用 OpenClaw 搭网站时，比较有效的分工是：

- Main Agent 负责整理内容和文件。
- Academic Agent 负责检查数学内容。
- Coding Agent 负责构建、GitHub、部署。

这套分工的关键不在名字，而在边界。写内容的 Agent 不要顺手改部署配置，修 CI 的 Agent 不要顺手改讲义正文。两个 Agent 同时改同一个 GitHub Actions 文件，最后很容易互相覆盖。

还有一个经验：长任务不要在一个会话里拖太久。Agent 连续失败几轮后，上下文里会塞满旧错误，它会开始反复分析，却不执行。这个时候开新会话，给它一份干净的错误日志和当前文件状态，往往比继续追问更快。

可以给 Agent 这样的任务：

```text
请在当前文件夹创建一个 Astro + Starlight 教学网站。

要求：
1. 使用 Markdown 管理内容
2. 配置 KaTeX，支持数学公式
3. 创建这些栏目：
   - 首页
   - 关于我
   - 教学博客
   - A-Level Further Maths
   - TMUA
   - STEP
   - 数学史课程
4. 文件名使用小写英文和下划线
5. 创建一个示例博客页面和一个示例讲义页面
6. 完成后运行本地开发服务器，并告诉我访问地址
7. 再运行一次构建命令，确认没有报错
```

如果 Agent 能在本地跑命令，它就会自己处理很多麻烦事。比如缺包、配置错误、路径写错、构建失败。你不需要逐行看代码，只需要看两个结果：

- 本地预览能不能打开。
- 构建能不能通过。

这两个结果比“代码看起来对不对”可靠。

## 本地预览时要检查什么

网站在本地能打开，不代表能发布。至少要检查这些东西：

- 首页是不是能说明你是谁、教什么。
- 导航是不是清楚。
- 手机屏幕下能不能正常阅读。
- 数学公式有没有渲染出来。
- 图片有没有丢。
- 中文有没有乱码。
- 链接点进去是不是 404。
- 页面标题是不是正常。
- 内容里有没有学生姓名、成绩、聊天记录截图。
- 是否公开了不该公开的试卷扫描件或教材内容。

Agent 可以帮你跑自动检查，但最后还是要自己看一遍。尤其是数学公式，构建通过也不代表公式含义正确。

我会让 Agent 做这种检查：

```text
请检查当前网站：
1. 所有内部链接是否存在
2. 是否有明显的 Markdown 格式错误
3. 是否有未闭合的数学公式符号
4. 是否有图片路径失效
5. 运行 npm run build，修复所有构建错误
```

这类任务很适合 Agent。它不需要理解你的教学判断，只需要检查文件和报错。

## 数学网站有几个特殊坑

普通个人网站最多是图片路径错、样式不好看。数学网站麻烦一点，因为公式和文档框架会互相影响。

![数学网站的几个特殊避坑规则](/images/teaching-notes/math-site-pitfalls.svg)

我搭网站时遇到过几个问题，后来都写进了规则里。

第一，Starlight 里优先用 `.md`，不要随便用 `.mdx`。

MDX 支持 JSX，看起来更强，但数学公式里的 `{}` 很容易被当成 JSX 表达式。比如 `\frac{}`、`\text{}`、`\underline{}` 这些 LaTeX 写法，在 MDX 里可能触发奇怪的解析错误。如果页面只是放讲义和博客，不需要 React 组件，用 `.md` 更稳。

第二，块级公式要规矩写。

下面这种写法更安全：

```markdown
$$
\begin{aligned}
x &= 1 \\
y &= 2
\end{aligned}
$$
```

不要写成 `$$\begin{aligned}` 挤在一行里。很多时候本地看着像小问题，构建时会炸。

第三，中文不要放进 `$$...$$` 数学块。

KaTeX strict 模式下，数学块里混中文容易报错。中文说明放在公式外面，公式里只放 LaTeX。

第四，中英文双语页面要保持文件名一致。

如果英文文件叫 `a1_algebra_basics.md`，中文对应文件也应该叫 `a1_algebra_basics.md`，只是放在 `zh/` 目录下。不要写成 `a1_代数基础.md`。Starlight 的 i18n 依赖路径配对，文件名不一致，侧边栏可能重复，页面也会对不上。

可以把这些规则一次性交给 Agent：

```text
这是数学网站的内容规则：
1. 文档页默认使用 .md，不使用 .mdx
2. 块级公式中 $$、\begin{aligned}、\end{aligned} 必须分行
3. 中文说明不要放进 $$...$$ 公式块
4. 中英文双语页面必须使用相同英文文件名
5. 修改后运行构建检查
```

规则越早写进去，后面返工越少。

## GitHub：让 Agent 推送代码，但账号要自己管

网站要长期维护，最好放在 GitHub 仓库里。

GitHub 的作用可以简单理解成：保存网站代码和历史版本。以后你每次新增文章、改页面、修 bug，都可以留下记录。Vercel 也可以连接 GitHub 仓库，实现自动部署：只要你把新代码推到 GitHub，Vercel 就会自动重新发布网站。

账号部分必须自己做：

1. 注册 GitHub 账号。
2. 开启两步验证。
3. 创建一个新仓库，比如 `my-teaching-site`。
4. 决定仓库公开还是私有。
5. 如果工具需要授权 GitHub，自己确认授权范围。

GitHub 官方创建仓库说明在这里：[Creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)。

仓库创建好之后，可以把仓库地址交给 Agent：

```text
我已经在 GitHub 创建了一个空仓库：
https://github.com/your-name/my-teaching-site

请你把当前本地项目初始化为 git 仓库，并推送到这个 GitHub 仓库。

要求：
1. 先检查当前目录是否已有 git 仓库
2. 创建合适的 .gitignore
3. 不要提交 node_modules、.env、临时文件
4. 提交信息写成 "initial teaching website"
5. 推送到 main 分支
6. 推送前先运行构建检查
```

如果本地还没有登录 GitHub，Agent 可能会卡在认证步骤。这一步不要把密码直接发给 Agent。更安全的做法是：

- 用 GitHub Desktop 登录。
- 或者用 GitHub CLI 登录。
- 或者在 IDE 里完成 GitHub 授权。
- 或者配置 SSH key，用 SSH 地址推送仓库。

认证完成后，Agent 可以继续推送。

我更推荐给本地 Agent 配 SSH。流程大概是：

1. 在本地生成 SSH key。
2. 把 public key 添加到 GitHub 账号。
3. 克隆或绑定仓库时使用 SSH 地址，比如：

```text
git@github.com:your-name/my-teaching-site.git
```

这样 Agent 执行 `git push` 时走的是本地 SSH 认证，不需要你把 GitHub token、API key 或密码发给它。配置好之后，后续推送会顺很多。

可以让 Agent 帮你检查，但不要让它替你保管密钥：

```text
请检查当前项目的 git remote 是否使用 SSH 地址。
如果不是，请告诉我应该改成什么命令，但先不要执行。
```

这里有一个底线：`.env`、API key、token、学生数据，不要进仓库。就算仓库是私有的，也不要养成这个习惯。

如果你换电脑、换服务器，第一件事也应该是重新配置 SSH key。之前我迁移服务器时，新服务器没有把 SSH key 注册到 GitHub，后续 push 只能临时走 HTTPS。能用，但会被 token 和认证问题绊住。基础设施没配好，Agent 做得再快也会卡在最后一步。

可以让 Agent 专门检查一次：

```text
请在提交前检查是否有敏感信息：
1. .env 文件
2. API key
3. token
4. 学生姓名或成绩数据
5. 不应该公开的 PDF 或图片

只报告结果，不要自动删除文件。
```

最后一句也重要。涉及删除文件，最好不要让 Agent 自己动。

## Vercel：让网站自动发布

代码推到 GitHub 后，就可以部署。

![本地项目、GitHub、Vercel 和自购域名的发布链路](/images/teaching-notes/deployment-chain.svg)

Vercel 的基本流程是：

1. 注册 Vercel 账号。
2. 用 GitHub 登录。
3. 在 Vercel 里选择 New Project。
4. 导入刚才的 GitHub 仓库。
5. 确认框架识别是否正确，比如 Astro。
6. 确认构建命令，比如 `npm run build`。
7. 确认输出目录，比如 `dist`。
8. 点击 Deploy。

Vercel 官方 Git 部署说明在这里：[Deploying Git Repositories with Vercel](https://vercel.com/docs/deployments/git)。

这一步很多地方 Agent 可以帮忙，但不能完全代替你。Vercel 授权 GitHub、选择项目、确认账号，这些要自己点。等部署失败了，Agent 就很有用了。把 Vercel 的构建日志复制给它，它通常能看出是依赖问题、路径问题，还是配置问题。

这里有一个真实教训：本地构建通过，不代表 GitHub Actions 或 Vercel 一定通过。

我当时遇到过几类差异：

- 本地 Node 版本和 CI Node 版本不同。
- 本地 npm 版本生成的 lockfile，CI 的 npm 版本读不了。
- 本地用了中国镜像，`package-lock.json` 里写的是 `registry.npmmirror.com`，海外 CI 访问失败。
- GitHub Pages 每次是干净构建，Vercel 可能保留构建缓存。
- Vercel 的框架缓存可能残留旧的 `.astro` 引用，导致你明明改掉了文件名，它还在找旧文件。

这些问题都不像代码错误。它们是环境差异。

可以让 Agent 专门做环境检查：

```text
请检查当前项目的部署环境风险：
1. 本地 Node 版本和 package.json 要求是否一致
2. package-lock.json 是否包含非官方 npm registry
3. GitHub Actions 或 Vercel 使用的 Node 版本是否明确
4. 构建脚本是否会清理旧缓存
5. 是否存在 .astro、dist 等不该提交的构建缓存目录

只给出检查结果和建议，不要直接改文件。
```

如果你不是很懂 Node/npm，一个简单原则是：让本地和部署环境尽量一致。不要一边 Node 24，一边 Node 22；不要一边 npm v11，一边 npm v10；不要把带中国镜像地址的 lockfile 直接拿去海外 CI 里跑。

可以这样问：

```text
这是 Vercel 部署失败的日志：

（粘贴日志）

请判断失败原因，并修改本地项目。
修改后运行 npm run build，确认本地构建通过。
```

本地构建通过后，再让 Agent 提交并推送：

```text
请把刚才修复 Vercel 构建问题的改动提交到 GitHub。

要求：
1. 先运行 npm run build
2. 只提交和本次修复有关的文件
3. commit message 写成 "fix vercel build"
4. 推送到 GitHub
```

之后 Vercel 会自动重新部署。官方文档里也说明了，连接 Git 仓库后，提交和 pull request 可以触发部署。

如果是普通老师第一次搭网站，我更建议先用 Vercel 手动导入 GitHub 仓库，等流程稳定后再考虑 GitHub Pages、双平台部署、复杂 CI。部署平台越多，缓存和环境差异越多，排查成本也越高。

## 中国大陆访问：最好准备自己的域名

Vercel 会给每个项目一个默认域名，通常是 `xxx.vercel.app`。这个地址能用，但在中国大陆访问并不稳定。有时慢，有时打不开。面向学生和家长的网站，最好准备一个自己的域名。

域名不是必须第一天就买。你可以先用 Vercel 的默认地址测试网站。但如果网站要长期使用，尤其是要发给学生，建议尽早买域名。

域名可以在 [阿里云](https://wanwang.aliyun.com/)、[腾讯云](https://dnspod.cloud.tencent.com/)、[Cloudflare](https://www.cloudflare.com/products/registrar/)、[Namecheap](https://www.namecheap.com/) 等平台购买。国内平台通常需要实名认证。买完之后，你要做的是 DNS 解析。

DNS 可以理解为：告诉互联网访问这个域名时，应该去哪里找你的网站。

常见做法有两种。

第一种：把域名接到 Vercel。

在 Vercel 项目的 Domains 页面添加你的域名，比如：

```text
example.com
www.example.com
```

Vercel 会告诉你需要添加什么 DNS 记录。你再去域名服务商后台填写。

常见记录大概是：

| 域名 | 记录类型 | 指向 |
|---|---|---|
| `www.example.com` | CNAME | Vercel 提供的目标地址 |
| `example.com` | A 或其他 Vercel 推荐记录 | 按 Vercel 页面提示填写 |

不要在文章或笔记里死记某个 IP。平台可能调整。以 Vercel 项目页面给出的记录为准。

Vercel 自定义域名文档在这里：[Setting up a custom domain](https://vercel.com/docs/domains/set-up-custom-domain)。

第二种：用 GitHub Pages。

GitHub Pages 也可以绑定自定义域名，但同样要在 GitHub 仓库设置和 DNS 服务商后台两边配置。GitHub 的说明在这里：[Managing a custom domain for your GitHub Pages site](https://docs.github.com/articles/setting-up-your-pages-site-repository)。

如果你已经用了 Vercel，就先别同时折腾 GitHub Pages。一个网站只保留一条主要部署链路，出问题时更容易排查。

域名配置完成后，DNS 生效可能需要几分钟，也可能需要更久。刚改完打不开，不一定是错了。等一会儿，再用 Vercel 的检查结果和浏览器测试。

## 哪些内容适合让 Agent 长期维护

网站发布以后，维护才刚开始。

适合交给 Agent 的任务包括：

- 新增一篇博客。
- 把一份 Markdown 草稿整理成网站文章。
- 把 LaTeX 讲义转成网页 Markdown。
- 批量修正文件名。
- 更新侧边栏。
- 检查死链。
- 修构建错误。
- 把新增内容提交到 GitHub。

如果内容很多，最好用“批次”而不是一次全丢给 Agent。我当时导入讲义时，一个稳定的完成标准是：英文版、中文版、图片、构建检查，同一批次一起完成。不要今天只导英文，明天再补中文，后天再找图片。拖到后面很难知道哪一章缺了什么。

可以用这种 prompt：

```text
我要新增一篇教学博客。

标题：……
草稿如下：
……

请你：
1. 按现有网站风格整理成 Markdown
2. 放到 teaching-notes 目录
3. 文件名使用小写英文和下划线
4. 更新教学博客索引页
5. 不要改动无关文件
6. 运行 npm run build
7. 构建通过后提交到 GitHub，但先让我确认 commit 内容
```

讲义迁移可以这样写：

```text
我要把一份数学讲义转成网站页面。

要求：
1. 保留章节标题和例题编号
2. 数学公式改成 Markdown + KaTeX 可渲染的形式
3. 练习题和例题分块呈现
4. TikZ 图不要直接塞进 Markdown，提醒我先转成 SVG
5. 转换后检查公式是否闭合
6. 运行构建检查
```

这些任务的共同点是：规则明确、重复性强、可以通过构建检查发现一部分错误。Agent 做得很好。

还有一条很实用：能用脚本处理的，不要都交给 Agent 判断。

比如批量改文件名、检查链接、扫描 `katex-error`、统计中英文件是否配对，这些都是确定性任务。让 Agent 写脚本跑一遍，比让它“凭感觉检查一下”可靠。Agent 更适合处理那些需要判断的部分，比如讲义结构是否清楚、某段解释是否适合学生、公式推导有没有跳步。

不适合完全交给 Agent 的任务也很清楚：

- 判断一道数学题的解析是否正确。
- 判断某份教材内容能不能公开。
- 判断学生数据是否应该匿名。
- 决定网站整体定位。
- 购买域名和处理账号安全。
- 删除大量文件。

Agent 可以给建议，但最后要自己定。

## 一个比较稳的完整流程

如果让我给一个普通老师排流程，我会这样安排：

1. 先用聊天模型整理网站栏目和内容清单。
2. 选一个能本地运行项目的 Agent，比如 [Codex](https://openai.com/codex/)、[Claude Code](https://www.anthropic.com/product/claude-code)、[OpenClaw](https://openclaw.ai/)、[WorkBuddy](https://www.codebuddy.cn/docs/workbuddy/Overview) 或 [Trae SOLO](https://www.trae.ai/solo-web)。
3. 让 Agent 创建静态网站项目。
4. 本地预览，反复调整首页、导航和样式。
5. 让 Agent 配置数学公式渲染。
6. 放入 2-3 篇真实内容，而不是只看示例页面。
7. 运行构建检查。
8. 自己注册 GitHub，创建仓库。
9. 让 Agent 把本地项目提交并推送到 GitHub。
10. 自己注册 Vercel，导入 GitHub 仓库。
11. 部署成功后，用默认域名测试。
12. 如果要长期使用，购买域名并配置 DNS。
13. 以后每次新增内容，都让 Agent 本地构建通过后再推送。

这个流程不要求老师变成程序员。它要求老师知道每一步在干什么。

我觉得这就是 AI Agent 时代建站最大的变化：以前老师要么学代码，要么找人做。现在可以让 Agent 做大部分施工工作。但账号、域名、内容边界、发布责任，还是要自己拿着。

网站不是一次性作品。它会慢慢变成一个教学资源库。刚开始不用大，能稳定更新，比首页多漂亮重要得多。

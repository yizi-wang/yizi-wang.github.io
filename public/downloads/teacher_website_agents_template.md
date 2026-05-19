# AGENTS.md - 教师个人网站项目模板

将本文件复制为网站项目根目录下的 `AGENTS.md`，供 Codex、Claude Code、OpenClaw、WorkBuddy、Trae SOLO、Cursor、Trae IDE 等 Agent 读取。根据自己的项目名称、技术栈和目录结构修改后再使用。

## 项目定位

这是一个教师个人教学网站，用于长期维护和公开发布教学资源。

网站内容包括：

- 个人介绍
- 教学博客
- 课程讲义
- 备考资料
- 数学公式内容
- 可下载资源

网站应优先保证结构清楚、长期可维护、构建稳定。不要为了页面炫技引入不必要的复杂框架。

## 推荐技术栈

默认使用：

- Astro
- Starlight
- Markdown
- KaTeX
- Vercel 或 GitHub Pages

如果项目已经使用其他技术栈，优先遵守现有项目结构，不要擅自重构。

## 目录约定

推荐结构：

```text
src/content/docs/
├── index.md
├── about.md
├── teaching-notes/
│   └── index.md
├── courses/
│   └── index.md
└── exam-prep/
    └── index.md

public/
├── images/
└── downloads/
```

如果启用中英文双语：

```text
src/content/docs/
├── about.md
├── teaching-notes/example.md
└── zh/
    ├── about.md
    └── teaching-notes/example.md
```

中英文对应页面必须使用相同文件名。

## 内容规范

1. 文档页默认使用 `.md`，不要使用 `.mdx`。
2. 文件名使用小写英文、数字和下划线。
3. 不使用中文文件名。
4. 不使用空格。
5. 文章必须有 frontmatter：

```markdown
---
title: 标题
---
```

6. 图片放在 `public/images/`。
7. 下载文件放在 `public/downloads/`。
8. 新增文章后更新对应 `index.md`。

## 数学公式规则

行内公式：

```markdown
$x^2 + y^2 = z^2$
```

块级公式：

```markdown
$$
\int_a^b f(x)\,dx
$$
```

aligned 环境：

```markdown
$$
\begin{aligned}
x &= 1 \\
y &= 2
\end{aligned}
$$
```

规则：

1. `$$` 单独成行。
2. `\begin{aligned}` 和 `\end{aligned}` 单独成行。
3. 中文说明不要放进 `$$...$$` 数学块。
4. TikZ 图不要直接写进 Markdown，先转成 SVG 或 PNG。
5. 修改公式后必须构建检查。

## Agent 工作边界

Agent 可以做：

- 创建页面
- 整理 Markdown
- 转换讲义格式
- 修复链接
- 更新索引
- 检查公式格式
- 运行本地构建
- 准备 git commit
- 分析部署日志

Agent 不得擅自做：

- 删除文件或目录
- 修改 `.env`
- 保存或打印 token、API key、密码
- 公开学生姓名、成绩或隐私数据
- 发布未确认版权的资料
- 修改 GitHub、Vercel、域名、DNS 账号设置
- 强制推送、rebase、reset
- 公开发布网站

遇到上述情况，必须先问用户。

## Git 和 GitHub 规则

1. 推送前必须运行构建检查。
2. 不提交 `node_modules/`。
3. 不提交 `.env`。
4. 不提交 `.astro/`、`dist/` 等构建缓存目录，除非项目明确要求。
5. 优先使用 SSH remote：

```text
git@github.com:USER/REPO.git
```

6. 不要求用户提供 GitHub token 或密码。
7. 提交前先展示将要提交的文件范围。
8. commit message 使用清楚的英文短句。

## 部署规则

如果使用 Vercel：

- build command 通常是 `npm run build`
- output directory 通常是 `dist`
- 部署失败时先读日志，再修改
- 不要盲目改配置

如果使用 GitHub Pages：

- 检查 GitHub Actions workflow
- 确认 Node 版本
- 确认构建产物路径

不要同时引入多个部署平台，除非用户明确要求。

## 环境差异检查

构建失败时优先检查：

1. Node 版本
2. npm 版本
3. lockfile 是否由不同环境生成
4. lockfile 是否包含中国镜像地址
5. Vercel 或 CI 是否使用缓存
6. `.astro` 缓存是否残留旧引用
7. 文件大小写是否与链接一致

本地构建成功不等于远端部署成功。远端失败时以部署日志为准。

## 批量内容导入

批量导入讲义或博客时，按小批次处理。

每批必须完成：

- 内容文件
- 图片文件
- 索引更新
- 双语对应文件（如果有）
- 构建检查

不要一次性改大量文件后才验证。

## 验证命令

根据项目实际情况选择：

```bash
npm run build
```

如有开发预览：

```bash
npm run dev
```

如果项目有自定义检查脚本，也必须运行。

## 发布前检查清单

- 首页能打开
- 关于我页面能打开
- 文章索引能打开
- 新增页面能打开
- 数学公式正常渲染
- 图片正常加载
- 手机端可读
- 内部链接无明显 404
- 构建通过
- 没有密钥或 token
- 没有学生隐私
- 没有明显版权风险内容
- GitHub remote 使用 SSH 或安全认证方式
- 部署平台构建成功

完成后向用户报告：

- 修改了哪些文件
- 运行了哪些验证
- 本地预览地址
- 部署地址
- 还需要用户自己处理什么

# CLAUDE.md - 个人网站

## 项目定位

王逸孜的个人数学教学网站，托管于 GitHub Pages（通过 Vercel 构建）。Astro + Starlight 框架，支持中英双语。

**网址**：https://yizi-wang.github.io  
**仓库**：`git@github.com:yizi-wang/yizi-wang.github.io`

## 技术栈

|层|技术|
|-|-|
|框架|Astro 6.1.9 + Starlight 0.38.4|
|数学渲染|KaTeX 0.16.45 + remark-math + rehype-katex|
|MDX|@astrojs/mdx 5.0.4|
|部署|GitHub Pages + Vercel（自动构建）|
|语言|中英双语（root=en, zh=中文）|

## 站点结构

```
src/
├── content/
│   ├── docs/
│   │   ├── tmua/              # TMUA 讲义（15+ 模块）
│   │   ├── history-of-math/   # 数学史（8 讲）
│   │   ├── teaching-notes/    # 教学笔记（S2 统计学等）
│   │   ├── further-math/      # 进阶数学（M2 讲义）
│   │   ├── about.md           # 关于我
│   │   └── index.md           # 首页
│   └── content.config.ts
├── assets/
└── styles/
    └── custom.css             # 自定义样式
```

侧边栏配置在 `astro.config.mjs` 中，使用 `autogenerate` 自动生成目录。

## 构建与开发

```bash
# 开发预览
npm run dev                    

# 构建（⚠️ 必须先清 .astro 缓存）
rm -rf .astro \&\& npm ci \&\& npm run build

# 预览构建结果
npm run preview
```

## 验证

改完后必须跑一次构建确认无报错：

```bash
rm -rf .astro \&\& npm ci \&\& npm run build
```

构建成功 = 验证通过。构建失败则修复后再提交。

## ⚠️ 红线

### 文件扩展名

**永远用 `.md`，不用 `.mdx`！**  
JSX 解析器会破坏 LaTeX 内容。Starlight 文档一律用 `.md`。

### 构建缓存

`.astro` 缓存可能导致构建异常或旧内容残留。**每次构建前先 `rm -rf .astro`**。  
`package.json` 中的 build 脚本已包含此步骤。

### 数学公式

* 行内公式：`$...$`
* 块级公式：`$$...$$`
* KaTeX 已全局配置，无需额外引入
* 生成内容后必须在浏览器中验证公式渲染

### LaTeX 特殊字符

* `\&` 在 KaTeX 中需要转义或放在公式块内
* 避免在正文中直接使用 `\_`、`^` 等 LaTeX 控制符

## 内容规范

### 文件命名

* 使用小写英文 + 连字符：`tmua-01-algebra.md`
* 不用中文文件名，不用空格

### 文档结构

```markdown
---
title: 标题（英文）
---

# 标题

正文...
```

Starlight 自动处理双语导航，文档内部的中文内容直接写中文即可。

### 来源对应

* 新讲义从 OneDrive 上的原始 .tex 文件转换而来
* 转换后存放路径对应 Starlight 目录（如 OneDrive/M2 Notes/ → further-math/M2\_\*.md）
* 转换规则见 `workflows/tex-to-starlight-methodology.md`

## 常见任务

### 添加新讲义

1. 将 .md 文件放入 `src/content/docs/<栏目>/` 下
2. 确保文件名与 autogenerate 目录匹配
3. 本地 `npm run dev` 预览
4. `git add` + `git commit` + `git push` → Vercel 自动构建

### 修改侧边栏

编辑 `astro.config.mjs` 中的 `sidebar` 数组，或直接依赖 `autogenerate`。

### 修改自定义样式

编辑 `src/styles/custom.css`。

## TikZ 图片编译

图片源文件在 `tikz-src/` 目录，用 TikZ (LaTeX) 编写，编译成 SVG 后放到 `public/images/tikz/`。

### 工具链

MiKTeX (latex + dvisvgm)，路径：`C:\Users\46537\AppData\Local\Programs\MiKTeX\miktex\bin\x64`

### 编译命令

```powershell
# 编译单个文件（不带 .tex 扩展名）
cd tikz-src
powershell -ExecutionPolicy Bypass -File build-all.ps1 fp3-unit-hyperbola

# 编译全部 .tex 文件
powershell -ExecutionPolicy Bypass -File build-all.ps1
```

### 添加新图片

1. 在 `tikz-src/` 下创建 `.tex` 文件，使用 `standalone` 文档类
2. 运行编译脚本，SVG 输出到 `public/images/tikz/`
3. 在 markdown 中引用：`![描述](/images/tikz/文件名.svg)`

### TikZ 文件模板

```latex
\documentclass[border=5pt]{standalone}
\usepackage{tikz}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}[scale=1.8, >=stealth]
  % 图片内容
\end{tikzpicture}
\end{document}
```

### 注意事项

- `--no-fonts` 参数让 dvisvgm 把文字转成矢量路径，不依赖外部字体
- `--exact` 参数使用精确坐标
- 首次编译新宏包时 MiKTeX 会自动下载，可能需要等待
- 编译后的 SVG 是静态文件，直接提交到仓库即可


# Grill Session: 网站文章发布 skill 设计

Started: 2026-04-29
Last updated: 2026-04-29
Status: complete
Domain: 软件架构 / 个人网站工作流设计

## Summary

设计两个 Skill 用于 TMUA 个人网站 (Astro + Starlight + KaTeX) 的文章发布流程：
- **Skill 1 (tex-to-starlight)**: TeX → Markdown 转换，AI 手动处理，输出中英双语文件
- **Skill 2 (starlight-publish)**: 验证 + 构建 + Git 推送

## Decision Log

### DECIDED: 双 Skill 架构
- **Decision**: 分为两个独立 skill，处理与发布职责分离
- **Rationale**: 避免一次性出错难排查；Skill 1 专注转换质量，Skill 2 专注验证和发布
- **Date**: 2026-04-29

### DECIDED: AI 手动转换，不用脚本
- **Decision**: Skill 1 走 AI 手动转换路线，不写正则/解析脚本
- **Rationale**: TeX 格式不固定，需要上下文判断；AI 比脚本灵活
- **Date**: 2026-04-29

### DECIDED: 双语必须拆分到两个文件
- **Decision**: 即使输入是中英混排 TeX，输出也必须分成 EN 和 ZH 两个独立 .md 文件
- **Rationale**: Starlight i18n 要求 EN 在 `tmua/`、ZH 在 `zh/tmua/`，文件名匹配才能正确关联
- **Date**: 2026-04-29

### DECIDED: 文件名 AI 生成
- **Decision**: AI 根据内容生成英文文件名，但中英文件名严格一致
- **Rationale**: 用户指定，但必须避免中文文件名导致 sidebar 重复问题
- **Date**: 2026-04-29

### DECIDED: Skill 放仓库内
- **Decision**: 两个 skill 放在 `skills/` 目录下，随仓库走
- **Rationale**: 用户指定，随仓库版本管理
- **Date**: 2026-04-29

### DECIDED: 图片处理
- **Decision**: 图片放到 `src/assets/images/`，Markdown 用相对路径引用
- **Rationale**: Astro Starlight 推荐做法
- **Date**: 2026-04-29

### DECIDED: Skill 1 输出后附带转换备注
- **Decision**: 转换完成后提供简要备注（源文件、输出文件、图片数量、需注意的地方）
- **Rationale**: 让用户快速了解转换结果和潜在风险
- **Date**: 2026-04-29

## Summary

两个 Skill 已创建：
1. `skills/tex-to-starlight/SKILL.md` — TeX → 双语 Markdown 转换
2. `skills/starlight-publish/SKILL.md` — 验证 + 构建 + 推送

核心规则已固化：`$$` 与 `\begin{aligned}` 分行、中英文件名匹配、frontmatter 完整。

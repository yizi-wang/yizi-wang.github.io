# STATVERSE — 冻结基线可访问性补充终检

固定 `accc8f9435ebfb6109568831704c1d34a350d5f7`。2026-10-25约22:01UTC由协调者传送。**未发现P0/P1；保留一项非阻断P2。** 产品未修改、未push/deploy、未调用或重试Library；独立checkout最终干净，本轮本地服务已关闭。修复前的结论不能写成修复后通过。

## 实际执行

- Chromium151、Playwright、官方npm的axe-core4.14.0，读取精确checkout的dist；阻断浏览器非localhost请求。
- **26次axe扫描**：1440×900、390×844各覆盖九workspace、Field guide dialog、Teacher隐藏答案F、guide.html、scope.html。
- **18次原生Chrome AX tree检查**：590次控件出现记录，包含重复导航，未发现空accessible name。
- 九workspace的DOM重复ID检查均为空；自动扫描未报告重复ID；扫描期间pageerror为0。
- 两视口实际Tab到达四类图表操作点，并执行键盘动作；另检查dialog初始焦点、Tab、Escape和焦点返回。
- 独立复算F的70个文字节点、guide的3个目标节点、scope的118个目标节点对比度。

## A11Y-01 — 交互SVG使用atomic image语义：P2，非阻断

四类图表的根SVG使用`role="img"`，内部却含可聚焦的`role="button"`圆点。axe稳定报告`nested-interactive`。两视口共12个重复规则节点，属于同一种模式。

复现：抽样/CLT画一个样本；CI画区间；相关选择ties；F抽一次样本。扫描实际DOM，然后Tab进入圆点并检查AX tree。

Expected：交互容器允许具有名称、角色明确的可操作子节点，同时保留图表名称和说明。Actual：容器声明atomic image，却包含可聚焦按钮。当前Chrome仍暴露按钮名称，键盘操作通过；未证实读屏阻断，不提升P1。

|容器|根语义位置|内部按钮|
|---|---|---|
|抽样/CLT|src/app.js:322|:362|
|CI|src/app.js:571|:578|
|相关|src/correlation.js:190|:204|
|F|src/sampling-design-lab.js:295|:312|

最小建议：这些交互SVG改为有名称、说明的`role="group"`，或分离静态图和操作控件；保留按钮名称、roving tabindex、方向键、Enter及原生替代控件。静态D/Normal不改。[Deque axe4.14规则](https://dequeuniversity.com/rules/axe/4.14/nested-interactive)。

回归：desktop/mobile生成四类数据后该nested-interactive节点消失；AX tree仍暴露各点名称/角色；Tab/方向键/Enter/原生选择器可用；Teacher隐藏的name/title/desc不泄漏答案。本原始补充审查没有实施修复或执行修复后回归。

## 真实键盘结果

两视口均通过：

- 抽样：Tab到点后ArrowLeft，selected1→0。
- 相关：ArrowRight，首点x1→1.1，名称同步。
- CI：Enter后保持有效焦点，明细含端点和coverage。
- F：Enter后保持有效样本点及检查状态。
- Field guide：Enter打开，初焦点guide-close；12次Tab未进入背景页面控件；Escape关闭，焦点返回help。原生浏览器界面短暂获得焦点时document.hasFocus=false，已单独识别，未误报页面焦点泄漏。

## P3保留，不建议打破冻结

|项目|实际证据|后续建议|
|---|---|---|
|F可见文字与名称不同序/措辞|12单位按钮label-content-name-mismatch。例如可见A01/10/Amber/not selected，名称A01, Amber,10 task points; not in inspected sample。ID、层、数值和状态语义均有，按A01可唯一找到。|可见文字作名称，额外解释aria-describedby。src/sampling-design-lab.js:137。|
|Mean无效ARIA命名|mean-repeat-dots为无适合role的div却带aria-label；另有role=status汇总。|补group或移除无效label。mean-lab.js:29。|
|辅助文字对比度|桌面YOUR LABORATORY3.879:1；小号lab副标3.960:1，低于普通文字4.5:1；大装饰编号1.4646:1。|后续提亮辅助文字/明确装饰。style.css:134、312、322。|
|landmark/H1|手机/Teacher compact lab switch在landmark外；Teacher隐藏hero后无H1。切换器有名称、可操作，workspace仍有标题。|后续具名nav和标题结构，不直接等同A/AA阻断。|

F名称差异仍保留；ID能匹配不证明SC2.5.3符合。未运行语音控制，不声称实际语音激活失败。[W3C Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)。

## 人工排除及未测

- Normal两个原生checkbox被axe报13×13目标尺寸。实际appearance:auto、作者未设桌面尺寸，包裹label可点；点击首行文字成功取消条件并阻断结果。按原生尺寸例外不列本轮失败。[W3C Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)。
- 抽样点SVG title与aria-label不同也触发名称匹配；圆点未绘可见文字标签，未计真实Label in Name失败。
- guide.html两视口均0violation/0incomplete。
- scope.html两视口0violation；手机44个contrast incomplete未全部改判通过。
- 抽查关键F数值/状态/权重表最低4.8427:1；guide目标最低5.8661:1；scope目标最低5.3637:1。不是全页面逐像素证明。
- 未运行NVDA、JAWS、VoiceOver、TalkBack、语音控制或真人残障用户测试。390px为桌面headless touch模拟，非真手机/全面WCAG认证。

独立原报告在其环境`/workspace/statverse-final-accc8f9-review/accessibility-supplement/REPORT-A11Y.md`，8907bytes，源文件SHA2560101b12c3f939d8823f9aed5b985e7f5ff6ecb4956bbddb66dc34e42a8a1c67b；此为协调者传送内容的开发端记录，不声称本副本字节等同原文件。该独立目录保留axe-results、AX名称清点、人工对比度、键盘、脚本与日志。本轮未修改原最终三PNG/证据ZIP。

## 补丁接收状态（开发端）

22:03UTC已推送单独应用提交`5f57ec2f690d98c4f8124ce047d5f19518ab313c`，仅上述四SVG根及Mean容器共五处role属性；其他字节经断言不变，语法/静态构建通过。父任务22:04已交原reviewer定向复核。**此时独立修复后回归仍PENDING**，没有把旧审查结果改成修复通过。P3颜色/标签顺序/landmark保持，不扩补丁范围。

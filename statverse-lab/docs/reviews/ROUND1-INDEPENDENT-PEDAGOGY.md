工具复查结果：当前仍没有新的 `cua_repl`、`node_repl` 或官方浏览器控制工具。按 [CUA 规范](/opt/codex/cua_node/lib/node_modules/@oai/cua/docs/skills/cua/SKILL.md)“Use the preconfigured node_repl js tool for every CUA action”，真实浏览器部分继续保持 **BLOCKED**，没有替换操作方式。应用工作区仍干净，HEAD 为指定 SHA。

以下是报告全文。三个 P2 中，R4 是静态教学缺口，R5 已由程序复现，R6 是尚待真实视觉验证的风险。

---

# STATVERSE 阶段一独立教学审查初轮

这是模拟新手评估任务的**受阻初轮**，不是学生用户测试。未招募、观察或访问真实学生。真实浏览器模拟新手任务完成数 **0/8**，不能作为课堂验收通过证据。本轮已完成独立固定版本检出、验收文档阅读、静态教学与可访问性审查、数值执行及一项状态机复现。

审查对象：`yizi-wang/yizi-wang.github.io`，指定开发分支 `statverse-lab-20261025` 的固定提交 `65cf743c2f264cd063f2891e8edc3598605250be`，目录 `statverse-lab/`。本轮不跟随开发分支后续更新。独立 checkout 位于 `/workspace/statverse-review-65cf743`，detached HEAD；应用源代码未改，无 push、部署或开发分支操作。证据单独位于 `/workspace/statverse-review-evidence`。

## 首要结论

代码层面发现 3 个 P1：手机/Teacher mode 隐藏全部实验导航；CI 单区间缺少键盘和触摸可访问的明细；预测题在更换 estimator 后仍要求用当前 SE 回答关于 sample means 的问题。未发现足以确认的 P0，但浏览器覆盖缺口使本轮无法排除 P0。不得据此宣称课堂可用或首 30 秒目标已达成。

## 浏览器阻塞记录

- 动作：按环境 CUA 技能初始化浏览器，调用规定的 `tools.mcp__node_repl__js`，以便获取受管理的 cdp 浏览器，再访问本地 checkout。
- 目标：本地精确版本；后续 1440×900、390×844、1920×1080 的 UI 操作与截图。私有预览未访问，不涉及登录尝试。
- 结果：`TypeError: tools.mcp__node_repl__js is not a function`。工具清单也未暴露任何 browser/computer/node_repl 工具。失败发生于初始化之前，没有浏览器操作执行。
- 状态：**blocked / 工具不可用**；不是用户拒绝或自动审批拒绝；也没有不确定的浏览器动作。
- 约束来源：环境技能 `/opt/codex/cua_node/lib/node_modules/@oai/cua/docs/skills/cua/SKILL.md` 明确写着 “Use the preconfigured node_repl js tool for every CUA action” 和 “Do not use shell commands, CDP, AppleScript, or another browser/computer tool.” 因此没有运行仓库的 shell Playwright 脚本作为替代，也没有更改安全设置。
- 继续条件：父任务恢复规范要求的浏览器工具，或把真实 UI 部分交给具备该工具的独立 reviewer。无需重新授权已批准的测试范围。

仓库里已有 developer screenshots / browser-results.json 本轮没有用作独立实测证据。**本轮截图交付 0 张**，三个视口均未实测。既有 UI 测试脚本只作为覆盖范围的静态材料阅读。

## 优先修复问题

### R1 P1 手机与教师模式无法直接切换实验

**问题**：CLT/CI 的唯一入口在 sidebar。手机 CSS 隐藏 sidebar；Teacher mode 也隐藏 sidebar，未提供替代导航。

**证据**：`index.html:23–30` 包含全部三个 `data-lab` 按钮；全文件搜索没有其他 `data-lab` 控件。`style.css:1338–1341` 在 ≤640px 设置 `.sidebar {display:none}`；`style.css:1053–1055` 设置 `.teacher .sidebar {display:none}`。`src/app.js:515–559` 只绑定这些按钮。视口目标 390×844 / Teacher 1920×1080；本条为代码确定性结论，非截图复现。

**影响**：手机首次进入只能使用 Sampling；教师投影期间必须退出 Teacher mode 才能换实验。N7/N8 的手机路径不存在。

**修复建议**：在 topbar 放置带文字的原生 lab select，或保留可折叠且键盘可用的导航。Teacher mode 保留同一入口。为当前实验提供可感知状态，控件切换继续沿用 reset/cancel 逻辑。

**回归**：390×844 从首屏依次进入三个实验，确认标题、estimator 锁定和 CI 面板正确；1920×1080 开启 Teacher mode 后执行同样切换；全程键盘 Tab/Enter/方向键可达。运行 batch 时切换，确认旧 batch 不再写入新实验。

### R2 P1 CI 单个区间的比较依赖悬停与颜色

**问题**：N8 要求找出 misses 并解释某个区间。当前单区间样本号、上下界和是否覆盖只存在 SVG circle 的 `&lt;title&gt;` 中。没有 focus、click/tap handler、区间编号、可访问表格或单区间详情。整体覆盖计数可读，不能替代找出并核查某条 miss。

**证据**：`src/app.js:332–345`。SVG 的 aria-label 仅说明 green/pink；每个 line/circle 没有 tabindex/role 或交互。`select()` 在 `359–363` 只重画抽样分布，不会让 CI 显示所选样本区间。数值执行 seed `aurora-2026`、n3、sample1 `[8,40,2]` 得到 mean16.6667、CI `[9.629877,23.703456]`，不包含固定 μ5.3；该条可用于首个可重复 miss 回归。证据文件 `numerical-evidence.json`。

**修复建议**：沿用 recorded sample selector，加上所选样本的 CI 下界/上界、固定 μ、covers/misses 文本。图上 tap/click/键盘选择同步到同一份原始样本；用形状或线型表达 miss。隐藏真值时保留端点、隐藏 μ/命中信息，揭示后再显示判断。

**回归**：1440×900 和390×844，n3、上述 seed，抽1组；不依赖悬停或颜色即可找到 sample1 的端点和 miss 原因。隐藏/揭示不改变端点、样本或随机流。键盘选择 sample2 时图与详情同步；200次时 latest40 与总覆盖计数分别标识。

### R3 P1 更换 estimator 后预测题和检验对象错位

**问题**：顶部题目始终问增加每组卡数后 “spread of sample means” 如何变化。选择 First card only 后，输出和理论 SE 属于 X₁，反馈却仍要求 “Change n … compare the theoretical SE”。学习者按指令比较当前 SE 会看到“不变”，可能把 X₁ 的结论归给均值。

**证据**：`index.html:80–88` 静态均值题目；`src/app.js:488–495` 对全部选项提供同一反馈；estimator change 在 `453–457` 只 reset，不更新题目。`metrics():263` 显示当前 kind 的 SE。理论执行：Aurora 的 first-card SE 对 n3/n12 都是 sqrt38.67≈6.2185；均值 SE 分别3.5902646、1.7951323。

**修复建议**：题干、记录和反馈绑定 pool/kind/n 的实验配置。mean/shift 问均值 spread；first 问“这条只用第一张的规则会改变吗”；variance 采用对应题目，或明确暂时回到 mean。更换实验配置时清除或归档旧预测，比较后要求学生解释本次观察。

**回归**：mean n3→12 应显示 SE 减半；first n3→12 应显示相同 SE，题干也明确 X₁；切换前的预测不残留到不匹配的实验。CLT/CI 不显示与当前探索无关的旧反馈。

### R4 P2 精确枚举只展示分箱轮廓，无法检查九组及权重

**证据**：`src/app.js:175–178` 正确取得 ordered samples 并按概率聚合；`204–208` 仅画无 title/明细/interaction 的28个 rect；`241–244` 仅显示数量和“product probability weights”。原始 ids/p 在引擎保留，但 UI 无枚举表。N6 “为什么9个 ordered samples / 为什么加权” 主要仍靠教师口述。该问题不等于数学权重算错。

**修复建议**：展开有限 ordered-sample 表，列原样本、统计量、乘积概率和对 E(T) 的贡献；小模型 n2 显示9组。另用 Aurora n2 的不等概率说明不能平均 unique outcomes。大枚举表分页或按统计量聚合并可展开。

**回归**：Three-moon n2 枚举9组，统计量0/1/2/3/4 的概率为1/9、2/9、3/9、2/9、1/9，E=2。seed同上前20次模拟平均2.15，单独标作 finite simulation，不强制等于2。超过20,000 cap 明确停用。

### R5 P2 暂停后手动抽样再继续可超过5000记录上限

**实际程序复现**：在独立 Node harness 中执行原 app 事件处理器，DOM 使用 stub，**不是浏览器测试**。先完成4×1000，再运行1000并在 R4990、remaining10 暂停；手动 draw1 后 R4991，remaining仍10；resume 后 R5001。见 `state-evidence.json` 与可执行 `node-state-check.mjs`。

**证据/原因**：`src/app.js:398–402` 只在新 batch 时检查剩余容量；`408–410` 恢复时直接加入 remaining；`432–436` 手动抽样不调整 paused batch remaining。

**修复建议**：每个 tick 同时 clamp `remaining` 与 `5000 - samples.length`；或暂停期间手动 draw 显式结束待续 batch。达到 cap 时提供可见说明，保持 R 含义一致。

**回归**：复现以上路径应最多5000；暂停后换 n/pool/kind/lab、reset 应清除旧 remaining，等待后不增加旧样本；正常 pause/resume 的 seed 顺序应等于不中断执行。

### R6 P2 投影字级需要实视检查

**代码风险，不作为视觉失败事实**：Teacher mode 加大部分段落，但 `distribution-metrics span` 保持7px，SVG 刻度9–10px，单样本选择器10px。见 `style.css:814–817`、`1726–1747`，`src/app.js:193–203,241`。16:9 的真实可读性、遮挡和学生后排辨认均未测。

**建议/回归**：把教师核心刻度/指标/控件放入统一较大字级和聚焦视图；在1920×1080实际截图、投影距离核查后再定稿。不能把“加宽布局”当作课堂投影已通过。

## 首次使用任务记录

以下八项均完成了相关源码或数值检查，**不是八项模拟新手实测结果**。没有实际点击路径、用时或截图，因此首30秒目标不能计时评分。

|任务|待执行的真实控件路径|本轮已完成证据及可能障碍|浏览器结果|
|---|---|---|---|
|N1 抽3张、预测再抽两次|Cards per sample→3；Draw a sample；Draw one sample|Node执行两组 `[8,40,2]→16.667`、`[4,4,8]→5.333`；μ固定5.3。默认n5，需主动设3。未测首次找到控件时间。|BLOCKED|
|N2 五组后回溯一个点|重复 draw；点/Choose recorded sample number→1|源码保留原始 ids，五组具体值见JSON；点调用 select 并重绘原卡。未核验点命中区、手机滚动来回、重叠及键盘实际路径。|BLOCKED|
|N3 estimator/estimate|保持mean重抽；ESTIMATOR→First card only|源码明确 before rule / observed estimate，切kind reset；R3题干错位。未观察新手解释能力。|BLOCKED|
|N4 分别改变n与R|mean,n3；Run batch；再增加R；改n12|理论SE3.590→1.795；n change清历史和token。没有浏览器中对比画面/读数可见性证据。|BLOCKED|
|N5 隐藏真值|Hide true values→draw→reveal|handler只改hidden/population/update，未重置rng或模型；图线隐藏、理论输出Hidden。未操作resize/Teacher/导航验证。|BLOCKED|
|N6 精确枚举|Three-moon；n2；Exact small model|数值枚举9组E2，前20次finite均值2.15；UI权重/原样本不可检查，见R4。|BLOCKED|
|N7 CLT|Central limit theorem；skewed；改变n|代码固定population并画mean的Normal density×binwidth；正确提示无通用n30保证。手机入口受R1阻断；未测实际发现/固定横轴下形状辨认。|BLOCKED|
|N8 CI|Confidence intervals；n3；draw20；hide/reveal；找miss|固定μ、已知σ、非正态近似说明正确；首组确定miss。单区间键盘/触摸路径缺失R2。|BLOCKED|

N9 correlation 与 N10 contingency：对应 UI 尚未实现，按阶段一 scope **NOT APPLICABLE**，不是承诺全部已交付后的失败。C/D/E/F 不计入当前实现评分或本轮缺陷数。

## 教学动作与负荷判断

这是源码推断，不能当成学习效果验证。A模块有实际可计算动作：抽一整组得到一个数、每次重抽、保存原卡、改变规则、比较理论与有限模拟，超过了纯静态展示。on-page prediction 目前只保存选中样式及固定文本，没有把前后观察和该次预测串起来；Observe→Explain 文本按 kind/lab 静态替换，未针对学习者这次样本或解释提供反馈。因此完整 Predict–Experiment–Observe–Explain–Transfer 循环仍需要教师口头组织，不能宣称自主闭环已验收。

定义有优点：八项 field guide 在 modal 中按需查看，主界面区分 X̄/x̄、estimator/estimate、theoretical/simulation。但首次抽样前同时出现IID、μ、σ²、E(T)、SE和bias，适合已见过这些词的学生；中等基础新手可能只理解卡牌动作。建议首步先显示“一组→一个均值”和固定μ，第二步再揭示随机变量/估计量术语，第三步引入SE/bias；完整定义保留可查。不能仅靠隐藏真值同时隐藏所有教学线索。

游戏元素在代码中是可追溯的卡牌值、稀有度和透明概率，没有 collection 改变 population 的机制。它可帮助把高值少见事件联系到偏态尾部；是否分心、是否把 sample 当作拥有收藏需真实观察，本轮没有该证据。不要给“抽中稀有卡”奖分；反馈应奖励正确解释样本→统计量。

## 15至20分钟课堂流程判断与改法

当前只能判断为**教师引导的 A 模块流程在功能设计上可尝试，尚未完成课堂可执行验收**。不建议把 partial CLT、CI 或全S1–S3并入这18分钟，也不建议先让学生通读全部定义。R1–R3修复并浏览器回归前，不应标为 classroom ready。

建议把现有18分钟路线收窄：

1. 0–2分钟：固定Aurora、n3、mean、seed aurora-2026，先口头预测“什么不变”。μ5.3先显示一次再隐藏。明确有放回、各张独立。
2. 2–6分钟：抽1组，学生手算16.667；整组三张→一个点。再抽两组，通过数字selector回到sample1。现场要求指出“这一个点的三张原卡”，不只朗读定义。
3. 6–10分钟：mean n3运行200，记SE3.590；增加R仍不变；改n12前先板书/截图保存旧SE，重置后比较1.795。当前app不并排保留两种n，必须事先安排外部记录，避免混池。
4. 10–14分钟：切first，预测n3→12仍相同SE，解释为什么多抽卡对这条规则没有帮助。修复R3后再让学生依app题目操作。
5. 14–18分钟：若时间足够改mean+2，解释bias2不能被大n修复；完成工厂n20/R500的口头迁移，指出parameter、estimator、estimate、n、R。用学生解释作为出口题。

精确枚举可替换mean+2作为另一条课，不要再额外堆进18分钟。CLT与CI各留独立后续课；手机路径先修复导航，Teacher mode准备好足够大的刻度和聚焦画面。以上时间是建议分配，不是已测课堂耗时。

## 测试结果与未测项

- 实际独立操作：git fetch精确SHA与detached checkout；完整阅读验收/coverage/classroom说明；执行仓库9项数值测试（9/9 pass，详见unit-results.txt）；手算总体μ/方差及核查seed输出；执行Node状态机harness并复现R5001。
- 真实浏览器：0次初始化成功、0个页面访问、0个首次使用任务、0张截图。桌面1440×900、手机390×844、教师1920×1080均未测；私有预览登录/部署一致性未验证。
- 未测：首30秒、真实点击/触摸命中、键盘tab序和dialog Escape、reduced motion实际呈现、图表文字/遮挡、焦点跳失、响应式、控制器并发/late updates、性能、图表可读性、隐藏状态跨mode/resize、真实学生理解与迁移。
- 评分：不计算加权总分；pedagogy、UI/UX、classroom均缺独立实际操作证据。数学的相关A函数有数值证据，但不冒充全部数学模块批准。
- 应用目录 `git status --short` 为空；没有改 app、推送、部署。

## 交付物

- 本报告 `STATVERSE-INDEPENDENT-REVIEW.md`
- `numerical-evidence.json`：seed、五组原卡、SE、九组枚举、CI端点（Node数值证据）
- `unit-results.txt`：本轮执行的9项数值测试
- `node-state-check.mjs` / `state-evidence.json`：暂停/手抽/继续超cap的可重复非浏览器证据

父任务下一步：先修复R1–R3；恢复合规浏览器工具后，以本报告回归路径在同一固定版本或指定修复SHA重新做至少5个首次使用任务。重新测量并截图，不能把本轮BLOCKED改写为PASS。

---

以下为状态复现脚本全文。它执行原 app 的事件处理器，使用 DOM stub，**不启动浏览器，不属于浏览器或模拟新手测试**。父任务只需将 `import` 路径改为自己的固定版本 checkout；输出文件路径也可改到自己的证据目录。

```javascript
// Independent deterministic handler/state check.
// This is NOT a browser or novice test.
import fs from 'node:fs/promises';

const els = new Map();
const cls = () => ({ toggle() { return true; } });

function get(key) {
  if (!els.has(key)) {
    els.set(key, {
      key,
      textContent: '',
      innerHTML: '',
      value:
        key === '#batch' ? '1000' :
        key === '#seed' ? 'aurora-2026' : '',
      checked: false,
      disabled: false,
      clientWidth: 580,
      parentElement: { title: '' },
      classList: cls(),
      dataset: {},
      handlers: {},

      addEventListener(type, fn) {
        this.handlers[type] = fn;
      },
      querySelectorAll() {
        return [];
      },
      insertAdjacentHTML(_where, text) {
        this.innerHTML += text;
      },
      scrollIntoView() {},
      setAttribute() {},
      showModal() {},
      close() {},
      click() {
        if (!this.disabled) {
          this.handlers.click?.({ target: this });
        }
      }
    });
  }
  return els.get(key);
}

const groups = {
  '[data-prediction]': [],
  '[data-answer]': [],
  '[data-lab]': []
};

globalThis.document = {
  querySelector: get,
  querySelectorAll: q => groups[q] ?? [],
  body: { classList: cls() }
};
globalThis.window = { addEventListener() {} };
globalThis.matchMedia = () => ({ matches: true });

let queue = [];
globalThis.requestAnimationFrame = fn => {
  queue.push(fn);
  return queue.length;
};
globalThis.cancelAnimationFrame = () => {};

// Change this path to the exact checkout being reviewed.
await import(
  '../statverse-review-65cf743/statverse-lab/src/app.js'
);

const flush = () => {
  let n = 0;
  while (queue.length) {
    queue.shift()();
    if (++n > 1000) throw Error('unexpected loop');
  }
};

// Complete four batches: R = 4000.
for (let b = 0; b < 4; b++) {
  get('#run').click();
  flush();
}

// Start final batch. Execute 99 ticks of 10 samples:
// R = 4990, remaining = 10.
get('#run').click();
for (let t = 0; t < 99; t++) queue.shift()();

get('#pause').click();
const paused = window.STATVERSE.getSnapshot();

// Manually add one sample while paused.
get('#draw').click();
const afterSingle = window.STATVERSE.getSnapshot();

// Resume the still-pending 10 samples.
get('#run').click();
flush();
const final = window.STATVERSE.getSnapshot();

const out = {
  timestamp: new Date().toISOString(),
  evidenceType:
    'Node handler/state harness with stub DOM; NOT a browser/novice test',
  scenario:
    'At R4990 pause final1000 batch, draw1 manually, resume remaining10',
  paused: {
    R: paused.samples.length,
    remaining: paused.remaining
  },
  afterSingle: {
    R: afterSingle.samples.length,
    remaining: afterSingle.remaining
  },
  afterResume: {
    R: final.samples.length,
    remaining: final.remaining
  },
  expectedMaximum: 5000,
  capExceeded: final.samples.length > 5000
};

await fs.writeFile(
  '/workspace/statverse-review-evidence/state-evidence.json',
  JSON.stringify(out, null, 2)
);
console.log(JSON.stringify(out, null, 2));
```

在指定 SHA 的实际输出：

```json
{
  "timestamp": "2026-10-25T16:29:11.210Z",
  "evidenceType": "Node handler/state harness with stub DOM; NOT a browser/novice test",
  "scenario": "At R4990 pause final1000 batch, draw1 manually, resume remaining10",
  "paused": {
    "R": 4990,
    "remaining": 10
  },
  "afterSingle": {
    "R": 4991,
    "remaining": 10
  },
  "afterResume": {
    "R": 5001,
    "remaining": 0
  },
  "expectedMaximum": 5000,
  "capExceeded": true
}
```

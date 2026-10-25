# STATVERSE 最终交付措辞独立审查

固定版本：`94d0b8ded2cefe1091f237543adde7c0330ce888`，`statverse-lab-20261025`，2026-10-25 UTC。只读检视，不代表后续主开发版本；无产品编辑、push、部署、Library或浏览器操作。

## 核准结论

**未发现P0/P1或“全S1–S3课程已完成/真人课堂已验证”的无条件主张。README与当前方法合同大体审慎。建议最终交付前处理2项P2内容呈现问题及3项P3精度/路径问题。**

通过的关键界限：t不作S3默认路线；TypeI/II/power/p/MC标拓展；χ²为渐近参考且低E扣留推断；raw-data fit+pool无已支持标准校准；缺Normal/Poisson/continuous-uniform GOF UI已明说；F设计SE来自完整已知虚构总体，公式为辅助；便利规则不是所有quota的定理；无真人/物理投影/测得18分钟结果的主张。

## 原始来源与方法

本轮直接读取官方PDF的网页文本：Pearson IAL [Specification Issue3](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf)，印刷p55–56、58–59、61–62；以及[Formula Book Issue2 p27](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf#page=33)。印刷页+6为PDF一基页码。其后对照实际模块、README、COVERAGE、两份相同的v3课堂指南、Field guide及各数学合同。

官方边界核对：S3均值方法为所列Normal/大样本路线，t不是此处必需；χ²包含多个分布族且是近似参考；相关系数用表。Formula Book p27表头是一尾水平，不能把列水平直接当双尾总α；ties概念理解与数值含ties题要分开。对应实现的表子集、方向/α换算、不可用项和拓展分离均有明确说明。[规格p61–62](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf#page=67)、[公式册p27](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf#page=33)。

补做直接Node引擎调用、独立Python Fraction课堂算例复算、8个相关表覆盖/缺项探针；没有做全浏览器课堂走查，也没有重新跑所有数学库。

## 需要修改的具体位置

### C1 · P2：全局词汇表未限定卡池模型，与F无放回机制冲突

证据：`statverse-lab/index.html:490–498` 的全局Field guide把Population写成卡牌概率模型，Sample直接写作“n independent draws with replacement”。`app.js:849`为全局help动作，没有按lab区分。F实际机制和合同明确有限总体无放回；不能让初学者把独立、有放回当成sample的一般定义。

最小修复：在词汇表前加：

> The examples below use the card lab’s IID model with replacement. The finite-frame lab instead selects distinct units without replacement under its stated sampling design.

并把Sample条目开头改为“In the card lab, …”。无需重写术语教材。回归：从A和F分别打开help，确保两种模型界限可见，F无放回说明与设计SE不被卡池规则覆盖。

### C2 · P2：覆盖表把历史与当前状态混在同一权威视图

证据：`docs/COVERAGE.md:5–20`仍以“Current status”列列出已过时的Absent/缺控件；`:59`保留历史错误做法“fitting…subtracts q1 after pooling”；`:66–78`才给当前更正。`:49/:68`确实说明历史被取代，因此本审查不把它定性为当前无条件批准错误检验；问题是读者不能直接从首表获得当前课程覆盖。

最小修复：首屏放一张带固定SHA的统一当前表，用full/partial/not implemented/enrichment四类；旧表移到明确标注的checkpoint history。`:59`应行内标“superseded—invalid calibration; see checkpoint5”，避免复制出一条错误方法。`:74`的“p fitting supported only before any actual pooling”也宜改为：

> Fitted Binomial inference is supported only with the original four unpooled classes. Combining fit=true with any actual pooling is unsupported, in either operation order; only descriptive O/E/contributions/statistic remain.

保留df≤0另行拒绝的合同。回归：只读首屏应能判定E是partial、fit+pool非已校准；不能靠读到文末才推翻“Current status”。下面的精简表可直接作当前表骨架。

### C3 · P3：部分官方条款编号错配

`COVERAGE.md:11`把CLT链接到§3.5–3.6；`:13/:43`的mean-tests引用包含CI的§3.4，却漏掉known-variance test的§3.5。官方原页的主题划分与`INFERENCE-ENGINE-CONTRACT.md:27–29`已正确采用的编号不一致。

修复：CLT用S3.3§3.6；纯one/two-mean tests用§3.5–3.8；若行内同时包含known-variance CI，则写§3.4–3.8。CI interpretation仍可单引§3.3。回归：逐行检查主题名与原始页对应，不改变已有算法。

### C4 · P3：18分钟脚本缺一处分页路径，n比较可再明确固定R

`CLASSROOM-GUIDE.md`与`classroom-guide-aurora-v3.md`逐字相同；两者`:57–61`让教师看[2,2]和[40,40]，实际inspector每页10行，25个有序对中的[40,40]在第3页第25行（`app.js:1085–1101`）。

修复句：“Inspect [2,2] on page1; set Page to3 to inspect [40,40]; compare the total beneath the table.” 在`:65`补“record the theoretical SE before changing n; if comparing empirical spread, use the same stated R for both fresh cohorts”。否则不要凭各一组样本声称观察到SE减半。现稿已经说明小R可能不规则，数学结论本身正确。

回归：n2→exact→page1/page3，确认25行和权重；n3/n12分别读理论SE，若做模拟图比较则两边明确同R。18分钟仍是计划而非实测时长。

### C5 · P3：README的“只有Load example才换数据”需限定语境

`README.md:59`的“New model examples require an explicit Load example counts action”过于宽泛。实际第一次进入不同语义数据语境会显示其独立初始示例，之后恢复各自已保存O，且有context-change notice；这已被前轮数学事件链接受，不是同数据偷换null。

建议替换：“Within the same semantic dataset, changing H₀ preserves observations; only Load example counts replaces them with an example. Changing semantic context restores or initializes its separately stored dataset, with an explicit notice.” 同步检查`DISCRETE-CATEGORICAL-LAB-CONTRACT.md:32`的“Only…”句，限定为同语境。

## 精简当前覆盖建议

状态定义：full仅指所列窄主题在明示、有限的教学模型内已有完整操作链，不代表整章、任意数学域、学习效果或全考纲完成。以下按实际A–F控件判定，不因纯引擎有函数就增加UI覆盖。主题来源范围为[官方规格指定六页](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf)。

|主题/参考|状态|固定版本实际边界|
|---|---|---|
|S1§1 modelling|partial|虚构模型和条件声明；不是完整建模课程|
|S1§2 displays/location/dispersion/skew/outliers|partial|卡池矩、直方/散点；stem-leaf、box plot、不等宽箱面积课未做|
|S1§3 probability|partial|IID/独立、加权样本空间、有/无放回示例；条件概率/tree/Venn工作台未做|
|S1§4 regression/PMCC|partial|C交互计算/解释/外推；不是全部题型训练|
|S1§5 discrete RV|partial|卡池PMF/矩和D尾计算；一般CDF/分布变换工作台未做|
|S1 Normal|partial|Normal参考/组合/均值推断；一般概率反求工作台、Normal原始总体模拟器未做|
|S2§1 Binomial/Poisson distributions|partial|D离散模型；加法与分布近似教学链未完整实现|
|S2§2 polynomial PDF/CDF/quantiles|not implemented|不能把Normal曲线或卡池直方图算作交付|
|S2§3 continuous uniform/continuity correction|not implemented|无相应完整交互|
|S2§4.1 population/census/frame|partial|F身份与census示例；survey选择优缺点不是完整课程|
|S2§4.2 statistic/sampling distribution|full|A固定IID模型、原样本回溯、不同估计规则和加权分布|
|S2§4.3–4.6 tests|partial|D有界精确离散参考/临界域；Normal近似路线未做|
|S3§1 independent Normal combination|full|F有界两变量aX+bY+c；独立声明，非协方差工具|
|S3§2 sampling methods|partial|四机制可操作；12单位、系统n整除限制、quota仅具体便利规则|
|S3§3.1 estimator/bias/SE|full|A均值/S²等规则与理论/模拟分离；限明示模型|
|S3§3.2 mean distribution|partial|A/B离散源与Normal近似、解析Normal均值参考；无原始Normal源实验|
|S3§3.3–3.5 CI/known-variance Normal inference|full|重复区间解释和独立summary z/双侧CI；exact须满足Normal/knownσ条件|
|S3§3.6,3.8 large-sample extension|partial|显式条件确认/estimated-s Normal近似；固定plug-in重复不是随机s模拟或充分性证明|
|S3§3.7 two Normal means|full|独立summary z、已知方差；不是paired/covariance路线|
|S3§4 chi-square|partial|有限尺寸独立表、4类uniform/specified/Binomial3；其余GOF族未做；fit+pool扣留校准|
|S3§5 correlation tests|partial|C系数/表推断；官方表子集，不补造缺行/缺格/精确p|
|TypeI/II/power/p/conditional MC|enrichment|明确的解释/模拟，不升级为额外必考条款|
|枚举技术、数值ties练习、FPC/design-SE公式|enrichment|支持核心概念；ties的概念处理不因此从核心中排除|

t不作S3缺交付项：本项目有意不提供small-sample t/Welch，不应把这记为S3必需内容缺失。表中not implemented不等于没有相关内部数学函数，指没有所要求的课堂交互链。

## 18分钟指南实际核对结果

直接引擎与独立Fraction复算通过：Aurora值2/4/8/16/40、概率.45/.30/.16/.07/.02；μ=53/10，σ²=3867/100。seed=`aurora-2026`，n3前两组分别[8,40,2]与[4,4,8]；均值50/3、16/3，两均值数学平均11。binary64结果约10.999999999999998，不是教材错误。

n2的25个有序对逐行复核概率、均值、贡献：总概率1，加权期望5.3；[2,2]的p=.2025、p×T=.405，[40,40]的p=.0004、p×T=.016。不是25个等权情况；“exact”指穷尽模型且无MC波动，不指binary64符号精确。n3/n12理论SE分别3.5902646142/1.7951323071，确实减半。

源码路径核对：Teacher sample阶段包含settings；distribution阶段保留sample/distribution/settings；reset恢复seed，n改变清空旧队列，exact计25行分页，批次在前两组后加200得到R202。脚本区分n/R、estimator/estimate、理论/有限模拟、固定μ/随机CI，并明确高偏态小n非exact Normal。A的18分钟路线没有宣称带完B–F。

判定：数学与声明控件路径自洽，适合作为待计时的教师脚本；不能称“已证实18分钟可完成的真实课堂”。保留“两行+总计”的减负方式，补分页路径；若时间紧，n3→n12用理论SE作迁移题，模拟图比较作为可选。未测真人计算/讨论耗时、物理后排可读性和全浏览器课堂操作。

## 核准的精简交付措辞

> STATVERSE提供以S3为重点、关联S1/S2部分主题的交互教学示例，并非完整考纲课程。已实现的模型受明示条件和界面范围约束；离散分布参考与渐近χ²、理论值与有限模拟分别标注。GOF仅提供当前列出的uniform/specified/Binomial3路线，原始数据拟合后再合并不提供已校准检验。TypeI/II/power/p/MC及部分有限总体公式为拓展支持。18分钟路线是教师脚本；没有真人学习效果、物理投影或实测课堂时长证据。

本固定版本README里的独立审查pending是提交时的状态，不因本轮后来完成就倒算为原文失实。后续交付可按具体SHA/数学或浏览器范围更新，不能把本轮内容/数值审查升级为真实课堂或浏览器全面通过。

## 证据、未完成动作与限制

保存目录：`/workspace/statverse-content-review-evidence/`。保留`lesson-content-check.mjs`、`lesson-fraction-oracle.py`、两份结果JSON及`correlation-scope-probes.json`。8个表探针涵盖n10 PMCC一/双尾5%、n6 Spearman一/双尾5%、n4打印dash、n40未实现行、n31无官方行、n7未实现格，全部按预期区分。不是全表重新认证。

本地下载/渲染PDF动作未完成：Python urllib尝试Pearson官方spec URL时代理返回`Tunnel connection failed: 403 Forbidden`，未取得文件；随后pdftotext/pdftoppm因文件不存在未执行成功。状态为下载被拒绝、无待定结果，未重试或改网络设置。官方网页工具读取PDF文本成功，已完成指定页文本对照；不能声称本轮看到了PDF渲染图或有本地官方PDF包。

授权的内容/数值审查已完成；以上本地下载限制不妨碍已完成的文本结论。没有编辑产品，没有Library交付或外部写入，浏览器/真人/物理验收仍未测。

---

Developer receipt note: parent supplied the full report above. Upstream file13339bytes, SHA256b1a3e90944146387e5c7a3f5de2db637caaff8d6c34656c5830b75bf1a886ef7. This textual copy is not asserted byte-identical to the original file. Its historical fixed-SHA findings are retained; subsequent repairs and regressions are recorded separately.

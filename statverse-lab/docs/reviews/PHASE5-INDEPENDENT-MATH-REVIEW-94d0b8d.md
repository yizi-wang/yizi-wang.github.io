# STATVERSE 阶段五独立数学与 UI 桥接复核

审查固定版本：`94d0b8ded2cefe1091f237543adde7c0330ce888`，仓库 `yizi-wang/yizi-wang.github.io`，主开发分支 `statverse-lab-20261025`。审查日期：2026-10-25 UTC。

## 结论与边界

**本轮受测数学与模块事件桥接通过；两个既有 P1 在受测事件链上已安全修复，未发现新增 P0/P1/P2。**

- 原 fitted-Binomial→pooling P1：保留描述 O/E/χ²，所有受测路径均扣留校准 p 与 reject，`approximationAppropriate=false`、`referenceDistributionSupported=false`、`referenceDf=null`。这是安全限制功能，不是新增了有效的拟合后合并检验。
- 原 S4-01 换 GOF null 偷换 O：同一 portal 数据语境下保留 O、N 和已有分组；精确历史向量 N=49、minE=4.9 正确扣留推断。Binomial 的不同语义数据语境单独保存、切换时明确说明并重置分组。
- F 实际 UI 传参、有限总体估计/设计 SE、缺层 null、系统抽样排序效应、便利规则限定及 Normal 组合，均与独立复算一致。

这是 Node 模块事件 fixture 与独立数值审查，**没有进行浏览器操作，没有截图，没有真人学生参与，也不是新手用户实测**。不替代另一线程的浏览器验收，不改变此前教学浏览器 BLOCKED/0 项实际操作记录。

独立 detached checkout 位于 `/workspace/statverse-phase5-review-94d0b8d`；fetch 精确 SHA 后检出，开始及结束工作树均干净。没有编辑产品文件，没有 push、部署或调用 Library。报告及脚本仅写在独立证据目录。

## 实际方法与规模

读取实际 `categorical-model.js`、`chi-square-lab.js`、`sampling-design-lab.js`、`normal-combination-lab.js`、`sampling-design.js`、相应接口合同及 app.js 的模块接入/暂停调用。直接创建真实模块，改变真实输入控件并触发其 input/change/click 处理器，读取真实 `getSnapshot()` 及渲染文本/表格；没有另写一个 UI 实现来替代产品事件链。

工具：Node v24.19.0、linkedom 0.18.12、Python 3.12.14、SciPy 1.17.0、NumPy 2.3.5（本轮 oracle 以 Fraction/itertools 和 SciPy χ² survival 为主，未用 Monte Carlo 代替有限总体全枚举）。

|执行项|实际规模与结果|
|---|---|
|E 模块状态|50 个快照，含原 P1、两种操作顺序、三种相邻合并、三种 α、低 E、restore、fixed p、数据保存和显式示例替换|
|F 有限总体 UI|384 个控件组合 + 2 个关键状态；其中 48 个不满足 n 整除12的系统设计正确拒绝，338 个支持状态实际抽取并保留样本|
|F 控件组合|4 设计 × n=1…12 × 2 排序 × 2 值设置 × 2 排名方向|
|独立有限总体枚举|16,380 个 SRS 子集、3,676 个分层选择、112 个系统随机起点，共20,168个结果；覆盖两种顺序与原值/常数值；排名不影响概率设计理论|
|F 流/状态检查|100 单步与100批次逐记录相同；另测 pause→单步→resume、6种参数变化取消排队回调、R=1000上限、隐藏真值、保存样本选择、非法 n|
|Normal UI|318 个快照：308 个有效状态及10个拒绝状态；含300个有界参数组合、符号翻转、零方差、极小正方差、范围端点与重置|
|最终检查总数|78 个事件/状态断言 + 13,311 个独立数值及结构比较，失败0。该数字是检查数，不能称为13,311种独立学生任务或全部数学域证明|

独立 oracle 用明写的12单位原始记录与顺序核对 UI 总体，再用 Fraction 枚举估计量分布；没有调用产品 theory 函数作为 expected。Normal 用有理数 `c+Σaμ`、`Σa²σ²`；E 从捕获的原始 O、控件模型/fit/p/概率和 groups 独立聚合，再用 SciPy χ² sf 核对受支持的参考尾概率。不是重复开发者测试数量作为通过依据。

fixture 的限制已核查：linkedom 对 SVG 元素“赋值 onclick 后 dispatchEvent”未调用该属性处理器。保存样本的数值选择器通过 change 事件验证；SVG 点仅直接调用产品赋予的真实 `onclick` 回调验证回溯逻辑。**没有因此声称真实鼠标/触摸点击图点通过。** clientWidth 固定600，RAF 使用可控制队列，不代表真实布局或帧率。

## 发现一：拟合后合并的原 P1 已安全扣留

历史严重程度 P1；本 SHA 受测修复通过，无新开放问题。

实际路径：GOF → Binomial(3,p) → O=`[7263,2491,238,8]` → 勾选从同一 O 拟合 p → 合并0与1类。反向先合并、再勾选拟合也执行。N=10000，pHat=.0997。

|项目|独立 expected|实际模块/UI|
|---|---|---|
|分组 O|[9754,238,8]|一致|
|分组 E|[9721.61783946,268.47189081,9.91026973]|一致，最大浮点差约1.82e−12|
|描述 χ²|3.93467741449227|3.9346774144922705|
|校准参考|不得把原细分类拟合后合并的统计量按简单 df1 批准|`status=unsupported-fitted-pooling-calibration`|
|p/reject/asymptoticPValue|均扣留|null / null / null|
|appropriate/reference supported/reference df|false / false / null|一致|
|正式参数计数 df|可保留作说明，不能当已批准 reference df|r.df仍为1；UI reference df显示“Not calibrated”，另说明仅形式计数|

UI 实际写明：即使每个 E≥5，也没有这里所支持的标准 χ²(k′−2) 校准；描述 O/E/contributions/statistic 保留，p 和 decision 扣留；contingency 固定边际随机化不作为 GOF 校准替代。

相邻域：α=.1/.05/.01；合并0+1、1+2、2+3；fit→pool及pool→fit；原 P1 O 与稀疏 O=`[10000,10,2,1]`，共36条额外实际模块事件链均无绕过。没有把“所有 E≥5”误当完整的校准条件。

恢复四类：原 O 保留，χ²=5.8216723396499255，df=referenceDf=2，p=.05443019794654324，reject=false，appropriate=true，与独立 SciPy一致。改用独立指定 p=.1 再保留三组：χ²=4.311522633744869，q=0，df=2，p=.1158149851387144，reject=false，正常推断。继续合并使拟合形式 df≤0时沿用合同的显式拒绝，旧结果清空；未声称该情况下仍提供描述结果。

代码证据：`statverse-lab/src/categorical-model.js:98–132` 校准门槛；`chi-square-lab.js:422–457` 独立的“unsupported”展示分支。`valid`仍可表示描述算术有效，不能脱离新增校准字段将其解释为检验有效。

建议：保留该门槛及双操作顺序回归；若后续增加 grouped-likelihood 拟合或 bootstrap，应单独复核新的估计/重拟合/校准程序，不能仅删除这个拦截。

回归：执行上述原 P1；检查所有五个校准输出通道；restore四类；取消fit指定p=.1；再fit；将类数降至2核对清空。

## 发现二：同数据换 null 的原 S4-01 已修复

历史严重程度 P1；本 SHA 受测修复通过，无新开放问题。

精确历史复现路径：GOF uniform → O=`[17,9,10,13]` → reveal → specified probabilities(.1,.2,.3,.4) → reveal。

实际 O仍为 `[17,9,10,13]`，N=49，E=`[4.9,9.8,14.7,19.6]`，χ²=33.67006802721088；minE=4.9，`approximationAppropriate=false`，p/reject均null。没有再偷偷换成 `[12,18,30,40]`、N100和可用推断。

另测 O=`[10,20,30,40]`，uniform先合并中间两类再切 specified：O与groups都保留。specified概率改成(.2,.3,.1,.4)后往返uniform，概率也恢复；点击明确的“Load example counts”才换成示例 O，概率不被重置。非法空 O在换null后仍为空、result=null，没有被“修复”为合理示例数据。

切到Binomial 0–3 wins是不同语义的数据语境：其原 O独立保存，返回可恢复，分组重置，UI明说“not the same dataset under a different H₀”。Binomial指定p变化与fit勾选也保留其O。这种明确的语境切换不计为同数据换null。

代码证据：`chi-square-lab.js:154–194` 保存原输入及概率；`:471–500` 以portal/Binomial/各contingency语境保存数据、仅跨语境重置分组、显示说明；`:567–580` 显式加载示例动作。

建议/回归：将N49精确历史向量保留为必跑门槛；同语境模型往返、原有合并、非法输入及概率编辑均需保留。浏览器线程另验实际控件、焦点与可见提示，不用本数值事件结果代替。

## F：有限总体实际桥接

受测通过，无新增P0/P1/P2。固定 μ=275/6=45.833333333333336；总体按N定义方差22625/36，有限总体S²按N−1定义为22625/33。独立枚举吻合UI设计方差，没有把二者混用。

|场景与实际seed|独立 expected|实际结果|
|---|---|---|
|SRS n1；`phase5-independent\|srs\|1`|估计=所选单位值；设计方差22625/36，不使用单样本方差|抽到V01值75，estimate75、error29.1666667，designSE25.0693483|
|SRS n6|设计方差22625/396；不随R或实际所选单位变化|状态、样本记录和显示SE均吻合；100单步/批次各记录也独立核对|
|分层n5；`phase5-independent\|stratified\|1`|配额2/2/1；总体权重1/2,1/3,1/6；设计方差1985/108|IDs A02,A06,C01,C04,V01；raw mean52；weighted estimate49.1666667；error3.3333333；designSE4.2871470|
|分层n3同seed规则|Violet配额0，full-target estimate/error/SE均null|选A02,A06,C01，raw mean38.3333333保留；estimate/SE显示Unavailable，batch禁用，没有用raw mean补位|
|系统n6，periodic；`phase5-independent\|systematic\|1`|两起点均值215/6及335/6，各概率1/2；E(T)=μ、variance100|实际高值起点estimate55.8333333，error+10；designSE约10；未称为必然bias|
|系统n6，balanced，同seed|两起点均值均275/6；variance0|实际estimate45.8333333，error0、designSE0|
|便利配额n6，given→reverse→constant|该明确规则误差−10→+10→0；没有概率设计SE|实际分别约−10、+10、0；SE均Unavailable，概率batch禁用，显示是this convenience rule|
|n12 census|概率设计estimate=μ、error0、designvariance0；便利规则仍按合同不赋概率SE|所有受测顺序/值/排名均符合|
|系统n不整除12；n空/0/13/2.5|明确拒绝，不能继承前一有效估计|48个非整除网格状态及4个非法n状态均清空并禁用操作|

表中的组合seed用竖线表示真实种子连接符；便利规则不使用seed。分层表格的Nₕ、nₕ、Wₕ、nₕ/n分别解析并核对，不能只凭引擎r.estimate认定UI显示正确。比较表各设计的E(T)/SE也逐格对全枚举结果核对，缺层/不支持项显示Unavailable。

无放回/可追溯：338个支持状态核对n个不同ID、原值、stratum、frameIndex；另逐条核对100单步及100批次结果；每次恢复同一总体。保存的完整单位没有由均值反推重构。数值选择器与SVG真实回调均指向原记录。

状态链：base=`phase5-stream`时100单步等于reset后+100；batch运行一帧后pause、手动抽一组、resume最终R201，seed序列仍是`base|srs|r`无重号。n/order/method/ranking/values/seed变化时旧记录清空，已排队回调不能混入新队列。概率R1000时单步和batch禁用。隐藏固定真值只改变可见性，records及theory相同，误差与μ标线隐藏。

代码证据：`sampling-design-lab.js:102–125` 实际总体变换与theory调用；`:157–216` 估计/已知总体设计SE/权重表；`:219–240` 各设计比较；`:461–479` 实际采样引擎调用与seed；`:497–545` 批次与参数变更取消。

教学表述核查：SE写明来自完整已知虚构总体，不是从一个样本估计；系统顺序改变spread、这里均为design-unbiased；accessibility仅排名、不当成response probability；便利选择限定具体机制，无“所有quota必偏”的表述。受测预测题会随缺层、整数配额、系统n/排序变化，不是固定一条错误结论。

## F：独立 Normal 组合实际桥接

受测通过，无新增P0/P1/P2。读取真实两个term的id/coefficient/mean/variance与constant，独立验证mean=`c+aμX+bμY`、variance=`a²σX²+b²σY²`；没有把variance输入再当SD平方一次。

- 默认a2、b−3、μX10、μY3、σ²X4、σ²Y9、c0：mean11、variance97、SD√97。实际Flip b后mean29、variance仍97，保留before/current并生成两个共轴density path；其他参数编辑清空旧comparison。
- 两系数0或两variance0：输出point mass、SD0，无Normal density curve；负系数的mean保留符号，variance非负。
- 不同ID但相同分布可以通过；重复ID X/X拒绝，不能将同一变量两次当独立副本。缺Normal声明、缺独立声明、空ID、空数值、负variance、超过UI系数/均值/variance/constant界限均result/config=null，输出隐藏，曲线清空。
- 300个有界组合、端点及variance=1e−20的tiny-positive向量均通过；微小正variance保留Normal，不被格式化处理成数学上的point mass。未扩展成double极端域扫描。
- UI贡献表逐项核对符号mean贡献与平方系数variance贡献；最大绝对mean误差0，variance误差约2.91e−11（其量级内正常浮点舍入），SD误差约5.68e−14。

代码证据：`normal-combination-lab.js:46–83` 声明/控件到engine config；`:172–215` 实际引擎调用及贡献显示；`:226–242` 符号翻转保存/清空对照。界面明确variance/SD单位、独立性和非Normal/协方差范围，不自动推断未声明的条件。

## 未测项与保留限制

- 本轮未运行真实浏览器、390×844/1440×900/16:9截图、真实触摸、键盘焦点流、辅助技术、布局遮挡或性能/帧率。DOM生成成功不是这些项目的通过证据；SVG点只验证真实callback逻辑。
- 未重跑全套D离散/固定边际MC/正态逆函数/极端double扫描；本轮相关纯引擎未变。`sampling-design.js`与原658f005隔离checkout文件逐字相同；`inference.js`SHA256仍为此前8f088版本的`27b351cb6194e6f7fc8e52b380e80f8e8cfd0399b1be7f47b19540227b1b3ebf`。这只说明版本连续性，不作为新UI通过依据。
- 未实现也未批准grouped-MLE/GOF bootstrap校准、协方差模型、一般survey/sample-estimated SE或任意非整除系统抽样。
- 未证明PRNG对所有种子严格均匀；独立全枚举核查的是声明概率设计理论，实际样本检查的是合法性、参数一致及复现/状态边界。
- 无真人理解或课堂学习效果证据；物理投影、屏幕阅读器语音等仍待相应线程。

本轮授权范围内无剩余执行阻塞，无denied/pending/uncertain写入或外部发布操作。先前浏览器工具阻塞未被本轮绕过，Library按请求未调用。

## 证据与复跑

本地证据目录：`/workspace/statverse-phase5-review-evidence/`。保留真实事件脚本、输入/输出快照、独立oracle与精简结果；本报告全文可直接由父任务保存进项目docs。本地保存不等于Library交付，没有新Library ID。

```bash
node /workspace/statverse-phase5-review-evidence/phase5-ui-fixture.mjs
python /workspace/statverse-phase5-review-evidence/independent-oracle.py
```

fixture相对引用固定checkout；DOM运行时为linkedom0.18.12，`dom-runtime`指向前轮保留的本地依赖目录。移机复跑需恢复同版本运行时与所示目录或调整脚本import路径，产品本身无新依赖。

|文件|SHA256|
|---|---|
|dom-fixture.mjs|22091539a0aff30231c6c5868261bde29e62d6adb1d0830b222916b2c0856d12|
|phase5-ui-fixture.mjs|30240f2dfee29597048403fafc817665a3e7ead12115af0b34e40c5e85706339|
|independent-oracle.py|7cf6d7ba2c64bb6476d71f8e760cd7839bd18adb2dc3868a826998672fce2f94|
|ui-results.json|478f508aee942da73b087f2027bbc1a3c6c925a905ab39dd95a7d3f96de799fc|
|independent-oracle-results.json|9732368ce442ce343b21e73ef148893c99a8aaeae0eb0a9711de2820a68cece6|

---

Developer receipt note: parent transmitted this report in full on2026-10-25UTC. Upstream reported file15717bytes, SHA25677a4136fd01c399b5532118199ca77d2c986244b649461c103eb57cec21aa72d. This locally saved textual handoff is not asserted byte-identical to the reviewer's original file; the report's evidence and limitations are retained. New actual-browser review was still pending at receipt.

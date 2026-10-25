# STATVERSE 推断引擎独立数学审查

协调方转交的独立报告，目标提交840f850。此处保存报告正文，不把开发者后续运行计入原独立结果。

审查固定提交 `840f850357016ab42b4bd51d65de99c5c933ad15`，repo `yizi-wang/yizi-wang.github.io`，分支来源 `statverse-inference-20261025`，父提交65cf743。独立 detached checkout 在 `/workspace/statverse-inference-review-840f850`。diff 确认为合同、引擎、测试这3个新增文件。未修改 app、引擎或开发测试，未 push/deploy。

结论：确认 **1个P1、1个P2**，另有1处P3合同措辞澄清。当前 categorical 可用状态判断未通过：精确E=5被浮点舍入成略小于5，且转置会改变拒绝状态。其余已测离散尾、临界域、log tails、z/CI和χ²计算未发现P0/P1。本结论是有限数值审查，不是整个连续输入域的误差证明。

## 独立方法与实际覆盖

Python SciPy1.17.0、mpmath1.3.0（100位）、Python Fraction 精确有理数。向量由本轮脚本重新生成，随机seed918273645；没有从开发者276行冻结参考表抄输入。JS bridge只导入固定SHA引擎并调用其公开接口，参考值由Python独立生成。代码中约定的离散inclusive survival按SciPy `sf(k-1)`核验。

主要自动suite共 **14,280个引擎调用**，另有手工缺陷复现和4个最大差异向量的高精度复算：

- 新随机/边界sweep11,946次：Normal tails522、inverse518、Binomial tails1600/logPMF1600、Poisson tails1500/logPMF1500、χ² tails1600、critical regions1000、power1000、z/CI600、contingency256、GOF250。
- 输入/条件/最大维度206次，包含100×100 contingency、10001-category GOF/df10000，均与合同接受/拒绝一致。
- mpmath100位复核62次，包含n10000、lambda10000、k100000、df10000、Number.MIN_VALUE、underflow logs、中心和极端Normal quantile；另对上述sweep每个尾函数最大SciPy差异各复算1次。
- 精确有理Binomial/conditional z/退化Poisson/手工pooling与fittedParameters共2012次，0差异。
- 54次相邻浮点边界/观察值支持域/pooling检查，0差异。包括alpha和confidenceLevel两端的nextafter、lambda10000上一个/下一个浮点、df1/10000、χ² x1e15、total1e12。
- 开发者现有inference测试仅作为基线另跑：25/25 PASS。本轮没有把它们当成独立oracle，也没有声称重新跑完34项。

首次sweep的163个严格诊断flag不是163个缺陷：156个来自同一极小CI临界值问题，2个中心quantile，4个E5状态/计数，1个来自合同已说明的1-power取消误差。后续用高精度和合同逐项归并，不以原始flag数作为失败数。

## M1 P1 精确E5误判needs-pooling且破坏转置不变性

输入 `contingencyTest([[10,0],[67,77]])`，默认alpha.05。

独立精确计算：N154；row totals10/144；column totals77/77；E=[5,5;72,72]；χ²=385/36=10.6944444444444；df1；SciPy p=0.0010745773786670282；所有E≥5，应status ok、pValue为该近似值、reject true。

实际引擎：E=[4.999999999999999,4.999999999999999;72,72]；smallExpectedCount2；status needs-pooling；pValue null；reject null；diagnostic asymptoticPValue0.0010745773786670252。

转置成 `[[10,67],[0,77]]` 后，同一个统计问题得到E=[5,72;5,72]，status ok、pValue0.001074577378667026、reject true。

另一简洁向量 `[[5,5],[72,72]]` 精确χ²0/p1，实际同样needs-pooling；转置 `[[5,72],[5,72]]` 则ok/p1/reject false。

原因：`statverse-lab/src/inference.js:460` 用 `(r/total)*c`，`428–435` 直接用E<5控制pValue和reject。先除后乘在E=5处向下舍入。

建议：在当前counts≤1e12的域内，改用先乘再除 `(r*c)/total` 不会溢出；E=5时r*c=5N≤5e12还可精确表示，解决本组边界。若要将状态判定完全建立在整数边际上，可用BigInt比较 `r*c < 5*N`，并确保expected/minExpected与状态一致。不要全局放宽alpha比较来解决频数阈值问题。

回归：上面4张表均应保持转置不变；前两张应reject true，后两张reject false。加入 `[2,3,95]` 对expected相同的GOF仍needs-pooling；有意义合并成 `[5,95]` 后ok，防止修复误放行真正E<5。另保留100×100、N1e12边界。

## M2 P2 中心Normal逆函数及极小confidenceLevel精度损失

向量A：`normalInverseCDF(0.49999999999999994)`。

- 100位参考：-1.3914582123358834611169617039356e-16。
- 实际：-6.957291061505545e-17，绝对误差6.9573e-17，中心quantile相对误差50%。

向量B：`normalInverseCDF(0.5000000000000001)`。

- 100位参考：2.7829164246717669222339234078712e-16。
- 实际：2.0871873184516636e-16，绝对误差6.9573e-17，相对误差25%。

向量C：`zTestOneMean({mean:0,variance:1,n:1,confidenceLevel:1e-12})`。

- SE1，100位正确criticalValue=1.25331413731550022599953409546e-12。
- 实际criticalValue=1.25321683893969e-12，CI=[-1.25321683893969e-12,+1.25321683893969e-12]。
- 相对半宽误差7.7632872e-5；该实际z对应中央概率9.99922367128149855e-13，而请求的是浮点1e-12。confidenceLevel1e-8也观察到约5.58e-9的相对临界值误差。

原因：`146–160`在log-tail接近log(.5)的平台上二分；该位置一个ulp的log-tail变化已经占quantile的大部分。`378`又通过 `(1-confidenceLevel)/2` 先丢失极小中央概率的一部分精度。

建议：中心quantile使用以p-.5为变量的稳定近中心公式/逆erf展开；CI的小中央概率路径直接使用confidenceLevel求central critical value，避免先做1-confidenceLevel。或明确收窄可承诺的confidenceLevel域与中心quantile相对精度。

回归：A/B/C，confidenceLevel1e-8，以及常用.8/.95/.99和1-1e-12；同时保留p=Number.MIN_VALUE、1e-320、1e-100的极端逆函数验证。此项绝对误差很小，不是95%CI显著算错；已测常用CI未发现P0/P1。合同没有给quantile统一相对误差保证，因此不能把中心quantile的百分比直接等同于尾概率合同违约。

## M3 P3 退化模型的合同措辞应限定替代假设

合同说退化点质量包含“impossible observations with p-value0”，容易读成所有alternative。

例 `binomialTest({k:1,n:20,p:0,alternative:'less'})` 与 `poissonTest({k:1,lambda:0,alternative:'less'})` 实际pValue1；greater与two-sided为0。该实现符合既定inclusive-tail定义，不能为了迁就一句含混文字而把所有一尾p值强制改0。

建议仅改合同为：退化模型仍按所选尾约定；不可能观察值的two-sided p值为0，方向相反的一侧可为1。回归三个alternative及实际点k0；保留region membership与pValue约定一致。

## 未发现缺陷的重点

- Inclusive survival：按sf(k-1)比较；精确有理检查覆盖所有k的多组n/p，一尾与doubled-min-inclusive two-tail符合合同。没有误用probability ordering。
- Critical regions：1000组新向量和324组精确有理边界比较未出现边界差异；computed actualSize均≤alpha，最包含的边界与独立oracle一致。覆盖alpha1e-12、1-1e-12、两侧等分不转移剩余额度、n/lambda上限和退化模型。
- 退化n0、p0/1、lambda0及支持域外查询返回约定0/1；test观察值与query支持域区分正确。
- Underflow：Binomial(n10000,p.5,k0) logLower=-6931.471805599454，高精度误差4.52e-13；Poisson(lambda10000,k100000) logUpper=-140265.07934222242，高精度误差6.08e-11。概率舍入0时log仍有限。MIN_VALUE的χ²下尾也保留：例如df1的logLower≈-372.4458273133353；SciPy在该最小x处的cdf可先下溢为0，不能把engine非零直接判错。
- 对参考概率位于(1e-300,.5]的sweep，最大相对SciPy差异：Normal4.24e-13、Binomial1.46e-12、Poisson2.16e-13、χ²3.25e-12。各最大向量再用mpmath100位复算；例如χ²最大差异向量engine相对高精度误差约5.46e-12，仍小于1e-10。以上是样本测量，不是全域上界。
- z/CI：one/two mean SE、null difference、三种alternative、two-sided CI、known/estimated方法标记、estimated要求explicit largeSample和n≥2均一致。two-mean使用独立样本方差相加；未自动应用t或n30门槛。调用方仍必须负责独立/Normal/大样本假设。
- χ²：real df范围、gamma tail、df10000、GOF fittedParameters扣减、零边际与全零诊断、结构零拒绝、低E时p/reject为null、手工pooling后df变化均符合合同；M1除外。
- Power：1000组新向量总体一致。发现typeII≈1e-11时1-power取消造成约1e-5相对误差；合同已说明tiny typeII的表示限制与无logTypeII，本轮记为已知限制，不列新P1。

## 限制与后续

未穷举整个binary64域；没有形式化误差界或所有gamma非收敛路径证明；未做性能/浏览器/UI/打包/部署测试，没有重新验证Pearson课程映射。M1修复前categorical状态判断不应宣称独立验收通过。固定版本首轮其余覆盖没有发现P0/P1，不代表未测输入必然正确。

本轮是纯推断引擎数值审查。前轮浏览器0/8、0截图、BLOCKED记录保持不变；这些数字不能转成任何UI或学生测试通过。

脚本与数据位于独立环境 `/workspace/statverse-inference-review-evidence/`：bridge.mjs、oracle-review.py、boundary-review.py、high-precision-review.py、exact-and-conditional-review.py、adjacent-boundaries.py、check-maxima.py及对应JSON结果。父任务若不能读隔离环境，交接正文应直接包含本报告与M1/M2回归向量。

## 上游保存状态附记

- 上游完整报告：`STATVERSE-inference-independent-review-840f850.md`，9,382字节；SHA256 `562b1bd8b7574a523d891a1f4ab424d8496c50c6991acc8f62220b4b2d97c552`。此标识不是添加本地保存说明后文件的hash。
- 上游小型证据包：`STATVERSE-inference-evidence-840f850.zip`，43,210字节；SHA256 `fabbafdb389ea6bb6327b4d194d5f56ad3d476c918f73d25877a00de4d8b2491`。
- 包内21个载荷文件的校验由上游报告为通过，包含报告、可移植重算脚本、精简结果、固定版本源码和合同快照。
- Library保存状态：**BLOCKED，未创建文件，无Library ID**。原辅助流程两次在初始化处返回 `hosted apps tools/list request failed: network`；非审批拒绝，无不确定写入。未使用替代上传方式。
- 独立检出与本地证据包继续在审查者环境保留；产品工作区干净。上述原始历史状态保持；后续7e45fa8独立复核见单独文件。

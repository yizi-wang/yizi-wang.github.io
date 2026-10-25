# STATVERSE F 纯数学模块独立审查

协调方转交的独立报告。该模块在本阶段尚未集成到主开发分支；本地保存报告不构成UI或课程覆盖交付。

固定提交：`658f00548ecc807fe049e8a68ec17e3062e83c87`。仓库：`yizi-wang/yizi-wang.github.io`，来源分支：`statverse-inference-20261025`，直接父提交：`8f088e0d87e3907437ee6be5e58fd1dea13c2bae`。

独立detached checkout位于`/workspace/statverse-sampling-review-658f005`。diff确认为sampling-design.js、其开发测试和根接口合同三个新增文件。产品工作区干净；本轮未改产品、未push/deploy，未调用Library。

## 判定

**在合同限定的教学模型与本轮输入范围内，数学及条件审查通过；未发现需修复的P0/P1/P2。**

结论基于独立小总体全枚举、Fraction精确复算、种子/输入边界和变换检查，不基于实现者17项测试。没有真实学生参与，也没有浏览器/UI/课堂验收。

| 范围 | 结果 |
|---|---|
| SRS无放回、有限总体FPC及SE | PASS |
| 整数分层quota、总体权重、缺层状态 | PASS |
| 系统随机起点、固定排序影响及设计方差 | PASS |
| 便利quota机制、误差解释及非概率标记 | PASS |
| n=1、singleton、census、seed与输入不变 | PASS |
| 独立Normal线性组合及条件拒绝 | PASS |
| UI、学生理解、性能、打包、部署、全课程覆盖 | NOT TESTED |

## 工具和实际测试规模

Node24.19.0、Python3.12.14、SciPy1.17.0、mpmath1.3.0、NumPy2.3.5。主要oracle使用Python Fraction和itertools全枚举，参考值不是复制开发者测试中的冻结结果。

- 105个小总体，含100个新生成总体，seed658512007；对每个总体遍历所有n。
- 主suite5017次公开API调用，包含561个SRS理论、561个allocation、386个有完整代表性的分层设计、175个缺层设计、284个有效系统设计、277个不整除拒绝，以及700个Normal组合。
- 全枚举13,645个SRS子集、5,877个分层组合、868个系统起点，直接计算估计量的期望和方差。
- 检查1967个实际selector结果：原始记录/ID/frameIndex、无重复、样本均值、加权估计、误差、返回SE、quota数量和方法标记。
- 另17次关键教学例子的独立复算，包括虚构demo、方差分母及N10000近census。
- 105项种子、输入/范围、上限、census、冻结输入及Normal条件检查，全部通过。
- 7项仿射变换和accessibility独立性检查，全部通过。

最终主suite保存的是修正并完整重跑后的比较器结果，1967个样本的estimate/error/返回SE已补齐核验，0差异。理论全枚举不受此前比较器跳过含error字段字典的问题影响。未将重复重跑计入独立向量数量。

所测设计方差相对精确参考的最大差异约4.02e-16，SE约2.28e-16；这些是有限样本测量，不是全域误差上界。

## 发现一 SRS与有限总体SE定义正确

代码的SRS是部分Fisher–Yates，选择不同frame单位，不是有放回抽卡。实际返回1967个selector结果中的选中ID无重复；不同stratum的随机选择也没有跨组重复单位。

理论使用：

```text
Var(sample mean) = (N-n)/N * S²/n
S² = sum((x-μ)²)/(N-1)
```

这是已知完整虚构总体的设计方差，不是一份样本估出的SE。没有把varianceN与分母N-1的有限总体S²混用。

独立手算总体`[1,2,4,9]`：

- N=4，μ=4。
- varianceN=19/2，varianceNMinus1=38/3。
- n1的设计方差=19/2，等于总体单个值的方差。
- n2的6个子集均值为1.5、2.5、5、3、5.5、6.5，方差=19/6。
- census n4的设计方差/SE=0。

实现与上述值一致。singleton总体的varianceNMinus1返回null，而三种概率selector的census/单单位估计仍正确返回SE0，不会除以零。

最大总体N10000、值交替±1e6、n9999时，独立遗漏单位法给出方差`10^12/9999²`，实现一致。N10000、100个strata的分层census检查也通过。

严重性：无缺陷。集成时应保留“known finite-population design SE”的语义，不能把该SE标成从本次样本估计的标准误。

## 发现二 整数分层与总体权重正确

allocation按最大余数法分配，整数余数比较，平手依stratum在frame首次出现的顺序。quota之和为n、没有超过层容量；census quota等于各层N_h。n*N_h在明示范围内至多1e8，整数计算不会丢失分配余数。

独立构造：

```text
A: [0,2,4,6,8]，N_A=5
B: [30,40]，N_B=2
C: [100]，N_C=1
N=8，n=5，quota=[3,1,1]
```

全枚举20个分层组合：

- 总体均值及加权估计期望=95/4=23.75。
- 设计方差=25/12。
- 原始未加权样本均值的期望=147/5=29.4。

实现的估计量使用总体权重5/8、2/8、1/8，正确保留23.75的期望；没有因为整数取整而改用3/5、1/5、1/5。sampleMean仍明确保留原始样本均值，与estimate区分。

demo的n5也独立全枚举180个组合，quota2/2/1：加权期望275/6，方差1985/108；未加权均值期望50。n6的240个组合给出方差1355/108，均与实现一致。

平手检查：两个同为3人的层、n3，先出现的层得quota2、另一层1；改变frame顺序后，平手结果按合同改变。

缺层处理正确。demo n3为quota2/1/0，n1也有缺层：返回n个实际单位，但完整总体estimate/error/variance/SE均为null，designUnbiased为null，probabilitySample=false；randomized=true仅描述已覆盖层中的随机选择。没有填0、重归一化权重或编造缺层均值。

严重性：无缺陷。集成应同时保留sampleMean与加权estimate，以及缺层null；不能把raw mean或覆盖部分的重归一化均值当成完整总体估计。

## 发现三 系统随机起点没有被错误称为周期性必然有偏

实现仅接受N能被n整除的核心设计，k=N/n，均匀选择整数起点0至k-1。返回的全部起点、indices、概率及均值与独立枚举一致；每个总体单位在这些起点中出现一次，边际包含概率为n/N。

方差直接跨起点均值计算，没有套用IID或SRS的SE公式。277个不整除请求按合同拒绝，没有偷偷取整间隔。

demo N12/n6：

- periodic frame的两个起点均值为215/6、335/6；设计期望275/6，方差100。
- balanced frame是相同ID、值和accessibility的重新排序；两个起点均值都为275/6，方差0。

实现与参考在浮点容差内一致。periodic总体的单次样本可以偏离真值，但均匀随机起点设计仍无偏；排序改变的是方差，不能从本例推出周期性必然导致设计偏差。

严重性：无缺陷。当前合同的表述符合该数学模型，未把一个有较大误差的样本误称为有偏设计。

## 发现四 便利quota示例没有被包装成概率抽样或普遍偏差定理

该机制先使用相同整数quota，再在每层按accessibility从高到低选，平手按frame顺序。实现的实际选择与独立排序参考一致。

accessibility是排名分数，不是响应概率、抽中概率或资格阈值。仅反转accessibility时，三种概率selector的选中ID保持不变；便利selector随之改变。

demo n6的独立结果：

- 原ranking：理论加权估计215/6，已知总体误差-10。
- 反转ranking：理论加权估计335/6，误差+10。
- 所有目标值设为42：估计42，误差0。

实际结果与之在浮点容差内一致。便利quota返回randomized=false、probabilitySample=false、designUnbiased=null，且theory/设计SE为null。它没有把一次error当作设计bias，也没有声称所有quota方法必然有某个方向的偏差。census时估计等于总体均值、error0，但此方法的API仍不提供概率设计SE，符合合同。

严重性：无缺陷。上述误差变号/归零证据应与“这一个明确便利机制”一起呈现，不能改写成所有quota sampling的定理。

## 发现五 种子、边界与输入状态符合合同

- 三种随机selector对相同总体、frame、n和seed可重复；插入其他抽样调用不会改变原seed的输出，没有共享随机流状态。
- 普通字符串、短Unicode/emoji字符串、128字符ASCII seed检查通过；空字符串、数字seed、null及超长seed被拒绝。
- 非整数/超范围n、空或稀疏总体、缺字段、重复ID、非法value/accessibility、10001单位、101层均按合同拒绝。
- 无放回、n1、census、singleton、缺层和quota平手检查通过。
- 冻结输入可以使用；修改selected输出不会改变原总体或后续同seed结果。demo每次返回新记录，两个排序包含相同单位。
- 值变换`Y=200-3X`保持所选ID不变，估计及误差正确变换，设计方差乘9、SE乘3。

源码中的整数映射用rejection后modulo，partial Fisher–Yates结构符合理想均匀整数选择的无放回设计。没有穷举PRNG周期或种子空间；有限seed回放不是设计无偏性的证明。理论无偏结论来自小设计全枚举与理想随机选择模型，符合合同的教学伪随机范围。

## 发现六 独立Normal组合正确且限制明确

700个独立Fraction代数例子验证：

```text
mean = constant + Σ a_i μ_i
variance = Σ a_i² variance_i
```

负系数影响均值方向，方差仍按系数平方相加；零系数及零方差正确处理。手算例`2X-3Y+7`，X均值3/方差4、Y均值5/方差9，结果mean=-2、variance=97。零总方差返回point-mass及sd0。

explicit independent:true为必需；false、缺失或非boolean true均拒绝。重复变量ID拒绝并要求先合并系数，避免把X+X当两个独立变量。相同参数但不同ID允许作为不同独立变量。

负方差、非法数值、超100项、空/稀疏项、单项溢出和非零方差项下溢均按合同拒绝。100项组合检查通过；`a=1e200、variance=1e-300`的稳定缩放得到有限约1e100方差，未先计算a²造成不必要溢出。

这不是相关Normal输入或协方差矩阵接口，也不验证现实数据的独立/Normal假设。调用方必须确实声明这些模型条件，不能将结果用于未支持的不独立情形。

## 限制和交接

未发现需要修复的P0/P1/P2。未穷举所有总体、所有double或PRNG状态；没有对严重均值消减、近零或subnormal情形给出合同之外的统一相对误差保证。本轮极端数值只检查明示的溢出/下溢和数量边界，没有扩展成无界域审查。

没有重新核查Pearson课程映射的外部原文，没有证明每个补充设计公式均属考试强制内容。此模块本身没有抽样方法UI、估计SE、非响应模型、一般不等概率抽样或复杂survey inference，本轮没有把这些未实现范围判成已交付。

此前浏览器审查仍为0/8任务、0截图、BLOCKED。以上是独立数学及模拟数据审查，不是学生用户测试或课堂可执行性验证。这里的此前浏览器指原受阻审查记录，不覆盖后续其他独立Chromium审查。

完整脚本和最终结果保留于`/workspace/statverse-sampling-review-658f005-evidence/`：`enumeration-review.py`、`enumeration-results.json`、逐调用输入/输出、`boundary-seed-review.mjs`及结果、`teaching-examples-review.py`及结果、`metamorphic-review.mjs`及结果。未调用Library，没有新增Library ID。

可记录结论：固定658f005的F纯数学模块在本轮限定审查中通过；普通教学用例的抽样、总体权重、有限总体SE、误差/偏差区分及独立Normal代数正确。集成时需保留这些模型条件、null状态和标签；不能把数学通过改写为UI、课程全覆盖或真实学生验证通过。

---

上游报告：`SAMPLING-DESIGN-INDEPENDENT-REVIEW-658f005.md`，11,441字节。SHA256 `1085d990a2f847ee36f3d9863b2a30ad969c9a602f612ea8041bd769b7874732`，这是上游文件标识，不是带本地保存说明后的hash。

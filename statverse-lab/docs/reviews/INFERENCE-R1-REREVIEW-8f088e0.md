# STATVERSE 高计数 Contingency 修复独立复核

协调方转交的独立报告，保存正文如下。上游隔离路径不表示当前开发环境可读取；本地保存不构成开发者重跑全部独立脚本。

目标提交：`8f088e0d87e3907437ee6be5e58fd1dea13c2bae`。仓库：`yizi-wang/yizi-wang.github.io`，来源分支：`statverse-inference-20261025`，直接父提交：`7e45fa8cd997acb14c4b6e9363869299306e1e88`。

独立 detached checkout：`/workspace/statverse-inference-review-8f088e0`。diff仅包含推断引擎、合同和开发测试3个文件。本轮仅读取产品，重算脚本和结果写入独立证据目录；产品工作区干净，无修改、push或部署。没有调用Library。

## 判定

**R1高count近独立χ²回归已独立验证修复，通过本轮限定数学复核。原M1的E=5分类修复仍成立，常规关键推断回归未发现新数值或条件错误。**

此前CI临界值相邻double下降1ulp的P3仍作为已知浮点限制保留，没有被写成已修复，也没有再次做密集追查。已知tiny TypeII的1-power取消误差同样保留。结论不是全域无误差证明，更不是UI/课堂批准。

| 项目 | 结果 |
|---|---|
| R1具体高count表、转置、.05及1-1e-12 | PASS |
| E=5、E=5±1/N及真实低E分类 | PASS |
| 精确独立、接近独立、普通/不对称表的逐格贡献和统计量 | PASS |
| N=1e12、N=1e12-1接受；N=1e12+1拒绝 | PASS |
| 零边际、全零、非法计数、输入不变性 | PASS |
| 常规离散/Normal/z/CI/GOF与条件回归 | PASS，保留已知TypeII限制 |
| CI相邻double严格单调性P3 | 已知限制，本轮未密集复测 |
| 浏览器、UI、性能、课堂、打包、部署 | NOT TESTED |

## 独立方法与规模

实际工具版本：Node24.19.0、Python3.12.14、SciPy1.17.0、mpmath1.3.0、NumPy2.3.5。Fraction用于精确有理频数、贡献和χ²；关键p值另用mpmath100位计算。参考值由本轮独立脚本产生，没有使用开发者38/38作为独立通过证据。

本轮主要检查共 **17,795次目标SHA公开引擎调用**：

- 3498张contingency表对照Fraction精确参考，seed81088317。包括原2466次相邻域、R1表及转置的4种alpha组合、68次E5及±1/N阈值组合、72张精确独立整数外积表、288张保持边际的近独立扰动表、584张普通/不对称随机表，以及高维对角表、稀疏表和总数边界。
- 重跑既有独立推断suite14,280次，seed918273645。包括11,946次概率/尾/临界域/power/z/CI/categorical sweep，206次输入和维度边界，62次100位精度复核，2012次精确有理/条件检查，54次相邻参数边界。没有重跑16,171次CI密集网格。
- 新增17项总数域、非法计数、零边际及冻结输入检查，全部通过。

另将本次未应改变的API结果与父版逐项精确比较：11,690个结果无差异。这是回归证据；数值正确性由独立SciPy/Fraction/mpmath检查支持。

## R1具体失败向量复算

输入：

```js
contingencyTest(
  [[5,6],[454545454536,545454545443]],
  {alpha:1-1e-12}
)
```

N=999999999990；最小E为`5+1/999999999990`，故所有E≥5，status应为ok。

Fraction精确统计量：

```text
999999999990 / 2727272727161000000001415272727267021
```

100位参考：

```text
chiSquare = 3.666666666780211111113859892963024321162458114898874872215016048869771e-25
pValue    = 0.9999999999995168569053837759517000136984656906730467994644082513700019
```

修复版实际：

```text
statistic          = 3.666666666780211e-25
df                 = 1
pValue             = 0.9999999999995168
smallExpectedCount = 0
status             = ok
reject             = false
```

本表及转置`[[5,454545454536],[6,545454545443]]`，在alpha=.05和1-1e-12下均得到正确的不拒绝结果。父版7e45fa8在极端alpha下的错误reject已不再出现。

该例大单元格显示E可以舍入成O，但其精确残差仍非零。修复版返回的逐格贡献包含约`2.2e-36`和`1.8333333334e-36`的小贡献；没有错误地把它们改成0。整个3498表样本中，共80个单元格出现“显示E等于O但真实贡献非零”的情况，返回贡献均符合精确参考。

## BigInt实现核查

`statverse-lab/src/inference.js:491–508`现在执行：

- 将已验证的整数总数和边际转为BigInt。
- 以`r*c < 5*N`精确判断低E。
- 精确形成整数残差`D=O*N-r*c`。
- 用`Number(D*D)/Number(N*r*c)`计算贡献。
- 显示E由整数商与余数构造；不再用显示E重算贡献。

恒等式`(O-E)^2/E = D^2/(N*r*c)`成立。代码中BigInt的作用发生在相减之前，因而保留了高计数时的微小残差；并非在浮点误差发生后才转BigInt。

在合同N≤1e12且正边际的范围内，整数残差平方至多为1e48量级，分母至多1e36量级，转换到binary64不会溢出；正边际保证分母非零。非零整数残差的贡献也不会在这一范围接近binary64下溢。零总数/零边际在此步骤前返回诊断状态。

GOF仍使用原来的浮点expected贡献路径；`chiSquareResult`的新参数仅让contingency传入精确的低E计数。GOF的默认判断与原API结果保持一致，没有把调用方提供的非整数expected错误地转换成BigInt。

## E5及分类复核

原四张表均保持正确：

- `[[10,0],[67,77]]`及其转置：E=5边界可用，status ok，p≈0.001074577378667026，reject true。
- `[[5,5],[72,72]]`及其转置：χ²=0，p=1，status ok，reject false。

针对E=5±1/N，参考使用精确Fraction而非先把E舍入成double。3498张表的smallExpectedCount、ok/needs-pooling、低E时的null pValue/reject均符合参考。没有通过增加容差误放行真正E<5。

GOF `[2,3,95]`仍needs-pooling；有意义合并为`[5,95]`后为ok。fittedParameters、df扣减及零边际条件的既有独立回归均通过。

## 统计量与普通表精度

对3498张表，所测最大差异为：

- 统计量相对Fraction参考double：约3.41e-16。
- 单元格贡献相对Fraction参考double：约3.08e-16。
- 显示E相对正确舍入参考double：约2.22e-16，未超出检查中的1ulp允许差异。
- p值相对SciPy参考的最大绝对差异：约3.89e-15。

122张精确独立表均返回严格χ²=0、p=1。保持边际的近独立扰动没有被错误归零；大计数完全关联对角表也得到正确的大统计量。2至100行/列的所测表均未发现BigInt路径引入的新错误。

上述是实际样本的测量，不是所有浮点输入的统一误差界。

## 总数边界与条件

- `[[500000000000,0],[0,500000000000]]`：N=1e12，接受，χ²=N，p=0，reject true。
- `[[499999999999,0],[0,500000000000]]`：N=1e12-1，接受，χ²=N。
- `[[500000000000,0],[0,500000000001]]`：N=1e12+1，抛RangeError。
- 单格超过1e12，负数、分数、字符串、boolean、null、BigInt计数均按合同拒绝，未因新增BigInt操作而暗中强制转换。
- 全零表仍invalid-total；零行/列仍invalid-zero-margin，相关统计量、expected、贡献、p与reject均为null。
- 四类冻结输入检查通过，未修改输入；结果可以正常JSON序列化，没有泄露BigInt值。

## 常规关键推断回归

独立回归的inclusive discrete survival、doubled-min two-tail、临界域最包含边界、actualSize≤alpha、退化p0/p1/lambda0均未发现新差异。Normal尾/逆、one/two mean z、极小及常规CI、known/estimated条件、χ² gamma tail、GOF、输入域边界仍符合原检查。

14,280次suite保留的一条严格诊断仍是既有`typeII=1-power`取消误差，未改变，也不作为本次BigInt修复的新失败。其余原始问题与回归向量通过。

## 未测及保留事项

未穷举所有整数表或binary64域；没有形式化的统一舍入误差证明。本轮不测浏览器、UI、触摸、响应式、性能、课堂流程、打包或部署，没有重新审核课程映射。

CI相邻置信水平下降1ulp的P3已有合同记录，本轮未重新密集追查，也没有宣称修复。先前教学浏览器审查仍为0/8任务、0截图、BLOCKED；本轮不能用于宣称UI或真实学生测试通过。

没有Library调用或新Library ID。当前及此前独立环境、向量、报告继续保留。

证据目录：`/workspace/statverse-inference-review-8f088e0-evidence/`。包括`contingency-residual-review.py`、`residual-review-summary.json`、逐表原始结果、`domain-and-immutability.mjs`及结果、既有独立suite本轮副本和`unchanged-api-comparison.json`。

可记录的最终结论：R1高count残差修复已通过独立数值及条件复核；原M1–M3所测关键行为未回退；未发现新的P0/P1/P2。既有CI一ulp P3和tiny TypeII表示限制保留，UI/课堂等范围仍未验收。

---

上游本地报告：`INFERENCE-R1-REREVIEW-8f088e0.md`，8,642字节。SHA256：`972cedf5afcaea8c3eac2d93b3a07386d44ad64817d8fc12d4e37a98f52618d3`。这是上游文件标识，不是添加本地保存说明后的文件hash。

# STATVERSE D E 集成数学独立审查

协调方转交的完整独立审查内容。上游环境路径不表示本地共享；本地保存不构成开发者重跑所有独立脚本。

固定提交：`dbe9351ac863f572033f2de4b4c11bf3bcd8a2f7`，repo `yizi-wang/yizi-wang.github.io`，来源分支 `statverse-lab-20261025`。独立detached checkout为`/workspace/statverse-de-review-dbe9351`。产品工作区干净；未改产品、未push/deploy，未调用Library。

## 判定

**确认1项P1：拟合Binomial GOF后pooling，参数仍从原四类估计，却将合并后的统计量直接当成χ²(k′−2)。该参考分布不成立，并在普通5%水平产生明显超额拒绝。修复前，E的“拟合+pooling”推断不能验收通过。**

D的已测参数传递、尾概率/临界域/图形数据/模拟决策一致；E的contingency、固定模型GOF、未pool的拟合GOF及固定边际MC在已测范围通过。没有把pure inference已通过当作UI数学通过。

本轮运行的是实际模块的Node数学/DOM事件fixture，不是浏览器测试。未测原生交互、布局、截图、触摸、焦点和投影；浏览器另线程审。没有真实学生参与。

## 实际检查方式和规模

工具：Node24.19.0、Python3.12.14、SciPy1.17.0、NumPy2.3.5、mpmath1.3.0；Node DOM fixture使用linkedom0.18.12。

DOM fixture直接导入并执行`createDiscreteLab`和`createChiSquareLab`，设置控件值并触发其真实事件处理器。没有复制UI公式替代调用。fixture只补足select默认值和固定clientWidth等DOM语义，不是浏览器或布局引擎。

- D：31组实际控件配置，独立SciPy核查124个尾/size数值、924根PMF柱及critical标记、400个保存决策；31组config和13个Poisson omitted-tail显示检查通过。
- E：16个事件链快照，270项独立数值比较；fitted+pooled只核查算术映射，不批准其参考分布，P1单列。
- 分类模型桥接：2130次实际公开函数调用。其中630个固定GOF、30个未pool拟合GOF、6个非法输入/df请求，均按独立Fraction/SciPy参考得到预期结果；1464次固定边际离散路径枚举验证条件分布。
- 12项状态/重复流/种子/映射检查和9项补充边界/反向操作路径检查均通过。“通过”表示路径和预期状态可重复，不消除单列的P1。
- 独立校准：3组各200000次NumPy多项分布实验，另200000次对具体P1输入的参数bootstrap。生成器、χ²参考及组合概率oracle独立于产品代码。

主引擎`inference.js`与此前审查的8f088e0版本SHA256相同；本轮重点验证调用配置和方法条件，而非重新全面扫描double域。

## P1 拟合后pooling使用不适用的χ²参考

### 实际路径与结果

界面路径：

1. Question选择GOF。
2. GOF model选择Binomial(3,p)。
3. 四个原始counts输入`[7263,2491,238,8]`。
4. 勾选“Estimate Binomial p from these same counts”。
5. 选择合并`0 wins + 1 win`，勾选meaningful confirmation并Merge。

实际Node事件链及直接`evaluateGOF`均复现。先pool再勾选fit也会复现。

```text
N = 10000
pHat = 0.0997（原四类MLE）
grouped O = [9754,238,8]
grouped E = [9721.617839460001,268.47189081000005,9.91026973]
statistic = 3.9346774144922705
fittedParameters = 1
df = 1
status = ok
approximationAppropriate = true
pValue = 0.047300211454811183
reject = true at alpha=.05
```

全部E>5，故这不是低期望频数问题。原四类未pool时，代码返回χ²≈5.82167234、df2、p≈0.05443020、reject=false；pool后错误参考给出reject=true。单纯结论改变不是证明，下面的独立校准才是失败证据。

### 为什么不是数值舍入问题

当前实现从更细的原四类计数估计p，随后丢失0/1区别合并类别，却使用合并后减一个参数的标准χ²参考。经典分组GOF的参数估计条件不能这样替换：保留更细数据的估计通常会带来附加的加权χ²成分。外部条件核对见[Pollard1979，第318页](https://link.springer.com/content/pdf/10.1007/BF00534153.pdf)；具体Binomial推导和数值校准为本轮独立计算。

对固定合并`{0,1}|{2}|{3}`，原四类MLE继续使用时，本轮独立多项协方差/Fisher信息计算得到：

```text
limit statistic = Z1² + w Z2²
w = (1-p)²/(1+2p)
Z1,Z2独立标准Normal
```

p=.1时w=.675，不是单独χ²1。在χ²1的5%临界值3.84145882处，正确极限分布的尾概率约0.1015993。

### 独立真实null校准

固定同一合并方式，每次从真正Binomial(3,p)多项分布生成原四类计数，再重新估计p、合并并计算当前统计量。不是用产品的随机数或测试函数自证。

| true p | N | 重复数 | 所有replicate的E均≥5 | 名义α | 实际拒绝率 |
|---|---:|---:|---|---:|---:|
| .1 | 100000 | 200000 | 是，最小E≈92.71 | .05 | .102035 |
| .2 | 10000 | 200000 | 是，最小E≈68.55 | .05 | .076205 |
| .5 | 10000 | 200000 | 是，最小E≈1156.20 | .05 | .053100 |

第一行MCSE约0.000677，结果与上述0.1015993极限校准一致。误差不会靠增加N或满足E≥5而消失。所有counts均在当前UI每格≤1e6的范围内，不是极端double域例子。

对具体输入，在拟合null pHat=.0997下做200000次独立参数bootstrap，每次重拟合再pool，尾估计约0.0942495；同一估计方式的加权χ²极限近似约0.0963304。二者均高于.05。bootstrap是审查oracle，不是当前产品实现的GOF功能，也不是精确复合null p值。

如果改为按合并后的三个类别做MLE，再使用χ²1，另一个有效实现方案在此例给出pHat≈0.09349653、χ²≈0.00397634、p≈0.9497201。该值属于改变拟合方案后的结果，不能假称为当前pHat不变时的精确期望。

### 代码位置与严重性

- `categorical-model.js:91–96`：原四类counts拟合p，q=1。
- `categorical-model.js:98–109`：按groups聚合后，直接传q=1给goodnessOfFit，使用df=k′−2。
- `chi-square-lab.js:383–390`：UI真实传入fit和groups。
- `chi-square-lab.js:403–421`：E≥5即显示该χ² p/reject，并把原始拟合保持不变写成解释。

**P1。** 这是方法条件/参考分布错误，不是纯引擎尾概率错误。普通5%检验在合法null下明显超额拒绝，会教给学生错误的校准。

### 修复建议及回归

优先安全修复：对`fit=true`且存在实际pooling的组合，暂不提供标准χ² p/reject，明确说明当前拟合和分组组合尚未支持校准。不要只改q或硬换一个整数df，也不要用alpha容差修补。

后续可选：按当前合并类别的似然重新拟合p，再用相应df；或保留原四类估计但实现匹配该完整流程的bootstrap/其他正确校准。后一种是额外功能，不能把现有contingency固定边际MC拿来替代GOF校准。

回归应包括：

- 上述输入，两条顺序：fit→pool、pool→fit。
- 标准χ²未支持时应明确withhold，而非显示ok/reject。
- restore四类后，应恢复原四类标准拟合：df2、p≈.05443020。
- 固定p的Binomial、uniform、specified pooling仍正常；拟合后df≤0仍拒绝。
- 若实现新校准，再用固定合并下的独立null重复实验核查名义5%，不能只更新一个fixture的预期数。

## D 已测通过证据

`discrete-lab.js:106–120`将null传给测试；`198–211`将null和truth分别传给operating characteristics；`344–365`按truth生成，再对固定null临界域判定。

31组实际配置中，null、truth、k、alternative、alpha的实际state均与控件输入一致。改变truth保持null PMF与临界域；改变observed k保持固定null/临界域，只改变证据与标记。Poisson不读取隐藏的Binomial n，空的inactive n不会污染结果。

关键独立结果：

- Bin(20,.1)、upper、α.05：critical k≥5，actual size≈.0431744953；k4不拒绝，k5拒绝。
- 同null的two-sided、α.05：每尾.025，不转移未用额度；k5的p≈.0863489906，不拒绝。
- Poisson(4)、upper、α.05：critical k≥9；k8的inclusive tail≈.0511336158，不拒绝；k9约.0213634345，拒绝。
- 退化null不可能观察值的方向规则、Bernoulli p=.05与α=.05边界均一致；UI另有support警告，没有把反方向p1解释成模型能产生该值。

924根柱的data-probability与SciPy独立PMF一致，critical属性与独立临界域一致。13个Poisson窗口外null tail显示一致。k101及k100000保持真实计算值并说明outside window；k100000的正但机器下溢尾概率不会被直接显示为数学上的0。k100001及n201使结果/图形清空。

400个保存决策按独立临界域逐条复核。Binomial truth1/null.1生成全成功，保留全部n个outcomes；单抽和batch流一致。保存记录selector将对应k传给观察检验，seed reset复现记录。

TypeI只在truth=null时使用actual null size；H1方向内显示power/β；反方向truth明确不赋予当前H1的β解释。有限模拟拒绝率与理论概率分别标记，没有把模拟频率当精确概率。

实际柱图没有点击柱选择k的事件处理器。本轮验证的是已实现的observed输入和保存记录selector路径；没有宣称“点击图点”通过。该项可由交互审查按产品需求另行确认。

## E 其余映射与模型条件

16个UI事件快照和270项参考比较覆盖：strong/unequal/E5/sparse/age contingency、整列/整行pooling、uniform、specified、固定Binomial、未pool拟合Binomial、pool后df0及MC。原始counts、概率、参数、group partition、expected、contributions、df均一致；fitted+pooled的算术吻合不等于其χ²参考获准。

630个固定GOF组合以独立Fraction聚合O和模型概率，标准χ²结果一致。30个未pool拟合四类GOF正确扣q=1、df2。6个非法原始counts/probabilities/partition/df请求正确拒绝，不能通过pooling隐藏负数、分数或错误概率和。

- unequal表`[[5,5],[15,15]]`的E保持5/5与15/15，不会强制所有格相等。
- sparse表的E<5时，asymptotic p/reject为null并显示Withheld；合并完整相邻列同步聚合O和E。
- df=(r−1)(c−1)随整行/列group数量更新；GOF fixed-model df=k′−1。
- fitted df0请求确实清空result/metrics并提示错误；恢复类别保留原始counts。
- 概率错误或空值在原始层面被拒绝，没有自动归一化。
- 零总数/零边际保留诊断且不允许MC。

## 固定边际MC独立核查

`fixedMarginShuffle`置换column-label多重集并填入固定row positions。独立oracle使用组合概率：

```text
P(table | margins) = Π rowTotal! × Π colTotal! / (N! × Π cell!)
```

没有假设所有可行表等概率。

对2×2/N4、2×3/N6、3×2/N6，枚举实际函数全部24、720、720条离散选择路径；输出表的概率均与独立组合公式相同，双边际保持不变。

例如`[[2,0],[0,2]]`的三张可行表概率为1/6、2/3、1/6，χ²为4、0、4，观察χ²4的精确条件尾为1/3。2×3例子有7张表，中心表概率2/5，其余六张各1/10，确认实现不是“均匀抽表”。统计量另用Fraction复算。

实际UI事件fixture在seed=`MC-9351`下得到：

```text
R=201
b=71
MC p=(b+1)/(R+1)=72/202=36/101≈0.35643564
显示0.356436，近似MCSE≈0.0337，resolution=1/202
```

与有限MC约定一致，并没有把该值称为精确1/3。reset后记录复现；编辑原始counts会清除并取消旧cohort。N500允许，N501禁用且不追加记录。E<5的asymptotic结果仍withheld；conditional MC没有偷偷批准稀疏渐近检验。

比较按代码声明将χ²舍入10位小数后处理数值ties；本轮精确小例子的ties无误。未证明所有N≤500输入在该舍入规则下与无限精度排序完全相同。

## 未测范围与交接

本轮没有真实浏览器操作；Node DOM fixture不验证原生事件时序、焦点、控件可达性、图表遮挡、触摸、响应式、读屏或投影。未全面加载app导航流程做浏览器级验收；导航pause连接只做源码核查。没有性能、构建、部署或真实学生测试。

没有全面double扫描，没有证明PRNG在整个种子空间的理想随机性，也没有把有限seed频率作为条件分布证明。固定边际枚举验证的是均匀离散选择路径下的实际算法，实际seed回放另行核查。

先前教学浏览器0/8、0截图、BLOCKED记录不因本轮改变。其他线程的浏览器审查也不能替代本P1的统计校准修复。

证据目录：`/workspace/statverse-de-review-evidence/`。主要文件：`ui-math-fixture.mjs`、`ui-math-results.json`、`chi-ui-reference-review.py`、`independent-math-review.py`、`fitted-pooling-calibration.py`及结果、`edge-ui-review.mjs`、`D-config-and-omitted-tail-results.json`。所有产品文件保持未修改。

可记录结论：D已测数学桥接通过；E固定模型、contingency、未pool拟合与MC已测范围通过；E“拟合Binomial+pooling”存在P1，修复前不得作为数学验收全通过。

---

上游报告：`D-E-INTEGRATED-MATH-REVIEW-dbe9351.md`，12,928字节。SHA256 `204a1588471fe84da8fce0dcad93004f1ef6f3f37ea6ecfc5c19dab3106b8d51`。这是上游文件标识，不是添加本地保存说明后的hash。原始P1状态保留；当前开发修复须以新SHA独立回归后再闭环。

# STATVERSE 最终冻结候选：独立内容 delta 签注

受审应用SHA：`accc8f9435ebfb6109568831704c1d34a350d5f7`；仓库`yizi-wang/yizi-wang.github.io`，分支`statverse-lab-20261025`。2026-10-25 UTC，独立detached checkout，精确fetch/checkout，结束工作树干净。

**结论：内容与方法安全门槛的本轮delta复核通过，无新增P0/P1/P2；S6剩余的README状态/入口/历史路径和guide两处多余等号均闭环。仅余一个非阻断P3句号前空格。** 本轮不是新的全域数学、浏览器、PDF版式或真人课堂验收。

## 本轮直接核对

|项目|实际证据与结果|
|---|---|
|README旧pending/旧v3/历史路径|`:42/:50/:74/:88`已使用canonical guide.html/CLASSROOM-GUIDE.md、限定94d0b8d已通过的审查范围、指向独立archive；旧v2/v3首段均标SUPERSEDED并给当前入口。通过。|
|Guide等号/关键空格|`question=4`、`than=100`均从HTML和提交PDF文本清除；新模型概率/数值间隔已修，版本v4.1。Page1/Page3、25个加权有序对、同R比较及理论SE主任务仍保留。通过；P3见下。|
|师生答案隔离|源码8个teacher-only区块默认关闭，6道题/6条答案分区；实际提交PDF文本仍为教师6页/学生2页。学生保留题目与样本，未含Teacher answers、bias+1、9/16、.866025等教师解答。通过；未验页面渲染布局。|
|当前matrix/scope|scope.html、COVERAGE.md、CURRICULUM-STATUS.md/json与已审d9a1f12逐字相同，独立hash确认；上一轮23行+5项拓展一致性继续成立，本轮未重做全矩阵枚举。无旧fit+pool审批回流。|
|独立Normal|engine及normal-combination-lab.js逐字未变；实际模块事件核对默认mean11/variance97、取消independence或Normal声明均result=null。假设门槛保持。|

## fit+pool折叠未放开校准

用真实`createChiSquareLab`事件处理器执行原向量O=[7263,2491,238,8]，N10000、pHat=.0997，合并0+1。fit→pool、pool→fit及打开技术details均保留：

- 描述O=[9754,238,8]、χ²=3.9346774144922705；
- pValue/reject/asymptoticPValue/referenceDf均null；appropriate与referenceDistributionSupported均false；
- 首层仍有Withheld、Not calibrated、Calibration unsupported和恢复原类别/独立指定p的建议；
- 折叠内明确形式df1不是获批reference df，无grouped-MLE/bootstrap，固定边际MC不是GOF替代。

展开技术说明不改变result。恢复四类后df2、p=.05443019794654324、reject=false且说明收起；取消fit、指定p=.1后同三组df2、p=.1158149851387144正常。非法输入清空说明与结果；worked concealment不改变扣留。实际核对的是模块事件和DOM结构，不是原生浏览器details点击/布局。

代码位置：`chi-square-lab.js:425–458`。新的首层简写与折叠位置没有改变`categorical-model.js`的安全门槛；不能将本轮通过称为实现了有效fit+pool检验。

## F短加权式

实际模块取8个快照，其中7个加权状态用独立Python Fraction从保存样本原值复算。包括分层n5、缺层n3、便利given/reverse、census、常数总体与worked隐藏；SRS切换后短式清空。

n5实际短式：`Amber (6/12)×35 + Cobalt (4/12)×57.5 + Violet (2/12)×75 ≈ 49.1667`。独立精确估计295/6；使用总体权重而非配额2/5、2/5、1/5。短式明确显示均值可能舍入，最终estimate使用未舍入均值。缺层显示unavailable、不以0补位；worked隐藏仅改文字、不改records。通过。

总体权重、短式和表格语义已核对；手机横向滚动/粘性表头和物理触摸由浏览器线程验收，不由本次DOM结果替代。

## 独立哈希核对

直接计算候选文件哈希并与本地d9a1f12逐字比较，没有依赖开发者manifest的声明。14个src模块中11个未变；变化仅app.js装饰SVG标识、chi-square-lab.js说明层次、sampling-design-lab.js表格语义/短式。逐段diff未见新抽样或推断算法。

|核心文件|本轮SHA256，与已审版本相同|
|---|---|
|inference.js|27b351cb6194e6f7fc8e52b380e80f8e8cfd0399b1be7f47b19540227b1b3ebf|
|statistics.js|6092d6650165d4ea1cea496a4ded4dc4e723ec2c3a25c036f5c9a1f744d82968|
|sampling-design.js|201bfb236e1c4b0448b2160624ff9dfca6da746194c79a0568df05abded3d102|
|categorical-model.js|de5f20859d154f912e9b8aa5b4ea48477e5d970020d869456a1d2376eb080003|
|normal-combination-lab.js|d70dbea8753add72e1984e85a8a77737406c654268c762d59112363cae4c11ed|

本轮24条定向事件/内容/PDF文本断言及7个加权Fraction状态均通过。没有重扫double域或给旧评分加分。

## 唯一剩余P3与版本界限

`guide.html:14`仍有`not probability .`，教师PDF提取文本也保留句号前空格。建议排版清理为`not probability.`；不改变数学含义，也不阻断本轮内容核准。

本报告唯一受审应用版本为上述**accc8f9完整SHA**。父任务未来把审查报告、最终日志或交付ID保存进docs后产生的**docs-only记录SHA尚未生成/未提供，本轮未审**；应在最终附录分别列“应用SHA”和“记录SHA”，不能把后者冒称此次测试过的应用版本。

如果修正guide HTML或重导PDF，这会改变交付内容字节，不能仅称docs-only记录；应保留新的应用/材料hash，并针对该delta签注。若保留当前P3，可直接记为已知非阻断排版小问题，无需假称已修。

## 证据与限制

证据目录`/workspace/statverse-final-review-evidence/`：`final-delta-check.mjs`、`final-delta-results.json`、`weighted-fraction-check.py`、`weighted-fraction-results.json`、独立19文件hash比较及两PDF文本。提交PDF本轮实际hash：

- 教师：`175840e57a199f72f8af7bece91167702818b1e643158e65ebdbb981a6fac2b6`
- 学生：`98f5515c70cfd501e4245ef9872fddadb8d19c33c372177bfc64e3e8fef73e75`

无产品修改、重导PDF、push、部署或Library调用；无授权内执行阻塞或待定外部动作。浏览器/版式/真实打印、真人理解、物理投影及已知数值限制均未因本轮而升级为通过。

---

Developer receipt: full coordinator-transmitted report retained. Upstream6066bytes, SHA25636c2ab8f1e467c25101fa804f00e3ad6fda7dab9a59a8e0c10c87b23797e54ec. Local textual copy is not asserted byte-identical. Coordinator explicitly chose to retain the tiny punctuationP3 and keep application/PDF hashes frozen; no further layout/content edit is made for it.

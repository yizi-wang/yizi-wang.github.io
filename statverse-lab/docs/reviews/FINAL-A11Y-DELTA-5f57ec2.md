# STATVERSE 最终语义补丁定向验收

**定向验收通过，A11Y-01 P2可关闭。** 固定`5f57ec2f690d98c4f8124ce047d5f19518ab313c`，本轮未发现新增P0/P1/P2，未发现阻断此次补丁发布的问题。2026-10-25约22:14UTC由协调者传送完整结果；独立报告未修改产品、push、deploy或上传Library。

补丁相对直接父提交`b4192ac1bcf5001e73b3698557e8559d81944365`只有**4文件、5处属性变化**：四类交互SVG的img→group，以及Mean repeat-dots增加group。逐diff确认点控件、事件、名称、数学、样式、PDF均未变。相对旧验收版accc8f9另有交付文档/证据记录；运行时代码仍仅五处。

|检查|实际覆盖与结果|
|---|---|
|新dist|隔离checkout构建成功；14模块与源码字节一致，实际请求全200|
|定向axe|1440×900、390×844各六状态，加1920×1080Teacher隐藏六状态，**18状态**；目标nested-interactive、Mean aria-prohibited-attr均消失|
|原生AX tree|12桌面/手机状态group名称保留；所有图点仍为有名称button|
|真实键盘|两视口抽样ArrowLeft、相关ArrowRight、CI/F Enter通过；Tab可达|
|原生替代控件|**10项通过**：Sampling/CLT sample-picker、CI ci-case、F design-case；相关选第二点后输入x7.25，仅对应点更新|
|Teacher隐藏/恢复|六状态无可见answer-output，数据保留；隐藏AX与旧版仅正规化预期img/group后逐字符串一致|
|Field guide|两视口Enter打开、Escape关闭并返回触发按钮，Tab未进入背景控件|
|运行错误|pageerror0、console error0|

axe仅五项定向规则，**非全面WCAG重扫**。仍有九个重复incomplete，来自既存外层distribution-chart、design-frame泛型div命名提示；Mean目标在三个视口均0violation/0incomplete。P3保留，未扩大修改。

## 同seed对照

seed=`independent-final-role-20261025`：

- A：Three-moon、n4，连续五个完整样本IDs/估计值新旧一致，估计值2、2.5、3.5、2.5、2.5；两版各自reset重抽一致。
- F：stratified、n5，连续三个完整records新旧一致；两版reset重抽一致。

## 准确哈希

- 全部14个source模块集合SHA256：`8debb87343920e127f1e2f0cafcc86f597f41e1172e71c6def17ed11d76a469a`。
- statistics.js / inference.js / categorical-model.js / sampling-design.js四引擎新旧逐字节相同，集合SHA256：`c76e8e1eafc00b1c5871d00429aed047526fb25bd292c35dbf57ed8df94cd60a`。

集合算法：按basename排序，串接filename+NUL+原始bytes，计算SHA256。其余十个JS、静态页面、样式、启动器、构建脚本与旧验收版逐字节相同。开发端亦按相同算法独立核对两集合哈希相等。

## 限制和证据

本轮为补丁定向回归，未重做全部数学边界/所有动态状态，未运行真实读屏、语音软件或真人用户测试；390px仍为桌面headless touch模拟。广泛验收依据仍为accc8f9，结合本次五属性delta签注，不能扩写全面WCAG认证或新的学习成绩。

独立完整报告和脚本/JSON/diff/逐文件hash保留在其环境`/workspace/statverse-a11y-5f57ec2-review/`，原报告SHA256`7bef3694013b1586ca46c196953d97d0ef1ceb3078e8198b648b3d434a748b85`。这是协调者传送记录，不把路径当作本地共享目录。新旧checkout最终clean；服务已关闭；原PNG/ZIP未改。

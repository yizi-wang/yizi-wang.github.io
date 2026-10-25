# STATVERSE v4.1 最终PDF独立验收与双版本一致性

**结论：本次实际交付的Library教师版6页、学生版2页通过打印内容/版式验收。它们与冻结ZIP内canonical PDF字节不同，但在本次检查中全文、8页渲染像素与链接目标一致。无需因文件大小不同而重传；不得宣称byte-equal，也不推测字节变化原因。**

评估时间：2026-10-25 21:01–21:03 UTC。关联冻结候选：`accc8f9435ebfb6109568831704c1d34a350d5f7`。本报告直接核验以下实际字节，不仅依赖候选commit标签。

## 身份、大小、SHA256

|对象|Library ID或ZIP内路径|实际bytes|实际SHA256|
|---|---|---:|---|
|Library教师PDF|`libfile_91661210f8f0819189eb8167a12c8bc4`|161755|`e01db8c548054e66fd3166346bfbd166a9ac80ad6f20ac1672ad9b24fd02e371`|
|Library学生PDF|`libfile_aad2f305b7408191b45956638fbfb433`|66812|`4b27afca4413a1215b59f39a23f30534b10a48163c59250f480b644a977175e0`|
|冻结静态ZIP|`libfile_35baafa3db708191b28f2be9ccc61439`|288119|`64fdafe602ef40ebb977e34fb0433c8488958c6db41a113f8549e6d724bd50d4`|
|ZIP canonical教师PDF|`handouts/STATVERSE-18min-teacher-guide.pdf`|136793|`175840e57a199f72f8af7bece91167702818b1e643158e65ebdbb981a6fac2b6`|
|ZIP canonical学生PDF|`handouts/STATVERSE-student-transfer.pdf`|41861|`98f5515c70cfd501e4245ef9872fddadb8d19c33c372177bfc64e3e8fef73e75`|

ZIP与canonical两PDF哈希均符合协调者给定预期。Library PDF与canonical大小/hash不等，这一点已确认而非忽略。

## 实际获取与比较方法

1. 通过官方Library `prepare_materialize`一次正常取得两PDF和ZIP；本审查中三者均成功，未遇到此前其他环境的失败。按当前官方helper应用完整Library元数据。没有绕权限、私网登录或重传/替换文件。
2. 对Library两PDF分别Poppler渲染全部8页，最长边1500px，逐张打开查看字形、公式、边界、页脚、换页及答案分离。
3. 从已校验hash的ZIP解出canonical两PDF，用相同Poppler参数渲染全部8页。每页与对应Library页面转RGB后逐像素比较，`ImageChops.difference(...).getbbox()`均为null。
4. 两组对应PDF的`pdftotext -layout`完整输出逐字节相等；pypdf页数、表单、注释数及链接URI另核对。

**比较结果**：教师6/6页、学生2/2页均1061×1500像素，逐像素差0。教师两版本均6页、学生两版本均2页。教师注释数量依页为0/0/0/0/0/4，学生为0/0；对应链接URI全部相同。两Library PDF都无表单、无JavaScript、无加密，A4(595.92×842.88pt)，PDF1.4。

这证明本工具与渲染参数下的**可见打印内容、提取全文和链接目标一致**；不等于PDF底层结构逐项相等或所有第三方渲染器绝对同样。没有对字节差异原因作猜测。

机器可读比较结果：`/workspace/shared/statverse-review/PDF-V41-CANONICAL-COMPARISON.json`。
本地全部文件/16张渲染/文本：`/workspace/scratch/2bb7ef4e55c7/final-print-review/`。

## 旧问题闭环

|旧问题|实际v4.1结果|判定|
|---|---|---|
|教师p5 `question=4`|原图显示`question 4`，全文搜索旧串不存在|已修复|
|教师p5 /学生p1 `rather than=100`|均显示`1000 rather than 100 times`；旧串不存在|已修复|
|无页码|教师每页`STATVERSE · Teacher · i / 6`；学生每页`STATVERSE · Student · i / 2`，位置完整无裁切|已修复|
|英文数字粘连|returns1/or5/probability.75/All25/has100%/guarantee95%均不再出现；对应原图间距可读|主要问题已修复|
|可选计算留白偏少|模型说明新增`Use extra paper for optional calculations.`；仍为两页学生卷|已合理处理|

教师p3有一处`not probability .`句号前空格，属极轻微P3文字细节，不改变内容/阅读或阻断交付；无需为此单独重新发布全部已验收PDF。仍不应把“可交付”表述为所有排版字符绝对零瑕疵。

## 8页逐页最终检查

- **教师1**：标题、中文副句、操作控件名、概率表、种子/准备答案块完整；页脚1/6未碰正文。
- **教师2**：0–5分钟流程、三对象语义链、X̄/Xᵢ/μ字形清楚；答案块不跨页；页脚2/6完整。
- **教师3**：追点与重复抽样流程完整；柱/独立点条带说明正确，R2+200=202保留；页脚3/6完整。
- **教师4**：n2枚举与n3→12 SE比较完整；[2,2]与[40,40]概率、加权贡献未变；无裁切。
- **教师5**：退出检查与6道迁移题整页完整；两处等号已修；额外纸提示未挤出题目；页脚5/6完整。
- **教师6**：六题答案、来源/局限、v4.1版本说明清楚；数学未改变；页脚6/6独立可见。
- **学生1**：标题、新模型、Q1–3及手写留白完整；无教师答案；页脚Student1/2。
- **学生2**：Q4–6及留白完整；版本说明不与页脚重叠；页脚Student2/2。

未见方框缺字、公式截断、重叠、意外空白页或题干跨页断裂。实际打印机、后排投影、PDF屏幕阅读器语音仍未测试；PDF为untagged，不能据此宣称无障碍认证。

## 师生分离与数学保真

学生PDF仅含题设、6题及版本/页脚；没有教师准备答案或答案页。全文搜索`Teacher answers`、`Preparation checks`、`Weighted exact expectation`、`.866025`、`1.732051`、`9/16`、`mean of these two estimates`均不含；两页注释均0、无表单。可见[1,1,5,1]是题设，不是教师答案误泄。

数学及18分钟路线与上一轮已核验内容一致：Auroraμ5.3、σ²38.67；seed首样本[8,40,2]均值50/3，次均值16/3，两次平均11；stage3设置/reset→stage2→stage3手算→stage4追点；25个非等概率n2样本；n3→12使SE减半；新迁移模型μ2、variance3、无偏/偏差+1与SE答案正确；CI固定参数/随机端点及有限覆盖率说明未变。打印v4.1的修改没有变更题目数学模型或偷偷混入新计算。

这不是实测18分钟课堂完成率、真实学生学习效果或私有线上页面可达性验收。

## 交付建议

两Library PDF可以按“教师版（含答案）”“学生版（无答案）”正常交付；ZIP内canonical可作代码/离线包附件。manifest应同时保留以上两组hash/size，并写：**“Library下载PDF与ZIP内PDF字节不同；完整提取文本及全部8页同参数渲染逐像素一致，链接目标一致。”**

本报告只覆盖列出的确切hash。若再改PDF，请重新核对；不需要在没有新缺陷的情况下重传或替换已验收Library文件。

---

Developer receipt: coordinator supplied the full independent report above. The independent consumer's successful official materialization and exact stored hashes resolve the delivery-level verification gate; the developer environment's earlier failed readback is retained historically, not retried. The known tiny punctuationP3 is intentionally retained under the frozen application/material hashes.

# STATVERSE 冻结候选独立终验

固定版本 **accc8f9435ebfb6109568831704c1d34a350d5f7**，`yizi-wang/yizi-wang.github.io/statverse-lab/`。2026-10-25 UTC。独立隔离checkout、独立构建和实际Chromium；未使用开发者的自测/evidence作为通过依据，未混入5a8ac57。

**本轮覆盖内未发现新增数学/教学P0或P1。两项GOF P1安全门槛仍通过；S5-UI-01 Teacher方法名10px问题已实测修复为18px。离线启动、无外部资产请求、关键全局状态、手机和原生200%缩放检查通过。R5000/n60有可测长任务，但暂停/导航取消/重置有效，不能据此声称真手机性能通过。** PDF字节/版式由另一reviewer负责，本轮未重复批准PDF。

## 1. 固定代码与引擎哈希

自己的detached浅checkout：`/workspace/statverse-final-accc8f9-review/checkout`。按完整SHA fetch；只读此目录及自己的上一轮审查快照，没有读取移动开发工作树。已读AGENTS、站点维护规则；数学要求文档与上一审查版逐字节相同。

与94d0b8d对比，数学核心 `statistics.js`、`inference.js`、`sampling-design.js`、`categorical-model.js`、相关临界表均SHA256相等；14个JS中仅app/chi-square-lab/sampling-design-lab三项展示代码变化。完整旧/新哈希在`source-delta-hashes.json`。

实际`npm run build`通过。14个模块和index/style/guide/scope/reading.css/start.py/favicon均逐字节核对源码与dist，浏览器实际加载14个JS均200。源码存在和构建成功没有替代实际模块加载检查。tracked git status/diff干净；没有产品编辑、提交、push、部署或外网权限扩张。

## 2. 既有问题闭环与最终delta

| 问题/改动 | 操作、expected与actual | 结果 |
|---|---|---|
| S4-01 换GOF H₀保留O | 编辑O=[17,9,10,13]、N49，uniform↔specified；保持O，E=[4.9,9.8,14.7,19.6]、minE4.9阻断。语义数据集往返、编辑概率、空O仍保留；只有明确Load example替换。 | PASS |
| 原四类拟合后pool的未标定推断 | fit→pool、pool→fit都p/reject/referenceDf=null；restore或外部指定p恢复支持路线。首层保留Not calibrated/Withheld，advanced说明初始关闭；Space展开可读原因，Teacher隐藏后可访问树不泄漏。 | PASS |
| S5-UI-01 / P2 Teacher方法名称10px | 1920×1080，Teacher→F→Compare designs，四个按钮computed font均18px、line-height27px。 | **关闭** |
| F手机层名sticky | n5分层，真实touch start/move/end横滑，三个层名仍固定在容器左侧；原ID/样本不变。 | PASS |
| F手机短加权式 | 显示Amber(6/12)、Cobalt(4/12)、Violet(2/12)，结果42.9167；指出显示均值可四舍五入、内部用未舍入值。缺层显示unavailable；隐藏后公式不在可访问树泄漏。 | PASS |
| 全局Field guide | 卡片模型明确IID/有放回；有限框明确distinct units/无放回、不假设IID；SE定义包含design/rule/n且不由模拟R决定。 | PASS |
| 装饰SVG id | n60时65个gradient id全部唯一、fill引用均可解析；开启动画的flight克隆也唯一且aria-hidden/inert；replay不消耗新抽样。reduce-motion无flight。 | PASS |

修复代码证据：app.js的artSerial及flight引用重命名；sampling-design-lab.js的scope=row、人口计数分数短式；style.css的Teacher18px/sticky；chi-square-lab.js的calibration disclosure。数学P1 guard仍来自哈希不变的categorical-model.js，不因折叠说明而放开。

主要独立记录：`final-delta-results.json`（6组PASS）、`context-and-phone-teacher-results.json`、`focus-zoom-flagship-results.json`。产品实际修改为0；本报告是复核，不是开发者修复记录。

## 3. 离线运行与打包：实际操作证据

执行本SHA的`package-delivery.py`到自己的输出目录；没有复用开发者预制ZIP作为测试对象。生成standalone static ZIP：`STATVERSE-independent-final-accc8f9-static.zip`，288119bytes，SHA256 `7907a922094db382fc2a6851a67665bef779e4b3711e79b671b18057a781bf80`。

- ZIP完整性通过，COMMIT.txt精确为本SHA；27条manifest哈希逐一验证，含manifest共28项。
- 实际解压到`unzipped-static/`，运行自带`python3 start.py --port4194 --no-browser`，与独立dist的4193服务分别测试。只绑定127.0.0.1。
- 在浏览器context启用拦截：一切非localhost/loopback HTTP(S)请求均abort。两个服务上的app、guide.html、scope.html均加载并操作成功；favicon.svg实际fetch200、SVG MIME。**记录到的外部请求尝试0、失败请求0、console error0、pageErrors0。** 此处是浏览器请求级拦截，不冒称整台机器物理断网。
- 字体没有外部@import/@font-face依赖；本地system fallback正常。上一轮Google Fonts失败和favicon404均未复现。
- 阅读页Teacher notes/answers初始关闭，显式开/关有效；320/390手机页面无整页横向溢出。未点击官方Pearson外链，也没有要求它们离线可用。
- launcher非法port0正确拒绝；已有4194端口时清楚报告占用并给替代port提示。没有无声启动到公网或覆盖旧服务。

证据：`final-delta-results.json`、`reading-mobile-results.json`、`launcher-validation.json`、实际生成并解压的static ZIP。两份PDF只按包manifest核对字节，未进行PDF内容/版式批准。

## 4. A–F关键全局与教学路线

实际九工作区：sampling、clt、coverage、correlation、mean、discrete、chisquare、design、normal。

- desktop1440×900/mobile390×844共18个首屏/任务流程；Teacher1920×1080九工作区；手机Teacher另循环九工作区：导航可达、触摸动作可用、无整页横向溢出。
- 作答后隐藏、隐藏时再作答、可访问树、computed geometry和`.answer-output`逐模块检查；模型、原始数据和seed不因隐藏变动。没有把原始可计算观察值误当worked答案泄漏。
- 空/非法输入移除旧结果且可恢复；n1 S²和exact旧视图仍正确禁用/隐藏。卡值8/40/2未裁切；Teacher sample-stage trace先揭示distribution并保留samples/selected/seed。
- C ties/ranks键盘编辑、空值拒绝、改数据取消permutation；Mean independence/大样本确认、n30不自动放行；D/E输入恢复和活动批次取消仍通过。
- D/E暂停→单步→恢复201与reset后同seed逐项相等；Teacher往返不改MC数据。A在明确尚有remaining的暂停下，最终1002条与reset后相同动作逐项相等。
- A/C/Mean/D/E/F的导航取消活动任务仍有效。A/B按现有可见提示开始新cohort，不宣称跨不同实验保留同一批样本。

另实际排演guide的Aurora Teacher路线：n3、aurora-2026，先隐藏worked再抽；原始[8,40,2]，首估计50/3，第二估计16/3；两次平均11而μ仍5.3。+200得到R202。改n2清历史，exact Page1读到[2,2]、p.2025、p×mean .405；Page3读到[40,40]、p.0004、贡献.016。不是只看手册文本或开发者截图。该排演是模型脚本，不是真人，也不是实测18分钟授课。

原始主记录与针对性复查分开保留：`global-classroom-results.json`、`global-a-recheck-results.json`；汇总在`global-classroom-final-summary.json`。D/E流、卡值/追点、stale exact均有各自当前SHA结果。

## 5. 性能与暂停延迟：只对实际测得环境负责

环境：Linux共享容器，Chromium151.0.7922.173，Node24.19，headless desktop1440×900、DPR1、无CPU throttling。硬件并发/UA等原始值见performance JSON。**不是实体手机或低端投影电脑性能测试。**

实际通过原生UI填充n60的R5000：5000个saved dots、12156 DOM nodes；容量按钮禁用、remaining0，未产生R5001。

| 动作/测量 | 实际结果 |
|---|---|
| near-cap pause，定位器点击 | 从R4401开始动作、停在4591，remaining409；约1592.6ms，含自动滚动/actionability/驱动等待；之后200ms不再推进。 |
| R5000 reset | 约51.1ms，R0/remaining0。 |
| near-cap运行中导航取消 | 约1210.9ms，R4401→4581后停止，remaining0；后续不推进。返回A干净cohort约128.1ms。 |
| 为分离自动化等待的原生指针复测 | 预先滚动并hit-test Pause按钮，原生mouse click至停止约105.2ms；Event Timing记录pause click输入等待约55.1ms、交互duration104ms。 |
| 50ms定时器超期 | p95≈245.5ms，max≈571.3ms；long-task duration p95≈190ms、max≈453ms。 |

四个+1000批次到R4001的两次准备分别约45.87s和34.91s。高R渲染确有长任务，不应宣传流畅60fps或真手机性能；另一方面，定位器的1.59s不能直接写成真实按钮handler阻塞1.59s。未见批次停不住、状态损坏或重置失败。

证据：`performance-cap-results.json`、`native-input-latency-results.json`。没有注入5000条假数据来跳过实际抽样/DOM工作。

## 6. 键盘、缩放与窄屏

- 键盘第一Tab到skip链接，Enter将焦点送main；Field guide Escape关闭并返回help。当前工作区有aria-current=page。
- 原生dialog Tab循环偶尔经过BODY，再回dialog；实测没有聚焦背景应用控件，Escape仍正常返回invoker。初版“每次Tab必须是dialog后代”的harness假设过严，原始序列保留，不将浏览器的BODY环绕误报产品失败；也不声称做过屏幕阅读器语音测试。
- 320px触摸窄屏九工作区关键动作、720 CSS px重排等效检查均通过。
- **原生200%缩放已确认**：独立临时Chromium profile中设置正确的partition默认zoom dictionary；实际innerWidth720、DPR2、visualViewport.scale1，外窗宽1440。它不是CSS zoom或pinch；九工作区动作成功、doc宽720。guide/scope在此缩放下也无整页横溢，notes按钮可操作。
- 初次scalar profile pref未应用；一次无权限reviewer extension尝试没有serviceworker，未采用该路线、没有加网络权限。最终成功数据在`native-zoom-dictionary-results.json`，这些setup尝试不是应用缺陷。

## 7. 工件与复跑门槛

三张独立最终A截图，原始viewport PNG，已经人工查看，数据均来自本固定dist：

1. `STATVERSE-final-accc8f9-A-desktop-1440x900.png`：Aurora n3、R202，回看首样本[8,40,2]；参数/规则/估计、频率柱与样本strip分开。
2. `STATVERSE-final-accc8f9-A-mobile-390x844.png`：实际首样本工作视图，n3/R1、卡值和估计可读；不是假称全部页面在一屏。
3. `STATVERSE-final-accc8f9-A-Teacher-1920x1080.png`：distribution stage、R202，回看同一首样本。

这三张独立图片和完整证据ZIP已组成唯一有序Library批次。**Library保存失败：官方批量helper在只读tools/list发现阶段报网络错误（exit1），尚未调用prepare_uploads/finalize_uploads，未生成Library IDs。** 首次失败后，父任务明确授权对原同一四文件批次、原官方helper正常重试一次；21:38 UTC重试仍在只读tools/list阶段报同一网络错误，prepare/finalize仍未执行，随后停止。合计两次启动、一次授权重试；没有缩小批次、改用直传、修改helper或扩大权限。三张PNG与ZIP仍完整保存在本地；`library-save-status.json`记录四个目标、实际错误及未执行状态。需要官方传输通道恢复后再处理同一批次，不能把本地文件描述为已入库。

优先回归脚本：final-delta-review（两P1/18px/sticky/离线）；global-classroom-review（可用REVIEW_ONLY针对性重跑A）；context-and-phone-teacher；de-stream-review；focus-zoom-and-flagships；native-zoom-dictionary；performance-cap-review；native-input-latency；guide-route-rehearsal。性能脚本应单独跑，避免把其他压力进程混成性能结论。

审查者harness修正如实保留：A初版+50可能在Pause实际到达前已结束，下次Run自然是新批次，不能拿它与仅一个batch相比；已改+1000且先断言remaining>0，逐项相等。modal的BODY wrap假设及zoom setup也分开记录。没有通过改应用、放宽数学expected或删除失败证据来制造PASS。

## 8. 限制

未做实体手机/OS软键盘、屏幕阅读器语音、真实投影后排、真人学生、其他浏览器、全域极端double或完整长期随机化校准。本次按要求不重扫哈希未变核心的全部数学域，也不批准完整S1–S3考纲。PDF最终字节和版式依父任务另一独立reviewer结论。

在上述界限内，候选的关键数学/教学状态和运行交付未出现新的阻断问题。高R性能数据和原生focus wrap均有明确记录，供最终课堂环境判断，而不是被“全通过”字样掩盖。

---

## 开发端收到的独立交付身份附记

本报告全文由协调者在2026-10-25约21:42UTC传送后落盘；没有把独立环境路径当作共享目录，也没有在开发端冒称读到这些原始PNG/ZIP。以下为协调者传送的最终本地身份，均**未上传Library**：

|工件|尺寸|bytes|SHA256|
|---|---|---:|---|
|Desktop PNG|1440×900|179163|dc919e15fa0f1d19174255cc68171c4a75c091c3473755a5a42a450ae6fd941d|
|Mobile PNG|390×844|60682|443836a5b5982ab1675db2d0c7fbef4a0a4fcb4c921daa745fc8be6a70c818a1|
|Teacher PNG|1920×1080|178661|0fb693860019d4291628df571bfa2439ae0a1d90796091d882b1c74580da6f4c|
|完整独立证据ZIP|—|7285969|bc29c1ef116ed10a5ba6a6be29337dd0907caddf3f64961990952d63c16fc8ad|

审查者重建的static ZIP与开发端ZIP包装字节不同；核查的是固定COMMIT及内部27个manifest内容一致，不声称两个ZIP整体字节相同。最终可以交付已成功保存的开发者截图合集`libfile_1546b99f0f08819196c5eacbf482a4a8`，明确其开发者来源；不将其冒充上述独立61PNG。

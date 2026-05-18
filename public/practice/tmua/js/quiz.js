class TMUAQuiz {
    constructor() {
        this.currentIndex = 0;
        this.selectedOption = null;
        this.progress = {
            completed: [],
            correct: [],
            wrong: []
        };
        this.filter = 'all';
        this.filteredQuestions = [];
        this.selectedYear = 'all';
        this.selectedPaper = 'all';
        this.currentMode = 'practice';
        this.mockSession = {
            active: false,
            durationSeconds: 75 * 60,
            remainingSeconds: 75 * 60,
            startedAt: null,
            timerId: null,
            paperLabel: ''
        };
        this.currentAnswers = {};
        this.sessionProgress = {
            completed: [],
            correct: [],
            wrong: []
        };
        // 模拟考试选卷状态
        this.mockSelectedYear = null;
        this.mockSelectedPaper = null;
        // 回顾模式状态
        this.reviewMode = false;
        this.reviewIndex = 0;
        // 答错时延迟揭示正确答案：等打开解析面板时再显示
        this.pendingRevealCorrect = null;

        this.init();
    }

    /**
     * Parse URL parameters and auto-navigate. Supports:
     *   ?id=2019-P1-Q3  → jump to specific question
     *   ?topic=Algebra   → filter by topic
     *   ?year=2019&paper=1 → filter by year/paper
     */
    handleUrlParams() {
        const params = new URLSearchParams(window.location.search);
        if (!params.toString()) return false;

        const targetId = params.get('id');
        const topic = params.get('topic');
        const year = params.get('year');
        const paper = params.get('paper');

        if (targetId) {
            // Direct question ID: find it, set year/paper, jump to it
            const q = questions.find(q => q.id === targetId);
            if (q) {
                this.selectedYear = String(q.year);
                this.selectedPaper = String(q.paper);
                document.getElementById('yearSelect').value = this.selectedYear;
                document.getElementById('paperSelect').value = this.selectedPaper;
                this.showPracticeView();
                this.applyYearPaperFilter();
                this.updateMockUI();
                // Find the question in the filtered list
                const idx = this.filteredQuestions.findIndex(q => q.id === targetId);
                if (idx >= 0) {
                    this.currentIndex = idx;
                    this.showQuestion();
                    return true;
                }
            }
            return false;
        }

        if (year || paper || topic) {
            if (year) {
                this.selectedYear = year;
                document.getElementById('yearSelect').value = year;
            }
            if (paper) {
                this.selectedPaper = paper;
                document.getElementById('paperSelect').value = paper;
            }
            if (topic) {
                this.filter = 'topic';
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === 'topic');
                });
                document.getElementById('topicSelect').classList.remove('hidden');
                document.getElementById('topicSelect').value = topic;
            }
            this.showPracticeView();
            // Use applyFilter with explicit topic value for reliable filtering
            this.applyFilter(topic || null);
            this.updateMockUI();
            return true;
        }

        return false;
    }

    init() {
        if (typeof window.QUESTIONS !== 'undefined') {
            questions = window.QUESTIONS;
            this.filteredQuestions = questions;
            this.loadProgress();
            this.setupEventListeners();
            this.applyDarkMode();
            this.updateStats();
            this.updateWelcomeProgress();
            if (!this.handleUrlParams()) {
                this.showWelcomeView();
            }
        } else {
            document.getElementById('questionText').textContent = 
                '数据加载失败。请确保questions_data.js文件存在。';
        }
    }
    
    loadProgress() {
        const saved = localStorage.getItem('tmua_progress');
        if (saved) {
            this.progress = JSON.parse(saved);
        }
    }
    
    saveProgress() {
        localStorage.setItem('tmua_progress', JSON.stringify(this.progress));
    }
    
    setupEventListeners() {
        // 年份选择
        document.getElementById('yearSelect').addEventListener('change', (e) => {
            this.selectedYear = e.target.value;
            this.applyYearPaperFilter();
        });
        
        // Paper选择
        document.getElementById('paperSelect').addEventListener('change', (e) => {
            this.selectedPaper = e.target.value;
            this.applyYearPaperFilter();
        });
        
        // 筛选按钮
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.filter = btn.dataset.filter;
                
                const topicSelect = document.getElementById('topicSelect');
                if (this.filter === 'topic') {
                    topicSelect.classList.remove('hidden');
                } else {
                    topicSelect.classList.add('hidden');
                }
                
                this.applyFilter();
            });
        });
        
        // 知识点选择
        const topicSelect = document.getElementById('topicSelect');
        if (questions.length > 0) {
            const topics = [...new Set(questions.map(q => q.topic))];
            topics.forEach(topic => {
                const option = document.createElement('option');
                option.value = topic;
                option.textContent = topic;
                topicSelect.appendChild(option);
            });
        }
        
        topicSelect.addEventListener('change', (e) => {
            this.applyFilter(e.target.value);
        });
        
        // 提交答案
        document.getElementById('submitBtn').addEventListener('click', () => {
            this.submitAnswer();
        });
        
        // 下一题
        document.getElementById('skipBtn').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        // 查看解析（控制 <details> 的 open 属性）
        document.getElementById('analysisBtn').addEventListener('click', () => {
            const analysisArea = document.getElementById('analysisArea');
            analysisArea.open = !analysisArea.open;
        });

        // 解析面板打开时揭示正确答案
        document.getElementById('analysisArea').addEventListener('toggle', () => {
            const analysisArea = document.getElementById('analysisArea');
            if (analysisArea.open && this.pendingRevealCorrect) {
                this.revealCorrectAnswer(this.pendingRevealCorrect);
                this.pendingRevealCorrect = null;
            }
        });
        
        // 上一题
        document.getElementById('prevBtn').addEventListener('click', () => {
            this.prevQuestion();
        });
        
        // 下一题
        document.getElementById('nextBtn').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        // 重新开始
        document.getElementById('restartBtn').addEventListener('click', () => {
            this.restart();
        });

        document.getElementById('startMockBtn').addEventListener('click', () => {
            this.startMockMode();
        });

        document.getElementById('startShuffleBtn').addEventListener('click', () => {
            this.startShuffleMode();
        });

        document.getElementById('submitMockBtn').addEventListener('click', () => {
            this.finishMockMode();
        });

        // Mock 顶栏交卷按钮
        document.getElementById('mockSubmitTopBtn').addEventListener('click', () => {
            this.finishMockMode();
        });

        // Mock 底部导航
        document.getElementById('mockPrevBtn').addEventListener('click', () => {
            this.prevQuestion();
        });

        document.getElementById('mockNextBtn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('redoWrongBtn').addEventListener('click', () => {
            this.startWrongRedo();
        });

        document.getElementById('redoWrongResultBtn').addEventListener('click', () => {
            this.startWrongRedo();
        });

        document.getElementById('clearProgressBtn').addEventListener('click', () => {
            this.clearProgress();
        });

        // 欢迎页模式卡片点击
        document.querySelectorAll('.welcome-card').forEach(card => {
            card.addEventListener('click', () => {
                const mode = card.dataset.mode;
                this.selectModeFromWelcome(mode);
            });
        });

        // 返回首页
        document.getElementById('backToHomeLink').addEventListener('click', () => {
            this.showWelcomeView();
        });

        // 选卷视图 - 返回首页
        document.getElementById('mockBackLink').addEventListener('click', () => {
            this.showWelcomeView();
        });

        // 选卷视图 - 年份卡片点击（事件委托）
        document.getElementById('yearGrid').addEventListener('click', (e) => {
            const card = e.target.closest('.year-card');
            if (!card) return;
            const year = parseInt(card.dataset.year);
            this.mockSelectedYear = year;
            // 更新年份卡片选中态
            document.querySelectorAll('.year-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            // 显示试卷选择区，渲染试卷卡片
            document.getElementById('mockPaperSection').classList.remove('hidden');
            this.renderPaperCards(year);
            // 更新步骤指示器
            document.getElementById('mockStep1').classList.remove('active');
            document.getElementById('mockStep1').classList.add('done');
            document.getElementById('mockStep2').classList.add('active');
            this.updateMockSelectState();
        });

        // 选卷视图 - 试卷卡片点击（事件委托）
        document.getElementById('paperCards').addEventListener('click', (e) => {
            const card = e.target.closest('.paper-card');
            if (!card) return;
            const paper = parseInt(card.dataset.paper);
            this.mockSelectedPaper = paper;
            // 更新试卷卡片选中态
            document.querySelectorAll('.paper-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            this.updateMockSelectState();
        });

        // 选卷视图 - 开始考试按钮
        document.getElementById('mockStartBtn').addEventListener('click', () => {
            if (this.mockSelectedYear && this.mockSelectedPaper) {
                this.selectedYear = String(this.mockSelectedYear);
                this.selectedPaper = String(this.mockSelectedPaper);
                // 同步练习界面的下拉菜单
                document.getElementById('yearSelect').value = this.selectedYear;
                document.getElementById('paperSelect').value = this.selectedPaper;
                this.startMockMode();
            }
        });

        // 模拟结果页按钮
        document.getElementById('mockReviewBtn').addEventListener('click', () => {
            this.enterMockReview(0);
        });

        document.getElementById('mockRetryBtn').addEventListener('click', () => {
            this.startMockMode();
        });

        document.getElementById('mockResultHomeBtn').addEventListener('click', () => {
            this.showWelcomeView();
        });

        // QuickForm 提交成绩按钮
        document.getElementById('submitScoreBtn').addEventListener('click', async () => {
            const nameInput = document.getElementById('studentNameInput');
            const studentName = nameInput.value.trim();
            
            if (!studentName) {
                nameInput.focus();
                nameInput.style.borderColor = '#f44336';
                setTimeout(() => nameInput.style.borderColor = '', 2000);
                return;
            }
            
            const btn = document.getElementById('submitScoreBtn');
            const status = document.getElementById('submitStatus');
            
            btn.disabled = true;
            btn.textContent = '提交中...';
            status.classList.add('hidden');
            
            const result = await this.submitScoreToQuickForm(studentName);
            
            btn.disabled = false;
            btn.textContent = '提交成绩';
            
            status.classList.remove('hidden', 'success', 'error');
            if (result.success) {
                status.classList.add('success');
                status.textContent = '✅ 提交成功！老师已收到你的成绩。';
            } else {
                status.classList.add('error');
                status.textContent = '❌ ' + result.error;
            }
        });

        // 继续上次练习
        document.getElementById('welcomeContinueLink').addEventListener('click', () => {
            this.showPracticeView();
            this.currentMode = 'practice';
            this.applyYearPaperFilter();
            this.updateMockUI();
        });

        this.renderInsights();

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            // 模拟模式下不响应方向键
            if (this.currentMode === 'mock' || this.mockSession.active) return;
            // 答题卡输入框不响应
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            if (e.key === 'ArrowLeft') {
                this.prevQuestion();
            } else if (e.key === 'ArrowRight') {
                this.nextQuestion();
            } else if (e.key === 'Enter') {
                this.submitAnswer();
            } else if (e.key === ' ') {
                e.preventDefault();
                const analysisArea = document.getElementById('analysisArea');
                analysisArea.open = !analysisArea.open;
            } else if (/^[a-hA-H]$/.test(e.key)) {
                // 模拟点击对应选项
                const key = e.key.toUpperCase();
                const optionDiv = document.querySelector(`.option[data-key="${key}"]`);
                if (optionDiv) {
                    document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                    optionDiv.classList.add('selected');
                    this.selectedOption = key;
                    const q = this.filteredQuestions[this.currentIndex];
                    this.currentAnswers[q.id] = key;
                }
            }
        });
    }

    getTotalQuestionCount() {
        return questions.length;
    }

    getCurrentQuestion() {
        return this.filteredQuestions[this.currentIndex];
    }

    resetSessionProgress() {
        this.sessionProgress = {
            completed: [],
            correct: [],
            wrong: []
        };
    }

    formatTime(totalSeconds) {
        const safeSeconds = Math.max(0, totalSeconds);
        const minutes = Math.floor(safeSeconds / 60);
        const seconds = safeSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    updateMockUI() {
        const practiceView = document.getElementById('practiceView');
        const mockHeader = document.getElementById('mockHeader');
        const mockTimerLarge = document.getElementById('mockTimerLarge');
        const mockPaperLabel = document.getElementById('mockPaperLabel');

        if (this.mockSession.active) {
            // 进入沉浸式考试模式
            practiceView.classList.add('mock-active');
            mockHeader.classList.remove('hidden');

            // 更新 mock 顶栏数据
            mockPaperLabel.textContent = this.mockSession.paperLabel;
            mockTimerLarge.textContent = this.formatTime(this.mockSession.remainingSeconds);

            // 倒计时不足10分钟时闪烁警告
            if (this.mockSession.remainingSeconds <= 600) {
                mockTimerLarge.classList.add('warning');
            } else {
                mockTimerLarge.classList.remove('warning');
            }

            // 隐藏不需要的元素（CSS 已通过 .mock-active 处理大部分）
            // 但部分元素需要显式 hidden
            document.getElementById('skipBtn').classList.add('hidden');
            document.getElementById('analysisBtn').classList.add('hidden');
            document.getElementById('navButtons').classList.add('hidden');
        } else {
            // 退出考试模式，恢复普通界面
            practiceView.classList.remove('mock-active');
            mockHeader.classList.add('hidden');

            // 恢复隐藏的按钮
            document.getElementById('skipBtn').classList.remove('hidden');
            document.getElementById('analysisBtn').classList.remove('hidden');
            document.getElementById('navButtons').classList.remove('hidden');
        }
    }

    startMockMode() {
        if (this.selectedYear === 'all' || this.selectedPaper === 'all') {
            alert('请先选择具体年份和 Paper，再开始模拟。');
            return;
        }

        this.reviewMode = false;
        this.currentMode = 'mock';
        this.filter = 'all';
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
        document.getElementById('topicSelect').classList.add('hidden');

        this.mockSession.active = true;
        this.mockSession.durationSeconds = 75 * 60;
        this.mockSession.remainingSeconds = this.mockSession.durationSeconds;
        this.mockSession.startedAt = Date.now();
        this.mockSession.paperLabel = `${this.selectedYear} Paper ${this.selectedPaper}`;
        this.currentAnswers = {};
        this.resetSessionProgress();

        if (this.mockSession.timerId) {
            clearInterval(this.mockSession.timerId);
        }

        this.showPracticeView();
        this.applyYearPaperFilter();
        this.updateMockUI();

        this.mockSession.timerId = setInterval(() => {
            this.mockSession.remainingSeconds--;
            this.updateMockUI();

            if (this.mockSession.remainingSeconds <= 0) {
                this.finishMockMode();
            }
        }, 1000);
    }

    finishMockMode() {
        if (!this.mockSession.active) return;

        if (this.mockSession.timerId) {
            clearInterval(this.mockSession.timerId);
            this.mockSession.timerId = null;
        }

        this.mockSession.active = false;
        this.updateMockUI();
        this.showMockResult();
    }

    showMockResult() {
        // 隐藏所有视图，显示模拟结果页
        document.getElementById('welcomeView').classList.add('hidden');
        document.getElementById('mockSelectView').classList.add('hidden');
        document.getElementById('practiceView').classList.add('hidden');
        document.getElementById('resultArea').classList.add('hidden');
        document.getElementById('mockResultView').classList.remove('hidden');

        const total = this.filteredQuestions.length;
        const correct = this.sessionProgress.correct.length;
        const wrong = this.sessionProgress.wrong.length;
        const unanswered = total - correct - wrong;
        const pct = total > 0 ? Math.round(correct / total * 100) : 0;
        const usedSeconds = this.mockSession.durationSeconds - this.mockSession.remainingSeconds;
        const avgSec = (correct + wrong) > 0 ? Math.round(usedSeconds / (correct + wrong)) : 0;

        // 副标题
        document.getElementById('mockResultSubtitle').textContent = this.mockSession.paperLabel;

        // 环形图（SVG stroke-dashoffset）
        const circumference = 2 * Math.PI * 72; // ~452.39
        const offset = circumference * (1 - pct / 100);
        const ringFill = document.getElementById('mockRingFill');
        ringFill.style.strokeDasharray = circumference;
        ringFill.style.strokeDashoffset = offset;
        ringFill.classList.remove('medium', 'low');
        if (pct < 40) ringFill.classList.add('low');
        else if (pct < 70) ringFill.classList.add('medium');

        document.getElementById('mockRingPct').textContent = pct + '%';
        document.getElementById('mockRingFrac').textContent = correct + '/' + total;

        // 成绩评语
        let msg = '继续努力！';
        if (pct >= 90) msg = '🎉 太棒了！接近满分！';
        else if (pct >= 70) msg = '👍 成绩不错，继续加油！';
        else if (pct >= 50) msg = '💪 还有提升空间，继续练习！';
        document.getElementById('mockScoreMsg').textContent = msg;

        // 统计卡片
        document.getElementById('mockStatCorrect').textContent = correct;
        document.getElementById('mockStatWrong').textContent = wrong;
        document.getElementById('mockStatTime').textContent = this.formatTime(usedSeconds);
        document.getElementById('mockStatAvg').textContent = avgSec + 's';

        // 题目网格 + 知识点分析
        this.renderMockQuestionGrid();
        this.renderMockTopicBreakdown();
    }

    renderMockQuestionGrid() {
        const grid = document.getElementById('mockQuestionGrid');
        grid.innerHTML = '';
        this.filteredQuestions.forEach((q, i) => {
            const id = q.id;
            let cls = 'unanswered';
            if (this.sessionProgress.correct.includes(id)) cls = 'correct';
            else if (this.sessionProgress.wrong.includes(id)) cls = 'wrong';

            const div = document.createElement('div');
            div.className = 'mock-q-item ' + cls;
            div.textContent = i + 1;
            div.addEventListener('click', () => this.enterMockReview(i));
            grid.appendChild(div);
        });
    }

    renderMockTopicBreakdown() {
        const list = document.getElementById('mockTopicList');
        list.innerHTML = '';

        // 按知识点分组
        const topicMap = {};
        this.filteredQuestions.forEach((q, i) => {
            const t = q.topic || '其他';
            if (!topicMap[t]) topicMap[t] = { total: 0, correct: 0 };
            topicMap[t].total++;
            if (this.sessionProgress.correct.includes(q.id)) topicMap[t].correct++;
        });

        Object.keys(topicMap).forEach(topic => {
            const data = topicMap[topic];
            const pct = Math.round(data.correct / data.total * 100);
            const barCls = pct < 40 ? 'low' : pct < 70 ? 'medium' : 'high';

            const item = document.createElement('div');
            item.className = 'mock-topic-item';
            item.innerHTML = `
                <span class="mock-topic-name">${topic}</span>
                <div class="mock-topic-bar-wrap">
                    <div class="mock-topic-bar ${barCls}" style="width:${pct}%"></div>
                </div>
                <span class="mock-topic-count">${data.correct}/${data.total}（${pct}%）</span>
            `;
            list.appendChild(item);
        });
    }

    // ===== QuickForm 数据提交 =====
    async submitScoreToQuickForm(studentName) {
        const QUICKFORM_API_URL = 'https://quickform.cn/api/6g8ir94jih';
        
        const paper = this.mockSession.paperLabel;
        const total = this.filteredQuestions.length;
        const correct = this.sessionProgress.correct.length;
        const wrong = this.sessionProgress.wrong.length;
        const pct = Math.round(correct / total * 100);
        const usedSeconds = this.mockSession.durationSeconds - this.mockSession.remainingSeconds;
        const avgSec = (correct + wrong) > 0 ? Math.round(usedSeconds / (correct + wrong)) : 0;
        
        // 构建知识点分析
        const topicBreakdown = {};
        this.filteredQuestions.forEach(q => {
            const t = q.topic || '其他';
            if (!topicBreakdown[t]) topicBreakdown[t] = {total: 0, correct: 0};
            topicBreakdown[t].total++;
            if (this.sessionProgress.correct.includes(q.id)) topicBreakdown[t].correct++;
        });
        
        const payload = {
            student_name: studentName,
            exam_date: new Date().toISOString().split('T')[0],
            paper: paper,
            score_total: total,
            score_correct: correct,
            score_wrong: wrong,
            score_pct: pct,
            time_seconds: usedSeconds,
            avg_seconds: avgSec,
            wrong_questions: this.sessionProgress.wrong,
            topic_breakdown: topicBreakdown
        };
        
        try {
            const response = await fetch(QUICKFORM_API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            
            if (result.status === 'success') {
                return {success: true};
            } else {
                return {success: false, error: result.message || '提交失败'};
            }
        } catch (e) {
            return {success: false, error: '网络错误: ' + e.message};
        }
    }

    enterMockReview(startIndex) {
        this.reviewMode = true;
        this.reviewIndex = startIndex || 0;
        this.currentIndex = this.reviewIndex;
        document.getElementById('mockResultView').classList.add('hidden');
        document.getElementById('practiceView').classList.remove('hidden');
        this.showQuestion();
        this.updateReviewUI();
    }

    exitMockReview() {
        this.reviewMode = false;
        document.getElementById('practiceView').classList.add('hidden');
        document.getElementById('mockResultView').classList.remove('hidden');
        // 隐藏回顾模式的返回按钮
        const backBtn = document.getElementById('reviewBackBtn');
        if (backBtn) backBtn.classList.add('hidden');
        // 恢复被隐藏的按钮
        document.querySelectorAll('.filter-btn').forEach(b => b.style.display = '');
        document.getElementById('skipBtn').classList.remove('hidden');
        document.getElementById('submitBtn').classList.remove('hidden');
    }

    updateReviewUI() {
        if (!this.reviewMode) return;
        const q = this.filteredQuestions[this.reviewIndex];
        if (!q) return;

        // 隐藏不需要的元素
        document.querySelectorAll('.filter-btn').forEach(b => b.style.display = 'none');
        document.getElementById('skipBtn').classList.add('hidden');
        document.getElementById('submitBtn').classList.add('hidden');

        // 显示返回结果按钮（若尚未添加）
        let backBtn = document.getElementById('reviewBackBtn');
        if (!backBtn) {
            backBtn = document.createElement('button');
            backBtn.id = 'reviewBackBtn';
            backBtn.className = 'btn btn-outline';
            backBtn.textContent = '← 返回结果';
            backBtn.addEventListener('click', () => this.exitMockReview());
            document.getElementById('navButtons').appendChild(backBtn);
        }
        backBtn.classList.remove('hidden');

        // 更新导航按钮状态
        document.getElementById('prevBtn').disabled = this.reviewIndex <= 0;
        document.getElementById('nextBtn').disabled = this.reviewIndex >= this.filteredQuestions.length - 1;

        // 展开解析
        document.getElementById('analysisArea').open = true;
    }

    startWrongRedo() {
        if (this.progress.wrong.length === 0) {
            alert('当前没有可二刷的错题。');
            return;
        }

        this.reviewMode = false;  // 修复：退出回顾模式
        this.currentMode = 'wrong-redo';
        this.mockSession.active = false;
        if (this.mockSession.timerId) {
            clearInterval(this.mockSession.timerId);
            this.mockSession.timerId = null;
        }

        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        const wrongBtn = document.querySelector('.filter-btn[data-filter="wrong"]');
        if (wrongBtn) wrongBtn.classList.add('active');
        document.getElementById('topicSelect').classList.add('hidden');

        document.getElementById('questionArea').classList.remove('hidden');
        document.getElementById('resultArea').classList.add('hidden');

        this.showPracticeView();
        this.filteredQuestions = questions.filter(q => this.progress.wrong.includes(q.id));
        this.currentIndex = 0;
        this.currentAnswers = {};
        this.resetSessionProgress();
        this.updateMockUI();
        this.showQuestion();
    }

    // Fisher-Yates 洗牌算法
    shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    startShuffleMode() {
        this.reviewMode = false;  // 修复：退出回顾模式
        this.currentMode = 'shuffle';
        this.mockSession.active = false;
        if (this.mockSession.timerId) {
            clearInterval(this.mockSession.timerId);
            this.mockSession.timerId = null;
        }

        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
        document.getElementById('topicSelect').classList.add('hidden');

        document.getElementById('questionArea').classList.remove('hidden');
        document.getElementById('resultArea').classList.add('hidden');

        this.showPracticeView();
        this.filteredQuestions = this.shuffleArray(questions);
        this.currentIndex = 0;
        this.currentAnswers = {};
        this.resetSessionProgress();
        this.updateMockUI();
        this.showQuestion();
    }

    getTopicPerformance() {
        const stats = {};

        questions.forEach(q => {
            if (!stats[q.topic]) {
                stats[q.topic] = {
                    total: 0,
                    completed: 0,
                    correct: 0
                };
            }

            stats[q.topic].total++;

            if (this.progress.completed.includes(q.id)) {
                stats[q.topic].completed++;
            }

            if (this.progress.correct.includes(q.id)) {
                stats[q.topic].correct++;
            }
        });

        return Object.entries(stats).map(([topic, data]) => {
            const accuracy = data.completed > 0 ? Math.round(data.correct / data.completed * 100) : null;
            return { topic, ...data, accuracy };
        });
    }

    renderInsights() {
        const topicStats = document.getElementById('topicStats');
        const weakTopics = document.getElementById('weakTopics');
        const performance = this.getTopicPerformance();

        const sortedByCoverage = [...performance]
            .sort((a, b) => {
                if (b.completed !== a.completed) return b.completed - a.completed;
                return a.topic.localeCompare(b.topic);
            })
            .slice(0, 6);

        if (performance.every(item => item.completed === 0)) {
            topicStats.innerHTML = '<div class="insight-empty">暂时没有可统计的数据</div>';
        } else {
            topicStats.innerHTML = sortedByCoverage.map(item => {
                const accuracyText = item.accuracy === null ? '未作答' : `${item.accuracy}%`;
                return `<div class="insight-item"><span>${item.topic}</span><span>${item.correct}/${item.completed}，正确率 ${accuracyText}</span></div>`;
            }).join('');
        }

        const weakList = performance
            .filter(item => item.completed > 0)
            .sort((a, b) => {
                if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
                return b.completed - a.completed;
            })
            .slice(0, 3);

        if (weakList.length === 0) {
            weakTopics.innerHTML = '<div class="insight-empty">先做一些题目后，这里会显示你的薄弱点推荐</div>';
        } else {
            weakTopics.innerHTML = weakList.map(item => {
                return `<div class="insight-item"><span>${item.topic}</span><span>建议优先复习，当前正确率 ${item.accuracy}%</span></div>`;
            }).join('');
        }
    }

    renderAnswerCard() {
        const container = document.getElementById('answerCardContainer');
        container.innerHTML = '';

        if (this.currentMode === 'mock') {
            // 模拟模式：扁平列表
            const grid = document.createElement('div');
            grid.className = 'answer-card-grid';
            this.filteredQuestions.forEach((q, index) => {
                this._appendAnswerCardItem(grid, q, index);
            });
            container.appendChild(grid);
        } else {
            // 普通模式：两层分组，年份 → Paper
            const yearGroups = {}; // { '2016': { 'P1': [...], 'P2': [...] } }
            this.filteredQuestions.forEach((q, index) => {
                const y = q.year;
                const p = q.paper;
                if (!yearGroups[y]) yearGroups[y] = {};
                if (!yearGroups[y][p]) yearGroups[y][p] = [];
                yearGroups[y][p].push({ q, index });
            });

            const sortedYears = Object.keys(yearGroups).sort();

            sortedYears.forEach(year => {
                const yearGroupEl = document.createElement('div');
                yearGroupEl.className = 'answer-card-year';

                const yearTitleEl = document.createElement('div');
                yearTitleEl.className = 'answer-card-year-title';

                const totalCount = Object.values(yearGroups[year]).reduce((s, arr) => s + arr.length, 0);
                yearTitleEl.innerHTML = `<span class="year-label">${year}</span><span class="year-count">${totalCount}题</span>`;
                yearTitleEl.dataset.year = year;

                const yearBodyEl = document.createElement('div');
                yearBodyEl.className = 'answer-card-year-body';

                // 点击年份标题折叠/展开
                yearTitleEl.addEventListener('click', () => {
                    const collapsed = yearTitleEl.classList.toggle('collapsed');
                    yearBodyEl.style.display = collapsed ? 'none' : '';
                });

                // paper 在数据中是整数 1/2，按数值排序
                const sortedPapers = Object.keys(yearGroups[year]).sort((a, b) => a - b);

                sortedPapers.forEach(paper => {
                    const items = yearGroups[year][paper];
                    const paperLabel = `P${paper}`;

                    const paperGroupEl = document.createElement('div');
                    paperGroupEl.className = 'answer-card-paper';

                    const paperTitleEl = document.createElement('div');
                    paperTitleEl.className = 'answer-card-paper-title';
                    paperTitleEl.innerHTML = `<span class="paper-badge">${paperLabel}</span><span>${items.length}题</span>`;
                    paperTitleEl.dataset.paper = paper;

                    const paperGridEl = document.createElement('div');
                    paperGridEl.className = 'answer-card-paper-grid';
                    paperGridEl.dataset.paper = paper;

                    // 点击Paper标题折叠/展开
                    paperTitleEl.addEventListener('click', () => {
                        const collapsed = paperTitleEl.classList.toggle('collapsed');
                        paperGridEl.style.display = collapsed ? 'none' : '';
                    });

                    items.forEach(({ q, index }) => {
                        this._appendAnswerCardItem(paperGridEl, q, index);
                    });

                    paperGroupEl.appendChild(paperTitleEl);
                    paperGroupEl.appendChild(paperGridEl);
                    yearBodyEl.appendChild(paperGroupEl);
                });

                yearGroupEl.appendChild(yearTitleEl);
                yearGroupEl.appendChild(yearBodyEl);
                container.appendChild(yearGroupEl);
            });
        }
    }

    _appendAnswerCardItem(parent, q, index) {
        const btn = document.createElement('button');
        btn.className = 'answer-card-item';
        btn.textContent = index + 1;

        if (index === this.currentIndex) {
            btn.classList.add('current');
        }

        // Mock 模式下不显示正误，只区分已答/未答
        if (this.currentMode === 'mock' && this.mockSession.active) {
            if (this.currentAnswers[q.id]) {
                btn.classList.add('answered');
            }
        } else {
            if (this.sessionProgress.correct.includes(q.id)) {
                btn.classList.add('correct');
            } else if (this.sessionProgress.wrong.includes(q.id)) {
                btn.classList.add('wrong');
            } else if (this.currentAnswers[q.id]) {
                btn.classList.add('pending');
            } else if (this.progress.correct.includes(q.id)) {
                btn.classList.add('correct');
            } else if (this.progress.wrong.includes(q.id)) {
                btn.classList.add('wrong');
            } else {
                btn.classList.add('pending');
            }
        }

        btn.addEventListener('click', () => {
            this.currentIndex = index;
            this.showQuestion();
        });

        parent.appendChild(btn);
    }
    
    applyYearPaperFilter() {
        // 先按年份和paper筛选
        let filtered = questions;
        
        if (this.selectedYear !== 'all') {
            filtered = filtered.filter(q => q.year == this.selectedYear);
        }
        
        if (this.selectedPaper !== 'all') {
            filtered = filtered.filter(q => q.paper == this.selectedPaper);
        }
        
        // 再应用其他筛选条件
        if (this.filter === 'topic') {
            const topicSelect = document.getElementById('topicSelect');
            const topic = topicSelect.value;
            if (topic) {
                filtered = filtered.filter(q => q.topic === topic);
            }
        } else if (this.filter === 'wrong') {
            filtered = filtered.filter(q => this.progress.wrong.includes(q.id));
        } else if (this.filter === 'uncompleted') {
            filtered = filtered.filter(q => !this.progress.completed.includes(q.id));
        }
        
        this.filteredQuestions = filtered;
        this.currentIndex = 0;
        this.currentAnswers = {};
        this.resetSessionProgress();
        this.showQuestion();
    }
    
    applyFilter(topic = null) {
        // 先按年份和paper筛选
        let filtered = questions;
        
        if (this.selectedYear !== 'all') {
            filtered = filtered.filter(q => q.year == this.selectedYear);
        }
        
        if (this.selectedPaper !== 'all') {
            filtered = filtered.filter(q => q.paper == this.selectedPaper);
        }
        
        // 再应用其他筛选条件
        if (this.filter === 'all') {
            // 已经筛选过了
        } else if (this.filter === 'topic' && topic) {
            filtered = filtered.filter(q => q.topic === topic);
        } else if (this.filter === 'wrong') {
            filtered = filtered.filter(q => this.progress.wrong.includes(q.id));
        } else if (this.filter === 'uncompleted') {
            filtered = filtered.filter(q => !this.progress.completed.includes(q.id));
        }
        
        this.filteredQuestions = filtered;
        this.currentIndex = 0;
        this.currentAnswers = {};
        this.resetSessionProgress();
        this.showQuestion();
    }
    
    showQuestion() {
        this.pendingRevealCorrect = null;  // 切换题目时清除待揭示的正确答案
        if (this.filteredQuestions.length === 0) {
            document.getElementById('questionText').textContent = '没有符合条件的题目';
            document.getElementById('optionsArea').innerHTML = '';
            document.getElementById('questionCounter').textContent = '无题目';
            document.getElementById('prevBtn').disabled = true;
            document.getElementById('nextBtn').disabled = true;
            document.getElementById('answerCardContainer').innerHTML = '';
            return;
        }
        
        const q = this.filteredQuestions[this.currentIndex];
        
        // 更新题目计数器
        document.getElementById('questionCounter').textContent = 
            `第 ${this.currentIndex + 1} 题 / 共 ${this.filteredQuestions.length} 题`;
        
        // 更新 mock 底部导航计数器
        document.getElementById('mockQuestionCounter').textContent = 
            `第 ${this.currentIndex + 1} 题 / 共 ${this.filteredQuestions.length} 题`;
        document.getElementById('mockPrevBtn').disabled = this.currentIndex === 0;
        document.getElementById('mockNextBtn').disabled = this.currentIndex === this.filteredQuestions.length - 1;
        
        // 更新导航按钮状态
        document.getElementById('prevBtn').disabled = this.currentIndex === 0;
        document.getElementById('nextBtn').disabled = this.currentIndex === this.filteredQuestions.length - 1;
        
        document.getElementById('questionId').textContent = `题目 #${q.id}`;
        document.getElementById('questionTopic').textContent = `知识点: ${q.topic}`;
        
        // 显示图片标识（只对真正有图片的题目显示）
        const imageBadge = document.getElementById('questionImageBadge');
        if (q.has_image) {
            imageBadge.classList.remove('hidden');
        } else {
            imageBadge.classList.add('hidden');
        }
        
        // 渲染题目文本
        let questionText = renderMath(q.question);
        
        // 处理各种图片格式（只有has_image为true时才处理）
        if (q.has_image && q.images) {
            // 单张图片（题目+选项在一起）
            if (q.images.image) {
                const imgPath = `images/${encodeURIComponent(q.images.image)}`;
                questionText += `<div class="question-image"><img src="${imgPath}" alt="题目图示" style="max-width:100%; margin-top:15px; border-radius:8px;"></div>`;
            }
            
            // 问题图片
            if (q.images.question_image) {
                const imgPath = `images/${encodeURIComponent(q.images.question_image)}`;
                questionText += `<div class="question-image"><img src="${imgPath}" alt="题目图示" style="max-width:100%; margin-top:15px; border-radius:8px;"></div>`;
            }
            
            // 选项图片
            if (q.images.options_image) {
                const imgPath = `images/${encodeURIComponent(q.images.options_image)}`;
                questionText += `<div class="options-preview-image"><img src="${imgPath}" alt="选项图示" style="max-width:100%; margin-top:15px; border-radius:8px;"></div>`;
            }
        }
        
        document.getElementById('questionText').innerHTML = questionText;
        this.renderAnswerCard();
        
        const optionsArea = document.getElementById('optionsArea');
        optionsArea.innerHTML = '';
        
        // 只添加选项，不添加图片
        Object.entries(q.options).forEach(([key, value]) => {
            if (!value) return; // 跳过空选项
            
            const div = document.createElement('div');
            div.className = 'option';
            div.dataset.key = key;
            
            const renderedValue = renderMath(value);
            div.innerHTML = `<span class="option-label">${key}</span><span class="option-content">${renderedValue}</span><span class="option-feedback"></span>`;
            
            div.addEventListener('click', () => {
                document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                div.classList.add('selected');
                this.selectedOption = key;
                this.currentAnswers[q.id] = key;
            });
            
            optionsArea.appendChild(div);
        });

        if (this.currentAnswers[q.id]) {
            const selectedDiv = optionsArea.querySelector(`[data-key="${this.currentAnswers[q.id]}"]`);
            if (selectedDiv) {
                selectedDiv.classList.add('selected');
                this.selectedOption = this.currentAnswers[q.id];
            }
        }

        if (this.sessionProgress.completed.includes(q.id) && this.currentMode !== 'mock') {
            document.querySelectorAll('.option').forEach(opt => {
                const key = opt.dataset.key;
                if (key === q.answer) {
                    opt.classList.add('correct');
                    const feedback = opt.querySelector('.option-feedback');
                    if (feedback) feedback.textContent = '✅';
                } else if (key === this.currentAnswers[q.id]) {
                    opt.classList.add('wrong');
                    const feedback = opt.querySelector('.option-feedback');
                    if (feedback) feedback.textContent = '❌';
                }
            });
        }
        
        document.getElementById('analysisArea').open = false;
        const analysisText = renderMath(q.analysis || '暂无解析');
        document.getElementById('analysisText').innerHTML = analysisText;
        
        const analysisBtn = document.getElementById('analysisBtn');
        if (this.currentMode === 'mock') {
            analysisBtn.classList.add('hidden');
        } else {
            analysisBtn.classList.remove('hidden');
        }
        
        if (!this.currentAnswers[q.id]) {
            this.selectedOption = null;
        }

        // 回顾模式：显示正误标识 + 展开解析 + 禁用选项点击
        if (this.reviewMode) {
            document.querySelectorAll('.option').forEach(opt => {
                const key = opt.dataset.key;
                if (key === q.answer) {
                    opt.classList.add('correct');
                    const feedback = opt.querySelector('.option-feedback');
                    if (feedback) feedback.textContent = '✅';
                } else if (key === this.currentAnswers[q.id]) {
                    opt.classList.add('wrong');
                    const feedback = opt.querySelector('.option-feedback');
                    if (feedback) feedback.textContent = '❌';
                }
                // 移除点击提交行为
                opt.style.pointerEvents = 'none';
            });
            document.getElementById('analysisArea').open = true;
            this.updateReviewUI();
        }
    }
    

    submitAnswer() {
        if (!this.selectedOption) {
            alert('请选择一个答案');
            return;
        }

        const q = this.filteredQuestions[this.currentIndex];
        const correct = this.selectedOption === q.answer;

        if (this.currentMode !== 'mock') {
            if (correct) {
                // 答对：立即显示正确答案，清除待揭示状态
                this.pendingRevealCorrect = null;
                document.querySelectorAll('.option').forEach(opt => {
                    const key = opt.dataset.key;
                    if (key === q.answer) {
                        opt.classList.add('correct', 'animate');
                        const feedback = opt.querySelector('.option-feedback');
                        if (feedback) feedback.textContent = '✅';
                    }
                });
            } else {
                // 答错：只标记错误选项，正确答案等打开解析时再显示
                document.querySelectorAll('.option').forEach(opt => {
                    const key = opt.dataset.key;
                    if (key === this.selectedOption) {
                        opt.classList.add('wrong', 'animate');
                        const feedback = opt.querySelector('.option-feedback');
                        if (feedback) feedback.textContent = '❌';
                    }
                });
                // 标记：等解析打开时再揭示正确答案
                this.pendingRevealCorrect = q.answer;
            }
        }

        // 错题翻身核心修复：无论是否首次作答，每次提交都实时更新 progress
        if (correct) {
            if (!this.progress.correct.includes(q.id)) this.progress.correct.push(q.id);
            this.progress.wrong = this.progress.wrong.filter(id => id !== q.id);
            if (!this.progress.completed.includes(q.id)) this.progress.completed.push(q.id);
        } else {
            if (!this.progress.wrong.includes(q.id)) this.progress.wrong.push(q.id);
            this.progress.correct = this.progress.correct.filter(id => id !== q.id);
            if (!this.progress.completed.includes(q.id)) this.progress.completed.push(q.id);
        }
        this.saveProgress();

        if (!this.sessionProgress.completed.includes(q.id)) {
            this.sessionProgress.completed.push(q.id);
        }

        if (correct) {
            if (!this.sessionProgress.correct.includes(q.id)) {
                this.sessionProgress.correct.push(q.id);
            }
            this.sessionProgress.wrong = this.sessionProgress.wrong.filter(id => id !== q.id);
        } else {
            if (!this.sessionProgress.wrong.includes(q.id)) {
                this.sessionProgress.wrong.push(q.id);
            }
            this.sessionProgress.correct = this.sessionProgress.correct.filter(id => id !== q.id);
        }
        
        this.updateStats();
        this.renderAnswerCard();
        this.renderInsights();

        const isLastQuestion = this.currentIndex === this.filteredQuestions.length - 1;
        if (isLastQuestion) {
            setTimeout(() => {
                if (this.mockSession.active) {
                    this.finishMockMode();
                } else {
                    this.showResult();
                }
            }, 400);
        } else if (this.currentMode === 'mock') {
            setTimeout(() => {
                this.currentIndex++;
                this.showQuestion();
            }, 300);
        }
    }

    revealCorrectAnswer(correctKey) {
        document.querySelectorAll('.option').forEach(opt => {
            const key = opt.dataset.key;
            if (key === correctKey && !opt.classList.contains('correct')) {
                opt.classList.add('correct', 'animate');
                const feedback = opt.querySelector('.option-feedback');
                if (feedback) feedback.textContent = '✅';
            }
        });
    }

    prevQuestion() {
        if (this.reviewMode) {
            if (this.reviewIndex > 0) {
                this.reviewIndex--;
                this.currentIndex = this.reviewIndex;
                this.showQuestion();
            }
            return;
        }
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.showQuestion();
        }
    }

    nextQuestion() {
        if (this.reviewMode) {
            if (this.reviewIndex < this.filteredQuestions.length - 1) {
                this.reviewIndex++;
                this.currentIndex = this.reviewIndex;
                this.showQuestion();
            }
            return;
        }
        if (this.currentIndex < this.filteredQuestions.length - 1) {
            this.currentIndex++;
            this.showQuestion();
        } else if (this.filteredQuestions.length > 0) {
            if (this.mockSession.active) {
                this.finishMockMode();
            } else {
                this.showResult();
            }
        }
    }
    
    updateStats() {
        const completed = this.progress.completed.length;
        const correct = this.progress.correct.length;
        const rate = completed > 0 ? Math.round(correct / completed * 100) : 0;
        const total = this.getTotalQuestionCount();
        
        document.getElementById('progressText').textContent = `进度: ${completed}/${total}`;
        document.getElementById('correctRate').textContent = `正确率: ${rate}%`;
        
        const fillWidth = total > 0 ? Math.round(completed / total * 100) : 0;
        document.getElementById('progressFill').style.width = `${fillWidth}%`;

        // 同步更新欢迎页进度
        this.updateWelcomeProgress();
    }
    
    showResult() {
        document.getElementById('questionArea').classList.add('hidden');
        document.getElementById('resultArea').classList.remove('hidden');
        
        const completed = this.sessionProgress.completed.length;
        const correct = this.sessionProgress.correct.length;
        const rate = completed > 0 ? Math.round(correct / completed * 100) : 0;
        const total = this.filteredQuestions.length;
        
        document.getElementById('finalCompleted').textContent = completed;
        document.getElementById('finalTotal').textContent = total;
        document.getElementById('finalCorrect').textContent = correct;
        document.getElementById('finalRate').textContent = `${rate}%`;

        const resultModeText = document.getElementById('resultModeText');
        const mockSummaryText = document.getElementById('mockSummaryText');

        if (this.currentMode === 'mock') {
            resultModeText.textContent = `模式: 限时模拟（${this.mockSession.paperLabel}）`;
            const usedSeconds = this.mockSession.durationSeconds - this.mockSession.remainingSeconds;
            mockSummaryText.textContent = `本次模拟用时: ${this.formatTime(usedSeconds)}，剩余时间: ${this.formatTime(this.mockSession.remainingSeconds)}`;
            mockSummaryText.classList.remove('hidden');
        } else if (this.currentMode === 'wrong-redo') {
            resultModeText.textContent = '模式: 错题二刷';
            mockSummaryText.classList.add('hidden');
        } else if (this.currentMode === 'shuffle') {
            resultModeText.textContent = '模式: 随机练习';
            mockSummaryText.classList.add('hidden');
        } else {
            resultModeText.textContent = '模式: 普通练习';
            mockSummaryText.classList.add('hidden');
        }
    }
    
    restart() {
        if (this.mockSession.timerId) {
            clearInterval(this.mockSession.timerId);
            this.mockSession.timerId = null;
        }

        this.reviewMode = false;
        this.mockSession.active = false;
        this.currentMode = 'practice';
        this.currentAnswers = {};
        this.resetSessionProgress();
        
        document.getElementById('questionArea').classList.remove('hidden');
        document.getElementById('resultArea').classList.add('hidden');
        
        this.currentIndex = 0;
        this.selectedYear = 'all';
        this.selectedPaper = 'all';
        document.getElementById('yearSelect').value = 'all';
        document.getElementById('paperSelect').value = 'all';
        this.applyYearPaperFilter();
        this.updateStats();
        this.updateMockUI();
        this.renderInsights();

        // 返回欢迎页
        this.showWelcomeView();
    }
    
    clearProgress() {
        if (!confirm('确定要清空所有做题进度吗？此操作不可撤销。')) {
            return;
        }

        this.progress = {
            completed: [],
            correct: [],
            wrong: []
        };
        this.saveProgress();

        this.updateStats();
        this.renderInsights();
        this.renderAnswerCard();
    }

    applyDarkMode() {
        const dark = localStorage.getItem('tmua_dark_mode') === 'true';
        document.body.classList.toggle('dark-mode', dark);
    }

    toggleDarkMode() {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('tmua_dark_mode', isDark);
    }

    // ===== 欢迎页相关方法 =====

    showWelcomeView() {
        this.reviewMode = false;  // 防御性重置：防止回顾模式状态泄漏

        // 清理回顾模式的副作用：恢复被 updateReviewUI() 隐藏的元素
        document.querySelectorAll('.filter-btn').forEach(b => b.style.display = '');
        document.getElementById('submitBtn').classList.remove('hidden');
        document.getElementById('skipBtn').classList.remove('hidden');

        // 隐藏回顾模式的"返回结果"按钮
        const reviewBackBtn = document.getElementById('reviewBackBtn');
        if (reviewBackBtn) reviewBackBtn.classList.add('hidden');

        // 确保 mock-active 已移除
        document.getElementById('practiceView').classList.remove('mock-active');
        document.getElementById('mockHeader').classList.add('hidden');

        // 隐藏所有其他视图（包括模拟结果页）
        document.getElementById('mockResultView').classList.add('hidden');
        document.getElementById('practiceView').classList.add('hidden');
        document.getElementById('mockSelectView').classList.add('hidden');
        document.getElementById('welcomeView').classList.remove('hidden');
        this.updateWelcomeProgress();
    }

    showPracticeView() {
        document.getElementById('welcomeView').classList.add('hidden');
        document.getElementById('mockSelectView').classList.add('hidden');
        document.getElementById('practiceView').classList.remove('hidden');
    }

    updateWelcomeProgress() {
        const completed = this.progress.completed.length;
        const correct = this.progress.correct.length;
        const total = this.getTotalQuestionCount();
        const rate = completed > 0 ? Math.round(correct / completed * 100) : 0;

        document.getElementById('welcomeProgressText').textContent = `已完成 ${completed}/${total} 题`;
        document.getElementById('welcomeCorrectRate').textContent = `正确率 ${rate}%`;
        document.getElementById('welcomeProgressFill').style.width = `${total > 0 ? Math.round(completed / total * 100) : 0}%`;

        // 如果有进度，显示"继续上次"链接
        const continueLink = document.getElementById('welcomeContinueLink');
        if (completed > 0) {
            continueLink.classList.remove('hidden');
        } else {
            continueLink.classList.add('hidden');
        }
    }

    // ===== 模拟考试选卷视图方法 =====

    showMockSelectView() {
        document.getElementById('welcomeView').classList.add('hidden');
        document.getElementById('mockSelectView').classList.remove('hidden');
        document.getElementById('practiceView').classList.add('hidden');

        // 重置选择状态
        this.mockSelectedYear = null;
        this.mockSelectedPaper = null;

        // 重置步骤指示器
        document.getElementById('mockStep1').classList.add('active');
        document.getElementById('mockStep1').classList.remove('done');
        document.getElementById('mockStep2').classList.remove('active');
        document.getElementById('mockStep2').classList.remove('done');

        // 隐藏试卷区
        document.getElementById('mockPaperSection').classList.add('hidden');

        // 渲染年份卡片
        this.renderYearCards();

        // 重置底部按钮
        this.updateMockSelectState();
    }

    renderYearCards() {
        const grid = document.getElementById('yearGrid');
        grid.innerHTML = '';

        const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022];

        years.forEach(year => {
            const yearQuestions = questions.filter(q => q.year === year);
            const total = yearQuestions.length;
            const completed = yearQuestions.filter(q => this.progress.completed.includes(q.id)).length;
            const correct = yearQuestions.filter(q => this.progress.correct.includes(q.id)).length;

            let statusIcon = '⚪'; // 未开始
            if (completed === total && total > 0) {
                statusIcon = '✅'; // 已完成
            } else if (completed > 0) {
                statusIcon = '🔵'; // 进行中
            }

            const card = document.createElement('div');
            card.className = 'year-card';
            card.dataset.year = year;
            card.innerHTML = `
                <span class="year-num">${year}</span>
                <span class="year-progress">${completed}/${total} 题</span>
                <span class="year-status">${statusIcon}</span>
            `;
            grid.appendChild(card);
        });
    }

    renderPaperCards(year) {
        const container = document.getElementById('paperCards');
        container.innerHTML = '';

        [1, 2].forEach(paper => {
            const paperQuestions = questions.filter(q => q.year === year && q.paper === paper);
            const total = paperQuestions.length;
            const completed = paperQuestions.filter(q => this.progress.completed.includes(q.id)).length;
            const correct = paperQuestions.filter(q => this.progress.correct.includes(q.id)).length;
            const rate = completed > 0 ? Math.round(correct / completed * 100) : 0;
            const fillWidth = total > 0 ? Math.round(completed / total * 100) : 0;

            const card = document.createElement('div');
            card.className = 'paper-card';
            card.dataset.paper = paper;
            card.innerHTML = `
                <div class="paper-name">Paper ${paper}</div>
                <div class="paper-count">${total} 题</div>
                <div class="paper-progress-bar">
                    <div class="paper-progress-fill" style="width: ${fillWidth}%"></div>
                </div>
                <div class="paper-accuracy">已完成 ${completed}/${total} · 正确率 ${rate}%</div>
            `;
            container.appendChild(card);
        });
    }

    updateMockSelectState() {
        const btn = document.getElementById('mockStartBtn');
        const hint = document.getElementById('mockSelectionHint');

        if (this.mockSelectedYear && this.mockSelectedPaper) {
            btn.disabled = false;
            hint.textContent = `已选：${this.mockSelectedYear} Paper ${this.mockSelectedPaper}`;
        } else if (this.mockSelectedYear) {
            btn.disabled = true;
            hint.textContent = `已选年份：${this.mockSelectedYear}，请选择试卷`;
        } else {
            btn.disabled = true;
            hint.textContent = '请选择年份和试卷';
        }
    }

    selectModeFromWelcome(mode) {
        this.showPracticeView();

        if (mode === 'practice') {
            this.reviewMode = false;  // 修复：退出回顾模式
            this.currentMode = 'practice';
            this.mockSession.active = false;

            // 重置年份/试卷选择为"全部"，避免停留在模拟考试的筛选
            this.selectedYear = 'all';
            this.selectedPaper = 'all';
            document.getElementById('yearSelect').value = 'all';
            document.getElementById('paperSelect').value = 'all';

            this.applyYearPaperFilter();
            this.updateMockUI();
        } else if (mode === 'mock') {
            // 模拟考试：跳转到选卷界面
            this.showMockSelectView();
        } else if (mode === 'wrong-redo') {
            if (this.progress.wrong.length === 0) {
                alert('当前没有错题可复习。先做一些题目吧！');
                this.showWelcomeView();
                return;
            }
            this.startWrongRedo();
        } else if (mode === 'shuffle') {
            this.startShuffleMode();
        }
    }
}

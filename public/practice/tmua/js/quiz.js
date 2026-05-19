class TMUAQuiz {
    constructor() {
        this.currentIndex = 0;
        this.selectedOption = null;
        this.progress = {
            completed: [],
            correct: [],
            wrong: [],
            favorites: [],
            generatedSets: []
        };
        this.filter = 'all';
        this.filteredQuestions = [];
        this.baseFilteredQuestions = [];
        this.questionIndex = null;
        this.courseConfig = null;
        this.selectedYear = 'all';
        this.selectedPaper = 'all';
        this.selectedTopic = '';
        this.selectedModule = '';
        this.selectedSection = '';
        this.selectedSkill = '';
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
        this.generatorReturnView = 'practice';
        // 回顾模式状态
        this.reviewMode = false;
        this.reviewIndex = 0;
        // 答错时延迟揭示正确答案：等打开解析面板时再显示
        this.pendingRevealCorrect = null;
        this.generatedSession = {
            active: false,
            label: '',
            durationSeconds: 0,
            remainingSeconds: 0,
            timerId: null
        };

        this.init();
    }

    /**
     * Parse URL parameters and auto-navigate. Supports:
     *   ?id=2019-P1-Q3  → jump to specific question
     *   ?topic=Algebra   → filter by topic
     *   ?year=2019&paper=1 → filter by year/paper
     */
    handleUrlParams() {
        const route = parsePracticeRoute(window.location.search);
        if (!route.hasParams) return false;

        const targetId = route.id;
        const topic = route.topic;
        const module = route.module;
        const section = route.section;
        const skill = route.skill;
        const year = route.year;
        const paper = route.paper;

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

        if (year || paper || topic || module || section || skill) {
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
                this.selectedTopic = topic;
            }
            if (module) {
                this.filter = 'topic';
                document.getElementById('moduleSelect').classList.remove('hidden');
                document.getElementById('moduleSelect').value = module;
                this.selectedModule = module;
            }
            if (section) {
                this.filter = 'topic';
                document.getElementById('sectionSelect').classList.remove('hidden');
                document.getElementById('sectionSelect').value = section;
                this.selectedSection = section;
            }
            if (skill) {
                this.filter = 'topic';
                document.getElementById('skillSelect').classList.remove('hidden');
                document.getElementById('skillSelect').value = skill;
                this.selectedSkill = skill;
            }
            this.showPracticeView();
            this.applyFilter(topic || null);
            this.updateMockUI();
            return true;
        }

        return false;
    }

    init() {
        if (typeof window.QUESTIONS !== 'undefined') {
            this.courseConfig = getPracticeConfig('tmua');
            questions = normalizeQuestionBank(window.QUESTIONS, this.courseConfig);
            this.questionIndex = buildQuestionIndex(questions);
            this.filteredQuestions = questions;
            this.baseFilteredQuestions = questions;
            this.loadProgress();
            this.setupEventListeners();
            this.populateCourseControls();
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
            this.progress = normalizeProgress(JSON.parse(saved));
        } else {
            this.progress = normalizeProgress(this.progress);
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
                const moduleSelect = document.getElementById('moduleSelect');
                const sectionSelect = document.getElementById('sectionSelect');
                const skillSelect = document.getElementById('skillSelect');
                if (this.filter === 'topic') {
                    topicSelect.classList.remove('hidden');
                    moduleSelect.classList.remove('hidden');
                    sectionSelect.classList.remove('hidden');
                    skillSelect.classList.remove('hidden');
                } else {
                    topicSelect.classList.add('hidden');
                    moduleSelect.classList.add('hidden');
                    sectionSelect.classList.add('hidden');
                    skillSelect.classList.add('hidden');
                }
                
                this.applyFilter();
            });
        });
        
        // 标签选择
        const topicSelect = document.getElementById('topicSelect');
        topicSelect.addEventListener('change', (e) => {
            this.selectedTopic = e.target.value;
            this.applyFilter(e.target.value);
        });

        document.getElementById('moduleSelect').addEventListener('change', (e) => {
            this.selectedModule = e.target.value;
            this.applyFilter();
        });

        document.getElementById('sectionSelect').addEventListener('change', (e) => {
            this.selectedSection = e.target.value;
            this.applyFilter();
        });

        document.getElementById('skillSelect').addEventListener('change', (e) => {
            this.selectedSkill = e.target.value;
            this.applyFilter();
        });

        const questionJumpSelect = document.getElementById('questionJumpSelect');
        if (questionJumpSelect) {
            questionJumpSelect.addEventListener('change', (e) => {
                const targetId = e.target.value;
                const index = this.filteredQuestions.findIndex(q => q.id === targetId);
                if (index >= 0) {
                    this.currentIndex = index;
                    this.showQuestion();
                }
            });
        }
        
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
            this.showMockSelectView();
        });

        document.getElementById('startShuffleBtn').addEventListener('click', () => {
            this.startQuickRandomSession();
        });

        document.getElementById('openGeneratorBtn').addEventListener('click', () => {
            this.showGeneratorSelectView('practice');
        });

        document.getElementById('startGeneratedSetBtn').addEventListener('click', () => {
            this.startGeneratedSet(false);
        });

        document.getElementById('startTimedSetBtn').addEventListener('click', () => {
            this.startGeneratedSet(true);
        });

        document.getElementById('downloadWorksheetBtn').addEventListener('click', () => {
            this.exportCurrentWorksheet();
        });

        [
            'generatedCountInput',
            'generatedMinutesInput',
            'generatedSourceSelect',
            'generatorModuleSelect',
            'generatorSectionSelect',
            'generatorSkillSelect',
            'generatorTopicSelect',
            'exportIncludeAnswers',
            'exportIncludeAnalysis',
            'exportIncludeTags'
        ].forEach(id => {
            const element = document.getElementById(id);
            if (element) element.addEventListener('change', () => this.updateGeneratorPreview());
        });

        document.getElementById('favoriteBtn').addEventListener('click', () => {
            this.toggleCurrentFavorite();
        });

        document.getElementById('submitMockBtn').addEventListener('click', () => {
            this.finishMockMode();
        });

        // Mock 顶栏交卷按钮
        document.getElementById('mockSubmitTopBtn').addEventListener('click', () => {
            if (this.currentMode === 'generated-set' || this.currentMode === 'timed-set') {
                this.showResult();
            } else {
                this.finishMockMode();
            }
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

        document.getElementById('generatorBackLink').addEventListener('click', () => {
            if (this.generatorReturnView === 'welcome') {
                this.showWelcomeView();
            } else {
                this.showPracticeView();
            }
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
                status.textContent = '提交成功，老师已收到你的成绩。';
            } else {
                status.classList.add('error');
                status.textContent = result.error;
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

    populateCourseControls() {
        if (this.courseConfig) {
            document.title = this.courseConfig.title;
            const title = document.getElementById('welcomeTitle');
            if (title) title.textContent = this.courseConfig.title.replace('练习系统', '训练系统');
        }

        const subtitle = document.getElementById('welcomeSubtitle');
        if (subtitle && this.questionIndex) {
            const firstYear = this.questionIndex.years[0];
            const lastYear = this.questionIndex.years[this.questionIndex.years.length - 1];
            subtitle.textContent = `${firstYear}–${lastYear} · ${questions.length} 题目 · 完整解析`;
        }

        this.populateSelect('yearSelect', this.questionIndex.years, '全部年份', value => value);
        this.populateSelect('paperSelect', this.questionIndex.papers, '全部试卷', value => `Paper ${value}`);
        this.populateSelect('topicSelect', this.questionIndex.topics, '选择知识点', value => value);
        this.populateSelect('moduleSelect', this.questionIndex.modules, '选择讲义章节', value => value);
        this.populateSelect('sectionSelect', this.questionIndex.sections, '选择细分概念', value => value);
        this.populateSelect('skillSelect', this.questionIndex.skills, '选择解题技能', value => value);
        this.populateSelect('generatorModuleSelect', this.questionIndex.modules, '全部讲义章节', value => value);
        this.populateSelect('generatorSectionSelect', this.questionIndex.sections, '全部细分概念', value => value);
        this.populateSelect('generatorSkillSelect', this.questionIndex.skills, '全部解题技能', value => value);
        this.populateSelect('generatorTopicSelect', this.questionIndex.topics, '全部 Topic 分类', value => value);
    }

    populateSelect(id, values, placeholder, labeler) {
        const select = document.getElementById(id);
        if (!select) return;
        select.innerHTML = '';
        const allValue = id === 'yearSelect' || id === 'paperSelect' ? 'all' : '';
        const first = document.createElement('option');
        first.value = allValue;
        first.textContent = placeholder;
        select.appendChild(first);
        values.forEach(value => {
            const option = document.createElement('option');
            option.value = String(value);
            option.textContent = labeler(value);
            select.appendChild(option);
        });
    }

    setSelectOptions(id, values, placeholder, selectedValue = '') {
        const select = document.getElementById(id);
        if (!select) return '';
        const normalizedValues = values.map(value => String(value));
        const nextValue = selectedValue && normalizedValues.includes(String(selectedValue)) ? String(selectedValue) : '';
        select.innerHTML = '';

        const first = document.createElement('option');
        first.value = '';
        first.textContent = placeholder;
        select.appendChild(first);

        normalizedValues.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            select.appendChild(option);
        });

        select.value = nextValue;
        return nextValue;
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
        const mockSubmitTopBtn = document.getElementById('mockSubmitTopBtn');

        if (this.mockSession.active) {
            // 进入沉浸式考试模式
            practiceView.classList.add('mock-active');
            practiceView.classList.remove('generated-active');
            mockHeader.classList.remove('hidden');

            // 更新 mock 顶栏数据
            mockPaperLabel.textContent = this.mockSession.paperLabel;
            mockTimerLarge.textContent = this.formatTime(this.mockSession.remainingSeconds);
            mockSubmitTopBtn.textContent = '交卷';

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
        } else if (this.generatedSession.active) {
            practiceView.classList.remove('mock-active');
            practiceView.classList.add('generated-active');
            mockHeader.classList.remove('hidden');
            mockPaperLabel.textContent = this.generatedSession.label || '组卷练习';
            mockTimerLarge.textContent = this.generatedSession.durationSeconds > 0
                ? this.formatTime(this.generatedSession.remainingSeconds)
                : `${this.filteredQuestions.length} 题`;
            mockTimerLarge.classList.toggle('warning', this.generatedSession.durationSeconds > 0 && this.generatedSession.remainingSeconds <= 300);
            mockSubmitTopBtn.textContent = '结束练习';
            document.getElementById('skipBtn').classList.remove('hidden');
            document.getElementById('analysisBtn').classList.remove('hidden');
            document.getElementById('navButtons').classList.remove('hidden');
        } else {
            // 退出考试模式，恢复普通界面
            practiceView.classList.remove('mock-active');
            practiceView.classList.remove('generated-active');
            mockHeader.classList.add('hidden');
            mockSubmitTopBtn.textContent = '交卷';

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
        const answerCardPanel = document.getElementById('answerCardPanel');
        if (answerCardPanel) answerCardPanel.open = true;

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
        document.getElementById('generatorSelectView').classList.add('hidden');
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
        let msg = '需要加强基础，多做针对性练习。';
        if (pct >= 90) msg = '接近满分，状态很好。';
        else if (pct >= 70) msg = '成绩稳定，可以继续压缩用时。';
        else if (pct >= 50) msg = '还有提升空间，建议回看薄弱维度。';
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

    getQuestionDimensionValues(question, dimension) {
        if (dimension === 'topics') {
            if (Array.isArray(question.search_topics) && question.search_topics.length > 0) {
                return question.search_topics;
            }
            return [question.topic || '其他'];
        }
        if (dimension === 'modules') {
            return Array.isArray(question.modules) && question.modules.length > 0
                ? question.modules
                : [question.topic || '未归类章节'];
        }
        if (dimension === 'sections') {
            return Array.isArray(question.sections) ? question.sections : [];
        }
        if (dimension === 'skills') {
            return Array.isArray(question.skills) ? question.skills : [];
        }
        return [];
    }

    buildSessionBreakdown(dimension) {
        const stats = {};

        this.filteredQuestions.forEach(q => {
            const values = this.getQuestionDimensionValues(q, dimension);
            values.forEach(label => {
                if (!stats[label]) {
                    stats[label] = { total: 0, correct: 0, wrong: 0 };
                }
                stats[label].total++;
                if (this.sessionProgress.correct.includes(q.id)) stats[label].correct++;
                if (this.sessionProgress.wrong.includes(q.id)) stats[label].wrong++;
            });
        });

        return stats;
    }

    sortBreakdownEntries(breakdown) {
        return Object.entries(breakdown)
            .map(([label, data]) => ({
                label,
                ...data,
                pct: data.total > 0 ? Math.round(data.correct / data.total * 100) : 0
            }))
            .sort((a, b) => {
                if (a.pct !== b.pct) return a.pct - b.pct;
                if (b.total !== a.total) return b.total - a.total;
                return a.label.localeCompare(b.label);
            });
    }

    renderMockDimensionGroup(container, title, breakdown, emptyText) {
        const group = document.createElement('div');
        group.className = 'mock-dimension-group';
        group.innerHTML = `<h4 class="mock-dimension-title">${title}</h4>`;

        const entries = this.sortBreakdownEntries(breakdown);
        if (entries.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'mock-topic-empty';
            empty.textContent = emptyText;
            group.appendChild(empty);
            container.appendChild(group);
            return;
        }

        entries.slice(0, 8).forEach(itemData => {
            const barCls = itemData.pct < 40 ? 'low' : itemData.pct < 70 ? 'medium' : 'high';
            const item = document.createElement('div');
            item.className = 'mock-topic-item';
            item.innerHTML = `
                <span class="mock-topic-name">${itemData.label}</span>
                <div class="mock-topic-bar-wrap">
                    <div class="mock-topic-bar ${barCls}" style="width:${itemData.pct}%"></div>
                </div>
                <span class="mock-topic-count">${itemData.correct}/${itemData.total}（${itemData.pct}%）</span>
            `;
            group.appendChild(item);
        });

        container.appendChild(group);
    }

    renderMockTopicBreakdown() {
        const list = document.getElementById('mockTopicList');
        list.innerHTML = '';

        this.renderMockDimensionGroup(
            list,
            '讲义章节',
            this.buildSessionBreakdown('modules'),
            '暂无讲义章节数据'
        );
        this.renderMockDimensionGroup(
            list,
            '细分概念',
            this.buildSessionBreakdown('sections'),
            '这套题暂时没有细分概念标签'
        );
        this.renderMockDimensionGroup(
            list,
            '解题技能',
            this.buildSessionBreakdown('skills'),
            '这套题暂时没有解题技能标签'
        );
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
        
        const topicBreakdown = this.buildSessionBreakdown('topics');
        const moduleBreakdown = this.buildSessionBreakdown('modules');
        const sectionBreakdown = this.buildSessionBreakdown('sections');
        const skillBreakdown = this.buildSessionBreakdown('skills');
        const questionResults = this.filteredQuestions.map((q, index) => ({
            index: index + 1,
            id: q.id,
            year: q.year,
            paper: q.paper,
            num: q.num,
            topic: q.topic || '',
            modules: q.modules || [],
            sections: q.sections || [],
            skills: q.skills || [],
            selected_answer: this.currentAnswers[q.id] || '',
            correct_answer: q.answer,
            is_answered: Boolean(this.currentAnswers[q.id]),
            is_correct: this.sessionProgress.correct.includes(q.id)
        }));
        
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
            topic_breakdown: topicBreakdown,
            module_breakdown: moduleBreakdown,
            section_breakdown: sectionBreakdown,
            skill_breakdown: skillBreakdown,
            taxonomy_breakdown: {
                topics: topicBreakdown,
                modules: moduleBreakdown,
                sections: sectionBreakdown,
                skills: skillBreakdown
            },
            question_results: questionResults
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
        this.stopGeneratedTimer();
        if (this.mockSession.timerId) {
            clearInterval(this.mockSession.timerId);
            this.mockSession.timerId = null;
        }

        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        const wrongBtn = document.querySelector('.filter-btn[data-filter="wrong"]');
        if (wrongBtn) wrongBtn.classList.add('active');
        ['topicSelect', 'moduleSelect', 'sectionSelect', 'skillSelect'].forEach(id => {
            document.getElementById(id).classList.add('hidden');
        });

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

    startFavoriteReview() {
        if (this.progress.favorites.length === 0) {
            alert('当前没有收藏题。可以先在题目页点击收藏。');
            this.showWelcomeView();
            return;
        }

        this.reviewMode = false;
        this.currentMode = 'favorite-review';
        this.mockSession.active = false;
        this.stopGeneratedTimer();
        if (this.mockSession.timerId) {
            clearInterval(this.mockSession.timerId);
            this.mockSession.timerId = null;
        }

        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        const favoriteBtn = document.querySelector('.filter-btn[data-filter="favorite"]');
        if (favoriteBtn) favoriteBtn.classList.add('active');
        ['topicSelect', 'moduleSelect', 'sectionSelect', 'skillSelect'].forEach(id => {
            document.getElementById(id).classList.add('hidden');
        });

        document.getElementById('questionArea').classList.remove('hidden');
        document.getElementById('resultArea').classList.add('hidden');

        this.showPracticeView();
        this.filteredQuestions = questions.filter(q => this.progress.favorites.includes(q.id));
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
        this.stopGeneratedTimer();
        if (this.mockSession.timerId) {
            clearInterval(this.mockSession.timerId);
            this.mockSession.timerId = null;
        }

        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
        ['topicSelect', 'moduleSelect', 'sectionSelect', 'skillSelect'].forEach(id => {
            document.getElementById(id).classList.add('hidden');
        });

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

    startQuickRandomSession() {
        const sourceSelect = document.getElementById('generatedSourceSelect');
        const countInput = document.getElementById('generatedCountInput');
        const minutesInput = document.getElementById('generatedMinutesInput');
        if (sourceSelect) sourceSelect.value = 'all';
        if (countInput) countInput.value = '20';
        if (minutesInput) minutesInput.value = '0';
        ['generatorModuleSelect', 'generatorSectionSelect', 'generatorSkillSelect', 'generatorTopicSelect'].forEach(id => {
            const select = document.getElementById(id);
            if (select) select.value = '';
        });
        this.startGeneratedSet(false);
    }

    startGeneratedSet(timed) {
        this.reviewMode = false;
        this.currentMode = timed ? 'timed-set' : 'generated-set';
        this.mockSession.active = false;
        if (this.mockSession.timerId) {
            clearInterval(this.mockSession.timerId);
            this.mockSession.timerId = null;
        }
        this.stopGeneratedTimer();

        const countInput = document.getElementById('generatedCountInput');
        const minutesInput = document.getElementById('generatedMinutesInput');
        const requestedCount = Math.max(1, Math.min(50, parseInt(countInput.value || '20', 10)));
        const minutes = Math.max(0, Math.min(180, parseInt(minutesInput.value || '0', 10)));
        const pool = this.getGeneratorPool();
        if (pool.length === 0) {
            alert('当前组卷条件下没有可用题目。');
            return;
        }

        this.filteredQuestions = this.shuffleArray(pool).slice(0, Math.min(requestedCount, pool.length));
        this.currentIndex = 0;
        this.currentAnswers = {};
        this.resetSessionProgress();
        this.showPracticeView();
        const answerCardPanel = document.getElementById('answerCardPanel');
        if (answerCardPanel) answerCardPanel.open = true;
        document.getElementById('questionArea').classList.remove('hidden');
        document.getElementById('resultArea').classList.add('hidden');

        this.generatedSession.active = true;
        this.generatedSession.label = this.buildGeneratedSessionLabel(timed, pool.length);
        this.generatedSession.durationSeconds = timed && minutes > 0 ? minutes * 60 : 0;
        this.generatedSession.remainingSeconds = this.generatedSession.durationSeconds;

        if (this.generatedSession.durationSeconds > 0) {
            this.generatedSession.timerId = setInterval(() => {
                this.generatedSession.remainingSeconds--;
                this.updateGeneratedTimerUI();
                if (this.generatedSession.remainingSeconds <= 0) {
                    this.stopGeneratedTimer();
                    this.showResult();
                }
            }, 1000);
        }

        this.updateGeneratedTimerUI();
        this.updateMockUI();
        this.showQuestion();
    }

    showGeneratorSelectView(returnView = 'practice') {
        this.generatorReturnView = returnView;
        document.getElementById('welcomeView').classList.add('hidden');
        document.getElementById('mockSelectView').classList.add('hidden');
        document.getElementById('mockResultView').classList.add('hidden');
        document.getElementById('practiceView').classList.add('hidden');
        document.getElementById('generatorSelectView').classList.remove('hidden');
        const backLink = document.getElementById('generatorBackLink');
        if (backLink) {
            backLink.textContent = returnView === 'welcome' ? '← 返回首页' : '← 返回练习';
        }
        this.updateGeneratorPreview();
    }

    openGeneratorPanel(mode = 'build') {
        const panel = document.getElementById('generatorPanel');
        if (panel) panel.dataset.mode = mode;
        this.showGeneratorSelectView('practice');
    }

    getGeneratorCriteria() {
        return {
            source: document.getElementById('generatedSourceSelect')?.value || 'all',
            module: document.getElementById('generatorModuleSelect')?.value || '',
            section: document.getElementById('generatorSectionSelect')?.value || '',
            skill: document.getElementById('generatorSkillSelect')?.value || '',
            topic: document.getElementById('generatorTopicSelect')?.value || ''
        };
    }

    getGeneratorBasePool(source = 'all') {
        if (source === 'wrong') return questions.filter(q => this.progress.wrong.includes(q.id));
        if (source === 'favorite') return questions.filter(q => this.progress.favorites.includes(q.id));
        return questions;
    }

    filterGeneratorPool(criteria, ignoreKey = '') {
        let pool = this.getGeneratorBasePool(criteria.source);
        if (ignoreKey !== 'module') pool = pool.filter(q => questionMatchesTag(q, 'module', criteria.module));
        if (ignoreKey !== 'section') pool = pool.filter(q => questionMatchesTag(q, 'section', criteria.section));
        if (ignoreKey !== 'skill') pool = pool.filter(q => questionMatchesTag(q, 'skill', criteria.skill));
        if (ignoreKey !== 'topic') pool = pool.filter(q => questionMatchesTag(q, 'topic', criteria.topic));
        return pool;
    }

    syncGeneratorFilterOptions(criteria) {
        const controls = [
            { key: 'module', id: 'generatorModuleSelect', field: 'modules', placeholder: '全部讲义章节' },
            { key: 'section', id: 'generatorSectionSelect', field: 'sections', placeholder: '全部细分概念' },
            { key: 'skill', id: 'generatorSkillSelect', field: 'skills', placeholder: '全部解题技能' },
            { key: 'topic', id: 'generatorTopicSelect', field: 'search_topics', placeholder: '全部 Topic 分类' }
        ];

        controls.forEach(control => {
            const optionPool = this.filterGeneratorPool(criteria, control.key);
            const values = uniqueSorted(optionPool.flatMap(q => q[control.field] || []));
            criteria[control.key] = this.setSelectOptions(control.id, values, control.placeholder, criteria[control.key]);
        });

        return criteria;
    }

    getGeneratorPool() {
        const criteria = this.syncGeneratorFilterOptions(this.getGeneratorCriteria());
        return this.filterGeneratorPool(criteria);
    }

    buildGeneratedSessionLabel(timed, poolSize) {
        const source = document.getElementById('generatedSourceSelect')?.value || 'all';
        const sourceLabel = {
            all: '全部题库',
            wrong: '错题本',
            favorite: '收藏'
        }[source] || '全部题库';
        const tagLabels = [
            document.getElementById('generatorModuleSelect')?.value,
            document.getElementById('generatorSectionSelect')?.value,
            document.getElementById('generatorSkillSelect')?.value,
            document.getElementById('generatorTopicSelect')?.value
        ].filter(Boolean);
        const tagText = tagLabels.length > 0 ? ` · ${tagLabels.join(' / ')}` : '';
        return `${timed ? '限时练习' : '随机练习'} · ${sourceLabel}${tagText} · 题池 ${poolSize}`;
    }

    updateGeneratorPreview() {
        const pool = this.getGeneratorPool();
        const requestedCount = Math.max(1, Math.min(50, parseInt(document.getElementById('generatedCountInput')?.value || '20', 10)));
        const selectedCount = Math.min(requestedCount, pool.length);
        const minutes = Math.max(0, Math.min(180, parseInt(document.getElementById('generatedMinutesInput')?.value || '0', 10)));
        const source = document.getElementById('generatedSourceSelect')?.value || 'all';
        const sourceLabel = {
            all: '全部题库',
            wrong: '错题本',
            favorite: '收藏'
        }[source] || '全部题库';
        const activeTags = [
            document.getElementById('generatorModuleSelect')?.value,
            document.getElementById('generatorSectionSelect')?.value,
            document.getElementById('generatorSkillSelect')?.value,
            document.getElementById('generatorTopicSelect')?.value
        ].filter(Boolean);
        const filterText = activeTags.length > 0 ? ` · ${activeTags.join(' / ')}` : '';
        const poolSummary = document.getElementById('generatorPoolSummary');
        const exportLabel = document.getElementById('exportPreviewLabel');
        if (poolSummary) {
            poolSummary.textContent = `${sourceLabel}${filterText}：${pool.length} 题，将抽取 ${selectedCount} 题${minutes > 0 ? `，限时 ${minutes} 分钟` : ''}`;
        }
        if (exportLabel) {
            exportLabel.textContent = `预览：将下载 ${selectedCount} 题`;
        }
    }

    stopGeneratedTimer() {
        if (this.generatedSession.timerId) {
            clearInterval(this.generatedSession.timerId);
            this.generatedSession.timerId = null;
        }
        this.generatedSession.active = false;
        const status = document.getElementById('mockStatus');
        const timer = document.getElementById('mockTimer');
        if (status && !this.mockSession.active) status.classList.add('hidden');
        if (timer && !this.mockSession.active) timer.classList.add('hidden');
        this.updateMockUI();
    }

    updateGeneratedTimerUI() {
        const status = document.getElementById('mockStatus');
        const timer = document.getElementById('mockTimer');
        if (!status || !timer) return;
        if (this.generatedSession.active) {
            status.textContent = `当前模式: ${this.generatedSession.label}`;
            status.classList.remove('hidden');
            if (this.generatedSession.durationSeconds > 0) {
                timer.textContent = this.formatTime(this.generatedSession.remainingSeconds);
                timer.classList.remove('hidden');
            } else {
                timer.classList.add('hidden');
            }
            this.updateMockUI();
        }
    }

    exportCurrentWorksheet() {
        const generatorViewOpen = !document.getElementById('generatorSelectView')?.classList.contains('hidden');
        const pool = generatorViewOpen ? this.getGeneratorPool() : this.buildFilteredQuestions();
        const requestedCount = Math.max(1, Math.min(50, parseInt(document.getElementById('generatedCountInput')?.value || '20', 10)));
        const set = generatorViewOpen
            ? this.shuffleArray(pool).slice(0, Math.min(requestedCount, pool.length))
            : (this.filteredQuestions.length > 0 ? this.filteredQuestions : pool);
        if (set.length === 0) {
            alert('当前组卷条件下没有可导出的题目。');
            return;
        }
        const text = exportWorksheet(set, {
            title: this.courseConfig?.title || '练习单',
            includeAnswers: document.getElementById('exportIncludeAnswers')?.checked !== false,
            includeAnalysis: document.getElementById('exportIncludeAnalysis')?.checked === true,
            includeTags: document.getElementById('exportIncludeTags')?.checked !== false,
            assetBase: new URL('.', window.location.href).href
        });
        const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `practice-worksheet-${new Date().toISOString().slice(0, 10)}.html`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }

    getDimensionPerformance(dimension) {
        const stats = {};

        questions.forEach(q => {
            const values = this.getQuestionDimensionValues(q, dimension);
            values.forEach(label => {
                if (!stats[label]) {
                    stats[label] = {
                        total: 0,
                        completed: 0,
                        correct: 0
                    };
                }

                stats[label].total++;

                if (this.progress.completed.includes(q.id)) {
                    stats[label].completed++;
                }

                if (this.progress.correct.includes(q.id)) {
                    stats[label].correct++;
                }
            });
        });

        return Object.entries(stats).map(([label, data]) => {
            const accuracy = data.completed > 0 ? Math.round(data.correct / data.completed * 100) : null;
            return { label, ...data, accuracy };
        });
    }

    getTopicPerformance() {
        return this.getDimensionPerformance('topics').map(item => ({
            topic: item.label,
            ...item
        }));
    }

    renderInsights() {
        const topicStats = document.getElementById('topicStats');
        const weakTopics = document.getElementById('weakTopics');
        const modulePerformance = this.getDimensionPerformance('modules');
        const sectionPerformance = this.getDimensionPerformance('sections');
        const skillPerformance = this.getDimensionPerformance('skills');

        const sortedByCoverage = [...modulePerformance]
            .sort((a, b) => {
                if (b.completed !== a.completed) return b.completed - a.completed;
                return a.label.localeCompare(b.label);
            })
            .slice(0, 6);

        if (modulePerformance.every(item => item.completed === 0)) {
            topicStats.innerHTML = '<div class="insight-empty">暂时没有可统计的数据</div>';
        } else {
            topicStats.innerHTML = sortedByCoverage.map(item => {
                const accuracyText = item.accuracy === null ? '未作答' : `${item.accuracy}%`;
                return `<div class="insight-item"><span>${item.label}</span><span>${item.correct}/${item.completed}，正确率 ${accuracyText}</span></div>`;
            }).join('');
        }

        const weakList = [
            ...sectionPerformance.map(item => ({ ...item, kind: '概念' })),
            ...skillPerformance.map(item => ({ ...item, kind: '技能' }))
        ]
            .filter(item => item.completed > 0)
            .sort((a, b) => {
                if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
                if (b.completed !== a.completed) return b.completed - a.completed;
                return a.label.localeCompare(b.label);
            })
            .slice(0, 4);

        if (weakList.length === 0) {
            weakTopics.innerHTML = '<div class="insight-empty">先做一些题目后，这里会显示你的薄弱概念和技能</div>';
        } else {
            weakTopics.innerHTML = weakList.map(item => {
                return `<div class="insight-item"><span>${item.kind} · ${item.label}</span><span>正确率 ${item.accuracy}%</span></div>`;
            }).join('');
        }
    }

    renderAnswerCard() {
        const container = document.getElementById('answerCardContainer');
        container.innerHTML = '';
        const currentQuestion = this.filteredQuestions[this.currentIndex];

        if (this.currentMode === 'mock') {
            // 模拟模式：扁平列表
            const grid = document.createElement('div');
            grid.className = 'answer-card-grid';
            this.filteredQuestions.forEach((q, index) => {
                this._appendAnswerCardItem(grid, q, index, index + 1);
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

            const sortedYears = Object.keys(yearGroups).sort((a, b) => Number(b) - Number(a));

            sortedYears.forEach(year => {
                const isCurrentYear = currentQuestion && String(currentQuestion.year) === String(year);
                const yearGroupEl = document.createElement('div');
                yearGroupEl.className = 'answer-card-year';

                const yearTitleEl = document.createElement('div');
                yearTitleEl.className = 'answer-card-year-title';

                const totalCount = Object.values(yearGroups[year]).reduce((s, arr) => s + arr.length, 0);
                yearTitleEl.innerHTML = `<span class="year-label">${year}</span><span class="year-count">${totalCount}题</span>`;
                yearTitleEl.dataset.year = year;

                const yearBodyEl = document.createElement('div');
                yearBodyEl.className = 'answer-card-year-body';
                if (!isCurrentYear) {
                    yearTitleEl.classList.add('collapsed');
                    yearBodyEl.style.display = 'none';
                }

                // 点击年份标题折叠/展开
                yearTitleEl.addEventListener('click', () => {
                    const collapsed = yearTitleEl.classList.toggle('collapsed');
                    yearBodyEl.style.display = collapsed ? 'none' : '';
                });

                // paper 在数据中是整数 1/2，按数值排序
                const sortedPapers = Object.keys(yearGroups[year]).sort((a, b) => a - b);

                sortedPapers.forEach(paper => {
                    const isCurrentPaper = isCurrentYear && currentQuestion && String(currentQuestion.paper) === String(paper);
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
                    if (!isCurrentPaper) {
                        paperTitleEl.classList.add('collapsed');
                        paperGridEl.style.display = 'none';
                    }

                    // 点击Paper标题折叠/展开
                    paperTitleEl.addEventListener('click', () => {
                        const collapsed = paperTitleEl.classList.toggle('collapsed');
                        paperGridEl.style.display = collapsed ? 'none' : '';
                    });

                    items.forEach(({ q, index }) => {
                        this._appendAnswerCardItem(paperGridEl, q, index, `Q${q.num || index + 1}`);
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

    _appendAnswerCardItem(parent, q, index, label = index + 1) {
        const btn = document.createElement('button');
        btn.className = 'answer-card-item';
        btn.textContent = label;
        btn.title = `${index + 1}. ${getQuestionLabel(q)}`;

        if (index === this.currentIndex) {
            btn.classList.add('current');
        }

        if (this.progress.favorites.includes(q.id)) {
            btn.classList.add('favorite');
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
        this.applyFilter();
    }
    
    applyFilter(topic = null) {
        if (topic !== null) this.selectedTopic = topic;
        let filtered = this.buildFilteredQuestions();
        this.filteredQuestions = filtered;
        this.currentIndex = 0;
        this.currentAnswers = {};
        this.resetSessionProgress();
        this.showQuestion();
    }

    buildFilteredQuestions() {
        let filtered = questions;

        if (this.selectedYear !== 'all') {
            filtered = filtered.filter(q => q.year == this.selectedYear);
        }

        if (this.selectedPaper !== 'all') {
            filtered = filtered.filter(q => q.paper == this.selectedPaper);
        }

        if (this.filter === 'topic') {
            filtered = filtered.filter(q => questionMatchesTag(q, 'topic', this.selectedTopic));
            filtered = filtered.filter(q => questionMatchesTag(q, 'module', this.selectedModule));
            filtered = filtered.filter(q => questionMatchesTag(q, 'section', this.selectedSection));
            filtered = filtered.filter(q => questionMatchesTag(q, 'skill', this.selectedSkill));
        } else if (this.filter === 'wrong') {
            filtered = filtered.filter(q => this.progress.wrong.includes(q.id));
        } else if (this.filter === 'favorite') {
            filtered = filtered.filter(q => this.progress.favorites.includes(q.id));
        } else if (this.filter === 'uncompleted') {
            filtered = filtered.filter(q => !this.progress.completed.includes(q.id));
        }

        return filtered;
    }
    
    showQuestion() {
        this.pendingRevealCorrect = null;  // 切换题目时清除待揭示的正确答案
        if (this.filteredQuestions.length === 0) {
            document.getElementById('questionText').textContent = '没有符合条件的题目';
            document.getElementById('optionsArea').innerHTML = '';
            document.getElementById('questionCounter').textContent = '无题目';
            document.getElementById('filteredCountLabel').textContent = '当前 0 题';
            document.getElementById('questionTags').innerHTML = '';
            this.updateQuestionJump();
            this.updateActiveFilterSummary();
            document.getElementById('prevBtn').disabled = true;
            document.getElementById('nextBtn').disabled = true;
            document.getElementById('answerCardContainer').innerHTML = '';
            return;
        }
        
        const q = this.filteredQuestions[this.currentIndex];
        
        // 更新题目计数器
        document.getElementById('questionCounter').textContent = 
            `第 ${this.currentIndex + 1} 题 / 共 ${this.filteredQuestions.length} 题`;
        document.getElementById('filteredCountLabel').textContent = `当前筛选 ${this.filteredQuestions.length} 题`;
        this.updateQuestionJump();
        this.updateActiveFilterSummary();
        this.updateGeneratorPreview();
        
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
        this.renderQuestionTags(q);
        this.updateFavoriteButton(q);
        
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

    updateQuestionJump() {
        const select = document.getElementById('questionJumpSelect');
        if (!select) return;
        const currentId = this.filteredQuestions[this.currentIndex]?.id || '';
        select.innerHTML = '<option value="">题目跳转</option>';
        this.filteredQuestions.forEach((question, index) => {
            const option = document.createElement('option');
            option.value = question.id;
            option.textContent = `${index + 1}. ${getQuestionLabel(question)}`;
            select.appendChild(option);
        });
        select.value = currentId;
    }

    updateActiveFilterSummary() {
        const summary = document.getElementById('activeFilterSummary');
        if (!summary) return;

        const parts = [];
        if (this.selectedYear !== 'all') parts.push(this.selectedYear);
        if (this.selectedPaper !== 'all') parts.push(`Paper ${this.selectedPaper}`);

        if (this.filter === 'topic') {
            if (this.selectedTopic) parts.push(this.selectedTopic);
            if (this.selectedModule) parts.push(this.selectedModule);
            if (this.selectedSection) parts.push(this.selectedSection);
            if (this.selectedSkill) parts.push(this.selectedSkill);
            if (parts.length === 0) parts.push('按知识点');
        } else if (this.filter === 'wrong') {
            parts.push('错题本');
        } else if (this.filter === 'favorite') {
            parts.push('收藏');
        } else if (this.filter === 'uncompleted') {
            parts.push('未完成');
        } else if (parts.length === 0) {
            parts.push('全部题目');
        }

        summary.textContent = `${parts.join(' · ')} · ${this.filteredQuestions.length} 题`;
    }

    renderQuestionTags(question) {
        const container = document.getElementById('questionTags');
        if (!container) return;
        const chips = [];
        chips.push({ label: question.topic, type: 'topic' });
        (question.related_topics || []).forEach(value => chips.push({ label: value, type: 'related' }));
        (question.modules || []).forEach(value => chips.push({ label: value, type: 'module' }));
        (question.sections || []).forEach(value => chips.push({ label: value, type: 'section' }));
        (question.skills || []).forEach(value => chips.push({ label: value, type: 'skill' }));
        if (question.difficulty) chips.push({ label: `D${question.difficulty}`, type: 'difficulty' });

        container.innerHTML = chips.map(chip => (
            `<button class="tag-chip tag-${chip.type}" data-tag-type="${chip.type}" data-tag="${chip.label}">${chip.label}</button>`
        )).join('');

        container.querySelectorAll('.tag-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const type = chip.dataset.tagType;
                const value = chip.dataset.tag;
                if (type === 'topic' || type === 'related') {
                    this.filter = 'topic';
                    this.selectedTopic = value;
                    document.getElementById('topicSelect').value = value;
                } else if (type === 'module') {
                    this.filter = 'topic';
                    this.selectedModule = value;
                    document.getElementById('moduleSelect').value = value;
                } else if (type === 'section') {
                    this.filter = 'topic';
                    this.selectedSection = value;
                    document.getElementById('sectionSelect').value = value;
                } else if (type === 'skill') {
                    this.filter = 'topic';
                    this.selectedSkill = value;
                    document.getElementById('skillSelect').value = value;
                } else {
                    return;
                }
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === 'topic');
                });
                ['topicSelect', 'moduleSelect', 'sectionSelect', 'skillSelect'].forEach(id => {
                    document.getElementById(id).classList.remove('hidden');
                });
                this.applyFilter();
            });
        });
    }

    updateFavoriteButton(question) {
        const btn = document.getElementById('favoriteBtn');
        if (!btn || !question) return;
        const isFavorite = this.progress.favorites.includes(question.id);
        btn.classList.toggle('active', isFavorite);
        btn.textContent = isFavorite ? '已收藏' : '收藏';
    }

    toggleCurrentFavorite() {
        const q = this.getCurrentQuestion();
        if (!q) return;
        this.progress = toggleFavorite(this.progress, q.id);
        this.saveProgress();
        this.updateFavoriteButton(q);
        this.renderAnswerCard();
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
        if (this.generatedSession.timerId) {
            clearInterval(this.generatedSession.timerId);
            this.generatedSession.timerId = null;
        }
        const wasGeneratedMode = this.currentMode === 'generated-set' || this.currentMode === 'timed-set';
        if (wasGeneratedMode) {
            this.generatedSession.active = false;
            this.updateMockUI();
        }
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
        const sessionSummaryBox = document.getElementById('sessionSummaryBox');
        sessionSummaryBox.classList.add('hidden');
        sessionSummaryBox.innerHTML = '';

        if (this.currentMode === 'mock') {
            resultModeText.textContent = `模式: 限时模拟（${this.mockSession.paperLabel}）`;
            const usedSeconds = this.mockSession.durationSeconds - this.mockSession.remainingSeconds;
            mockSummaryText.textContent = `本次模拟用时: ${this.formatTime(usedSeconds)}，剩余时间: ${this.formatTime(this.mockSession.remainingSeconds)}`;
            mockSummaryText.classList.remove('hidden');
        } else if (this.currentMode === 'wrong-redo') {
            resultModeText.textContent = '模式: 错题二刷';
            mockSummaryText.classList.add('hidden');
        } else if (this.currentMode === 'favorite-review') {
            resultModeText.textContent = '模式: 收藏复习';
            mockSummaryText.classList.add('hidden');
        } else if (this.currentMode === 'shuffle') {
            resultModeText.textContent = '模式: 随机练习';
            mockSummaryText.classList.add('hidden');
        } else if (this.currentMode === 'generated-set' || this.currentMode === 'timed-set') {
            resultModeText.textContent = `模式: ${this.generatedSession.label || '组卷练习'}`;
            if (this.generatedSession.durationSeconds > 0) {
                const usedSeconds = this.generatedSession.durationSeconds - this.generatedSession.remainingSeconds;
                mockSummaryText.textContent = `本次用时: ${this.formatTime(usedSeconds)}，设定时间: ${this.formatTime(this.generatedSession.durationSeconds)}`;
                mockSummaryText.classList.remove('hidden');
            } else {
                mockSummaryText.classList.add('hidden');
            }
            this.renderSessionSummary(sessionSummaryBox);
        } else {
            resultModeText.textContent = '模式: 普通练习';
            mockSummaryText.classList.add('hidden');
        }
    }

    renderSessionSummary(container) {
        if (!container) return;
        const wrongQuestions = this.filteredQuestions.filter(q => this.sessionProgress.wrong.includes(q.id));
        const moduleCounts = {};
        wrongQuestions.forEach(q => {
            (q.modules?.length ? q.modules : [q.topic || 'Unclassified']).forEach(tag => {
                moduleCounts[tag] = (moduleCounts[tag] || 0) + 1;
            });
        });
        const weakModules = Object.entries(moduleCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);

        const wrongText = wrongQuestions.length === 0
            ? '本组没有错题，可以提高题量或切换更窄的技能筛选。'
            : `错题：${wrongQuestions.map(q => getQuestionLabel(q)).join(', ')}`;
        const weakText = weakModules.length === 0
            ? '暂无明显薄弱模块。'
            : `建议回看：${weakModules.map(([tag, count]) => `${tag} (${count})`).join('，')}`;

        container.innerHTML = `
            <strong>本组复盘</strong>
            <p>${wrongText}</p>
            <p>${weakText}</p>
        `;
        container.classList.remove('hidden');
    }
    
    restart() {
        if (this.mockSession.timerId) {
            clearInterval(this.mockSession.timerId);
            this.mockSession.timerId = null;
        }

        this.reviewMode = false;
        this.mockSession.active = false;
        this.stopGeneratedTimer();
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
            wrong: [],
            favorites: [],
            generatedSets: []
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
        document.getElementById('practiceView').classList.remove('generated-active');
        document.getElementById('mockHeader').classList.add('hidden');

        // 隐藏所有其他视图（包括模拟结果页）
        document.getElementById('mockResultView').classList.add('hidden');
        document.getElementById('practiceView').classList.add('hidden');
        document.getElementById('mockSelectView').classList.add('hidden');
        document.getElementById('generatorSelectView').classList.add('hidden');
        document.getElementById('welcomeView').classList.remove('hidden');
        this.updateWelcomeProgress();
    }

    showPracticeView() {
        document.getElementById('welcomeView').classList.add('hidden');
        document.getElementById('mockSelectView').classList.add('hidden');
        document.getElementById('generatorSelectView').classList.add('hidden');
        document.getElementById('mockResultView').classList.add('hidden');
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
        document.getElementById('generatorSelectView').classList.add('hidden');
        document.getElementById('mockResultView').classList.add('hidden');
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

        const years = this.questionIndex?.years || [];

        years.forEach(year => {
            const yearQuestions = questions.filter(q => q.year === year);
            const total = yearQuestions.length;
            const completed = yearQuestions.filter(q => this.progress.completed.includes(q.id)).length;
            const correct = yearQuestions.filter(q => this.progress.correct.includes(q.id)).length;

            let statusIcon = '未开始';
            if (completed === total && total > 0) {
                statusIcon = '完成';
            } else if (completed > 0) {
                statusIcon = '进行中';
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

        (this.questionIndex?.papers || [1, 2]).forEach(paper => {
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
            this.stopGeneratedTimer();

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
        } else if (mode === 'favorite') {
            this.startFavoriteReview();
        } else if (mode === 'builder') {
            this.showGeneratorSelectView('welcome');
        } else if (mode === 'shuffle') {
            this.startQuickRandomSession();
        }
    }
}

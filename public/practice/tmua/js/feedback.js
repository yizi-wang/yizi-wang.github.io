
(function () {
    const QUICKFORM_FEEDBACK_API_URL = 'https://quickform.cn/api/e2c8pe6qws';
    const APP_VERSION = 'tmua-practice-zip-2026-06';

    function getElement(id) {
        return document.getElementById(id);
    }

    function stringifyValue(value) {
        if (value == null) return '';
        if (Array.isArray(value) || typeof value === 'object') return JSON.stringify(value);
        return String(value);
    }

    function getQuestionSummary(question) {
        if (!question) return '系统问题';
        return question.id + ' · ' + (question.topic || 'Unclassified');
    }

    function readField(id) {
        const element = getElement(id);
        return element ? element.value.trim() : '';
    }

    function writeStatus(text, kind) {
        const status = getElement('feedbackStatus');
        if (!status) return;
        status.textContent = text || '';
        status.classList.remove('success', 'error');
        if (kind) status.classList.add(kind);
    }

    function saveFeedbackRecord(payload, status) {
        try {
            const key = 'tmua_feedback_submissions';
            const saved = JSON.parse(localStorage.getItem(key) || '[]');
            saved.unshift({
                status,
                submitted_at: new Date().toISOString(),
                feedback_kind: payload.feedback_kind,
                question_id: payload.question_id || '',
                feedback_type: payload.feedback_type,
                message: payload.message
            });
            localStorage.setItem(key, JSON.stringify(saved.slice(0, 20)));
        } catch (error) {
            console.warn('Could not save feedback record', error);
        }
    }

    async function postJson(payload) {
        const response = await fetch(QUICKFORM_FEEDBACK_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        let result = null;
        try {
            result = await response.json();
        } catch (error) {
            result = null;
        }
        if (!response.ok) {
            throw new Error(result?.message || `HTTP ${response.status}`);
        }
        if (result && result.status && result.status !== 'success') {
            throw new Error(result.message || 'QuickForm 返回提交失败');
        }
        return { success: true, confirmed: true };
    }

    async function postNoCors(payload) {
        const formBody = new URLSearchParams();
        Object.entries(payload).forEach(([key, value]) => formBody.append(key, stringifyValue(value)));
        formBody.append('payload_json', JSON.stringify(payload));
        await fetch(QUICKFORM_FEEDBACK_API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formBody.toString()
        });
        return { success: true, confirmed: false };
    }

    async function copyPayload(payload) {
        const text = JSON.stringify(payload, null, 2);
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
        }
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', 'readonly');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    if (typeof TMUAQuiz === 'undefined') return;

    const originalSetupEventListeners = TMUAQuiz.prototype.setupEventListeners;
    TMUAQuiz.prototype.setupEventListeners = function () {
        originalSetupEventListeners.call(this);
        this.setupFeedbackListeners();
    };

    TMUAQuiz.prototype.setupFeedbackListeners = function () {
        const questionBtn = getElement('questionFeedbackBtn');
        if (questionBtn) questionBtn.addEventListener('click', () => this.openFeedbackModal('question'));

        ['systemFeedbackBtn', 'welcomeFeedbackBtn'].forEach(id => {
            const button = getElement(id);
            if (button) button.addEventListener('click', () => this.openFeedbackModal('system'));
        });

        const form = getElement('feedbackForm');
        if (form) form.addEventListener('submit', event => {
            event.preventDefault();
            this.submitFeedback();
        });

        const closeBtn = getElement('feedbackCloseBtn');
        if (closeBtn) closeBtn.addEventListener('click', () => this.closeFeedbackModal());

        const backdrop = getElement('feedbackBackdrop');
        if (backdrop) backdrop.addEventListener('click', () => this.closeFeedbackModal());

        const copyBtn = getElement('feedbackCopyBtn');
        if (copyBtn) copyBtn.addEventListener('click', () => this.copyCurrentFeedbackPayload());
    };

    TMUAQuiz.prototype.getCurrentQuestionForFeedback = function () {
        return this.filteredQuestions && this.filteredQuestions.length
            ? this.filteredQuestions[this.currentIndex]
            : null;
    };

    TMUAQuiz.prototype.openFeedbackModal = function (kind) {
        this.feedbackKind = kind === 'question' ? 'question' : 'system';
        const question = this.feedbackKind === 'question' ? this.getCurrentQuestionForFeedback() : null;
        const modal = getElement('feedbackModal');
        const context = getElement('feedbackContext');
        const title = getElement('feedbackModalTitle');
        if (!modal) return;

        if (title) title.textContent = this.feedbackKind === 'question' ? '反馈这道题' : '反馈系统问题';
        if (context) context.textContent = getQuestionSummary(question);

        const type = getElement('feedbackType');
        if (type) type.value = this.feedbackKind === 'question' ? '题干/公式显示错误' : '系统使用问题';
        ['feedbackMessage', 'feedbackTeacherName', 'feedbackSchool', 'feedbackContact'].forEach(id => {
            const field = getElement(id);
            if (field) field.value = '';
        });
        writeStatus('', null);
        modal.classList.remove('hidden');
        const message = getElement('feedbackMessage');
        if (message) message.focus();
    };

    TMUAQuiz.prototype.closeFeedbackModal = function () {
        const modal = getElement('feedbackModal');
        if (modal) modal.classList.add('hidden');
    };

    TMUAQuiz.prototype.buildFeedbackPayload = function () {
        const question = this.feedbackKind === 'question' ? this.getCurrentQuestionForFeedback() : null;
        const payload = {
            source: 'tmua-practice-zip',
            app_version: APP_VERSION,
            feedback_kind: this.feedbackKind || 'system',
            submitted_at: new Date().toISOString(),
            page_url: window.location.href,
            user_agent: navigator.userAgent,
            feedback_type: readField('feedbackType'),
            message: readField('feedbackMessage'),
            teacher_name: readField('feedbackTeacherName'),
            school: readField('feedbackSchool'),
            contact: readField('feedbackContact'),
            selected_year: this.selectedYear,
            selected_paper: this.selectedPaper,
            active_filter: this.filter,
            current_index: this.currentIndex + 1,
            filtered_count: this.filteredQuestions ? this.filteredQuestions.length : 0
        };

        if (question) {
            Object.assign(payload, {
                question_id: question.id,
                year: question.year,
                paper: question.paper,
                num: question.num,
                topic: question.topic || '',
                related_topics: question.related_topics || [],
                modules: question.modules || [],
                sections: question.sections || [],
                skills: question.skills || [],
                primary_section: question.primary_section || '',
                has_image: Boolean(question.has_image),
                images: question.images || null,
                selected_answer: this.currentAnswers[question.id] || '',
                correct_answer: question.answer || ''
            });
        }

        return payload;
    };

    TMUAQuiz.prototype.submitFeedback = async function () {
        const payload = this.buildFeedbackPayload();
        if (!payload.message) {
            writeStatus('请先写一句反馈说明。', 'error');
            const message = getElement('feedbackMessage');
            if (message) message.focus();
            return;
        }

        const submitBtn = getElement('feedbackSubmitBtn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = '提交中...';
        }
        writeStatus('正在提交...', null);

        try {
            const result = await postJson(payload).catch(async error => {
                console.warn('JSON feedback submit failed, trying no-cors fallback', error);
                return postNoCors(payload);
            });
            saveFeedbackRecord(payload, result.confirmed ? 'confirmed' : 'sent_unconfirmed');
            if (result.confirmed) {
                writeStatus('已提交，谢谢反馈。', 'success');
            } else {
                writeStatus('已发送；本地文件模式下无法确认回执。', 'success');
            }
            setTimeout(() => this.closeFeedbackModal(), 900);
        } catch (error) {
            saveFeedbackRecord(payload, 'failed');
            writeStatus('提交失败，可以复制反馈内容后手动发送。', 'error');
            console.error('Feedback submit failed', error);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = '提交反馈';
            }
        }
    };

    TMUAQuiz.prototype.copyCurrentFeedbackPayload = async function () {
        const payload = this.buildFeedbackPayload();
        try {
            await copyPayload(payload);
            writeStatus('反馈内容已复制。', 'success');
        } catch (error) {
            writeStatus('复制失败，请手动复制文本。', 'error');
            console.error('Feedback copy failed', error);
        }
    };
})();

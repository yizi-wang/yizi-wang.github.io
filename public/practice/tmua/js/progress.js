// progress.js - 进度管理（localStorage 读写）

/**
 * 从 localStorage 加载进度数据
 * @returns {Object} 进度对象 { completed: [], correct: [], wrong: [] }
 */
function loadProgressFromStorage() {
    const saved = localStorage.getItem('tmua_progress');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Failed to parse progress:', e);
            return { completed: [], correct: [], wrong: [] };
        }
    }
    return { completed: [], correct: [], wrong: [] };
}

/**
 * 保存进度数据到 localStorage
 * @param {Object} progress - 进度对象
 */
function saveProgressToStorage(progress) {
    localStorage.setItem('tmua_progress', JSON.stringify(progress));
}

/**
 * 重置会话进度（用于新一轮练习）
 * @returns {Object} 空的会话进度对象
 */
function resetSessionProgress() {
    return { completed: [], correct: [], wrong: [] };
}

/**
 * 清空所有进度数据
 */
function clearAllProgress() {
    localStorage.removeItem('tmua_progress');
    return { completed: [], correct: [], wrong: [] };
}

/**
 * 更新进度：添加正确答案
 * @param {Object} progress - 进度对象
 * @param {string} questionId - 题目 ID
 * @returns {Object} 更新后的进度对象
 */
function markCorrect(progress, questionId) {
    if (!progress.correct.includes(questionId)) {
        progress.correct.push(questionId);
    }
    progress.wrong = progress.wrong.filter(id => id !== questionId);
    if (!progress.completed.includes(questionId)) {
        progress.completed.push(questionId);
    }
    return progress;
}

/**
 * 更新进度：添加错误答案
 * @param {Object} progress - 进度对象
 * @param {string} questionId - 题目 ID
 * @returns {Object} 更新后的进度对象
 */
function markWrong(progress, questionId) {
    if (!progress.wrong.includes(questionId)) {
        progress.wrong.push(questionId);
    }
    progress.correct = progress.correct.filter(id => id !== questionId);
    if (!progress.completed.includes(questionId)) {
        progress.completed.push(questionId);
    }
    return progress;
}

/**
 * 计算正确率
 * @param {Object} progress - 进度对象
 * @returns {number} 正确率百分比
 */
function calculateAccuracy(progress) {
    const completed = progress.completed.length;
    const correct = progress.correct.length;
    return completed > 0 ? Math.round(correct / completed * 100) : 0;
}
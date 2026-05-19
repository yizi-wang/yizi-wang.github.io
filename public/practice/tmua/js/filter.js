// filter.js - 筛选逻辑（年份、Paper、知识点、难度筛选）

/**
 * 按年份和 Paper 筛选题目
 * @param {Array} questions - 所有题目数组
 * @param {string} year - 年份（'all' 或具体年份）
 * @param {string} paper - 试卷（'all' 或 '1'/'2'）
 * @returns {Array} 筛选后的题目数组
 */
function applyYearPaperFilter(questions, year, paper) {
    let filtered = questions;
    
    if (year !== 'all') {
        filtered = filtered.filter(q => q.year == year);
    }
    
    if (paper !== 'all') {
        filtered = filtered.filter(q => q.paper == paper);
    }
    
    return filtered;
}

/**
 * 按知识点筛选题目
 * @param {Array} questions - 题目数组
 * @param {string} topic - 知识点名称
 * @returns {Array} 筛选后的题目数组
 */
function applyTopicFilter(questions, topic) {
    if (!topic) return questions;
    return questions.filter(q => (q.search_topics || [q.topic]).includes(topic));
}

function applyTagFilter(questions, type, value) {
    if (!value) return questions;
    return questions.filter(q => questionMatchesTag(q, type, value));
}

/**
 * 按状态筛选题目（错题、未完成等）
 * @param {Array} questions - 题目数组
 * @param {Object} progress - 进度对象
 * @param {string} filterType - 筛选类型（'wrong', 'uncompleted', 'all'）
 * @returns {Array} 筛选后的题目数组
 */
function applyStatusFilter(questions, progress, filterType) {
    if (filterType === 'wrong') {
        return questions.filter(q => progress.wrong.includes(q.id));
    } else if (filterType === 'uncompleted') {
        return questions.filter(q => !progress.completed.includes(q.id));
    }
    return questions;
}

/**
 * 组合筛选：年份 + Paper + 状态/知识点
 * @param {Array} questions - 所有题目
 * @param {Object} options - 筛选选项
 * @param {Object} progress - 进度对象
 * @returns {Array} 筛选后的题目数组
 */
function applyCombinedFilter(questions, options, progress) {
    let filtered = questions;
    
    // 先按年份和 Paper 筛选
    filtered = applyYearPaperFilter(filtered, options.year, options.paper);
    
    // 再按其他条件筛选
    if (options.filter === 'topic') {
        filtered = applyTopicFilter(filtered, options.topic);
        filtered = applyTagFilter(filtered, 'module', options.module);
        filtered = applyTagFilter(filtered, 'section', options.section);
        filtered = applyTagFilter(filtered, 'skill', options.skill);
    } else if (options.filter === 'wrong') {
        filtered = applyStatusFilter(filtered, progress, 'wrong');
    } else if (options.filter === 'favorite') {
        filtered = filtered.filter(q => (progress.favorites || []).includes(q.id));
    } else if (options.filter === 'uncompleted') {
        filtered = applyStatusFilter(filtered, progress, 'uncompleted');
    }
    
    return filtered;
}

/**
 * Fisher-Yates 洗牌算法
 * @param {Array} arr - 原数组
 * @returns {Array} 洗牌后的新数组
 */
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/**
 * 获取所有知识点列表
 * @param {Array} questions - 题目数组
 * @returns {Array} 知识点名称数组
 */
function getAllTopics(questions) {
    return [...new Set(questions.flatMap(q => q.search_topics || [q.topic]))];
}

/**
 * 获取所有年份列表
 * @param {Array} questions - 题目数组
 * @returns {Array} 年份数组
 */
function getAllYears(questions) {
    return [...new Set(questions.map(q => q.year))].sort();
}

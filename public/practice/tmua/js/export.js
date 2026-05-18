// export.js - 导出功能（错题本导出、模考报告导出、成绩提交）

const QUICKFORM_API_URL = 'https://quickform.cn/api/6g8ir94jih';

/**
 * 提交成绩到 QuickForm 系统
 * @param {string} studentName - 学生姓名
 * @param {Object} mockResult - 模考结果数据
 * @returns {Object} { success: boolean, error?: string }
 */
async function submitScoreToQuickForm(studentName, mockResult) {
    const { paper, total, correct, wrong, usedSeconds, avgSec, wrongQuestions, topicBreakdown } = mockResult;
    const pct = Math.round(correct / total * 100);
    
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
        wrong_questions: wrongQuestions,
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
            return { success: true };
        } else {
            return { success: false, error: result.message || '提交失败' };
        }
    } catch (e) {
        return { success: false, error: '网络错误: ' + e.message };
    }
}

/**
 * 构建知识点分析数据
 * @param {Array} questions - 题目数组
 * @param {Array} correctIds - 正确题目 ID 数组
 * @returns {Object} 知识点分析对象
 */
function buildTopicBreakdown(questions, correctIds) {
    const topicBreakdown = {};
    questions.forEach(q => {
        const t = q.topic || '其他';
        if (!topicBreakdown[t]) topicBreakdown[t] = { total: 0, correct: 0 };
        topicBreakdown[t].total++;
        if (correctIds.includes(q.id)) topicBreakdown[t].correct++;
    });
    return topicBreakdown;
}

/**
 * 导出错题本为文本格式
 * @param {Array} questions - 所有题目
 * @param {Object} progress - 进度对象
 * @returns {string} 错题本文本
 */
function exportWrongQuestions(questions, progress) {
    const wrongQuestions = questions.filter(q => progress.wrong.includes(q.id));
    if (wrongQuestions.length === 0) {
        return '当前没有错题记录。';
    }
    
    let text = '=== TMUA 错题本 ===\n';
    text += `导出时间: ${new Date().toLocaleString()}\n`;
    text += `错题数量: ${wrongQuestions.length}\n\n`;
    
    wrongQuestions.forEach((q, i) => {
        text += `【题目 ${i + 1}】 #${q.id}\n`;
        text += `年份: ${q.year} Paper ${q.paper}\n`;
        text += `知识点: ${q.topic}\n`;
        text += `题目: ${q.question}\n`;
        text += `正确答案: ${q.answer}\n`;
        if (q.analysis) {
            text += `解析: ${q.analysis}\n`;
        }
        text += '\n---\n\n';
    });
    
    return text;
}

/**
 * 导出模考报告为文本格式
 * @param {Object} mockResult - 模考结果
 * @returns {string} 模考报告文本
 */
function exportMockReport(mockResult) {
    const { paper, total, correct, wrong, usedSeconds, avgSec } = mockResult;
    const pct = Math.round(correct / total * 100);
    
    let text = '=== TMUA 模考报告 ===\n';
    text += `导出时间: ${new Date().toLocaleString()}\n`;
    text += `试卷: ${paper}\n`;
    text += `总题数: ${total}\n`;
    text += `正确: ${correct}\n`;
    text += `错误: ${wrong}\n`;
    text += `正确率: ${pct}%\n`;
    text += `用时: ${formatTime(usedSeconds)}\n`;
    text += `平均每题: ${avgSec} 秒\n\n`;
    
    return text;
}
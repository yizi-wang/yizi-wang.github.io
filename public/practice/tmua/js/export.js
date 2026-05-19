// export.js - 导出功能（错题本导出、模考报告导出、成绩提交）

const QUICKFORM_API_URL = 'https://quickform.cn/api/6g8ir94jih';

/**
 * 提交成绩到 QuickForm 系统
 * @param {string} studentName - 学生姓名
 * @param {Object} mockResult - 模考结果数据
 * @returns {Object} { success: boolean, error?: string }
 */
async function submitScoreToQuickForm(studentName, mockResult) {
    const {
        paper,
        total,
        correct,
        wrong,
        usedSeconds,
        avgSec,
        wrongQuestions,
        topicBreakdown,
        moduleBreakdown,
        sectionBreakdown,
        skillBreakdown,
        questionResults
    } = mockResult;
    const pct = Math.round(correct / total * 100);
    const safeTopicBreakdown = topicBreakdown || {};
    const safeModuleBreakdown = moduleBreakdown || {};
    const safeSectionBreakdown = sectionBreakdown || {};
    const safeSkillBreakdown = skillBreakdown || {};
    
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
        topic_breakdown: safeTopicBreakdown,
        module_breakdown: safeModuleBreakdown,
        section_breakdown: safeSectionBreakdown,
        skill_breakdown: safeSkillBreakdown,
        taxonomy_breakdown: {
            topics: safeTopicBreakdown,
            modules: safeModuleBreakdown,
            sections: safeSectionBreakdown,
            skills: safeSkillBreakdown
        },
        question_results: questionResults || []
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
function getQuestionDimensionValues(question, dimension) {
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

function buildDimensionBreakdown(questions, correctIds, wrongIds, dimension) {
    const breakdown = {};
    questions.forEach(q => {
        getQuestionDimensionValues(q, dimension).forEach(label => {
            if (!breakdown[label]) breakdown[label] = { total: 0, correct: 0, wrong: 0 };
            breakdown[label].total++;
            if (correctIds.includes(q.id)) breakdown[label].correct++;
            if ((wrongIds || []).includes(q.id)) breakdown[label].wrong++;
        });
    });
    return breakdown;
}

function buildTopicBreakdown(questions, correctIds, wrongIds) {
    return buildDimensionBreakdown(questions, correctIds, wrongIds, 'topics');
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

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function renderWorksheetContent(value) {
    if (typeof renderMath === 'function') {
        return renderMath(value || '');
    }
    return escapeHtml(value || '').replace(/\n/g, '<br>');
}

function renderWorksheetImages(question, assetBase) {
    if (!question.has_image || !question.images) return '';
    const imageKeys = ['image', 'question_image', 'options_image'];
    return imageKeys
        .map(key => question.images[key])
        .filter(Boolean)
        .map(fileName => {
            const src = new URL(`images/${encodeURIComponent(fileName)}`, assetBase).href;
            return `<figure class="question-image"><img src="${escapeHtml(src)}" alt="题目图示"></figure>`;
        })
        .join('');
}

function exportWorksheet(questions, options = {}) {
    const title = options.title || '练习单';
    const includeAnswers = options.includeAnswers !== false;
    const includeAnalysis = options.includeAnalysis === true;
    const includeTags = options.includeTags !== false;
    const assetBase = options.assetBase || window.location.href;
    const generatedAt = new Date().toLocaleString();
    const questionBlocks = questions.map((q, index) => {
        const tags = [
            q.topic,
            ...(q.related_topics || []),
            ...(q.modules || []),
            ...(q.sections || []),
            ...(q.skills || [])
        ].filter(Boolean);
        const optionsHtml = Object.entries(q.options || {})
            .filter(([, value]) => value)
            .map(([key, value]) => `
                <li class="option">
                    <span class="option-key">${escapeHtml(key)}</span>
                    <span class="option-content">${renderWorksheetContent(value)}</span>
                </li>
            `)
            .join('');
        const tagHtml = includeTags && tags.length > 0
            ? `<div class="tags">${tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>`
            : '';
        const analysisHtml = includeAnalysis && q.analysis
            ? `<section class="analysis"><h3>解析</h3><div>${renderWorksheetContent(q.analysis)}</div></section>`
            : '';

        return `
            <article class="question-block">
                <header class="question-header">
                    <div>
                        <span class="question-number">Question ${index + 1}</span>
                        <span class="question-id">${escapeHtml(q.id)}</span>
                    </div>
                    <span class="source">${escapeHtml(q.year || '')} Paper ${escapeHtml(q.paper || '')} Q${escapeHtml(q.num || '')}</span>
                </header>
                ${tagHtml}
                <div class="question-text">${renderWorksheetContent(q.question)}</div>
                ${renderWorksheetImages(q, assetBase)}
                <ol class="options" type="A">${optionsHtml}</ol>
                ${analysisHtml}
            </article>
        `;
    }).join('');

    const answerKey = includeAnswers
        ? `
            <section class="answer-key">
                <h2>Answer Key</h2>
                <div class="answer-grid">
                    ${questions.map((q, index) => `
                        <div><strong>${index + 1}</strong><span>${escapeHtml(q.answer || '')}</span></div>
                    `).join('')}
                </div>
            </section>
        `
        : '';

    return `<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)} · 练习单</title>
    <link rel="stylesheet" href="https://unpkg.com/katex@0.16.9/dist/katex.min.css">
    <style>
        :root {
            color: #18222f;
            font-family: "Times New Roman", "Noto Serif SC", serif;
            line-height: 1.5;
        }
        body {
            margin: 0;
            background: #f4f7f9;
        }
        .page {
            width: min(900px, calc(100% - 32px));
            margin: 24px auto;
            background: white;
            padding: 36px 44px;
            box-shadow: 0 12px 34px rgba(25, 40, 55, 0.12);
        }
        .print-toolbar {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-bottom: 20px;
        }
        .print-toolbar button {
            border: 1px solid #1f6f8b;
            background: #1f6f8b;
            color: white;
            border-radius: 6px;
            padding: 8px 14px;
            cursor: pointer;
        }
        .cover {
            border-bottom: 2px solid #18222f;
            padding-bottom: 18px;
            margin-bottom: 24px;
        }
        h1 {
            font-size: 30px;
            margin: 0 0 8px;
        }
        .meta {
            color: #5d6b78;
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
            font-size: 14px;
        }
        .question-block {
            break-inside: avoid;
            page-break-inside: avoid;
            padding: 18px 0;
            border-bottom: 1px solid #dfe6ec;
        }
        .question-header {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            color: #5d6b78;
            font-size: 13px;
            margin-bottom: 10px;
        }
        .question-number {
            color: #18222f;
            font-weight: 700;
            margin-right: 8px;
        }
        .question-id {
            font-family: Consolas, monospace;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 10px;
        }
        .tags span {
            border: 1px solid #cbd7df;
            border-radius: 999px;
            padding: 2px 8px;
            color: #4d6170;
            font-size: 11px;
        }
        .question-text {
            font-size: 16px;
            margin: 10px 0 12px;
        }
        .question-image img {
            max-width: 100%;
            border: 1px solid #dfe6ec;
            border-radius: 6px;
        }
        .options {
            list-style: none;
            padding: 0;
            margin: 14px 0 0;
            display: grid;
            gap: 8px;
        }
        .option {
            display: grid;
            grid-template-columns: 30px 1fr;
            gap: 8px;
            align-items: start;
        }
        .option-key {
            font-weight: 700;
        }
        .analysis {
            margin-top: 14px;
            padding: 12px 14px;
            border-left: 3px solid #1f6f8b;
            background: #f5fafc;
        }
        .analysis h3,
        .answer-key h2 {
            margin: 0 0 8px;
            font-size: 16px;
        }
        .answer-key {
            break-before: page;
            page-break-before: always;
            margin-top: 30px;
        }
        .answer-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
        }
        .answer-grid div {
            border: 1px solid #dfe6ec;
            padding: 8px;
            display: flex;
            justify-content: space-between;
        }
        @page {
            size: A4;
            margin: 16mm;
        }
        @media print {
            body {
                background: white;
            }
            .page {
                width: auto;
                margin: 0;
                padding: 0;
                box-shadow: none;
            }
            .print-toolbar {
                display: none;
            }
            .question-block {
                padding: 14px 0;
            }
        }
    </style>
</head>
<body>
    <main class="page">
        <div class="print-toolbar">
            <button onclick="window.print()">打印 / 保存为 PDF</button>
        </div>
        <section class="cover">
            <h1>${escapeHtml(title)} · 练习单</h1>
            <div class="meta">
                <span>导出时间：${escapeHtml(generatedAt)}</span>
                <span>题目数量：${questions.length}</span>
                <span>答案：${includeAnswers ? '包含' : '不包含'}</span>
                <span>解析：${includeAnalysis ? '包含' : '不包含'}</span>
            </div>
        </section>
        ${questionBlocks}
        ${answerKey}
    </main>
</body>
</html>`;
}

// Shared practice-platform utilities.
// Keep this file course-agnostic so STEP/A-Level can reuse the same runtime.

const PRACTICE_COURSE_CONFIGS = {
    tmua: {
        course: 'tmua',
        title: 'TMUA 练习系统',
        storagePrefix: 'tmua',
        defaultMockSeconds: 75 * 60,
        questionDataGlobal: 'QUESTIONS',
        routeBase: '/practice/tmua/',
        taxonomy: {
            moduleLabel: '讲义章节',
            sectionLabel: '细分概念',
            skillLabel: '解题技能'
        }
    }
};

function getPracticeConfig(course = 'tmua') {
    return PRACTICE_COURSE_CONFIGS[course] || PRACTICE_COURSE_CONFIGS.tmua;
}

function asArray(value) {
    if (Array.isArray(value)) return value.filter(Boolean);
    if (value === undefined || value === null || value === '') return [];
    return [value];
}

function uniqueSorted(values) {
    return [...new Set(values.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b)));
}

function normalizeQuestion(rawQuestion, config = getPracticeConfig()) {
    const id = String(rawQuestion.id || '');
    const normalized = {
        ...rawQuestion,
        id,
        course: rawQuestion.course || config.course,
        topic: rawQuestion.topic || 'Unclassified',
        related_topics: asArray(rawQuestion.related_topics),
        modules: asArray(rawQuestion.modules),
        sections: asArray(rawQuestion.sections),
        skills: asArray(rawQuestion.skills),
        images: rawQuestion.images || [],
        has_image: Boolean(rawQuestion.has_image),
        difficulty: rawQuestion.difficulty || 3
    };

    normalized.search_topics = uniqueSorted([normalized.topic, ...normalized.related_topics]);
    normalized.search_tags = uniqueSorted([
        normalized.topic,
        ...normalized.related_topics,
        ...normalized.modules,
        ...normalized.sections,
        ...normalized.skills
    ]);

    if (!normalized.primary_section && normalized.sections.length > 0) {
        normalized.primary_section = normalized.sections[0];
    }

    return normalized;
}

function normalizeQuestionBank(rawQuestions, config = getPracticeConfig()) {
    return (rawQuestions || []).map(question => normalizeQuestion(question, config));
}

function buildQuestionIndex(questions) {
    const years = uniqueSorted(questions.map(q => q.year)).sort((a, b) => Number(a) - Number(b));
    const papers = uniqueSorted(questions.map(q => q.paper)).sort((a, b) => Number(a) - Number(b));
    const topics = uniqueSorted(questions.flatMap(q => q.search_topics || [q.topic]));
    const modules = uniqueSorted(questions.flatMap(q => q.modules || []));
    const sections = uniqueSorted(questions.flatMap(q => q.sections || []));
    const skills = uniqueSorted(questions.flatMap(q => q.skills || []));

    return { years, papers, topics, modules, sections, skills };
}

function getQuestionLabel(question) {
    if (!question) return '';
    if (question.year && question.paper && question.num) {
        return `${question.year} P${question.paper} Q${question.num}`;
    }
    return question.id;
}

function parsePracticeRoute(search = window.location.search) {
    const params = new URLSearchParams(search);
    return {
        hasParams: Boolean(params.toString()),
        id: params.get('id') || '',
        topic: params.get('topic') || '',
        module: params.get('module') || '',
        section: params.get('section') || '',
        skill: params.get('skill') || '',
        year: params.get('year') || '',
        paper: params.get('paper') || '',
        mode: params.get('mode') || ''
    };
}

function questionMatchesTag(question, type, value) {
    if (!value) return true;
    if (type === 'topic') return (question.search_topics || [question.topic]).includes(value);
    if (type === 'module') return (question.modules || []).includes(value);
    if (type === 'section') return (question.sections || []).includes(value);
    if (type === 'skill') return (question.skills || []).includes(value);
    return true;
}

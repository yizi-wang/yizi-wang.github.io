// TMUA练习系统 - 本地版（数据嵌入）
// 支持数学公式渲染 + 图形题支持 + 年份/Paper选择 + 上下题导航
// v16 - 新增年份Paper筛选和导航功能

// 数学公式渲染函数
function renderMath(text) {
    if (!text) return '';
    
    if (typeof katex !== 'undefined') {
        try {
            // 先渲染块级公式 $$...$$
            text = text.replace(/\$\$([^$]+)\$\$/g, (match, formula) => {
                try {
                    return katex.renderToString(formula, { displayMode: true, throwOnError: false });
                } catch (e) {
                    return match;
                }
            });
            
            // 再渲染行内公式 $...$
            text = text.replace(/\$([^$]+)\$/g, (match, formula) => {
                try {
                    return katex.renderToString(formula, { displayMode: false, throwOnError: false });
                } catch (e) {
                    return match;
                }
            });
        } catch (e) {
            console.log('Math render error:', e);
        }
    }
    
    // 处理Markdown加粗语法 **text**
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    
    // 处理换行符 - 只替换不在 HTML 标签内的换行
    // 先提取所有 <table>...</table>，对表格内的换行用空格替代，其余正常转 <br>
    var tables = [];
    text = text.replace(/<table[\s\S]*?<\/table>/gi, function(match) {
        tables.push(match.replace(/\n/g, ' '));
        return '\x00TABLE' + (tables.length - 1) + '\x00';
    });
    
    // 对表格外的内容，正常将 \n 替换为 <br>
    var parts = text.split(/(<[^>]+>)/g);
    for (var i = 0; i < parts.length; i++) {
        if (!parts[i].startsWith('<')) {
            parts[i] = parts[i].replace(/\n/g, '<br>');
        }
    }
    text = parts.join('');
    
    // 还原表格
    text = text.replace(/\x00TABLE(\d+)\x00/g, function(match, idx) {
        return tables[parseInt(idx)];
    });
    
    return text;
}

let questions = [];


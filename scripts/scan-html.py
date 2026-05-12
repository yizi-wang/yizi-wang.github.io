import os
import re
from html.parser import HTMLParser

class DetailsChecker(HTMLParser):
    """Count <details> open/close tags to detect mismatched collapsible sections."""
    def __init__(self):
        super().__init__()
        self.details_depth = 0
        self.max_depth = 0
    def handle_starttag(self, tag, attrs):
        if tag == 'details':
            self.details_depth += 1
            self.max_depth = max(self.max_depth, self.details_depth)
    def handle_endtag(self, tag):
        if tag == 'details':
            self.details_depth -= 1

def check_file(filepath):
    """Run all checks on a single HTML file."""
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        html = f.read()
    
    issues = []
    
    # 1. <details> open/close balance
    checker = DetailsChecker()
    checker.feed(html)
    if checker.details_depth != 0:
        issues.append(f"details-mismatch: open/close off by {checker.details_depth}")
    
    # 2. Bare <tr> tags outside <table>
    # Strategy: find all <tr> and check if they're inside a <table>...</table>
    tr_positions = [(m.start(), m.end()) for m in re.finditer(r'<tr[\s>]', html)]
    table_ranges = [(m.start(), m.end()) for m in re.finditer(r'<table\b[\s>].*?</table>', html, re.DOTALL)]
    
    bare_trs = []
    for tr_start, tr_end in tr_positions:
        inside_table = False
        for t_start, t_end in table_ranges:
            if t_start < tr_start < t_end:
                inside_table = True
                break
        if not inside_table:
            # Check if it's actually bare (not in a table at all)
            bare_trs.append(tr_start)
    
    if bare_trs:
        issues.append(f"bare-tr: {len(bare_trs)} <tr> tags outside <table>")
    
    # 3. Broken image references (page_*_image_*.jpg or non-existent relative paths)
    imgs = re.findall(r'<img[^>]*src="([^"]+)"', html)
    broken_imgs = [img for img in imgs if re.search(r'page_\d+_image_', img)]
    if broken_imgs:
        issues.append(f"broken-img: {len(broken_imgs)} references to page_*_image_* files")
    
    # 4. Duplicate h1 tags
    h1s = re.findall(r'<h1[^>]*>', html)
    if len(h1s) > 1:
        issues.append(f"duplicate-h1: {len(h1s)} <h1> tags (should be 1)")
    
    # 5. Empty <details> content
    empty_details = re.findall(r'<details[^>]*>\s*<summary>.*?</summary>\s*</details>', html, re.DOTALL)
    if empty_details:
        issues.append(f"empty-details: {len(empty_details)} collapsible sections with no content")
    
    # 6. Orphaned HTML tags (bare </tbody>, </thead>, etc.)
    orphan_patterns = [
        r'</tbody>(?!\s*</table>)',  # </tbody> not followed by </table>
        r'</tr>(?!\s*</t)',          # </tr> not followed by </tbody> or </thead>
        r'</td>(?!\s*</t)',          # </td> not followed by </tr>
    ]
    orphans = []
    for pat in orphan_patterns:
        matches = re.findall(pat, html)
        if matches:
            orphans.append(f"{pat}({len(matches)} matches)")
    if orphans:
        issues.append(f"orphan-html: {orphans}")
    
    # 7. Check for content: pages with almost no text
    text = re.sub(r'<[^>]+>', ' ', html)
    text = re.sub(r'\s+', ' ', text).strip()
    if len(text) < 200:
        issues.append(f"thin-content: only {len(text)} chars of text")
    
    # 8. Unmatched HTML tags: <table> without </table>
    table_opens = len(re.findall(r'<table\b', html))
    table_closes = len(re.findall(r'</table>', html))
    if table_opens != table_closes:
        issues.append(f"table-mismatch: {table_opens} opens, {table_closes} closes")
    
    tbody_opens = len(re.findall(r'<tbody\b', html))
    tbody_closes = len(re.findall(r'</tbody>', html))
    if tbody_opens != tbody_closes:
        issues.append(f"tbody-mismatch: {tbody_opens} opens, {tbody_closes} closes")
    
    return issues

def main():
    dist_dir = 'dist'
    html_files = []
    for root, dirs, files in os.walk(dist_dir):
        for f in files:
            if f.endswith('.html'):
                html_files.append(os.path.join(root, f))
    
    print(f"Scanning {len(html_files)} HTML files...\n")
    
    problem_files = []
    for fp in sorted(html_files):
        rel = os.path.relpath(fp, 'dist')
        issues = check_file(fp)
        if issues:
            problem_files.append((rel, issues))
    
    print(f"{'='*70}")
    print(f"Found issues in {len(problem_files)} of {len(html_files)} files")
    print(f"{'='*70}\n")
    
    for rel, issues in problem_files:
        print(f"  {rel}")
        for issue in issues:
            print(f"    -> {issue}")
        print()
    
    if not problem_files:
        print("All clear! No issues found.")

if __name__ == '__main__':
    main()

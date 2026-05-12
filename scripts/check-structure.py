"""Analyze structural issues in STEP markdown files."""
import re
import os

issues = []

for root, dirs, files in os.walk('src/content/docs'):
    for f in files:
        if not f.endswith('.md'):
            continue
        fp = os.path.join(root, f)
        rel = os.path.relpath(fp)
        with open(fp, 'r', encoding='utf-8-sig') as fh:
            content = fh.read()

        title_match = re.search(r'^title:\s*"?([^"\n]+)"?', content)
        title_text = title_match.group(1).strip() if title_match else ''

        h2_titles = re.findall(r'^## (.+?)$', content, re.MULTILINE)

        has_overview = bool(re.search(r'^## Overview$', content, re.MULTILINE))

        duplicate_section_title = False
        dup_h2 = ''
        for h2 in h2_titles:
            if title_text and (h2 in title_text or title_text in h2) and 'Overview' not in h2:
                duplicate_section_title = True
                dup_h2 = h2
                break

        if has_overview or duplicate_section_title:
            flags = []
            if has_overview:
                flags.append('has Overview')
            if duplicate_section_title:
                flags.append('section-title duplicates frontmatter: ' + dup_h2)
            issues.append((rel, flags, h2_titles[:5]))

print(f'Files with issues: {len(issues)}')
for rel, flags, first5 in issues[:15]:
    print(f'  {rel}')
    print(f'    {", ".join(flags)}')
    if first5:
        print(f'    h2s: {first5}')
    print()

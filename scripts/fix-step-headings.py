"""
Fix STEP page heading structure.

Two issues per page:
1. Redundant section title: `## STEP2 2019 -- Section A (...)` right after
   frontmatter. Frontmatter title already generates h1, so this near-duplicate
   h2 is useless and pollutes the sidebar TOC.
2. `## Overview` as h2: Shows up in TOC, creates visual duplication.

Fix:
1. Remove redundant section title h2 entirely
2. Demote `## Overview` -> `### Overview`

Usage:
    python scripts/fix-step-headings.py
    python scripts/fix-step-headings.py --fix
"""
import re
import os
import sys

DOCS_DIR = os.path.join('src', 'content', 'docs')

SECTION_TITLE_RE = re.compile(r'^STEP[23]\s+\d{4}\s*--\s*Section\s+[A-C]')

def process_file(filepath, dry_run=True):
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        text = f.read()

    changes = []

    # Split on first two --- only (frontmatter delimiters)
    # Find opening ---
    fm_start = None
    fm_end = None
    for m in re.finditer(r'^---$', text, flags=re.MULTILINE):
        if fm_start is None:
            fm_start = m
        elif fm_end is None:
            fm_end = m
            break

    if fm_start is None or fm_end is None:
        return []

    body = text[fm_end.end():]
    body_lines = body.split('\n')

    # Process body lines
    new_body_lines = []
    found_first_h2 = False

    for line in body_lines:
        stripped = line.strip()

        # First ## heading after frontmatter: if it's a section title, remove it
        if not found_first_h2 and stripped.startswith('## ') and not stripped.startswith('### '):
            h2_text = stripped[3:]
            if SECTION_TITLE_RE.match(h2_text):
                changes.append(('REMOVE', h2_text))
                found_first_h2 = True
                # Skip this line (and skip next blank line if present)
                continue
            found_first_h2 = True

        # Demote Overview h2
        if stripped == '## Overview':
            changes.append(('DEMOTE', stripped))
            indent = line[:len(line) - len(line.lstrip())]
            new_body_lines.append(indent + '### Overview')
        else:
            new_body_lines.append(line)

    if not changes:
        return []

    if not dry_run:
        new_text = text[:fm_end.end()] + '\n'.join(new_body_lines)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_text)

    return changes

def main():
    dry_run = '--fix' not in sys.argv
    mode = 'DRY RUN' if dry_run else 'APPLYING'
    print(f'[{mode}] Scanning {DOCS_DIR}...\n')

    total_files = 0
    removes = 0
    demotes = 0

    for root, dirs, files in os.walk(DOCS_DIR):
        for fname in sorted(files):
            if not fname.endswith('.md'):
                continue
            fpath = os.path.join(root, fname)
            changes = process_file(fpath, dry_run)
            if changes:
                total_files += 1
                rel = os.path.relpath(fpath)
                for ch_type, ch_data in changes:
                    print(f'  {rel}: {ch_type} {ch_data}')
                    if ch_type == 'REMOVE':
                        removes += 1
                    elif ch_type == 'DEMOTE':
                        demotes += 1

    print(f'\n{total_files} files: {removes} section titles removed, {demotes} Overview headings demoted')

    if dry_run and total_files > 0:
        print('\nRe-run with --fix to apply')
    elif not dry_run:
        print(f'\nDone.')

if __name__ == '__main__':
    main()

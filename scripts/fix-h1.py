"""
Fix duplicate <h1> across all Starlight docs.

Problem: Starlight generates an <h1> from frontmatter `title`.  If the .md
body also contains `# Heading`, that becomes a second <h1>, breaking
accessibility and causing TOC issues (potential stack overflow).

Fix:  Demote every top-level heading (`# ...`) in the *body* to a second-
level heading (`## ...`).  Lines inside frontmatter (between the opening
and closing `---`) are untouched.

Also strips UTF-8 BOM from files that have it, since BOM breaks frontmatter
parsing.

Usage:
    python scripts/fix-h1.py        # dry-run, list files
    python scripts/fix-h1.py --fix  # apply changes
"""

import os
import sys

DOCS_DIR = os.path.join('src', 'content', 'docs')

def process_file(filepath, dry_run=True):
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        lines = f.readlines()

    has_bom = False
    # Re-read raw bytes to detect BOM
    with open(filepath, 'rb') as f:
        raw = f.read(3)
        has_bom = raw[:3] == b'\xef\xbb\xbf'

    in_frontmatter = False
    frontmatter_closed = False
    changes = []

    for i, line in enumerate(lines, 1):
        stripped = line.rstrip('\n\r')

        if not frontmatter_closed:
            if stripped == '---':
                if not in_frontmatter:
                    in_frontmatter = True
                else:
                    in_frontmatter = False
                    frontmatter_closed = True
            continue

        # Body: demote h1 to h2
        # Match '# X' where X is non-empty (not '##' or deeper)
        if stripped.startswith('# ') and not stripped.startswith('##'):
            new_line = '##' + stripped[1:]  # '# X' -> '## X'
            changes.append((i, stripped, new_line))
            lines[i - 1] = new_line + '\n'

        # Also handle standalone '#' (empty h1 that becomes empty <h1></h1>)
        elif stripped == '#':
            changes.append((i, '#', '##'))
            lines[i - 1] = '##\n'

    # Strip BOM if present
    if has_bom and changes:
        changes.insert(0, (0, 'BOM detected', 'BOM removed'))
        # Rewrite first line without BOM
        lines[0] = lines[0].lstrip('﻿')

    if (changes or has_bom) and not dry_run:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(lines)

    return changes

def main():
    dry_run = '--fix' not in sys.argv
    mode = 'DRY RUN' if dry_run else 'APPLYING'
    print(f'[{mode}] Scanning {DOCS_DIR}...\n')

    total_files = 0
    total_changes = 0

    for root, dirs, files in os.walk(DOCS_DIR):
        for fname in sorted(files):
            if not fname.endswith('.md'):
                continue
            fpath = os.path.join(root, fname)
            changes = process_file(fpath, dry_run)
            if changes:
                total_files += 1
                total_changes += len(changes)

                # Show first change per file as sample
                rel = os.path.relpath(fpath)
                first = changes[0]
                print(f'  {rel}')
                print(f'    line {first[0]}: {first[1]}  ->  {first[2]}')
                if len(changes) > 1:
                    print(f'    ... +{len(changes) - 1} more in this file')

    print(f'\n{total_files} files, {total_changes} headings to demote')

    if dry_run and total_changes > 0:
        print('\nRe-run with --fix to apply')
    elif not dry_run:
        print(f'\nDone. Modified {total_files} files.')

if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""Package a clean, committed STATVERSE checkout and its verified static build."""
import argparse
import hashlib
import io
import json
from pathlib import Path
import subprocess
import tarfile
import zipfile

app = Path(__file__).resolve().parent.parent
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--output', type=Path, default=app.parent / 'statverse-delivery')
parser.add_argument('--label', default='checkpoint')
args = parser.parse_args()

def git(*command):
    return subprocess.check_output(['git', *command], cwd=app)

dirty = git('status', '--porcelain', '--untracked-files=normal', '--', '.').decode().strip()
if dirty:
    parser.exit(1, 'Commit the project files before packaging; the working tree is not clean.\n')
commit = git('rev-parse', 'HEAD').decode().strip()
repo = Path(git('rev-parse', '--show-toplevel').decode().strip())
relative = app.relative_to(repo).as_posix()
dist = app / 'dist'
if not (dist / 'index.html').is_file():
    parser.exit(1, 'Run npm run build before packaging.\n')
for source in [app / p for p in ['index.html', 'style.css', 'guide.html', 'scope.html', 'reading.css', 'start.py']] + sorted((app / 'src').glob('*.js')):
    target = dist / source.relative_to(app)
    if not target.is_file() or target.read_bytes() != source.read_bytes():
        parser.exit(1, f'Stale or missing static output: {target.relative_to(app)}\n')
args.output.mkdir(parents=True, exist_ok=True)
prefix = f'STATVERSE-{args.label}-{commit[:7]}'
source_files = {}
archive_bytes = subprocess.check_output(['git', 'archive', '--format=tar', 'HEAD', relative], cwd=repo)
with tarfile.open(fileobj=io.BytesIO(archive_bytes)) as archive:
    for item in archive.getmembers():
        if not item.isfile():
            continue
        path = Path(item.name).relative_to(relative).as_posix()
        source_files[path] = archive.extractfile(item).read()
static_files = {p.relative_to(dist).as_posix(): p.read_bytes() for p in dist.rglob('*') if p.is_file() and not p.is_symlink()}
for name in ['STATVERSE-18min-teacher-guide.pdf', 'STATVERSE-student-transfer.pdf']:
    static_files['handouts/' + name] = source_files['evidence/' + name]
static_files['README-OFFLINE.md'] = source_files['README.md']
static_files['COURSE-SCOPE.md'] = source_files['docs/CURRICULUM-STATUS.md']
static_files['KNOWN-LIMITATIONS.md'] = source_files['docs/KNOWN-LIMITATIONS.md']
featured_names = ['final-sampling-desktop.png', 'final-sampling-mobile.png', 'final-sampling-teacher.png', 'final-guide-desktop.png', 'stage5-design-390.png', 'stage5-normal-1920.png']
featured = {name: source_files['evidence/' + name] for name in featured_names if 'evidence/' + name in source_files}
featured['README.txt'] = b'Developer actual Chromium screenshots of the committed source. These are not independent review images, physical-device trials or real student tests. Historical failure screenshots are excluded from this featured collection.\n'
start = f'''STATVERSE / {args.label}\nSource commit: {commit}\n\nQUICK START\nUnzip completely. In static/ run: python start.py\nIf needed: python3 start.py --port 4175\nOpen the displayed loopback HTTP URL; keep the terminal open.\nNo package installation or internet connection is needed for the lab.\nPython3 is only the optional local-server prerequisite.\nDirect file:// ES-module launching is not supported.\n\nsource/ contains the exact committed project, tests, reports and historical evidence.\nstatic/ is the ready-to-serve build, printable guide, scope and PDF handouts.\nfeatured-screenshots/ contains selected developer screenshots, not independent/student results.\nThe original production site and repository .git/credentials are not included.\nRead COURSE-SCOPE.md and KNOWN-LIMITATIONS.md for partial/unsupported areas.\n'''.encode()

def package(name, files):
    payload = dict(files)
    payload['COMMIT.txt'] = (commit + '\n').encode()
    payload['MANIFEST-SHA256.json'] = (json.dumps({n: hashlib.sha256(b).hexdigest() for n, b in sorted(payload.items())}, indent=2) + '\n').encode()
    path = args.output / name
    with zipfile.ZipFile(path, 'w', zipfile.ZIP_DEFLATED) as out:
        for n, content in sorted(payload.items()):
            out.writestr(n, content)
    return {'file': str(path), 'bytes': path.stat().st_size, 'sha256': hashlib.sha256(path.read_bytes()).hexdigest(), 'entries': len(payload)}

combined = {'START-HERE.txt': start}
combined.update({'source/' + n: b for n, b in source_files.items()})
combined.update({'static/' + n: b for n, b in static_files.items()})
combined.update({'featured-screenshots/' + n: b for n, b in featured.items()})
result = {'source_commit': commit, 'source_module_count': len(list((app / 'src').glob('*.js'))), 'packages': [package(prefix + '-source-and-static.zip', combined), package(prefix + '-static.zip', static_files), package(prefix + '-developer-screenshots.zip', featured)]}
(args.output / (prefix + '-packages.json')).write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps(result, indent=2))

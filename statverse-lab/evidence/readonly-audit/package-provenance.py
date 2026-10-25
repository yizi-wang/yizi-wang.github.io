"""Read-only asset/archive verification; emits identities, never credential values."""
import hashlib,json,zipfile,tarfile,re
from pathlib import Path
from datetime import datetime,timezone
app=Path('/workspace/yizi-wang.github.io/statverse-lab')
manifest=json.loads((app/'evidence/freeze-code-manifest.json').read_text())['sha256']
paths={'working-source':app,'working-dist':app/'dist','fresh-remote-source':Path('/workspace/statverse-remote-freeze-audit/statverse-lab'),'fresh-remote-dist':Path('/workspace/statverse-remote-freeze-audit/statverse-lab/dist'),'sites-dist':Path('/workspace/sites/statverse-lab/dist')}
closure={name:{'fileCount':len(manifest),'matches':all((root/p).is_file() and hashlib.sha256((root/p).read_bytes()).hexdigest()==h for p,h in manifest.items())} for name,root in paths.items()}
archive=Path('/tmp/statverse-freeze-site.tar.gz')
with tarfile.open(archive,'r:gz') as t:
    files={i.name.removeprefix('./'):t.extractfile(i).read() for i in t if i.isfile()}
closure['site-input-archive']={'fileCount':len(manifest),'matches':all(hashlib.sha256(files['dist/'+p]).hexdigest()==h for p,h in manifest.items())}
packages=[]
for name in ['STATVERSE-freeze-candidate-accc8f9-source-and-static.zip','STATVERSE-freeze-candidate-accc8f9-static.zip']:
    p=Path('/workspace/exports')/name
    with zipfile.ZipFile(p) as z:
        names=z.namelist(); unsafe=[n for n in names if n.startswith('/') or '..' in Path(n).parts]
        unwanted=[n for n in names if any(s in {'.git','.aws','.codex','node_modules'} or s=='.env' or s.startswith('.env.') for s in Path(n).parts)]
        credential_patterns=[rb'(?:sk-[A-Za-z0-9]{32,})',rb'(?:gh[pousr]_[A-Za-z0-9]{30,})',rb'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----',rb'AKIA[0-9A-Z]{16}']
        findings=[]
        for n in names:
            if Path(n).suffix.lower() in {'.md','.js','.mjs','.json','.py','.html','.css','.txt','.yaml','.yml'}:
                b=z.read(n)
                if any(re.search(pattern,b) for pattern in credential_patterns):findings.append(n)
        checks=json.loads(z.read('MANIFEST-SHA256.json'))
        package_ok=all(hashlib.sha256(z.read(n)).hexdigest()==h for n,h in checks.items())
    packages.append({'name':name,'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'entries':len(names),'manifestEntries':len(checks),'manifestAllPass':package_ok,'unsafePaths':unsafe,'excludedDirectoryOrEnvMatches':unwanted,'commonCredentialPatternFiles':findings})
out={'timestamp':datetime.now(timezone.utc).isoformat(),'applicationCommit':'accc8f9435ebfb6109568831704c1d34a350d5f7','closure':closure,'packages':packages,'credentialScanScope':'Known token prefixes/private-key headers only; not a proof that arbitrary content cannot contain secrets. No matched values printed.','runtimeNetwork':'Browser audit blocks all non-loopback requests; no external requests were attempted. No analytics/backend/student persistence code is implemented.'}
(app/'evidence/readonly-audit/provenance-and-package-results.json').write_text(json.dumps(out,indent=2)+'\n')
print(json.dumps({'closure':closure,'packages':packages},indent=2))

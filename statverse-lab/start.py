#!/usr/bin/env python3
"""Serve this unzipped STATVERSE folder locally; Python standard library only."""
from argparse import ArgumentParser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import webbrowser

parser = ArgumentParser(description=__doc__)
parser.add_argument('--port', type=int, default=4173)
parser.add_argument('--no-browser', action='store_true')
args = parser.parse_args()
if not 1 <= args.port <= 65535:
    parser.error('port must be an integer from1 to65535')
root = Path(__file__).resolve().parent
handler = partial(SimpleHTTPRequestHandler, directory=str(root))
try:
    server = ThreadingHTTPServer(('127.0.0.1', args.port), handler)
except OSError as exc:
    parser.exit(1, f'Could not open port{args.port}: {exc}\nTry: python start.py --port 4175\n')
url = f'http://127.0.0.1:{args.port}/'
print(f'STATVERSE: {url}\nKeep this window open. Press Ctrl+C to stop.\nAll experiment calculations run locally.', flush=True)
if not args.no_browser:
    webbrowser.open(url)
try:
    server.serve_forever()
except KeyboardInterrupt:
    print('\nStopped.')
finally:
    server.server_close()

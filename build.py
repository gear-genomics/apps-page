#! /usr/bin/env python

import os
import pathlib
import shutil
import json
import hashlib
import jinja2

src_dir = 'src'
dist_dir = 'dist'

shutil.rmtree(dist_dir, True)
os.mkdir(dist_dir)

shutil.copytree(os.path.join(src_dir, 'assets'), os.path.join(dist_dir, 'assets'))

def hashed_filename(path):
    with open(path, 'rb') as f:
        f_content = f.read()
    hashed = hashlib.sha1(f_content).hexdigest()
    basename = os.path.basename(path)
    prefix, ext = os.path.splitext(basename)
    return '{}.{}{}'.format(prefix, hashed[:8], ext)

files = {}
for root, dirs, fnames in os.walk(os.path.join('dist', 'assets')):
    for fname in fnames:
        path = os.path.join(root, fname)
        fname_hashed = hashed_filename(path)
        os.rename(path, os.path.join(root, fname_hashed))
        path_dist = os.path.join(*pathlib.Path(path).parts[1:-1], fname_hashed)
        files[fname] = path_dist

with open('apps.json') as f:
    apps = json.load(f)
    for app in apps:
        if 'abbreviation' not in app:
            app['abbreviation'] = app['name'][:2].upper()

with open(os.path.join(src_dir, 'index.html')) as f:
    html = f.read()
    template = jinja2.Template(html)
    with open(os.path.join(dist_dir, 'index.html'), 'w') as f_out:
        f_out.write(template.render(apps=apps, files=files))

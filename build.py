#! /usr/bin/env python

import os
import shutil
import json
import hashlib
import jinja2

src_dir = 'src'
dist_dir = 'dist'

shutil.rmtree(dist_dir, True)
os.mkdir(dist_dir)

shutil.copytree(os.path.join(src_dir, 'img'), os.path.join(dist_dir, 'img'))

css_path_src = os.path.join(src_dir, 'style.css')

with open(css_path_src) as f:
    css = f.read()
    css_hashed = hashlib.sha1(css.encode()).hexdigest()
    css_file_dist = 'style.{}.css'.format(css_hashed[:8])
    css_path_dist = os.path.join(dist_dir, css_file_dist)
    shutil.copy(css_path_src, css_path_dist)

with open('apps.json') as f:
    apps = json.load(f)
    for app in apps:
        if 'abbreviation' not in app:
            app['abbreviation'] = app['name'][:2].upper()

with open(os.path.join(src_dir, 'index.html')) as f:
    html = f.read()
    template = jinja2.Template(html)
    with open(os.path.join(dist_dir, 'index.html'), 'w') as f_out:
        f_out.write(template.render(apps=apps, css_file=css_file_dist))

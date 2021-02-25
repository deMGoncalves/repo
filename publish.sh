#!/bin/bash
rm -rf dist
yarn run ttsc --project tsconfig.json
git add dist -f
git commit -m 'build(dist): automatic new publish'
git push origin master
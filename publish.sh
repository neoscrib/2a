#!/bin/bash
set -eux

npm run lint
npm run build

cp -r package.json index.d.ts LICENSE README.md docs dist/
cd dist
npm publish

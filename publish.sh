#!/bin/bash
set -eux

npm run lint
npm run test
npm run build
npm run typedoc

rm -rf ./dist/*.spec.js
cp -r package.json index.d.ts LICENSE README.md CODE_OF_CONDUCT.md CONTRIBUTING.md docs dist/
cd dist
npm publish

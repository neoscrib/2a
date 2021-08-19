#!/bin/bash
set -eux

npm run lint
npm run build

cp package.json index.d.ts LICENSE README.md dist/
cd dist
npm publish

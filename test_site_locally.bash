#!/bin/bash

set -o errexit

docker run -it --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages

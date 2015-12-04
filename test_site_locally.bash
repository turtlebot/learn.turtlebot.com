#!/bin/bash

set -o errexit

docker build -t "learn_turtlebot" .

docker run -v `pwd`:/tmp/jekyll -w /tmp/jekyll -i -t --net=host learn_turtlebot

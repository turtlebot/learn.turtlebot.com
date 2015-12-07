FROM ubuntu:vivid
MAINTAINER Tully Foote<tfoote@osrfoundation.org>


ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -q -y curl net-tools python python-yaml build-essential ruby-dev  nodejs

RUN gem install bundler --no-rdoc --no-ri
# needed for nokogiri to install successfully
RUN apt-get update && apt-get install -q -y zlib1g-dev
COPY Gemfile /tmp/Gemfile
RUN bundle install --gemfile=/tmp/Gemfile

EXPOSE 4000
VOLUME /tmp/jekyll
WORKDIR /tmp/jekyll

CMD jekyll serve -w --baseurl='' -d /tmp/_site

# Base image
FROM node:9.11.1-alpine

# Use changes to package.json to force Docker not to use the cache
# when we change our application's dependencies:
COPY package.json yarn.lock /tmp/
RUN cd /tmp && yarn install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/

# Set working directory
WORKDIR /usr/src/app

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
COPY . .

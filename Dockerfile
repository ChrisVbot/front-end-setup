# Base image
FROM node:9.7.1

# Set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Copy the yarn lock file
COPY yarn.lock package.json ./

# Install and cache app dependencies
COPY package.json package.json
RUN npm install -g yarn
RUN yarn install

# Copy local files
COPY . .

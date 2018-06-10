# TypeScript / React / Redux / Docker starterpack

This is an example setup for a React app written in TypeScript with CSS modules, Redux, and with the goal of containerizing everything in a Docker container to ease dev environment setup.

## Prerequisites

You will need:

- Docker for running code in container
- If you want to run code locally without a container, you'll need Node (9.x recommended)
- VS Code for strong TypeScript support

## Installation

```sh
git clone git@github.com:ChrisVbot/front-end-setup.git
docker-compose -f docker-compose.prod.yml up --build
```

## Usage

To build for prod in the Docker container (recommended):

```sh
docker-compose -f docker-compose.prod.yml --build
```

This will generate several files in the /dist directory, minified and ready for production. Note that the vendor code is split from the app's code. This helps with caching as these resources change less often than the app's code. This will also produce a manifest.json file which can be used to grab the build's filenames. For more info on code splitting, see [here](https://webpack.js.org/guides/code-splitting/).

To start dev server in the Docker container (recommended):

```sh
docker-compose up --build
```

After starting dev server, you should be able to access it at 0.0.0.0:8080

To build for prod on local system (without Docker):

```sh
yarn build
```

To build for dev on local system (without Docker):

```sh
yarn dev
```

To start webpack-dev-server on local system (without Docker):

```sh
yarn start
```

To run tests:

```sh
yarn jest
```

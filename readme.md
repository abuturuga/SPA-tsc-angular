# SPA tsc angular (in progress!)

## Description
  This is a proof of concept about a single page application made using Angular1.x TypeScript Webpack and pug.

## Requirements
  * node v8.3.0
  * npm 5.4.2
  * yarn 1.1.0
  * ruby 2.2.3
  * gem 2.4.5
  * Sass 3.4.19

## Installation

In the current folder run:
```bash
  yarn install
```

After this in the folder ./mock-server run:
In the current folder run:
```bash
  yarn install
```

## Development

### Mock Server
This is a simple express.js server mocking the routes and the model of the application, you need to start this first because the webpack-dev-server has a proxy for this.
Type the following command in the project route:

```bash
  node ./mock-server/index.js
```

After this we need to start the webpack-dev-server with the command:
```bash
  npm run dev
```

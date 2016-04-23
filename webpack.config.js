const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const TARGET = process.env.npm_lifecycle_event

process.env.BABEL_ENV = TARGET

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'app.js'
  }
}

const config = (TARGET === 'start' || !TARGET)
  ? merge(common, {})
  : merge(common, {})

module.exports = config

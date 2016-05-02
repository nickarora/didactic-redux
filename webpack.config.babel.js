import webpack from 'webpack'
import path from 'path'
import merge from 'webpack-merge'
import stylelint from 'stylelint'

const TARGET = process.env.npm_lifecycle_event

process.env.BABEL_ENV = TARGET

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  node_modules: path.join(__dirname, 'node_modules'),
}

const common = {
  entry: {
    main: path.join(PATHS.src, 'client.jsx'),
  },
  resolve: {
    root: [
      PATHS.src,
      PATHS.node_modules,
    ],
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: PATHS.build,
    filename: 'app.js',
    publicPath: '/',
  },
  externals: {
    jsdom: 'window',
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loaders: ['postcss'],
        include: PATHS.src,
      },
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.src,
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'myth'],
        include: PATHS.src,
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: PATHS.src,
      },
    ],
  },
  postcss: () => [
    stylelint({
      rules: {
        'color-hex-case': 'lower',
      },
    }),
  ],
}

const startConfig = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.join(PATHS.src, 'client.jsx'),
    ],
  },
  devServer: {
    contentBase: PATHS.build,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    progress: true,
    stats: 'errors-only',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

const buildConfig = {}

const config = (TARGET === 'start' || !TARGET)
  ? merge.smart(common, startConfig)
  : merge.smart(common, buildConfig)

export default config

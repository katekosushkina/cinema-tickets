const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = NODE_ENV === 'production';

const plugins = [
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  new webpack.NoEmitOnErrorsPlugin(),
];

module.exports = {
  mode: NODE_ENV,
  entry: path.resolve(path.join(__dirname, 'src/client/js', 'index.js')),
  context: path.resolve(__dirname),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'var',
  },
  devtool: 'inline-source-map',

  plugins,

  resolve: {
    modules: [path.resolve(path.join(__dirname, 'src/client/js')), 'node_modules'],
    extensions: ['*', '.react.js', '.js', '.jsx', '.json', '.css', '.scss', '.less'],
  },
  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['*-loader', '*'],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src/client/js'),
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'node_modules/query-string'),
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          }],
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './src',
    stats: "errors-only",
    port: 3000,
    open: true,
  }
};

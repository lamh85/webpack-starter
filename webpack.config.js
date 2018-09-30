const path = require('path');
const webpack = require('webpack');

module.exports = {

  // IMPORTANT: Sort keys alphabetically

  devServer: {
    contentBase: './dist',
    hot: true
  },
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
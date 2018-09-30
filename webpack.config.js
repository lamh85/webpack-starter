const path = require('path');

module.exports = {

  // IMPORTANT: Sort keys alphabetically

  devServer: {
    contentBase: './dist'
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
};
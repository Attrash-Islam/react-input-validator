var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'Client/target/src');
var APP_DIR = path.resolve(__dirname, 'Client/src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  }
};

module.exports = config;

//npm i --save-dev webpack babel-core babel-loader babel-preset-react babel-preset-es2015

var webpack = require('webpack');

var config = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  ////////// UNCOMMENT FOR PRODUCTION //////////
  // plugins: [
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  // ]  
};

module.exports = config;
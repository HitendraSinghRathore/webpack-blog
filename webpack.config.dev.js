const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify(process.env.API_URL)
      })
  ]
});
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')
const portFinderSync = require('portfinder-sync')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '.temp'),
    historyApiFallback: true,
    hot: true,
    index: './.temp/index.html',
    port: portFinderSync.getPort(3000)
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '.temp')
  }
})
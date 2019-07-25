const merge = require('webpack-merge')
const config = require('./webpack.common')
const HTML = require('html-webpack-plugin')
const COMMON = require('common-config-webpack-plugin')
const path = require('path')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HTML({
      inject: true
    }),
    new COMMON()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    inline: true
  }
})

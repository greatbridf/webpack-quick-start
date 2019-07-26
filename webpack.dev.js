const merge = require('webpack-merge')
const config = require('./webpack.common')
const HTML = require('html-webpack-plugin')
const path = require('path')

module.exports = merge(config.config, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HTML({
      title: config.title,
      inject: true
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    inline: true
  }
})

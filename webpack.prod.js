const merge = require('webpack-merge')
const config = require('./webpack.common')
const HTML = require('html-webpack-plugin')

module.exports = merge(config.config, {
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
   new HTML({
     title: config.title,
     minify: {
       removeAttributeQuotes: true,
       collapseWhitespace: true,
       removeRedundantAttributes: true,
       useShortDoctype: true,
       removeEmptyAttributes: true,
       removeStyleLinkTypeAttributes: true,
       keepClosingSlash: true,
       minifyJS: true,
       minifyCSS: true,
       minifyURLs: true
     }
   })
  ]
})

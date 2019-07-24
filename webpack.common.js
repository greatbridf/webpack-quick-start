const path = require('path')

const config = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      //{}
    ]
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src')
    }
  },
  target: 'node'
}

module.exports = config

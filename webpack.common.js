const path = require('path')

const config = {
  entry: {
    index: path.resolve(__dirname, 'src/index.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/i,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.json']
  }
}

module.exports = config

const path = require('path')

const title = '!IMPORTANT! PLEASE CHANGE THE TITLE IN \'webpack.common.js\''

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
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.ts$/i,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [ /\.vue$/i ]
        }
      },
      {
        test: /\.js$/i,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      src: path.join(__dirname, 'src'),
      static: path.join(__dirname, 'static')
    },
    extensions: ['.js', '.ts', '.json']
  },
  plugins: [
    new (require('vue-loader/lib/plugin')) ()
  ]
}

module.exports = {
  title, config
}

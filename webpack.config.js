require('dotenv').config()

var webpack = require('webpack')
var ENV = process.env.NODE_ENV
var DEV = ENV === 'development'


var config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  devtool: DEV ? 'source-map' : null,
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.s?css/,
        loaders: ['style', 'css', 'sass'],
        exclude: /(node_modules | bower_components)/,
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  }
}

if(!DEV){
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  )
} else {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  )
}

module.exports = config

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: [path.join(__dirname,"dist"),path.join(__dirname,"static")],
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader!postcss-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/index.tmpl.html"
    }),
    new CopyWebpackPlugin([{
      from: __dirname+'/static',
      to:__dirname + "/dist/static",
      ignore: ['.*']
    }])
  ]
}
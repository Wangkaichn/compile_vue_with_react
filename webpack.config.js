/*
 * @Author: your name
 * @Date: 2020-12-02 14:17:36
 * @LastEditTime: 2020-12-02 15:17:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/vue-react/webpack.config.js
 */

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-react"],
          }
        },
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: false,
    port: 9000,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: './dist/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};
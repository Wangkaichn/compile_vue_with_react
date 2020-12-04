/*
 * @Author: your name
 * @Date: 2020-12-04 09:27:54
 * @LastEditTime: 2020-12-04 16:08:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/webpack.config.js
 */

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/App.tsx'),
  output: {
    filename: 'react17-bundle.js',
    path: path.join(__dirname, '../../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: 'css-loader'
      },
      {
        test: /\.s[ca]ss$/,
        exclude: /node_modules/,
        use: [
          path.join(__dirname, './node_modules/style-loader'),
          path.join(__dirname, './node_modules/css-loader'),
          path.join(__dirname, './node_modules/sass-loader'),
        ]
      },
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: path.join(__dirname, './node_modules/babel-loader/lib/index.js'),
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: path.join(__dirname, './node_modules/ts-loader/index.js')
      },
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
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: path.join(__dirname, '../../dist/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, 'src')
    }
  }
}
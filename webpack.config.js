/*
 * @Author: your name
 * @Date: 2020-12-04 09:27:54
 * @LastEditTime: 2020-12-04 21:22:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/webpack.config.js
 */

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    react17: './apps/react17/src/index.tsx',
    vue3: "./apps/vue2/src/index.ts"
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, './dist')
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
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
              ]
            }
          },
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          'vue-loader'
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    open: false,
    port: 9000,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm.js'
    }
  }
}
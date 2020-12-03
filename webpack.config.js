const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'ts-loader'
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: 'vue-loader'
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
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@src': path.join(__dirname, 'src')
    }
  }
}

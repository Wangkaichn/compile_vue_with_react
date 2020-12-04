/*
 * @Author: your name
 * @Date: 2020-12-03 19:18:00
 * @LastEditTime: 2020-12-04 16:31:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue3/vue.config.js
 */

const path = require('path')


// output: {
//   path: '/Users/wangkai/Downloads/books/github/MyNote/CompileVueWithReact/apps/vue3/dist',
//   filename: 'js/[name].js',
//   publicPath: '/',
//   chunkFilename: 'js/[name].js'
// },
module.exports = {
  outputDir: path.resolve(__dirname, '../../dist'),
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = path.resolve(__dirname, '../../pubilc/index.html')
        return args
      })
  }
}
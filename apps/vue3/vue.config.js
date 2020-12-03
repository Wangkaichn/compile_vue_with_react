/*
 * @Author: your name
 * @Date: 2020-12-03 19:18:00
 * @LastEditTime: 2020-12-03 19:24:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue3/vue.config.js
 */

const path = require('path')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = path.resolve(__dirname, '../../public/index.html')
        return args
      })
  }
}
/*
 * @Author: your name
 * @Date: 2020-12-05 20:01:24
 * @LastEditTime: 2020-12-05 20:30:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/public/index.js
 */

import ElementTools, { ElementToolsInit } from '../utils/ElementTools/index'

window.onload = () => {
  ElementToolsInit()
  ElementTools.create('div', 'myFirstDiv')
  console.warn('*** init end ***')
}
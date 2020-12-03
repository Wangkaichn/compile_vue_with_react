/*
 * @Author: your name
 * @Date: 2020-12-03 08:06:44
 * @LastEditTime: 2020-12-03 10:28:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/src/shims.s.ts
 */

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions<any>
  export default componentOptions
}
declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}
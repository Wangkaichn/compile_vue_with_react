/*
 * @Author: your name
 * @Date: 2020-12-05 10:40:25
 * @LastEditTime: 2020-12-05 19:46:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue2/src/externals.d.ts
 */

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module '*.module.scss' {
  const types: { [key: string]: string }
  export default types
}

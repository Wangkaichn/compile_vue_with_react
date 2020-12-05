/*
 * @Author: your name
 * @Date: 2020-12-05 10:40:25
 * @LastEditTime: 2020-12-05 13:00:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue2/src/externals.d.ts
 */

declare module '*.module.scss' {
  const types: { [key: string]: any }
  export default types
}
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
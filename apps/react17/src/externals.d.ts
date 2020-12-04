/*
 * @Author: your name
 * @Date: 2020-12-04 09:59:40
 * @LastEditTime: 2020-12-04 11:27:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/externals.d.ts
 */

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
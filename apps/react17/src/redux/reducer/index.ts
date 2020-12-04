/*
 * @Author: your name
 * @Date: 2020-12-04 10:16:47
 * @LastEditTime: 2020-12-04 11:02:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/redux/reducer/index.ts
 */
import { combineReducers } from 'redux'
import count from "./count"

const reducers = combineReducers({
  count
})

export default reducers
/*
 * @Author: your name
 * @Date: 2020-12-04 21:27:15
 * @LastEditTime: 2020-12-05 16:08:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/redux/store/index.js
 */
import { createStore } from 'redux'
import AllReducers from '../reducers'

const store = createStore(AllReducers)
export default store

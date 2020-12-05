/*
 * @Author: your name
 * @Date: 2020-12-04 21:36:49
 * @LastEditTime: 2020-12-05 14:08:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/redux/reducers/index.js
 */
import { combineReducers } from 'redux'
import Count from './count'

const AllReducers = combineReducers({
  Count
})
export default AllReducers

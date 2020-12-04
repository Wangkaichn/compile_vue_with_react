/*
 * @Author: your name
 * @Date: 2020-12-04 10:02:44
 * @LastEditTime: 2020-12-04 10:29:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/store/index.ts
 */

import { createStore } from 'redux'
import { createDevTools } from 'redux-devtools'
import reducers from '../reducer'

const store = createStore(reducers)

export default store
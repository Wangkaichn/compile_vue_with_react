/*
 * @Author: your name
 * @Date: 2020-12-04 16:50:46
 * @LastEditTime: 2020-12-05 10:45:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/index.js
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import App from './App'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('RootReact')
)
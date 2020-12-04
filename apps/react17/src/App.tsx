/*
 * @Author: your name
 * @Date: 2020-12-04 09:34:47
 * @LastEditTime: 2020-12-04 10:50:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/App.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store/index'

import First from '@src/page/First/index'

const App = () => {
  return (
    <Provider store={store} >
      <First />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('RootReact'))
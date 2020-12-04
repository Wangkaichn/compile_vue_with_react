/*
 * @Author: your name
 * @Date: 2020-12-04 10:17:53
 * @LastEditTime: 2020-12-04 14:04:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/redux/reducer/count.ts
 */

import Action from '../action/count'

const defaultState = {
  value: 0
}

const count = (state = defaultState, { type, payload }) => {
  switch (type) {
    case Action.SET_COUNT: {
      return {
        ...state,
        value: payload
      }
    }
    default: {
      return defaultState
    }
  }
}
export default count
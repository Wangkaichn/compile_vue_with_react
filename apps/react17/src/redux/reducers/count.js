/*
 * @Author: your name
 * @Date: 2020-12-04 21:37:52
 * @LastEditTime: 2020-12-04 22:44:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/redux/reducers/count.js
 */

import { SET_COUNT, ADD_COUNT } from '../actions/count'

const initialState = {
  value: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNT: {
      return {
        ...state,
        value: payload
      }
    }
    case ADD_COUNT: {
      return {
        ...state,
        value: state.value + 1
      }
    }
    default: {
      return state
    }
  }
}
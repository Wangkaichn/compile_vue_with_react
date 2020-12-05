/*
 * @Author: your name
 * @Date: 2020-12-04 21:38:01
 * @LastEditTime: 2020-12-05 14:08:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/redux/actions/count.js
 */

export const SET_COUNT = 'SET_COUNT'
export const ADD_COUNT = 'ADD_COUNT'

export const AddCount = (payload = '') => dispatch => {
  payload.length && console.info('addCount payload: ', payload)
  dispatch({ type: ADD_COUNT })
}

export default {
  SET_COUNT,
  AddCount
}

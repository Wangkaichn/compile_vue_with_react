/*
 * @Author: your name
 * @Date: 2020-12-04 10:20:24
 * @LastEditTime: 2020-12-04 10:46:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/redux/action/count.ts
 */

export const SET_COUNT = 'SET_COUNT'

export const setCount = (count) => (dispatch) => {
  dispatch({
    type: SET_COUNT,
    payload: count
  })
}

export default {
  SET_COUNT,
  setCount
}
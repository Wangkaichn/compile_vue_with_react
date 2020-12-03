/*
 * @Author: your name
 * @Date: 2020-12-03 19:16:25
 * @LastEditTime: 2020-12-03 20:12:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue3/src/store/index.ts
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    _count: 0,
    doubleCount: 0
  },
  mutations: {
    setCount: (state, payload) => {
      state['_count'] = payload.count
      state['doubleCount'] = payload.count * 2
    }
  },
  actions: {
    setCount: (context, payload) => {
      context.commit('setCount', payload)
    }
  },
  modules: {}
})

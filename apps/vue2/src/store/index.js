/*
 * @Author: your name
 * @Date: 2020-12-05 14:29:14
 * @LastEditTime: 2020-12-05 16:28:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue2/src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count++
    }
  },
  actions: {
    add(context) {
      context.commit('add')
    }
  },
  getters: {
    getCount: (state) => state.count
  }
})

export default store

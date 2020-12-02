/*
 * @Author: your name
 * @Date: 2020-12-02 16:32:05
 * @LastEditTime: 2020-12-02 17:53:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/src/vue-app/index.js
 */

import Vue from 'vue/dist/vue.esm.js'
import Other from './Other.vue'

const CreatVueApp = () => {
  new Vue({
    el: '#app',
    components: {
      Other
    },
    template: '<h2><Other /></h2>'
  })
}
export default CreatVueApp
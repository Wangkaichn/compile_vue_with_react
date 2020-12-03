/*
 * @Author: your name
 * @Date: 2020-12-02 16:32:05
 * @LastEditTime: 2020-12-03 14:02:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/src/vue-app/index.js
 */

// import Vue from 'vue/dist/vue.esm.js'
import Vue from 'vue'
import Other from './Other.vue'

type TypeCreatVueApp = () => void
const CreatVueApp: TypeCreatVueApp = () => {
  new Vue({
    el: "#vueApp",
    components: {
      Other
    },
    template: '<h2><Other /></h2>'
  })
}
export default CreatVueApp

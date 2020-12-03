/*
 * @Author: your name
 * @Date: 2020-12-03 19:16:25
 * @LastEditTime: 2020-12-03 19:47:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue3/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App)
  .use(store)
  .mount('#RootVue')

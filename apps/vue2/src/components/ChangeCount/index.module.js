/*
 * @Author: your name
 * @Date: 2020-12-05 19:50:02
 * @LastEditTime: 2020-12-05 20:09:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue2/src/components/ChangeCount/index.module.js
 */

import ElementTools from '@utils/ElementTools/index'

export default {
  methods: {
    handleAdd() {
      this.$store.dispatch({ type: 'add' })
    },
    handleCreateNode() {
      ElementTools.create('div', 'myFirstDiv')
    }
  }
}

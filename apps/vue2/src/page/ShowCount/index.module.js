/*
 * @Author: your name
 * @Date: 2020-12-05 19:46:02
 * @LastEditTime: 2020-12-05 19:51:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue2/src/page/ShowCount/index.ts
 */

import styles from './index.module.scss'
import Count from '../../components/Count/index.vue'
import ChangeCount from '../../components/ChangeCount/index.vue'

export default {
  data: function () {
    return {
      styles
    }
  },
  components: {
    Count,
    ChangeCount
  }
}

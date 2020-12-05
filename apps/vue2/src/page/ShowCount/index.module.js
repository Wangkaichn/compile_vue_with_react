/*
 * @Author: your name
 * @Date: 2020-12-05 13:08:34
 * @LastEditTime: 2020-12-05 13:09:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue2/src/page/ShowCount/index.module.js
 */

import styles from './index.module.scss'
import Count from '../../components/Count/index.vue'
import ChangeCount from '@srcV/components/ChangeCount/index.vue'

export default {
  data: function() {
    return {
      styles
    }
  },
  components: {
    Count,
    ChangeCount
  }
}
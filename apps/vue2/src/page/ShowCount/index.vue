<!--
 * @Author: your name
 * @Date: 2020-12-05 14:29:14
 * @LastEditTime: 2020-12-05 16:44:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue2/src/page/ShowCount/index.vue
-->

<template>
  <div :class="styles.container">
    <Count />
    <ChangeCount />
  </div>
</template>

<script lang="js">
import styles from './index.module.scss'
import Count from '../../components/Count/index.vue'
import ChangeCount from '../../components/ChangeCount/index.vue'

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
</script>

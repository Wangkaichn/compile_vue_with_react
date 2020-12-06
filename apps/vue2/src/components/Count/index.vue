<!--
 * @Author: your name
 * @Date: 2020-12-05 11:30:29
 * @LastEditTime: 2020-12-06 09:27:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue2/src/components/Count/index.vue
-->
<template>
  <div>
    <h2>
      It is Vue Count =&nbsp;
      <span :class="styles.count">{{ count }}</span>
    </h2>
  </div>
</template>

<script lang="js">
import styles from './index.module.scss'
export default ({
  data() {
    return {
      styles,
      count: this.$store.state.count
    }
  },
  watch: {
    '$store.state.count': function () {
      this.count = this.$store.state.count
    }
  }
})
</script>

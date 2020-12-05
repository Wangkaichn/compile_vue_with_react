<!--
 * @Author: your name
 * @Date: 2020-12-05 11:30:29
 * @LastEditTime: 2020-12-05 15:30:36
 * @LastEditors: your name
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
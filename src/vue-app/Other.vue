<!--
 * @Author: your name
 * @Date: 2020-12-02 22:27:35
 * @LastEditTime: 2020-12-03 14:10:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/src/vue-app/Other.vue
-->
<template>
  <div>
    It is vue，current Count is <span :class="styles.count">{{ count }}</span>
  </div>
</template>
<script>
import styles from './style.module.scss'

export default {
  name: "Count",
  data() {
    return {
      count: 0,
      styles
    }
  },
  mounted() {
    const _this = this
    this.timer = setInterval(() => {
      _this.count = Math.floor(Math.random(0, 1) * 100)
    }, 600)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
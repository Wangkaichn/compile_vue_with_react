<!--
 * @Author: your name
 * @Date: 2020-12-03 19:16:25
 * @LastEditTime: 2020-12-03 20:07:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue3/src/App.vue
-->
<template>
  <div>
    <Count />
    <DoubleCount />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Count from './components/Count/index.vue'
import DoubleCount from './components/DoubleCount/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Count,
    DoubleCount
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

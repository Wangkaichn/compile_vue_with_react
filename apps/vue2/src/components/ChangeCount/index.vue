<!--
 * @Author: your name
 * @Date: 2020-12-06 09:22:29
 * @LastEditTime: 2020-12-06 09:27:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue2/src/components/ChangeCount/index.vue
-->
<template>
  <el-button type="primary" v-on:click="handleAdd">Add</el-button>
</template>

<script lang="js">
export default {
  methods: {
    handleAdd() {
      this.$store.dispatch({ type: 'add' })
    }
  }
}
</script>

<!--
 * @Author: your name
 * @Date: 2020-12-05 10:51:00
 * @LastEditTime: 2020-12-05 11:14:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue2/src/components/ChangeCount/index.vue
-->
<template>
  <el-button type="primary" v-on:click="handleAdd">Add</el-button>
</template>

<script lang='js'>
export default {
  methods: {
    handleAdd() {
      this.$store.dispatch({ type: 'add' })
    }
  }
}
</script>

<style>

</style>
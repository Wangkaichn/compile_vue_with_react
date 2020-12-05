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
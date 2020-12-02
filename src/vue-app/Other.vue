<template>
  <div>
    It is vue，double Count is <span class="example">{{ count }}</span>
  </div>
</template>
<script>
export default {
  name: 'Count',
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    const _this = this
    this.timer = setInterval(() => {
      _this.count = Math.floor(Math.random(0, 1) * 100)
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>
<style>
.example {
  color: red;
}
</style>
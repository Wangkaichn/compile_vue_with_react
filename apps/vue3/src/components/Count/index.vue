<!--
 * @Author: your name
 * @Date: 2020-12-03 19:16:25
 * @LastEditTime: 2020-12-03 20:28:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue3/src/components/HelloWorld.vue
-->
<template>
  <div>
    <h2>
      It is Vue, current Count =&nbsp;
      <span :class="styles.count">{{ count }}</span>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'
import styles from './index.module.scss'

export default defineComponent({
  data() {
    return {
      styles
    }
  },
  setup() {
    const count = ref(0)
    const timer = ref()
    const store = useStore()
    onMounted(() => {
      timer.value = setInterval(() => {
        const _count = Math.floor(Math.random() * 100)
        count.value = _count
        store.dispatch('setCount', { count: _count })
      }, 600)
    })
    onUnmounted(() => {
      clearInterval(timer.value)
    })
    return {
      count
    }
  }
})
</script>

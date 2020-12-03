<!--
 * @Author: your name
 * @Date: 2020-12-03 20:02:02
 * @LastEditTime: 2020-12-03 20:55:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue3/src/components/DoubleCount/index.vue
-->
<template>
  <teleport to="#VueTeleport">
    <h2>
      It is teleport from Vue-Store, DOM Created From Vue, double Count =&nbsp;
      <span :class="styles.doubleCount">{{ doubleCount }}</span>
    </h2>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import styles from './index.module.scss'
import useDoubleCount from './useDoubleCount'

export default defineComponent({
  data() {
    return {
      styles
    }
  },
  setup() {
    const store = useStore()
    const timer = ref()
    const doubleCount = ref(-1)
    useDoubleCount(store, 'VueTeleport', timer, doubleCount)
    return {
      doubleCount
    }
  }
})
</script>

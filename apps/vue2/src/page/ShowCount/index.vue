<template>
  <div :class="styles.container">
    <Count />
    <ChangeCount />
  </div>
</template>

<script lang="js">
import styles from './index.module.scss'
import Count from '../../components/Count/index.vue'
import ChangeCount from '../../components/ChangeCount/index.vue'

export default {
  data: function() {
    return {
      styles
    }
  },
  components: {
    Count,
    ChangeCount
  }
}
</script>
/*
 * @Author: your name
 * @Date: 2020-12-03 20:36:11
 * @LastEditTime: 2020-12-03 20:57:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/vue3/src/components/DoubleCount/useDoubleCunt.ts
 */

import { onBeforeMount, onMounted, onUnmounted, Ref } from 'vue'
import { Store } from 'vuex'

type TypeUseDoubleCount = (store: Store<any>, id: string, timer: Ref, doubleCount: Ref) => void
const useDoubleCount: TypeUseDoubleCount = (store, id, timer, doubleCount) => {
  onBeforeMount(() => {
    const newDom = document.createElement('div')
    newDom.setAttribute('id', id)
    document.body.appendChild(newDom)
  })
  onMounted(() => {
    timer.value = setInterval(() => {
      doubleCount.value = store.state.doubleCount
    })
  })
  onUnmounted(() => {
    clearInterval(timer.value)
  })
}
export default useDoubleCount

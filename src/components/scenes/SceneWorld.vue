<template>
  <button class="render-btn" @click="buttonHandler()">Render</button>
  <div id="scene-container"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { World } from '@/world/World'

export default defineComponent({
  setup() {
    const render = ref(false)
    let container: HTMLElement | null
    let world: any

    onMounted(() => {
      container = document.querySelector('#scene-container')
      world = new World(container)
      world.render()
    })

    function buttonHandler() {
      console.log('render')
      if (render.value === false) {
        render.value = true
        world.render()
      } else {
        render.value = false
        world.dispose
      }
    }
    return { buttonHandler, render }
  }
})
</script>

<style scoped>
#scene-container {
  width: 640px;
  height: 480px;
}
</style>

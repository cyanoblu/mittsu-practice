<template>
  <div>ok</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { World } from '../world/World'

export default defineComponent({
  setup() {
    onMounted(() => {
      const container = document.querySelector('#scene-container')
      const world = new World(container)
    })

    World.render()
    return {}
  }
})
</script>

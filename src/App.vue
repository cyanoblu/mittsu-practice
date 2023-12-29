<template>
  <div class="content"><SceneWorld /></div>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicCube from './components/scenes/BasicCube.vue'
import SceneWorld from './components/scenes/SceneWorld.vue'

export default defineComponent({
  components: {
    //BasicCube: BasicCube,
    SceneWorld: SceneWorld
  },
  setup() {
    return {}
  }
})
</script>

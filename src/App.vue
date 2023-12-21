<template>
  <div class="content"><BasicCube /></div>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicCube from './components/scenes/BasicCube.vue'

export default defineComponent({
  components: {
    BasicCube: BasicCube
  },
  setup() {
    return {}
  }
})
</script>

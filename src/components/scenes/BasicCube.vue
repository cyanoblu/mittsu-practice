<template>
  <div class="content">
    <div id="basic-cube"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as THREE from 'three'

export default defineComponent({
  setup() {
    const renderWindow = ref()
    const renderer = ref()
    const canvasProperties = ref({ width: 800, height: 600 })

    onMounted(() => {
      renderWindow.value = document.getElementById('basic-cube')
      renderer.value = new THREE.WebGLRenderer()
      renderer.value.setSize(canvasProperties.value.width, canvasProperties.value.height)
      renderWindow.value.appendChild(renderer.value.domElement)
      animate()
    })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasProperties.value.width / canvasProperties.value.height,
      0.1,
      1000
    )
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 5
    function animate() {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.value.render(scene, camera)
    }
    return { canvasProperties }
  }
})
</script>

<style scoped>
#basic-cube {
  border: 3px solid white;
  border-radius: 5px;
  width: fit-content;
  margin: auto;
}
</style>

import { createCamera } from './components/Camera'
import { createScene } from './components/Scene'
import { createCube } from './components/Cube'
import { createCapsule } from './components/Capsule'
import { createRenderer } from './systems/Renderer'
import { Resizer } from './systems/Resizer'

let camera: any
let scene: any
let renderer: any

class World {
  constructor(container: any) {
    camera = createCamera()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    //const cube = createCube()
    const capsule = createCapsule()

    //scene.add(cube)
    scene.add(capsule)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }

  dispose() {
    renderer.dispose()
  }
}

export { World }

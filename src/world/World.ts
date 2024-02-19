import { createCamera } from './components/Camera'
import { createBasicLight } from './components/Lights'
import { createScene } from './components/Scene'
import { createCube } from './components/Cube'
import { createCapsule } from './components/Capsule'
import { createRenderer } from './systems/Renderer'
import { Resizer } from './systems/Resizer'
import { MathUtils } from 'three'

let camera: any
let light: any
let scene: any
let renderer: any

class World {
  /**
   * Defines the scene and meshes, builds the world to be renderered
   */

  constructor(container: any) {
    camera = createCamera()
    light = createBasicLight()
    scene = createScene()
    renderer = createRenderer()
    container.append(renderer.domElement)

    const cube = createCube()
    const capsule = createCapsule()

    scene.add(cube, light)
    scene.add(light.target)
    cube.add(capsule)

    camera.position.set(1,1,10)

    capsule.position.x = 3

    cube.rotation.y = MathUtils.degToRad(45)

    cube.scale.set(0.5, 0.5, 0.5)
    cube.position.z = 5

    light.position.set(0, 4, 0)

    light.target.position.set(0, 2, 0)

    light.angle = MathUtils.degToRad(90)

    const resizer = new Resizer(container, camera, renderer)

    resizer.onResize = () => {
      this.render()
    }
  }

  render() {
    renderer.render(scene, camera)
  }

  dispose() {
    renderer.dispose()
  }
}

export { World }

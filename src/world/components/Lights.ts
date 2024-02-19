import { AmbientLight, SpotLight, DirectionalLight } from 'three'

function createBasicLight() {
  const basicLight = new SpotLight( 
    0xffffff,
    23,
    0
  )

  return basicLight
}

export { createBasicLight }

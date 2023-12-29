import { CapsuleGeometry, Mesh, MeshStandardMaterial } from 'three'

function createCapsule() {
  const geometry = new CapsuleGeometry(1, 1, 4, 8)

  const spec = {
    color: 0x00ff00
  }

  const material = new MeshStandardMaterial(spec)

  const capsule = new Mesh(geometry, material)

  return capsule
}

export { createCapsule }

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return

    // Gentle floating motion
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.1
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1
    meshRef.current.rotation.y = Math.cos(time * 0.2) * 0.1
  })

  return (
    <Icosahedron
      ref={meshRef}
      args={[1, 1]}
      scale={0.5}
      position={[2, 0, 0]}
    >
      <MeshDistortMaterial
        color="#00f5ff"
        speed={2}
        distort={0.3}
        radius={1}
      />
    </Icosahedron>
  )
}

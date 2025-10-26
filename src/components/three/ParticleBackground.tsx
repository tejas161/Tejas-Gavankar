import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export const ParticleBackground = () => {
  const ref = useRef<THREE.Points>(null)
  const { mouse, viewport } = useThree()
  
  // Generate random points
  const count = 5000
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 3
      const y = (Math.random() - 0.5) * 3
      const z = (Math.random() - 0.5) * 3
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return

    // Rotate based on mouse position
    ref.current.rotation.x += delta * 0.1
    ref.current.rotation.y += delta * 0.15

    // Follow mouse
    const x = (mouse.x * viewport.width) / 4
    const y = (mouse.y * viewport.height) / 4
    ref.current.position.x += (x - ref.current.position.x) * 0.05
    ref.current.position.y += (y - ref.current.position.y) * 0.05
  })

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#00f5ff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}
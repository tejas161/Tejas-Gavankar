import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

export const ParticleField = () => {
  const ref = useRef<THREE.Points>(null)
  
  // Generate random points in a wider, flatter space
  const count = 3000
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Create a wider distribution horizontally (x)
      positions[i * 3] = (Math.random() - 0.5) * 8
      // Flatten the vertical distribution (y)
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2
      // Add more depth variation (z)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return

    // Sideways motion
    ref.current.rotation.y += delta * 0.1
    
    // Gentle wave effect
    const time = state.clock.getElapsedTime()
    ref.current.position.x = Math.sin(time * 0.1) * 0.5
    
    // Subtle size pulsing
    const size = ref.current.material as THREE.PointsMaterial
    size.size = THREE.MathUtils.lerp(
      0.015,
      0.02,
      Math.sin(time) * 0.5 + 0.5
    )
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
        opacity={0.6}
      />
    </Points>
  )
}
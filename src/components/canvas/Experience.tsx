import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import * as THREE from 'three'

import { ParticleField } from './ParticleField'
import { FloatingGeometry } from './FloatingGeometry'

export const Experience = () => {
  const { mouse, viewport } = useThree()
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!groupRef.current) return

    // Smoother, more subtle camera movement based on mouse
    const targetX = (mouse.x * viewport.width) / 5
    const targetY = (mouse.y * viewport.height) / 5
    
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05
  })

  return (
    <>
      {/* Camera positioned further back for better perspective */}
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      
      {/* Subtle ambient lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.3} />
      
      {/* Dark environment for better contrast */}
      <Environment preset="night" />
      
      {/* Main Scene Group */}
      <group ref={groupRef}>
        <ParticleField />
        <FloatingGeometry />
      </group>
      
      {/* Reduced bloom intensity for better text readability */}
      <EffectComposer>
        <Bloom
          intensity={0.8}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
        />
      </EffectComposer>
    </>
  )
}
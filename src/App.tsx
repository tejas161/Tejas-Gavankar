import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, Preload } from '@react-three/drei'

import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Experience } from '@/components/canvas/Experience'
import { Navbar } from '@/components/ui/Navbar'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate minimum loading time for smooth intro
    const timer = setTimeout(() => setIsLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative z-0 bg-dark">
      {/* Unified Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-dark-100 via-dark to-dark-100 pointer-events-none"></div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-3/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* 3D Background Canvas */}
      <div className="fixed top-0 left-0 w-full h-full">
        <Canvas
          shadows
          camera={{ position: [0, 0, 8], fov: 75, near: 0.1, far: 1000 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            <Experience />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* Loading Screen */}
      <Loader
        containerStyles={{
          background: 'linear-gradient(to right, #050816, #1a1a2e)',
        }}
        innerStyles={{
          backgroundColor: '#00f5ff',
        }}
        barStyles={{
          backgroundColor: '#7000ff',
        }}
        dataStyles={{
          color: '#ffffff',
          fontSize: '14px',
          fontFamily: 'Inter var, sans-serif',
        }}
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
      />
    </div>
  )
}

export default App
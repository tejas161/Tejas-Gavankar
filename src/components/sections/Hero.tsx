import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import profileImage from '../../assets/images/tejas-profile.jpg'

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(textRef.current,
      { 
        opacity: 0,
        x: -100
      },
      { 
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out"
      }
    )
  }, [])

  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div
        ref={containerRef}
        className="section-wrapper flex flex-col lg:flex-row items-center justify-between gap-12 relative"
      >
        {/* Text content */}
        <div 
          ref={textRef}
          className="relative z-10 lg:w-1/2 px-8 py-12 rounded-2xl bg-dark/40 backdrop-blur-sm border border-white/10"
        >
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text inline-block">
              Tejas Gavankar
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-200 max-w-3xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I build high-performance, interactive web apps & AI-agent systems
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="#projects"
              className="glassmorphism gradient-border px-8 py-3 text-lg font-medium 
                       hover:bg-white/10 transition-colors duration-300
                       relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 
                            group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <div className="relative group cursor-pointer">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl opacity-75 blur-lg 
                          group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative rounded-xl overflow-hidden border-4 border-white/10 w-[280px] sm:w-[400px]
                          transform group-hover:scale-105 transition-transform duration-300">
              <img
                src={profileImage}
                alt="Tejas Gavankar"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '3/4' }}
              />
            </div>

            {/* Hover overlay with subtle gradient */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                          bg-gradient-to-t from-primary/50 to-transparent 
                          transition-opacity duration-300"></div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-64 h-64 bg-secondary/30 rounded-full filter blur-3xl opacity-20"></div>
      </div>
    </section>
  )
}
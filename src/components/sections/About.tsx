import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative w-full min-h-screen">
      <div 
        ref={ref}
        className="section-wrapper"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 gradient-text">
            About Me
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300">
            <p>
              I'm a passionate Full-Stack & Frontend Engineer with expertise in building
              high-performance, interactive web applications and AI-agent systems.
            </p>
            
            <p>
              My approach combines technical excellence with creative problem-solving,
              focusing on delivering seamless user experiences through modern web technologies
              and innovative AI solutions.
            </p>

            <p>
              I specialize in creating responsive, accessible, and visually stunning
              applications that not only meet but exceed user expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

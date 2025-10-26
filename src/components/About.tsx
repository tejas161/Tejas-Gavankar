import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

export const About = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      gsap.timeline()
        .fromTo(titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(contentRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
    }
  }, [inView])

  return (
    <section 
      ref={sectionRef}
      className="section-wrapper min-h-screen flex items-center py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text"
        >
          About Me
        </h2>
        
        <div 
          ref={contentRef}
          className="space-y-6 text-lg text-gray-300"
        >
          <p>
            I'm a passionate Frontend & Software Engineer with a keen eye for creating
            engaging, high-performance web applications. My expertise lies in building
            seamless user experiences using cutting-edge technologies.
          </p>
          
          <p>
            With a strong foundation in modern frontend frameworks and a deep understanding
            of web technologies, I specialize in crafting responsive, accessible, and
            visually stunning applications that leave a lasting impression.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">Frontend</h3>
              <ul className="space-y-2">
                <li>React & Vue.js</li>
                <li>TypeScript</li>
                <li>Three.js & WebGL</li>
                <li>CSS/SASS</li>
              </ul>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">Backend</h3>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
                <li>System Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
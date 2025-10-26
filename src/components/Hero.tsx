import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const roleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    })

    tl.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
    .fromTo(nameRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      "-=0.5"
    )
    .fromTo(roleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      "-=0.8"
    )
    .fromTo(descriptionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 },
      "-=0.8"
    )
  }, [])

  return (
    <section className="h-screen flex items-center justify-center px-4">
      <div 
        ref={containerRef}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 
          ref={nameRef}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Tejas Gavankar</span>
        </h1>
        
        <h2 
          ref={roleRef}
          className="text-2xl md:text-4xl text-gray-300 mb-8"
        >
          Frontend & Software Engineer
        </h2>
        
        <p
          ref={descriptionRef}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about crafting beautiful, high-performance web applications
          with cutting-edge technologies and seamless user experiences.
        </p>
      </div>
    </section>
  )
}
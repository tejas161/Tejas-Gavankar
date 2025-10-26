import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaFilm, FaHome, FaRobot } from 'react-icons/fa'

// Import project images
import cinemaFlixImg from '../../assets/images/projects/cinema-flix.jpg'
import propertyImg from '../../assets/images/projects/property.jpg'
import sportsImg from '../../assets/images/projects/sports-mcp.jpg'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const projects = [
  {
    title: "Cinema Flix",
    description: "Full-Stack Movie Ticket Booking Platform – A modern React + Go application for discovering movies and booking tickets.",
    link: "https://github.com/tejas161/Cinema-Flix",
    image: cinemaFlixImg,
    icon: FaFilm,
    color: "#E50914",
    features: [
      "Real-time seat booking",
      "Movie recommendations",
      "Secure payments",
      "User reviews"
    ],
    tech: ["React", "Go", "PostgreSQL", "Redis"]
  },
  {
    title: "Property.com",
    description: "Online Property Hosting & Viewing Web Application – Clean UI built with Material-UI, AWS S3, Google Maps integration & payments.",
    link: "https://github.com/tejas161/Property.com",
    image: propertyImg,
    icon: FaHome,
    color: "#4CAF50",
    features: [
      "Property listings",
      "Virtual tours",
      "Map integration",
      "Booking system"
    ],
    tech: ["React", "Material-UI", "AWS", "Google Maps API"]
  },
  {
    title: "Sports MCP Server",
    description: "Model Context Protocol Server for Sports Data – An MCP server built to expose tool-based APIs on sports data using TheSportsDB.",
    link: "https://github.com/tejas161/Sports-MCP-Server",
    image: sportsImg,
    icon: FaRobot,
    color: "#00BCD4",
    features: [
      "AI-powered analytics",
      "Real-time stats",
      "Custom API endpoints",
      "Data visualization"
    ],
    tech: ["Python", "FastAPI", "MongoDB", "WebSocket"]
  }
]

const AnimatedText = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  const containerAnimation = {
    hidden: { opacity: 0, x: isEven ? -100 : 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      variants={containerAnimation}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative w-full overflow-hidden rounded-2xl"
    >
      <div className="glassmorphism h-full border border-white/10 
                    transition-all duration-500 group-hover:border-white/20">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          {/* Project Image */}
          <motion.div 
            className="relative lg:w-1/2 h-[300px] lg:h-auto overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-10"></div>
            <motion.img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-top"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Project Icon Overlay */}
            <motion.div 
              className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} z-20`}
              initial={{ opacity: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -180 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-1 rounded-lg opacity-50 blur-lg"
                  style={{ backgroundColor: project.color }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-lg 
                              bg-dark/60 border border-white/10">
                  <project.icon 
                    className="w-6 h-6 transition-all duration-500 group-hover:scale-110" 
                    style={{ color: project.color }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Project Content */}
          <div className="lg:w-1/2 p-8">
            <motion.h3 
              className="text-2xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {project.description}
            </motion.p>

            {/* Features */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-sm font-semibold text-gray-400 mb-3">KEY FEATURES</h4>
              <ul className="grid grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    className="text-sm text-gray-300 flex items-center gap-2"
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: project.color }}
                      animate={{ 
                        scale: [1, 1.5, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h4 className="text-sm font-semibold text-gray-400 mb-3">TECH STACK</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span 
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-dark/60 text-gray-300
                             border border-white/10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* GitHub Link */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-white 
                       transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
              <span>View Source</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const Projects = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative w-full min-h-screen">
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
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-6 gradient-text text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 text-center max-w-2xl mb-16"
          >
            Here are some of my recent projects that showcase my skills and passion for building
            innovative web applications.
          </motion.p>

          <div className="flex flex-col gap-16 w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
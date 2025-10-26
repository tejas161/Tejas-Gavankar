import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaReact, FaVuejs, FaJs, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs,
  FaDocker, FaDatabase
} from 'react-icons/fa'
import { 
  SiTypescript, SiNuxtdotjs, SiGo, SiOpenai, SiTailwindcss, SiMongodb,
  SiPostgresql, SiRedis
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const skills = [
  {
    name: 'Frontend Development',
    technologies: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Vue.js', icon: FaVuejs, color: '#4FC08D' },
      { name: 'Nuxt', icon: SiNuxtdotjs, color: '#00DC82' },
      { name: 'Next.js', icon: TbBrandNextjs, color: '#ffffff' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
    ]
  },
  {
    name: 'Programming Languages',
    technologies: [
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Golang', icon: SiGo, color: '#00ADD8' },
    ]
  },
  {
    name: 'Backend & Database',
    technologies: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ]
  },
  {
    name: 'Tools & Technologies',
    technologies: [
      { name: 'Git', icon: FaGithub, color: '#F05032' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'Database Design', icon: FaDatabase, color: '#336791' },
      { name: 'MCP/AI Agents', icon: SiOpenai, color: '#00A67E' },
    ]
  }
]

const SkillCard = ({ 
  name, 
  icon: Icon, 
  color,
  index,
  categoryIndex
}: { 
  name: string
  icon: React.ElementType
  color: string
  index: number
  categoryIndex: number
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
      transition={{ 
        duration: 0.5,
        delay: 0.1 * index + (categoryIndex * 0.2),
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
      className="flex items-center gap-3 p-4 rounded-lg bg-dark/60 backdrop-blur-sm
                 border border-white/5 transition-all duration-300
                 hover:border-white/20 hover:bg-dark/80 group"
    >
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div 
          className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
          style={{ backgroundColor: color }}
        />
        <Icon className="w-6 h-6" style={{ color }} />
      </motion.div>
      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  )
}

const SkillCategory = ({ 
  name, 
  technologies, 
  index 
}: { 
  name: string
  technologies: { name: string; icon: React.ElementType; color: string }[]
  index: number
}) => {
  const categoryRef = useRef(null)
  const isInView = useInView(categoryRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={categoryRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.7,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="glassmorphism p-8 rounded-2xl border border-white/10
                 hover:border-white/20 transition-all duration-500"
    >
      <motion.h3 
        className="text-2xl font-bold mb-6 gradient-text"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
      >
        {name}
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {technologies.map((tech, techIndex) => (
          <SkillCard
            key={tech.name}
            {...tech}
            index={techIndex}
            categoryIndex={index}
          />
        ))}
      </div>
    </motion.div>
  )
}

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative w-full min-h-screen">
      <div 
        ref={ref}
        className="section-wrapper relative z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6 gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A showcase of my technical expertise and the tools I use to build amazing web experiences
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {skills.map((category, index) => (
              <SkillCategory
                key={category.name}
                {...category}
                index={index}
              />
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
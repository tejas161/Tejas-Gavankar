import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaInstagram, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode
} from 'react-icons/fa'

interface SocialLink {
  name: string
  url: string
  icon: React.ElementType
  color: string
  description: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/tejas161',
    icon: FaGithub,
    color: '#f5f5f5',
    description: 'Check out my open source projects'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tejas-gavankar-305757195/',
    icon: FaLinkedinIn,
    color: '#0077B5',
    description: 'Connect with me professionally'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_tejas16/',
    icon: FaInstagram,
    color: '#E4405F',
    description: 'Follow my personal journey'
  }
]

interface ContactCardProps extends SocialLink {
  delay: number
}

const ContactCard = ({ 
  name, 
  url, 
  icon: Icon, 
  color, 
  description,
  delay 
}: ContactCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="group relative flex flex-col items-center p-8 rounded-2xl
                 bg-dark/40 backdrop-blur-sm border border-white/10
                 hover:border-white/20 transition-all duration-300
                 hover:transform hover:scale-105"
    >
      <div className="relative">
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
          style={{ backgroundColor: color }}
        ></div>
        
        {/* Icon */}
        <div className="relative w-16 h-16 flex items-center justify-center rounded-full
                      bg-dark/60 border border-white/10 group-hover:border-white/20
                      transition-all duration-300">
          <Icon 
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
            style={{ color }}
          />
        </div>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
        {name}
      </h3>
      
      <p className="mt-2 text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </motion.a>
  )
}

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative w-full min-h-screen">
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text text-center">
            Let's Connect
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 text-center max-w-2xl mb-16"
          >
            Feel free to reach out for collaborations or just a friendly hello!
          </motion.p>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {socialLinks.map((link, index) => (
              <ContactCard
                key={link.name}
                {...link}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-col items-center gap-4 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>Based in India</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="text-primary" />
              <span>Full-Stack & Frontend Engineer</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
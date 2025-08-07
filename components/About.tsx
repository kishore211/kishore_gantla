'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Brain, Rocket, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const highlights = [
    {
      icon: Code,
      title: 'Enterprise Java Development',
      description: 'Expert in Java, J2EE, Spring Framework, Spring Boot, and Hibernate for scalable enterprise applications.'
    },
    {
      icon: Brain,
      title: 'Microservices Architecture',
      description: 'Designing and implementing microservices with Spring Cloud, Docker, and Kubernetes for improved modularity.'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Achieved 30-40% performance improvements through database optimization and Redis caching strategies.'
    },
    {
      icon: Users,
      title: 'Team Leadership & Mentoring',
      description: 'Leading code reviews, mentoring junior developers, and following Agile Scrum methodologies.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
        <section id="about" className="section-padding section-light" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm an experienced Java Software Engineer with 5+ years of experience 
            creating enterprise applications and scalable microservices architectures. 
            Currently working at Sacrosanctinfo LLC, building robust solutions with Spring Framework and cloud technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                My journey in technology began during my Bachelor's in Electronics and Computer Engineering 
                at Sreenidhi Institute of Science and Technology in Hyderabad. What started as academic 
                curiosity evolved into a passion for building enterprise-grade software solutions.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                I started my career at Tata Consultancy Services, working with Fortune 500 clients on 
                full-stack applications. After moving to the United States, I pursued my Master's in 
                Computer Science at Kennesaw State University while working as a Graduate Research Assistant, 
                focusing on cybersecurity and software engineering methodologies.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Currently, I'm a Java Software Engineer at Sacrosanctinfo LLC, where I design enterprise 
                applications, implement microservices architectures, and mentor junior developers. My 
                experience spans across automotive industry applications at American Honda Motor Company 
                and various enterprise solutions.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Beyond coding, I'm passionate about continuous learning, having completed certifications 
                from IEEE and contributing to open-source projects. I believe in sharing knowledge through 
                mentoring and code reviews, helping teams deliver high-quality solutions.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                Enterprise Developer
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Team Leader
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Agile Practitioner
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Mentor & Coach
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                Research Assistant
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '10+', label: 'Technologies Mastered' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

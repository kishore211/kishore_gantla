'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Globe, Shield } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skillCategories = [
    {
      title: 'Java & Backend Technologies',
      color: 'from-red-500 to-orange-600',
      badge: 'Expert Level',
      skills: [
        { name: 'Java', level: 95, badge: 'Expert', description: '5+ years enterprise development' },
        { name: 'Spring Framework', level: 90, badge: 'Expert', description: 'Spring Boot, Spring MVC, Spring Security' },
        { name: 'Hibernate ORM', level: 85, badge: 'Advanced', description: 'JPA, database optimization' },
        { name: 'RESTful APIs', level: 95, badge: 'Expert', description: 'Microservices, SOAP, JSON' },
        { name: 'Maven/Gradle', level: 85, badge: 'Advanced', description: 'Build automation, dependency management' },
        { name: 'JUnit/Mockito', level: 80, badge: 'Advanced', description: 'Test-driven development, 85% coverage' },
      ]
    },
    {
      title: 'Database & Cloud Technologies',
      color: 'from-blue-500 to-cyan-600',
      badge: 'Advanced Level',
      skills: [
        { name: 'MySQL', level: 90, badge: 'Expert', description: 'Query optimization, database design' },
        { name: 'PostgreSQL', level: 85, badge: 'Advanced', description: 'Enterprise database solutions' },
        { name: 'Oracle Database', level: 80, badge: 'Advanced', description: 'Automotive industry applications' },
        { name: 'MongoDB', level: 75, badge: 'Proficient', description: 'NoSQL database solutions' },
        { name: 'Redis', level: 80, badge: 'Advanced', description: 'Caching, 30% performance improvement' },
        { name: 'AWS', level: 85, badge: 'Advanced', description: 'Cloud deployment, Docker, CI/CD' },
      ]
    },
    {
      title: 'Frontend & Web Technologies',
      color: 'from-green-500 to-teal-600',
      badge: 'Proficient Level',
      skills: [
        { name: 'Angular', level: 80, badge: 'Advanced', description: 'Full-stack enterprise applications' },
        { name: 'React', level: 75, badge: 'Proficient', description: 'Component-based development' },
        { name: 'JavaScript (ES6+)', level: 85, badge: 'Advanced', description: 'Modern JS features, async programming' },
        { name: 'HTML5 & CSS3', level: 80, badge: 'Advanced', description: 'Responsive design, modern layouts' },
        { name: 'TypeScript', level: 75, badge: 'Proficient', description: 'Type-safe development' },
        { name: 'JSP/Servlets', level: 85, badge: 'Advanced', description: 'J2EE web development' },
      ]
    },
    {
      title: 'DevOps & Development Tools',
      color: 'from-purple-500 to-pink-600',
      badge: 'Advanced Level',
      skills: [
        { name: 'Docker', level: 80, badge: 'Advanced', description: 'Containerization, Kubernetes' },
        { name: 'Jenkins', level: 85, badge: 'Advanced', description: 'CI/CD pipelines, automation' },
        { name: 'Git/SVN', level: 90, badge: 'Expert', description: 'Version control, GitFlow strategy' },
        { name: 'IntelliJ IDEA', level: 90, badge: 'Expert', description: 'IDE proficiency, debugging' },
        { name: 'Selenium', level: 75, badge: 'Proficient', description: 'Automated testing, WebDriver' },
        { name: 'Linux/Unix', level: 80, badge: 'Advanced', description: 'Server administration, scripting' },
      ]
    }
  ]

  const tools = [
    'Eclipse IDE', 'Visual Studio Code', 'Apache Struts', 'AJAX', 'XML', 'JSON',
    'Agile/Scrum', 'Kanban', 'JIRA', 'Confluence', 'Postman', 'SoapUI',
    'ELK Stack', 'Elasticsearch', 'Logstash', 'Kibana', 'Nginx', 'Apache Tomcat'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
        <section id="skills" className="section-padding section-gray" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            scalable, efficient, and innovative solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="card card-hover p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <span className="text-sm text-primary-600 font-medium">
                    {category.badge}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          skill.badge === 'Expert' ? 'bg-green-100 text-green-800' :
                          skill.badge === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {skill.badge}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 ml-0">
                      {skill.description}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                className="bg-gray-100 hover:bg-primary-50 text-gray-700 hover:text-primary-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.6 + index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Certifications & Learning
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'IEEE Adastra Certification',
              'LinkedIn C++ Assessment (Passed)',
              'IIT Delhi Entrepreneurship Course',
              'Spring Framework Certification',
              'AWS Solutions Architect (Pursuing)',
              'Agile & Scrum Methodologies'
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="card card-hover p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary-600 rounded-full" />
                </div>
                <p className="text-gray-700 font-medium text-sm">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Enterprise E-Commerce Platform',
      description: 'A comprehensive full-stack e-commerce solution built with Spring Boot and React, featuring secure payment processing and microservices architecture.',
      image: '/projects/ecommerce-platform.jpg',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'Docker', 'AWS', 'Jenkins'],
      features: [
        'Secure Payment Integration',
        'RESTful API Architecture',
        'JWT Authentication',
        'Microservices Design',
        'CI/CD Pipeline',
        'Database Optimization'
      ],
      githubUrl: 'https://github.com/kishoregantla/enterprise-ecommerce',
      liveUrl: 'https://ecommerce-demo.kishoregantla.dev',
      category: 'Enterprise Java',
      problem: 'Need for a scalable e-commerce platform with modern architecture and secure payment processing.',
      solution: 'Developed using Spring Boot microservices with React frontend, implementing JWT security and payment gateway integration.',
      impact: 'Achieved 40% improvement in system modularity and 30% performance enhancement through database optimization.',
      metrics: ['40% better modularity', '30% faster queries', '99.9% uptime']
    },
    {
      id: 2,
      title: 'Microservices Architecture Implementation',
      description: 'Designed and implemented a comprehensive microservices ecosystem using Spring Cloud, Docker, and Kubernetes for enterprise scalability.',
      image: '/projects/microservices.jpg',
      technologies: ['Spring Boot', 'Spring Cloud', 'Docker', 'Kubernetes', 'ELK Stack', 'Redis'],
      features: [
        'Service Discovery',
        'Circuit Breaker Patterns',
        'Centralized Configuration',
        'API Gateway',
        'Distributed Tracing',
        'Container Orchestration'
      ],
      githubUrl: 'https://github.com/kishoregantla/microservices-platform',
      liveUrl: 'https://microservices-demo.kishoregantla.dev',
      category: 'Microservices',
      problem: 'Legacy monolithic application needed to be modernized for better scalability and maintainability.',
      solution: 'Decomposed monolith into microservices using Spring Cloud Netflix stack with containerized deployment.',
      impact: 'Reduced deployment time by 60% and improved system resilience with circuit breaker implementation.',
      metrics: ['60% faster deployments', '99.8% service availability', '50% reduced coupling']
    },
    {
      id: 3,
      title: 'Automotive Data Processing System',
      description: 'Enterprise-level data processing system for Honda Motor Company handling large automotive datasets with Java 8 streams and SQL optimization.',
      image: '/projects/automotive-system.jpg',
      technologies: ['Java 8', 'Oracle Database', 'Spring Framework', 'Apache Kafka', 'Maven'],
      features: [
        'Real-time Data Processing',
        'Stream Processing APIs',
        'Database Query Optimization',
        'Batch Processing Jobs',
        'Data Validation Pipeline',
        'Performance Monitoring'
      ],
      githubUrl: 'https://github.com/kishoregantla/automotive-data-system',
      liveUrl: '#', // Private corporate project
      category: 'Enterprise Software',
      problem: 'Need to process massive automotive datasets efficiently while maintaining data integrity and performance.',
      solution: 'Implemented Java 8 Streams and Lambda expressions with optimized SQL queries and batch processing.',
      impact: 'Processed 10M+ records daily with 45% improvement in processing speed and enhanced data accuracy.',
      metrics: ['10M+ daily records', '45% faster processing', '99.9% data accuracy']
    },
    {
      id: 4,
      title: 'IRIS Recognition System',
      description: 'Advanced biometric authentication system using MATLAB and computer vision algorithms for secure identity verification with 95% accuracy.',
      image: '/projects/iris-recognition.jpg',
      technologies: ['MATLAB', 'Computer Vision', 'Image Processing', 'Machine Learning', 'Pattern Recognition'],
      features: [
        'Iris Feature Extraction',
        'Pattern Matching Algorithm',
        'Real-time Processing',
        'Noise Reduction',
        'Authentication Pipeline',
        'Performance Analytics'
      ],
      githubUrl: 'https://github.com/kishoregantla/iris-recognition-system',
      liveUrl: 'https://iris-demo.kishoregantla.dev',
      category: 'Computer Vision',
      problem: 'Traditional authentication methods were vulnerable and needed a more secure biometric solution.',
      solution: 'Developed iris recognition system using advanced image processing and pattern matching algorithms.',
      impact: 'Achieved 95% accuracy in identification with real-time processing capabilities for security applications.',
      metrics: ['95% accuracy rate', '<2s processing time', '99.1% precision']
    },
    {
      id: 5,
      title: 'Graduate Assessment Management System',
      description: 'Python-based academic management system for graduate programs with statistical analysis and data visualization capabilities.',
      image: '/projects/assessment-system.jpg',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Pandas', 'NumPy', 'Matplotlib'],
      features: [
        'Student Grade Management',
        'Statistical Data Analysis',
        'Automated Report Generation',
        'Data Visualization',
        'Academic Analytics',
        'Export Functionality'
      ],
      githubUrl: 'https://github.com/kishoregantla/graduate-assessment-system',
      liveUrl: 'https://assessment-demo.kishoregantla.dev',
      category: 'Academic Software',
      problem: 'Manual grade management and assessment tracking was time-consuming and error-prone for faculty.',
      solution: 'Built comprehensive system with automated calculations, statistical analysis, and intuitive dashboards.',
      impact: 'Reduced administrative overhead by 70% and improved accuracy in grade calculations and reporting.',
      metrics: ['70% time savings', '100% calculation accuracy', '500+ students managed']
    },
    {
      id: 6,
      title: 'Enterprise Security Framework',
      description: 'Comprehensive cybersecurity framework developed during graduate research focusing on enterprise system vulnerabilities and threat detection.',
      image: '/projects/security-framework.jpg',
      technologies: ['Java', 'Spring Security', 'Python', 'Network Security', 'Vulnerability Assessment'],
      features: [
        'Threat Detection Engine',
        'Vulnerability Scanner',
        'Security Policy Engine',
        'Audit Trail System',
        'Risk Assessment Tools',
        'Compliance Reporting'
      ],
      githubUrl: 'https://github.com/kishoregantla/enterprise-security-framework',
      liveUrl: '#', // Research project
      category: 'Cybersecurity Research',
      problem: 'Enterprise systems needed comprehensive security assessment and real-time threat detection capabilities.',
      solution: 'Developed multi-layered security framework with automated vulnerability scanning and threat analysis.',
      impact: 'Enhanced security posture for enterprise systems with 85% improvement in threat detection accuracy.',
      metrics: ['85% better threat detection', '50+ vulnerability types', 'Real-time monitoring']
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

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
    <section id="projects" className="section-padding section-light" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions I've built, combining cutting-edge technology 
            with practical applications to solve real-world problems.
          </p>
        </motion.div>

        {/* Featured Project Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="card card-hover p-0 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-96 bg-gradient-to-br from-primary-100 to-purple-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-20 h-20 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-10 h-10 bg-primary-600 rounded-lg" />
                    </div>
                    <p className="text-sm">Project Preview</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {projects[currentProject].category}
                  </span>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  key={currentProject}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {projects[currentProject].title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {projects[currentProject].description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {projects[currentProject].features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Project Impact
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-600">Problem:</span>
                        <p className="text-gray-600 mt-1">{projects[currentProject].problem}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Solution:</span>
                        <p className="text-gray-600 mt-1">{projects[currentProject].solution}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Results:</span>
                        <p className="text-gray-600 mt-1">{projects[currentProject].impact}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {projects[currentProject].metrics.map((metric, index) => (
                          <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={projects[currentProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </motion.a>
                    <motion.a
                      href={projects[currentProject].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-primary-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-primary-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentProject
                    ? 'bg-primary-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card card-hover group p-0"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-12 h-12 bg-primary-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary-600 rounded" />
                    </div>
                    <p className="text-xs">{project.category}</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-500 text-xs px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

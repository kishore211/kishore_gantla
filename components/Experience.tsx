'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Calendar, MapPin, Award, TrendingUp } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const experiences = [
    {
      id: 1,
      company: 'Sacrosanctinfo LLC',
      position: 'Java Software Engineer',
      location: 'California, United States (Remote)',
      duration: 'February 2024 - Present',
      type: 'Full-time',
      logo: '/companies/sacrosanctinfo.png',
      description: 'Leading enterprise application development using Spring Framework and microservices architecture.',
      achievements: [
        'Design and develop enterprise-level Java applications using Spring Framework, Spring Boot, and Hibernate ORM',
        'Implement RESTful web services and microservices architecture, resulting in 40% improvement in system modularity',
        'Optimize database queries and implement Redis caching strategies, achieving 30% performance improvement',
        'Conduct comprehensive code reviews and mentor junior developers on Java best practices',
        'Manage CI/CD pipelines with Jenkins and maintain 85% code coverage across all modules'
      ],
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'Redis', 'MySQL', 'Jenkins', 'Docker', 'Microservices'],
      highlights: ['40% modularity improvement', '30% performance boost', '85% code coverage']
    },
    {
      id: 2,
      company: 'American Honda Motor Company, Inc.',
      position: 'Software Engineer',
      location: 'United States',
      duration: 'January 2023 - February 2024',
      type: 'Full-time',
      logo: '/companies/honda.png',
      description: 'Developed scalable software solutions for automotive industry applications with large dataset processing.',
      achievements: [
        'Developed scalable software solutions for automotive industry applications using Java and Spring Framework',
        'Built data processing pipelines using Java 8 features (Streams, Lambda expressions) for handling large datasets',
        'Collaborated with product management teams to gather requirements and translate them into technical specifications',
        'Enhanced existing legacy applications while ensuring backward compatibility and system stability',
        'Implemented automated testing procedures using Selenium WebDriver for comprehensive application testing'
      ],
      technologies: ['Java 8', 'Spring Framework', 'Oracle Database', 'Maven', 'Selenium', 'Git'],
      highlights: ['Large dataset processing', 'Legacy system modernization', 'Automated testing']
    },
    {
      id: 3,
      company: 'Kennesaw State University',
      position: 'Graduate Research Assistant',
      location: 'Marietta, Georgia',
      duration: 'August 2021 - December 2022',
      type: 'Part-time',
      logo: '/companies/ksu.png',
      description: 'Conducted advanced research in cybersecurity and software engineering methodologies.',
      achievements: [
        'Conducted advanced research in cybersecurity, software engineering methodologies, and machine learning applications',
        'Developed Python applications for graduate assessment systems and statistical data analysis',
        'Assisted in academic research projects and contributed to scholarly publications in computer science journals',
        'Collaborated with faculty members and graduate students on various computer science research initiatives',
        'Mentored undergraduate students in programming concepts and software development practices'
      ],
      technologies: ['Python', 'Machine Learning', 'Cybersecurity', 'Data Analysis', 'Academic Research'],
      highlights: ['Academic research', 'Publications', 'Student mentoring']
    },
    {
      id: 4,
      company: 'Tata Consultancy Services',
      position: 'Software Engineer',
      location: 'Hyderabad, Telangana, India',
      duration: 'January 2020 - August 2021',
      type: 'Full-time',
      logo: '/companies/tcs.png',
      description: 'Developed enterprise applications for Fortune 500 clients with full-stack technologies.',
      achievements: [
        'Developed enterprise applications using Java, J2EE, Spring Framework, and Hibernate for Fortune 500 clients',
        'Worked on full-stack development projects involving Angular frontend and Spring Boot backend technologies',
        'Participated in complete software development lifecycle including requirement analysis, design, coding, testing, and deployment',
        'Collaborated with international clients across multiple time zones to understand business requirements',
        'Implemented database solutions using MySQL and PostgreSQL, optimizing queries for improved performance',
        'Followed Agile development practices including daily standups, sprint planning, and retrospective meetings'
      ],
      technologies: ['Java', 'J2EE', 'Spring Framework', 'Hibernate', 'Angular', 'MySQL', 'PostgreSQL'],
      highlights: ['Fortune 500 clients', 'International collaboration', 'Full-stack development']
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
        <section id="experience" className="section-padding section-light" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            5+ years of enterprise software development experience across leading technology 
            companies and research institutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block mt-6" />
                
                <div className="md:ml-20">
                  <motion.div
                    className="card card-hover p-8"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                            <Building2 className="h-6 w-6 text-primary-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {exp.position}
                            </h3>
                            <p className="text-lg font-semibold text-primary-600">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Key Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Education
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="card card-hover p-6"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Master of Science in Computer Science
                  </h4>
                  <p className="text-primary-600 font-medium">
                    Kennesaw State University
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">
                <div className="flex items-center mb-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  August 2021 - December 2023
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Marietta, Georgia
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Advanced Algorithms, Software Engineering, Database Systems, Cybersecurity, Machine Learning
              </p>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Graduate Research Assistant
              </span>
            </motion.div>

            <motion.div
              className="card card-hover p-6"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Bachelor of Technology in ECE
                  </h4>
                  <p className="text-primary-600 font-medium">
                    Sreenidhi Institute of Science and Technology
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">
                <div className="flex items-center mb-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  August 2015 - May 2019
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Hyderabad, India
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                CGPA: 7.19/10.0 • Data Structures, Computer Networks, Operating Systems, Software Engineering
              </p>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                IRIS Recognition Project
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star, User, Building2 } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'Senior Technical Lead',
      company: 'Sacrosanctinfo LLC',
      image: '/testimonials/sarah-chen.jpg',
      rating: 5,
      content: 'Kishore is an exceptional Java developer who consistently delivers high-quality enterprise solutions. His expertise in Spring Framework and microservices architecture has been instrumental in our platform\'s success. He also excels at mentoring junior developers.',
      highlight: 'Exceptional Java developer'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      position: 'Engineering Manager',
      company: 'American Honda Motor Company',
      image: '/testimonials/michael-rodriguez.jpg',
      rating: 5,
      content: 'Working with Kishore on automotive data processing systems was a great experience. His ability to optimize complex queries and implement efficient solutions helped us handle massive datasets with improved performance.',
      highlight: 'Performance optimization expert'
    },
    {
      id: 3,
      name: 'Dr. Jennifer Park',
      position: 'Professor of Computer Science',
      company: 'Kennesaw State University',
      image: '/testimonials/jennifer-park.jpg',
      rating: 5,
      content: 'Kishore was an outstanding Graduate Research Assistant who contributed significantly to our cybersecurity research. His technical skills, research methodology, and dedication to academic excellence were remarkable.',
      highlight: 'Outstanding research contribution'
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      position: 'Project Manager',
      company: 'Tata Consultancy Services',
      image: '/testimonials/rajesh-kumar.jpg',
      rating: 5,
      content: 'Kishore demonstrated exceptional full-stack development skills while working with our Fortune 500 clients. His ability to collaborate across time zones and deliver quality solutions on schedule was impressive.',
      highlight: 'Exceptional full-stack developer'
    },
    {
      id: 5,
      name: 'Alex Thompson',
      position: 'DevOps Engineer',
      company: 'Tech Startup',
      image: '/testimonials/alex-thompson.jpg',
      rating: 5,
      content: 'Kishore\'s knowledge of CI/CD pipelines and Docker containerization helped streamline our deployment process. His code quality and attention to detail in testing procedures are top-notch.',
      highlight: 'CI/CD and containerization expert'
    },
    {
      id: 6,
      name: 'Maria Gonzalez',
      position: 'Product Owner',
      company: 'Enterprise Solutions Inc.',
      image: '/testimonials/maria-gonzalez.jpg',
      rating: 5,
      content: 'Kishore has an excellent ability to translate business requirements into technical solutions. His communication skills and understanding of enterprise architecture make him a valuable team member.',
      highlight: 'Excellent business-tech translator'
    }
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
    <section id="testimonials" className="section-padding section-light" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Colleagues <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Testimonials from team members, managers, and collaborators who have 
            experienced my work firsthand across different organizations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="card card-hover p-6 relative"
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Highlight */}
              <div className="mb-4">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Content */}
              <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="flex items-center text-sm text-primary-600">
                    <Building2 className="h-3 w-3 mr-1" />
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="card card-featured p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the growing list of satisfied colleagues and clients who have 
              experienced the quality and dedication I bring to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Conversation
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/kishore-gantla-67137b11b"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View LinkedIn Recommendations
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

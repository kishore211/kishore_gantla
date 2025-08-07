'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Code, Lightbulb, TrendingUp } from 'lucide-react'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Microservices with Spring Boot and Docker',
      excerpt: 'A comprehensive guide to designing and implementing enterprise-grade microservices architecture using Spring Boot, Docker containers, and Kubernetes orchestration.',
      category: 'Architecture',
      tags: ['Spring Boot', 'Docker', 'Microservices', 'Kubernetes'],
      readTime: '12 min read',
      publishDate: '2024-01-15',
      image: '/blog/microservices-architecture.jpg',
      featured: true,
      icon: <Code className="h-6 w-6" />
    },
    {
      id: 2,
      title: 'Optimizing Database Performance in Enterprise Applications',
      excerpt: 'Deep dive into advanced database optimization techniques, query tuning, and indexing strategies that improved application performance by 60%.',
      category: 'Performance',
      tags: ['Database', 'Performance', 'SQL', 'Optimization'],
      readTime: '10 min read',
      publishDate: '2024-01-08',
      image: '/blog/database-optimization.jpg',
      featured: true,
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      id: 3,
      title: 'Implementing CI/CD Pipelines for Java Applications',
      excerpt: 'Step-by-step implementation of robust CI/CD pipelines using Jenkins, GitHub Actions, and automated testing strategies for Java applications.',
      category: 'DevOps',
      tags: ['CI/CD', 'Jenkins', 'GitHub Actions', 'Java'],
      readTime: '8 min read',
      publishDate: '2024-01-01',
      image: '/blog/cicd-pipeline.jpg',
      featured: false,
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      id: 4,
      title: 'Advanced Spring Security Configuration for Enterprise Apps',
      excerpt: 'Implementing comprehensive security measures including JWT authentication, OAuth2 integration, and role-based access control in Spring applications.',
      category: 'Security',
      tags: ['Spring Security', 'JWT', 'OAuth2', 'Authentication'],
      readTime: '15 min read',
      publishDate: '2023-12-20',
      image: '/blog/spring-security.jpg',
      featured: false,
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 5,
      title: 'React Performance Optimization Techniques',
      excerpt: 'Practical strategies for optimizing React applications including code splitting, memoization, and virtual scrolling for better user experience.',
      category: 'Frontend',
      tags: ['React', 'Performance', 'JavaScript', 'Optimization'],
      readTime: '9 min read',
      publishDate: '2023-12-10',
      image: '/blog/react-optimization.jpg',
      featured: false,
      icon: <Code className="h-6 w-6" />
    },
    {
      id: 6,
      title: 'Data Processing with Apache Kafka and Spring Boot',
      excerpt: 'Building real-time data processing systems using Apache Kafka for high-throughput messaging and Spring Boot for robust application development.',
      category: 'Data Engineering',
      tags: ['Kafka', 'Spring Boot', 'Data Processing', 'Real-time'],
      readTime: '11 min read',
      publishDate: '2023-12-01',
      image: '/blog/kafka-spring.jpg',
      featured: false,
      icon: <TrendingUp className="h-6 w-6" />
    }
  ]

  const categories = [
    { name: 'All', count: blogPosts.length, color: 'bg-gray-100 text-gray-800' },
    { name: 'Architecture', count: 1, color: 'bg-blue-100 text-blue-800' },
    { name: 'Performance', count: 2, color: 'bg-green-100 text-green-800' },
    { name: 'DevOps', count: 1, color: 'bg-purple-100 text-purple-800' },
    { name: 'Security', count: 1, color: 'bg-red-100 text-red-800' },
    { name: 'Frontend', count: 1, color: 'bg-yellow-100 text-yellow-800' },
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

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section id="blog" className="section-padding section-gray" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge and experiences from real-world projects, best practices, 
            and emerging technologies in software development.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <span
              key={category.name}
              className={`px-4 py-2 rounded-full text-sm font-medium ${category.color} cursor-pointer hover:scale-105 transition-transform`}
            >
              {category.name} ({category.count})
            </span>
          ))}
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-primary-600" />
            Featured Articles
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="card card-interactive group overflow-hidden cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20"></div>
                  <div className="relative z-10 text-primary-600">
                    {post.icon}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      post.category === 'Architecture' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'Performance' ? 'bg-green-100 text-green-800' :
                      post.category === 'DevOps' ? 'bg-purple-100 text-purple-800' :
                      post.category === 'Security' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        <Tag className="h-3 w-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Regular Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Code className="h-6 w-6 mr-2 text-primary-600" />
            Latest Articles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="card card-hover group cursor-pointer"
                whileHover={{ y: -3 }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-gray-400">
                    {post.icon}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-gray-400 text-xs px-1">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="card card-featured p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new technical articles and insights about 
              software development, architecture patterns, and industry best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog

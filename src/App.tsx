import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { BlogPost as BlogPostType, blogPosts } from './data/blogPosts';
import NewBlogPost from './components/NewBlogPost';

// Sample blog post data
const samplePost = {
  title: "Welcome to My Blog",
  content: "This is my first blog post. I'm excited to share my thoughts and experiences with you.",
  date: "March 19, 2024",
  author: "John Doe"
};

const pageVariants = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const spaceTransitionVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    y: 50,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -50,
    transition: {
      duration: 0.5,
    },
  },
};

const turbulenceVariants = {
  initial: {
    x: 0,
    y: 0,
    rotate: 0,
  },
  animate: {
    x: [0, -5, 5, -3, 3, 0],
    y: [0, -3, 3, -2, 2, 0],
    rotate: [0, -1, 1, -0.5, 0.5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const starVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: [0, 0.6, 0],
    scale: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  },
};

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const tagVariants = {
  initial: { scale: 0, y: 20 },
  animate: { 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    }
  },
};

function Science() {
  const sectionRef = useScrollAnimation();
  
  return (
    <motion.div
      variants={spaceTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-4xl mx-auto px-4 py-8 relative"
    >
      {/* Star Field Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            variants={starVariants}
            initial="initial"
            animate="animate"
            className="absolute w-1 h-1 bg-white/80 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.6)',
            }}
          />
        ))}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            variants={starVariants}
            initial="initial"
            animate="animate"
            className="absolute w-1.5 h-1.5 bg-blue-400/80 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)',
            }}
          />
        ))}
      </div>

      <div ref={sectionRef} className="relative z-10 opacity-0">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-4xl font-bold text-white/90 mb-8 relative group"
        >
          <span className="relative z-10 group-hover:animate-terminal-pulse">Science</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
            blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.h1>
        <div className="space-y-8">
          {[
            {
              title: "Physics",
              description: "Explore the fundamental laws of nature, from quantum mechanics to classical physics, and understand how they shape our universe.",
              topics: ["Quantum Mechanics", "Classical Physics", "Relativity"],
              color: "blue"
            },
            {
              title: "Chemistry",
              description: "Discover the building blocks of matter, chemical reactions, and the fascinating world of molecular interactions.",
              topics: ["Organic Chemistry", "Biochemistry", "Chemical Reactions"],
              color: "green"
            },
            {
              title: "Biology",
              description: "Explore the diversity of life, from microscopic organisms to complex ecosystems, and understand the mechanisms that drive biological processes.",
              topics: ["Genetics", "Ecology", "Evolution"],
              color: "purple"
            },
            {
              title: "Astronomy",
              description: "Journey through the cosmos, exploring stars, galaxies, and the mysteries of space. Understand the origins and evolution of our universe.",
              topics: ["Cosmology", "Stellar Evolution", "Exoplanets"],
              color: "indigo"
            },
            {
              title: "Material Science",
              description: "Discover the properties and applications of different materials, from nanomaterials to advanced composites and smart materials.",
              topics: ["Nanotechnology", "Smart Materials", "Composites"],
              color: "amber"
            }
          ].map((section, index) => (
            <motion.section
              key={section.title}
              custom={index}
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/50 
                hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 transform hover:scale-[1.02]
                relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10">
                <motion.h2 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-2xl font-bold text-white/90 mb-4 group-hover:animate-terminal-pulse"
                >
                  {section.title}
                </motion.h2>
                <motion.p 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="text-gray-300/90 mb-4"
                >
                  {section.description}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {section.topics.map((topic, topicIndex) => (
                    <motion.span
                      key={topic}
                      variants={tagVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: index * 0.2 + topicIndex * 0.1 + 0.5 }}
                      className="px-3 py-1 text-sm bg-gray-700/50 text-blue-300/90 rounded-full
                        hover:bg-gray-700/70 hover:text-blue-300 transition-colors duration-300
                        backdrop-blur-sm relative group"
                    >
                      <span className="relative z-10 group-hover:animate-terminal-pulse">{topic}</span>
                      <span className="absolute inset-0 bg-blue-500/0 rounded-full
                        group-hover:bg-blue-500/10 transition-colors duration-300"></span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Engineering() {
  const sectionRef = useScrollAnimation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <div ref={sectionRef} className="relative z-10 opacity-0">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-4xl font-bold text-white/90 mb-8 relative group"
        >
          <span className="relative z-10 group-hover:animate-terminal-pulse">Engineering & Coding</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
            blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.h1>
        <div className="space-y-8">
          {[
            {
              title: "Robotics and Electronics",
              description: "Explore the integration of robotics, electronics, and control systems. Learn about circuit design, sensors, actuators, and automation.",
              topics: ["Circuit Design", "Control Systems", "Sensors", "Automation"],
              color: "blue"
            },
            {
              title: "Material Science",
              description: "Discover the properties and applications of different materials, from nanomaterials to advanced composites and smart materials.",
              topics: ["Nanotechnology", "Smart Materials", "Composites", "Material Properties"],
              color: "green"
            },
            {
              title: "Mechatronics",
              description: "Learn about the interdisciplinary field combining mechanical engineering, electronics, and computer science for advanced systems.",
              topics: ["System Integration", "Control Theory", "Embedded Systems", "Automation"],
              color: "purple"
            },
            {
              title: "Computer Science and Coding",
              description: "Master programming languages, algorithms, and software development practices. From web development to artificial intelligence.",
              topics: ["Web Development", "AI/ML", "Data Structures", "Software Engineering"],
              color: "indigo"
            },
            {
              title: "Mechanical Engineering",
              description: "Study the principles of mechanics, thermodynamics, and materials science for designing and manufacturing mechanical systems.",
              topics: ["Thermodynamics", "Fluid Mechanics", "Machine Design", "Manufacturing"],
              color: "amber"
            }
          ].map((section, index) => (
            <motion.section
              key={section.title}
              custom={index}
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/50 
                hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 transform hover:scale-[1.02]
                relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <div className="relative z-10">
                <motion.h2 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-2xl font-bold text-white/90 mb-4 group-hover:animate-terminal-pulse"
                >
                  {section.title}
                </motion.h2>
                <motion.p 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="text-gray-300/90 mb-4"
                >
                  {section.description}
                </motion.p>
                <div className="flex flex-wrap gap-2">
                  {section.topics.map((topic, topicIndex) => (
                    <motion.span
                      key={topic}
                      variants={tagVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: index * 0.2 + topicIndex * 0.1 + 0.5 }}
                      className="px-3 py-1 text-sm bg-gray-700/50 text-blue-300/90 rounded-full
                        hover:bg-gray-700/70 hover:text-blue-300 transition-colors duration-300
                        backdrop-blur-sm relative group"
                    >
                      <span className="relative z-10 group-hover:animate-terminal-pulse">{topic}</span>
                      <span className="absolute inset-0 bg-blue-500/0 rounded-full
                        group-hover:bg-blue-500/10 transition-colors duration-300"></span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Home() {
  const navigate = useNavigate();
  const sectionRef = useScrollAnimation();
  const latestPost = blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-6xl mx-auto px-4 py-8"
    >
      <div ref={sectionRef} className="text-center mb-16 opacity-0">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-6xl font-bold text-white/90 mb-6 relative inline-block group"
        >
          <span className="relative z-10 group-hover:animate-terminal-pulse">Welcome to My Blog</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
            blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="font-sans text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          A place to explore science, technology, fitness, and more.
          Discover articles, tutorials, and insights across various topics.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          <button
            onClick={() => navigate('/categories')}
            className="px-8 py-3 bg-blue-500/90 text-white/90 rounded-lg 
              hover:bg-blue-600/90 hover:text-white transition-colors duration-300
              shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
              relative group"
          >
            <span className="relative z-10 group-hover:animate-terminal-pulse">
              Explore Categories
            </span>
            <span className="absolute inset-0 bg-blue-500/0 rounded-lg
              group-hover:bg-blue-500/10 transition-colors duration-300"></span>
          </button>
          <button
            onClick={() => navigate('/blog')}
            className="px-8 py-3 bg-gray-800/50 text-white/90 rounded-lg 
              hover:bg-gray-700/50 hover:text-white transition-colors duration-300
              shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
              border border-gray-700/50
              relative group"
          >
            <span className="relative z-10 group-hover:animate-terminal-pulse">
              Read Blog
            </span>
            <span className="absolute inset-0 bg-blue-500/0 rounded-lg
              group-hover:bg-blue-500/5 transition-colors duration-300"></span>
          </button>
        </motion.div>
      </div>

      {/* Latest Article Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="mt-16 p-8 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50
          hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display text-3xl font-bold text-white/90 group relative inline-block">
            <span className="relative z-10 group-hover:animate-terminal-pulse">Latest Article</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
              blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </h2>
          <button
            onClick={() => navigate('/blog')}
            className="text-blue-400/90 hover:text-blue-300 transition-colors duration-300
              flex items-center gap-2 group"
          >
            <span className="group-hover:animate-terminal-pulse">View All Articles</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {latestPost && (
          <div className="bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700/50
            hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300
            cursor-pointer group"
            onClick={() => navigate(`/blog/${latestPost._id}`)}
          >
            <div className="flex flex-col md:flex-row">
              {latestPost.imageUrl && (
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                  <img 
                    src={latestPost.imageUrl} 
                    alt={latestPost.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
              )}
              <div className="p-6 md:w-2/3">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300/90 rounded-full
                    backdrop-blur-sm">
                    {latestPost.category}
                  </span>
                  <span className="text-gray-400/90 text-sm">{latestPost.readTime}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white/90 mb-3 group-hover:animate-terminal-pulse">
                  {latestPost.title}
                </h3>
                <p className="font-sans text-gray-300/90 mb-4">
                  {latestPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400/90">
                  <span>{latestPost.date}</span>
                  <span>By {latestPost.author}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function Blog() {
  const sectionRef = useScrollAnimation();
  const [posts] = useState(blogPosts);
  const [sortBy, setSortBy] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAndSortedPosts = [...posts]
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        default:
          return 0;
      }
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div ref={sectionRef} className="text-center mb-16 opacity-0">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-5xl font-bold text-white/90 mb-6 relative inline-block group"
        >
          <span className="relative z-10 group-hover:animate-terminal-pulse">Blog</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
            blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="font-sans text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed"
        >
          Explore our latest articles and insights across various topics.
          Stay updated with the newest developments in science, technology, and fitness.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center"
      >
        <div className="w-full md:w-96 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full px-4 py-2 pl-10 bg-gray-800/50 text-white/90 rounded-lg
              border border-gray-700/50 focus:border-blue-500/50 focus:outline-none
              placeholder-gray-400/50"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="relative group">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none px-4 py-2 bg-gray-800/50 text-white/90 rounded-lg
              border border-gray-700/50 focus:border-blue-500/50 focus:outline-none
              pr-10 cursor-pointer hover:bg-gray-800/70 transition-colors duration-300"
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
            <option value="category">Sort by Category</option>
            <option value="readTime">Sort by Read Time</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8">
        {filteredAndSortedPosts.length > 0 ? (
          filteredAndSortedPosts.map((post) => (
            <BlogPost key={post._id} post={post} />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-8 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
          >
            <p className="text-gray-300/90">No articles found matching your search.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function BlogPostView() {
  const { id } = useParams();
  const post = blogPosts.find(p => p._id === id);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-white/90">Article not found</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <BlogPost post={post} isFullView={true} />
    </motion.div>
  );
}

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="font-display text-4xl font-bold text-primary dark:text-white mb-8">
        About Me
      </h1>
      <p className="font-sans text-lg text-gray-600 dark:text-gray-300">
        I'm a passionate writer and developer who loves sharing knowledge and experiences
        through this blog. Feel free to reach out and connect with me!
      </p>
    </div>
  );
}

function CategoryView() {
  const { category } = useParams();
  const navigate = useNavigate();
  const sectionRef = useScrollAnimation();
  const [sortBy, setSortBy] = useState('date');

  const categoryPosts = blogPosts.filter(post => 
    post.category.toLowerCase() === category?.toLowerCase()
  );

  const sortedPosts = [...categoryPosts].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      case 'readTime':
        return parseInt(a.readTime) - parseInt(b.readTime);
      default:
        return 0;
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div ref={sectionRef} className="text-center mb-16 opacity-0">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-5xl font-bold text-white/90 mb-6 relative inline-block group"
        >
          <span className="relative z-10 group-hover:animate-terminal-pulse">{category}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
            blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="font-sans text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed"
        >
          Explore our articles in {category}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 flex justify-between items-center"
      >
        <button
          onClick={() => navigate('/categories')}
          className="text-blue-400/90 hover:text-blue-300 transition-colors duration-300
            flex items-center gap-2 group"
        >
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="group-hover:animate-terminal-pulse">Back to Categories</span>
        </button>

        <div className="relative group">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none px-4 py-2 bg-gray-800/50 text-white/90 rounded-lg
              border border-gray-700/50 focus:border-blue-500/50 focus:outline-none
              pr-10 cursor-pointer hover:bg-gray-800/70 transition-colors duration-300"
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
            <option value="readTime">Sort by Read Time</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8">
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
            <BlogPost key={post._id} post={post} />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-8 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
          >
            <p className="text-gray-300/90">No articles found in this category.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function Categories() {
  const navigate = useNavigate();
  const sectionRef = useScrollAnimation();

  // Get unique categories from blog posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div ref={sectionRef} className="text-center mb-16 opacity-0">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display text-5xl font-bold text-white/90 mb-6 relative inline-block group"
        >
          <span className="relative z-10 group-hover:animate-terminal-pulse">Categories</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
            blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="font-sans text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed"
        >
          Explore our articles by category
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => {
          const categoryPosts = blogPosts.filter(post => post.category === category);
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50
                hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300
                cursor-pointer group"
              onClick={() => navigate(`/category/${category}`)}
            >
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold text-white/90 mb-3 group-hover:animate-terminal-pulse">
                  {category}
                </h2>
                <p className="text-gray-300/90 mb-4">
                  {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''}
                </p>
                <div className="flex items-center text-blue-400/90 group-hover:text-blue-300 transition-colors duration-300">
                  <span className="group-hover:animate-terminal-pulse">View Articles</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category" element={<CategoryView />} />
        <Route path="/science" element={<Science />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostView />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <Header />
        <main className="py-8 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App; 
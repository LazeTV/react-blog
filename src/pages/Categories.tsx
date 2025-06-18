import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Categories = () => {
  const navigate = useNavigate();
  const sectionRef = useScrollAnimation();
  const sections = [
    {
      title: "Science",
      description: "Explore the wonders of science, from physics and chemistry to biology and beyond.",
      icon: "🔬",
      topics: ["Physics", "Chemistry", "Biology", "Astronomy", "Material Science"],
      color: "from-blue-500 to-blue-600",
      path: "/science"
    },
    {
      title: "Engineering & Coding",
      description: "Discover the fascinating world of engineering, programming, and technological innovation.",
      icon: "⚙️",
      topics: ["Robotics and Electronics", "Material Science", "Mechatronics", "Computer Science and Coding", "Mechanical Engineering"],
      color: "from-purple-500 to-purple-600",
      path: "/engineering"
    },
    {
      title: "Fighting",
      description: "Explore various martial arts and combat sports techniques and training methods.",
      icon: "🥋",
      topics: ["Boxing", "Jiu-Jitsu", "Muay Thai", "Wrestling"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Fitness",
      description: "Comprehensive guides on health, nutrition, and physical training programs.",
      icon: "🏋️",
      topics: ["Strength Training", "Calisthenics", "Nutrition", "Recovery", "Mental Health"],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-4 py-8"
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
          Explore our various categories and discover content that interests you.
          Each section contains detailed articles and resources to help you learn and grow.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            custom={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 
              overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer
              opacity-0"
            onClick={() => section.path && navigate(section.path)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 
              transition-opacity duration-300`} />
            
            <div className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{section.icon}</span>
                <h2 className="font-display text-2xl font-bold text-white/90 group-hover:animate-terminal-pulse">
                  {section.title}
                </h2>
              </div>
              
              <p className="font-sans text-gray-300/90 mb-4">
                {section.description}
              </p>

              <div className="mt-4">
                <h3 className="font-sans text-sm font-semibold text-gray-400/90 mb-2">
                  Popular Topics:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {section.topics.map((topic, topicIndex) => (
                    <motion.span
                      key={topic}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 + topicIndex * 0.05 }}
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

              <button className="mt-6 w-full py-2 px-4 bg-blue-500/90 text-white/90 rounded-lg 
                hover:bg-blue-600/90 hover:text-white transition-colors duration-300
                shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                relative group">
                <span className="relative z-10 group-hover:animate-terminal-pulse">
                  Explore {section.title}
                </span>
                <span className="absolute inset-0 bg-blue-500/0 rounded-lg
                  group-hover:bg-blue-500/10 transition-colors duration-300"></span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Categories; 
import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost as BlogPostType } from '../data/blogPosts';
import { useNavigate } from 'react-router-dom';
import AdSense from './AdSense';

interface BlogPostProps {
  post: BlogPostType;
  isFullView?: boolean;
}

export default function BlogPost({ post, isFullView = false }: BlogPostProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isFullView) {
      navigate(`/blog/${post._id}`);
    }
  };

  const content = isFullView ? (
    <div className="prose prose-invert max-w-none prose-lg">
      {post.content.split('\n').map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-5xl font-bold mb-8">{line.substring(2)}</h1>;
        } else if (line.startsWith('## ')) {
          return <h2 key={index} className="text-4xl font-bold mb-6 mt-10">{line.substring(3)}</h2>;
        } else if (line.startsWith('### ')) {
          return <h3 key={index} className="text-3xl font-bold mb-4 mt-8">{line.substring(4)}</h3>;
        } else if (line.startsWith('- ')) {
          return <li key={index} className="ml-8 mb-3 text-lg">{line.substring(2)}</li>;
        } else if (line.startsWith('   - ')) {
          return <li key={index} className="ml-16 mb-3 text-lg">{line.substring(5)}</li>;
        } else if (line.trim() === '') {
          return <br key={index} />;
        } else {
          return <p key={index} className="mb-6 text-xl leading-relaxed">{line}</p>;
        }
      })}
    </div>
  ) : (
    <p className="font-sans text-gray-300/90 mb-4 text-xl leading-relaxed">{post.excerpt}</p>
  );

  if (isFullView) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[90rem] mx-auto px-8"
      >
        {/* Top Banner Ad */}
        <div className="mb-8">
          <AdSense 
            adSlot="top-banner" 
            adFormat="auto"
            className="w-full h-[90px] md:h-[120px]"
          />
        </div>

        {post.imageUrl && (
          <div className="relative w-full h-[600px] mb-16 rounded-3xl overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-[70rem] mx-auto space-y-10">
            <div className="flex items-center gap-6">
              <span className="px-6 py-2.5 text-lg bg-blue-500/20 text-blue-300/90 rounded-full
                backdrop-blur-sm">
                {post.category}
              </span>
              <span className="text-gray-400/90 text-lg">{post.readTime}</span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl font-bold text-white/90 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-lg text-gray-400/90">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {post.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: tagIndex * 0.05 }}
                  className="px-5 py-2.5 text-lg bg-gray-800/50 text-blue-300/90 rounded-full
                    hover:bg-gray-800/70 hover:text-blue-300 transition-colors duration-300
                    backdrop-blur-sm relative group"
                >
                  <span className="relative z-10 group-hover:animate-terminal-pulse">{tag}</span>
                  <span className="absolute inset-0 bg-blue-500/0 rounded-full
                    group-hover:bg-blue-500/10 transition-colors duration-300"></span>
                </motion.span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none pt-8">
              {content}
            </div>

            {/* In-content Ad */}
            <div className="my-12">
              <AdSense 
                adSlot="in-content" 
                adFormat="rectangle"
                className="w-full h-[250px]"
              />
            </div>
          </div>

          {/* Sidebar Ad */}
          <div className="hidden lg:block sticky top-8">
            <AdSense 
              adSlot="sidebar" 
              adFormat="vertical"
              className="w-[300px] h-[600px]"
            />
          </div>
        </div>

        {/* Bottom Banner Ad */}
        <div className="mt-12">
          <AdSense 
            adSlot="bottom-banner" 
            adFormat="auto"
            className="w-full h-[90px] md:h-[120px]"
          />
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group cursor-pointer max-w-[90rem] mx-auto px-8"
      onClick={handleClick}
    >
      <div className="flex flex-col md:flex-row gap-10">
        {post.imageUrl && (
          <div className="md:w-1/2 relative h-72 md:h-64 rounded-3xl overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          </div>
        )}
        
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-6">
            <span className="px-5 py-2 text-lg bg-blue-500/20 text-blue-300/90 rounded-full
              backdrop-blur-sm">
              {post.category}
            </span>
            <span className="text-gray-400/90 text-lg">{post.readTime}</span>
          </div>

          <h2 className="font-display text-4xl font-bold text-white/90 group-hover:animate-terminal-pulse">
            {post.title}
          </h2>

          {content}

          <div className="flex items-center justify-between text-lg text-gray-400/90">
            <span>{post.date}</span>
            <span>By {post.author}</span>
          </div>

          <div className="flex flex-wrap gap-4">
            {post.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: tagIndex * 0.05 }}
                className="px-5 py-2 text-lg bg-gray-800/50 text-blue-300/90 rounded-full
                  hover:bg-gray-800/70 hover:text-blue-300 transition-colors duration-300
                  backdrop-blur-sm relative group"
              >
                <span className="relative z-10 group-hover:animate-terminal-pulse">{tag}</span>
                <span className="absolute inset-0 bg-blue-500/0 rounded-full
                  group-hover:bg-blue-500/10 transition-colors duration-300"></span>
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
} 
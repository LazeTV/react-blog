import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../data/blogPosts';

interface NewBlogPostProps {
  onSubmit: (post: Omit<BlogPost, 'id'>) => void;
}

const NewBlogPost: React.FC<NewBlogPostProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [readTime, setReadTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPost: Omit<BlogPost, 'id'> = {
      title,
      excerpt,
      content,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      author: "John Doe", // You can make this dynamic later
      category,
      readTime,
      tags: tags.split(',').map(tag => tag.trim())
    };

    onSubmit(newPost);
    
    // Reset form
    setTitle('');
    setExcerpt('');
    setContent('');
    setCategory('');
    setTags('');
    setReadTime('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6"
    >
      <h2 className="font-display text-2xl font-bold text-white/90 mb-6 group relative inline-block">
        <span className="relative z-10 group-hover:animate-terminal-pulse">New Blog Post</span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
          blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300/90 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-700/50 text-white/90 rounded-lg
              border border-gray-600/50 focus:border-blue-500/50 focus:outline-none
              placeholder-gray-400/50"
            placeholder="Enter post title"
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300/90 mb-2">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-700/50 text-white/90 rounded-lg
              border border-gray-600/50 focus:border-blue-500/50 focus:outline-none
              placeholder-gray-400/50"
            placeholder="Enter post excerpt"
            rows={2}
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-300/90 mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-700/50 text-white/90 rounded-lg
              border border-gray-600/50 focus:border-blue-500/50 focus:outline-none
              placeholder-gray-400/50"
            placeholder="Enter post content"
            rows={6}
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-300/90 mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-700/50 text-white/90 rounded-lg
              border border-gray-600/50 focus:border-blue-500/50 focus:outline-none"
          >
            <option value="">Select a category</option>
            <option value="Science">Science</option>
            <option value="Robotics">Robotics</option>
            <option value="Calisthenics">Calisthenics</option>
            <option value="Fighting">Fighting</option>
            <option value="Fitness">Fitness</option>
          </select>
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-300/90 mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-700/50 text-white/90 rounded-lg
              border border-gray-600/50 focus:border-blue-500/50 focus:outline-none
              placeholder-gray-400/50"
            placeholder="Enter tags (e.g., AI, Technology, Science)"
          />
        </div>

        <div>
          <label htmlFor="readTime" className="block text-sm font-medium text-gray-300/90 mb-2">
            Read Time
          </label>
          <input
            type="text"
            id="readTime"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-700/50 text-white/90 rounded-lg
              border border-gray-600/50 focus:border-blue-500/50 focus:outline-none
              placeholder-gray-400/50"
            placeholder="e.g., 5 min read"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500/90 text-white/90 rounded-lg 
            hover:bg-blue-600/90 hover:text-white transition-colors duration-300
            shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
            relative group"
        >
          <span className="relative z-10 group-hover:animate-terminal-pulse">
            Create Post
          </span>
          <span className="absolute inset-0 bg-blue-500/0 rounded-lg
            group-hover:bg-blue-500/10 transition-colors duration-300"></span>
        </button>
      </form>
    </motion.div>
  );
};

export default NewBlogPost; 
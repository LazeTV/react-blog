import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const buttonClasses = (path: string) => `
    px-4 py-2 rounded-lg border border-gray-700/50
    hover:bg-gray-800/50 active:bg-gray-700/50
    shadow-lg hover:shadow-xl
    transition-all duration-300
    text-white/90 hover:text-white
    backdrop-blur-sm
    relative group
    ${location.pathname === path ? 'bg-gray-800/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'bg-transparent'}
    hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
    before:absolute before:inset-0 before:bg-blue-500/0 before:rounded-lg
    before:transition-all before:duration-300
    hover:before:bg-blue-500/10
    after:absolute after:inset-0 after:rounded-lg
    after:transition-all after:duration-300
    after:opacity-0 hover:after:opacity-100
    after:animate-terminal-glow
  `;

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-white/90 hover:text-white transition-colors duration-300
                relative group"
            >
              <span className="relative z-10 group-hover:animate-terminal-pulse">My Blog</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none transition-colors duration-300
                hover:animate-terminal-pulse"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className={buttonClasses('/')}>
              Home
            </Link>
            <Link to="/categories" className={buttonClasses('/categories')}>
              Categories
            </Link>
            <Link to="/blog" className={buttonClasses('/blog')}>
              Blog
            </Link>
            <Link to="/about" className={buttonClasses('/about')}>
              About
            </Link>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-300 hover:text-white transition-colors duration-200
                p-2 rounded-lg hover:bg-gray-800/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white 
                  hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300
                  relative group
                  ${location.pathname === '/' ? 'bg-gray-800/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : ''}
                  before:absolute before:inset-0 before:bg-blue-500/0 before:rounded-md
                  before:transition-all before:duration-300
                  hover:before:bg-blue-500/10
                  after:absolute after:inset-0 after:rounded-md
                  after:transition-all after:duration-300
                  after:opacity-0 hover:after:opacity-100
                  after:animate-terminal-glow`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 group-hover:animate-terminal-pulse">Home</span>
              </Link>
              <Link
                to="/categories"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white 
                  hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300
                  relative group
                  ${location.pathname === '/categories' ? 'bg-gray-800/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : ''}
                  before:absolute before:inset-0 before:bg-blue-500/0 before:rounded-md
                  before:transition-all before:duration-300
                  hover:before:bg-blue-500/10
                  after:absolute after:inset-0 after:rounded-md
                  after:transition-all after:duration-300
                  after:opacity-0 hover:after:opacity-100
                  after:animate-terminal-glow`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 group-hover:animate-terminal-pulse">Categories</span>
              </Link>
              <Link
                to="/blog"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white 
                  hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300
                  relative group
                  ${location.pathname === '/blog' ? 'bg-gray-800/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : ''}
                  before:absolute before:inset-0 before:bg-blue-500/0 before:rounded-md
                  before:transition-all before:duration-300
                  hover:before:bg-blue-500/10
                  after:absolute after:inset-0 after:rounded-md
                  after:transition-all after:duration-300
                  after:opacity-0 hover:after:opacity-100
                  after:animate-terminal-glow`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 group-hover:animate-terminal-pulse">Blog</span>
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white 
                  hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300
                  relative group
                  ${location.pathname === '/about' ? 'bg-gray-800/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : ''}
                  before:absolute before:inset-0 before:bg-blue-500/0 before:rounded-md
                  before:transition-all before:duration-300
                  hover:before:bg-blue-500/10
                  after:absolute after:inset-0 after:rounded-md
                  after:transition-all after:duration-300
                  after:opacity-0 hover:after:opacity-100
                  after:animate-terminal-glow`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 group-hover:animate-terminal-pulse">About</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)} />
            <div className="relative w-full max-w-2xl">
              <div className="bg-gray-800/90 rounded-lg shadow-xl border border-gray-700/50 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-2 pl-10 bg-gray-700/50 text-white/90 rounded-lg
                        border border-gray-600/50 focus:border-blue-500/50 focus:outline-none
                        placeholder-gray-400/50"
                      autoFocus
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 
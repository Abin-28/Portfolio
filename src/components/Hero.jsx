import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProgrammerVector from '@/components/subcomponents/ProgrammerVector';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section id="home" className="h-screen w-full flex flex-col md:flex-row pl-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800">
      {/* Left side - Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-4 md:px-12 py-8 md:py-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-300 text-base md:text-lg mb-4"
        >
          Welcome To My Digital Universe
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Hi, Developers{' '}
          <motion.span
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            style={{ display: 'inline-block' }}
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 hidden md:block"
        >
          <ProgrammerVector className="w-full h-48 md:h-64" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <motion.button
            onClick={() => navigate('/Portfolio/experience')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors flex items-center justify-center text-sm"
          >
            View My Work
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.button>
          <motion.button
            onClick={() => navigate('/Portfolio/contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 border border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400/10 transition-all text-sm"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Right side - SVG Illustration */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <img
            src="/Portfolio/a_person_organizing_files.svg"
            alt="Developer Illustration"
            className="w-full h-full object-contain p-4 md:p-6"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 
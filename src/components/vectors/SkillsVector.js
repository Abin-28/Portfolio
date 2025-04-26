import React from 'react';
import { motion } from 'framer-motion';

const SkillsVector = ({ className }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="w-full h-full"
      >
        {/* Background elements */}
        <motion.circle
          cx="200"
          cy="200"
          r="160"
          fill="#6366f1"
          fillOpacity="0.1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Floating skill bubbles */}
        <motion.g
          animate={{
            rotate: [0, 360],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          {/* AI/ML Bubble */}
          <motion.g
            animate={{
              y: [-5, 5, -5],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <circle cx="200" cy="100" r="30" fill="#4f46e5" />
            <text x="200" y="105" textAnchor="middle" fill="white" fontSize="12">AI/ML</text>
          </motion.g>

          {/* Web Dev Bubble */}
          <motion.g
            animate={{
              y: [5, -5, 5],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }
            }}
          >
            <circle cx="300" cy="200" r="30" fill="#818cf8" />
            <text x="300" y="205" textAnchor="middle" fill="white" fontSize="12">Web</text>
          </motion.g>

          {/* Python Bubble */}
          <motion.g
            animate={{
              y: [-5, 5, -5],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
          >
            <circle cx="100" cy="200" r="30" fill="#6366f1" />
            <text x="100" y="205" textAnchor="middle" fill="white" fontSize="12">Python</text>
          </motion.g>

          {/* React Bubble */}
          <motion.g
            animate={{
              y: [5, -5, 5],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }
            }}
          >
            <circle cx="200" cy="300" r="30" fill="#a5b4fc" />
            <text x="200" y="305" textAnchor="middle" fill="white" fontSize="12">React</text>
          </motion.g>
        </motion.g>

        {/* Central icon */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <circle cx="200" cy="200" r="40" fill="#4f46e5" />
          <path
            d="M180 200h40M200 180v40"
            stroke="white"
            strokeWidth="4"
            fill="none"
          />
        </motion.g>

        {/* Connecting lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.8 }}
        >
          <line x1="200" y1="140" x2="200" y2="180" stroke="#4f46e5" strokeWidth="2" />
          <line x1="240" y1="200" x2="270" y2="200" stroke="#4f46e5" strokeWidth="2" />
          <line x1="130" y1="200" x2="160" y2="200" stroke="#4f46e5" strokeWidth="2" />
          <line x1="200" y1="240" x2="200" y2="270" stroke="#4f46e5" strokeWidth="2" />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
};

export default SkillsVector; 
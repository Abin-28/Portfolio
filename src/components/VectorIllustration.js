import React from 'react';
import { motion } from 'framer-motion';

const VectorIllustration = ({ className }) => {
  return (
    <motion.svg
      className={className}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Man programmer writing code illustration */}
      <g transform="translate(50, 50)">
        <motion.path
          d="M160 180c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"
          fill="#6366f1"
          fillOpacity="0.2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.path
          d="M200 120h80v100h-80z"
          fill="#4f46e5"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        />
        <motion.path
          d="M210 140h60v10h-60zM210 160h40v10h-40zM210 180h50v10h-50z"
          fill="#ffffff"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
        <motion.path
          d="M150 200c0-22.091 17.909-40 40-40s40 17.909 40 40-17.909 40-40 40-40-17.909-40-40z"
          fill="#818cf8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        />
        <motion.path
          d="M180 180c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z"
          fill="#ffffff"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        />
      </g>
    </motion.svg>
  );
};

export default VectorIllustration; 
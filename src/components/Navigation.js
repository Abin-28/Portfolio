import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHome, FaUser, FaBriefcase, FaCode, FaTools, FaEnvelope } from 'react-icons/fa';
import PDFViewer from './PDFViewer';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [showPDF, setShowPDF] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaCode },
    { id: 'skills', label: 'Skills', icon: FaTools },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ];

  return (
    <>
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-0 h-screen w-16 bg-white/10 backdrop-blur-md shadow-lg z-50 flex flex-col items-center justify-between py-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 rounded-lg overflow-hidden shadow-md cursor-pointer"
          onClick={() => setShowPDF(true)}
        >
          <img 
            src="/ABIN.png" 
            alt="ABIN" 
            className="w-full h-full object-contain"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </motion.div>

        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-all duration-300 relative group flex flex-col items-center ${
                  currentPage === item.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : currentPage === 'home'
                      ? 'text-white hover:bg-purple-100 hover:text-purple-600'
                      : 'text-black hover:bg-purple-100 hover:text-purple-600'
                }`}
              >
                <Icon className="text-sm" />
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        <div className="flex flex-col items-center space-y-4">
          <motion.a
            href="https://github.com/Abin-28"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg transition-all duration-300 ${
              currentPage === 'home'
                ? 'text-white hover:bg-purple-100 hover:text-purple-600'
                : 'text-black hover:bg-purple-100 hover:text-purple-600'
            }`}
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abin-skaria"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg transition-all duration-300 ${
              currentPage === 'home'
                ? 'text-white hover:bg-purple-100 hover:text-purple-600'
                : 'text-black hover:bg-purple-100 hover:text-purple-600'
            }`}
          >
            <FaLinkedin size={20} />
          </motion.a>
        </div>
      </motion.nav>

      <PDFViewer 
        isOpen={showPDF} 
        onClose={() => setShowPDF(false)} 
        pdfPath="ABIN_SKARIA.pdf"
        title="Resume Preview"
      />
    </>
  );
};

export default Navigation; 
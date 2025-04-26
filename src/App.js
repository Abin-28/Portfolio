import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import TransitionEffect from './components/TransitionEffect';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: <Hero setCurrentPage={setCurrentPage} />,
    about: <About />,
    experience: <Experience />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />
  };

  return (
    <AnimatePresence mode='wait'>
      <div className="app bg-gray-50">
        <TransitionEffect />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          {pages[currentPage]}
        </motion.main>

      </div>
    </AnimatePresence>
  );
}

export default App; 
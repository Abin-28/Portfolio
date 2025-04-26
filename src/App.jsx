import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import TransitionEffect from '@/components/subcomponents/TransitionEffect';
import '@/App.css';

function AnimatedRoutes() {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    // Match the total duration of TransitionEffect (0.8s base + 0.4s delay)
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <AnimatePresence mode='wait'>
        {showTransition && <TransitionEffect />}
      </AnimatePresence>
      
      <main className="min-h-screen">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app bg-gray-50">
        <Navigation />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App; 
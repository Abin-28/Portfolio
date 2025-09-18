import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, link, github, delay }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-l-4 border-purple-600"
    >
      <div className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2 sm:gap-0">
          <h3 className="text-lg sm:text-2xl font-bold text-purple-600 break-words min-w-0">{title}</h3>
          <div className="flex space-x-3 self-start sm:self-auto">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                <FaExternalLinkAlt className="text-xl" />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-700 mb-4 sm:mb-6 break-words">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Trekzen",
      description: "A tourist planning solution using Lin Kernighan and Nearest Neighbor algorithms for optimal route planning.",
      technologies: ["NodeJS", "Express", "Firebase", "Leaflet Map", "Mapbox"],
      link: "https://trekzen.onrender.com",
      github: "https://github.com/Abin-28/Trekzen"
    },
    {
      title: "AyurHealth",
      description: "An Ayurvedic disease predictor using Random Forest Algorithm along with a remedy suggester.",
      technologies: ["Python", "Machine Learning", "JavaScript", "HTML", "CSS"],
      link: "https://ayurhealth.onrender.com",
      github: "https://github.com/Abin-28/AyurHealth"
    },
    {
      title: "LearnScope",
      description: "AI Learning Platform used for web search and document Q&A by using Gemini AI API.",
      technologies: ["Next.js", "React", "AI", "Search Engine", "Document Q&A"],
      link: "https://learnscope.onrender.com",
      github: "https://github.com/Abin-28/LearnScope"
    },
    {
      title: "Movie Recommender",
      description: "A machine learning-based movie recommendation system using vectorization method.",
      technologies: ["Python", "Machine Learning", "Streamlit", "Jupyter"],
      github: "https://github.com/Abin-28/Movie_Recommender"
    },
    {
      title: "SlideSense",
      description: "A presentation controller, used to control the presentation slides using hand gesture detection.",
      technologies: ["Python", "HandTracking Module"],
      github: "https://github.com/Abin-28/Presentation_Controller"
    },
    {
      title: "AuroraMart",
      description: "A MERN Stack ecommerce website for buying and selling products.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Abin-28/AuroraMart"
    },
    {
      title: "Python Mini Games",
      description: "Mini desktop arcade built with Python Tkinter featuring six mini games.",
      technologies: ["Python", "Tkinter"],
      github: "https://github.com/Abin-28/Python_Mini_Games"
    },
    {
      title: "Bank Management",
      description: "A bank management system made using Turbo C++ using language C++.",
      technologies: ["C++", "Graphics Module"],
      github: "https://github.com/Abin-28/Bank_Management"
    },
    {
      title: "Large Files Uploader",
      description: "A large files uploader using gitlfs to push large files to github.",
      technologies: ["GitLFS", "GitHub"],
      github: "https://github.com/Abin-28/Side_Hustle_Project-Large-Files"
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white pl-16 sm:pl-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-purple-600 mb-4">Featured Projects</h2>
          <div className="w-20 md:w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
            Here are some of my recent projects that showcase my skills and expertise in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto px-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
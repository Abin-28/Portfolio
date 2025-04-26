import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, link, github, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-l-4 border-purple-600"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-purple-600">{title}</h3>
          <div className="flex space-x-3">
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
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
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
      title: "TREKZEN",
      description: "A tourist planning solution using Lin Kernighan and Nearest Neighbor algorithms for optimal route planning.",
      technologies: ["HTML", "CSS", "JavaScript", "NodeJS"],
      link: "https://trekzen11.glitch.me",
      github: "https://github.com/yourusername/trekzen"
    },
    {
      title: "AyurHealth",
      description: "An Ayurvedic disease predictor and remedy suggester using Random Forest Algorithm.",
      technologies: ["JavaScript", "HTML", "CSS", "Python", "Machine Learning"],
      link: "https://ayurhealth.glitch.me",
      github: "https://github.com/yourusername/ayurhealth"
    },
    {
      title: "Movie-Recommender",
      description: "A machine learning-based movie recommendation system using vectorization method.",
      technologies: ["Python", "Machine Learning", "Streamlit"],
      link: "https://github.com/Abin-28/movie_recommends",
      github: "https://github.com/Abin-28/movie_recommends"
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-purple-600 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
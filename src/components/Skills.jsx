import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaBrain, FaTools, FaServer, FaDatabase, FaUsers } from 'react-icons/fa';

const SkillCategory = ({ title, skills, icon: Icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-600"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-purple-100 p-3 rounded-lg">
          <Icon className="text-purple-600 text-xl" />
        </div>
        <h3 className="text-xl font-bold text-purple-600">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Next.js", "React"],
      icon: FaCode
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "Fastify", "REST APIs", "Flask", "Postman"],
      icon: FaServer
    },
    {
      title: "AI/ML & Data Science",
      skills: ["Machine Learning", "LLMs", "RAG", "NLP", "Computer Vision", "Prompt Engineering", "Voiceflow"],
      icon: FaBrain
    },
    {
      title: "Database & Storage",
      skills: ["MongoDB", "SQL", "PostgreSQL", "Supabase", "Firebase"],
      icon: FaDatabase
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "DigitalOcean", "CI/CD", "VS Code", "Jupyter", "Make"],
      icon: FaTools
    },
    {
      title: "Productivity & Collaboration",
      skills: ["Notion", "Slack", "Linear", "Project Management", "Technical Documentation"],
      icon: FaUsers
    }
  ];

  return (
    <section id="skills" className="py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white pl-16 sm:pl-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-purple-600 mb-4">Skills & Expertise</h2>
          <div className="w-20 md:w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
            A comprehensive overview of my technical skills and expertise across various domains of software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
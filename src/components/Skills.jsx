import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaBrain, FaTools, FaServer, FaDatabase, FaUsers } from 'react-icons/fa';

const skillImageUrlMap = {
  // Frontend
  'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'tailwind css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  // Backend
  'node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  // Databases
  'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'sql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  'firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  // DevOps & Tools
  'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'github': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'digitalocean': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
  'vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  'jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  'vs code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'make': 'https://cdn.brandfetch.io/make.com/6c2017c6676f4e1672370ae65d1d6a6a4387d853.svg',
  // Productivity
  'notion': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
  'slack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
  'linear': 'https://cdn.brandfetch.io/linear.app/4296996d744f9f25792d4f24c3a1050a980721eb.svg',
};

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
      className="bg-white rounded-xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-600"
    >
      <div className="flex items-center space-x-3 sm:space-x-4 mb-5 sm:mb-6">
        <div className="bg-purple-100 p-3 rounded-lg">
          <Icon className="text-purple-600 text-xl" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-purple-600 break-words">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill, index) => {
          const key = String(skill).toLowerCase();
          const imageUrl = skillImageUrlMap[key] || null;
          return (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.3, delay: delay + index * 0.1 }}
              className="bg-purple-100 text-purple-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-purple-200 transition-colors flex items-center gap-2"
            >
              {imageUrl && (
                <img src={imageUrl} alt={`${skill} logo`} className="w-4 h-4" loading="lazy" />
              )}
              {skill}
            </motion.span>
          );
        })}
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
      skills: ["Git", "GitHub", "CI/CD", "Docker", "DigitalOcean", "Vercel", "VS Code", "Jupyter", "Make"],
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
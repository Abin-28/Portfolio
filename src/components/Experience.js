import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';
import PDFViewer from './PDFViewer';

const ExperienceCard = ({ title, company, location, date, description, delay, onViewCertificate, hasCertificate }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-600"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-purple-100 p-3 rounded-lg">
          <FaBriefcase className="text-purple-600 text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-purple-600">{title}</h3>
          <h4 className="text-lg font-semibold text-gray-700">{company}</h4>
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <FaCalendarAlt className="text-purple-600" />
              <span>{date}</span>
            </div>
            {location && (
              <div className="flex items-center space-x-1">
                <FaMapMarkerAlt className="text-purple-600" />
                <span>{location}</span>
              </div>
            )}
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>
          {hasCertificate && (
            <button
              onClick={onViewCertificate}
              className="mt-4 flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <FaCertificate />
              <span>View Certificate</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section id="experience" className="min-h-screen py-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-purple-600 mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <ExperienceCard
            title="Junior AI/ML Engineer"
            company="INFINITA AI"
            location="Remote"
            date="September 2024 - April 2025"
            description="Working as a Junior AI/ML Engineer, contributing to machine learning projects and developing AI solutions. Specializing in deep learning, computer vision, and natural language processing applications."
            delay={0.2}
          />

          <ExperienceCard
            title="AI/ML Engineering Intern"
            company="INFINITA AI"
            location="Remote"
            date="June 2024 - August 2024"
            description="Completed a 3-month internship focusing on AI/ML technologies and practical applications. Gained hands-on experience with machine learning models, data preprocessing, and model deployment."
            delay={0.4}
            hasCertificate={true}
            onViewCertificate={() => setShowCertificate(true)}
          />
        </div>
      </div>

      <PDFViewer 
        isOpen={showCertificate}
        onClose={() => setShowCertificate(false)}
        pdfPath="Internship Certificate - Abin Skaria.pdf"
        title="Internship Certificate"
      />
    </section>
  );
};

export default Experience; 
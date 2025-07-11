import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaUserTie, FaFilePdf, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import PDFViewer from '@/components/subcomponents/PDFViewer';

const EducationCard = ({ institution, degree, year, percentage, delay, location, mapLink, website, place }) => {
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
      className="bg-white rounded-lg shadow-md p-3 mb-3 hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-600"
    >
      <div className="flex items-start space-x-2">
        <div className="bg-purple-100 p-1.5 rounded-lg">
          <FaGraduationCap className="text-purple-600 text-base" />
        </div>
        <div>
          <h3 className="text-base font-bold text-purple-600">{institution}</h3>
          <h4 className="text-sm font-semibold text-gray-700">{degree}</h4>
          <p className="text-xs text-gray-600">{year}</p>
          {percentage && (
            <p className="text-xs text-gray-800 mt-0.5">
              <span className="font-semibold">Score:</span> {percentage}
            </p>
          )}
          <div className="flex flex-col space-y-0.5 mt-1">
            {location && (
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-xs text-purple-600 hover:text-purple-700 group"
              >
                <FaMapMarkerAlt className="group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">{location}</span>
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-xs text-purple-600 hover:text-purple-700 group"
              >
                <FaGlobe className="group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">Visit {place} Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <section id="about" className="min-h-screen py-12 bg-gradient-to-b from-white to-purple-50 pl-16 sm:pl-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-xl md:text-2xl font-bold text-purple-600 mb-1">About Me</h2>
          <div className="w-16 h-0.5 bg-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-4 md:p-7 border-2 border-purple-600 relative"
          >
            <div className="absolute -top-3 left-4 md:left-6 bg-white px-3">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="bg-purple-100 p-2 md:p-2.5 rounded-lg">
                  <FaUserTie className="text-purple-600 text-lg md:text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-purple-600">Summary</h3>
              </div>
            </div>
            <div className="pt-3">
              <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4">
                <img
                  src="/Portfolio/Abin.jpeg"
                  alt="Abin"
                  className="w-40 h-50 rounded-md object-cover border-2 border-purple-200 mt-4 mx-auto sm:mx-0"
                  style={{ minWidth: '5rem' }}
                />
                <div className="flex-1 w-full">
                  <p className="text-sm text-gray-700 leading-relaxed mb-2 mt-4">
                    &quot;I am a passionate AI/ML Engineer and Full Stack Developer with a strong foundation in computer science. 
                    I specialize in developing innovative solutions using machine learning 
                    and web technologies.&quot;
                  </p>
                  <div className="text-xs text-gray-700 leading-relaxed mb-2 mt-2">
                    <p>I contributed to the end-to-end design and development of full-stack AI projects, including:</p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>A memory-based AI agent platform</li>
                      <li>An AI-powered booking system</li>
                      <li>Multiple custom AI agents</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-700 leading-relaxed mb-2 mt-2">
                <p>Key Responsibilities:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Built 3+ AI agents from scratch using prompt engineering and OpenAI API endpoints, integrating them with Voiceflow to create dynamic conversational systems for client use cases.</li>
                  <li>Developed real-time back-end features using WebSockets, REST APIs and Node.js to enable live data exchange and seamless interaction across application components.</li>
                  <li>Implemented core security features, including JWT-based authentication, session handling, and protected routes.</li>
                  <li>Containerized and deployed microservices on Docker using DigitalOcean, and handled CI/CD with Vercel.</li>
                  <li>Collaborated on 2+ full-stack projects in an Agile setup using Git, Linear and Slack for version control, task tracking, and sprint coordination.</li>
                </ul>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => setShowPDF(true)}
                  className="flex items-center space-x-2 bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm"
                >
                  <FaFilePdf />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>

          <div className="pt-4">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg font-bold text-purple-600 mb-4 flex items-center space-x-2 pt-2"
            >
              <span>Education</span>
            </motion.h3>

            <div className="space-y-10">
              <EducationCard
                institution="College of Engineering Chengannur"
                degree="Bachelor of Technology in Computer Science and Engineering"
                year="2020 - 2024"
                percentage="CGPA: 8.79"
                delay={0.2}
                location="Engineering College Road, Chengannur, Alappuzha, Kerala 689121"
                mapLink="https://www.google.com/maps/place/College+of+Engineering+Chengannur/@9.3173306,76.6149107,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3b0622ea027eb08f:0x41105b207db821c6!2sCollege+of+Engineering+Chengannur!8m2!3d9.3173253!4d76.6174856!16zL20vMDhxODg3!3m5!1s0x3b0622ea027eb08f:0x41105b207db821c6!8m2!3d9.3173253!4d76.6174856!16zL20vMDhxODg3?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                website="https://ceconline.edu/"
                place="College"
              />

              <EducationCard
                institution="Kerala School VikasPuri"
                degree="XII (CBSE)"
                year="2018 - 2020"
                percentage="89.6%"
                delay={0.4}
                location="KG3/13, JJ Colony, Block KG 3, Vikaspuri, Delhi, 110018"
                mapLink="https://www.google.com/maps/place/Kerala+School+Vikaspuri/@28.6329005,77.0765858,17z/data=!4m6!3m5!1s0x390d04ea8b404ef7:0xdb2e0ca0acfd85d4!8m2!3d28.6329005!4d77.0765858!16s%2Fg%2F11b7y9mcp6?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                website="https://www.keralaschoolvikaspuri.org"
                place="School"
              />

              <EducationCard
                institution="Kerala School VikasPuri"
                degree="X (CBSE)"
                year="2006 - 2018"
                percentage="84%"
                delay={0.6}
                location="KG3/13, JJ Colony, Block KG 3, Vikaspuri, Delhi, 110018"
                mapLink="https://www.google.com/maps/place/Kerala+School+Vikaspuri/@28.6329005,77.0765858,17z/data=!4m6!3m5!1s0x390d04ea8b404ef7:0xdb2e0ca0acfd85d4!8m2!3d28.6329005!4d77.0765858!16s%2Fg%2F11b7y9mcp6?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                website="https://www.keralaschoolvikaspuri.org"
                place="School"
              />
            </div>
          </div>
        </div>
      </div>

      <PDFViewer 
        isOpen={showPDF} 
        onClose={() => setShowPDF(false)} 
        pdfPath="Abin_Skaria_Resume.pdf"
        title="Resume Preview"
      />
    </section>
  );
};

export default About; 
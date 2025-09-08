import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactItem = ({ icon, title, value, link, delay }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-600"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-purple-100 p-3 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 transition-colors"
            >
              {value}
            </a>
          ) : (
            <p className="text-gray-600">{value}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white pl-16 sm:pl-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-purple-600 mb-4">Get In Touch</h2>
          <div className="w-20 md:w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
            Feel free to reach out to me through any of these channels. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <ContactItem
            icon={<FaEnvelope className="text-2xl text-purple-600" />}
            title="Email"
            value="abinskaria28@gmail.com"
            link="mailto:abinskaria28@gmail.com"
            delay={0.2}
          />
          
          <ContactItem
            icon={<FaPhone className="text-2xl text-purple-600" />}
            title="Phone"
            value="+91 8527718337"
            link="tel:+918527718337"
            delay={0.4}
          />
          
          <ContactItem
            icon={<FaLinkedin className="text-2xl text-purple-600" />}
            title="LinkedIn"
            value="linkedin.com/in/abin-skaria"
            link="https://www.linkedin.com/in/abin-skaria"
            delay={0.6}
          />

          <ContactItem
            icon={<FaGithub className="text-2xl text-purple-600" />}
            title="GitHub"
            value="github.com/Abin-28"
            link="https://github.com/Abin-28"
            delay={0.8}
          />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-gray-600 text-sm md:text-base">
            Or connect with me on social media
          </p>
          <div className="flex justify-center space-x-4 md:space-x-6 mt-4">
            <a
              href="https://instagram.com/abin_skaria"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaInstagram className="text-xl md:text-2xl text-gray-600 hover:text-purple-600 transition-colors" />
            </a>
            {/* <a
              href="https://twitter.com/abin_skaria"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            <FaTwitter className="text-xl md:text-2xl text-gray-600 hover:text-purple-600 transition-colors" />
            {/* </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 
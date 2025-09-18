import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPaperPlane, FaHandshake } from 'react-icons/fa';

const ContactItem = ({ icon, title, value, link, delay, onClick }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-600 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="flex items-center space-x-4">
        <div className="bg-purple-100 p-3 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          {link && !onClick ? (
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
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [showForm, setShowForm] = useState(false); // email form
  const [showPhoneForm, setShowPhoneForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Using native form POST to FormSubmit to avoid CORS and ensure delivery
  return (
    <section id="contact" className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white pl-16 sm:pl-20">
      <div className="container mx-auto px-4 md:px-6">
        {!(showForm || showPhoneForm) && (
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
        )}

        {showForm && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="max-w-6xl mx-auto mt-6 md:mt-10"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-purple-500 to-blue-500 p-6 md:p-8 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/10 p-5 rounded-2xl">
                      <FaHandshake className="w-12 h-12" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Thank You</h3>
                  <p className="mt-4 text-white/90">Do You Have Any Queries?</p>
                </div>
              </div>
              <div className="lg:col-span-3 p-6 md:p-8">
                <div className="mb-4">
                  <button type="button" onClick={() => setShowForm(false)} className="text-sm text-gray-500 hover:text-purple-600">← Back</button>
                </div>
                <form
                  action="https://formsubmit.co/abinskaria2802@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New message from Abin's Portfolio" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/#contact` : '/#contact'} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="w-full rounded-md border border-gray-200 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none px-4 py-2.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-md border border-gray-200 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none px-4 py-2.5"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hey there!"
                      className="w-full rounded-md border border-gray-200 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none px-4 py-2.5"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-5 py-2.5 rounded-md shadow-sm transition-colors"
                    >
                      <FaPaperPlane className="w-4 h-4" />
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
        )}

        {showPhoneForm && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-6 md:mt-10"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-purple-500 to-blue-500 p-6 md:p-8 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/10 p-5 rounded-2xl">
                      <FaHandshake className="w-12 h-12" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">Thank You</h3>
                  <p className="mt-4 text-white/90">Do You Have Any Queries?</p>
                </div>
              </div>
              <div className="lg:col-span-3 p-6 md:p-8">
                <div className="mb-4">
                  <button type="button" onClick={() => setShowPhoneForm(false)} className="text-sm text-gray-500 hover:text-purple-600">← Back</button>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const recipient = '918527718337';
                    const text = `From: ${formData.name || 'Visitor'} (${formData.phone})\n${formData.message}`;
                    const url = `https://wa.me/${recipient}?text=${encodeURIComponent(text)}`;
                    window.open(url, '_blank');
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876543210"
                        className="w-full rounded-md border border-gray-200 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none px-4 py-2.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name (optional)</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-md border border-gray-200 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none px-4 py-2.5"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I'd like to discuss..."
                      className="w-full rounded-md border border-gray-200 bg-gray-100 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none px-4 py-2.5"
                    />
                    <p className="text-xs text-gray-500 mt-2">This opens WhatsApp to send your message to +91 8527718337.</p>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-5 py-2.5 rounded-md shadow-sm transition-colors"
                    >
                      <FaPaperPlane className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
        )}

        {!(showForm || showPhoneForm) && (
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <ContactItem
            icon={<FaEnvelope className="text-2xl text-purple-600" />}
            title="Email"
            value="abinskaria28@gmail.com"
            onClick={() => setShowForm(true)}
            delay={0.2}
          />
          
          <ContactItem
            icon={<FaPhone className="text-2xl text-purple-600" />}
            title="Phone"
            value="+91 8527718337"
            onClick={() => setShowPhoneForm(true)}
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
        )}

        {!(showForm || showPhoneForm) && (
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
        )}
      </div>
    </section>
  );
};

export default Contact; 
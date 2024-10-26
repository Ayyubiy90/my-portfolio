// Import necessary dependencies
import React from "react";
import { motion } from "framer-motion"; // For animations
import { useInView } from "react-intersection-observer"; // For tracking element visibility
import { Mail, Phone, MapPin } from "lucide-react"; // Icons for contact information

const Contact = () => {
  // Setup intersection observer hook to detect when component comes into view
  // threshold: 0.1 means trigger when 10% of component is visible
  // triggerOnce: true means animation only happens once
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    // Main contact section with background styling
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Main content wrapper with animation */}
        <motion.div
          ref={ref} // Attach ref for intersection observer
          // Initial animation state
          initial={{ opacity: 0, y: 20 }}
          // Animation when component comes into view
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Get In Touch
          </h2>

          {/* Grid layout for contact info and form */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>

              {/* Contact details with icons */}
              <div className="space-y-4">
                {/* Map through contact details array to create contact items */}
                {[
                  { Icon: Mail, text: "contact@example.com" },
                  { Icon: Phone, text: "+234 XXX XXX XXXX" },
                  { Icon: MapPin, text: "Lagos, Nigeria" },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center space-x-4">
                    {/* Icon container */}
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    {/* Contact text */}
                    <span className="text-gray-600 dark:text-gray-300">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6">
              {/* Name Input Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>

              {/* Email Input Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

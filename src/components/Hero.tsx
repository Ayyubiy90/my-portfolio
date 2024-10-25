// Importing necessary libraries and components
import { motion } from "framer-motion"; // Importing motion for animations
import { Github, Linkedin, Mail } from "lucide-react"; // Importing icon components

// Defining the Hero functional component
const Hero = () => {
  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state: fully transparent
    visible: {
      opacity: 1, // Final state: fully opaque
      transition: { staggerChildren: 0.3 }, // Delay children animations
    },
  };

  // Variants for item animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Initial state: moved down and transparent
    visible: {
      y: 0, // Final state: in original position
      opacity: 1, // Final state: fully opaque
    },
  };

  // Returning the JSX for the component
  return (
    <section
      id="home" // ID for the section
      className="min-h-screen pt-28 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800" />

      {/* Motion div for the main content */}
      <motion.div
        variants={containerVariants} // Applying animation variants
        initial="hidden" // Initial state
        animate="visible" // Animate to visible state
        className="container mx-auto px-6 relative z-10">
        {/* Animated greeting header */}
        <motion.h2
          variants={itemVariants} // Applying item animation variants
          className="text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-4">
          Hello, I'm
        </motion.h2>

        {/* Animated name header */}
        <motion.h1
          variants={itemVariants} // Applying item animation variants
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Abdullah Abdurazaq
        </motion.h1>

        {/* Animated description paragraph */}
        <motion.p
          variants={itemVariants} // Applying item animation variants
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          Senior Frontend Engineer with expertise in building scalable web
          applications. Experienced in full-stack development with a focus on
          React ecosystem and modern web technologies.
        </motion.p>

        {/* Container for action buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          {/* Button to view projects */}
          <motion.a
            href="#projects" // Link to projects section
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            View Projects
          </motion.a>
          {/* Button to contact */}
          <motion.a
            href="#contact" // Link to contact section
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors">
            Contact Me
          </motion.a>
        </motion.div>

        {/* Container for social media icons */}
        <motion.div variants={itemVariants} className="flex space-x-6 mt-12">
          {/* Mapping through an array of social links and icons */}
          {[
            { Icon: Github, href: "https://github.com", label: "GitHub" }, // Github link
            { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }, // LinkedIn link
            { Icon: Mail, href: "mailto:contact@example.com", label: "Email" }, // Mail link with a valid email address
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={href} // Unique key for each item
              href={href} // Link for the icon
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure for external links
              whileHover={{ y: -2 }} // Move icon up on hover
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              aria-label={label} // Accessibility label for screen readers
            >
              <Icon className="w-6 h-6" /> {/* Icon component */}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Exporting the Hero component
export default Hero;

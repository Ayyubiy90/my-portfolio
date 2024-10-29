// Importing necessary components and icons from external libraries
import { motion } from "framer-motion"; // Importing motion for animations
import { Github, Linkedin, Mail } from "lucide-react"; // Importing icons for social media links

// Defining the Hero component
const Hero = () => {
  // Variants for the container animation
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state: hidden (opacity 0)
    visible: {
      opacity: 1, // Final state: visible (opacity 1)
      transition: { staggerChildren: 0.3 }, // Children will appear with a staggered effect
    },
  };

  // Variants for individual item animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Initial state: moved down (y: 20) and hidden (opacity 0)
    visible: {
      y: 0, // Final state: in original position (y: 0)
      opacity: 1, // Final state: visible (opacity 1)
    },
  };

  // Rendering the Hero section
  return (
    <section
      id="home" // Setting an ID for the section for navigation purposes
      className="min-h-screen pt-28 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient that covers the entire section */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800" />

      {/* Motion div for the container that holds the content */}
      <motion.div
        variants={containerVariants} // Applying container animation variants
        initial="hidden" // Initial state for the animation
        animate="visible" // Animate to visible state
        className="container mx-auto px-6 relative z-10">
        {" "}
        {/* Centering and padding the container */}
        {/* Animated greeting heading */}
        <motion.h2
          variants={itemVariants} // Applying item animation variants
          className="text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-4">
          Hello, I'm
        </motion.h2>
        {/* Animated main heading with the name */}
        <motion.h1
          variants={itemVariants} // Applying item animation variants
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Abdullah Abdurazaq
        </motion.h1>
        {/* Animated paragraph describing the person */}
        <motion.p
          variants={itemVariants} // Applying item animation variants
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          Frontend Developer with 3 years of experience building scalable web
          applications, specializing in the React ecosystem and modern web
          technologies. Proficient in frontend development with supporting
          experience in backend technologies for full-stack projects.
        </motion.p>
        {/* Container for action buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          {/* Button to view projects */}
          <motion.a
            href="#projects" // Link to the projects section
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            View Projects
          </motion.a>
          {/* Button to contact */}
          <motion.a
            href="#contact" // Link to the contact section
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors">
            Contact Me
          </motion.a>
        </motion.div>
        {/* Container for social media icons */}
        <motion.div variants={itemVariants} className="flex space-x-6 mt-12">
          {/* Array of social media links with icons */}
          {[
            { Icon: Github, href: "https://github.com/Ayyubiy90" }, // Github link
            { Icon: Linkedin, href: "https://www.linkedin.com/in/abdullah-a-2940b7260" }, // LinkedIn link
            { Icon: Mail, href: "mailto:ayyubiy67@gmail.com" }, // Mail link
          ].map(({ Icon, href }) => (
            // Mapping through each social link to create an anchor element
            <motion.a
              key={href} // Unique key for each link
              href={href} // Link URL
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security attributes
              whileHover={{ y: -2 }} // Move up on hover
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
              {/* Icon component */}
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Exporting the Hero component
export default Hero;

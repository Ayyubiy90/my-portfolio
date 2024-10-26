import { motion } from "framer-motion"; // Importing motion for animations
import { Github, Linkedin, Mail, Heart } from "lucide-react"; // Importing icon components from lucide-react

// Footer component definition
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Store the current year for copyright notice

  return (
    <footer className="bg-white dark:bg-gray-800 py-12">
      {" "}
      {/* Main footer container with background colors for light and dark themes */}
      <div className="container mx-auto px-6">
        {" "}
        {/* Container for centering content and adding padding */}
        <div className="flex flex-col items-center">
          {" "}
          {/* Flexbox for vertical alignment of items */}
          <div className="flex space-x-6 mb-6">
            {" "}
            {/* Flexbox for horizontal alignment of social media icons with spacing */}
            {/* Array of social media links and corresponding icons */}
            {[
              { Icon: Github, href: "https://github.com/Ayyubiy90" }, // Github link
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/abdullah-a-2940b7260", // LinkedIn link
              },
              { Icon: Mail, href: "mailto:ayybiy67@gmail.com" }, // Mail link
            ].map(
              (
                { Icon, href } // Mapping over the array to create icon links
              ) => (
                <motion.a
                  key={href} // Unique key for each link
                  href={href} // Link destination
                  target="_blank" // Open link in a new tab
                  rel="noopener noreferrer" // Security measures for external links
                  whileHover={{ y: -2 }} // Animation effect on hover
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  aria-hidden="true" // Accessibility attribute for decorative icons
                >
                  <Icon className="w-6 h-6" />{" "}
                  {/* Render the icon with specified width and height */}
                </motion.a>
              )
            )}
          </div>
          {/* Animated section for the copyright notice and creator information */}
          <motion.div
            initial={{ opacity: 0 }} // Initial opacity for fade-in effect
            animate={{ opacity: 1 }} // Target opacity for final state
            transition={{ delay: 0.2 }} // Delay before the animation starts
            className="text-center" // Centered text styling
          >
            <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
              {" "}
              {/* Text styling for creator info */}
              Made with{" "}
              <Heart
                className="w-4 h-4 mx-2 text-red-500"
                aria-hidden="true"
              />{" "}
              by {/* Heart icon with styling */}
              Abdullah Abdurazaq {/* Creator's name */}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              {" "}
              {/* Text styling for copyright notice */}© {currentYear} All
              rights reserved {/* Current year dynamically generated */}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporting the Footer component for use in other parts of the application

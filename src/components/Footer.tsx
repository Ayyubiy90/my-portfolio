// Import necessary libraries and components
import { motion } from "framer-motion"; // Import motion for animations
import { Github, Linkedin, Mail, Heart } from "lucide-react"; // Import icons from lucide-react

// Define the Footer functional component
const Footer = () => {
  return (
    // Footer element with background color and padding
    <footer className="bg-white dark:bg-gray-800 py-12">
      <div className="container mx-auto px-6">
        {" "}
        {/* Container for centering content */}
        <div className="flex flex-col items-center">
          {" "}
          {/* Flexbox for vertical alignment */}
          <div className="flex space-x-6 mb-6">
            {" "}
            {/* Flexbox for icon links with spacing */}
            {[
              // Array of social media links with corresponding icons
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Mail, href: "mailto:contact@example.com" },
            ].map(
              (
                { Icon, href } // Map through each item in the array
              ) => (
                <motion.a
                  key={href} // Unique key for each link
                  href={href} // Set the href attribute for the anchor tag
                  target="_blank" // Open link in a new tab
                  rel="noopener noreferrer" // Security measures for external links
                  whileHover={{ y: -2 }} // Animation effect on hover
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                  <Icon className="w-6 h-6" />{" "}
                  {/* Render the icon with specified width and height */}
                </motion.a>
              )
            )}
          </div>
          <motion.div
            initial={{ opacity: 0 }} // Initial opacity for fade-in effect
            animate={{ opacity: 1 }} // Animate to full opacity
            transition={{ delay: 0.2 }} // Delay the animation slightly
            className="text-center">
            {" "}
            {/* Centered text container */}
            <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by
              Abdullah Abdurazaq {/* Display a heart icon and author name */}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} All rights reserved{" "}
              {/* Current year for copyright */}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

// Export the Footer component for use in other parts of the application
export default Footer;

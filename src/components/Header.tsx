// Import necessary libraries and components
import React, { useState, useEffect } from "react"; // Import React and hooks
import { Menu, X, Sun, Moon, Code } from "lucide-react"; // Import icons from lucide-react
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence for animations

// Define the Header component
const Header = () => {
  // State to manage the open/closed state of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // State to manage the dark/light theme
  const [isDark, setIsDark] = useState(() => {
    // Check if the window is defined (to avoid SSR issues) and set initial theme state
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark"); // Check if 'dark' class is present
    }
    return false; // Default to false if window is not defined
  });

  // Effect to apply the dark class to the document element based on isDark state
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark"); // Add dark class
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark class
    }
  }, [isDark]); // Run effect whenever isDark changes

  // Define menu items for navigation
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Function to toggle the theme between dark and light
  const toggleTheme = () => {
    setIsDark(!isDark); // Toggle the isDark state
  };

  // Render the header component
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
      {/* Navigation container */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and brand name */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            whileHover={{ scale: 1.05 }} // Scale on hover
            whileTap={{ scale: 0.95 }}>
            {" "}
            // Scale down on tap
            <Code className="w-8 h-8" /> // Code icon
            <span>DevAA</span> // Brand name
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Map through menuItems to create navigation links */}
            {menuItems.map(({ href, label }) => (
              <motion.a
                key={href} // Unique key for each item
                href={href} // Link reference
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ y: -2 }} // Move up on hover
                whileTap={{ y: 0 }}>
                {" "}
                // Return to original position on tap
                {label} // Link label
              </motion.a>
            ))}
            {/* Theme toggle button */}
            <motion.button
              onClick={toggleTheme} // Toggle theme on click
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on tap
              aria-label="Toggle theme">
              {" "}
              // Accessibility label
              {isDark ? ( // Conditional rendering based on theme
                <Sun className="w-5 h-5" /> // Sun icon for light theme
              ) : (
                <Moon className="w-5 h-5" /> // Moon icon for dark theme
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Mobile theme toggle button */}
            <motion.button
              onClick={toggleTheme} // Toggle theme on click
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on tap
              aria-label="Toggle theme">
              {" "}
              // Accessibility label
              {isDark ? ( // Conditional rendering based on theme
                <Sun className="w-5 h-5" /> // Sun icon for light theme
              ) : (
                <Moon className="w-5 h-5" /> // Moon icon for dark theme
              )}
            </motion.button>
            {/* Mobile menu toggle button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu on click
              className="text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on tap
              aria-label="Toggle menu">
              {" "}
              // Accessibility label
              {isOpen ? ( // Conditional rendering based on mobile menu state
                <X className="w-6 h-6" /> // X icon for closing menu
              ) : (
                <Menu className="w-6 h-6" /> // Menu icon for opening menu
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }} // Initial state for animation
                animate={{ opacity: 1, height: "auto" }} // Animated state
                exit={{ opacity: 0, height: 0 }} // Exit state for animation
                transition={{ duration: 0.2 }} // Animation duration
                className="md:hidden overflow-hidden">
                {" "}
                // Mobile menu container
                <div className="py-4 space-y-4">
                  {/* Map through menuItems to create navigation links for mobile menu */}
                  {menuItems.map(({ href, label }) => (
                    <motion.a
                      key={href} // Unique key for each item
                      href={href} // Link reference
                      className="block px-4 py-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)} // Close mobile menu on link click
                      whileHover={{ x: 4 }}>
                      {" "}
                      // Move right on hover
                      {label} // Link label
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;

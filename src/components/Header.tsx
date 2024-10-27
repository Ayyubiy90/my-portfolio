import { useState, useEffect } from "react"; // Import React hooks for state and side effects
import { Menu, X, Sun, Moon, Code } from "lucide-react"; // Import icons from lucide-react library
import { motion, AnimatePresence } from "framer-motion"; // Import motion components for animations

const Header = () => {
  // State to track if the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);
  // State to track if dark mode is enabled, checks if 'dark' class is present on document element
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  // Effect to add or remove 'dark' class on document element based on isDark state
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Array of menu items for navigation
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
      {/* Navigation container */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            whileHover={{ scale: 1.05 }} // Scale on hover
            whileTap={{ scale: 0.95 }}>
            {" "}
            // Scale down on tap
            <Code className="w-8 h-8" /> // Code icon
            <span>DevAA</span> // Title
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(({ href, label }) => (
              <motion.a
                key={href}
                href={href}
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ y: -2 }} // Move up on hover
                whileTap={{ y: 0 }}>
                {" "}
                // Return to position on tap
                {label} // Menu item label
              </motion.a>
            ))}
            {/* Theme toggle button */}
            <motion.button
              onClick={toggleTheme} // Toggle theme on click
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }} // Scale on hover
              whileTap={{ scale: 0.9 }} // Scale down on tap
              aria-label="Toggle theme">
              {" "}
              // Accessibility label
              {isDark ? (
                <Sun className="w-5 h-5" /> // Sun icon for light mode
              ) : (
                <Moon className="w-5 h-5" /> // Moon icon for dark mode
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Theme toggle button for mobile */}
            <motion.button
              onClick={toggleTheme} // Toggle theme on click
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.1 }} // Scale on hover
              whileTap={{ scale: 0.9 }} // Scale down on tap
              aria-label="Toggle theme">
              {" "}
              // Accessibility label
              {isDark ? (
                <Sun className="w-5 h-5" /> // Sun icon for light mode
              ) : (
                <Moon className="w-5 h-5" /> // Moon icon for dark mode
              )}
            </motion.button>
            {/* Button to toggle mobile menu */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu on click
              className="text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.1 }} // Scale on hover
              whileTap={{ scale: 0.9 }} // Scale down on tap
              aria-label="Toggle menu">
              {" "}
              // Accessibility label
              {isOpen ? (
                <X className="w-6 h-6" /> // X icon for closing menu
              ) : (
                <Menu className="w-6 h-6" /> // Menu icon for opening menu
              )}
            </motion.button>
          </div>
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
              // Hidden on desktop
              <div className="py-4 space-y-4">
                {menuItems.map(({ href, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)} // Close menu on item click
                    whileHover={{ x: 4 }}>
                    {" "}
                    // Move right on hover
                    {label} // Menu item label
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

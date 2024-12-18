import { useState, useEffect } from "react"; // Import React hooks for state and side effects
import { Menu, X, Sun, Moon, Code } from "lucide-react"; // Import necessary icons from lucide-react
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion for animations

const Header = () => {
  // State to manage the mobile menu's open/close state
  const [isOpen, setIsOpen] = useState(false);

  // State to manage dark/light mode, initialized based on system preference
  const [isDark, setIsDark] = useState(() => {
    // Check if running in the browser (window object exists)
    if (typeof window !== "undefined") {
      // Check if 'dark' class exists on the document's root element
      return document.documentElement.classList.contains("dark");
    }
    // Default to light mode if not in the browser
    return false;
  });

  // useEffect to add/remove 'dark' class to the document's root element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark"); // Add dark class
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark class
    }
  }, [isDark]); // Run this effect whenever 'isDark' changes

  // Array of menu items with their respective links and labels
  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Function to toggle the dark/light mode state
  const toggleTheme = () => {
    setIsDark(!isDark); // Toggle the 'isDark' state
  };

  // Function to handle smooth scrolling and menu closing
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    // Header component structure
    <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
      {/* Container for the navigation bar */}
      <nav className="container mx-auto px-6 py-4">
        {/* Container for the header content */}
        <div className="flex items-center justify-between">
          {/* Website logo and name */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            whileHover={{ scale: 1.05 }} // Scale up slightly on hover
            whileTap={{ scale: 0.95 }} // Scale down slightly on press
            onClick={(e) => handleClick(e, "#home")}>
            <Code className="w-8 h-8" /> {/* Code icon */}
            <span>AA</span> {/* Website name */}
          </motion.a>

          {/* Desktop Menu - visible on larger screens */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Map through menuItems to render each link */}
            {menuItems.map(({ href, label }) => (
              <motion.a
                key={href} // Unique key for each link
                href={href}
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ y: -2 }} // Move up slightly on hover
                whileTap={{ y: 0 }} // Reset position on press
                onClick={(e) => handleClick(e, href)}>
                {label}
              </motion.a>
            ))}
            {/* Theme toggle button */}
            <motion.button
              onClick={toggleTheme} // Call toggleTheme on click
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on press
              aria-label="Toggle theme" // Accessibility label
            >
              {/* Conditionally render sun/moon icon based on theme */}
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu - visible on smaller screens */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Theme toggle button */}
            <motion.button
              onClick={toggleTheme} // Call toggleTheme on click
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on press
              aria-label="Toggle theme" // Accessibility label
            >
              {/* Conditionally render sun/moon icon based on theme */}
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
            {/* Mobile menu toggle button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
              className="text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              whileTap={{ scale: 0.9 }} // Scale down on press
              aria-label="Toggle menu" // Accessibility label
            >
              {/* Conditionally render menu/X icon based on isOpen state */}
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* AnimatePresence for smooth mobile menu animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} // Initial state
              animate={{ opacity: 1, height: "auto" }} // Animated state
              exit={{ opacity: 0, height: 0 }} // Exit state
              transition={{ duration: 0.2 }} // Animation duration
              className="md:hidden overflow-hidden">
              {/* Container for mobile menu items */}
              <div className="py-4 space-y-4">
                {/* Map through menuItems to render each link */}
                {menuItems.map(({ href, label }) => (
                  <motion.a
                    key={href} // Unique key for each link
                    href={href}
                    className="block px-4 py-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={(e) => handleClick(e, href)}
                    whileHover={{ x: 5 }} // Add a subtle hover effect
                    whileTap={{ scale: 0.95 }} // Add a subtle tap effect
                  >
                    {label}
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

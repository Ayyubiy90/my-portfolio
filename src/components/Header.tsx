import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Code className="w-8 h-8" />
            <span>DevAA</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(({ href, label }) => (
              <motion.a
                key={href}
                href={href}
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}>
                {label}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme">
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme">
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden">
              <div className="py-4 space-y-4">
                {menuItems.map(({ href, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 4 }}>
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

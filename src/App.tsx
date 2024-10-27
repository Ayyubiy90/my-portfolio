// Import necessary libraries and components from React and other packages
import React, { useEffect, useState } from "react"; // React and hooks
import { motion } from "framer-motion"; // Animation library
import { Sun, Moon } from "lucide-react"; // Icons for theme toggle
import Header from "./components/Header"; // Header component
import Hero from "./components/Hero"; // Hero section component
import About from "./components/About"; // About section component
import Projects from "./components/Projects"; // Projects section component
import Skills from "./components/Skills"; // Skills section component
import Contact from "./components/Contact"; // Contact section component
import Footer from "./components/Footer"; // Footer component

// Define the main application component
function App() {
  // State to manage the current theme (light or dark)
  const [isDark, setIsDark] = useState(() => {
    // Check if the window object is defined (to ensure we are in a browser environment)
    if (typeof window !== "undefined") {
      // Return true if the 'dark' class is present on the document's root element
      return document.documentElement.classList.contains("dark");
    }
    // Default to false if not in a browser environment
    return false;
  });

  // Effect to update the document's class based on the current theme
  useEffect(() => {
    // If the theme is dark, add the 'dark' class to the document's root element
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      // If the theme is light, remove the 'dark' class
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]); // Run this effect whenever 'isDark' changes

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    // Update the state to the opposite of the current theme
    setIsDark(!isDark);
  };

  // Render the application
  return (
    // Main container with conditional classes for styling based on the theme
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-gray-900" : "bg-gray-50"
      }`}>
      {/* Button to toggle the theme */}
      <button
        onClick={toggleTheme} // Call toggleTheme when the button is clicked
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg" // Button styling
        aria-label="Toggle theme" // Accessibility label for the button
      >
        {/* Display Sun icon if dark theme is active, otherwise display Moon icon */}
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Render various sections of the website */}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// Export the App component as the default export
export default App;

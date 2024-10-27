// Import necessary libraries and components
import { useEffect, useState } from "react"; // Import React hooks for state and lifecycle management
import { motion } from "framer-motion"; // Import motion for animations
import { Sun, Moon } from "lucide-react"; // Import icons for theme toggle (Sun and Moon)
import Header from "./components/Header"; // Import the Header component
import Hero from "./components/Hero"; // Import the Hero section component
import About from "./components/About"; // Import the About section component
import Projects from "./components/Projects"; // Import the Projects section component
import Skills from "./components/Skills"; // Import the Skills section component
import Contact from "./components/Contact"; // Import the Contact section component
import Footer from "./components/Footer"; // Import the Footer component

// Define the main App component
function App() {
  // State to track whether dark mode is enabled
  const [isDark, setIsDark] = useState(() => {
    // Check if the window object is defined (to ensure we are in a browser environment)
    if (typeof window !== "undefined") {
      // Return true if the 'dark' class is present on the document's root element
      return document.documentElement.classList.contains("dark");
    }
    // Default to false if not in a browser environment
    return false;
  });

  // useEffect hook to apply or remove the 'dark' class based on isDark state
  useEffect(() => {
    // If dark mode is enabled, add the 'dark' class to the document's root element
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      // Otherwise, remove the 'dark' class
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]); // Run this effect whenever isDark changes

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    // Update the isDark state to the opposite of its current value
    setIsDark(!isDark);
  };

  // Render the main application
  return (
    <motion.div
      // Set the minimum height and transition styles based on the isDark state
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-gray-900" : "bg-gray-50"
      }`}
      initial={{ opacity: 0 }} // Initial opacity for animation
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 0.5 }} // Duration of the opacity transition
    >
      {/* Button to toggle the theme */}
      <button
        onClick={toggleTheme} // Call toggleTheme function when button is clicked
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg" // Styling for the button
        aria-label="Toggle theme" // Accessibility label for the button
      >
        {/* Render the Sun icon if dark mode is enabled, otherwise render the Moon icon */}
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Render the various sections of the application */}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
}

// Export the App component as the default export
export default App;

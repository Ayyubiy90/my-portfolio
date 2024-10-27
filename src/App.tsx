import { useEffect, useState } from "react"; // React and hooks
import { motion } from "framer-motion"; // Animation library
import { Sun, Moon } from "lucide-react"; // Icons for theme toggle
import Header from "./components/Header"; // Header component
import Hero from "./components/Hero"; // Hero section component
import About from "./components/About"; // About section component
import Projects from "./components/Projects"; // Projects section component
import Skills from "./components/Skills"; // Skills section component
import Contact from "./components/Contact"; // Contact section component
import Footer from "./components/Footer"; // Footer component

function App() {
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

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-gray-900" : "bg-gray-50"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
        aria-label="Toggle theme">
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </button>

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

export default App;

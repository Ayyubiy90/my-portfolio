import { motion } from "framer-motion"; // Importing motion for animations
import { useInView } from "react-intersection-observer"; // Hook to detect when an element is in view
import { Github, ExternalLink } from "lucide-react"; // Importing icons for GitHub and external links

// Define the Projects component
const Projects = () => {
  // Using the useInView hook to track if the section is in view
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  // Array of project objects to display
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with React and Node.js",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/example/ecommerce-platform", // Example GitHub URL
      liveUrl: "https://example.com/ecommerce-platform", // Example live project URL
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/example/task-management-app", // Example GitHub URL
      liveUrl: "https://example.com/task-management-app", // Example live project URL
    },
    {
      title: "Weather Dashboard",
      description: "A weather forecasting dashboard with interactive maps",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com/example/weather-dashboard", // Example GitHub URL
      liveUrl: "https://example.com/weather-dashboard", // Example live project URL
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state is hidden
    visible: {
      opacity: 1, // Fade in when visible
      transition: {
        staggerChildren: 0.2, // Delay children animations
      },
    },
  };

  // Animation variants for individual project cards
  const cardVariants = {
    hidden: { y: 50, opacity: 0 }, // Start below and hidden
    visible: {
      y: 0, // Move to original position
      opacity: 1, // Fade in
      transition: {
        type: "spring", // Spring animation
        stiffness: 100, // Spring stiffness
      },
    },
  };

  return (
    // Section for projects with padding and background color
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {" "}
        {/* Centered container */}
        <motion.div
          ref={ref} // Reference for the in-view detection
          initial="hidden" // Initial animation state
          animate={inView ? "visible" : "hidden"} // Animate based on inView
          variants={containerVariants} // Use defined container variants
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects {/* Section title */}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {/* Responsive grid layout */}
            {projects.map(
              (
                project // Map through projects array
              ) => (
                <motion.div
                  key={project.title} // Unique key for each project
                  variants={cardVariants} // Use defined card variants for animation
                  whileHover={{ y: -10 }} // Move card up on hover
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300">
                  <div className="relative group">
                    {" "}
                    {/* Wrapper for image and overlay */}
                    <img
                      src={project.image} // Project image
                      alt={project.title} // Alt text for accessibility
                      className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110" // Responsive image with hover effect
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {" "}
                      {/* Overlay with icons */}
                      <motion.a
                        href={project.githubUrl} // GitHub URL
                        target="_blank" // Open in new tab
                        rel="noopener noreferrer" // Security attributes
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" // Icon button styles
                        whileHover={{ scale: 1.2 }} // Scale up on hover
                        whileTap={{ scale: 0.9 }} // Scale down on tap
                      >
                        <Github className="w-6 h-6 text-gray-900" />{" "}
                        {/* GitHub icon */}
                      </motion.a>
                      <motion.a
                        href={project.liveUrl} // Live project URL
                        target="_blank" // Open in new tab
                        rel="noopener noreferrer" // Security attributes
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors" // Icon button styles
                        whileHover={{ scale: 1.2 }} // Scale up on hover
                        whileTap={{ scale: 0.9 }} // Scale down on tap
                      >
                        <ExternalLink className="w-6 h-6 text-gray-900" />{" "}
                        {/* External link icon */}
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6">
                    {" "}
                    {/* Project details container */}
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title} {/* Project title */}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description} {/* Project description */}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {" "}
                      {/* Technologies container */}
                      {project.technologies.map(
                        (
                          tech // Map through technologies array
                        ) => (
                          <span
                            key={tech} // Unique key for each technology
                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                            {tech} {/* Technology name */}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; // Export the Projects component

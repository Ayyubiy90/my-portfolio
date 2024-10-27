// Import necessary libraries and components
import { motion } from "framer-motion"; // Import motion for animations
import { useInView } from "react-intersection-observer"; // Import hook to detect if an element is in view
import { Github, ExternalLink } from "lucide-react"; // Import icons for GitHub and external links

// Define the Projects component
const Projects = () => {
  // Set up inView hook to track if the component is in the viewport
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  // Array of project objects containing details for each project
  const projects = [
    {
      title: "E-commerce Platform", // Project title
      description:
        "A full-featured e-commerce platform built with React and Node.js", // Project description
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800", // Project image URL
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"], // Technologies used in the project
      githubUrl: "#", // Placeholder URL for GitHub repository
      liveUrl: "#", // Placeholder URL for live demo
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather forecasting dashboard with interactive maps",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  // Animation variants for the container (fade in effect)
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state (hidden)
    visible: {
      opacity: 1, // Final state (visible)
      transition: {
        staggerChildren: 0.2, // Stagger the appearance of child elements
      },
    },
  };

  // Animation variants for individual project cards (slide up effect)
  const cardVariants = {
    hidden: { y: 50, opacity: 0 }, // Initial state (hidden and moved down)
    visible: {
      y: 0, // Final state (in place)
      opacity: 1, // Final state (fully visible)
      transition: {
        type: "spring", // Use spring animation
        stiffness: 100, // Spring stiffness
      },
    },
  };

  // Render the component
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      {/* Main container for the projects section */}
      <div className="container mx-auto px-6">
        {/* Motion div that triggers animations based on inView state */}
        <motion.div
          ref={ref} // Attach the ref to track visibility
          initial="hidden" // Set initial animation state
          animate={inView ? "visible" : "hidden"} // Animate based on inView state
          variants={containerVariants} // Apply container animation variants
        >
          {/* Section title */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          {/* Grid layout for project cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              // Map through projects to create a card for each
              <motion.div
                key={project.title} // Unique key for each project card
                variants={cardVariants} // Apply card animation variants
                whileHover={{ y: -10 }} // Move card up on hover
                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300">
                <div className="relative group">
                  {/* Project image */}
                  <img
                    src={project.image}
                    alt={project.title} // Alt text for accessibility
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110 "
                  />
                  {/* Overlay with GitHub and live demo links */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {/* GitHub link */}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.2 }} // Scale up on hover
                      whileTap={{ scale: 0.9 }} // Scale down on tap
                    >
                      <Github className="w-6 h-6 text-gray-900" />
                    </motion.a>
                    {/* Live demo link */}
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}>
                      <ExternalLink className="w-6 h-6 text-gray-900" />
                    </motion.a>
                  </div>
                </div>

                {/* Project details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  {/* Technologies used */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

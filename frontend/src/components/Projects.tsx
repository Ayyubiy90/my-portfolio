// Import necessary libraries and components
import { motion } from "framer-motion"; // Import motion for animations
import { useInView } from "react-intersection-observer"; // Import hook to detect if an element is in view
import { Github, ExternalLink } from "lucide-react"; // Import icons for GitHub and external links
import siphome from "../../img/projects/siphome.png";
import budget_tracker from "../../img/projects/budget tracker.png";
import modern_dashboard_tracker from "../../img/projects/modern_dashboard.png";
import modern_e_commerce from "../../img/projects/modern e-commerce.png";
import portfolio from "../../img/projects/portfolio.png";
import data_visualization from "../../img/projects/data visualization.png";

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
      title: "AI-Powered Portfolio & Blog Platform",
      description:
        "A modern, feature-rich portfolio and blog platform built with Next.js 13, React, and TypeScript. Featuring an AI chat assistant, multilingual support, and interactive user engagement features.",
      image: portfolio,
      technologies: ["Next.js 13", "Typescript", "Tailwind CSS", "UI Components", "Zustand", "Recharts", "React Hook Form", "Zod", "Framer Motion", "i18next"],
      githubUrl:
        "https://github.com/Ayyubiy90/ai-powered-blog-and-portfolio-site",
      liveUrl: "https://abdullah-ai-portfolio-blog.vercel.app/",
    },
    {
      title: "Personal Budget Tracker",
      description:
        "The Personal Budget Tracker is a user-friendly web app that helps you manage your finances by tracking income and expenses with secure authentication and interactive visual insights.",
      image: budget_tracker,
      technologies: ["React", "Typescript", "Tailwind CSS", "Firebase", "Recharts", "React Hook Form", "Currency.js"],
      githubUrl:
        "https://github.com/Ayyubiy90/budget-tracker",
      liveUrl: "https://budget-tracker-ashen.vercel.app/",
    },
    {
      title: "Siphome Smart Home System", // Project title
      description:
        "This project aims to revolutionize how we interact with our homes by providing advanced smart home solutions.", // Project description
      image: siphome, // Project image URL
      technologies: ["React", "JavaScript", "HTML", "CSS"], // Technologies used in the project
      githubUrl: "https://github.com/Ayyubiy90/siphome", // Placeholder URL for GitHub repository
      liveUrl: "https://siphome-chinxas-projects.vercel.app/", // Placeholder URL for live demo
    },
    {
      title: "Modern Dashboard", // Project title
      description:
        "A highly personalized, interactive dashboard that demonstrates your ability to integrate multiple APIs, manage complex data flows, and create a clean, user-friendly interface.", // Project description
      image: modern_dashboard_tracker, // Project image URL
      technologies: ["TypeScript", "JavaScript", "Tailwind CSS", "CSS", "Zustand", "Hello Pangea DND", "React Hot Toast", "React Error Boundary"], // Technologies used in the project
      githubUrl: "https://github.com/Ayyubiy90/personalized-dashboard-with-API-integrations", // Placeholder URL for GitHub repository
      liveUrl: "https://personalized-dashboard-with-api-integrations.vercel.app/", // Placeholder URL for live demo
    },
    {
      title: "ModernStore - React E-commerce Platform", // Project title
      description:
        "A fully functional e-commerce store with a modern, polished design and engaging animations.", // Project description
      image: modern_e_commerce, // Project image URL
      technologies: ["React", "TypeScript", "Tailwind CSS", "CSS", "Zustand", "Lucide React", "Stripe", "Framer motion"], // Technologies used in the project
      githubUrl: "https://github.com/Ayyubiy90/modern-e-commerce-store", // Placeholder URL for GitHub repository
      liveUrl: "https://modern-e-commerce-store.vercel.app/", // Placeholder URL for live demo
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "A modern, interactive dashboard built with React, TypeScript, and Recharts for analyzing and visualizing data in real-time. Features a responsive design, dark mode support, and interactive charts.",
      image: data_visualization,
      technologies: ["React", "Typescript", "Tailwind CSS", "Recharts", "Lucide React", "Regression.js"],
      githubUrl:
        "https://github.com/Ayyubiy90/data-visualization-dashboard",
      liveUrl: "https://data-visualization-dashboard-drab.vercel.app/",
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

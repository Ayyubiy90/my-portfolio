// Import necessary modules from the libraries
import { motion } from "framer-motion"; // Import motion for animations
import { useInView } from "react-intersection-observer"; // Import hook to detect if an element is in view

// Define the Skills component
const Skills = () => {
  // Set up the in-view detection with a threshold of 0.1 and trigger it only once
  const [ref, inView] = useInView({
    threshold: 0.1, // Percentage of the target's visibility to trigger the callback
    triggerOnce: true, // Only trigger once when it comes into view
  });

  // Define animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state when hidden
    visible: {
      opacity: 1, // Final state when visible
      transition: {
        staggerChildren: 0.1, // Delay the appearance of children elements
      },
    },
  };

  // Define animation variants for each item
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Initial state for items
    visible: {
      y: 0, // Final position on the y-axis
      opacity: 1, // Final opacity
    },
  };

  // Array of skills categorized by Frontend, Backend, and Tools & Others
  const skills = [
    {
      category: "Frontend", // Category name
      items: [
        // Array of frontend technologies with names and icons
        {
          name: "React/Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        {
          name: "SCSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
      ],
    },
    {
      category: "Backend", // Category name for backend technologies
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
      ],
    },
    {
      category: "Tools & Others", // Category for tools and other technologies
      items: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/npm/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
      ],
    },
  ];

  // Render the component
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* Container for the skills section */}
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref} // Attach the ref to this div for in-view detection
          initial="hidden" // Initial animation state
          animate={inView ? "visible" : "hidden"} // Animate based on inView state
          variants={containerVariants} // Apply container variants for animation
          className="max-w-6xl mx-auto">
          {/* Section title */}
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>

          {/* Container for skill categories */}
          <div className="space-y-12">
            {/* Map through each skill group */}
            {skills.map((skillGroup) => (
              <motion.div key={skillGroup.category} variants={itemVariants}>
                {/* Display the category name */}
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  {skillGroup.category}
                </h3>
                {/* Grid for skill items */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Map through each skill in the current group */}
                  {skillGroup.items.map((skill) => (
                    <motion.div
                      key={skill.name} // Unique key for each skill
                      variants={itemVariants} // Apply item variants for animation
                      whileHover={{ y: -5 }} // Animation on hover
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4">
                      {/* Display the skill icon */}
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12"
                      />
                      {/* Display the skill name */}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Export the Skills component
export default Skills;

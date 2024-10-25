import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Skills component: Displays a section showcasing various technical skills
const Skills = () => {
  // Using the useInView hook to detect when the component is in view
  // This allows us to trigger animations when the component becomes visible
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Trigger only once to optimize performance
  });

  // Variants for the container animation
  // These control the overall animation of the skills section
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state: fully transparent
    visible: {
      opacity: 1, // Final state: fully visible
      transition: {
        staggerChildren: 0.1, // Stagger animation of children by 0.1 seconds
      },
    },
  };

  // Variants for each item animation
  // These control how each skill card animates
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Initial state: 20px below and transparent
    visible: {
      y: 0, // Final state: original position
      opacity: 1, // Final state: fully visible
    },
  };

  // Array of skills categorized by type
  // This data structure allows for easy addition or modification of skills
  const skills = [
    {
      category: "Frontend", // Category of skills
      items: [
        {
          name: "React/Next.js", // Skill name
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // Skill icon URL
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
      ],
    },
    {
      category: "Backend",
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
      ],
    },
    {
      category: "Tools & Others",
      items: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
      ],
    },
  ];

  return (
    // Main skills section with responsive padding and background
    // The dark: classes provide styling for dark mode
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Animated container for all skills content */}
        <motion.div
          ref={ref} // Reference for the inView hook
          initial="hidden" // Initial animation state
          animate={inView ? "visible" : "hidden"} // Animate based on inView
          variants={containerVariants} // Use container variants for animation
          className="max-w-6xl mx-auto">
          {/* Section title */}
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>

          {/* Container for all skill groups */}
          <div className="space-y-12">
            {/* Map through each skill category */}
            {skills.map((skillGroup) => (
              <motion.div key={skillGroup.category} variants={itemVariants}>
                {/* Category title */}
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  {skillGroup.category} {/* Display skill category */}
                </h3>
                {/* Grid layout for skill items, responsive design */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Map through each skill in the category */}
                  {skillGroup.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants} // Use item variants for animation
                      whileHover={{ y: -5 }} // Hover effect: lift the card slightly
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4">
                      {/* Skill icon */}
                      <img
                        src={skill.icon} // Skill icon URL
                        alt={skill.name} // Alt text for accessibility
                        className="w-12 h-12" // Fixed size for consistency
                      />
                      {/* Skill name */}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name} {/* Display skill name */}
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

export default Skills; // Export the Skills component for use in other parts of the application

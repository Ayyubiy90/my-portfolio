// Import necessary libraries and components
import { motion } from "framer-motion"; // Animation library for React
import { useInView } from "react-intersection-observer"; // Hook to detect if an element is in the viewport
import { User, Award, BookOpen } from "lucide-react"; // Icons for user experience, status, and education

// Define the About component
const About = () => {
  // Set up the inView hook to track if the section is in the viewport
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
    triggerOnce: true, // Only trigger the animation once
  });

  // Render the component
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref} // Attach the ref to track visibility
          initial={{ opacity: 0, y: 20 }} // Initial animation state
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible state when in view
          transition={{ duration: 0.6 }} // Animation duration
          className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }} // Initial animation for image
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
              transition={{ delay: 0.2 }}>
              {" "}
              // Delay before animation starts
              <img
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=800" // Profile image URL
                alt="Profile" // Alt text for accessibility
                className="rounded-lg shadow-lg" // Image styling
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} // Initial animation for text
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
              transition={{ delay: 0.4 }} // Delay for animation
              className="space-y-6">
              {" "}
              // Space between elements
              <p className="text-gray-600 dark:text-gray-300">
                I'm a frontend developer from Lagos, Nigeria, with a growing
                expertise in backend development. Self-taught for 2 years with
                an additional year of project building experience, I'm
                passionate about creating responsive and intuitive web
                applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Currently pursuing my bachelor's degree in Computer Science, I'm
                actively seeking remote opportunities for full-time, part-time,
                or contract positions. Outside of coding, I'm an avid follower
                of tech trends, love exploring new gadgets, and enjoy playing
                video games.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: User, // Icon for experience
                    title: "Experience",
                    text: "3+ years in web development", // Description of experience
                  },
                  {
                    icon: Award, // Icon for status
                    title: "Status",
                    text: "Open to remote work opportunities", // Current job status
                  },
                  {
                    icon: BookOpen, // Icon for education
                    title: "Education",
                    text: "Computer Science (Ongoing)", // Current education status
                  },
                ].map(
                  (
                    { icon: Icon, title, text } // Map through the array of information
                  ) => (
                    <div key={title} className="flex items-center space-x-4">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />{" "}
                        // Render icon
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {title} // Title of the information
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {text}{" "}
                        </p>{" "}
                        // Description text
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Export the About component
export default About;

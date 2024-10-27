import { motion } from "framer-motion"; // Importing motion for animations
import { useInView } from "react-intersection-observer"; // Hook to detect if the component is in view
import { User, Award, BookOpen } from "lucide-react"; // Importing icons from lucide-react

const About = () => {
  // Using the useInView hook to track if the section is in the viewport
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      {/* Container for the section */}
      <div className="container mx-auto px-6">
        {/* Motion div that animates when in view */}
        <motion.div
          ref={ref} // Reference for the inView hook
          initial={{ opacity: 0, y: 20 }} // Initial state of the animation
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to this state when in view
          transition={{ duration: 0.6 }} // Animation duration
          className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side: Profile image with animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} // Initial state for the image
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
              transition={{ delay: 0.2 }} // Delay for the animation
            >
              <img
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=800"
                alt="Profile" // Alt text for accessibility
                className="rounded-lg shadow-lg" // Styling for the image
              />
            </motion.div>

            {/* Right side: Description and details with animation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} // Initial state for the text
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animate when in view
              transition={{ delay: 0.4 }} // Delay for the animation
              className="space-y-6">
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
                {/* Array of experience, status, and education details */}
                {[
                  {
                    icon: User, // Icon for experience
                    title: "Experience",
                    text: "3+ years in web development",
                  },
                  {
                    icon: Award, // Icon for status
                    title: "Status",
                    text: "Open to remote work opportunities",
                  },
                  {
                    icon: BookOpen, // Icon for education
                    title: "Education",
                    text: "Computer Science (Ongoing)",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-center space-x-4">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                      {/* Render the icon */}
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {title} {/* Title of the detail */}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{text}</p>{" "}
                      {/* Description text */}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

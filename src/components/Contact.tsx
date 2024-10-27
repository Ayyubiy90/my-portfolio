// Importing necessary libraries and components
import { motion } from "framer-motion"; // Importing motion component for animations
import { useInView } from "react-intersection-observer"; // Hook to detect if an element is in the viewport
import { Mail, Phone, MapPin } from "lucide-react"; // Importing icon components

// Defining the Contact functional component
const Contact = () => {
  // Using the useInView hook to create a ref and track if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Trigger the animation only once
  });

  // Returning the JSX for the Contact section
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* Container for the content with padding and responsive design */}
      <div className="container mx-auto px-6">
        {/* Motion div that animates when in view */}
        <motion.div
          ref={ref} // Assigning the ref to the motion div
          initial={{ opacity: 0, y: 20 }} // Initial state of the animation (invisible and moved down)
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and original position when in view
          transition={{ duration: 0.6 }} // Duration of the animation
          className="max-w-4xl mx-auto">
          {" "}
          {/* Centering the content with a max width */}
          {/* Heading for the contact section */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          {/* Grid layout for contact information and the form */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Motion div for contact information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} // Initial state for animation (invisible and moved left)
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animate to visible and original position when in view
              transition={{ delay: 0.2 }} // Delay for the animation
              className="space-y-6">
              {" "}
              {/* Spacing between elements */}
              {/* Subheading for contact information */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              {/* Mapping through contact information array to display each item */}
              <div className="space-y-4">
                {[
                  { Icon: Mail, text: "ayyubiy67@gmail.com" }, // Email contact
                  { Icon: Phone, text: "+234 701 337 2625" }, // Phone contact
                  { Icon: MapPin, text: "Lagos, Nigeria" }, // Address contact
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center space-x-4">
                    {/* Icon container */}
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    {/* Text displaying the contact information */}
                    <span className="text-gray-600 dark:text-gray-300">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Motion form for user input */}
            <motion.form
              initial={{ opacity: 0, x: 20 }} // Initial state for animation (invisible and moved right)
              animate={inView ? { opacity: 1, x: 0 } : {}} // Animate to visible and original position when in view
              transition={{ delay: 0.4 }} // Delay for the animation
              className="space-y-6">
              {" "}
              {/* Spacing between form elements */}
              {/* Name input field */}
              <div>
                <label
                  htmlFor="name" // Associating the label with the input field
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text" // Input type for text
                  id="name" // Unique identifier for the input
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text -white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400" // Styling for the input field
                />
              </div>
              {/* Email input field */}
              <div>
                <label
                  htmlFor="email" // Associating the label with the input field
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email" // Input type for email
                  id="email" // Unique identifier for the input
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400" // Styling for the input field
                />
              </div>
              {/* Message textarea */}
              <div>
                <label
                  htmlFor="message" // Associating the label with the textarea
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message" // Unique identifier for the textarea
                  rows={4} // Number of rows for the textarea
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400" // Styling for the textarea
                />
              </div>
              {/* Submit button */}
              <button
                type="submit" // Button type for submitting the form
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Exporting the Contact component
export default Contact;

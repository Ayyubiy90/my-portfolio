import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { User, Award, BookOpen } from "lucide-react";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return(
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate= {inView ? {opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6}}
                    className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 text-gray-900 dark:text-white">
                            About Me
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? {opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.2 }}
                                    >
                                        <img
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=800"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-gray-600 dark:text-gray-300">
                I'm a frontend developer from Lagos, Nigeria, with a growing expertise in backend development. 
                Self-taught for 2 years with an additional year of project building experience, I'm passionate 
                about creating responsive and intuitive web applications.
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                Currently pursuing my bachelor's degree in Computer Science, I'm actively seeking remote 
                opportunities for full-time, part-time, or contract positions. Outside of coding, I'm an 
                avid follower of tech trends, love exploring new gadgets, and enjoy playing video games.
              </p>
    )
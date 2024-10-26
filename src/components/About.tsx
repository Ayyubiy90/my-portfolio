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
    )
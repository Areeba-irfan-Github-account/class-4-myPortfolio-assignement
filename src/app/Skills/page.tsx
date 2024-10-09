'use client';
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: 'Next.js', icon: '💻', level: 90 },
        { name: 'React', icon: '📅', level: 85 },
        { name: 'Tailwind CSS', icon: '🎨', level: 85 },
        { name: 'Typescript', icon: '🤖', level: 89 },
        { name: 'JavaScript', icon: '📊', level: 80 },
        { name: 'UI/UX Design', icon: '🎨', level: 80 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 text-white">
            <Navbar />
            <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <motion.h1 
                    className="text-6xl font-extrabold mb-16 text-center text-blue-300"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Professional Skills
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index}
                            className="bg-blue-800 bg-opacity-30 rounded-lg p-8 shadow-2xl backdrop-blur-md hover:bg-opacity-40 transition-all duration-300 transform hover:scale-105"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-4xl mr-4">{skill.icon}</span>
                                <h3 className="text-2xl font-semibold text-blue-300">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-blue-900 rounded-full h-4 mb-4">
                                <motion.div 
                                    className="bg-blue-400 h-4 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                />
                            </div>
                            <p className="text-right text-blue-200">{skill.level}%</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;
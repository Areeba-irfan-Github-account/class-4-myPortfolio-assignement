"use client"
import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";

const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React and Node.js",
        image: "/web-2.jpg",
        tags: ["Next.js", "React", "Tailwind CSS", "Typescript"]
    },
    {
        title: "Website clone",
        description: "A clone of a website",
        image: "/web-1.jpg",
        tags: ["Next.js", "React", "Tailwind CSS", "Typescript"]
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing my work",
        image: "/pro-web.jpg",
        tags: ["Next.js", "Tailwind CSS", "Vercel"]
    },
 
];

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
            <Navbar />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-5xl font-extrabold mb-12 text-center animate-fade-in">
                    My Projects
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-blue-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative h-48">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                {hoveredIndex === index && (
                                    <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center animate-fade-in">
                                        <p className="text-lg font-semibold text-center px-4">
                                            {project.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 animate-slide-in-bottom">{project.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="bg-blue-600 text-xs font-semibold px-2 py-1 rounded animate-bounce-in"
                                            style={{ animationDelay: `${tagIndex * 0.1 + 0.3}s` }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

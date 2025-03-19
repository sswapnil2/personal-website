'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'backend' | 'distributed' | 'cloud' | 'all';
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "High-Performance Data Store",
    description: "Built a distributed key-value store using RocksDB and custom compaction strategies. Achieved 100k+ ops/sec with sub-millisecond latency.",
    technologies: ["Java", "RocksDB", "gRPC", "Docker"],
    category: "backend",
    image: "/projects/data-store.jpg",
    github: "https://github.com/yourusername/data-store"
  },
  {
    title: "Microservices Platform",
    description: "Developed a scalable microservices platform handling 1M+ daily requests. Implemented distributed tracing and monitoring.",
    technologies: ["Micronaut", "Kubernetes", "Prometheus", "Jaeger"],
    category: "distributed",
    image: "/projects/microservices.jpg",
    github: "https://github.com/yourusername/microservices-platform"
  },
  {
    title: "Cloud-Native Application",
    description: "Architected and deployed a cloud-native application using modern DevOps practices. Reduced deployment time by 60%.",
    technologies: ["AWS", "Docker", "Terraform", "GitHub Actions"],
    category: "cloud",
    image: "/projects/cloud-app.jpg",
    link: "https://demo.example.com"
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Project['category']>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my work showcasing expertise in distributed systems, backend development, and cloud technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('backend')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'backend'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setSelectedCategory('distributed')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'distributed'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Distributed
          </button>
          <button
            onClick={() => setSelectedCategory('cloud')}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === 'cloud'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Cloud
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <FaGithub className="w-5 h-5 mr-2" />
                      View Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
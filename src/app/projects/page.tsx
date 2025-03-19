'use client';

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'backend' | 'distributed' | 'cloud' | 'all';
  image: string;
  link?: string;
  github?: string;
  achievements: string[];
}

const projects: Project[] = [
  {
    title: "High-Performance Data Store",
    description: "Led the development of a distributed key-value store using RocksDB and custom compaction strategies. Designed and implemented the core storage engine with focus on performance and reliability.",
    technologies: ["Java 17", "RocksDB", "gRPC", "Docker", "Kubernetes"],
    category: "backend",
    image: "/projects/data-store.jpg",
    achievements: [
      "Achieved 100k+ ops/sec with sub-millisecond latency",
      "Reduced storage costs by 40% through optimized compaction strategies",
      "Implemented custom recovery mechanisms reducing data loss risk by 99.9%"
    ]
  },
  {
    title: "Microservices Platform",
    description: "Architected and developed a scalable microservices platform handling 1M+ daily requests. Implemented comprehensive monitoring, tracing, and fault tolerance mechanisms.",
    technologies: ["Micronaut", "Kubernetes", "Prometheus", "Jaeger", "gRPC"],
    category: "distributed",
    image: "/projects/microservices.jpg",
    achievements: [
      "Achieved 99.99% system uptime through robust error handling",
      "Reduced mean time to resolution by 60% with enhanced monitoring",
      "Implemented circuit breakers reducing cascading failures by 80%"
    ]
  },
  {
    title: "Cloud-Native Application",
    description: "Led the migration of legacy applications to cloud-native architecture. Implemented modern DevOps practices and automated deployment pipelines.",
    technologies: ["AWS", "Docker", "Terraform", "GitHub Actions", "Kubernetes"],
    category: "cloud",
    image: "/projects/cloud-app.jpg",
    achievements: [
      "Reduced deployment time by 60% through CI/CD automation",
      "Achieved 50% cost reduction through efficient resource utilization",
      "Implemented auto-scaling reducing manual intervention by 90%"
    ]
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
          <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key projects and achievements demonstrating expertise in distributed systems, backend development, and cloud technologies.
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
        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {project.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
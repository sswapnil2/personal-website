export default function About() {
  const skills = [
    {
      category: "Backend Development",
      items: ["Java 17", "Micronaut", "RocksDB", "Spring Boot", "REST APIs"]
    },
    {
      category: "Distributed Systems",
      items: ["System Design", "Microservices", "Message Queues", "Load Balancing"]
    },
    {
      category: "Cloud & DevOps",
      items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Git"]
    },
    {
      category: "Data & Storage",
      items: ["RocksDB", "PostgreSQL", "Redis", "MongoDB"]
    },
    {
      category: "Protocols & Standards",
      items: ["Protobuf", "gRPC", "REST", "GraphQL"]
    }
  ];

  const experience = [
    {
      company: "Current Company",
      role: "Senior Software Engineer",
      period: "2020 - Present",
      description: "Leading the development of distributed systems and microservices architecture. Implemented high-performance data storage solutions using RocksDB and custom compaction strategies.",
      achievements: [
        "Achieved 100k+ ops/sec with sub-millisecond latency",
        "Reduced system costs by 40% through optimization",
        "Led a team of 5 engineers in system redesign"
      ]
    },
    {
      company: "Previous Company",
      role: "Software Engineer",
      period: "2018 - 2020",
      description: "Developed and maintained scalable backend services using Java and Micronaut. Implemented microservices architecture with gRPC communication.",
      achievements: [
        "Built a microservices platform handling 1M+ daily requests",
        "Implemented distributed tracing and monitoring",
        "Reduced deployment time by 60% through CI/CD automation"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate Software Engineer with expertise in building scalable and robust backend systems.
            I specialize in distributed systems, microservices architecture, and cloud-native applications.
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a Software Engineer with expertise in building scalable and robust backend systems. 
              My experience spans across Java, Micronaut, and distributed systems, where I&apos;ve developed 
              multiple scalable services using modern technologies and best practices.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 
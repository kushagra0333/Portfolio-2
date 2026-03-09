import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'MITR SOS -- Emergency Response Platform',
    description: 'Developed a full-stack emergency response platform using React, Node.js, Express, and MongoDB. Designed secure REST APIs with JWT authentication for real-time emergency alerts and GPS tracking. Integrated geolocation APIs and external notification services.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI-Powered Bug Reproduction System',
    description: 'Developed a backend service that converts structured bug descriptions into executable browser automation workflows. Built an orchestration layer to execute automated test steps, capture logs, and generate reproducible artifacts including videos and screenshots.',
    tags: ['Python', 'Backend', 'Browser Automation', 'Docker'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'COOK Programming Language',
    description: 'Designed and implemented a systems programming language with a full compiler pipeline, including lexical analysis, parser, AST generation, and x86-64 assembly generation using NASM and GNU LD. Also developed an interactive web playground.',
    tags: ['C/C++', 'Compiler', 'x86-64', 'NASM'],
    gradient: 'from-pink-500 to-rose-500',
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-blue-400 mb-4">
            <span className="text-purple-400">//</span> Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl">Featured Projects</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my recent work in AI, automation, and system-level software development.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect */}
              {hoveredIndex === index && (
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-75 transition duration-300`}></div>
              )}

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all transform hover:-translate-y-2">
                {/* Number badge */}
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-sm font-mono mb-4`}>
                  0{index + 1}
                </div>

                {/* Title */}
                <h4 className="text-2xl mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                    <Github className="w-4 h-4" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

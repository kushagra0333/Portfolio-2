import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const projects = [
  {
    title: 'AI Native Developer Operating Environment',
    points: [
      'Built a local-first AI-powered developer platform enabling natural language execution of development workflows through an intelligent CLI interface.',
      'Developed a multi-agent orchestration system consisting of Planner, Executor, Coding, and Analysis agents to automate task decomposition, code generation, and execution, reducing manual development effort by 60%.',
      'Implemented a FastAPI-based backend with a secure permission-controlled tool execution engine supporting filesystem operations, Git workflows, and shell command automation.',
      'Integrated local LLMs using Ollama with hardware-aware model management and semantic memory powered by SQLite and FAISS, improving retrieval efficiency by 40%.',
      'Automated end-to-end developer workflows including project scaffolding, code analysis, repository management, and GitHub integration with rollback support, reducing setup time from hours to minutes.',
    ],
    tags: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
      { name: 'Ollama', icon: '🦙' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
      { name: 'FAISS', icon: '🔍' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Multi-Agent Systems', icon: '🤖' },
    ],
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://opengraph.githubassets.com/1/kushagra0333/AI_Native_Custom_Distro',
    githubUrl: 'https://github.com/kushagra0333/AI_Native_Custom_Distro',
    liveUrl: '#',
  },
  {
    title: 'RIFT Financial Forensics Engine – Money Muling Detection',
    points: [
      'Built a full-stack financial fraud detection and forensic analysis platform using FastAPI (Python) and React.js, capable of processing and analyzing 10K+ transaction records efficiently.',
      'Designed a graph-based fraud detection engine using NetworkX implementing cycle detection, fan-in/fan-out analysis, and high-velocity transaction monitoring to identify suspicious money-muling patterns.',
      'Developed a risk scoring engine combining behavioral and structural transaction signals, reducing false positives by 30%, and built an interactive investigation dashboard for visualization, analytics, and forensic workflows.',
      'Containerized and deployed the platform using Docker and implemented a blockchain-inspired hash-chained logging system to ensure tamper-evident audit trails and secure financial data storage.',
    ],
    tags: [
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'NetworkX', icon: '🕸️' },
      { name: 'Fraud Detection', icon: '🛡️' },
      { name: 'Graph Analytics', icon: '📊' },
    ],
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://opengraph.githubassets.com/1/kushagra0333/financial-system',
    githubUrl: 'https://github.com/kushagra0333/financial-system',
    liveUrl: '#',
  },
  {
    title: 'COOK Programming Language',
    points: [
      'Designed and implemented a systems programming language with a complete compiler pipeline including lexical analysis, parser generation, Abstract Syntax Tree (AST) construction, semantic analysis, and x86-64 assembly code generation using NASM and GNU LD.',
      'Developed low-level compilation workflows, memory handling mechanisms, and optimized assembly output for efficient execution.',
      'Built an interactive browser-based playground for writing, compiling, and testing programs directly in the web environment.',
    ],
    tags: [
      { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Compiler Design', icon: '⚙️' },
      { name: 'x86-64', icon: '🛠️' },
      { name: 'NASM', icon: '🔧' },
      { name: 'GNU LD', icon: '🖇️' },
    ],
    gradient: 'from-pink-500 to-rose-500',
    image: 'https://opengraph.githubassets.com/1/kushagra0333/Cook-Programming-Language',
    githubUrl: 'https://github.com/kushagra0333/Cook-Programming-Language',
    liveUrl: '#',
  },
  {
    title: 'MITR SOS – Emergency Response Platform',
    points: [
      'Developed a scalable full-stack emergency response platform using React.js, Node.js, Express.js, and MongoDB for real-time emergency assistance workflows.',
      'Designed secure RESTful APIs with JWT-based authentication and authorization supporting real-time SOS alerts, GPS tracking, and incident management.',
      'Integrated geolocation services, notification systems, and third-party APIs to improve emergency communication and response coordination.',
      'Focused on responsive UI/UX, backend scalability, and secure data handling for high-availability emergency operations.',
    ],
    tags: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'JWT', icon: '🔑' },
    ],
    gradient: 'from-orange-500 to-yellow-500',
    image: 'https://opengraph.githubassets.com/1/kushagra0333/complete-mitr',
    githubUrl: 'https://github.com/kushagra0333/complete-mitr',
    liveUrl: '#',
  },
  {
    title: 'AI-Powered Bug Reproduction System',
    points: [
      'Developed an AI-assisted backend automation platform that converts structured bug reports into executable browser automation workflows for rapid issue reproduction.',
      'Built an orchestration engine capable of executing automated test flows, capturing runtime logs, screenshots, videos, and reproducible debugging artifacts.',
      'Integrated browser automation frameworks and containerized execution environments for isolated and scalable test execution.',
      'Improved debugging efficiency and developer productivity by automating repetitive QA and issue-triaging workflows.',
    ],
    tags: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Browser Automation', icon: '🌐' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Backend Eng.', icon: '⚙️' },
      { name: 'Automation', icon: '🤖' },
    ],
    gradient: 'from-green-500 to-emerald-500',
    image: 'https://opengraph.githubassets.com/1/kushagra0333/Bug-Reproduction-system',
    githubUrl: 'https://github.com/kushagra0333/Bug-Reproduction-system',
    liveUrl: '#',
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer"
            >
              {/* Glow effect */}
              {hoveredIndex === index && (
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-100 transition duration-300`}></div>
              )}

              {/* Card */}
              <div className="relative bg-[#0d1117] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden h-full hover:bg-[#161b22] hover:brightness-110 transition-all transform hover:-translate-y-2 flex flex-col">
                <div className="w-full h-48 sm:h-64 overflow-hidden relative border-b border-white/10">
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                   <div className={`absolute bottom-4 left-4 inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-sm font-mono z-10`}>
                     0{index + 1}
                   </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h4 className="text-2xl mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className="px-3 py-1.5 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300"
                      >
                        {tag.icon.startsWith('http') ? (
                          <img src={tag.icon} alt={`${tag.name} icon`} className="w-4 h-4 object-contain" />
                        ) : (
                          <span className="text-base">{tag.icon}</span>
                        )}
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" style={{ zIndex: 9999 }} onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-[#0d1117] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
            
            <div className="w-full h-64 sm:h-80 overflow-hidden relative border-b border-white/10 shrink-0">
               <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-6 left-6 pr-6">
                 <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
               </div>
            </div>
            
            <div className="p-6 sm:p-8 flex flex-col gap-8">
              <div>
                <h4 className="text-lg font-mono text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-purple-400">//</span> Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="px-3 py-1.5 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-200"
                    >
                      {tag.icon.startsWith('http') ? (
                        <img src={tag.icon} alt={`${tag.name} icon`} className="w-5 h-5 object-contain" />
                      ) : (
                        <span className="text-lg">{tag.icon}</span>
                      )}
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-mono text-blue-400 mb-4 flex items-center gap-2">
                  <span className="text-purple-400">//</span> About the Project
                </h4>
                <ul className="list-disc pl-5 space-y-3 text-gray-300 leading-relaxed text-base">
                  {selectedProject.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                <a 
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
                <a 
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-all"
                >
                  <Github className="w-5 h-5" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}

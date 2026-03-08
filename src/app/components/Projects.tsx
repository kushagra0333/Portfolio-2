import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'AI-Powered Bug Reproduction System',
    description: 'An automated system to reproduce user-reported bugs from natural language descriptions using NLP and web automation principles. Built a Python/Flask API that orchestrates execution using Playwright.',
    tags: ['Python', 'Flask', 'NLP', 'Playwright', 'Docker'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'BABY Programming Language & Compiler',
    description: 'Built a custom programming language and native compiler in C++ with a full pipeline: lexer, parser, AST construction, semantic checks, and x86-64 assembly generation.',
    tags: ['C++', 'Compiler', 'x86-64', 'React', 'Node.js'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Camera-Based Virtual Trackpad & Gesture Input Driver',
    description: 'Real-time Linux daemon that converts webcam hand gestures into a kernel-level virtual input device using uinput across Wayland/X11.',
    tags: ['Linux', 'C/C++', 'Wayland', 'X11'],
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'INDICA Voice AI Assistant',
    description: 'Voice-first Python assistant integrating Google Gemini LLM with Whisper STT and pyttsx3 TTS for end-to-end conversational I/O and action execution.',
    tags: ['Python', 'Gemini AI', 'Whisper STT', 'Voice Recognition'],
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'AI Conversational Transport Bot',
    description: 'High-performance FastAPI backend supporting SMS, WhatsApp, and simulated voice calls using Twilio webhooks. Integrated Gemini AI for multilingual conversation.',
    tags: ['FastAPI', 'WhatsApp API', 'Gemini AI', 'Twilio'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Student Report Card Management System',
    description: 'Python-based application that uses MySQL for database management. Provides functionalities to manage student records, add/update marks, and generate report cards.',
    tags: ['Python', 'MySQL', 'Database Management'],
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Boogle Search Engine',
    description: 'Python-based custom search engine algorithm with web scraping and indexing capabilities.',
    tags: ['Python', 'Search Engine', 'Algorithms'],
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'Virtual Trackpad System',
    description: 'AI-powered input driver that transforms a webcam into a touch-free mouse using MediaPipe and Kalman Filters for robust hand tracking and jitter reduction.',
    tags: ['Python', 'MediaPipe', 'Kalman Filters', 'AI'],
    gradient: 'from-fuchsia-500 to-purple-500',
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

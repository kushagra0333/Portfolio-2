import { Github, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <p className="text-sm text-blue-400 font-mono">Available for opportunities</p>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl max-w-5xl mx-auto leading-tight">
            Building <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Agents</span>, Automation Systems, and Scalable Full-Stack Applications.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-400 font-mono">
            AI Engineer <span className="text-purple-400">|</span> Automation Builder <span className="text-purple-400">|</span> Full Stack Developer
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
            >
              <span className="flex items-center gap-2">
                View Projects
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
            <a
              href="https://github.com/arjavjain5203"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/30 transition-all hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

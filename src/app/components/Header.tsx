import { Download } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-mono">
            <span className="text-blue-400">&lt;</span>
            Kushagra Pandey
            <span className="text-purple-400">/&gt;</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              <Download className="w-4 h-4" />
              <span className="text-sm">Resume</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section title */}
          <div className="mb-16">
            <h2 className="text-sm font-mono text-blue-400 mb-4">
              <span className="text-purple-400">//</span> About Me
            </h2>
            <h3 className="text-4xl md:text-5xl">Turning Ideas into Reality</h3>
          </div>

          {/* Content card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm <span className="text-blue-400 font-mono">Arjav Jain</span>, a Computer Science student specializing in Data Science at{' '}
                <span className="text-purple-400">GL Bajaj Institute of Technology and Management</span>, with strong foundational education from <span className="text-pink-400">Kendriya Vidhyalaya</span>.
              </p>
              <p>
                I build <span className="text-blue-400">AI agents</span>, <span className="text-purple-400">automation workflows</span>, and{' '}
                <span className="text-pink-400">system-level software</span> that solve real-world problems.
              </p>
              <p>
                With experience in open source development, backend systems, and AI-driven automation, I'm passionate about creating intelligent solutions that scale.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">300+</div>
                <div className="text-sm text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">1900</div>
                <div className="text-sm text-gray-400">LeetCode Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">5+</div>
                <div className="text-sm text-gray-400">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

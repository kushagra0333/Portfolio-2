const experiences = [
  {
    year: 'Nov 2025 – Jan 2026',
    role: 'Software Development Engineer Intern',
    company: 'Agreeya Solutions',
    description:
      'Developed and optimized high-performance RESTful APIs using Python and backend frameworks, improving application performance by 20% and reducing API response latency by 150ms. Built scalable backend services capable of handling 1K+ daily requests while ensuring production reliability and fault tolerance. Debugged and resolved 20+ critical production issues, reducing turnaround time by 30% and improving system stability. Collaborated in Agile sprint cycles, contributing to 10+ feature releases using Git-based version control workflows, code reviews, and CI/CD deployment practices.',
    color: 'from-blue-500 to-purple-500',
  },
  {
    year: 'Nov 2025 – Mar 2026',
    role: 'Mobile App Development Intern',
    company: 'Xdigipath Software India Pvt. Ltd.',
    description:
      'Developed and enhanced cross-platform mobile applications using Flutter and Dart, focusing on scalable architecture, responsive UI components, and optimized application workflows. Integrated APIs and third-party services to improve app functionality and user experience. Debugged and resolved application-level issues, improving performance, responsiveness, and stability across Android platforms. Assisted in deployment processes, version management, and feature integration while collaborating with backend and design teams in an Agile development environment.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    year: 'Aug 2025 – Oct 2025',
    role: 'Open Source Project Admin',
    company: 'GirlScript Summer of Code',
    description:
      'Led and mentored 20+ open-source contributors while managing 50+ pull requests and issue resolutions across the project lifecycle. Planned and executed project roadmaps, ensuring 100% on-time milestone delivery and efficient collaboration between contributors. Conducted code reviews, enforced coding standards, and implemented quality assurance practices that reduced bug reports by 30%. Coordinated repository management, contributor onboarding, documentation improvements, and feature planning for scalable open-source development.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: 'Feb 2024 – May 2024',
    role: 'Frontend Developer Intern',
    company: 'MakerStage',
    description:
      'Developed scalable and responsive web applications using React.js, Tailwind CSS, and modern frontend development practices. Built reusable UI components and optimized application rendering performance, improving page load speed and user experience. Implemented responsive layouts, state management, and interactive user interfaces aligned with modern design standards. Collaborated with backend developers and designers to integrate APIs, enhance accessibility, and deliver production-ready frontend solutions in an Agile workflow.',
    color: 'from-pink-500 to-orange-500',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-blue-400 mb-4">
            <span className="text-purple-400">//</span> Journey
          </h2>
          <h3 className="text-4xl md:text-5xl">Work Experience</h3>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-[-3rem] w-px bg-gradient-to-b from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/50 group-hover:to-purple-500/50 transition-colors duration-500"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-px h-px">
                  <div className={`absolute -left-3 -top-3 w-6 h-6 rounded-full bg-black border-4 border-gray-800 z-10 group-hover:border-transparent transition-colors duration-300`}></div>
                  <div className={`absolute -left-3 -top-3 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} shadow-lg shadow-blue-500/50 scale-0 group-hover:scale-100 transition-transform duration-500 z-20`}></div>
                </div>

                {/* Content card */}
                <div className="ml-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group-hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] group-hover:border-white/20 group-hover:translate-x-2">
                  {/* Year badge */}
                  <div className={`inline-flex items-center px-4 py-1.5 bg-gradient-to-r ${exp.color} rounded-full text-sm font-semibold tracking-wide mb-6 shadow-lg shadow-black/20 text-white`}>
                    {exp.year}
                  </div>

                  {/* Role and company */}
                  <h4 className="text-2xl font-bold mb-2 tracking-tight">{exp.role}</h4>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-blue-400 font-mono text-sm">{exp.company}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400/90 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    year: 'Nov 2025 – Present',
    role: 'Software Development Engineer',
    company: 'Agreeya Solutions',
    description: 'Developed scalable RESTful APIs using Python and Node.js for high-concurrency backend services. Implemented authentication and authorization using JWT, optimized MongoDB/SQL queries reducing latency by 35%, and resolved production issues.',
    color: 'from-blue-500 to-purple-500',
  },
  {
    year: 'Aug 2025 – Oct 2025',
    role: 'Open Source Project Admin',
    company: 'GirlScript Summer of Code',
    description: 'Led and mentored 20+ contributors on an education-focused open-source project. Managed issue tracking, pull request reviews, and roadmap planning ensuring code quality and timely feature delivery.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: 'Feb 2024 – Jul 2024',
    role: 'Backend Developer Intern',
    company: 'MakerStage',
    description: 'Developed REST APIs for an event management platform using Node.js and Express. Designed MongoDB schemas, integrated third-party services such as payment gateways, and deployed backend services on cloud infrastructure.',
    color: 'from-pink-500 to-orange-500',
  },
  {
    year: 'Jan 2024 – Jul 2024',
    role: 'Backend Developer Intern',
    company: 'Xdigipath Software India Pvt. Ltd.',
    description: 'Developed backend services for mobile applications using Node.js and Express.js. Implemented CRUD APIs, improved backend stability, and assisted in integrating authentication and payment third-party APIs.',
    color: 'from-orange-500 to-yellow-500',
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

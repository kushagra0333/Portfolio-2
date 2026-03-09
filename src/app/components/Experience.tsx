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
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-px h-px">
                  <div className={`absolute -left-2 -top-2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg shadow-blue-500/50 group-hover:scale-150 transition-transform`}></div>
                </div>

                {/* Content card */}
                <div className="ml-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:translate-x-2">
                  {/* Year badge */}
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${exp.color} rounded-full text-sm font-mono mb-4`}>
                    {exp.year}
                  </div>

                  {/* Role and company */}
                  <h4 className="text-2xl mb-2">{exp.role}</h4>
                  <p className="text-blue-400 font-mono mb-4">{exp.company}</p>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
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

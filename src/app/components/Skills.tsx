import { useState } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Python', 'Java', 'C/C++', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Frameworks',
    icon: '🤖',
    skills: ['React', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Wisper', 'Gemini API'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'MySQL', 'EC2'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Platforms',
    icon: '⚙️',
    skills: ['Linux', 'Windows'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Core CS Skills',
    icon: '🧠',
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'OS', 'Compiler Designing', 'Networking'],
    color: 'from-pink-500 to-rose-500',
  },
];

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-blue-400 mb-4">
            <span className="text-purple-400">//</span> Tech Stack
          </h2>
          <h3 className="text-4xl md:text-5xl">Skills & Expertise</h3>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Glow effect */}
              {hoveredIndex === index && (
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300`}></div>
              )}

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all">
                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">{category.icon}</div>
                  <h4 className="text-xl">{category.title}</h4>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 bg-gradient-to-r ${category.color} bg-opacity-10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-mono`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

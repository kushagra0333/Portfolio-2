import { useState } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Frontend & UI',
    icon: '🎨',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'XHTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend & APIs',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'JWT Auth', icon: '🔑' },
      { name: 'Microservices', icon: '🧩' },
      { name: 'Middleware', icon: '🔀' },
    ],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'AWS (EC2, S3, IAM)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'CI/CD (GitHub Actions)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
      { name: 'CI/CD Pipelines', icon: '🚀' },
    ],
    color: 'from-indigo-400 to-blue-400',
  },
  {
    title: 'Systems',
    icon: '🖥️',
    skills: [
      { name: 'Linux/Unix', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Compiler Design', icon: '⚙️' },
      { name: 'x86-64 Assembly', icon: '🛠️' },
      { name: 'CMake', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg' },
      { name: 'NASM', icon: '🔧' },
      { name: 'GNU LD', icon: '🖇️' },
    ],
    color: 'from-teal-400 to-emerald-500',
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Core Concepts',
    icon: '🧠',
    skills: [
      { name: 'Data Structures', icon: '📊' },
      { name: 'System Design', icon: '🏗️' },
      { name: 'Computer Networking', icon: '🌐' },
      { name: 'OOP', icon: '📦' },
      { name: 'Software Design', icon: '📐' },
      { name: 'Distributed Systems', icon: '🔗' },
      { name: 'Query Optimization', icon: '⚡' },
      { name: 'API Rate Limiting', icon: '🚦' },
    ],
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
                      key={skill.name}
                      className={`px-3 py-1.5 flex items-center gap-2 bg-gradient-to-r ${category.color} bg-opacity-10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-mono`}
                    >
                      {skill.icon.startsWith('http') ? (
                        <img src={skill.icon} alt={`${skill.name} icon`} className="w-4 h-4 object-contain" />
                      ) : (
                        <span className="text-base">{skill.icon}</span>
                      )}
                      {skill.name}
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

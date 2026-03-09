import { Trophy, Award, Code, TrendingUp } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Finalist',
    event: 'IdeaStorm Hackathon',
    location: 'IIT Roorkee',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Award,
    title: '2nd Runner-Up',
    event: 'Code for Bharat Season 2',
    location: 'Tech masters India',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: Code,
    title: 'Subject Topper',
    event: 'Discrete Mathematics',
    location: 'Guru Gobind Singh Indraprastha University',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-blue-400 mb-4">
            <span className="text-purple-400">//</span> Recognition
          </h2>
          <h3 className="text-4xl md:text-5xl">Achievements & Awards</h3>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${achievement.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl mb-2">{achievement.title}</h4>

                  {/* Event */}
                  <p className="text-blue-400 font-mono text-sm mb-2">
                    {achievement.event}
                  </p>

                  {/* Location */}
                  <p className="text-gray-400 text-sm">
                    {achievement.location}
                  </p>

                  {/* Decorative gradient bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">8.3</div>
              <div className="text-gray-400">CGPA</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">3+</div>
              <div className="text-gray-400">Hackathon Wins</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">3+</div>
              <div className="text-gray-400">Major Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

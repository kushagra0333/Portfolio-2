import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-blue-400 mb-4">
            <span className="text-purple-400">//</span> Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl">Let's Connect</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors h-full">
                <h4 className="text-2xl font-semibold mb-8 tracking-tight">Contact Information</h4>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:kushagrapandey0333@gmail.com"
                    className="flex items-center gap-5 p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                      <Mail className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-400 mb-1">Email</div>
                      <div className="text-gray-200 group-hover:text-blue-400 transition-colors break-all hidden sm:block">kushagrapandey0333@gmail.com</div>
                      <div className="text-gray-200 group-hover:text-blue-400 transition-colors break-all sm:hidden">Send Email 👋</div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/kushagra0333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                      <Github className="w-7 h-7 text-purple-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-400 mb-1">GitHub</div>
                      <div className="text-gray-200 group-hover:text-purple-400 transition-colors hidden sm:block">github.com/kushagra0333</div>
                      <div className="text-gray-200 group-hover:text-purple-400 transition-colors sm:hidden">@kushagra0333</div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/its-kushagra-pandey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-orange-500 transition-all duration-300">
                      <Linkedin className="w-7 h-7 text-pink-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-400 mb-1">LinkedIn</div>
                      <div className="text-gray-200 group-hover:text-pink-400 transition-colors truncate w-40 sm:w-auto">linkedin.com/in/its-kushagra-pandey</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h4 className="text-2xl mb-6">Send a Message</h4>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

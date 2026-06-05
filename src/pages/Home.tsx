import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1">
              <p className="text-blue-400 font-semibold text-lg mb-2 tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 leading-tight">
                Alex Johnson
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-400 mb-6">
                Full Stack Developer
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                I build exceptional digital experiences. Passionate about crafting clean,
                efficient, and user-friendly web applications with modern technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/projects"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  View Projects
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Contact Me
                  <Mail size={18} />
                </Link>
                <a
                  href="#"
                  className="flex items-center gap-2 border border-slate-600 text-slate-300 hover:bg-slate-700/50 font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Resume
                  <Download size={18} />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-5">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 opacity-30 blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl w-full max-w-sm lg:max-w-md">
                  <img
                    src="/image-1.jpg"
                    alt="Document"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50 border-y border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '10+', label: 'Technologies' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
              'Docker', 'AWS', 'GraphQL', 'Next.js', 'Tailwind CSS',
              'MongoDB', 'Redis', 'Git', 'REST APIs', 'Figma'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-sm hover:border-blue-500 hover:text-blue-400 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

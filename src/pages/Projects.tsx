import { ExternalLink, Github, Star } from 'lucide-react';
import clsx from 'clsx';

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, checkout, and payment integration.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style project management tool with real-time collaboration features and team workspaces.',
    tags: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with data visualization, reporting, and export capabilities.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Weather App',
    description: 'A clean weather application with location-based forecasts, hourly and weekly predictions.',
    tags: ['React', 'TypeScript', 'REST API'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description: 'A markdown-based blog platform with syntax highlighting, tags, and search functionality.',
    tags: ['Next.js', 'MDX', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with rooms, direct messages, file sharing, and emoji reactions.',
    tags: ['React', 'Socket.io', 'Node.js', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
];

export default function Projects() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">My Projects</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of projects I've built — from full-stack applications to open-source tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={clsx(
                'bg-slate-800/60 border rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-200 group',
                project.featured ? 'border-blue-500/50' : 'border-slate-700'
              )}
            >
              {/* Title Row */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="flex items-center gap-1 text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full flex-shrink-0">
                    <Star size={10} fill="currentColor" />
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-2 border-t border-slate-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={15} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

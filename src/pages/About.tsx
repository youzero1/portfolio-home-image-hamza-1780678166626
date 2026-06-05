import { User, Briefcase, GraduationCap, Heart } from 'lucide-react';

type TimelineItem = {
  year: string;
  title: string;
  org: string;
  description: string;
};

const experience: TimelineItem[] = [
  {
    year: '2022 – Present',
    title: 'Senior Full Stack Developer',
    org: 'Tech Corp Inc.',
    description: 'Leading development of scalable web applications using React, Node.js, and AWS.',
  },
  {
    year: '2020 – 2022',
    title: 'Full Stack Developer',
    org: 'StartUp Hub',
    description: 'Built and maintained multiple client-facing applications using modern web technologies.',
  },
  {
    year: '2018 – 2020',
    title: 'Frontend Developer',
    org: 'Digital Agency',
    description: 'Developed responsive web interfaces and improved UX for client projects.',
  },
];

const education: TimelineItem[] = [
  {
    year: '2014 – 2018',
    title: 'B.Sc. Computer Science',
    org: 'State University',
    description: 'Graduated with honors. Specialized in software engineering and algorithms.',
  },
];

export default function About() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About Me</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A passionate developer who loves turning complex problems into simple, elegant solutions.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 mb-12 flex flex-col sm:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center">
              <User size={40} className="text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Alex Johnson</h2>
            <p className="text-blue-400 font-medium mb-4">Full Stack Developer · Remote</p>
            <p className="text-slate-400 leading-relaxed">
              I'm a full-stack developer with over 5 years of experience building web applications.
              I specialize in JavaScript/TypeScript ecosystems, particularly React and Node.js.
              When I'm not coding, I enjoy hiking, photography, and contributing to open-source projects.
            </p>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((item) => (
              <div key={item.title} className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors duration-200">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium">{item.year}</span>
                </div>
                <p className="text-blue-400 text-sm font-medium mb-2">{item.org}</p>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.title} className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors duration-200">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium">{item.year}</span>
                </div>
                <p className="text-blue-400 text-sm font-medium mb-2">{item.org}</p>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Heart className="text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-white">Interests</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Open Source', 'Hiking', 'Photography', 'AI/ML', 'Game Dev', 'Music', 'Reading', 'Travel'].map((interest) => (
              <span key={interest} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-sm">
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

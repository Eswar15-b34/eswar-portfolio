import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white">
      <nav className="fixed inset-x-0 top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-white/10 transition hover:ring-purple-400">
              <Image src="/profile.png" alt="Eswar Koduru avatar" width={40} height={40} className="h-10 w-10 object-cover object-center" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-purple-300">ESWAR KODURU</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <a className="transition hover:text-white" href="#home">Home</a>
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#skills">Skills</a>
            <a className="transition hover:text-white" href="#projects">Projects</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center px-6 pt-28">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8 fade-in">
            <span className="inline-flex rounded-full bg-[rgba(56,210,138,0.08)] px-4 py-2 text-sm uppercase tracking-[0.3em] accent-text">Aspiring GenAI Engineer</span>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
              Hi, I’m <span className="text-white">Eswar Koduru</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-gray-400">
              I build cloud-native workflows, intelligent prototypes, and product-focused AI applications that solve real problems.
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full btn-accent px-6 py-3 text-sm font-semibold transition hover:brightness-95">Download CV</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full btn-outline-accent px-6 py-3 text-sm font-semibold transition hover:border-opacity-100">Hire Me</a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 pt-6">
              {[
                { label: 'Industry focus', value: 'GenAI & Cloud' },
                { label: 'Experience', value: 'AI product engineering' },
                { label: 'University', value: 'SR University' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border accent-border bg-[#0e1114] p-6 text-sm text-gray-300">
                  <p className="uppercase tracking-[0.25em] text-xs accent-text">{item.label}</p>
                  <p className="mt-3 text-white font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <div className="relative slide-up w-[420px] rounded-[1.25rem] overflow-hidden border border-white/8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-transform hover:scale-105">
              <Image src="/profile.png" alt="Eswar Koduru" width={720} height={900} className="w-full h-full object-cover object-center" priority />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
          <div className="space-y-6">
            <p className="text-purple-400 uppercase tracking-[0.35em] text-sm">About Me</p>
            <h3 className="text-4xl font-semibold">Strategic AI student building product-ready experiences.</h3>
            <p className="text-gray-400 leading-8">
              B.Tech CSE (AI/ML) student at SR University with strong technical foundations in Python, machine learning, cloud systems, and software architecture.
            </p>
            <p className="text-gray-400 leading-8">
              I focus on turning research-driven concepts into intuitive interfaces and dependable automation systems that scale.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#11141b] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Education</p>
                <p className="mt-3 text-white font-semibold">SR University</p>
                <p className="text-gray-400">B.Tech in Computer Science & Engineering (AI/ML)</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Strengths</p>
                <p className="mt-3 text-white font-semibold">Python • AI • Cloud Automation</p>
                <p className="text-gray-400">Building systems with strong data foundations and modern deployment patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 bg-[#05060a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] accent-text">Skills</p>
              <h3 className="text-4xl font-semibold mt-3">Capabilities</h3>
            </div>
            <p className="max-w-xl text-gray-400">Key skills, frameworks, and technical strengths I rely on to ship polished solutions.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Programming',
                skills: ['Python', 'C', 'JavaScript'],
              },
              {
                title: 'Cloud & AI',
                skills: ['AWS', 'Azure', 'Machine Learning'],
              },
              {
                title: 'Engineering',
                skills: ['Node.js', 'MongoDB', 'OpenCV'],
              },
            ].map((block) => (
              <div key={block.title} className="slide-up rounded-[2rem] border border-white/10 bg-[#11141b] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition hover:-translate-y-2">
                <h4 className="text-2xl font-semibold mb-4">{block.title}</h4>
                <div className="space-y-3 text-gray-400">
                  {block.skills.map((skill) => (
                    <div key={skill} className="rounded-2xl bg-white/5 px-4 py-3">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-purple-400 uppercase tracking-[0.35em] text-sm">Projects</p>
            <h3 className="text-4xl font-semibold mt-3">Featured work</h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: 'Blogify',
                description: 'Full-stack blogging platform built with HTML, CSS, Node.js, and MongoDB.',
                highlight: 'User-focused content architecture and admin workflows.',
              },
              {
                title: 'AI Attendance System',
                description: 'Attendance system using OpenCV, face recognition, and voice authentication.',
                highlight: 'Automated verification with reliable identity matching.',
              },
            ].map((project) => (
              <div key={project.title} className="slide-up rounded-[2rem] border border-white/10 bg-[#11141b] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition hover:-translate-y-2">
                <span className="text-purple-400 text-sm uppercase tracking-[0.3em]">Project</span>
                <h4 className="text-3xl font-semibold mt-4 mb-4">{project.title}</h4>
                <p className="text-gray-400 leading-7">{project.description}</p>
                <p className="mt-5 text-gray-300">{project.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#05060a]">
        <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-2">
          <div className="slide-up rounded-[2rem] border border-white/10 bg-[#11141b] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <p className="text-sm uppercase tracking-[0.35em] accent-text">Certifications</p>
            <h3 className="text-3xl font-semibold mt-4 mb-6">Professional development</h3>
            <ul className="space-y-4 text-gray-400">
              <li>AWS Cloud Foundations</li>
              <li>AWS Cloud Development</li>
              <li>AWS Cloud Security Builder</li>
              <li>AWS Cloud Web Application Builder</li>
              <li>Azure AI Fundamentals</li>
              <li>CCNA Introduction to Networks</li>
            </ul>
          </div>
          <div className="slide-up rounded-[2rem] border border-white/10 bg-[#11141b] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <p className="text-sm uppercase tracking-[0.35em] accent-text">Education</p>
            <h3 className="text-3xl font-semibold mt-4 mb-6">SR University</h3>
            <p className="text-gray-400 leading-7">B.Tech in Computer Science & Engineering with AI/ML specialization.</p>
            <p className="text-purple-300 mt-6 font-semibold">CGPA: 9.607 / 10.0</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-[1.8fr_1fr] items-start">
          <div className="slide-up rounded-[2rem] border border-white/10 bg-[#11141b] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <p className="text-purple-400 uppercase tracking-[0.35em] text-sm">Contact</p>
            <h3 className="text-4xl font-semibold mt-4 mb-6">Let’s build something impactful.</h3>
            <p className="text-gray-400 leading-7">Open to internships, AI collaborations, or technical projects that combine strong engineering and intelligent design.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-purple-600 p-10 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <p className="text-white font-semibold mb-4">Get in touch</p>
            <p className="text-gray-100 mb-3">📧 eswarreddykoduru@gmail.com</p>
            <p className="text-gray-100 mb-3">📞 +91 9573786379</p>
            <p className="text-gray-100">📍 Nellore, Andhra Pradesh</p>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Home() {
  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eswar-koduru' },
    { name: 'GitHub', url: 'https://github.com/Eswar15-b34' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Eswar15-b34' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/Eswar15-b34' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/eswarreddykoduru/' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/eswarreddykoduru' },
  ];

  const technicalSkills = [
    { category: 'Programming', items: 'Java, Basic Python, Basic C' },
    { category: 'Computer Science', items: 'Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, DBMS' },
    { category: 'Development', items: 'HTML, CSS, JavaScript, Node.js, Web Development, REST APIs' },
    { category: 'Databases', items: 'MongoDB, MySQL' },
    { category: 'AI / ML', items: 'Machine Learning, Deep Learning' },
    { category: 'Cloud', items: 'AWS, Microsoft Azure' },
    { category: 'Tools', items: 'Git, GitHub' },
  ];

  const projects = [
    {
      title: 'CodeFocus — AI-Powered Developer Growth Platform',
      techStack: 'Java 21 | Backend Development | AI/GenAI | Web Development | Database',
      points: [
        'Building a developer growth platform integrating career goals, skill-gap analysis, learning plans, DSA practice, focus sessions, projects, and performance tracking.',
        'Developing the backend in Java 21 with modular architecture, REST-based services, data management, and personalized learning features.',
      ],
    },
    {
      title: 'AI-Based Attendance System',
      techStack: 'Python | OpenCV | Speech Recognition | Computer Vision | Web Technologies',
      points: [
        'Developed an attendance system combining face detection and voice recognition for student identification through webcam and microphone input.',
        'Integrated Python AI/ML components with an HTML/CSS/JavaScript interface to automate attendance recording.',
      ],
    },
    {
      title: 'Blogify — Blogging Web Application',
      techStack: 'HTML | CSS | Node.js | MongoDB',
      points: [
        'Developed a web application for creating and sharing blogs, thoughts, and lifestyle content.',
        'Implemented backend functionality with Node.js and persistent data storage using MongoDB.',
      ],
    },
  ];

  const certifications = [
    'AWS Academy Graduate — Cloud Foundations',
    'AWS Academy Graduate — Cloud Development',
    'Microsoft Azure AI Fundamentals',
    'CCNA — Introduction to Networks',
  ];

  const achievements = [
    'Smart India Hackathon (SIH) — Participated',
    'Academic Awards — Recognized for academic performance',
  ];

  return (
    <div className="min-h-screen bg-[#0d0e11] text-[#ededed] font-sans antialiased selection:bg-neutral-800 selection:text-white">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0d0e11]/90 backdrop-blur-md border-b border-[#232730]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold text-sm tracking-tight text-white hover:text-gray-300 transition">
            KODURU ESWAR REDDY
          </a>
          <div className="flex items-center gap-5 text-xs text-gray-400">
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#certifications" className="hover:text-white transition">Certifications</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Resume-Style Container */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Header Section */}
        <header className="border-b border-[#232730] pb-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            KODURU ESWAR REDDY
          </h1>
          <p className="text-sm sm:text-base font-medium text-gray-300 mt-2">
            Software Engineer | Java | Data Structures &amp; Algorithms | AI/ML
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 text-xs text-gray-400 mt-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gray-500" />
              Nellore, Andhra Pradesh, India
            </span>
            <span>•</span>
            <a href="tel:+919573786379" className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-gray-500" />
              +91 9573786379
            </a>
            <span>•</span>
            <a href="mailto:eswarreddykoduru@gmail.com" className="flex items-center gap-1.5 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-gray-500" />
              eswarreddykoduru@gmail.com
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4 pt-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-gray-300 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition"
              >
                {link.name}
                <ExternalLink className="w-2.5 h-2.5 text-gray-500" />
              </a>
            ))}
          </div>
        </header>

        {/* Education Section */}
        <section id="education" className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 border-b border-[#232730] pb-1.5 font-bold">
            EDUCATION
          </h2>
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-base font-semibold text-white">SR University, Warangal</h3>
              <span className="text-xs text-gray-400 font-mono">2024 – 2028</span>
            </div>
            <p className="text-sm text-gray-300">
              B.Tech — Computer Science &amp; Engineering (AI/ML)
            </p>
            <p className="text-xs text-gray-400 mt-1">
              CGPA: <span className="text-gray-200 font-medium">9.435 / 10.0</span>
            </p>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 border-b border-[#232730] pb-1.5 font-bold">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-2.5 text-sm">
            {technicalSkills.map((skill) => (
              <div key={skill.category} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-4">
                <span className="text-gray-400 font-medium text-xs sm:text-sm">{skill.category}:</span>
                <span className="text-gray-200 text-xs sm:text-sm">{skill.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 border-b border-[#232730] pb-1.5 font-bold">
            PROJECTS
          </h2>

          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.title} className="space-y-2">
                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  {project.techStack}
                </p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 border-b border-[#232730] pb-1.5 font-bold">
            CERTIFICATIONS
          </h2>
          <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-gray-300">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 border-b border-[#232730] pb-1.5 font-bold">
            ACHIEVEMENTS
          </h2>
          <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs sm:text-sm text-gray-300">
            {achievements.map((ach) => (
              <li key={ach}>{ach}</li>
            ))}
          </ul>
        </section>

        {/* Additional Section */}
        <section id="additional" className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 border-b border-[#232730] pb-1.5 font-bold">
            ADDITIONAL
          </h2>
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-4">
              <span className="text-gray-400 font-medium">Career Focus:</span>
              <span className="text-gray-200">Software Engineering, Backend Development, AI/ML, Generative AI</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-4">
              <span className="text-gray-400 font-medium">Core Strengths:</span>
              <span className="text-gray-200">Problem Solving, Teamwork, Research &amp; Analysis</span>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="border-t border-[#232730] pt-8 pb-12 text-center text-xs text-gray-500 space-y-3">
          <p className="text-gray-400">
            KODURU ESWAR REDDY • <a href="mailto:eswarreddykoduru@gmail.com" className="hover:text-white transition underline">eswarreddykoduru@gmail.com</a> • <a href="tel:+919573786379" className="hover:text-white transition">+91 9573786379</a>
          </p>
          <p>© {new Date().getFullYear()} Koduru Eswar Reddy</p>
        </footer>
      </main>
    </div>
  );
}

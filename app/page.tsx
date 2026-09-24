'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  GraduationCap,
  Code,
  FolderGit2,
  Award,
  Trophy,
  Sparkles,
  Layers
} from 'lucide-react';

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('eswarreddykoduru@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const links = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eswar-koduru' },
    { name: 'GitHub', url: 'https://github.com/Eswar15-b34' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Eswar15-b34' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/Eswar15-b34' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/eswarreddykoduru/' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/eswarreddykoduru' },
  ];

  const skillGroups = [
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
      tech: 'Java 21 | Backend Development | AI/GenAI | Web Development | Database',
      points: [
        'Building a developer growth platform integrating career goals, skill-gap analysis, learning plans, DSA practice, focus sessions, projects, and performance tracking.',
        'Developing the backend in Java 21 with modular architecture, REST-based services, data management, and personalized learning features.',
      ],
    },
    {
      title: 'AI-Based Attendance System',
      tech: 'Python | OpenCV | Speech Recognition | Computer Vision | Web Technologies',
      points: [
        'Developed an attendance system combining face detection and voice recognition for student identification through webcam and microphone input.',
        'Integrated Python AI/ML components with an HTML/CSS/JavaScript interface to automate attendance recording.',
      ],
    },
    {
      title: 'Blogify — Blogging Web Application',
      tech: 'HTML | CSS | Node.js | MongoDB',
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
    {
      title: 'Smart India Hackathon (SIH)',
      detail: 'Participated',
    },
    {
      title: 'Academic Awards',
      detail: 'Recognized for academic performance',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d11] text-zinc-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0d0d11]/90 backdrop-blur border-b border-zinc-800/70">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-semibold text-white tracking-tight text-sm hover:text-zinc-300 transition">
            KODURU ESWAR REDDY
          </a>
          <div className="flex items-center gap-5 text-xs text-zinc-400">
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#certifications" className="hover:text-white transition">Certifications</a>
            <a href="#achievements" className="hover:text-white transition">Achievements</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16" id="top">
        {/* Header / Intro */}
        <section className="space-y-4 pb-8 border-b border-zinc-800/80">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            KODURU ESWAR REDDY
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-medium">
            Software Engineer | Java | Data Structures &amp; Algorithms | AI/ML
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-zinc-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-zinc-500" />
              Nellore, Andhra Pradesh, India
            </span>
            <span>•</span>
            <a href="tel:+919573786379" className="flex items-center gap-1.5 hover:text-zinc-200 transition">
              <Phone className="w-4 h-4 text-zinc-500" />
              +91 9573786379
            </a>
            <span>•</span>
            <a href="mailto:eswarreddykoduru@gmail.com" className="flex items-center gap-1.5 hover:text-zinc-200 transition">
              <Mail className="w-4 h-4 text-zinc-500" />
              eswarreddykoduru@gmail.com
            </a>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition"
              >
                <span>{link.name}</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            ))}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition"
            >
              {copiedEmail ? <Check className="w-3 h-3 text-zinc-300" /> : <Copy className="w-3 h-3 text-zinc-500" />}
              <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
            </button>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="space-y-4">
          <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
            EDUCATION
          </h2>
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-5 space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-base font-semibold text-white">SR University, Warangal</h3>
              <span className="text-xs text-zinc-400 font-mono">2024–2028</span>
            </div>
            <p className="text-sm text-zinc-300">
              B.Tech — Computer Science &amp; Engineering (AI/ML)
            </p>
            <p className="text-xs font-semibold text-zinc-400 pt-1">
              CGPA: 9.435 / 10.0
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" className="space-y-4">
          <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
            TECHNICAL SKILLS
          </h2>
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-5 divide-y divide-zinc-800/60">
            {skillGroups.map((group) => (
              <div key={group.category} className="py-2.5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 text-sm">
                <span className="sm:col-span-4 font-medium text-zinc-400">{group.category}:</span>
                <span className="sm:col-span-8 text-zinc-200">{group.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-4">
          <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
            PROJECTS
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-5 space-y-3"
              >
                <div>
                  <h3 className="text-base font-semibold text-white">{project.title}</h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">{project.tech}</p>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="space-y-4">
          <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
            CERTIFICATIONS
          </h2>
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-zinc-300 list-disc list-inside">
              {certifications.map((cert) => (
                <li key={cert} className="leading-relaxed">{cert}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="space-y-4">
          <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
            ACHIEVEMENTS
          </h2>
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-zinc-300 list-disc list-inside">
              {achievements.map((item) => (
                <li key={item.title} className="leading-relaxed">
                  <strong className="text-white font-medium">{item.title}</strong> — {item.detail}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Additional */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
            ADDITIONAL
          </h2>
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-lg p-5 space-y-2.5 text-sm">
            <div>
              <strong className="text-zinc-400 font-medium">Career Focus: </strong>
              <span className="text-zinc-200">Software Engineering, Backend Development, AI/ML, Generative AI</span>
            </div>
            <div>
              <strong className="text-zinc-400 font-medium">Core Strengths: </strong>
              <span className="text-zinc-200">Problem Solving, Teamwork, Research &amp; Analysis</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-8 px-6 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Koduru Eswar Reddy. All rights reserved.</p>
      </footer>
    </div>
  );
}

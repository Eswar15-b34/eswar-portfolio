'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Flame,
  ArrowUpRight,
  Download,
  Copy,
  Check,
  ChevronRight,
  Server,
  Network
} from 'lucide-react';

// Custom SVG Brand Icons
function GithubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function LeetcodeIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.664 5.94 5.94 0 0 0 3.343-.572 5.93 5.93 0 0 0 2.405-2.146l3.98-4.26a1.375 1.375 0 1 0-2.016-1.879l-3.98 4.256a3.18 3.18 0 0 1-1.29 1.15 3.197 3.197 0 0 1-1.802.308 3.195 3.195 0 0 1-2.59-1.97 3.167 3.167 0 0 1-.188-.546 3.204 3.204 0 0 1-.033-1.272c.046-.355.152-.699.313-1.014a3.178 3.178 0 0 1 .73-1.271l3.854-4.126 5.406-5.788A1.378 1.378 0 0 0 13.483 0z" />
      <path d="M9.857 14.93a1.375 1.375 0 0 1 .972-2.347h11.796a1.375 1.375 0 0 1 0 2.75H10.829a1.375 1.375 0 0 1-.972-.403z" />
    </svg>
  );
}

function CodeforcesIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5zM12 3a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-3 0v-15A1.5 1.5 0 0 1 12 3zm7.5 7.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6a1.5 1.5 0 0 1 1.5-1.5z" />
    </svg>
  );
}

function GeeksforGeeksIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.172 13.515a4.707 4.707 0 0 1-1.372 2.793 4.887 4.887 0 0 1-3.48 1.402 4.908 4.908 0 0 1-4.89-4.39h5.183v-1.616H9.412a4.912 4.912 0 0 1 4.908-4.41c1.332 0 2.56.52 3.48 1.403a4.7 4.7 0 0 1 1.372 2.793h2.388a7.126 7.126 0 0 0-2.18-4.47A7.26 7.26 0 0 0 14.32 5a7.28 7.28 0 0 0-7.29 7.32c0 4.04 3.25 7.32 7.29 7.32 2.02 0 3.87-.79 5.24-2.08a7.12 7.12 0 0 0 2.18-4.46h-2.568z" />
    </svg>
  );
}

function HackerRankIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm3.84 15.65h-1.63v-3.03h-4.42v3.03H8.16V8.35h1.63v2.85h4.42V8.35h1.63v7.3z"/>
    </svg>
  );
}

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('eshwarreddykoduru@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const codingProfiles = [
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/eswar-koduru',
      badge: 'LinkedIn Profile',
      color: 'hover:text-blue-400 hover:border-blue-500/50',
    },
    {
      name: 'GitHub',
      icon: GithubIcon,
      url: 'https://github.com/Eswar15-b34',
      badge: 'GitHub Profile',
      color: 'hover:text-white hover:border-gray-500',
    },
    {
      name: 'LeetCode',
      icon: LeetcodeIcon,
      url: 'https://leetcode.com/u/Eswar15-b34',
      badge: 'LeetCode Profile',
      color: 'hover:text-amber-400 hover:border-amber-500/50',
    },
    {
      name: 'Codeforces',
      icon: CodeforcesIcon,
      url: 'https://codeforces.com/profile/Eswar15-b34',
      badge: 'Codeforces Profile',
      color: 'hover:text-red-400 hover:border-red-500/50',
    },
    {
      name: 'GeeksforGeeks',
      icon: GeeksforGeeksIcon,
      url: 'https://www.geeksforgeeks.org/user/eswarreddykoduru/',
      badge: 'GeeksforGeeks Profile',
      color: 'hover:text-emerald-400 hover:border-emerald-500/50',
    },
    {
      name: 'HackerRank',
      icon: HackerRankIcon,
      url: 'https://www.hackerrank.com/profile/eswarreddykoduru',
      badge: 'HackerRank Profile',
      color: 'hover:text-green-400 hover:border-green-500/50',
    },
  ];

  // Exact Technical Skills from Resume
  const technicalSkills = [
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Java', 'Basic Python', 'Basic C'],
    },
    {
      title: 'Computer Science',
      icon: Cpu,
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Operating Systems',
        'DBMS',
      ],
    },
    {
      title: 'Development',
      icon: Server,
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Web Development', 'REST APIs'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL'],
    },
    {
      title: 'AI / ML',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning'],
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      skills: ['AWS', 'Microsoft Azure', 'Git', 'GitHub'],
    },
  ];

  // Exact Projects from Resume
  const projects = [
    {
      title: 'CodeFocus — AI-Powered Developer Growth Platform',
      techStack: 'Java 21 | Backend Development | AI/GenAI | Web Development | Database',
      points: [
        'Building a developer growth platform integrating career goals, skill-gap analysis, learning plans, DSA practice, focus sessions, projects, and performance tracking.',
        'Developing the backend in Java 21 with modular architecture, REST-based services, data management, and personalized learning features.',
      ],
      tags: ['Java 21', 'Backend Development', 'AI/GenAI', 'Web Development', 'Database'],
    },
    {
      title: 'AI-Based Attendance System',
      techStack: 'Python | OpenCV | Speech Recognition | Computer Vision | Web Technologies',
      points: [
        'Developed an attendance system combining face detection and voice recognition for student identification through webcam and microphone input.',
        'Integrated Python AI/ML components with an HTML/CSS/JavaScript interface to automate attendance recording.',
      ],
      tags: ['Python', 'OpenCV', 'Speech Recognition', 'Computer Vision', 'Web Technologies'],
    },
    {
      title: 'Blogify — Blogging Web Application',
      techStack: 'HTML | CSS | Node.js | MongoDB',
      points: [
        'Developed a web application for creating and sharing blogs, thoughts, and lifestyle content.',
        'Implemented backend functionality with Node.js and persistent data storage using MongoDB.',
      ],
      tags: ['HTML', 'CSS', 'Node.js', 'MongoDB'],
    },
  ];

  // Exact Certifications from Resume
  const certifications = [
    {
      title: 'AWS Academy Graduate — Cloud Foundations',
      issuer: 'AWS Academy',
      icon: Cloud,
    },
    {
      title: 'AWS Academy Graduate — Cloud Development',
      issuer: 'AWS Academy',
      icon: Layers,
    },
    {
      title: 'Microsoft Azure AI Fundamentals',
      issuer: 'Microsoft',
      icon: Brain,
    },
    {
      title: 'CCNA — Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      icon: Network,
    },
  ];

  // Exact Achievements from Resume
  const achievements = [
    {
      title: 'Smart India Hackathon (SIH)',
      detail: 'Participated',
      icon: Sparkles,
    },
    {
      title: 'Academic Awards',
      detail: 'Recognized for academic performance',
      icon: Award,
    },
  ];

  return (
    <main className="min-h-screen bg-[#08090d] text-gray-100 relative">
      {/* Background ambient accents */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Navigation Header */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-[#08090d]/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[1.5px] transition group-hover:scale-105">
              <div className="h-full w-full bg-[#0d1017] rounded-[10px] flex items-center justify-center font-mono font-bold text-sm text-purple-300">
                ER
              </div>
            </div>
            <div>
              <p className="text-sm font-bold tracking-wider text-white group-hover:text-purple-300 transition">
                KODURU ESWAR REDDY
              </p>
              <p className="text-[11px] text-gray-400 font-mono tracking-tight">Software Engineer | AI/ML</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-300">
            <a className="transition hover:text-purple-400" href="#home">Home</a>
            <a className="transition hover:text-purple-400" href="#education">Education</a>
            <a className="transition hover:text-purple-400" href="#skills">Skills</a>
            <a className="transition hover:text-purple-400" href="#projects">Projects</a>
            <a className="transition hover:text-purple-400" href="#certifications">Certifications</a>
            <a className="transition hover:text-purple-400" href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:eshwarreddykoduru@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-purple-300 transition hover:bg-purple-500/20 hover:border-purple-500/60"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-12 items-center">
          <div className="space-y-7 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Software Engineer | Java | DSA | AI/ML
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                KODURU <span className="gradient-accent-text">ESWAR REDDY</span>
              </h1>
              <h2 className="text-lg sm:text-2xl font-semibold text-gray-300">
                Software Engineer | Java | Data Structures &amp; Algorithms | AI/ML
              </h2>
            </div>

            {/* Resume Contact Details Strip */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-purple-400" />
                Nellore, Andhra Pradesh, India
              </span>
              <span>•</span>
              <a href="tel:+919573786379" className="flex items-center gap-1.5 hover:text-white transition">
                <Phone className="w-4 h-4 text-cyan-400" />
                +91 9573786379
              </a>
              <span>•</span>
              <a href="mailto:eshwarreddykoduru@gmail.com" className="flex items-center gap-1.5 hover:text-white transition">
                <Mail className="w-4 h-4 text-purple-400" />
                eshwarreddykoduru@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition hover:brightness-110"
              >
                <Code2 className="w-4 h-4" />
                View Projects
              </a>
              <a
                href="mailto:eshwarreddykoduru@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-purple-400/50"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Quick Resume Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="glass-card rounded-2xl p-4 text-left">
                <div className="text-xs uppercase tracking-wider text-purple-400 font-mono">University</div>
                <div className="text-base font-bold text-white mt-1">SR University</div>
                <div className="text-[11px] text-gray-400">Warangal</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-left">
                <div className="text-xs uppercase tracking-wider text-cyan-400 font-mono">Degree</div>
                <div className="text-base font-bold text-white mt-1">B.Tech CSE</div>
                <div className="text-[11px] text-gray-400">AI/ML (2024–2028)</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-left">
                <div className="text-xs uppercase tracking-wider text-emerald-400 font-mono">CGPA</div>
                <div className="text-base font-bold text-white mt-1">9.435 / 10.0</div>
                <div className="text-[11px] text-gray-400">Scholastic Score</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-left">
                <div className="text-xs uppercase tracking-wider text-indigo-400 font-mono">Focus</div>
                <div className="text-base font-bold text-white mt-1">Java &amp; DSA</div>
                <div className="text-[11px] text-gray-400">Backend &amp; AI/ML</div>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px]">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-purple-600 via-cyan-500 to-indigo-600 opacity-30 blur-lg transition duration-500" />
              
              <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 p-4 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#11141f]">
                  <Image
                    src="/profile.png"
                    alt="Koduru Eswar Reddy"
                    fill
                    className="object-cover object-top hover:scale-105 transition duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <div className="glass-card rounded-xl p-3 border border-white/15 bg-[#08090d]/90 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">Koduru Eswar Reddy</span>
                        <span className="text-[10px] font-mono text-purple-300">Nellore, India</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-1">
                        B.Tech CSE (AI/ML) • SR University
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[11px] font-mono text-purple-300">Java</span>
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">DSA</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">AI / ML</span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-300">Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coding Profiles Banner */}
      <section className="py-8 px-6 border-y border-white/5 bg-[#0c0e15]/60">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-mono mb-6">
            Profiles
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {codingProfiles.map((profile) => {
              const IconComponent = profile.icon;
              return (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card glass-card-hover rounded-xl p-4 flex flex-col items-center text-center group border border-white/5 transition duration-300 ${profile.color}`}
                >
                  <IconComponent className="w-6 h-6 mb-2 text-gray-400 group-hover:scale-110 transition duration-300" />
                  <span className="text-xs font-bold text-white">{profile.name}</span>
                  <span className="text-[10px] text-gray-400 mt-0.5 truncate max-w-full font-mono">{profile.badge}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education & Additional Section */}
      <section id="education" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-[0.35em] text-purple-400 font-mono">Academic</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Education &amp; Focus</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-3" />
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Education Card */}
            <div className="lg:col-span-7 glass-card rounded-2xl p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">Education</span>
                  <h3 className="text-2xl font-bold text-white">SR University, Warangal</h3>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <p className="text-base font-semibold text-white">
                    B.Tech — Computer Science &amp; Engineering (AI/ML)
                  </p>
                  <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
                    2024–2028
                  </span>
                </div>
                <p className="text-sm font-semibold text-emerald-400 font-mono">
                  CGPA: 9.435 / 10.0
                </p>
              </div>
            </div>

            {/* Additional: Career Focus & Core Strengths */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-2 text-purple-400 text-sm font-bold uppercase tracking-wider font-mono mb-2">
                  <Briefcase className="w-4 h-4" />
                  Career Focus
                </div>
                <p className="text-sm text-gray-300">
                  Software Engineering, Backend Development, AI/ML, Generative AI
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-wider font-mono mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Core Strengths
                </div>
                <p className="text-sm text-gray-300">
                  Problem Solving, Teamwork, Research &amp; Analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#06070b]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-400 font-mono">Skills</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Technical Skills</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-3" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technicalSkills.map((category) => {
              const IconComp = category.icon;
              return (
                <div
                  key={category.title}
                  className="glass-card glass-card-hover rounded-2xl p-7 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl bg-white/[0.04] border border-white/[0.08] px-3 py-2 text-xs font-medium text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-[0.35em] text-purple-400 font-mono">Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Projects</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card glass-card-hover rounded-2xl border border-white/10 p-7 flex flex-col justify-between relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition" />

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-300/90 mt-1 mb-5">
                    {project.techStack}
                  </p>

                  <ul className="space-y-2.5 mb-6 border-t border-white/5 pt-4">
                    {project.points.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono rounded-md bg-white/5 px-2.5 py-1 text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section id="certifications" className="py-24 px-6 bg-[#06070b]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-[0.35em] text-emerald-400 font-mono">Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Certifications &amp; Achievements</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-3" />
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Certifications */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                <Cloud className="w-5 h-5 text-cyan-400" />
                Certifications
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert) => {
                  const CertIcon = cert.icon;
                  return (
                    <div
                      key={cert.title}
                      className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex items-start gap-3.5"
                    >
                      <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0">
                        <CertIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white leading-snug">{cert.title}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-emerald-400" />
                Achievements
              </h3>

              <div className="space-y-4">
                {achievements.map((item) => {
                  const AchIcon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex items-start gap-4"
                    >
                      <div className="h-11 w-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 shrink-0">
                        <AchIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-gray-300 mt-1">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.35em] text-purple-400 font-mono">Contact</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">Get in Touch</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-3" />
          </div>

          <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase font-mono">Location</p>
                  <p className="text-xs font-semibold text-white">Nellore, Andhra Pradesh, India</p>
                </div>
              </div>

              <a
                href="tel:+919573786379"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition"
              >
                <div className="h-10 w-10 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase font-mono">Phone</p>
                  <p className="text-xs font-semibold text-white">+91 9573786379</p>
                </div>
              </a>

              <a
                href="mailto:eshwarreddykoduru@gmail.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/10 transition"
              >
                <div className="h-10 w-10 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] text-gray-400 uppercase font-mono">Email</p>
                  <p className="text-xs font-semibold text-white truncate">eshwarreddykoduru@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                <a
                  href="https://github.com/Eswar15-b34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 transition"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/eswar-koduru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://leetcode.com/u/Eswar15-b34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-amber-600 transition"
                  aria-label="LeetCode"
                >
                  <LeetcodeIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://codeforces.com/profile/Eswar15-b34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600 transition"
                  aria-label="Codeforces"
                >
                  <CodeforcesIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/eswarreddykoduru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-emerald-600 transition"
                  aria-label="GeeksforGeeks"
                >
                  <GeeksforGeeksIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/eswarreddykoduru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-green-600 transition"
                  aria-label="HackerRank"
                >
                  <HackerRankIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="flex gap-3">
                <a
                  href="mailto:eshwarreddykoduru@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:brightness-110 transition"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Send Email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 bg-[#050608]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center font-mono font-bold text-xs text-purple-300">
              ER
            </div>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} <strong className="text-white">Koduru Eswar Reddy</strong>. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-gray-400 font-mono">
            <a href="#home" className="hover:text-purple-400 transition">Back to Top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

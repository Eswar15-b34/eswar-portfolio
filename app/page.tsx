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
  BookOpen,
  Download,
  Copy,
  Check,
  ChevronRight,
  Server,
  Network
} from 'lucide-react';

// Custom Brand SVGs
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
    navigator.clipboard.writeText('eswarreddykoduru@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const codingProfiles = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      url: 'https://github.com/Eswar15-b34',
      badge: '@Eswar15-b34',
      color: 'hover:text-white hover:border-gray-500',
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      url: 'https://www.linkedin.com/in/eswar-koduru',
      badge: 'Eswar Koduru',
      color: 'hover:text-blue-400 hover:border-blue-500/50',
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
      badge: 'GFG Profile',
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      description: 'Core languages for systems, algorithms, and applications',
      skills: [
        { name: 'Java', level: 'Advanced / Java 21' },
        { name: 'Basic Python', level: 'AI / Scripting' },
        { name: 'Basic C', level: 'Systems Foundation' },
      ],
    },
    {
      title: 'Computer Science Core',
      icon: Cpu,
      description: 'Theoretical foundations & architectural fundamentals',
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Core Strength' },
        { name: 'Object-Oriented Programming (OOP)', level: 'Design & Architecture' },
        { name: 'Operating Systems (OS)', level: 'Process & Memory' },
        { name: 'DBMS', level: 'Relational & Querying' },
      ],
    },
    {
      title: 'Web & Backend Development',
      icon: Server,
      description: 'Modern full-stack web and API development',
      skills: [
        { name: 'Node.js', level: 'Backend Runtime' },
        { name: 'REST APIs', level: 'Web Services' },
        { name: 'JavaScript', level: 'ES6+ Fullstack' },
        { name: 'HTML5 & CSS3', level: 'Modern Frontend' },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      description: 'Persistent data architecture & querying',
      skills: [
        { name: 'MongoDB', level: 'NoSQL Document Store' },
        { name: 'MySQL', level: 'Relational SQL' },
      ],
    },
    {
      title: 'AI, ML & Computer Vision',
      icon: Brain,
      description: 'Intelligent models & multi-modal AI systems',
      skills: [
        { name: 'Machine Learning', level: 'Supervised/Unsupervised' },
        { name: 'Deep Learning', level: 'Neural Architectures' },
        { name: 'OpenCV & Computer Vision', level: 'Face & Visual Processing' },
        { name: 'Speech Recognition', level: 'Audio Input Pipeline' },
      ],
    },
    {
      title: 'Cloud & Developer Tools',
      icon: Cloud,
      description: 'Cloud infrastructure and version control',
      skills: [
        { name: 'AWS', level: 'Cloud Foundations' },
        { name: 'Microsoft Azure', level: 'AI Fundamentals' },
        { name: 'Git & GitHub', level: 'Version Control & CI/CD' },
      ],
    },
  ];

  const projects = [
    {
      title: 'CodeFocus — AI-Powered Developer Growth Platform',
      tagline: 'Flagship Platform',
      category: 'Java 21 • Backend Development • AI/GenAI • Database',
      period: 'Active Development',
      description:
        'Building an end-to-end developer growth platform designed to help engineers systematically advance their skills, prepare for technical interviews, and maintain productive momentum.',
      bullets: [
        'Building a developer growth platform integrating career goals, skill-gap analysis, learning plans, DSA practice, focus sessions, projects, and performance tracking.',
        'Developing the backend in Java 21 with modular architecture, REST-based services, data management, and personalized learning features.',
        'Engineered scalable data structures and services to track real-time coding metrics and automated learning milestones.',
      ],
      tags: ['Java 21', 'REST APIs', 'AI/GenAI', 'Modular Architecture', 'Database', 'DSA Analytics'],
      highlights: 'Java 21 Modular Backend + Personalized AI Engine',
    },
    {
      title: 'AI-Based Attendance System',
      tagline: 'Computer Vision & AI',
      category: 'Python • OpenCV • Speech Recognition • Web Technologies',
      period: 'Completed Project',
      description:
        'An intelligent, contactless multimodal biometric attendance platform combining facial recognition and speech identification for seamless student authentication.',
      bullets: [
        'Developed an attendance system combining face detection and voice recognition for student identification through webcam and microphone input.',
        'Integrated Python AI/ML components with an HTML/CSS/JavaScript interface to automate attendance recording.',
        'Reduced manual overhead and eliminated proxy attendance with real-time verification algorithms.',
      ],
      tags: ['Python', 'OpenCV', 'Speech Recognition', 'Computer Vision', 'HTML/CSS/JS', 'Automated Verification'],
      highlights: 'Dual Face & Voice Biometrics + Web Interface',
    },
    {
      title: 'Blogify — Blogging Web Application',
      tagline: 'Full-Stack Web App',
      category: 'HTML • CSS • Node.js • MongoDB',
      period: 'Completed Project',
      description:
        'A clean, responsive content publishing platform empowering writers to publish, organize, and discover articles, personal thoughts, and lifestyle stories.',
      bullets: [
        'Developed a web application for creating and sharing blogs, thoughts, and lifestyle content.',
        'Implemented backend functionality with Node.js and persistent data storage using MongoDB.',
        'Designed intuitive author workflows, responsive layout styling, and robust data schemas.',
      ],
      tags: ['Node.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'RESTful Routing'],
      highlights: 'Node.js Backend + MongoDB Data Pipeline',
    },
  ];

  const certifications = [
    {
      title: 'AWS Academy Graduate — Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      type: 'Cloud Architecture & Infrastructure',
      description: 'Comprehensive mastery of core AWS cloud services, compute, storage, security, and networking concepts.',
      icon: Cloud,
      tag: 'AWS Certified',
    },
    {
      title: 'AWS Academy Graduate — Cloud Development',
      issuer: 'Amazon Web Services (AWS)',
      type: 'Cloud Application Development',
      description: 'Hands-on training in developing, deploying, and optimizing cloud-native applications on the AWS ecosystem.',
      icon: Layers,
      tag: 'AWS Developer',
    },
    {
      title: 'Microsoft Azure AI Fundamentals',
      issuer: 'Microsoft',
      type: 'AI & Machine Learning on Azure',
      description: 'Fundamental understanding of machine learning workloads, computer vision, natural language processing, and conversational AI on Azure.',
      icon: Brain,
      tag: 'Azure AI',
    },
    {
      title: 'CCNA — Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      type: 'Networking & Protocols',
      description: 'In-depth knowledge of network architectures, IP addressing, Ethernet protocols, routing fundamentals, and connectivity.',
      icon: Network,
      tag: 'Cisco CCNA',
    },
  ];

  const achievements = [
    {
      title: 'Smart India Hackathon (SIH)',
      category: 'National Level Hackathon',
      role: 'Participant & Problem Solver',
      description:
        'Participated in India’s premier national hackathon, developing innovative digital solutions for real-world problem statements under high-intensity collaborative conditions.',
      icon: Sparkles,
    },
    {
      title: 'Academic Excellence Awards',
      category: 'Scholastic Recognition',
      role: 'Recognized for Academic Performance',
      description:
        'Consistently recognized for top-tier academic performance with an exceptional CGPA of 9.435 / 10.0 at SR University.',
      icon: Award,
    },
  ];

  return (
    <main className="min-h-screen bg-[#08090d] text-gray-100 relative">
      {/* Glow ambient background circles */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Navigation Header */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-[#08090d]/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 p-[1.5px] transition group-hover:scale-105">
              <div className="h-full w-full bg-[#0d1017] rounded-[10px] flex items-center justify-center font-mono font-bold text-sm text-purple-300">
                EK
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
            <a className="transition hover:text-purple-400" href="#about">About</a>
            <a className="transition hover:text-purple-400" href="#skills">Skills</a>
            <a className="transition hover:text-purple-400" href="#projects">Projects</a>
            <a className="transition hover:text-purple-400" href="#certifications">Certifications</a>
            <a className="transition hover:text-purple-400" href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:eswarreddykoduru@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-purple-300 transition hover:bg-purple-500/20 hover:border-purple-500/60"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-12 items-center">
          <div className="space-y-7 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to Software Engineering & AI/ML Opportunities
            </div>

            <div className="space-y-3">
              <p className="text-purple-400 font-mono text-sm tracking-widest uppercase">Hello, I&apos;m</p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Koduru <span className="gradient-accent-text">Eswar Reddy</span>
              </h1>
              <h2 className="text-lg sm:text-2xl font-semibold text-gray-300">
                Software Engineer <span className="text-purple-400">|</span> Java Developer <span className="text-cyan-400">|</span> DSA <span className="text-purple-400">|</span> AI/ML
              </h2>
            </div>

            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-gray-400">
              B.Tech Computer Science &amp; Engineering (AI/ML) student at <span className="text-white font-medium">SR University (CGPA: 9.435/10.0)</span>. Passionate about building robust backend architectures in <span className="text-purple-300 font-medium">Java 21</span>, mastering <span className="text-cyan-300 font-medium">Data Structures &amp; Algorithms</span>, and crafting intelligent <span className="text-emerald-300 font-medium">AI &amp; Computer Vision</span> solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition hover:brightness-110 hover:shadow-purple-600/40"
              >
                <Code2 className="w-4 h-4" />
                Explore Projects
              </a>
              <a
                href="mailto:eswarreddykoduru@gmail.com?subject=Opportunity%20Discussion%20with%20Koduru%20Eswar%20Reddy"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-purple-400/50"
              >
                <Mail className="w-4 h-4" />
                Hire / Contact Me
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
                title="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Quick Highlight Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="glass-card rounded-2xl p-4 text-left">
                <div className="text-xs uppercase tracking-wider text-purple-400 font-mono">Education</div>
                <div className="text-base font-bold text-white mt-1">9.435 CGPA</div>
                <div className="text-[11px] text-gray-400">SR University</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-left">
                <div className="text-xs uppercase tracking-wider text-cyan-400 font-mono">Specialization</div>
                <div className="text-base font-bold text-white mt-1">Java &amp; AI/ML</div>
                <div className="text-[11px] text-gray-400">DSA + Backends</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-left">
                <div className="text-xs uppercase tracking-wider text-emerald-400 font-mono">Credentials</div>
                <div className="text-base font-bold text-white mt-1">4+ Verified</div>
                <div className="text-[11px] text-gray-400">AWS &amp; Azure</div>
              </div>
              <div className="glass-card rounded-2xl p-4 text-left">
                <div className="text-xs uppercase tracking-wider text-indigo-400 font-mono">Hackathons</div>
                <div className="text-base font-bold text-white mt-1">SIH Participant</div>
                <div className="text-[11px] text-gray-400">National Level</div>
              </div>
            </div>
          </div>

          {/* Hero Profile Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px]">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-purple-600 via-cyan-500 to-indigo-600 opacity-30 blur-lg transition duration-500 group-hover:opacity-60" />
              
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
                  
                  {/* Floating Badges */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <div className="glass-card rounded-xl p-3 border border-white/15 bg-[#08090d]/90 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-semibold text-white">Koduru Eswar Reddy</span>
                        </div>
                        <span className="text-[10px] font-mono text-purple-300">Nellore, India</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-1">
                        B.Tech CSE (AI/ML) • Java 21 • Cloud &amp; DSA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Badges Row */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[11px] font-mono text-purple-300">Java 21</span>
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">DSA &amp; OOP</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">Python &amp; OpenCV</span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-300">AWS / Azure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coding & Professional Profiles Banner */}
      <section className="py-8 px-6 border-y border-white/5 bg-[#0c0e15]/60">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-mono mb-6">
            Find Me On Competitive &amp; Developer Platforms
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

      {/* About & Education Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-[0.35em] text-purple-400 font-mono">Overview</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">About &amp; Academic Background</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-3" />
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: Bio & Focus */}
            <div className="lg:col-span-7 space-y-6">
              <div className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Engineering Mindset &amp; Aspirations
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I am a driven Computer Science &amp; Engineering student specializing in <strong className="text-white">Artificial Intelligence &amp; Machine Learning</strong> at <strong className="text-purple-300">SR University, Warangal</strong> (2024–2028).
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With a strong passion for <strong className="text-white">Software Engineering</strong>, my core emphasis is on mastering <strong className="text-cyan-300">Java</strong>, <strong className="text-cyan-300">Data Structures &amp; Algorithms</strong>, object-oriented software design, and scalable backend architecture. I actively bridge backend engineering with modern AI/ML workflows to create practical, high-impact systems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Whether developing modular backend services in Java 21, designing vision-based multimodal biometric systems with OpenCV, or architecting cloud-native solutions on AWS and Azure, I prioritize clean architecture, performance, and real-world applicability.
                </p>
              </div>

              {/* Career Focus & Strengths */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-bold uppercase tracking-wider font-mono mb-3">
                    <Briefcase className="w-4 h-4" />
                    Career Focus
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                      Software Engineering
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                      Backend Development (Java 21)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                      AI/ML &amp; Generative AI
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                      Algorithmic Problem Solving
                    </li>
                  </ul>
                </div>

                <div className="glass-card rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-wider font-mono mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    Core Strengths
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Problem Solving &amp; Logic
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Teamwork &amp; Collaboration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Research &amp; Technical Analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Fast Learner &amp; Adaptability
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Academic Card & Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card rounded-2xl p-8 border border-white/10 bg-gradient-to-b from-purple-950/20 to-[#11141f] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-purple-400 font-mono">Current Degree</span>
                    <h4 className="text-xl font-bold text-white">SR University, Warangal</h4>
                  </div>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">Program</p>
                    <p className="text-base font-semibold text-white mt-0.5">
                      B.Tech — Computer Science &amp; Engineering (AI/ML)
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                      <p className="text-xs text-gray-400 uppercase font-mono">Duration</p>
                      <p className="text-sm font-bold text-white mt-1">2024 – 2028</p>
                    </div>
                    <div className="rounded-xl bg-purple-500/10 p-3 border border-purple-500/20">
                      <p className="text-xs text-purple-300 uppercase font-mono">CGPA Score</p>
                      <p className="text-sm font-extrabold text-purple-200 mt-1">9.435 / 10.0</p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                    <p className="text-xs text-gray-300 font-semibold mb-1">Key Focus Areas in Curriculum</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Data Structures &amp; Algorithms, Object-Oriented Programming, Operating Systems, Database Systems, Machine Learning Foundations, Deep Learning, Cloud Architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location & Contact Highlight */}
              <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-mono">Location</p>
                    <p className="text-sm font-semibold text-white">Nellore, Andhra Pradesh, India</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="rounded-full p-2 hover:bg-white/10 text-gray-400 hover:text-white transition"
                  aria-label="Go to contact section"
                >
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#06070b]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-cyan-400 font-mono">Expertise</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Technical Skills &amp; Stack</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-3" />
            </div>
            <p className="text-gray-400 max-w-md text-sm">
              Organized technical competencies across programming, core CS theory, AI/ML, cloud, and modern tooling.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => {
              const IconComp = category.icon;
              return (
                <div
                  key={category.title}
                  className="glass-card glass-card-hover rounded-2xl p-7 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    </div>
                    <p className="text-xs text-gray-400 mb-6">{category.description}</p>
                    
                    <div className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/[0.06] px-3.5 py-2.5 transition hover:bg-white/[0.06]"
                        >
                          <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                          <span className="text-[11px] font-mono text-purple-300/80 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-purple-400 font-mono">Portfolio</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Featured Projects</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
            </div>
            <p className="text-gray-400 max-w-md text-sm">
              Real-world systems spanning full-stack development, Java backends, and AI computer vision pipelines.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass-card glass-card-hover rounded-2xl border border-white/10 p-7 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Accent glow on card top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                      {project.tagline}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500">{project.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition mt-2">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-300/90 mt-1 mb-4">
                    {project.category}
                  </p>

                  <p className="text-sm text-gray-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Bullet points from resume */}
                  <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {project.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono rounded-md bg-white/5 px-2.5 py-1 text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between pt-2">
                    <a
                      href="https://github.com/Eswar15-b34"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View on GitHub</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
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
            <span className="text-xs uppercase tracking-[0.35em] text-emerald-400 font-mono">Recognitions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Certifications &amp; Achievements</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-3" />
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Certifications List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                <Cloud className="w-5 h-5 text-cyan-400" />
                Industry Certifications
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert) => {
                  const CertIcon = cert.icon;
                  return (
                    <div
                      key={cert.title}
                      className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300">
                            <CertIcon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            {cert.tag}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1 leading-snug">{cert.title}</h4>
                        <p className="text-xs font-medium text-purple-400 mb-2">{cert.issuer}</p>
                        <p className="text-xs text-gray-400 leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements & Honors */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-emerald-400" />
                Key Achievements &amp; Hackathons
              </h3>

              <div className="space-y-4">
                {achievements.map((item) => {
                  const AchIcon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 shrink-0">
                          <AchIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                            {item.category}
                          </span>
                          <h4 className="text-base font-bold text-white mt-0.5">{item.title}</h4>
                          <p className="text-xs font-semibold text-purple-300 mb-2">{item.role}</p>
                          <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Additional Highlights */}
                <div className="glass-card rounded-2xl p-5 border border-white/10 bg-white/[0.02]">
                  <h5 className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-2">Scholastic Standing</h5>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Maintained an exceptional <strong className="text-white">9.435 CGPA</strong> at SR University while actively contributing to academic projects and technical communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.35em] text-purple-400 font-mono">Connect</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">Let&apos;s Build Together</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-3" />
            <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
              I am open to software engineering internships, AI/ML engineering roles, research projects, and technical collaborations. Feel free to reach out directly!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 max-w-5xl mx-auto">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 glass-card rounded-3xl p-8 border border-white/10 space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
                <p className="text-xs text-gray-400 mb-6">
                  Reach me through email, phone, or any of the social and coding networks.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:eswarreddykoduru@gmail.com"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/10 transition group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] text-gray-400 uppercase font-mono">Email Address</p>
                      <p className="text-sm font-semibold text-white group-hover:text-purple-300 transition truncate">
                        eswarreddykoduru@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919573786379"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase font-mono">Phone / WhatsApp</p>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">
                        +91 9573786379
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase font-mono">Location</p>
                      <p className="text-sm font-semibold text-white">Nellore, Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-mono text-gray-400 uppercase mb-3">Connect on Socials</p>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Eswar15-b34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 transition"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eswar-koduru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://leetcode.com/u/Eswar15-b34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-amber-600 transition"
                    aria-label="LeetCode Profile"
                  >
                    <LeetcodeIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://codeforces.com/profile/Eswar15-b34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600 transition"
                    aria-label="Codeforces Profile"
                  >
                    <CodeforcesIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org/user/eswarreddykoduru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-emerald-600 transition"
                    aria-label="GeeksforGeeks Profile"
                  >
                    <GeeksforGeeksIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action & Message Box */}
            <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between bg-gradient-to-br from-[#111422] to-[#0d0f18]">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Quick Action
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Send a Direct Inquiry</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Click below to open your preferred mail client with a pre-configured subject line, or copy the email directly to your clipboard.
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-black/40 border border-white/5 p-5">
                    <p className="text-xs font-mono text-gray-400 mb-1">To:</p>
                    <p className="text-base font-semibold text-white">eswarreddykoduru@gmail.com</p>
                    <p className="text-xs font-mono text-purple-400 mt-3 mb-1">Default Subject:</p>
                    <p className="text-sm text-gray-300">Software Engineering / AI Opportunity Discussion</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:eswarreddykoduru@gmail.com?subject=Software%20Engineering%20Opportunity%20-%20Discussion%20with%20Koduru%20Eswar%20Reddy"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition hover:brightness-110"
                    >
                      <Mail className="w-4 h-4" />
                      Send Email Now
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-purple-400/50"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Typically responds within a few hours.</span>
                </div>
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
              EK
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

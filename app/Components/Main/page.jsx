"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
  Terminal,
  ExternalLink,
  ArrowRight,
  User,
  BookOpen,
  Calendar,
  Cpu,
  Database,
  Send,
  ChevronRight,
  MapPin,
  Globe,
  DatabaseZap,
  Layout
} from "lucide-react";


const Typewriter = ({ words, delay = 3000, typingSpeed = 150 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      Math.max(
        reverse ? 75 : subIndex === words[index].length ? delay : typingSpeed,
        parseInt(Math.random() * 350),
      ),
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, delay, typingSpeed]);

  return (
    <span className="inline-flex relative">
      {`${words[index].substring(0, subIndex)}`}
      <span
        className={`${blink ? "opacity-100" : "opacity-0"} absolute -right-1 top-0 bottom-0 w-0.5 bg-indigo-500 transition-opacity duration-100`}
      ></span>
    </span>
  );
};

const TechBadge = ({ icon: Icon, label, color }) => (
  <div className="group flex items-center gap-2 px-3 py-1.5 bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-lg hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all duration-300 cursor-default">
    <Icon size={24} className={`${color}`} />
    <span className="md:text-base text-xs font-semibold text-gray-700 dark:text-slate-300">
      {label}
    </span>
  </div>
);

// --- Projects Section Component ---
export const ProjectsSection = () => {
  const projects = [
    {
      title: "Blockchain-Based Multi-Passenger Ticketing and Validation System ",
      description:
        "Architected a Hybrid Blockchain System using a gasless backend relayer to abstract Web3 complexity, allowing users to interact without paying transaction fees.Developed Solidity Smart Contracts (Hardhat/Polygon) to enforce anti-reuse logic and dynamic ticket expiry.Containerized the entire ecosystem using Docker, ensuring consistent deployment across local and cloud environments",
      tags: ["Next.js","Tailwind","TypeScript", "Mongo DB", "Docker","Solidity","Hardhat","Ethereum (Polygon)"],
      links: { demo: "https://github.com/darshangowdanan/blockchain", repo: "https://github.com/darshangowdanan/blockchain" },
      image:
        "/block-chain.png",
    },
    {
      title: "Truck Rental Services",
      description:
        "Developed a full-stack rental platform using Next.js and Firebase, implementing real-time availability updates for 100+ concurrent users.Integrated Firebase Authentication and cloud-based notifications to streamline the user booking workflow",
      tags: ["Next.js","Tailwind","TypeScript", "firebase", "Node.js"],
      links: { demo: "https://vehicle-rent-ao3c82oli-darshangowda9152-gmailcoms-projects.vercel.app", repo: "https://github.com/darshangowdanan/Truck_Rental_2025" },
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "E-Commerce Website",
      description:
        "Optimized database query performance using efficient indexing strategies to reduce load time by 15%.Developed a secure end-to-end shopping experience featuring product management, a shopping cart, and payment gateway integration",
      tags: ["React", "Tailwind", "Firebase"],
      links: { demo: "#", repo: "#" },
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <div
      className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300"
      id="projects"
    >
      <div className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-medium tracking-wide text-sm uppercase">
              <Terminal size={16} />
              <span>Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Featured{" "}
              <span className="text-indigo-600 dark:text-indigo-400">Work</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center space-x-2 text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <span>View all projects</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-slate-700 flex flex-col"
            >
              <div className="relative overflow-hidden h-64 shrink-0">
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-indigo-900/0 transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 shrink-0">
                    <a
                      href={project.links.repo}
                      className="text-gray-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-gray-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] font-semibold tracking-wide uppercase bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-medium"
          >
            <span>View all projects</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Skills Section Component ---
export const SkillsSection = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "Redux",
      ],
    },
    {
      title: "Backend Infrastructure",
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      skills: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "Redis",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      skills: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Jest"],
    },
  ];

  return (
    <div
      className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300"
      id="skills"
    >
      <div className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-medium tracking-wide text-sm uppercase">
              <Cpu size={16} />
              <span>Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Technical{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Skills
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group"
            >
              <div className="bg-indigo-50 dark:bg-indigo-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-slate-300 bg-gray-100 dark:bg-slate-700 rounded-lg border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- About & Blogs Section Component ---
export const AboutSection = () => {
  const blogs = [
    {
      title: "Understanding React Server Components",
      date: "Oct 12, 2023",
      readTime: "5 min read",
      link: "#",
    },
    {
      title: "Mastering Tailwind CSS Grid",
      date: "Sep 28, 2023",
      readTime: "4 min read",
      link: "#",
    },
    {
      title: "Building Scalable APIs with Node.js",
      date: "Aug 15, 2023",
      readTime: "7 min read",
      link: "#",
    },
  ];

  return (
    <div
      className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300"
      id="about"
    >
      <div className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-medium tracking-wide text-sm uppercase">
                <User size={16} />
                <span>About Me</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Driven by{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  Curiosity
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <p>
                I am a passionate software developer with a strong foundation in
                building modern web applications. My journey began with a simple
                curiosity about how things work on the internet, which quickly
                evolved into a career dedicated to solving complex problems
                through code.
              </p>
              <p>
                When I'm not coding, I write about my learning experiences and
                share technical insights. I believe that knowledge grows when
                shared, which is why I maintain a blog covering everything from
                basic web concepts to advanced system architecture.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
            >
              More about me <ArrowRight size={18} />
            </a>
          </div>

          {/* Blogs / Recent Writings */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-3xl p-8 border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-8 text-gray-900 dark:text-white">
              <BookOpen className="text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-2xl font-bold">Recent Writings</h3>
            </div>

            <div className="space-y-6">
              {blogs.map((blog, index) => (
                <a key={index} href={blog.link} className="block group">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {blog.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {blog.date}
                      </span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700">
              <a
                href="#"
                className="text-sm font-semibold text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Read all articles &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Contact Section Component ---
export const ContactSection = () => {
  return (
    <div
      className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300"
      id="contact"
    >
      <div className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-medium tracking-wide text-sm uppercase">
              <Mail size={16} />
              <span>Contact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Let's{" "}
              <span className="text-indigo-600 dark:text-indigo-400">Talk</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              I'm currently available for freelance work and full-time
              positions. If you have a project that needs some creative touch,
              or just want to say hi, feel free to drop a message!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700 dark:text-slate-300 group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-500 font-medium">
                    Email
                  </p>
                  <a
                    href="mailto:hello@example.com"
                    className="font-semibold text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    darshangowda9152@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-700 dark:text-slate-300 group">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-500 font-medium">
                    Location
                  </p>
                  <p className="font-semibold text-lg">Bengaluru, Karanataka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-slate-700 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="md:text-lg text-sm font-semibold text-gray-700 dark:text-slate-300 ml-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all dark:text-white"
                  placeholder="Darshan Gowda"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="md:text-lg text-sm font-semibold text-gray-700 dark:text-slate-300 ml-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all dark:text-white"
                  placeholder="darshangowda9152@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="md:text-lg text-sm font-semibold text-gray-700 dark:text-slate-300 ml-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 outline-none transition-all dark:text-white resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Main Hero Component (Named Export: Main) ---
export const Main = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const profile = {
    name: "Darshan",
    roles: [
      "Software Developer",
      "React Specialist",
      "Tech Enthusiast",
      "Problem Solver",
    ],
    summary:
      "I craft robust and scalable digital solutions. With a passion for clean code and user-centric design, I specialize in full-stack development, transforming complex problems into elegant web applications.",
    socials: [
      {
        name: "GitHub",
        icon: <Github size={20} />,
        url: "#",
        color: "group-hover:text-gray-900 dark:group-hover:text-white",
        bgHover: "hover:bg-gray-200 dark:hover:bg-gray-800",
      },
      {
        name: "LinkedIn",
        icon: <Linkedin size={20} />,
        url: "https://www.linkedin.com/in/darshan-gowda2003",
        color: "group-hover:text-blue-600",
        bgHover: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
      },
      {
        name: "Email",
        icon: <Mail size={20} />,
        url: "mailto:darshangowda9152@gmail.com",
        color: "group-hover:text-red-500",
        bgHover: "hover:bg-red-50 dark:hover:bg-red-900/30",
      },
      {
        name: "Resume",
        icon: <FileText size={20} />,
        url: "#",
        color: "group-hover:text-emerald-500",
        bgHover: "hover:bg-emerald-50 dark:hover:bg-emerald-900/30",
      },
    ],
  };

  const techStack = [
    { icon: Globe, label: "React", color: "text-blue-500",size: 16},
    { icon: Database, label: "Node.js", color: "text-green-600" },
    { icon: Code2, label: "TypeScript", color: "text-blue-600" },
    { icon: Layout, label: "Tailwind", color: "text-cyan-500" },
    { icon: Cpu, label: "Next.js", color: "text-gray-800 dark:text-white" },
    { icon: DatabaseZap, label: "MongoDB", color: "text-green-600" },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Card */}
      <div className="relative w-full md:max-w-3/4 bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row sm:mt-0 mt-20">
        {/* --- Left Column: Content --- */}
        <div className="w-full md:w-3/5 p-8 md:p-12 xl:p-16 flex flex-col justify-center relative z-10">
          {/* Top Tag */}
          {/* <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-8">
            <Terminal size={12} />
            <span>Portfolio v2.0</span>
          </div> */}

          {/* Headlines */}
          <div className="space-y-4 mb-8">
            <h1 className="text-3xl sm:text-7xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                {profile.name}.
              </span>
            </h1>

            <div className="flex items-center gap-3 text-lg md:text-2xl text-slate-400 font-medium h-8">
              <Code2 size={24} className="text-indigo-500" />
              <Typewriter words={profile.roles} />
            </div>
          </div>

          {/* Summary */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10 border-l-2 border-indigo-500/30 pl-6">
            {profile.summary}
          </p>

          {/* Tech Stack Grid */}
          <div className="mb-10">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
              Tech Arsenal
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <TechBadge key={i} {...tech} />
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk <ExternalLink size={18} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <div className="flex items-center gap-2">
              {profile.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`group p-3 text-slate-400 transition-all duration-300 rounded-xl ${social.bgHover} border border-transparent hover:border-slate-700`}
                  aria-label={social.name}
                >
                  <span
                    className={`transition-colors duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Right Column: Image & Visuals --- */}
        <div className="w-full md:w-2/5 relative min-h-[400px] md:min-h-auto bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
          {/* Abstract Grid Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          {/* Diagonal Slice Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent md:bg-gradient-to-l md:from-[#0f172a]/0 md:via-[#0f172a]/0 md:to-slate-900/50 z-10"></div>

          {/* Image Wrapper */}
          <div className="absolute inset-0 flex items-center justify-center p-8 z-20">
            <div className="relative group w-72 h-72 md:w-96 md:h-96">
              {/* Spinning Ring */}
              <div className="absolute inset-0 -m-1 border-2 border-dashed border-indigo-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-0 -m-4 border border-slate-700 rounded-full"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl shadow-indigo-500/20 transform transition-transform duration-700 group-hover:scale-105">
                {isImageLoading && (
                  <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
                    <Code2
                      size={40}
                      className="text-slate-600 animate-bounce"
                    />
                  </div>
                )}
                <img
                  src="/avtar.avif" 
                  alt="Profile"
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:hidden ${isImageLoading ? "opacity-0 scale-110" : "opacity-100 scale-100 group-hover:scale-110"}`}
                  onLoad={() => setIsImageLoading(false)}
                />
                <img
                  src="/profile.jpeg" 
                  alt="Profile"
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:block ${isImageLoading ? "opacity-0 scale-110" : "opacity-100 scale-100 group-hover:scale-110"}`}
                  onLoad={() => setIsImageLoading(false)}
                />

                {/* Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent mix-blend-overlay"></div>
              </div>

              {/* Floating Cards/Badges */}

              {/* Badge 1: Experience */}
              {/* <div className="absolute -left-4 top-10 bg-slate-800/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl animate-[bounce_3s_infinite]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                    <Zap size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">
                      Experience
                    </p>
                    <p className="text-sm font-bold text-white">4+ Years</p>
                  </div>
                </div>
              </div> */}

              {/* Badge 2: Open to Work */}
              <div className="absolute -right-6 bottom-16 bg-white/95 text-slate-900 p-4 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Status
                    </span>
                    <span className="text-sm font-bold">Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Also export as default in case you want to use "import Main from..."
export default Main;

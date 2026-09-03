"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, ExternalLink, Bot, ShieldCheck, Microscope, Play, Code2, Terminal, Cpu, Database, Sparkles, Braces } from "lucide-react";

// --- Project and Skills Data ---
const PROJECTS = [
  {
    title: "Kisan Mitra",
    description:
      "AI-driven agricultural ecosystem providing real-time yield prediction, optimal crop recommendation, and market insights.",
    icon: Bot,
    tech: ["Python", "Machine Learning", "React", "Node.js"],
    link: "https://github.com/initha-codes",
  },
  {
    title: "AuraShield",
    description:
      "A privacy-first cosmetic ingredient audit tool using Gemini Vision OCR and on-device WASM processing for instant toxicity checks.",
    icon: ShieldCheck,
    tech: ["Next.js", "Gemini OCR", "WASM", "TailwindCSS"],
    link: "https://github.com/initha-codes",
  },
  {
    title: "CipherScope",
    description:
      "A lightweight dynamic and static analysis tool designed to detect cryptographic misconfigurations in embedded C/C++ systems.",
    icon: Microscope,
    tech: ["C++", "Static Analysis", "Python", "Docker"],
    link: "https://github.com/initha-codes",
  },
  {
    title: "Anti-UX Challenge",
    description:
      "An interactive web experience exploring dark patterns, intentionally difficult UI paradigms, and accessibility edge cases.",
    icon: Play,
    tech: ["React", "Motion", "TailwindCSS", "Figma"],
    link: "https://github.com/initha-codes",
  },
];

const SKILLS = [
  "Next.js", "React", "TypeScript", "Python", "Machine Learning",
  "Node.js", "WASM", "Static Analysis", "C++", "Tailwind CSS",
  "Git", "Docker"
];

// --- Sub-Component: Neat Geometric Grid Background ---
const GeometricPattern = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* SVG Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='0 0h40v40H0z' fill='none'/%3E%3Cpath d='M40 0H0v40' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Soft Vignette Mask using standard radial-gradient */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(7, 7, 9, 0.6) 60%, #070709 100%)'
        }}
      />
    </div>
  );
};

// --- Sub-Component: Floating Tech Doodles ---
const FloatingDoodles = () => {
  const doodles = [
    { Icon: Code2, size: 28, position: "top-[12%] left-[8%]", duration: 7, delay: 0 },
    { Icon: Terminal, size: 24, position: "top-[25%] right-[10%]", duration: 9, delay: 1 },
    { Icon: Cpu, size: 30, position: "top-[52%] left-[5%]", duration: 8, delay: 2 },
    { Icon: Database, size: 22, position: "top-[70%] right-[8%]", duration: 10, delay: 0.5 },
    { Icon: Braces, size: 26, position: "top-[85%] left-[12%]", duration: 7.5, delay: 1.5 },
    { Icon: Sparkles, size: 20, position: "top-[38%] right-[15%]", duration: 6.5, delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {doodles.map(({ Icon, size, position, duration, delay }, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${position} text-neutral-600/25 dark:text-neutral-500/20`}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};

// --- Sub-Component: Global Cursor Spotlight ---
const CursorSpotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => spotlightOpacity.set(0.12);
    const handleMouseLeave = () => spotlightOpacity.set(0);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, spotlightOpacity]);

  const background = useTransform(
    [mouseX, mouseY, spotlightOpacity],
    ([x, y, op]) => `radial-gradient(250px at ${x}px ${y}px, rgba(255, 255, 255, ${op}), transparent 80%)`
  );

  return <motion.div className="fixed inset-0 z-10 pointer-events-none" style={{ background }} />;
};

// --- Framer Motion Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// --- Main Portfolio Component ---
export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("inithashreeselvan2006@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative min-h-screen bg-[#070709] text-neutral-200 font-mono px-6 py-20 antialiased selection:bg-neutral-800 selection:text-white">
      {/* 1. Global Interactivity & Background Layers */}
      <GeometricPattern />
      <FloatingDoodles />
      <CursorSpotlight />

      {/* 2. Main Container */}
      <div className="relative z-20 max-w-3xl mx-auto space-y-20">
        
        {/* Header Section */}
        <motion.header
          className="space-y-6"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tighter text-white">
              Initha Shree T
            </h1>
            <p className="text-xs font-semibold text-neutral-400 tracking-wider uppercase border border-neutral-800 px-3 py-1 inline-block rounded-md bg-neutral-950/80 backdrop-blur-sm">
              CSE (Fintech) @ SRMIST • CGPA: 9.62
            </p>
          </div>
          
          <p className="text-sm leading-relaxed text-neutral-400 max-w-xl">
            A developer focused on full-stack web applications, algorithmic systems, and client-side machine learning integration in financial software.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a 
              href="https://github.com/initha-codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
              <ExternalLink size={11} className="text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a 
              href="https://www.linkedin.com/in/initha-shree-t/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
              <ExternalLink size={11} className="text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button 
              onClick={copyEmail} 
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all duration-200 cursor-pointer"
            >
              <Mail size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
              <span>{copied ? "Copied to Clipboard!" : "Email"}</span>
            </button>
          </div>
        </motion.header>

        {/* Selected Work Section */}
        <motion.section
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500" variants={itemVariants}>
            Selected Projects
          </motion.h2>

          <div className="grid grid-cols-1 gap-4">
            {PROJECTS.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-sm hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-200"
                  variants={itemVariants}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                        <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-base font-bold text-neutral-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4 pl-11">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pl-11">
                    {project.tech.map((techItem, i) => (
                      <span key={i} className="px-2.5 py-0.5 text-[10px] rounded-md font-medium bg-neutral-800/60 text-neutral-400 border border-neutral-800">
                        {techItem}
                      </span>
                    ))}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.section>

        {/* Stack & Technologies Section */}
        <motion.section
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500" variants={itemVariants}>
            Stack & Technologies
          </motion.h2>

          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill, index) => (
              <motion.span
                key={index}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-neutral-900/80 backdrop-blur-sm border border-neutral-800/80 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-800/60 transition-all duration-200"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-8 border-t border-neutral-900 text-xs text-neutral-600 flex justify-between items-center">
          <p>© Initha Shree T</p>
          <p className="text-neutral-700">Next.js / Tailwind / Motion</p>
        </footer>
      </div>
    </main>
  );
}
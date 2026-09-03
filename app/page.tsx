import React from "react";

const projects = [
  {
    title: "Kisan Mitra",
    subtitle: "Smart Farmer-Assistant Platform",
    description:
      "AI-powered web application delivering image-based crop disease diagnosis and multi-language voice query assistance for agricultural solutions.",
    tags: ["FastAPI", "PyTorch", "JavaScript", "REST APIs", "Voice AI"],
    link: "#",
  },
  {
    title: "AuraShield",
    subtitle: "Web-Native Vision & Health Platform",
    description:
      "Privacy-first web platform performing edge-native ingredient auditing using browser OCR and WASM/WebGPU client-side inference.",
    tags: ["React", "WebAssembly", "WebGPU", "Vision OCR", "Privacy-First"],
    link: "#",
  },
  {
    title: "CipherScope",
    subtitle: "Encrypted Communication Behavior Analysis",
    description:
      "Cyber forensics tool analyzing network traffic metadata (packet timing, frequency, burst intensity) to detect anomalous patterns without decrypting content.",
    tags: ["Python", "PyShark", "Wireshark", "Matplotlib", "Network Forensics"],
    link: "#",
  },
  {
    title: "Anti-UX Challenge",
    subtitle: "Intentionally Flawed User Experience Design",
    description:
      "An experimental web project built to explore anti-patterns, hostile design choices, and counter-intuitive navigation in modern web interfaces.",
    tags: ["JavaScript", "HTML/CSS", "UX Design", "Web Experiments"],
    link: "#",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "HTML/CSS",
  "C",
  "React",
  "Next.js",
  "FastAPI",
  "Flask",
  "PyTorch",
  "WebAssembly",
  "WebGPU",
  "Git",
  "Wireshark",
  "PyShark",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-neutral-200 font-mono px-6 py-16 max-w-3xl mx-auto selection:bg-neutral-800 selection:text-white">
      {/* Header */}
      <header className="space-y-4 mb-16">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Initha Shree T
          </h1>
          <p className="text-sm font-medium text-neutral-400">
            CSE (Fintech) @ SRMIST
          </p>
        </div>
        <p className="text-sm leading-relaxed text-neutral-300 max-w-xl">
          3rd-year Computer Science & Fintech Undergrad (Class of 2028). Focused
          on full-stack web applications, algorithmic systems, and financial
          technology.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 text-xs text-neutral-400 pt-2">
          <a
            href="https://github.com/initha-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/initha-shree-t/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="mailto:inithashreeselvan2006@gmail.com"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section className="space-y-8 mb-16">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
          Featured Projects
        </h2>
        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-lg border border-neutral-800/80 bg-neutral-900/30 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-neutral-100">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400">{project.subtitle}</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-neutral-300 mb-4 mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-400 border border-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4 mb-16">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-neutral-900 text-xs text-neutral-600 flex justify-between items-center">
        <p>© {new Date().getFullYear()} Initha Shree T</p>
        <p>Built with Next.js & Tailwind</p>
      </footer>
    </main>
  );
}
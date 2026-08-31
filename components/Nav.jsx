"use client";

import { motion } from "framer-motion";

const links = [
  { num: "01", label: "work", href: "#work" },
  { num: "02", label: "projects", href: "#projects" },
  { num: "03", label: "stack", href: "#stack" },
  { num: "04", label: "education", href: "#education" },
  { num: "05", label: "contact", href: "#contact" },
];

export default function Nav() {
  function openCmdK() {
    window.dispatchEvent(new CustomEvent("open-cmdk"));
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-8 left-0 right-0 h-[60px] bg-bg-0/75 backdrop-blur-md border-b border-border z-[99]"
    >
      <div className="max-w-[1180px] mx-auto px-7 h-full flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-semibold text-fg-0 tracking-wider">
          <span className="text-amber">[</span>aryan<span className="text-amber animate-blink">_</span>
          <span className="text-amber">]</span>
        </a>
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-fg-2 hover:text-fg-0 font-mono text-[13px] font-medium transition-colors flex gap-1.5 items-baseline"
            >
              <span className="text-amber text-[11px]">{l.num}</span>
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={openCmdK}
          className="flex items-center gap-2 px-3 py-1.5 bg-bg-2 border border-border rounded-md text-fg-2 hover:text-fg-0 hover:border-amber-line font-mono text-xs transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <span className="hidden sm:inline">Search</span>
          <span className="flex gap-0.5 ml-1">
            <span className="kbd">⌘</span>
            <span className="kbd">K</span>
          </span>
        </button>
      </div>
    </motion.nav>
  );
}

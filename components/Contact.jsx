"use client";

import { motion } from "framer-motion";

const tags = ["SWE", "Infrastructure", "Platform Engineering"];

const cards = [
  {
    label: "Email",
    value: "aryanrah@usc.edu",
    href: "mailto:aryanrah@usc.edu",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aryan-saraf12",
    href: "https://www.linkedin.com/in/aryan-saraf12/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/aryansaraf018",
    href: "https://github.com/aryansaraf018",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(408) 590-5570",
    href: "tel:+14085905570",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-bg-1">
      <div className="container-wrap text-center">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3.5 mb-7 font-mono text-xs text-fg-2"
        >
          <span className="text-amber font-semibold">05</span>
          <span className="w-[60px] h-px bg-border-bright" />
          <span className="uppercase tracking-[2px]">CONTACT</span>
          <span className="w-[60px] h-px bg-border-bright" />
        </motion.div>

        {/* Gradient title (amber) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[clamp(2.75rem,7vw,5rem)] font-bold tracking-tight leading-[1] mb-6"
          style={{
            background: "linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-fg-2 text-[1.1rem] max-w-[640px] mx-auto mb-9"
        >
          Open to Summer 2026 internships, full-time new-grad roles, and collaboration opportunities.
        </motion.p>

        {/* Role tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {tags.map((t) => (
            <span
              key={t}
              className="px-6 py-2.5 rounded-full border border-amber-line bg-amber-dim text-amber-bright font-mono text-[13px] font-medium"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {cards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group block bg-bg-card border border-border hover:border-amber-line rounded-2xl p-6 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl border border-amber-line bg-amber-dim text-amber-bright flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <div className="font-display text-lg font-semibold text-fg-0 mb-1.5">{card.label}</div>
              <div className="font-mono text-[12.5px] text-fg-3 break-all group-hover:text-amber-bright transition-colors">
                {card.value}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

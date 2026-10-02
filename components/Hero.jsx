"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="max-w-[1180px] mx-auto px-7 pt-[160px] pb-20">
      <div className="min-h-[calc(100vh-220px)] flex items-center">
        <div className="max-w-[760px]">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2.5 items-center font-mono text-xs text-fg-2 mb-8"
          >
            <span className="inline-flex gap-1.5 items-center text-amber-bright">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Los Angeles, CA
            </span>
            <span className="text-fg-3">/</span>
            <span>M.S. Computer Science · USC</span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-[clamp(3.5rem,9vw,7rem)] font-bold leading-[0.92] tracking-tight gradient-amber mb-7"
          >
            Aryan
            <br />
            Saraf.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-[clamp(1.1rem,2vw,1.35rem)] text-fg-1 mb-5"
          >
            <span className="text-amber font-mono mr-1.5">&gt;</span>
            I build <em className="text-amber-bright not-italic font-medium">scalable</em> systems &amp;{" "}
            <em className="text-amber-bright not-italic font-medium">resilient</em> infrastructure.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-fg-2 text-base leading-[1.75] max-w-[540px] mb-9"
          >
            Currently at <strong className="text-fg-0">USC</strong> teaching Advanced Game Consoles and building
            datacenter telemetry at microsecond resolution. Previously a DevOps engineer at{" "}
            <strong className="text-fg-0">Jio Platforms</strong>, where I architected real-time CDC pipelines and
            automated GCP infrastructure serving enterprise clients. I like systems that are fast, observable, and
            impossible to misuse.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex gap-3.5 flex-wrap mb-12"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 bg-amber text-[#1a1405] font-semibold rounded-lg text-sm hover:bg-amber-bright hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,158,11,0.25)] transition-all"
            >
              See the work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/Aryan_Saraf_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-3 bg-transparent text-fg-1 border border-border-bright rounded-lg text-sm hover:text-fg-0 hover:border-amber-line hover:bg-amber-dim transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
              Resume.pdf
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-7 border-t border-border overflow-hidden marquee-mask"
          >
            <div className="flex gap-[18px] font-mono text-[11px] text-fg-3 tracking-widest whitespace-nowrap animate-marquee w-max">
              {Array(2)
                .fill(["GO", "PYTHON", "KUBERNETES", "TERRAFORM", "GCP", "KAFKA", "ELASTICSEARCH", "SDN/OPENFLOW", "CASSANDRA", "POSTGRES"])
                .flat()
                .map((t, i) => (
                  <span key={i} className={i % 2 === 0 ? "text-fg-2" : "text-amber"}>
                    {i % 2 === 0 ? t : "•"}
                  </span>
                ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

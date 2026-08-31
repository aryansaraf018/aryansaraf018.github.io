"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

const schools = [
  {
    name: "University of Southern California",
    degree: "M.S. Computer Science",
    date: "Jan 2025 → Dec 2026",
    location: "Los Angeles, CA",
    courses: ["Networked Systems for Cloud Computing", "Analysis of Algorithms", "Applied NLP", "Multimedia Systems Design"],
    logo: "USC",
  },
  {
    name: "Shah and Anchor Kutchhi Engineering College",
    degree: "B.E. Information Technology",
    date: "Aug 2019 → May 2023",
    location: "Mumbai, India",
    courses: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks"],
    logo: "SAKEC",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-pad bg-bg-1">
      <div className="container-wrap">
        <SectionHead num="04" label="EDUCATION" title="Where I learned the fundamentals." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {schools.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-card border border-border rounded-2xl p-7 hover:border-amber-line transition-colors"
            >
              <div className="flex items-start gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl border border-amber-line bg-amber-dim text-amber-bright flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-[17px] font-semibold text-fg-0 leading-tight mb-1">
                    {s.name}
                  </h3>
                  <p className="font-mono text-[12.5px] text-amber-bright">{s.degree}</p>
                </div>
                <span className="font-mono text-[10px] tracking-wider px-2 py-1 border border-border-bright rounded text-fg-3 flex-shrink-0">
                  {s.logo}
                </span>
              </div>

              <div className="font-mono text-[11px] text-fg-3 tracking-wide mb-5 pb-5 border-b border-border">
                {s.date} · {s.location}
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-fg-3 mb-3">Relevant Coursework</div>
                <div className="flex flex-wrap gap-2">
                  {s.courses.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-lg border border-amber-line bg-amber-dim text-amber-bright font-mono text-[12px] transition-all hover:scale-[1.03] hover:bg-amber/20"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

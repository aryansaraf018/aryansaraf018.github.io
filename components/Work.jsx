"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

const items = [
  {
    date: "Aug 2026 → Now",
    logo: "USC",
    badge: "Current role",
    title: "Course Producer, CSCI 526 Advanced Game Consoles",
    org: "University of Southern California · Los Angeles",
    bullets: [
      ["Teaching:", "Deliver technical lectures on Unity and game systems to 80+ graduate students."],
      ["Operations:", "Manage logistics for 17 project teams, milestone schedules, submission pipelines, and grading, keeping project work organized throughout the course."],
    ],
    tags: ["Unity", "C#", "System Design", "Teaching"],
  },
  {
    date: "Jan 2026 → May 2026",
    logo: "USC",
    title: "Course Grader, CSCI 526 Advanced Game Consoles",
    org: "University of Southern California · Los Angeles",
    summary: "Evaluated Unity and C# assignments for 60+ graduate students; gave rubric-based written feedback.",
    tags: ["Unity", "C#", "Code Review"],
  },
  {
    date: "May 2025 → Aug 2025",
    logo: "USC",
    title: "Graduate Research Assistant",
    org: "University of Southern California · Los Angeles",
    bullets: [
      ["Low-latency:", "Held API latency under 50ms (local) syncing a C#/.NET backend with Unity for an American football simulation game."],
      ["DX:", "Reduced integration time ~40% with reusable Unity prefabs; built facility-upgrade flows on SQLite and JSON."],
    ],
    tags: [".NET", "Unity", "C#", "Python", "SQLite"],
  },
  {
    date: "Oct 2023 → Dec 2024",
    logo: "JIO",
    logoClass: "jio",
    badge: "Key role",
    title: "DevOps Engineer",
    org: "Jio Platforms Limited · Mumbai, India",
    summary:
      "Platform team supporting enterprise telecom products. Owned CI/CD, cloud infra, and DB ops across the full environment ladder.",
    bullets: [
      ["Real-time CDC:", "Architected a change-data-capture pipeline streaming NoSQL datastore changes into Elasticsearch to power live analytics for enterprise clients."],
      ["IaC:", "Reduced deployment time ~80% by automating GCP provisioning with Terraform across 4 standardized environments."],
      ["Zero-downtime:", "Cut platform latency 30% with Azure DevOps CI/CD pipelines and zero-downtime Kubernetes rollouts."],
      ["FinOps:", "Saved $7,000+ monthly by decommissioning idle infra; ran vulnerability and malware scans on 100+ servers."],
      ["Data:", "Operated and tuned 7 database engines for HA across dev/QA/UAT/pre-prod/prod, including Cassandra, ScyllaDB, MongoDB, Redis."],
    ],
    tags: ["GCP", "Terraform", "Kubernetes", "Kafka", "Azure DevOps", "Elasticsearch", "Cassandra", "ScyllaDB"],
  },
];

export default function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="container-wrap">
        <SectionHead num="01" label="WORK" title="Where I've shipped." />
        <div className="flex flex-col">
          {items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`grid md:grid-cols-[180px_1fr] gap-10 py-9 ${
                i !== items.length - 1 ? "border-b border-border" : ""
              } ${i === 0 ? "pt-0" : ""} relative group hover:bg-gradient-to-r hover:from-transparent hover:via-bg-2 hover:to-transparent transition-colors`}
            >
              {item.badge && (
                <span className="absolute -left-3 top-9 bottom-9 w-0.5 bg-amber" />
              )}
              <div className="pt-1">
                <div className="font-mono text-[11px] text-fg-3 tracking-wider mb-4 uppercase">{item.date}</div>
                <div
                  className={`inline-flex items-center justify-center w-[52px] h-[52px] border rounded-[10px] font-mono text-[11px] font-bold tracking-wider ${
                    item.logoClass === "jio"
                      ? "text-amber-bright border-amber-line bg-amber-dim"
                      : "text-fg-2 border-border-bright bg-bg-2"
                  }`}
                >
                  {item.logo}
                </div>
              </div>
              <div>
                {item.badge && (
                  <span className="inline-block px-2.5 py-[3px] bg-amber-dim border border-amber-line rounded text-amber-bright font-mono text-[10px] uppercase tracking-widest mb-2.5">
                    {item.badge}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-fg-0 mb-1.5 tracking-tight">{item.title}</h3>
                <p className="font-mono text-xs text-amber-bright mb-4 tracking-wide">{item.org}</p>
                {item.summary && <p className="text-fg-2 text-[15px] leading-[1.7] mb-4">{item.summary}</p>}
                {item.bullets && (
                  <ul className="mb-4">
                    {item.bullets.map(([kw, txt], idx) => (
                      <li key={idx} className="text-fg-2 text-[15px] leading-[1.75] mb-2.5 pl-[18px] relative">
                        <span className="absolute left-0 top-1 text-amber text-[10px]">▸</span>
                        <span className="text-fg-0 font-mono text-[11px] font-semibold tracking-wide mr-1">{kw}</span>
                        {txt}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10.5px] px-2.5 py-1 bg-bg-2 border border-border rounded text-fg-2 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

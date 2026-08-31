"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

const items = [
  {
    date: "Jan 2026 → Now",
    logo: "USC",
    title: "Course Grader, CSCI 526 Advanced Game Consoles",
    org: "University of Southern California · Los Angeles",
    summary:
      "Evaluating Unity/C# projects and system designs for 60+ grad students. Weekly office hours, structured rubric-based feedback.",
    tags: ["Unity", "C#", "System Design"],
  },
  {
    date: "May → Aug 2025",
    logo: "USC",
    title: "Graduate Research Assistant",
    org: "University of Southern California · Los Angeles",
    bullets: [
      ["CI/CD:", "Shipped GitHub Actions pipelines for a C#/.NET + Unity stack, cut manual deploy time ~40%."],
      ["DX:", "Built dynamic facility-upgrade flows with SQLite + Python JSON configs; reduced integration time ~40% via clean Unity prefabs."],
    ],
    tags: ["GitHub Actions", ".NET", "Python", "SQLite", "Unity"],
  },
  {
    date: "Oct 2023 → Dec 2024",
    logo: "JIO",
    logoClass: "jio",
    badge: "Key role",
    title: "DevOps Engineer",
    org: "Jio Platforms Limited · Mumbai, India",
    summary:
      "On a platform team supporting enterprise telecom products. I owned CI/CD, cloud infra, and DB ops across multiple environments. Most impactful work:",
    bullets: [
      ["Real-time CDC:", "Architected a change-data-capture pipeline from NoSQL stores to Elasticsearch, unlocking live analytics for enterprise customers."],
      ["IaC:", "Rewrote GCP provisioning in Terraform, ~80% faster deploys, consistent envs across Dev/QA/Pre-Prod/Prod."],
      ["Zero-downtime:", "Rolled out Azure DevOps pipelines + Artifact Registry with rolling K8s updates, 30% lower platform latency."],
      ["FinOps:", "Audited & decomm'd idle infra, saved $7K+/month. Swept 100+ prod hosts for vulnerabilities."],
      ["Data:", "Ran MySQL, Postgres, Cassandra, ScyllaDB, Mongo, Redis, Elasticsearch clusters at HA."],
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

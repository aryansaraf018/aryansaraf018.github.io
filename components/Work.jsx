"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

const items = [
  {
    date: "Jun 2025 → Aug 2025",
    logo: "E-D",
    title: "Software Engineering Intern",
    org: "Easley-Dunn Productions, Inc. · Los Angeles, CA",
    bullets: [
      ["Backend:", "Built a C#/.NET backend API integrated with a Unity client to power facility management in a sports simulation application."],
      ["Low-latency:", "Held API latency under 50ms (local) with real-time synchronization between the backend database and the Unity client."],
      ["DX:", "Reduced integration time ~40% by delivering reusable Unity prefabs and handler scripts for developer onboarding."],
      ["Data:", "Designed facility-upgrade flows with data-driven SQLite storage and JSON configurations."],
    ],
    tags: ["C#", ".NET", "Unity", "SQLite", "JSON", "Backend APIs"],
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
      ["Real-time CDC:", "Architected a change-data-capture pipeline streaming NoSQL changes into Elasticsearch for live analytics."],
      ["API Gateway:", "Improved API response times 30% by configuring Apigee API Gateway with OAuth and token auth for high-traffic APIs."],
      ["IaC:", "Reduced deployment time ~80% by automating GCP provisioning with Terraform across 4 standardized environments."],
      ["Zero-downtime:", "Cut platform latency 30% with Azure DevOps CI/CD pipelines and zero-downtime Kubernetes rollouts."],
      ["FinOps:", "Saved $7,000+ monthly by decommissioning idle infra; ran vulnerability and malware scans on 100+ servers."],
      ["Data:", "Operated 7 HA database engines (Cassandra, ScyllaDB, MongoDB, Redis) across dev/QA/UAT/pre-prod/prod."],
    ],
    tags: ["GCP", "Terraform", "Kubernetes", "Apigee", "Kafka", "Elasticsearch", "Cassandra", "ScyllaDB"],
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

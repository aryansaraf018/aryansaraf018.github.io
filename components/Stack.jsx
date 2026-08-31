"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

const cards = [
  {
    heading: "Languages",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["Go", "Python", "Java", "C#", "Bash"],
  },
  {
    heading: "AI / ML & Frameworks",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5v.5a4 4 0 0 0-3 6.9A4 4 0 0 0 7.5 21a4.5 4.5 0 0 0 4.5-4.5V8" />
        <path d="M12 2a4.5 4.5 0 0 1 4.5 4.5v.5a4 4 0 0 1 3 6.9A4 4 0 0 1 16.5 21 4.5 4.5 0 0 1 12 16.5" />
      </svg>
    ),
    items: ["PyTorch", "Keras", "Scikit-Learn", "DistilRoBERTa", "RAG Systems", "NLP"],
  },
  {
    heading: "Backend & Distributed Systems",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="8" rx="2" />
        <rect x="2" y="13" width="20" height="8" rx="2" />
        <line x1="6" y1="7" x2="6.01" y2="7" />
        <line x1="6" y1="17" x2="6.01" y2="17" />
      </svg>
    ),
    items: [".NET", "Unity", "Microservices", "REST APIs", "Multithreading", "Zero-downtime Deploys"],
  },
  {
    heading: "Data Engineering",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra", "ScyllaDB", "Elasticsearch", "Kafka", "CDC Pipelines", "ELK Stack"],
  },
  {
    heading: "Cloud & DevOps",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    items: ["GCP", "Docker", "Kubernetes", "Terraform", "Ansible", "Azure DevOps", "GitHub Actions", "Google Artifact Registry"],
  },
  {
    heading: "Systems & Networking",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    items: ["TCP/IP", "BGP", "OSPF", "DNS", "SDN/OpenFlow", "Mininet", "Linux", "Git"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section-pad">
      <div className="container-wrap">
        <SectionHead num="03" label="STACK" title="Tools I reach for." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="bg-bg-card border border-border rounded-2xl p-7 hover:border-amber-line transition-colors"
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl border border-amber-line bg-amber-dim text-amber-bright flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-mono text-[15px] font-semibold text-fg-0 tracking-tight leading-tight">
                  {card.heading}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg border border-amber-line bg-amber-dim text-amber-bright font-mono text-[12.5px] transition-all hover:scale-[1.03] hover:bg-amber/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

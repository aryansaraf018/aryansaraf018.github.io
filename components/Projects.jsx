"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

function ArchSvgLB() {
  return (
    <svg viewBox="0 0 300 320" className="arch-svg w-full h-auto">
      {/* Spine */}
      <rect x="20" y="20" width="60" height="28" rx="4" className="arch-box spine" />
      <rect x="120" y="20" width="60" height="28" rx="4" className="arch-box spine" />
      <rect x="220" y="20" width="60" height="28" rx="4" className="arch-box spine" />
      <text x="50" y="38" className="arch-label">core</text>
      <text x="150" y="38" className="arch-label">core</text>
      <text x="250" y="38" className="arch-label">core</text>
      {/* Agg */}
      <rect x="30" y="110" width="50" height="24" rx="4" className="arch-box agg" />
      <rect x="130" y="110" width="50" height="24" rx="4" className="arch-box agg" />
      <rect x="230" y="110" width="50" height="24" rx="4" className="arch-box agg" />
      <text x="55" y="126" className="arch-label">agg</text>
      <text x="155" y="126" className="arch-label">agg</text>
      <text x="255" y="126" className="arch-label">agg</text>
      {/* ToR */}
      <rect x="20" y="180" width="40" height="22" rx="3" className="arch-box tor" />
      <rect x="70" y="180" width="40" height="22" rx="3" className="arch-box tor" />
      <rect x="130" y="180" width="40" height="22" rx="3" className="arch-box tor" />
      <rect x="180" y="180" width="40" height="22" rx="3" className="arch-box tor" />
      <rect x="240" y="180" width="40" height="22" rx="3" className="arch-box tor" />
      {/* Hosts */}
      {[40, 90, 150, 200, 260].map((x) => (
        <circle key={x} cx={x} cy="260" r="8" className="arch-host" />
      ))}
      {/* Links */}
      <line x1="50" y1="48" x2="55" y2="110" className="arch-link" />
      <line x1="150" y1="48" x2="155" y2="110" className="arch-link" />
      <line x1="250" y1="48" x2="255" y2="110" className="arch-link" />
      <line x1="50" y1="48" x2="155" y2="110" className="arch-link" />
      <line x1="150" y1="48" x2="55" y2="110" className="arch-link" />
      <line x1="150" y1="48" x2="255" y2="110" className="arch-link" />
      <line x1="250" y1="48" x2="155" y2="110" className="arch-link" />
      <line x1="55" y1="134" x2="40" y2="180" className="arch-link" />
      <line x1="55" y1="134" x2="90" y2="180" className="arch-link" />
      <line x1="155" y1="134" x2="150" y2="180" className="arch-link" />
      <line x1="155" y1="134" x2="200" y2="180" className="arch-link" />
      <line x1="255" y1="134" x2="260" y2="180" className="arch-link" />
      <line x1="40" y1="202" x2="40" y2="252" className="arch-link" />
      <line x1="90" y1="202" x2="90" y2="252" className="arch-link" />
      <line x1="150" y1="202" x2="150" y2="252" className="arch-link" />
      <line x1="200" y1="202" x2="200" y2="252" className="arch-link" />
      <line x1="260" y1="202" x2="260" y2="252" className="arch-link" />
      {/* Probe */}
      <circle r="3" className="probe">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M 40 260 L 40 202 L 55 134 L 50 48 L 150 48 L 155 110 L 200 180 L 200 260"
        />
      </circle>
      <text x="10" y="12" className="arch-tier">SPINE</text>
      <text x="10" y="100" className="arch-tier">AGG</text>
      <text x="10" y="172" className="arch-tier">TOR</text>
      <text x="10" y="280" className="arch-tier">HOST</text>
    </svg>
  );
}

function PipelineAQR() {
  return (
    <div className="flex flex-col gap-4 mt-2.5">
      <div className="bg-bg-2 border border-border-bright rounded-[10px] p-3.5 text-center">
        <div className="text-2xl text-amber mb-1">?</div>
        <div className="font-mono text-[11px] leading-[1.5] text-fg-1">Query</div>
      </div>
      <div className="text-center text-amber text-base leading-none">↓</div>
      <div className="bg-amber-dim border border-amber rounded-[10px] p-3.5 text-center">
        <div className="text-2xl text-amber mb-1">▩</div>
        <div className="font-mono text-[11px] leading-[1.5] text-amber-bright">
          DistilRoBERTa
          <br />
          <span className="text-fg-3 text-[10px]">classifier</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-1">
        <div>
          <div className="text-center text-amber text-base">↓</div>
          <div className="bg-bg-2 border border-border-bright rounded-[10px] py-2.5 px-3 text-center">
            <div className="font-mono text-[11px] text-fg-1">strong → direct retrieve</div>
          </div>
        </div>
        <div>
          <div className="text-center text-amber text-base">↓</div>
          <div className="bg-bg-2 border border-amber-line rounded-[10px] py-2.5 px-3 text-center">
            <div className="font-mono text-[11px] text-fg-1">
              weak → <strong className="text-fg-0">Google Trends</strong> injection → rewrite → retrieve
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const cases = [
  {
    id: "proj-lb",
    index: "/ 01",
    stack: ["Go", "Mininet", "OpenFlow", "Python"],
    title: "Latency-Aware Load Balancer",
    lede: "A datacenter-grade load balancer that routes based on real-time path latency, not static round-robin.",
    sections: [
      {
        h: "Problem",
        p: "Round-robin load balancers ignore network conditions. Under bursty load on a fat-tree topology, stragglers dominate p95 latency. The control plane has no visibility into actual path cost.",
      },
      {
        h: "Approach",
        p: "Built an SDN/OpenFlow control plane in Go on a 20-node Mininet fat-tree. Active latency probes sample paths every 200ms; a weighted least-latency scheduler steers flows. Straggler mitigation via hedged requests on tail paths.",
      },
    ],
    results: [
      <><strong>38% lower</strong> average response time vs. static round-robin under bursty load</>,
      <><strong>2.1× throughput</strong> improvement at the 95th percentile tail</>,
      <>Benchmarked 3 strategies: round-robin, least-latency, straggler-mitigation</>,
    ],
    diagram: <ArchSvgLB />,
    diagramTitle: "Architecture",
  },
  {
    index: "/ 02",
    stack: ["Python", "DistilRoBERTa", "RAG", "Google Trends API"],
    title: "AQR-RAG, Adaptive Query Reformulation",
    lede: "A query-rewriting layer that boosts retrieval on ambiguous queries using real-time trend signals.",
    sections: [
      {
        h: "Problem",
        p: "RAG systems struggle on short, ambiguous queries: the retriever returns lexically-similar but semantically-off passages. Static rewriters miss time-sensitive phrasing.",
      },
      {
        h: "Approach",
        p: "Fine-tuned DistilRoBERTa as a binary classifier (weak vs. strong query). Weak queries are rewritten with context injected from Google Trends, trending terms are merged into the expansion via a prompt-template.",
      },
    ],
    results: [
      <><strong>82.4%</strong> classification accuracy on held-out queries</>,
      <><strong>0.90 PR-AUC</strong>, robust precision/recall tradeoff</>,
      <>Measurable retrieval precision lift on trend-sensitive queries</>,
    ],
    diagram: <PipelineAQR />,
    diagramTitle: "Pipeline",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-bg-1">
      <div className="container-wrap">
        <SectionHead num="02" label="PROJECTS" title="Things I've built end-to-end." />
        <div className="space-y-7">
          {cases.map((c, i) => (
            <motion.article
              key={i}
              id={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="bg-bg-card border border-border rounded-2xl p-11 hover:border-amber-line transition-colors"
            >
              <div className="flex justify-between items-center mb-7 pb-5 border-b border-border flex-wrap gap-3">
                <span className="font-mono text-[13px] text-amber font-semibold tracking-wider">{c.index}</span>
                <div className="flex gap-1.5 flex-wrap">
                  {c.stack.map((s) => (
                    <span key={s} className="font-mono text-[10.5px] px-2.5 py-[3px] bg-amber-dim rounded text-amber-bright">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-fg-0 mb-3.5 tracking-tight leading-tight">{c.title}</h3>
                  <p className="text-fg-1 text-[17px] leading-[1.6] mb-7">{c.lede}</p>
                  {c.sections.map((s) => (
                    <div key={s.h} className="mb-5">
                      <h4 className="font-mono text-[11px] text-fg-3 uppercase tracking-[2px] mb-2 flex items-center gap-2">
                        <span className="text-amber text-sm">§</span>
                        {s.h}
                      </h4>
                      <p className="text-fg-2 text-[15px] leading-[1.75]">{s.p}</p>
                    </div>
                  ))}
                  <div className="mb-5">
                    <h4 className="font-mono text-[11px] text-fg-3 uppercase tracking-[2px] mb-2 flex items-center gap-2">
                      <span className="text-amber text-sm">§</span>
                      Result
                    </h4>
                    <ul>
                      {c.results.map((r, idx) => (
                        <li key={idx} className="text-fg-2 text-[15px] leading-[1.8] pl-[18px] relative">
                          <span className="absolute left-0 text-amber">▪</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-bg-1 border border-border rounded-xl p-6 lg:sticky lg:top-32">
                    <div className="font-mono text-[11px] text-fg-3 uppercase tracking-[2px] mb-5 text-center">
                      {c.diagramTitle}
                    </div>
                    {c.diagram}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

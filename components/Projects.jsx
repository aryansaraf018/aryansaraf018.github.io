"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

function ArchSvgLB() {
  return (
    <svg viewBox="0 0 300 320" className="arch-svg w-full h-auto">
      <rect x="20" y="20" width="60" height="28" rx="4" className="arch-box spine" />
      <rect x="120" y="20" width="60" height="28" rx="4" className="arch-box spine" />
      <rect x="220" y="20" width="60" height="28" rx="4" className="arch-box spine" />
      <text x="50" y="38" className="arch-label">core</text>
      <text x="150" y="38" className="arch-label">core</text>
      <text x="250" y="38" className="arch-label">core</text>
      <rect x="30" y="110" width="50" height="24" rx="4" className="arch-box agg" />
      <rect x="130" y="110" width="50" height="24" rx="4" className="arch-box agg" />
      <rect x="230" y="110" width="50" height="24" rx="4" className="arch-box agg" />
      <text x="55" y="126" className="arch-label">agg</text>
      <text x="155" y="126" className="arch-label">agg</text>
      <text x="255" y="126" className="arch-label">agg</text>
      <rect x="20" y="180" width="40" height="22" rx="3" className="arch-box tor" />
      <rect x="70" y="180" width="40" height="22" rx="3" className="arch-box tor" />
      <rect x="130" y="180" width="40" height="22" rx="3" className="arch-box tor" />
      <rect x="180" y="180" width="40" height="22" rx="3" className="arch-box tor" />
      <rect x="240" y="180" width="40" height="22" rx="3" className="arch-box tor" />
      {[40, 90, 150, 200, 260].map((x) => (
        <circle key={x} cx={x} cy="260" r="8" className="arch-host" />
      ))}
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

function MicroburstViz() {
  return (
    <svg viewBox="0 0 300 320" className="arch-svg w-full h-auto">
      {/* Leaf-spine */}
      <rect x="40" y="30" width="70" height="26" rx="4" className="arch-box spine" />
      <rect x="190" y="30" width="70" height="26" rx="4" className="arch-box spine" />
      <text x="75" y="46" className="arch-label">spine</text>
      <text x="225" y="46" className="arch-label">spine</text>

      <rect x="25" y="120" width="60" height="24" rx="4" className="arch-box agg" />
      <rect x="120" y="120" width="60" height="24" rx="4" className="arch-box agg" />
      <rect x="215" y="120" width="60" height="24" rx="4" className="arch-box agg" />
      <text x="55" y="136" className="arch-label">leaf</text>
      <text x="150" y="136" className="arch-label">leaf</text>
      <text x="245" y="136" className="arch-label">leaf</text>

      {/* Links */}
      <line x1="75" y1="56" x2="55" y2="120" className="arch-link" />
      <line x1="75" y1="56" x2="150" y2="120" className="arch-link" />
      <line x1="75" y1="56" x2="245" y2="120" className="arch-link" />
      <line x1="225" y1="56" x2="55" y2="120" className="arch-link" />
      <line x1="225" y1="56" x2="150" y2="120" className="arch-link" />
      <line x1="225" y1="56" x2="245" y2="120" className="arch-link" />

      {/* Queue depth bars */}
      <text x="10" y="180" className="arch-tier">QUEUE DEPTH (100μs samples)</text>
      <g>
        {[
          [25, 30], [40, 20], [55, 25], [70, 45], [85, 90], [100, 95], [115, 70],
          [130, 25], [145, 20], [160, 22], [175, 18], [190, 35], [205, 80], [220, 92],
          [235, 60], [250, 22], [265, 20], [280, 24],
        ].map(([x, h], i) => (
          <rect
            key={i}
            x={x}
            y={290 - h}
            width="10"
            height={h}
            rx="1"
            fill={h > 70 ? "#fbbf24" : "#363640"}
            opacity={h > 70 ? 1 : 0.6}
          >
            <animate
              attributeName="opacity"
              values={h > 70 ? "0.6;1;0.6" : "0.4;0.6;0.4"}
              dur={`${1 + (i % 3) * 0.3}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>
      <line x1="20" y1="220" x2="295" y2="220" stroke="#f59e0b" strokeDasharray="3,3" strokeWidth="1" opacity="0.6" />
      <text x="20" y="215" className="arch-tier" fill="#f59e0b">ECN threshold</text>
    </svg>
  );
}

function AQRPipelineViz() {
  return (
    <svg viewBox="0 0 300 320" className="arch-svg w-full h-auto">
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#f59e0b" opacity="0.7" />
        </marker>
        <radialGradient id="classifierGlow">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Query node */}
      <rect x="20" y="20" width="70" height="30" rx="6" className="arch-box agg" />
      <text x="55" y="39" className="arch-label">query</text>

      {/* Arrow query → classifier */}
      <line x1="90" y1="35" x2="115" y2="35" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" markerEnd="url(#arrowhead)" />

      {/* Classifier node (central, pulsing) */}
      <circle cx="150" cy="35" r="28" fill="url(#classifierGlow)">
        <animate attributeName="r" values="28;32;28" dur="2s" repeatCount="indefinite" />
      </circle>
      <rect x="120" y="18" width="60" height="34" rx="6" className="arch-box spine" />
      <text x="150" y="33" className="arch-label" style={{ fontSize: "8px" }}>DistilRoBERTa</text>
      <text x="150" y="45" className="arch-label" style={{ fontSize: "7px", fill: "#8c8a82" }}>classifier</text>

      {/* Branch split arrows */}
      <path d="M 180 35 Q 210 35 215 85" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="2,2" />
      <path d="M 180 35 Q 210 35 215 145" stroke="#f59e0b" strokeWidth="1.5" fill="none" opacity="0.6" />

      {/* Strong branch */}
      <rect x="210" y="75" width="80" height="24" rx="4" className="arch-box tor" />
      <text x="250" y="90" className="arch-label" style={{ fontSize: "8px", fill: "#4ade80" }}>strong → retrieve</text>

      {/* Weak branch (longer path) */}
      <rect x="210" y="135" width="80" height="24" rx="4" className="arch-box spine" />
      <text x="250" y="150" className="arch-label" style={{ fontSize: "8px" }}>Google Trends</text>

      <line x1="250" y1="159" x2="250" y2="178" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" markerEnd="url(#arrowhead)" />

      <rect x="210" y="183" width="80" height="24" rx="4" className="arch-box agg" />
      <text x="250" y="198" className="arch-label" style={{ fontSize: "8px" }}>rewrite</text>

      <line x1="250" y1="207" x2="250" y2="226" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" markerEnd="url(#arrowhead)" />

      <rect x="210" y="231" width="80" height="24" rx="4" className="arch-box tor" />
      <text x="250" y="246" className="arch-label" style={{ fontSize: "8px", fill: "#fbbf24" }}>retrieve</text>

      {/* Animated particles flowing through pipeline */}
      <circle r="2.5" fill="#fbbf24" filter="drop-shadow(0 0 3px #f59e0b)">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 55 35 L 150 35 Q 210 35 215 145 L 250 147 L 250 183 L 250 195 L 250 231 L 250 243" />
      </circle>
      <circle r="2.5" fill="#fbbf24" filter="drop-shadow(0 0 3px #f59e0b)">
        <animateMotion dur="2.5s" begin="0.8s" repeatCount="indefinite" path="M 55 35 L 150 35 Q 210 35 215 145 L 250 147 L 250 183 L 250 195 L 250 231 L 250 243" />
      </circle>
      <circle r="2.5" fill="#4ade80" filter="drop-shadow(0 0 3px #4ade80)">
        <animateMotion dur="1.8s" begin="1.3s" repeatCount="indefinite" path="M 55 35 L 150 35 Q 210 35 215 85 L 250 87" />
      </circle>

      {/* Metrics bar at bottom */}
      <text x="20" y="280" className="arch-tier">CLASSIFIER PERFORMANCE</text>

      {/* Accuracy bar */}
      <text x="20" y="298" style={{ fontSize: "9px", fill: "#8c8a82", fontFamily: "var(--font-mono)" }}>acc</text>
      <rect x="48" y="290" width="150" height="8" rx="1" fill="#26262e" />
      <rect x="48" y="290" width="0" height="8" rx="1" fill="#f59e0b">
        <animate attributeName="width" values="0;123" dur="1.5s" fill="freeze" />
      </rect>
      <text x="205" y="298" style={{ fontSize: "9px", fill: "#fbbf24", fontFamily: "var(--font-mono)", fontWeight: 600 }}>82.4%</text>

      {/* PR-AUC bar */}
      <text x="20" y="314" style={{ fontSize: "9px", fill: "#8c8a82", fontFamily: "var(--font-mono)" }}>auc</text>
      <rect x="48" y="306" width="150" height="8" rx="1" fill="#26262e" />
      <rect x="48" y="306" width="0" height="8" rx="1" fill="#f59e0b">
        <animate attributeName="width" values="0;135" dur="1.5s" begin="0.2s" fill="freeze" />
      </rect>
      <text x="205" y="314" style={{ fontSize: "9px", fill: "#fbbf24", fontFamily: "var(--font-mono)", fontWeight: 600 }}>0.90</text>
    </svg>
  );
}

const cases = [
  {
    id: "proj-microburst",
    index: "/ 01",
    stack: ["Go", "Python", "Mininet", "Linux tc", "netlink"],
    github: "https://github.com/aryansaraf018/fabric-telemetry",
    title: "Fabric Microburst Telemetry",
    lede: "A microsecond-resolution telemetry agent that catches datacenter congestion bursts byte counters completely miss.",
    sections: [
      {
        h: "Problem",
        p: "Standard SNMP byte-counter polling at 1-second intervals is blind to the sub-millisecond queue bursts that drive AI collective-traffic tail latency. The visible 17% peak link utilization hides the fact that every burst saturates the link.",
      },
      {
        h: "Approach",
        p: "Built a zero-allocation Go agent that samples switch-queue depth over raw netlink every 100µs, paired with a synchronized incast generator that emulates AI collective traffic on a leaf-spine fabric. Benchmarked polling intervals and ECN marking strategies head-to-head.",
      },
    ],
    results: [
      <><strong>100% detection</strong> of 8ms congestion bursts with 1ms queue polling vs. <strong>1%</strong> at 1s</>,
      <>ECN marking cut median peak queue <strong>29%</strong>, but left median completion unchanged and p99 <strong>15% worse</strong></>,
      <>Diagnosed a <strong>10.9ms shaper stall</strong> caused by GSO super-packets</>,
    ],
    diagram: <MicroburstViz />,
    diagramTitle: "Queue Depth vs. ECN Threshold",
  },
  {
    id: "proj-lb",
    index: "/ 02",
    stack: ["Go", "Mininet", "OpenFlow", "Prequal"],
    github: "https://github.com/aryansaraf018/Latency-Aware-Load-Balancer",
    title: "Latency-Aware Load Balancer",
    lede: "A Go load balancer that routes by real-time active probing (Prequal) and crushes tail latency under straggler conditions.",
    sections: [
      {
        h: "Problem",
        p: "Static policies like Least Connections ignore live server state. Under straggler injection on a fat-tree, slow replicas dominate the p99 tail even though the fleet-wide load looks balanced.",
      },
      {
        h: "Approach",
        p: "Built a Go-based load balancer on a two-level fat-tree (Mininet + OpenFlow) that routes using real-time Prequal-style active probing. The controller adapts probe rate to server heterogeneity so hot replicas get sampled more aggressively than cold ones.",
      },
    ],
    results: [
      <><strong>3.8× lower</strong> p99 tail latency (570ms → 150ms) vs. Least Connections under straggler injection</>,
      <>Up to <strong>39% fewer probes</strong> at equal p99 via adaptive probe-rate control</>,
      <>Isolated network delay as the driver: on a flat topology, all 4 routing policies tied at <strong>~43ms p99</strong></>,
    ],
    diagram: <ArchSvgLB />,
    diagramTitle: "Fat-Tree Topology",
  },
  {
    id: "proj-aqr",
    index: "/ 03",
    stack: ["Python", "DistilRoBERTa", "RAG", "Google Trends API"],
    title: "Adaptive Query Reformulation (AQR-RAG)",
    lede: "A query-rewriting layer that boosts RAG retrieval on ambiguous queries using real-time trend signals.",
    sections: [
      {
        h: "Problem",
        p: "RAG systems struggle on short, ambiguous queries: the retriever returns lexically-similar but semantically-off passages. Static rewriters miss time-sensitive phrasing that only matters right now.",
      },
      {
        h: "Approach",
        p: "Fine-tuned DistilRoBERTa as a binary classifier (weak vs. strong query). Weak queries route through a rewriting path that injects real-time Google Trends context, aligning the expansion with trending terminology before retrieval.",
      },
    ],
    results: [
      <><strong>82.4%</strong> classification accuracy on held-out queries with fine-tuned DistilRoBERTa</>,
      <><strong>0.90 PR-AUC</strong>, robust precision/recall across the operating range</>,
      <>Trend-aligned reformulations lifted retrieval precision on ambiguous queries</>,
    ],
    diagram: <AQRPipelineViz />,
    diagramTitle: "Query Pipeline",
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
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-mono text-[13px] text-amber font-semibold tracking-wider">{c.index}</span>
                  {c.github && (
                    <a
                      href={c.github}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-fg-2 hover:text-amber-bright transition-colors border border-border px-2.5 py-1 rounded"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      View source
                    </a>
                  )}
                </div>
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

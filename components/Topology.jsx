"use client";

import { useEffect, useRef, useState } from "react";

const W = 400;
const H = 320;

const TIERS = [
  { y: 40, count: 3, size: 10, tier: 0 },
  { y: 120, count: 4, size: 8, tier: 1 },
  { y: 200, count: 6, size: 7, tier: 2 },
  { y: 280, count: 8, size: 5, tier: 3 },
];

function buildGraph() {
  const nodes = [];
  TIERS.forEach((t) => {
    const gap = W / (t.count + 1);
    for (let i = 0; i < t.count; i++) {
      nodes.push({ x: gap * (i + 1), y: t.y, r: t.size, tier: t.tier, id: nodes.length });
    }
  });
  const edges = [];
  function between(tA, tB, density) {
    const a = nodes.filter((n) => n.tier === tA);
    const b = nodes.filter((n) => n.tier === tB);
    a.forEach((na) => {
      b.forEach((nb) => {
        if (Math.abs(na.x - nb.x) < W / 2 && Math.random() < density) edges.push({ a: na, b: nb });
      });
    });
  }
  between(0, 1, 0.7);
  between(1, 2, 0.55);
  nodes
    .filter((n) => n.tier === 3)
    .forEach((host) => {
      const tors = nodes.filter((n) => n.tier === 2);
      const nearest = tors.reduce((best, t) => (Math.abs(t.x - host.x) < Math.abs(best.x - host.x) ? t : best), tors[0]);
      edges.push({ a: host, b: nearest });
    });
  return { nodes, edges };
}

function bfs(nodes, edges, fromId, toId) {
  const adj = new Map(nodes.map((n) => [n.id, []]));
  edges.forEach((e) => {
    adj.get(e.a.id).push(e.b.id);
    adj.get(e.b.id).push(e.a.id);
  });
  const visited = new Set([fromId]);
  const queue = [[fromId]];
  while (queue.length) {
    const path = queue.shift();
    const last = path[path.length - 1];
    if (last === toId) return path;
    for (const next of adj.get(last)) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([...path, next]);
      }
    }
  }
  return null;
}

export default function Topology() {
  const [graph, setGraph] = useState(null);
  const [metrics, setMetrics] = useState({ p50: 12, p95: 34, rps: 8.2 });
  const nodeRefs = useRef({});
  const packetsLayer = useRef(null);

  useEffect(() => {
    setGraph(buildGraph());
  }, []);

  useEffect(() => {
    if (!graph) return;

    const sendPacket = () => {
      const hosts = graph.nodes.filter((n) => n.tier === 3);
      const from = hosts[Math.floor(Math.random() * hosts.length)];
      let to = hosts[Math.floor(Math.random() * hosts.length)];
      while (to.id === from.id) to = hosts[Math.floor(Math.random() * hosts.length)];

      const path = bfs(graph.nodes, graph.edges, from.id, to.id);
      if (!path) return;
      const pathNodes = path.map((id) => graph.nodes.find((n) => n.id === id));

      pathNodes.forEach((n, i) => {
        setTimeout(() => {
          const el = nodeRefs.current[n.id];
          if (!el) return;
          el.classList.add("node-active");
          setTimeout(() => el.classList.remove("node-active"), 500);
        }, i * 180);
      });

      if (!packetsLayer.current) return;
      const packet = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      packet.setAttribute("r", "3");
      packet.setAttribute("class", "packet");
      packet.setAttribute("cx", from.x);
      packet.setAttribute("cy", from.y);
      packetsLayer.current.appendChild(packet);

      let step = 0;
      const animate = () => {
        if (step >= pathNodes.length - 1) {
          packet.remove();
          return;
        }
        const a = pathNodes[step];
        const b = pathNodes[step + 1];
        const start = performance.now();
        const dur = 180;
        const frame = (now) => {
          const t = Math.min(1, (now - start) / dur);
          packet.setAttribute("cx", a.x + (b.x - a.x) * t);
          packet.setAttribute("cy", a.y + (b.y - a.y) * t);
          if (t < 1) requestAnimationFrame(frame);
          else {
            step++;
            animate();
          }
        };
        requestAnimationFrame(frame);
      };
      animate();
    };

    sendPacket();
    const packetInterval = setInterval(sendPacket, 550);
    const metricInterval = setInterval(() => {
      setMetrics({
        p50: 9 + Math.floor(Math.random() * 6),
        p95: 28 + Math.floor(Math.random() * 12),
        rps: +(7 + Math.random() * 2.5).toFixed(1),
      });
    }, 1400);

    return () => {
      clearInterval(packetInterval);
      clearInterval(metricInterval);
    };
  }, [graph]);

  return (
    <div className="bg-bg-card border border-border rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center px-[18px] py-3.5 bg-bg-1 border-b border-border">
        <span className="font-mono text-xs text-fg-1 font-medium">fat-tree.topology</span>
        <span className="inline-flex gap-1.5 items-center font-mono text-[11px] text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
          live
        </span>
      </div>
      <div
        className="p-4"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.03) 0%, transparent 70%)" }}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="topology-svg w-full h-auto block">
          <g>
            {graph?.edges.map((e, i) => (
              <line key={i} x1={e.a.x} y1={e.a.y} x2={e.b.x} y2={e.b.y} className="edge" />
            ))}
          </g>
          <g ref={packetsLayer} />
          <g>
            {graph?.nodes.map((n) => (
              <circle
                key={n.id}
                ref={(el) => (nodeRefs.current[n.id] = el)}
                cx={n.x}
                cy={n.y}
                r={n.r}
                className={`node node-tier-${Math.min(n.tier, 2)}`}
              />
            ))}
          </g>
        </svg>
      </div>
      <div className="grid grid-cols-4 bg-bg-1 border-t border-border">
        {[
          { label: "p50", value: `${metrics.p50}ms` },
          { label: "p95", value: `${metrics.p95}ms` },
          { label: "rps", value: `${metrics.rps}k` },
          { label: "nodes", value: "20" },
        ].map((m, i) => (
          <div key={m.label} className={`p-3.5 text-center ${i < 3 ? "border-r border-border" : ""}`}>
            <span className="block font-mono text-[10px] text-fg-3 uppercase tracking-[1px] mb-1">{m.label}</span>
            <span className="block font-mono text-[15px] font-semibold text-amber-bright">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

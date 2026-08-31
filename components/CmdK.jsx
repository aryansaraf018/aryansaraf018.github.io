"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const baseItems = [
  { group: "Navigate", icon: "01", label: "Work & Experience", sub: "g w", action: () => jump("#work") },
  { group: "Navigate", icon: "02", label: "Projects", sub: "g p", action: () => jump("#projects") },
  { group: "Navigate", icon: "03", label: "Stack", sub: "g s", action: () => jump("#stack") },
  { group: "Navigate", icon: "04", label: "Education", sub: "g e", action: () => jump("#education") },
  { group: "Navigate", icon: "05", label: "Contact", sub: "g c", action: () => jump("#contact") },
  { group: "Links", icon: "@", label: "Email: aryanrah@usc.edu", sub: "open", action: () => (window.location.href = "mailto:aryanrah@usc.edu") },
  { group: "Links", icon: "in", label: "LinkedIn", sub: "open", action: () => window.open("https://www.linkedin.com/in/aryan-saraf12/", "_blank") },
  { group: "Links", icon: "gh", label: "GitHub", sub: "open", action: () => window.open("https://github.com/aryansaraf018", "_blank") },
  { group: "Links", icon: "PDF", label: "Download Resume", sub: "open", action: () => window.open("/Aryan_Saraf_Resume.pdf", "_blank") },
  {
    group: "Actions",
    icon: "✶",
    label: "Copy email to clipboard",
    sub: "⏎",
    action: () => {
      navigator.clipboard.writeText("aryanrah@usc.edu");
      showToast("Email copied");
    },
  },
  { group: "Actions", icon: "☏", label: "Call (408) 590-5570", sub: "open", action: () => (window.location.href = "tel:+14085905570") },
];

function jump(hash) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
}

function showToast(msg) {
  let el = document.querySelector(".portfolio-toast");
  if (!el) {
    el = document.createElement("div");
    el.className =
      "portfolio-toast fixed bottom-7 right-7 bg-bg-2 border border-amber-line rounded-[10px] py-3.5 px-[18px] max-w-[320px] text-fg-1 text-[13px] font-mono z-[10001] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all opacity-0 translate-y-5";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
  clearTimeout(el._t);
  el._t = setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
  }, 2500);
}

export default function CmdK() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return baseItems;
    return baseItems.filter((i) => i.label.toLowerCase().includes(q) || i.group.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      } else if (open) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActive((a) => Math.min(filtered.length - 1, a + 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setActive((a) => Math.max(0, a - 1));
        } else if (e.key === "Enter") {
          e.preventDefault();
          filtered[active]?.action();
          setOpen(false);
        }
      }
    }
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-cmdk", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-cmdk", onOpen);
    };
  }, [open, filtered, active]);

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  const grouped = useMemo(() => {
    const out = {};
    filtered.forEach((i) => {
      (out[i.group] = out[i.group] || []).push(i);
    });
    return out;
  }, [filtered]);

  let flatIdx = -1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[10000] flex items-start justify-center pt-[15vh]"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ scale: 0.97, y: -8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97, y: -8 }}
            transition={{ duration: 0.15 }}
            className="relative w-[90%] max-w-[560px] bg-bg-2 border border-border-bright rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="flex items-center gap-3 p-[18px] border-b border-border text-fg-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to section, email, github..."
                className="flex-1 bg-transparent border-0 outline-none text-fg-0 text-[15px]"
              />
              <span className="kbd">ESC</span>
            </div>
            <div className="p-2 max-h-[360px] overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-3 py-2.5 font-mono text-[10px] text-fg-3 uppercase tracking-wide">No results</div>
              ) : (
                Object.entries(grouped).map(([group, items]) => (
                  <div key={group}>
                    <div className="px-3 pt-2.5 pb-1.5 font-mono text-[10px] text-fg-3 uppercase tracking-[1.5px]">
                      {group}
                    </div>
                    {items.map((item) => {
                      flatIdx++;
                      const isActive = flatIdx === active;
                      return (
                        <div
                          key={item.label}
                          onClick={() => {
                            item.action();
                            setOpen(false);
                          }}
                          onMouseEnter={() => setActive(filtered.indexOf(item))}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-[7px] cursor-pointer text-fg-1 text-sm transition-colors ${
                            isActive ? "bg-amber-dim text-fg-0" : ""
                          }`}
                        >
                          <span className="text-amber font-mono text-[13px] w-[18px] flex-none">{item.icon}</span>
                          <span>{item.label}</span>
                          <span className="ml-auto text-[11px] text-fg-3 font-mono">{item.sub}</span>
                        </div>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

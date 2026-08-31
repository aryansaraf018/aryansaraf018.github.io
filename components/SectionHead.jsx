"use client";

import { motion } from "framer-motion";

export default function SectionHead({ num, label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 max-w-[900px]"
    >
      <div className="flex items-center gap-3.5 mb-5 font-mono text-xs text-fg-2">
        <span className="text-amber font-semibold">{num}</span>
        <span className="flex-none w-[60px] h-px bg-border-bright" />
        <span className="uppercase tracking-[2px]">{label}</span>
      </div>
      <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-fg-0 leading-[1.1]">
        {title}
      </h2>
    </motion.div>
  );
}

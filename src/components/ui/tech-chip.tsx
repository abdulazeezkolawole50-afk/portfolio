"use client";

import { motion } from "motion/react";

export default function TechChip({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition duration-300 hover:border-[#8b5cf6] hover:bg-violet-500/10 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]"
    >
      {label}
    </motion.span>
  );
}
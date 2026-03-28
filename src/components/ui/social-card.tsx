"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function SocialCard({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="glass flex items-center justify-between rounded-3xl p-5 transition hover:border-fuchsia-300/20"
    >
      <div>
        <p className="text-lg font-medium">{name}</p>
        <p className="mt-1 text-sm text-slate-400">Connect with me</p>
      </div>
      <ArrowUpRight className="h-5 w-5 text-white/70" />
    </motion.a>
  );
}
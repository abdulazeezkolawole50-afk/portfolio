"use client";

import { motion } from "motion/react";

type Tab = "projects" | "certificates" | "tech";

export default function TabSwitcher({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  const tabs: Tab[] = ["projects", "certificates", "tech"];

  return (
    <div className="glass inline-flex rounded-2xl p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className="relative rounded-xl px-4 py-2 text-sm capitalize text-white/75"
        >
          {active === tab && (
            <motion.span
              layoutId="active-tab"
              className="absolute inset-0 rounded-xl bg-violet-500/15 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.3,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -3, scale: 1.02 }}
      className="glass flex min-h-[160px] flex-col justify-center rounded-3xl p-6 text-center"
    >
      <div className="stats-mono stats-number">{display}+</div>
      <div className="mt-3 text-sm text-slate-400">{label}</div>
    </motion.div>
  );
}
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Monitor } from "lucide-react";

type Token = {
  text: string;
  className: string;
};

type Line = Token[];

const codeLines: Line[] = [
  [
    { text: "My name is Abdulazeez", className: "text-cyan-300" },
    { text: " ", className: "text-white" },
    { text: "= ", className: "text-white" },
    { text: "{", className: "text-white" },
  ],
  [
    { text: "  role", className: "text-pink-400" },
    { text: ": ", className: "text-white" },
    { text: '"full stack developer",', className: "text-emerald-300" },
  ],
  [
    { text: "  skills", className: "text-pink-400" },
    { text: ": ", className: "text-white" },
    { text: '["Next.js", "react", Tailwind"],', className: "text-emerald-300" },
  ],
  [
    { text: "  focus", className: "text-pink-400" },
    { text: ": ", className: "text-white" },
    { text: '"Premium UI",', className: "text-emerald-300" },
  ],
  [
    { text: "  status", className: "text-pink-400" },
    { text: ": ", className: "text-white" },
    { text: '"Building..."', className: "text-cyan-300" },
  ],
  [{ text: "}", className: "text-white" }],
];

function flattenCode(lines: Line[]) {
  const flat: { char: string; className: string }[] = [];

  lines.forEach((line, lineIndex) => {
    line.forEach((token) => {
      for (const char of token.text) {
        flat.push({ char, className: token.className });
      }
    });

    if (lineIndex < lines.length - 1) {
      flat.push({ char: "\n", className: "text-white" });
    }
  });

  return flat;
}

export default function HeroVisual() {
  const characters = useMemo(() => flattenCode(codeLines), []);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const startDelay = 1800;
    const typingSpeed = 35;

    let interval: ReturnType<typeof setInterval> | null = null;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setVisibleCount((prev) => {
          if (prev >= characters.length) {
            return 0;
          }
          return prev + 1;
        });
      }, typingSpeed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [characters.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.8, ease: "easeOut", delay: 1.6 },
        scale: { duration: 0.8, ease: "easeOut", delay: 1.6 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
      className="relative mx-auto flex h-[480px] w-full max-w-[540px] items-center justify-center"
    >
      {/* soft glow */}
      <div className="absolute h-[260px] w-[260px] rounded-full bg-violet-600/15 blur-[70px]" />
      <div className="absolute bottom-10 left-10 h-[120px] w-[120px] rounded-full bg-cyan-400/10 blur-[60px]" />

      {/* clean monitor */}
      <motion.div
        animate={{ rotate: [0, 0.25, 0, -0.25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="glass relative h-[250px] w-[350px] rounded-[30px] p-4 shadow-[0_0_30px_rgba(124,58,237,0.12)]">
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-violet-500/16 via-indigo-500/8 to-cyan-400/8" />

          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br from-violet-500/40 via-indigo-500/18 to-cyan-400/18 px-6">
            <Monitor className="absolute left-4 top-4 h-4 w-4 text-white/40" />

            <div className="w-full max-w-[250px]">
              <pre className="whitespace-pre-wrap break-words font-mono text-[12px] leading-6 text-slate-200">
                <code>
                  {characters.slice(0, visibleCount).map((item, index) => (
                    <span key={index} className={item.className}>
                      {item.char}
                    </span>
                  ))}
                  <span className="cursor-blink inline-block h-4 w-[2px] translate-y-[2px] bg-cyan-300 align-middle" />
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* stand */}
        <div className="mx-auto h-5 w-24 rounded-b-2xl bg-white/75" />
        <div className="mx-auto mt-1 h-3 w-40 rounded-full bg-white/85" />
      </motion.div>
    </motion.div>
  );
}
"use client";

import { motion } from "motion/react";

export default function WelcomeScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#05060F]">
      
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-400/20 blur-3xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center"
      >
        {/* Small top text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-4 text-sm tracking-[0.3em] text-fuchsia-400"
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>

        {/* Big text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-3xl font-bold text-white md:text-5xl"
        >
          Abdulazeez Kolawole
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-4 text-slate-400"
        >
          Full-Stack Developer • Building real-world solutions
        </motion.p>

        {/* Loading bar */}
        <motion.div
          className="mx-auto mt-8 h-[2px] w-40 overflow-hidden bg-white/10"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-20 bg-gradient-to-r from-fuchsia-500 to-cyan-400"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
"use client";

import { AnimatePresence, motion } from "motion/react";
import { Code2, Github, User } from "lucide-react";

export default function SplashScreen({ show }: { show: boolean }) {
  const icons = [Code2, User, Github];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="relative text-center">
            <div className="absolute inset-0 mx-auto h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

            <motion.div
              className="relative mb-6 flex items-center justify-center gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {icons.map((Icon, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 18, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      y: [0, -8, 0],
                      scale: 1,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="glass rounded-2xl p-4"
                >
                  <Icon className="h-6 w-6 text-fuchsia-200" />
                </motion.div>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Welcome
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-3 text-sm text-slate-400"
            >
              Building polished web experiences.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
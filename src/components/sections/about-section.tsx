"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BadgeCheck, Code2, Database, Server } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    text: "Clean interfaces, responsive layouts, and strong attention to UX.",
  },
  {
    icon: Server,
    title: "Backend",
    text: "Structured logic, maintainable systems, and practical architecture.",
  },
  {
    icon: Database,
    title: "Data",
    text: "Real-world applications powered by scalable, organized data flows.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-32">
      <SectionHeading
        eyebrow="About"
        title="Building with discipline, clarity, and steady growth."
        description="A focused full-stack developer committed to solving real problems with practical web applications."
      />

      {/* TOP ROW: About card + Profile card */}
      <div className="grid items-stretch gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT MAIN ABOUT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="glass h-full rounded-3xl p-8">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/85">
                Abdulazeez Kolawole
              </span>
              <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-4 py-1.5 text-sm text-fuchsia-200">
                Full-Stack Developer
              </span>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-300">
              <p>
                I’m <span className="font-semibold text-white">Abdulazeez Kolawole</span>, a{" "}
                <span className="font-semibold text-white">Full-Stack Developer</span> on a
                continuous journey of growth, focused on building real-world web applications that
                solve practical problems.
              </p>

              <p>
                My approach to development is rooted in discipline, consistency, and learning
                through experience. I value clarity, structure, and steady progress over quick
                results.
              </p>

              <p>
                I work with technologies like <span className="text-white">React</span>,{" "}
                <span className="text-white">Node.js</span>, and{" "}
                <span className="text-white">MySQL</span>, focusing on scalable systems and
                intuitive UI.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass relative flex h-full w-full max-w-[320px] flex-col rounded-[32px] p-6"
          >
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/10" />

            <div className="relative flex h-full flex-col">
              <div className="mb-6 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-400">Profile</p>
                  <h3 className="text-lg font-semibold leading-tight text-white">
                    Abdulazeez Kolawole
                  </h3>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Open to work
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.015, 1],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl" />
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(139,92,246,0.18)",
                        "0 0 30px rgba(139,92,246,0.28)",
                        "0 0 0px rgba(139,92,246,0.18)",
                      ],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative h-48 w-48 overflow-hidden rounded-full border border-white/10 ring-1 ring-white/10"
                  >
                    <Image
                      src="/me.jpg"
                      alt="Abdulazeez Kolawole"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Role</p>
                  <p className="mt-2 text-sm font-medium text-white">Full-Stack Dev</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
                  <p className="mt-2 text-sm font-medium text-white">Scalable UI</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM ROW: small cards only */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:max-w-[62%]">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              className="glass rounded-3xl p-5"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <Icon className="h-5 w-5 text-fuchsia-200" />
              </div>

              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
"use client";

import { motion } from "motion/react";
import { ArrowRight, Download, Github, Sparkles } from "lucide-react";
import BlobBackground from "@/components/ui/blob-background";
import HeroVisual from "@/components/ui/hero-visual";
import SiteNavbar from "@/components/ui/site-navbar";

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.8,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <BlobBackground />
      <SiteNavbar />

      <div className="section-shell flex min-h-screen items-center pt-32 pb-20">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div variants={heroContainer} initial="hidden" animate="visible">
            <motion.div
              variants={heroItem}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              <Sparkles className="h-4 w-4 text-fuchsia-300" />
              Available for work
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="heading-gradient max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-6xl"
            >
              I build fast, scalable web apps with premium UX.
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="body-muted mt-6 max-w-2xl text-base sm:text-lg"
            >
              Full stack developer focused on modern frontend systems, clean
              architecture, and user-focused digital products that feel smooth,
              polished, and production-ready.
            </motion.p>

            <motion.div variants={heroItem} className="mt-6 flex flex-wrap gap-3">
              {["Next.js", "React", "Node.js", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 transition duration-300 hover:scale-105 hover:border-violet-500/50"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div variants={heroItem} className="mt-8 flex flex-wrap gap-4">
              <a href="#showcase" className="btn-primary">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>

              <a
                href="https://github.com/abdulazeezkolawole50-afk"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>

              <a href="/resume.pdf" className="btn-secondary">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
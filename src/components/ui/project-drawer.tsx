"use client";

import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, Github, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Project } from "@/lib/data";

export default function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.button
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="glass fixed right-0 top-0 z-50 h-screen w-full max-w-2xl border-l border-white/10 p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="heading-gradient text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{project.summary}</p>
              </div>
              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/75 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="mb-6 h-56 w-full rounded-3xl object-cover"
            />

            <div className="mb-5 flex flex-wrap gap-3">
              <a href={project.liveUrl} target="_blank" className="btn-primary btn-primary-glow" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
              <a href={project.githubUrl} target="_blank" className="btn-secondary" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300">
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
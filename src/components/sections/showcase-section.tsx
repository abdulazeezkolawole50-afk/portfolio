"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  ExternalLink,
  FileBadge2,
  Github,
  Layers3,
  ArrowUpRight,
  Sparkles,
  Clock3,
} from "lucide-react";
import { useState } from "react";
import ProjectDrawer from "@/components/ui/project-drawer";
import SectionHeading from "@/components/ui/section-heading";
import TabSwitcher from "@/components/ui/tab-switcher";
import TechChip from "@/components/ui/tech-chip";
import { certificates, projects, techStack, type Project } from "@/lib/data";

type Tab = "projects" | "certificates" | "tech";

const projectProofs: Record<string, string> = {
  "Real Estate Platform":
    "Property discovery flow with premium listing presentation, search-driven browsing, and lead capture.",
  "Restaurant Ordering System":
    "Customer ordering workflow paired with admin-side management, order tracking, and operational control.",
  "Developer Portfolio":
    "Single-page glassmorphic portfolio built for strong positioning, polished presentation, and premium interaction design.",
};

const projectStatus: Record<
  string,
  {
    isLive: boolean;
    hasGithub: boolean;
    label: string;
  }
> = {
  "Real Estate Platform": {
    isLive: false,
    hasGithub: false,
    label: "In Progress",
  },
  "Restaurant Ordering System": {
    isLive: false,
    hasGithub: false,
    label: "In Progress",
  },
  "Developer Portfolio": {
    isLive: true,
    hasGithub: false,
    label: "Current Build",
  },
};

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="showcase" className="section-shell py-32">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Selected projects and the systems behind them."
          description="A curated view of practical builds, technical growth, and the stack I use to ship polished digital products."
        />
        <TabSwitcher active={activeTab} onChange={setActiveTab} />
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "projects" && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project, index) => {
              const status = projectStatus[project.title] ?? {
                isLive: false,
                hasGithub: false,
                label: "In Progress",
              };

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="glass group flex h-full flex-col overflow-hidden rounded-3xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#060814]/45 to-transparent" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b1120]/60 px-3 py-1.5 text-xs text-white/75 backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5 text-fuchsia-200" />
                      {status.label}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="flex translate-y-3 gap-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {status.isLive ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        ) : (
                          <span className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70">
                            <Clock3 className="mr-2 h-4 w-4" />
                            Coming Soon
                          </span>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="btn-secondary"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition hover:border-violet-500/40 hover:bg-white/10 hover:text-white"
                        aria-label={`Open details for ${project.title}`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-400">{project.summary}</p>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Project Value
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {projectProofs[project.title] ??
                          "A practical product build focused on usability, structure, and real-world implementation."}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {status.isLive ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70">
                          <Clock3 className="mr-2 h-4 w-4" />
                          Coming Soon
                        </span>
                      )}

                      {status.hasGithub ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      ) : (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="btn-secondary"
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}

        {activeTab === "certificates" && (
          <motion.div
            key="certificates"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                className="glass rounded-3xl p-6"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <FileBadge2 className="h-5 w-5 text-fuchsia-200" />
                </div>

                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{cert.issuer}</p>
                <p className="mt-1 text-sm text-slate-500">{cert.year}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "tech" && (
          <motion.div
            key="tech"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="glass rounded-3xl p-6"
          >
            <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
              <Layers3 className="h-5 w-5 text-cyan-200" />
            </div>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <TechChip key={tech} label={tech} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
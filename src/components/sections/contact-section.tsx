"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { useState } from "react";
import { socials } from "@/lib/data";

function getSocialIcon(name: string) {
  const key = name.toLowerCase();

  if (key.includes("linkedin")) return Linkedin;
  if (key.includes("instagram")) return Instagram;
  if (key.includes("tiktok")) return MessageCircle;

  return ArrowUpRight;
}

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus({
      type: "loading",
      message: "Sending your message...",
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({
          type: "error",
          message: data?.error || "Failed to send message.",
        });
        return;
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send message right now.",
      });
    }
  }

  return (
    <section id="contact" className="section-shell py-32">
      <div className="mb-12 max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-fuchsia-300">
          Connect With Me
        </p>

        <h2 className="heading-gradient max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
          Let’s build something clear, modern, and useful.
        </h2>

        <p className="body-muted mt-5 max-w-2xl text-base sm:text-lg">
          Reach out for full-stack builds, frontend interfaces, or product-focused
          redesigns with stronger UX and cleaner structure.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass rounded-[28px] p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
              <Mail className="h-5 w-5 text-fuchsia-200" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">Contact Form</h3>
              <p className="mt-1 text-sm text-slate-400">
                Share your project, idea, or collaboration request.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name"
                className="input"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <input
                type="email"
                placeholder="Your email"
                className="input"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <input
              type="text"
              placeholder="Project subject"
              className="input"
              value={form.subject}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, subject: e.target.value }))
              }
            />

            <textarea
              placeholder="Tell me about your project"
              rows={7}
              className="input resize-none"
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
            />

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="btn-primary"
                disabled={status.type === "loading"}
              >
                <Send className="mr-2 h-4 w-4" />
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status.type !== "idle" && (
                <p
                  className={
                    status.type === "success"
                      ? "text-sm text-emerald-300"
                      : status.type === "error"
                      ? "text-sm text-rose-300"
                      : "text-sm text-slate-400"
                  }
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="space-y-6"
        >
          <div className="glass rounded-[28px] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <MessageCircle className="h-5 w-5 text-cyan-200" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Direct Contact</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Fastest ways to reach me and start a conversation.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Email
                </p>
                <p className="mt-2 break-all text-sm font-medium text-white">
                  abdulazeezkolawole50@gmail.com
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Availability
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  Open to freelance, collaboration, and frontend-focused product work
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-[28px] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">Socials</h3>
            <p className="mt-2 text-sm text-slate-400">
              Connect with me across platforms.
            </p>

            <div className="mt-6 grid gap-3">
              {socials.map((social) => {
                const Icon = getSocialIcon(social.name);

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-violet-500/40 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5">
                          <Icon className="h-4 w-4 text-white/80" />
                        </div>
                        <span className="text-sm font-medium text-white">
                          {social.name}
                        </span>
                      </div>

                      <ArrowUpRight className="h-4 w-4 text-white/50 transition duration-300 group-hover:text-white" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { socials } from "@/lib/data";

function getSocialIcon(name: string) {
  const key = name.toLowerCase();

  if (key.includes("linkedin")) return Linkedin;
  if (key.includes("instagram")) return Instagram;
  if (key.includes("tiktok")) return MessageCircle;
  if (key.includes("whatsapp")) return MessageCircle;

  return ArrowUpRight;
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => null);
        setStatus(data?.error || "Something went wrong ❌");
      }
    } catch {
      setStatus("Network error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT - FORM */}
        <div className="glass-card p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
              <Mail className="h-5 w-5 text-fuchsia-200" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Contact Form</h2>
              <p className="mt-1 text-sm text-white/60">
                Share your project, idea, or collaboration request.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white outline-none"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white outline-none"
              required
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="h-32 w-full rounded-lg border border-white/10 bg-white/5 p-3 text-white outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex w-full items-center justify-center gap-2"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && <p className="mt-4 text-sm text-white/70">{status}</p>}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* DIRECT CONTACT */}
          <div className="glass-card p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <MessageCircle className="h-5 w-5 text-cyan-200" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Direct Contact
                </h3>
                <p className="mt-1 text-sm text-white/60">
                  Fastest ways to reach me and start a conversation.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Email</p>
                <p className="mt-1 break-all text-white">
                  abdulazeezkolawole50@gmail.com
                </p>
              </div>

              <a
                href="https://wa.me/2348109739729?text=Hello%20Abdulazeez,%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20work%20with%20you"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-green-500/40 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <MessageCircle className="text-green-400" />
                <div>
                  <p className="text-sm text-white/50">WhatsApp</p>
                  <p className="text-white">Chat with me instantly</p>
                </div>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/50">Availability</p>
                <p className="text-white">
                  Open to freelance, collaboration, and product-focused work.
                </p>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">Socials</h3>
            <p className="mt-2 text-sm text-white/60">
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
        </div>
      </div>
    </section>
  );
}
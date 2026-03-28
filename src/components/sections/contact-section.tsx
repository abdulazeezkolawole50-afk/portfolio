"use client";

import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (err) {
      setStatus("Network error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-shell py-24">
      <div className="grid gap-10 lg:grid-cols-2">

        {/* LEFT - FORM */}
        <div className="glass-card p-6">
          <h2 className="text-2xl font-bold mb-2">Contact Form</h2>
          <p className="text-white/60 mb-6">
            Share your project, idea, or collaboration request.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white"
              required
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white h-32"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <p className="mt-4 text-sm text-white/70">{status}</p>
          )}
        </div>

        {/* RIGHT - DIRECT CONTACT */}
        <div className="glass-card p-6 space-y-6">
          <h2 className="text-2xl font-bold">Direct Contact</h2>

          {/* EMAIL */}
          <div className="flex items-center gap-3">
            <Mail className="text-violet-400" />
            <div>
              <p className="text-sm text-white/50">Email</p>
              <p className="text-white">
                abdulazeezkolawole50@gmail.com
              </p>
            </div>
          </div>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/2348109739729?text=Hello%20Abdulazeez,%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20work%20with%20you"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:border-green-500/50 transition"
          >
            <MessageCircle className="text-green-400" />
            <div>
              <p className="text-sm text-white/50">WhatsApp</p>
              <p className="text-white">Chat with me instantly</p>
            </div>
          </a>

          {/* AVAILABILITY */}
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/50">Availability</p>
            <p className="text-white">
              Open to freelance, collaboration, and product-focused work.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
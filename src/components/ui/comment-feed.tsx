"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

const commentSchema = z.object({
  name: z.string().min(2),
  message: z.string().min(2),
  avatar: z.string().url().optional().or(z.literal("")),
});

type Comment = {
  id: string;
  name: string;
  message: string;
  avatar?: string | null;
  created_at?: string;
};

const defaultAvatars = [
  "https://api.dicebear.com/7.x/lorelei/svg?seed=Neo",
  "https://api.dicebear.com/7.x/lorelei/svg?seed=Pixel",
  "https://api.dicebear.com/7.x/lorelei/svg?seed=Nova",
];

export default function CommentFeed() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [avatar, setAvatar] = useState(defaultAvatars[0]);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const localFallback = useMemo<Comment[]>(
    () => [
      {
        id: "fallback-1",
        name: "Ada",
        message: "Clean visuals. Smooth interactions. This feels premium.",
        avatar: defaultAvatars[1],
      },
    ],
    []
  );

  useEffect(() => {
    const fetchComments = async () => {
      if (!supabase) {
        setComments(localFallback);
        return;
      }

      const { data, error } = await supabase.from("comments").select("*").order("created_at", { ascending: false });

      if (error) {
        setComments(localFallback);
        return;
      }

      setComments(data ?? []);
    };

    fetchComments();
  }, [localFallback]);

  const submit = async () => {
    setError("");
    const parsed = commentSchema.safeParse({ name, message, avatar });

    if (!parsed.success) {
      setError("Please enter a valid name and message.");
      return;
    }

    setSending(true);

    if (!supabase) {
      const newComment: Comment = {
        id: crypto.randomUUID(),
        name,
        message,
        avatar,
      };
      setComments((prev) => [newComment, ...prev]);
      setName("");
      setMessage("");
      setSending(false);
      return;
    }

    const { data, error } = await supabase.from("comments").insert([{ name, message, avatar }]).select().single();

    if (error) {
      setError("Could not post comment.");
      setSending(false);
      return;
    }

    setComments((prev) => [data, ...prev]);
    setName("");
    setMessage("");
    setSending(false);
  };

  return (
    <div className="glass rounded-3xl p-6">
      <div className="mb-5">
        <h3 className="heading-gradient text-xl font-semibold">Live Comments</h3>
        <p className="mt-2 text-sm text-slate-400">Leave a note with your name, message, and avatar.</p>
      </div>

      <div className="mb-4 grid gap-3">
        <input value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="Your name" />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input resize-none"
          rows={4}
          placeholder="Leave a comment"
        />

        <div>
          <p className="mb-3 text-sm text-slate-400">Choose avatar</p>
          <div className="flex gap-3">
            {defaultAvatars.map((src) => {
              const active = src === avatar;
              return (
                <button
                  key={src}
                  onClick={() => setAvatar(src)}
                  className={`rounded-full border p-1 ${active ? "border-fuchsia-300/60" : "border-white/10"}`}
                >
                  <img src={src} alt="avatar" className="h-12 w-12 rounded-full bg-white/10" />
                </button>
              );
            })}
          </div>
        </div>

        {error ? <p className="text-xs text-rose-300">{error}</p> : null}

        <button onClick={submit} className="btn-primary btn-primary-glow" disabled={sending}>
          {sending ? "Posting..." : "Post Comment"}
        </button>
      </div>

      <div className="no-scrollbar max-h-[360px] space-y-4 overflow-y-auto pr-1">
        {comments.map((comment, i) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="mb-3 flex items-center gap-3">
              <img
                src={comment.avatar || defaultAvatars[0]}
                alt={comment.name}
                className="h-10 w-10 rounded-full bg-white/10"
              />
              <div>
                <p className="font-medium">{comment.name}</p>
                <p className="text-xs text-slate-500">
                  {comment.created_at ? new Date(comment.created_at).toLocaleString() : "Just now"}
                </p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-300">{comment.message}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
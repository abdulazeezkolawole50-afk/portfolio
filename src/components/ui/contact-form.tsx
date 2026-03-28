"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Contact form data:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-6">
      <div className="grid gap-4">
        <div>
          <input {...register("name")} placeholder="Your name" className="input" />
          {errors.name && <p className="mt-2 text-xs text-rose-300">{errors.name.message}</p>}
        </div>

        <div>
          <input {...register("email")} placeholder="Your email" className="input" />
          {errors.email && <p className="mt-2 text-xs text-rose-300">{errors.email.message}</p>}
        </div>

        <div>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell me about your project"
            className="input resize-none"
          />
          {errors.message && <p className="mt-2 text-xs text-rose-300">{errors.message.message}</p>}
        </div>

        <motion.button whileTap={{ scale: 0.98 }} className="btn-primary btn-primary-glow" disabled={isSubmitting}>
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>

        {isSubmitSuccessful && <p className="text-sm text-emerald-300">Message queued successfully.</p>}
      </div>
    </form>
  );
}
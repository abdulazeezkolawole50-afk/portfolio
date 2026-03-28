"use client";

import { motion } from "motion/react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-10"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-fuchsia-300/80">
        {eyebrow}
      </p>
      <h2 className="heading-gradient text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="body-muted mt-4 max-w-2xl text-base">{description}</p> : null}
    </motion.div>
  );
}
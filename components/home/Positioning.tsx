"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function Positioning() {
  return (
    <section className="py-24 bg-surface-1">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <SectionEyebrow text="Why RUNOMA" />
          <h2 className="font-display text-display-sm font-light text-text-primary mb-6">
            Not an agency.
            <br />
            <em>A creative operating system.</em>
          </h2>
          <p className="font-body text-text-secondary text-lg leading-relaxed mb-6">
            Traditional agencies charge enterprise prices and move at enterprise speed.
            Freelancers are fast but inconsistent. RUNOMA sits in the gap — combining
            AI-powered production velocity with senior creative direction.
          </p>
          <p className="font-body text-text-secondary leading-relaxed">
            Every deliverable passes through human creative directors who understand
            Nigerian culture, African markets, and global design standards. The result:
            world-class creative at prices that make sense for Lagos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

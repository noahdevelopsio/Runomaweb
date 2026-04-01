"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import HomepageImage from "@/components/ui/HomepageImage";

export default function Positioning() {
  return (
    <section className="py-24 bg-surface-1">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <SectionEyebrow text="Why RUNOMA" />
            <h2 className="font-display text-display-sm font-light text-text-primary mb-6">
              Not an agency.
              <br />
              <em>A creative operating system.</em>
            </h2>
            <p className="font-body text-text-secondary text-lg leading-relaxed mb-6">
              We are a dynamic team of tech enthusiasts, developers, designers, and visionaries united by a common purpose: to shape the future of technology. 
              Our diverse backgrounds and expertise enable us to approach challenges from different perspectives, finding unique solutions that set new industry standards.
            </p>
            <p className="font-body text-text-secondary leading-relaxed">
             We stay ahead of the curve by embracing the latest technologies and industry trends. 
             This allows us to offer innovative solutions that bring value and efficiency to our customers.
            </p>
          </div>
          <HomepageImage
            src="/acad_1.png"
            alt="Creative professionals collaborating in a modern workspace, representing RUNOMA's innovative approach"
            width={800}
            height={1000}
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "How AI Is Reshaping Creative Workflows in 2025",
    excerpt:
      "From concept to delivery, artificial intelligence is compressing timelines and expanding possibilities for brands worldwide.",
    date: "Mar 28, 2025",
    category: "AI & Creativity",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "The Power of Motion Design in Digital Branding",
    excerpt:
      "Static visuals are no longer enough. Here's why motion-first branding converts better and leaves a lasting impression.",
    date: "Mar 15, 2025",
    category: "Branding",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "Why Every Startup Needs a Fractional CMO",
    excerpt:
      "Senior marketing leadership without the full-time cost — how fractional CMOs are helping startups scale smarter.",
    date: "Feb 28, 2025",
    category: "Strategy",
    readTime: "6 min read",
    slug: "#",
  },
];

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function BlogSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px] top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easing }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-4 block">
            Insights
          </span>
          <h2 className="font-display text-display-sm md:text-display-md font-light text-foreground">
            From the Studio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: easing }}
            >
              <Link
                href={post.slug}
                className="group block h-full rounded-2xl border border-primary/10 bg-surface-1/50 backdrop-blur-sm p-6 md:p-8
                  hover:border-primary/25 hover:bg-surface-2/50
                  hover:shadow-[0_0_30px_rgba(124,180,154,0.06)]
                  transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-primary/70 px-2.5 py-1 rounded-full border border-primary/15 bg-primary/[0.05]">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-text-muted">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="font-mono text-[10px] tracking-wider text-text-muted">
                    {post.date}
                  </span>
                  <span className="font-mono text-xs text-primary/60 group-hover:text-primary transition-colors duration-300">
                    Read →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

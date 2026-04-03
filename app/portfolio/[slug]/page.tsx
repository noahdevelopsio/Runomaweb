import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data/portfolio";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Button from "@/components/ui/Button";

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) notFound();

  const isOneTitaniumBranding = study.slug === "brand-identity-visual-design";
  const introText = study.intro
    ? study.intro
    : isOneTitaniumBranding
      ? "One Titanium is a modern oilfield services company built on engineering excellence across Nigeria and Sub-Saharan Africa. Our goal was to translate that technical strength into a visual identity that feels confident, durable, and unmistakably premium on every touchpoint from brand systems to marketing collateral.\n\nWe collaborated closely with their team to align on positioning, refine the brand narrative, and design a cohesive identity that could scale across campaigns, presentations, and product experiences. The result is a clear visual language: consistent typography, structured layouts, and a system designed for real-world speed, ready for teams to deploy without friction."
      : null;

  return (
    <div className="bg-surface-1 pt-32">
      <div className="max-w-6xl mx-auto px-8 pb-24">
        {/* Header */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-start lg:justify-between">
            <div>
              <SectionEyebrow text="Case Study" />
              <h1 className="font-display text-5xl md:text-display-md font-light text-text-primary mb-5">
                {study.title}
              </h1>
              <p className="font-body text-lg text-text-secondary max-w-2xl leading-relaxed">
                {study.description}
              </p>
            </div>

            <div className="shrink-0">
              <Button href="/portfolio" variant="ghost" size="md">
                ← Back to Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section
          className="relative rounded-3xl overflow-hidden border border-sage/[0.08] mb-12 bg-gradient-card"
        >
          <div className="relative h-[22rem] md:h-[28rem]">
              <>
                {study.video ? (
                  <video
                    src={study.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-sage/10 to-transparent" />
              </>
          </div>
        </section>

        {/* One Titanium: narrative intro (Uber-style) */}
        {introText && (
          <section className="mb-12 px-2">
            {introText.split("\n\n").map((para, i) => (
              <p key={i} className="font-body text-lg md:text-xl text-text-secondary leading-relaxed mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </section>
        )}

{study.gallery && study.gallery.length > 0 && (
          <section className="mb-12">
            <div className="grid grid-cols-2 gap-4">
              {study.gallery.map((media, i) => {
                const isVideo = media.toLowerCase().match(/\.(mp4|mov|avi|webm)$/i);
                return (
                  <div key={i} className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-sage/[0.08]">
                    {isVideo ? (
                      <video
                        src={media}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={media}
                        alt={`${study.title} gallery ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {study.galleryVideos && study.galleryVideos.length > 0 && (
          <section className="mb-12">
            <div className={`grid gap-4 ${study.galleryVideos.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
              {study.galleryVideos.map((vid, i) => (
                <div key={i} className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-sage/[0.08]">
                  <video
                    src={vid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main content */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Client / category */}
            <div className="rounded-3xl border border-sage/[0.08] bg-surface-2/50 p-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="font-mono text-xs tracking-[0.12em] text-sage uppercase mb-2">
                    Client
                  </h2>
                  <p className="font-body text-text-secondary">{study.client}</p>
                </div>
                <div>
                  <h2 className="font-mono text-xs tracking-[0.12em] text-sage uppercase mb-2">
                    Category
                  </h2>
                  <p className="font-body text-text-secondary">{study.category}</p>
                </div>
              </div>
            </div>

            {/* Challenge */}
            {study.challenge && (
              <div className="rounded-3xl border border-sage/[0.08] bg-surface-2/50 p-7">
                <h2 className="font-mono text-xs tracking-[0.12em] text-sage uppercase mb-3">
                  Challenge
                </h2>
                <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed">
                  {study.challenge}
                </p>
              </div>
            )}

            {/* Approach */}
            {study.approach && (
              <div className="rounded-3xl border border-sage/[0.08] bg-surface-2/50 p-7">
                <h2 className="font-mono text-xs tracking-[0.12em] text-sage uppercase mb-3">
                  Approach
                </h2>
                <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed">
                  {study.approach}
                </p>
              </div>
            )}

            {/* Results */}
            <div className="rounded-3xl border border-sage/[0.08] bg-surface-2/50 p-7">
              <h2 className="font-mono text-xs tracking-[0.12em] text-sage uppercase mb-3">
                Results
              </h2>
              <ul className="space-y-2">
                {study.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <span className="text-sage mt-0.5">✓</span>
                    <span className="font-body text-sm text-text-secondary">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-sage/[0.08] bg-surface-2/50 p-7">
              <h2 className="font-mono text-xs tracking-[0.12em] text-sage uppercase mb-4">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-sage/5 text-sage border border-sage/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-sage/[0.08] bg-surface-2/50 p-7">
              <h2 className="font-display text-2xl font-light text-text-primary mb-2">
                Want work like this?
              </h2>
              <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                Book a free audit and we&apos;ll tell you what we&apos;d do first to help
                your brand stand out.
              </p>
              <Button href="/contact" size="lg" fullWidth>
                Book Free Audit →
              </Button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}


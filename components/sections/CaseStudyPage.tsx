import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

type Props = {
  caseStudy: CaseStudy;
};

export default function CaseStudyPage({ caseStudy }: Props) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b21] text-white">
      {/* Hero */}
      <section className="relative px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[#3F8BF9]/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#AB57F3]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
            >
              ← Back to Case Studies
            </Link>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#3F8BF9]">
              Case Study
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              {caseStudy.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
              {caseStudy.description}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-[#3F8BF9]/20 to-[#AB57F3]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b111d] shadow-2xl">
              <Image
                src={caseStudy.hero}
                alt={caseStudy.title}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      {caseStudy.metrics.length > 0 && (
        <section className="relative border-y border-white/10 bg-[#070e27] px-6 py-12 md:px-12">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 md:grid-cols-4">
            {caseStudy.metrics.map((metric) => (
              <div
                key={`${metric.value}-${metric.label}`}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                <div className="bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {metric.value}
                </div>

                <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Challenge */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3F8BF9]">
              The Challenge
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              {caseStudy.challengeTitle}
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-slate-400">
            {caseStudy.challenge.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="relative bg-[#070e27] px-6 py-24 md:px-12 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7469F8]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#AB57F3]">
              The Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              {caseStudy.strategyTitle}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {caseStudy.strategies.map((strategy, index) => (
              <article
                key={strategy.title}
                className="group rounded-3xl border border-white/10 bg-[#0b111d] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3F8BF9]/40"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#3F8BF9] to-[#AB57F3] text-sm font-bold">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold">{strategy.title}</h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {strategy.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* System Improvements */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3F8BF9]">
            System Improvements
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Built for measurable growth.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Ascendia Prime brings together data, media, technology, and customer
            experience to create a performance-led growth ecosystem designed
            for scale, clarity, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 md:px-12">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0b1838] to-[#15102c] p-10 text-center md:p-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-[#3F8BF9]/20 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3F8BF9]">
              Partner With Us
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
              Ready to scale your customer acquisition?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              Get in touch to build a custom growth pipeline.
            </p>

            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] px-8 py-4 font-semibold shadow-lg shadow-[#3F8BF9]/20 transition-transform hover:-translate-y-1"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

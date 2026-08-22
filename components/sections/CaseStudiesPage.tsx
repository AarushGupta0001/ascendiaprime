import Link from "next/link";

const CASE_STUDIES = [
  {
    slug: "case-study-1",
    title: "Transforming a Mid-Sized Insurance Firm with Data-Driven Digital Marketing",
    summary:
      "Discover how a data-focused approach revitalized a mid-sized insurance provider's digital presence and acquisition strategy.",
  },
  {
    slug: "case-study-2",
    title: "Customised Strategy Boosted a Global Anti-Virus Company's Sales by Over 7:1",
    summary:
      "Learn the precise strategies used to generate an impressive 7:1 return for a global cybersecurity and anti-virus brand.",
  },
  {
    slug: "case-study-3",
    title: "Scaling a Family Law Firm with No Win No Fee Growth in 6 Months",
    summary:
      "A look at how targeted campaigns rapidly scaled a family law firm over a 6-month period using a no win, no fee angle.",
  },
  {
    slug: "case-study-4",
    title: "Travel Company Packs a 98% Sales Surge in 45 Days",
    summary:
      "How our team identified the perfect client profile to nearly double sales for a travel agency in just one month and a half.",
  },
  {
    slug: "case-study-5",
    title: "Doubling Bank Customers at Half the Investment",
    summary:
      "An inside look into the acquisition model that brought in twice the banking customers at 50% of the cost.",
  },
  {
    slug: "case-study-6",
    title: "Accelerating Growth from Small to Medium in 3 Months (Supplement Brand)",
    summary:
      "See how a UK-based supplement brand broke through its plateau, transitioning from a small to medium enterprise in 90 days.",
  },
  {
    slug: "case-study-7",
    title: "Customised Strategy Boosted a Global Anti-Virus Company's Sales",
    summary:
      "Further insights into the tailored marketing approach applied to scale a global anti-virus company.",
  },
  {
    slug: "case-study-8",
    title: "Transforming a Mid-Sized Insurance Firm (Background)",
    summary:
      "A deeper dive into the background, initial challenges, and foundational work behind the insurance firm's success.",
  },
] as const;

export default function CaseStudiesPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050b21] px-6 pb-24 pt-36 text-white md:px-12">
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#3F8BF9]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-[#AB57F3]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <header className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3F8BF9]">Ascendia Prime</p>
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Case <span className="bg-gradient-to-r from-[#3F8BF9] to-[#AB57F3] bg-clip-text text-transparent">Studies</span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Explore our high-impact growth campaigns across major global verticals.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CASE_STUDIES.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/${caseStudy.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0b111d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3F8BF9]/50 hover:shadow-2xl md:p-8"
            >
              <div>
                <h2 className="mb-4 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#3F8BF9]">
                  {caseStudy.title}
                </h2>
                <p className="text-sm font-light leading-relaxed text-slate-400 md:text-base">
                  {caseStudy.summary}
                </p>
              </div>

              <span className="mt-6 text-sm font-semibold text-[#3F8BF9] transition-transform duration-300 group-hover:translate-x-1">
                Read Case Study →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

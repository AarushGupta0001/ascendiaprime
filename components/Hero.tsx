import type { ReactNode } from "react";

type HeroProps = {
  badge?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export default function Hero({ badge, title, subtitle, children, className = "" }: HeroProps) {
  return (
    <section className={`relative z-10 pt-24 pb-12 overflow-hidden ${className}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {badge ? (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3F8BF9]/10 border border-[#3F8BF9]/30 text-[#cbd5e1] text-sm font-medium tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E057D8] animate-pulse" />
            {badge}
          </div>
        ) : null}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-lg text-[#94a3b8] max-w-xl leading-relaxed mb-10">{subtitle}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

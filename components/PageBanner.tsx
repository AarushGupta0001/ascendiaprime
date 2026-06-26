import type { ReactNode } from "react";

type PageBannerProps = {
  title: ReactNode;
  meta?: ReactNode;
  className?: string;
};

export default function PageBanner({ title, meta, className = "" }: PageBannerProps) {
  return (
    <header className={`policy-hero fade-up-element ${className}`}>
      <div className="ambient-glow" />
      <h1 className="policy-main-title text-shimmer">{title}</h1>
      {meta ? <p className="policy-hero-meta">{meta}</p> : null}
    </header>
  );
}

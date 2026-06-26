import type { ReactNode } from "react";

type CTAProps = {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export default function CTA({ title, description, children, className = "" }: CTAProps) {
  return (
    <section className={`py-24 px-6 lg:px-12 relative z-10 ${className}`}>
      <div className="max-w-[1200px] mx-auto w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        {description ? (
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">{description}</p>
        ) : null}
        {children ? <div className="flex flex-col sm:flex-row gap-4 justify-center">{children}</div> : null}
      </div>
    </section>
  );
}

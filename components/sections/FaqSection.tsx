"use client";

import { useState, type ReactNode } from "react";

const FAQ_THEMES = ["theme-blue", "theme-indigo", "theme-purple", "theme-pink"] as const;

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
  title?: ReactNode;
  header?: ReactNode;
  className?: string;
};

export default function FaqSection({ items, title = "FAQ Section", header, className = "" }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className={`relative z-10 py-24 ${className}`.trim()}
      style={{ background: "linear-gradient(to bottom, rgba(2, 6, 23, 1) 0%, rgba(15, 23, 42, 0.95) 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 reveal-up">
        {header ?? <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">{title}</h2>}

        <div className="space-y-4" id="faq-container">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const theme = FAQ_THEMES[index % FAQ_THEMES.length];

            return (
              <div
                key={item.question}
                className={`faq-item trace-card relative ${theme} px-6 py-2 md:px-8 md:py-3 text-left${isOpen ? " active" : ""}`}
              >
                <button
                  type="button"
                  className="faq-button text-white w-full select-none outline-none focus:outline-none -webkit-tap-highlight-color-transparent"
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.question}</span>
                  <svg className="w-6 h-6 faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div className="faq-answer text-[#cbd5e1]">{item.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect } from "react";
import { EventArticle, EVENT_ARTICLES } from "@/data/eventArticles";

interface ArticleDetailsModalProps {
  article: EventArticle | null;
  onClose: () => void;
  onSelectArticle: (articleId: string) => void;
  onOpenConversation: () => void;
}

export default function ArticleDetailsModal({
  article,
  onClose,
  onSelectArticle,
  onOpenConversation,
}: ArticleDetailsModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (article) {
      document.body.classList.add("modal-open");
      document.documentElement.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
    };
  }, [article]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && article) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b1330] border border-[#3F8BF9]/35 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] text-white p-6 sm:p-8 md:p-10 animate-fadeIn">
        
        {/* Close Button (matching events modal) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close article details"
          className="modal-close-btn absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Top Header Bar: Category Pill & Article Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 pr-10 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#7469F8]/20 text-[#AB57F3] border border-[#7469F8]/30 text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {article.readTime}
            </span>
          </div>

          {/* Quick Switch Articles Tab Pills */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 text-xs">
            {EVENT_ARTICLES.map((art, idx) => (
              <button
                key={art.id}
                type="button"
                onClick={() => onSelectArticle(art.id)}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer font-medium ${
                  article.id === art.id
                    ? "bg-[#3F8BF9] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Article {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <h2
          id="article-modal-title"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight leading-tight"
        >
          {article.title}
        </h2>

        {/* Author & Meta Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400 font-medium mb-6">
          <span className="text-[#3F8BF9]">Ascendia Prime Insights</span>
          <span>·</span>
          <span>{article.author.name}</span>
          <span>·</span>
          <span>{article.meta}</span>
        </div>

        {/* Highlighted Overview Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border-l-4 border-[#3F8BF9] text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-8">
          {article.overview}
        </div>

        {/* Full Article Body Sections */}
        <div className="space-y-8 max-w-4xl">
          {article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-start gap-2.5">
                <span className="text-[#3F8BF9] font-mono text-base sm:text-lg mt-0.5">
                  0{idx + 1}.
                </span>
                <span>{sec.heading}</span>
              </h3>

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {p}
                </p>
              ))}

              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                <ul className="my-3 space-y-2 pl-2">
                  {sec.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#AB57F3] mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.keyTakeaway && (
                <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-[#3F8BF9]/10 to-[#AB57F3]/10 border border-[#3F8BF9]/30 text-xs sm:text-sm text-white font-medium flex items-start gap-3">
                  <span className="text-[#3F8BF9] text-base font-bold">💡</span>
                  <div>
                    <strong className="text-[#3F8BF9] uppercase tracking-wider text-[11px] block mb-0.5">
                      Key Strategic Takeaway
                    </strong>
                    <span>{sec.keyTakeaway}</span>
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Executive Summary Box */}
          {article.summaryPoints && article.summaryPoints.length > 0 && (
            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#080e22] border border-[#7469F8]/40 shadow-xl">
              <div className="text-xs font-bold uppercase tracking-widest text-[#AB57F3] mb-3">
                EXECUTIVE SUMMARY
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                Core Framework Recap
              </h4>
              <ul className="space-y-3">
                {article.summaryPoints.map((sp, sIdx) => (
                  <li key={sIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                    <span className="text-[#3F8BF9] font-bold">✓</span>
                    <span>{sp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Action Buttons (matching events modal styling) */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Published by Ascendia Prime Strategic Growth Unit
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenConversation();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] shadow-[0_0_20px_rgba(63,139,249,0.35)] hover:shadow-[0_0_35px_rgba(171,87,243,0.5)] transition-all duration-300 no-underline hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Discuss Strategy With Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-slate-300 border border-white/15 bg-white/5 hover:border-white/30 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <span>Close</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ComingSoonPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] relative overflow-hidden px-6">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#3F8BF9]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#AB57F3]/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Icon / Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-[#3F8BF9]/30 rounded-full animate-[spin_3s_linear_infinite]"></div>
            <div className="absolute inset-2 border-2 border-[#AB57F3]/30 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
            <svg
              className="w-10 h-10 text-[#3F8BF9]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Something Amazing is <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3]">
            Coming Soon
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-light max-w-lg mx-auto">
          We're currently building this page to bring you even more value. Check back shortly or reach out to our team for more information.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] text-white font-bold shadow-[0_0_20px_rgba(63,139,249,0.3)] hover:shadow-[0_0_30px_rgba(63,139,249,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Back to Home
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h2a1 1 0 001-1v-10"></path>
            </svg>
          </Link>

          <button
            onClick={() => router.push("/#contact")}
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-[#7469F8]/50 text-white font-bold hover:border-[#7469F8] hover:bg-[#7469F8]/10 transition-all duration-300"
          >
            Start a Conversation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </button>
        </div>

        {/* Status indicator */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
          <div className="w-2 h-2 rounded-full bg-[#E057D8] animate-pulse"></div>
          <span>Page in Development</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#3F8BF9]/20 to-transparent"></div>
    </div>
  );
}

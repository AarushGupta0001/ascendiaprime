"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-white px-6">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-slate-300 mb-8 text-center max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="inline-block bg-gradient-to-r from-[#3F8BF9] via-[#7469F8] to-[#AB57F3] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(63,139,249,0.4)] hover:shadow-[0_0_30px_rgba(63,139,249,0.6)] hover:-translate-y-0.5 border border-[#3F8BF9]/30 cursor-pointer"
      >
        Try again
      </button>
    </main>
  );
}

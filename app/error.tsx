"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-400 mb-8">An unexpected error occurred.</p>
      <button onClick={reset} className="px-6 py-3 bg-brand-500 hover:bg-brand-600 rounded-lg font-semibold transition-colors">
        Try again
      </button>
    </div>
  );
}

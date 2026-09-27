import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4">
      <p className="text-brand-400 font-mono text-sm mb-2">404 | not found</p>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-400 mb-8 text-center max-w-md">The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="px-6 py-3 bg-brand-500 hover:bg-brand-600 rounded-lg font-semibold transition-colors">
        Back to Home
      </Link>
    </div>
  );
}

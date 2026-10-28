import Link from "next/link";
import { ArrowLeft, Home, Laptop, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      {/* Top Bar */}
      <header className="navbar-gradient h-16 px-4 sm:px-6 flex items-center justify-between shadow-md">
        <Link
          href="/"
          className="text-white text-xl sm:text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
        >
          {profile.name}
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold transition-colors"
        >
          <Home size={14} />
          <span>Home</span>
        </Link>
      </header>

      {/* Main 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-xl w-full text-center compact-card p-8 sm:p-12 shadow-lg border border-slate-200">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 border border-blue-200 text-blue-600 mb-6 mx-auto">
            <span className="text-3xl font-extrabold font-mono">404</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Page Not Found
          </h1>

          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mb-4" />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto mb-8 font-normal">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
            Explore Sandesh Kenchugundi&apos;s portfolio using the helpful links below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="btn-coral px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm inline-flex items-center gap-2"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <Link
              href="/#projects"
              className="px-5 py-2.5 rounded-lg text-sm font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <Laptop size={16} className="text-blue-600" />
              View Projects
            </Link>

            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-lg text-sm font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 shadow-2xs inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Contact
            </Link>

            <a
              href={`/${profile.resumeFilename}`}
              download
              className="px-5 py-2.5 rounded-lg text-sm font-bold bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 shadow-2xs inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <Download size={16} className="text-blue-600" />
              Download Resume
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#000306] text-white py-6 px-4 text-center text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

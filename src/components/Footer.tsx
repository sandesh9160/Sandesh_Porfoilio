"use client";

import { useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./Icons";
import { profile } from "@/data/profile";

const emptySubscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export default function Footer() {
  const currentYear = useSyncExternalStore(emptySubscribe, getYear, getServerYear);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000306] text-white py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-3">
        <p className="text-sm font-normal text-slate-300">
          &copy; {currentYear} {profile.name}. All Rights Reserved.
        </p>

        <div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-300">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline inline-flex items-center gap-1.5 text-white"
          >
            <LinkedInIcon size={16} />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline inline-flex items-center gap-1.5 text-white"
          >
            <GitHubIcon size={16} />
            <span>GitHub</span>
          </a>
          <span className="text-slate-600">|</span>
          <button
            onClick={scrollToTop}
            className="hover:underline inline-flex items-center gap-1 text-slate-400 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

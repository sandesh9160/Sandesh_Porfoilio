"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Menu,
  X,
  User,
  Wrench,
  Laptop,
  Briefcase,
  Award,
  GraduationCap,
  Mail,
  Download
} from "lucide-react";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const navItems = [
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: Laptop },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Certifications", href: "#certifications", icon: Award },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    },
    [mobileOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 navbar-gradient shadow-md"
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand */}
        <a
          href="#hero"
          className="text-white text-xl sm:text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity"
        >
          {profile.name}
        </a>

        {/* Desktop Links with icons matching reference screenshot */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white/95 hover:text-white hover:underline text-sm font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <IconComponent size={15} aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Quick Socials */}
        <div className="hidden sm:flex items-center gap-2 text-white">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
            aria-label="GitHub Profile"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={`/${profile.resumeFilename}`}
            download
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors shadow-xs"
          >
            <Download size={13} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md focus:outline-none"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-[#eb3ed1] navbar-gradient p-6 flex flex-col justify-between overflow-y-auto z-50 text-white"
          role="dialog"
          aria-modal="true"
        >
          <ul className="space-y-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2 text-lg font-bold hover:opacity-80"
                  >
                    <IconComponent size={20} />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="pt-6 border-t border-white/20 flex flex-col gap-3">
            <a
              href={`/${profile.resumeFilename}`}
              download
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-3 rounded-lg bg-white text-slate-900 font-bold text-sm shadow-md"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

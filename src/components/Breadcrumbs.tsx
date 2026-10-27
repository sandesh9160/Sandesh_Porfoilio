import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { profile } from "@/data/profile";

interface BreadcrumbsProps {
  currentSection?: string;
}

export default function Breadcrumbs({ currentSection = "Home" }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: profile.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${profile.name} - ${profile.title}`,
        item: `${profile.siteUrl}/#about`,
      },
    ],
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-slate-100/80 border-b border-slate-200 py-2 px-4 sm:px-6 text-xs text-slate-500 font-medium"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-6xl mx-auto flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
        <Link href="#hero" className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors">
          <Home size={12} />
          <span>Home</span>
        </Link>
        <ChevronRight size={12} className="text-slate-400" />
        <span className="text-slate-600">Sandesh Kenchugundi</span>
        <ChevronRight size={12} className="text-slate-400" />
        <span className="text-blue-700 font-semibold">{currentSection}</span>
      </div>
    </nav>
  );
}

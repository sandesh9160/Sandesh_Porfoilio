import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  currentSection?: string;
}

export default function Breadcrumbs({ currentSection = "Home" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-slate-100/80 border-b border-slate-200 py-2 px-4 sm:px-6 text-xs text-slate-500 font-medium"
    >
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

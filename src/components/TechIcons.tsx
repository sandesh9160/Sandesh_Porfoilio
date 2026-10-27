import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = "w-5 h-5", size = 20 }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[\s.-]/g, "");

  switch (normalized) {
    case "python":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Python">
          <path
            d="M11.9 2C8.75 2 8.9 3.36 8.9 3.36L8.91 4.77H12v.42H5.06S2 4.84 2 8.01c0 3.16 1.77 3.3 1.77 3.3H5.3v-1.63s-.08-1.92 1.88-1.92h3.25v-.36c0-1.89 1.63-1.89 1.63-1.89h3.76s1.61.02 1.61-1.57C17.43 2.37 15.06 2 11.9 2zm-1.87 1.34a.63.63 0 110 1.25.63.63 0 010-1.25z"
            fill="#387EB8"
          />
          <path
            d="M12.1 22c3.15 0 3-.36 3-3.36l-.01-1.41H12v-.42h6.94S22 17.16 22 13.99c0-3.16-1.77-3.3-1.77-3.3H18.7v1.63s.08 1.92-1.88 1.92h-3.25v.36c0 1.89-1.63 1.89-1.63 1.89H8.18s-1.61-.02-1.61 1.57c0 1.58 2.37 1.95 5.53 1.95zm1.87-1.34a.63.63 0 110-1.25.63.63 0 010 1.25z"
            fill="#FFE052"
          />
        </svg>
      );

    case "django":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Django">
          <rect width="24" height="24" rx="4" fill="#092E20" />
          <path
            d="M11.2 5.5h2.1v9.2c-.6.1-1.3.2-1.8.2-2.1 0-3.3-1-3.3-2.9 0-1.8 1.2-3 3-3 .5 0 .9.1 1.2.2V7.1c-.4-.1-.8-.1-1.2-.1-3 0-5.1 1.9-5.1 4.9s2 5 5.2 5c1 0 2.2-.2 2.8-.5v1.2H16V5.5h-2.1v2.1c-.5-.4-1.3-.6-2.1-.6-.2 0-.4 0-.6.1v-1.6z"
            fill="#44B78B"
          />
        </svg>
      );

    case "laravel":
    case "laravel12":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Laravel">
          <path
            d="M3 7.8L12 2.5l9 5.3v8.9l-9 5.3-9-5.3V7.8z"
            stroke="#FF2D20"
            strokeWidth="1.5"
            fill="#FF2D20"
            fillOpacity="0.15"
          />
          <path d="M12 2.5v19.5M3 7.8l9 5.2 9-5.2" stroke="#FF2D20" strokeWidth="1.5" />
        </svg>
      );

    case "flutter":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Flutter">
          <path d="M14.3 2.5L4 12.8l3.1 3.1L20.5 2.5h-6.2z" fill="#02569B" />
          <path d="M14.3 12.5l-6.2 6.2 3.1 3.1 6.2-6.2 3.1 3.1h6.2l-6.2-6.2 6.2-6.2h-6.2l-3.1 3.1z" fill="#0175C2" />
        </svg>
      );

    case "react":
    case "reactjs":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="React">
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    case "nextjs":
    case "next":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Next.js">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.88 18.06l-6.19-7.97v7.97H9.8V6.86h1.89l6.19 7.97V6.86h1.89v11.2h-1.89z" />
        </svg>
      );

    case "php":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="PHP">
          <rect width="24" height="24" rx="4" fill="#4F5D95" fillOpacity="0.2" stroke="#777BB4" strokeWidth="1.5" />
          <text x="4" y="16" fill="#8892BF" fontSize="10" fontWeight="bold" fontFamily="monospace">PHP</text>
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="JavaScript">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 17.5c.5.8 1.4 1.3 2.4 1.3 1.4 0 2.2-.8 2.2-2.3v-6h-2.1v6c0 .5-.3.8-.7.8-.5 0-.8-.3-1-.6l-.8.8zm7.3-.2c.6.9 1.7 1.5 2.8 1.5 1.7 0 2.8-1 2.8-2.4 0-1.5-.9-2.1-2.1-2.6l-.7-.3c-.6-.3-.9-.6-.9-1.1 0-.6.5-1 1.2-1 .7 0 1.2.3 1.5.8l1.3-.9c-.6-.9-1.5-1.4-2.7-1.4-1.8 0-2.8 1-2.8 2.3 0 1.3.8 2 2 2.5l.7.3c.7.3 1.1.6 1.1 1.2 0 .6-.6 1.1-1.4 1.1-.9 0-1.5-.4-1.8-1l-1.5.9z" fill="#000" />
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="TypeScript">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M5 8h7v2H9.5v8h-2v-8H5V8zm8.5 7.5c.5.9 1.4 1.4 2.5 1.4 1.3 0 2.1-.7 2.1-1.8 0-1.2-.8-1.7-1.8-2.1l-.6-.2c-.7-.3-1.1-.6-1.1-1.1 0-.6.5-1 1.2-1 .7 0 1.2.3 1.6.8l1.3-.9c-.6-.9-1.6-1.4-2.8-1.4-1.8 0-2.8 1.1-2.8 2.4 0 1.3.8 1.9 1.8 2.3l.6.2c.7.3 1.1.6 1.1 1.1 0 .6-.5 1-1.3 1-.8 0-1.4-.4-1.7-1l-1.5.8z" fill="#FFF" />
        </svg>
      );

    case "mysql":
    case "sql":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="MySQL">
          <rect width="24" height="24" rx="4" fill="#00758F" fillOpacity="0.2" stroke="#00758F" strokeWidth="1.5" />
          <path d="M6 14s2-5 6-5 6 5 6 5M8 17s1.5-2 4-2 4 2 4 2" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "bootstrap":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Bootstrap">
          <rect width="24" height="24" rx="5" fill="#7952B3" />
          <text x="7" y="17" fill="#FFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">B</text>
        </svg>
      );

    case "html":
    case "html5":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="HTML5">
          <path d="M4 3l1.8 16.5L12 21.5l6.2-2L20 3H4z" fill="#E34F26" />
          <path d="M12 4.5v15.5l4.8-1.5 1.5-14H12z" fill="#EF652A" />
        </svg>
      );

    case "css":
    case "css3":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="CSS3">
          <path d="M4 3l1.8 16.5L12 21.5l6.2-2L20 3H4z" fill="#1572B6" />
          <path d="M12 4.5v15.5l4.8-1.5 1.5-14H12z" fill="#33A9DC" />
        </svg>
      );

    case "tailwindcss":
    case "tailwind":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Tailwind CSS">
          <path
            d="M12 6c-3.6 0-5.4 1.8-5.4 5.4 1.2-1.2 2.4-1.8 3.6-1.8 1.8 0 2.7.9 3.6 1.8 1.2 1.2 2.4 1.8 3.6 1.8 3.6 0 5.4-1.8 5.4-5.4-1.2 1.2-2.4 1.8-3.6 1.8-1.8 0-2.7-.9-3.6-1.8C14.4 6.6 13.2 6 12 6zm-7.2 6c-3.6 0-5.4 1.8-5.4 5.4 1.2-1.2 2.4-1.8 3.6-1.8 1.8 0 2.7.9 3.6 1.8 1.2 1.2 2.4 1.8 3.6 1.8 3.6 0 5.4-1.8 5.4-5.4-1.2 1.2-2.4 1.8-3.6 1.8-1.8 0-2.7-.9-3.6-1.8-1.2-1.2-2.4-1.8-3.6-1.8z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Git">
          <rect width="24" height="24" rx="4" fill="#F05032" fillOpacity="0.2" stroke="#F05032" strokeWidth="1.5" />
          <path d="M15.5 8.5a2 2 0 1 0-2.83 2.83L11 13H9.5a2 2 0 1 0 0 2h2a2 2 0 0 0 1.41-.59l2.59-2.58A2 2 0 0 0 15.5 8.5z" fill="#F05032" />
        </svg>
      );

    case "linux":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Linux">
          <rect width="24" height="24" rx="4" fill="#FCC624" fillOpacity="0.2" stroke="#E5A910" strokeWidth="1.5" />
          <path d="M12 4c-2 0-3.5 1.5-3.5 3.5 0 1 .5 2 1 2.5-.5.5-1.5 2-1.5 4 0 2.5 1.5 5 4 5s4-2.5 4-5c0-2-1-3.5-1.5-4 .5-.5 1-1.5 1-2.5C15.5 5.5 14 4 12 4z" stroke="#B8860B" strokeWidth="1.5" />
        </svg>
      );

    case "payment":
    case "razorpay":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Razorpay">
          <rect width="24" height="24" rx="4" fill="#0C2340" />
          <path d="M15 5l-7 14h4l5-10-2-4z" fill="#00BAF2" />
        </svg>
      );

    case "ai":
    case "openai":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-label="AI">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" stroke="#10A37F" />
          <circle cx="12" cy="12" r="2" fill="#10A37F" />
        </svg>
      );

    case "api":
    case "restapi":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className={className} aria-label="API">
          <path d="M4 12h16M12 4v16" strokeLinecap="round" />
          <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="1.5" />
        </svg>
      );

    case "postman":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Postman">
          <rect width="24" height="24" rx="4" fill="#FF6C37" />
          <circle cx="12" cy="12" r="4" fill="#FFF" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Sandesh Kenchugundi",
    "Python Full Stack Developer",
    "Techsprout AI Labs",
    "TeachNow",
    "StartupSaga",
    "Laravel 12 Developer",
    "Django Developer",
    "Next.js Developer",
    "React Developer",
    "MySQL Database Specialist",
    "Hyderabad Software Developer",
    "MCA Osmania University",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.siteUrl,
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/profile.jpg",
        width: 600,
        height: 600,
        alt: `${profile.name} - Python Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    url: profile.siteUrl,
    image: `${profile.siteUrl}/profile.jpg`,
    sameAs: [profile.linkedin, profile.github].filter(Boolean),
    worksFor: {
      "@type": "Organization",
      name: "Techsprout AI Labs",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University College of Science, Saifabad, Osmania University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "BJR Government Degree College, Osmania University",
      },
    ],
    knowsAbout: [
      "Python",
      "PHP",
      "Laravel 12",
      "Django",
      "Next.js",
      "React",
      "Flutter",
      "MySQL",
      "REST APIs",
      "OpenAI API",
      "Razorpay",
      "Technical SEO",
      "Linux VPS",
    ],
  };

  return (
    <html lang="en" className={`h-full scroll-smooth antialiased ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

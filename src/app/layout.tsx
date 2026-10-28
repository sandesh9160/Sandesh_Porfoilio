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
    default: "Sandesh Kenchugundi | Python Full Stack Developer",
    template: `%s | Sandesh Kenchugundi`,
  },
  description: profile.metaDescription,
  authors: [{ name: profile.name, url: profile.canonicalUrl }],
  creator: profile.name,
  keywords: [
    "Sandesh Kenchugundi",
    "Sandesh Kenchugundi Developer",
    "Python Developer Portfolio",
    "Python Full Stack Developer Hyderabad",
    "Python Full Stack Developer",
    "Software Developer Hyderabad",
    "Techsprout AI Labs",
    "TeachNow",
    "StartupSaga",
    "Laravel 12 Developer",
    "Django Developer",
    "Next.js Developer",
    "React Developer",
    "MySQL Database Specialist",
    "REST APIs",
    "Osmania University MCA",
  ],
  alternates: {
    canonical: profile.canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.canonicalUrl,
    title: "Sandesh Kenchugundi | Python Full Stack Developer",
    description: profile.metaDescription,
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
    title: "Sandesh Kenchugundi | Python Full Stack Developer",
    description: profile.metaDescription,
    images: ["/profile.jpg"],
    creator: "@sandesh9160",
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
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${profile.siteUrl}/#website`,
        url: profile.canonicalUrl,
        name: `${profile.name} Portfolio`,
        description: profile.metaDescription,
        publisher: {
          "@id": `${profile.siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${profile.siteUrl}/#profilepage`,
        url: profile.canonicalUrl,
        name: "Sandesh Kenchugundi | Python Full Stack Developer",
        description: profile.metaDescription,
        isPartOf: {
          "@id": `${profile.siteUrl}/#website`,
        },
        about: {
          "@id": `${profile.siteUrl}/#person`,
        },
        mainEntity: {
          "@id": `${profile.siteUrl}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${profile.siteUrl}/#person`,
        name: profile.name,
        alternateName: [
          "Sandesh",
          "Sandesh Kenchugundi Developer",
          "Kenchugundi Sandesh",
        ],
        jobTitle: profile.title,
        description: profile.metaDescription,
        url: profile.canonicalUrl,
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
          "Full Stack Development",
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
          "Software Engineering",
        ],
      },
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

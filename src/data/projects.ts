export interface Project {
  id: string;
  title: string;
  subtitle: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  overview: string;
  problem?: string;
  architecture?: string;
  highlights: string[];
  featured: boolean;
  category: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ais-ebikes",
    title: "AIS E-Bike Rental Platform",
    subtitle: "Role-Based Vehicle Rental & Management Ecosystem",
    imageUrl: "/ebike.webp",
    liveUrl: "https://ais-ebikes-rental-1.onrender.com",
    githubUrl: "https://github.com/sandesh9160/AIS_EBikes_Rental",
    technologies: ["Python", "Django", "MySQL", "Bootstrap", "JavaScript", "Render"],
    overview:
      "A production web-based vehicle rental system engineered with role-based workflows and intuitive dashboards for Riders, Vehicle Providers, and Administrators.",
    architecture:
      "Built with Django MVC and MySQL. Features role-based views, vehicle document verification, automated rental calendar calculations, and wallet transaction processing.",
    highlights: [
      "Developed a role-based e-bike rental platform with dedicated workflows and dashboards for Riders, Vehicle Providers, and Administrators.",
      "Implemented authentication, vehicle management, booking workflows, wallet management, availability tracking, and role-specific platform functionality.",
      "Integrated Django with MySQL to manage users, vehicles, bookings, and rental-related data, with responsive Bootstrap-based interfaces.",
      "Deployed to cloud production on Render with environment parity.",
    ],
    featured: true,
    category: "Full-Stack Web",
  },
  {
    id: "teachnow",
    title: "TeachNow Recruitment Platform & App",
    subtitle: "Enterprise Hiring, Job Matching & Subscription Platform",
    imageUrl: "/teachnow.png",
    liveUrl: "https://teachnow.in",
    technologies: ["Laravel 12", "Next.js", "MySQL", "Sanctum", "Flutter", "Razorpay", "OpenAI API", "REST APIs"],
    overview:
      "Comprehensive recruitment ecosystem supporting end-to-end workflows for job seekers, employers, recruiters, and platform administrators.",
    architecture:
      "Engineered with Laravel 12 backend APIs and Next.js frontend with Sanctum token authentication. Integrated with Razorpay payment webhooks and OpenAI API for AI-assisted resume generation.",
    highlights: [
      "Developed recruitment platform features supporting workflows for job seekers, employers, recruiters, and administrators.",
      "Implemented authentication and role-based access control (RBAC), job posting, recruiter management, application tracking, dashboards, and subscription management.",
      "Developed backend APIs and database functionality using Laravel Eloquent, MySQL, validation, and protected routes.",
      "Integrated Razorpay payment processing and webhooks for automated subscription billing.",
      "Implemented OpenAI-powered resume generation and intelligent job-matching algorithms.",
      "Developed and maintained mobile features for the Flutter cross-platform mobile application.",
    ],
    featured: true,
    category: "Enterprise Full-Stack",
  },
  {
    id: "startupsaga",
    title: "StartupSaga – Startup & Business Platform",
    subtitle: "Content Management & Founder Media Platform",
    imageUrl: "/startupsaga.png",
    liveUrl: "https://startupsaga.in",
    technologies: ["Next.js", "React", "TypeScript", "Django", "Django REST Framework", "MySQL", "SQLite", "Technical SEO"],
    overview:
      "Dynamic business platform and content portal featuring founder stories, startup directories, city ecosystems, content submissions, and dynamic CMS pages.",
    architecture:
      "Decoupled architecture combining Django REST Framework backend with Next.js frontend. Fully optimized for Technical SEO with dynamic metadata, XML sitemaps, JSON-LD schemas, and canonical URLs.",
    highlights: [
      "Implemented platform functionality for startup directories, business stories, city ecosystems, content submissions, newsletters, and dynamic CMS pages.",
      "Developed and integrated Django REST APIs for content management, startup information, stories, submissions, and frontend data retrieval.",
      "Integrated Next.js frontend with Django REST backend, handling API requests, response data, and reactive forms.",
      "Implemented complete Technical SEO: dynamic metadata, canonical URLs, XML sitemaps, robots.txt, JSON-LD structured data, and SEO-friendly URLs.",
      "Supported website rehosting, deployment configuration on Hostinger VPS, and server debugging.",
    ],
    featured: true,
    category: "Media & SEO Platform",
  },
];

export interface ContributionGroup {
  project: string;
  url?: string;
  technologies: string[];
  bullets: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  contributionGroups: ContributionGroup[];
}

export const experiences: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "Techsprout AI Labs",
    location: "Hyderabad, India",
    period: "Feb 2026 — Aug 2026",
    type: "Internship (7 Months)",
    summary:
      "Contributed to production web and mobile applications across recruitment and startup platforms. Engineered backend services, REST APIs, authentication/RBAC, payment processing, technical SEO, and cloud deployment.",
    contributionGroups: [
      {
        project: "TeachNow – Recruitment Platform & Mobile Application",
        url: "https://teachnow.in",
        technologies: ["Laravel 12", "Next.js", "MySQL", "Sanctum", "Flutter", "Razorpay", "OpenAI API", "REST APIs", "Linux/VPS"],
        bullets: [
          "Developed and enhanced recruitment platform features using Laravel 12, Next.js, MySQL, Sanctum, and REST APIs, supporting workflows for job seekers, employers, recruiters, and administrators.",
          "Implemented authentication and role-based access control (RBAC), along with job posting, recruiter management, application tracking, dashboards, and subscription management.",
          "Developed backend APIs and database functionality using Laravel Eloquent, MySQL, validation, and protected routes to support frontend and mobile application workflows.",
          "Integrated Razorpay payment processing and webhooks, supporting payment-related API communication and subscription functionality between the application and payment gateway.",
          "Implemented OpenAI-powered resume generation and job-matching features, integrating AI APIs into the recruitment workflow.",
          "Developed and maintained features for the Flutter mobile application and supported Linux/VPS configuration, deployment activities, API troubleshooting, and production debugging.",
        ],
      },
      {
        project: "StartupSaga – Startup & Business Platform",
        url: "https://startupsaga.in",
        technologies: ["Next.js", "React", "TypeScript", "Django", "Django REST Framework", "MySQL", "SQLite", "Technical SEO", "Hostinger VPS"],
        bullets: [
          "Developed and enhanced a startup and business content platform using Next.js, React, TypeScript, Django, Django REST Framework, and MySQL/SQLite.",
          "Implemented and maintained platform functionality for startup directories, business stories, city ecosystems, categories, content submissions, newsletters, and dynamic CMS pages.",
          "Developed and integrated Django REST APIs for content management, startup information, stories, submissions, navigation, dynamic pages, and frontend data retrieval.",
          "Integrated the Next.js frontend with the Django REST backend, handling API requests, response data, forms, content rendering, and frontend functionality.",
          "Implemented and maintained technical SEO, including dynamic metadata, canonical URLs, XML sitemaps, robots.txt, JSON-LD structured data, and SEO-friendly URL structures.",
          "Supported website rehosting, deployment configuration, server setup, API troubleshooting, and production debugging, maintaining existing application functionality during deployment changes.",
        ],
      },
    ],
  },
];

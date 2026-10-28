export const profile = {
  name: "Sandesh Kenchugundi",
  title: "Python Full Stack Developer",
  subtitle: "Software Developer | Backend & API Specialist",
  location: "Hyderabad, India",
  emailUser: "sandeshkenchugundi01",
  emailDomain: "gmail.com",
  email: ["sandeshkenchugundi01", "gmail.com"].join("@"),
  linkedin: "https://www.linkedin.com/in/sandesh-kenchugundi-076629245/",
  github: "https://github.com/sandesh9160",
  resumeFilename: "Sandesh-Kenchugundi-Resume.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://sandeshkenchugundiportfolio.netlify.app",
  metaDescription:
    "Sandesh Kenchugundi is a Python Full Stack Developer specializing in Django, Laravel 12, Next.js, and REST APIs. Explore portfolio projects, technical skills, and software engineering experience.",
  summary:
    "Python Full Stack Developer with an MCA and 7 months of professional experience at Techsprout AI Labs, contributing to production web and mobile applications. Skilled in Python, PHP, Laravel 12, Django, Next.js, Flutter, MySQL, and REST APIs, with hands-on experience in backend development, API integration, authentication, RBAC, payment workflows, and database-driven applications. Experienced in developing and maintaining recruitment and startup-focused platforms, implementing technical SEO, third-party API integrations, responsive interfaces, deployment, and production debugging.",
} as const;

export interface Certification {
  title: string;
  issuer: string;
  url: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-92020922-d628-4b02-9cc3-5ec3665aee6c.pdf",
    description: "Demonstrated expertise in Structured Query Language (SQL), querying, relational databases, and data retrieval.",
  },
  {
    title: "Python Programming",
    issuer: "Udemy",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-92020922-d628-4b02-9cc3-5ec3665aee6c.pdf",
    description: "Comprehensive Python development covering OOP, modular software design, algorithms, and data structures.",
  },
  {
    title: "Full Stack Web Development (Python)",
    issuer: "Narayana Tech House",
    url: "https://drive.google.com/file/d/1CO2uMk-TR12QVytBaOFcCnn2UD_zM_Q3/view",
    description: "End-to-end Python web development combining HTML5, CSS3, JavaScript, Django, and RESTful API architecture.",
  },
];

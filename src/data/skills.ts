export interface SkillItem {
  name: string;
  level: number;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 92, iconName: "python" },
      { name: "PHP", level: 86, iconName: "php" },
      { name: "JavaScript", level: 88, iconName: "javascript" },
    ],
  },
  {
    title: "Frameworks & Mobile",
    skills: [
      { name: "Laravel 12", level: 88, iconName: "laravel" },
      { name: "Django", level: 90, iconName: "django" },
      { name: "Next.js", level: 88, iconName: "nextjs" },
      { name: "Flutter", level: 78, iconName: "flutter" },
    ],
  },
  {
    title: "Frontend & UI",
    skills: [
      { name: "HTML5", level: 95, iconName: "html" },
      { name: "CSS3", level: 92, iconName: "css" },
      { name: "Bootstrap", level: 90, iconName: "bootstrap" },
      { name: "Tailwind CSS", level: 88, iconName: "tailwind" },
      { name: "jQuery", level: 82, iconName: "jquery" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "REST APIs", level: 92, iconName: "api" },
      { name: "MySQL", level: 90, iconName: "mysql" },
      { name: "SQLite", level: 85, iconName: "sqlite" },
      { name: "Eloquent ORM", level: 88, iconName: "laravel" },
      { name: "Laravel Sanctum", level: 86, iconName: "laravel" },
    ],
  },
  {
    title: "Third-Party Integrations",
    skills: [
      { name: "Razorpay Payment Gateway", level: 88, iconName: "payment" },
      { name: "Webhooks Architecture", level: 85, iconName: "webhook" },
      { name: "OpenAI API Integration", level: 86, iconName: "ai" },
    ],
  },
  {
    title: "Technical SEO & Structure",
    skills: [
      { name: "JSON-LD Structured Data", level: 92, iconName: "seo" },
      { name: "XML Sitemaps & robots.txt", level: 95, iconName: "seo" },
      { name: "Canonical URLs & Meta Tags", level: 95, iconName: "seo" },
    ],
  },
  {
    title: "Tools & Cloud Deployment",
    skills: [
      { name: "Git & GitHub", level: 90, iconName: "git" },
      { name: "Postman", level: 92, iconName: "postman" },
      { name: "VS Code", level: 95, iconName: "vscode" },
      { name: "Linux Server Administration", level: 85, iconName: "linux" },
      { name: "Hostinger VPS & Server Setup", level: 84, iconName: "server" },
    ],
  },
];

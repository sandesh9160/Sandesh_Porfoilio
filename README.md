# Sandesh Kenchugundi — Full-Stack Developer Portfolio

A production-ready, high-performance developer portfolio built for **Sandesh Kenchugundi**, Python Full-Stack Developer based in Hyderabad, India.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, optimized for Netlify deployment.

---

## 🚀 Features

- **Strictly Truthful Content**: Built strictly from verified professional credentials (MCA 8.08 CGPA from CBIT, Osmania University; B.Sc 8.65 CGPA from Bhavans Vivekananda College; production full-stack engineering at TeachNow and StartupSaga).
- **Comprehensive Case Studies**: Detailed engineering breakdowns of projects including architectural decisions, backend APIs, relational schemas, auth/RBAC, and deployment.
- **Modern Minimalist UI/UX**:
  - Dark-mode default color palette (`#0f1117`, `#161822`, `#1c1f2e`) with indigo accent highlights (`#6366f1`).
  - Mobile-responsive navigation with keyboard trap/Escape key support and body scroll lock.
  - Smooth scrolling with full `@media (prefers-reduced-motion)` support.
- **Accessibility First (WCAG 2.1 AA Compliant)**:
  - Skip-to-content accessibility link for screen readers.
  - Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`).
  - Visible focus indicators (`:focus-visible`).
  - Full ARIA labeling on interactive elements.
- **Technical SEO & Structured Data**:
  - Native `sitemap.xml` and `robots.txt` generated via Next.js metadata routes.
  - Schema.org `Person` JSON-LD structured data for rich search results.
  - Complete OpenGraph and Twitter Card metadata.
- **Production Forms & Deployment Ready**:
  - Netlify Forms integration with AJAX submission, fallback mailto, and static build detection (`public/__forms.html`).
  - `netlify.toml` preconfigured with `@netlify/plugin-nextjs` and HTTP security headers (CSP, X-Frame-Options, Permissions-Policy).
  - Standalone PDF resume serving (`/Sandesh-Kenchugundi-Resume.pdf`).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev)
- **Language**: [TypeScript 5](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev) & Custom SVG Brand Icons
- **Deployment**: [Netlify](https://www.netlify.com)

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── globals.css         # Theme tokens, dark theme styles, accessibility rules
│   ├── layout.tsx          # Root layout with SEO metadata & JSON-LD schema
│   ├── page.tsx            # Main portfolio assembling all sections
│   ├── robots.ts           # Robots.txt generator
│   └── sitemap.ts          # Sitemap.xml generator
├── components/
│   ├── About.tsx           # Narrative background & technical profile
│   ├── Contact.tsx         # Netlify form + email & social touchpoints
│   ├── Education.tsx       # Timeline of academic milestones & verified CGPA
│   ├── Experience.tsx      # Work timeline with project contribution groups
│   ├── Footer.tsx          # Accessible footer with dynamic year & quick links
│   ├── Hero.tsx            # Headline, title, resume download, quick CTAs
│   ├── Icons.tsx           # Robust SVG icons for LinkedIn & GitHub
│   ├── Navbar.tsx          # Responsive sticky navigation with mobile drawer
│   ├── ProjectCard.tsx     # Case study card with architecture & highlights
│   ├── Projects.tsx        # Projects section wrapper
│   └── SectionHeading.tsx  # Consistent section header component
└── data/
    ├── education.ts        # Academic history (CBIT, Bhavans Vivekananda)
    ├── experience.ts       # Work experience (TeachNow, StartupSaga)
    ├── profile.ts          # Central source of truth for personal info
    ├── projects.ts         # Comprehensive project case studies
    └── skills.ts           # Categorized technical competencies
public/
├── Sandesh-Kenchugundi-Resume.pdf  # Verified resume PDF
└── __forms.html                    # Netlify forms detection file
```

---

## 💻 Local Development

### Prerequisites

- Node.js 18.18+ or 20+
- npm / yarn / pnpm

### Getting Started

1. Navigate to the project directory:
   ```bash
   cd portfolio-temp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Quality Checks

The codebase has been verified against TypeScript and ESLint:

```bash
# Type check and build production bundle
npm run build

# Run linting checks
npm run lint
```

---

## 🌐 Netlify Deployment

1. Push this repository to GitHub.
2. In the Netlify dashboard, select **"Import an existing project"** from GitHub.
3. Configure build settings:
   - **Base directory**: (Leave empty if root, or specify directory if in subdirectory)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Netlify will automatically detect `netlify.toml` and attach the `@netlify/plugin-nextjs` plugin.
5. In your site settings, enable **Netlify Forms** to receive submissions from the contact form.

# Samiha Rahman: Portfolio

My personal portfolio website. It covers who I am, what I work with, my education, projects I've built, my creative venture with Cozy Yarn, and how to reach me.

**Live site:** [https://portfolio-samiha.vercel.app](https://portfolio-samiha.vercel.app) *(or your deployed Vercel link)*

---

## Features

- **Responsive Navbar**: Smooth section navigation that collapses into a sleek slide-out drawer on mobile screens, complete with an icon-only theme toggle.
- **Dual Theme System (Dark & Light Mode)**: Designed with a modern dark theme and a radiant, high-contrast light mode with custom Neon Cyan accents and ambient glows. Remembers your theme preference across visits.
- **Hero Section**: Features a profile portrait, custom status badge (*"Aspiring Full-Stack Developer & 4th Year CSE Undergraduate Student"*), social links (GitHub, LinkedIn, Email), and a one-click resume download button.
- **About Me**: Highlights my authentic coding journey as a 4th-year CSE student at Metropolitan University, Sylhet, discovering web development, building full-stack applications like **FoodBridge**, and balancing engineering with running **Cozy Yarn**, my handcrafted crochet small business.
- **Categorized Skills**: Technical skills organized into four distinct domains (Frontend Development, Backend & Database, Tools & Platforms, and Programming Languages) with official brand icons and clean name labels.
- **Featured Projects & Deep Dives**: Four showcase projects (**Fit-Log**, **Bazar Dor**, **Dev Stack**, and **FoodBridge**) displayed in a 2x2 grid with:
  - An interactive **Quick View Modal** for fast previews without leaving the page.
  - Dedicated dynamic SSG detail pages (`/projects/[id]`) highlighting the live demo, GitHub repository, key features, architecture, challenges faced, and future plans.
- **Education & Experience**: An academic timeline covering my B.Sc. in CSE, HSC, and SSC milestones, alongside real-world entrepreneurial experience as the Founder of Cozy Yarn.
- **Contact Details**: Direct reach-out cards with one-click copy buttons for email, phone, and location with instant toast notifications, plus a direct email CTA.
- **Mobile-First Responsiveness**: Carefully engineered for flawless rendering across all devices (down to 320px mobile screens) with zero horizontal overflow.

---

## Tech Stack

- **Next.js 14 (App Router)** with **TypeScript**
- **Tailwind CSS** for responsive design and custom CSS variable theming
- **Lucide React** for modern UI icons
- **Vercel** for hosting, automated CI/CD deployments, and fast edge delivery

---

## Project Structure

```text
src/
├── app/
│   ├── page.tsx                # Single-page home view combining all portfolio sections
│   ├── projects/[id]/page.tsx  # Dynamic detail showcase page for each project
│   ├── layout.tsx              # Root layout, HTML head metadata, fonts, and theme wrapper
│   └── globals.css             # Tailwind base, custom CSS variables, and light/dark theme styles
├── components/
│   ├── Navbar.tsx              # Responsive navigation bar and mobile drawer
│   ├── Hero.tsx                # Profile photo, designation badge, and action CTAs
│   ├── About.tsx               # Coding journey and Cozy Yarn creative venture
│   ├── Skills.tsx              # Categorized skills grid with branded SVGs
│   ├── Projects.tsx            # 2x2 project showcase grid with modal trigger
│   ├── ProjectModal.tsx        # Fast-preview overlay dialog
│   ├── Education.tsx           # Academic timeline (B.Sc., HSC, SSC)
│   ├── Experience.tsx          # Professional & entrepreneurial leadership
│   ├── Contact.tsx             # Contact cards with copy buttons & email CTA
│   └── Footer.tsx              # Clean footer with quick links and copyright
└── data/
    └── portfolioData.ts        # Centralized data: personal info, skills, education, projects
public/
├── assets/
│   ├── projects/               # Project screenshots (Fit-Log, Bazar Dor, Dev Stack, FoodBridge)
│   └── samiha.png              # Profile portrait photo
└── favicon.ico
```

> **Note:** All the text, project details, skills, and background information live in `src/data/portfolioData.ts`, so updating content never requires modifying UI components.

---

## Running It Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Samiha-26/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

5. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

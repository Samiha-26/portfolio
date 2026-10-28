import { Project, SkillCategory, Education, Certificate, Experience } from "../types";

export const personalInfo = {
  name: "Samiha Rahman",
  role: "Frontend Developer & CSE Undergraduate Student",
  tagline: "CSE Student & Aspiring Frontend Developer building responsive, user-friendly digital experiences.",
  avatar: "/assets/avatar.jpg",
  email: "arthropoda51@gmail.com",
  phone: "+8801788194586",
  whatsappUrl: "https://wa.me/8801788194586",
  githubUrl: "https://github.com/Samiha-26",
  linkedinUrl: "https://www.linkedin.com/in/samihaarahman/",
  resumeUrl: "#", // Clickable button ready for resume download
  location: "Sylhet, Bangladesh",
  bio: [
    "I'm a Computer Science and Engineering student at Metropolitan University, Sylhet, working toward becoming a full-stack web developer.",
    "I enjoy building responsive, user-friendly web applications that make information accessible and improve everyday digital experiences.",
    "My current technical focus includes HTML, CSS, JavaScript, React, and Next.js. I'm also actively building with authentication and backend architectures to engineer complete, reliable web platforms.",
    "Beyond technology, I run Cozy Yarn, my small crochet business. Balancing entrepreneurship with my university studies has sharpened my creativity, patience, time management, and deep customer empathy."
  ]
};

export const projectsData: Project[] = [
  {
    id: "bazar-dor",
    title: "Bazar Dor — Daily Market",
    subtitle: "Daily Commodity Price Tracking Platform",
    badge: "Full-Stack • Live on Vercel",
    description: "A responsive web application that helps users explore daily market prices of essential commodities in Bangladesh in Bengali through category-based browsing, sorting controls, and market-specific price breakdowns.",
    image: "/assets/projects/bazar-dor.png",
    tech: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "MongoDB", "Better Auth", "Vercel"],
    skills: ["Next.js", "Authentication", "API Integration", "Database Integration", "Responsive Web Design"],
    liveUrl: "https://bazar-dor-five-rosy.vercel.app/",
    githubUrl: "https://github.com/Samiha-26/bazar-dor",
    keyFeatures: [
      "Daily commodity price tracking with rising and falling price indicators",
      "Category-based browsing and price sorting with Bengali numeral support",
      "Market-specific minimum, maximum, and average price breakdowns",
      "Email/password and Google/GitHub authentication using Better Auth"
    ],
    challenges: "Handling localized Bengali numeral conversions and dynamically computing price fluctuation indicators across fluctuating commodity vendors.",
    futurePlans: "Introduce crowd-sourced community price updates with verification and automated SMS alert subscriptions for essential staples."
  },
  {
    id: "dev-stack",
    title: "Dev Stack — Tech Explorer",
    subtitle: "Interactive Developer Technology Stack Builder",
    badge: "React & TypeScript • Live on Netlify",
    description: "A modern, responsive web application that allows developers to explore different technologies and build their own personalized tech stack with dynamic category badges, ratings, and difficulty levels.",
    image: "/assets/projects/dev-stack.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "DaisyUI", "React-Toastify", "Vite", "JSON"],
    skills: ["React", "TypeScript", "State Management", "UI/UX Design", "Vite", "Component Architecture"],
    liveUrl: "https://dev-stack-by-samiha.netlify.app/",
    githubUrl: "https://github.com/Samiha-26/DevStack",
    keyFeatures: [
      "Dynamic technology grid with category badges, ratings, and difficulty indicators",
      "Interactive personal stack builder preventing duplicate selections",
      "Individual or bulk removal controls with synchronized state",
      "Real-time toast notifications and fully responsive mobile layout"
    ],
    challenges: "Architecting a seamless multi-category state management mechanism to prevent duplicates while enabling instant additions/removals with feedback.",
    futurePlans: "Add stack export to markdown/JSON for README integration and community shared popular stack templates."
  },
  {
    id: "food-bridge",
    title: "FoodBridge — Surplus Food Sharing",
    subtitle: "Connecting Restaurants with Charities to Fight Hunger",
    badge: "Full-Stack MERN • Live on Vercel",
    description: "A full-stack web application designed to reduce food waste and fight hunger by connecting restaurants with surplus food to charities and volunteers, streamlining donations and delivery coordination through a centralized platform.",
    image: "/assets/projects/food-bridge.png",
    tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Leaflet"],
    skills: ["Full-Stack Development", "REST APIs", "JWT Auth", "Database Management", "Real-Time Socket.io", "Leaflet Maps"],
    liveUrl: "https://food-bridge-khaki.vercel.app/",
    githubUrl: "https://github.com/Samiha-26/FoodBridge",
    keyFeatures: [
      "Role-based dashboards for restaurants, charities, volunteers, and administrators",
      "Food donation listings, claiming workflows, and delivery coordination",
      "Real-time notifications and live messaging utilizing Socket.io",
      "Interactive maps, delivery routing with Leaflet, and community ratings"
    ],
    challenges: "Managing real-time status updates across 4 separate user roles and coordinating delivery routing on interactive map layers.",
    futurePlans: "Implement automated route optimization for volunteer drivers and push notifications for urgent perishables."
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend & UI",
    skills: [
      { name: "React", icon: "react", highlight: true },
      { name: "Next.js", icon: "nextjs", highlight: true },
      { name: "TypeScript", icon: "typescript", highlight: true },
      { name: "JavaScript (ES6+)", icon: "javascript", highlight: true },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Tailwind CSS", icon: "tailwind", highlight: true },
      { name: "DaisyUI", icon: "daisyui" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "nodejs", highlight: true },
      { name: "Express.js", icon: "express", highlight: true },
      { name: "MongoDB", icon: "mongodb", highlight: true },
      { name: "Mongoose", icon: "database" },
      { name: "REST APIs", icon: "api", highlight: true },
      { name: "Better Auth", icon: "shield" },
      { name: "JWT Auth", icon: "key" },
    ]
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Git", icon: "git", highlight: true },
      { name: "GitHub", icon: "github", highlight: true },
      { name: "Socket.io", icon: "socketio" },
      { name: "Leaflet Maps", icon: "map" },
      { name: "Vite", icon: "vite" },
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
      { name: "VS Code", icon: "code" },
    ]
  }
];

export const certificatesData: Certificate[] = [
  {
    id: "lurs-2026",
    title: "Certificate of Participation — 3rd LURS Student Research Conference 2026",
    issuer: "Leading University Research Society",
    theme: "Turning Ideas into Sustainable Solutions for a Better Tomorrow",
    date: "August 01, 2026",
    image: "/assets/certificates/lurs-conference.png",
    description: "Presented research ideas addressing sustainable community solutions at the 3rd annual student research conference."
  },
  {
    id: "bongodev-bootcamp",
    title: "Certificate of Appreciation — Web Development Bootcamp (Let's LEARN & HACK)",
    issuer: "bongoDev",
    theme: "Hands-on Full-Stack Web Development & Practical Engineering",
    date: "Completed Two Weeks Intensive",
    image: "/assets/certificates/bongodev-bootcamp.png",
    description: "Successfully completed two weeks intensive web development bootcamp covering core concepts, APIs, and real-world project builds."
  },
  {
    id: "bsmraau-seminar",
    title: "Certificate of Participation — Trends In Aviation & Space Technology Research",
    issuer: "Dept. of Aeronautical Engineering (Avionics) & BSMRAAU AI & Robotics Club (BAIRC)",
    theme: "Trends In Aviation & Space Technology Research",
    date: "8 November, 2023",
    image: "/assets/certificates/aviation-research.png",
    description: "For actively participating in the seminar on \"Trends In Aviation & Space Technology Research\" hosted on 8 November, 2023 in BSMRAAU, Lalmonirhat campus, organized by Department of Aeronautical Engineering (Avionics) & Youth Partner BSMRAAU AI & Robotics Club (BAIRC)."
  }
];

export const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)",
    institution: "Metropolitan University",
    location: "Sylhet, Bangladesh",
    period: "2023 – Present",
    status: "3rd Year Undergraduate",
    result: "Current CGPA: 3.85 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Higher Secondary Education Board",
    location: "Sylhet, Bangladesh",
    period: "Completed",
    status: "Science Group",
    result: "GPA: 5.00 out of 5.00",
  }
];

export const experienceData: Experience[] = [
  {
    role: "Founder & Creative Lead",
    organization: "Cozy Yarn",
    period: "Ongoing",
    type: "Entrepreneurship & Creative Design",
    description: [
      "Founded and manage an independent handcrafted crochet small business.",
      "Oversee end-to-end product design, brand identity, inventory management, and digital client communication.",
      "Cultivated disciplined time management, balancing university software engineering academics with entrepreneurship."
    ]
  },
  {
    role: "Full-Stack Web Developer (Projects & Open Source)",
    organization: "Independent & Academic Platforms",
    period: "2024 – Present",
    type: "Software Engineering",
    description: [
      "Engineered multiple responsive web applications including Bazar Dor, Dev Stack, and FoodBridge.",
      "Implemented secure JWT & OAuth authentication flows, RESTful APIs, and MongoDB schemas.",
      "Optimized frontend performance, accessibility, and fluid responsive design across mobile and desktop viewports."
    ]
  }
];

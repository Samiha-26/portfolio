import { Project, SkillCategory, Education, Certificate, Experience } from "../types";

export const personalInfo = {
  name: "Samiha Rahman",
  role: "Aspiring Full-Stack Developer",
  tagline: "4th Year CSE Student & Aspiring Full-Stack Developer building responsive, user-friendly digital experiences.",
  avatar: "/assets/avatar.jpg",
  email: "arthropoda51@gmail.com",
  phone: "+8801788194586",
  whatsappUrl: "https://wa.me/8801788194586",
  githubUrl: "https://github.com/Samiha-26",
  linkedinUrl: "https://www.linkedin.com/in/samihaarahman/",
  resumeUrl: "#",
  location: "Sylhet, Bangladesh",
  bio: [
    "I'm currently in my fourth year of Computer Science and Engineering at Metropolitan University, Sylhet.",
    "Honestly, coding wasn't something I was really interested in when I first started my bachelor's degree. That changed when I started exploring different websites and wondering how everything worked behind the scenes. I've always loved being creative and coming up with new ideas, so the UI layouts and all the little details naturally caught my attention.",
    "What I enjoy most is going deeper into how things work, debugging problems, and figuring things out on my own. Starting with an idea and seeing it turn into something that actually works is deeply satisfying.",
    "Recently, I've been working with React, TypeScript, and Next.js, building projects from scratch and exploring backend development. I also built FoodBridge, a full-stack web application for my Web Programming course to connect surplus restaurant food with charities. Beyond technology, I run Cozy Yarn, my handcrafted crochet small business."
  ]
};

export const projectsData: Project[] = [
  {
    id: "fit-log",
    title: "Fit-Log — Workout Planner",
    subtitle: "Interactive Workout Planning & Progress Tracking Platform",
    badge: "Next.js & TypeScript • Live on Vercel",
    description: "Fit-Log is a responsive workout planning application that helps users browse exercises, organize daily workout plans, save workouts, and track completed exercises through a user-friendly interface.",
    image: "/assets/projects/fit-log.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI", "REST API", "Vercel"],
    skills: ["TypeScript", "Next.js", "API Integration", "State Management", "Responsive Design", "UI Development"],
    liveUrl: "https://fit-log-samiha1.vercel.app/",
    githubUrl: "https://github.com/Samiha-26/fit-log",
    keyFeatures: [
      "Browse exercises and view detailed workout information across muscle groups",
      "Add workouts to a daily plan and mark exercises as completed",
      "Save workouts for later and prevent duplicate entries",
      "Sort workouts by duration, calories, or rating"
    ],
    challenges: "Architecting synchronized state management for active daily plans and saved workout lists while preventing duplicate entries across dynamic sorting and muscle group filtering.",
    futurePlans: "Introduce custom workout set creation with rest interval timers, historical weekly workout analytics, and offline workout logging."
  },
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
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "react", highlight: true },
      { name: "Next.js", icon: "nextjs", highlight: true },
      { name: "Tailwind CSS", icon: "tailwind", highlight: true },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "DaisyUI", icon: "daisyui" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "nodejs", highlight: true },
      { name: "Express.js", icon: "express", highlight: true },
      { name: "MongoDB", icon: "mongodb", highlight: true },
      { name: "Mongoose", icon: "mongoose" },
      { name: "REST APIs", icon: "api", highlight: true },
      { name: "JWT Auth", icon: "jwt" },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "git", highlight: true },
      { name: "GitHub", icon: "github", highlight: true },
      { name: "VS Code", icon: "vscode", highlight: true },
      { name: "Vite", icon: "vite" },
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: "c", highlight: true },
      { name: "C++", icon: "cpp", highlight: true },
      { name: "Java", icon: "java", highlight: true },
      { name: "JavaScript", icon: "javascript", highlight: true },
      { name: "TypeScript", icon: "typescript", highlight: true },
      { name: "Python", icon: "python" },
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
    status: "4th Year Undergraduate Student",
    result: "Current CGPA: 3.76 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Higher Secondary Education Board",
    location: "Sylhet, Bangladesh",
    period: "Passing Year: 2022",
    status: "Science Group",
    result: "GPA: 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Secondary Education Board",
    location: "Sylhet, Bangladesh",
    period: "Passing Year: 2020",
    status: "Science Group",
    result: "GPA: 5.00 / 5.00",
  }
];

export const experienceData: Experience[] = [
  {
    role: "Founder",
    organization: "Cozy Yarn",
    period: "2023 – Present",
    type: "Entrepreneurship & Creative Design",
    description: [
      "Founded and manage Cozy Yarn, an independent handcrafted crochet small business designing and delivering custom creations.",
      "Direct end-to-end product design, brand visual identity, digital customer communication, and inventory management.",
      "Cultivated disciplined time management, patience, and customer empathy while balancing university software engineering academics."
    ]
  }
];

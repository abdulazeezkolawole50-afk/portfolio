export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  stack: string[];
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
};

export const stats = [
  { label: "Projects", value: 18 },
  { label: "Certificates", value: 9 },
  { label: "Years Experience", value: 3 },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Node.js",
  "MySQL",
  "Supabase",
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Real Estate Platform",
    summary:
      "Premium property listing platform with structured browsing, detail pages, and lead capture.",
    description: `
## Real Estate Platform
A real estate web application focused on clean browsing experience and structured data presentation.

### What I built
- Property search and filtering system  
- Dynamic property detail pages  
- Admin approval workflow  
- Lead capture and inquiry system  

### Current Status
This project is actively being improved and prepared for deployment.

### Stack
React, Node.js, MySQL, Tailwind CSS
`,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "",
    githubUrl: "",
    stack: ["React", "Node.js", "MySQL", "Tailwind"],
  },

  {
    id: "2",
    title: "Restaurant Ordering System",
    summary:
      "Mobile-first ordering system with admin dashboard, order tracking, and structured workflows.",
    description: `
## Restaurant Ordering System
A full-stack ordering system designed to simplify customer ordering and backend management.

### Features
- Order creation and checkout flow  
- Real-time order status tracking  
- Admin dashboard for managing orders  
- Responsive mobile-first UI  

### Current Status
Still in development with ongoing improvements and refinements.

### Stack
React, Node.js, MySQL, Tailwind CSS
`,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "",
    githubUrl: "",
    stack: ["React", "Node.js", "MySQL", "Tailwind"],
  },

  {
    id: "3",
    title: "Developer Portfolio",
    summary:
      "Glassmorphic portfolio with motion, structured sections, and clean project presentation.",
    description: `
## Developer Portfolio (Glassfolio)
A modern portfolio built to showcase projects, skills, and growth with a premium UI experience.

### Highlights
- Animated hero section  
- Glassmorphism UI design  
- Project showcase with tabs and drawer  
- Smooth transitions and motion effects  
- Supabase integration (comments / backend)  

### Status
This is my current active portfolio build.

### Stack
Next.js, TypeScript, Tailwind CSS, Motion, Supabase
`,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "http://localhost:3000",
    githubUrl: "",
    stack: ["Next.js", "TypeScript", "Motion", "Supabase"],
  },
];

export const certificates: Certificate[] = [
  {
    id: "c1",
    title: "Frontend Development",
    issuer: "Coursera",
    year: "2025",
  },
  {
    id: "c2",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2024",
  },
  {
    id: "c3",
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    year: "2024",
  },
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulazeez-kolawole-3244383ba?trk=contact-info",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@kolawoleabdulazeez4",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kola_wole23/?__pwa=1#",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2348109739729?text=Hello%20Abdulazeez,%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20work%20with%20you",
  },
];
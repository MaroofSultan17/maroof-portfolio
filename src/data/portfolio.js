export const personal = {
  name: "Maroof Sultan",
  role: "Full-Stack Engineer",
  tagline: "Laravel · Symfony · Vue.js · SaaS · REST APIs",
  bio: "Full-Stack Laravel Developer with 2+ years of experience building scalable web applications for product-based and service-based companies. Skilled in backend architecture, modern frontend tools, and delivering end-to-end solutions. Experienced collaborating with cross-functional and international teams, optimizing performance, and shipping secure, reliable features.",
  email: "maroofsultan.dev@gmail.com",
  phone: "+92 310 6510421",
  github: "https://github.com/MaroofSultan17",
  linkedin: "https://linkedin.com/in/maroof-sultan-081b33220",
  cv: "/Maroof_Sultan_CV.pdf",
};

export const skills = {
  top: [
    { name: "Laravel / PHP", level: 92 },
    { name: "Symfony", level: 82 },
    { name: "Vue.js / Livewire", level: 78 },
    { name: "MySQL / Eloquent ORM", level: 85 },
    { name: "REST APIs", level: 90 },
  ],
  supporting: [
    "Next.js", "Blade Templates", "Docker", "Redis",
    "Stripe / PayPal / Braintree", "GitLab CI/CD",
    "WebSockets / Laravel Reverb", "OpenCart",
    "Google APIs", "VPS / cPanel Deployment",
    "Doctrine ORM", "TailwindCSS",
  ],
};

export const experiences = [
  {
    role: "Software Engineer",
    company: "AlphaSoft360",
    type: "Full-Time",
    period: "March 2025 – Present",
    description: "Product-based technology company building scalable enterprise solutions for global clients.",
    bullets: [
      "Integrated Braintree Payments (PayPal, Google Pay, Apple Pay, Venmo) including multi-method and partial capture flows.",
      "Built Zebra Printer API integration to generate and print labels from EPC / license plate values.",
      "Migrated large datasets from legacy databases using optimized SQL views and Symfony CLI tools.",
      "Developed REST APIs in Symfony consumed by Next.js frontends.",
      "Customized Laravel & OpenCart eCommerce platforms with Stripe and PayPal integrations.",
      "Automated deployments via GitLab CI/CD pipelines, enforcing code quality and test standards.",
      "Mentored junior engineers, improving team productivity and technical skill set.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "HiddenLogics",
    type: "Part-Time",
    period: "Feb 2024 – Present",
    description: "Service-based software company delivering custom SaaS and enterprise applications.",
    bullets: [
      "Built full projects from scratch using Laravel Livewire and Blade with clean, modular architecture.",
      "Delivered end-to-end solutions: backend APIs, admin dashboards, and frontend interfaces.",
      "Implemented role-based access control systems and analytics dashboards.",
      "Built complete payment workflows using Stripe and PayPal.",
      "Deployed on cPanel and VPS; configured WebSockets and background services.",
      "Implemented real-time chat and notifications using Laravel Reverb (Jobs, Queues, Events, Listeners).",
      "Integrated Google OAuth, Google Calendar, and Microsoft Calendar with full console configuration.",
      "Managed client communication, requirement gathering, and module presentations.",
    ],
  },
];

export const projects = [
  {
    title: "Dhobbee",
    subtitle: "SaaS Laundry Management System",
    description: "Multi-tenant SaaS platform to manage laundry operations, customers, orders, and billing with role-based access control and clean REST APIs.",
    tech: ["Laravel", "Vue.js", "MySQL", "REST API", "SaaS"],
    category: "SaaS",
    github: "https://github.com/MaroofSultan17/dhobee",
    live: null,
    status: "In Progress",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "CountLinks",
    subtitle: "Publisher & Advertiser Marketplace",
    description: "Two-sided marketplace where publishers list websites and advertisers purchase backlink placements with real-time chat, Stripe payments, and automated Artisan commands.",
    tech: ["Laravel", "Livewire", "Stripe", "MySQL", "WebSockets"],
    category: "SaaS",
    github: "https://github.com/MaroofSultan17/countlinks",
    live: null,
    status: "In Progress",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Gempacked",
    subtitle: "Enterprise eCommerce Platform",
    description: "Large-scale enterprise eCommerce platform handling high-volume transactions, complex fulfillment flows, and multi-method payment processing via Braintree and Stripe.",
    tech: ["Symfony", "Next.js", "Braintree", "Stripe", "CI/CD"],
    category: "eCommerce",
    github: null,
    live: "https://www.gempacked.com",
    status: "Live",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "RoundHere",
    subtitle: "Location-based Scheduling Platform",
    description: "Scheduling platform for managing location-based appointments with Google Auth, Google Calendar sync, optimized queries, and real-time availability.",
    tech: ["Laravel", "MySQL", "Google APIs", "OAuth"],
    category: "Enterprise",
    github: null,
    live: "https://roundhere.io",
    status: "Live",
    color: "from-orange-500 to-red-500",
  },
];

export const categories = ["All", "SaaS", "eCommerce", "Enterprise"];

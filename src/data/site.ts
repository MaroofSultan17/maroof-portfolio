export const siteData: PortfolioGetResponseDTO = {
  personal: {
    name: "Maroof Sultan",
    role: "Software Engineer",
    tagline: ["Node.js", "Laravel", "Symfony", "React", "Next.js", "Streaming", "REST APIs"],
    bio: "Software Engineer with 2.5+ years of experience building SaaS, video streaming, and eCommerce platforms with Node.js, Laravel, and Symfony. Currently building backend systems for a video streaming platform, spanning video pipelines, background queue workers, and webhook-driven payments. Focused on clean architecture, reliable REST APIs, and high-throughput databases.",
    email: "maroofsultan.dev@gmail.com",
    phone: "+92 310 6510421",
    location: "Pakistan (Open to Remote)",
    github: "https://github.com/MaroofSultan17",
    linkedin: "https://www.linkedin.com/in/maroofsultan",
    cv: "/resume.pdf",
  },

  skills: [
    {
      category: "Backend & Systems",
      skills: ["Node.js", "Express.js", "NestJS", "Laravel", "Symfony", "RESTful APIs", "Microservices Architecture"],
    },
    {
      category: "Streaming & APIs",
      skills: ["Mux Video API", "HLS Adaptive Streaming", "Vonage API", "Webhooks", "Stripe", "Braintree", "PayPal"],
    },
    {
      category: "Databases & Caching",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "RabbitMQ", "Prisma", "Eloquent", "Doctrine"],
    },
    {
      category: "Frontend Engineering",
      skills: ["TypeScript", "JavaScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "SCSS Modules"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "GitLab CI/CD", "Git", "Linux VPS", "cPanel Deployment"],
    },
  ],

  experiences: [
    {
      id: "buggcy",
      role: "Software Engineer",
      company: "Buggcy",
      companyUrl: "https://buggcy.com",
      type: "Full-Time",
      period: "Jul 2026 to Present",
      location: "Hybrid",
      description:
        "Building backend infrastructure for FilmLauncher (pre-launch), a MERN stack video streaming and crowdfunding platform for independent films.",
      bullets: [
        "Integrated the Mux Video API for uploads, encoding, HLS adaptive streaming, and signed playback, with webhooks syncing asset states to MongoDB.",
        "Built BullMQ workers on Redis for video processing and notifications, and used RabbitMQ for event-driven messaging between services.",
        "Optimized streaming APIs and MongoDB queries using indexes, aggregation pipelines, and Redis caching.",
        "Built payment flows for crowdfunding contributions and paid content with webhook verification.",
      ],
    },
    {
      id: "alphasoft360",
      role: "Software Engineer",
      company: "AlphaSoft360",
      companyUrl: "https://www.alphasoft360.org/team/maroof-sultan",
      type: "Full-Time",
      period: "Mar 2025 to Jul 2026",
      location: "On-site / Hybrid",
      description:
        "Contributed to Gempacked, a wholesale eCommerce platform serving 7K+ users with 40K+ catalog products across web, POS, and in-house orders.",
      bullets: [
        "Built order flows for online, POS, and in-house sales and optimized queries across the catalog.",
        "Integrated Braintree (PayPal, Google Pay, Apple Pay, Venmo) with partial capture and over-capture support.",
        "Developed RESTful APIs in Symfony for Next.js frontends and integrated the Zebra Printer API.",
        "Migrated large legacy datasets to a new schema using optimized SQL views and Symfony CLI.",
        "Customized Laravel and OpenCart stores with Stripe and PayPal, and implemented GitLab CI/CD pipelines.",
        "Led and mentored 4 to 5 junior developers, assigning tasks, reviewing code, and guiding feature delivery.",
      ],
    },
    {
      id: "hiddenlogics",
      role: "Laravel Developer (Remote)",
      company: "HiddenLogics",
      companyUrl: "https://hiddenlogics.com",
      type: "Part-Time",
      period: "Apr 2024 to Apr 2026",
      location: "Remote",
      description:
        "Contributed to RoundHere, a live location-based scheduling platform with active users and events.",
      bullets: [
        "Integrated Vonage communication APIs, Google OAuth, and Google Calendar sync, and optimized MySQL queries.",
        "Built client applications with Laravel, Livewire, and Blade, including RESTful APIs and RBAC dashboards.",
        "Integrated Stripe and PayPal payment gateways, and Microsoft Calendar APIs.",
        "Implemented real-time chat with Laravel Reverb using Jobs, Queues, Events, and Listeners.",
        "Deployed applications on VPS and cPanel servers and managed requirements and demos directly with clients.",
      ],
    },
  ],

  projects: [
    {
      id: "filmlauncher",
      title: "FilmLauncher",
      subtitle: "Independent Film Streaming & Crowdfunding",
      description:
        "A video streaming and crowdfunding platform for independent films, featuring adaptive HLS video streaming, background encoding queues, and secure payment processing.",
      tech: ["Node.js", "React", "MongoDB", "Mux Video API", "BullMQ", "Redis", "RabbitMQ"],
      category: { id: "streaming", name: "Streaming & SaaS", code: "streaming" },
      status: { id: "pre-launch", name: "Pre-launch", code: "pre-launch" },
      role: "Backend Engineer",
      live: "https://filmlauncher.com",
      caseStudy: {
        problem:
          "Independent filmmakers need a secure way to stream high-resolution video and raise crowdfunding contributions without running into costly streaming infrastructure bottlenecks.",
        contribution:
          "Integrated Mux Video API for adaptive HLS playback, engineered background encoding queues using BullMQ on Redis, and built event-driven services with RabbitMQ.",
        decisions:
          "Used Redis caching and compound database indexing to lower API latency, and implemented signed playback URLs to protect paid film assets against unauthorized sharing.",
      },
    },
    {
      id: "gempacked",
      title: "Gempacked",
      subtitle: "Wholesale Multi-Channel eCommerce",
      description:
        "A wholesale jewelry findings and components eCommerce platform handling 7K+ users and 40K+ products across online storefronts, in-store POS, and warehouse sales.",
      tech: ["Symfony", "Next.js", "MySQL", "Braintree", "Stripe", "GitLab CI/CD"],
      category: { id: "ecommerce", name: "eCommerce", code: "ecommerce" },
      status: { id: "live", name: "Live", code: "live" },
      role: "Contributor (Team of Engineers)",
      live: "https://www.gempacked.com",
      caseStudy: {
        problem:
          "Handling multi-payment methods across online checkouts, physical POS terminals, and wholesale order desks while keeping massive product catalogs responsive.",
        contribution:
          "Developed high-throughput Symfony REST APIs for the Next.js frontend, integrated Braintree partial capture, and automated packing slips via Zebra Printer API.",
        decisions:
          "Migrated legacy relational tables using optimized SQL views and Symfony console commands, keeping order processing smooth during high-traffic peak hours.",
      },
    },
    {
      id: "roundhere",
      title: "RoundHere",
      subtitle: "Live Location-Based Event Scheduling",
      description:
        "A location-based scheduling and event coordination platform syncing active user calendars and real-time alerts.",
      tech: ["Laravel", "Livewire", "MySQL", "Google APIs", "Vonage", "Laravel Reverb"],
      category: { id: "saas", name: "SaaS & Scheduling", code: "saas" },
      status: { id: "live", name: "Live", code: "live" },
      role: "Contributor",
      live: "https://roundhere.io",
      caseStudy: {
        problem:
          "Organizers needed a reliable scheduling workflow with automated calendar sync and real-time notifications across different attendee timezones.",
        contribution:
          "Integrated Vonage messaging APIs, bidirectional Google/Microsoft Calendar sync, and real-time chat with Laravel Reverb events and queues.",
        decisions:
          "Offloaded calendar syncing and notification dispatches to background queue workers, eliminating checkout lag during concurrent event registrations.",
      },
    },
  ],

  education: [
    {
      degree: "BS Computer Science",
      institution: "COMSATS University Islamabad",
      period: "Sep 2021 to Sep 2025",
      cgpa: "3.80 / 4.00",
    },
  ],
};

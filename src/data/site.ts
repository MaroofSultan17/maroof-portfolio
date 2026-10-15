export type ProjectStatus = "Live" | "Pre launch" | "In progress" | "Completed";

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface CaseStudy {
  problem: string;
  contribution: string;
  decisions: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  role: string;
  period: string;
  image?: string;
  imageAlt?: string;
  live?: string;
  repo?: string;
  privateNote?: string;
  caseStudy?: CaseStudy;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
}

export const siteData = {
  personal: {
    name: "Maroof Sultan",
    role: "Software Engineer",
    tagline: "Full stack engineer for streaming, payments and eCommerce products.",
    bio: "Full stack Software Engineer with 2.5+ years of experience building SaaS, streaming and eCommerce products with Node.js, React, Laravel and Symfony. Currently building a video streaming and crowdfunding platform end to end, from React interfaces to Mux video pipelines, queue workers and payments.",
    email: "maroofsultan.dev@gmail.com",
    phone: "+92 310 6510421",
    location: "Pakistan, PKT (UTC+5)",
    github: "https://github.com/MaroofSultan17",
    linkedin: "https://www.linkedin.com/in/maroofsultan",
    cv: "/Maroof_Sultan_Resume.pdf",
  },

  skills: [
    { category: "Languages", skills: ["JavaScript", "TypeScript", "PHP", "SQL", "Python"] },
    { category: "Backend", skills: ["Node.js", "Express.js", "NestJS", "Laravel", "Symfony", "REST APIs"] },
    { category: "Frontend", skills: ["React", "Next.js", "Vue.js", "Livewire", "Blade", "Tailwind CSS"] },
    {
      category: "Databases & Search",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Elasticsearch", "Mongoose", "Eloquent", "Doctrine"],
    },
    { category: "Queues & Caching", skills: ["Redis", "BullMQ", "RabbitMQ", "WebSockets", "Laravel Reverb"] },
    {
      category: "Integrations",
      skills: ["Mux Video API", "HLS Streaming", "Stripe", "Braintree", "PayPal", "Vonage", "OpenAI API", "Webhooks"],
    },
    { category: "DevOps & Tools", skills: ["Docker", "GitLab CI/CD", "Git", "VPS", "cPanel"] },
  ] satisfies SkillGroup[],

  experiences: [
    {
      id: "buggcy",
      role: "Software Engineer",
      company: "Buggcy",
      companyUrl: "https://buggcy.com",
      type: "Full time",
      period: "Jul 2026 to Present",
      description:
        "Full stack work on client products across React, Node.js, Express and MongoDB. My main project is FilmLauncher, a video streaming and crowdfunding platform for independent films, currently in pre launch.",
      bullets: [
        "Build features across the stack, from React screens to REST APIs and database design.",
        "Integrated Mux for uploads, encoding, HLS streaming and signed playback, synced to MongoDB through webhooks.",
        "Set up BullMQ workers on Redis for video processing and notifications, and RabbitMQ for messaging between services.",
        "Optimized APIs and MongoDB queries with indexes, aggregation pipelines and Redis caching.",
        "Implemented payment flows for crowdfunding contributions and paid content, with webhook verification.",
      ],
    },
    {
      id: "alphasoft360",
      role: "Software Engineer",
      company: "AlphaSoft360",
      companyUrl: "https://www.alphasoft360.com/team/maroof-sultan",
      type: "Full time",
      period: "Mar 2025 to Jul 2026",
      description:
        "Contributed to Gempacked, a wholesale eCommerce platform with 7K+ users and 40K+ products, built with Symfony and Next.js.",
      bullets: [
        "Integrated Braintree with PayPal, Google Pay, Apple Pay and Venmo, including partial capture and capturing above the original authorization.",
        "Developed order flows for online, POS and in house sales, and tuned queries across the product catalog.",
        "Connected Zebra printers to print ZPL labels from EPC and LPN values for warehouse shipping.",
        "Migrated large legacy datasets into a new schema using optimized SQL views and Symfony CLI commands.",
        "Designed Symfony REST APIs for the Next.js frontend, with Elasticsearch search and Redis caching.",
        "Customized Laravel and OpenCart stores with Stripe and PayPal, and set up GitLab CI/CD pipelines.",
        "Led and mentored 4 to 5 junior developers through task planning and code reviews.",
      ],
    },
    {
      id: "hiddenlogics",
      role: "Senior Laravel Developer",
      company: "HiddenLogics",
      companyUrl: "https://hiddenlogics.com",
      type: "Part time",
      period: "Apr 2024 to Apr 2026",
      description:
        "Joined as a Laravel intern in Feb 2024, became a Laravel Developer in Apr 2024 and was promoted to Senior in Oct 2025. Owned client projects from requirements to deployment and guided the junior developers on the team.",
      bullets: [
        "Contributed to RoundHere, a live location based scheduling platform, with Vonage APIs, Google OAuth and Google Calendar sync.",
        "Built RBAC admin dashboards and Stripe and PayPal checkout flows with Laravel, Livewire and Blade.",
        "Added real time chat with Laravel Reverb, using Jobs, Queues, Events and Listeners for background work.",
        "Integrated Google and Microsoft Calendar, including Google Cloud Console setup.",
        "Built REST APIs for mobile apps and fixed checkout and payment bugs on live eCommerce stores.",
        "Deployed to VPS and cPanel servers, ran code reviews and presented finished modules to clients.",
      ],
    },
    {
      id: "upwork",
      role: "Freelance Full Stack Developer",
      company: "Upwork",
      type: "Freelance",
      period: "Dec 2024 to Oct 2025",
      description:
        "Freelance work for international clients alongside my main roles, mostly with Laravel, Next.js and OpenCart.",
      bullets: [
        "Fixed checkout and rendering bugs on eCommerce stores.",
        "Built REST APIs and payment gateway integrations to automate client operations.",
        "Improved page speed and query performance on existing Laravel sites.",
        "Handled requirements, estimates and delivery directly with clients.",
      ],
    },
  ] satisfies Experience[],

  projects: [
    {
      id: "filmlauncher",
      title: "FilmLauncher",
      subtitle: "Video streaming and crowdfunding for independent films",
      description:
        "A MERN stack platform where independent filmmakers crowdfund their films and audiences stream them. I work across the React frontend, the Node.js APIs and the Mux video pipeline.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Mux", "BullMQ", "Redis", "RabbitMQ"],
      status: "Pre launch",
      role: "Full stack engineer at Buggcy",
      period: "Jul 2026 to Present",
      image: "/projects/filmlauncher.webp",
      imageAlt: "FilmLauncher Fund Films page and creator dashboard",
      live: "https://filmlauncher.com",
      caseStudy: {
        problem:
          "Independent filmmakers need one place to raise money for a film and then stream it to the people who backed it.",
        contribution:
          "Built features across React and Node.js, integrated Mux for uploads, HLS streaming and signed playback, set up BullMQ workers on Redis and RabbitMQ messaging, and implemented the payment flows.",
        decisions:
          "Video processing and notifications run in queue workers so API requests stay fast, Mux webhooks keep asset states in sync with MongoDB, and paid films use signed playback.",
      },
    },
    {
      id: "gempacked",
      title: "Gempacked",
      subtitle: "Wholesale eCommerce platform",
      description:
        "A wholesale jewelry supplies store with 7K+ users and 40K+ products, selling online, through POS and in house. I contributed as part of the AlphaSoft360 team.",
      tech: ["Symfony", "Next.js", "MySQL", "Elasticsearch", "Redis", "Braintree", "Stripe"],
      status: "Live",
      role: "Contributor at AlphaSoft360",
      period: "Mar 2025 to Jul 2026",
      image: "/projects/gempacked.webp",
      imageAlt: "Gempacked homepage and Findings and Components category page",
      live: "https://www.gempacked.com",
      caseStudy: {
        problem:
          "One catalog of 40K+ products has to serve online checkout, POS and in house orders, with several payment methods.",
        contribution:
          "Integrated Braintree with partial capture, built order flows for all three sales channels, connected Zebra printers for ZPL shipping labels and migrated legacy data into a new schema.",
        decisions:
          "Symfony REST APIs serve the Next.js frontend, with Elasticsearch for product search and Redis caching, and the data migration ran through SQL views and Symfony CLI commands.",
      },
    },
    {
      id: "roundhere",
      title: "RoundHere",
      subtitle: "Events and scheduling platform",
      description:
        "A live platform where business communities run events, book experts and manage sessions. I contributed as part of the HiddenLogics team.",
      tech: ["Laravel", "MySQL", "Vonage", "Google OAuth", "Google Calendar API"],
      status: "Live",
      role: "Contributor at HiddenLogics",
      period: "2024 to 2026",
      image: "/projects/roundhere.webp",
      imageAlt: "RoundHere homepage and live sessions section",
      live: "https://roundhere.io",
      caseStudy: {
        problem: "Members need to sign in quickly and keep sessions and events in sync with the calendars they already use.",
        contribution:
          "Integrated Vonage communication APIs, Google OAuth login and Google Calendar sync, and optimized MySQL queries.",
        decisions: "Used Google OAuth so members sign in with an account they already have, and tuned slow MySQL queries.",
      },
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      subtitle: "This website",
      description:
        "Built with React, TypeScript, Vite and Tailwind CSS. All content lives in one typed data file, and design tokens drive the light and dark themes.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "SEO"],
      status: "Live",
      role: "Personal project",
      period: "Oct 2026",
      image: "/projects/portfolio.webp",
      imageAlt: "Portfolio homepage in light and dark mode",
      live: "https://maroof-portfolio-rose.vercel.app",
      repo: "https://github.com/MaroofSultan17/maroof-portfolio",
      caseStudy: {
        problem: "Recruiters need to see my work, experience and resume quickly, on any device.",
        contribution:
          "Designed and built the site, wrote all content in one typed data file and set up the SEO, contact form and deployment.",
        decisions:
          "CSS variable design tokens for both themes, the saved theme applied before first paint, JSON LD structured data, and a sitemap for search engines.",
      },
    },
    {
      id: "cart-abandonment",
      title: "Cart Abandonment Prediction",
      subtitle: "Machine learning final year project",
      description:
        "Studied why online shoppers add products to their cart but leave without buying, and built a model to predict which sessions end without a purchase.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      status: "Completed",
      role: "Final Year Project, COMSATS",
      period: "2024 to 2025",
      image: "/projects/cart-abandonment.webp",
      imageAlt: "Cart Abandonment Prediction problem and four step approach",
      privateNote: "Private repository, available on request",
      caseStudy: {
        problem: "Online stores lose sales when shoppers fill a cart and then leave without paying.",
        contribution: "Analyzed shopping session data to find the patterns behind abandoned carts and built a prediction model.",
        decisions: "The pipeline goes from session data, to cleaning and feature engineering, to a model that predicts purchase or abandonment.",
      },
    },
    {
      id: "weather",
      title: "Weather Forecast and Alert System",
      subtitle: "Java console app",
      description:
        "A Java app that pulls forecast data from the OpenWeatherMap API, shows temperature, humidity, wind and conditions in 3 hour steps, and raises alerts for storms and heavy rain.",
      tech: ["Java", "Maven", "REST API", "JSON", "OpenWeatherMap"],
      status: "Completed",
      role: "University project",
      period: "Apr 2023 to May 2023",
      image: "/projects/weather.webp",
      imageAlt: "Weather Forecast and Alert System source code and sample terminal run",
      repo: "https://github.com/MaroofSultan17/WeatherForecastingAPI",
      caseStudy: {
        problem: "Get a short term forecast for any city and warn the user when severe weather is coming.",
        contribution:
          "Called the OpenWeatherMap forecast API over HTTP, parsed the JSON response and added a simple login and sign up flow.",
        decisions: "Converted Kelvin to Celsius, showed results as a table in 3 hour steps, and flagged storms and heavy rain as alerts.",
      },
    },
    {
      id: "dhobbee",
      title: "Dhobbee",
      subtitle: "SaaS laundry management system",
      description:
        "A multi tenant SaaS platform to manage laundry operations, customers, orders and billing, with a Vue.js frontend on a Laravel backend.",
      tech: ["Laravel", "Vue.js", "REST APIs", "RBAC"],
      status: "In progress",
      role: "Personal project",
      period: "Ongoing",
      image: "/projects/dhobbee.webp",
      imageAlt: "Dhobbee overview with its core modules",
      privateNote: "Private repository, available on request",
      caseStudy: {
        problem: "Laundry businesses track customers, orders and billing in separate places, or on paper.",
        contribution: "Building the multi tenant Laravel backend, its REST APIs, role based access control and the Vue.js frontend.",
        decisions: "Each business gets its own tenant space, and roles control what each staff member can see and do.",
      },
    },
  ] satisfies Project[],

  education: [
    {
      degree: "BS Computer Science",
      institution: "COMSATS University Islamabad",
      period: "Aug 2021 to Sep 2025",
      grade: "CGPA 3.80 / 4.00",
      details: [
        "Final year project: Cart Abandonment Prediction, a machine learning project.",
        "Vice President, COMSATS Health Awareness and Blood Donor Society.",
        "Core team member, COMSATS Computer Science Society, helping run tech events, hackathons and workshops.",
        "Member, COMSATS Dramatic Society.",
      ],
    },
    {
      degree: "DAE Computer Information Technology",
      institution: "Government College of Technology Kamalia",
      period: "Jan 2018 to Jun 2021",
      grade: "87% marks",
      details: [
        "Final year project: Home Automation System built with Arduino.",
        "Class Representative for my batch, and presented my project at the college exhibition.",
      ],
    },
  ] satisfies Education[],

  certifications: [
    { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft" },
    { name: "PHP Laravel: Build Amazing Streaming Service", issuer: "Udemy" },
    { name: "Laravel Essential Training", issuer: "LinkedIn Learning" },
    { name: "Intermediate Python", issuer: "DataCamp" },
    { name: "Introduction to Python", issuer: "DataCamp" },
    { name: "Git from Scratch", issuer: "LinkedIn Learning" },
    { name: "Microsoft Office Specialist: Master on Microsoft Office 2016", issuer: "Microsoft" },
  ] satisfies Certification[],

  honors: [
    "Completed Round 1 at National Incubation Center Lahore.",
    "Secured 2nd position in a skill competition and exhibition.",
  ],
};

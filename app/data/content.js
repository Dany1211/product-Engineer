export const personalInfo = {
  title: "AI Product Engineer",
  tagline: "I ship systems. Not excuses.",
  description:
    "I’m Dnyanesh Mulay. I build AI-powered mobile and web applications that survive bad networks, real users, and production pressure. I specialize in offline-first architectures, event-driven systems, and LLM-backed workflows. React Native, React, Docker, and automation pipelines. If it’s not deployable, I’m not interested.",
  status: "Shipping to Production",
  social: {
    email: "dnyanesh2442@gmail.com",
    github: "https://github.com/Dany1211",
    linkedin: "https://www.linkedin.com/in/danymulay/"
  },
  stats: [
    { label: "Production Apps Shipped", value: "10+" },
    { label: "Hackathon Wins", value: "3" }
  ]
};

export const projects = [
  {
    title: "ReportIT",
    description:
      "Offline-first grievance reporting built for unreliable connectivity. Reports are queued locally, synced in the background, and tracked through event-driven pipelines. Separate user and admin workflows with audit trails, status transitions, and notification triggers. Designed to work when networks don’t.",
    type: "Mobile",
    tech: [
      "React Native",
      "Expo",
      "SQLite",
      "Expo Background Fetch",
      "Expo Notifications"
    ],
    links: {
      github: "https://github.com/Dany1211/report_IT"
    }
  },
  {
    title: "Kisan AI",
    description:
      "AI-assisted agriculture support platform. Enables crop disease analysis via image uploads, fertilizer tracking, and agri-market insights. Includes a guided chatbot that answers real farmer queries instead of dumping generic responses.",
    type: "Web",
    tech: [
      "React.js",
      "OpenAI API",
      "TensorFlow.js",
      "REST APIs"
    ],
    links: {
      live: "https://kisanai.vercel.app"
    }
  },
  {
    title: "Pathfinder",
    description:
      "Career guidance platform built for students who are tired of vague advice. AI-powered chatbots simulate mentor-like interactions, backed by structured flows, smart search, and a clean, distraction-free UI.",
    type: "Web",
    tech: [
      "React.js",
      "OpenAI API",
      "Framer Motion"
    ],
    links: {
      live: "https://pathfindrr.vercel.app"
    }
  },
  {
    title: "Medicine Tracker",
    description:
      "Cross-platform medicine reminder app using time-based notifications. Secure authentication, real-time data storage, and zero tolerance for missed alerts. Built for people who forget — not for demos.",
    type: "Mobile",
    tech: [
      "Expo",
      "Firebase Authentication",
      "Cloud Firestore",
      "Expo Notifications"
    ],
    links: {
      github: "https://github.com/Dany1211/Medicine-Tracker"
    }
  }
];


export const experience = [
  {
    company: "Hungy Inc.",
    role: "Software Engineering Intern",
    period: "Oct 2025 – Dec 2025 | Remote (Canada)",
    description:
      "Worked on production-grade mobile and backend systems with a focus on reliability, automation, and offline resilience.",
    achievements: [
      "Built server-driven, event-based push notification workflows for iOS and Android.",
      "Implemented offline-first data handling with local persistence and background sync.",
      "Deployed Docker-based API and data-processing microservices.",
      "Built n8n automation pipelines, including an AI agent backed by PostgreSQL for SQL-less data access."
    ]
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2024 – 2025",
    description:
      "Delivered end-to-end web and mobile solutions for clients, handling architecture, development, deployment, and iteration.",
    achievements: [
      "Shipped multiple client-facing applications from MVP to production.",
      "Handled full lifecycle development without hand-holding or dependency bottlenecks."
    ]
  }
];

export const achievements = [
  {
    title: "Rackathon 2025 – Winner",
    description:
      "Won first place for rapid prototyping and execution under time pressure."
  },
  {
    title: "Hackbyte 2.0 – Social Media Track Winner",
    description:
      "Recognized at IIIT Jabalpur for innovative implementation and technical depth."
  },
  {
    title: "Codelite – Top 5",
    description:
      "Placed in the top 5 at Pune University among hundreds of participants."
  }
];

export const skills = {
  web: [
    "TypeScript",
    "ReactJS",
    "TailwindCSS",
    "GSAP",
    "ScrollTrigger",
    "Vite",
    "Gen AI"
  ],
  mobile: [
    "TypeScript",
    "React Native",
    "Expo",
    "State Management"
  ],
  backend: [
    "MongoDB",
    "PostgreSQL",
    "API Design",
    "Prisma",
    "BaaS",
    "JWT"
  ],
  tools: [
    "Git",
    "Docker",
    "n8n",
    "LangChain",
    "Vercel",
    "Expo CLI",
    "Cursor",
    "AI Tooling"
  ]
};

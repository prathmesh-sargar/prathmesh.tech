// import collabV from '../assets/companyLogo/collabV.jpg';
// import gspInnovations from '../assets/companyLogo/jsp.jpg';
// import freelance from '../assets/companyLogo/freelancer.jpg';

// export const ExperienceData = [

//   {
//     id: '1',
//     role: "Freelance - Full Stack Developer (MERN)",
//     company: "Self Employed",
//     companyLogo: freelance,
//     type: "Remote",
//     date: "Jan 2024 - Present",
//     location: "Remote",
//     bullets: [
//       "Built end-to-end full-stack applications using the MERN stack, designing RESTful APIs, database schemas, and authentication workflows.",
//       "Developed reusable frontend components and dashboards with React, ensuring clean state management and optimized data fetching.",
//       "Integrated third-party APIs and implemented role-based access control, secure authentication, and validation layers."
//     ],
//     technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"]
//   },
//   {
//     id: '2',
//     role: "React.js Developer Intern",
//     company: "GSP Innovations",
//     companyLogo: gspInnovations,
//     type: "Hybrid",
//     date: "Nov 2025 - Jan 2026",
//     location: "Hybrid",
//     bullets: [
//       "Designed and developed a modular, scalable CRM frontend using React, implementing reusable components, dynamic forms, and role-based dashboards.",
//       "Managed complex application state using Zustand for client-side state and React Query for server-side state, improving data consistency and reducing redundant API calls.",
//       "Integrated frontend modules with a Spring Boot REST API, implementing complete CRUD workflows backed by PostgreSQL.",
//       "Improved perceived performance and overall UX by handling loading, error, and empty states, minimizing unnecessary re-renders, and optimizing data-fetching strategies."
//     ],
//     technologies: ["React", "Zustand", "React Query", "Spring Boot", "PostgreSQL"]
//   },

//   {
//     id: '3',
//     role: "Software Trainee Intern",
//     company: "Collab Vision Infosolution",
//     companyLogo: collabV,
//     type: "Remote",
//     date: "Feb 2025 - Aug 2025",
//     location: "Remote",
//     bullets: [
//       "Built and maintained scalable backend services using Node.js and Express, designing RESTful APIs, validation layers, and data models for a MERN-based platform.",
//       "Integrated AI/ML-powered features into an EdTech system by exposing models through backend APIs and ensuring reliable inter-service communication.",
//       "Dockerized the application and deployed it on AWS EC2, implementing a CI/CD pipeline using GitHub Actions to automate builds and deployments.",
//       "Developed a multilingual React frontend supporting four languages, ensuring UI and content consistency across locales."
//     ],
//     technologies: ["Node.js", "Express.js", "React", "Docker", "AWS EC2", "GitHub Actions"]
//   }

// ];

import collabV from "../assets/companyLogo/collabV.jpg";
import gspInnovations from "../assets/companyLogo/jsp.jpg";
import freelance from "../assets/companyLogo/freelancer.jpg";

export const ExperienceData = [
  {
    id: "freelance",
    role: "Freelance Work",
    company: "Independent Consultant",
    companyLogo: freelance,
    type: "Remote",
    date: "Jan 2024 – Present",
    location: "Remote",

    projects: [
      {
        name: "AI Lead Generation & Outreach Automation",
        client: "SMEs & Growth Teams (Freelance)",
        description: [
          "Built an end-to-end AI-powered lead generation system that scrapes Google Maps business data and automatically extracts verified emails and websites.",
          "Orchestrated a fault-tolerant multi-step workflow using n8n, integrating Serper API, email validation, OpenAI-based personalization, and WhatsApp/email outreach.",
          "Reduced manual prospecting time by ~70% by implementing AI-driven lead enrichment and dynamic message generation.",
          "Designed a reply-tracking and automated follow-up engine using conditional logic, retries, and webhooks to support scalable outreach.",
        ],
        technologies: [
          "n8n",
          "Serper API",
          "OpenAI API",
          "Google Maps Scraping",
          "Node.js",
          "Webhooks",
          "WhatsApp API",
          "Email Automation",
        ],
      },
      {
        name: "Client CRM Web Application",
        client: "Freelance",
        description: [
          "Developed a modular and scalable CRM frontend using React with reusable components and role-based dashboards.",
          "Managed complex state using Zustand and React Query to improve data consistency and reduce redundant API calls.",
        ],
        technologies: ["React", "Zustand", "React Query", "REST APIs"],
      },
      {
        name: "Sentiment Analysis Chatbot",
        client: "E-commerce Product Team",
        description: [
          "Built a real-time sentiment analysis chatbot to classify customer feedback as positive or negative.",
          "Integrated a Flask + NLTK machine learning backend with a React frontend.",
        ],
        technologies: ["Flask", "React", "NLTK", "Tailwind CSS"],
      },
      {
        name: "QuickLearn",
        client: "DYPCET First Year Student Helpdesk",
        description: [
          "Built an educational web platform providing subject notes and previous-year question papers for first-year engineering students.",
          "Implemented a JavaScript-based academic chatbot to assist students with basic queries.",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      },
      {
        name: "Dry Fruit Store – E-commerce Website",
        client: "College Student (Freelance)",
        description: [
          "Developed a basic e-commerce website with product listings and cart functionality.",
          "Designed and integrated a MySQL database to manage product data.",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      },
    ],
  },

  {
    id: "intern-gsp",
    role: "React.js Developer Intern",
    company: "GSP Innovations",
    companyLogo: gspInnovations,
    type: "Hybrid",
    date: "Nov 2025 – Jan 2026",
    location: "Hybrid",
    bullets: [
      "Designed and developed a modular CRM frontend using React with reusable components and dynamic forms.",
      "Managed client-side state with Zustand and server-state with React Query to optimize data fetching.",
      "Integrated frontend modules with Spring Boot REST APIs backed by PostgreSQL.",
      "Improved UX by handling loading, error, and empty states and optimizing component re-renders.",
    ],
    technologies: [
      "React",
      "Zustand",
      "React Query",
      "Spring Boot",
      "PostgreSQL",
    ],
  },

  {
    id: "intern-collab",
    role: "Software Trainee Intern",
    company: "Collab Vision Infosolution",
    companyLogo: collabV,
    type: "Remote",
    date: "Feb 2025 – Aug 2025",
    location: "Remote",
    bullets: [
      "Built scalable backend services using Node.js and Express, designing RESTful APIs and validation layers.",
      "Integrated AI/ML-powered features into an EdTech platform through backend APIs.",
      "Dockerized the application and deployed it on AWS EC2 with CI/CD using GitHub Actions.",
      "Developed a multilingual React frontend supporting four languages using i18next.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
    ],
  },
];

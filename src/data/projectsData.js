
import campusCompass from "../assets/projects/CampusCompass.png";
import skillSync from "../assets/projects/Skillsync.png";



export const projectsData = [
  {
    title: "CampusCompass",
    slug: "campuscompass",
    status: "Live",
    timeline: "Apr 2025 – Present",
    stack: ["MERN", "Flask", "Redux Toolkit", "Docker", "GitHub Actions"],
    description: [
      "Built a full-stack platform addressing fragmented campus developer tooling, including DSA tracking, resumes, learning resources, and interview preparation.",
      "Integrated GitHub and LeetCode APIs to enable real-time profile tracking, activity streaks, and detailed problem-solving analytics.",
      "Designed a role-aware resume analysis system that parses PDFs and generates job-specific insights instead of generic feedback.",
      "Implemented a personalized learning feed using the YouTube Data API with dynamic, ad-free content recommendations.",
      "Architected the application using modular services and extensible APIs, allowing continuous feature additions while remaining production-stable.",
      "Dockerized backend services and automated build and deployment pipelines using GitHub Actions CI/CD."
    ],
    image: campusCompass,
    tags: ["React", "Node.js", "Express", "MongoDB", "Flask", "Redux Toolkit", "Docker", "GitHub Actions"],
    liveUrl: "https://campus-compass-frontend-sepia.vercel.app/", // replace if different
    githubUrl: "https://campus-compass-frontend-sepia.vercel.app/"
  },

  {
    title: "SkillSync",
    slug: "skillsync",
    status: "Live",
    timeline: "Jan 2025 – Feb 2025",
    stack: ["MERN", "Redux Toolkit"],
    description: [
      "Built a full-stack job portal with separate user and admin modules, implementing REST APIs, database operations, and role-based authentication.",
      "Developed responsive frontend dashboards using React and Redux Toolkit with clean UX patterns and predictable state management.",
      "Integrated backend services with frontend workflows to ensure secure, consistent, and reliable data handling across the platform."
    ],
    image: skillSync,
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://skill-sync-beta-six.vercel.app/", // replace if different
    githubUrl: "https://github.com/prathmesh-sargar/SkillSync"
  }
];

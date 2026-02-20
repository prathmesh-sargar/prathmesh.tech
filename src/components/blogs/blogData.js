import codex from "../../assets/blogs/codex.png";
import fees from "../../assets/blogs/fees.png";
import network from "../../assets/blogs/network.png";
import webtoapp from "../../assets/blogs/webtoapp.jpg";

export const blogs = [
  {
    id: 1,
    slug: "from-student-to-judge-codex-experience",
    title:
      "From Student to Judge & Mentor — A Journey I Never Expected",
    description:
      "Reflecting on hosting and judging CODEX at ADCET, and the lessons learned from teaching, mentoring, and evaluating real-world problem solving.",
    image: codex,
    featured: true,
    content: `
A few months ago, I was participating in a technical event at the same college. This time, I was invited to host and judge it.

CODEX at ADCET Ashta turned out to be one of the most meaningful experiences of my academic journey — not because of the title, but because of the conversations, the learning, and the responsibility.

I was invited by the Mechanical Department of ADCET to design and conduct two major rounds: a Debugging Round and a final AI Build Challenge.

During the debugging round, I interacted closely with students — clarifying doubts, manually evaluating logic, and observing how they approached problems. It reinforced something fundamental: strong fundamentals and structured thinking always outperform shortcuts.

The final round evolved into a mini hackathon. Participants were given a problem statement and just two hours to build an AI-powered quiz application prototype. Watching students think under pressure, experiment with AI tools, and defend their architectural decisions was inspiring.

The most rewarding part wasn’t judging — it was asking questions, understanding their thought process, and turning evaluation into technical discussion.

Being felicitated by the Head of Department was a surreal moment. But more importantly, this experience reminded me that learning never stops — even when you are the one evaluating others.

From student participant to judge and mentor, this journey felt unreal — and deeply meaningful.
    `,
  },

  {
    id: 2,
    slug: "paying-my-own-college-fees",
    title:
      "I Paid My Own College Fees — And It Changed My Perspective",
    description:
      "A reflection on financial independence, ownership, and growth as a student balancing competitions, internships, and freelance work.",
    image: fees,
    content: `
Recently, I paid my third-year college fees entirely on my own — using money I earned through internships, hackathons, freelance projects, and disciplined savings.

It was not just a financial milestone. It was a personal one.

Every contribution came from:
- Winning technical competitions and hackathons
- Completing internships with dedication
- Taking freelance opportunities seriously
- Saving consistently from each opportunity

This experience taught me something no classroom lecture could:

Growth accelerates when you take ownership — not just of your learning, but of your responsibilities.

Financial independence, even at a small scale, builds confidence. It changes how you view effort, time, and opportunities. It shifts mindset from “student” to “builder of your own path.”

This wasn’t about proving anything publicly. It was about proving something to myself.

And that changes everything.
    `,
  },

  {
    id: 3,
    slug: "understanding-the-network-tab",
    title:
      "Understanding the Network Tab: Debugging Like a Real Engineer",
    description:
      "Why mastering the browser Network Tab is essential for full-stack developers and how it transforms the way you debug applications.",
    image: network,
    content: `
While working on a MERN project, I realized something important: many developers debug blindly.

They copy error logs.
They restart servers.
They guess.

But if you don’t understand the Network Tab, you don’t fully understand how your application works.

The Network Tab shows the complete request–response lifecycle:
- How GET, POST, PUT, and DELETE requests are sent
- What payload your frontend actually transmits
- Response structure from the backend
- Headers and authentication flow
- Timing breakdown including DNS, SSL, and TTFB
- Cookies and session handling

Using a real login API example, I broke down how to debug properly — filtering requests, inspecting payloads, analyzing response previews, and identifying failures systematically.

Mastering this tool changes you from a guess-based debugger into a structured problem solver.

Understanding the request–response cycle is foundational for every frontend, backend, or full-stack developer.
    `,
  },

  {
    id: 4,
    slug: "converting-react-website-to-mobile-app",
    title:
      "From Website to Mobile App: Converting a React Vite Project into an Android App",
    description:
      "A practical guide to transforming a React Vite website into an Android APK using Capacitor and Android Studio.",
    image: webtoapp,
    content: `
Many developers can build strong web applications but feel uncertain when asked to convert them into mobile apps.

The question often is: how do you take a React Vite project and turn it into a mobile-ready Android application?

In this project, I documented a step-by-step approach using Capacitor and Android Studio to convert a web app into an installable APK.

The process includes:
- Configuring Capacitor inside a React Vite project
- Generating Android platform files
- Building and syncing assets
- Opening the project in Android Studio
- Creating and installing the APK on a real device

In a mobile-first ecosystem, extending web applications to Android increases reach and usability.

This guide is designed for developers who want practical clarity — not abstract theory.

Bridging the gap between web and mobile development expands both technical versatility and real-world impact.
    `,
  },
];
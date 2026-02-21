import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import BlogsPage from "./pages/BlogsPage";
// import ContactPage from "./pages/ContactPage";
import { ToastContainer } from "react-toastify";
import { DotBackground } from "./ui/lightswind/grid-dot-backgrounds.tsx";
import { Tooltip } from "react-tooltip";
import Contact from "./components/contact/Contact.jsx";
// import Skills from "./components/skills/Skills.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import AchievementsPage from "./pages/AchievementsPage.jsx";
// import Experience from "./components/experience/Experience.jsx";
import BlogDetails from "./components/Blogs/BlogDetail.jsx"

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} bg-gray-50 dark:bg-gray-950`}>
      <DotBackground
        dotSize={1}
        dotColor="#d4d4d4"
        darkDotColor="#404040"
        spacing={30}
        showFade
        fadeIntensity={80}
        className="h-full"
      >
        <div className="mx-2 max-w-[850px] bg-white dark:bg-black">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/achievement" element={<AchievementsPage />} /> 
            <Route path="/blogs/:slug" element={<BlogDetails />} />
          </Routes>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
        <Tooltip
          id="social-tooltip"
          className="!px-2.5 !py-1 !text-sm !rounded-lg !dark:bg-white !dark:text-black"
        />
      </DotBackground>
    </div>
  );
}

export default App;

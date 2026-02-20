import Hero from "../components/hero/Hero";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
// import Blogs from "../components/blogs/Blogs";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer";
import HomeAchievements from "../components/achievements/HomeAchievements";
import TeachingSection from "../components/TeachingSection";
import Blog from "../components/Blogs/Blogs"

const Home = () => {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <HomeAchievements/>
      <Blog/>
      <TeachingSection/>
      
      {/* <section id="blogs"><Blogs /></section> */}
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
};

export default Home;

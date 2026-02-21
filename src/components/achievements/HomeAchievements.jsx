import { achievementsData } from "../../data/achievementsData";
import { useNavigate } from "react-router-dom";
import collageLight from "../../assets/achievement/collage-white.png";
import collageDark from "../../assets/achievement/collage-black.png";

const HomeAchievements = () => {
  const images = achievementsData.map((a) => a.photo).filter(Boolean);

  if (images.length === 0) return null;
  const navigate = useNavigate();

  const [featured, ...others] = images;

  return (
    <section className="pt-24 pb-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10 ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Achievements
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          National-level wins,{" "}
          <span className="font-bold text-xl ">hackathons</span>,{" "}
          <span className="font-bold text-xl">Startup</span> pitches, and{" "}
          <span className="font-bold text-xl ">
            <span className="font-bold text-xl ">technical events.</span>
          </span>
        </p>
      </div>

      <section className="">
        <div className=" dark:border-neutral-800 overflow-hidden">
          {/* Light Mode Image */}
          <img
            src={collageLight}
            alt="Achievement moments collage"
            className="w-full object-contain cursor-pointer block dark:hidden"
            onClick={() => navigate(`/achievement`)}
          />

          {/* Dark Mode Image */}
          <img
            src={collageDark}
            alt="Achievement moments collage"
            className="w-full object-contain cursor-pointer hidden dark:block"
            onClick={() => navigate(`/achievement`)}
          />
        </div>
      </section>
    </section>
  );
};

export default HomeAchievements;

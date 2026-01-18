import { useState } from "react";
import {
  achievementStats,
  achievementsData,
} from "../data/achievementsData";
import AchievementStats from "../components/achievements/AchievementStats";
import AchievementCard from "../components/achievements/AchievementCard";
import CertificateModal from "../components/achievements/PhotoModal";

const AchievementsPage = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="pt-24 pb-20 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Achievements
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          National-level wins across hackathons, project competitions,
          research presentations, and startup pitch events.
        </p>
      </div>

      {/* Stats */}
      <AchievementStats stats={achievementStats} />

      {/* Timeline */}
      <div className="relative border-l border-gray-200 dark:border-neutral-800 space-y-10">
        {achievementsData.map((item) => (
          <AchievementCard
            key={item.id}
            item={item}
            onView={setActiveCert}
          />
        ))}
      </div>

      {/* Modal */}
      <CertificateModal
        image={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
};

export default AchievementsPage;

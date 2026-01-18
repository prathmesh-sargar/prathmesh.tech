const AchievementStats = ({ stats }) => {
  return (
<>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 text-center shadow-sm"
        >
          <p className="text-3xl font-[850] text-gray-900 dark:text-white">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

</>
  );
};

export default AchievementStats;

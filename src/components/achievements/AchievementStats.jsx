const AchievementStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="relative rounded-2xl p-[1.5px] group"
        >
          {/* Animated Border */}
          <div
            className="
              absolute inset-0 rounded-2xl
              bg-[conic-gradient(from_0deg,transparent,rgba(0,0,0,0.4),transparent)]
              dark:bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.4),transparent)]
              animate-spin-slow
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
          />

          {/* Card Content */}
          <div
            className="
              relative rounded-2xl
              bg-white dark:bg-neutral-900
              border border-gray-200 dark:border-neutral-800
              p-6 text-center
              shadow-sm
            "
          >
            <p className="text-3xl font-[850] text-gray-900 dark:text-white">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementStats;

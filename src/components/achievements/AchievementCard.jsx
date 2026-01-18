const AchievementCard = ({ item }) => {
  return (
    <div className="relative pl-10">
      {/* Timeline dot */}
      <span className="absolute left-0 top-6 w-3 h-3 rounded-full bg-black dark:bg-white ring-4 ring-white dark:ring-neutral-900" />

      <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* TEXT CONTENT */}
          <div className="flex-1">
            {/* Date */}
            <p className="text-xs font-medium text-gray-500 mb-1">
              {item.date}
            </p>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
              {item.title}
            </h3>

            {/* Event */}
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {item.event}
            </p>

            {/* Description */}
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>

            {/* Meta badges */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-gray-100 font-bold">
                {item.position}
              </span>
              {/* <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 font-medium">
                {item.prize}
              </span> */}
              <span className="px-2.5 py-1 rounded-md bg-gray-100  font-bold">
                {item.level}
              </span>
            </div>
          </div>

          {/* IMAGE */}
          {item.photo && (
            <div className="w-full md:w-48 flex-shrink-0">
              <div className="w-full h-40 md:h-36 rounded-xl border border-gray-200 dark:border-neutral-800   flex items-center justify-center overflow-hidden">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain"
                />
      
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;

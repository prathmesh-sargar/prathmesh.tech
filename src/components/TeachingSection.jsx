const TeachingSection = () => {
  return (
    <section className="pt-24 pb-20 px-4 max-w-6xl ">
      {/* Header */}
      <div className="mb-10 ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Teaching & Technical Content
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 max-w-xl ">
          Explaining real-world engineering concepts through practical,
          developer-focused videos.
        </p>
      </div>

      {/* Videos Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* BIG VIDEO */}
        <div className="md:col-span-2">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/zrusew5NANM"
              title="Multi-Stage Dockerfile Explained"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* SIDE VIDEOS */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/s29ry0glvkg"
              title="Dockerize Any Application"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/6xEyObatu7I"
              title="How We Won 1st Prize in Capstone Project"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;

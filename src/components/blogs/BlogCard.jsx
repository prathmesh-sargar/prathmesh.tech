import { Link } from "react-router-dom";

export default function BlogCard({
  title,
  description,
  image,
  slug,
  featured = false,
}) {
  return (
    <Link
      to={`/blogs/${slug}`}
      className={`group block transition duration-300 ${
        featured
          ? "rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl"
          : "flex gap-4 items-start"
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`object-cover transition-transform duration-300 group-hover:scale-[1.03]
        ${featured ? "w-full h-[360px]" : "w-28 h-24 rounded-xl flex-shrink-0"}`}
      />

      <div className={featured ? "p-6" : ""}>
        <h3
          className={`font-semibold tracking-tight text-black dark:text-white ${
            featured ? "text-2xl" : "text-base"
          }`}
        >
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-200 mt-3 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
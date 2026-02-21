import BlogCard from "./BlogCard";
import { blogs } from "./blogData";

export default function Blogs() {
  const featured = blogs.find((b) => b.featured);
  const others = blogs.filter((b) => !b.featured);

  return (
    <section className="py-28 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black dark:text-white">
            Engineering, Growth & Real-World Lessons
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Practical insights from building systems, shipping products,
            teaching developers, and learning through real execution —
            not theory.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">

          {/* Featured Article */}
          <div className="lg:col-span-2">
            {featured && (
              <BlogCard {...featured} featured />
            )}
          </div>

          {/* Other Articles */}
          <div className="space-y-10">
            {others.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
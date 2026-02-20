import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "./blogData";
import { ArrowLeft } from "lucide-react";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return null;

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition mb-10 cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to Blogs
        </button>

        {/* Hero */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[340px] md:h-[460px] object-cover rounded-2xl mb-10 shadow-md"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-black dark:text-white">
          {blog.title}
        </h1>

        {/* Content */}
        <div className="mt-10 text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-[17px] whitespace-pre-line">
          {blog.content}
        </div>

      </div>
    </section>
  );
}
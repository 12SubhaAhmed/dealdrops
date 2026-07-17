"use client";
import BlogGrid from "./BlogGrid";

interface RelatedBlogsProps {
  blogs: any[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

      {/* Heading */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-blue-600 font-bold uppercase tracking-[0.25em] text-xs">
            You May Also Like
          </p>
          <h2 className="text-4xl font-black text-gray-900 mt-2">
            Related Reviews
          </h2>
        </div>
      </div>
      <BlogGrid blogs={blogs.slice(0,3)} />
    </section>
  );
}
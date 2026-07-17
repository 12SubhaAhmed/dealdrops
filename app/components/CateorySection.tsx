"use client";
import { useMemo, useState } from "react";
import CategoryCard from "./CategoryCard";

interface CategorySectionProps {
  blogs: any[];
}

export default function CategorySection({
  blogs,
}: CategorySectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Dynamic Categories
  const filters = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          blogs
            .map((blog) => blog.category)
            .filter(Boolean)
        )
      ),
    ],
    [blogs]
  );

  // Filter Blogs
  const filteredBlogs =
    activeFilter === "All"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category?.toLowerCase() ===
            activeFilter.toLowerCase()
        );

  return (
    <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">

      {/* Heading */}

      <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-5">

        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Browse By Category
          </h2>

          <p className="text-gray-500 mt-2">
            Explore reviews by your favorite category.
          </p>
        </div>

        {/* Category Buttons */}

        <div className="flex flex-wrap justify-center gap-3">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

      </div>

      {/* Blog Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredBlogs.map((blog) => (
          <CategoryCard
            key={blog._id}
            article={{
              title: blog.title,
              categories: [blog.category],
              image: blog.mainImage,
              date: new Date(blog._createdAt).toLocaleDateString(
                "en-US",
                {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              ),
              href: `/blogs/${blog.slug.current}`,
            }}
          />
        ))}

      </div>

      {filteredBlogs.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No blogs found.
        </div>
      )}
    </section>
  );
}
"use client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface BlogSidebarProps {
  latestBlogs: any[];
}

const categories = [
  "Fashion & Beauty",
  "Health & Fitness",
  "Lifestyle",
  "Travel & Booking",
  "Food",
  "Tech & Gadgets",
];

export default function BlogSidebar({
  latestBlogs,
}: BlogSidebarProps) {
  return (
    <aside className="space-y-8 sticky top-28">

      {/* Popular Reviews */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

        <h3 className="text-2xl font-black text-gray-900 mb-6">
          Popular Reviews
        </h3>

        <div className="space-y-5">

          {latestBlogs.slice(0,4).map((blog) => (

            <Link
              key={blog._id}
              href={`/blogs/${blog.slug.current}`}
              className="flex gap-4 group"
            >
              <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0">

                <Image
                  src={urlFor(blog.mainImage).url()}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div>

                <p className="text-xs uppercase font-bold text-blue-600 mb-1">
                  {blog.category}
                </p>

                <h4 className="font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition line-clamp-2">
                  {blog.title}
                </h4>

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* Categories */}

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

        <h3 className="text-2xl font-black text-gray-900 mb-6">
          Categories
        </h3>

        <div className="space-y-3">

          {categories.map((cat) => (

            <Link
              key={cat}
              href={`/category/${cat.toLowerCase().replace(/ & /g,"-").replace(/ /g,"-")}`}
              className="flex justify-between text-gray-700 hover:text-blue-600 font-medium transition"
            >
              <span>{cat}</span>

              <span>→</span>

            </Link>

          ))}

        </div>

      </div>

      {/* Latest Reviews */}

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

        <h3 className="text-2xl font-black text-gray-900 mb-6">
          Latest Reviews
        </h3>

        <div className="space-y-4">

          {latestBlogs.slice(4,7).map((blog) => (

            <Link
              key={blog._id}
              href={`/blogs/${blog.slug.current}`}
              className="block group"
            >

              <p className="text-xs uppercase text-blue-600 font-bold">
                {blog.category}
              </p>

              <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition">
                {blog.title}
              </h4>

            </Link>

          ))}

        </div>

      </div>

    </aside>
  );
}
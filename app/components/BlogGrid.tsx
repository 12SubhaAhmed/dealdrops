"use client";
import BlogCard from "./BlogCard";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

export default function BlogGrid({ blogs }: { blogs: any[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {blogs.map((blog) => {
        const mappedArticle = {
          id: blog._id,
          title: blog.title,
          description:
            blog.description ||
            "Read our full in-depth review to see if this product stands up to our rigorous tests.",
          category: blog.category || "General",
          image: blog.mainImage
            ? urlFor(blog.mainImage).url()
            : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
          href: `/blogs/${blog.slug?.current}`,
          rating: blog.rating || 5,
          price: blog.price || "Free",
        };

        return (
          <motion.div
            key={blog._id}
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
            }}
          >
            <BlogCard article={mappedArticle} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
"use client";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";

interface BlogContentProps {
  article: any;
}

export default function BlogContent({ article }: BlogContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white text-gray-800 rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12"
    >
      <div
        className="
        prose
        prose-lg
        lg:prose-lg
        max-w-none

        prose-headings:text-gray-900
        prose-headings:font-black
        prose-headings:tracking-tight

        prose-h2:text-3xl
        prose-h2:mt-14
        prose-h2:mb-6
        prose-h2:text-black

        prose-h3:text-2xl
        prose-h3:mt-10
        prose-h3:mb-5
        prose-h3:text-black

        prose-p:text-gray-900
        prose-p:leading-9
        prose-p:mb-6
        

        prose-a:text-blue-600
        prose-a:no-underline
        hover:prose-a:underline

        prose-strong:text-black

        prose-ul:my-6
        prose-li:my-2

        prose-img:rounded-2xl
        prose-img:shadow-lg

        prose-blockquote:border-l-4
        prose-blockquote:border-blue-600
        prose-blockquote:bg-blue-50
        prose-blockquote:rounded-r-xl
        prose-blockquote:px-6
        prose-blockquote:py-4
        prose-blockquote:not-italic

        prose-table:border
        prose-table:border-gray-200

        prose-th:bg-gray-100
        prose-th:p-3

        prose-td:p-3
        "
      >
        {article.content ? (
          <PortableText value={article.content} />
        ) : (
          <p>No content available.</p>
        )}
      </div>
    </motion.article>
  );
}
"use client";

import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface BlogContentProps {
  article: any;
}

const components = {
  types: {
    image: ({ value }: any) => {
      // Agar image asset nahi hai to kuch render mat karo
      if (!value?.asset) return null;

      return (
        <div className="my-10">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog Image"}
            width={900}
            height={600}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      );
    },
  },
};

export default function BlogContent({ article }: BlogContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-gray-100 bg-white p-8 text-gray-800 shadow-sm lg:p-12"
    >
      <div
        className="
          prose prose-lg lg:prose-lg max-w-none

          prose-headings:font-black
          prose-headings:tracking-tight
          prose-headings:text-gray-900

          prose-h2:mt-14
          prose-h2:mb-6
          prose-h2:text-3xl

          prose-h3:mt-10
          prose-h3:mb-5
          prose-h3:text-2xl

          prose-p:mb-6
          prose-p:leading-9
          prose-p:text-gray-900

          prose-a:text-blue-600
          prose-a:no-underline
          hover:prose-a:underline

          prose-strong:text-black

          prose-ul:my-6
          prose-li:my-2

          prose-blockquote:rounded-r-xl
          prose-blockquote:border-l-4
          prose-blockquote:border-blue-600
          prose-blockquote:bg-blue-50
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
          <PortableText
            value={article.content}
            components={components}
          />
        ) : (
          <p>No content available.</p>
        )}
      </div>
    </motion.article>
  );
}
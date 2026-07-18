"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiCalendar, FiClock, FiUser } from "react-icons/fi";
import { urlFor } from "@/sanity/lib/image";

interface BlogHeroProps {
  article: any;
}

export default function BlogHero({ article }: BlogHeroProps) {
  const formattedDate = new Date(article._createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-10 pb-12">

      {/* Category */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          {article.category || "General"}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-6 text-3xl md:text-5xl lg:text-4xl font-black leading-tight text-gray-900 max-w-5xl"
      >
        {article.title}
      </motion.h1>

      {/* Meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap items-center gap-5 mt-8 text-gray-500 text-sm"
      >
        <div className="flex items-center gap-2">
          <FiUser />
          <span>Editorial Team</span>
        </div>

        <div className="flex items-center gap-2">
          <FiCalendar />
          <span>{formattedDate}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiClock />
          <span>6 min read</span>
        </div>
      </motion.div>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="flex items-center gap-3 mt-6"
      >
        <div className="text-yellow-400 text-xl tracking-wide">
          ★★★★★
        </div>

        <span className="font-bold text-gray-800">
          {article.rating || "4.8"} / 5
        </span>
      </motion.div>

      {/* Featured Image */}
      {article.mainImage && (
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 overflow-hidden rounded-[30px] shadow-2xl"
        >
          <Image
            src={urlFor(article.mainImage).url()}
            alt={article.title}
            width={1400}
            height={800}
            priority
            className="w-full h-70 md:h-112.5 lg:h-140 object-cover transition duration-700 hover:scale-105"
          /> 
        </motion.div>
        
      )}
    </section>
  );
}
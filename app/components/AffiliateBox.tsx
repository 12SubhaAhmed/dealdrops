"use client";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

interface AffiliateBoxProps {
  article: any;
}

export default function AffiliateBox({ article }: AffiliateBoxProps) {
  if (!article?.affiliateUrl) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <div className="rounded-4xl overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-slate-900 p-10 lg:p-14 text-center shadow-2xl">

        <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full">
          Recommended Product
        </span>

        <h2 className="mt-6 text-3xl lg:text-5xl font-black text-white">
          Ready to Buy?
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-blue-100 text-lg leading-8">
          If this product fits your needs, check today's latest price from our
          trusted affiliate partner.
        </p>

        <div className="flex justify-center items-center gap-2 mt-8">

          <div className="flex text-yellow-300 text-xl">
            {[1,2,3,4,5].map((i)=>(
              <FiStar key={i} className="fill-yellow-300" />
            ))}
          </div>

          <span className="text-white font-bold">
            {article.rating || "4.8"} / 5
          </span>

        </div>

        <a
          href={article.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-3 mt-10 bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
        >
          {article.buttonText || "Shop Now"}

          <FiArrowUpRight size={20} />
        </a>

      </div>
    </motion.section>
  );
}
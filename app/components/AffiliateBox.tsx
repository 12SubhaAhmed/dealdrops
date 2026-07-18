"use client";

import { FiArrowUpRight } from "react-icons/fi";

interface AffiliateBoxProps {
  article: any;
}

export default function AffiliateBox({ article }: AffiliateBoxProps) {
  if (!article?.affiliateUrl) return null;

  return (
  <div className="flex justify-center my-10">
    <a
      href={article.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center gap-3 bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300"
    >
      {article.buttonText || "Shop Now"}
      <FiArrowUpRight size={20} />
    </a>
  </div>
);
}
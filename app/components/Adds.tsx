"use client";

import { useState, useEffect } from "react";
import { FiArrowRight, FiPercent, FiGift, FiZap } from "react-icons/fi";
import Link from "next/link";


const adsData = [
  {
    id: 1,
    badge: "Exclusive Deal",
    icon: <FiPercent className="w-5 h-5 text-amber-400" />,
    title: "Upgrade Your Workspace Setup",
    description: "Get up to 40% off on premium ergonomic gaming chairs and productivity setups. Limited time partner offers.",
    btnText: "Grab Deal Now",
    href: "#",
    bgGradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    badge: "Flash Sale",
    icon: <FiZap className="w-5 h-5 text-amber-400" />,
    title: "The Ultimate Tech Giveaways",
    description: "Read our latest premium laptop guides and stand a chance to win mystery setup accessories this month.",
    btnText: "Explore Guides",
    href: "#",
    bgGradient: "from-teal-600/20 via-emerald-600/10 to-transparent",
    borderColor: "border-teal-500/30",
  },
  {
    id: 3,
    badge: "Partner Offer",
    icon: <FiGift className="w-5 h-5 text-amber-400" />,
    title: "Best Hosting Deals for Developers",
    description: "Supercharge your Next.js deployment. Claim an extra 20% discount using our verified developer link inside.",
    btnText: "Claim Discount",
    href: "#",
    bgGradient: "from-purple-600/20 via-fuchsia-600/10 to-transparent",
    borderColor: "border-purple-500/30",
  },
];

export default function AdSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-play timer logic: Changes slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % adsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="relative w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl min-h-55 flex items-center">
        
        {/* Dynamic Background Slider Layer */}
        {adsData.map((ad, index) => (
          <div
            key={ad.id}
            className={`absolute inset-0 bg-linear-to-r ${ad.bgGradient} transition-all duration-1000 ease-in-out ${
              index === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
          />
        ))}

        {/* Content Box*/}
        <div className="relative z-10 w-full p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Left Text Detail Content */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md border border-slate-800 text-slate-200 text-[10px] tracking-widest font-extrabold uppercase px-3 py-1 rounded-md">
              {adsData[currentIdx].icon}
              {adsData[currentIdx].badge}
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight transition-all duration-300">
              {adsData[currentIdx].title}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
              {adsData[currentIdx].description}
            </p>
          </div>

          {/* Right Action Button Area */}
          <div className="shrink-0">
            <Link
              href={adsData[currentIdx].href}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              {adsData[currentIdx].btnText}
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Slider Navigation Dots Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {adsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIdx ? "w-6 bg-blue-500" : "w-1.5 bg-slate-700 hover:bg-slate-600"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { urlFor } from "@/sanity/lib/image";


interface HeroProps {
  banners: any[];
}

export default function Hero({banners}: HeroProps) {
  return (
    <section className="pt-28 pb-12 bg-gray-50">

      <div className="max-w-8xl mx-auto px-6">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          className="rounded-3xl shadow-xl"
        >

          {banners.map((banner) => (
  <SwiperSlide key={banner._id}>
    <div className="relative h-125 w-full rounded-3xl overflow-hidden">

      <Image
        src={urlFor(banner.image).url()}
        alt={banner.title}
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-14">

      
        {banner.affiliateUrl && (
          <Link
            href={banner.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >
            <button className="bg-blue-400 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition">
              {banner.buttonText || "Shop Now"}
            </button>
          </Link>
        )}
      </div>
    </div>
  </SwiperSlide>
))}
        </Swiper>
      </div>
    </section>
  );
}
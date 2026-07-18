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
  <Link
    href={banner.affiliateUrl || "#"}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className="block"
  >
    <div className="relative h-125 w-full rounded-3xl overflow-hidden cursor-pointer">

      <Image
        src={urlFor(banner.image).url()}
        alt={banner.title}
        fill
        className="object-cover transition duration-500 hover:scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

    </div>
  </Link>
</SwiperSlide>))}
        </Swiper>
      </div>
    </section>
  );
}
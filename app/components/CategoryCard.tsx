import Link from "next/link";
import Image from "next/image";
import { FiCalendar } from "react-icons/fi";
import { urlFor } from "@/sanity/lib/image";

export interface CategoryArticle {
  title: string;
  categories: string[];
  image: any;
  date: string;
  href: string;
}

// Dynamic colors for category tags
const tagColors: { [key: string]: string } = {
  "FASHION & BEAUTY": "bg-blue-600",
  "HEALTH & FITNESS": "bg-lime-600",
  "LIFESTYLE": "bg-blue-500",
  "TRAVEL & BOOKING": "bg-orange-500",
  "FOOD": "bg-orange-500",
  "TECH & GADGETS": "bg-sky-600",
  "HOME & GARDEN": "bg-amber-500",
};

export default function CategoryCard({
  article,
}: {
  article: CategoryArticle;
}) {
  const { title, categories, image, date, href } = article;

  return (
    <Link href={href}>
      <div className="group relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">

        {/* Background Image */}
        <Image
          src={urlFor(image).url()}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">

          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, index) => (
              <span
                key={index}
                className={`${
                  tagColors[cat.toUpperCase()] || "bg-teal-600"
                } rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-white`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center">

            <h3 className="line-clamp-3 text-2xl font-bold leading-snug text-white transition duration-300 group-hover:text-blue-300">
              {title}
            </h3>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-200">
              <FiCalendar className="text-blue-400" />
              <span>{date}</span>
            </div>

          </div>

        </div>
      </div>
    </Link>
  );
}
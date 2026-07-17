import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

interface Article {
  title: string;
  description: string;
  category: string;
  image: string;
  badge?: string;
  rating: number;
  href: string;
}

export default function BlogCard({ article }: { article: Article }) {
  const { title, description, category, image, badge, rating, href } = article;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">

        <Image
          src={image}
          alt={title}
          height={300}
          width={300}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-600 backdrop-blur">
          {category}
        </span>

        {badge && (
          <span className="absolute right-4 top-4 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2 text-sm">
          <span className="text-amber-400">
            {"★★★★★".slice(0, Math.round(rating))}
          </span>

          <span className="font-semibold text-gray-700">
            {rating}
          </span>
        </div>

        {/* Title */}
        <Link href={href}>
          <h3 className="text-2xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-teal-600 line-clamp-2">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-500">
          {description}
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-gray-100" />

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">

          <Link
            href={href}
            className="flex items-center gap-2 font-semibold text-teal-600 transition-all duration-300 group-hover:gap-3"
          >
            Read Article

            <FiArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
          </Link>

        </div>

      </div>
    </div>
  );
}
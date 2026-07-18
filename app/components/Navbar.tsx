"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const categoryLinks = [
  { name: "FASHION & BEAUTY", href: "/category/fashion-beauty" },
  { name: "HEALTH & FITNESS", href: "/category/health-fitness" },
  { name: "LIFESTYLE", href: "/category/lifestyle" },
  { name: "TRAVEL & BOOKING", href: "/category/travel-booking" },
  { name: "FOOD", href: "/category/food" },
  { name: "TECH & GADGETS", href: "/category/tech-gadgets" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-3"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? "mx-6 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-2xl"
            : "bg-white border-b border-gray-100 shadow-sm rounded-2xl"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6 lg:px-8">

          {/* Logo */}

          <Link href="/">
            <Image
              src="/images/logo-new.png"
              alt="Logo"
              width={150}
              height={55}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-7">

            {categoryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[13px] font-bold tracking-wide transition-all duration-300 group ${
                  scrolled
                    ? "text-black hover:text-blue-200"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-2 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-white" : "bg-blue-600"
                  }`}
                />
              </Link>
            ))}

          </nav>

          {/* Right Icons */}

          <div className="hidden lg:flex items-center gap-5">

            <button
              className={`transition ${
                scrolled
                  ? "text-black hover:text-blue-200"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <FiSearch size={20} />
            </button>

          </div>

          {/* Mobile Menu */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden text-3xl transition ${
              scrolled ? "text-black" : "text-gray-800"
            }`}
          >
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>
                {/* Mobile Drawer */}

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div
            className={`mx-4 mb-4 rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-white/20 backdrop-blur-xl border border-white/20"
                : "bg-white shadow-lg border border-gray-100"
            }`}
          >
            <div className="flex flex-col py-4">

              {categoryLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-6 py-4 text-sm font-semibold transition ${
                    scrolled
                      ? "text-gray-700 hover:bg-white/10"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div
                className={`mx-6 mt-4 flex items-center justify-center rounded-xl py-3 transition ${
                  scrolled
                    ? "bg-white/10"
                    : "bg-gray-100"
                }`}
              >
                <button
                  className={`flex items-center gap-2 ${
                    scrolled
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  <FiSearch size={18} />
                  <span className="font-medium">
                    Search
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
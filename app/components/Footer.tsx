'use client'
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-12 px-6 lg:px-12">
      <div className="max-w-8xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
        
        {/* Top Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
          
          {/* Column 1: Brand Typography Name (Replacing Logo) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
              src={"/images/deal_logo.jpeg"}
              alt="logo"
              width={300}
              height={300}
              />
            </Link>
          </div>

          {/* Column 2: Useful Links */}
          <div className="md:col-span-3">
            <h3 className="text-sky-500 font-bold text-base mb-4 tracking-wide">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-lg font-medium text-gray-600">
              <li>
                <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-teal-600 transition-colors">Blogs</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-600 transition-colors">Contact Us</Link>
              </li>
            </ul>

            {/* Social Icons matching image styling */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61568051420943" className="w-9 h-9 bg-[#0b5394] text-white rounded-md flex items-center justify-center shadow-md hover:opacity-90 transition">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.instagram.com/dealdrops34/" className="w-9 h-9 bg-[#0b5394] text-white rounded-md flex items-center justify-center shadow-md hover:opacity-90 transition">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 3: Newsletters Section */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <h3 className="text-sky-500 font-bold text-lg tracking-wide">
              Newsletters
            </h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              We are a trusted destination for premium shopping, offering genuine savings on quality products. Our goal is to help you enjoy top brands at better prices while ensuring a smooth and reliable shopping experience every time you visit our platform.
            </p>

            {/* Newsletter Input Form */}
            <form onSubmit={(e) => e.preventDefault()} className="mt-2 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:border-teal-500 text-gray-800 transition"
                required
              />
              
              <label className="flex items-start gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  required
                />
                <span className="text-[15px] text-gray-500 font-medium leading-tight">
                  I consent to receiving marketing emails from (DealDrops)
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-[#d68210] hover:bg-[#bd720b] text-white font-bold text-lg py-2.5 px-6 rounded-lg shadow-md transition-all active:scale-[0.99]"
              >
                Send
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Metadata Divider & Notes */}
        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-500 font-medium flex flex-col gap-2">
          <p>
            Copyright © 2026 <span className="text-sky-500 font-bold">DealDrops</span> | All Rights Reserved.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto ">
            <span className="font-bold text-gray-600">Disclosure:</span> We may receive a commission if our readers make a purchase using our links.
          </p>
        </div>

      </div>
    </footer>
  );
}
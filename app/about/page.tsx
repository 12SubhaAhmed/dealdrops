"use client";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Salad, Dumbbell, Shirt } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-white mt-40">
      <div>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              ABOUT US
            </span>

            <h1 className="mt-6 text-5xl font-bold text-gray-900 leading-tight">
              Inspiring Your
              <span className="text-blue-700"> Everyday Lifestyle</span>
            </h1>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              We share inspiring articles about fashion, food,
              health, fitness and modern lifestyle to help you
              live happier, healthier and more confidently.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="flex items-center gap-3">
                <Shirt className="text-orange-500" />
                <span className="text-gray-500">Fashion Tips</span>
              </div>

              <div className="flex items-center gap-3">
                <Salad className="text-orange-500" />
                <span className="text-gray-500">Healthy Food</span>
              </div>

              <div className="flex items-center gap-3">
                <Dumbbell className="text-orange-500" />
                <span className="text-gray-500">Fitness Guides</span>
              </div>

              <div className="flex items-center gap-3">
                <Heart className="text-orange-500" />
                <span className="text-gray-500">Lifestyle Ideas</span>
              </div>

            </div>

            {/* Stats */}

            <div className="flex gap-12 mt-12">

              <div>
                <h2 className="text-3xl font-bold text-blue-500">500+</h2>
                <p className="text-gray-500">Articles</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-500">50K+</h2>
                <p className="text-gray-500">Readers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-500">20+</h2>
                <p className="text-gray-500">Categories</p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/Banner-4.png"
              alt="About"
              width={600}
              height={650}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        
        </div>
      
        </div>
        <Footer/>
        </div>
    </section>
  );
}
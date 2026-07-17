"use client";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-white mt-20">

      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          
         <h1 className="mt-6 text-5xl font-bold text-gray-900">
            We'd Love to Hear From You
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Have a question, feedback, or collaboration idea?
            We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl"
        >
          <form className="space-y-6">

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Write your message here..."
                className="w-full resize-none rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
            >
              Send Message
            </button>

          </form>
        </motion.div>

      </div>
      <Footer/>
    </section>
  );
}
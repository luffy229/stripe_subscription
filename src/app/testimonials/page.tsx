"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

const TestimonialsPage = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.stop();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#532C78] text-white">
      {/* Full-screen Testimonials Intro */}
      <section className="w-full h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
          Testimonials ✨
        </h1>
        <p className="text-lg mt-4 max-w-2xl text-gray-300">
          See what people say about my work. Scroll down to explore!
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </section>

      {/* Testimonial Cards with Animation */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-[#1a1a1a] text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black p-6 rounded-xl shadow-lg border border-transparent hover:border-yellow-400 transition duration-300 hover:scale-105"
          >
            <p className="text-lg italic text-gray-300">
              "An incredible developer! Transformed our vision into reality
              with stunning UI and seamless functionality."
            </p>
            <h3 className="mt-4 font-bold text-yellow-400">– John Doe</h3>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black p-6 rounded-xl shadow-lg border border-transparent hover:border-purple-400 transition duration-300 hover:scale-105"
          >
            <p className="text-lg italic text-gray-300">
              "Superb work! The attention to detail and performance
              optimizations made all the difference."
            </p>
            <h3 className="mt-4 font-bold text-purple-400">– Jane Smith</h3>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-black p-6 rounded-xl shadow-lg border border-transparent hover:border-blue-400 transition duration-300 hover:scale-105"
          >
            <p className="text-lg italic text-gray-300">
              "A pleasure to work with! Brings creativity and problem-solving
              skills to every project."
            </p>
            <h3 className="mt-4 font-bold text-blue-400">– Alex Johnson</h3>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default TestimonialsPage;

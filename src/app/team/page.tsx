"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import Link from "next/link";

const TeamPage = () => {
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
    <div className="relative min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (Natural Size, Minimal Glass Effect) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/profile-img.jpg" 
            alt="Profile Background"
            layout="fill"
            objectFit="cover"
            className="brightness-90" 
          />
          {/* Light Glass Effect */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        </div>

        {/* Name Text (No Glass Effect) */}
        <h1 className="text-white text-6xl md:text-8xl font-bold z-10">
          PRATIK <span className="text-4xl"></span>
        </h1>
      </div>

      {/* Gradient Transition */}
      <div className="relative w-full h-48 bg-gradient-to-b from-black via-[#764BA2] to-[#532C78]"></div>

      {/* About Me Section */}
      <section className="bg-[#532C78] text-white px-6 md:px-12 py-24 text-center">
        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mt-6 leading-relaxed max-w-4xl mx-auto">
          🚀 Passionate **full-stack developer** specializing in **Next.js, TypeScript, Tailwind CSS, and Node.js**.  
          🎯 I love crafting intuitive UI/UX experiences and integrating AI-powered solutions.  
          🛠️ Always exploring **new technologies** and building innovative products.
        </p>
      </section>
    </div>
  );
};

export default TeamPage;

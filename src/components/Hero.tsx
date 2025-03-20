"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth cubic easing
      touchMultiplier: 1.5, // Adjusts touch scrolling speed
      smoothWheel: true,
    gestureOrientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      ref={heroRef}
      style={{ scale, opacity }}
      className="hero-section"
    >
      <section className="container flex flex-col items-center text-center py-24 md:py-32 space-y-8">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          <span className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-transparent bg-clip-text">
            Stripe
          </span>{" "}
           with{" "}
          <span className="bg-gradient-to-r from-[#667EEA] to-[#764BA2] text-transparent bg-clip-text">
            Next.js
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-xl text-muted-foreground md:w-8/12"
        >
          Stripe subscriptions are intimidating, but they don&apos;t have to be. Let&apos;s prove it.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4"
        >
          <Button className="w-full md:w-auto px-6 py-3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/luffy229"
            target="_blank"
            className={`${buttonVariants({ variant: "outline" })} flex items-center justify-center w-full md:w-auto px-6 py-3`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
};

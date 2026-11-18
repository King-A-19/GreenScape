"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import Button from "../ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[85vh] items-center overflow-hidden bg-forest">
      {/* Background Image */}
      <Image
        src="/images/hero-garden.jpg"
        alt="Beautiful professionally landscaped garden"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/55 to-forest/20" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Intro Label */}
          <span className="mb-6 inline-block border-l-2 border-sage pl-4 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            Inspired by Nature. Designed for Living.
          </span>

          {/* Main Heading */}
          <h1 className="mb-7 font-display text-5xl font-medium leading-[1.1] text-white sm:text-6xl lg:text-8xl">
            Transforming Outdoor Spaces Into{" "}
            <span className="italic text-sage">Living Masterpieces.</span>
          </h1>

          {/* Description */}
          <p className="mb-10 max-w-xl font-sans text-base leading-8 text-white/80 sm:text-lg">
            Thoughtful landscaping, inspired garden design and exceptional
            outdoor spaces crafted to bring nature closer to home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#services" variant="secondary">
              Explore Our Services
              <ArrowRight size={17} className="ml-2" />
            </Button>

            <Button
              href="#projects"
              variant="outline"
              className="border-white text-white hover:border-sage"
            >
              Discover Our Work
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white drop-shadow-lg"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
          Scroll to Explore
        </span>
        <ArrowDown
          size={22}
          strokeWidth={2.5}
          className="text-white drop-shadow-lg"
        />
      </motion.a>
    </section>
  );
}

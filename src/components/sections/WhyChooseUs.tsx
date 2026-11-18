// WhyChooseUs

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { reasons } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative isolate overflow-hidden px-6 py-24 lg:px-10 lg:py-32"
    >
      {/* Background photograph */}
      <Image
        src="/images/choose-us.jpg"
        alt="Beautiful landscaped outdoor living space"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/95 via-forest/85 to-forest/65" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">

        {/* Left introduction */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-6 block font-sans text-xs font-semibold uppercase tracking-[0.3em] text-sage">
            The GreenScape Difference
          </span>

          <h2 className="mb-8 max-w-xl font-display text-5xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
            More Than Just
            <span className="italic text-sage"> Landscaping.</span>
          </h2>

          <p className="mb-10 max-w-lg font-sans text-base leading-8 text-white/85">
            Creating a beautiful outdoor space takes more than plants
            and pathways. It takes thoughtful planning, creativity
            and an understanding of how people connect with nature.
          </p>

          <div className="flex items-center gap-3 text-sage">
            <span className="h-px w-12 bg-sage" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em]">
              Beautiful spaces. Naturally.
            </span>
          </div>
        </motion.div>

        {/* Right reasons */}
        <div className="flex flex-col">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group flex gap-6 border-b border-white/25 py-8 first:pt-0 last:border-b-0"
              >
                <span className="pt-1 font-display text-2xl italic text-sage">
                  0{reason.id}
                </span>

                <div className="flex-1">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {reason.title}
                    </h3>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-sage transition-all duration-300 group-hover:border-sage group-hover:bg-sage group-hover:text-forest">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>
                  </div>

                  <p className="max-w-lg font-sans text-sm leading-7 text-white/85">
                    {reason.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={17}
                  className="mt-2 hidden text-sage transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

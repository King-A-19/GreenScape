
"use client";

import { motion } from "motion/react";
import { Leaf, Sprout, ShieldCheck, Heart } from "lucide-react";

const principles = [
  {
    icon: Sprout,
    title: "Thoughtful Design",
    description: "Outdoor spaces designed around your lifestyle and environment.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Craftsmanship",
    description: "Careful attention to detail in every part of the process.",
  },
  {
    icon: Heart,
    title: "Nature First",
    description: "A considered approach that celebrates natural beauty.",
  },
];

export default function Intro() {
  return (
    <section
      id="intro"
      className="bg-cream px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <Leaf size={19} className="text-sage" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-forest">
                Welcome to GreenScape
              </span>
            </div>

            <h2 className="max-w-xl font-display text-4xl font-medium leading-tight text-forest sm:text-5xl lg:text-6xl">
              Where nature meets
              <span className="italic text-sage"> thoughtful design.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-6 font-sans text-lg leading-8 text-charcoal/80">
              At GreenScape, we believe that outdoor spaces should be more
              than just beautiful. They should be places where life happens,
              memories are made and nature can be enjoyed every day.
            </p>

            <p className="font-sans text-base leading-8 text-charcoal/70">
              From considered garden designs to carefully crafted landscapes,
              our approach is centred on creating outdoor environments that
              feel natural, welcoming and timeless.
            </p>
          </motion.div>
        </div>

        <div className="my-16 h-px bg-forest/15 lg:my-20" />

        <div className="grid gap-10 md:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex gap-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/30 text-forest">
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                <div>
                  <h3 className="mb-2 font-display text-2xl font-semibold text-forest">
                    {principle.title}
                  </h3>

                  <p className="font-sans text-sm leading-7 text-charcoal/70">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

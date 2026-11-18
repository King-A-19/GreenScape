
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-5 block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-forest">
              What We Do
            </span>

            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-forest sm:text-5xl lg:text-6xl">
              Everything Your Outdoor Space
              <span className="italic text-sage"> Deserves.</span>
            </h2>
          </motion.div>

          <p className="max-w-md font-sans text-base leading-8 text-charcoal/70">
            From the first design idea to the final finishing touches,
            we help transform ordinary outdoor spaces into something
            truly special.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group overflow-hidden border border-forest/10 bg-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Service image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-forest/10 transition-colors duration-300 group-hover:bg-forest/0" />

                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest shadow-md">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
                </div>

                {/* Service information */}
                <div className="flex min-h-[270px] flex-col p-7">
                  <h3 className="mb-4 font-display text-2xl font-semibold text-forest">
                    {service.title}
                  </h3>

                  <p className="mb-8 flex-1 font-sans text-sm leading-7 text-charcoal/70">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-forest/10 pt-5">
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-forest">
                      Explore Service
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="text-forest transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

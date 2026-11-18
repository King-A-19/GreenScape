
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-cream px-6 py-24 lg:px-10 lg:py-32"
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
              Our Portfolio
            </span>

            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-forest sm:text-5xl lg:text-6xl">
              Inspired Spaces.
              <span className="italic text-sage"> Beautifully Created.</span>
            </h2>
          </motion.div>

          <p className="max-w-md font-sans text-base leading-8 text-charcoal/70">
            Explore a collection of outdoor spaces inspired by nature,
            thoughtful design and the beauty of everyday living.
          </p>
        </div>

        {/* Project gallery */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group"
            >
              {/* Project image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-sage/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Project category */}
                <span className="absolute left-6 top-6 bg-cream px-4 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-forest">
                  {project.category}
                </span>

                {/* Project title */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-forest transition-all duration-300 group-hover:bg-sage group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={21} />
                  </div>
                </div>
              </div>

              {/* Project description */}
              <p className="mt-4 max-w-lg font-sans text-sm leading-7 text-charcoal/70">
                {project.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

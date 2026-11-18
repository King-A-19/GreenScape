// testimonials

"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-cream px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-5 block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-forest">
            Words From Our Community
          </span>

          <h2 className="font-display text-4xl font-medium leading-tight text-forest sm:text-5xl lg:text-6xl">
            Experiences That
            <span className="italic text-sage"> Speak for Themselves.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-8 text-charcoal/70">
            Beautiful spaces are meaningful when they make a difference in
            everyday life.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="flex flex-col border border-forest/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote size={34} strokeWidth={1.3} className="mb-7 text-sage" />

              {/* Star rating */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonial.rating }).map(
                  (_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      fill="currentColor"
                      className="text-sand"
                    />
                  ),
                )}
              </div>

              {/* Customer quote */}
              <blockquote className="mb-10 flex-1 font-display text-xl leading-8 text-forest">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Customer details */}
              <div className="border-t border-forest/10 pt-6">
                <h3 className="font-sans text-sm font-semibold text-forest">
                  {testimonial.name}
                </h3>

                <p className="mt-1 font-sans text-xs text-charcoal/60">
                  {testimonial.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

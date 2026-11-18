// Contact

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";
import { motion } from "motion/react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/data/contact";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Enquiry submitted:", data);
    setSubmitted(true);
    reset();
  };
  return (
    <section id="contact" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-5 block font-sans text-xs font-semibold uppercase tracking-[0.25em] text-forest">
            Get In Touch
          </span>

          <h2 className="font-display text-4xl font-medium leading-tight text-forest sm:text-5xl lg:text-6xl">
            Let&apos;s Create Something
            <span className="italic text-sage"> Beautiful.</span>
          </h2>

          <p className="mt-6 max-w-xl font-sans text-base leading-8 text-charcoal/70">
            Have a garden in mind or an outdoor space ready for a
            transformation? We&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-forest p-8 text-white sm:p-10"
          >
            <h3 className="mb-4 font-display text-3xl">Let&apos;s Talk</h3>

            <p className="mb-10 font-sans text-sm leading-7 text-white/70">
              Tell us about your vision. We&apos;re here to help you take the first
              step towards a beautiful outdoor space.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-sage" size={21} />
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-white/50">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm transition-colors hover:text-sage"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-sage" size={21} />
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-white/50">
                    Phone
                  </p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm transition-colors hover:text-sage"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-sage" size={21} />
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-white/50">
                    Location
                  </p>
                  <p className="text-sm">{contactInfo.location}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-sage" size={21} />
                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-white/50">
                    Working Hours
                  </p>
                  <p className="text-sm">{contactInfo.workingHours}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-2 border-b border-sage pb-2 text-sm font-semibold text-sage transition-all duration-300 hover:gap-4 hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
            >
              Chat with us on WhatsApp
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="py-2"
          >
            <h3 className="mb-3 font-display text-3xl text-forest">
              Send Us an Enquiry
            </h3>

            <p className="mb-9 text-sm leading-7 text-charcoal/60">
              Share a few details about your project and what you&apos;d like to
              achieve.
            </p>

            {submitted && (
              <div
                role="status"
                className="mb-8 border border-sage bg-sage/15 p-5"
              >
                <p className="font-semibold text-forest">
                  Thank you for your interest!
                </p>
                <p className="mt-2 text-sm leading-6 text-charcoal/70">
                  Your demo submission was successful. This form is not
                  connected to an email service yet, so your enquiry has not
                  actually been sent.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              onChange={() => setSubmitted(false)}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-forest"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                    className="w-full border-b border-forest/20 bg-transparent px-1 py-3 text-sm outline-none transition-colors placeholder:text-charcoal/35 focus:border-forest focus-visible:ring-2 focus-visible:ring-sage/60 focus-visible:ring-offset-2"
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-forest"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className="w-full border-b border-forest/20 bg-transparent px-1 py-3 text-sm outline-none transition-colors placeholder:text-charcoal/35 focus:border-forest focus-visible:ring-2 focus-visible:ring-sage/60 focus-visible:ring-offset-2"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-forest"
                >
                  Service You&apos;re Interested In
                </label>
                <select
                  id="service"
                  defaultValue=""
                  {...register("service")}
                  className="w-full border-b border-forest/20 bg-transparent px-1 py-3 text-sm text-charcoal/70 outline-none focus:border-forest focus-visible:ring-2 focus-visible:ring-sage/60 focus-visible:ring-offset-2"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Garden Design</option>
                  <option>Landscape Installation</option>
                  <option>Lawn & Garden Care</option>
                  <option>Outdoor Living Spaces</option>
                  <option>Other</option>
                </select>
                {errors.service && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.service.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-forest"
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your ideas or what you have in mind..."
                  {...register("message")}
                  className="w-full resize-none border-b border-forest/20 bg-transparent px-1 py-3 text-sm outline-none transition-colors placeholder:text-charcoal/35 focus:border-forest focus-visible:ring-2 focus-visible:ring-sage/60 focus-visible:ring-offset-2"
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={false}
                className="inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-sage hover:text-forest"
              >
                Send an Enquiry
                <ArrowUpRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

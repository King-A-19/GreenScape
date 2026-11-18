import Link from "next/link";
import { Leaf, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#intro" },
  { name: "Our Services", href: "#services" },
  { name: "Our Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <Leaf size={30} className="text-sage" aria-hidden="true" />
              <span className="font-display text-3xl font-semibold">
                GreenScape
              </span>
            </Link>

            <p className="max-w-sm font-sans text-sm leading-7 text-cream/70">
              Transforming outdoor spaces into beautiful, welcoming environments
              through thoughtful landscaping and garden design.
            </p>

            <p className="font-display text-xl italic text-sage">
              Beautiful spaces. Naturally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-display text-2xl">Explore</h3>

            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-sage"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-display text-2xl">Let&apos;s Connect</h3>

            <p className="mb-6 text-sm leading-7 text-cream/70">
              Have a garden transformation in mind? We&apos;d love to hear about it.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-semibold text-forest transition-all hover:bg-cream"
            >
              Get in Touch
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-cream/20 pt-8">
          <div className="flex flex-col justify-between gap-4 text-sm text-cream/60 md:flex-row">
            <p>
              © {new Date().getFullYear()} GreenScape Landscaping. All rights
              reserved.
            </p>

            <p>Designed with care for nature.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

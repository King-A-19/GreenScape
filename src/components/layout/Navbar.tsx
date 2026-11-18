
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import Button from "../ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#intro" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-forest/10 bg-cream/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Leaf size={30} className="text-forest" />

          <span className="font-display text-3xl font-semibold text-forest">
            GreenScape
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-medium text-charcoal transition-colors duration-300 hover:text-sage"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="#contact">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-forest md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-forest/10 bg-cream px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-base font-medium text-charcoal hover:text-forest"
              >
                {link.name}
              </Link>
            ))}

            <Button
              href="/contact"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Button>

          </div>
        </div>
      )}
    </header>
  );
}

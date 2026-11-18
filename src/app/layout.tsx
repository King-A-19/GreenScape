
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  // metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "GreenScape | Luxury Landscaping & Garden Design",
    template: "%s | GreenScape",
  },

  description:
    "Discover beautiful landscaping, garden design and professional outdoor maintenance with GreenScape.",

  openGraph: {
    title: "GreenScape | Luxury Landscaping & Garden Design",
    description:
      "Thoughtful landscaping and inspired garden design, crafted to transform outdoor spaces.",
    siteName: "GreenScape",
    locale: "en_ZA",
    type: "website",
    images: [
  {
    url: "/images/og/greenscape-social.jpg",
    width: 1200,
    height: 630,
    alt: "GreenScape luxury landscaping and garden design",
  },
],
  },

  twitter: {
    card: "summary_large_image",
    title: "GreenScape | Luxury Landscaping & Garden Design",
    description:
      "Thoughtful landscaping and inspired garden design, crafted to transform outdoor spaces.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
}

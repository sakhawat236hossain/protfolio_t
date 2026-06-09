import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Pricing from "@/components/home/Pricing";
import Clients from "@/components/home/Clients";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import WhatsAppWidget from "@/components/home/WhatsAppWidget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Pricing />
      <Clients />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}

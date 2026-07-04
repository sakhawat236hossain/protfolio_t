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
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ROIImpact from "@/components/home/ROIImpact";
import DevelopmentProcess from "@/components/home/DevelopmentProcess";
import VideoShowcase from "@/components/home/VideoShowcase";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WhyChooseUs />
      <ROIImpact />
      <DevelopmentProcess />
      <VideoShowcase />
      <Pricing />
      <Clients />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}

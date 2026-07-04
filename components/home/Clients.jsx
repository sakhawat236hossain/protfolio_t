"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const CLIENTS_DATA = [
  { name: "Stripe", logoUrl: "https://cdn.simpleicons.org/stripe/gray" },
  { name: "Vercel", logoUrl: "https://cdn.simpleicons.org/vercel/gray" },
  { name: "Figma", logoUrl: "https://cdn.simpleicons.org/figma/gray" },
  { name: "Airbnb", logoUrl: "https://cdn.simpleicons.org/airbnb/gray" },
  { name: "Supabase", logoUrl: "https://cdn.simpleicons.org/supabase/gray" },
  { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github/gray" },
  { name: "Framer", logoUrl: "https://cdn.simpleicons.org/framer/gray" },
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Product Lead at Stripe",
    text: "Working with this team has completely transformed our product workflow. The attention to detail, premium design aesthetic, and clean implementation exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
    metrics: "+45% Conversion Rate",
  },
  {
    name: "Alex Rivera",
    role: "CTO at TechFlow",
    text: "They delivered exceptional performance optimizations that reduced our page load times significantly. Highly professional, communicative, and technically superb.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
    metrics: "-60% Bounce Rate",
  },
  {
    name: "Emily Chen",
    role: "VP of Growth at Figma",
    text: "A true partnership. They didn't just write code; they understood our business goals and helped us iterate rapidly with high-fidelity Awwwards-level components.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120",
    metrics: "2x User Engagement",
  },
];

export default function Clients() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    
    // Auto slider
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    
    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section id="clients" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background radial gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 uppercase tracking-widest mb-6 backdrop-blur-sm">
            Trusted Partners
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            Loved By <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            We partner with innovative teams to build scalable, robust products that power the modern web and drive incredible conversion rates.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-24 opacity-60">
          {CLIENTS_DATA.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center w-32 h-16 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <img
                src={client.logoUrl}
                alt={`${client.name} logo`}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonials Auto Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute top-0 left-8 text-primary/10">
            <Quote className="w-24 h-24 rotate-180" />
          </div>
          
          <div className="overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl p-8 lg:p-16" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex gap-1 text-yellow-400 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-xl lg:text-3xl font-medium text-white leading-relaxed mb-12">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-50" />
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover border-2 border-white/20"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                      <div className="mt-2 inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold">
                        {testimonial.metrics}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors hover-target"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === selectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors hover-target"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
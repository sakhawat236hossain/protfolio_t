"use client";

import { motion } from "framer-motion";
import { Feather, Cpu, Globe, Code2, Zap, LifeBuoy } from "lucide-react";

const CARDS = [
  { title: "Modern UI/UX Design", icon: Feather, desc: "Delightful interfaces that convert." },
  { title: "Clean & Scalable Code", icon: Code2, desc: "Maintainable code and architecture." },
  { title: "SEO Optimized", icon: Globe, desc: "Built for visibility and speed." },
  { title: "Responsive on Every Device", icon: Cpu, desc: "Pixel-perfect across screens." },
  { title: "Fast Delivery", icon: Zap, desc: "Reliable timelines and rapid delivery." },
  { title: "Long-Term Support", icon: LifeBuoy, desc: "Ongoing maintenance and growth." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 lg:py-28 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest border border-primary/20 bg-primary/10 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">Why Clients Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Trusted for <span className="text-primary">Quality & Growth</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-3">We combine premium design, engineering excellence, and business-first thinking to deliver products that scale.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative group rounded-[18px] p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] overflow-hidden transition-all duration-400"
              >
                <div className="absolute -inset-0.5 rounded-[18px] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.06))', mask: 'linear-gradient(#000,#000) padding-box' }} />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.desc}</p>
                  </div>
                </div>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-primary font-semibold">Learn more →</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

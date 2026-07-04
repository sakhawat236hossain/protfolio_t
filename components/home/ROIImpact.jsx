"use client";

import { motion } from "framer-motion";
import { BarChart, TrendingUp, Users, Globe } from "lucide-react";

const CARDS = [
  { title: "Increase Customer Engagement", icon: Users, value: "+35%" },
  { title: "Improve Online Presence", icon: Globe, value: "+48%" },
  { title: "Higher Conversion Rate", icon: TrendingUp, value: "+22%" },
  { title: "Faster Business Growth", icon: BarChart, value: "+40%" },
];

export default function ROIImpact() {
  return (
    <section id="roi" className="py-20 lg:py-28 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest border border-primary/20 bg-primary/10 px-4 py-2 rounded-full mb-4">ROI & Business Impact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Business Outcomes Over Technology</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-3">We focus on measurable impact: more users, higher conversions, and faster growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{card.title}</p>
                      <h3 className="text-2xl font-bold text-white mt-1">{card.value}</h3>
                    </div>
                  </div>

                  <div className="hidden md:block w-24 h-12 bg-gradient-to-r from-primary/20 to-transparent rounded-xl" />
                </div>

                {/* subtle chart placeholder */}
                <div className="mt-6 h-14 bg-black/30 rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ width: "10%" }}
                    whileInView={{ width: ["10%", "70%", "55%", "75%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

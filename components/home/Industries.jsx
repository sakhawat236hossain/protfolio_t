"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, Coffee, ShoppingCart, Home, Airplay, Wrench, Users } from "lucide-react";

const INDUSTRIES = [
  { title: "Healthcare", icon: Heart },
  { title: "Education", icon: BookOpen },
  { title: "Restaurant", icon: Coffee },
  { title: "E-Commerce", icon: ShoppingCart },
  { title: "Real Estate", icon: Home },
  { title: "Travel & Booking", icon: Airplay },
  { title: "ERP Systems", icon: Wrench },
  { title: "POS Systems", icon: Users },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest border border-primary/20 bg-primary/10 px-4 py-2 rounded-full mb-4">Industries We Serve</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Industry Expertise</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-3">We deliver tailored solutions across a wide range of industries.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div key={it.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{it.title}</h3>
                    <p className="text-sm text-gray-400">Custom solutions and integrations for {it.title}.</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

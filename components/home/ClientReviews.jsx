"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const REVIEWS = [
  { name: "Alice Johnson", company: "FinCorp", rating: 5, text: "Exceptional work, delivered ahead of schedule." },
  { name: "Mark Lee", company: "Shoply", rating: 5, text: "Our conversions increased significantly after the redesign." },
  { name: "Sara Gomez", company: "HealthPlus", rating: 5, text: "Professional team and great long-term support." },
];

export default function ClientReviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest border border-primary/20 bg-primary/10 px-4 py-2 rounded-full mb-4">Client Reviews</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">What Clients Say</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-3">Trusted feedback from our clients across industries.</p>
        </motion.div>

        <div className="relative">
          <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-bold">{REVIEWS[index].name.split(" ")[0][0]}</div>
              <div>
                <p className="text-lg font-bold text-white">{REVIEWS[index].name}</p>
                <p className="text-sm text-gray-400">{REVIEWS[index].company}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">"{REVIEWS[index].text}"</p>
            <div className="mt-4">
              {Array.from({ length: REVIEWS[index].rating }).map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
          </motion.div>

          <div className="mt-6 flex items-center justify-center gap-4" aria-label="Testimonial controls">
            <button type="button" onClick={() => setIndex((index - 1 + REVIEWS.length) % REVIEWS.length)} className="px-4 py-2 rounded-full bg-white/6 text-white hover:bg-white/10 transition-colors" aria-label="Show previous testimonial">Prev</button>
            <button type="button" onClick={() => setIndex((index + 1) % REVIEWS.length)} className="px-4 py-2 rounded-full bg-white/6 text-white hover:bg-white/10 transition-colors" aria-label="Show next testimonial">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_DATA } from "@/utils/constants";
import { Plus } from "lucide-react";

function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`border-b border-white/10 overflow-hidden transition-colors duration-300 ${isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-6 text-left group hover-target"
      >
        <span className={`text-lg font-medium pr-4 transition-colors duration-300 ${isOpen ? "text-primary" : "text-white group-hover:text-gray-300"}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 ${isOpen ? "border-primary text-primary" : "border-white/20 text-white group-hover:border-white/40"}`}
        >
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed max-w-3xl">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 lg:py-32 relative bg-[#0a0a0a]">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 uppercase tracking-widest mb-6">
            Answers
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about our services, pricing, and process.
          </p>
        </motion.div>

        <div className="border-t border-white/10">
          {FAQ_DATA.map((item, i) => (
            <FAQItem
              key={i}
              index={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

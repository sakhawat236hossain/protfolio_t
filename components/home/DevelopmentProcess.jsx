"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  "Requirement Discussion",
  "Research & Planning",
  "UI/UX Design",
  "Development",
  "Testing & Quality Assurance",
  "Launch & Long-Term Support",
];

export default function DevelopmentProcess() {
  const ref = typeof window !== "undefined" ? document : null;

  return (
    <section id="process" className="py-20 lg:py-28 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest border border-primary/20 bg-primary/10 px-4 py-2 rounded-full mb-4">Development Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Our Process (Step-by-step)</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-3">A clear, collaborative process that reduces risk and accelerates delivery.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-white/10" />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6"> 
            {STEPS.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative z-10"
              >
                <div className="flex flex-col items-start lg:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary font-bold">{idx + 1}</div>
                    <div className="lg:hidden">
                      <h4 className="text-lg font-bold text-white">{step}</h4>
                    </div>
                  </div>

                  <div className="hidden lg:block text-center">
                    <h4 className="text-lg font-bold text-white mb-1">{step}</h4>
                    <p className="text-sm text-gray-400 max-w-xs">{getStepDesc(idx)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getStepDesc(idx) {
  const descs = [
    "Align on goals, scope, and success metrics.",
    "Market research and technical feasibility.",
    "Wireframes, prototypes, and visual design.",
    "Iterative engineering with tests and reviews.",
    "Comprehensive testing, QA and performance tuning.",
    "Launch, monitor, and provide long-term support.",
  ];
  return descs[idx] || "";
}

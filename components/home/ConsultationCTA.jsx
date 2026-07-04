"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Calendar } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section id="consult" className="py-20 lg:py-28 relative bg-gradient-to-br from-primary/6 to-purple-900/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl p-10 bg-white/5 border border-white/10 backdrop-blur-md text-center">
          <h3 className="text-3xl font-bold text-white mb-2">Book a Free Consultation</h3>
          <p className="text-gray-300 mb-6">Speak with our senior engineers to discuss your project and get a tailored roadmap.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`https://wa.me/8801758197272?text=${encodeURIComponent("Hi, I'd like to book a consultation.")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:scale-105 transition-transform">
              <Phone className="w-4 h-4" /> WhatsApp
            </a>
            <a href="mailto:codersync9@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors">
              <Calendar className="w-4 h-4" /> Schedule
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="inline-flex items-center gap-2 bg-white/6 px-3 py-2 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> <span className="text-sm text-white">Available: Mon–Fri</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/6 px-3 py-2 rounded-full border border-white/10">
              <span className="text-sm text-white">Response Time: &lt;24h</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

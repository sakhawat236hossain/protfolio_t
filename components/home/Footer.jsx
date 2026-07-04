"use client";

import { Code2, Mail, MapPin, Phone, MessageSquare, ArrowRight, Github, Twitter, Linkedin, Dribbble } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialVariants = {
    hover: { y: -5, scale: 1.1, color: "#fff" },
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <a href="/" className="flex items-center gap-2 mb-6 group hover-target w-fit">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}>
                <Code2 className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </motion.div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Code<span className="text-primary">Nest</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              We build Awwwards-winning, premium, enterprise-grade web applications. Elevate your brand with cutting-edge UI/UX design, motion graphics, and high-performance engineering.
            </p>
            <div className="flex items-center gap-4">
              {[Github, Twitter, Linkedin, Dribbble].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover="hover"
                  variants={socialVariants}
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-primary hover:bg-primary/10 transition-colors hover-target"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Projects", "Clients", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-2 group hover-target transition-colors"
                  >
                    <span className="h-px w-0 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <a href="mailto:codersync9@gmail.com" className="hover:text-white transition-colors hover-target">codersync9@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <a href="tel:+8801758197272" className="hover:text-white transition-colors hover-target">+880 1758197272</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest design news and tech updates.</p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors hover-target"
              />
              <button
                type="button"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary text-white rounded-full px-4 hover:bg-primary/80 transition-colors flex items-center justify-center hover-target"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CodeNest Studio. Crafted with precision.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors hover-target">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors hover-target">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

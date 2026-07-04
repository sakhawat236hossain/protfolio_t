"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export default function Pricing() {
  const packages = [
    {
      name: "Starter",
      subtitle: "Perfect for small businesses",
      price: "$999",
      period: "starting at",
      features: [
        "Custom Landing Page",
        "Responsive Design",
        "Basic CMS Integration",
        "Contact Form & Leads",
        "SEO Optimization",
        "1 Month Support",
      ],
      buttonText: "Start Project",
      popular: false,
    },
    {
      name: "Professional",
      subtitle: "Ideal for growing companies",
      price: "Custom",
      period: "quote based",
      features: [
        "Full Web Application",
        "E-commerce Ecosystem",
        "Advanced Animations",
        "Custom Admin Panel",
        "Analytics Setup",
        "3 Months Support",
      ],
      buttonText: "Get Quote",
      popular: true,
    },
    {
      name: "Enterprise",
      subtitle: "Large scale & corporate",
      price: "Let's Talk",
      period: "tailored pricing",
      features: [
        "SaaS / ERP Solutions",
        "Mobile App (iOS/Android)",
        "Custom API Integrations",
        "Cloud Infrastructure",
        "Dedicated SLA",
        "24/7 Priority Support",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 relative bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
            Investment
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Choose the right development package for your business needs. No hidden fees, just premium quality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border ${
                pkg.popular 
                  ? "border-primary bg-gradient-to-b from-primary/10 to-transparent lg:-mt-8 lg:mb-8 shadow-2xl shadow-primary/20" 
                  : "border-white/10 bg-white/[0.02]"
              } backdrop-blur-xl group hover-target`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-400">{pkg.subtitle}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-extrabold text-white tracking-tight">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                  {pkg.period}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className={`p-1 rounded-full shrink-0 mt-0.5 ${pkg.popular ? "bg-primary/20 text-primary" : "bg-white/10 text-white"}`}>
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/8801758197272?text=${encodeURIComponent(`Hello, I'm interested in the ${pkg.name} package.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02] ${
                  pkg.popular
                    ? "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                }`}
              >
                {pkg.buttonText}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

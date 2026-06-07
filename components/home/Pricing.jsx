"use client";

import { motion } from "framer-motion";
import { Check, HelpCircle, AlertCircle, Sparkles } from "lucide-react";

export default function Pricing() {
  const packages = [
    {
      name: "স্টার্টার",
      subtitle: "ছোট ব্যবসার জন্য আদর্শ",
      price: "৳১,২০০+",
      note: "১,২০০ ৳ থেকে শুরু",
      features: [
        "ল্যান্ডিং পেজ + অ্যাডমিন প্যানেল",
        "প্রোডাক্ট অ্যাড টু কার্ট",
        "অর্ডার সাবমিট সিস্টেম",
        "স্টক ম্যানেজমেন্ট",
        "কাস্টমার অর্ডার হিস্ট্রি",
        "১ মাস ফ্রি সাপোর্ট",
      ],
      buttonText: "শুরু করুন",
      popular: false,
      gradient: "from-blue-500/10 to-indigo-500/10 hover:border-blue-500/30",
    },
    {
      name: "প্রো",
      subtitle: "মাঝারি ব্যবসার জন্য পারফেক্ট",
      price: "কাস্টম কোটেশন",
      note: "ফিচার ও রিকোয়ারমেন্ট অনুযায়ী",
      features: [
        "কমপ্লিট ওয়েবসাইট / অ্যাপ",
        "ই-commerce ইকোসিস্টেম",
        "Pixel + TikTok + GA4 সেটআপ",
        "ফুল অ্যাডমিন প্যানেল",
        "৩ মাস ফ্রি সাপোর্ট",
        "ফ্রি বেসিক ফিচার ডেভেলপমেন্ট",
      ],
      buttonText: "কোটেশন নিন",
      popular: true,
      gradient: "from-primary/15 via-primary/5 to-purple-500/10 hover:border-primary/40",
    },
    {
      name: "এন্টারপ্রাইজ",
      subtitle: "বড় প্রজেক্ট ও কর্পোরেট",
      price: "আলোচনা সাপেক্ষে",
      note: "প্রজেক্টের পরিধি অনুযায়ী",
      features: [
        "POS / HRM / ERP সিস্টেম",
        "মোবাইল অ্যাপ (Android + iOS)",
        "কাস্টম API ইন্টিগ্রেশন",
        "ক্লাউড ডেপ্লয়মেন্ট",
        "ডেডিকেটেড সাপোর্ট",
        "SLA গ্যারান্টি",
      ],
      buttonText: "আলোচনা করুন",
      popular: false,
      gradient: "from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/30",
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 relative overflow-hidden bg-background">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            মূল্য তালিকা
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            সাশ্রয়ী মূল্যে <span className="text-primary">প্রফেশনাল সলিউশন</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-4">
            আপনার ব্যবসার আকার এবং প্রয়োজন অনুযায়ী সেরা ডেভেলপমেন্ট প্যাকেজ বেছে নিন।
          </p>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-yellow-500 bg-yellow-500/10 px-4 py-2 rounded-lg border border-yellow-500/20 backdrop-blur-sm">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>Domain ও Hosting আলাদা। নিচের প্যাকেজগুলো শুধুমাত্র ডেভেলপমেন্ট খরচ নির্দেশ করে।</span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col justify-between p-8 rounded-3xl border border-border/50 bg-gradient-to-b ${pkg.gradient} backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? "md:scale-105 border-primary/30 shadow-primary/5" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                  <Sparkles className="h-3 w-3 fill-primary-foreground" />
                  <span>সবচেয়ে জনপ্রিয়</span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-border/40">
                  <span className="text-3xl font-extrabold text-foreground tracking-tight">
                    {pkg.price}
                  </span>
                  <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    <HelpCircle className="h-3 w-3" /> {pkg.note}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span className="p-0.5 bg-primary/10 rounded-full text-primary shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/8801758197272?text=${encodeURIComponent(`হ্যালো, আমি আপনার "${pkg.name}" প্যাকেজটি সম্পর্কে বিস্তারিত জানতে আগ্রহী।`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                }`}
              >
                {pkg.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              ⚠️ <strong className="text-foreground">মনে রাখুন:</strong> উপরের প্যাকেজসমূহে Domain ও Hosting অন্তর্ভুক্ত নয়। আপনি যদি আপনার কোনো বিশেষ রিকোয়ারমেন্ট বা অতিরিক্ত কোনো ফিচার যুক্ত করতে চান, তবে সরাসরি আমাদের সাথে আলোচনা করতে পারেন।
            </p>
            <a
              href={`https://wa.me/8801758197272?text=${encodeURIComponent("হ্যালো, আমি আমার প্রজেক্টের রিকোয়ারমেন্ট নিয়ে আলোচনা করতে চাই।")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline transition-all"
            >
              এখনই আলোচনা শুরু করুন &rarr;
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

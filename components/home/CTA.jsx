"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Zap, ShieldCheck, Star } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-background">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center"
        >
          {/* Ambient light streak */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          {/* Icon badging */}
          <div className="flex justify-center gap-3 mb-6">
            <span className="flex items-center justify-center h-10 w-10 bg-primary/10 rounded-full text-primary">
              <Zap className="h-5 w-5 fill-primary/10" />
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            আপনার ব্যবসাকে অনলাইন নিয়ে আসতে <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              আজই শুরু করুন!
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            একটি প্রফেশনাল ও রেসপনসিভ ওয়েবসাইট আপনার ব্র্যান্ডকে কাস্টমারের কাছে বিশ্বস্ত করে তোলে এবং দ্রুত ব্যবসা বাড়াতে সাহায্য করে। আমরা আপনার বাজেট ও প্রয়োজন অনুযায়ী সেরা কাস্টম ওয়েবসাইট ও অ্যাপ সলিউশন দিতে প্রস্তুত।
          </p>

          {/* Persuasive key features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/40">
              <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
              <span className="text-sm font-medium">১০০% সিকিউর ও ফাস্ট</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/40">
              <Star className="h-5 w-5 text-yellow-500 shrink-0 fill-yellow-500/20" />
              <span className="text-sm font-medium">ডেডিকেটেড সাপোর্ট</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/40">
              <Zap className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium">আধুনিক ও প্রিমিয়াম ডিজাইন</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/8801758197272?text=${encodeURIComponent("হ্যালো, আমি আমার ব্যবসার জন্য একটি নতুন ওয়েবসাইট ডেভেলপমেন্ট প্রজেক্ট শুরু করতে চাই।")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-2xl shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageSquare className="h-5 w-5 fill-primary-foreground/10" />
              <span>হোয়াটসঅ্যাপে কথা বলুন</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a
              href="tel:+8801758197272"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold text-lg rounded-2xl border border-border/60 transition-all duration-300 w-full sm:w-auto"
            >
              সরাসরি কল করুন
            </a>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            কোনো প্রকার লুকানো চার্জ নেই। সরাসরি আলাপ করে আপনার প্রজেক্টের বাজেট নির্ধারণ করুন।
          </p>
        </motion.div>
      </div>
    </section>
  );
}

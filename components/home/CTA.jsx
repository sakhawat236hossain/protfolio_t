"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Zap, ShieldCheck, Star } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden"
        >
          {/* Ambient light streak */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-90 h-90 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Copy & Features */}
            <div className="md:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold">
                <Zap className="h-3.5 w-3.5 fill-primary/10" />
                <span>আজই শুরু করুন</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                আপনার ব্যবসাকে অনলাইন নিয়ে আসতে <br />
                <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  আজই তৈরি করুন ওয়েবসাইট!
                </span>
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                একটি প্রফেশনাল ও রেসপনসিভ ওয়েবসাইট আপনার ব্র্যান্ডকে কাস্টমারের কাছে বিশ্বস্ত করে তোলে এবং দ্রুত ব্যবসা বাড়াতে সাহায্য করে। আমরা আপনার বাজেট ও প্রয়োজন অনুযায়ী সেরা কাস্টম ওয়েবসাইট ও অ্যাপ সলিউশন দিতে প্রস্তুত।
              </p>

              {/* Key features (Stacked column on left) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-secondary/40 border border-border/30">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-semibold">১০০% সিকিউর ও আল্ট্রা ফাস্ট লোডিং স্পিড</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-secondary/40 border border-border/30">
                  <Star className="h-5 w-5 text-yellow-500 shrink-0 fill-yellow-500/20" />
                  <span className="text-sm font-semibold">৩ মাস পর্যন্ত ডেডিকেটেড ফ্রি সাপোর্ট সুবিধা</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-secondary/40 border border-border/30">
                  <Zap className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold">আধুনিক ইউজার ইন্টারফেস ও প্রিমিয়াম ডিজাইন</span>
                </div>
              </div>
            </div>

            {/* Right Column - Action Card */}
            <div className="md:col-span-5 w-full">
              <div className="p-8 rounded-3xl border border-primary/20 bg-card/60 backdrop-blur-md shadow-lg space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-foreground">প্রজেক্ট আলোচনা শুরু করুন</h3>
                  <p className="text-xs text-muted-foreground">নিচের বাটনে ক্লিক করে সরাসরি আমাদের সাথে যুক্ত হোন</p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/8801758197272?text=${encodeURIComponent("হ্যালো, আমি আমার ব্যবসার জন্য একটি নতুন ওয়েবসাইট ডেভেলপমেন্ট প্রজেক্ট শুরু করতে চাই।")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-primary text-primary-foreground font-bold rounded-2xl shadow-md shadow-primary/25 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                  >
                    <MessageSquare className="h-5 w-5 fill-primary-foreground/10" />
                    <span>হোয়াটসঅ্যাপে মেসেজ দিন</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  
                  <a
                    href="tel:+8801758197272"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold rounded-2xl border border-border/60 transition-all duration-300"
                  >
                    সরাসরি কল করুন
                  </a>
                </div>

                <div className="border-t border-border/50 pt-4 text-center">
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    ⚠️ কোনো প্রকার লুকানো বা অতিরিক্ত চার্জ নেই। সরাসরি রিকোয়ারমেন্ট অনুযায়ী বাজেট আলোচনা করুন।
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

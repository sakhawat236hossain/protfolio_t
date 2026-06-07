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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden"
        >
          {/* Ambient light streak */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-90 h-90 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column - Copy & Features (col-span-8 for more width) */}
            <div className="md:col-span-8 text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold">
                <Zap className="h-3.5 w-3.5 fill-primary/10" />
                <span>আজই শুরু করুন</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                আপনার ব্যবসাকে অনলাইন নিয়ে আসতে <br />
                <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  আজই তৈরি করুন ওয়েবসাইট!
                </span>
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                একটি প্রফেশনাল ও রেসপনসিভ ওয়েবসাইট আপনার ব্র্যান্ডকে কাস্টমারের কাছে বিশ্বস্ত করে তোলে এবং দ্রুত ব্যবসা বাড়াতে সাহায্য করে। আমরা আপনার বাজেট ও প্রয়োজন অনুযায়ী সেরা কাস্টম ওয়েবসাইট ও অ্যাপ সলিউশন দিতে প্রস্তুত।
              </p>

              {/* Key features (Stacked column on left) */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-border/30">
                  <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">১০০% সিকিউর ও আল্ট্রা ফাস্ট লোডিং স্পিড</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-border/30">
                  <Star className="h-4.5 w-4.5 text-yellow-500 shrink-0 fill-yellow-500/20" />
                  <span className="text-xs sm:text-sm font-semibold">৩ মাস পর্যন্ত ডেডিকেটেড ফ্রি সাপোর্ট সুবিধা</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-border/30">
                  <Zap className="h-4.5 w-4.5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold">আধুনিক ইউজার ইন্টারফেস ও প্রিমিয়াম ডিজাইন</span>
                </div>
              </div>
            </div>

            {/* Right Column - Action Card (col-span-4) */}
            <div className="md:col-span-4 w-full">
              <div className="p-6 sm:p-8 rounded-3xl border border-primary/20 bg-card/60 backdrop-blur-md shadow-lg space-y-6">
                <div className="text-center space-y-1.5">
                  <h3 className="text-lg font-bold text-foreground">প্রজেক্ট আলোচনা শুরু করুন</h3>
                  <p className="text-[11px] text-muted-foreground">নিচের বাটনে ক্লিক করে সরাসরি আমাদের সাথে যুক্ত হোন</p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/8801758197272?text=${encodeURIComponent("হ্যালো, আমি আমার ব্যবসার জন্য একটি নতুন ওয়েবসাইট ডেভেলপমেন্ট প্রজেক্ট শুরু করতে চাই।")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-md shadow-emerald-600/20 hover:bg-emerald-500 transition-all duration-300"
                  >
                    <svg
                      className="h-5 w-5 fill-current shrink-0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.016 14.062.99 11.457.99c-5.44 0-9.866 4.372-9.87 9.802-.001 1.83.503 3.62 1.46 5.181l-.998 3.643 3.738-.97c1.554.849 3.125 1.29 4.793 1.29zM17.476 14.39c-.326-.162-1.926-.949-2.22-.1.058-.292-.294-.43-.464-.176-.326-.162.29-.426-.893.38-1.11-.84-2.62-2.352-3.414-3.415-.8-.718-1.258-1.09-1.638-.72-.34.33-.82.886-1.125 1.218-.307.33-.615.397-.941.236-.325-.161-2.056-.991-2.78-1.635-.57-.506-.95-1.133-1.062-1.326-.113-.193-.012-.298.085-.394.088-.087.194-.225.292-.338.1-.113.133-.193.2-.322.067-.13.033-.242-.017-.343-.05-.101-.464-1.119-.636-1.533-.167-.403-.35-.349-.481-.355-.124-.006-.267-.007-.41-.007-.143 0-.376.053-.573.266-.197.213-.752.733-.752 1.787 0 1.054.768 2.073.875 2.217.108.145 1.51 2.3 3.66 3.227 2.15.927 2.15.618 2.535.583.385-.035 1.926-.787 2.2-1.506.27-.718.27-1.332.19-1.458-.08-.129-.294-.207-.62-.369z"/>
                    </svg>
                    <span>হোয়াটসঅ্যাপে মেসেজ দিন</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  
                  <a
                    href="tel:+8801758197272"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold rounded-xl border border-border/60 transition-all duration-300"
                  >
                    সরাসরি কল করুন
                  </a>
                </div>

                <div className="border-t border-border/50 pt-3.5 text-center">
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
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

"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Activity, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 25);
    mouseY.set(y / 25);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useTransform(mouseY, (val) => -val);
  const rotateY = useTransform(mouseX, (val) => val);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-12 h-[360px] w-[360px] rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-accent/20 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.06),transparent_25%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left max-w-2xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-secondary/80 px-4 py-2 text-xs sm:text-sm font-semibold text-foreground shadow-sm backdrop-blur-md"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
              <Sparkles className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              Next-gen web experiences
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.02]"
            >
              Build premium web experiences
              <span className="block bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                designed to convert and delight.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="max-w-xl text-lg leading-8 text-muted-foreground"
            >
              We combine design, performance, and business strategy to create responsive websites that look beautiful, load fast, and help your brand grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={`https://wa.me/8801758197272?text=${encodeURIComponent("হ্যালো, আমি আপনার সাথে একটি ওয়েবসাইট প্রজেক্ট নিয়ে কথা বলতে চাই।")}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-emerald-600/20 transition-all duration-300 hover:bg-emerald-500"
              >
                Talk on WhatsApp
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-background/80 px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-secondary/90"
              >
                Explore Projects
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-foreground" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="rounded-[1.75rem] border border-border/70 bg-background/80 px-5 py-4 text-sm text-muted-foreground shadow-sm">
                <div className="mb-3 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Free quote within 24 hours
              </div>
              <div className="rounded-[1.75rem] border border-border/70 bg-background/80 px-5 py-4 text-sm text-muted-foreground shadow-sm">
                <div className="mb-3 h-2.5 w-2.5 rounded-full bg-primary" />
                100% responsive, sales-ready websites
              </div>
              <div className="rounded-[1.75rem] border border-border/70 bg-background/80 px-5 py-4 text-sm text-muted-foreground shadow-sm">
                <div className="mb-3 h-2.5 w-2.5 rounded-full bg-accent" />
                Dedicated support for 3 months
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="space-y-1">
                <p className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  50+
                </p>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  30+
                </p>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Happy Clients</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  99%
                </p>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Client Retention</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[520px] aspect-[10/11] rounded-[2.5rem] border border-white/10 bg-card/60 p-6 shadow-2xl shadow-slate-950/15 backdrop-blur-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.15),transparent_35%)] pointer-events-none" />

              <div className="absolute inset-x-6 top-6 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="rounded-full border border-border/80 bg-secondary/80 px-3 py-1 text-[11px] font-mono text-muted-foreground backdrop-blur-md flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-primary" />
                  app.tsx
                </div>
              </div>

              <div className="relative mt-16 rounded-[2rem] border border-border/70 bg-background/90 p-5 shadow-lg">
                <div className="rounded-[1.75rem] bg-slate-950/95 p-5 text-foreground/90 shadow-inner">
                  <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span>Live preview</span>
                    </div>
                    <span className="rounded-full bg-slate-900/70 px-2 py-1">Beta</span>
                  </div>
                  <div className="space-y-1 font-mono text-[11px] leading-6">
                    <p className="text-primary font-semibold">import</p>
                    <p className="pl-4">const Portfolio = () =&gt; {'{'}</p>
                    <p className="pl-8 text-accent">return (&lt;Hero /&gt;);</p>
                    <p className="pl-4">{'};'}</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-3xl border border-border/70 bg-secondary/80 p-4 text-sm">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Performance</p>
                    <p className="mt-3 text-xl font-bold text-foreground">99.8%</p>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-secondary/80 p-4 text-sm">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Launch</p>
                    <p className="mt-3 text-xl font-bold text-foreground">2 days</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-accent animate-pulse" />
                  <span>Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative inline-flex h-1.5 w-8 overflow-hidden rounded-full bg-primary/20">
                    <motion.span
                      animate={{ x: [-32, 32] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 w-4 rounded-full bg-primary"
                    />
                  </span>
                  <span className="text-xs font-bold text-accent">100/100</span>
                </div>
              </div>

              <motion.div
                initial={{ x: -12, y: 12, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.55 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute -top-8 -left-8 rounded-3xl border border-border/80 bg-background/90 p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground leading-none">Speed Performance</p>
                    <p className="mt-1 text-sm font-bold text-foreground">99.8% Perfect</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 12, y: -12, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.55 }}
                whileHover={{ scale: 1.05, y: 2 }}
                className="absolute -bottom-8 -right-8 rounded-3xl border border-border/80 bg-background/90 p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground leading-none">Status</p>
                    <p className="mt-1 text-sm font-bold text-foreground">Ready for Deploy</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

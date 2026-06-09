"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Activity, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  
  // Parallax / 3D rotation effect for the interactive visual card based on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Normalize and damp the movement slightly
    mouseX.set(x / 25);
    mouseY.set(y / 25);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Transform outputs for framer-motion 3D tilt
  const rotateX = useTransform(mouseY, (val) => -val);
  const rotateY = useTransform(mouseX, (val) => val);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-20"
    >
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-accent/8" />
      
      {/* Dynamic Glowing Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-12 -right-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl opacity-75" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-10 -left-20 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl opacity-70" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left max-w-2xl lg:max-w-none">
            
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/80 border border-primary/20 backdrop-blur-md text-foreground text-xs sm:text-sm font-semibold shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <Sparkles className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Next-Gen Web Experiences
              </span>
            </motion.div>

            {/* Headline with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]"
            >
              We Craft Digital
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                Masterpieces
              </span>
              <br />
              That Drive Impact
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed font-normal"
            >
              We merge cutting-edge technology with high-end aesthetic design to engineer bespoke, high-performance web applications tailored to amplify your brand's potential.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href={`https://wa.me/8801758197272?text=${encodeURIComponent("হ্যালো, আমি আপনার সাথে একটি ওয়েবসাইট প্রজেক্ট নিয়ে কথা বলতে চাই।")}`}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-2xl shadow-emerald-600/20 hover:bg-emerald-500 transition-all duration-300 overflow-hidden transform hover:-translate-y-0.5"
              >
                Talk on WhatsApp
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-background/70 hover:bg-secondary/80 backdrop-blur-sm rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Projects
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <div className="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-muted-foreground flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Free quote within 24 hours
              </div>
              <div className="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-muted-foreground flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                100% responsive, sales-ready websites
              </div>
              <div className="rounded-2xl border border-border bg-background/80 px-4 py-3 text-sm text-muted-foreground flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                Dedicated support for 3 months
              </div>
            </motion.div>

            {/* Redesigned Premium Stats Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-8 border-t border-border/60 grid grid-cols-3 gap-6"
            >
              <div className="group space-y-1">
                <p className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left">
                  50+
                </p>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="group space-y-1">
                <p className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left">
                  30+
                </p>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Happy Clients</p>
              </div>
              <div className="group space-y-1">
                <p className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left">
                  99%
                </p>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Client Retention</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Glassmorphism Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md aspect-[10/9] rounded-2xl bg-card/60 backdrop-blur-xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden group/visual"
            >
              {/* Card background ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Header Mac-Style Buttons */}
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono bg-secondary/80 px-3 py-1 rounded-md border border-border/40">
                  <Terminal className="w-3 h-3 text-primary animate-pulse" />
                  <span>app.tsx</span>
                </div>
              </div>

              {/* IDE Code Content */}
              <div className="flex-1 font-mono text-xs text-muted-foreground/90 space-y-2 py-4">
                <p className="text-accent"><span className="text-primary font-semibold">import</span> {"{ useState }"} <span className="text-primary">from</span> 'react';</p>
                <p><span className="text-primary font-semibold">const</span> DesignSystem = () =&gt; {"{"}</p>
                <p className="pl-4">const [active, setActive] = useState(<span className="text-accent">true</span>);</p>
                <p className="pl-4">return (</p>
                <p className="pl-8 text-primary">&lt;<span className="text-primary font-bold">div</span> className=<span className="text-accent">"glowing-card"</span>&gt;</p>
                <p className="pl-12 text-foreground/80">&lt;<span className="text-accent">Sparkle</span> /&gt; Hello Modern Web</p>
                <p className="pl-8 text-primary">&lt;/<span className="text-primary">div</span>&gt;</p>
                <p className="pl-4">);</p>
                <p>{"};"}</p>
              </div>

              {/* Footer Mock Graph/Metrics */}
              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-accent animate-pulse" />
                  <span className="text-[11px] font-mono text-muted-foreground">Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-8 rounded-full bg-primary/20 relative overflow-hidden">
                    <motion.span 
                      animate={{ x: [-32, 32] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 w-4 bg-primary rounded-full"
                    />
                  </span>
                  <span className="text-xs font-bold text-accent">100/100</span>
                </div>
              </div>

              {/* Floating Overlay Badge 1: Performance */}
              <motion.div
                initial={{ x: -10, y: 10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute -top-6 -left-6 bg-background/90 backdrop-blur-md border border-border/80 shadow-lg rounded-xl p-3 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <Zap className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-muted-foreground leading-none">Speed Performance</p>
                  <p className="text-sm font-bold text-foreground mt-1">99.8% Perfect</p>
                </div>
              </motion.div>

              {/* Floating Overlay Badge 2: Security / Verified */}
              <motion.div
                initial={{ x: 10, y: -10, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: 2 }}
                className="absolute -bottom-6 -right-6 bg-background/90 backdrop-blur-md border border-border/80 shadow-lg rounded-xl p-3 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-muted-foreground leading-none">Status</p>
                  <p className="text-sm font-bold text-foreground mt-1">Ready for Deploy</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

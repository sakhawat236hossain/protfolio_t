"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Palette, Smartphone, Cloud, Sparkles, Zap } from "lucide-react";
import { useRef } from "react";
import { SERVICES } from "@/utils/constants";

const ICON_MAP = { Globe, Palette, Smartphone, Cloud };

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-20 lg:py-32 relative overflow-hidden bg-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top gradient orb */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        {/* Bottom gradient orb */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
        />
        {/* Center accent */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              About CodeNest Studio
            </span>
            <Zap className="h-4 w-4 text-primary" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black leading-tight tracking-tight">
                We Transform
                <span className="block bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
                  Ideas Into Digital Reality
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              CodeNest Studio is a full-service web development agency that combines
              technical excellence with creative vision. We partner with startups and
              enterprises to build scalable, performant applications that solve real
              problems.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Our mission is simple: deliver exceptional digital experiences that drive
              measurable results. We believe great software starts with understanding
              the people who use it.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                variants={statVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group p-6 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl font-black bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                    Client Satisfaction
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={statVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group p-6 rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl font-black bg-gradient-to-r from-accent to-emerald-500 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                    Support Available
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Services Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="group relative"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />

                  <div className="relative p-8 rounded-2xl border-2 border-border/50 bg-gradient-to-br from-card/80 to-background/80 backdrop-blur-md hover:border-primary/50 transition-all duration-300 overflow-hidden h-full">
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="relative z-10 h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300 border border-primary/20 group-hover:border-primary/50"
                    >
                      {Icon && <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />}
                    </motion.div>

                    {/* Title */}
                    <h3 className="relative z-10 text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {service.description}
                    </p>

                    {/* Hover indicator */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="relative z-10 mt-4 text-primary font-semibold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Learn more →
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
        />
      </div>
    </section>
  );
}

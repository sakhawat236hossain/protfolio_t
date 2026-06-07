"use client";

import { motion } from "framer-motion";
import { Globe, Palette, Smartphone, Cloud } from "lucide-react";
import { SERVICES } from "@/utils/constants";

const ICON_MAP = { Globe, Palette, Smartphone, Cloud };

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6 leading-tight">
                We Transform Ideas Into
                <span className="text-primary"> Digital Reality</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                CodeNest Studio is a full-service web development agency that
                combines technical excellence with creative vision. We partner
                with startups and enterprises to build scalable, performant
                applications that solve real problems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is simple: deliver exceptional digital experiences
                that drive measurable results. We believe great software starts
                with understanding the people who use it.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-lg border border-border bg-background">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="p-4 rounded-lg border border-border bg-background">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group p-6 rounded-lg border border-border bg-background hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

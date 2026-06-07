// "use client";

// import { motion } from "framer-motion";
// import { CLIENTS_DATA, TESTIMONIALS } from "@/utils/constants";
// import { Quote } from "lucide-react";

// export default function Clients() {
//   return (
//     <section id="clients" className="py-20 lg:py-32 bg-secondary/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <span className="text-sm font-semibold text-primary uppercase tracking-wider">
//             Trusted By
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
//             Our <span className="text-primary">Clients</span>
//           </h2>
//           <p className="max-w-2xl mx-auto text-muted-foreground">
//             We have partnered with businesses of all sizes to deliver transformative digital solutions.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
//           {CLIENTS_DATA.map((client, i) => (
//             <motion.div
//               key={client.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05 }}
//               className="flex flex-col items-center justify-center p-6 rounded-lg border border-border bg-background hover:border-primary/30 transition-colors"
//             >
//               <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
//                 <span className="text-primary font-bold text-lg">{client.logo}</span>
//               </div>
//               <span className="text-sm font-medium text-muted-foreground">
//                 {client.name}
//               </span>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {TESTIMONIALS.map((testimonial, i) => (
//             <motion.div
//               key={testimonial.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="relative p-6 rounded-lg border border-border bg-background"
//             >
//               <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
//               <p className="text-sm text-muted-foreground leading-relaxed mb-4">
//                 &ldquo;{testimonial.text}&rdquo;
//               </p>
//               <div>
//                 <div className="font-semibold text-sm">{testimonial.name}</div>
//                 <div className="text-xs text-muted-foreground">
//                   {testimonial.role}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const CLIENTS_DATA = [
  { name: "Stripe", logoUrl: "https://cdn.simpleicons.org/stripe" },
  { name: "Vercel", logoUrl: "https://cdn.simpleicons.org/vercel" },
  { name: "Figma", logoUrl: "https://cdn.simpleicons.org/figma" },
  { name: "Airbnb", logoUrl: "https://cdn.simpleicons.org/airbnb" },
  { name: "Supabase", logoUrl: "https://cdn.simpleicons.org/supabase" },
  { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github" },
  { 
    name: "Slack", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" 
  },
  { name: "Framer", logoUrl: "https://cdn.simpleicons.org/framer" },
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Product Lead at Stripe",
    text: "Working with this team has completely transformed our product workflow. The attention to detail and clean implementation exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
  },
  {
    name: "Alex Rivera",
    role: "CTO at TechFlow",
    text: "They delivered exceptional performance optimizations that reduced our page load times by 40%. Highly professional, communicative, and technically superb.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
  },
  {
    name: "Emily Chen",
    role: "VP of Growth at Figma",
    text: "A true partnership. They didn't just write code; they understood our business goals and helped us iterate rapidly with high-fidelity components.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120",
  },
];

// Framer motion animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Clients() {
  return (
    <section id="clients" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background radial gradients for depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary uppercase tracking-wider mb-4 border border-primary/20">
            Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 mb-4 text-foreground">
            Our <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            We partner with innovative teams to build scalable, robust products that power the modern web.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mb-24"
        >
          {CLIENTS_DATA.map((client) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl border border-border/50 bg-card hover:bg-accent/30 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.02] transition-all duration-300"
            >
              <div className="relative z-10 h-10 w-full flex items-center justify-center mb-3">
                <img
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  className="h-7 w-auto object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert dark:group-hover:invert-0"
                  loading="lazy"
                />
              </div>
              <span className="relative z-10 text-xs font-medium uppercase tracking-wider text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Divider */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border/80" />
          </div>
          <span className="relative bg-background px-4 text-xs font-bold tracking-widest text-muted-foreground/75 uppercase">
            Testimonials
          </span>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="relative flex flex-col justify-between p-8 rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.02]"
            >
              {/* Subtle hover background accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-muted/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* Stars and Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/10" />
                </div>

                <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
              </div>

              {/* Author Info block */}
              <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-border/40">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="flex-shrink-0 h-12 w-12 rounded-full object-cover border-2 border-primary/20 hover:border-primary transition-colors duration-300"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-sm text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
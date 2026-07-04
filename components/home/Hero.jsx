"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Activity, Zap, CheckCircle2, Play, Code2, Layers, Cpu, Globe } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i > text.length) clearInterval(intervalId);
    }, 50);
    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}<span className="animate-pulse ml-1 inline-block w-1.5 h-4 bg-primary"></span></span>;
};

const LOGOS = [
  { icon: <Code2 className="w-5 h-5"/>, name: "React" },
  { icon: <Globe className="w-5 h-5"/>, name: "Next.js" },
  { icon: <Layers className="w-5 h-5"/>, name: "Tailwind" },
  { icon: <Cpu className="w-5 h-5"/>, name: "Framer" },
  { icon: <Code2 className="w-5 h-5"/>, name: "Node.js" },
  { icon: <Globe className="w-5 h-5"/>, name: "Vercel" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x / 40);
    mouseY.set(y / 40);
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] h-[40vw] w-[40vw] rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[10%] h-[35vw] w-[35vw] rounded-full bg-blue-600/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white backdrop-blur-xl"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <Sparkles className="h-4 w-4 text-primary" />
              Award-Winning Enterprise Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-white"
            >
              We Build Premium <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-400 font-light"
            >
              <TypewriterText text="Elevate your brand with cutting-edge UI/UX design, motion graphics, and high-performance engineering designed for maximum conversion." />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/8801758197272?text=${encodeURIComponent("Hello, I'd like to discuss an enterprise web project.")}`}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold overflow-hidden hover-target"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Meeting
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gray-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors hover-target"
              >
                <Play className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
                View Showreel
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-12 border-t border-white/10 grid grid-cols-3 gap-6 max-w-2xl"
            >
              <div>
                <p className="text-4xl font-bold text-white mb-1">10<span className="text-primary">+</span></p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">200<span className="text-primary">+</span></p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-1">99<span className="text-primary">%</span></p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Satisfaction</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative w-full h-[600px] flex items-center justify-center lg:justify-end perspective-1000">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[500px] rounded-[2.5rem] bg-white/5 border border-white/10 p-4 shadow-2xl backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-[2.5rem] pointer-events-none" />
              
              <div className="relative bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="mx-auto px-4 py-1 rounded-md bg-white/5 text-xs text-gray-400 font-mono flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-primary" />
                    npm run dev
                  </div>
                </div>
                
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-primary mb-2"
                  >
                    $ initializing project...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-gray-300"
                  >
                    <span className="text-purple-400">import</span> {'{'} motion {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'framer-motion'</span>;
                    <br/><br/>
                    <span className="text-blue-400">const</span> EnterpriseApp = () =&gt; {'{'}
                    <br/>
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> (
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-blue-300">motion.div</span>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;animate={'{'} scale: 1.05 {'}'}
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=<span className="text-green-400">"premium-ui"</span>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&gt;
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;High Performance Delivered
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-blue-300">motion.div</span>&gt;
                    <br/>
                    &nbsp;&nbsp;);
                    <br/>
                    {'}'};
                  </motion.div>
                </div>
              </div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-4 translate-z-50"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold">100/100</p>
                  <p className="text-xs text-gray-400">Performance Score</p>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center gap-4 translate-z-50"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold">SEO Optimized</p>
                  <p className="text-xs text-gray-400">Rank #1 Faster</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/5 border-y border-white/10 py-4 z-10 backdrop-blur-md">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex items-center whitespace-nowrap gap-16 pr-16 w-fit"
        >
          {[...LOGOS, ...LOGOS].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-default">
              {logo.icon}
              <span className="text-lg font-semibold tracking-wider">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

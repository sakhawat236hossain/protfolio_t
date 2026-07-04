"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const DRIVE_PREVIEW = "https://drive.google.com/file/d/1WkV-Se3bpsmCyZfwk9nQEFCA2vmkqvTh/preview";

export default function VideoShowcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="showreel" className="py-20 lg:py-28 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest border border-primary/20 bg-primary/10 px-4 py-2 rounded-full mb-4">Video Showcase</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Project Showreel</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-3">A quick walkthrough of our work — click to play.</p>
        </motion.div>

        <div className="flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-4xl"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl">
              <div className="relative" style={{ paddingTop: '56.25%' }}>
                {!playing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/40 to-transparent">
                    <button
                      onClick={() => setPlaying(true)}
                      aria-label="Play showcase video"
                      className="relative z-20 p-6 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md text-white transition-colors"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </button>
                    <div className="absolute inset-0" aria-hidden />
                  </div>
                )}

                <div className="absolute inset-0">
                  {playing ? (
                    <iframe
                      title="Project Showreel"
                      src={DRIVE_PREVIEW}
                      allow="autoplay; encrypted-media"
                      className="w-full h-full"
                      style={{ border: 0 }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/8 to-transparent">
                      <div className="max-w-[720px] mx-auto p-12 text-center">
                        <p className="text-lg text-gray-300">Click to load the showreel</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Floating decorative */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -top-6 -left-6 w-20 h-20 rounded-full bg-primary/6 blur-3xl"
            />
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-purple-600/6 blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, AlertCircle, ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/utils/constants";
import ProjectDemoModal from "@/components/ui/ProjectDemoModal";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [dbError, setDbError] = useState("");
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({ url: "", title: "" });

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
          setDbError("");
        } else {
          const data = await res.json();
          setDbError(data.error || "Failed to load projects");
        }
      } catch {
        setDbError("Unable to connect to server");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const usedCategories = [
    "All",
    ...CATEGORIES.filter((c) => projects.some((p) => p.category === c)),
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#0a0a0a] to-[#0a0a0a] opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest border border-primary/20 bg-primary/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Featured <span className="text-primary">Case Studies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            A curated selection of our best work. We build scalable, performant, and beautiful applications for forward-thinking companies.
          </p>
        </motion.div>

        {dbError && (
          <div className="mb-12 max-w-2xl mx-auto p-4 rounded-2xl border border-red-500/30 bg-red-500/10 flex items-start gap-3 backdrop-blur-sm">
            <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-400">Unable to load projects</p>
              <p className="text-xs text-red-400/80 mt-1">{dbError}</p>
            </div>
          </div>
        )}

        {projects.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {usedCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 hover-target ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-105"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-white/10" />
                <div className="p-8 space-y-4">
                  <div className="h-6 bg-white/10 rounded-full w-3/4" />
                  <div className="h-4 bg-white/10 rounded-full w-full" />
                  <div className="h-4 bg-white/10 rounded-full w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <p className="text-white text-lg font-semibold">No projects found.</p>
            <p className="text-gray-400 text-sm mt-2">
              {dbError ? "Projects will appear once the database is connected." : "Check back soon for updates!"}
            </p>
          </div>
        ) : (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project._id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] hover:border-primary/50 transition-all duration-500"
                >
                  <a href={`/projects/${project.slug}`} className="block relative aspect-[4/3] overflow-hidden p-4">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />
                    
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        />
                      ) : (
                        <div className="w-full h-full bg-black flex items-center justify-center">
                          <span className="text-gray-600 text-sm uppercase tracking-widest font-semibold">No Preview</span>
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      {project.featured && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                          <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                          Featured
                        </div>
                      )}

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur-md shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out delay-100">
                          <ArrowUpRight className="w-8 h-8" />
                        </div>
                      </div>
                    </div>
                  </a>

                  <div className="p-8 pt-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-xs text-gray-500 font-medium">2026</span>
                    </div>

                    <a href={`/projects/${project.slug}`}>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </a>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies?.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-gray-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-white/5 border border-white/10 rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                      {project.liveLink && (
                        <button
                          onClick={() => {
                            setSelectedProject({ url: project.liveLink, title: project.title });
                            setDemoModalOpen(true);
                          }}
                          className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors hover-target"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </button>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors hover-target"
                        >
                          <Github className="h-4 w-4" /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <ProjectDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        url={selectedProject.url}
        title={selectedProject.title}
      />
    </section>
  );
}
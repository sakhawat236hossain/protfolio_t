// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ExternalLink, Github, Star, AlertCircle } from "lucide-react";
// import { CATEGORIES } from "@/utils/constants";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [dbError, setDbError] = useState("");

//   useEffect(() => {
//     async function fetchProjects() {
//       try {
//         const res = await fetch("/api/projects");
//         if (res.ok) {
//           const data = await res.json();
//           setProjects(data);
//           setDbError("");
//         } else {
//           const data = await res.json();
//           setDbError(data.error || "Failed to load projects");
//         }
//       } catch {
//         setDbError("Unable to connect to server");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProjects();
//   }, []);

//   const filteredProjects =
//     activeCategory === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeCategory);

//   const usedCategories = [
//     "All",
//     ...CATEGORIES.filter((c) => projects.some((p) => p.category === c)),
//   ];

//   return (
//     <section id="projects" className="py-20 lg:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <span className="text-sm font-semibold text-primary uppercase tracking-wider">
//             Our Work
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
//             Featured <span className="text-primary">Projects</span>
//           </h2>
//           <p className="max-w-2xl mx-auto text-muted-foreground">
//             Explore our portfolio of successful projects across various
//             industries and technologies.
//           </p>
//         </motion.div>

//         {dbError && (
//           <div className="mb-8 max-w-2xl mx-auto p-4 rounded-lg border border-destructive/30 bg-destructive/5 flex items-start gap-3">
//             <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
//             <div>
//               <p className="text-sm font-medium text-destructive">
//                 Unable to load projects
//               </p>
//               <p className="text-xs text-muted-foreground mt-1">{dbError}</p>
//             </div>
//           </div>
//         )}

//         {projects.length > 0 && (
//           <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
//             {usedCategories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
//                   activeCategory === cat
//                     ? "bg-primary text-primary-foreground shadow-sm"
//                     : "bg-secondary text-muted-foreground hover:bg-secondary/80"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         )}

//         {loading ? (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="rounded-lg border border-border overflow-hidden animate-pulse"
//               >
//                 <div className="aspect-video bg-muted" />
//                 <div className="p-5 space-y-3">
//                   <div className="h-5 bg-muted rounded w-3/4" />
//                   <div className="h-3 bg-muted rounded w-full" />
//                   <div className="h-3 bg-muted rounded w-2/3" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : filteredProjects.length === 0 ? (
//           <div className="text-center py-20">
//             <p className="text-muted-foreground text-lg">No projects found.</p>
//             <p className="text-muted-foreground text-sm mt-2">
//               {dbError
//                 ? "Projects will appear once the database is connected."
//                 : "Check back soon for updates!"}
//             </p>
//           </div>
//         ) : (
//           <motion.div
//             layout
//             className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             <AnimatePresence mode="popLayout">
//               {filteredProjects.map((project) => (
//                 <motion.div
//                   key={project._id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.3 }}
//                   className="group rounded-lg border border-border overflow-hidden bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all"
//                 >
//                   <a
//                     href={`/projects/${project.slug}`}
//                     className="block"
//                   >
//                     <div className="relative aspect-video overflow-hidden bg-muted">
//                       {project.thumbnail && (
//                         <img
//                           src={project.thumbnail}
//                           alt={project.title}
//                           className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//                         />
//                       )}
//                       {project.featured && (
//                         <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
//                           <Star className="h-3 w-3" /> Featured
//                         </div>
//                       )}
//                     </div>
//                   </a>
//                   <div className="p-5">
//                     <div className="flex items-start justify-between gap-2 mb-2">
//                       <a href={`/projects/${project.slug}`}>
//                         <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">
//                           {project.title}
//                         </h3>
//                       </a>
//                       <span className="shrink-0 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
//                         {project.category}
//                       </span>
//                     </div>
//                     <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-1.5 mb-4">
//                       {project.technologies?.slice(0, 4).map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {project.technologies?.length > 4 && (
//                         <span className="px-2 py-0.5 text-xs text-muted-foreground">
//                           +{project.technologies.length - 4}
//                         </span>
//                       )}
//                     </div>
//                     <div className="flex items-center gap-3">
//                       {project.liveLink && (
//                         <a
//                           href={project.liveLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
//                         >
//                           <ExternalLink className="h-4 w-4" /> Live
//                         </a>
//                       )}
//                       {project.githubLink && (
//                         <a
//                           href={project.githubLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
//                         >
//                           <Github className="h-4 w-4" /> Code
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }






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
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Modern gradient background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Explore our portfolio of successful projects across various
            industries and technologies.
          </p>
        </motion.div>

        {dbError && (
          <div className="mb-8 max-w-2xl mx-auto p-4 rounded-xl border border-destructive/30 bg-destructive/5 flex items-start gap-3 backdrop-blur-sm">
            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-destructive">
                Unable to load projects
              </p>
              <p className="text-xs text-muted-foreground mt-1">{dbError}</p>
            </div>
          </div>
        )}

        {projects.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {usedCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                    : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground backdrop-blur-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/50 overflow-hidden animate-pulse bg-card/50 backdrop-blur-sm"
              >
                <div className="aspect-video bg-muted/60" />
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-muted/60 rounded w-3/4" />
                  <div className="h-3 bg-muted/60 rounded w-full" />
                  <div className="h-3 bg-muted/60 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found.</p>
            <p className="text-muted-foreground text-sm mt-2">
              {dbError
                ? "Projects will appear once the database is connected."
                : "Check back soon for updates!"}
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project._id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl border border-border/40 bg-gradient-to-b from-card to-card/80 backdrop-blur-sm overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                >
                  {/* Modern glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <a href={`/projects/${project.slug}`} className="block">
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-muted-foreground/30 text-sm">No preview</span>
                        </div>
                      )}
                      {/* Modern gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {project.featured && (
                        <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 bg-black/70 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> 
                          <span>Featured</span>
                        </div>
                      )}
                      
                      {/* Modern view details indicator */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="bg-black/60 backdrop-blur-md rounded-full p-2 border border-white/20">
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </a>
                  
                  <div className="p-5 relative z-10">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <a href={`/projects/${project.slug}`} className="flex-1">
                        <h3 className="font-bold text-xl group-hover:text-primary transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                      </a>
                      <span className="shrink-0 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies?.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 4 && (
                        <span className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary/50 rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 pt-2 border-t border-border/40">
                      {project.liveLink && (
                        <button
                          onClick={() => {
                            setSelectedProject({ url: project.liveLink, title: project.title });
                            setDemoModalOpen(true);
                          }}
                          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:gap-3"
                        >
                          <ExternalLink className="h-4 w-4" /> 
                          <span>Live Demo</span>
                        </button>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all hover:gap-3"
                        >
                          <Github className="h-4 w-4" /> 
                          <span>Source Code</span>
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
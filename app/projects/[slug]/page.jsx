"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Star, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ProjectDemoModal from "@/components/ui/ProjectDemoModal";

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await fetch(`/api/projects/by-slug/${params.slug}`);
        if (res.ok) {
          const data = await res.json();
          // Normalize fields: some records might store technologies/images as strings
          const normalized = { ...data };
          if (typeof normalized.technologies === "string") {
            normalized.technologies = normalized.technologies
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean);
          }
          if (!Array.isArray(normalized.technologies)) {
            normalized.technologies = normalized.technologies || [];
          }
          if (typeof normalized.images === "string") {
            normalized.images = normalized.images
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean);
          }
          if (!Array.isArray(normalized.images)) {
            normalized.images = normalized.images || [];
          }

          setProject(normalized);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    if (params.slug) fetchProject();
  }, [params.slug]);

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </main>
    );
  }

  if (!project) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
            <a href="/#projects" className="text-primary hover:underline">
              Back to Projects
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="min-h-screen pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </a>

            <div className="relative rounded-xl overflow-hidden mb-8 bg-muted">
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                />
              )}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  <Star className="h-4 w-4" /> Featured
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                <Tag className="h-3 w-3" /> {project.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(project.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6">{project.title}</h1>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium bg-secondary rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-neutral max-w-none mb-10">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              {project.liveLink && (
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> View Live
                </button>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  <Github className="h-4 w-4" /> Source Code
                </a>
              )}
            </div>

            {project.images?.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Project Gallery</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.images.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden bg-muted">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
      <ProjectDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        url={project.liveLink}
        title={project.title}
      />
    </main>
  );
}

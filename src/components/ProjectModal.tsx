import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, CheckCircle2, Cpu, ShieldCheck, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectMockupIllustration } from './ProjectMockupIllustration';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-surface border border-zinc-700 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-surface/95 backdrop-blur-xl border-b border-border">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-ios-blue/15 text-ios-blue border border-ios-blue/30 font-semibold">
                Tier {project.tier}
              </span>
              <span className="text-sm font-bold text-text-primary tracking-tight truncate">
                {project.title} · Architecture Breakdown
              </span>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              aria-label="Close Project Architecture Modal"
              className="w-11 h-11 rounded-lg bg-surface-hover hover:bg-zinc-800 border border-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px]"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Interactive Illustration Preview */}
          <div className="w-full bg-background border-b border-border">
            <ProjectMockupIllustration projectId={project.id} />
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Title & Context */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                {project.title}
              </h2>
              <p className="text-ios-blue text-sm font-medium mt-1">
                {project.tagline}
              </p>
              <p className="text-text-secondary text-sm mt-3 leading-relaxed">
                <strong className="text-text-primary">Operational Role:</strong> {project.context}.
                <br />
                <strong className="text-text-primary">Key Engineering Focus:</strong> {project.highlight}.
              </p>
            </div>

            {/* Performance Metrics Strip */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-background border border-border font-mono text-center">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-text-secondary text-xs">{metric.label}</span>
                    <span className="text-lg font-bold text-text-primary mt-0.5">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Architecture Details & Tradeoffs */}
            <div>
              <h3 className="text-sm font-mono text-text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-ios-blue" />
                Technical Architecture & Implementation Decisions
              </h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                {project.architectureDetails.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 bg-background/50 p-3.5 rounded-xl border border-border/80 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Complete Tech Stack */}
            <div>
              <h3 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-2.5">
                Target Technologies & Dependencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-background border border-border text-xs font-mono text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-4 rounded-xl bg-ios-blue hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-glow-sm transition-all min-h-[44px]"
                  >
                    <span></span>
                    <span>View on App Store</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-4 rounded-xl bg-surface-hover hover:bg-zinc-800 border border-border text-text-primary text-xs font-medium flex items-center gap-2 transition-colors min-h-[44px]"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="h-11 px-5 rounded-xl bg-background hover:bg-surface border border-border text-text-secondary hover:text-text-primary text-xs font-medium transition-colors min-h-[44px]"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

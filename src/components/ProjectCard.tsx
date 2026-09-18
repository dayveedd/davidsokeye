import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Layers, Smartphone, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectMockupIllustration } from './ProjectMockupIllustration';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative flex flex-col justify-between rounded-2xl bg-surface border border-border hover:border-zinc-500 shadow-apple-card overflow-hidden transition-colors h-full"
    >
      {/* Top Media / Interactive Mockup Frame */}
      <div className="relative w-full overflow-hidden bg-background">
        <ProjectMockupIllustration projectId={project.id} />
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Header row: Badges & Tier Category */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            {project.badges.map((badge, idx) => {
              let badgeStyle = 'bg-surface-hover text-text-secondary border-border';
              if (badge.type === 'app-store') {
                badgeStyle = 'bg-ios-blue/15 text-ios-blue border-ios-blue/30 font-semibold';
              } else if (badge.type === 'security') {
                badgeStyle = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
              } else if (badge.type === 'award') {
                badgeStyle = 'bg-amber-500/15 text-amber-400 border-amber-500/30';
              }

              return (
                <span
                  key={idx}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${badgeStyle} flex items-center gap-1`}
                >
                  {badge.type === 'app-store' && <span className="text-xs"></span>}
                  {badge.type === 'award' && <Award className="w-3 h-3" />}
                  {badge.label}
                </span>
              );
            })}
          </div>

          {/* Project Title & Tagline (with truncate / line-clamp to satisfy PRD Section 7) */}
          <h3 className="text-xl font-bold text-text-primary tracking-tight group-hover:text-white transition-colors truncate">
            {project.title}
          </h3>
          <p className="text-xs text-ios-blue font-medium mt-0.5 truncate mb-2.5">
            {project.tagline}
          </p>

          {/* Context & Key Engineering Highlight (PRD Section 4 & 7: line-clamp-2) */}
          <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed mb-4">
            <strong className="text-text-primary font-medium">{project.context}:</strong>{' '}
            {project.highlight}
          </p>

          {/* Metrics summary strip if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 py-2.5 px-3 mb-4 rounded-xl bg-background/60 border border-border/80 font-mono text-[11px]">
              {project.metrics.map((metric, mIdx) => (
                <div key={mIdx} className="flex flex-col">
                  <span className="text-text-secondary text-[10px] truncate">{metric.label}</span>
                  <span className="font-bold text-text-primary truncate">{metric.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech stack pills & Tactile Inspection CTA */}
        <div className="pt-4 border-t border-border/80 flex flex-col gap-3.5">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded-md bg-background border border-border/80 text-[11px] font-mono text-zinc-400 group-hover:border-zinc-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Interactive Button row with touch target >= 44x44px (AC4) */}
          <div className="flex items-center justify-between pt-1">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectProject(project)}
              aria-label={`Inspect ${project.title} Architecture & Tradeoffs`}
              className="h-11 px-3.5 rounded-lg text-xs font-semibold text-text-primary bg-surface-hover hover:bg-zinc-800 border border-border hover:border-zinc-600 flex items-center gap-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-ios-blue min-h-[44px]"
            >
              <Layers className="w-3.5 h-3.5 text-ios-blue" />
              <span>Inspect Architecture</span>
              <ChevronRight className="w-3.5 h-3.5 text-text-secondary group-hover:translate-x-0.5 transition-transform" />
            </motion.button>

            <div className="flex items-center gap-1">
              {project.appStoreUrl && (
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on Apple App Store`}
                  className="w-11 h-11 rounded-lg bg-surface-hover hover:bg-zinc-800 border border-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px]"
                >
                  <span className="text-sm font-semibold"></span>
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} Source on GitHub`}
                  className="w-11 h-11 rounded-lg bg-surface-hover hover:bg-zinc-800 border border-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px]"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

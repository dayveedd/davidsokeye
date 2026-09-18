import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Lock, Cpu } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';

interface DeepMobileEngineeringProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const DeepMobileEngineering: React.FC<DeepMobileEngineeringProps> = ({
  projects,
  onSelectProject,
}) => {
  const tier2Projects = projects.filter((p) => p.tier === 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="mobile-eng" className="py-16 md:py-24 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <span>Tier 2 · Deep Mobile Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Hardware Telemetry & Native Constraints
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-xl">
              Tackling OS-level low latency, CoreLocation battery optimization, C++ FFI bindings, and Secure Enclave cryptographic isolation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary bg-surface px-3 py-1.5 rounded-lg border border-border">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>Low-Level iOS & Android NDK</span>
          </div>
        </div>

        {/* Bento Grid: 1 col (<768px), 2 cols (768px - 1024px), 3 cols (>1024px) (AC2) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tier2Projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <ProjectCard project={project} onSelectProject={onSelectProject} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Network, Server, ArrowRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';

interface SystemsAndAIProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const SystemsAndAI: React.FC<SystemsAndAIProps> = ({ projects, onSelectProject }) => {
  const tier3Projects = projects.filter((p) => p.tier === 3);

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
    <section id="systems-ai" className="py-16 md:py-24 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium mb-3">
              <span>Tier 3 · Systems & AI Workflows</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Agentic Orchestration & Distributed Backends
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-xl">
              Architecting resilient server infrastructure, multi-agent LangGraph pipelines, and enterprise event mesh routing for mission-critical mobile systems.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary bg-surface px-3 py-1.5 rounded-lg border border-border">
            <Server className="w-3.5 h-3.5 text-purple-400" />
            <span>FastAPI · LangGraph · Redis Queues</span>
          </div>
        </div>

        {/* Bento Grid: 1 col (<768px), 2 cols (768px - 1024px), 2 cols (>1024px) for 2 high-density cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {tier3Projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <ProjectCard project={project} onSelectProject={onSelectProject} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

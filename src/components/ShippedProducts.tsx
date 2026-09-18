import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldAlert, Smartphone, ArrowUpRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';

interface ShippedProductsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ShippedProducts: React.FC<ShippedProductsProps> = ({ projects, onSelectProject }) => {
  const shippedProjects = projects.filter((p) => p.tier === 1);

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
    <section id="shipped" className="py-16 md:py-24 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ios-blue/10 border border-ios-blue/20 text-ios-blue text-xs font-mono font-medium mb-3">
              <span>Tier 1 · The Main Event</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Shipped Production Apps
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-xl">
              Consumer mobile applications scaled to tens of thousands of global users, live on the Apple App Store and Google Play.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary bg-surface px-3 py-1.5 rounded-lg border border-border">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Live on Apple App Store</span>
          </div>
        </div>

        {/* Featured Grid (2 Columns on Tablet/Desktop, 1 Col Mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {shippedProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <ProjectCard project={project} onSelectProject={onSelectProject} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

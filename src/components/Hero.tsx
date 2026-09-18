import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail, Trophy, Sparkles, Terminal, Layers, Cpu } from 'lucide-react';
import { AlgorithmicWeaver } from './AlgorithmicWeaver';
import { developerProfile } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Radial Accent Glow (PRD Section 3) */}
      <div className="glow-mesh-hero" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Context, Credibility & CTAs (7 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* Swift Student Challenge Distinguished Winner Status Badge (Credibility Hook) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/80 border border-border hover:border-zinc-700 backdrop-blur-md mb-6 shadow-sm"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-ios-blue to-ios-purple flex items-center justify-center text-white text-[11px] shadow-glow-sm">
                <Trophy className="w-3 h-3" />
              </div>
              <span className="text-xs font-medium text-text-primary tracking-tight">
                Swift Student Challenge <span className="text-ios-blue font-semibold">Distinguished Winner</span>
              </span>
            </motion.div>

            {/* Headline: Punchy introduction establishing cross-platform expertise */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1] mb-6"
            >
              Senior Mobile Engineer{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ios-blue via-blue-400 to-ios-purple">
                Swift & Flutter
              </span>{' '}
              Specialist.
            </motion.h1>

            {/* Sub-headline: T-shaped profile, systems architecture & AI integration */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
              className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl"
            >
              Building tactile, frictionless cross-platform mobile apps for global audiences. Backed by deep systems engineering, local-first cryptographic architectures, and production AI pipelines.
            </motion.p>

            {/* CTAs: "View Projects" and "Contact / Resume" (Touch target >= 44x44px) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="#shipped"
                aria-label="Scroll to View Projects"
                className="h-12 px-6 rounded-xl font-semibold text-sm text-white bg-ios-blue hover:bg-blue-500 shadow-glow-sm hover:shadow-glow-md flex items-center justify-center gap-2 transition-all min-h-[44px] min-w-[44px] cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenContact}
                aria-label="Contact Developer"
                className="h-12 px-5 rounded-xl font-medium text-sm text-text-primary bg-surface hover:bg-surface-hover border border-border hover:border-zinc-600 transition-colors flex items-center justify-center gap-2 min-h-[44px] min-w-[44px]"
              >
                <Mail className="w-4 h-4 text-ios-blue" />
                <span>Contact / Resume</span>
              </motion.button>
            </motion.div>

            {/* Core Capability Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 pt-8 border-t border-border/80 w-full grid grid-cols-3 gap-4"
            >
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight font-mono">
                  100%
                </span>
                <span className="text-xs text-text-secondary mt-0.5">Cross-Platform</span>
                <span className="text-[11px] text-zinc-500">Swift & Flutter</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight font-mono">
                  Apple
                </span>
                <span className="text-xs text-text-secondary mt-0.5">Distinguished</span>
                <span className="text-[11px] text-zinc-500">Swift Challenge</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight font-mono">
                  Zero-Lag
                </span>
                <span className="text-xs text-text-secondary mt-0.5">Tactile UI</span>
                <span className="text-[11px] text-zinc-500">120 FPS ProMotion</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Element "The Algorithmic Weaver" (6 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-6 w-full"
          >
            <AlgorithmicWeaver />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

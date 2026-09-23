import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { craftPillars } from '../data/portfolioData';

export const BragCraftSection: React.FC = () => {
  return (
    <section id="craft" className="bg-brag-dark text-brag-dark-ink py-16 sm:py-24 px-5 sm:px-8 lg:px-10 border-t border-brag-dark-rule relative overflow-hidden">
      <div className="max-w-[var(--max-page)] mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="font-mono text-xs tracking-wider uppercase text-brag-accent mb-3">
            engineering philosophy & technical depth
          </p>
          <h2 className="text-[clamp(36px,5.5vw,80px)] font-bold tracking-tight-brag lowercase leading-[0.95] text-brag-dark-ink max-w-[16ch]">
            the <em className="italic text-brag-accent not-italic">craft.</em>
          </h2>
          <p className="mt-4 text-brag-dark-soft max-w-[54ch] text-sm sm:text-base leading-relaxed">
            True cross-platform excellence is not about lowest common denominators. It is an obsession with 120 FPS frame consistency, local-first data sovereignty, hardware-level security, and zero-bloat primitives.
          </p>
        </div>

        {/* 4 Pillars Grid (Responsive: 1 col on mobile, 2 col on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {craftPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-8 rounded-brag-md bg-brag-dark-elev border border-brag-dark-rule hover:border-brag-accent/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-brag-dark-rule mb-4 font-mono">
                  <span className="text-xl sm:text-2xl font-bold text-brag-accent">
                    .{pillar.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-brag-dark-soft">
                    {pillar.tagline}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-brag-dark-ink tracking-tight mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-brag-dark-soft leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Detail bullet chips */}
              <div className="pt-4 border-t border-brag-dark-rule flex flex-wrap gap-2">
                {pillar.details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-black/60 border border-brag-dark-rule text-zinc-300 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brag-accent" />
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

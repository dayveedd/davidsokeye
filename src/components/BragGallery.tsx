import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types/portfolio';
import { BragProjectCard } from './BragProjectCard';

interface BragGalleryProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const BragGallery: React.FC<BragGalleryProps> = ({
  projects,
  onSelectProject,
  onOpenContact,
}) => {
  return (
    <section id="projects" className="gallery bg-brag-dark text-brag-dark-ink py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-10 relative">
      {/* Subtle top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brag-dark-rule to-transparent" />

      {/* Gallery Head */}
      <div className="gallery-head max-w-[var(--max-page)] mx-auto mb-10 sm:mb-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
        <div>
          <p className="gallery-eyebrow font-mono text-xs tracking-wider uppercase text-brag-accent mb-3">
            seven production builds · cross-platform systems
          </p>
          <h2 className="gallery-title text-[clamp(36px,5.5vw,80px)] leading-[0.95] tracking-tight-brag font-bold m-0 lowercase max-w-[16ch]">
            what senior <em className="italic text-brag-accent not-italic">mobile</em> engineering looks like.
          </h2>
        </div>

        <p className="gallery-note font-mono text-xs leading-relaxed text-brag-dark-soft max-w-[34ch] md:text-right">
          Tap any card to inspect full technical architecture, state machines, offline CRDT sync, and system tradeoffs.
        </p>
      </div>

      {/* Projects Grid: 2 columns matching latent-spaces/brag */}
      <div className="grid max-w-[var(--max-page)] mx-auto grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project) => (
          <BragProjectCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
          />
        ))}

        {/* 8th Card: The Brag Striped CTA Card */}
        <article className="card grid grid-rows-[auto_auto] gap-3 relative group">
          <div
            onClick={onOpenContact}
            className="card-media striped-cta-bg relative aspect-[16/10] sm:aspect-[16/9] rounded-brag-md border border-transparent overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-24px_rgba(255,93,40,0.5)]"
          >
            <div className="relative z-10 font-sans font-[900] text-[clamp(24px,3.2vw,40px)] leading-[0.9] tracking-tighter-brag lowercase text-brag-ink text-center select-none px-4">
              your app here.<br />
              <span className="italic underline underline-offset-4">let's build.</span>
            </div>
          </div>

          <div className="card-cap flex items-center gap-2.5 px-0.5">
            <button
              onClick={onOpenContact}
              className="site-link flex-none w-14 h-8 rounded bg-brag-dark-elev overflow-hidden border border-brag-dark-rule hover:border-brag-accent transition-colors flex items-center justify-center"
              aria-label="Initiate new mobile project"
            >
              <span className="font-mono text-[9px] text-brag-accent font-bold">HIRING</span>
            </button>
            <div className="cap-text flex items-baseline gap-2 flex-1 min-w-0">
              <span className="num font-mono text-xs text-brag-accent font-bold">.08</span>
              <h3 
                onClick={onOpenContact}
                className="card-name text-sm sm:text-base font-semibold tracking-tight text-brag-dark-ink lowercase cursor-pointer hover:text-brag-accent transition-colors truncate"
              >
                full-time / contracts
              </h3>
              <span className="text-xs text-brag-dark-soft truncate hidden sm:inline">
                · global remote (usd)
              </span>
            </div>
            <span className="cap-cat ml-auto font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-brag-accent whitespace-nowrap">
              open for hire
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

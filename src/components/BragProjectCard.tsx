import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, Terminal } from 'lucide-react';
import { Project } from '../types/portfolio';

interface BragProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const BragProjectCard: React.FC<BragProjectCardProps> = ({ project, onSelect }) => {
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  const currentImage = project.images.length > 0
    ? project.images[activeImageIdx] || project.images[0]
    : null;

  const primaryExternalUrl = project.appStoreUrl || project.liveUrl || project.githubUrl;

  return (
    <article className="card grid grid-rows-[auto_auto] gap-3 relative group">
      {/* Media Window */}
      <div 
        onClick={() => onSelect(project)}
        className="card-media relative aspect-[16/10] sm:aspect-[16/9] bg-brag-dark-elev overflow-hidden rounded-brag-md border border-brag-dark-rule transition-all duration-300 group-hover:border-brag-accent group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-24px_rgba(255,93,40,0.3)] cursor-pointer"
      >
        {/* Standard Project with Screenshots (including digital_ocean_uploader with pubdev.png) */}
        {currentImage && !project.hasNoUi && (
          <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
            <img
              src={currentImage}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Subtle gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* If multiple images, show thumbnail dots */}
            {project.images.length > 1 && (
              <div 
                className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeImageIdx === idx ? 'bg-brag-accent w-4' : 'bg-white/40 hover:bg-white/80'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
                <span className="text-[10px] font-mono text-white/70 ml-1">
                  {activeImageIdx + 1}/{project.images.length}
                </span>
              </div>
            )}
          </div>
        )}

        {/* AuraOps: Autonomous Slack Agent with No UI */}
        {project.hasNoUi && (
          <div className="relative w-full h-full bg-[#181210] p-5 flex flex-col justify-between font-mono text-xs select-none">
            <div className="flex items-center justify-between border-b border-brag-dark-rule pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-brag-dark-ink font-bold text-sm">Slack Agent @AuraOps</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
                HEADLESS (NO UI)
              </span>
            </div>

            <div className="py-2.5 space-y-2 text-[11px]">
              <div className="p-2.5 rounded bg-[#100C0A] border border-brag-dark-rule">
                <span className="text-emerald-400">user:</span> "Schedule invoice review & dispatch $450 payment"
              </div>
              <div className="p-2.5 rounded bg-[#201511] border border-brag-accent/30 text-brag-dark-ink">
                <span className="text-brag-accent font-bold">@AuraOps:</span> Requesting Auth0 HITL authorization... <span className="text-emerald-400">Approved ✓</span>
                <div className="text-[10px] text-brag-dark-soft mt-1">
                  → Paystack payment executed · Supabase audit saved · G-Calendar synchronized
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-brag-dark-rule text-[10px] text-brag-dark-soft">
              <span>Slack Bolt · Paystack · Supabase · Auth0</span>
              <span className="text-brag-accent font-bold">100% Autonomous</span>
            </div>
          </div>
        )}

        {/* Hover Inspect Pill */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 text-[10px] font-mono uppercase tracking-wider text-white flex items-center gap-1">
          <span>inspect</span>
          <ArrowUpRight className="w-3 h-3 text-brag-accent" />
        </div>
      </div>

      {/* Card Caption Bar (exact matching latent-spaces/brag styling) */}
      <div className="card-cap flex items-center gap-2.5 px-0.5">
        {/* Tiny Site Thumbnail link */}
        {primaryExternalUrl ? (
          <a
            href={primaryExternalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="site-link flex-none w-14 h-8 rounded bg-brag-dark-elev overflow-hidden border border-brag-dark-rule hover:border-brag-accent transition-colors relative flex items-center justify-center group/btn"
            aria-label={`Open ${project.title} external link`}
          >
            {currentImage ? (
              <img src={currentImage} alt="" className="w-full h-full object-cover object-top" />
            ) : (
              <Terminal className="w-3.5 h-3.5 text-brag-accent" />
            )}
            <span className="absolute top-1 right-1 text-[9px] text-white opacity-0 group-hover/btn:opacity-100 transition-opacity">
              ↗
            </span>
          </a>
        ) : (
          <button
            onClick={() => onSelect(project)}
            className="site-link flex-none w-14 h-8 rounded bg-brag-dark-elev overflow-hidden border border-brag-dark-rule hover:border-brag-accent transition-colors relative flex items-center justify-center group/btn"
            aria-label={`Open ${project.title} details`}
          >
            {currentImage ? (
              <img src={currentImage} alt="" className="w-full h-full object-cover object-top" />
            ) : (
              <Terminal className="w-3.5 h-3.5 text-brag-accent" />
            )}
            <span className="absolute top-1 right-1 text-[9px] text-white opacity-0 group-hover/btn:opacity-100 transition-opacity">
              ↗
            </span>
          </button>
        )}

        {/* Text Info */}
        <div className="cap-text flex items-baseline gap-2 flex-1 min-w-0 flex-wrap">
          <span className="num font-mono text-xs text-brag-accent font-bold">
            {project.number}
          </span>
          <h3 
            onClick={() => onSelect(project)}
            className="card-name text-sm sm:text-base font-semibold tracking-tight text-brag-dark-ink lowercase cursor-pointer hover:text-brag-accent transition-colors truncate"
          >
            {project.title}
          </h3>
          <span className="text-xs text-brag-dark-soft truncate hidden sm:inline">
            · {project.category}
          </span>
        </div>

        {/* Category Badge on Right */}
        <span className="cap-cat ml-auto font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-brag-dark-soft whitespace-nowrap">
          {project.badges[0]?.label || project.category}
        </span>
      </div>
    </article>
  );
};

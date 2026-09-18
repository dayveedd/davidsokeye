import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Terminal, CheckCircle2, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';

interface BragProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const BragProjectModal: React.FC<BragProjectModalProps> = ({ project, onClose }) => {
  const [selectedImgIdx, setSelectedImgIdx] = useState<number>(0);

  useEffect(() => {
    setSelectedImgIdx(0);
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const hasImages = project.images && project.images.length > 0;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-brag-dark border border-brag-dark-rule rounded-brag-lg shadow-2xl overflow-y-auto z-10 flex flex-col my-auto text-brag-dark-ink"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-brag-dark/95 backdrop-blur-xl border-b border-brag-dark-rule">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-brag-accent/15 text-brag-accent font-bold">
                {project.number}
              </span>
              <span className="text-base font-bold tracking-tight lowercase">
                {project.title}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Project Modal"
              className="w-10 h-10 rounded-brag-sm bg-brag-dark-elev hover:bg-black border border-brag-dark-rule flex items-center justify-center text-brag-dark-soft hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Media / Screenshots Gallery */}
          {hasImages && !project.hasNoUi && (
            <div className="relative w-full bg-black/60 border-b border-brag-dark-rule">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-h-[480px] flex items-center justify-center overflow-hidden">
                <img
                  src={project.images[selectedImgIdx]}
                  alt={`${project.title} screenshot ${selectedImgIdx + 1}`}
                  className="w-full h-full object-contain p-2"
                />

                {/* Left/Right Navigation */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImgIdx((prev) => (prev > 0 ? prev - 1 : project.images.length - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setSelectedImgIdx((prev) => (prev < project.images.length - 1 ? prev + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails strip */}
              {project.images.length > 1 && (
                <div className="flex items-center gap-2 p-3 bg-brag-dark-elev/90 border-t border-brag-dark-rule overflow-x-auto">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIdx(idx)}
                      className={`relative flex-none w-16 h-10 rounded overflow-hidden border transition-all ${
                        selectedImgIdx === idx
                          ? 'border-brag-accent ring-2 ring-brag-accent/30'
                          : 'border-brag-dark-rule opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Special Visual for AuraOps: Slack Agent (No UI) */}
          {project.hasNoUi && (
            <div className="p-6 sm:p-8 bg-[#181210] border-b border-brag-dark-rule font-mono text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-brag-dark-rule">
                <span className="text-brag-accent font-bold uppercase tracking-wider text-sm">
                  Headless Slack Agent Architecture
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Zero UI Required
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded bg-black border border-brag-dark-rule">
                  <span className="text-emerald-400 font-bold">Slack Channel:</span> "Hey @AuraOps, book the client sync on Google Calendar and charge the $850 milestone on Paystack"
                </div>
                <div className="p-3 rounded bg-[#221612] border border-brag-accent/30 text-brag-dark-ink">
                  <span className="text-brag-accent font-bold">AuraOps Agent Response:</span>
                  <div className="mt-1 space-y-1 text-zinc-300 text-[11px]">
                    <div>1. Generated Auth0 HITL (Human-In-The-Loop) verification link sent to finance lead</div>
                    <div>2. Auth0 Authorization token confirmed & cryptographic signature verified</div>
                    <div>3. Paystack charge API executed with idempotency key</div>
                    <div>4. Supabase transaction audit record written to PostgreSQL</div>
                    <div>5. Google Calendar event dispatched with automated invite triggers</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modal Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-[900] tracking-tight text-brag-dark-ink lowercase">
                {project.title}
              </h2>
              <p className="text-brag-accent text-sm font-medium mt-1">
                {project.tagline}
              </p>
              <p className="text-brag-dark-soft text-sm mt-3 leading-relaxed">
                <strong className="text-brag-dark-ink">Context:</strong> {project.context}.
                <br />
                <strong className="text-brag-dark-ink">Key Engineering Highlight:</strong> {project.highlight}.
              </p>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-brag-md bg-black border border-brag-dark-rule font-mono text-center">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-brag-dark-soft text-xs">{metric.label}</span>
                    <span className="text-lg font-bold text-brag-accent mt-0.5">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technical Architecture Details */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-brag-accent mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Engineering Architecture & Implementation Tradeoffs
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-brag-dark-soft">
                {project.architectureDetails.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 bg-brag-dark-elev p-3.5 rounded-brag-sm border border-brag-dark-rule leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brag-accent mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-brag-dark-soft mb-2.5">
                Target Technologies & Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-black border border-brag-dark-rule text-xs font-mono text-brag-dark-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Bar */}
            <div className="pt-4 border-t border-brag-dark-rule flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-4 rounded-brag-sm bg-brag-accent hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                  >
                    <span>view live / package</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-4 rounded-brag-sm bg-brag-accent hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                  >
                    <span> app store</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-4 rounded-brag-sm bg-brag-dark-elev hover:bg-black border border-brag-dark-rule text-brag-dark-ink text-xs font-mono flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>repository</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="h-11 px-4 rounded-brag-sm bg-brag-dark-elev hover:bg-black border border-brag-dark-rule text-brag-dark-soft hover:text-white text-xs font-mono transition-colors"
              >
                close inspector
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Copy, Check, Mail, ExternalLink, GraduationCap, Trophy, Briefcase, Code } from 'lucide-react';
import { developerProfile, techSkills } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText(developerProfile.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl max-h-[90vh] bg-surface border border-zinc-700 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-surface/95 backdrop-blur-xl border-b border-border">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-ios-blue/15 border border-ios-blue/30 flex items-center justify-center text-ios-blue font-bold text-xs">
                CV
              </div>
              <span className="text-sm font-bold text-text-primary tracking-tight">
                Curriculum Vitae · Senior Mobile Engineer
              </span>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              aria-label="Close Resume Modal"
              className="w-11 h-11 rounded-lg bg-surface-hover hover:bg-zinc-800 border border-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px]"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
                  Senior Mobile Engineer
                </h2>
                <p className="text-sm text-ios-blue font-medium mt-0.5">
                  Swift (iOS) & Flutter (Cross-Platform) · Systems & AI Architect
                </p>
                <p className="text-xs text-text-secondary mt-2">
                  Targeting Global Remote Roles · Full-Time / High-Impact Contracts
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyEmail}
                  className="h-11 px-3.5 rounded-lg bg-background border border-border hover:border-zinc-600 text-xs font-medium text-text-primary flex items-center gap-1.5 transition-colors min-h-[44px]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Honors & Credibility */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-secondary mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                Honors & Distinctions
              </h3>
              <div className="p-4 rounded-xl bg-background border border-amber-500/20 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">
                    Apple Swift Student Challenge Distinguished Winner
                  </div>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    Recognized by Apple worldwide for "The Algorithmic Weaver", an interactive generative mobile application synthesizing mathematical harmonic curves using Swift, SwiftUI, and Metal shaders.
                  </p>
                </div>
              </div>
            </div>

            {/* Education: Obafemi Awolowo University */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-secondary mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-ios-blue" />
                Education Background
              </h3>
              <div className="p-4 rounded-xl bg-background border border-border flex items-start justify-between">
                <div>
                  <div className="text-sm font-bold text-text-primary">
                    B.Sc. in Computer Science
                  </div>
                  <div className="text-xs text-ios-blue font-medium mt-0.5">
                    Obafemi Awolowo University (OAU)
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    Rigorous foundations in algorithms, distributed computer systems, automata theory, and cryptographic protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary of Experience */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-secondary mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-400" />
                Engineering Track Record
              </h3>
              <div className="space-y-3 text-xs text-text-secondary">
                <div className="p-3.5 rounded-xl bg-background border border-border/80">
                  <div className="flex justify-between font-bold text-text-primary">
                    <span>Lead Mobile Engineer · Shipped Products</span>
                    <span className="text-ios-blue font-mono font-normal">2022 - Present</span>
                  </div>
                  <p className="mt-1.5 leading-relaxed">
                    Shipped and maintained Papyr (AI subscription tracker) and Outside (120 FPS habit education app) serving 50,000+ active users globally with zero-downtime offline CRDT sync.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-background border border-border/80">
                  <div className="flex justify-between font-bold text-text-primary">
                    <span>Systems & Security Engineer · Vido Vault & Web3</span>
                    <span className="text-emerald-400 font-mono font-normal">2021 - 2023</span>
                  </div>
                  <p className="mt-1.5 leading-relaxed">
                    Authored Dart & Web3Auth cryptographic isolation engines, Google Authenticator MFA integration, and on-device hardware biometrics with zero security incidents.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-secondary mb-2.5 flex items-center gap-2">
                <Code className="w-4 h-4 text-zinc-400" />
                Technical Competencies
              </h3>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {['Swift', 'SwiftUI', 'Flutter', 'Dart', 'Combine', 'VisionKit', 'CoreML', 'C++ FFI', 'FastAPI', 'LangGraph', 'Python', 'Redis', 'PostgreSQL', 'Secure Enclave'].map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-background border border-border text-text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <a
                href="mailto:engineer@portfolio.dev?subject=Senior%20Mobile%20Engineer%20Opportunity"
                className="h-11 px-5 rounded-xl bg-ios-blue hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-glow-sm transition-all min-h-[44px]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Directly</span>
              </a>

              <button
                onClick={onClose}
                className="h-11 px-4 rounded-xl bg-background hover:bg-surface border border-border text-text-secondary hover:text-text-primary text-xs font-medium transition-colors min-h-[44px]"
              >
                Close Preview
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

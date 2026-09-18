import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ArrowUp, GraduationCap, Copy, Check } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(developerProfile.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-border bg-background relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent-glow opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 relative z-10">
        
        {/* Main CTA Block */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-border/90 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 shadow-apple-card">
          <div className="max-w-xl">
            <span className="text-xs font-mono text-ios-blue uppercase tracking-wider font-semibold">
              Available For Global Hire
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mt-2">
              Ready to ship elite cross-platform apps?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 leading-relaxed">
              Seeking senior/staff engineering positions and high-impact consulting contracts with innovative teams worldwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenContact}
              className="h-12 px-6 rounded-xl bg-ios-blue hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-glow-sm hover:shadow-glow-md transition-all min-h-[44px] min-w-[44px]"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenResume}
              className="h-12 px-5 rounded-xl bg-background hover:bg-surface-hover border border-border hover:border-zinc-600 text-text-primary text-sm font-medium flex items-center justify-center gap-2 transition-colors min-h-[44px] min-w-[44px]"
            >
              <FileText className="w-4 h-4 text-ios-blue" />
              <span>Review Resume</span>
            </motion.button>
          </div>
        </div>

        {/* Footer Meta Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-border/60">
          
          {/* Left: OAU Academic Background Note (PRD Section E requirement) */}
          <div className="md:col-span-6 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-ios-blue flex-shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Computer Science background from{' '}
                <span className="text-text-primary font-medium">Obafemi Awolowo University</span>.
                Deep theoretical foundation in algorithms, compiler mechanics, operating systems, and distributed networks.
              </p>
            </div>
          </div>

          {/* Right: Social Links via Lucide Icons (PRD Section E requirement) */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-2">
            
            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Developer GitHub Profile"
              className="w-11 h-11 rounded-xl bg-surface hover:bg-surface-hover border border-border hover:border-zinc-600 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px]"
            >
              <Github className="w-4 h-4" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="w-11 h-11 rounded-xl bg-surface hover:bg-surface-hover border border-border hover:border-zinc-600 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px]"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>

            {/* Email mailto */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${developerProfile.contactEmail}`}
              aria-label="Send direct email"
              className="w-11 h-11 rounded-xl bg-surface hover:bg-surface-hover border border-border hover:border-zinc-600 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px]"
            >
              <Mail className="w-4 h-4" />
            </motion.a>

            {/* Copy Email Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyEmail}
              aria-label="Copy engineer contact email address"
              className="h-11 px-3.5 rounded-xl bg-surface hover:bg-surface-hover border border-border hover:border-zinc-600 flex items-center justify-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors min-h-[44px]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="font-mono text-[11px]">{copied ? 'Copied' : developerProfile.contactEmail}</span>
            </motion.button>

            {/* Back to top */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="w-11 h-11 rounded-xl bg-surface hover:bg-surface-hover border border-border hover:border-zinc-600 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px]"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Senior Mobile Engineer. Designed with Apple-esque minimalism.
          </div>
          <div className="flex items-center gap-3">
            <span>Built with React, Vite & Tailwind</span>
            <span>·</span>
            <span>OLED Dark Zinc (#09090B)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, FileText, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-background/80 border-b border-border/80 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#hero" 
          aria-label="Home page"
          className="flex items-center gap-3 group text-left min-h-[44px] focus:outline-none focus:ring-2 focus:ring-ios-blue/50 rounded-lg px-2 -ml-2"
        >
          <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center font-mono font-bold text-sm text-ios-blue group-hover:border-ios-blue/60 group-hover:shadow-glow-sm transition-all">
            
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-text-primary tracking-tight group-hover:text-white transition-colors">
              Senior Mobile Engineer
            </span>
            <span className="text-[11px] text-text-secondary flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open to Global Roles
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/60 border border-border/70 rounded-full px-3 py-1 text-xs text-text-secondary font-medium" aria-label="Main Navigation">
          <a
            href="#shipped"
            className="px-3 py-1.5 rounded-full hover:text-text-primary hover:bg-surface transition-colors min-h-[36px] min-w-[auto]"
          >
            Shipped Products
          </a>
          <a
            href="#mobile-eng"
            className="px-3 py-1.5 rounded-full hover:text-text-primary hover:bg-surface transition-colors min-h-[36px] min-w-[auto]"
          >
            Deep Mobile
          </a>
          <a
            href="#systems-ai"
            className="px-3 py-1.5 rounded-full hover:text-text-primary hover:bg-surface transition-colors min-h-[36px] min-w-[auto]"
          >
            Systems & AI
          </a>
          <a
            href="#skills"
            className="px-3 py-1.5 rounded-full hover:text-text-primary hover:bg-surface transition-colors min-h-[36px] min-w-[auto]"
          >
            Tech Stack
          </a>
        </nav>

        {/* Desktop CTA actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenResume}
            aria-label="View Engineer Resume"
            className="h-10 px-3.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-border hover:border-zinc-600 rounded-lg flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ios-blue"
          >
            <FileText className="w-3.5 h-3.5 text-ios-blue" />
            Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenContact}
            aria-label="Get in Touch"
            className="h-10 px-4 text-xs font-semibold text-white bg-ios-blue hover:bg-blue-500 rounded-lg flex items-center gap-1.5 shadow-glow-sm hover:shadow-glow-md transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="w-11 h-11 rounded-lg bg-surface border border-border flex items-center justify-center text-text-primary focus:outline-none focus:ring-2 focus:ring-ios-blue"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-surface/95 backdrop-blur-2xl px-6 py-5 flex flex-col gap-4 overflow-hidden"
          >
            <nav className="flex flex-col gap-1 text-sm font-medium" aria-label="Mobile Navigation">
              <a
                href="#shipped"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 rounded-lg hover:bg-background/80 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between"
              >
                <span>Tier 1: Shipped Products</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="#mobile-eng"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 rounded-lg hover:bg-background/80 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between"
              >
                <span>Tier 2: Deep Mobile Engineering</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="#systems-ai"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 rounded-lg hover:bg-background/80 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between"
              >
                <span>Tier 3: Systems & AI</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 rounded-lg hover:bg-background/80 text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between"
              >
                <span>Technical Capabilities</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            </nav>

            <div className="pt-2 border-t border-border flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full h-11 px-4 text-sm font-medium text-text-primary bg-background border border-border rounded-lg flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-ios-blue" />
                View Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full h-11 px-4 text-sm font-semibold text-white bg-ios-blue rounded-lg flex items-center justify-center gap-2 shadow-glow-sm"
              >
                <Mail className="w-4 h-4" />
                Contact Directly
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

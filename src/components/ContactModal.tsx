import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-lg bg-surface border border-zinc-700 rounded-2xl shadow-2xl z-10 flex flex-col my-auto overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-surface/95 backdrop-blur-xl border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-ios-blue/15 border border-ios-blue/30 flex items-center justify-center text-ios-blue">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-text-primary tracking-tight">
                Initiate Conversation
              </span>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              aria-label="Close Contact Modal"
              className="w-11 h-11 rounded-lg bg-surface-hover hover:bg-zinc-800 border border-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors min-h-[44px] min-w-[44px]"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            {submitted ? (
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-primary">Inquiry Dispatched</h3>
                <p className="text-xs text-text-secondary">
                  Thank you for reaching out! A direct response will be transmitted to your email within 24 hours.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 h-11 px-5 rounded-xl bg-ios-blue hover:bg-blue-500 text-white text-xs font-semibold"
                >
                  Return to Portfolio
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-background border border-border">
                  <div>
                    <div className="text-xs text-text-secondary">Direct Email</div>
                    <div className="text-sm font-mono font-medium text-text-primary mt-0.5">
                      {developerProfile.contactEmail}
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    aria-label="Copy engineer contact email"
                    className="h-11 px-3.5 rounded-lg bg-surface hover:bg-surface-hover border border-border text-xs font-medium text-text-primary flex items-center gap-1.5 transition-colors min-h-[44px]"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-text-secondary mb-1.5">
                      Your Name / Company
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins (Engineering VP at FinTech)"
                      className="w-full h-11 px-3.5 rounded-xl bg-background border border-border focus:border-ios-blue focus:ring-1 focus:ring-ios-blue text-sm text-text-primary placeholder:text-zinc-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-text-secondary mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full h-11 px-3.5 rounded-xl bg-background border border-border focus:border-ios-blue focus:ring-1 focus:ring-ios-blue text-sm text-text-primary placeholder:text-zinc-600 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-text-secondary mb-1.5">
                      Project Details / Role Scope
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about the role, technical challenges, and timeline..."
                      className="w-full p-3.5 rounded-xl bg-background border border-border focus:border-ios-blue focus:ring-1 focus:ring-ios-blue text-sm text-text-primary placeholder:text-zinc-600 outline-none transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full h-12 rounded-xl bg-ios-blue hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-glow-sm hover:shadow-glow-md transition-all min-h-[44px]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

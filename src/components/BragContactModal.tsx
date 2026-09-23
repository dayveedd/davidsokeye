import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, Check, Send, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface BragContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BragContactModal: React.FC<BragContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setErrorMsg(null);
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

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setErrorMsg(null);
    setSuccessNotice(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${developerProfile.contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          _subject: `New Portfolio Enquiry from ${name.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (data.success === 'true' || response.ok) {
        setSubmitted(true);
        setSuccessNotice(
          `Your enquiry has been dispatched directly to ${developerProfile.contactEmail}.`
        );
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setSubmitted(true);
        setSuccessNotice(
          `Enquiry received! FormSubmit sent a 1-time activation email to ${developerProfile.contactEmail}. Please confirm it once to unlock immediate inbox routing.`
        );
      } else {
        throw new Error(data.message || 'Transmission failed.');
      }
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setErrorMsg(
        'Unable to send via background API. You can send it directly through your mail app using the button below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:${developerProfile.contactEmail}?subject=${encodeURIComponent(
    `Portfolio Enquiry from ${name || 'Prospective Partner'}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-brag-dark border border-brag-dark-rule rounded-brag-lg shadow-2xl z-10 flex flex-col my-auto overflow-hidden text-brag-dark-ink"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-brag-dark/95 backdrop-blur-xl border-b border-brag-dark-rule">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-brag-accent font-bold uppercase tracking-wider">
                /contact
              </span>
              <span className="text-sm font-bold tracking-tight text-brag-dark-ink">
                Initiate Inquiry · David Sokeye
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Contact Modal"
              className="w-9 h-9 rounded-brag-sm bg-brag-dark-elev hover:bg-black border border-brag-dark-rule flex items-center justify-center text-brag-dark-soft hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-5">
            {submitted ? (
              <div className="p-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_24px_rgba(16,185,129,0.3)]">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brag-dark-ink">Enquiry Dispatched!</h3>
                <p className="text-xs sm:text-sm text-brag-dark-soft leading-relaxed max-w-md mx-auto">
                  {successNotice || `Thank you! David Sokeye will follow up directly at ${email} within 24 hours.`}
                </p>

                <div className="p-3.5 rounded-brag-sm bg-black border border-brag-dark-rule text-left font-mono text-xs text-zinc-400 space-y-1 mt-2">
                  <div className="text-brag-accent font-semibold">Transmission Summary:</div>
                  <div><strong className="text-zinc-300">Recipient:</strong> {developerProfile.contactEmail}</div>
                  <div><strong className="text-zinc-300">From:</strong> {name} ({email})</div>
                </div>

                <div className="pt-2 flex gap-2 justify-center">
                  <button
                    onClick={handleReset}
                    className="h-11 px-6 rounded-brag-sm bg-brag-accent hover:bg-sky-400 text-white font-mono text-xs uppercase font-bold transition-all shadow-md active:scale-95"
                  >
                    return to portfolio
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Direct Mail Banner with Quick Copy */}
                <div className="flex items-center justify-between p-3.5 rounded-brag-sm bg-black border border-brag-dark-rule">
                  <div className="min-w-0 pr-2">
                    <div className="text-[11px] font-mono uppercase text-brag-dark-soft">Direct Mail</div>
                    <div className="text-sm font-mono font-bold text-brag-dark-ink mt-0.5 truncate">
                      {developerProfile.contactEmail}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="h-10 px-3.5 rounded-brag-sm bg-brag-dark-elev hover:bg-zinc-800 border border-brag-dark-rule text-xs font-mono font-medium text-brag-dark-ink flex items-center gap-1.5 transition-colors flex-shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'copied!' : 'copy'}</span>
                  </button>
                </div>

                {/* Error Banner with Mailto Fallback */}
                {errorMsg && (
                  <div className="p-3 rounded-brag-sm bg-red-950/40 border border-red-500/40 text-xs text-red-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brag-accent underline underline-offset-2 hover:text-white"
                    >
                      <span>Open in Email App with prefilled details</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {/* Main Enquiry Form */}
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label htmlFor="contact-name" className="block text-brag-dark-soft mb-1.5 uppercase tracking-wider text-[10px]">
                      Your Name / Company *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Vance (VP Engineering)"
                      disabled={isSubmitting}
                      className="w-full h-11 px-3.5 rounded-brag-sm bg-black border border-brag-dark-rule focus:border-brag-accent text-sm text-brag-dark-ink placeholder:text-zinc-600 outline-none transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-brag-dark-soft mb-1.5 uppercase tracking-wider text-[10px]">
                      Your Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      disabled={isSubmitting}
                      className="w-full h-11 px-3.5 rounded-brag-sm bg-black border border-brag-dark-rule focus:border-brag-accent text-sm text-brag-dark-ink placeholder:text-zinc-600 outline-none transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-brag-dark-soft mb-1.5 uppercase tracking-wider text-[10px]">
                      Project Scope / Role Details *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe the cross-platform mobile challenges, role, and timeline..."
                      disabled={isSubmitting}
                      className="w-full p-3.5 rounded-brag-sm bg-black border border-brag-dark-rule focus:border-brag-accent text-sm text-brag-dark-ink placeholder:text-zinc-600 outline-none transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-brag-sm bg-brag-accent hover:bg-sky-400 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-98 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>transmitting enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>dispatch message</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ArrowUp } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface BragOutroProps {
  onOpenContact: () => void;
}

export const BragOutro: React.FC<BragOutroProps> = ({ onOpenContact }) => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="outro bg-brag-hero text-brag-ink py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-10 relative w-full max-w-full overflow-hidden border-t border-brag-dark-rule">
      <div className="outro-inner max-w-[var(--max-page)] mx-auto w-full grid gap-10 sm:gap-14 lg:gap-16">
        
        {/* Outro Headline */}
        <h2 className="outro-headline text-[clamp(38px,8.5vw,110px)] sm:text-[clamp(50px,10vw,135px)] font-[900] leading-[0.92] tracking-tighter-brag lowercase m-0 max-w-[14ch] text-brag-ink break-words">
          now go <em className="italic bg-black/40 text-brag-accent border border-brag-accent/30 px-[0.1em] py-[0.02em] inline-block rounded-sm not-italic">ship.</em>
        </h2>

        {/* Outro Grid */}
        <div className="outro-grid grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 items-start w-full max-w-full">
          <div className="space-y-6 w-full max-w-full min-w-0">
            <p className="outro-meta text-[clamp(15px,1.6vw,22px)] leading-[1.3] font-medium tracking-tight text-brag-ink-soft max-w-[44ch]">
              Available for mobile software engineering roles and high-impact distributed architecture contracts.
            </p>

            {/* Terminal Contact Snippet */}
            <div className="install-stack grid gap-2 justify-items-start max-w-full w-full">
              <span className="install-label font-mono text-[11px] tracking-wider uppercase text-brag-ink-soft">
                quick terminal dispatch
              </span>
              <pre className="install font-mono bg-black text-brag-tint p-3.5 sm:p-4 rounded-brag-md text-xs sm:text-sm leading-relaxed relative w-full sm:w-auto shadow-md border border-brag-dark-rule max-w-full overflow-hidden">
                <span className="copy-wrap absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
                  <button
                    onClick={() => copyToClipboard(`mailto:${developerProfile.contactEmail}`, 'email-cmd')}
                    type="button"
                    className={`px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider rounded-brag-sm transition-all ${
                      copiedCmd === 'email-cmd'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'bg-white/10 hover:bg-white/20 text-brag-tint'
                    }`}
                  >
                    {copiedCmd === 'email-cmd' ? 'copied!' : 'copy'}
                  </button>
                </span>
                <code className="block pr-16 overflow-x-auto text-[11px] sm:text-xs">
                  <span className="prompt text-brag-accent mr-2">$</span>mailto:{developerProfile.contactEmail}
                </code>
              </pre>
            </div>
          </div>

          {/* Action Links & Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 font-mono text-xs sm:text-sm w-full sm:w-auto">
            <button
              onClick={onOpenContact}
              className="h-11 sm:h-12 px-6 rounded-brag-sm bg-brag-accent text-white font-bold uppercase tracking-wider hover:bg-sky-400 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>send inquiry</span>
            </button>

            <a
              href={developerProfile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 sm:h-12 px-6 rounded-brag-sm bg-black/40 hover:bg-black text-brag-tint transition-all flex items-center justify-center gap-2 border border-brag-dark-rule font-bold uppercase tracking-wider active:scale-95"
            >
              <Github className="w-4 h-4" />
              <span>github profile</span>
            </a>

            <a
              href={developerProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 sm:h-12 px-6 rounded-brag-sm bg-black/40 hover:bg-black text-brag-tint transition-all flex items-center justify-center gap-2 border border-brag-dark-rule font-bold uppercase tracking-wider active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin</span>
            </a>
          </div>
        </div>

        {/* Colophon */}
        <div className="colophon font-mono text-xs text-brag-ink-soft flex justify-between items-center gap-4 flex-wrap pt-6 border-t border-brag-dark-rule">
          <div>
            <span className="font-bold text-brag-ink">/davidsokeye</span> · David Sokeye · Mobile Software Engineer
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span>swift & flutter specialist</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-brag-ink font-bold hover:text-brag-accent transition-colors"
            >
              <span>top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

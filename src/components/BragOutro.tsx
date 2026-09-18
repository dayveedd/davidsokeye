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
    <footer id="contact" className="outro bg-brag-orange text-brag-ink py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-10 relative">
      <div className="outro-inner max-w-[var(--max-page)] mx-auto w-full grid gap-12 lg:gap-16">
        
        {/* Outro Headline */}
        <h2 className="outro-headline text-[clamp(48px,10vw,140px)] font-[900] leading-[0.88] tracking-tighter-brag lowercase m-0 max-w-[14ch]">
          now go <em className="italic bg-brag-ink text-brag-orange px-[0.08em] py-[0.02em] inline-block rounded-sm not-italic">ship.</em>
        </h2>

        {/* Outro Grid */}
        <div className="outro-grid grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 items-start">
          <div className="space-y-6">
            <p className="outro-meta text-[clamp(18px,1.8vw,26px)] leading-[1.25] font-medium tracking-tight text-brag-ink-soft max-w-[42ch]">
              Available for senior cross-platform mobile engineering roles and high-impact distributed architecture contracts (USD).
            </p>

            {/* Terminal Contact Snippet */}
            <div className="install-stack grid gap-2 justify-items-start max-w-full">
              <span className="install-label font-mono text-[11px] tracking-wider uppercase text-brag-ink-soft">
                quick terminal dispatch
              </span>
              <pre className="install font-mono bg-brag-ink text-brag-tint p-4 rounded-brag-md text-xs sm:text-sm leading-relaxed relative w-full sm:w-auto shadow-md">
                <span className="copy-wrap absolute top-3 right-3">
                  <button
                    onClick={() => copyToClipboard(`mailto:${developerProfile.contactEmail}`, 'email-cmd')}
                    type="button"
                    className={`px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider rounded-brag-sm transition-all ${
                      copiedCmd === 'email-cmd'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'bg-white/10 hover:bg-white/20 text-brag-tint'
                    }`}
                  >
                    {copiedCmd === 'email-cmd' ? 'copied!' : 'copy'}
                  </button>
                </span>
                <code className="block pr-16 overflow-x-auto">
                  <span className="prompt text-brag-orange mr-2">$</span>mailto:{developerProfile.contactEmail}
                </code>
              </pre>
            </div>
          </div>

          {/* Action Links & Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 font-mono text-sm">
            <button
              onClick={onOpenContact}
              className="h-12 px-6 rounded-brag-sm bg-brag-ink text-brag-tint font-bold uppercase tracking-wider hover:bg-black transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
            >
              <Mail className="w-4 h-4 text-brag-orange" />
              <span>send inquiry</span>
            </button>

            <a
              href={developerProfile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-brag-sm bg-brag-ink/10 hover:bg-brag-ink hover:text-brag-tint transition-all flex items-center justify-center gap-2 border border-brag-ink/20 font-bold uppercase tracking-wider active:scale-95"
            >
              <Github className="w-4 h-4" />
              <span>github profile</span>
            </a>

            <a
              href={developerProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-brag-sm bg-brag-ink/10 hover:bg-brag-ink hover:text-brag-tint transition-all flex items-center justify-center gap-2 border border-brag-ink/20 font-bold uppercase tracking-wider active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedin</span>
            </a>
          </div>
        </div>

        {/* Colophon */}
        <div className="colophon font-mono text-xs text-brag-ink-soft flex justify-between items-center gap-4 flex-wrap pt-6 border-t border-brag-ink/20">
          <div>
            <span className="font-bold text-brag-ink">/davidsokeye</span> · David Sokeye · Senior Mobile Engineer
          </div>

          <div className="flex items-center gap-6">
            <span>swift & flutter specialist</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-brag-ink font-bold hover:underline"
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

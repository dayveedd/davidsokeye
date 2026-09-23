import React, { useRef, useState, useEffect } from 'react';
import { developerProfile } from '../data/portfolioData';

interface BragHeaderProps {
  onOpenContact: () => void;
}

export const BragHeader: React.FC<BragHeaderProps> = ({ onOpenContact }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <header className="hero min-h-screen bg-brag-hero text-brag-ink grid grid-rows-[auto_1fr_auto] p-4 sm:p-8 lg:p-10 gap-8 lg:gap-14 relative w-full max-w-full overflow-hidden">
      {/* Topbar */}
      <div className="topbar flex items-center justify-between gap-4 font-mono text-xs sm:text-sm tracking-tight z-10 w-full max-w-full flex-wrap">
        <div className="flex items-center gap-2">
          <span className="mark font-bold text-sm sm:text-base tracking-tight text-brag-ink">/davidsokeye</span>
          <span className="hidden sm:inline-block text-[11px] px-2.5 py-0.5 rounded-full bg-black/60 text-brag-accent border border-brag-accent/30 font-bold uppercase tracking-wider font-mono">
            Mobile Software Engineer · WWDC26 Winner
          </span>
        </div>
        <nav className="flex items-center gap-3 sm:gap-6 font-mono text-xs sm:text-sm" aria-label="primary">
          <a href="#craft" className="opacity-80 hover:opacity-100 hover:text-brag-accent transition-all">
            craft
          </a>
          <a href="#projects" className="opacity-80 hover:opacity-100 hover:text-brag-accent transition-all">
            projects
          </a>
          <a href="#package" className="opacity-80 hover:opacity-100 hover:text-brag-accent transition-all">
            package
          </a>
          <button
            onClick={onOpenContact}
            className="opacity-80 hover:opacity-100 hover:text-brag-accent transition-all font-mono text-inherit bg-transparent p-0 border-0"
          >
            contact
          </button>
          <a
            href={developerProfile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 hover:text-brag-accent transition-all"
          >
            github
          </a>
        </nav>
      </div>

      {/* Hero Main: Headline + Floating Video Screen */}
      <div className="hero-main self-center max-w-[var(--max-page)] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_clamp(240px,24vw,340px)] gap-8 lg:gap-14 items-center">
        
        {/* Left: Punchy Typography */}
        <div className="hero-body min-w-0 max-w-full">
          <h1 className="hero-headline text-[clamp(28px,5.8vw,74px)] sm:text-[clamp(36px,6.5vw,88px)] font-[900] leading-[0.94] tracking-tighter-brag lowercase m-0 text-brag-ink select-none break-words max-w-full">
            <strong className="font-[900] text-brag-ink block not-italic">david sokeye.</strong>
            native feel. <span className="emph italic bg-black/40 text-brag-accent border border-brag-accent/30 px-[0.1em] py-[0.02em] inline-block rounded-sm not-italic">cross-platform scale.</span>
          </h1>

          <p className="hero-sub mt-4 sm:mt-6 max-w-[48ch] text-[clamp(14px,1.5vw,19px)] leading-[1.35] tracking-tight font-medium text-brag-ink-soft">
            <strong className="text-brag-ink font-semibold">Mobile Software Engineer</strong>, WWDC26 <strong className="text-brag-ink font-semibold">Distinguished Winner</strong>. I build high-performance iOS and Android applications with offline-first architectures, autonomous AI integrations, and local-first cryptography—shipping cross-platform apps with zero performance compromises.
          </p>
        </div>

        {/* Right: Floating 9:16 Video Mockup (rotate only on desktop, stable on mobile) */}
        <aside
          className="hero-video relative aspect-[9/16] w-full max-w-[260px] sm:max-w-[280px] lg:max-w-none mx-auto lg:mx-0 rounded-brag-md bg-black text-brag-tint rotate-0 lg:rotate-[2.5deg] shadow-[0_24px_70px_-20px_rgba(0,0,0,0.8)] overflow-hidden justify-self-center lg:justify-self-end scanline-overlay transition-transform duration-300 hover:rotate-0"
          aria-label="The Algorithmic Weaver Video Demo"
        >
          {/* Real video recording provided by user */}
          <video
            ref={videoRef}
            className="hero-video-media absolute inset-0 w-full h-full object-cover"
            src="/assets/images/algorithmic-weaver.mov"
            poster="/assets/images/algorithmic-weaver.jpg"
            muted={isMuted}
            loop
            playsInline
            preload="auto"
          />

          {/* Top HUD */}
          <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-center font-mono text-[10px] tracking-wider uppercase text-brag-tint/80 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
            <span className="flex items-center gap-1.5 text-brag-accent font-bold">
              <span className="w-2 h-2 rounded-full bg-brag-accent animate-ping" />
              REC
            </span>
            <span>Algorithmic Weaver</span>
          </div>

          {/* Bottom Video Controls */}
          <div className="hero-controls absolute right-3 bottom-3 z-20 flex items-center gap-2">
            <button
              onClick={togglePlayback}
              type="button"
              aria-label={isPlaying ? 'pause video' : 'play video'}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-md text-brag-tint border border-white/20 hover:bg-black transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              {isPlaying ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMute}
              type="button"
              aria-label={isMuted ? 'unmute video' : 'mute video'}
              className="h-9 px-3.5 flex items-center gap-2 rounded-full bg-black/80 backdrop-blur-md text-brag-tint border border-white/20 font-mono text-[11px] uppercase tracking-wider hover:bg-black transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              {isMuted ? (
                <>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 4V5L7 9H3zm13.59 3l2.7-2.7-1.41-1.42L15.17 10.6 12.46 7.88l-1.41 1.41 2.71 2.71-2.71 2.71 1.41 1.41 2.71-2.7 2.71 2.7 1.41-1.41-2.7-2.7z" />
                  </svg>
                  <span>tap for sound</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-brag-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 4V5L7 9H3zm10.5 3a4.5 4.5 0 00-2.5-4.03v8.05A4.5 4.5 0 0013.5 12zm-2.5-9v2.06A7 7 0 0117 12a7 7 0 01-6 6.92V21A9 9 0 0019 12 9 9 0 0011 3z" />
                  </svg>
                  <span className="text-brag-accent font-bold">sound on</span>
                </>
              )}
            </button>
          </div>
        </aside>

      </div>

      {/* Hero Foot: Terminal Command Stack + Meta note */}
      <div className="hero-foot grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-4 sm:gap-6 items-end z-10 pt-4 border-t border-brag-dark-rule w-full max-w-full">
        <div className="install-stack grid gap-2 justify-items-start min-w-0 max-w-full w-full">
          <span className="install-label font-mono text-[11px] tracking-wider uppercase text-brag-ink-soft">
            open-source flutter package
          </span>
          <pre className="install font-mono bg-black text-brag-tint p-3.5 sm:p-5 rounded-brag-md text-xs sm:text-sm leading-relaxed relative max-w-full w-full sm:w-auto shadow-md border border-brag-dark-rule">
            <span className="copy-wrap absolute top-2.5 right-2.5 sm:top-3 sm:right-3">
              <button
                onClick={() => copyToClipboard('flutter pub add digital_ocean_uploader', 'cmd1')}
                type="button"
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider rounded-brag-sm transition-all ${
                  copiedCmd === 'cmd1'
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-white/10 hover:bg-white/20 text-brag-tint'
                }`}
              >
                {copiedCmd === 'cmd1' ? 'copied!' : 'copy'}
              </button>
            </span>
            <code className="block pr-16 overflow-x-auto text-[11px] sm:text-xs">
              <span className="prompt text-brag-accent mr-2">$</span>flutter pub add digital_ocean_uploader
            </code>
          </pre>
        </div>

        <div className="hero-meta font-mono text-xs text-brag-ink-soft md:text-right max-w-[36ch] justify-self-start md:justify-self-end leading-relaxed">
          <span className="dot inline-block w-2 h-2 rounded-full bg-brag-accent mr-1.5 align-middle animate-pulse" />
          wwdc26 distinguished winner · mobile software engineer · open for remote roles
        </div>
      </div>
    </header>
  );
};

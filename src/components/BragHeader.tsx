import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        // Autoplay may be restricted if unmuted, muted is default
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
    <header className="hero min-h-screen bg-brag-orange text-brag-ink grid grid-rows-[auto_1fr_auto] p-5 sm:p-8 lg:p-10 gap-10 lg:gap-16 relative overflow-hidden">
      {/* Topbar */}
      <div className="topbar flex items-baseline justify-between gap-6 font-mono text-xs sm:text-sm tracking-tight z-10">
        <div className="flex items-center gap-2">
          <span className="mark font-bold text-sm sm:text-base tracking-tight">/davidsokeye</span>
          <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-brag-ink text-brag-orange font-bold uppercase tracking-wider">
            Distinguished Winner
          </span>
        </div>
        <nav className="flex gap-4 sm:gap-6 font-mono text-xs sm:text-sm" aria-label="primary">
          <a href="#projects" className="opacity-80 hover:opacity-100 transition-opacity">
            projects
          </a>
          <a href="#package" className="opacity-80 hover:opacity-100 transition-opacity">
            package
          </a>
          <button
            onClick={onOpenContact}
            className="opacity-80 hover:opacity-100 transition-opacity font-mono text-inherit bg-transparent p-0 border-0"
          >
            contact
          </button>
          <a
            href={developerProfile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            github
          </a>
        </nav>
      </div>

      {/* Hero Main: Headline + Floating Video Screen */}
      <div className="hero-main self-center max-w-[var(--max-page)] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_clamp(240px,24vw,340px)] gap-8 lg:gap-16 items-center">
        
        {/* Left: Punchy Typography */}
        <div className="hero-body min-w-0">
          <h1 className="hero-headline text-[clamp(48px,10vw,140px)] font-[900] leading-[0.88] tracking-tighter-brag lowercase m-0 text-brag-ink select-none">
            <strong className="font-[900] text-brag-ink block not-italic">David Sokeye.</strong>
            now <span className="emph italic bg-brag-ink text-brag-orange px-[0.08em] py-[0.02em] inline-block rounded-sm">ship it.</span>
          </h1>

          <p className="hero-sub mt-6 sm:mt-8 max-w-[44ch] text-[clamp(18px,2vw,28px)] leading-[1.2] tracking-tight font-medium text-brag-ink-soft">
            Senior Cross-Platform Mobile Engineer & Apple Swift Student Challenge <strong className="text-brag-ink font-semibold">Distinguished Winner</strong>. Crafting tactile iOS & Flutter apps, low-latency systems, and autonomous agent backends.
          </p>
        </div>

        {/* Right: Floating Tilted 9:16 Video Mockup */}
        <aside
          className="hero-video relative aspect-[9/16] w-full max-w-[280px] lg:max-w-none mx-auto lg:mx-0 rounded-brag-md bg-brag-ink text-brag-tint lg:rotate-[2.5deg] shadow-[0_30px_80px_-20px_rgba(27,13,6,0.5)] overflow-hidden justify-self-end scanline-overlay transition-transform duration-300 hover:rotate-0"
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
          <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-center font-mono text-[10px] tracking-wider uppercase text-brag-tint/80 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
            <span className="flex items-center gap-1.5 text-brag-orange font-bold">
              <span className="w-2 h-2 rounded-full bg-brag-orange animate-ping" />
              REC
            </span>
            <span>Algorithmic Weaver</span>
          </div>

          {/* Bottom Video Controls (Play/Pause & Sound Toggle matching brag) */}
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
                  <svg className="w-3.5 h-3.5 text-brag-orange" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 4V5L7 9H3zm10.5 3a4.5 4.5 0 00-2.5-4.03v8.05A4.5 4.5 0 0013.5 12zm-2.5-9v2.06A7 7 0 0117 12a7 7 0 01-6 6.92V21A9 9 0 0019 12 9 9 0 0011 3z" />
                  </svg>
                  <span className="text-brag-orange font-bold">sound on</span>
                </>
              )}
            </button>
          </div>
        </aside>

      </div>

      {/* Hero Foot: Terminal Command Stack + Meta note (exact brag style) */}
      <div className="hero-foot grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-6 items-end z-10 pt-4 border-t border-brag-ink/20">
        <div className="install-stack grid gap-2 justify-items-start min-w-0 max-w-full">
          <span className="install-label font-mono text-[11px] tracking-wider uppercase text-brag-ink-soft">
            open-source flutter package
          </span>
          <pre className="install font-mono bg-brag-ink text-brag-tint p-4 sm:p-5 rounded-brag-md text-xs sm:text-sm leading-relaxed relative max-w-full w-full sm:w-auto shadow-md">
            <span className="copy-wrap absolute top-3 right-3">
              <button
                onClick={() => copyToClipboard('flutter pub add digital_ocean_uploader', 'cmd1')}
                type="button"
                className={`px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider rounded-brag-sm transition-all ${
                  copiedCmd === 'cmd1'
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-white/10 hover:bg-white/20 text-brag-tint'
                }`}
              >
                {copiedCmd === 'cmd1' ? 'copied!' : 'copy'}
              </button>
            </span>
            <code className="block pr-16 overflow-x-auto">
              <span className="prompt text-brag-orange mr-2">$</span>flutter pub add digital_ocean_uploader
            </code>
          </pre>
        </div>

        <div className="hero-meta font-mono text-xs text-brag-ink-soft md:text-right max-w-[36ch] justify-self-start md:justify-self-end leading-relaxed">
          <span className="dot inline-block w-2 h-2 rounded-full bg-brag-ink mr-1.5 align-middle animate-pulse" />
          apple swift student challenge distinguished winner · open for remote roles & consulting (usd)
        </div>
      </div>
    </header>
  );
};

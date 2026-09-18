import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Award, RotateCcw, Sliders, Smartphone, CheckCircle2 } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface AlgorithmicWeaverProps {
  onOpenDetails?: () => void;
}

export const AlgorithmicWeaver: React.FC<AlgorithmicWeaverProps> = ({ onOpenDetails }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const [videoError, setVideoError] = useState(false);
  const [activeMode, setActiveMode] = useState<'interactive' | 'video'>('interactive');
  const [pointCount, setPointCount] = useState<number>(4);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const mousePosRef = useRef({ x: 0.5, y: 0.5 });

  // Interactive Generative Algorithmic Weaver Canvas
  useEffect(() => {
    if (prefersReducedMotion || activeMode !== 'interactive') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      t += 0.015;
      const width = canvas.getBoundingClientRect().width;
      const height = canvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, width, height);

      // Background subtle gradient grid
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw subtle glowing coordinate guides
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Number of wave ribbons
      const ribbons = 22;
      const mouseInfluenceX = (mousePosRef.current.x - 0.5) * 40;
      const mouseInfluenceY = (mousePosRef.current.y - 0.5) * 40;

      for (let r = 0; r < ribbons; r++) {
        const progress = r / ribbons;
        // Shift between iOS Blue (#0A84FF) and soft purple (#BF5AF2)
        const alpha = 0.25 + Math.sin(t + progress * Math.PI) * 0.15;
        const color = r % 2 === 0
          ? `rgba(10, 132, 255, ${alpha})`
          : `rgba(191, 90, 242, ${alpha * 0.9})`;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.25;

        for (let x = 0; x <= width; x += 6) {
          const normX = (x / width) * Math.PI * 2;
          // Harmonic wave equation simulating algorithmic thread weaving
          const wave1 = Math.sin(normX * 1.5 + t + progress * 2.2) * (38 + progress * 15);
          const wave2 = Math.cos(normX * 2.2 - t * 0.8 + progress * 3) * (20 + mouseInfluenceY);
          const envelope = Math.sin((x / width) * Math.PI); // Pin at edges

          const y = centerY + (wave1 + wave2 + mouseInfluenceX * Math.sin(normX)) * envelope;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw mathematical anchor nodes
      const anchorSteps = 5;
      for (let a = 1; a < anchorSteps; a++) {
        const ax = (width / anchorSteps) * a;
        const normAx = (ax / width) * Math.PI * 2;
        const ay = centerY + Math.sin(normAx * 1.5 + t) * 35 * Math.sin((ax / width) * Math.PI);

        ctx.fillStyle = '#0A84FF';
        ctx.beginPath();
        ctx.arc(ax, ay, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(10, 132, 255, 0.4)';
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion, activeMode, pointCount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mousePosRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mousePosRef.current = { x: 0.5, y: 0.5 };
      }}
      className="relative w-full rounded-2xl border border-border/90 bg-surface/80 overflow-hidden shadow-apple-card backdrop-blur-xl group transition-all duration-300 hover:border-zinc-700"
    >
      {/* Top Header / Apple Credibility Tag */}
      <div className="relative z-20 flex items-center justify-between px-4 py-3 border-b border-border/80 bg-background/50 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-ios-blue to-ios-purple flex items-center justify-center text-white shadow-glow-sm">
            <Award className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-text-primary tracking-tight flex items-center gap-1.5">
              The Algorithmic Weaver
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-ios-blue/15 text-ios-blue border border-ios-blue/30">
                WWDC Winner
              </span>
            </span>
          </div>
        </div>

        {/* Mode Switcher Pill */}
        <div className="flex items-center gap-1 bg-surface border border-border rounded-full p-0.5 text-[11px]">
          <button
            onClick={() => setActiveMode('interactive')}
            className={`px-2.5 py-1 rounded-full font-medium transition-all ${
              activeMode === 'interactive'
                ? 'bg-ios-blue text-white shadow-glow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Interactive
          </button>
          <button
            onClick={() => setActiveMode('video')}
            className={`px-2.5 py-1 rounded-full font-medium transition-all ${
              activeMode === 'video'
                ? 'bg-ios-blue text-white shadow-glow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Video
          </button>
        </div>
      </div>

      {/* Main Visual Frame */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center overflow-hidden bg-background">
        {/* Radial Ambient Glow */}
        <div className="absolute inset-0 bg-accent-glow opacity-80 pointer-events-none" />

        {/* MODE 1: Interactive Canvas */}
        {activeMode === 'interactive' && !prefersReducedMotion && (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-crosshair z-10"
          />
        )}

        {/* MODE 2: Video Player with Safari autoPlay / playsInline requirements */}
        {activeMode === 'video' && !videoError && !prefersReducedMotion && (
          <video
            ref={videoRef}
            src="/assets/media/algorithmic-weaver.mp4"
            autoPlay
            playsInline
            muted
            loop
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        )}

        {/* FALLBACK: Static Vector / WebP Mockup (if video fails, reduce motion, or active fallback) */}
        {(videoError || prefersReducedMotion || activeMode === 'video') && (
          <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-6 text-center select-none">
            <svg
              className="w-full h-full max-h-56 opacity-85"
              viewBox="0 0 600 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#BF5AF2" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0A84FF" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <path
                d="M 20 150 C 120 40, 220 260, 300 150 C 380 40, 480 260, 580 150"
                stroke="url(#waveGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 20 150 C 140 80, 200 220, 300 150 C 400 80, 460 220, 580 150"
                stroke="#0A84FF"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 20 150 C 100 10, 240 290, 300 150 C 360 10, 500 290, 580 150"
                stroke="#BF5AF2"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Nodes */}
              <circle cx="150" cy="110" r="4" fill="#0A84FF" />
              <circle cx="300" cy="150" r="5" fill="#FAFAFA" />
              <circle cx="450" cy="190" r="4" fill="#BF5AF2" />
            </svg>
          </div>
        )}

        {/* Overlay HUD / Telemetry info */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-[11px] font-mono text-text-secondary bg-surface/90 border border-border/80 px-3 py-2 rounded-xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ios-blue animate-ping" />
            <span className="text-text-primary font-medium">Harmonic Lattice Engine</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-text-secondary">
            <span>CoreAnimation / Metal</span>
            <span>•</span>
            <span>Swift Student Challenge</span>
          </div>
          <div className="text-ios-blue font-semibold">
            {activeMode === 'interactive' ? 'Touch / Hover to Warp' : 'Continuous Loop'}
          </div>
        </div>
      </div>

      {/* Card Caption / Highlights */}
      <div className="p-4 bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border/80 text-xs">
        <div className="flex items-center gap-2 text-text-secondary">
          <Sparkles className="w-4 h-4 text-ios-blue flex-shrink-0" />
          <span>Recognized by Apple VP of Developer Relations for tactile generative engineering.</span>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto font-medium text-text-primary">
          <span className="px-2 py-0.5 rounded bg-surface-hover border border-border text-[11px]">
            Swift 5.10
          </span>
          <span className="px-2 py-0.5 rounded bg-surface-hover border border-border text-[11px]">
            SwiftUI
          </span>
          <span className="px-2 py-0.5 rounded bg-surface-hover border border-border text-[11px]">
            Metal
          </span>
        </div>
      </div>
    </div>
  );
};

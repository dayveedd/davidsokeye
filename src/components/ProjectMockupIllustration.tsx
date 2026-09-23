import React from 'react';
import { 
  Receipt, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  KeyRound, 
  Cpu, 
  Network, 
  CheckCircle2, 
  Activity, 
  Smartphone,
  Scan,
  TrendingDown,
  Lock,
  Zap,
  Bot
} from 'lucide-react';

interface ProjectMockupIllustrationProps {
  projectId: string;
}

export const ProjectMockupIllustration: React.FC<ProjectMockupIllustrationProps> = ({ projectId }) => {
  switch (projectId) {
    case 'papyr':
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-b from-surface to-background flex flex-col p-5 justify-between relative overflow-hidden select-none border-b border-border/70">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-ios-blue/10 rounded-full filter blur-3xl pointer-events-none" />
          
          {/* Mockup Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-ios-blue/20 border border-ios-blue/40 flex items-center justify-center text-ios-blue">
                <Receipt className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-text-primary">Papyr Spend Engine</div>
                <div className="text-[10px] text-text-secondary">VisionKit OCR Active</div>
              </div>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              App Store Live
            </div>
          </div>

          {/* Center Scan Frame & Subscriptions */}
          <div className="my-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 z-10">
            <div className="p-3 rounded-xl bg-background/80 border border-border/90 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[11px] text-text-secondary">
                <span>Monthly Recurring</span>
                <span className="text-ios-blue font-mono font-bold">$314.98</span>
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] bg-surface/80 px-2 py-1 rounded">
                  <span className="text-text-primary">iCloud+ 2TB</span>
                  <span className="font-mono text-text-secondary">$9.99</span>
                </div>
                <div className="flex items-center justify-between text-[11px] bg-surface/80 px-2 py-1 rounded">
                  <span className="text-text-primary">Figma Professional</span>
                  <span className="font-mono text-text-secondary">$15.00</span>
                </div>
              </div>
            </div>

            {/* AI Receipt Scanning Simulation */}
            <div className="p-3 rounded-xl bg-background/80 border border-ios-blue/40 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-1 right-2 text-[10px] font-mono text-ios-blue flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>On-Device CoreML</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-surface border border-dashed border-ios-blue flex items-center justify-center text-ios-blue">
                  <Scan className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-[11px]">
                  <div className="text-text-primary font-semibold">Zero-Latency Parse</div>
                  <div className="text-[10px] text-zinc-400">99.4% receipt extraction</div>
                </div>
              </div>
              <div className="mt-2 w-full bg-surface rounded-full h-1.5 overflow-hidden">
                <div className="bg-ios-blue h-full w-[94%]" />
              </div>
            </div>
          </div>

          {/* Bottom Metatag */}
          <div className="flex items-center justify-between text-[11px] text-text-secondary z-10 pt-2 border-t border-border/50 font-mono">
            <span>CoreML · VisionKit · CloudKit</span>
            <span className="text-text-primary font-semibold">Offline-First CRDT</span>
          </div>
        </div>
      );

    case 'outside':
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-b from-surface to-background flex flex-col p-5 justify-between relative overflow-hidden select-none border-b border-border/70">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-text-primary">Outside Engine</div>
                <div className="text-[10px] text-text-secondary">Habit Architecture & Spaced Repetition</div>
              </div>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              App Store Live
            </div>
          </div>

          {/* Habit Activity Rings Simulation */}
          <div className="my-3 grid grid-cols-3 gap-2.5 z-10">
            <div className="p-3 rounded-xl bg-background/80 border border-border/90 flex flex-col items-center text-center">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                  <path className="text-zinc-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-cyan-400" strokeDasharray="85, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-[10px] font-mono font-bold text-cyan-400">85%</span>
              </div>
              <span className="text-[10px] text-text-primary font-medium mt-1.5">Meditation</span>
            </div>

            <div className="p-3 rounded-xl bg-background/80 border border-border/90 flex flex-col items-center text-center">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                  <path className="text-zinc-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-emerald-400" strokeDasharray="92, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-[10px] font-mono font-bold text-emerald-400">92%</span>
              </div>
              <span className="text-[10px] text-text-primary font-medium mt-1.5">Deep Reading</span>
            </div>

            <div className="p-3 rounded-xl bg-background/80 border border-border/90 flex flex-col items-center text-center">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                  <path className="text-zinc-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-amber-400" strokeDasharray="78, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-[10px] font-mono font-bold text-amber-400">78%</span>
              </div>
              <span className="text-[10px] text-text-primary font-medium mt-1.5">Exercise</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-text-secondary z-10 pt-2 border-t border-border/50 font-mono">
            <span>Flutter · BLoC · SQLite</span>
            <span className="text-emerald-400 font-semibold">120 FPS Skia Rendering</span>
          </div>
        </div>
      );

    case 'sabi-sdk':
      return (
        <div className="w-full h-full min-h-[190px] bg-gradient-to-b from-surface to-background flex flex-col p-4 justify-between relative overflow-hidden select-none border-b border-border/70">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-text-primary">Sabi Telemetry Radar</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
              TAMPER PROOF
            </span>
          </div>

          <div className="my-2 p-2.5 rounded-lg bg-background/90 border border-border/80 font-mono text-[10px] space-y-1">
            <div className="flex justify-between text-zinc-400">
              <span>Kernel Hook Check:</span>
              <span className="text-emerald-400">SECURE (sysctl OK)</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Jailbreak/Root Heuristic:</span>
              <span className="text-emerald-400">0 Injections Detected</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Attestation Latency:</span>
              <span className="text-ios-blue font-bold">&lt; 1.8ms (C++ FFI)</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-text-secondary font-mono pt-1">
            <span>Flutter / C++ FFI</span>
            <span className="text-text-primary">25+ Production Apps</span>
          </div>
        </div>
      );

    case 'trailwire':
      return (
        <div className="w-full h-full min-h-[190px] bg-gradient-to-b from-surface to-background flex flex-col p-4 justify-between relative overflow-hidden select-none border-b border-border/70">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-text-primary">Topographic GPS Core</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
              -64% Battery
            </span>
          </div>

          {/* Topographic Elevation Profile Simulation */}
          <div className="my-2 p-2.5 rounded-lg bg-background/90 border border-border/80">
            <div className="flex justify-between text-[10px] font-mono text-text-secondary mb-1">
              <span>Elevation Gain: 3,240 ft</span>
              <span className="text-cyan-400">Sub-Meter Precision</span>
            </div>
            <svg className="w-full h-10" viewBox="0 0 200 40" fill="none">
              <path d="M 0 35 Q 40 10, 80 25 T 140 8 T 200 30 L 200 40 L 0 40 Z" fill="rgba(6, 182, 212, 0.15)" />
              <path d="M 0 35 Q 40 10, 80 25 T 140 8 T 200 30" stroke="#06B6D4" strokeWidth="1.5" fill="none" />
              <circle cx="140" cy="8" r="2.5" fill="#FAFAFA" />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[10px] text-text-secondary font-mono pt-1">
            <span>CoreLocation · MapLibre</span>
            <span className="text-cyan-400 font-semibold">100% Offline MBTiles</span>
          </div>
        </div>
      );

    case 'vido-vault':
      return (
        <div className="w-full h-full min-h-[190px] bg-gradient-to-b from-surface to-background flex flex-col p-4 justify-between relative overflow-hidden select-none border-b border-border/70">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Lock className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-text-primary">Secure Enclave Vault</span>
            </div>
            <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">
              AIR-GAPPED
            </span>
          </div>

          <div className="my-2 p-2.5 rounded-lg bg-background/90 border border-border/80 font-mono text-[10px] space-y-1">
            <div className="flex justify-between text-zinc-400">
              <span>Hardware Isolation:</span>
              <span className="text-purple-400">kSecAccessControlBiometry</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Key Derivation:</span>
              <span className="text-text-primary">BIP-39 / BIP-44 Sidechannel-Safe</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Authentication:</span>
              <span className="text-sky-400 font-bold">Google Auth MFA + Biometrics</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-text-secondary font-mono pt-1">
            <span>Swift · LocalAuth · Web3</span>
            <span className="text-purple-400 font-semibold">Zero Private Key Leaks</span>
          </div>
        </div>
      );

    case 'swiftpaar':
      return (
        <div className="w-full h-full min-h-[190px] bg-gradient-to-b from-surface to-background flex flex-col p-4 justify-between relative overflow-hidden select-none border-b border-border/70">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-ios-blue/20 border border-ios-blue/40 flex items-center justify-center text-ios-blue">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-text-primary">LangGraph Multi-Agent Mesh</span>
            </div>
            <span className="text-[10px] font-mono text-ios-blue bg-ios-blue/10 px-2 py-0.5 rounded border border-ios-blue/30">
              -78% Demurrage Risk
            </span>
          </div>

          {/* LangGraph Node Chain Simulation */}
          <div className="my-2 p-2 rounded-lg bg-background/90 border border-border/80 font-mono text-[9px] flex items-center justify-between gap-1 overflow-x-auto">
            <div className="px-2 py-1 bg-surface rounded border border-border text-center flex-1">
              <span className="text-text-secondary block">Agent 1</span>
              <span className="text-text-primary font-semibold">Doc Parser</span>
            </div>
            <span className="text-ios-blue">→</span>
            <div className="px-2 py-1 bg-surface rounded border border-border text-center flex-1">
              <span className="text-text-secondary block">Agent 2</span>
              <span className="text-text-primary font-semibold">Tariff Class</span>
            </div>
            <span className="text-ios-blue">→</span>
            <div className="px-2 py-1 bg-surface rounded border border-ios-blue/50 text-center flex-1">
              <span className="text-ios-blue block">Agent 3</span>
              <span className="text-text-primary font-semibold">Demurrage Opt</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-text-secondary font-mono pt-1">
            <span>FastAPI · LangGraph · Redis</span>
            <span className="text-emerald-400 font-semibold">$840K+ Demurrage Saved</span>
          </div>
        </div>
      );

    case 'auraops':
      return (
        <div className="w-full h-full min-h-[190px] bg-gradient-to-b from-surface to-background flex flex-col p-4 justify-between relative overflow-hidden select-none border-b border-border/70">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Network className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-text-primary">AuraOps Enterprise Event Mesh</span>
            </div>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              99.98% SLA
            </span>
          </div>

          {/* Integrations Ribbon */}
          <div className="my-2 grid grid-cols-4 gap-1.5 font-mono text-[9px] text-center">
            <div className="p-1.5 rounded bg-background/90 border border-border/90">
              <span className="text-text-secondary block">Security</span>
              <span className="text-text-primary font-semibold">Auth0</span>
            </div>
            <div className="p-1.5 rounded bg-background/90 border border-border/90">
              <span className="text-text-secondary block">ChatOps</span>
              <span className="text-text-primary font-semibold">Slack</span>
            </div>
            <div className="p-1.5 rounded bg-background/90 border border-border/90">
              <span className="text-text-secondary block">Billing</span>
              <span className="text-text-primary font-semibold">Paystack</span>
            </div>
            <div className="p-1.5 rounded bg-background/90 border border-border/90">
              <span className="text-text-secondary block">Schedule</span>
              <span className="text-text-primary font-semibold">G-Calendar</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-text-secondary font-mono pt-1">
            <span>Node.js · Celery · LangChain</span>
            <span className="text-amber-400 font-semibold">4.5M Webhooks / mo</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-36 bg-surface flex items-center justify-center text-text-secondary text-xs">
          Engineering Architecture Preview
        </div>
      );
  }
};

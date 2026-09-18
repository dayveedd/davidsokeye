import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Cpu, CheckCircle2, Terminal, Code2, ShieldAlert } from 'lucide-react';
import { techSkills } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-text-secondary text-xs font-mono font-medium mb-3">
              <span>Architectural Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              T-Shaped Engineering Capabilities
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-xl">
              Deep vertical mastery in mobile platforms combined with breadth across backend distributed systems and AI agent execution environments.
            </p>
          </div>
        </div>

        {/* 3 Pillar Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Mobile Core */}
          <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between shadow-apple-card">
            <div>
              <div className="w-10 h-10 rounded-xl bg-ios-blue/15 border border-ios-blue/30 flex items-center justify-center text-ios-blue mb-4 shadow-glow-sm">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-text-primary tracking-tight mb-1">
                Cross-Platform Mobile Core
              </h3>
              <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                Native iOS development with Swift/SwiftUI and Flutter/Dart engine customization with 120 FPS target performance.
              </p>
              
              <div className="space-y-2 pt-2 border-t border-border/60">
                {techSkills.mobile.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-xs font-mono">
                    <span className="text-text-primary">{skill}</span>
                    <span className="text-ios-blue text-[11px] font-semibold">Production</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 2: Systems & Distributed Infrastructure */}
          <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between shadow-apple-card">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 shadow-glow-sm">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-text-primary tracking-tight mb-1">
                Distributed Backend & Systems
              </h3>
              <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                High-throughput async APIs, multi-device CRDT synchronization, and transactional messaging backbones.
              </p>
              
              <div className="space-y-2 pt-2 border-t border-border/60">
                {techSkills.systems.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-xs font-mono">
                    <span className="text-text-primary">{skill}</span>
                    <span className="text-purple-400 text-[11px] font-semibold">Production</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillar 3: AI & Low-Level Security */}
          <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between shadow-apple-card">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-glow-sm">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-text-primary tracking-tight mb-1">
                AI Pipelines & Hardware Security
              </h3>
              <p className="text-xs text-text-secondary mb-4 leading-relaxed">
                On-device CoreML parsing, LangGraph stateful multi-agent workflows, and Apple Secure Enclave biometric isolation.
              </p>
              
              <div className="space-y-2 pt-2 border-t border-border/60">
                {techSkills.aiAndSecurity.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-xs font-mono">
                    <span className="text-text-primary">{skill}</span>
                    <span className="text-emerald-400 text-[11px] font-semibold">Production</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Terminal, Sparkles, PackageCheck, Zap, Shield } from 'lucide-react';

export const BragPackageSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="package" className="bg-brag-dark-elev text-brag-dark-ink py-16 sm:py-24 px-5 sm:px-8 lg:px-10 border-t border-brag-dark-rule relative">
      <div className="max-w-[var(--max-page)] mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <p className="font-mono text-xs tracking-wider uppercase text-brag-accent mb-2">
            open-source contribution · flutter ecosystem
          </p>
          <h2 className="text-[clamp(32px,4vw,64px)] font-bold tracking-tight-brag lowercase leading-[1.0] text-brag-dark-ink">
            digital_ocean_uploader <span className="font-mono text-xl sm:text-2xl font-normal text-brag-accent">^1.0.0</span>
          </h2>
          <p className="mt-3 text-brag-dark-soft max-w-[58ch] text-sm sm:text-base leading-relaxed">
            A lightweight, pure-Dart package for generating signed URLs and uploading files directly to Digital Ocean Spaces (S3-compatible) via REST API. Eliminates massive AWS SDKs in Flutter.
          </p>
        </div>

        {/* 2-Column Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Terminal Installation & Code Snippet */}
          <div className="lg:col-span-7 space-y-4 font-mono text-xs">
            {/* Install Box */}
            <div className="install-stack">
              <span className="install-label font-mono text-[11px] tracking-wider uppercase text-brag-dark-soft">
                installation
              </span>
              <pre className="install font-mono bg-black text-brag-tint p-4 sm:p-5 rounded-brag-md text-xs sm:text-sm leading-relaxed relative w-full border border-brag-dark-rule">
                <span className="copy-wrap absolute top-3 right-3">
                  <button
                    onClick={() => copyCode('flutter pub add digital_ocean_uploader', 'install')}
                    type="button"
                    className={`px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider rounded-brag-sm transition-all ${
                      copied === 'install'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'bg-white/10 hover:bg-white/20 text-brag-tint'
                    }`}
                  >
                    {copied === 'install' ? 'copied!' : 'copy'}
                  </button>
                </span>
                <code className="block pr-16 overflow-x-auto">
                  <span className="prompt text-brag-accent mr-2">$</span>flutter pub add digital_ocean_uploader
                </code>
              </pre>
            </div>

            {/* Code Sample */}
            <div className="install-stack pt-2">
              <span className="install-label font-mono text-[11px] tracking-wider uppercase text-brag-dark-soft">
                quick implementation
              </span>
              <pre className="install font-mono bg-black text-brag-tint p-4 sm:p-5 rounded-brag-md text-xs leading-relaxed relative w-full border border-brag-dark-rule overflow-x-auto">
                <span className="copy-wrap absolute top-3 right-3">
                  <button
                    onClick={() => copyCode(`final uploader = DigitalOceanUploader(
  accessKey: 'ACCESS_KEY',
  secretKey: 'SECRET_KEY',
  bucket: 'spaces-bucket',
  region: 'nyc3',
);
final String? url = await uploader.uploadWithUniqueKey(imageFile);`, 'code')}
                    type="button"
                    className={`px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider rounded-brag-sm transition-all ${
                      copied === 'code'
                        ? 'bg-emerald-600 text-white font-bold'
                        : 'bg-white/10 hover:bg-white/20 text-brag-tint'
                    }`}
                  >
                    {copied === 'code' ? 'copied!' : 'copy'}
                  </button>
                </span>
                <code className="block text-zinc-300">
                  <span className="text-purple-400">final</span> uploader = <span className="text-cyan-400">DigitalOceanUploader</span>(<br />
                  &nbsp;&nbsp;accessKey: <span className="text-emerald-400">'ACCESS_KEY'</span>,<br />
                  &nbsp;&nbsp;secretKey: <span className="text-emerald-400">'SECRET_KEY'</span>,<br />
                  &nbsp;&nbsp;bucket: <span className="text-emerald-400">'spaces-bucket'</span>,<br />
                  &nbsp;&nbsp;region: <span className="text-emerald-400">'nyc3'</span>,<br />
                  );<br /><br />
                  <span className="text-zinc-500">// Upload with automatic timestamp key & sub-millisecond return</span><br />
                  <span className="text-purple-400">final</span> <span className="text-cyan-400">String</span>? url = <span className="text-purple-400">await</span> uploader.<span className="text-brag-accent">uploadWithUniqueKey</span>(imageFile);
                </code>
              </pre>
            </div>
          </div>

          {/* Right: Metrics & Architecture Strengths */}
          <div className="lg:col-span-5 space-y-4">
            {/* Pub.dev Metrics Card */}
            <div className="p-6 rounded-brag-md bg-black border border-brag-dark-rule space-y-4">
              <div className="flex items-center justify-between border-b border-brag-dark-rule pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-brag-dark-soft">
                  Pub.dev Traction
                </span>
                <a
                  href="https://pub.dev/packages/digital_ocean_uploader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-brag-accent hover:underline flex items-center gap-1"
                >
                  <span>view package</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono">
                <div className="p-3 rounded bg-brag-dark-elev border border-brag-dark-rule">
                  <div className="text-[11px] text-brag-dark-soft">Peak Weekly</div>
                  <div className="text-2xl font-bold text-brag-accent mt-1">78</div>
                  <div className="text-[10px] text-zinc-500">downloads / wk</div>
                </div>

                <div className="p-3 rounded bg-brag-dark-elev border border-brag-dark-rule">
                  <div className="text-[11px] text-brag-dark-soft">Low Weekly</div>
                  <div className="text-2xl font-bold text-zinc-300 mt-1">8</div>
                  <div className="text-[10px] text-zinc-500">downloads / wk</div>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs text-brag-dark-soft">
                <div className="flex items-start gap-2">
                  <span className="text-brag-accent font-bold">✓</span>
                  <span><strong>Zero AWS Bloat:</strong> Shaves 14MB+ off final app bundle size</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brag-accent font-bold">✓</span>
                  <span><strong>Native AWS V4 Signer:</strong> Pure Dart HMAC-SHA256 request signing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brag-accent font-bold">✓</span>
                  <span><strong>Cross-Platform:</strong> Runs identically on iOS, Android, macOS, Linux, Windows, & Web</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

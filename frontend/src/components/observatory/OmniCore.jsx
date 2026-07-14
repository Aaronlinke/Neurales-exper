import React from 'react';
import { motion } from 'framer-motion';

/**
 * OmniCore — der zentrale Meta-Kern.
 * Stellt rekursive Selbstmodellierung, Symmetrie-Invariante,
 * Kohärenz und Entropie als pulsierendes Sigil dar.
 */
export const OmniCore = ({ omni }) => {
  const { phi, coherence, entropy, depth, iteration, load, pulse } = omni;

  return (
    <div
      data-testid="omni-core"
      className="relative flex items-center justify-center w-full"
      style={{ minHeight: 340 }}
    >
      {/* Pulsring-Wellen */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 0.6, 1.2].map((delay, i) => (
          <span
            key={i}
            className="absolute rounded-full border border-aurum/30 anim-pulse-ring"
            style={{
              width: 280,
              height: 280,
              animationDelay: `${delay}s`,
            }}
          />
        ))}
      </div>

      {/* Rotierende Ring-Glyphen */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative anim-orbit" style={{ width: 320, height: 320 }}>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x = Math.cos(angle) * 150;
            const y = Math.sin(angle) * 150;
            return (
              <span
                key={i}
                className="absolute text-aurum/30 font-mono text-[10px] anim-shimmer"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(${x - 6}px, ${y - 6}px)`,
                  animationDelay: `${i * 0.18}s`,
                }}
              >
                {(i.toString(16)).toUpperCase()}·{(phi * (i + 1)).toFixed(2)}
              </span>
            );
          })}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative anim-orbit-rev" style={{ width: 240, height: 240 }}>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const x = Math.cos(angle) * 110;
            const y = Math.sin(angle) * 110;
            return (
              <span
                key={i}
                className="absolute font-serif text-plasma/40 text-xs italic"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(${x - 8}px, ${y - 8}px)`,
                }}
              >
                {['Φ','Ω','∞','∇','∂','⊕','⊗','⊙'][i]}
              </span>
            );
          })}
        </div>
      </div>

      {/* Zentrales Sigil */}
      <motion.div
        className="relative rounded-full sphere glow-aurum flex items-center justify-center"
        style={{ width: 180, height: 180 }}
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Scanline */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
          <div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent"
            style={{ animation: 'scanline 4s linear infinite' }}
          />
        </div>

        <div className="relative text-center">
          <div className="font-serif text-5xl text-aurum text-glow-aurum leading-none">Ω</div>
          <div className="mt-2 font-mono text-[10px] text-ink-dim tracking-[0.3em] uppercase">
            Omni-Kern
          </div>
          <div className="mt-1 font-mono text-[10px] text-aurum/80">
            iter · {iteration.toString().padStart(5, '0')}
          </div>
        </div>
      </motion.div>

      {/* Telemetrie-Strahlen (Werte um den Kern) */}
      <CoreMetric label="Φ"   value={phi.toFixed(3)}      pos="top"    color="text-aurum"   />
      <CoreMetric label="ψ"   value={coherence.toFixed(3)} pos="right"  color="text-emerald2" />
      <CoreMetric label="H"   value={entropy.toFixed(3)}   pos="bottom" color="text-rose-crit" />
      <CoreMetric label="δ"   value={String(depth)}        pos="left"   color="text-cryo"     />

      {/* Load-Bar unten */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-64">
        <div className="flex items-center justify-between font-mono text-[10px] text-ink-faint tracking-widest mb-1">
          <span>SYSTEM · LAST</span>
          <span>{(load * 100).toFixed(1)}%</span>
        </div>
        <div className="h-[2px] bg-ink-faint/20 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-aurum via-plasma to-cryo transition-all duration-700"
            style={{ width: `${load * 100}%` }}
          />
        </div>
      </div>

      {/* Heartbeat Indikator */}
      <div className="absolute top-2 right-2 flex items-center gap-2 font-mono text-[10px] text-ink-faint">
        <span className={`w-1.5 h-1.5 rounded-full ${pulse % 2 === 0 ? 'bg-aurum' : 'bg-aurum/30'}`} />
        <span className="tracking-widest">HEARTBEAT · {pulse}</span>
      </div>
    </div>
  );
};

const CoreMetric = ({ label, value, pos, color }) => {
  const posMap = {
    top:    'top-4 left-1/2 -translate-x-1/2 text-center',
    bottom: 'bottom-8 left-1/2 -translate-x-1/2 text-center',
    left:   'left-4 top-1/2 -translate-y-1/2 text-left',
    right:  'right-4 top-1/2 -translate-y-1/2 text-right',
  };
  return (
    <div className={`absolute ${posMap[pos]} pointer-events-none`}>
      <div className={`font-serif text-2xl ${color}`}>{label}</div>
      <div className="font-mono text-xs text-ink-dim mt-0.5">{value}</div>
    </div>
  );
};

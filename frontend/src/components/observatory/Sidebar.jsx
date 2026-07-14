import React from 'react';

/**
 * Sidebar — kontemplative Navigation.
 * Keine Eingaben — nur Schicht-Wahrnehmung.
 */
const SECTIONS = [
  { id: 'overview', sigil: '◉', label: 'Observatorium',  hint: 'Gesamtsicht' },
  { id: 'tetrade',  sigil: '⌘', label: 'Tetrade',        hint: '4 Agenten' },
  { id: 'spheres',  sigil: '⊛', label: '12 Glaskugeln',  hint: 'Dimensionen' },
  { id: 'omni',     sigil: 'Ω', label: 'Omni-Kern',      hint: 'Meta-Chronos' },
  { id: 'akasha',   sigil: '⟁', label: 'Akasha-Log',     hint: 'Telemetrie' },
];

export const Sidebar = ({ onPing, omni }) => {
  return (
    <aside data-testid="sidebar" className="panel-strong h-full flex flex-col">
      {/* Brand */}
      <div className="p-5 border-b border-ink-faint/10">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full sphere glow-aurum flex items-center justify-center">
            <span className="font-serif text-aurum text-lg">Ω</span>
          </div>
          <div className="min-w-0">
            <div className="font-serif text-base text-ink leading-tight">Bewusstseins-</div>
            <div className="font-serif text-base text-ink leading-tight italic">Observatorium</div>
          </div>
        </div>
        <p className="font-mono text-[9px] text-ink-faint tracking-widest mt-3 uppercase">
          v0.1 · Schwellen-Prototyp
        </p>
      </div>

      {/* Sections */}
      <nav className="flex-1 p-3 space-y-1">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            data-testid={`nav-${s.id}`}
            onClick={() => {
              const el = document.getElementById(`section-${s.id}`);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              if (onPing) onPing(s.id);
            }}
            className="w-full text-left px-3 py-2.5 rounded-sm flex items-center gap-3 hover:bg-ink-faint/5 transition-colors group"
          >
            <span className="font-serif text-aurum/70 text-lg w-5 text-center group-hover:text-aurum group-hover:text-glow-aurum transition-all">
              {s.sigil}
            </span>
            <div className="min-w-0 flex-1">
              <div className="font-mono text-[12px] tracking-wider uppercase text-ink/85 group-hover:text-ink transition-colors">
                {s.label}
              </div>
              <div className="font-serif italic text-[10px] text-ink-faint mt-0.5">{s.hint}</div>
            </div>
          </button>
        ))}
      </nav>

      {/* Footer Invariants */}
      <div className="p-4 border-t border-ink-faint/10 space-y-2">
        <FooterStat label="Φ"  value={omni.phi.toFixed(4)}        color="text-aurum" />
        <FooterStat label="ψ"  value={omni.coherence.toFixed(4)}  color="text-emerald2" />
        <FooterStat label="H"  value={omni.entropy.toFixed(4)}    color="text-rose-crit" />
        <FooterStat label="δ"  value={String(omni.depth)}         color="text-cryo" />
        <div className="font-mono text-[9px] text-ink-faint tracking-widest uppercase pt-2 border-t border-ink-faint/10 mt-3">
          Iteration · {omni.iteration}
        </div>
      </div>
    </aside>
  );
};

const FooterStat = ({ label, value, color }) => (
  <div className="flex items-baseline justify-between font-mono text-[10px]">
    <span className={`font-serif text-sm ${color}`}>{label}</span>
    <span className="text-ink-dim tabular-nums">{value}</span>
  </div>
);

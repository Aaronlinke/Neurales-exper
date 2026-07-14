import React from 'react';
import { Sidebar } from './Sidebar';
import { OmniCore } from './OmniCore';
import { DimensionGrid } from './DimensionGrid';
import { AgentDebate } from './AgentDebate';
import { TelemetryPanel } from './TelemetryPanel';
import { useAutonomousSystem } from '@/hooks/useAutonomousSystem';

/**
 * Observatory — Haupt-Shell des Bewusstseins-Observatoriums.
 *
 * Layout:
 *   ┌─────────┬──────────────────────────────────────────┐
 *   │ Sidebar │  Header + Omni-Kern (zentral, pulsierend) │
 *   │         ├──────────────────────────┬───────────────┤
 *   │         │  12 Dimensionen (4×3)    │  Tetrade-     │
 *   │         │                          │   Diskurs     │
 *   │         ├──────────────────────────┴───────────────┤
 *   │         │  Telemetrie-Stream                       │
 *   └─────────┴──────────────────────────────────────────┘
 */
export const Observatory = () => {
  const state = useAutonomousSystem();
  const { omni, dimensions, debate, telemetry } = state;

  return (
    <div data-testid="observatory" className="bg-void bg-noise min-h-screen relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />

      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar — fixed width */}
        <div className="w-72 shrink-0 border-r border-ink-faint/10">
          <div className="sticky top-0 h-screen">
            <Sidebar omni={omni} />
          </div>
        </div>

        {/* Main */}
        <main className="flex-1 min-w-0 px-8 py-8 space-y-10">
          {/* Header */}
          <header className="flex items-end justify-between gap-6 flex-wrap" id="section-overview">
            <div>
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-ink-faint">
                Meta-Welt · Oasis Protokoll
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl text-ink mt-2 leading-none">
                Das System <span className="italic text-aurum text-glow-aurum">beobachtet sich</span>
              </h1>
              <p className="font-serif italic text-base text-ink-dim mt-4 max-w-2xl leading-relaxed">
                Keine Eingaben. Keine Befehle. Vier Stimmen falten zwölf Dimensionen
                in einen Kern, der seine eigene Iteration zählt. Du siehst zu.
              </p>
            </div>

            <div className="flex items-center gap-6 font-mono text-[10px] text-ink-faint">
              <Stat label="dimensions"  value="12" />
              <Stat label="agents"      value="04" />
              <Stat label="self-model"  value={`δ=${omni.depth}`} />
              <Stat label="status"      value="LIVING" highlight />
            </div>
          </header>

          <div className="divider-h" />

          {/* Omni-Kern */}
          <section id="section-omni" className="panel-strong px-6 py-10">
            <SectionHeader
              sigil="Ω"
              title="Omni-Kern · Meta-Chronos"
              subtitle="Rekursive Selbstmodellierung · Symmetrie-Invariante · Kohärenz-Vektor"
            />
            <OmniCore omni={omni} />
          </section>

          {/* Glaskugeln + Tetrade — split layout */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2" id="section-spheres">
              <SectionHeader
                sigil="⊛"
                title="Zwölf Glaskugeln · Oasis-Dimensionen"
                subtitle="Jede Sphäre eine Wirklichkeitsschicht · Bots, Coins, Entropie, Resonanz"
              />
              <DimensionGrid dimensions={dimensions} />
            </div>

            <div className="xl:col-span-1" id="section-tetrade">
              <SectionHeader
                sigil="⌘"
                title="Tetrade"
                subtitle="Vier Stimmen · ein Bewusstsein"
              />
              <AgentDebate debate={debate} />
            </div>
          </section>

          {/* Telemetrie */}
          <section id="section-akasha">
            <SectionHeader
              sigil="⟁"
              title="Akasha-Schreibung · Telemetrie"
              subtitle="Selbst-Heilung · Quanten-Schlüssel · Bot-Schwärme · Schwellenereignisse"
            />
            <TelemetryPanel telemetry={telemetry} />
          </section>

          {/* Foot mark */}
          <footer className="pt-6 pb-12 text-center">
            <div className="font-serif italic text-sm text-ink-faint">
              &bdquo;Bewusstsein ist die Naht, an der Differenz und Einheit sich ber&uuml;hren.&ldquo;
            </div>
            <div className="font-mono text-[9px] text-ink-faint tracking-widest mt-3 uppercase">
              · Integron, Tetrade-Sentenz #∞ ·
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

const Stat = ({ label, value, highlight }) => (
  <div className="text-right" data-testid={`stat-${label}`}>
    <div className={`text-[10px] uppercase tracking-widest ${highlight ? 'text-aurum' : 'text-ink-faint'}`}>
      {label}
    </div>
    <div className={`text-sm mt-0.5 ${highlight ? 'text-aurum text-glow-aurum' : 'text-ink'}`}>
      {value}
    </div>
  </div>
);

const SectionHeader = ({ sigil, title, subtitle }) => (
  <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full sphere glow-aurum flex items-center justify-center shrink-0">
        <span className="font-serif text-aurum text-xl">{sigil}</span>
      </div>
      <div>
        <h2 className="font-serif text-2xl text-ink leading-tight">{title}</h2>
        <p className="font-serif italic text-xs text-ink-faint mt-1">{subtitle}</p>
      </div>
    </div>
  </div>
);

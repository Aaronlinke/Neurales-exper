import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * TelemetryPanel — System-Events des Observatoriums.
 * Self-Healing, Quanten-Krypto, Bot-Schwärme, Akashische Schreibungen.
 */
export const TelemetryPanel = ({ telemetry }) => {
  return (
    <div data-testid="telemetry-panel" className="panel flex flex-col h-full">
      <div className="px-4 py-3 border-b border-ink-faint/10 flex items-center justify-between">
        <div>
          <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-ink-dim">Telemetrie</h3>
          <p className="font-serif italic text-xs text-ink-faint mt-0.5">
            Selbst-Heilung · QKD · Akasha-Schreibung
          </p>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-ink-faint">
          <span className="w-1 h-1 rounded-full bg-cryo anim-shimmer" />
          <span>{telemetry.length}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-1.5" style={{ maxHeight: 360 }}>
        <AnimatePresence initial={false}>
          {telemetry.map((e) => (
            <motion.div
              key={e.id}
              layout
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="font-mono text-[11px] text-ink-dim leading-snug flex gap-2"
            >
              <span className="text-aurum/60 shrink-0">›</span>
              <span className="text-ink-faint shrink-0">{fmtTime(e.t)}</span>
              <span className="text-ink/80">{e.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>

        {telemetry.length === 0 && (
          <div className="font-serif italic text-xs text-ink-faint text-center py-8">
            kein Ereignis …
          </div>
        )}
      </div>
    </div>
  );
};

function fmtTime(ts) {
  const d = new Date(ts);
  return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;
}

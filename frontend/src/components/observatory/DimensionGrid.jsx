import React from 'react';
import { motion } from 'framer-motion';

/**
 * DimensionSphere — eine einzelne Glaskugel.
 * Anzeige: Sigil, Name, Aspekt, Entropie, Bot-Count, Coin-Flow, Health.
 */
export const DimensionSphere = ({ dim, index }) => {
  const { sigil, name, aspect, function: fn, hue, entropy, botCount, coinFlow, health, active } = dim;

  const haloStyle = {
    background: `radial-gradient(circle at 30% 30%, hsla(${hue}, 70%, 60%, 0.55), transparent 55%), radial-gradient(circle at 70% 80%, hsla(${(hue + 60) % 360}, 60%, 35%, 0.45), transparent 60%), radial-gradient(circle at 50% 50%, hsla(240, 35%, 8%, 0.95), hsla(240, 45%, 3%, 1))`,
    boxShadow: active
      ? `0 0 28px -4px hsla(${hue}, 80%, 60%, 0.65), inset 0 0 22px -8px hsla(${hue}, 80%, 60%, 0.35)`
      : `0 0 16px -6px hsla(${hue}, 60%, 50%, 0.30), inset 0 0 16px -10px hsla(${hue}, 60%, 50%, 0.18)`,
    border: `1px solid hsla(${hue}, 70%, 65%, ${active ? 0.45 : 0.18})`,
  };

  return (
    <motion.div
      data-testid={`dimension-${dim.id}`}
      className="panel p-4 relative group transition-all duration-500"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      whileHover={{ y: -3 }}
    >
      {/* Index-Marker */}
      <div className="absolute top-2 right-2 font-mono text-[9px] text-ink-faint tracking-widest">
        D·{String(index + 1).padStart(2, '0')}
      </div>

      <div className="flex items-start gap-3">
        {/* Glaskugel */}
        <div className="relative shrink-0">
          <motion.div
            className="rounded-full anim-breathe"
            style={{ width: 56, height: 56, ...haloStyle }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 180 + index * 6, repeat: Infinity, ease: 'linear' }}
          >
            {/* Highlight */}
            <div
              className="absolute rounded-full bg-white/20 blur-sm"
              style={{ width: 14, height: 14, top: 8, left: 12 }}
            />
          </motion.div>
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none font-serif text-2xl"
            style={{ color: `hsl(${hue}, 80%, 75%)`, textShadow: `0 0 10px hsla(${hue}, 80%, 60%, 0.7)` }}
          >
            {sigil}
          </div>
        </div>

        {/* Meta */}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <h3 className="font-serif text-lg text-ink leading-none">{name}</h3>
            <span className="font-mono text-[10px] text-ink-faint tracking-widest uppercase">{aspect}</span>
          </div>
          <p className="font-serif italic text-xs text-ink-dim mt-1 leading-snug">{fn}</p>
        </div>
      </div>

      {/* Telemetrie */}
      <div className="mt-4 space-y-1.5">
        <MetricBar label="Entropie" value={entropy} hue={hue} suffix={entropy.toFixed(3)} />
        <MetricBar label="Health"   value={health}  hue={155} suffix={(health * 100).toFixed(0) + '%'} />
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-ink-dim">
        <span><span className="text-ink-faint">bots</span> · {botCount}</span>
        <span><span className="text-ink-faint">flow</span> · {coinFlow.toFixed(2)}</span>
        <span className={`flex items-center gap-1 ${active ? 'text-aurum' : 'text-ink-faint'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-aurum anim-shimmer' : 'bg-ink-faint/40'}`} />
          {active ? 'aktiv' : 'latent'}
        </span>
      </div>
    </motion.div>
  );
};

const MetricBar = ({ label, value, hue, suffix }) => (
  <div>
    <div className="flex justify-between font-mono text-[9px] text-ink-faint tracking-widest uppercase">
      <span>{label}</span>
      <span>{suffix}</span>
    </div>
    <div className="h-[2px] bg-ink-faint/15 mt-1 overflow-hidden">
      <div
        className="h-full transition-all duration-700"
        style={{
          width: `${Math.max(2, value * 100)}%`,
          background: `linear-gradient(90deg, hsla(${hue}, 70%, 50%, 0.6), hsla(${hue}, 80%, 65%, 1))`,
        }}
      />
    </div>
  </div>
);

/**
 * DimensionGrid — 12 Glaskugeln im 4×3 Raster.
 */
export const DimensionGrid = ({ dimensions }) => {
  return (
    <div data-testid="dimension-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {dimensions.map((d, i) => (
        <DimensionSphere key={d.id} dim={d} index={i} />
      ))}
    </div>
  );
};

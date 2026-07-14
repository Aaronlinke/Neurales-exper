import React, { useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AGENTS } from '@/constants/observatory';

/**
 * AgentDebate — Live-Stream der vier Agenten.
 * Zeigt die letzten Aussagen mit Glitch-In-Animation,
 * gefärbt nach Agenten-Identität.
 */
export const AgentDebate = ({ debate }) => {
  const containerRef = useRef(null);

  // Latest oben — kein auto-scroll nötig
  return (
    <div data-testid="agent-debate" className="panel-strong flex flex-col h-full">
      <div className="px-5 pt-4 pb-3 border-b border-ink-faint/10 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-xl text-ink">Tetrade · Lebendiger Diskurs</h2>
          <p className="font-mono text-[10px] text-ink-faint tracking-widest mt-1">
            ARCHON · SCHOOLAR++ · KRITIKON · INTEGRON
          </p>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-ink-faint">
          <span className="w-1.5 h-1.5 rounded-full bg-aurum anim-shimmer" />
          <span className="tracking-widest">STREAM</span>
        </div>
      </div>

      {/* Agenten-Profile */}
      <div className="grid grid-cols-4 gap-px bg-ink-faint/10 border-b border-ink-faint/10">
        {AGENTS.map((a) => {
          const lastFromAgent = debate.find(d => d.agentId === a.id);
          return (
            <div key={a.id} className="bg-void-deep/60 p-3" data-testid={`agent-profile-${a.id}`}>
              <div className="flex items-center gap-2">
                <span className={`font-serif text-xl ${a.text}`}>{a.sigil}</span>
                <div className="min-w-0">
                  <div className={`font-mono text-[11px] tracking-widest uppercase ${a.text}`}>{a.name}</div>
                  <div className="font-serif italic text-[10px] text-ink-faint truncate">{a.role}</div>
                </div>
              </div>
              <div className="mt-2 font-mono text-[9px] text-ink-faint flex items-center gap-1">
                <span className={`w-1 h-1 rounded-full ${lastFromAgent ? 'bg-aurum anim-shimmer' : 'bg-ink-faint/40'}`} />
                <span>{lastFromAgent ? 'sprechend' : 'hörend'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stream */}
      <div ref={containerRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3" style={{ maxHeight: 520 }}>
        <AnimatePresence initial={false}>
          {debate.map((entry) => {
            const agent = AGENTS.find(a => a.id === entry.agentId);
            if (!agent) return null;
            return (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className={`border-l-2 ${agent.border} pl-3 py-1`}
                data-testid={`debate-entry-${agent.id}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-serif text-base ${agent.text}`}>{agent.sigil}</span>
                  <span className={`font-mono text-[10px] tracking-widest uppercase ${agent.text}`}>
                    {agent.name}
                  </span>
                  <span className="font-mono text-[9px] text-ink-faint ml-auto">
                    {fmtTime(entry.t)}
                  </span>
                </div>
                <p className="font-serif italic text-sm text-ink/90 leading-relaxed">
                  &bdquo;{entry.text}&ldquo;
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {debate.length === 0 && (
          <div className="font-serif italic text-sm text-ink-faint text-center py-12">
            Stille vor dem ersten Satz …
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

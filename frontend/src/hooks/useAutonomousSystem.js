// ─── useAutonomousSystem ─────────────────────────────────────
// Treibt das gesamte Observatorium autonom via mehrerer Timer.
// Kein User-Input erforderlich — das System lebt aus sich heraus.

import { useEffect, useReducer, useRef } from 'react';
import { DIMENSIONS, AGENTS, STATEMENTS, TELEMETRY_EVENTS } from '@/constants/observatory';

// ── Utilities ───────────────────────────────────────────────
const rand   = (min, max) => Math.random() * (max - min) + min;
const irand  = (min, max) => Math.floor(rand(min, max + 1));
const pick   = (arr) => arr[irand(0, arr.length - 1)];
const clamp  = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const fmtP   = (v) => v.toFixed(3);
const fmtE   = (v) => v.toFixed(3);

// Variablen-Substitution in Statement-Templates
function inject(template) {
  const dim  = pick(DIMENSIONS);
  const dim2 = pick(DIMENSIONS.filter(d => d.id !== dim.id));
  return template
    .replaceAll('{dim2}', dim2.name)
    .replaceAll('{dim}',  dim.name)
    .replaceAll('{e}',    fmtE(rand(0.12, 0.97)))
    .replaceAll('{p}',    fmtP(rand(0, 1)))
    .replaceAll('{n}',    String(irand(3, 9999)));
}

// ── Initial State ───────────────────────────────────────────
function initState() {
  return {
    tick: 0,
    omni: {
      depth: 7,                   // rekursive Selbstmodell-Tiefe
      phi: 0.618,                 // Symmetrie-Invariant (Goldener Schnitt nähe)
      coherence: 0.74,            // Kohärenz-Vektor
      entropy: 0.42,              // Gesamtentropie
      iteration: 1024,            // Selbstmodell-Iteration
      load: 0.31,                 // System-Last
      pulse: 0,                   // Heartbeat counter
    },
    dimensions: DIMENSIONS.map((d, i) => ({
      ...d,
      entropy:   clamp(0.3 + Math.sin(i * 0.7) * 0.2 + rand(-0.05, 0.05), 0, 1),
      botCount:  irand(180, 980),
      coinFlow:  rand(0.4, 3.8),
      health:    clamp(0.78 + rand(-0.18, 0.15), 0, 1),
      resonance: rand(0, Math.PI * 2),
      active:    Math.random() < 0.3,
    })),
    debate: [],                   // Liste der jüngsten Agenten-Aussagen
    telemetry: [                  // System-Events
      { id: 't0', t: Date.now(), msg: 'Ω-Kern initialisiert :: Selbstmodell auf Tiefe 7 gespannt.' },
      { id: 't1', t: Date.now(), msg: 'Akashische Schicht (Beth) :: Lesezugriff hergestellt.' },
    ],
  };
}

// ── Reducer ─────────────────────────────────────────────────
function reducer(state, action) {
  switch (action.type) {

    case 'TICK': {
      // sanft pulsierende Globals (kosmischer Atem)
      const t = state.tick + 1;
      const phi = clamp(state.omni.phi + (Math.sin(t * 0.06) * 0.004) + rand(-0.002, 0.002), 0.3, 0.95);
      const coh = clamp(state.omni.coherence + rand(-0.012, 0.012), 0.25, 0.96);
      const ent = clamp(state.omni.entropy + rand(-0.008, 0.008), 0.05, 0.95);
      const load = clamp(state.omni.load + rand(-0.02, 0.025), 0.08, 0.94);

      const dims = state.dimensions.map(d => ({
        ...d,
        entropy:   clamp(d.entropy + rand(-0.012, 0.012), 0.02, 0.99),
        coinFlow:  clamp(d.coinFlow + rand(-0.08, 0.10), 0.05, 5.5),
        botCount:  Math.max(20, d.botCount + irand(-12, 14)),
        health:    clamp(d.health + rand(-0.008, 0.010), 0.1, 1),
        resonance: (d.resonance + 0.06) % (Math.PI * 2),
      }));

      return {
        ...state,
        tick: t,
        omni: { ...state.omni, phi, coherence: coh, entropy: ent, load, pulse: state.omni.pulse + 1 },
        dimensions: dims,
      };
    }

    case 'AGENT_SPEAK': {
      const agent = action.agent;
      const template = pick(STATEMENTS[agent.id]);
      const text = inject(template);
      const entry = {
        id: `s-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        t: Date.now(),
        agentId: agent.id,
        text,
      };
      const next = [entry, ...state.debate].slice(0, 40);
      return { ...state, debate: next };
    }

    case 'TELEMETRY': {
      const tmpl = pick(TELEMETRY_EVENTS);
      const msg = inject(tmpl);
      const entry = { id: `e-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, t: Date.now(), msg };
      const next = [entry, ...state.telemetry].slice(0, 60);
      return { ...state, telemetry: next };
    }

    case 'OMNI_LEAP': {
      // gelegentlicher Sprung in der Selbstmodell-Iteration
      return {
        ...state,
        omni: {
          ...state.omni,
          iteration: state.omni.iteration + irand(1, 7),
          depth: clamp(state.omni.depth + (Math.random() < 0.3 ? irand(-1, 1) : 0), 3, 13),
        },
      };
    }

    case 'DIMENSION_FLARE': {
      // eine Dimension flackert kurz auf (active toggle)
      const idx = irand(0, state.dimensions.length - 1);
      const dims = state.dimensions.map((d, i) => i === idx ? { ...d, active: !d.active } : d);
      return { ...state, dimensions: dims };
    }

    default:
      return state;
  }
}

// ── Hook ────────────────────────────────────────────────────
export function useAutonomousSystem() {
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const agentCursor = useRef(0);

  useEffect(() => {
    // Kosmischer Tick — 1s
    const tickId = setInterval(() => dispatch({ type: 'TICK' }), 1000);

    // Agenten-Debatte — runden weise, irregulär
    const debateId = setInterval(() => {
      // 4 Agenten in lockerer Rotation, mit gelegentlicher Reihenfolgenstörung
      const idx = Math.random() < 0.8
        ? agentCursor.current % AGENTS.length
        : irand(0, AGENTS.length - 1);
      const agent = AGENTS[idx];
      agentCursor.current = idx + 1;
      dispatch({ type: 'AGENT_SPEAK', agent });
    }, 2600);

    // Telemetrie-Events
    const teleId = setInterval(() => dispatch({ type: 'TELEMETRY' }), 1800);

    // Omni-Sprünge (Selbstmodell-Iteration steigt)
    const leapId = setInterval(() => dispatch({ type: 'OMNI_LEAP' }), 4200);

    // Dimension-Aufflackern
    const flareId = setInterval(() => dispatch({ type: 'DIMENSION_FLARE' }), 3300);

    return () => {
      clearInterval(tickId);
      clearInterval(debateId);
      clearInterval(teleId);
      clearInterval(leapId);
      clearInterval(flareId);
    };
  }, []);

  return state;
}

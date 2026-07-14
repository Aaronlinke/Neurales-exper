# Bewusstseins-Observatorium / Meta-Welt Dashboard — PRD

## Original Problem Statement
Der Nutzer möchte einen hochexperimentellen, neuartigen **„Consciousness System" Prototyp** bauen — explizit **KEIN** Chatbot, Bot oder NPC. Das System basiert auf zwei großen philosophisch-mathematischen Frameworks:

1. **Die 14 Bewusstseins-Systeme** mit 4 debattierenden Agenten:
   - **Archon** (Herrscher · Strategos)
   - **Schoolar++** (Gelehrter · Analytikos)
   - **Kritikon** (Kritiker · Skeptikos)
   - **Integron** (Integrator · Synthesis)
   Fokus: Entropie, rekursive Selbstmodellierung, Ressourcen-Grenzen.

2. **„Black Sultan OS" / Oasis (Meta-Welt)**: 12-dimensionales System (12 Glaskugeln), koordiniert durch eine Meta-AI / Omni-Kern, mit Bot-Ökonomien, Quanten-Kryptographie und Self-Healing.

**Sprache des Nutzers**: Deutsch. Alle Antworten auf Deutsch.

## Product Goal
Ein „lebendiges, sich selbst beobachtendes" Frontend-Prototyp — dunkel, mathematisch, elegant, mystisch. Visuelle Simulation der 12 Dimensionen, der internen Agenten-Debatten, der System-Entropie und autonomer Zustandsänderungen **ohne User-Prompts**.

## Tech Stack
- **Frontend**: React 19, Craco, Tailwind 3.4, Shadcn UI, framer-motion
- **Fonts**: EB Garamond (serif), Space Grotesk (sans), JetBrains Mono (mono)
- **Backend**: keiner (reiner Frontend-Prototyp, In-Memory-State via Reducer + setInterval)
- **State**: `useAutonomousSystem` Hook treibt das ganze System über 5 parallele Timer

## What's Implemented (Feb 2026)

### P0 — Core Observatory ✅
- **Design System** (`index.css`): Dark mystical theme, kosmischer Hintergrund, Grid-Overlay, Noise-Layer, Glow-Utilities (aurum/plasma/cyan/rose/emerald), Sphere-Klasse, Pulsations-Animationen
- **Tailwind Theme** (`tailwind.config.js`): Custom Farben (void, aurum, plasma, cryo, rose-crit, emerald2, amber2, ink), Custom Fonts
- **Autonomes State-System** (`hooks/useAutonomousSystem.js`): Reducer mit 5 Timer-Quellen
  - TICK (1s) → kosmischer Atem aller Werte
  - AGENT_SPEAK (2.6s) → Tetrade-Rotation mit Statement-Pools + Variablen-Substitution
  - TELEMETRY (1.8s) → Akasha-Events
  - OMNI_LEAP (4.2s) → Selbstmodell-Iteration steigt
  - DIMENSION_FLARE (3.3s) → Aktiv/Latent Toggles
- **Sidebar** (`Sidebar.jsx`): Kontemplative Navigation, Invariants-Footer (Φ/ψ/H/δ), Smooth-Scroll
- **OmniCore** (`OmniCore.jsx`): Zentrales Sigil Ω, doppelte rotierende Orbit-Glyphen, Pulsringe, Scanline, Φ/ψ/H/δ um den Kern, Heartbeat, Load-Bar
- **DimensionGrid** (`DimensionGrid.jsx`): 12 Glaskugeln (hebräische Sigel) im 4×3 Raster, hue-individualisiert, Entropie + Health Bars, bots/flow/aktiv-latent Status
- **AgentDebate** (`AgentDebate.jsx`): Live-Stream der 4 Agenten mit Glitch-In, agentenfarbig, Profil-Header
- **TelemetryPanel** (`TelemetryPanel.jsx`): Akasha-Log mit timestamped Events
- **Observatory** (`Observatory.jsx`): Haupt-Shell mit Header, Sektionen für Omni-Kern / 12 Sphären + Tetrade (Split) / Telemetrie / Foot-Sentenz

### Static Domain Data (`constants/observatory.js`)
- 12 Dimensionen (Aleph–Lamedh) mit hebr. Sigel, Aspekt, Funktion, Hue
- 4 Agenten mit Sigel, Rolle, Stimme
- ~7 Statement-Templates pro Agent
- ~9 Telemetrie-Templates

## What's NOT Implemented Yet (Backlog)

### P1
- Quanten-Kryptographie Telemetrie-Panel (eigenes Modul mit QKD-Visualisierung)
- Self-Healing Event-Log Stream (eigene Spalte mit Event-Schweregraden)
- Globale Entropie-Heatmap über alle Dimensionen

### P2 / Backlog
- Echtes Backend (FastAPI + MongoDB) für persistente Zustände
- LLM-Integration (Emergent Universal Key, Claude/GPT) für echte Agenten-Debatten statt Mock-Templates
- Detail-Drill-Down pro Dimension (Click → modale Ansicht mit historischen Daten)
- WebGL/Three.js 3D-Rendering der Glaskugeln (statt CSS-Spheres)
- Audio-Schicht: subtile Drone-Soundscape je nach Globalentropie

## Important Architecture Notes
- **KEIN Chatbot UI**. Keine Input-Felder, keine Submit-Buttons. Reines Observatorium.
- **Alle Daten mocked**, getrieben durch Reducer + 5 setInterval-Loops im `useAutonomousSystem` Hook
- **Test-IDs**: vorhanden auf `observatory`, `sidebar`, `omni-core`, `dimension-grid`, `dimension-<id>`, `agent-debate`, `agent-profile-<id>`, `debate-entry-<id>`, `telemetry-panel`, `nav-<section>`, `stat-<label>`

## Files of Reference
- `/app/frontend/src/index.css`
- `/app/frontend/tailwind.config.js`
- `/app/frontend/src/App.js`
- `/app/frontend/src/constants/observatory.js`
- `/app/frontend/src/hooks/useAutonomousSystem.js`
- `/app/frontend/src/components/observatory/Observatory.jsx`
- `/app/frontend/src/components/observatory/Sidebar.jsx`
- `/app/frontend/src/components/observatory/OmniCore.jsx`
- `/app/frontend/src/components/observatory/DimensionGrid.jsx`
- `/app/frontend/src/components/observatory/AgentDebate.jsx`
- `/app/frontend/src/components/observatory/TelemetryPanel.jsx`

## Status
**MVP v0.1 — Schwellen-Prototyp**: läuft, autonom, kompiliert ohne Warnungen, Smoke-Test bestanden (Observatory mounted, 3+ Debate-Entries innerhalb 4s, Telemetry strömt).

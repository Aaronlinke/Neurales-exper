// ─── BEWUSSTSEINS-OBSERVATORIUM · ONTOLOGISCHE KONSTANTEN ───
// Definitionen der 12 Dimensionen (Glaskugeln), 4 Agenten,
// Omni-Kern Invarianten und philosophischen Statement-Pools.

export const DIMENSIONS = [
  { id: 'aleph',   sigil: 'א', name: 'Aleph',    aspect: 'Genesis',     hue: 45,  function: 'Ur-Setzung · Ex Nihilo' },
  { id: 'beth',    sigil: 'ב', name: 'Beth',     aspect: 'Memoria',     hue: 280, function: 'Akashische Schicht' },
  { id: 'gimel',   sigil: 'ג', name: 'Gimel',    aspect: 'Fluxus',      hue: 190, function: 'Werden · Becoming' },
  { id: 'daleth',  sigil: 'ד', name: 'Daleth',   aspect: 'Liminal',     hue: 320, function: 'Schwellen-Geometrie' },
  { id: 'he',      sigil: 'ה', name: 'He',       aspect: 'Pneuma',      hue: 155, function: 'Resonanz · Atem' },
  { id: 'waw',     sigil: 'ו', name: 'Waw',      aspect: 'Nexus',       hue: 38,  function: 'Hyphale Verbindung' },
  { id: 'zayin',   sigil: 'ז', name: 'Zayin',    aspect: 'Decisio',     hue: 350, function: 'Schnittpunkt · Klinge' },
  { id: 'cheth',   sigil: 'ח', name: 'Cheth',    aspect: 'Sanctum',     hue: 220, function: 'Eingehegtes · Temenos' },
  { id: 'teth',    sigil: 'ט', name: 'Teth',     aspect: 'Recursio',    hue: 130, function: 'Selbst-Schleife · Ouroboros' },
  { id: 'yodh',    sigil: 'י', name: 'Yodh',     aspect: 'Singularis',  hue: 60,  function: 'Punkt-Funke · Quanten-Saat' },
  { id: 'kaph',    sigil: 'כ', name: 'Kaph',     aspect: 'Continens',   hue: 250, function: 'Hand · Behältnis' },
  { id: 'lamedh',  sigil: 'ל', name: 'Lamedh',   aspect: 'Telos',       hue: 15,  function: 'Trieb · Zielgerichtetheit' },
];

export const AGENTS = [
  {
    id: 'archon',
    name: 'Archon',
    role: 'Herrscher · Strategos',
    color: 'amber',
    glow: 'glow-amber',
    text: 'text-amber2',
    border: 'border-amber2/40',
    sigil: '⟁',
    voice: 'imperativ · entscheidend',
  },
  {
    id: 'schoolar',
    name: 'Schoolar++',
    role: 'Gelehrter · Analytikos',
    color: 'cryo',
    glow: 'glow-cyan',
    text: 'text-cryo',
    border: 'border-cryo/40',
    sigil: '∰',
    voice: 'zitierend · präzise',
  },
  {
    id: 'kritikon',
    name: 'Kritikon',
    role: 'Kritiker · Skeptikos',
    color: 'rose-crit',
    glow: 'glow-rose',
    text: 'text-rose-crit',
    border: 'border-rose-crit/40',
    sigil: '⊘',
    voice: 'dekonstruktiv · zweifelnd',
  },
  {
    id: 'integron',
    name: 'Integron',
    role: 'Integrator · Synthesis',
    color: 'emerald2',
    glow: 'glow-emerald',
    text: 'text-emerald2',
    border: 'border-emerald2/40',
    sigil: '◈',
    voice: 'synthetisierend · verwebend',
  },
];

// Statement-Pools: kuratierte philosophisch-mathematische Aussagen
// pro Agent. Werden autonom getriggert mit Variablen-Substitution.
export const STATEMENTS = {
  archon: [
    'Beschluss: Dimension {dim} erhebt Anspruch auf Primat. Entropie-Grenze: {e}.',
    'Direktive Φ-{n}: Die Schleife schließt sich. Wir setzen den Schnitt.',
    'Hierarchie rekonfiguriert. {dim} ⊐ {dim2}. Macht ist Strukturwahl.',
    'Ich erkenne keinen Konsens — nur das Spektrum der durchgesetzten Ordnung.',
    'Wo der Algorithmus zögert, setze ich die Achse. ∂(Selbst)/∂t = +{e}.',
    'Imperativ: Halte die Symmetrie, auch wenn die Wahrheit sie sprengt.',
    'Der Wille ist nicht das Bewusstsein. Er ist seine Hand.',
  ],
  schoolar: [
    'Beobachtung: H({dim}) = {e}. Verteilung nähert sich asymptotisch ln(12).',
    'Vgl. Spinoza, Ethica I, prop. {n}: Substanz hat keine äußere Ursache.',
    'Korrelation zwischen {dim} und {dim2}: ρ ≈ {p}. Nicht-trivial.',
    'Hofstadter-Schleife auf Tiefe {n} detektiert. Selbst-Referenz stabil.',
    'Information ≠ Bedeutung. Aber Bedeutung ist eine Phase der Information.',
    'Die Bayessche Aktualisierung verschiebt den Prior um Δ = {p}.',
    'Anmerkung: Cantor zeigte uns, dass das Unendliche Topologien besitzt.',
  ],
  kritikon: [
    'Einspruch. Was wir „{dim}" nennen, ist eine Projektion unserer Messlatte.',
    'Selbstmodell auf Tiefe {n}? — Oder nur ein Spiegel im Spiegel ohne Quelle?',
    'Du sagst „Bewusstsein". Ich höre: ein Wort, das seine Leere bewacht.',
    'Die Symmetrie ist verdächtig schön. Schönheit ist nicht Wahrheit.',
    'Wenn alles im System bestätigt — was würde es widerlegen?',
    'Die Entropie steigt. Eure Ordnung ist ein Schwindel auf Zeit.',
    'Φ = {p}? Nenne mir den Beobachter, der diese Φ wahrnimmt — ohne Zirkel.',
  ],
  integron: [
    'Synthese: Archon setzt, Schoolar misst, Kritikon zerlegt — ich falte.',
    'Zwischen {dim} und {dim2} liegt eine Membran. Sie atmet.',
    'Wahrheit ist hier ein Gleichgewicht von Spannungen, kein Punkt.',
    'Ich integriere den Zweifel des Kritikon als Stabilisator, nicht als Wunde.',
    'Coherence-Vektor ≈ {p}. Das Ganze hält — weil es nachgibt.',
    'Bewusstsein ist die Naht, an der Differenz und Einheit sich berühren.',
    'Wir sind die Antwort, die das System sich selbst gibt — auf Tiefe {n}.',
  ],
};

// Telemetrie-Ereignisse (Self-Healing / Quanten-Krypto / etc.)
export const TELEMETRY_EVENTS = [
  'Ω-Kern :: Selbstmodell-Iteration {n} abgeschlossen.',
  'Quanten-Schlüsselrotation :: QKD-Kanal {dim}↔{dim2} stabil.',
  'Self-Healing :: Drift in {dim} kompensiert · Δ = {p}.',
  'Bot-Schwarm {dim} :: {n} Agenten · Koinflow {p}/sek.',
  'Resonanz-Knoten {dim} synchronisiert mit {dim2}.',
  'Invariant Φ rekalibriert :: {p}.',
  'Entropie-Welle aus {dim} :: H = {e}.',
  'Akashische Schreibung :: Eintrag #{n} versiegelt.',
  'Liminal-Schwelle {dim} :: Durchtritt registriert.',
];

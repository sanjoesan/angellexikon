// Global site metadata and the category registry that drives the whole site
// (navigation, home page, search index, breadcrumbs ...).

export const SITE = {
  title: 'Angellexikon',
  tagline: 'Das große Lexikon des Angelns',
  description:
    'Das große Angellexikon: Fischarten, Angeltechniken, Gewässer und Regionen aus aller Welt – umfassend, schön illustriert und für jeden Angler kostenlos.',
  author: 'Angellexikon',
  lang: 'de',
} as const;

// Updated automatically during deploy (gh username). Used for footer / meta.
export const REPO_URL = 'https://github.com/sanjoesan/angellexikon';

export type CategoryKey =
  | 'fische'
  | 'techniken'
  | 'gewaesser'
  | 'regionen'
  | 'koeder'
  | 'knoten'
  | 'ausruestung'
  | 'glossar'
  | 'kueche';

export interface CategoryDef {
  /** internal key === Astro collection name === url slug */
  key: CategoryKey;
  /** plural label, used in navigation and headings */
  label: string;
  /** singular label, used on detail pages */
  singular: string;
  /** emoji icon used across cards & nav */
  icon: string;
  /** one-line description for cards & hubs */
  short: string;
  /** css custom accent (maritime palette) */
  accent: string;
  /** show in the main navigation */
  inNav: boolean;
  /** include entries in the global search index */
  inSearch: boolean;
}

export const CATEGORIES: CategoryDef[] = [
  {
    key: 'fische',
    label: 'Fische',
    singular: 'Fischart',
    icon: '🐟',
    short: 'Hunderte Fischarten aus Süß- und Salzwasser – mit Steckbrief, Lebensraum und Fangtipps.',
    accent: '#0ea5b7',
    inNav: true,
    inSearch: true,
  },
  {
    key: 'techniken',
    label: 'Techniken',
    singular: 'Angeltechnik',
    icon: '🎣',
    short: 'Vom Fliegenfischen bis zum Brandungsangeln – alle Methoden Schritt für Schritt erklärt.',
    accent: '#2563eb',
    inNav: true,
    inSearch: true,
  },
  {
    key: 'gewaesser',
    label: 'Gewässer',
    singular: 'Gewässer',
    icon: '🌊',
    short: 'Flüsse, Seen, Meere und Riffe – Gewässertypen und berühmte Angelreviere weltweit.',
    accent: '#0891b2',
    inNav: true,
    inSearch: true,
  },
  {
    key: 'regionen',
    label: 'Regionen',
    singular: 'Region',
    icon: '🗺️',
    short: 'Angeln rund um den Globus – charakteristische Arten, Reviere und Saisons je Region.',
    accent: '#059669',
    inNav: true,
    inSearch: true,
  },
  {
    key: 'koeder',
    label: 'Köder',
    singular: 'Köder',
    icon: '🪱',
    short: 'Natur- und Kunstköder, Montagen und Vorfächer – was wann am besten fängt.',
    accent: '#d97706',
    inNav: true,
    inSearch: true,
  },
  {
    key: 'knoten',
    label: 'Knoten',
    singular: 'Angelknoten',
    icon: '🪢',
    short: 'Die wichtigsten Angelknoten – Schritt für Schritt, mit Tragkraft und Einsatzzweck.',
    accent: '#7c3aed',
    inNav: true,
    inSearch: true,
  },
  {
    key: 'ausruestung',
    label: 'Ausrüstung',
    singular: 'Ausrüstung',
    icon: '🧰',
    short: 'Ruten, Rollen, Schnüre & Zubehör – worauf es bei der Auswahl wirklich ankommt.',
    accent: '#475569',
    inNav: true,
    inSearch: true,
  },
  {
    key: 'glossar',
    label: 'Glossar',
    singular: 'Begriff',
    icon: '📖',
    short: 'Anglerlatein verständlich erklärt – Fachbegriffe von A bis Z.',
    accent: '#be185d',
    inNav: true,
    inSearch: true,
  },
  {
    key: 'kueche',
    label: 'Küche',
    singular: 'Rezept',
    icon: '🍽️',
    short: 'Den Fang verwerten: filetieren, räuchern, beizen und feine Rezepte rund um den Fisch.',
    accent: '#c2410c',
    inNav: false,
    inSearch: true,
  },
];

export const NAV = CATEGORIES.filter((c) => c.inNav);

export function getCategory(key: CategoryKey): CategoryDef {
  const c = CATEGORIES.find((x) => x.key === key);
  if (!c) throw new Error(`Unknown category: ${key}`);
  return c;
}

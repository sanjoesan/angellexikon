import { getCollection } from 'astro:content';
import { CATEGORIES } from '../consts';
import { withBase } from './url';

export interface LinkTarget {
  url: string;
  icon: string;
  cat: string;
  id: string;
}

let cache: Map<string, LinkTarget> | null = null;

/** Normalise a name for fuzzy-ish exact matching across collections. */
export function norm(s: string): string {
  return (s || '')
    .toLowerCase()
    .replace(/\(.*?\)/g, '') // drop parentheticals like "(leicht)"
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Build a global index from entry names (and aliases) to their detail URL.
 * Lets us turn plain strings in the data (e.g. techniques: ["Spinnfischen"])
 * into real cross-links between lexicon entries.
 */
export async function nameIndex(): Promise<Map<string, LinkTarget>> {
  if (cache) return cache;
  const m = new Map<string, LinkTarget>();
  for (const cat of CATEGORIES) {
    let entries: any[] = [];
    try {
      entries = await getCollection(cat.key as any);
    } catch {
      entries = [];
    }
    for (const e of entries) {
      const d = e.data as any;
      const target: LinkTarget = {
        url: withBase(`/${cat.key}/${e.id}/`),
        icon: cat.icon,
        cat: cat.label,
        id: e.id,
      };
      const names = [d.name, ...(d.aliases || [])].filter(Boolean);
      for (const n of names) {
        const key = norm(n);
        if (key && !m.has(key)) m.set(key, target);
      }
    }
  }
  cache = m;
  return m;
}

/** Turn an array of names into chip descriptors, linking the ones we know. */
export async function linkify(
  names: string[] | undefined
): Promise<Array<{ label: string; href?: string }>> {
  if (!names || !names.length) return [];
  const idx = await nameIndex();
  return names.map((label) => {
    const hit = idx.get(norm(label));
    return hit ? { label, href: hit.url } : { label };
  });
}

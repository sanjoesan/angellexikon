import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { CATEGORIES } from '../consts';
import { withBase } from '../utils/url';

// Builds the JSON search index consumed by the client-side search modal.
export const GET: APIRoute = async () => {
  const out: any[] = [];

  for (const cat of CATEGORIES) {
    if (!cat.inSearch) continue;
    const entries = await getCollection(cat.key as any);
    for (const e of entries) {
      const d = e.data as any;
      const keywords = [
        d.nameLat,
        d.nameEn,
        d.family,
        d.category,
        d.type,
        d.continent,
        ...(d.aliases || []),
        ...(d.regions || []),
        ...(d.countries || []),
        ...(d.species || []),
        ...(d.targetFish || []),
        ...(d.techniques || []),
        ...(d.waters || []),
      ]
        .filter(Boolean)
        .join(' ');

      out.push({
        id: e.id,
        name: d.name,
        tagline: d.tagline || '',
        cat: cat.label,
        catKey: cat.key,
        icon: cat.icon,
        url: withBase(`/${cat.key}/${e.id}/`),
        keywords,
      });
    }
  }

  return new Response(JSON.stringify(out), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

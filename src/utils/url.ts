// Helper utilities for building correct URLs under the GitHub Pages base path.
//
// On GitHub Pages the site lives under e.g. "/angellexikon/", so every internal
// link and every reference to a file in /public must be prefixed with that base.
// Astro exposes the configured base via import.meta.env.BASE_URL (always ends "/").

const RAW_BASE = import.meta.env.BASE_URL; // e.g. "/angellexikon/" or "/"

/** The base path without a trailing slash. "" when the site is hosted at root. */
export const BASE = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;

/**
 * Prefix an internal, absolute path with the site base.
 * @example withBase('/fische/hecht/') -> '/angellexikon/fische/hecht/'
 * @example withBase('/favicon.svg')   -> '/angellexikon/favicon.svg'
 */
export function withBase(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}` || '/';
}

/** Convenience builder for a detail page inside a category collection. */
export function entryUrl(categorySlug: string, id: string): string {
  return withBase(`/${categorySlug}/${id}/`);
}

/** Build an absolute URL (origin + base + path) for canonical/OG tags. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const rel = withBase(path);
  return site ? new URL(rel, site).href : rel;
}

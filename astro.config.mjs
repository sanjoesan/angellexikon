// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// --- GitHub Pages configuration ---------------------------------------------
// This is a *project* page, so it is served from https://<user>.github.io/<repo>/
// `site`  -> your GitHub Pages origin   (update <USERNAME> after `gh auth login`)
// `base`  -> the repository name        (keep in sync with the repo "angellexikon")
// The deploy workflow also injects these via env vars, so CI stays correct.
const SITE_URL = process.env.SITE_URL || 'https://sanjoesan.github.io';
const BASE = process.env.BASE_PATH || '/angellexikon';

export default defineConfig({
  site: SITE_URL,
  base: BASE,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
  compressHTML: true,
});

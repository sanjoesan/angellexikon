# Changelog

Alle nennenswerten Änderungen am Angellexikon.
Format orientiert an [Keep a Changelog](https://keepachangelog.com/de/).

## [1.1.0] – 2026-06-15 · Illustrationen, Werkzeuge & mehr Arten

### Hinzugefügt
- **Fisch-Illustrationen:** parametrische SVGs je Art, abgeleitet aus Körperform
  (8 Typen) und Lebensraum (`src/utils/fishshape.ts`, `src/components/FishArt.astro`).
  Sichtbar im Detail-Hero (mit Schweb-Animation) und auf jeder Fisch-Karte.
- **Merkliste / Favoriten:** „Merken"-Button auf Detailseiten, Speicherung im
  `localStorage`, Herz-Symbol mit Zähler im Header, eigene Seite `/merkliste`.
- **Fang-Rechner (`/rechner`):** Gewichtsschätzung aus Länge bzw. Länge + Umfang,
  plus Trophäen-Index gegen die Maximalgröße der Art.
- **47 weitere Fischarten** (40 → **87**), weltweit gemischt von heimisch bis Big-Game.
- **Werkzeuge-Sektion** auf der Startseite; Links in Footer & Mobile-Navigation.

### Geändert
- Suchindex umfasst nun 272 Einträge; 286 Seiten im Build.

## [1.0.0] – 2026-06-15 · Erstveröffentlichung

### Hinzugefügt
- Statisches Angellexikon auf Basis von **Astro 6**, deployt über GitHub Actions
  auf **GitHub Pages**.
- **8 Kategorien** mit ~225 Einträgen: Fische, Techniken, Gewässer, Regionen,
  Köder, Knoten, Ausrüstung, Glossar (Daten als JSON in `src/data/`).
- Design **„Natur & Maritim"** mit Hell-/Dunkelmodus, voll responsiv.
- **Echtzeit-Volltextsuche** (⌘K / `/`) mit Fuse.js.
- **Automatische Querverlinkung** zwischen Einträgen.
- **Saison-Kalender** (`/saison`), Über-Seite (`/ueber`), 404-Seite.
- Sitemap, Open-Graph-Tags, Favicon.

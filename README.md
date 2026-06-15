# 🎣 Angellexikon

> Das große, frei zugängliche **Lexikon des Angelns** – Fischarten, Techniken, Gewässer und Reviere aus aller Welt.

Eine schnelle, responsive und werbefreie statische Website mit über **225 Einträgen** in acht Wissensbereichen. Gebaut mit [Astro](https://astro.build), durchsuchbar in Echtzeit und automatisch über GitHub Pages veröffentlicht.

## ✨ Features

- **8 Kategorien:** 🐟 Fische · 🎣 Techniken · 🌊 Gewässer · 🗺️ Regionen · 🪱 Köder · 🪢 Knoten · 🧰 Ausrüstung · 📖 Glossar
- **225+ Einträge** mit Steckbriefen, Schritt-für-Schritt-Anleitungen, Praxis-Tipps und Saison-Angaben
- **Blitzschnelle Volltextsuche** (⌘K / `/`) über alle Einträge – clientseitig mit [Fuse.js](https://fusejs.io)
- **Automatische Querverlinkung:** Fische verlinken auf passende Techniken, Köder, Gewässer & Regionen und umgekehrt
- **Saison-Kalender:** Welcher Fisch beißt wann?
- **Design „Natur & Maritim"** mit Hell-/Dunkelmodus, voll responsiv vom Smartphone bis zum Desktop
- **SEO-freundlich:** echte statische HTML-Seiten, Sitemap, Open-Graph-Tags

## 🚀 Lokale Entwicklung

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Entwicklungsserver auf http://localhost:4321/angellexikon/
npm run build    # Produktions-Build nach ./dist
npm run preview  # gebauten Build lokal ansehen
```

## 🌍 Deployment

Das Projekt deployt sich **automatisch** über GitHub Actions auf GitHub Pages:

1. Jeder Push auf `main` startet den Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
2. Astro baut die Seite; `site` und `base` werden automatisch aus dem Repository abgeleitet.
3. Das Ergebnis wird auf GitHub Pages veröffentlicht.

> **Hinweis:** Die Seite läuft als *Project Page* unter `https://<dein-name>.github.io/angellexikon/`.
> Heißt dein Repository anders, passt der `base`-Pfad sich über den Workflow automatisch an.
> In **Settings → Pages** muss als Quelle **„GitHub Actions"** ausgewählt sein.

## 🗂️ Projektstruktur

```
src/
├── components/      # Header, Footer, Karten, Suche, Wellen-Divider …
├── content.config.ts# Zod-Schemas & Loader für alle Collections
├── data/            # 📦 Die gesamten Inhalte als JSON (eine Datei je Kategorie)
├── layouts/         # BaseLayout (Head, Meta, Theme, Skripte)
├── pages/           # Startseite, [cat]/ (Übersicht), [cat]/[id] (Detail), Saison, Über, 404
├── styles/          # global.css – das komplette Design-System
└── utils/           # URL-/Base-Path-Helfer, Querverlinkungs-Index
```

## ➕ Inhalte erweitern

Alle Inhalte stehen als JSON in [`src/data/`](src/data/). Um einen Eintrag hinzuzufügen, ergänzt
du einfach ein Objekt im passenden Array (Schema siehe [`src/content.config.ts`](src/content.config.ts)).
Jeder Eintrag braucht mindestens `id`, `name` und `tagline`. Beim nächsten Build entstehen Detailseite,
Suchindex und Querverlinkung automatisch.

## 🛠️ Tech-Stack

[Astro](https://astro.build) · [Fuse.js](https://fusejs.io) · [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) · Vanilla CSS & JS · GitHub Actions & Pages

## ⚖️ Lizenz

[MIT](LICENSE) – frei nutzbar, gerne mit Sternchen ⭐

## 🐟 Haftungsausschluss

Alle Angaben dienen Informationszwecken und sind allgemeine Richtwerte. Beachte stets die örtlichen
gesetzlichen Bestimmungen, **Schonzeiten**, **Mindestmaße** und benötigten **Papiere** deines Gewässers.
Angle waidgerecht und respektvoll. *Petri Heil!*

import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Shared helpers --------------------------------------------------------------
const strList = z.array(z.string());

// Most fields are optional on purpose: the data set grows over time and entries
// should never break the build just because one detail is missing. The title
// (`name`) and a short `tagline` are the only hard requirements everywhere.

// 🐟 Fische -------------------------------------------------------------------
const fische = defineCollection({
  loader: file('src/data/fische.json'),
  schema: z.object({
    name: z.string(),
    nameLat: z.string().optional(),
    nameEn: z.string().optional(),
    aliases: strList.optional(),
    family: z.string().optional(),
    order: z.string().optional(),
    habitat: z.string().optional(), // Süßwasser | Salzwasser | Brackwasser | Wandernd
    regions: strList.optional(),
    waters: strList.optional(),
    maxLength_cm: z.number().optional(),
    maxWeight_kg: z.number().optional(),
    lifespan_years: z.number().optional(),
    diet: z.string().optional(),
    spawningSeason: z.string().optional(),
    bestSeason: strList.optional(),
    techniques: strList.optional(),
    baits: strList.optional(),
    conservation: z.string().optional(),
    minSize_cm: z.number().optional(),
    closedSeason: z.string().optional(), // Schonzeit
    difficulty: z.string().optional(),
    tagline: z.string(),
    description: z.string().optional(),
    tips: strList.optional(),
    funFacts: strList.optional(),
    featured: z.boolean().optional(),
  }),
});

// 🎣 Angeltechniken -----------------------------------------------------------
const techniken = defineCollection({
  loader: file('src/data/techniken.json'),
  schema: z.object({
    name: z.string(),
    nameEn: z.string().optional(),
    category: z.string().optional(), // Spinnfischen | Friedfischangeln | Meeresangeln | ...
    difficulty: z.string().optional(),
    tagline: z.string(),
    description: z.string().optional(),
    targetFish: strList.optional(),
    waters: strList.optional(),
    gear: strList.optional(),
    baits: strList.optional(),
    bestSeason: strList.optional(),
    steps: strList.optional(),
    tips: strList.optional(),
    pros: strList.optional(),
    cons: strList.optional(),
    origin: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

// 🌊 Gewässer -----------------------------------------------------------------
const gewaesser = defineCollection({
  loader: file('src/data/gewaesser.json'),
  schema: z.object({
    name: z.string(),
    kind: z.string().optional(), // 'typ' (Gewässertyp) | 'revier' (benanntes Gewässer)
    type: z.string().optional(), // Fluss | See | Meer | Ozean | Riff | Talsperre | ...
    region: z.string().optional(),
    country: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    tagline: z.string(),
    description: z.string().optional(),
    species: strList.optional(),
    techniques: strList.optional(),
    characteristics: strList.optional(),
    bestSeason: strList.optional(),
    tips: strList.optional(),
    featured: z.boolean().optional(),
  }),
});

// 🗺️ Regionen -----------------------------------------------------------------
const regionen = defineCollection({
  loader: file('src/data/regionen.json'),
  schema: z.object({
    name: z.string(),
    nameEn: z.string().optional(),
    continent: z.string().optional(),
    tagline: z.string(),
    description: z.string().optional(),
    countries: strList.optional(),
    waters: strList.optional(),
    species: strList.optional(),
    techniques: strList.optional(),
    bestSeason: strList.optional(),
    highlights: strList.optional(),
    tips: strList.optional(),
    featured: z.boolean().optional(),
  }),
});

// 🪱 Köder & Montagen ---------------------------------------------------------
const koeder = defineCollection({
  loader: file('src/data/koeder.json'),
  schema: z.object({
    name: z.string(),
    type: z.string().optional(), // Naturköder | Kunstköder | Montage | Vorfach | Teig/Boilie
    tagline: z.string(),
    description: z.string().optional(),
    targetFish: strList.optional(),
    techniques: strList.optional(),
    waters: strList.optional(),
    bestSeason: strList.optional(),
    howto: strList.optional(),
    tips: strList.optional(),
    featured: z.boolean().optional(),
  }),
});

// 🪢 Knoten -------------------------------------------------------------------
const knoten = defineCollection({
  loader: file('src/data/knoten.json'),
  schema: z.object({
    name: z.string(),
    nameEn: z.string().optional(),
    use: z.string().optional(), // Einsatzzweck
    connects: z.string().optional(), // z.B. "Schnur an Haken"
    strength: z.string().optional(), // Tragkraft, z.B. "ca. 95 %"
    difficulty: z.string().optional(),
    tagline: z.string(),
    description: z.string().optional(),
    steps: strList.optional(),
    tips: strList.optional(),
    featured: z.boolean().optional(),
  }),
});

// 🧰 Ausrüstung ---------------------------------------------------------------
const ausruestung = defineCollection({
  loader: file('src/data/ausruestung.json'),
  schema: z.object({
    name: z.string(),
    category: z.string().optional(), // Rute | Rolle | Schnur | Haken | Kleinteil | Bekleidung | Elektronik
    tagline: z.string(),
    description: z.string().optional(),
    types: strList.optional(),
    criteria: strList.optional(), // Auswahlkriterien
    forTechniques: strList.optional(),
    tips: strList.optional(),
    featured: z.boolean().optional(),
  }),
});

// 📖 Glossar ------------------------------------------------------------------
const glossar = defineCollection({
  loader: file('src/data/glossar.json'),
  schema: z.object({
    name: z.string(), // der Begriff
    aliases: strList.optional(),
    category: z.string().optional(),
    tagline: z.string(), // Kurzdefinition
    description: z.string().optional(),
    related: strList.optional(),
  }),
});

// 🍽️ Küche & Rezepte ---------------------------------------------------------
const kueche = defineCollection({
  loader: file('src/data/kueche.json'),
  schema: z.object({
    name: z.string(),
    category: z.string().optional(), // Grundtechnik | Konservierung | Rezept | Küchenpraxis
    difficulty: z.string().optional(),
    time: z.string().optional(),
    tagline: z.string(),
    description: z.string().optional(),
    forFish: strList.optional(),
    ingredients: strList.optional(),
    steps: strList.optional(),
    tips: strList.optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  fische,
  techniken,
  gewaesser,
  regionen,
  koeder,
  knoten,
  ausruestung,
  glossar,
  kueche,
};

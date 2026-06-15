// Derives a stylised illustration (body type + colour palette) for any fish
// entry from its name / family / habitat. Works for new species automatically.

export type BodyType = 'pike' | 'carp' | 'salmonid' | 'tuna' | 'flat' | 'eel' | 'perch' | 'generic';

function hay(d: any): string {
  return [d?.name, d?.nameLat, d?.nameEn, d?.family, ...(d?.aliases || [])]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

export function fishBodyType(d: any): BodyType {
  const h = hay(d);
  const has = (...ks: string[]) => ks.some((k) => h.includes(k));
  if (has('aal', 'anguill', 'eel', 'muraen', 'schlangenkopf', 'snakehead')) return 'eel';
  if (has('scholle', 'flunder', 'butt', 'heilbutt', 'kliesche', 'seezunge', 'sole', 'plaice', 'flounder', 'halibut', 'pleuronect', 'flatfish')) return 'flat';
  if (has('thun', 'tuna', 'marlin', 'schwertfisch', 'swordfish', 'segelfisch', 'sailfish', 'wahoo', 'bonito', 'makrele', 'mackerel', 'scombr', 'mahi', 'cobia', 'seriola', 'amberjack', 'trevally', 'permit', 'roosterfish', 'dorado')) return 'tuna';
  if (has('hecht', 'esox', 'pike', 'barracuda', 'hornhecht', 'belone', ' gar')) return 'pike';
  if (has('forelle', 'lachs', 'salmo', 'salvelinus', 'saibling', 'renke', 'coregon', 'aesche', 'thymallus', 'huchen', 'grayling', 'trout', 'salmon', 'char', 'whitefish', 'marmor')) return 'salmonid';
  if (has('barsch', 'bass', 'zander', 'sander', 'perca', 'perch', 'drum', 'snook', 'snapper', 'schnapper', 'tigerfisch', 'nilbarsch', 'peacock', 'kaulbarsch', 'rotbarsch', 'goldbrasse', 'dorade', 'brasse')) return 'perch';
  if (has('karpfen', 'carp', 'cyprin', 'schleie', 'tinca', 'rotauge', 'rotfeder', 'doebel', 'aland', 'nase', 'barbe', 'karausche', 'giebel', 'gruendling', 'ukelei', 'laube', 'brassen', 'brachsen', 'bream', 'rutilus', 'barbus', 'mahseer', 'arapaima', 'zaehrte', 'guester')) return 'carp';
  return 'generic';
}

export function fishHasBill(d: any): boolean {
  const h = hay(d);
  return ['marlin', 'schwertfisch', 'swordfish', 'segelfisch', 'sailfish', 'speerfisch'].some((k) => h.includes(k));
}

export interface FishPalette {
  body1: string;
  body2: string;
  belly: string;
  fin: string;
  accent: string;
  eye: string;
  type: BodyType;
  bill: boolean;
}

export function fishColors(d: any): FishPalette {
  const type = fishBodyType(d);
  const habitat = (d?.habitat || '').toLowerCase();

  let body1 = '#2f7d7a', body2 = '#6fc7bf', belly = '#eef8f6', fin = '#256460', accent = '#13b8a6';
  if (habitat.includes('salz')) { body1 = '#1f5f8b'; body2 = '#5aa9d6'; belly = '#eef6fb'; fin = '#184e73'; accent = '#2563eb'; }
  else if (habitat.includes('sü') || habitat.includes('suess')) { body1 = '#4a7c3f'; body2 = '#8fbf6b'; belly = '#f4f8ec'; fin = '#3c6b34'; accent = '#5d8a2a'; }
  else if (habitat.includes('wand')) { body1 = '#2f7d7a'; body2 = '#6fc7bf'; belly = '#eef8f6'; fin = '#256460'; accent = '#13b8a6'; }
  else if (habitat.includes('brack')) { body1 = '#3f7080'; body2 = '#86b7bf'; belly = '#eef5f6'; fin = '#345a66'; accent = '#0891b2'; }

  if (type === 'salmonid') accent = '#e07a8a';
  if (type === 'tuna') { body1 = '#1c4f7c'; body2 = '#56b0e0'; belly = '#f0f7fb'; fin = '#15406a'; accent = '#f5b73c'; }
  if (type === 'perch') accent = '#e0a23a';

  return { body1, body2, belly, fin, accent, eye: '#0d2b36', type, bill: fishHasBill(d) };
}

// Length–weight coefficients (W[g] = a * L[cm]^b) used by the Fang-Rechner.
export function weightCoeff(type: BodyType): { a: number; b: number } {
  switch (type) {
    case 'eel': return { a: 0.0009, b: 3.1 };
    case 'pike': return { a: 0.0055, b: 3.0 };
    case 'salmonid': return { a: 0.0100, b: 3.0 };
    case 'carp': return { a: 0.0180, b: 3.0 };
    case 'perch': return { a: 0.0110, b: 3.05 };
    case 'tuna': return { a: 0.0180, b: 3.0 };
    case 'flat': return { a: 0.0150, b: 3.0 };
    default: return { a: 0.0110, b: 3.0 };
  }
}

let _uid = 0;
export const nextUid = (): number => ++_uid;

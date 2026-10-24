// Content strings use Unicode super- and subscripts (¹²C, 10⁻¹⁰, T₉, E꜀.ₘ.).
// Inter lacks most of those glyphs, so they are rendered as <sup>/<sub> runs.

const SUP: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁻': '−', '⁺': '+',
};
const SUB: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  'ₘ': 'm', '꜀': 'c',
};

const supChars = Object.keys(SUP).join('');
const subChars = Object.keys(SUB).join('');
// A subscript run may carry dots, as in E꜀.ₘ.
const pattern = new RegExp(`([${supChars}]+)|([${subChars}][${subChars}.]*)`, 'gu');

export type Run = { kind: 'text' | 'sup' | 'sub'; text: string };

export function rich(s: string): Run[] {
  const runs: Run[] = [];
  let last = 0;
  for (const m of s.matchAll(pattern)) {
    if (m.index! > last) runs.push({ kind: 'text', text: s.slice(last, m.index) });
    if (m[1]) runs.push({ kind: 'sup', text: [...m[1]].map((c) => SUP[c]).join('') });
    else runs.push({ kind: 'sub', text: [...m[2]].map((c) => SUB[c] ?? c).join('') });
    last = m.index! + m[0].length;
  }
  if (last < s.length) runs.push({ kind: 'text', text: s.slice(last) });
  return runs;
}

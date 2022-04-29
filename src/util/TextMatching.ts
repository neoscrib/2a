import SortedMap from '../SortedMap';

export default class TextMatching {
    /**
     * Calculates the Levenshtein distance between two text sequences
     * @param {string} a First string
     * @param {string} b Second string
     * @param {boolean} caseInsensitive Whether to calculate the distance in a case-insensitive manner
     * @returns {number} The Levenshtein distance between the two test sequences
     */
    public static levenshtein(a: string, b: string, caseInsensitive: boolean = false): number {
        const s = caseInsensitive ? a.toLowerCase() : a;
        const t = caseInsensitive ? b.toLowerCase() : b;
        const d: number[][] = [];

        for (let x = 0; x <= s.length; x++) {
            const arr = [];
            for (let y = 0; y <= t.length; y++) {
                arr.push(0);
            }
            d.push(arr);
        }

        for (let i = 1; i <= s.length; i++) {
            d[i][0] = i;
        }

        for (let j = 1; j <= t.length; j++) {
            d[0][j] = j;
        }

        for (let j = 0, J = 1; j < t.length; j++, J++) {
            for (let i = 0, I = 1; i < s.length; i++, I++) {
                const substitutionCost = s[i] === t[j] ? 0 : 1;
                d[I][J] = Math.min(d[i][J] + 1, d[I][j] + 1, d[i][j] + substitutionCost);
            }
        }

        return d[s.length][t.length];
    }

    public static matchAll(a: string[], b: string[], replacements: (string | RegExp)[] = []): [ string, string ][] {
        const sorted = new SortedMap<number, [ string, string ][]>();
        const replace = (s: string) => replacements.reduce((acc: string, cur) => acc.replace(cur, ''), s) as string;

        for (const c of a) {
            const e = replace(c);

            for (const d of b) {
                const f = replace(d);
                const score = TextMatching.levenshtein(e, f);
                (sorted.get(score) ?? sorted.set(score, []).get(score)).push([ c, d ]);
            }
        }

        const usedA = new Set<string>();
        const usedB = new Set<string>();
        const matches: [ string, string ][] = [];

        for (const [ , scores ] of sorted) {
            for (const [ x, y ] of scores) {
                if (!usedA.has(x) && !usedB.has(y)) {
                    matches.push([ x, y ]);
                    usedA.add(x);
                    usedB.add(y);
                }

                if (usedA.size === a.length) {
                    return matches.sort(([ x ], [ y ]) => x.localeCompare(y));
                }
            }
        }
    }
}

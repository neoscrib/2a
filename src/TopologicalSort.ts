export default class TopologicalSort {
    private static printCircular(items: [ string, string ][]) {
        // we have a circular graph... find and print them out
        const candidates = new Map<string, Set<string>>();
        for (const [ x, y ] of items) {
            (candidates.get(y) ?? candidates.set(y, new Set()).get(y)).add(x);
        }
        const circular = [ ...candidates.entries() ].filter(([ key, value ]) => [ ...value ].some(x => candidates.get(x)?.has(key)))
            .map(([ key, value ]) => [ key, [ ...value ] ]);
        throw new Error(`Circular dependency detected! ${JSON.stringify(circular)}`);
    }

    private static tsort(items: [ string, string ][]): string[] {
        const outgoing = new Map<string, string[]>();
        const incoming = new Map<string, { n: number }>();

        for (const [ x, y ] of items) {
            (outgoing.get(x) ?? outgoing.set(x, []).get(x)).push(y);
            (incoming.get(y) ?? incoming.set(y, { n: 0 }).get(y)).n++;
        }

        const s: string[] = [];
        for (const x of outgoing.keys()) {
            if (!incoming.has(x)) {
                s.unshift(x);
            }
        }

        const l: string[] = [];
        let remaining = incoming.size;

        while (s.length > 0) {
            const n = s.pop();
            l.push(n);

            for (const m of outgoing.get(n) ?? []) {
                if (--incoming.get(m).n === 0) {
                    remaining--;
                    s.unshift(m);
                }
            }
        }

        if (remaining > 0) {
            TopologicalSort.printCircular(items);
        }

        return l;
    }

    public static sort(items: [ string, string ][]): string[];
    /**
     * Sorts the list of items in topological order.
     * @param items The list of items to sort.
     * @param keySelector A function that returns the key for each item; this is referred to by the dependencies of other items.
     * @param dependenciesSelector A function that returns the dependencies of each item.
     */
    public static sort<T>(items: T[], keySelector: (item: T) => string, dependenciesSelector: (item: T) => string[]): T[];
    public static sort<T = [ string, string ]>(items: T[], keySelector?: (item: T) => string, dependenciesSelector?: (item: T) => string[]): T[] | string[] {
        if (typeof keySelector === 'function' && typeof dependenciesSelector === 'function') {
            if (items.length === 0) {
                // nothing to do
                return items;
            }

            const set = new Set(items);
            const sorted: T[] = [];

            let previousGraphSize;
            do {
                previousGraphSize = sorted.length;
                for (const item of set) {
                    const dependencies = dependenciesSelector(item) ?? [];
                    if (dependencies.every(p => sorted.some(d => keySelector(d) === p))) {
                        sorted.push(item);
                        set.delete(item);
                    }
                }
            } while (previousGraphSize < sorted.length);

            for (const item of set) {
                console.error(`Item ${keySelector(item)} specifies a circular dependency or a dependency that does not exist (${(dependenciesSelector(item) ?? []).join(', ')}).`);
            }

            return sorted;
        } else {
            return TopologicalSort.tsort(items as unknown as [ string, string ][]);
        }
    }
}

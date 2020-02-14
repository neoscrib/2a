import BinarySearch from './BinarySearch';
import Comparator from './Comparator';

export default class SortedMap<K, V> extends Map<K, V> implements IterableIterator<[K, V]> {
    private readonly comparator: (a: K, b: K, c?: V, d?: V) => number;
    private sorted = false;
    private sortedKeys: K[] = [];

    constructor()
    constructor(entries?: IterableIterator<[K, V]> | null, comparator?: (a: K, b: K, c?: V, d?: V) => number)
    constructor(entries?: IterableIterator<[K, V]> | null, comparator: (a: K, b: K, c?: V, d?: V) => number = Comparator.defaultComparator) {
        super(entries);

        if (entries instanceof SortedMap && comparator === entries.comparator) {
            this.sorted = entries.sorted;
            this.sortedKeys = entries.sortedKeys;
        }

        this.comparator = comparator;
    }

    private compare(a: K, b: K, c: V = this.get(a), d: V = this.get(b)): number {
        return (this.comparator || Comparator.defaultComparator)(a, b, c, d);
    }

    public firstKey(): K {
        if (this.size > 0) {
            return this.getSortedKeys()[0];
        } else {
            throw new Error('The map is empty.');
        }
    }

    public lastKey(): K {
        if (this.size > 0) {
            const keys = this.getSortedKeys();
            return keys[keys.length - 1];
        } else {
            throw new Error('The map is empty.');
        }
    }

    public tailMap(fromKey: K): SortedMap<K, V> {
        return new SortedMap<K, V>(this.tailMapInternal(fromKey));
    }

    private *tailMapInternal(fromKey: K): IterableIterator<[K, V]> {
        for (const key of this.keysFrom(fromKey)) {
            yield [ key, this.get(key) ];
        }
    }

    public subMap(fromKey: K, toKey: K): SortedMap<K, V> {
        return this.tailMap(fromKey).headMap(toKey);
    }

    public headMap(toKey: K): SortedMap<K, V> {
        return new SortedMap<K, V>(this.headMapInternal(toKey));
    }

    private *headMapInternal(toKey: K): IterableIterator<[K, V]> {
        for (const key of this.keysTo(toKey)) {
            yield [ key, this.get(key) ];
        }
    }

    public clear(): void {
        this.sorted = false;
        super.clear();
    }

    public delete(key: K): boolean {
        this.sorted = false;
        return super.delete(key);
    }

    public set(key: K, value: V): this {
        if (!this.has(key)) {
            if (this.sorted) {
                // optimistic check in the case items being inserted are already ordered
                const b: K = this.sortedKeys[this.sortedKeys.length - 1];
                if (this.sortedKeys.length > 0 && this.compare(key, b, value) > 0) {
                    this.sortedKeys.push(key);
                } else {
                    this.sorted = false;
                }
            } else if (this.size === 0) {
                this.sortedKeys = [ key ];
                this.sorted = true;
            }
        }
        return super.set(key, value);
    }

    public [ Symbol.iterator ](): IterableIterator<[ K, V ]> {
        return this.entries();
    }

    public *entries(): IterableIterator<[ K, V ]> {
        for (const key of this.getSortedKeys()) {
            yield [ key, this.get(key) ];
        }
    }

    public *keys(): IterableIterator<K> {
        for (const key of this.getSortedKeys()) {
            yield key;
        }
    }

    private getSortedKeys(): K[] {
        if (!this.sorted) {
            this.sortedKeys = [ ...super.keys() ].sort(this.compare.bind(this));
            this.sorted = true;
        }
        return this.sortedKeys;
    }

    private *keysFrom(fromKey: K): IterableIterator<K> {
        const keys: K[] = this.getSortedKeys();
        let start: number = BinarySearch.find(keys, 0, keys.length, fromKey, this.compare.bind(this));
        if (start < 0) {
            start = ~start;
        }

        for (let i = start; i < keys.length; i++) {
            yield keys[i];
        }
    }

    private *keysTo(toKey: K): IterableIterator<K> {
        const keys: K[] = this.getSortedKeys();
        let end: number = BinarySearch.find(keys, 0, keys.length, toKey, this.compare.bind(this));
        if (end < 0) {
            end = ~end;
        }

        for (let i = 0; i < end; i++) {
            yield keys[i];
        }
    }

    public *values(): IterableIterator<V> {
        for (const key of this.getSortedKeys()) {
            yield this.get(key);
        }
    }

    public forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
        for (const key of this.getSortedKeys()) {
            callbackfn.apply(thisArg, [ this.get(key), key, this ]);
        }
    }

    public next(value?: any): IteratorResult<[ K, V ]> {
        return this.entries().next(value);
    }

    public return(value?: any): IteratorResult<[ K, V ]> {
        return this.entries().return(value);
    }

    public throw(e?: any): IteratorResult<[ K, V ]> {
        return this.entries().throw(e);
    }
}

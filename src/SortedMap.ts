import BinarySearch from './BinarySearch';
import Comparator from './Comparator';

export default class SortedMap<K, V> extends Map<K, V> implements IterableIterator<[K, V]> {
    private readonly comparator: (a: K, b: K, c?: V, d?: V) => number;
    private sorted = false;
    private sortedKeys: K[] = [];

    constructor()
    constructor(entries?: Iterable<readonly [K, V]> | null, comparator?: (a: K, b: K, c?: V, d?: V) => number)
    constructor(entries?: Iterable<readonly [K, V]> | null, comparator: (a: K, b: K, c?: V, d?: V) => number = Comparator.defaultComparator) {
        super(entries);

        if (entries instanceof SortedMap && comparator === entries.comparator) {
            this.sorted = entries.sorted;
            this.sortedKeys = entries.sortedKeys;
        }

        this.comparator = comparator;
        this.compare = this.compare.bind(this);
    }

    private compare(a: K, b: K, c: V = this.get(a), d: V = this.get(b)): number {
        return (this.comparator ?? Comparator.defaultComparator)(a, b, c, d);
    }

    /**
     * Returns the first (lowest) key currently in this map.
     * @returns the first (lowest) key currently in this map
     */
    public firstKey(): K {
        if (this.size > 0) {
            return this.getSortedKeys()[0];
        } else {
            throw new Error('The map is empty.');
        }
    }

    /**
     * Returns the last (highest) key currently in this map.
     * @returns the last (highest) key currently in this map
     */
    public lastKey(): K {
        if (this.size > 0) {
            return this.getSortedKeys()[this.size - 1];
        } else {
            throw new Error('The map is empty.');
        }
    }

    /**
     * Returns a view of the portion of this map whose keys are greater than or equal to fromKey.
     * @param fromKey low endpoint (inclusive) of the keys in the returned map
     * @returns a view of the portion of this map whose keys are greater than or equal to fromKey
     */
    public tailMap(fromKey: K): SortedMap<K, V> {
        return new SortedMap<K, V>(this.tailMapInternal(fromKey));
    }

    private *tailMapInternal(fromKey: K): IterableIterator<[K, V]> {
        for (const key of this.keysFrom(fromKey)) {
            yield [ key, this.get(key) ];
        }
    }

    /**
     * Returns a view of the portion of this map whose keys range from fromKey, inclusive, to toKey, exclusive.
     * @param fromKey low endpoint (inclusive) of the keys in the returned map
     * @param toKey high endpoint (exclusive) of the keys in the returned map
     * @returns a view of the portion of this map whose keys range from fromKey, inclusive, to toKey, exclusive
     */
    public subMap(fromKey: K, toKey: K): SortedMap<K, V> {
        return this.tailMap(fromKey).headMap(toKey);
    }

    /**
     * Returns a view of the portion of this map whose keys are strictly less than toKey.
     * @param toKey high endpoint (exclusive) of the keys in the returned map
     * @returns a view of the portion of this map whose keys are strictly less than toKey
     */
    public headMap(toKey: K): SortedMap<K, V> {
        return new SortedMap<K, V>(this.headMapInternal(toKey));
    }

    private *headMapInternal(toKey: K): IterableIterator<[K, V]> {
        for (const key of this.keysTo(toKey)) {
            yield [ key, this.get(key) ];
        }
    }

    /**
     * The clear() method removes all elements from a Map object.
     */
    public clear(): void {
        this.sorted = false;
        super.clear();
    }

    /**
     * The delete() method removes the specified element from a Map object by key.
     * @param {K} key The key of the element to remove from the Map object.
     * @returns {boolean} true if an element in the Map object existed and has been removed, or false if the element does not exist.
     */
    public delete(key: K): boolean {
        const existed = super.delete(key);
        if (existed && this.size === 0) {
            this.sorted = false;
        }
        return existed;
    }

    /**
     * The set() method adds or updates an element with a specified key and a value to a Map object.
     * @param {K} key The key of the element to add to the Map object.
     * @param {V} value The value of the element to add to the Map object.
     * @returns {this} The Map object.
     */
    public set(key: K, value: V): this {
        if (!this.has(key)) {
            if (this.sorted) {
                // optimistic check in the case items being inserted are already ordered
                const b: K = this.sortedKeys[this.sortedKeys.length - 1];
                if (this.compare(key, b, value) > 0) {
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

    /**
     * If the specified key is not already associated with a value associates it with the given value and returns that value, else returns the current value.
     * @param {K} key key with which the specified value is to be associated
     * @param {V} value value to be associated with the specified key
     * @returns {V} the previous value associated with the specified key, or the specified value if there was no mapping for the key.
     */
    public setIfAbsent(key: K, value: V): V {
        if (this.has(key)) {
            return this.get(key);
        } else {
            this.set(key, value);
            return value;
        }
    }

    /**
     * Returns an iterable of entries in the map.
     * @returns {IterableIterator<[K, V]>} an iterable of entries in the map.
     */
    public [Symbol.iterator](): IterableIterator<[ K, V ]> {
        return this.entries();
    }

    /**
     * Returns an iterable of key, value pairs for every entry in the map.
     * @returns {IterableIterator<[K, V]>} an iterable of key, value pairs for every entry in the map.
     */
    public *entries(): IterableIterator<[ K, V ]> {
        for (const key of this.getSortedKeys()) {
            yield [ key, this.get(key) ];
        }
    }

    /**
     * Returns an iterable of keys in the map
     * @returns {IterableIterator<K>} an iterable of keys in the map
     */
    public *keys(): IterableIterator<K> {
        yield* this.getSortedKeys();
    }

    private getSortedKeys(): K[] {
        if (!this.sorted) {
            this.sortedKeys = [ ...super.keys() ].sort(this.compare);
            this.sorted = true;
        }
        return this.sortedKeys;
    }

    private *keysFrom(fromKey: K): IterableIterator<K> {
        const keys: K[] = this.getSortedKeys();
        let start: number = BinarySearch.find(keys, 0, keys.length, fromKey, this.compare);
        if (start < 0) {
            start = ~start;
        }

        for (let i = start; i < keys.length; i++) {
            yield keys[i];
        }
    }

    private *keysTo(toKey: K): IterableIterator<K> {
        const keys: K[] = this.getSortedKeys();
        let end: number = BinarySearch.find(keys, 0, keys.length, toKey, this.compare);
        if (end < 0) {
            end = ~end;
        }

        for (let i = 0; i < end; i++) {
            yield keys[i];
        }
    }

    /**
     * Returns an iterable of values in the map.
     * @returns {IterableIterator<V>} an iterable of values in the map.
     */
    public *values(): IterableIterator<V> {
        for (const [ , value ] of this.entries()) {
            yield value;
        }
    }

    /**
     * The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.
     * @param {(value: V, key: K, map: SortedMap<K, V>) => void} callbackFn Function to execute for each entry in the map.
     * @param thisArg Value to use as this when executing callback.
     */
    public forEach(callbackFn: (value: V, key: K, map: SortedMap<K, V>) => void, thisArg?: any): void {
        for (const [ key, value ] of this.entries()) {
            callbackFn.apply(thisArg, [ value, key, this ]);
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

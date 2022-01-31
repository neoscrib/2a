// tslint:disable:member-ordering
// tslint:disable:unified-signatures

import BinarySearch from './BinarySearch';
import Comparator from './Comparator';
import SortedMap from './SortedMap';

import ComparatorFunction = twoa.ComparatorFunction;
import LzIterable = twoa.LzIterable;
import PredicateFunction = twoa.PredicateFunction;
import SelectorFunction = twoa.SelectorFunction;
import Action = twoa.Action;
import IdentityFunction = twoa.IdentityFunction;
import AccumulatorFunction = twoa.AccumulatorFunction;
import SelectorFunctionNoIndex = twoa.SelectorFunctionNoIndex;

export default class Lz<T> implements IterableIterator<T> {
    public static readonly identityFunction: IdentityFunction<any> = item => item;

    private readonly iterable: IterableIterator<T>;

    constructor(iterable: IterableIterator<T>) {
        this.iterable = iterable;
    }

    /**
     * Returns the input typed as LzIterable<T>.
     * @returns {Lz<T>} The input sequence typed as LzIterable<T>.
     */
    public toIterable(): Lz<T> {
        return Lz.toIterable(this);
    }

    /**
     * Returns the input typed as LzIterable<T>.
     * @param {LzIterable<T>} source The sequence to type as LzIterable<T>.
     * @returns {Lz<T>} The input sequence typed as LzIterable<T>.
     */
    public static toIterable<T>(source: LzIterable<T>): Lz<T> {
        return new Lz(Lz.toIterableInternal(source));
    }

    private static *toIterableInternal<T>(source: LzIterable<T>): IterableIterator<T> {
        yield* source;
    }

    /**
     * Appends a value to the end of the sequence.
     * @param {T[]} elements The value(s) to append to source.
     * @returns {Lz<T>} A new sequence that ends with element.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public append(...elements: T[]): Lz<T> {
        return Lz.append(this, ...elements);
    }

    /**
     * Appends a value to the end of the sequence.
     * @param {LzIterable<T>} source A sequence of values.
     * @param {T[]} elements The value(s) to append to source.
     * @returns {Lz<T>} A new sequence that ends with element.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static append<T>(source: LzIterable<T>, ...elements: T[]): Lz<T> {
        return new Lz<T>(Lz.appendInternal(source, ...elements));
    }

    private static *appendInternal<T>(source: LzIterable<T>, ...elements: T[]): IterableIterator<T> {
        yield* source;
        yield* elements;
    }

    /**
     * Adds a value to the beginning of the sequence.
     * @param {T[]} elements The value(s) to prepend to <i>source</i>.
     * @returns {Lz<T>} A new sequence that begins with <i>element</i>.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public prepend(...elements: T[]): Lz<T> {
        return Lz.prepend(this, ...elements);
    }

    /**
     * Adds a value to the beginning of the sequence.
     * @param {LzIterable<T>} source A sequence of values.
     * @param {T[]} elements The value(s) to prepend to <i>source</i>.
     * @returns {Lz<T>} A new sequence that begins with <i>element</i>.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static prepend<T>(source: LzIterable<T>, ...elements: T[]): Lz<T> {
        return new Lz<T>(Lz.prependInternal(source, ...elements));
    }

    private static *prependInternal<T>(source: LzIterable<T>, ...elements: T[]): IterableIterator<T> {
        yield* elements;
        yield* source;
    }

    /**
     * Concatenates two sequences.
     * @param {LzIterable<T>} second The sequence to concatenate to the first sequence.
     * @returns {Lz<T>} A sequence that contains the concatenated elements of the two input sequences.
     */
    public concat(second: LzIterable<T>): Lz<T> {
        return Lz.concat(this, second);
    }

    /**
     * Concatenates two sequences.
     * @param {LzIterable<T>} first The first sequence to concatenate.
     * @param {LzIterable<T>} second The sequence to concatenate to the first sequence.
     * @returns {Lz<T>} A sequence that contains the concatenated elements of the two input sequences.
     */
    public static concat<T>(first: LzIterable<T>, second: LzIterable<T>): Lz<T> {
        return new Lz<T>(Lz.concatInternal(first, second));
    }

    private static *concatInternal<T>(first: LzIterable<T>, second: LzIterable<T>): IterableIterator<T> {
        yield* first;
        yield* second;
    }

    /**
     * Returns the elements of the specified sequence or the specified value as a singleton collection if the
     * sequence is empty.
     * @param {T} defaultValue The value to return if the sequence is empty.
     * @returns {Lz<T>} A sequence that contains <i>defaultValue</i> if <i>source</i> is empty; otherwise,
     * <i>source</i>
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public defaultIfEmpty(defaultValue: T): Lz<T> {
        return Lz.defaultIfEmpty(this, defaultValue);
    }

    /**
     * Returns the elements of the specified sequence or the specified value as a singleton collection if the sequence
     * is empty.
     * @param {LzIterable<T>} source The sequence to return the specified value for if it is empty.
     * @param {T} defaultValue The value to return if the sequence is empty.
     * @returns {Lz<T>} A sequence that contains <i>defaultValue</i> if <i>source</i> is empty; otherwise,
     * <i>source</i>.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static defaultIfEmpty<T>(source: LzIterable<T>, defaultValue: T): Lz<T> {
        return new Lz<T>(Lz.defaultIfEmptyInternal(source, defaultValue));
    }

    private static *defaultIfEmptyInternal<T>(source: LzIterable<T>, defaultValue: T): IterableIterator<T> {
        let count = 0;
        for (const item of source) {
            yield item;
            count++;
        }

        if (count === 0) {
            yield defaultValue;
        }
    }

    /**
     * Returns distinct elements from a sequence by using a specified ComparatorFunction<T> to compare values.
     * @param {ComparatorFunction<T>} comparator Optional. A ComparatorFunction<T> to compare values.
     * @returns {Lz<T>} A sequence that contains distinct elements from the source sequence.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public distinct(comparator?: ComparatorFunction<T>): Lz<T> {
        return Lz.distinct(this, comparator);
    }

    /**
     * Returns distinct elements from a sequence by using a specified ComparatorFunction<T> to compare values.
     * @param {LzIterable<T>} source The sequence to remove duplicate elements from.
     * @param {ComparatorFunction<T>} comparator Optional. A ComparatorFunction<T> to compare values.
     * @returns {Lz<T>} A sequence that contains distinct elements from the source sequence.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static distinct<T>(source: LzIterable<T>, comparator?: ComparatorFunction<T>): Lz<T> {
        return new Lz(Lz.distinctInternal(source, comparator));
    }

    private static *distinctInternal<T>(source: LzIterable<T>, comparator?: ComparatorFunction<T>): IterableIterator<T> {
        if (typeof comparator !== 'function') {
            yield* new Set(source);
        } else {
            const added: T[] = [];
            for (const item of source) {
                const index: number = BinarySearch.find(added, 0, added.length, item, comparator);
                if (index < 0) {
                    yield item;
                    added.splice(~index, 0, item);
                }
            }
        }
    }

    /**
     * Returns an empty sequence that has the specified type argument.
     * @returns {Lz<T>} An empty sequence whose type argument is <i>T</i>.
     */
    public static empty<T>(): Lz<T> {
        return Lz.toIterable([]);
    }

    /**
     * Produces the set difference of two sequences by using the specified <i>ComparatorFunction<T></i> to compare
     * values.
     * @param {LzIterable<T>} second A sequence whose elements that also occur in the first sequence will
     * cause those elements to be removed from the returned sequence.
     * @param {ComparatorFunction<T>} comparator Optional. A ComparatorFunction<T> to compare values.
     * @returns {Lz<T>} A sequence that contains the set difference of the elements of two sequences.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public except(second: LzIterable<T>, comparator?: ComparatorFunction<T>): Lz<T> {
        return Lz.except(this, second, comparator);
    }

    /**
     * Produces the set difference of two sequences by using the specified <i>ComparatorFunction<T></i> to compare
     * values.
     * @param {LzIterable<T>} first A sequence whose elements that are not also in <i>second</i> will be
     * returned.
     * @param {LzIterable<T>} second A sequence whose elements that also occur in the first sequence will
     * cause those elements to be removed from the returned sequence.
     * @param {ComparatorFunction<T>} comparator Optional. A ComparatorFunction<T> to compare values.
     * @returns {Lz<T>} A sequence that contains the set difference of the elements of two sequences.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static except<T>(first: LzIterable<T>, second: LzIterable<T>,
                            comparator?: ComparatorFunction<T>): Lz<T> {
        return new Lz<T>(Lz.exceptInternal(first, second, comparator));
    }

    private static *exceptInternal<T>(first: LzIterable<T>, second: LzIterable<T>,
                                      comparator: ComparatorFunction<T> = Comparator.defaultComparator): IterableIterator<T> {
        const set: T[] = [ ...Lz.distinctInternal(second, comparator) ].sort(comparator);

        for (const item of first) {
            const index: number = BinarySearch.find(set, 0, set.length, item, comparator);
            if (index < 0) {
                yield item;
            }
        }
    }

    /**
     * Performs the specified action on each element of the sequence.
     * @param {Action<T>>} action The action delegate to perform on each element of the sequence.
     */
    public forEach(action: Action<T>): void {
        Lz.forEach(this, action);
    }

    public static forEach<T>(source: LzIterable<T>, action: Action<T>): void {
        let i = 0;
        for (const item of source) {
            action(item, i++);
        }
    }

    /**
     * Inserts a value into the source sequence at the specified index.
     * @param {T} element The value to insert to <i>source</i>.
     * @param {number} index The index at which to insert <i>element</i>.
     * @returns {Lz<T>} A new sequence that contains <i>element</i> at <i>index</i>.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public insert(element: T, index: number): Lz<T> {
        return Lz.insert(this, element, index);
    }

    /**
     * Inserts a value into the source sequence at the specified index.
     * @param {LzIterable<T>} source The sequence in which to insert the new item.
     * @param {T} element The value to insert to <i>source</i>.
     * @param {number} index The index at which to insert <i>element</i>.
     * @returns {Lz<T>} A new sequence that contains <i>element</i> at <i>index</i>.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static insert<T>(source: LzIterable<T>, element: T, index: number): Lz<T> {
        return new Lz(Lz.insertInternal(source, element, index));
    }

    private static *insertInternal<T>(source: LzIterable<T>, element: T, index: number): IterableIterator<T> {
        let count = 0;
        for (const item of source) {
            if (count++ === index) {
                yield element;
            }
            yield item;
        }
    }

    /**
     * Produces the set intersection of two sequences.
     * @param {LzIterable<T>} second A sequence whose distinct elements that also appear in the first sequence will be returned.
     * @param {ComparatorFunction<T>} comparator A ComparatorFunction<T> to compare values.
     * @returns {Lz<T>} A sequence that contains the elements that form the set intersection of two sequences.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public intersect(second: LzIterable<T>, comparator?: ComparatorFunction<T>): Lz<T> {
        return Lz.intersect(this, second, comparator);
    }

    /**
     * Produces the set intersection of two sequences.
     * @param {LzIterable<T>} first A sequence whose distinct elements that also appear in <i>second</i>
     * will be returned.
     * @param {LzIterable<T>} second A sequence whose distinct elements that also appear in the first sequence will be returned.
     * @param {ComparatorFunction<T>} comparator A ComparatorFunction<T> to compare values.
     * @returns {Lz<T>} A sequence that contains the elements that form the set intersection of two sequences.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static intersect<T>(first: LzIterable<T>, second: LzIterable<T>,
                               comparator?: ComparatorFunction<T>): Lz<T> {
        return new Lz<T>(Lz.intersectInternal(first, second, comparator));
    }

    private static *intersectInternal<T>(first: LzIterable<T>, second: LzIterable<T>,
                                         comparator: ComparatorFunction<T> = Comparator.defaultComparator): IterableIterator<T> {
        const set: T[] = [ ...Lz.distinctInternal(second, comparator) ].sort(comparator);

        for (const item of first) {
            const index: number = BinarySearch.find(set, 0, set.length, item, comparator);
            if (index >= 0) {
                yield item;
            }
        }
    }

    /**
     * Correlates the elements of two sequences based on matching keys.
     * @param {IterableIterator<T2> | T2[]} inner The sequence to join to the first sequence.
     * @param {SelectorFunction<T, K>} outerKeySelector A function to extract the join key from each element of the first sequence.
     * @param {SelectorFunction<T2, K>} innerKeySelector A function to extract the join key from each element of the second sequence.
     * @param {(a: T1, b: T2) => U} resultSelector A function to create a result element from two matching elements.
     * @returns {Lz<U>} A sequence that has elements of type <i>U</i> that are obtained by performing an inner
     * join on two sequences.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public join<T2, K, U>(inner: IterableIterator<T2> | T2[],
                          outerKeySelector: SelectorFunction<T, K>,
                          innerKeySelector: SelectorFunction<T2, K>,
                          resultSelector: (a: T, b: T2) => U): Lz<U> {
        return Lz.join(this, inner, outerKeySelector, innerKeySelector, resultSelector);
    }

    /**
     * Correlates the elements of two sequences based on matching keys.
     * @param {IterableIterator<T1> | T1[]} outer The first sequence to join.
     * @param {IterableIterator<T2> | T2[]} inner The sequence to join to the first sequence.
     * @param {SelectorFunction<T1, K>} outerKeySelector A function to extract the join key from each element of the first sequence.
     * @param {SelectorFunction<T2, K>} innerKeySelector A function to extract the join key from each element of the second sequence.
     * @param {(a: T1, b: T2) => U} resultSelector A function to create a result element from two matching elements.
     * @returns {Lz<U>} A sequence that has elements of type <i>U</i> that are obtained by performing an inner
     * join on two sequences.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static join<T1, T2, K, U>(outer: IterableIterator<T1> | T1[], inner: IterableIterator<T2> | T2[],
                                     outerKeySelector: SelectorFunction<T1, K>,
                                     innerKeySelector: SelectorFunction<T2, K>,
                                     resultSelector: (a: T1, b: T2) => U): Lz<U> {
        return new Lz<U>(Lz.joinInternal(outer, inner, outerKeySelector, innerKeySelector, resultSelector));
    }

    private static *joinInternal<T1, T2, K, U>(outer: IterableIterator<T1> | T1[], inner: IterableIterator<T2> | T2[],
                                               outerKeySelector: SelectorFunction<T1, K>,
                                               innerKeySelector: SelectorFunction<T2, K>,
                                               resultSelector: (a: T1, b: T2) => U): IterableIterator<U> {
        const lookup: Map<K, T2> = Lz.toDictionary(inner, innerKeySelector);
        let i = 0;
        for (const item of outer) {
            const g: T2 = lookup.get(outerKeySelector(item, i++));
            if (g !== undefined) {
                yield resultSelector(item, g);
            }
        }
    }

    /**
     * Returns the last element of a sequence.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {T} The value at the last position in the source sequence.
     * @throws If the source sequence contains no elements or the predicate did not match any elements.
     */
    public last(predicate?: PredicateFunction<T>): T {
        return Lz.last(this, predicate);
    }

    /**
     * Returns the last element of a sequence.
     * @param {LzIterable<T>} source A sequence to return the last element of.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {T} The value at the last position in the source sequence.
     * @throws If the source sequence contains no elements or the predicate did not match any elements.
     */
    public static last<T>(source: LzIterable<T>, predicate?: PredicateFunction<T>): T {
        // optimize if source is an array and using default predicate
        if (Array.isArray(source) && source.length > 0 && !predicate) {
            return source[source.length - 1];
        }

        let result: T;
        let index = 0;
        let found = false;
        for (const item of source) {
            if (predicate?.(item, index++) ?? true) {
                found = true;
                result = item;
            }
        }
        if (!found) {
            throw Error('Source sequence contains no items or the specified predicate did not match any items.');
        }
        return result;
    }

    /**
     * Returns the last element of a sequence, or a default value if no element is found.
     * @param {T} defaultValue The default value.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {T} The value at the last position in the source sequence.
     */
    public lastOrDefault(defaultValue: T, predicate?: PredicateFunction<T>): T {
        return Lz.lastOrDefault(this, defaultValue, predicate);
    }

    /**
     * Returns the last element of a sequence, or a default value if no element is found.
     * @param {LzIterable<T>} source A sequence to return the last element of.
     * @param {T} defaultValue The default value.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {T} The value at the last position in the source sequence.
     */
    public static lastOrDefault<T>(source: LzIterable<T>, defaultValue: T,
                                   predicate?: PredicateFunction<T>): T {
        let result: T;
        let index = 0;
        let found = false;

        if (Array.isArray(source)) {
            for (let i = source.length - 1; i >= 0; i--) {
                const item = source[i];
                if (predicate?.(item, i) ?? true) {
                    found = true;
                    result = item;
                    break;
                }
            }
        } else {
            for (const item of source) {
                if (predicate?.(item, index++) ?? true) {
                    found = true;
                    result = item;
                }
            }
        }

        if (!found) {
            return defaultValue;
        }
        return result;
    }

    /**
     * Sorts the elements of a sequence in ascending order according to a key.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @returns {Lz<T>} A sequence whose elements are sorted according to a key.
     */
    public orderBy<V>(selector: SelectorFunctionNoIndex<T, V>): LzOrdered<T, V>;

    /**
     * Sorts the elements of a sequence in ascending order by using a specified comparator.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @param {ComparatorFunction<V>} comparator A ComparatorFunction<V> to compare keys.
     * @returns {Lz<T>} A sequence whose elements are sorted according to a key.
     */
    public orderBy<V>(selector: SelectorFunctionNoIndex<T, V>, comparator: ComparatorFunction<V>): LzOrdered<T, V>;

    public orderBy<V>(selector: SelectorFunctionNoIndex<T, V>, comparator?: ComparatorFunction<V>): LzOrdered<T, V> {
        return new LzOrdered<T, V>(this, selector, comparator);
    }

    /**
     * Sorts the elements of a sequence in ascending order according to a key.
     * @param {LzIterable<T>} source A sequence of values to order.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @returns {Lz<T>} A sequence whose elements are sorted according to a key.
     */
    public static orderBy<T, V>(source: LzIterable<T>, selector: SelectorFunctionNoIndex<T, V>): LzOrdered<T, V>;

    /**
     * Sorts the elements of a sequence in ascending order by using a specified comparator.
     * @param {LzIterable<T>} source A sequence of values to order.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @param {ComparatorFunction<V>} comparator A ComparatorFunction<V> to compare keys.
     * @returns {Lz<T>} A sequence whose elements are sorted according to a key.
     */
    public static orderBy<T, V>(source: LzIterable<T>, selector: SelectorFunctionNoIndex<T, V>, comparator: ComparatorFunction<V>): LzOrdered<T, V>;

    public static orderBy<T, V>(source: LzIterable<T>, selector: SelectorFunctionNoIndex<T, V>, comparator?: ComparatorFunction<V>): LzOrdered<T, V> {
        return new LzOrdered<T, V>(Lz.toIterable(source), selector, comparator);
    }

    /**
     * Sorts the elements of a sequence in descending order according to a key.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @returns {Lz<T>} A sequence whose elements are sorted according to a key.
     */
    public orderByDescending<V>(selector: SelectorFunctionNoIndex<T, V>): LzOrdered<T, V>;

    /**
     * Sorts the elements of a sequence in descending order by using a specified comparator.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @param {ComparatorFunction<V>} comparator A ComparatorFunction<V> to compare keys.
     * @returns {Lz<T>} A sequence whose elements are sorted according to a key.
     */
    public orderByDescending<V>(selector: SelectorFunctionNoIndex<T, V>, comparator: ComparatorFunction<V>): LzOrdered<T, V>;

    public orderByDescending<V>(selector: SelectorFunctionNoIndex<T, V>, comparator?: ComparatorFunction<V>): LzOrdered<T, V> {
        return new LzOrdered<T, V>(this, selector, comparator, true);
    }

    /**
     * Sorts the elements of a sequence in descending order according to a key.
     * @param {LzIterable<T>} source A sequence of values to order.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @returns {Lz<T>} A sequence whose elements are sorted according to a key.
     */
    public static orderByDescending<T, V>(source: LzIterable<T>, selector: SelectorFunctionNoIndex<T, V>): LzOrdered<T, V>;

    /**
     * Sorts the elements of a sequence in descending order by using a specified comparator.
     * @param {LzIterable<T>} source A sequence of values to order.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @param {ComparatorFunction<V>} comparator A ComparatorFunction<V> to compare keys.
     * @returns {Lz<T>} A sequence whose elements are sorted according to a key.
     */
    public static orderByDescending<T, V>(source: LzIterable<T>, selector: SelectorFunctionNoIndex<T, V>, comparator: ComparatorFunction<V>): LzOrdered<T, V>;

    public static orderByDescending<T, V>(source: LzIterable<T>, selector: SelectorFunctionNoIndex<T, V>, comparator?: ComparatorFunction<V>): LzOrdered<T, V> {
        return new LzOrdered<T, V>(Lz.toIterable(source), selector, comparator, true);
    }

    /**
     * Generates a sequence of integral numbers within a specified range.
     * @param {number} start The value of the first integer in the sequence.
     * @param {number} count The number of sequential integers to generate.
     * @returns {Lz<number>} A sequence that contains a range of sequential integral numbers.
     * @throws If count is less than 0.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static range(start: number, count: number): Lz<number> {
        return new Lz<number>(Lz.rangeInternal(start, count));
    }

    private static *rangeInternal(start: number, count: number): IterableIterator<number> {
        if (count >= 0) {
            for (let n = start; n < start + count; n++) {
                yield n;
            }
        } else {
            for (let n = start; n > start + count; n--) {
                yield n;
            }
        }
    }

    /**
     * Generates a sequence that contains one repeated value.
     * @param {T} element The value to be repeated.
     * @param {number} count The number of times to repeat the value in the generated sequence.
     * @returns {Lz<T>} A sequence that contains a repeated value.
     * @throws If count is less than 0.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static repeat<T>(element: T, count: number): Lz<T> {
        return new Lz<T>(Lz.repeatInternal(element, count));
    }

    private static *repeatInternal<T>(element: T, count: number): IterableIterator<T> {
        if (count < 0) {
            throw new Error('Count is less than 0.');
        }
        for (let i = 0; i < count; i++) {
            yield element;
        }
    }

    /**
     * Generates a sequence that contains the results of a repeated action.
     * @param {SelectorFunction<void, T>} selector
     * @param {number} count The number of times to repeat the action in the generated sequence.
     * @returns {Lz<T>} A sequence that contains the results of the repeated action.
     * @throws If count is less than 0.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static repeatAction<T>(selector: SelectorFunction<void, T>, count: number): Lz<T> {
        return new Lz<T>(Lz.repeatActionInternal(selector, count));
    }

    private static *repeatActionInternal<T>(selector: SelectorFunction<void, T>, count: number): IterableIterator<T> {
        if (count < 0) {
            throw new Error('Count is less than 0.');
        }
        for (let i = 0; i < count; i++) {
            yield selector(undefined, i);
        }
    }

    /**
     * Inverts the order of the elements in a sequence.
     * @returns {Lz<T>} A sequence whose elements correspond to those of the input sequence in reverse order.
     */
    public reverse(): Lz<T> {
        return Lz.reverse(this);
    }

    /**
     * Inverts the order of the elements in a sequence.
     * @param {LzIterable<T>} source A sequence of values to reverse.
     * @returns {Lz<T>} A sequence whose elements correspond to those of the input sequence in reverse order.
     */
    public static reverse<T>(source: LzIterable<T>): Lz<T> {
        return new Lz<T>(Lz.reverseInternal(source));
    }

    private static *reverseInternal<T>(source: LzIterable<T>): IterableIterator<T> {
        const items: T[] = [ ...source ];
        while (items.length > 0) {
            yield items.pop();
        }
    }

    /**
     * Determines whether two sequences are equal by comparing their elements by using a specified
     * ComparatorFunction<T>.
     * @param {LzIterable<T>} second A sequence to compare to the first sequence.
     * @param {ComparatorFunction<T>} comparator A ComparatorFunction<T> to use to compare elements.
     * @returns {boolean} <i>true</i> if the two source sequences are of equal length and their corresponding elements
     * compare equal according to <i>comparator</i>; otherwise, <i>false</i>.
     */
    public sequenceEqual(second: LzIterable<T>, comparator?: ComparatorFunction<T>): boolean {
        return Lz.sequenceEqual(this, second, comparator);
    }

    /**
     * Determines whether two sequences are equal by comparing their elements by using a specified
     * ComparatorFunction<T>.
     * @param {LzIterable<T>} first A sequence to compare to <i>second</i>.
     * @param {LzIterable<T>} second A sequence to compare to the first sequence.
     * @param {ComparatorFunction<T>} comparator A ComparatorFunction<T> to use to compare elements.
     * @returns {boolean} <i>true</i> if the two source sequences are of equal length and their corresponding elements
     * compare equal according to <i>comparator</i>; otherwise, <i>false</i>.
     */
    public static sequenceEqual<T>(first: LzIterable<T>, second: LzIterable<T>,
                                   comparator: ComparatorFunction<T> = Comparator.defaultComparator): boolean {
        const other: IterableIterator<T> = Lz.toIterable(second);
        for (const a of first) {
            const result: IteratorResult<T> = other.next();
            if (result.done) {
                return false;
            }
            if (comparator(a, result.value) !== 0) {
                return false;
            }
        }

        return other.next().done;
    }

    /**
     * Filters a sequence of values based on a predicate.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition. Return true to keep the element,
     * false otherwise.
     * @returns {Lz<T>} An iterable that contains elements from the input sequence that satisfy the condition.
     */
    public where(predicate: PredicateFunction<T>): Lz<T> {
        return Lz.where(this, predicate);
    }

    /**
     * Filters a sequence of values based on a predicate.
     * @param {LzIterable<T>} source An iterable to filter.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition. Return true to keep the element,
     * false otherwise.
     * @returns {Lz<T>} An iterable that contains elements from the input sequence that satisfy the condition.
     */
    public static where<T>(source: LzIterable<T>, predicate: PredicateFunction<T>): Lz<T> {
        return new Lz<T>(Lz.whereInternal(source, predicate));
    }

    private static *whereInternal<T>(source: LzIterable<T>, predicate?: PredicateFunction<T>): IterableIterator<T> {
        let index = 0;
        for (const item of source) {
            if (typeof predicate === 'function' ? predicate(item, index++) : true) {
                yield item;
            }
        }
    }

    /**
     * Projects each element of a sequence into a new form.
     * @param {SelectorFunction<T, U>} selector A transform function to apply to each element.
     * @returns {Lz<U>} An iterable whose elements are the result of invoking the transform function on each element of source.
     */
    public select<U>(selector: SelectorFunction<T, U>): Lz<U> {
        return Lz.select(this, selector);
    }

    /**
     * Projects each element of a sequence into a new form.
     * @param {LzIterable<T>} source An iterable of values to invoke a transform function on.
     * @param {SelectorFunction<T, U>} selector A transform function to apply to each element.
     * @returns {Lz<U>} An iterable whose elements are the result of invoking the transform function on each element of source.
     */
    public static select<T, U>(source: LzIterable<T>, selector: SelectorFunction<T, U>): Lz<U> {
        return new Lz<U>(Lz.selectInternal(source, selector));
    }

    private static *selectInternal<T, U>(source: LzIterable<T>, selector: SelectorFunction<T, U>): IterableIterator<U> {
        let index = 0;
        for (const item of source) {
            yield selector(item, index++);
        }
    }

    /**
     * Projects each element of a sequence to an IterableIterator<U> and flattens the resulting sequences into one sequence.
     * @param {SelectorFunction<T, IterableIterator<U> | U[]>} selector A transform function to apply to each element.
     * @returns {Lz<U>} An sequence whose elements are the result of invoking the one-to-many transform function on each element of the input
     * sequence.
     */
    public selectMany<U>(selector: SelectorFunction<T, IterableIterator<U> | U[]>): Lz<U> {
        return Lz.selectMany(this, selector);
    }

    /**
     * Projects each element of a sequence to an IterableIterator<U> and flattens the resulting sequences into one sequence.
     * @param {LzIterable<T>} source A sequence of values to project.
     * @param {SelectorFunction<T, IterableIterator<U> | U[]>} selector A transform function to apply to each element.
     * @returns {Lz<U>} An sequence whose elements are the result of invoking the one-to-many transform function on each element of the input
     * sequence.
     */
    public static selectMany<T, U>(source: LzIterable<T>, selector: SelectorFunction<T, IterableIterator<U> | U[]>): Lz<U> {
        return new Lz<U>(Lz.selectManyInternal(source, selector));
    }

    private static *selectManyInternal<T, U>(source: LzIterable<T>, selector: SelectorFunction<T, IterableIterator<U> | U[]>): IterableIterator<U> {
        let i = 0;
        for (const item of source) {
            yield* selector(item, i++);
        }
    }

    /**
     * Returns a specified number of contiguous elements from the start of a sequence.
     * @param {number} count The number of elements to return.
     * @returns {IterableIterator<T>} An iterable that contains the specified number of elements from the start of the input sequence.
     */
    public take(count: number): Lz<T> {
        return Lz.take(this, count);
    }

    /**
     * Returns a specified number of contiguous elements from the start of a sequence.
     * @param {LzIterable<T>} source The sequence to return elements from.
     * @param {number} count The number of elements to return.
     * @returns {IterableIterator<T>} An iterable that contains the specified number of elements from the start of the input sequence.
     */
    public static take<T>(source: LzIterable<T>, count: number): Lz<T> {
        return new Lz<T>(Lz.takeInternal(source, count));
    }

    private static *takeInternal<T>(source: LzIterable<T>, count: number): IterableIterator<T> {
        for (const item of source) {
            yield item;
            if (--count === 0) {
                break;
            }
        }
    }

    /**
     * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
     * @param {number} count The number of elements to skip before returning the remaining elements.
     * @returns {IterableIterator<T>} An iterable that contains the elements that occur after the specified index in the input sequence.
     */
    public skip(count: number): Lz<T> {
        return Lz.skip(this, count);
    }

    /**
     * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
     * @param {LzIterable<T>} source The sequence to return elements from.
     * @param {number} count The number of elements to skip before returning the remaining elements.
     * @returns {IterableIterator<T>} An iterable that contains the elements that occur after the specified index in the input sequence.
     */
    public static skip<T>(source: LzIterable<T>, count: number): Lz<T> {
        return new Lz<T>(Lz.skipInternal(source, count));
    }

    private static *skipInternal<T>(source: LzIterable<T>, count: number): IterableIterator<T> {
        for (const item of source) {
            if (--count >= 0) {
                continue;
            }
            yield item;
        }
    }

    /**
     * Returns elements from a sequence as long as a specified condition is true.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {IterableIterator<T>} A sequence that contains the elements from the input sequence that occur before the element at which the test no
     * longer passes.
     */
    public takeWhile(predicate: PredicateFunction<T>): Lz<T> {
        return Lz.takeWhile(this, predicate);
    }

    /**
     * Returns elements from a sequence as long as a specified condition is true.
     * @param {LzIterable<T>} source A sequence to return elements from.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {IterableIterator<T>} A sequence that contains the elements from the input sequence that occur before the element at which the test no
     * longer passes.
     */
    public static takeWhile<T>(source: LzIterable<T>, predicate: PredicateFunction<T>): Lz<T> {
        return new Lz<T>(Lz.takeWhileInternal(source, predicate));
    }

    private static *takeWhileInternal<T>(source: LzIterable<T>, predicate?: PredicateFunction<T>): IterableIterator<T> {
        let index = 0;
        for (const item of source) {
            if (predicate?.(item, index++) ?? true) {
                yield item;
                continue;
            }
            break;
        }
    }

    /**
     * Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {IterableIterator<T>} A sequence that contains the elements from the input sequence starting at the first element in the linear series
     * that does not pass the test specified by predicate.
     */
    public skipWhile(predicate: PredicateFunction<T>): Lz<T> {
        return Lz.skipWhile(this, predicate);
    }

    /**
     * Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
     * @param {LzIterable<T>} source A sequence to return elements from.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {IterableIterator<T>} A sequence that contains the elements from the input sequence starting at the first element in the linear series
     * that does not pass the test specified by predicate.
     */
    public static skipWhile<T>(source: LzIterable<T>, predicate: PredicateFunction<T>): Lz<T> {
        return new Lz<T>(Lz.skipWhileInternal(source, predicate));
    }

    private static *skipWhileInternal<T>(source: LzIterable<T>, predicate?: PredicateFunction<T>): IterableIterator<T> {
        let index = 0;
        for (const item of source) {
            if (predicate?.(item, index++) ?? true) {
                continue;
            }
            yield item;
        }
    }

    /**
     * Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
     * specified function.
     * @param {SelectorFunction<T, K>} keySelector A function to extract the key for each element.
     * @returns {Lz<[K, T[]]>} A Map where each entry contains a collection of objects of type T.
     */
    public groupBy<K>(keySelector: SelectorFunction<T, K>): Lz<[K, T[]]>;
    /**
     * Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
     * specified function.
     * @param {SelectorFunction<T, K>} keySelector A function to extract the key for each element.
     * @param {SelectorFunction<T, V>} elementSelector A function to map each source element to an element in the returned Map.
     * @returns {Lz<[K, V[]]>} A Map where each entry contains a collection of objects of type V.
     */
    public groupBy<K, V>(keySelector: SelectorFunction<T, K>, elementSelector?: SelectorFunction<T, V>): Lz<[K, V[]]>;
    public groupBy<K, V>(keySelector: SelectorFunction<T, K>, elementSelector: SelectorFunction<T, V> = Lz.identityFunction as SelectorFunction<T, V>): Lz<[K, V[]]> {
        return Lz.groupBy(this, keySelector, elementSelector);
    }

    /**
     * Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
     * specified function.
     * @param {LzIterable<T>} source The sequence whose elements to group.
     * @param {SelectorFunction<T, K>} keySelector A function to extract the key for each element.
     * @returns {Lz<[K, V[]]>} A Map where each entry contains a collection of objects of type V.
     */
    public static groupBy<T, K>(source: LzIterable<T>, keySelector: SelectorFunction<T, K>): Lz<[K, T[]]>;

    /**
     * Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
     * specified function.
     * @param {LzIterable<T>} source The sequence whose elements to group.
     * @param {SelectorFunction<T, K>} keySelector A function to extract the key for each element.
     * @param {SelectorFunction<T, V>} elementSelector A function to map each source element to an element in the returned Map.
     * @returns {Lz<[K, V[]]>} A Map where each entry contains a collection of objects of type V.
     */
    public static groupBy<T, K, V>(source: LzIterable<T>, keySelector: SelectorFunction<T, K>, elementSelector?: SelectorFunction<T, V>): Lz<[K, V[]]>;

    public static groupBy<T, K, V>(source: LzIterable<T>, keySelector: SelectorFunction<T, K>,
                                   elementSelector: SelectorFunction<T, V> = Lz.identityFunction as SelectorFunction<T, V>): Lz<[K, V[]]> {
        return new Lz<[K, V[]]>(Lz.groupByInternal(source, keySelector, elementSelector));
    }

    private static *groupByInternal<T, K, V>(source: LzIterable<T>, keySelector: SelectorFunction<T, K>, elementSelector: SelectorFunction<T, V>): IterableIterator<[K, V[]]> {
        const map: Map<K, V[]> = new Map<K, V[]>();
        let index = 0;
        for (const item of source) {
            const key: K = keySelector(item, index);
            if (!map.has(key)) {
                map.set(key, [ elementSelector(item, index) ]);
            } else {
                map.get(key).push(elementSelector(item, index));
            }
            index++;
        }

        yield* map;
    }

    /**
     * Partitions the sequence into arrays of specified size.
     * @param {number} size The size of each partitioned array. The last array may be smaller if there are
     * not enough elements in the sequence to fill it.
     * @returns {Lz<T[]>} A sequence that contains the partitioned arrays.
     */
    public partition(size: number): Lz<T[]> {
        return Lz.partition(this, size);
    }

    /**
     * Partitions the sequence into arrays of specified size.
     * @param {twoa.LzIterable<T>} source The sequence whose elements to partition.
     * @param {number} size The size of each partitioned array. The last array may be smaller if there are
     * not enough elements in the sequence to fill it.
     * @returns {Lz<T[]>} A sequence that contains the partitioned arrays.
     */
    public static partition<T>(source: LzIterable<T>, size: number): Lz<T[]> {
        return new Lz<T[]>(Lz.partitionInternal(source, size));
    }

    private static *partitionInternal<T>(source: LzIterable<T>, size: number): IterableIterator<T[]> {
        let arr: T[] = [];
        for (const item of source) {
            arr.push(item);
            if (arr.length === size) {
                yield arr;
                arr = [];
            }
        }

        if (arr.length > 0) {
            yield arr;
        }
    }

    /**
     * Produces the set union of two sequences.
     * @param {LzIterable<T>} second A sequence whose distinct elements form the second set for the union.
     * @param {ComparatorFunction<T>} comparator The ComparatorFunction<T> to compare values.
     * @returns {Lz<T>} A sequence that contains the elements from both input sequences, excluding duplicates.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public union(second: LzIterable<T>, comparator?: ComparatorFunction<T>): Lz<T> {
        return Lz.union(this, second, comparator);
    }

    /**
     * Produces the set union of two sequences.
     * @param {LzIterable<T>} first A sequence whose distinct elements form the first set for the union.
     * @param {LzIterable<T>} second A sequence whose distinct elements form the second set for the union.
     * @param {ComparatorFunction<T>} comparator The ComparatorFunction<T> to compare values.
     * @returns {Lz<T>} A sequence that contains the elements from both input sequences, excluding duplicates.
     * @remarks
     * This method is implemented by using deferred execution. The immediate return value is an object that stores all
     * the information that is required to perform the action. The query represented by this method is not executed
     * until the object is enumerated either by calling its toArray method directly or by using for...of.
     */
    public static union<T>(first: LzIterable<T>, second: LzIterable<T>,
                           comparator?: ComparatorFunction<T>): Lz<T> {
        return Lz.concat(first, second).distinct(comparator);
    }

    /**
     * Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.
     * @param {IterableIterator<U>} second The second sequence to merge.
     * @param {(first: T, second: U) => V} resultSelector A function that specifies how to merge the elements from the two sequences.
     * @returns {IterableIterator<V>} A sequence that contains merged elements of two input sequences.
     */
    public zip<U, V>(second: IterableIterator<U>, resultSelector: (first: T, second: U) => V)
        : Lz<V> {
        return Lz.zip(this, second, resultSelector);
    }

    /**
     * Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.
     * @param {LzIterable<T>} first The first sequence to merge.
     * @param {IterableIterator<U>} second The second sequence to merge.
     * @param {(first: T, second: U) => V} resultSelector A function that specifies how to merge the elements from the two sequences.
     * @returns {IterableIterator<V>} A sequence that contains merged elements of two input sequences.
     */
    public static zip<T, U, V>(first: LzIterable<T>, second: IterableIterator<U>, resultSelector: (first: T, second: U) => V)
        : Lz<V> {
        return new Lz<V>(Lz.zipInternal(first, second, resultSelector));
    }

    private static *zipInternal<T, U, V>(first: LzIterable<T>, second: IterableIterator<U>, resultSelector: (first: T, second: U) => V)
        : IterableIterator<V> {
        const other: IterableIterator<U> = Lz.toIterable(second);
        for (const a of first) {
            const result: IteratorResult<U> = other.next();
            if (result.done) {
                break;
            }
            yield resultSelector(a, result.value);
        }
    }

    /**
     * Applies an accumulator function over a sequence. The specified seed value is used as the initial accumulator value.
     * @param {AccumulatorFunction<T, U>} func An accumulator function to be invoked on each element.
     * @param {U} seed The initial accumulator value.
     * @returns {U} The final accumulator value.
     */
    public aggregate<U>(func: AccumulatorFunction<T, U>, seed?: U): U {
        return Lz.aggregate(this, func, seed);
    }

    /**
     * Applies an accumulator function over a sequence. The specified seed value is used as the initial accumulator value.
     * @param {LzIterable<T>} source The sequence to aggregate over.
     * @param {AccumulatorFunction<T, U>} func An accumulator function to be invoked on each element.
     * @param {U} seed The initial accumulator value.
     * @returns {U} The final accumulator value.
     */
    public static aggregate<T, U>(source: LzIterable<T>, func: AccumulatorFunction<T, U>, seed?: U): U {
        let value: U = seed;
        let i = 0;
        for (const item of source) {
            value = func(value, item, i++);
        }
        return value;
    }

    /**
     * Invokes a transform function on each element of a sequence and returns the maximum value.
     * @param {SelectorFunction<T, number>} selector A transform function to apply to each element.
     * @returns {number} The maximum value in the sequence.
     */
    public max(selector: SelectorFunction<T, number>): number;
    public max(selector?: SelectorFunction<number, number>): number;
    public max(selector: SelectorFunction<any, number> = Lz.identityFunction as IdentityFunction<number>): number {
        return Lz.select(this, selector).aggregate(Math.max, Number.MIN_VALUE);
    }

    /**
     * Invokes a transform function on each element of a sequence and returns the maximum value.
     * @param {LzIterable<T>} source A sequence of values to determine the maximum value of.
     * @param {SelectorFunction<T, number>} selector A transform function to apply to each element.
     * @returns {number} The maximum value in the sequence.
     */
    public static max<T>(source: LzIterable<T>, selector: SelectorFunction<T, number>): number;
    public static max<T extends number>(source: LzIterable<T>, selector?: SelectorFunction<T, number>): number;
    public static max<T>(source: LzIterable<T>, selector: SelectorFunction<T, number> = Lz.identityFunction as any): number {
        return Lz.select(source, selector).aggregate(Math.max, Number.MIN_VALUE);
    }

    /**
     * Invokes a transform function on each element of a sequence and returns the minimum value.
     * @param {SelectorFunction<T, number>} selector A transform function to apply to each element.
     * @returns {number} The minimum value in the sequence.
     */
    public min(selector: SelectorFunction<T, number>): number;
    public min(selector?: SelectorFunction<number, number>): number;
    public min(selector: SelectorFunction<any, number> = Lz.identityFunction as IdentityFunction<number>): number {
        return Lz.select(this, selector).aggregate(Math.min, Number.MAX_VALUE);
    }

    /**
     * Invokes a transform function on each element of a sequence and returns the minimum value.
     * @param {LzIterable<T>} source A sequence of values to determine the minimum value of.
     * @param {SelectorFunction<T, number>} selector A transform function to apply to each element.
     * @returns {number} The minimum value in the sequence.
     */
    public static min<T>(source: LzIterable<T>, selector: SelectorFunction<T, number>): number;
    public static min<T extends number>(source: LzIterable<T>, selector?: SelectorFunction<T, number>): number;
    public static min<T>(source: LzIterable<T>, selector: SelectorFunction<T, number> = Lz.identityFunction as any): number {
        return Lz.select(source, selector).aggregate(Math.min, Number.MAX_VALUE);
    }

    /**
     * Computes the sum of the sequence of values that are obtained by invoking a transform function on each element of the input sequence.
     * @param {SelectorFunction<T, number>} selector A transform function to apply to each element.
     * @returns {number} The sum of the projected values.
     */
    public sum(selector: SelectorFunction<T, number>): number;
    public sum(selector?: SelectorFunction<number, number>): number;
    public sum(selector: SelectorFunction<any, number> = Lz.identityFunction as IdentityFunction<number>): number {
        return Lz.select(this, selector).aggregate((acc, cur) => acc + cur, 0);
    }

    /**
     * Computes the sum of the sequence of values that are obtained by invoking a transform function on each element of the input sequence.
     * @param {LzIterable<T>} source A sequence of values that are used to calculate a sum.
     * @param {SelectorFunction<T, number>} selector A transform function to apply to each element.
     * @returns {number} The sum of the projected values.
     */
    public static sum<T>(source: LzIterable<T>, selector: SelectorFunction<T, number>): number;
    public static sum<T extends number>(source: LzIterable<T>, selector?: SelectorFunction<T, number>): number;
    public static sum<T>(source: LzIterable<T>, selector: SelectorFunction<T, number> = Lz.identityFunction as any): number {
        return Lz.select(source, selector).aggregate((acc, cur) => acc + cur, 0);
    }

    /**
     * Computes the average of a sequence of values that are obtained by invoking a transform function on each element of the input sequence.
     * @param {SelectorFunction<T, number>} selector A transform function to apply to each element.
     * @returns {number} The average of the sequence of values, or 0 if the source sequence is empty.
     */
    public average(selector: SelectorFunction<T, number>): number;
    public average(selector?: SelectorFunction<number, number>): number;
    public average(selector: SelectorFunction<any, number> = Lz.identityFunction as any): number {
        return Lz.average(this, selector);
    }

    /**
     * Computes the average of a sequence of values that are obtained by invoking a transform function on each element of the input sequence.
     * @param {LzIterable<T>} source A sequence of values that are used to calculate an average.
     * @param {SelectorFunction<T, number>} selector A transform function to apply to each element.
     * @returns {number} The average of the sequence of values, or 0 if the source sequence is empty.
     */
    public static average<T>(source: LzIterable<T>, selector: SelectorFunction<T, number>): number;
    public static average<T extends number>(source: LzIterable<T>, selector?: SelectorFunction<T, number>): number;
    public static average<T>(source: LzIterable<T>, selector: SelectorFunction<T, number> = Lz.identityFunction as any): number {
        let sum = 0;
        let count = 0;
        for (const item of source) {
            sum += selector(item, count++);
        }
        if (count > 0) {
            return sum / count;
        } else {
            return 0;
        }
    }

    /**
     * Returns a number that represents how many elements in the specified sequence satisfy a condition.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {number} A number that represents how many elements in the sequence satisfy the condition in the predicate function.
     */
    public count(predicate?: PredicateFunction<T>): number {
        return Lz.count(this[Symbol.iterator](), predicate);
    }

    /**
     * Returns a number that represents how many elements in the specified sequence satisfy a condition.
     * @param {LzIterable<T>} source The sequence to return elements from.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {number} A number that represents how many elements in the sequence satisfy the condition in the predicate function.
     */
    public static count<T>(source: LzIterable<T>, predicate?: PredicateFunction<T>): number {
        if (Array.isArray(source) && !predicate) {
            return source.length;
        }

        let index = 0;
        let count = 0;

        for (const item of source) {
            if (predicate?.(item, index++) ?? true) {
                count++;
            }
        }
        return count;
    }

    /**
     * Determines whether any element of a sequence satisfies a condition.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {boolean} <b>true</b> if any elements in the source sequence pass the test in the specified predicate; otherwise, <b>false</b>.
     */
    public any(predicate: PredicateFunction<T>): boolean {
        return Lz.any(this, predicate);
    }

    /**
     * Determines whether any element of a sequence satisfies a condition.
     * @param {LzIterable<T>} source The sequence whose elements to apply the predicate to.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {boolean} <b>true</b> if any elements in the source sequence pass the test in the specified predicate; otherwise, <b>false</b>.
     */
    public static any<T>(source: LzIterable<T>, predicate: PredicateFunction<T>): boolean {
        let index = 0;
        for (const item of source) {
            if (predicate(item, index++)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Determines whether all elements of a sequence satisfy a condition.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {boolean} <b>true</b> if every element of the source sequence passes the test in the specified predicate, or if the sequence is empty;
     * otherwise, <b>false</b>.
     */
    public all(predicate: PredicateFunction<T>): boolean {
        return Lz.all(this, predicate);
    }

    /**
     * Determines whether all elements of a sequence satisfy a condition.
     * @param {LzIterable<T>} source The sequence that contains the elements to apply the predicate to.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {boolean} <b>true</b> if every element of the source sequence passes the test in the specified predicate, or if the sequence is empty;
     * otherwise, <b>false</b>.
     */
    public static all<T>(source: LzIterable<T>, predicate: PredicateFunction<T>): boolean {
        let index = 0;
        for (const item of source) {
            if (!predicate(item, index++)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.
     * @param {PredicateFunction<T>} predicate A function to test an element for a condition. Return true to keep the element,
     * false otherwise.
     * @returns {T} The single element of the input sequence that satisfies a condition.
     * @throws If no element satisfies the condition in predicate, or more than one element satisfies the condition
     * in predicate, or the source sequence is empty.
     */
    public single(predicate?: PredicateFunction<T>): T {
        return Lz.single(this, predicate);
    }

    /**
     * Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.
     * @param {LzIterable<T>} source An iterable to return the single element of.
     * @param {PredicateFunction<T>} predicate A function to test an element for a condition. Return true to keep the element,
     * false otherwise.
     * @returns {T} The single element of the input sequence that satisfies a condition.
     * @throws If no element satisfies the condition in predicate, or more than one element satisfies the condition
     * in predicate, or the source sequence is empty.
     */
    public static single<T>(source: LzIterable<T>,
                            predicate?: PredicateFunction<T>): T {
        const iterable = Lz.whereInternal(source, predicate);
        let result = iterable.next();
        if (!result.done) {
            const value = result.value;
            result = iterable.next();
            if (!result.done) {
                throw Error('Source sequence contains more than one item.');
            }
            return value;
        } else {
            throw Error('Source sequence contains no items.');
        }
    }

    /**
     * Returns the only element of a sequence that satisfies a specified condition or a default value if no such element
     * exists; this method throws an exception if more than one element satisfies the condition.
     * @param {T} defaultValue The default value.
     * @param {PredicateFunction<T>} predicate A function to test an element for a condition. Return true to keep the element,
     * false otherwise.
     * @returns {T} The single element of the input sequence that satisfies a condition.
     * @throws If more than one element satisfies the condition in predicate.
     */
    public singleOrDefault(defaultValue: T, predicate?: PredicateFunction<T>): T {
        return Lz.singleOrDefault(this, defaultValue, predicate);
    }

    /**
     * Returns the only element of a sequence that satisfies a specified condition or a default value if no such element exists;
     * this method throws an exception if more than one element satisfies the condition.
     * @param {LzIterable<T>} source A sequence to return the single element from.
     * @param {T} defaultValue The default value.
     * @param {PredicateFunction<T>} predicate A function to test an element for a condition. Return true to keep the element,
     * false otherwise.
     * @returns {T} The single element of the input sequence that satisfies the condition, or <i>defaultValue</i> if
     * no such element is found.
     * @throws If more than one element satisfies the condition in predicate.
     */
    public static singleOrDefault<T>(source: LzIterable<T>, defaultValue: T,
                                     predicate?: PredicateFunction<T>): T {
        const iterable = Lz.whereInternal(source, predicate);
        let result = iterable.next();
        if (!result.done) {
            const value = result.value;
            result = iterable.next();
            if (!result.done) {
                throw Error('Source sequence contains more than one item.');
            }
            return value;
        } else {
            return defaultValue;
        }
    }

    /**
     * Returns the first element of a sequence.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {T} The first element.
     * @throws If the source sequence contains no elements or the predicate did not match any elements.
     */
    public first(predicate?: PredicateFunction<T>): T {
        return Lz.first(this);
    }

    /**
     * Returns the first element of a sequence.
     * @param {LzIterable<T>} source The sequence to return an element from.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {T} The first element.
     * @throws If the source sequence contains no elements or the predicate did not match any elements.
     */
    public static first<T>(source: LzIterable<T>, predicate?: PredicateFunction<T>): T {
        // optimize if source is an array and using default predicate
        if (Array.isArray(source) && source.length > 0 && !predicate) {
            return source[0];
        }

        let index = 0;
        for (const item of source) {
            if (predicate?.(item, index++) ?? true) {
                return item;
            }
        }

        throw Error('Source sequence contains no items or the specified predicate did not match any items.');
    }

    /**
     * Returns the first element of a sequence, or a default value if the sequence contains no elements.
     * @param {T} defaultValue The default value.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {T} The first element, or a default value if the sequence contains no elements.
     */
    public firstOrDefault(defaultValue: T, predicate?: PredicateFunction<T>): T {
        return Lz.firstOrDefault(this, defaultValue, predicate);
    }

    /**
     * Returns the first element of a sequence, or a default value if the sequence contains no elements.
     * @param {LzIterable<T>} source The sequence to return an element from.
     * @param {T} defaultValue The default value.
     * @param {PredicateFunction<T>} predicate A function to test each element for a condition.
     * @returns {T} The first element, or a default value if the sequence contains no elements.
     */
    public static firstOrDefault<T>(source: LzIterable<T>, defaultValue: T,
                                    predicate?: PredicateFunction<T>): T {
        let index = 0;
        for (const item of source) {
            if (predicate?.(item, index++) ?? true) {
                return item;
            }
        }

        return defaultValue;
    }

    /**
     * Creates a Map from a sequence of IterableIterator<[T1, T2]>
     * @returns {Map<T1, T2>} A Map that contains keys and values.
     */
    public toDictionary<T extends [T1, T2], T1, T2>(): Map<T1, T2>;

    /**
     * Creates a Map from an Array according to a specified key selector function.
     * @param {SelectorFunction<T, K>} keySelector A function to extract a key from each element.
     * @returns {Map<K, T>} A Map that contains keys and values.
     */
    public toDictionary<K, T>(keySelector: SelectorFunction<T, K>): Map<K, T>;

    /**
     * Creates a Map from an Array according to a specified key selector function.
     * @param {SelectorFunction<T, K>} keySelector A function to extract a key from each element.
     * @param {SelectorFunction<T, U>} elementSelector A function to map each source element to an element in the returned Map.
     * @returns {Map<K, U>} A Map that contains keys and values.
     */
    public toDictionary<K, U>(keySelector: SelectorFunction<T, K>, elementSelector: SelectorFunction<T, U>): Map<K, U>;
    public toDictionary<K, U>(keySelector?: SelectorFunction<T, K>, elementSelector?: SelectorFunction<T, U>): Map<K, U> {
        return Lz.toDictionary(this, keySelector, elementSelector);
    }

    /**
     * Creates a Map from a sequence of IterableIterator<[T1, T2]>
     * @param {LzIterable<T>} source The sequence to create a Map<K, T> from.
     * @returns {Map<T1, T2>} A Map that contains keys and values.
     */
    public static toDictionary<T extends [T1, T2], T1, T2>(source: LzIterable<T>): Map<T1, T2>;

    /**
     * Creates a Map from an Array according to a specified key selector function.
     * @param {LzIterable<T>} source The sequence to create a Map<K, T> from.
     * @param {SelectorFunction<T, K>} keySelector A function to extract a key from each element.
     * @returns {Map<K, T>} A Map that contains keys and values.
     */
    public static toDictionary<T, K>(source: LzIterable<T>,
                                     keySelector: SelectorFunction<T, K>): Map<K, T>;

    /**
     * Creates a Map from an Array according to a specified key selector function.
     * @param {LzIterable<T>} source The sequence to create a Map<K, T> from.
     * @param {SelectorFunction<T, K>} keySelector A function to extract a key from each element.
     * @param {SelectorFunction<T, U>} elementSelector A function to map each source element to an element in the returned Map.
     * @returns {Map<K, U>} A Map that contains keys and values.
     */
    public static toDictionary<T, K, U>(source: LzIterable<T>,
                                        keySelector: SelectorFunction<T, K>,
                                        elementSelector: SelectorFunction<T, U>): Map<K, U>;
    public static toDictionary<T, K, U>(source: LzIterable<T>,
                                        keySelector?: SelectorFunction<T, K>,
                                        elementSelector?: SelectorFunction<T, U>): Map<K, U> {
        if (keySelector === undefined && elementSelector === undefined) {
            keySelector = (item: any) => item[0] as K;
            elementSelector = (item: any) => item[1] as U;
        } else if (elementSelector === undefined) {
            elementSelector = Lz.identityFunction;
        }

        const map: Map<K, U> = new Map<K, U>();
        let i = 0;
        for (const item of source) {
            map.set(keySelector(item, i), elementSelector(item, i));
            i++;
        }
        return map;
    }

    /**
     * Creates an array from a IterableIterator<T>.
     * @returns {T[]} An array that contains the elements from the input sequence.
     */
    public toArray(): T[] {
        return [ ...this ];
    }

    /**
     * Creates an array from a IterableIterator<T>.
     * @param {LzIterable<T>} source An IterableIterator<T> to create an array from.
     * @returns {T[]} An array that contains the elements from the input sequence.
     */
    public static toArray<T>(source: LzIterable<T>): T[] {
        return [ ...source ];
    }

    public [Symbol.iterator](): IterableIterator<T> {
        return this;
    }

    public next(value?: any): IteratorResult<T> {
        return this.iterable.next(value);
    }

    public return(value?: any): IteratorResult<T> {
        return this.iterable.return(value);
    }

    public throw(e?: any): IteratorResult<T> {
        return this.iterable.throw(e);
    }
}

// tslint:disable-next-line:max-classes-per-file
class LzOrdered<T, K> extends Lz<T> {
    private readonly source: LzIterable<T> | LzOrdered<T, K>;
    private readonly selector: SelectorFunctionNoIndex<T, K>;
    private readonly comparator?: ComparatorFunction<K>;
    private readonly descending: boolean;

    constructor(source: IterableIterator<T> | LzOrdered<T, K>, selector: SelectorFunctionNoIndex<T, K>, comparator: ComparatorFunction<K> = Comparator.defaultComparator, descending: boolean = false) {
        super(source);
        this.source = source;
        this.selector = selector;
        this.comparator = comparator;
        this.descending = descending;
    }

    /**
     * Performs a subsequent ordering of the elements in a sequence in ascending order according to a key.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @returns {LzOrdered<T, V>} A sequence whose elements are sorted according to a key.
     */
    public thenBy<V>(selector: SelectorFunctionNoIndex<T, V>): LzOrdered<T, V>;

    /**
     * Performs a subsequent ordering of the elements in a sequence in ascending order by using a specified comparator.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @param {ComparatorFunction<V>} comparator A ComparatorFunction<V> to compare keys.
     * @returns {LzOrdered<T, V>} A sequence whose elements are sorted according to a key.
     */
    public thenBy<V>(selector: SelectorFunctionNoIndex<T, V>, comparator: ComparatorFunction<V>): LzOrdered<T, V>;
    public thenBy<V>(selector: SelectorFunctionNoIndex<T, V>, comparator?: ComparatorFunction<V>): LzOrdered<T, V> {
        return new LzOrdered<T, V>(this, selector, comparator);
    }

    /**
     * Performs a subsequent ordering of the elements in a sequence in descending order according to a key.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @returns {LzOrdered<T, V>} A sequence whose elements are sorted according to a key.
     */
    public thenByDescending<V>(selector: SelectorFunctionNoIndex<T, V>): LzOrdered<T, V>;

    /**
     * Performs a subsequent ordering of the elements in a sequence in descending order by using a specified comparator.
     * @param {SelectorFunctionNoIndex<T, V>} selector A function to extract a key from an element.
     * @param {ComparatorFunction<V>} comparator A ComparatorFunction<V> to compare keys.
     * @returns {LzOrdered<T, V>} A sequence whose elements are sorted according to a key.
     */
    public thenByDescending<V>(selector: SelectorFunctionNoIndex<T, V>, comparator: ComparatorFunction<V>): LzOrdered<T, V>;
    public thenByDescending<V>(selector: SelectorFunctionNoIndex<T, V>, comparator?: ComparatorFunction<V>): LzOrdered<T, V> {
        return new LzOrdered<T, V>(this, selector, comparator, true);
    }

    private static sort<T, K>(source: LzIterable<T>, selector: SelectorFunctionNoIndex<T, K>, comparator: ComparatorFunction<K>, descending: boolean): SortedMap<K, T[]> {
        const comparer = (a: K, b: K) => descending ? comparator(b, a) : comparator(a, b);
        const sorted = new SortedMap<K, T[]>(null, comparer);

        for (const item of source) {
            const key = selector(item);
            (sorted.get(key) ?? sorted.set(key, []).get(key)).push(item);
        }
        return sorted;
    }

    private iterator(flag? : false): IterableIterator<T>;
    private iterator(flag : true): IterableIterator<IterableIterator<T>>;
    private *iterator(flag: boolean = false): IterableIterator<any> {
        if (this.source instanceof LzOrdered) {
            for (const items of this.source.iterator(true)) {
                const sorted = LzOrdered.sort(items, this.selector, this.comparator, this.descending);
                for (const values of sorted.values()) {
                    if (flag) {
                        yield Lz.toIterable(values);
                    } else {
                        yield* Lz.toIterable(values);
                    }
                }
            }
        } else {
            const sorted = LzOrdered.sort(this.source, this.selector, this.comparator, this.descending);
            for (const values of sorted.values()) {
                if (flag) {
                    yield Lz.toIterable(values);
                } else {
                    yield* Lz.toIterable(values);
                }
            }
        }
    }

    public [Symbol.iterator](): IterableIterator<T> {
        return this.iterator();
    }

    public next(value?: any): IteratorResult<T> {
        return this.iterator().next(value);
    }

    public return(value?: any): IteratorResult<T> {
        return this.iterator().return(value);
    }

    public throw(e?: any): IteratorResult<T> {
        return this.iterator().throw(e);
    }
}

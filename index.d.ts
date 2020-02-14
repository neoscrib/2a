declare module '2a' {
    export import Lz  = twoa.Lz;
    export import BinarySearch = twoa.BinarySearch;
    export import Comparator = twoa.Comparator;
    export import SortedMap = twoa.SortedMap;
}

declare namespace twoa {
    export type LzIterable<T> = IterableIterator<T> | T[];

    export type ComparatorFunction<T> = (a: T, b: T) => number;

    export class BinarySearch {
        public static find<T>(source: T[], index: number, length: number, item: T, comparator?: (a: T, b: T) => number): number;
    }

    export class Comparator {
        public static defaultComparator<T>(a: T, b: T): number;
    }

    export class Lz<T> implements IterableIterator<T> {
        public static identityFunction<T>(item: T): T;

        /**
         * Returns the input typed as LzIterable<T>.
         * @returns {IterableIterator<T>} The input sequence typed as LzIterable<T>.
         */
        public toIterable(): Lz<T>;

        /**
         * Returns the input typed as LzIterable<T>.
         * @param {LzIterable<T>} source The sequence to type as LzIterable<T>.
         * @returns {IterableIterator<T>} The input sequence typed as LzIterable<T>.
         */
        public static toIterable<T>(source: LzIterable<T>): Lz<T>;

        /**
         * Appends a value to the end of the sequence.
         * @param {T} element The value to append to source.
         * @returns {Lz<T>} A new sequence that ends with element.
         * @remarks
         * This method is implemented by using deferred execution. The immediate return value is an object that stores all
         * the information that is required to perform the action. The query represented by this method is not executed
         * until the object is enumerated either by calling its toArray method directly or by using for...of.
         */
        public append(element: T): Lz<T>;

        /**
         * Appends a value to the end of the sequence.
         * @param {LzIterable<T>} source A sequence of values.
         * @param {T} element The value to append to source.
         * @returns {Lz<T>} A new sequence that ends with element.
         * @remarks
         * This method is implemented by using deferred execution. The immediate return value is an object that stores all
         * the information that is required to perform the action. The query represented by this method is not executed
         * until the object is enumerated either by calling its toArray method directly or by using for...of.
         */
        public static append<T>(source: LzIterable<T>, element: T): Lz<T>;

        /**
         * Adds a value to the beginning of the sequence.
         * @param {T} element The value to prepend to <i>source</i>.
         * @returns {Lz<T>} A new sequence that begins with <i>element</i>.
         * @remarks
         * This method is implemented by using deferred execution. The immediate return value is an object that stores all
         * the information that is required to perform the action. The query represented by this method is not executed
         * until the object is enumerated either by calling its toArray method directly or by using for...of.
         */
        public prepend(element: T): Lz<T>;

        /**
         * Adds a value to the beginning of the sequence.
         * @param {LzIterable<T>} source A sequence of values.
         * @param {T} element The value to prepend to <i>source</i>.
         * @returns {Lz<T>} A new sequence that begins with <i>element</i>.
         * @remarks
         * This method is implemented by using deferred execution. The immediate return value is an object that stores all
         * the information that is required to perform the action. The query represented by this method is not executed
         * until the object is enumerated either by calling its toArray method directly or by using for...of.
         */
        public static prepend<T>(source: LzIterable<T>, element: T): Lz<T>;

        /**
         * Concatenates two sequences.
         * @param {LzIterable<T>} second The sequence to concatenate to the first sequence.
         * @returns {Lz<T>} A sequence that contains the concatenated elements of the two input sequences.
         */
        public concat(second: LzIterable<T>): Lz<T>;

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
        public defaultIfEmpty(defaultValue: T): Lz<T>;

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
        public static defaultIfEmpty<T>(source: LzIterable<T>, defaultValue: T): Lz<T>;

        /**
         * Returns distinct elements from a sequence by using a specified ComparatorFunction<T> to compare values.
         * @param {ComparatorFunction<T>} comparator Optional. A ComparatorFunction<T> to compare values.
         * @returns {Lz<T>} A sequence that contains distinct elements from the source sequence.
         * @remarks
         * This method is implemented by using deferred execution. The immediate return value is an object that stores all
         * the information that is required to perform the action. The query represented by this method is not executed
         * until the object is enumerated either by calling its toArray method directly or by using for...of.
         */
        public distinct(comparator?: ComparatorFunction<T>): Lz<T>;

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
        public static distinct<T>(source: LzIterable<T>, comparator?: ComparatorFunction<T>): Lz<T>;

        /**
         * Returns an empty sequence that has the specified type argument.
         * @returns {Lz<T>} An empty sequence whose type argument is <i>T</i>.
         */
        public static empty<T>(): Lz<T>;

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
        public except(second: LzIterable<T>, comparator?: ComparatorFunction<T>): Lz<T>;

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
                                comparator?: ComparatorFunction<T>): Lz<T>;

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
        public insert(element: T, index: number): Lz<T>;

        /**
         * Inserts a value into the source sequence at the specified index.
         * @param {LzIterable<T>} source The sequence to remove duplicate elements from.
         * @param {T} element The value to insert to <i>source</i>.
         * @param {number} index The index at which to insert <i>element</i>.
         * @returns {Lz<T>} A new sequence that contains <i>element</i> at <i>index</i>.
         * @remarks
         * This method is implemented by using deferred execution. The immediate return value is an object that stores all
         * the information that is required to perform the action. The query represented by this method is not executed
         * until the object is enumerated either by calling its toArray method directly or by using for...of.
         */
        public static insert<T>(source: LzIterable<T>, element: T, index: number): Lz<T>;

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
        public intersect(second: LzIterable<T>, comparator?: ComparatorFunction<T>): Lz<T>;

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
                                   comparator?: ComparatorFunction<T>): Lz<T>;

        /**
         * Correlates the elements of two sequences based on matching keys.
         * @param {IterableIterator<T2> | T2[]} inner The sequence to join to the first sequence.
         * @param {(item: T1) => K} outerKeySelector A function to extract the join key from each element of the first sequence.
         * @param {(item: T2) => K} innerKeySelector A function to extract the join key from each element of the second sequence.
         * @param {(a: T1, b: T2) => U} resultSelector A function to create a result element from two matching elements.
         * @returns {Lz<U>} A sequence that has elements of type <i>U</i> that are obtained by performing an inner
         * join on two sequences.
         * @remarks
         * This method is implemented by using deferred execution. The immediate return value is an object that stores all
         * the information that is required to perform the action. The query represented by this method is not executed
         * until the object is enumerated either by calling its toArray method directly or by using for...of.
         */
        public join<T2, K, U>(inner: IterableIterator<T2> | T2[],
                              outerKeySelector: (item: T) => K, innerKeySelector: (item: T2) => K,
                              resultSelector: (a: T, b: T2) => U): Lz<U>;

        /**
         * Correlates the elements of two sequences based on matching keys.
         * @param {IterableIterator<T1> | T1[]} outer The first sequence to join.
         * @param {IterableIterator<T2> | T2[]} inner The sequence to join to the first sequence.
         * @param {(item: T1) => K} outerKeySelector A function to extract the join key from each element of the first sequence.
         * @param {(item: T2) => K} innerKeySelector A function to extract the join key from each element of the second sequence.
         * @param {(a: T1, b: T2) => U} resultSelector A function to create a result element from two matching elements.
         * @returns {Lz<U>} A sequence that has elements of type <i>U</i> that are obtained by performing an inner
         * join on two sequences.
         * @remarks
         * This method is implemented by using deferred execution. The immediate return value is an object that stores all
         * the information that is required to perform the action. The query represented by this method is not executed
         * until the object is enumerated either by calling its toArray method directly or by using for...of.
         */
        public static join<T1, T2, K, U>(outer: IterableIterator<T1> | T1[], inner: IterableIterator<T2> | T2[],
                                         outerKeySelector: (item: T1) => K, innerKeySelector: (item: T2) => K,
                                         resultSelector: (a: T1, b: T2) => U): Lz<U>;

        /**
         * Returns the last element of a sequence.
         * @param {(item: T, index: number) => boolean} predicate A function to test each element for a condition.
         * @returns {T} The value at the last position in the source sequence.
         * @throws If the source sequence contains no elements or the predicate did not match any elements.
         */
        public last(predicate?: (item: T, index: number) => boolean): T;

        /**
         * Returns the last element of a sequence.
         * @param {LzIterable<T>} source A sequence to return the last element of.
         * @param {(item: T, index: number) => boolean} predicate A function to test each element for a condition.
         * @returns {T} The value at the last position in the source sequence.
         * @throws If the source sequence contains no elements or the predicate did not match any elements.
         */
        public static last<T>(source: LzIterable<T>, predicate?: (item: T, index: number) => boolean): T;

        /**
         * Returns the last element of a sequence, or a default value if no element is found.
         * @param {T} defaultValue The default value.
         * @param {(item: T, index: number) => boolean} predicate A function to test each element for a condition.
         * @returns {T} The value at the last position in the source sequence.
         */
        public lastOrDefault(defaultValue: T, predicate?: (item: T, index: number) => boolean): T;

        /**
         * Returns the last element of a sequence, or a default value if no element is found.
         * @param {LzIterable<T>} source A sequence to return the last element of.
         * @param {T} defaultValue The default value.
         * @param {(item: T, index: number) => boolean} predicate A function to test each element for a condition.
         * @returns {T} The value at the last position in the source sequence.
         */
        public static lastOrDefault<T>(source: LzIterable<T>, defaultValue: T,
                                       predicate?: (item: T, index: number) => boolean): T;

        /**
         * Sorts the elements of a sequence in ascending order according to a key.
         * @param {(item: T) => V} selector A function to extract a key from an element.
         * @param {ComparatorFunction<V>} comparator A ComparatorFunction<V> to compare keys.
         * @returns {Lz<T>} A sequence whose elements are sorted according to a key.
         */
        public orderBy<V>(selector: (item: T) => V, comparator?: ComparatorFunction<V>): Lz<T>;

        /**
         * Sorts the elements of a sequence in ascending order according to a key.
         * @param {LinqIterable<T>} source A sequence of values to order.
         * @param {(item: T) => V} selector A function to extract a key from an element.
         * @param {ComparatorFunction<V>} comparator A ComparatorFunction<V> to compare keys.
         * @returns {Lz<T>} A sequence whose elements are sorted according to a key.
         */
        public static orderBy<T, V>(source: LzIterable<T>, selector: (item: T) => V, comparator?: ComparatorFunction<V>): Lz<T>;

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
        public static range(start: number, count: number): Lz<number>;

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
        public static repeat<T>(element: T, count: number): Lz<T>;

        /**
         * Inverts the order of the elements in a sequence.
         * @returns {Lz<T>} A sequence whose elements correspond to those of the input sequence in reverse order.
         */
        public reverse(): Lz<T>;

        /**
         * Inverts the order of the elements in a sequence.
         * @param {LzIterable<T>} source A sequence of values to reverse.
         * @returns {Lz<T>} A sequence whose elements correspond to those of the input sequence in reverse order.
         */
        public static reverse<T>(source: LzIterable<T>): Lz<T>;

        /**
         * Determines whether two sequences are equal by comparing their elements by using a specified
         * ComparatorFunction<T>.
         * @param {LzIterable<T>} second A sequence to compare to the first sequence.
         * @param {ComparatorFunction<T>} comparator A ComparatorFunction<T> to use to compare elements.
         * @returns {boolean} <i>true</i> if the two source sequences are of equal length and their corresponding elements
         * compare equal according to <i>comparator</i>; otherwise, <i>false</i>.
         */
        public sequenceEqual(second: LzIterable<T>, comparator?: ComparatorFunction<T>): boolean;

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
                                       comparator?: ComparatorFunction<T>): boolean;

        /**
         * Concatenates two sequences.
         * @param {LzIterable<T>} first The first sequence to concatenate.
         * @param {LzIterable<T>} second The sequence to concatenate to the first sequence.
         * @returns {Lz<T>} A sequence that contains the concatenated elements of the two input sequences.
         */
        public static concat<T>(first: LzIterable<T>, second: LzIterable<T>): Lz<T>;

        /**
         * Filters a sequence of values based on a predicate.
         * @param {(item: T, index?: number) => boolean} predicate A function to test each element for a condition. Return true to keep the
         * element, false otherwise.
         * @returns {IterableIterator<T>} An iterable that contains elements from the input sequence that satisfy the condition.
         */
        public where(predicate: (item: T, index?: number) => boolean): Lz<T>;

        /**
         * Filters a sequence of values based on a predicate.
         * @param {LzIterable<T>} source An iterable to filter.
         * @param {(item: T, index?: number) => boolean} predicate A function to test each element for a condition. Return true to keep the
         * element, false otherwise.
         * @returns {IterableIterator<T>} An iterable that contains elements from the input sequence that satisfy the condition.
         */
        public static where<T>(source: LzIterable<T>, predicate: (item: T, index?: number) => boolean): Lz<T>;

        /**
         * Projects each element of a sequence into a new form.
         * @param {(item: T, index?: number) => U} selector A transform function to apply to each element.
         * @returns {IterableIterator<U>} An iterable whose elements are the result of invoking the transform function on each element of source.
         */
        public select<U>(selector: (item: T, index?: number) => U): Lz<U>;

        /**
         * Projects each element of a sequence into a new form.
         * @param {LzIterable<T>} source An iterable of values to invoke a transform function on.
         * @param {(item: T, index?: number) => U} selector A transform function to apply to each element.
         * @returns {IterableIterator<U>} An iterable whose elements are the result of invoking the transform function on each element of source.
         */
        public static select<T, U>(source: LzIterable<T>, selector: (item: T, index?: number) => U): Lz<U>;

        /**
         * Projects each element of a sequence to an IterableIterator<U> and flattens the resulting sequences into one sequence.
         * @param {(item: T) => (IterableIterator<U> | U[])} selector A transform function to apply to each element.
         * @returns {Lz<U>} An sequence whose elements are the result of invoking the one-to-many transform function on each element of the
         * input sequence.
         */
        public selectMany<U>(selector: (item: T) => IterableIterator<U> | U[]): Lz<U>;

        /**
         * Projects each element of a sequence to an IterableIterator<U> and flattens the resulting sequences into one sequence.
         * @param {LzIterable<T>} source A sequence of values to project.
         * @param {(item: T) => (IterableIterator<U> | U[])} selector A transform function to apply to each element.
         * @returns {Lz<U>} An sequence whose elements are the result of invoking the one-to-many transform function on each element of the
         * input sequence.
         */
        public static selectMany<T, U>(source: LzIterable<T>, selector: (item: T) => IterableIterator<U> | U[]): Lz<U>;

        /**
         * Returns a specified number of contiguous elements from the start of a sequence.
         * @param {number} count The number of elements to return.
         * @returns {IterableIterator<T>} An iterable that contains the specified number of elements from the start of the input sequence.
         */
        public take(count: number): Lz<T>;

        /**
         * Returns a specified number of contiguous elements from the start of a sequence.
         * @param {LzIterable<T>} source The sequence to return elements from.
         * @param {number} count The number of elements to return.
         * @returns {IterableIterator<T>} An iterable that contains the specified number of elements from the start of the input sequence.
         */
        public static take<T>(source: LzIterable<T>, count: number): Lz<T>;

        /**
         * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
         * @param {number} count The number of elements to skip before returning the remaining elements.
         * @returns {IterableIterator<T>} An iterable that contains the elements that occur after the specified index in the input sequence.
         */
        public skip(count: number): Lz<T>;

        /**
         * Bypasses a specified number of elements in a sequence and then returns the remaining elements.
         * @param {LzIterable<T>} source The sequence to return elements from.
         * @param {number} count The number of elements to skip before returning the remaining elements.
         * @returns {IterableIterator<T>} An iterable that contains the elements that occur after the specified index in the input sequence.
         */
        public static skip<T>(source: LzIterable<T>, count: number): Lz<T>;

        /**
         * Returns elements from a sequence as long as a specified condition is true.
         * @param {(item: T) => boolean} predicate A function to test each element for a condition.
         * @returns {IterableIterator<T>} A sequence that contains the elements from the input sequence that occur before the element at which the
         * test no longer passes.
         */
        public takeWhile(predicate: (item: T) => boolean): Lz<T>;

        /**
         * Returns elements from a sequence as long as a specified condition is true.
         * @param {LzIterable<T>} source A sequence to return elements from.
         * @param {(item: T) => boolean} predicate A function to test each element for a condition.
         * @returns {IterableIterator<T>} A sequence that contains the elements from the input sequence that occur before the element at which the
         * test no longer passes.
         */
        public static takeWhile<T>(source: LzIterable<T>, predicate: (item: T) => boolean): Lz<T>;

        /**
         * Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
         * @param {(item: T) => boolean} predicate A function to test each element for a condition.
         * @returns {IterableIterator<T>} A sequence that contains the elements from the input sequence starting at the first element in the
         * linear series that does not pass the test specified by predicate.
         */
        public skipWhile(predicate: (item: T) => boolean): Lz<T>;

        /**
         * Bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.
         * @param {LzIterable<T>} source A sequence to return elements from.
         * @param {(item: T) => boolean} predicate A function to test each element for a condition.
         * @returns {IterableIterator<T>} A sequence that contains the elements from the input sequence starting at the first element in the
         * linear series that does not pass the test specified by predicate.
         */
        public static skipWhile<T>(source: LzIterable<T>, predicate: (item: T) => boolean): Lz<T>;

        /**
         * Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
         * specified function.
         * @param {(item: T) => K} keySelector A function to extract the key for each element.
         * @returns {IterableIterator<[K, T[]]>} A Map where each entry contains a collection of objects of type T.
         */
        public groupBy<K>(keySelector: (item: T) => K): Lz<[K, T[]]>;

        /**
         * Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
         * specified function.
         * @param {(item: T) => K} keySelector A function to extract the key for each element.
         * @param {(item: T) => V} elementSelector A function to map each source element to an element in the returned Map.
         * @returns {IterableIterator<[K, V[]]>} A Map where each entry contains a collection of objects of type V.
         */
        public groupBy<K, V>(keySelector: (item: T) => K, elementSelector?: (item: T) => V): Lz<[K, V[]]>;

        /**
         * Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
         * specified function.
         * @param {LzIterable<T>} source The sequence whose elements to group.
         * @param {(item: T) => K} keySelector A function to extract the key for each element.
         * @returns {IterableIterator<[K, V[]]>} A Map where each entry contains a collection of objects of type V.
         */
        public static groupBy<T, K>(source: LzIterable<T>, keySelector: (item: T) => K): Lz<[K, T[]]>;

        /**
         * Groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a
         * specified function.
         * @param {LzIterable<T>} source The sequence whose elements to group.
         * @param {(item: T) => K} keySelector A function to extract the key for each element.
         * @param {(item: T) => V} elementSelector A function to map each source element to an element in the returned Map.
         * @returns {IterableIterator<[K, V[]]>} A Map where each entry contains a collection of objects of type V.
         */
        public static groupBy<T, K, V>(source: LzIterable<T>, keySelector: (item: T) => K,
                                       elementSelector?: (item: T) => V): Lz<[K, V[]]>;

        public partition(n: number): Lz<T[]>;

        public static partition<T>(source: LzIterable<T>, n: number): Lz<T[]>;

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
        public union(second: LzIterable<T>, comparator?: ComparatorFunction<T>): Lz<T>;

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
                               comparator?: ComparatorFunction<T>): Lz<T>;

        /**
         * Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.
         * @param {IterableIterator<U>} second The second sequence to merge.
         * @param {(first: T, second: U) => V} resultSelector A function that specifies how to merge the elements from the two sequences.
         * @returns {IterableIterator<V>} A sequence that contains merged elements of two input sequences.
         */
        public zip<U, V>(second: IterableIterator<U>, resultSelector: (first: T, second: U) => V): Lz<V>;

        /**
         * Applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.
         * @param {LzIterable<T>} first The first sequence to merge.
         * @param {IterableIterator<U>} second The second sequence to merge.
         * @param {(first: T, second: U) => V} resultSelector A function that specifies how to merge the elements from the two sequences.
         * @returns {IterableIterator<V>} A sequence that contains merged elements of two input sequences.
         */
        public static zip<T, U, V>(first: LzIterable<T>, second: IterableIterator<U>, resultSelector: (first: T, second: U) => V)
            : Lz<V>;

        /**
         * Applies an accumulator function over a sequence. The specified seed value is used as the initial accumulator value.
         * @param {(accumulator: U, current: T) => U} func An accumulator function to be invoked on each element.
         * @param {U} seed The initial accumulator value.
         * @returns {U} The final accumulator value.
         */
        public aggregate<U>(func: (accumulator: U, current: T) => U, seed?: U): U;

        /**
         * Applies an accumulator function over a sequence. The specified seed value is used as the initial accumulator value.
         * @param {LzIterable<T>} source The sequence to aggregate over.
         * @param {(accumulator: U, current: T) => U} func An accumulator function to be invoked on each element.
         * @param {U} seed The initial accumulator value.
         * @returns {U} The final accumulator value.
         */
        public static aggregate<T, U>(source: LzIterable<T>, func: (accumulator: U, current: T) => U, seed?: U): U;

        /**
         * Invokes a transform function on each element of a sequence and returns the maximum value.
         * @param {(item: T) => number} selector A transform function to apply to each element.
         * @returns {number} The maximum value in the sequence.
         */
        public max(selector?: (item: T) => number): number;

        /**
         * Invokes a transform function on each element of a sequence and returns the maximum value.
         * @param {LzIterable<T>} source A sequence of values to determine the maximum value of.
         * @param {(item: T) => number} selector A transform function to apply to each element.
         * @returns {number} The maximum value in the sequence.
         */
        public static max<T>(source: LzIterable<T>, selector?: (item: T) => number): number;

        /**
         * Invokes a transform function on each element of a sequence and returns the minimum value.
         * @param {(item: T) => number} selector A transform function to apply to each element.
         * @returns {number} The minimum value in the sequence.
         */
        public min(selector?: (item: T) => number): number;

        /**
         * Invokes a transform function on each element of a sequence and returns the minimum value.
         * @param {LzIterable<T>} source A sequence of values to determine the minimum value of.
         * @param {(item: T) => number} selector A transform function to apply to each element.
         * @returns {number} The minimum value in the sequence.
         */
        public static min<T>(source: LzIterable<T>, selector?: (item: T) => number): number;

        /**
         * Computes the sum of the sequence of values that are obtained by invoking a transform function on each element of the input sequence.
         * @param {(item: T) => number} selector A transform function to apply to each element.
         * @returns {number} The sum of the projected values.
         */
        public sum(selector?: (item: T) => number): number;

        /**
         * Computes the sum of the sequence of values that are obtained by invoking a transform function on each element of the input sequence.
         * @param {LzIterable<T>} source A sequence of values that are used to calculate a sum.
         * @param {(item: T) => number} selector A transform function to apply to each element.
         * @returns {number} The sum of the projected values.
         */
        public static sum<T>(source: LzIterable<T>, selector?: (item: T) => number): number;

        /**
         * Computes the average of a sequence of values that are obtained by invoking a transform function on each element of the input sequence.
         * @param {(item: T) => number} selector A transform function to apply to each element.
         * @returns {number} The average of the sequence of values, or 0 if the source sequence is empty.
         */
        public average(selector?: (item: T) => number): number;

        /**
         * Computes the average of a sequence of values that are obtained by invoking a transform function on each element of the input sequence.
         * @param {LzIterable<T>} source A sequence of values that are used to calculate an average.
         * @param {(item: T) => number} selector A transform function to apply to each element.
         * @returns {number} The average of the sequence of values, or 0 if the source sequence is empty.
         */
        public static average<T>(source: LzIterable<T>, selector?: (item: T) => number): number;

        /**
         * Returns a number that represents how many elements in the specified sequence satisfy a condition.
         * @param {(item: T) => boolean} predicate A function to test each element for a condition.
         * @returns {number} A number that represents how many elements in the sequence satisfy the condition in the predicate function.
         */
        public count(predicate?: (item: T) => boolean): number;

        /**
         * Returns a number that represents how many elements in the specified sequence satisfy a condition.
         * @param {LzIterable<T>} source The sequence to return elements from.
         * @param {(item: T) => boolean} predicate A function to test each element for a condition.
         * @returns {number} A number that represents how many elements in the sequence satisfy the condition in the predicate function.
         */
        public static count<T>(source: LzIterable<T>, predicate?: (item: T) => boolean): number;

        /**
         * Determines whether any element of a sequence satisfies a condition.
         * @param {(item: T) => boolean} predicate A function to test each element for a condition.
         * @returns {boolean} <b>true</b> if any elements in the source sequence pass the test in the specified predicate; otherwise,
         * <b>false</b>.
         */
        public any(predicate: (item: T) => boolean): boolean;

        /**
         * Determines whether any element of a sequence satisfies a condition.
         * @param {LzIterable<T>} source The sequence whose elements to apply the predicate to.
         * @param {(item: T) => boolean} predicate A function to test each element for a condition.
         * @returns {boolean} <b>true</b> if any elements in the source sequence pass the test in the specified predicate; otherwise,
         * <b>false</b>.
         */
        public static any<T>(source: LzIterable<T>, predicate: (item: T) => boolean): boolean;

        /**
         * Determines whether all elements of a sequence satisfy a condition.
         * @param {(item: T) => boolean} predicate A function to test each element for a condition.
         * @returns {boolean} <b>true</b> if every element of the source sequence passes the test in the specified predicate, or if the sequence
         * is empty; otherwise, <b>false</b>.
         */
        public all(predicate: (item: T) => boolean): boolean;

        /**
         * Determines whether all elements of a sequence satisfy a condition.
         * @param {LzIterable<T>} source The sequence that contains the elements to apply the predicate to.
         * @param {(item: T) => boolean} predicate A function to test each element for a condition.
         * @returns {boolean} <b>true</b> if every element of the source sequence passes the test in the specified predicate, or if the sequence
         * is empty; otherwise, <b>false</b>.
         */
        public static all<T>(source: LzIterable<T>, predicate: (item: T) => boolean): boolean;

        /**
         * Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.
         * @param {(item: T) => boolean} predicate A function to test an element for a condition. Return true to keep the element,
         * false otherwise.
         * @returns {T} The single element of the input sequence that satisfies a condition.
         * @throws If no element satisfies the condition in predicate, or more than one element satisfies the condition
         * in predicate, or the source sequence is empty.
         */
        public single(predicate?: (item: T, index: number) => boolean): T;

        /**
         * Returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.
         * @param {LzIterable<T>} source An iterable to return the single element of.
         * @param {(item: T) => boolean} predicate A function to test an element for a condition. Return true to keep the element,
         * false otherwise.
         * @returns {T} The single element of the input sequence that satisfies a condition.
         * @throws If no element satisfies the condition in predicate, or more than one element satisfies the condition
         * in predicate, or the source sequence is empty.
         */
        public static single<T>(source: LzIterable<T>,
                                predicate?: (item: T, index: number) => boolean): T;

        /**
         * Returns the only element of a sequence that satisfies a specified condition or a default value if no such element
         * exists; this method throws an exception if more than one element satisfies the condition.
         * @param {T} defaultValue The default value.
         * @param {(item: T) => boolean} predicate A function to test an element for a condition. Return true to keep the element,
         * false otherwise.
         * @returns {T} The single element of the input sequence that satisfies a condition.
         * @throws If more than one element satisfies the condition in predicate.
         */
        public singleOrDefault(defaultValue: T, predicate?: (item: T, index: number) => boolean): T;

        /**
         * Returns the only element of a sequence that satisfies a specified condition or a default value if no such element exists;
         * this method throws an exception if more than one element satisfies the condition.
         * @param {LzIterable<T>} source A sequence to return the single element from.
         * @param {T} defaultValue The default value.
         * @param {(item: T) => boolean} predicate A function to test an element for a condition. Return true to keep the element,
         * false otherwise.
         * @returns {T} The single element of the input sequence that satisfies the condition, or <i>defaultValue</i> if
         * no such element is found.
         * @throws If more than one element satisfies the condition in predicate.
         */
        public static singleOrDefault<T>(source: LzIterable<T>, defaultValue: T,
                                         predicate?: (item: T, index: number) => boolean): T;

        /**
         * Returns the first element of a sequence.
         * @param {(item: T, index: number) => boolean} predicate A function to test each element for a condition.
         * @returns {T} The first element.
         * @throws If the source sequence contains no elements or the predicate did not match any elements.
         */
        public first(predicate?: (item: T, index: number) => boolean): T;

        /**
         * Returns the first element of a sequence.
         * @param {LzIterable<T>} source The sequence to return an element from.
         * @param {(item: T, index: number) => boolean} predicate A function to test each element for a condition.
         * @returns {T} The first element.
         * @throws If the source sequence contains no elements or the predicate did not match any elements.
         */
        public static first<T>(source: LzIterable<T>, predicate?: (item: T, index: number) => boolean): T;

        /**
         * Returns the first element of a sequence, or a default value if the sequence contains no elements.
         * @param {T} defaultValue The default value.
         * @param {(item: T, index: number) => boolean} predicate A function to test each element for a condition.
         * @returns {T} The first element, or a default value if the sequence contains no elements.
         */
        public firstOrDefault(defaultValue: T, predicate?: (item: T, index: number) => boolean): T;

        /**
         * Returns the first element of a sequence, or a default value if the sequence contains no elements.
         * @param {LzIterable<T>} source The sequence to return an element from.
         * @param {T} defaultValue The default value.
         * @param {(item: T, index: number) => boolean} predicate A function to test each element for a condition.
         * @returns {T} The first element, or a default value if the sequence contains no elements.
         */
        public static firstOrDefault<T>(source: LzIterable<T>, defaultValue: T,
                                        predicate?: (item: T, index: number) => boolean): T;

        /**
         * Creates a Map from an Array according to a specified key selector function.
         * @param {(item: T) => K} keySelector A function to extract a key from each element.
         * @param {(item: T) => U} elementSelector A function to map each source element to an element in the returned Map.
         * @returns {Map<K, U>} A Map that contains keys and values.
         */
        public toDictionary<K, U>(keySelector: (item: T) => K, elementSelector?: (item: T) => U): Map<K, U>;

        /**
         * Creates a Map from a sequence of IterableIterator<[T1, T2]>
         * @returns {Map<T1, T2>} A Map that contains keys and values.
         */
        public toDictionary<T1, T2>(): Map<T1, T2>;

        /**
         * Creates a Map from an Array according to a specified key selector function.
         * @param {LzIterable<T>} source The sequence to create a Map<K, T> from.
         * @param {(item: T) => K} keySelector A function to extract a key from each element.
         * @param {(item: T) => U} elementSelector A function to map each source element to an element in the returned Map.
         * @returns {Map<K, U>} A Map that contains keys and values.
         */
        public static toDictionary<T, K, U>(source: LzIterable<T>, keySelector: (item: T) => K, elementSelector?: (item: T) => U)
            : Map<K, U>;

        /**
         * Creates a Map from a sequence of IterableIterator<[T1, T2[]]>
         * @param {LzIterable<T>} source The sequence to create a Map<K, T> from.
         * @returns {Map<T1, T2[]>} A Map that contains keys and values.
         */
        public static toDictionary<T extends [T1, T2[]], T1, T2>(source: LzIterable<T>): Map<T1, T2[]>;

        /**
         * Creates an array from a IterableIterator<T>.
         * @returns {T[]} An array that contains the elements from the input sequence.
         */
        public toArray(): T[];

        /**
         * Creates an array from a IterableIterator<T>.
         * @param {LzIterable<T>} source An IterableIterator<T> to create an array from.
         * @returns {T[]} An array that contains the elements from the input sequence.
         */
        public static toArray<T>(source: LzIterable<T>): T[];

        public [ Symbol.iterator ](): IterableIterator<T>;

        public next(value?: any): IteratorResult<T>;

        public return(value?: any): IteratorResult<T>;

        public throw(e?: any): IteratorResult<T>;
    }

    export class SortedMap<K, V> extends Map<K, V> implements IterableIterator<[K, V]> {
        constructor();
        constructor(entries: IterableIterator<[K, V]> | null, comparator?: (a: K, b: K, c?: V, d?: V) => number);

        /**
         * Returns the first (lowest) key currently in this map.
         */
        public firstKey(): K;

        /**
         * Returns the last (highest) key currently in this map.
         */
        public lastKey(): K;

        /**
         * Returns a view of the portion of this map whose keys are greater than or equal to fromKey.
         * @param fromKey low endpoint (inclusive) of the keys in the returned map
         */
        public tailMap(fromKey: K): SortedMap<K, V>;

        /**
         * Returns a view of the portion of this map whose keys range from fromKey, inclusive, to toKey, exclusive.
         * @param fromKey low endpoint (inclusive) of the keys in the returned map
         * @param toKey high endpoint (exclusive) of the keys in the returned map
         */
        public subMap(fromKey: K, toKey: K): SortedMap<K, V>;

        /**
         * Returns a view of the portion of this map whose keys are strictly less than toKey.
         * @param toKey high endpoint (exclusive) of the keys in the returned map
         */
        public headMap(toKey: K): SortedMap<K, V>;

        public next(value?: any): IteratorResult<[ K, V ]>;
        public return(value?: any): IteratorResult<[ K, V ]>;
        public throw(e?: any): IteratorResult<[ K, V ]>;
    }
}

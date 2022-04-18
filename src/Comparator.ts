import ComparatorFunction = twoa.ComparatorFunction;
import SelectorFunctionNoIndex = twoa.SelectorFunctionNoIndex;

export default class Comparator {
    private static readonly defaultCollator: Intl.Collator = new Intl.Collator(window?.navigator?.language ?? 'en', { numeric: true });

    // tslint:disable-next-line:cyclomatic-complexity
    public static defaultComparator<T>(a: T, b: T): number {
        const typeofA = typeof a;
        const typeofB = typeof b;
        const aIsNaN = typeofA === 'number' && isNaN(a as any);
        const bIsNaN = typeofB === 'number' && isNaN(b as any);

        if (a === b || (aIsNaN && bIsNaN)) {
            return 0;
        }

        if (typeofA === 'string' && typeofB === 'string') {
            return Comparator.defaultCollator.compare(a as any, b as any);
        }

        if ((typeofA === 'number' && typeofB === 'number') || (a instanceof Date && b instanceof Date)) {
            return (a as any) - (b as any);
        }

        if (a === undefined) {
            return 1;
        } else if (b === undefined) {
            return -1;
        }

        const aString = a instanceof Date ? a.toISOString() : String(a);
        const bString = b instanceof Date ? b.toISOString() : String(b);
        return Comparator.defaultCollator.compare(aString, bString);
    }

    private static readonly comparingCache = new Map<string | number | symbol, ComparatorFunction<any>>();
    public static comparing<T, U>(selector: SelectorFunctionNoIndex<T, U> | keyof T): ComparatorFunction<T> {
        if (typeof selector === 'function') {
            return (a, b) => Comparator.defaultComparator(selector(a), selector(b));
        } else {
            return Comparator.comparingCache.get(selector)
                ?? Comparator.comparingCache.set(selector, (a, b) => Comparator.defaultComparator(a?.[selector], b?.[selector])).get(selector);
        }
    }

    private static readonly selectorCache = new Map<string | number | symbol, SelectorFunctionNoIndex<any, any>>();
    public static selector<T, U>(selector: keyof T): SelectorFunctionNoIndex<T, U> {
        return Comparator.selectorCache.get(selector)
            ?? Comparator.selectorCache.set(selector, item => item?.[selector]).get(selector);
    }
}

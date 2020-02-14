export default class Comparator {
    private static readonly defaultCollator: Intl.Collator = new Intl.Collator('en', { numeric: true });

    public static defaultComparator<T>(a: T, b: T): number {
        const aIsNumber: boolean = typeof a === 'number';
        const bIsNumber: boolean = typeof b === 'number';
        const aIsNaN: boolean = aIsNumber && isNaN(a as any);
        const bIsNaN: boolean = bIsNumber && isNaN(b as any);
        const aProto: any = Object.getPrototypeOf(a);
        const bProto: any = Object.getPrototypeOf(b);

        if (a === b || (aIsNaN && bIsNaN)) {
            return 0;
        }

        if (a === undefined || a === null || aIsNaN) {
            return 1;
        } else if (b === undefined || b === null || bIsNaN) {
            return -1;
        } else if (aIsNumber && bIsNumber) {
            return (a as any) - (b as any);
        } else if (aProto === Object.prototype || aProto === Array.prototype || bProto === Object.prototype || bProto === Array.prototype) {
            return -1;
        } else {
            return Comparator.defaultCollator.compare(a.toString(), b.toString());
        }
    }
}

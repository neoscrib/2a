import Comparator from './Comparator';

export default class BinarySearch {
    public static find<T>(source: T[], index: number, length: number, item: T,
                          comparator: (a: T, b: T) => number = Comparator.defaultComparator): number {
        let lower: number = index;
        let upper: number = index + length - 1;
        while (lower <= upper) {
            const mid: number = lower + (upper - lower >> 1);
            const result: number = comparator(source[mid], item);
            if (result === 0) {
                return mid;
            } else if (result < 0) {
                lower = mid + 1;
            } else if (result > 0) {
                upper = mid - 1;
            }
        }
        return ~lower;
    }
}

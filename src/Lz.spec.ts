// tslint:disable:no-reference
/// <reference path="../index.d.ts" />

import { assert, expect } from 'chai';
import { describe } from 'mocha';
import Lz from '../src/Lz';

describe('Lz', () => {
    describe('append', () => {
        it('appends a value to the end of the sequence.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
            const actual = Lz.append(items, 80, 70, 60, 50, 40, 30, 20, 10).toArray();
            const expected = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('prepend', () => {
        it('adds a value to the beginning of the sequence.', () => {
            const items = [ 80, 70, 60, 50, 40, 30, 20, 10 ];
            const actual = Lz.prepend(items, 10, 20, 30, 40, 50, 60, 70, 80, 90).toArray();
            const expected = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('concat', () => {
        it('concatenates two sequences.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
            const actual = Lz.concat(items, [ 80, 70, 60, 50, 40, 30, 20, 10 ]).toArray();
            const expected = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('defaultIfEmpty', () => {
        it('returns the elements of the specified sequence or the specified value as a singleton collection if the sequence is empty.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.defaultIfEmpty(items, 100).toArray();
                const expected = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                expect(actual).to.deep.equal(expected);
            }

            {
                const items: number[] = [];
                const actual = Lz.defaultIfEmpty(items, 100).toArray();
                const expected = [ 100 ];
                expect(actual).to.deep.equal(expected);
            }
        });
    });

    describe('disjunctive', () => {
        it('returns the symmetrical difference of two sequences', () => {
            const a = [ 0, 1, 2, 3, 4, 5 ];
            const b = [ 2, 3, 4, 5, 6, 7 ];
            const actual = Lz.disjunctive(a, b).toArray();
            expect(actual).to.deep.equal([ 0, 1, 6, 7 ]);
        });
    });

    describe('distinct', () => {
        it('returns distinct elements from a sequence by using a specified ComparatorFunction<T> to compare values.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.distinct(items).toArray();
                const expected = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
                expect(actual).to.deep.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.distinct(items, (a, b) => a % 50 - b % 50).toArray();
                const expected = [ 10, 20, 30, 40, 50 ];
                expect(actual).to.deep.equal(expected);
            }
        });
    });

    describe('empty', () => {
        it ('returns an empty sequence that has the specified type argument.', () => {
            const actual = Lz.empty().toArray();
            const expected: any[] = [];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('except', () => {
        it('produces the set difference of two sequences by using the specified <i>ComparatorFunction<T></i> to compare values.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.except(items, [ 50, 60, 70, 90 ]).toArray();
                const expected = [ 10, 20, 30, 40, 80 ];
                expect(actual).to.deep.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.except(items, [ 500, 600, 700, 900 ],
                    (a, b) => (a > 100 ? a / 10 : a) - (b > 100 ? b / 10 : b)).toArray();
                const expected = [ 10, 20, 30, 40, 80 ];
                expect(actual).to.deep.equal(expected);
            }
        });
    });

    describe('forEach', () => {
        it('performs the specified action on each element of the sequence.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
            const actual: number[] = [];
            Lz.forEach(items, item => actual.unshift(item));
            const expected = [ 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('insert', () => {
        it('inserts a value into the source sequence at the specified index.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            const actual = Lz.insert(items, 100, 9).toArray();
            const expected = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 80, 70, 60, 50, 40, 30, 20, 10 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('intersect', () => {
        it('produces the set intersection of two sequences.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.intersect(items, [ 49, 50, 60, 70, 90, 100, 110, 120, 130 ]).toArray();
                const expected = [ 50, 60, 70, 90 ];
                expect(actual).to.deep.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.intersect(items, [ 490, 500, 600, 700, 900, 1000, 1100, 1200, 1300 ],
                    (a, b) => (a > 100 ? a / 10 : a) - (b > 100 ? b / 10 : b)).toArray();
                const expected = [ 50, 60, 70, 90 ];
                expect(actual).to.deep.equal(expected);
            }
        });
    });

    describe('join', () => {
        it('correlates the elements of two sequences based on matching keys.', () => {
            const a = [
                { id: 1, name: 'mercury', mass: '3.285 × 10^23 kg' },
                { id: 2, name: 'venus', mass: '4.867 × 10^24 kg' },
                { id: 3, name: 'earth', mass: '5.972 × 10^24 kg' },
                { id: 4, name: 'mars', mass: '6.39 × 10^23 kg' },
                { id: 5, name: 'jupiter', mass: '1.898 × 10^27 kg' },
                { id: 6, name: 'saturn', mass: '5.683 × 10^26 kg' },
                { id: 7, name: 'neptune', mass: '1.024 × 10^26 kg' },
                { id: 8, name: 'uranus', mass: '8.681 × 10^25 kg' },
                { id: 9, name: 'pluto', mass: '1.309 × 10^22 kg' }
            ];
            const b = [
                { planet: 'earth', radius: '3,958.8 mi' },
                { planet: 'jupiter', radius: '43,441 mi' },
                { planet: 'mars', radius: '2,106.1 mi' },
                { planet: 'mercury', radius: '1,516 mi' },
                { planet: 'neptune', radius: '15,299 mi' },
                { planet: 'pluto', radius: '738.38 mi' },
                { planet: 'saturn', radius: '36,184 mi' },
                { planet: 'uranus', radius: '15,759 mi' },
                { planet: 'venus', radius: '3,760.4 mi' }
            ];

            const actual = Lz.join(a, b, item => item.name, item => item.planet, (a, { radius }) => ({ ...a, radius })).toArray();
            const expected = [
                { id: 1, name: 'mercury', mass: '3.285 × 10^23 kg', radius: '1,516 mi' },
                { id: 2, name: 'venus', mass: '4.867 × 10^24 kg', radius: '3,760.4 mi' },
                { id: 3, name: 'earth', mass: '5.972 × 10^24 kg', radius: '3,958.8 mi' },
                { id: 4, name: 'mars', mass: '6.39 × 10^23 kg', radius: '2,106.1 mi' },
                { id: 5, name: 'jupiter', mass: '1.898 × 10^27 kg', radius: '43,441 mi' },
                { id: 6, name: 'saturn', mass: '5.683 × 10^26 kg', radius: '36,184 mi' },
                { id: 7, name: 'neptune', mass: '1.024 × 10^26 kg', radius: '15,299 mi' },
                { id: 8, name: 'uranus', mass: '8.681 × 10^25 kg', radius: '15,759 mi' },
                { id: 9, name: 'pluto', mass: '1.309 × 10^22 kg', radius: '738.38 mi' }
            ];

            expect(actual).to.deep.equal(expected);
        });
    });

    describe('last', () => {
        it('returns the last element of a sequence.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
                const actual = Lz.last(items);
                const expected = 90;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
                const actual = Lz.last(items, item => item > 30 && item < 70);
                const expected = 60;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('lastOrDefault', () => {
        it('returns the last element of a sequence, or a default value if no element is found.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
                const actual = Lz.lastOrDefault(items, 100);
                const expected = 90;
                expect(actual).to.equal(expected);
            }

            {
                const items: number[] = [];
                const actual = Lz.lastOrDefault(items, 100);
                const expected = 100;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
                const actual = Lz.lastOrDefault(items, 200, item => item > 100);
                const expected = 200;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('range', () => {
        it('generates a sequence of integral numbers within a specified range.', () => {
            const actual = Lz.range(10, 10).toArray();
            const expected = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('repeat', () => {
        it('generates a sequence that contains one repeated value.', () => {
            const actual = Lz.repeat(10, 10).toArray();
            const expected = [ 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('repeatAction', () => {
        it('generates a sequence that contains the results of a repeated action.', () => {
            const actual = Lz.repeatAction((x, i) => i * 2, 10).toArray();
            const expected = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('reverse', () => {
        it('inverts the order of the elements in a sequence.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
            const actual = Lz.reverse(items).toArray();
            const expected = [ 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('sequenceEqual', () => {
        it('determines whether two sequences are equal by comparing their elements by using a specified ComparatorFunction<T>.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
                const actual = Lz.sequenceEqual(items, [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]);
                const expected = true;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
                const actual = Lz.sequenceEqual(items, [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]);
                const expected = false;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
                const actual = Lz.sequenceEqual(items, [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
                    (a, b) => (a >= 100 ? a / 10 : a) - (b >= 100 ? b / 10 : b));
                const expected = true;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('where', () => {
        it('filters a sequence of values based on a predicate.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.where(items, item => item > 40).toArray();
                const expected = [ 50, 60, 70, 80, 90, 80, 70, 60, 50 ];
                expect(actual).to.deep.equal(expected);
            }

            {
                // ensure nullish values are considered false. there was a bug once that used `predicate?.(value) ?? true`
                // which would result in incorrect behavior when the predicate function returns a nullish value rather than false.
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.where(items, item => item > 40 || undefined).toArray();
                const expected = [ 50, 60, 70, 80, 90, 80, 70, 60, 50 ];
                expect(actual).to.deep.equal(expected);
            }
        });
    });

    describe('select', () => {
        it('projects each element of a sequence into a new form.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            const actual = Lz.select(items, item => item / 2).toArray();
            const expected = [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 40, 35, 30, 25, 20, 15, 10, 5 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('selectMany', () => {
        it('projects each element of a sequence to an IterableIterator<U> and flattens the resulting sequences into one sequence.', () => {
            const items = [
                { items: [ 'a', 'b', 'c' ] },
                { items: [ 'd', 'e', 'f' ] }
            ];
            const actual = Lz.selectMany(items, item => item.items).toArray();
            const expected = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('take', () => {
        it('returns a specified number of contiguous elements from the start of a sequence.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            const actual = Lz.take(items, 10).toArray();
            const expected = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('skip', () => {
        it('bypasses a specified number of elements in a sequence and then returns the remaining elements.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            const actual = Lz.skip(items, 10).toArray();
            const expected = [ 70, 60, 50, 40, 30, 20, 10 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('takeWhile', () => {
        it('returns elements from a sequence as long as a specified condition is true.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            const actual = Lz.takeWhile(items, item => item < 90).toArray();
            const expected = [ 10, 20, 30, 40, 50, 60, 70, 80 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('skipWhile', () => {
        it('bypasses elements in a sequence as long as a specified condition is true and then returns the remaining elements.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            const actual = Lz.skipWhile(items, item => item < 60).toArray();
            const expected = [ 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('groupBy', () => {
        it('groups the elements of a sequence according to a specified key selector function and projects the elements for each group by using a specified function.', () => {
            const items = [
                { type: 'x', items: [ 'a', 'b', 'c' ] },
                { type: 'y', items: [ 'd', 'e', 'f' ] },
                { type: 'x', items: [ 'g', 'h', 'i' ] },
                { type: 'y', items: [ 'j', 'k', 'l' ] }
            ];
            const actual = Lz.groupBy(items, item => item.type, item => item.items).toArray();
            const expected = [
                [ 'x', [ [ 'a', 'b', 'c' ], [ 'g', 'h', 'i' ] ] ],
                [ 'y', [ [ 'd', 'e', 'f' ], [ 'j', 'k', 'l' ] ] ]
            ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('partition', () => {
        it('partitions the sequence into arrays of specified size.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            const actual = Lz.partition(items, 5).toArray();
            const expected = [ [ 10, 20, 30, 40, 50 ], [ 60, 70, 80, 90, 80 ], [ 70, 60, 50, 40, 30 ], [ 20, 10 ] ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('union', () => {
        it('produces the set union of two sequences.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.union(items, [ 49, 50, 60, 70, 90, 100, 110, 120, 130 ]).toArray();
                const expected = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 49, 100, 110, 120, 130 ];
                expect(actual).to.deep.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.union(items, [ 490, 500, 600, 700, 900, 1000, 1100, 1200, 1300 ],
                    (a, b) => (a > 100 ? a / 10 : a) - (b > 100 ? b / 10 : b)).toArray();
                const expected = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 490, 1000, 1100, 1200, 1300 ];
                expect(actual).to.deep.equal(expected);
            }
        });
    });

    describe('zip', () => {
        it('applies a specified function to the corresponding elements of two sequences, producing a sequence of the results.', () => {
            const a = [
                { type: 'x', items: [ 'a', 'b', 'c' ] },
                { type: 'y', items: [ 'd', 'e', 'f' ] }
            ];
            const b = [
                { type: 'x', items: [ 'g', 'h', 'i' ] },
                { type: 'y', items: [ 'j', 'k', 'l' ] }
            ];
            const actual = Lz.zip(a, b, ({ type, items: a }, { items: b }) => ({ type, items: [ ...a, ...b ] })).toArray();
            const expected = [
                { type: 'x', items: [ 'a', 'b', 'c', 'g', 'h', 'i' ] },
                { type: 'y', items: [ 'd', 'e', 'f', 'j', 'k', 'l' ] }
            ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('aggregate', () => {
        it('applies an accumulator function over a sequence. The specified seed value is used as the initial accumulator value.', () => {
            const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
            const actual = Lz.aggregate(items, (acc, cur) => acc + cur, 40);
            const expected = 850;
            expect(actual).to.equal(expected);
        });
    });

    describe('max', () => {
        it('invokes a transform function on each element of a sequence and returns the maximum value.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.max(items);
                const expected = 90;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.max(items, item => item * 10);
                const expected = 900;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('min', () => {
        it('invokes a transform function on each element of a sequence and returns the minimum value.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.min(items);
                const expected = 10;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.min(items, item => item * 10);
                const expected = 100;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('sum', () => {
        it('computes the sum of the sequence of values that are obtained by invoking a transform function on each element of the input sequence.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.sum(items);
                const expected = 810;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.sum(items, item => item * 10);
                const expected = 8100;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('average', () => {
        it('computes the average of a sequence of values that are obtained by invoking a transform function on each element of the input sequence.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Math.floor(Lz.average(items));
                const expected = 47;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Math.floor(Lz.average(items, item => item * 10));
                const expected = 476;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('count', () => {
        it('returns a number that represents how many elements in the specified sequence satisfy a condition.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.count(items);
                const expected = 17;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.count(items, item => item < 50);
                const expected = 8;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('any', () => {
        it('determines whether any element of a sequence satisfies a condition.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.any(items, item => item > 0);
                const expected = true;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.any(items, item => item < 0);
                const expected = false;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('all', () => {
        it('determines whether all elements of a sequence satisfy a condition.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.all(items, item => item > 0);
                const expected = true;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.all(items, item => item < 0);
                const expected = false;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('single', () => {
        it('returns the only element of a sequence, and throws an exception if there is not exactly one element in the sequence.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const fn = () => Lz.single(items);
                expect(fn).to.throw('sequence contains more than one item');
            }

            {
                const items: number[] = [];
                const fn = () => Lz.single(items);
                expect(fn).to.throw('sequence contains no items');
            }

            {
                const items = [ 10 ];
                const actual = Lz.single(items);
                const expected = 10;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('singleOrDefault', () => {
        it('returns the only element of a sequence that satisfies a specified condition or a default value if no such element exists; this method throws an exception if more than one element satisfies the condition.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const fn = () => Lz.singleOrDefault(items, 20);
                expect(fn).to.throw('sequence contains more than one item');
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const fn = () => Lz.singleOrDefault(items, 20, item => item > 70);
                expect(fn).to.throw('sequence contains more than one item');
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.singleOrDefault(items, 20, item => item > 100);
                const expected = 20;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.singleOrDefault(items, 20, item => item > 80);
                const expected = 90;
                expect(actual).to.equal(expected);
            }

            {
                const items: number[] = [];
                const actual = Lz.singleOrDefault(items, 20);
                const expected = 20;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10 ];
                const actual = Lz.singleOrDefault(items, 20);
                const expected = 10;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('first', () => {
        it('returns the first element of a sequence.', () => {
            {
                const items: number[] = [];
                const fn = () => Lz.first(items);
                expect(fn).to.throw('sequence contains no items');
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.first(items);
                const expected = 10;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.first(items, item => item > 40);
                const expected = 50;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('firstOrDefault', () => {
        it('returns the first element of a sequence, or a default value if the sequence contains no elements.', () => {
            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.firstOrDefault(items, 100);
                const expected = 10;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.firstOrDefault(items, 100, item => item > 40);
                const expected = 50;
                expect(actual).to.equal(expected);
            }

            {
                const items: number[] = [];
                const actual = Lz.firstOrDefault(items, 100);
                const expected = 100;
                expect(actual).to.equal(expected);
            }

            {
                const items = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30, 20, 10 ];
                const actual = Lz.firstOrDefault(items, 100, item => item > 100);
                const expected = 100;
                expect(actual).to.equal(expected);
            }
        });
    });

    describe('toDictionary', () => {
        it('creates a Map from a sequence of IterableIterator<[T1, T2]>', () => {
            const items = [
                { type: 'x', items: [ 'a', 'b', 'c' ] },
                { type: 'y', items: [ 'd', 'e', 'f' ] },
                { type: 'x', items: [ 'g', 'h', 'i' ] },
                { type: 'y', items: [ 'j', 'k', 'l' ] }
            ];

            const group = Lz.toIterable([
                [ 'x', [ 'a', 'b', 'c' ] ],
                [ 'y', [ 'd', 'e', 'f' ] ]
            ]).toDictionary();

            const actual = Lz.groupBy(items, item => item.type, item => item.items).toDictionary();
            const expected = new Map([
                [ 'x', [ [ 'a', 'b', 'c' ], [ 'g', 'h', 'i' ] ] ],
                [ 'y', [ [ 'd', 'e', 'f' ], [ 'j', 'k', 'l' ] ] ]
            ]);

            expect(actual.get('x')).to.deep.equal(expected.get('x'));
            expect(actual.get('y')).to.deep.equal(expected.get('y'));
        });
    });

    describe('toArray', () => {
        it('creates an array from a IterableIterator<T>.', () => {
            function *items() {
                for (let i = 10; i <= 90; i += 10) {
                    yield i;
                }
            }

            const actual = Lz.toArray(items());
            const expected = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];
            expect(actual).to.deep.equal(expected);
        });
    });

    describe('toSet', () => {
        it('creates a set from an IterableIterator<T>.', () => {
            function *items() {
                for (let c = 'a'.charCodeAt(0); c <= 'f'.charCodeAt(0); c++) {
                    yield String.fromCharCode(c);
                    yield String.fromCharCode(c);
                    yield String.fromCharCode(c);
                }
            }

            const actual = Lz.toSet(items());
            const expected = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
            assert.instanceOf(actual, Set);
            expect([ ...actual ]).to.deep.equal(expected);
        });
    });
});

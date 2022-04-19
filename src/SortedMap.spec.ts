// tslint:disable:no-reference
/// <reference path="../index.d.ts" />

import { expect } from 'chai';
import { describe } from 'mocha';
import SortedMap from '../src/SortedMap';
import Comparator from '../src/Comparator';

const initializer: [ string, number ][] = [ [ 'z', 6 ], [ 'b', 2 ], [ 'y', 5 ], [ 'a', 1 ], [ 'c', 3 ], [ 'x', 4 ] ];
const sorted: [ string, number ][] = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'x', 4 ], [ 'y', 5 ], [ 'z', 6 ] ];
const reverse: [ string, number ][] = [ [ 'z', 6 ], [ 'y', 5 ], [ 'x', 4 ], [ 'c', 3 ], [ 'b', 2 ], [ 'a', 1 ] ];

describe('SortedMap', () => {
    describe('iterator', () => {
        it('iterates in the correct order', () => {
            const map = new SortedMap<string, number>(initializer);

            let actual = [];
            for (const [ key, value ] of map) {
                actual.push([ key, value ]);
            }
            expect(actual).to.eql(sorted);

            map.set('m', 7);

            actual = [];
            const expected = [ ...sorted.slice(0, 3), [ 'm', 7 ], ...sorted.slice(3) ];
            for (const [ key, value ] of map) {
                actual.push([ key, value ]);
            }
            expect(actual).to.eql(expected);
        });
    });

    describe('comparator', () => {
        it('iterates in the correct order', () => {
            const map = new SortedMap<string, number>(initializer,
                (a, b) => Comparator.defaultComparator(b, a));

            let actual = [];
            for (const [ key, value ] of map) {
                actual.push([ key, value ]);
            }
            expect(actual).to.eql(reverse);

            map.set('m', 7);

            actual = [];
            const expected = [ ...reverse.slice(0, 3), [ 'm', 7 ], ...reverse.slice(3) ];
            for (const [ key, value ] of map) {
                actual.push([ key, value ]);
            }
            expect(actual).to.eql(expected);
        });

        it('allows sorting by value', () => {
            const map: SortedMap<string, { age: number }> = new SortedMap<string, { age: number }>(null,
                (a, b, c, d) => c.age - d.age);
            map.set('a', { age: 32 });
            map.set('z', { age: 48 });
            map.set('b', { age: 23 });
            map.set('y', { age: 5 });
            map.set('c', { age: 71 });
            map.set('x', { age: 85 });

            const expected = [
                [ 'y', { age: 5 } ],
                [ 'b', { age: 23 } ],
                [ 'a', { age: 32 } ],
                [ 'z', { age: 48 } ],
                [ 'c', { age: 71 } ],
                [ 'x', { age: 85 } ]
            ];

            let actual = [];
            for (const [ key, value ] of map) {
                actual.push([ key, value ]);
            }
            expect(actual).to.eql(expected);

            map.set('m', { age: 34 });

            actual = [];
            expected.splice(3, 0, [ 'm', { age: 34 } ]);
            for (const [ key, value ] of map) {
                actual.push([ key, value ]);
            }
            expect(actual).to.eql(expected);
        });
    });

    describe('tailMap', () => {
        it('returns a view of the portion of this map whose keys are greater than or equal to fromKey', () => {
            const map = new SortedMap<string, number>(initializer);

            const actual = [];
            for (const [ key, value ] of map.tailMap('m')) {
                actual.push([ key, value ]);
            }
            expect(actual).to.eql(sorted.slice(3));
        });
    });

    describe('subMap', () => {
        it('returns a view of the portion of this map whose keys range from fromKey, inclusive, to toKey, exclusive', () => {
            const map = new SortedMap<string, number>(initializer);

            const actual = [];
            for (const [ key, value ] of map.subMap('c', 'z')) {
                actual.push([ key, value ]);
            }
            expect(actual).to.eql(sorted.slice(2, 5));
        });
    });

    describe('headMap', () => {
        it('returns a view of the portion of this map whose keys are strictly less than toKey', () => {
            const map = new SortedMap<string, number>(initializer);

            const actual = [];
            for (const [ key, value ] of map.headMap('m')) {
                actual.push([ key, value ]);
            }
            expect(actual).to.eql(sorted.slice(0, 3));
        });
    });

    describe('firstKey', () => {
        it('returns the first key', () => {
            const map = new SortedMap<string, number>(initializer);

            const expected = 'a';
            const actual = map.firstKey();
            expect(actual).to.equal(expected);
        });

        it('throws if empty', () => {
            const map = new SortedMap<string, number>();
            expect(() => map.firstKey()).to.throw('The map is empty.');
        });
    });

    describe('lastKey', () => {
        it('returns the last key', () => {
            const map = new SortedMap<string, number>(initializer);

            const expected = 'z';
            const actual = map.lastKey();
            expect(actual).to.equal(expected);
        });

        it('throws if empty', () => {
            const map = new SortedMap<string, number>();
            expect(() => map.lastKey()).to.throw('The map is empty.');
        });
    });

    describe('entries', () => {
        it('returns entries in sorted order', () => {
            const map = new SortedMap<string, number>(initializer);

            const actual = [ ...map.entries() ];
            expect(actual).to.eql(sorted);
        });
    });

    describe('keys', () => {
        it('returns keys in sorted order', () => {
            const map = new SortedMap<string, number>(initializer);

            const expected = [ 'a', 'b', 'c', 'x', 'y', 'z' ];
            const actual = [ ...map.keys() ];
            expect(actual).to.eql(expected);
        });
    });

    describe('values', () => {
        it('returns values in sorted order', () => {
            const map = new SortedMap<string, number>(initializer);

            const expected = [ 1, 2, 3, 4, 5, 6 ];
            const actual = [ ...map.values() ];
            expect(actual).to.eql(expected);
        });
    });

    describe('clear', () => {
        it('clear the map', () => {
            const map = new SortedMap<string, number>(initializer);

            expect(map.size).to.equal(6);
            map.clear();
            expect(map.size).to.equal(0);
            expect((map as any).sorted).to.equal(false);
        });
    });

    describe('delete', () => {
        it('removes an item from the map', () => {
            const map = new SortedMap<string, number>(initializer);

            map.delete('c');
            const actual = [ ...map.entries() ];
            expect(map.size).to.equal(5);
            expect((map as any).sorted).to.equal(true);
            expect(actual).to.eql(sorted.filter(item => item[0] !== 'c'));

            map.delete('a');
            expect(map.size).to.equal(4);
            expect((map as any).sorted).to.equal(true);
            map.delete('b');
            expect(map.size).to.equal(3);
            expect((map as any).sorted).to.equal(true);
            map.delete('x');
            expect(map.size).to.equal(2);
            expect((map as any).sorted).to.equal(true);
            map.delete('y');
            expect(map.size).to.equal(1);
            expect((map as any).sorted).to.equal(true);
            map.delete('z');
            expect(map.size).to.equal(0);
            expect((map as any).sorted).to.equal(false);
        });
    });

    describe('setIfAbsent', () => {
        it('returns the existing entry or creates a new entry', () => {
            const map = new SortedMap<string, number>(initializer);

            expect(map.size).to.equal(6);
            expect(map.setIfAbsent('c', 4)).to.equal(3);
            expect(map.size).to.equal(6);
            expect(map.setIfAbsent('m', 7)).to.equal(7);
            expect(map.size).to.equal(7);
        });
    });

    describe('forEach', () => {
        it('performs an action on each entry in sorted order', () => {
            const map = new SortedMap<string, number>(initializer);

            const actual: [ string, number ][] = [];
            map.forEach((value, key) => actual.push([ key, value ]));
            expect(actual).to.eql(sorted);
        });
    });

    describe('constructor', () => {
        it('copies internal sorted keys when constructed with another SortedMap', () => {
            const map = new SortedMap<string, number>(initializer);
            map.keys();
            const map2 = new SortedMap(map);
            expect((map2 as any).sorted).to.equal(true);
            expect((map2 as any).sortedKeys).to.eql(sorted.map(([ key ]) => key));
        });
    });
});

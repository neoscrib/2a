import { assert } from 'chai';
import 'mocha';
import SortedMap from '../src/SortedMap';
import Comparator from '../src/Comparator';

describe('SortedMap', () => {
    describe('iterator', () => {
        it('iterates in the correct order', () => {
            const map: SortedMap<string, string> = new SortedMap<string, string>();
            map.set('a', 'a');
            map.set('z', 'z');
            map.set('b', 'b');
            map.set('y', 'y');
            map.set('c', 'c');
            map.set('x', 'x');

            let expected: string[] = [ 'a', 'b', 'c', 'x', 'y', 'z' ];
            let index = 0;
            for (const [ key, value ] of map) {
                assert.equal(key, expected[index]);
                assert.equal(value, expected[index++]);
            }

            map.set('m', 'm');

            expected = [ 'a', 'b', 'c', 'm', 'x', 'y', 'z' ];
            index = 0;
            for (const [ key, value ] of map) {
                assert.equal(key, expected[index]);
                assert.equal(value, expected[index++]);
            }
        });
    });

    describe('comparator', () => {
        it('iterates in the correct order', () => {
            const map: SortedMap<string, string> = new SortedMap<string, string>(null,
                (a, b) => Comparator.defaultComparator(a, b) * -1);
            map.set('a', 'a');
            map.set('z', 'z');
            map.set('b', 'b');
            map.set('y', 'y');
            map.set('c', 'c');
            map.set('x', 'x');

            let expected: string[] = [ 'z', 'y', 'x', 'c', 'b', 'a' ];
            let index = 0;
            for (const [ key, value ] of map) {
                assert.equal(key, expected[index]);
                assert.equal(value, expected[index++]);
            }

            map.set('m', 'm');

            expected = [ 'z', 'y', 'x', 'm', 'c', 'b', 'a' ];
            index = 0;
            for (const [ key, value ] of map) {
                assert.equal(key, expected[index]);
                assert.equal(value, expected[index++]);
            }
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

            let expectedKeys: string[] = [ 'y', 'b', 'a', 'z', 'c', 'x' ];
            let expectedValues: number[] = [ 5, 23, 32, 48, 71, 85 ];
            let index = 0;
            for (const [ key, value ] of map) {
                assert.equal(key, expectedKeys[index]);
                assert.equal(value.age, expectedValues[index++]);
            }

            map.set('m', { age: 34 });

            expectedKeys = [ 'y', 'b', 'a', 'm', 'z', 'c', 'x' ];
            expectedValues = [ 5, 23, 32, 34, 48, 71, 85 ];
            index = 0;
            for (const [ key, value ] of map) {
                assert.equal(key, expectedKeys[index]);
                assert.equal(value.age, expectedValues[index++]);
            }
        });
    });

    describe('tailMap', () => {
        it('returns a view of the portion of this map whose keys are greater than or equal to fromKey', () => {
            const map: SortedMap<string, string> = new SortedMap<string, string>();
            map.set('a', 'a');
            map.set('z', 'z');
            map.set('b', 'b');
            map.set('y', 'y');
            map.set('c', 'c');
            map.set('x', 'x');

            const expected: string[] = [ 'x', 'y', 'z' ];
            let index = 0;
            for (const [ key, value ] of map.tailMap('m')) {
                assert.equal(key, expected[index]);
                assert.equal(value, expected[index++]);
            }
        });
    });

    describe('subMap', () => {
        it('returns a view of the portion of this map whose keys range from fromKey, inclusive, to toKey, exclusive', () => {
            const map: SortedMap<string, string> = new SortedMap<string, string>();
            map.set('a', 'a');
            map.set('z', 'z');
            map.set('b', 'b');
            map.set('y', 'y');
            map.set('c', 'c');
            map.set('x', 'x');

            const expected: string[] = [ 'c', 'x', 'y' ];
            let index = 0;
            for (const [ key, value ] of map.subMap('c', 'z')) {
                assert.equal(key, expected[index]);
                assert.equal(value, expected[index++]);
            }
        });
    });

    describe('headMap', () => {
        it('returns a view of the portion of this map whose keys are strictly less than toKey', () => {
            const map: SortedMap<string, string> = new SortedMap<string, string>();
            map.set('a', 'a');
            map.set('z', 'z');
            map.set('b', 'b');
            map.set('y', 'y');
            map.set('c', 'c');
            map.set('x', 'x');

            const expected: string[] = [ 'a', 'b' ];
            let index = 0;
            for (const [ key, value ] of map.headMap('c')) {
                assert.equal(key, expected[index]);
                assert.equal(value, expected[index++]);
            }
        });
    });
});

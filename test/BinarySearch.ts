import { assert } from 'chai';
import 'mocha';
import BinarySearch from '../src/BinarySearch';

describe('BinarySearch', () => {
    describe('find', () => {
        it('returns the correct index of an item in a sorted array', () => {
            const items: number[] = [];
            for (let i = 0; i < 100; i++) {
                items.push(i);
            }

            let index: number = BinarySearch.find(items, 0, items.length, 25);
            assert.equal(index, 25);

            index = BinarySearch.find(items, 0, items.length, 50);
            assert.equal(index, 50);

            index = BinarySearch.find(items, 0, items.length, 75);
            assert.equal(index, 75);

            index = BinarySearch.find(items, 0, items.length, 200);
            assert.equal(index, -101);
        });
    });
});

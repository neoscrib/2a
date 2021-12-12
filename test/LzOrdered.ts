// tslint:disable:no-reference
/// <reference path="../index.d.ts" />

import { expect } from 'chai';
import 'mocha';
import Lz from '../src/Lz';

describe('LzOrdered', () => {
    describe('thenBy', () => {
        it('returns the correctly ordered items by length and then by name', () => {
            const fruits: string[] = [ 'apricot', 'orange', 'banana', 'mango', 'apple', 'grape', 'strawberry' ];

            const ordered = [
                ...Lz
                .orderBy(fruits, fruit => fruit.length)
                .thenBy(fruit => fruit)
                .select(fruit => fruit.toUpperCase())
            ];
            expect(ordered).to.eql(['APPLE', 'GRAPE', 'MANGO', 'BANANA', 'ORANGE', 'APRICOT', 'STRAWBERRY']);

            const descending = [
                ...Lz
                .orderByDescending(fruits, fruit => fruit.length)
                .thenByDescending(Lz.identityFunction)
                .select(fruit => fruit.toUpperCase())
            ];
            expect(descending).to.eql(['STRAWBERRY', 'APRICOT', 'ORANGE', 'BANANA', 'MANGO', 'GRAPE', 'APPLE']);

            const both = [
                ...Lz
                    .orderBy(fruits, fruit => fruit.length)
                    .thenByDescending(Lz.identityFunction)
                    .select(fruit => fruit.toUpperCase())
            ];
            expect(both).to.eql(['MANGO', 'GRAPE', 'APPLE', 'ORANGE', 'BANANA', 'APRICOT', 'STRAWBERRY']);
        });
    });
});

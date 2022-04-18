// tslint:disable:no-reference
/// <reference path="../index.d.ts" />

import { expect } from 'chai';
import { describe } from 'mocha';
import Comparator from './Comparator';
import Lz from './Lz';

describe('Comparator', () => {
    describe('defaultComparator', () => {
        it('sorts as expected', () => {
            const d1 = new Date(2022, 0, 1);
            const d2 = new Date(2022, 0, 2);
            const o1 = {};
            const o2 = {};
            const a1: any[] = [ 1 ];
            const a2: any[] = [ 1, 2, 3 ];
            const source = [ true, false, d1, a1, o1, Infinity, -Infinity, 'a', 'b', 'c', 'aa', 'aaa', NaN, undefined, 'zzz', null, d2, o2, a2, 0, 1, 2 ];
            const sorted = Lz.orderBy(source, Lz.identityFunction, Comparator.defaultComparator).toArray();
            const expected = [ -Infinity, o1, o2, 0, a1, 1, a2, 2, d1, d2, 'a', 'aa', 'aaa', 'b', 'c', false, Infinity, NaN, null, true, 'zzz', undefined ];
            expect(sorted).to.eql(expected);
        });
    });

    describe('comparing', () => {
        it('sorts by specified key', () => {
            const a = { type: 'dog' };
            const b = { type: 'cat' };
            const c = { type: 'lion' };
            const d = { type: 'tiger' };
            const e = { type: 'bear' };

            const sorted = Lz.orderBy([ a, b, c, d, e ], Lz.identityFunction, Comparator.comparing('type')).toArray();
            const expected = [ e, b, a, c, d ];
            expect(sorted).to.eql(expected);
        });

        it('sorts by specified selector function', () => {
            const a = { type: 'dog' };
            const b = { type: 'cat' };
            const c = { type: 'lion' };
            const d = { type: 'tiger' };
            const e = { type: 'bear' };

            const sorted = Lz.orderBy([ a, b, c, d, e ], Lz.identityFunction, Comparator.comparing<{ type: string }, string>(item => item.type)).toArray();
            const expected = [ e, b, a, c, d ];
            expect(sorted).to.eql(expected);
        });
    });

    describe('selector', () => {
        it('selects the value of specified key on an object', () => {
            const a = { type: 'dog' };
            const b = { type: 'cat' };
            const c = { type: 'lion' };
            const d = { type: 'tiger' };
            const e = { type: 'bear' };

            const sorted = Lz.orderBy([ a, b, c, d, e ], Comparator.selector('type')).toArray();
            const expected = [ e, b, a, c, d ];
            expect(sorted).to.eql(expected);
        });
    });
});

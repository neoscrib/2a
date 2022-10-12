// tslint:disable:no-reference
/// <reference path="../../index.d.ts" />

import { expect } from 'chai';
import { describe } from 'mocha';
import { createUrl, uuid } from './utils';

describe('utils', () => {
    describe('createUrl', () => {
        it('constructs the requisite uniform resource locator', () => {
            let url = createUrl('https://www.example.com', '/v1/test', { hello: 'world', key: '^5C4Ed5ATMg2z#uK' });
            expect(url).to.equal('https://www.example.com/v1/test?hello=world&key=%5E5C4Ed5ATMg2z%23uK');
            url = createUrl('https://www.example.com/', '/v1/test', { hello: 'world', key: '^5C4Ed5ATMg2z#uK' });
            expect(url).to.equal('https://www.example.com/v1/test?hello=world&key=%5E5C4Ed5ATMg2z%23uK');
            url = createUrl('https://www.example.com/', '/v1/test');
            expect(url).to.equal('https://www.example.com/v1/test');
            url = createUrl('https://www.example.com', '');
            expect(url).to.equal('https://www.example.com/');
        });
    });

    // describe('uuid', () => {
    //     it('generates a valid v4 uuid', () => {
    //         let v4 = uuid();
    //         console.log(v4);
    //         expect(v4).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    //
    //         v4 = uuid({ native: false });
    //         console.log(v4);
    //         expect(v4).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    //
    //         const bin = uuid({ binary: true });
    //         console.log(bin);
    //         expect(bin.length).to.eq(16);
    //         expect(bin[6] & 0x40).to.equal(0x40);
    //     });
    // });
});

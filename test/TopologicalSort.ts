import { expect } from 'chai';
import TopologicalSort from '../src/TopologicalSort';

interface ITestInterface {
    name: string;
    dependencies?: string[];
}

describe('topologicalSort', () => {
    it('should sort topologically', () => {
        const plugins: ITestInterface[] = [
            { name: 'b', dependencies: [ 'hello-world' ] },
            { name: 'hello-world' },
            { name: 'a', dependencies: [ 'hello-world' ] },
            { name: 'c' },
            { name: 'h', dependencies: [ 'a', 'b', 'c', 'f', 'e' ] },
            { name: 'd', dependencies: [ 'f', 'e' ] },
            { name: 'e', dependencies: [ 'a' ] },
            { name: 'f', dependencies: [ 'e' ] },
            { name: 'g', dependencies: [ 'd' ] }
        ];

        const actual = TopologicalSort.sort(plugins, item => item.name, item => item.dependencies);
        const expected: ITestInterface[] = [
            { name: 'hello-world' },
            { name: 'a', dependencies: [ 'hello-world' ] },
            { name: 'c' },
            { name: 'e', dependencies: [ 'a' ] },
            { name: 'f', dependencies: [ 'e' ] },
            { name: 'b', dependencies: [ 'hello-world' ] },
            { name: 'h', dependencies: [ 'a', 'b', 'c', 'f', 'e' ] },
            { name: 'd', dependencies: [ 'f', 'e' ] },
            { name: 'g', dependencies: [ 'd' ] }
        ];

        expect(actual).to.deep.equal(expected);
    });
});

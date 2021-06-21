import { crearCartas, example, changePage, anotherExample } from '../src/data.js';


describe('creaCartas', () => {
    it('is a function', () => {
        expect(typeof crearCartas).toBe('function');
    });

    it('returns `example`', () => {
        expect(example()).toBe('example');
    });
});


describe('changePage', () => {
    it('is a function', () => {
        expect(typeof changePage).toBe('function');
    });

    it('returns `anotherExample`', () => {
        expect(anotherExample()).toBe('OMG');
    });
});
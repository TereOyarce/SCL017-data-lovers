import { crearCartas, example, anotherExample } from '../src/data.js';


describe('creaCartas', () => {
    it('is a function', () => {
        expect(typeof crearCartas).toBe('function');
    });

    it('returns `example`', () => {
        expect(example()).toBe('example');
    });
});


describe('anotherExample', () => {
    it('is a function', () => {
        expect(typeof anotherExample).toBe('function');
    });

    it('returns `anotherExample`', () => {
        expect(anotherExample()).toBe('OMG');
    });
});
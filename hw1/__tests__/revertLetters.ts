import revertLetters  from "../revertLetters";

describe('revertLetters', () => {
    it('s1tar3t 2 hellow  ->  t1rat3s 2 wolleh', () => {
        expect(revertLetters('s1tar3t 2 hellow')).toBe('t1rat3s 2 wolleh');
    });

    it('s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh', () => {
        expect(revertLetters('s1ta$%r3t 2 hel^low')).toBe('t1ra$%t3s 2 wol^leh');
    });

    it('s1tar3t 2   low5  ->  t1rat3s 2   wol5', () => {
        expect(revertLetters('s1tar3t 2   low5')).toBe('t1rat3s 2   wol5');
    });
});
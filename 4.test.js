const { test, f1 } = require('./4');

describe('Day 4 part 1 Examples', () => {
    it('part 1 no triple', async () => {
        expect(test(111111)).toEqual(false);
    });

    it('part 1 incorrect length', async () => {
        expect(test(1111)).toEqual(false);
    });
    it('part 1 never descreases', async () => {
        expect(test(223450)).toEqual(false);
    });
    it('part 1 no double', async () => {
        expect(test(123789)).toEqual(false);
    });
    it('part 1 never descrease', async () => {
        expect(test(644440)).toEqual(false);
    });
    it('part 1 no more than doubles', async () => {
        expect(test(112233)).toEqual(true);
    });
    it('part 1 no more than doubles', async () => {
        expect(test(123444)).toEqual(false);
    });
    it('part 1 no more than doubles', async () => {
        expect(test(111122)).toEqual(true);
    });
});

describe('Day 4 part', () => {
    it('part 1 valid', async () => {
        const min = 172930;
        const max = 683082;
        expect(f1(min, max)).toEqual(1142);
    });
});

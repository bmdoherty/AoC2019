const { f1, f2, f3, f4, f5, f6 } = require('./3');
const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

async function readfile() {
    data = await readFileAsync('./3.1.data.txt', 'utf8');
}

describe('Day 3 part 1 Examples', () => {
    it('part 1 f1', async () => {
        expect(f1('R8,U5,L5,D3')).toEqual([
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [8, 0],
            [8, 1],
            [8, 2],
            [8, 3],
            [8, 4],
            [8, 5],
            [7, 5],
            [6, 5],
            [5, 5],
            [4, 5],
            [3, 5],
            [3, 4],
            [3, 3],
            [3, 2]
        ]);
    });

    it('part 1 f1', async () => {
        expect(f1('U7,R6,D4,L4')).toEqual([
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [1, 7],
            [2, 7],
            [3, 7],
            [4, 7],
            [5, 7],
            [6, 7],
            [6, 6],
            [6, 5],
            [6, 4],
            [6, 3],
            [5, 3],
            [4, 3],
            [3, 3],
            [2, 3]
        ]);
    });

    it('part 1 f1', async () => {
        expect(f2('R8,U5,L5,D3', 'U7,R6,D4,L4')).toEqual([
            [6, 5],
            [3, 3]
        ]);
    });

    it('part 1 f1', async () => {
        expect(f3('R8,U5,L5,D3', 'U7,R6,D4,L4')).toEqual(6);
    });

    it('part 1 f1', async () => {
        const A = 'R75,D30,R83,U83,L12,D49,R71,U7,L72';
        const B = 'U62,R66,U55,R34,D71,R55,D58,R83';
        expect(f3(A, B)).toEqual(159);
    });

    it('part 1 f1', async () => {
        const A = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51';
        const B = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
        expect(f3(A, B)).toEqual(135);
    });
});

describe('Day 1 part 1', () => {
    beforeAll(async () => {
        await readfile();
    });

    it('part 1', async () => {
        expect(f4(data)).toEqual(6730673);
    });
});

describe('Day 1 part 2', () => {
    beforeAll(async () => {
        await readfile();
    });

    it('part 1 f1', async () => {
        const A = 'R75,D30,R83,U83,L12,D49,R71,U7,L72';
        const B = 'U62,R66,U55,R34,D71,R55,D58,R83';
        expect(f5(A, B)).toEqual(610);
    });

    it('part 1 f1', async () => {
        const A = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51';
        const B = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
        expect(f5(A, B)).toEqual(410);
    });
    it('part 2', async () => {
        expect(f6(data)).toEqual(3749);
    });
});

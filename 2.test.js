const {f1, f2} = require("./2");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

async function readfile() {
    data2 = await readFileAsync("./2.1.data.txt", "utf8");
}

describe("Day 2 part 1 Examples", () => {
    it("part 1 example A", async () => {
        expect(f1('1,0,0,0,99')).toEqual('2,0,0,0,99');
    });
    it("part 1 example B", async () => {
        expect(f1('2,3,0,3,99')).toEqual('2,3,0,6,99');
    });    
    it("part 1 example C", async () => {
        expect(f1('2,4,4,5,99,0 ')).toEqual('2,4,4,5,99,9801');
    });  
    it("part 1 example D", async () => {
        expect(f1('1,1,1,4,99,5,6,0,99')).toEqual('30,1,1,4,2,5,6,0,99');
    });             
});

describe("Day 1 part 1", () => {
    beforeAll(async () => {
        await readfile();
    });

    it("part 1", async () => {
        const initialise = {
            noun: 12,
            verb: 2
        }
        expect(f1(data2, initialise)).toEqual(6730673);
    });
         
});

describe("Day 1 part 2", () => {
    beforeAll(async () => {
        await readfile();
    });

    it("part 2", async () => {
        expect(f2(data2)).toEqual(3749);
    });
         
});
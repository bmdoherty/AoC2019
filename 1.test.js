const {fuelForWeight, f1, totalFuelForWeight, f2} = require("./1");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

async function readfile() {
    data1 = await readFileAsync("./1.1.data.txt", "utf8");
}

describe("Day 1 part 1 Examples", () => {
    it("part 1 example A", async () => {
        expect(fuelForWeight(12)).toEqual(2);
    });
    it("part 1 example B", async () => {
        expect(fuelForWeight(14)).toEqual(2);
    });    
    it("part 1 example C", async () => {
        expect(fuelForWeight(1969)).toEqual(654);
    });  
    it("part 1 example D", async () => {
        expect(fuelForWeight(100756)).toEqual(33583);
    });             
});

describe("Day 1 part 1", () => {
    beforeAll(async () => {
        await readfile();
    });

    it("part 1", async () => {
        expect(f1(data1)).toEqual(3412207);
    });
         
});

describe("Day 1 part 2 Examples", () => {
    it("part 2 example A", async () => {
        expect(totalFuelForWeight(14)).toEqual(2);
    });
    it("part 2 example B", async () => {
        expect(totalFuelForWeight(1969)).toEqual(966);
    });    
    it("part 2 example C", async () => {
        expect(totalFuelForWeight(100756)).toEqual(50346);
    });             
});

describe("Day 1 part 2", () => {
    beforeAll(async () => {
        await readfile();
    });

    it("part 1", async () => {
        expect(f2(data1)).toEqual(5115436);
    });
         
});
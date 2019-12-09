const processInput = (str) => {
    return str
        .trim()
        .split(/\n/)
        .map((v) => v.trim())
        .map((v) => Number(v));
};

const fuelForWeightReducer = (sum, x) => sum + fuelForWeight(x)

const totalFuelForWeightReducer = (sum, x) => sum + totalFuelForWeight(x)

const fuelForWeight = (x) => {
    return Math.floor(x / 3) - 2
};

const f1 = (input) => {
    let massArray = processInput(input)

    return massArray.reduce(fuelForWeightReducer, 0)
};

const totalFuelForWeight = (x) => {
    let fuel = fuelForWeight(x)
    let totalFuel = 0

    while (fuel > 0) {
        totalFuel = totalFuel + fuel
        fuel = fuelForWeight(fuel)
    }

    return totalFuel
};

const f2 = (input) => {
    let massArray = processInput(input)

    return massArray.reduce(totalFuelForWeightReducer, 0)
};


module.exports = {fuelForWeight, f1, totalFuelForWeight, f2};
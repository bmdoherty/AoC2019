const processInput = (str) => {
    return str.split(',').map(Number);
};

const get = (array, index) => {
    return array[index];
};

const setMemoryAddress = (memory, address, value) => {
    memory[address] = value;
};

function ops(a, b, op) {
    switch (op) {
        case 1:
            return a + b;

        case 2:
            return a * b;
    }
}

function run(opCode, memory) {
    const op = opCode[0];
    const a = memory[opCode[1]];
    const b = memory[opCode[2]];
    const index = opCode[3];

    const result = ops(a, b, op);

    setMemoryAddress(memory, index, result);
}

const f1 = (str, initialise) => {
    const memory = processInput(str);

    if (initialise) {
        setMemoryAddress(memory, 1, initialise.noun);
        setMemoryAddress(memory, 2, initialise.verb);
    }

    for (
        let instructionPointer = 0;
        instructionPointer < memory.length;
        instructionPointer = instructionPointer + 4
    ) {
        let opCode = memory.slice(instructionPointer, instructionPointer + 4);

        if (opCode[0] === 99) {
            // exit
        } else {
            run(opCode, memory);
        }
    }

    if (initialise) {
        return memory[0];
    }

    return memory.join(',');
};

const f2 = (str) => {
    let result;

    for (noun = 0; noun < 99; noun++) {
        for (verb = noun; verb < 99; verb++) {
            result = f1(str, { noun, verb });

            // console.log(`${noun} - ${verb} - ${result}`)
            if (result === 19690720) {
                return 100 * noun + verb;                
            }
        }
    }
};

module.exports = { f1, f2 };

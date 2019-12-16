const processInput = (str) => {
    return str.split(',');
};

const moveRight = (position, steps, path) => {
    const [x, y] = position;

    for (let i = 1; i <= steps; i++) {
        path.push([x + i, y]);
    }
};

const moveLeft = (position, steps, path) => {
    let [x, y] = position;

    for (let i = 1; i <= steps; i++) {
        path.push([x - i, y]);
    }
};

const moveUp = (position, steps, path) => {
    let [x, y] = position;

    for (let i = 1; i <= steps; i++) {
        path.push([x, y + i]);
    }
};

const moveDown = (position, steps, path) => {
    const [x, y] = position;

    for (let i = 1; i <= steps; i++) {
        path.push([x, y - i]);
    }
};

const followInstruction = (position, instruction, path) => {
    let direction = instruction
        .split('')
        .slice(0, 1)
        .join('');
    let steps = instruction
        .split('')
        .slice(1)
        .join('');

    steps = Number(steps);

    switch (direction) {
        case 'R':
            moveRight(position, steps, path);
            break;
        case 'L':
            moveLeft(position, steps, path);
            break;
        case 'U':
            moveUp(position, steps, path);
            break;
        case 'D':
            moveDown(position, steps, path);
            break;
        default:
    }

    return [...path].pop();
};

const compareArray = (array1, array2) => {
    if (!array1 || !array2) {
        return false;
    }
    return array1.every((value, index) => value === array2[index]);
};

const f1 = (str) => {
    const instructions = processInput(str);
    const path = [];
    let position = [0, 0];

    for (let i = 0; i < instructions.length; i = i + 1) {
        const instruction = instructions[i];

        position = followInstruction(position, instruction, path);
    }

    return path;
};

const f2 = (a, b) => {
    const pathA = f1(a);
    const pathB = f1(b);

    let crossedPostions = [];

    for (let i = 0; i < pathA.length; i++) {
        for (let j = 0; j < pathB.length; j++) {
            if (compareArray(pathB[j], pathA[i])) {
                crossedPostions.push(pathB[j]);
                pathB.splice(j, 1);
            }
        }
    }

    return crossedPostions;
};

const manhattanDistance = (x, y) => {
    return Math.abs(x) + Math.abs(y);
};

const f3 = (a, b) => {
    const crossedPostions = f2(a, b);
    let min = Infinity;
    for (let i = 0; i < crossedPostions.length; i++) {
        let [x, y] = crossedPostions[i];
        let distance = manhattanDistance(x, y);
        if (distance < min) {
            min = distance;
        }
    }
    return min;
};

const f4 = (str) => {
    const [a, b] = str.trim().split(/\n/);

    return f3(a, b);
};

const optimisedDistance = (x, y, path) => {
    for (let i = 0; i < path.length; i++) {
        if (compareArray([x, y], path[i])) {
            return i + 1;
        }
    }
};

const f5 = (a, b) => {
    const pathA = f1(a);
    const pathB = f1(b);
    const crossedPostions = f2(a, b);
    let min = Infinity;
    for (let i = 0; i < crossedPostions.length; i++) {
        let [x, y] = crossedPostions[i];
        let distance = optimisedDistance(x, y, pathA) + optimisedDistance(x, y, pathB);
        if (distance < min) {
            min = distance;
        }
    }
    return min;
};

const f6 = (str) => {
    const [a, b] = str.trim().split(/\n/);

    return f5(a, b);
};

module.exports = { f1, f2, f3, f4, f5, f6 };

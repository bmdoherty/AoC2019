const neverDescreases = (digits) => {
    return (
        digits[0] <= digits[1] &&
        digits[1] <= digits[2] &&
        digits[2] <= digits[3] &&
        digits[3] <= digits[4] &&
        digits[4] <= digits[5]
    );
};

const includesDouble = (digits) => {
    if (digits[0] == digits[1] && digits[0] !== digits[2]) {
        return true;
    }
    if (digits[1] == digits[2] && digits[1] !== digits[3] && digits[2] !== digits[0]) {
        return true;
    }
    if (digits[2] == digits[3] && digits[2] !== digits[4] && digits[3] !== digits[1]) {
        return true;
    }
    if (digits[3] == digits[4] && digits[3] !== digits[5] && digits[4] !== digits[2]) {
        return true;
    }
    if (digits[4] == digits[5] && digits[4] !== digits[3] && digits[5] !== digits[3]) {
        return true;
    }

    return false;
};

const test = (x) => {
    const digits = x
        .toString()
        .split('')
        .map(Number);

    return digits.length == 6 && neverDescreases(digits) && includesDouble(digits);
};

const f1 = (min, max) => {
    let count = 0;

    for (let i = min; i <= max; i++) {
        if (test(i)) {
            // console.log(i);
            count++;
        }
    }

    return count;
};

module.exports = { test, f1 };

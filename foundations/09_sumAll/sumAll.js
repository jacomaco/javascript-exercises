const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";
    let lower = Math.min(a, b);
    let upper = Math.max(a, b);
    let result = 0;

    for (lower; lower <= upper; lower++) {
        result += lower;
    }
    return result;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;

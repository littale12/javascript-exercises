const sumAll = function(beg, end) {
    let sum = 0
    if (end < 0 || beg < 0 || typeof beg !== 'number' || typeof end !== 'number') {
        return "ERROR"
    }
    if (end > beg) {
        for (let i = beg; i <= end; i++) {
            sum += i;
        }
    } else {
        for (let i = end; i <= beg; i++) {
            sum += i;
        }
    }
    return sum
}

module.exports = sumAll
